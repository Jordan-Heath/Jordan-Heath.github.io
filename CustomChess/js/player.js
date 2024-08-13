class PlayerObj {
    constructor() {
        //variables
        this.loadOut = [];
        this.matchStreak = 0;
        this.gold = 0;
        this.upgrades = [
            // "pawnTwoSteps",
            // "pawnMoveDiagonal",
            // "pawnAttackFowards",
            // "piecesCanJump"
        ];
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
            document.getElementById('endGameMessageParagraph').innerHTML = `Enjoy your upgrade! You now have ${this.gold} gold`
            buyButton.innerText = "Enjoy!"
            ViewHandler.printMatchUI('');
        } else {
            buyButton.innerText = "Cannot Afford"
        }
    }

    buildTeam() {
        if (!this.loadOut.includes('king')) this.loadOut.push('king');
    
        while (this.loadOut.length < this.teamSize) {
            if (this.upgrades.includes('restockGoodPieces') && Math.random() > 0.5) {
                this.loadOut.push(getWeightedRandomPieceType());
            } else {
                this.loadOut.push('pawn');
            }
        }
    
        // Sort Player.loadOut based on pieceValues in ascending order
        this.loadOut.sort((a, b) => pieceValues[b] - pieceValues[a]);

        const playerPiecePositions = Chessboard.getRandomPositions(this.boardSize-3, this.boardSize-1, this.teamSize); // Bottom 3 rows for player

        for (var i = 0; i < this.teamSize; i++) {
            allPieces.push(new Piece(this.loadOut[i], playerPiecePositions[i], 1));
        }
    }

    refreshUpgrades() {
        this.boardSize = 8;
        this.teamSize = 8;

        //handle chessboard size
        if (this.upgrades.includes('largerChessboard')) {
            this.boardSize += 1;
            chessboardElement.style.gridTemplateColumns = `repeat(${this.boardSize}, 1fr)`
            chessboardElement.style.gridTemplateRows = `repeat(${this.boardSize}, 1fr)`
        }

        //handle team size
        if (this.upgrades.includes('extraTeamSlot')) this.teamSize += 1;
        this.teamSize += this.timesPrestiged;
    }

    prestige() { //TODO
        if (Player.highestStreak < (Player.timesPrestiged + 1) * 10) return; //must have high streak
        if (Player.upgrades.length != UpgradeData.length) return; //must have all upgrades

        this.upgrades = [];
        this.timesPrestiged += 1;
        this.refreshUpgrades();
        this.saveToLocalStorage();

        ViewHandler.printProfileMenu();
    }

    hasUpgrade(upgradeID) {
        return this.upgrades.includes(upgradeID);
    }

    deleteSave() {
        if (confirm("Are you sure you want to delete your save?")) {
            localStorage.removeItem("CustomChessSave");
            location.reload();
        }
    }
}