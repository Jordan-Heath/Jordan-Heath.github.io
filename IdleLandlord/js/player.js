class Player {
    constructor() {
        this.version = "";
        this.name = "Your Business";
        this.money = 0;
        this.xp = 0;
        this.ownedProperties = [];
        this.ownedUpgrades = [];
    }

    // Conversion Tools
    toJson() {
        const serializedProperties = {};
        for (const propertyName in this.ownedProperties) {
            if (this.ownedProperties.hasOwnProperty(propertyName)) {
                serializedProperties[propertyName] = this.ownedProperties[propertyName];
            }
        }

        const serializedUpgrades = {};
        for (const upgradeName in this.ownedUpgrades) {
            if (this.ownedUpgrades.hasOwnProperty(upgradeName)) {
                serializedUpgrades[upgradeName] = this.ownedUpgrades[upgradeName];
            }
        }

        return JSON.stringify({
            version: this.version,
            name: this.name,
            money: this.money,
            xp: this.xp,
            ownedProperties: serializedProperties,
            ownedUpgrades: serializedUpgrades
        });
    }

    updateFromJson(jsonString) {
        const jsonData = JSON.parse(jsonString);

        if (this.version !== jsonData.version) {
            alert("There has been an update since your last save. Thing may have broken.")
        }
        this.version = jsonData.version || this.version;

        this.name = jsonData.name || this.name;
        this.money = jsonData.money || this.money;
        this.xp = jsonData.xp || this.xp;

        // Update ownedProperties
        if (jsonData.ownedProperties) {
            this.ownedProperties = { ...jsonData.ownedProperties };
        }

        // Update ownedUpgrades
        if (jsonData.ownedUpgrades) {
            this.ownedUpgrades = { ...jsonData.ownedUpgrades };
        }

        data.updateIncome();
        data.updateJob();
        updatePageView();
    }

    // Manual Saves
    exportPlayer() {
        const blob = new Blob([this.toJson()], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${this.name === "" ? "player" : this.name}.json`;
        link.click();
    }

    importPlayer() {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                try {
                    this.updateFromJson(reader.result)
                } catch (error) {
                    console.error('Error importing player:', error);
                }
            };

            reader.readAsText(file);
        }
    }

    // Cookie Saves
    saveToCookies() {
        const dataString = this.toJson();
        const expirationDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();

        // Set secure flag if running over HTTPS
        const secureFlag = window.location.protocol === 'https:' ? '; secure' : '';

        document.cookie = `userData=${encodeURIComponent(dataString)}; expires=${expirationDate}; path=/${secureFlag}; samesite=strict`;

        sendMessage("Autosaving...");
    }

    loadFromCookies() {
        const cookieData = document.cookie.split('; ').find(row => row.startsWith('userData='));

        try {
            if (cookieData) {
                const dataString = decodeURIComponent(cookieData.split('=')[1]);
                this.updateFromJson(dataString);
                return true;
            }
        } catch (error) {
            console.error('Error loading data from cookies:', error);
        }
        
        return false;
    }
}

const player = new Player();