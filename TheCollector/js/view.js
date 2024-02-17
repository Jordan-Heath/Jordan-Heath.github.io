class View {
    constructor() { }

    /* location */
    //#region location
    LoadLocation(location) {
        switch(location) {
            case(LOCATIONS[0]):
                this.DrawCityView();
                break;
            case(LOCATIONS[1]):
                this.DrawForestView();
                break;
            case(LOCATIONS[2]):
                this.DrawPierView();
                break;
            case(LOCATIONS[3]):
                this.DrawCaveView();
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

    DrawForestView() {
        const forestView = CreateDiv("forestView");

        forestView.appendChild(CreateDiv("forestFloor"));
        forestView.appendChild(CreateDiv("frontTrees"));
        forestView.appendChild(CreateDiv("backTrees"));
        forestView.appendChild(CreateDiv("canopy"));
        let character = CreateDiv("character")
        character.appendChild(CreateDiv("bugnet"));
        forestView.appendChild(character);

        backgroundLayers.innerHTML = "";
        backgroundLayers.appendChild(forestView);
    }

    DrawPierView() {
        const pierView = CreateDiv("pierView");

        pierView.appendChild(CreateDiv("sky"));
        pierView.appendChild(CreateDiv("sun"));
        pierView.appendChild(CreateDiv("oceanFloor"));
        pierView.appendChild(CreateDiv("lowerFishLayer"));
        pierView.appendChild(CreateDiv("upperFishLayer"));
        pierView.appendChild(CreateDiv("waves")); //transparent layer that goes over everything below
        pierView.appendChild(CreateDiv('pier'));
        pierView.appendChild(CreateDiv("characterShadow"));
        let character = CreateDiv("character")
        character.appendChild(CreateDiv("fishingrod"));
        pierView.appendChild(character);

        backgroundLayers.innerHTML = "";
        backgroundLayers.appendChild(pierView);
    }

    DrawCaveView() {
        const caveView = CreateDiv("caveView");
        
        caveView.appendChild(CreateDiv('caveWalls'));
        caveView.appendChild(CreateDiv('caveFloor'));
        caveView.appendChild(CreateDiv("characterLight"));
        let character = CreateDiv("character")
        character.appendChild(CreateDiv("pickaxe"));
        caveView.appendChild(character);
        caveView.appendChild(CreateDiv('foregroundRocks'));

        backgroundLayers.innerHTML = "";
        backgroundLayers.appendChild(caveView);
    }
    //#endregion location

    Initialize(model) {
        money.innerText = ConvertToCurrency(model.money);
        this.LoadLocation(LOCATIONS[model.currentLocation]);
    }

    Update(model, collectable, combo) {
        this.UpdatePlayerDetails(model);

        if (collectable.numberOwned === 1) {
            this.NewCollectableMessage(collectable);
        } else if (collectable.rarity > 1) {
            this.RareCollectableMessage(collectable);
        } else {
            this.CommonCollectableMessage(collectable);
        }

        if (combo) {
            this.AchivementMessage(combo);
        }

        if (!collectionView.hidden) {
            this.UpdateCollectionView(model);
        }
    }

    UpdatePlayerDetails(model) {
        money.innerText = ConvertToCurrency(model.money);
    }

    /* Message */
    //#region message
    NewCollectableMessage(collectable) {
        collectableMessageOutput.innerHTML = '';

        const message = document.createElement("p");
        message.innerHTML = 'NEW';
        collectableMessageOutput.appendChild(message);

        const collectableTable = CreateCollectableTable(collectable);
        collectableTable.style.boxShadow = `0px 0px 10px 5px var(--rarity-${collectable.rarity})`;

        collectableMessageOutput.appendChild(collectableTable);
    }

    RareCollectableMessage(collectable) {
        collectableMessageOutput.innerHTML = '';

        const collectableTable = CreateCollectableTable(collectable);
        collectableTable.style.boxShadow = `0px 0px 10px 5px var(--rarity-${collectable.rarity})`;

        collectableMessageOutput.appendChild(collectableTable);
    }

    CommonCollectableMessage(collectable) {
        collectableMessageOutput.innerHTML = '';

        const message = document.createElement("p");
        message.innerHTML = collectable.name;
        message.style.backgroundColor = `var(--rarity-${collectable.rarity})`

        collectableMessageOutput.appendChild(message);
    }

    SaveMessage(messageString) {
        saveMessageOutput.innerHTML = '';

        const message = document.createElement("p");
        message.innerText = messageString;

        saveMessageOutput.appendChild(message);
    }

    AchivementMessage(combo) {
        achievementMessageOutput.innerHTML = '';

        const comboTable = CreateComboTable(combo);
        comboTable.style.boxShadow = `0px 0px 10px 5px var(--rarity-${combo.rarity})`;

        achievementMessageOutput.appendChild(comboTable);
    }
    //#endregion message

    /* menues */
    //#region menues
    UpdateCollectionView(model) {
        
        //TODO: rewrite this method to modify the content of the page rather than re-write the page
        
        collectionViewOutput.innerHTML = "";

        collectionViewOutput.appendChild(this.CreateCollectablesSection('City', model.cityCollectables, model.cityCombos));
        collectionViewOutput.appendChild(this.CreateCollectablesSection('Forest', model.forestCollectables, model.forestCombos));
        collectionViewOutput.appendChild(this.CreateCollectablesSection('Pier', model.pierCollectables, model.pierCombos));
        collectionViewOutput.appendChild(this.CreateCollectablesSection('Cave', model.caveCollectables, model.caveCombos));
    }

    CreateCollectablesSection(title, collectables, combos) {
        let collectablesSection = CreateDiv('', 'collectable-section');

        let collectablesTitle = document.createElement("h2");
        collectablesTitle.innerText = `${title} Collectables`;
        collectablesSection.appendChild(collectablesTitle);

        let collectablesGrid = CreateDiv('', 'collectables-grid');
        collectables.forEach(collectable => {
            collectablesGrid.appendChild(CreateCollectableTable(collectable));
        });
        collectablesSection.appendChild(collectablesGrid);

        let CombosSubtitle = document.createElement("h3");
        CombosSubtitle.innerText = `${title} Achievements`;
        collectablesSection.appendChild(CombosSubtitle);

        let combosGrid = CreateDiv('', 'combos-grid');
        combos.forEach(combo => {
            combosGrid.appendChild(CreateComboTable(combo));
        });
        collectablesSection.appendChild(combosGrid)

        return collectablesSection;
    }

    UpdateShopView(model) {
        shopViewOutput.innerHTML = "";

        let shopItemsGrid = CreateDiv('', 'shop-items-grid')
        model.shopItems.forEach(shopItem => {
            shopItemsGrid.appendChild(CreateShopItemTable(shopItem));
        });
        shopViewOutput.appendChild(shopItemsGrid);
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

        const mapLocationsGrid = CreateDiv('', 'map-locations-grid');
        mapLocationsGrid.appendChild(CreateMapTable(LOCATIONS[0], cityAvailable));
        mapLocationsGrid.appendChild(CreateMapTable(LOCATIONS[1], forestAvailable));
        mapLocationsGrid.appendChild(CreateMapTable(LOCATIONS[2], pierAvailable));
        mapLocationsGrid.appendChild(CreateMapTable(LOCATIONS[3], caveAvailable));
        mapViewOutput.appendChild(mapLocationsGrid);
    }
    //#endregion menues
}