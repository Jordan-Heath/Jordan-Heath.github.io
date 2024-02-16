class Model {
    constructor() {
        this.currentLocation = LOCATIONS[0];

        this.cityCollectables = [];
        this.cityCombos = [];
        this.InitializeCityCollectables();

        this.shopItems = [];
        this.InitializeShop();

        this.money = 0;
    }

    //#region initialize
    InitializeCityCollectables() {
        //Format: //this.cityCollectables.push(new Collectable("city", "", "", 0, 0));

        // 5-9 poors
        this.cityCollectables.push(new Collectable("city", "copper", "Copper", 0, 0.01));
        this.cityCollectables.push(new Collectable("city", "twig", "Twig", 0, 0.02));
        this.cityCollectables.push(new Collectable("city", "pebble", "Pebble", 0, 0.03));
        this.cityCollectables.push(new Collectable("city", "plasticbag", "Plastic Bag", 0, 0.02));

        // 4-8 commons
        this.cityCollectables.push(new Collectable("city", "can", "Can", 1, 0.05));
        this.cityCollectables.push(new Collectable("city", "glass", "Glass", 1, 0.06));
        this.cityCollectables.push(new Collectable("city", "chip", "Chip", 1, 0.07));
        this.cityCollectables.push(new Collectable("city", "cigbutt", "Ciggerette Butt", 2, 0.08));

        // 4-7 uncommons
        this.cityCollectables.push(new Collectable("city", "dollar", "Strange Currency", 2, 0.10));
        this.cityCollectables.push(new Collectable("city", "cd", "CD", 2, 0.20));
        this.cityCollectables.push(new Collectable("city", "lottoticket", "Lotto Ticket", 2, 0.40));

        // 3-6 rares
        this.cityCollectables.push(new Collectable("city", "silver", "Silver", 3, 1));
        this.cityCollectables.push(new Collectable("city", "chips", "Chips", 3, 3.20));
        this.cityCollectables.push(new Collectable("city", "cig", "Full Ciggerette", 3, 5));

        // 3-5 epics
        this.cityCollectables.push(new Collectable("city", "vcr", "VCR", 4, 15));
        this.cityCollectables.push(new Collectable("city", "lighter", "Lighter", 4, 22));

        // 2-4 legendaries
        this.cityCollectables.push(new Collectable("city", "gold", "Gold", 5, 100));
        this.cityCollectables.push(new Collectable("city", "cdplayer", "CD Player", 5, 460));

        // 2-3 artifacts
        this.cityCollectables.push(new Collectable("city", "tv", "TV", 6, 2000));

        // 1-2 heirlooms
        this.cityCollectables.push(new Collectable("city", "platinum", "Platinum", 7, 10000));

        this.cityWeightedRandomValues = [];
        this.cityWeightedRandomChances = [];
        let i = 0;
        this.cityCollectables.forEach(collectable => {
            this.cityWeightedRandomValues.push(i);
            this.cityWeightedRandomChances.push(RARITY_CHANCE[collectable.rarity]); //convert the rarity
            i++;
        });


        // combos
        //format //this.cityCombos.push(new CollectableCombo("city", "", "", 0, 0, ["", ""]));
        //level 2 combo
        //level 3 combo
        this.cityCombos.push(new CollectableCombo("city", "litcig", "Nicotine Addiction", "[Full Ciggerette + Lighter]\nA cigerrete you may puff upon", 4, 50, ["cig", "lighter"]));
        this.cityCombos.push(new CollectableCombo("city", "music", "Music", "[CD + CD Player]\nA rapturous auditory experience", 5, 500, ["cd", "cdplayer"]));
        this.cityCombos.push(new CollectableCombo("city", "cinema", "Cinema", "[VCR + TV]\nTape that impresses both the ears and the eyes", 6, 5000, ["vcr", "tv"]));
        this.cityCombos.push(new CollectableCombo("city", "coins", "Coin Collection", "[Copper + Silver + Gold + Platinum]\nA neat set of funny metals", 7, 50000, ["copper", "silver", "gold", "platinum"]));
    }

    InitializeShop() {
        //this.items.push(new ShopItem("", "", "", 0));
        this.shopItems.push(new ShopItem("bugnet", "Bug Net", "Unlock Bughunting in the forest", 1000));
        this.shopItems.push(new ShopItem("fishingrod", "Fishing Rod", "Unlock Fishing at the pier", 20000));
        this.shopItems.push(new ShopItem("pickaxe", "Pick Axe", "Unlock Mining in the cave", 400000));
        //this.items.push(new ShopItem("coffee", "Coffee Machine", "Unlock your true potential", 40));
    }
    //#endregion initialize

    Update() {
        let selectedCollectable = this.Collect();

        return selectedCollectable;
    }

    Collect() {
        let idNumber;
        let selectedCollectable;

        //obtain collectable
        switch(this.currentLocation) {
            case(LOCATIONS[0]):
                idNumber = GetWeightedRandom(this.cityWeightedRandomValues, this.cityWeightedRandomChances);
                selectedCollectable = this.cityCollectables[idNumber];
                break;
        }

        //discovery?
        if (!selectedCollectable.discovered) {
            selectedCollectable.discovered = true;
            this.CheckCombos(selectedCollectable);
        }
        
        //increment and return
        selectedCollectable.numberOwned += 1;
        this.money += selectedCollectable.value;
        return selectedCollectable;
    }

    CheckCombos() {
        switch(this.currentLocation) {
            case(LOCATIONS[0]):
                this.cityCombos.forEach(combo => {
                    if (combo.requirementsMet(this.cityCollectables)) this.money += combo.value;
                });
                break;
        }
    }

    //#region SaveFunctions
    ConvertToJson() {
        const serializedCityCollectables = {};
        this.cityCollectables.forEach(collectable => {
            serializedCityCollectables[collectable.id] = collectable.numberOwned;
        });

        const serializedShopItems = {};
        this.shopItems.forEach(shopItem => {
            serializedShopItems[shopItem.id] = shopItem.owned;
        });

        return JSON.stringify({
            cityCollectables: serializedCityCollectables,
            shopItems: serializedShopItems,

            currentLocation: this.currentLocation,
            money: this.money
        });
    }


    LoadFromJson(jsonString) {
        const jsonData = JSON.parse(jsonString);

        //load the cityCollectables.numberOwned
        if (jsonData.cityCollectables) {
            this.cityCollectables.forEach(collectable => {
                if (jsonData.cityCollectables[collectable.id]) {
                    collectable.numberOwned = jsonData.cityCollectables[collectable.id];
                if(collectable.numberOwned > 0) collectable.discovered = true;
                }
            });
        }

        //determine the cityCombos off owned
        this.cityCombos.forEach(combo => {
            combo.requirementsMet(this.cityCollectables);
        });

        //load the shopItems.owned
        if (jsonData.shopItems) {
            this.shopItems.forEach(item => {
                if (jsonData.shopItems[item.id]) {
                    item.owned = jsonData.shopItems.owned;
                }
            });
        }

        if (jsonData.currentLocation !== undefined)
            this.currentLocation = jsonData.currentLocation;
        if (jsonData.money !== undefined)
            this.money = jsonData.money;
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