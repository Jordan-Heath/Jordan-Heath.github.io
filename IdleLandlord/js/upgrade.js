class Upgrade {
    constructor(propertyId, id, description, cost, multiplier) {
        this.propertyId = propertyId;
        this.id = id;
        this.description = description;
        this.cost = cost;
        this.multiplier = multiplier;

        this.view; this.createView();
    }

    createView() {
        //create view
        this.view = document.createElement('div');
        this.view.classList.add('purchaseable-container');

        //create column
        const columnView = document.createElement('div');
        columnView.classList.add('column');

        //create title
        const upgradeTitle = document.createElement('p');
        upgradeTitle.classList.add('title');
        upgradeTitle.innerText = `${this.propertyId}: ${this.id}`

        //create description
        const upgradeDescription = document.createElement('p');
        upgradeDescription.classList.add('description');
        upgradeDescription.innerText = this.description;

        //create button
        const buyButton = document.createElement('button');
        buyButton.innerText = `$${this.cost}`
        buyButton.addEventListener('click', () => buyUpgrade(this.id));

        //append all
        columnView.appendChild(upgradeTitle);
        columnView.appendChild(upgradeDescription);
        this.view.appendChild(columnView);
        this.view.appendChild(buyButton);
    }

    updateView() {
        if (player.ownedUpgrades[this.id] ||
            player.ownedProperties[this.propertyId] === 0) {
                this.view.style.display = 'none';
        } else {
            this.view.style.display = 'flex';
        }
    }
}