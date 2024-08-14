//credits:
    // piece images source: https://opengameart.org/content/8x13-chess-pieces
    // skull image source: https://opengameart.org/content/pixel-art-skull

// Global Constants
//#region constants
const UpgradeData = [
    {
        id: "pawnTwoSteps",
        name: 'Charging Pawns',
        description: "Pawn's can always march 2 squares",
        cost: 10
    },
    {
        id: "pawnMoveDiagonal",
        name: 'Weaving Pawns',
        description: "Pawn's can move Diagonally without attacking",
        cost: 10
    },
    {
        id: "pawnAttackFowards",
        name: 'Stronger Pawns',
        description: "Pawn's can now attack forwards",
        cost: 10
    },
    {
        id: "piecesCanJump",
        name: "Jumping Pieces",
        description: "Pieces won't block your path",
        cost: 40
    },
    {
        id: "kingMovesLikeQueen",
        name: "Drag Queen",
        description: "Your king will move like a queen",
        cost: 20
    },
    {
        id: "restockGoodPieces",
        name: "Trained Reinforcements",
        description: "50% Chance reinforcements will be a promoted piecetype",
        cost: 10
    },
    {
        id: "noKingNeeded",
        name: "Constitutional Monarchy",
        description: "No King needed. Keep playing until you run out of pieces.",
        cost: 40
    },
    {
        id: "protectiveSight",
        name: "Protective Tower",
        description: "Your unsafe pieces will be highlighted.",
        cost: 5
    },
    {
        id: "safetySight",
        name: "Safety of the Church",
        description: "When you begin to move your piece, unsafe tiles will be marked.",
        cost: 5
    },
    {
        id: "killerSight",
        name: "Watchful Cavalry",
        description: "You will see the enemy's unsafe pieces sweat with fear.",
        cost: 5
    },
    {
        id: "extraTeamSlot",
        name: "Reinforcements",
        description: "Play with 1 extra piece.",
        cost: 10
    },
    {
        id: "largerChessboard",
        name: "Wider Battlefield",
        description: "Makes the chessboard 1 tile wider/taller.",
        cost: 10
    },
    // {
    //     id: "rookImuneToPawns",
    //     name: "Fortified Rooks",
    //     description: "Makes Rooks imune to pawns",
    //     cost: 20
    // }
    {
        id: "saferKing",
        name: "Battleplan Position",
        description: "King will always spawn in the back row.",
        cost: 5
    },
    {
        id: "deeperKnights",
        name: "Scouting Parties",
        description: "knights will spawn 4-5 tiles deep into the board",
        cost: 10
    },
    {
        id: "promotionDiscount",
        name: "Promotion Discount",
        description: "Promoting to a specific piece will cost you 1 less gold.",
        cost: 5
    },
    {
        id: "promoteToKing",
        name: "Noble Heirs",
        description: "You are able to promote a pawn to an additional king.",
        cost: 20
    }
    //player.upgrades.includes('upgradeID')
]
const pieceColor = {
    0: "PAUSED",
    1: "white",
    2: "black"
}
const Player = new PlayerObj();
const Enemy = new EnemyObj();
//#endregion constants

// Global Variables
let currentTurn = '0'; //0 = paused, 1 = white, 2 = black
let allPieces = [];
let forfeitCounter = 0;
let promotionDisabled = false;

function Initialize() {
    Player.loadFromLocalStorage();
    ViewHandler.loadStartMenu();
    ViewHandler.attachListeners();
}

document.addEventListener('DOMContentLoaded', () => {
    Initialize();

    //test match functions
    // Match.newMatch();
    // ViewHandler.promptPromotion(allPieces[1]);
    // promptEndGameMessage('you won', 'congrats');
});