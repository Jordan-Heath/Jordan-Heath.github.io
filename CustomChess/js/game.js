//credits:
    // piece images source: https://opengameart.org/content/8x13-chess-pieces

//elements
const chessboard = document.getElementById('chessboard');
const ui = document.getElementById('ui');
const popup = document.getElementById('popup');
const matchInfo = document.getElementById('matchInfo');
const turnIndicator = document.getElementById('turnIndicator');
const runInfo = document.getElementById('runInfo');

//constants
const boardSize = 8;
const turnTime = 300; //ms
const pieceValues = {
    'pawn': 1,
    'knight': 3,
    'bishop': 3,
    'rook': 5,
    'queen': 9,
    'king': 0 // Typically, the king is not assigned a point value for game-ending purposes
};
const upgradeData = [
    {
        id: "pawnTwoSteps",
        name: 'Charging Pawns',
        description: "Pawn's can always march 2 squares",
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
        cost: 20
    }
]

//variables
let selectedCell;
let currentTurn;
let playerLoadOut = [
    'king',
    'pawn',
    'pawn',
    'pawn',
    'pawn',
    'pawn',
    'pawn',
    'pawn'
];
let enemyLoadOut = [
    'king',
    'pawn',
    'pawn',
    'pawn',
    'pawn',
    'pawn',
    'pawn',
    'pawn'
];
let matchStreak = 0;
let playerGold = 0;
let pieces = [];
let purchasedUpgrades = [
    // "pawnTwoSteps",
    // "pawnAttackFowards",
    // "piecesCanJump"
];


function Initialize() {
    newMatch();
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();

    const startPos = JSON.parse(e.dataTransfer.getData('text/plain'));
    const targetElement = e.target.classList.contains('cell') ? e.target : e.target.parentNode;
    const endPos = JSON.parse(targetElement.dataset.pos);

    const piece = getPiece(startPos);

    if (!piece) return;

    if (piece.isValidMove(endPos) || piece.isValidAttack(endPos)) piece.movePiece(endPos);
}

function handleCellClick(e) {
    if (selectedCell) {
        const startPos = getPos(selectedCell);
        const endPos = getPos(e.target);

        const piece = getPiece(startPos);

        if (piece.isValidMove(endPos) || piece.isValidAttack(endPos)) piece.movePiece(endPos);
    }
}

function endTurn() {
    //change turn
    currentTurn = currentTurn === 'player' ? 'enemy' : 'player';
    printUI(`${currentTurn.charAt(0).toUpperCase() + currentTurn.slice(1)}'s turn`);
    highlightPieces();

    // Check if the game is over
    if (isGameOver()) {
        endGame();
        return;
    }

    if (currentTurn === 'enemy') {
        setTimeout(enemyTurn, turnTime);
    }
}

function enemyTurn() {
    const enemyPieces = getPlayersPieces('enemy');
    if (enemyPieces.length === 0) return; // No pieces to move

    let allPiecesMoves = [];

    // Iterate through each enemy piece
    for (var i = 0; i < enemyPieces.length; i++) {
        const pieceAndMoves = {piece: enemyPieces[i], moves: enemyPieces[i].calculatePossibleMoves() };

        if (pieceAndMoves.moves.length > 0) allPiecesMoves.push(pieceAndMoves);
    }

    if (allPiecesMoves.length === 0) return; // No pieces have valid moves or attacks

    //choose a random piece
    const pieceAndMoves = allPiecesMoves[Math.floor(Math.random() * allPiecesMoves.length)];
    const endPos = pieceAndMoves.moves[Math.floor(Math.random() * pieceAndMoves.moves.length)];

    pieceAndMoves.piece.movePiece(endPos);
}

// Calculate the total points for a player
function calculatePoints(player) {
    let totalPoints = 0;
    const pieces = getPlayersPieces(player);
    pieces.forEach(piece => {
        totalPoints += pieceValues[piece.pieceType] || 0;
    });
    return totalPoints;
}

// Check if a player can make any valid moves
function canPlayerMove(player) {
    const pieces = getPlayersPieces(player);
    for (const piece of pieces) {
        if (piece.calculatePossibleMoves().length > 0) return true;
    }
    return false;
}

// Check if the game is over
function isGameOver() {
    const playerHasKing = document.querySelectorAll(`.player.king`).length > 0; //TODO: do this better
    const enemyHasKing = document.querySelectorAll(`.enemy.king`).length > 0; //TODO: do this better

    const currentPlayerCanMove = canPlayerMove(currentTurn);

    return !playerHasKing || !enemyHasKing || !currentPlayerCanMove;
}

function endGame() {
    const playerHasKing = document.querySelectorAll(`.player.king`).length > 0; //TODO: do this better
    const enemyHasKing = document.querySelectorAll(`.enemy.king`).length > 0; //TODO: do this better
    const playerPoints = calculatePoints('player');
    const enemyPoints = calculatePoints('enemy');
    let result;
    let pointsEarned = 0;

    //determine winner
    if ((playerHasKing && !enemyHasKing) || playerPoints > enemyPoints) {
        result = 'You won!';
        pointsEarned = enemyPoints < playerPoints ? playerPoints - enemyPoints : 0;
        playerGold += pointsEarned;
        matchStreak += 1;
    } else if ((enemyHasKing && !playerHasKing) || enemyPoints > playerPoints) {
        result = 'You lost!'
        matchStreak = 0;
    } else {
        result = 'Stalemate'
    }

    // Build player loadout
    playerLoadOut = [];
    getPlayersPieces('player').forEach(piece => {
        playerLoadOut.push(piece.pieceType);
    });

    //ensure player has a king
    if (!playerLoadOut.includes('king')) playerLoadOut.push('king');

    // Add pawns to the loadout until there are 8 values
    while (playerLoadOut.length < 8) {
        playerLoadOut.push('pawn');
    }

    endGameMessage(result, `You earned ${pointsEarned} gold`);
    printUI('');
    currentTurn = 'none';
    clearHighlights();
}

function getShopItems() {
    const shopItems = document.createElement('div');
    shopItems.classList.add('shop');

    const availableUpgrades = [];
    upgradeData.forEach(upgrade => {
        if (!purchasedUpgrades.includes(upgrade.id)) availableUpgrades.push(upgrade);
    });

    //TODO: randomly select 3 upgrades
    const selectedShopUpgrades = availableUpgrades;

    selectedShopUpgrades.forEach(selectedUpgrade => {
        const shopItemDiv = document.createElement('div');
        shopItemDiv.classList.add('item');

        const buyButton = document.createElement('button');
        buyButton.innerText = `${selectedUpgrade.name} (${selectedUpgrade.cost})`;
        buyButton.addEventListener('click', () => {
            buyButton.disabled = 'true';
            if (playerGold >= selectedUpgrade.cost) {
                playerGold -= selectedUpgrade.cost;
                purchasedUpgrades.push(selectedUpgrade.id);
                buyButton.innerText = "Enjoy"
            } else {
                buyButton.innerText = "Cannot Afford"
            }
        })
        shopItemDiv.appendChild(buyButton);

        const itemDescription = document.createElement('p');
        itemDescription.innerText = selectedUpgrade.description;
        shopItemDiv.appendChild(itemDescription);

        shopItems.appendChild(shopItemDiv);
    });

    return shopItems;
}

function newMatch() {
    //reset variables
    popup.innerHTML = '';
    popup.style.display = 'none';
    currentTurn = 'player'

    //build chessboard
    chessboard.innerHTML = '';
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
            cell.dataset.pos = JSON.stringify({ x: col, y: row });
            cell.addEventListener('click', handleCellClick);
            chessboard.appendChild(cell);
        }
    }

    const playerPiecePositions = getRandomPositions(boardSize-3, boardSize-1, boardSize); // Bottom 3 rows for player
    const enemyPiecePositions = getRandomPositions(0, 2, boardSize); // Top 3 rows for enemy

    pieces = [];
    for (var i = 0; i < boardSize; i++) {
        pieces.push(new Piece(playerLoadOut[i], playerPiecePositions[i], 'player'));
        pieces.push(new Piece(enemyLoadOut[i], enemyPiecePositions[i], 'enemy'));
    }

    // Allow dropping on cells
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('dragover', handleDragOver);
        cell.addEventListener('drop', handleDrop);
    });

    printUI("Player's Turn");

    highlightPieces();
}

function endGameMessage(result, message) {
    const heading = document.createElement('h2');
    heading.innerText = result;
    popup.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.innerText = message;
    popup.appendChild(paragraph);

    popup.appendChild(getShopItems());

    const newMatchButton = document.createElement('button');
    newMatchButton.innerText = 'New Match'
    newMatchButton.addEventListener('click', newMatch);
    popup.appendChild(newMatchButton);

    popup.style.display = 'block';
}

function printUI(message) {
    matchInfo.innerHTML = `
    <p>Player Score: ${calculatePoints('player')}</p>
    <p>Enemy Score: ${calculatePoints('enemy')}</p>
    `;

    turnIndicator.innerHTML = `
    <p>${message}</p>
    `;

    runInfo.innerHTML = `
    <p>Match Streak: ${matchStreak} </p>
    <p>Gold: ${playerGold}</p>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    Initialize();
});