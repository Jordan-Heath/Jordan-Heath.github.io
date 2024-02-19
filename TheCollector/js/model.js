class Model {
    constructor() {
        this.currentLocation = LOCATIONS[0];

        this.cityCollectables = this.InitializeCollectables(LOCATIONS[0]);
        this.cityCombos = this.InitializeCombos(LOCATIONS[0]);

        this.forestCollectables = this.InitializeCollectables(LOCATIONS[1]);
        this.forestCombos = this.InitializeCombos(LOCATIONS[1]);

        this.pierCollectables = this.InitializeCollectables(LOCATIONS[2]);
        this.pierCombos = this.InitializeCombos(LOCATIONS[2]);

        this.caveCollectables = this.InitializeCollectables(LOCATIONS[3]);
        this.caveCombos = this.InitializeCombos(LOCATIONS[3]);

        this.shopItems = [];
        this.InitializeShop();

        this.money = 0;
        this.collected = 0;
    }

    //#region initialize
    InitializeCollectables(location) {
        let collectables;
        try {
            //fetch the json file
            //const jsonFile = fetch(`../data/${location}Collectables.json`);
            const jsonFile = COLLECTABLES_JSON[location];

            const collectableJsonData = JSON.parse(jsonFile);
            collectables = collectableJsonData.map(collectableData => new Collectable(
                collectableData.location,
                collectableData.id,
                collectableData.name,
                collectableData.rarity,
                collectableData.value
            ));
            console.log(`Initialized ${location}Collectables from JSON data:`, collectables);
        } catch (error) {
            console.error(`Error initializing ${location}Data from JSON:`, error);
        }
        return collectables;
    }

    InitializeCombos(location) {
        let combos = [];
        try {
            //fetch the json file
            //const jsonFile = fetch(`../data/${location}Combos.json`);
            const jsonFile = COMBOS_JSON[location];

            const cityCombosData = JSON.parse(jsonFile);
            combos = cityCombosData.map(comboData => new CollectableCombo(
                comboData.location,
                comboData.id,
                comboData.name,
                comboData.description,
                comboData.rarity,
                comboData.value,
                comboData.requirements
            ));
            console.log(`Initialized ${location}Combos from JSON data:`, combos);
        } catch (error) {
            console.error(`Error initializing ${location}Data from JSON:`, error);
        }
        return combos;
    }

    InitializeShop() {
        //this.items.push(new ShopItem("", "", "", 0));
        this.shopItems.push(new ShopItem("bugnet", "Bug Net", "Unlock Bughunting in the forest", 75));
        this.shopItems.push(new ShopItem("fishingrod", "Fishing Rod", "Unlock Fishing at the pier", 225));
        this.shopItems.push(new ShopItem("pickaxe", "Pick Axe", "Unlock Mining in the cave", 675));

        this.shopItems.push(new ShopItem("chutzpah", "Chutzpah", "Collect 20% faster", 150));
        this.shopItems.push(new ShopItem("fence", "Junk Fence", "Earn 50% more", 450));
        this.shopItems.push(new ShopItem("fortuna", "Fortuna's Blessing", "Significantly improve odds for rare items", 1350));
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
        //find the upgrade
        let result;
        this.shopItems.forEach(shopItem => {
            if (shopItem.id === shopItemId)
                result = shopItem;
        });

        //make the transaction
        if (result && this.money >= result.price) {
            this.money -= result.price;
            result.owned = true;
        } else {
            if (!result) console.log("purchaseable item not found");
            if (this.money < result.price) console.log("couldn't afford item");
        }
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
                item.owned = jsonData.shopItems[item.id] ?? item.owned; // Use optional chaining and nullish coalescing
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

    SaveToCookies() {
        try {
            const dataString = this.ConvertToJson();
            const expirationDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
            const secureFlag = this.isSecureProtocol() ? '; secure' : '';
    
            document.cookie = `userData=${encodeURIComponent(dataString)}; expires=${expirationDate}; path=/${secureFlag}; samesite=strict`;
            console.log('Saved to cookies');
        } catch (error) {
            console.error('Error saving data to cookies:', error);
        }
    }

    LoadFromCookies() {
        try {
            const cookieData = document.cookie.split('; ').find(row => row.startsWith('userData='));
            if (cookieData) {
                const dataString = decodeURIComponent(cookieData.split('=')[1]);
                this.LoadFromJson(dataString);
                console.log('Loaded from cookies');
                return true;
            }
        } catch (error) {
            console.error('Error loading data from cookies:', error);
        }
    
        console.log("Didn't load from cookies");
        return false;
    }
    
    isSecureProtocol() {
        return window.location.protocol === 'https:';
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