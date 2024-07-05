class Model {
    constructor() {
        this.currentLocation = LOCATIONS[0];

        this.cityCollectables = [];
        this.cityCombos = [];
        this.forestCollectables = [];
        this.forestCombos = [];
        this.pierCollectables = [];
        this.pierCombos = [];
        this.caveCollectables = [];
        this.caveCombos = [];

        this.shopItems = [];

        this.money = 0;
        this.collected = 0;
    }

    //#region initialize
    async Initialize() {
        try {
            this.cityCollectables = await this.InitializeCollectables(LOCATIONS[0]);
            this.cityCombos = await this.InitializeCombos(LOCATIONS[0]);

            this.forestCollectables = await this.InitializeCollectables(LOCATIONS[1]);
            this.forestCombos = await this.InitializeCombos(LOCATIONS[1]);

            this.pierCollectables = await this.InitializeCollectables(LOCATIONS[2]);
            this.pierCombos = await this.InitializeCombos(LOCATIONS[2]);

            this.caveCollectables = await this.InitializeCollectables(LOCATIONS[3]);
            this.caveCombos = await this.InitializeCombos(LOCATIONS[3]);

            this.InitializeShop();

            this.InitializeImages();

            console.log('Initialization completed.');
        } catch (error) {
            console.error('Error during initialization:', error);
        }
    }

    async InitializeCollectables(location) {
        let collectables = [];
        try {
            let data = COLLECTABLES_JSON[location];

            collectables = data.map(collectableData => new Collectable(
                collectableData.location,
                collectableData.id,
                collectableData.name,
                collectableData.rarity,
                collectableData.value
            ));
            //console.log(`Initialized ${location}Combos from JSON data:`, collectables);
        } catch (error) {
            console.error(`Error initializing ${location}Data:`, error);
        }
        return collectables;
    }

    async InitializeCombos(location) {
        let combos = [];
        try {
            let data = COMBOS_JSON[location];
    
            combos = data.map(comboData => new CollectableCombo(
                comboData.location,
                comboData.id,
                comboData.name,
                comboData.description,
                comboData.rarity,
                comboData.value,
                comboData.requirements
            ));
            //console.log(`Initialized ${location}Combos from JSON data:`, combos);
        } catch (error) {
            console.error(`Error initializing ${location}Data:`, error);
        }
        return combos;
    }

    InitializeShop() {
        //zones
        this.shopItems.push(new ShopItem("bugnet", "Bug Net", "Unlock Bughunting in the forest", 75));
        this.shopItems.push(new ShopItem("fishingrod", "Fishing Rod", "Unlock Fishing at the pier", 225));
        this.shopItems.push(new ShopItem("pickaxe", "Pick Axe", "Unlock Mining in the cave", 675));

        //upgrades
        this.shopItems.push(new ShopItem("chutzpah", "Chutzpah", "Collect 20% faster", 150));
        this.shopItems.push(new ShopItem("fence", "Junk Fence", "Earn 50% more", 450));
        this.shopItems.push(new ShopItem("fortuna", "Fortuna's Blessing", "Significantly improve odds for rare items", 1350));

        //remaining
        this.shopItems.push(new ShopItem("missing", "Purchase Missing Item", "If you've got money to burn and a collection to fill", 10000));
    }

    InitializeImages() {
        let loadedImagesCount = 0;
        const totalImages = IMAGE_URLS.length;
    
        IMAGE_URLS.forEach(url => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                loadedImagesCount++;
                if (loadedImagesCount === totalImages) {
                    console.log('Loaded all Images');
                }
            };
            img.onerror = () => {
                console.error(`Failed to load image: ${url}`);
                loadedImagesCount++;
                if (loadedImagesCount === totalImages) {
                    console.log('Loaded all Images');
                }
            };
        });
    }
    //#endregion initialize

    //#region Update
    Update() {
        let selectedCollectable = this.Collect();

        return selectedCollectable;
    }

    Collect() {
        let selectedCollectable;

        //obtain collectable
        const rarityChances = this.RarityChances();
        selectedCollectable = GetRandomCollectable(this.ActiveCollectables(), rarityChances);
        
        //discovery?
        if (!selectedCollectable.discovered) {
            selectedCollectable.discovered = true;
            this.collected += 1;
        }
        
        //add item + money
        selectedCollectable.numberOwned += 1;
        this.AddMoney(selectedCollectable.value);

        return selectedCollectable;
    }

    CheckCombos() {
        let combos =  this.ActiveCombos()

        for (let i = 0; i < combos.length; i++) {
            if (combos[i].requirementsMet(this.ActiveCollectables())) {
                this.money += combos[i].value;
                return combos[i];
            }
        }
    }

    //#endregion Update

    //#region Misc
    ActiveCollectables() {
        switch(this.currentLocation) {
            case(LOCATIONS[0]):
                return this.cityCollectables;
            case(LOCATIONS[1]):
                return this.forestCollectables;
            case(LOCATIONS[2]):
                return this.pierCollectables;
            case(LOCATIONS[3]):
                return this.caveCollectables;
        }
        return false;
    }

    ActiveCombos() {
        switch(this.currentLocation) {
            case(LOCATIONS[0]):
                return this.cityCombos;
            case(LOCATIONS[1]):
                return this.forestCombos;
            case(LOCATIONS[2]):
                return this.pierCombos;
            case(LOCATIONS[3]):
                return this.caveCombos;
        }
        return false;
    }

    Purchase(shopItemId) {
        const result = this.findShopItemById(shopItemId);
    
        if (!result) {
            console.log("Purchaseable item not found");
            return;
        }
    
        if (shopItemId === 'missing') {
            this.purchaseMissingItem(result);
            return;
        }
    
        if (this.money < result.price) {
            console.log("Couldn't afford item");
            return;
        }
    
        this.money -= result.price;
        result.owned = true;
    }

    findShopItemById(shopItemId) {
        return this.shopItems.find(shopItem => shopItem.id === shopItemId);
    }

    purchaseMissingItem(missingShopItem) {
        const undiscoveredCollectables = this.getUndiscoveredCollectables();
        if (undiscoveredCollectables.length === 0) {
            console.log("No undiscovered collectables available");
            missingShopItem.owned = true;
            return;
        }
    
        this.money -= missingShopItem.price;
    
        const selectedCollectable = randomArrayValue(undiscoveredCollectables);
        selectedCollectable.discovered = true;
        this.collected += 1;
        selectedCollectable.numberOwned += 1;
        this.AddMoney(selectedCollectable.value);
    
        const combo = this.CheckCombos();
    
        view.Update(this, selectedCollectable, combo);
        shopView.hidden = true;
    }

    getUndiscoveredCollectables() {
        const allCollectables = [
            ...this.cityCollectables,
            ...this.forestCollectables,
            ...this.pierCollectables,
            ...this.caveCollectables
        ];
        return allCollectables.filter(collectable => !collectable.discovered);
    }
    
    AddMoney(value) {
        this.money += this.shopItems.some(shopItem => shopItem.id === 'fence' && shopItem.owned) ? value*1.5 : value;
    }

    RarityChances() {
        return this.shopItems.some(shopItem => shopItem.id === 'fortuna' && shopItem.owned) ? IMPROVED_RARITY_CHANCE : RARITY_CHANCE;
    }

    SearchInterval() {
        return this.shopItems.some(shopItem => shopItem.id === 'chutzpah' && shopItem.owned) ? IMPROVED_SEARCH_INTERVAL : SEARCH_INTERVAL;
    }
    //#endregion Misc

    //#region SaveFunctions
    ConvertToJson() {
        const serializedCityCollectables = this.SerializeCollectables(this.cityCollectables);
        const serializedForestCollectables = this.SerializeCollectables(this.forestCollectables);
        const serializedPierCollectables = this.SerializeCollectables(this.pierCollectables);
        const serializedCaveCollectables = this.SerializeCollectables(this.caveCollectables);
    
        const serializedShopItems = this.SerializeShopItems();
    
        return JSON.stringify({
            cityCollectables: serializedCityCollectables,
            forestCollectables: serializedForestCollectables,
            pierCollectables: serializedPierCollectables,
            caveCollectables: serializedCaveCollectables,
            shopItems: serializedShopItems,
            currentLocation: this.currentLocation,
            money: this.money,
            collected: this.collected
        });
    }
    
    SerializeCollectables(collectables) {
        return collectables.reduce((acc, collectable) => {
            acc[collectable.id] = collectable.numberOwned;
            return acc;
        }, {});
    }
    
    SerializeShopItems() {
        return this.shopItems.reduce((acc, shopItem) => {
            acc[shopItem.id] = shopItem.owned;
            return acc;
        }, {});
    }

    LoadFromJson(jsonString) {
        const jsonData = JSON.parse(jsonString);
    
        // Load collectables and determine combos for each location
        this.LoadAndProcessLocationData(jsonData.cityCollectables, this.cityCollectables, this.cityCombos);
        this.LoadAndProcessLocationData(jsonData.forestCollectables, this.forestCollectables, this.forestCombos);
        this.LoadAndProcessLocationData(jsonData.pierCollectables, this.pierCollectables, this.pierCombos);
        this.LoadAndProcessLocationData(jsonData.caveCollectables, this.caveCollectables, this.caveCombos);
    
        // Load shop items
        if (jsonData.shopItems) {
            this.shopItems.forEach(item => {
                item.owned = jsonData.shopItems[item.id] ?? item.owned;
            });
        }
    
        // Update current location and money if provided
        this.currentLocation = jsonData.currentLocation ?? this.currentLocation;
        this.money = jsonData.money ?? this.money;
        this.collected = jsonData.collected ?? this.collected;
    }

    LoadAndProcessLocationData(jsonCollectables, collectables, combos) {
        if (jsonCollectables) {
            collectables.forEach(collectable => {
                collectable.numberOwned = jsonCollectables[collectable.id] ?? collectable.numberOwned; // Use optional chaining and nullish coalescing
                collectable.discovered = collectable.numberOwned > 0; // Set discovered flag
            });
        }
    
        // Determine combos for the location
        combos.forEach(combo => {
            combo.requirementsMet(collectables);
        });
    }

    SaveToLocalStorage() {
        try {
            const dataString = this.ConvertToJson();
            localStorage.setItem('collectorData', dataString);
            console.log('Saved to localStorage');
        } catch (error) {
            console.error('Error saving data to localStorage:', error);
        }
    }
    
    LoadFromLocalStorage() {
        try {
            const dataString = localStorage.getItem('collectorData');
            if (dataString) {
                this.LoadFromJson(dataString);
                console.log('Loaded from localStorage');
                return true;
            }
        } catch (error) {
            console.error('Error loading data from localStorage:', error);
        }
        
        console.log("Didn't load from localStorage");
        return false;
    }
    

    ImportSave(file) {
        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                try {
                    this.LoadFromJson(reader.result)
                    console.log('successfully imported player:', reader.result);
                } catch (error) {
                    console.error('Error importing player:', error);
                }
            };

            reader.readAsText(file);
        }
    }

    ExportSave() {
        const blob = new Blob([this.ConvertToJson()], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `TheCollectorSave.json`;
        link.click();
    }
    
    //#endregion SaveFunctions
}

class Collectable {
    constructor(location, id, name, rarity, value) {
        this.location = location;
        this.id = id;
        this.name = name;
        this.rarity = rarity;
        this.value = value;

        this.discovered = false;
        this.numberOwned = 0;
    }
}

class CollectableCombo {
    constructor(location, id, name, description, rarity, value, requirements) {
        this.location = location;
        this.id = id;
        this.name = name;
        this.description = description;
        this.rarity = rarity;
        this.value = value;
        this.requirements = requirements;

        this.discovered = false;
    }

    // returns whether the combo is newly discovered
    requirementsMet(collectables) {
        //dont rediscover
        if (this.discovered) return false;

        //check for requirements
        let result = true;
        this.requirements.forEach(requirement => {
            let collectable = collectables.find(collectable => collectable.id === requirement);
            if (!collectable.discovered) result = false;
        });

        //requirements met
        this.discovered = result;
        return result;
    }
}

class ShopItem {
    constructor(id, name, description, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.owned = false;
    }
}