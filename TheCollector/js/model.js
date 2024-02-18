class Model {
    constructor() {
        this.currentLocation = LOCATIONS[0];

        this.cityCollectables = this.InitializeCollectables(LOCATIONS[0]);
        this.cityCombos = this.InitializeCombos(LOCATIONS[0]);

        this.forestCollectables = [];
        this.forestCombos = [];
        this.InitializeForestCollectables();

        this.pierCollectables = [];
        this.pierCombos = [];
        this.InitializePierCollectables();

        this.caveCollectables = [];
        this.caveCombos = [];
        this.InitializeCaveCollectables();

        this.shopItems = [];
        this.InitializeShop();

        this.money = 0;
    }

    //#region initialize
    InitializeCollectables(location) {
        let collectables;
        try {
            //fetch the json file
            //const jsonFile = fetch(`../data/${location}Collectables.json`);
            const jsonFile = CITY_COLLECTABLE_JSON_DATA;

            const collectableJsonData = JSON.parse(jsonFile);
            collectables = collectableJsonData.map(collectableData => new Collectable(
                collectableData.location,
                collectableData.id,
                collectableData.name,
                collectableData.rarity,
                collectableData.value
            ));
            console.log('Initialized cityCollectables from JSON data:', collectables);
        } catch (error) {
            console.error(`Error initializing ${location} Data from JSON:`, error);
        }
        return collectables;
    }

    InitializeCombos(location) {
        let combos = [];
        try {
            //fetch the json file
            //const jsonFile = fetch(`../data/${location}Combos.json`);
            const jsonFile = CITY_COMBO_JSON_DATA;

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
            console.log('Initialized cityCombos from JSON data:', combos);
        } catch (error) {
            console.error(`Error initializing ${location} Data from JSON:`, error);
        }
        return combos;
    }

    InitializeForestCollectables() {
        //Format: //this.forestCollectables.push(new Collectable("forest", "", "", 0, 0));
        // 5-9 poors
        this.forestCollectables.push(new Collectable("forest", "leaf", "Leaf", 0, 0.05));
        this.forestCollectables.push(new Collectable("forest", "stick", "Stick", 0, 0.06));
        this.forestCollectables.push(new Collectable("forest", "sap", "Sap", 0, 0.05));
        this.forestCollectables.push(new Collectable("forest", "cockroach", "Cockroach", 0, 0.05));
        this.forestCollectables.push(new Collectable("forest", "fly", "Fly", 0, 0.05));

        // 4-8 commons
        this.forestCollectables.push(new Collectable("forest", "dungbeetle", "Dung Beetle", 1, 0.10));
        this.forestCollectables.push(new Collectable("forest", "cicada", "Cicada", 1, 0.20));
        this.forestCollectables.push(new Collectable("forest", "ant", "Ant", 1, 0.30));
        this.forestCollectables.push(new Collectable("forest", "bee", "Bee", 1, 0.40));

        // 4-7 uncommons
        this.forestCollectables.push(new Collectable("forest", "moth", "Moth", 2, 0.50));
        this.forestCollectables.push(new Collectable("forest", "weevil", "Weevil", 2, 0.60));
        this.forestCollectables.push(new Collectable("forest", "aphid", "Aphid", 2, 0.70))
        this.forestCollectables.push(new Collectable("forest", "caterpillar", "Caterpillar", 2, 0.80));

        // 3-6 rares
        this.forestCollectables.push(new Collectable("forest", "butterfly", "Butterfly", 3, 1));
        this.forestCollectables.push(new Collectable("forest", "firefly", "Fire fly", 3, 2));
        this.forestCollectables.push(new Collectable("forest", "spider", "Spider", 3, 3));

        // 3-5 epics
        this.forestCollectables.push(new Collectable("forest", "stickbug", "Stick Bug", 4, 5));
        this.forestCollectables.push(new Collectable("forest", "mantis", "Preying Mantis", 4, 6));
        this.forestCollectables.push(new Collectable("forest", "dragonfly", "Dragonfly", 4, 7));

        // 2-4 legendaries
        this.forestCollectables.push(new Collectable("forest", "leafinsect", "Leaf Insect", 5, 10));
        this.forestCollectables.push(new Collectable("forest", "christmasbeetle", "Christmas Beetle", 5, 20));

        // 2-3 artifacts
        this.forestCollectables.push(new Collectable("forest", "chalice", "Silver Chalice", 6, 50));
        this.forestCollectables.push(new Collectable("forest", "ancientbox", "Ancient Box", 6, 60));

        // 1-2 heirlooms
        this.forestCollectables.push(new Collectable("forest", "goldenidol", "Golden Idol", 7, 100));

        // combos
        //format //this.forestCombos.push(new CollectableCombo("forest", "", "", "", 0, 0, ["", ""]));
        this.forestCombos.push(new CollectableCombo("forest", "stickleaf", "Stick and Leaf", "[Stick + Leaf]\nNatures Fingers", 0, 0.50, ["stick", "leaf"]));
        //level 2 combo
        //level 3 combo
        //level 4 combo
        this.forestCombos.push(new CollectableCombo("forest", "stickleaf2", "Stick and Leaf?", "[Stick Bug + Leaf Insect]\nThey wriggle unsettlingly", 6, 100, ["stickbug", "leafinsect"]));
        //level 6 combo
        this.forestCombos.push(new CollectableCombo("forest", "goldenarc", "Golden Arc", "[Ancient Box + Golden Idol]\nMy face feels tingley", 7, 1000, ["ancientbox", "goldenidol"]));
    }

    InitializePierCollectables() {
        //Format: //this.pierCollectables.push(new Collectable("pier", "", "", 0, 0));
        // 5-9 poors
        this.pierCollectables.push(new Collectable("pier", "boot", "Leather Boot", 0, 0.10));
        this.pierCollectables.push(new Collectable("pier", "driftwood", "Drift Wood", 0, 0.20));
        this.pierCollectables.push(new Collectable("pier", "tire", "Tire", 0, 0.30));
        this.pierCollectables.push(new Collectable("pier", "seaglass", "Sea Glass", 0, 0.40));
        this.pierCollectables.push(new Collectable("pier", "netting", "Netting", 0, 0.50));

        // 4-8 commons
        this.pierCollectables.push(new Collectable("pier", "carp", "Carp", 1, 0.60));
        this.pierCollectables.push(new Collectable("pier", "scallop", "Scallop", 1, 0.70));
        this.pierCollectables.push(new Collectable("pier", "prawn", "Prawn", 1, 0.80));
        this.pierCollectables.push(new Collectable("pier", "crab", "Crab", 1, 0.90));

        // 4-7 uncommons
        this.pierCollectables.push(new Collectable("pier", "mackerel", "Mackerel", 2, 1));
        this.pierCollectables.push(new Collectable("pier", "starfish", "Starfish", 2, 2));
        this.pierCollectables.push(new Collectable("pier", "jellyfish", "Jellyfish", 2, 3));
        this.pierCollectables.push(new Collectable("pier", "lanternfish", "Lanternfish", 2, 4));

        // 3-6 rares
        this.pierCollectables.push(new Collectable("pier", "turtle", "Turtle", 3, 5));
        this.pierCollectables.push(new Collectable("pier", "eel", "Eel", 3, 6));
        this.pierCollectables.push(new Collectable("pier", "nautilus", "Nautilus", 3, 7));

        // 3-5 epics
        this.pierCollectables.push(new Collectable("pier", "salmon", "Salmon", 4, 10));
        this.pierCollectables.push(new Collectable("pier", "snapper", "Red Snapper", 4, 20));
        this.pierCollectables.push(new Collectable("pier", "lobster", "Lobster", 4, 30));

        // 2-4 legendaries
        this.pierCollectables.push(new Collectable("pier", "tuna", "Tuna", 5, 50));
        this.pierCollectables.push(new Collectable("pier", "octopus", "Octopus", 5, 60));

        // 2-3 artifacts
        this.pierCollectables.push(new Collectable("pier", "pearl", "Pearl", 6, 100));
        this.pierCollectables.push(new Collectable("pier", "shark", "Shark", 6, 200));

        // 1-2 heirlooms
        this.pierCollectables.push(new Collectable("pier", "treasure", "Buried Treasure", 7, 500));

        // combos
        //format //this.pierCombos.push(new CollectableCombo("pier", "", "", "[]\n", 0, 0, ["", ""]));
        //level 2 combo
        //level 3 combo
        this.pierCombos.push(new CollectableCombo("pier", "shelltrio", "Shell Trio", "[Prawn + Crab + Lobster]\nHardest achievement here", 4, 300, ["prawn", "crab", "lobster"]));
        this.pierCombos.push(new CollectableCombo("pier", "bento", "Bento Box", "[Tuna + Salmon + Red Snapper]\nAmazing combo served raw", 5, 500, ["tuna", "salmon", "snapper"]));
        this.pierCombos.push(new CollectableCombo("pier", "fishandchips", "Fish and Chips", "[Octopus + Shark]\nCalamari and flake", 6, 2000, ["octopus", "shark"]));
        this.pierCombos.push(new CollectableCombo("pier", "plnder", "Plunder", "[Pearl + Treasure]\nThe seas bounties are yours now", 7, 5000, ["pearl", "treasure"]));
    }

    InitializeCaveCollectables() {
        //Format: //this.caveCollectables.push(new Collectable("cave", "", "", 0, 0));
        // 5-9 poors
        this.caveCollectables.push(new Collectable("cave", "refuse", "Animal refuse", 0, 0.50));
        this.caveCollectables.push(new Collectable("cave", "rope", "Rope", 0, 0.60));
        this.caveCollectables.push(new Collectable("cave", "lantern", "Oil Latern", 0, 0.70));
        this.caveCollectables.push(new Collectable("cave", "vase", "Broken Vase", 0, 0.80));
        this.caveCollectables.push(new Collectable("cave", "coal", "Coal", 0, 0.90));

        // 4-8 commons
        this.caveCollectables.push(new Collectable("cave", "agate", "Agate", 1, 1));
        this.caveCollectables.push(new Collectable("cave", "obsidian", "Obsidian", 1, 2));
        this.caveCollectables.push(new Collectable("cave", "tinore", "Tin Ore", 1, 3));
        this.caveCollectables.push(new Collectable("cave", "ironore", "Iron Ore", 1, 4));

        // 4-7 uncommons
        this.caveCollectables.push(new Collectable("cave", "tigerseye", "Tigers-eye", 2, 5));
        this.caveCollectables.push(new Collectable("cave", "copperore", "Copper Ore", 2, 6));
        this.caveCollectables.push(new Collectable("cave", "fluorite", "Fluorite", 2, 7));
        this.caveCollectables.push(new Collectable("cave", "calcite", "Calcite crystals", 2, 8));

        // 3-6 rares
        this.caveCollectables.push(new Collectable("cave", "opal", "Opal", 3, 10));
        this.caveCollectables.push(new Collectable("cave", "missinglink", "Missing Link", 3, 20));
        this.caveCollectables.push(new Collectable("cave", "emerald", "Emerald", 3, 30));

        // 3-5 epics
        this.caveCollectables.push(new Collectable("cave", "amethyst", "Amethyst", 4, 50));
        this.caveCollectables.push(new Collectable("cave", "silverore", "Silver Ore", 4, 60));
        this.caveCollectables.push(new Collectable("cave", "sapphire", "Sapphire", 4, 70));

        // 2-4 legendaries
        this.caveCollectables.push(new Collectable("cave", "ruby", "Ruby", 5, 100));
        this.caveCollectables.push(new Collectable("cave", "fossil", "Fossil", 5, 200));

        // 2-3 artifacts
        this.caveCollectables.push(new Collectable("cave", "goldore", "Gold Ore", 6, 500));
        this.caveCollectables.push(new Collectable("cave", "diamond", "Diamond", 6, 600));

        // 1-2 heirlooms
        this.caveCollectables.push(new Collectable("cave", "platinumore", "Platinum Ore", 7, 1000));

        // combos
        //format //this.caveCombos.push(new CollectableCombo("cave", "", "", "[]\n", 0, 0, ["", ""]));
        this.caveCombos.push(new CollectableCombo("cave", "bronze", "Bronze", "[Tin + Copper]\nI learnt that in Runescape", 2, 60, ["tinore", "copperore"]));
        this.caveCombos.push(new CollectableCombo("cave", "archeology", "Archeology", "[Missing Link + Broken Vase]\nLooks useless to me, I don't get it", 3, 200, ["missinglink", "vase"]));
        //level 4 combo
        //level 5 combo
        this.caveCombos.push(new CollectableCombo("cave", "minecraft", "Minecraft", "[Coal + Iron + Diamond]\nOn to the nether!", 6, 6000, ["coal", "ironore", "diamond"]));
        this.caveCombos.push(new CollectableCombo("cave", "banking", "Fundamentals Of Banking", "[Copper + Silver + Gold + Platinum]\nThe foundations of our currency", 7, 10000, ["copperore", "silverore", "goldore", "platinumore"]));
    }

    InitializeShop() {
        //this.items.push(new ShopItem("", "", "", 0));
        this.shopItems.push(new ShopItem("bugnet", "Bug Net", "Unlock Bughunting in the forest", 75));
        this.shopItems.push(new ShopItem("fishingrod", "Fishing Rod", "Unlock Fishing at the pier", 300));
        this.shopItems.push(new ShopItem("pickaxe", "Pick Axe", "Unlock Mining in the cave", 1200));
        //this.items.push(new ShopItem("coffee", "Coffee Machine", "Unlock your true potential", 40));
    }
    //#endregion initialize

    Update() {
        let selectedCollectable = this.Collect();

        return selectedCollectable;
    }

    Collect() {
        let selectedCollectable;

        //obtain collectable
        selectedCollectable = GetRandomCollectable(this.ActiveCollectables());
        
        //increment and return
        selectedCollectable.discovered = true;
        selectedCollectable.numberOwned += 1;
        this.money += selectedCollectable.value;
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
            money: this.money
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