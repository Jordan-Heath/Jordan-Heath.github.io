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
        forestView.appendChild(CreateDiv("sky"));
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
        pierView.appendChild(CreateDiv("waves"));
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
        this.UpdatePlayerDetails(model);
        this.LoadLocation(LOCATIONS[model.currentLocation]);

        loadingView.style.opacity = 0;

        setTimeout(()=> {
            loadingView.style.display = 'none'
        }, 1000);
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

        this.UpdateCollectionView(model, collectable, combo);
    }

    UpdatePlayerDetails(model) {
        money.innerText = ConvertToCurrency(model.money);
        collected.innerText = model.collected;
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
        collectableTable.removeAttribute("id");

        collectableMessageOutput.appendChild(collectableTable);
    }

    RareCollectableMessage(collectable) {
        collectableMessageOutput.innerHTML = '';

        const collectableTable = CreateCollectableTable(collectable);
        collectableTable.style.boxShadow = `0px 0px 10px 5px var(--rarity-${collectable.rarity})`;
        collectableTable.removeAttribute("id");

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
        const comboTable = CreateComboTable(combo);
        comboTable.style.boxShadow = `0px 0px 10px 5px var(--rarity-${combo.rarity})`;

        achievementMessageOutput.appendChild(comboTable);
        comboTable.removeAttribute("id");

        setTimeout(() => {
            achievementMessageOutput.innerHTML = '';
        }, 6000);
    }

    ErrorMessage(errorString) {
        errorMessageOutput.hidden = false;
        errorMessageOutput.innerText = errorString;
    }
    //#endregion message

    /* menues */
    //#region menues
    UpdateCollectionView(model, collectable, combo) {
        // Check if collectionViewOutput is empty
        if (collectionViewOutput.innerHTML === "") {
            // Run CreateCollectablesSection to populate collectionViewOutput
            collectionViewOutput.appendChild(this.CreateCollectablesSection('City', model.cityCollectables, model.cityCombos));
            collectionViewOutput.appendChild(this.CreateCollectablesSection('Forest', model.forestCollectables, model.forestCombos));
            collectionViewOutput.appendChild(this.CreateCollectablesSection('Pier', model.pierCollectables, model.pierCombos));
            collectionViewOutput.appendChild(this.CreateCollectablesSection('Cave', model.caveCollectables, model.caveCombos));
        } else {
            // If collectionViewOutput is not empty, update the view based on changes in model, collectable, and combo

            // Update or add collectable in the view
            if (collectable) {
                const collectableTableElement = document.getElementById(`${collectable.id}TableElement`);
                if (collectableTableElement) {
                    // If collectable table element exists, replace its contents
                    collectableTableElement.innerHTML = CreateCollectableTable(collectable).innerHTML;
                    collectableTableElement.style.backgroundColor = `var(--rarity-${collectable.discovered ? collectable.rarity : 'empty'})`
                }
            }

            // Update or add combo in the view
            if (combo) {
                const comboTableElement = document.getElementById(`${combo.id}TableElement`);
                if (comboTableElement) {
                    // If combo table element exists, replace its contents
                    comboTableElement.innerHTML = CreateComboTable(combo).innerHTML;
                    comboTableElement.style.backgroundColor = `var(--rarity-${combo.discovered ? combo.rarity : 'empty'})`
                }
            }
        }
    }

    CreateCollectablesSection(title, collectables, combos) {
        const collectablesSection = document.createElement('details');
        collectablesSection.className = 'collectable-section';

        const collectablesTitle = document.createElement("summary");
        collectablesTitle.innerHTML = `${title} Collectables`;
        collectablesTitle.id = `${title}CollectablesTitle`
        collectablesSection.appendChild(collectablesTitle);

        const collectablesGrid = CreateDiv('', 'collectables-grid');
        collectables.forEach(collectable => {
            collectablesGrid.appendChild(CreateCollectableTable(collectable));
        });
        collectablesSection.appendChild(collectablesGrid);

        const CombosSubtitle = document.createElement("h3");
        CombosSubtitle.innerText = `${title} Achievements`;
        collectablesSection.appendChild(CombosSubtitle);

        const combosGrid = CreateDiv('', 'combos-grid');
        combos.forEach(combo => {
            combosGrid.appendChild(CreateComboTable(combo));
        });
        collectablesSection.appendChild(combosGrid)

        return collectablesSection;
    }

    UpdateShopView(model) {
        shopViewOutput.innerHTML = "";
    
        const shopItemsGrid = CreateDiv('', 'shop-items-grid');
    
        model.shopItems.forEach(shopItem => {
            shopItemsGrid.appendChild(CreateShopItemTable(shopItem));
        });
    
        shopViewOutput.appendChild(shopItemsGrid);
    }
    

    UpdateMapView(model) {
        mapViewOutput.innerHTML = "";

        const forestAvailable = model.shopItems.some(shopItem => shopItem.id === 'bugnet' && shopItem.owned);
        const pierAvailable = model.shopItems.some(shopItem => shopItem.id === 'fishingrod' && shopItem.owned);
        const caveAvailable = model.shopItems.some(shopItem => shopItem.id === 'pickaxe' && shopItem.owned);

        const mapLocationsGrid = CreateDiv('', 'map-locations-grid');
        mapLocationsGrid.appendChild(CreateMapTable(LOCATIONS[0], true));
        mapLocationsGrid.appendChild(CreateMapTable(LOCATIONS[1], forestAvailable));
        mapLocationsGrid.appendChild(CreateMapTable(LOCATIONS[2], pierAvailable));
        mapLocationsGrid.appendChild(CreateMapTable(LOCATIONS[3], caveAvailable));
        mapViewOutput.appendChild(mapLocationsGrid);
    }
    //#endregion menues
}