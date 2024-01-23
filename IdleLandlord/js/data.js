class Data {
    constructor() {
        this.version = ""; //value is saved
        this.baseWorkRate = 0;
        this.properties = []; //owned values are saved
        this.upgrades = []; //owned values are saved
        this.name = "Your Business"; //value is saved
        this.money = 0; //value is saved
    }

    loadData() {
        fetch(DATA_URL)
            .then(response => response.json())
            .then(data => {
                this.version = data.version;
                this.baseWorkRate = data.baseWorkRate;
                this.properties = data.properties.map(propertyData => {
                    return new Property(propertyData.name, propertyData.cost, propertyData.income);
                });
                /*this.upgrades = data.upgrades.map(upgradeData => {
                    return new Property(upgradeData.name, upgradeData.cost, upgradeData.effectedBuilding, upgradeData.multiplier);
                });*/
                updateButtons();
                startIncomeInterval();
            })
            .catch(error => console.error('Error loading data:', error));
    }

    income() {
        var income = 0;
        this.properties.forEach(property => {
            // add support for upgrades here
            income += property.income * property.owned;
        });
        return income;
    }
}