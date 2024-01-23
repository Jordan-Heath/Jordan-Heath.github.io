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
                if (this.version !== data.version) {
                    this.version = data.version;
                    this.baseWorkRate = data.baseWorkRate;
                    this.properties = data.properties;
                    this.upgrades = data.upgrades;

                    updateButtons();
                    startIntervals();
                }
            })
            .catch(error => console.error('Error loading data:', error));
    }

    saveToCookies() {
        // Convert the data to a JSON string
        const dataString = JSON.stringify({
            version: this.version,
            baseWorkRate: this.baseWorkRate,
            properties: this.properties,
            upgrades: this.upgrades,
            name: this.name,
            money: this.money
        });

        // Save the JSON string in a cookie named 'userData'
        document.cookie = `userData=${dataString}; expires=${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
    }

    loadFromCookies() {
        // Retrieve the cookie named 'userData'
        const cookieData = document.cookie.split('; ').find(row => row.startsWith('userData='));

        if (cookieData) {
            // Parse the JSON string from the cookie
            const dataString = cookieData.split('=')[1];
            const data = JSON.parse(dataString);

            // Update the properties with the values from the cookie
            this.version = data.version;
            this.baseWorkRate = data.baseWorkRate;
            this.properties = data.properties;
            this.upgrades = data.upgrades;
            this.name = data.name;
            this.money = data.money;
        }
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