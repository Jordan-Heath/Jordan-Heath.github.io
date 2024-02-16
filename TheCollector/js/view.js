class View {
    constructor() {
        this.LoadLocation(LOCATIONS[0]);
    }

    /* location */
    //#region location
    LoadLocation(location) {
        switch(location) {
            case(LOCATIONS[0]):
                this.DrawCityView();
                break;
            case(LOCATIONS[1]):
                //forest not implemented
                break;
            case(LOCATIONS[2]):
                //pier not implemented
                break;
            case(LOCATIONS[3]):
                //cave not implemented
                break;
        }
    }

    DrawCityView() {
        const cityView = CreateDiv("cityView");

        cityView.appendChild(CreateDiv("pavement"));
        cityView.appendChild(CreateDiv("frontBuildings"));
        cityView.appendChild(CreateDiv("backBuildings"));
        cityView.appendChild(CreateDiv("trees"));
        cityView.appendChild(CreateDiv("characterShadow"));
        cityView.appendChild(CreateDiv("character"));

        backgroundLayers.innerHTML = "";
        backgroundLayers.appendChild(cityView);
    }
    //#endregion location

    Initialize(model) {
        money.innerText = ConvertToCurrency(model.money);
        this.LoadLocation(LOCATIONS[model.currentLocation]);
    }

    Update(model, collectable) {
        this.UpdatePlayerDetails(model);

        if (collectable.numberOwned === 1) {
            this.NewCollectableMessage(collectable);
            //check for combos
        } else if (collectable.rarity > 1)
            this.RareCollectableMessage(collectable);
        else
            this.CommonCollectableMessage(collectable);

        if (!collectionView.hidden)
            this.UpdateCollectionView(model);
    }

    UpdatePlayerDetails(model) {
        money.innerText = ConvertToCurrency(model.money);
    }

    /* Message */
    //#region message
    ClearMessageOutput() {
        messageOutput.innerHTML = "";
    }

    CommonCollectableMessage(collectable) {
        const message = document.createElement("p");
        message.innerHTML = `${collectable.name} (${ConvertToCurrency(collectable.value)})`;
        message.style.backgroundColor = `var(--rarity-${collectable.rarity})`

        messageOutput.appendChild(message);

        setTimeout(this.ClearMessageOutput, 2100);
    }

    RareCollectableMessage(collectable) {
        const collectableTable = CreateCollectableTable(collectable);
        collectableTable.style.boxShadow = `0px 0px 10px 5px var(--rarity-${collectable.rarity})`;

        messageOutput.appendChild(collectableTable);
    }

    NewCollectableMessage(collectable) {
        const collectableTable = CreateCollectableTable(collectable);
        collectableTable.createTFoot().innerHTML = 'NEW';
        collectableTable.style.boxShadow = `0px 0px 10px 5px var(--rarity-${collectable.rarity})`;

        messageOutput.appendChild(collectableTable);
    }

    CustomMessage(messageString) {
        const message = document.createElement("p");
        message.innerText = messageString;
        message.style.backgroundColor = `gold`

        messageOutput.appendChild(message);
    }
    //#endregion message

    /* menues */
    //#region menues
    UpdateCollectionView(model) {
        collectionViewOutput.innerHTML = "";

        let cityCollectablesTitle = CreateDiv('', 'collectablesGridTitle');
        cityCollectablesTitle.innerHTML = `<h2>City Collection</h2>`;
        collectionViewOutput.appendChild(cityCollectablesTitle);

        /*
        let cityCollectablesSubtitle = CreateDiv('', 'collectablesGridSubtitle');
        cityCollectablesSubtitle.innerHTML = `<h3>Colletion</h3>`;
        collectionViewOutput.appendChild(cityCollectablesSubtitle);
        */

        let cityCollectablesGrid = CreateDiv('', 'collectablesGrid');
        model.cityCollectables.forEach(collectable => {
            cityCollectablesGrid.appendChild(CreateCollectableTable(collectable));
        });
        collectionViewOutput.appendChild(cityCollectablesGrid)

        let cityCombosSubtitle = CreateDiv('', 'collectablesGridSubtitle');
        cityCombosSubtitle.innerHTML = `<h3>Achievements</h3>`;
        collectionViewOutput.appendChild(cityCombosSubtitle);

        let cityCombosGrid = CreateDiv('', 'combosGrid');
        model.cityCombos.forEach(combo => {
            cityCombosGrid.appendChild(CreateComboTable(combo));
        });
        collectionViewOutput.appendChild(cityCombosGrid)
    }

    UpdateShopView(model) {
        shopItemsGrid.innerHTML = "";

        model.shopItems.forEach(shopItem => {
            shopItemsGrid.appendChild(CreateShopItemTable(shopItem));
        });
    }

    UpdateMapView(model) {
        mapViewOutput.innerHTML = "";

        let cityAvailable = true;
        let forestAvailable = false;
        let pierAvailable = false;
        let caveAvailable = false;

        model.shopItems.forEach(shopItem => {
            if(shopItem.id === 'bugnet' && shopItem.owned)
                forestAvailable = true;
            if(shopItem.id === 'fishingrod' && shopItem.owned)
                pierAvailable = true;
            if(shopItem.id === 'pickaxe' && shopItem.owned)
                caveAvailable = true;
        });

        mapViewOutput.appendChild(CreateMapTable(LOCATIONS[0], cityAvailable));
        mapViewOutput.appendChild(CreateMapTable(LOCATIONS[1], forestAvailable));
        mapViewOutput.appendChild(CreateMapTable(LOCATIONS[2], pierAvailable));
        mapViewOutput.appendChild(CreateMapTable(LOCATIONS[3], caveAvailable));
    }
    //#endregion menues
}