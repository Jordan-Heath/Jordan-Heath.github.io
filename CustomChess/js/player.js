class Player {
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
        if (confirm("Selling this upgrade will restart any ongoing matches. Are you sure?")) {
            const upgrade = upgradeData.find(u => u.id === upgradeID)
            //remove the upgrade
            this.upgrades = this.upgrades.filter(u => u != upgradeID);
            //give the gold
            this.gold += upgrade.cost;
    
            printMenu();
            newMatch();
        }
    }

    buyUpgrade(upgradeID) {
        const upgrade = upgradeData.find(u => u.id === upgradeID);
        const buyButton = document.getElementById(`${upgradeID}Button`)
        buyButton.disabled = 'true';
        if (this.gold >= upgrade.cost) {
            this.gold -= upgrade.cost;
            this.upgrades.push(upgrade.id);
            this.upgradesPurchased += 1;
            document.getElementById('endGameMessageParagraph').innerHTML = `Enjoy your upgrade! You now have ${this.gold} gold`
            buyButton.innerText = "Enjoy!"
            printMatchUI('');
        } else {
            buyButton.innerText = "Cannot Afford"
        }
    }

    buildTeam() {
        if (!player.loadOut.includes('king')) player.loadOut.push('king');
    
        while (player.loadOut.length < this.teamSize) {
            if (player.upgrades.includes('restockGoodPieces') && Math.random() > 0.5) {
                player.loadOut.push(getWeightedRandomPieceType());
            } else {
                player.loadOut.push('pawn');
            }
        }
    
        // Sort player.loadOut based on pieceValues in ascending order
        player.loadOut.sort((a, b) => pieceValues[a] - pieceValues[b]);

        const playerPiecePositions = getRandomPositions(player.boardSize-3, player.boardSize-1, player.teamSize); // Bottom 3 rows for player

        for (var i = 0; i < player.teamSize; i++) {
            pieces.push(new Piece(this.loadOut[i], playerPiecePositions[i], 'player'));
        }
    }

    refreshUpgrades() {
        this.boardSize = 8;
        this.teamSize = 8;

        if (this.upgrades.includes('largerChessboard')) {
            this.boardSize += 1;
            chessboardElement.style.gridTemplateColumns = `repeat(${this.boardSize}, 1fr)`
            chessboardElement.style.gridTemplateRows = `repeat(${this.boardSize}, 1fr)`
        }
        if (this.upgrades.includes('extraTeamSlot')) this.teamSize += 1;
    }

    pretige() { //TODO
        this.timesPrestiged += 1;
    }
}