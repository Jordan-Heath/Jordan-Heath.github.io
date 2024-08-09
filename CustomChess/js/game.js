//credits:
    // piece images source: https://opengameart.org/content/8x13-chess-pieces

//elements
//#region elements
const chessboard = document.getElementById('chessboard');
const ui = document.getElementById('ui');
const popup = document.getElementById('popup');
const matchInfo = document.getElementById('matchInfo');
const turnIndicator = document.getElementById('turnIndicator');
const runInfo = document.getElementById('runInfo');
// #endregion elements

//constants
//#region constants
const boardSize = 8;
const turnTime = 300; //ms
const forfeitThreshold = 5;
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
        cost: 20
    }
    //player.upgrades.includes('upgradeID')
]
//#endregion constants

//variables
let currentTurn;
let pieces = [];
let forfeitCounter = 0;
let player = new Player();

function Initialize() {
    player.loadFromLocalStorage();
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
                forfeitCounter = 0;
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
        forfeitCounter = 0;
        randomPiece.piece.movePiece(randomMove);
        return;
    }

    //forfeit is closer
    forfeitCounter += 1;
    if (forfeitCounter >= 5 ) {
        promptEnemyForfeit();
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

function promptEnemyForfeit() {
    currentTurn = 'PAUSED';

    popup.innerHTML = "<h2>Enemy Offer's Forfeit</h2>";

    const AcceptButton = document.createElement('button');
    AcceptButton.onclick = () => {
        pieces.find(piece => piece.pieceType === 'king' && piece.player === 'enemy').kill(50, -50, 200);
        endGame();
    };
    AcceptButton.innerText = `Accept`;
    popup.appendChild(AcceptButton);

    const RejectButton = document.createElement('button');
    RejectButton.onclick = () => {
        forfeitCounter = 0;
        currentTurn = 'enemy';
        enemyTurn();
    };
    RejectButton.innerText = `Reject`;
    popup.appendChild(RejectButton);

    popup.style.display = 'block';

    currentTurn = 'PAUSED';
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
    const playerHasKing = document.querySelectorAll(`.player.king`).length > 0 || player.upgrades.includes('noKingNeeded'); //TODO: do this better
    const enemyHasKing = document.querySelectorAll(`.enemy.king`).length > 0; //TODO: do this better

    const currentPlayerCanMove = canPlayerMove(currentTurn);

    return !playerHasKing || !enemyHasKing || !currentPlayerCanMove;
}

function determineWinner() {
    const playerHasKing = (document.querySelectorAll(`.player.king`).length > 0 || player.upgrades.includes('noKingNeeded')); //TODO: do this better
    const enemyHasKing = document.querySelectorAll(`.enemy.king`).length > 0; //TODO: do this better
    const playerPoints = calculatePoints('player');
    const enemyPoints = calculatePoints('enemy');

    let matchResult;

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
        player.matchStreak += 1;
        goldEarned = calculatePoints('player') - calculatePoints('enemy');
        goldEarned = Math.ceil(player.matchStreak * goldEarned / 5)
        player.gold += goldEarned > 0 ? goldEarned : 0;
    } else if ('You lost!' == matchResult) {
        player.matchStreak = 0;
    }

    // Save Player Loadout
    player.loadOut = [];
    getPlayersPieces('player').forEach(piece => {
        player.loadOut.push(piece.pieceType);
    });

    endGameMessage(matchResult, `You earned ${goldEarned} gold - giving you a total of ${player.gold} gold.`);
    printUI('');
    currentTurn = 'none';
    clearHighlights();
    player.saveToLocalStorage();
}

function getShopItems() {
    const shopItems = document.createElement('div');
    shopItems.classList.add('shop');

    const availableUpgrades = [];
    upgradeData.forEach(upgrade => {
        if (!player.upgrades.includes(upgrade.id)) availableUpgrades.push(upgrade);
    });

    shuffle(availableUpgrades);

    for(let i = 0; i < player.shopSize && i < availableUpgrades.length; i++) {
        const shopItemDiv = document.createElement('div');
        shopItemDiv.classList.add('item');

        const buyButton = document.createElement('button');
        buyButton.innerText = `${availableUpgrades[i].name} (${availableUpgrades[i].cost})`;
        if (availableUpgrades[i].cost > player.gold) buyButton.style.disabled = 'true';
        buyButton.addEventListener('click', () => {
            buyButton.disabled = 'true';
            if (player.gold >= availableUpgrades[i].cost) {
                player.gold -= availableUpgrades[i].cost;
                player.upgrades.push(availableUpgrades[i].id);
                document.getElementById('endGameMessageParagraph').innerHTML = `Enjoy your upgrade! You now have ${player.gold} gold`
                buyButton.innerText = "Enjoy"
            } else {
                buyButton.innerText = "Cannot Afford"
            }
        })
        shopItemDiv.appendChild(buyButton);

        const itemDescription = document.createElement('p');
        itemDescription.innerText = availableUpgrades[i].description;
        shopItemDiv.appendChild(itemDescription);

        shopItems.appendChild(shopItemDiv);
    }

    return shopItems;
}

function buildEnemyTeam() {
    const loadOut = [];

    loadOut.push('king');

    while(loadOut.length < boardSize) {
        if (loadOut.length < player.matchStreak) loadOut.push(getWeightedRandomPiece());
        else loadOut.push('pawn');
    }

    return loadOut;
}

function newMatch() {
    //reset variables
    popup.innerHTML = '';
    popup.style.display = 'none';
    currentTurn = 'player'
    player.saveToLocalStorage();

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
    if (!player.loadOut.includes('king')) player.loadOut.push('king');
    while (player.loadOut.length < 8) {
        if (player.upgrades.includes('restockGoodPieces') && Math.random() > 0.5) {
            player.loadOut.push(getWeightedRandomPiece());
        } else player.loadOut.push('pawn');
    }
    const enemyLoadOut = buildEnemyTeam();

    pieces = [];
    for (var i = 0; i < boardSize; i++) {
        pieces.push(new Piece(player.loadOut[i], playerPiecePositions[i], 'player'));
        pieces.push(new Piece(enemyLoadOut[i], enemyPiecePositions[i], 'enemy'));
    }

    // Allow dropping on cells
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('dragover', handleDragOver);
        cell.addEventListener('drop', handleDrop);

        // cell.addEventListener('touchMove', handleDragOver);
        // cell.addEventListener('touchEnd', handleDrop);
    });

    printUI("Player's Turn");

    highlightAvailablePieces();
}

function endGameMessage(result, message) {
    popup.innerHTML = '';

    const heading = document.createElement('h2');
    heading.innerHTML = result;
    popup.appendChild(heading);

    const endGameMessageParagraph = document.createElement('p');
    endGameMessageParagraph.id = 'endGameMessageParagraph';
    endGameMessageParagraph.innerHTML = message;
    popup.appendChild(endGameMessageParagraph);

    popup.appendChild(getShopItems());

    const newMatchButton = document.createElement('button');
    newMatchButton.innerHTML = 'New Match'
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
    <p>Match Streak: ${player.matchStreak} </p>
    <p>Gold: ${player.gold}</p>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    Initialize();
});