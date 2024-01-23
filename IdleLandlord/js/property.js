class Property {
    constructor(id, description, baseCost, income) {
        this.id = id;
        this.description = description;
        this.baseCost = baseCost;
        this.income = income
        //variable values
        this.inflatedCost = this.inflateCost();
    }

    inflateCost() {
        this.inflatedCost = this.baseCost + (this.baseCost * player.ownedProperties[this.id] * INFLATION_RATE);
    }
}