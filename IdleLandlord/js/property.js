class Property {
    constructor(id, description, baseCost, baseIncome) {
        this.id = id;
        this.description = description;

        this.baseCost = baseCost;
        this.cost; this.recalculateCost();
        
        this.baseIncome = baseIncome;
        this.income; this.recalculateIncome();
    }

    recalculateCost() {
        this.cost = this.baseCost;
        this.cost += this.baseCost * player.ownedProperties[this.id] * INFLATION_RATE;
    }

    recalculateIncome() {
        var upgradeMultiplier = 1;
        data.upgrades.forEach(upgrade => {
            if (upgrade.propertyId === this.id && player.ownedUpgrades[upgrade.id])
                upgradeMultiplier = upgradeMultiplier * upgrade.multiplier;
        });

        this.income = this.baseIncome * upgradeMultiplier;
    }
}