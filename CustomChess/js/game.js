//credits:
    // piece images source: https://opengameart.org/content/8x13-chess-pieces
    // skull image source: https://opengameart.org/content/pixel-art-skull
    // chess sounds source: https://pixabay.com/sound-effects/chess-pieces-60890/

// Global Constants
//#region constants

//rarity is based on cost of upgrade
const UpgradeData = [
    //#region Pawn
    {
        id: "pawnTwoSteps",
        name: 'Charging Pawns',
        description: "Pawn's can always march 2 squares",
        rarity: "Uncommon",
        cost: 10
    },
    {
        id: "pawnMoveDiagonal",
        name: 'Weaving Pawns',
        description: "Pawn's can move Diagonally without attacking",
        rarity: "Uncommon",
        cost: 10
    },
    {
        id: "pawnAttackFowards",
        name: 'Stronger Pawns',
        description: "Pawn's can now attack forwards",
        rarity: "Uncommon",
        cost: 10
    },
    //#endregion Pawn
    //#region Rook
    {
        id: "rookImmuneToPawns",
        name: "Fortified Rooks",
        description: "Makes your rooks immune to enemy pawns.",
        rarity: "Uncommon",
        cost: 10
    },
    //#endregion Rook
    //#region Bishop
    {
        id: "bishopsCanMove1Tile",
        name: "Protestant Reformation",
        description: "Bishops can move 1 tile up down left or right, allowing them to change their tile color.",
        rarity: "Rare",
        cost: 20
    },
    //#endregion Bishop
    //#region Knight
    {
        id: "deeperKnights",
        name: "Scouting Parties",
        description: "Knights will spawn 4-5 tiles deep into the board",
        rarity: "Uncommon",
        cost: 10
    },
    {
        id: "knightBigLMovement",
        name: "Agile Knights",
        description: "Knights will be able to move 2x3 squares in addition to 1x2 squares.",
        rarity: "Rare",
        cost: 20
    },
    //#endregion Knight
    //#region Queen
    {
        id: "queenEarnsGoldFromKills",
        name: "Queen's Tax",
        description: "Earn 5 gold every your queen kills an opposing piece.",
        rarity: "Rare",
        cost: 20
    },
    //#endregion Queen
    //#region King
    {
        id: "kingMovesLikeQueen",
        name: "Drag Queen",
        description: "Your king will move like a queen",
        rarity: "Rare",
        cost: 20
    },
    {
        id: "noKingNeeded",
        name: "Constitutional Monarchy",
        description: "No King needed. Keep playing until you run out of pieces.",
        rarity: "Legendary",
        cost: 40
    },
    {
        id: "saferKing",
        name: "Battleplan Position",
        description: "King will always spawn in the back row.",
        rarity: "Common",
        cost: 5
    },
    //#endregion King
    {
        id: "piecesCanJump",
        name: "Jumping Pieces",
        description: "Pieces won't block your path",
        rarity: "Legendary",
        cost: 40
    },
    {
        id: "restockGoodPieces",
        name: "Trained Reinforcements",
        description: "70% Chance reinforcements will be a promoted piecetype",
        rarity: "Uncommon",
        cost: 10
    },
    {
        id: "protectiveSight",
        name: "Protective Tower",
        description: "Your unsafe pieces will be highlighted.",
        rarity: "Common",
        cost: 5
    },
    {
        id: "safetySight",
        name: "Safety of the Church",
        description: "When you begin to move your piece, unsafe tiles will be marked.",
        rarity: "Common",
        cost: 5
    },
    {
        id: "killerSight",
        name: "Watchful Cavalry",
        description: "You will see the enemy's unsafe pieces sweat with fear.",
        rarity: "Common",
        cost: 5
    },
    {
        id: "extraTeamSlot",
        name: "Reinforcements",
        description: "Play with 1 extra piece.",
        rarity: "Uncommon",
        cost: 10
    },
    {
        id: "largerChessboard",
        name: "Wider Battlefield",
        description: "Makes the chessboard 1 tile wider/taller.",
        rarity: "Uncommon",
        cost: 10
    },
    {
        id: "promotionDiscount",
        name: "Promotion Discount",
        description: "Promoting to a specific piece will cost you 1 less gold.",
        rarity: "Common",
        cost: 5
    },
    {
        id: "promoteToKing",
        name: "Noble Heirs",
        description: "You are able to promote a pawn to an additional king.",
        rarity: "Rare",
        cost: 20
    },
    {
        id: "mindControl",
        name: "Mind Control",
        description: "Once per game, move an enemy's piece.",
        rarity: "Legendary",
        cost: 40
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
const ChessSounds = [];
//#endregion constants

// Global Variables
let currentTurn = '0'; //0 = paused, 1 = white, 2 = black
let allPieces = [];
let forfeitCounter = 0;
let promotionDisabled = false;
let mindControlEnabled = false;

function Initialize() {
    for (let i = 0; i < 8; i++) ChessSounds.push(new Audio(`assets/sounds/chess-sound-${i}.mp3`));

    Player.loadFromLocalStorage();
    ViewHandler.loadDarkMode();
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