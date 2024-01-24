class Property {
    constructor(id, description, baseCost, baseIncome) {
        this.id = id;
        this.description = description;

        this.baseCost = baseCost;
        this.cost; this.recalculateCost();

        this.baseIncome = baseIncome;
        this.income; this.recalculateIncome();

        this.owned; this.recalculateOwned();

        this.view; this.createView();
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

    recalculateOwned() {
        this.owned = player.ownedProperties[this.id]
    }

    numberOfUpgrades() {
        var number = 0;
        data.upgrades.forEach(upgrade => {
            if (upgrade.propertyId === this.id && player.ownedUpgrades[upgrade.id])
                number += 1;
        });
        return number;
    }

    createView() {
        //purchaseable-container
        this.view = document.createElement('div');
        this.view.classList.add('purchaseable-container');

        //column for title/description
        const columnView = document.createElement('div');
        columnView.className = 'column';

        //title
        const propertyId = document.createElement('p');
        propertyId.className = 'title';

        //description
        const propertyDescription = document.createElement('p');
        propertyDescription.className = 'description';
        propertyDescription.innerText = this.description;

        //button
        const buyButton = document.createElement('button');
        buyButton.addEventListener('click', () => buyProperty(this.id));

        //append all
        columnView.appendChild(propertyId);
        columnView.appendChild(propertyDescription);
        this.view.appendChild(columnView);
        this.view.appendChild(buyButton);
    }

    updateView() {
        //update title
        const columnView = this.view.querySelector('.column');
        const propertyTitle = columnView.querySelector('.title');
        propertyTitle.innerText = this.getPropertyTitle();

        //update button
        const buyButton = this.view.querySelector('button');
        this.recalculateCost();
        buyButton.innerText = `$${this.cost}`;

        //update background
        switch (this.numberOfUpgrades()) {
            case 0:
                this.view.style.backgroundColor = 'var(--UpgradeZero)'
                break;
            case 1:
                this.view.style.backgroundColor = 'var(--UpgradeOne)';
                break;
            case 2:
                this.view.style.backgroundColor = 'var(--UpgradeTwo)';
                break;
        }
    }

    getPropertyTitle() {
        if (player.ownedProperties[this.id] > 0) {
            return `${player.ownedProperties[this.id]} ${this.id} ($${round(player.ownedProperties[this.id] * this.income)}/s)`;
        } else {
            return this.id;
        }
    }
}