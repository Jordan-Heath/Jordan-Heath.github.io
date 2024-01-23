class Property {
    constructor(id, description, baseCost, income) {
        this.id = id;
        this.description = description;
        this.baseCost = baseCost;
        this.income = income;
        this.cost = this.recalculateCost();
    }

    recalculateCost() {
        this.cost = this.baseCost + (this.baseCost * player.ownedProperties[this.id] * INFLATION_RATE);
    }
}