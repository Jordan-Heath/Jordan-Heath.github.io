class Model {
    constructor() {
        this.collectables = [];
        this.Initialize();
        this.money = 0;
    }

    Initialize() {
        this.collectables.push(new Collectable("junk", "penny", "Penny", 0, 0, 0.01));
        this.collectables.push(new Collectable("junk", "nickel", "Nickel", 0, 1, 0.05));
        this.collectables.push(new Collectable("junk", "dime", "Dime", 0, 2, 0.1));
        this.collectables.push(new Collectable("junk", "quarter", "Quarter", 0, 3, 0.25));
        this.collectables.push(new Collectable("junk", "dollar", "Dollar", 0, 4, 1));
    }

    Update() {
        return this.Collect();
    }

    Collect() {
        let selectedCollectable = this.collectables[GetRandomNumber(0, this.collectables.length - 1)];
        
        selectedCollectable.numberOwned += 1;
        this.money += selectedCollectable.value;

        return selectedCollectable;
    }
}

class Collectable {
    constructor(type, id, name, numberOwned, rarity, value) {
        this.type = type;
        this.id = id;
        this.name = name;
        this.numberOwned = numberOwned;
        this.rarity = rarity;
        this.value = value;
    }
}