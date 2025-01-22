class Match {
    static newMatch() {
        ViewHandler.closeMenu(startMenuElement);
        ViewHandler.closeMenu(popupElement);
        ViewHandler.closeMenu(matchMenuElement);
        matchElement.style.display = 'block';
        setTimeout(() => chessboardElement.style.opacity = 1, 100);

        popupElement.innerHTML = '';
        forfeitCounter = 0;
        promotionDisabled = false;
        mindControlEnabled = Player.hasUpgrade('mindControl')
        currentTurn = 1;
        Player.refreshUpgrades();

        Chessboard.draw();

        allPieces = [];
        Player.buildTeam();
        Enemy.buildTeam();

        ViewHandler.printMatchUI("Player's Turn");

        allPieces.forEach(piece => piece.availableMoves = piece.calculateAvailableMoves());
        Chessboard.generalHighlights();
        Player.saveToLocalStorage();
    }

    static calculatePoints(player) {
        let totalPoints = 0;

        Match.getPlayersPieces(player).forEach(piece => {
            totalPoints += pieceValues[piece.pieceType] || 0;
        });

        return totalPoints;
    }

    static getPlayersPieces(player) {
        return allPieces.filter(piece => piece.player === player);
    }

    static doesPlayerHaveKing(player) {
        if (player === 1 && Player.hasUpgrade('noKingNeeded')) return true;

        // check for kings
        for (const kingPiece of allPieces.filter(piece => piece.pieceType === 'king')) {
            if (kingPiece.player === player) return true;
        }

        return false;
    }

    static isGameOver() {
        const playerHasKing = Match.doesPlayerHaveKing(1);
        const enemyHasKing = Match.doesPlayerHaveKing(2);

        // check player has moves
        let currentPlayerCanMove = false;
        for (const piece of Match.getPlayersPieces(currentTurn)) {
            if (piece.availableMoves.length > 0) currentPlayerCanMove = true;
        }
    
        return !playerHasKing || !enemyHasKing || !currentPlayerCanMove;
    }

    static endGame() {
        let goldEarned = 0;
        const matchResult = Match.determineWinner();
        if (matchResult === 'You won!') {
            Player.matchStreak += 1;
            goldEarned = Player.matchStreak + Math.ceil(Match.calculatePoints(2) / 3);
            Player.gold += goldEarned > 0 ? goldEarned : 0;
        } else if (matchResult === 'You lost!') {
            Player.matchStreak = 0;
        }

        if (Player.matchStreak > Player.highestStreak) Player.highestStreak = Player.matchStreak;
        if (matchResult === 'You won!') Player.matchesWon += 1;
        if (matchResult === 'You lost!') Player.matchesLost += 1;
        Player.goldEarned += goldEarned;

        //save loadout
        Player.loadOut = [];
        Match.getPlayersPieces(1).forEach(piece => {
            Player.loadOut.push(piece.pieceType);
        });

        //find shop items
        Player.shopItems = [];
        const remainingUpgrades = UpgradeData.filter(upgrade => !Player.hasUpgrade(upgrade.id))
        shuffle(remainingUpgrades);
        for(let i = 0; i < Player.shopSize && i < remainingUpgrades.length; i++) {
            if (!Player.hasUpgrade(remainingUpgrades[i].id)) Player.shopItems.push(remainingUpgrades[i].id);
        }

        ViewHandler.promptEndGameMessage(matchResult, goldEarned);
        currentTurn = 0; //pause
        Chessboard.clearHighlights();
        Player.saveToLocalStorage();
    }

    static determineWinner() {
        const playerHasKing = Match.doesPlayerHaveKing(1);
        const playerPoints = Match.calculatePoints(1);

        const enemyHasKing = Match.doesPlayerHaveKing(2);
        const enemyPoints = Match.calculatePoints(2);

        if (playerHasKing && !enemyHasKing) return 'You won!';
        if (enemyHasKing && !playerHasKing) return 'You lost!';
        if (playerPoints > enemyPoints) return 'You won!';
        if (enemyPoints > playerPoints) return 'You lost!';
        return 'Stalemate';
    }

    static checkPawnsForPromotions() {
        for(const piece of allPieces) {
            if (piece.pieceType === 'pawn') {
                if (piece.pos.y === 0 && piece.player === 1) {
                    currentTurn = 0; //pause
                    ViewHandler.promptPromotion(piece);
                    return true;
                } else if (piece.pos.y === Player.boardSize - 1 && piece.player === 2) {
                    piece.promote('random');
                }
            }
        }
        return false;
    }

    static endTurn() {
        //end if paused
        if (currentTurn === 0) return;

        //promote pawns
        if (!promotionDisabled && Match.checkPawnsForPromotions()) return;

        //end game?
        if (Match.isGameOver()) {
            Match.endGame();
            return;
        }

        //handle turn swap
        currentTurn = currentTurn === 1 ? 2 : 1; //swap between player (1) and enemy (2)
        ViewHandler.printMatchUI(`${currentTurn == 1 ? "Player's turn" : "Enemy's Turn"}`); //display either player's or enemy's turn

        //recalculate Moves
        allPieces.forEach(piece => piece.availableMoves = piece.calculateAvailableMoves());
        Chessboard.generalHighlights();

        if (currentTurn === 2) { //if enemy's turn
            setTimeout(() => { Enemy.turn() }, Player.turnTime);
        }
    }
}
