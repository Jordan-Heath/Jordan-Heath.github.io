class Data {
    constructor() {
        this.version = "";
        this.properties = [];
        this.upgrades = [];
        this.jobs = [];
        this.name = "Your Business";
        this.money = 0;
        this.workExperience = 0;

        //temp variables
        this.income = 0;
        this.workRate = 0;
    }

    exportSave() {
        const saveData = {
            version: data.version,
            name: data.name,
            money: data.money,
            properties: data.properties
            //ownedUpgrades: Object.fromEntries(data.upgrades.entries())
        };

        const blob = new Blob([JSON.stringify(saveData)], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${data.name === "" ? "save" : data.name}.json`;
        link.click();
    }

    importSave() {
        var fileInput = document.getElementById('fileInput');
        var file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function () {
                try {
                    const importedSave = JSON.parse(reader.result);
                    if (importedSave.version !== data.version) {
                        alert("Save version is outdated and may have issues.");
                    }
                    data.name = importedSave.name;
                    data.money = importedSave.money;

                    importedSave.properties.forEach(property => {
                        const matchingProperty = data.properties.find(p => p.name === property.name);

                        if (matchingProperty) {
                            matchingProperty.owned = property.owned;
                        }
                    });

                    //TODO: implement upgrades
                    //data.upgrades = new Map(Object.entries(importedSave.ownedUpgrades));

                    updatePage();
                } catch (error) {
                    console.error('Error importing save:', error);
                }
            };

            reader.readAsText(file);
        }
    }

    loadData() {
        fetch(DATA_URL)
            .then(response => response.json())
            .then(data => {
                this.version = data.version;
                this.workRate = data.workRate;
                this.properties = data.properties.map(propertyData => {
                    return new Property(propertyData.name, propertyData.cost, propertyData.income, propertyData.owned);
                });
                /*this.upgrades = data.upgrades.map(upgradeData => {
                    return new Upgrade(upgradeData.name, upgradeData.cost, upgradeData.income, upgradeData.owned);
                });*/
                /*this.jobs = data.jobs.map(jobsData => {
                    return new Job(Job.name, Job.cost, Job.income, Job.owned);
                });*/

                updatePage();
                this.loadFromCookies();
                startIntervals();
            })
            .catch(error => console.error('Error loading data:', error));
    }

    saveToCookies() {
        // Convert the data to a JSON string
        const dataString = JSON.stringify({
            version: this.version,
            workRate: this.workRate,
            properties: this.properties,
            //upgrades: this.upgrades,
            name: this.name,
            money: this.money
        });

        // Save the JSON string in a cookie named 'userData'
        document.cookie = `userData=${dataString}; expires=${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
        sendMessage("autosaving...");
    }

    loadFromCookies() {
        // Retrieve the cookie named 'userData'
        const cookieData = document.cookie.split('; ').find(row => row.startsWith('userData='));

        try {
            if (cookieData) {
                // Parse the JSON string from the cookie
                const dataString = cookieData.split('=')[1];
                const data = JSON.parse(dataString);
    
                // Update the properties with the values from the cookie
                //this.version = data.version;
                //this.workRate = data.workRate;
                //this.properties = data.properties;
                data.properties.forEach(property => {
                    const matchingProperty = this.properties.find(p => p.name === property.name);
    
                    if (matchingProperty) {
                        matchingProperty.owned = property.owned;
                    }
                });
                //this.upgrades = data.upgrades;
                this.name = data.name;
                this.money = data.money;
    
                updatePage();
            }
        } catch {}
    }

    checkIncome() {
        this.income = 0;
        this.properties.forEach(property => {
            // add support for upgrades here
            this.income += property.income * property.owned;
        });
        return this.income;
    }

    checkWorkRate() {
        this.workRate = 0;
        this.jobs.forEach(job => {
            if (job.xpRequirement >= this.workExperience)
                this.workRate = job.payRate;
        });
        return this.workRate;
    }
}

const data = new Data();