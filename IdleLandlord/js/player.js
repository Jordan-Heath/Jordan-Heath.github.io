class Player {
    constructor() {
        this.version = "";
        this.name = "Your Business";
        this.money = 0;
        this.xp = 0;
        this.ownedProperties = [];
        this.ownedUpgrades = [];
    }
    
    exportplayer() {
        const playerData = {
            version: this.version,
            name: this.name,
            money: this.money,
            xp: this.xp,
            ownedProperties: ownedProperties,
            ownedUpgrades: this.ownedUpgrades
        };

        const blob = new Blob([JSON.stringify(playerData)], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${this.name === "" ? "player" : this.name}.json`;
        link.click();
    }

    importplayer() {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                try {
                    const importedplayer = JSON.parse(reader.result);
                    if (importedplayer.version !== this.version) {
                        alert("player version is outdated and may have issues.");
                    }
                    this.name = importedplayer.name;
                    this.money = importedplayer.money;

                    importedplayer.properties.forEach(importedProperty => {
                        const matchingProperty = this.properties.find(p => p.id === importedProperty.id);

                        if (matchingProperty) {
                            matchingProperty.owned = importedProperty.owned;
                        }
                    });

                    updatePage();
                } catch (error) {
                    console.error('Error importing player:', error);
                }
            };

            reader.readAsText(file);
        }
    }

    playerToCookies() {
        const dataString = JSON.stringify({
            version: this.version,
            properties: this.properties.map(property => property.serialize()),
            name: this.name,
            money: this.money
        });

        document.cookie = `userData=${dataString}; expires=${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
        sendMessage("autosaving...");
    }

    loadFromCookies() {
        const cookieData = document.cookie.split('; ').find(row => row.startsWith('userData='));

        try {
            if (cookieData) {
                const dataString = cookieData.split('=')[1];
                const data = JSON.parse(dataString);

                if (data.version === this.version) {
                    data.properties.forEach(importedProperty => {
                        const matchingProperty = this.properties.find(p => p.id === importedProperty.id);

                        if (matchingProperty) {
                            matchingProperty.owned = importedProperty.owned;
                        }
                    });
                    this.name = data.name;
                    this.money = data.money;

                    updatePage();
                }
            }
        } catch { }
    }
}

const player = new Player();