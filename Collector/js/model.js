class Model {
    constructor() {
        this.collectables = [];
        this.InitializeCollectables();

        this.items = [];
        this.InitializeShop();

        this.money = 0;
    }

    InitializeCollectables() {
        this.collectables.push(new Collectable("junk", "copper", "Copper", 0, 0.01));
        this.collectables.push(new Collectable("junk", "twig", "Twig", 0, 0.02));
        this.collectables.push(new Collectable("junk", "pebble", "Pebble", 0, 0.03));

        this.collectables.push(new Collectable("junk", "can", "Can", 1, 0.05));
        this.collectables.push(new Collectable("junk", "glass", "Glass", 1, 0.06));
        this.collectables.push(new Collectable("junk", "chip", "Chip", 1, 0.07));

        this.collectables.push(new Collectable("junk", "dollar", "Foreign Currency", 2, 0.10));
        this.collectables.push(new Collectable("junk", "cigbutt", "Ciggerette Butt", 2, 0.12));
        //this.collectables.push(new Collectable("junk", "", "", 2, 0));

        this.collectables.push(new Collectable("junk", "silver", "Silver", 3, 1));
        this.collectables.push(new Collectable("junk", "chips", "Chips", 3, 3.20));
        this.collectables.push(new Collectable("junk", "lottoticket", "Lotto Ticket", 3, 4.40));

        this.collectables.push(new Collectable("junk", "cig", "Full Ciggerette", 4, 10));
         //this.collectables.push(new Collectable("junk", "", "", 4, 0));
         //this.collectables.push(new Collectable("junk", "", "", 4, 0));

        this.collectables.push(new Collectable("junk", "gold", "Gold", 5, 100));
        //this.collectables.push(new Collectable("junk", "", "", 5, 0));

        //this.collectables.push(new Collectable("junk", "", "", 6, 1000));
        //this.collectables.push(new Collectable("junk", "", "", 6, 0));

        this.collectables.push(new Collectable("junk", "platinum", "Platinum", 7, 10000));
        //this.collectables.push(new Collectable("junk", "", "", 0, 0));


        this.weightedRandomValues = [];
        this.weightedRandomChances = [];
        let i = 0;
        this.collectables.forEach(collectable => {
            this.weightedRandomValues.push(i);
            this.weightedRandomChances.push(RARITY_CHANCE[collectable.rarity]); //convert the rarity
            i++;
        });
    }

    InitializeShop() {
        this.items.push(new Item("bugnet", "Bug Net", "Unlock Bughunting in the forest", 10));
        this.items.push(new Item("fishingrod", "Fishing Rod", "Unlock Fishing at the pier", 20));
        this.items.push(new Item("coffe", "Coffee Machine", "Unlock your true potential", 40));
    }

    Update() {
        return this.Collect();
    }

    Collect() {
        let idNumber = WeightedRandom(this.weightedRandomValues, this.weightedRandomChances);
        let selectedCollectable = this.collectables[idNumber];

        selectedCollectable.discovered = true;
        selectedCollectable.numberOwned += 1;
        this.money += selectedCollectable.value;

        return selectedCollectable;
    }
}

class Collectable {
    constructor(type, id, name, rarity, value) {
        this.type = type;
        this.id = id;
        this.name = name;
        this.rarity = rarity;
        this.value = value;

        this.discovered = false;
        this.numberOwned = 0;
    }
}

class Item {
    constructor(id, name, description, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}