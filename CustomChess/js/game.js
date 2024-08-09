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
const upgradeData = [
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
        cost: 20
    }
]

//variables
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
    // "pawnMoveDiagonal",
    // "pawnAttackFowards",
    // "piecesCanJump"
];
let promotionDiscount = 1;


function Initialize() {
    newMatch();
}

function endTurn() {
    //change turn
    currentTurn = currentTurn === 'player' ? 'enemy' : 'player';
    printUI(`${currentTurn.charAt(0).toUpperCase() + currentTurn.slice(1)}'s turn`);
    highlightAvailablePieces();

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
    const kingPiece = enemyPieces.find(piece => piece.pieceType === 'king');

    // Gather possible moves for each enemy piece
    const allPiecesMoves = [];
    for (let piece of enemyPieces) {
        const possibleMoves = piece.calculatePossibleMoves();
        if (possibleMoves.length > 0) {
            allPiecesMoves.push({ piece, moves: possibleMoves });
        }
    }

    // 1. Check if the king is in danger and prioritize moves to save it
    if (isPosDangerous(kingPiece, kingPiece.pos, 'enemy')) {
        // Try moving the king to a safe position
        const possibleKingMoves = kingPiece.calculatePossibleMoves();
        for (const move of possibleKingMoves) {
            if (!isPosDangerous(kingPiece, move, 'enemy')) {
                kingPiece.movePiece(move);
                return;
            }
        }
    }

    // 2. Prioritize attacking moves
    for (let pieceAndMoves of allPiecesMoves) {
        for (let move of pieceAndMoves.moves) {
            const targetPiece = getPieceFromPos(move);
            if (targetPiece) {
                // If the piece is the king, ensure the move is to a safe position
                if (pieceAndMoves.piece.pieceType === 'king' && isPosDangerous(kingPiece, move, 'enemy')) {
                    continue;
                }
                pieceAndMoves.piece.movePiece(move);
                return;
            }
        }
    }

    // 3. Move any piece except the king
    const nonKingMoves = allPiecesMoves.filter(pieceAndMoves => pieceAndMoves.piece.pieceType !== 'king');
    if (nonKingMoves.length > 0) {
        const randomPiece = nonKingMoves[Math.floor(Math.random() * nonKingMoves.length)];
        const randomMove = randomPiece.moves[Math.floor(Math.random() * randomPiece.moves.length)];
        randomPiece.piece.movePiece(randomMove);
        return;
    }

    // 4. Move the king if no non-king moves are available
    // Try moving the king to a safe position
    const possibleKingMoves = kingPiece.calculatePossibleMoves();
    shuffle(possibleKingMoves);
    for (const move of possibleKingMoves) {

        if (!isPosDangerous(kingPiece, move, 'enemy')) {
            kingPiece.movePiece(move);
            return;
        }
    }
    // If no safe moves for the king, make any move with the king
    const randomMove = possibleKingMoves[Math.floor(Math.random() * possibleKingMoves.length)];
    if (randomMove) {
        console.log('CheckMate');
        kingPiece.movePiece(randomMove);
        return;
    }
}


// Utility function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
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

function determineWinner() {
    const playerHasKing = document.querySelectorAll(`.player.king`).length > 0; //TODO: do this better
    const enemyHasKing = document.querySelectorAll(`.enemy.king`).length > 0; //TODO: do this better
    const playerPoints = calculatePoints('player');
    const enemyPoints = calculatePoints('enemy');

    let matchResult

    // Determine the winner
    if (playerHasKing && !enemyHasKing) {
        matchResult = 'You won!';
    } else if (enemyHasKing && !playerHasKing) {
        matchResult = 'You lost!';
    } else if (playerPoints > enemyPoints) {
        matchResult = 'You won!';
    } else if (enemyPoints > playerPoints) {
        matchResult = 'You lost!';
    } else {
        matchResult = 'Stalemate'
    }

    return matchResult;
}

function endGame() {
    let goldEarned = 0;

    //determine & handle win/loss
    const matchResult = determineWinner();
    if ('You won!' == matchResult) {
        matchStreak += 1;
        goldEarned = calculatePoints('player') - calculatePoints('enemy');
        goldEarned = Math.ceil(matchStreak * goldEarned / 5)
        playerGold += goldEarned > 0 ? goldEarned : 0;
    } else if ('You lost!' == matchResult) {
        matchStreak = 0;
    }

    // Save Player Loadout
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

    endGameMessage(matchResult, `You earned ${goldEarned} gold`);
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

function buildEnemyTeam() {
    const loadOut = [];

    loadOut.push('king');

    while(loadOut.length < boardSize) {
        if (loadOut.length < matchStreak) loadOut.push(getWeightedRandomPiece());
        else loadOut.push('pawn');
    }

    return loadOut;
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
    enemyLoadOut = buildEnemyTeam();

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

    highlightAvailablePieces();
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