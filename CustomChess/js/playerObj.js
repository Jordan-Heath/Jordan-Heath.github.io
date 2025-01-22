class PlayerObj {
    constructor() {
        //variables
        this.loadOut = [];
        this.shopItems = [];
        this.matchStreak = 0;
        this.gold = 0;
        this.upgrades = [];
        this.promotionDiscount = 1;
        this.shopSize = 3;

        //constants
        this.boardSize = 8;
        this.teamSize = 8;
        this.turnTime = 300; //ms
        this.forfeitThreshold = 5;

        //stats
        this.piecesTaken = 0; //
        this.piecesLost = 0; //
        this.piecesPromoted = 0; //

        this.matchesWon = 0; //
        this.matchesLost = 0; //
        this.goldEarned = 0; //

        this.upgradesPurchased = 0;
        this.upgradesSold = 0;
        
        this.highestStreak = 0; //
        this.timesPrestiged = 0; //

        this.settings = {
            audioEnabled: true,
            darkMode: "System",
        }
    }

    saveToLocalStorage() {
        const data = JSON.stringify(this);
        localStorage.setItem("CustomChessSave", data);
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem("CustomChessSave");
        if (data) {
            const parsedData = JSON.parse(data);
            Object.assign(this, parsedData);
        }
    }

    sellUpgrade(upgradeID) {
        let allowSale = currentTurn === 0;

        if (!allowSale) allowSale = confirm("Selling this upgrade will restart any ongoing matches. Are you sure?");

        if (allowSale) {
            const upgrade = UpgradeData.find(u => u.id === upgradeID)
            //remove the upgrade
            this.upgrades = this.upgrades.filter(u => u != upgradeID);
            //give the gold
            this.gold += upgrade.cost;
    
            ViewHandler.printCollectionMenu();
            if (currentTurn != 0) Match.newMatch();
        }
    }

    buyUpgrade(upgradeID) {
        const upgrade = UpgradeData.find(u => u.id === upgradeID);
        const buyButton = document.getElementById(`${upgradeID}Button`)
        buyButton.disabled = 'true';
        if (this.gold >= upgrade.cost) {
            this.gold -= upgrade.cost;
            this.upgrades.push(upgrade.id);
            this.upgradesPurchased += 1;

            Player.refreshUpgrades();
            Player.saveToLocalStorage();

            const endGameMessageParagraph = document.getElementById('endGameMessageParagraph')
            if (endGameMessageParagraph) endGameMessageParagraph.innerHTML = `Enjoy your upgrade! You now have ${this.gold} gold`
            ViewHandler.getShopItems();
            buyButton.innerText = "Enjoy!"
        } else {
            buyButton.innerText = "Cannot Afford"
        }
    }

    buildTeam() {
        if (!this.loadOut.includes('king')) this.loadOut.push('king');
    
        while (this.loadOut.length < this.teamSize) {
            if (this.upgrades.includes('restockGoodPieces') && Math.random() > 0.7) {
                this.loadOut.push(getWeightedRandomPieceType());
            } else {
                this.loadOut.push('pawn');
            }
        }
    
        // Sort loadOut based on pieceValues in descending order (high value first)
        this.loadOut.sort((a, b) => pieceValues[b] - pieceValues[a]);

        Chessboard.placePlayerPieces(1, this.loadOut, this.teamSize);
    }

    refreshUpgrades() {
        this.boardSize = 8;
        this.teamSize = 8;
        this.promotionDiscount = 1;

        //handle chessboard size
        if (this.upgrades.includes('largerChessboard')) this.boardSize += 1;
        chessboardElement.style.gridTemplateColumns = `repeat(${this.boardSize}, 1fr)`
        chessboardElement.style.gridTemplateRows = `repeat(${this.boardSize}, 1fr)`

        //handle team size
        if (this.upgrades.includes('extraTeamSlot')) this.teamSize += 1;
        this.teamSize += this.timesPrestiged;

        //handle promotion discount
        if (this.hasUpgrade("promotionDiscount")) {
            this.promotionDiscount += 1;
        }
    }

    canPrestige() {
        return this.highestStreak >= (this.timesPrestiged + 1) * 10
    }

    prestige() { //TODO
        if (!this.canPrestige()) return; //must have high streak
        // if (Player.upgrades.length != UpgradeData.length) return; //must have all upgrades

        this.upgrades = [];
        this.timesPrestiged += 1;
        this.matchStreak = 0;
        this.gold = 0;
        
        Player.refreshUpgrades();
        Player.saveToLocalStorage();

        ViewHandler.loadStartMenu();
    }

    hasUpgrade(upgradeID) {
        return this.upgrades.includes(upgradeID);
    }

    exportSave() {
        const data = JSON.stringify(this);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'CustomChessSave.json';
        a.click();
        URL.revokeObjectURL(url);
    }

    importSave() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = () => {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const data = JSON.parse(reader.result);
                Object.assign(this, data);
                this.saveToLocalStorage();
                location.reload();
            };
            reader.readAsText(file);
        };
        input.click();
    }

    deleteSave() {
        if (confirm("Are you sure you want to delete your save?")) {
            localStorage.removeItem("CustomChessSave");
            location.reload();
        }
    }

    toggleSetting(setting, value) {
        this.settings[setting] = value;
        this.saveToLocalStorage();
    }
}