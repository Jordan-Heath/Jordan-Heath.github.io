class Player {
    constructor() {
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
}