class Model {
    constructor() {
        this.currentLocation = LOCATIONS[0];

        this.cityCollectables = [];
        this.cityCombos = [];
        this.InitializeCityCollectables();

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
    InitializeCityCollectables() {
        //Format: //this.cityCollectables.push(new Collectable("city", "", "", 0, 0));

        // 5-9 poors
        this.cityCollectables.push(new Collectable("city", "copper", "Copper Coin", 0, 0.01));
        this.cityCollectables.push(new Collectable("city", "twig", "Twig", 0, 0.02));
        this.cityCollectables.push(new Collectable("city", "plasticbag", "Plastic Bag", 0, 0.03));
        this.cityCollectables.push(new Collectable("city", "pebble", "Pebble", 0, 0.04));
        this.cityCollectables.push(new Collectable("city", "junk1", "Junk 1", 0, 0.05));

        // 4-8 commons
        this.cityCollectables.push(new Collectable("city", "can", "Can", 1, 0.05));
        this.cityCollectables.push(new Collectable("city", "glass", "Glass", 1, 0.06));
        this.cityCollectables.push(new Collectable("city", "chip", "Chip", 1, 0.07));
        this.cityCollectables.push(new Collectable("city", "cigbutt", "Ciggerette Butt", 2, 0.08));

        // 4-7 uncommons
        this.cityCollectables.push(new Collectable("city", "dollar", "Strange Currency", 2, 0.10));
        this.cityCollectables.push(new Collectable("city", "cd", "CD", 2, 0.20));
        this.cityCollectables.push(new Collectable("city", "lottoticket", "Lotto Ticket", 2, 0.30));
        this.cityCollectables.push(new Collectable("city", "junk3", "Junk 3", 2, 0.4));

        // 3-6 rares
        this.cityCollectables.push(new Collectable("city", "silver", "Silver Coin", 3, 0.5));
        this.cityCollectables.push(new Collectable("city", "chips", "Chips", 3, 0.60));
        this.cityCollectables.push(new Collectable("city", "cig", "Full Ciggerette", 3, 0.70));

        // 3-5 epics
        this.cityCollectables.push(new Collectable("city", "vcr", "VCR", 4, 1));
        this.cityCollectables.push(new Collectable("city", "lighter", "Lighter", 4, 2));
        this.cityCollectables.push(new Collectable("city", "junk5", "Junk 5", 4, 3));

        // 2-4 legendaries
        this.cityCollectables.push(new Collectable("city", "gold", "Gold Coin", 5, 5));
        this.cityCollectables.push(new Collectable("city", "cdplayer", "CD Player", 5, 6));

        // 2-3 artifacts
        this.cityCollectables.push(new Collectable("city", "tv", "TV", 6, 10));
        this.cityCollectables.push(new Collectable("city", "junk7", "Junk 7", 6, 20));

        // 1-2 heirlooms
        this.cityCollectables.push(new Collectable("city", "platinum", "Platinum Coin", 7, 50));

        // combos
        //format //this.cityCombos.push(new CollectableCombo("city", "", "", "", 0, 0, ["", ""]));
        this.cityCombos.push(new CollectableCombo("city", "stickstone", "Sticks & Stones", "[Twig + Pebble]\nWords cannot compare", 0, 0.50, ["twig", "pebble"]));
        //level 1 combo
        //level 2 combo
        //level 3 combo
        this.cityCombos.push(new CollectableCombo("city", "litcig", "Nicotine Addiction", "[Full Ciggerette + Lighter]\nA cigerrete you may puff upon", 4, 50, ["cig", "lighter"]));
        this.cityCombos.push(new CollectableCombo("city", "music", "Music", "[CD + CD Player]\nA rapturous auditory experience", 5, 500, ["cd", "cdplayer"]));
        this.cityCombos.push(new CollectableCombo("city", "cinema", "Cinema", "[VCR + TV]\nTape that impresses both the ears and the eyes", 6, 5000, ["vcr", "tv"]));
        this.cityCombos.push(new CollectableCombo("city", "coins", "Coin Collection", "[Copper + Silver + Gold + Platinum]\nA neat set of funny metals", 7, 50000, ["copper", "silver", "gold", "platinum"]));
    }

    InitializeForestCollectables() {
        //Format: //this.forestCollectables.push(new Collectable("forest", "", "", 0, 0));
        // 5-9 poors
        this.forestCollectables.push(new Collectable("forest", "leaf", "Leaf", 0, 0.05));
        this.forestCollectables.push(new Collectable("forest", "stick", "Stick", 0, 0.06));
        this.forestCollectables.push(new Collectable("forest", "bug1", "Bug 1", 0, 0.05));
        this.forestCollectables.push(new Collectable("forest", "bug11", "Bug 1.1", 0, 0.05));
        this.forestCollectables.push(new Collectable("forest", "bug12", "Bug 1.2", 0, 0.05));

        // 4-8 commons
        this.forestCollectables.push(new Collectable("forest", "cockroach", "Cockroach", 1, 0.10));
        this.forestCollectables.push(new Collectable("forest", "fly", "Fly", 1, 0.20));
        this.forestCollectables.push(new Collectable("forest", "bug2", "Bug 2", 1, 0.30));
        this.forestCollectables.push(new Collectable("forest", "bug21", "Bug 2.1", 1, 0.40));

        // 4-7 uncommons
        this.forestCollectables.push(new Collectable("forest", "moth", "Moth", 2, 0.50));
        this.forestCollectables.push(new Collectable("forest", "weevil", "Weevil", 2, 0.60));
        this.forestCollectables.push(new Collectable("forest", "aphid", "Aphid", 2, 0.70))
        this.forestCollectables.push(new Collectable("forest", "bug3", "Bug 3.1", 2, 0.80));

        // 3-6 rares
        this.forestCollectables.push(new Collectable("forest", "butterfly", "Butterfly", 3, 1));
        this.forestCollectables.push(new Collectable("forest", "bug4", "Bug 4", 3, 2));
        this.forestCollectables.push(new Collectable("forest", "bug41", "Bug 4.1", 3, 3));

        // 3-5 epics
        this.forestCollectables.push(new Collectable("forest", "stickbug", "Stick Bug", 4, 5));
        this.forestCollectables.push(new Collectable("forest", "bug5", "Bug 5", 4, 6));
        this.forestCollectables.push(new Collectable("forest", "bug51", "Bug 5.1", 4, 7));

        // 2-4 legendaries
        this.forestCollectables.push(new Collectable("forest", "leafinsect", "Leaf Insect", 5, 10));
        this.forestCollectables.push(new Collectable("forest", "bug6", "Bug 6", 5, 20));

        // 2-3 artifacts
        this.forestCollectables.push(new Collectable("forest", "bug7", "Bug 7", 6, 50));
        this.forestCollectables.push(new Collectable("forest", "bug71", "Bug 7.1", 6, 60));

        // 1-2 heirlooms
        this.forestCollectables.push(new Collectable("forest", "goldenidol", "Golden Idol", 7, 100));

        // combos
        //format //this.forestCombos.push(new CollectableCombo("forest", "", "", "", 0, 0, ["", ""]));
        this.forestCombos.push(new CollectableCombo("forest", "stickleaf", "Stick and Leaf", "[Stick + Leaf]", 0, 0.10, ["stick", "leaf"]));
        //level 2 combo
        //level 3 combo
        //level 4 combo
        //level 5 combo
        //level 6 combo
        //level 7 combo
    }

    InitializePierCollectables() {
        //Format: //this.pierCollectables.push(new Collectable("pier", "", "", 0, 0));
        // 5-9 poors
        this.pierCollectables.push(new Collectable("pier", "fish1", "Fish 1", 0, 0.10));
        this.pierCollectables.push(new Collectable("pier", "fish11", "Fish 1.1", 0, 0.10));
        this.pierCollectables.push(new Collectable("pier", "fish12", "Fish 1.2", 0, 0.10));
        this.pierCollectables.push(new Collectable("pier", "fish13", "Fish 1.3", 0, 0.10));
        this.pierCollectables.push(new Collectable("pier", "fish14", "Fish 1.4", 0, 0.10));

        // 4-8 commons
        this.pierCollectables.push(new Collectable("pier", "fish2", "Fish 2", 1, 0.50));
        this.pierCollectables.push(new Collectable("pier", "fish21", "Fish 2.1", 1, 0.50));
        this.pierCollectables.push(new Collectable("pier", "fish22", "Fish 2.2", 1, 0.50));
        this.pierCollectables.push(new Collectable("pier", "fish23", "Fish 2.3", 1, 0.50));

        // 4-7 uncommons
        this.pierCollectables.push(new Collectable("pier", "fish3", "Fish 3", 2, 1));
        this.pierCollectables.push(new Collectable("pier", "fish31", "Fish 3.1", 2, 1));
        this.pierCollectables.push(new Collectable("pier", "fish32", "Fish 3.2", 2, 1));
        this.pierCollectables.push(new Collectable("pier", "fish33", "Fish 3.3", 2, 1));

        // 3-6 rares
        this.pierCollectables.push(new Collectable("pier", "fish4", "Fish 4", 3, 5));
        this.pierCollectables.push(new Collectable("pier", "fish41", "Fish 4.1", 3, 5));
        this.pierCollectables.push(new Collectable("pier", "fish42", "Fish 4.2", 3, 5));

        // 3-5 epics
        this.pierCollectables.push(new Collectable("pier", "fish5", "Fish 5", 4, 10));
        this.pierCollectables.push(new Collectable("pier", "fish51", "Fish 5.1", 4, 10));
        this.pierCollectables.push(new Collectable("pier", "fish52", "Fish 5.2", 4, 10));

        // 2-4 legendaries
        this.pierCollectables.push(new Collectable("pier", "fish6", "Fish 6", 2, 50));
        this.pierCollectables.push(new Collectable("pier", "fish61", "Fish 6.1", 2, 50));

        // 2-3 artifacts
        this.pierCollectables.push(new Collectable("pier", "fish7", "Fish 7", 2, 100));
        this.pierCollectables.push(new Collectable("pier", "fish71", "Fish 7.1", 2, 100));

        // 1-2 heirlooms
        this.pierCollectables.push(new Collectable("pier", "fish8", "Fish 8", 2, 500));

        // combos
        //format //this.pierCombos.push(new CollectableCombo("pier", "", "", "", 0, 0, ["", ""]));
        //level 2 combo
        //level 3 combo
        //level 4 combo
        //level 5 combo
        //level 6 combo
        //level 7 combo
    }

    InitializeCaveCollectables() {
        //Format: //this.caveCollectables.push(new Collectable("cave", "", "", 0, 0));
        // 5-9 poors
        this.caveCollectables.push(new Collectable("cave", "gem1", "Gem 1", 0, 0.50));
        this.caveCollectables.push(new Collectable("cave", "gem11", "Gem 1.1", 0, 0.50));
        this.caveCollectables.push(new Collectable("cave", "gem12", "Gem 1.2", 0, 0.50));
        this.caveCollectables.push(new Collectable("cave", "gem13", "Gem 1.3", 0, 0.50));
        this.caveCollectables.push(new Collectable("cave", "gem14", "Gem 1.4", 0, 0.50));

        // 4-8 commons
        this.caveCollectables.push(new Collectable("cave", "gem2", "Gem 2", 1, 1));
        this.caveCollectables.push(new Collectable("cave", "gem21", "Gem 2.1", 1, 1));
        this.caveCollectables.push(new Collectable("cave", "gem22", "Gem 2.2", 1, 1));
        this.caveCollectables.push(new Collectable("cave", "gem23", "Gem 2.3", 1, 1));

        // 4-7 uncommons
        this.caveCollectables.push(new Collectable("cave", "gem3", "Gem 3", 2, 5));
        this.caveCollectables.push(new Collectable("cave", "gem31", "Gem 3.1", 2, 5));
        this.caveCollectables.push(new Collectable("cave", "gem32", "Gem 3.2", 2, 5));
        this.caveCollectables.push(new Collectable("cave", "gem33", "Gem 3.3", 2, 5));

        // 3-6 rares
        this.caveCollectables.push(new Collectable("cave", "gem4", "Gem 4", 3, 10));
        this.caveCollectables.push(new Collectable("cave", "gem41", "Gem 4.1", 3, 10));
        this.caveCollectables.push(new Collectable("cave", "gem42", "Gem 4.2", 3, 10));

        // 3-5 epics
        this.caveCollectables.push(new Collectable("cave", "gem5", "Gem 5", 4, 50));
        this.caveCollectables.push(new Collectable("cave", "gem51", "Gem 5.1", 4, 50));
        this.caveCollectables.push(new Collectable("cave", "gem52", "Gem 5.2", 4, 50));

        // 2-4 legendaries
        this.caveCollectables.push(new Collectable("cave", "gem6", "Gem 6", 5, 100));
        this.caveCollectables.push(new Collectable("cave", "gem61", "Gem 6.1", 5, 100));

        // 2-3 artifacts
        this.caveCollectables.push(new Collectable("cave", "gem7", "Gem 7", 6, 500));
        this.caveCollectables.push(new Collectable("cave", "gem71", "Gem 7.1", 6, 500));

        // 1-2 heirlooms
        this.caveCollectables.push(new Collectable("cave", "gem8", "Gem 8", 7, 1000));

        // combos
        //format //this.caveCombos.push(new CollectableCombo("cave", "", "", "", 0, 0, ["", ""]));
        //level 2 combo
        //level 3 combo
        //level 4 combo
        //level 5 combo
        //level 6 combo
        //level 7 combo
    }

    InitializeShop() {
        //this.items.push(new ShopItem("", "", "", 0));
        this.shopItems.push(new ShopItem("bugnet", "Bug Net", "Unlock Bughunting in the forest", 75));
        this.shopItems.push(new ShopItem("fishingrod", "Fishing Rod", "Unlock Fishing at the pier", 300));
        //this.shopItems.push(new ShopItem("pickaxe", "Pick Axe", "Unlock Mining in the cave", 350000));
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

        const serializedShopItems = {};
        this.shopItems.forEach(shopItem => {
            serializedShopItems[shopItem.id] = shopItem.owned;
        });

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

    SerializeCollectables(colelctables) {
        const serializedCollectables = {};
        colelctables.forEach(collectable => {
            serializedCollectables[collectable.id] = collectable.numberOwned;
        });
        return serializedCollectables;
    }

    LoadFromJson(jsonString) {
        const jsonData = JSON.parse(jsonString);

        //load the cityCollectables.numberOwned
        this.DeserializeCollectables(jsonData.cityCollectables, this.cityCollectables);
        this.DeserializeCollectables(jsonData.forestCollectables, this.forestCollectables);
        this.DeserializeCollectables(jsonData.pierCollectables, this.pierCollectables);
        this.DeserializeCollectables(jsonData.caveCollectables, this.caveCollectables);

        //determine the cityCombos off owned
        this.loadCombos(this.cityCombos, this.cityCollectables);
        this.loadCombos(this.forestCombos, this.forestCollectables);
        this.loadCombos(this.pierCombos, this.pierCollectables);
        this.loadCombos(this.caveCombos, this.caveCollectables);

        //load the shopItems.owned
        if (jsonData.shopItems) {
            this.shopItems.forEach(item => {
                if (jsonData.shopItems[item.id]) {
                    item.owned = jsonData.shopItems[item.id];
                }
            });
        }

        if (jsonData.currentLocation !== undefined)
            this.currentLocation = jsonData.currentLocation;
        if (jsonData.money !== undefined)
            this.money = jsonData.money;
    }

    DeserializeCollectables(jsonCollectables, collectables) {
        if (jsonCollectables) {
            collectables.forEach(collectable => {
                if (jsonCollectables[collectable.id]) {
                    collectable.numberOwned = jsonCollectables[collectable.id];
                    if(collectable.numberOwned > 0) collectable.discovered = true;
                }
            });
        }
    }

    loadCombos(combos, collectables) {
        combos.forEach(combo => {
            combo.requirementsMet(collectables);
        });
    }

    SaveToCookies() {
        const dataString = this.ConvertToJson();
        const expirationDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();

        const secureFlag = window.location.protocol === 'https:' ? '; secure' : '';

        document.cookie = `userData=${encodeURIComponent(dataString)}; expires=${expirationDate}; path=/${secureFlag}; samesite=strict`;

        console.log('Saved to cookies');
    }

    LoadFromCookies() {
        const cookieData = document.cookie.split('; ').find(row => row.startsWith('userData='));

        try {
            if (cookieData) {
                const dataString = decodeURIComponent(cookieData.split('=')[1]);
                this.LoadFromJson(dataString);
                console.log("loaded from cookies");
                return true;
            }
        } catch (error) {
            console.error('Error loading data from cookies:', error);
        }

        console.log("didn't load from cookies");
        return false;
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