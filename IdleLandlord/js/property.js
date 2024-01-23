class Property {
    constructor(id, description, baseCost, income, owned) {
        this.id = id;
        this.description = description;
        this.baseCost = baseCost;
        this.income = income;
        this.owned = owned;
        //variable values
        this.inflatedCost = this.inflateCost();
    }

    inflateCost() {
        return round(this.baseCost + (this.cost * this.owned * INFLATION_RATE));
    }
}