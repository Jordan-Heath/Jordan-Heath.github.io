class Model {
    constructor() {
        this.collectables = [];
        this.InitializeCollectables();

        this.items = [];
        this.InitializeShop();

        this.money = 0;
    }

    InitializeCollectables() {
        this.collectables.push(new Collectable("junk", "penny", "Penny", 0, 0.01));
        this.collectables.push(new Collectable("junk", "stick", "Stick", 0, 0.01));
        this.collectables.push(new Collectable("junk", "rock", "Rock", 0, 0.01));

        this.collectables.push(new Collectable("junk", "nickel", "Nickel", 1, 0.05));
        this.collectables.push(new Collectable("junk", "can", "Can", 1, 0.05));
        this.collectables.push(new Collectable("junk", "glass", "Glass", 1, 0.05));

        this.collectables.push(new Collectable("junk", "dime", "Dime", 2, 0.1));
        //this.collectables.push(new Collectable("junk", "", "", 0, 0));

        this.collectables.push(new Collectable("junk", "quarter", "Quarter", 3, 0.25));
        //this.collectables.push(new Collectable("junk", "", "", 0, 0));

        this.collectables.push(new Collectable("junk", "dollar", "Dollar", 4, 1));

        

        //this.collectables.push(new Collectable("", "", "", 0, 0));

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