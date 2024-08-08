// Piece Management Functions
function createPiece(pieceName, pos, player) {
    const piece = document.createElement('div');
    piece.classList.add('piece', player, pieceName);
    piece.dataset.pos = JSON.stringify(pos);
    piece.draggable = true;
    piece.addEventListener('dragstart', handleDragStart);
    piece.addEventListener('click', handlePieceClick);

    const cell = getCell(pos);
    cell.appendChild(piece);
}

function movePiece(piece, endPos) {
    const targetCell = getCell(endPos);
    const startCell = getCell(getPos(piece));
    unHighlightPieces();

    // Clean up selected state
    selectCell(null);

    // Call movePieceAnimation to handle any animation effects
    movePieceAnimation(piece, startCell, targetCell, () => {
        targetCell.innerHTML = '';

        // Move the piece and update its position
        targetCell.appendChild(piece);
        piece.dataset.pos = JSON.stringify(endPos);

        if (piece.classList.contains('pawn')) {
            if (endPos.y === 0 && piece.classList.contains('player')) {
                promptPromotion(piece, endPos);
                return;
            } else if ((endPos.y === boardSize-1 && piece.classList.contains('enemy'))) {
                //TODO: enemy piece promotion
                const pieces = Object.keys(pieceValues).filter(pieceName => pieceName !== 'pawn');
                const randomIndex = Math.floor(Math.random() * pieces.length);
                promotePawn(piece, pieces[randomIndex], endPos);
                return;
            }
        }

        endTurn();
    });
}

function movePieceAnimation(piece, startCell, targetCell, callback) {
    const startPos = getCellPosition(startCell);
    const endPos = getCellPosition(targetCell);

    // Create an arrow element
    document.querySelector('.arrow')?.remove();
    const arrow = document.createElement('div');
    arrow.classList.add('arrow');
    startCell.appendChild(arrow);

    // Calculate the angle for the arrow
    const deltaX = endPos.x - startPos.x;
    const deltaY = endPos.y - startPos.y;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    // Style the arrow
    arrow.style.transform = `rotate(${angle}deg)`;
    // arrow.style.left = `${(startPos.x - targetCell.getBoundingClientRect().left) + (deltaX / 2)}px`;
    // arrow.style.top = `${(startPos.y - targetCell.getBoundingClientRect().top) + (deltaY / 2)}px`;

    // Apply the animation transform
    requestAnimationFrame(() => {
        piece.style.transition = 'transform 0.3s ease';
        piece.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

        // After the animation completes, move the piece back to the grid and reset styles
        piece.addEventListener('transitionend', () => {
            piece.style.transition = '';
            piece.style.transform = '';

            // Append the piece to the target cell in the grid
            callback();
        }, { once: true });
    });
}


function getCellPosition(cell) {
    const rect = cell.getBoundingClientRect();
    return { x: rect.left, y: rect.top };
}

function promptPromotion(piece, pos) {
    popup.innerHTML = '<h2>Promote Your Pawn</h2>';

    const knightButton = document.createElement('button');
    knightButton.onclick = () => promotePawn(piece, 'knight', pos);
    knightButton.innerText = `Knight (${pieceValues['knight'] - 3})`;
    if (playerGold < pieceValues['knight'] - 3) knightButton.disabled = 'true';
    popup.appendChild(knightButton);

    const bishopButton = document.createElement('button');
    bishopButton.onclick = () => promotePawn(piece, 'bishop', pos);
    bishopButton.innerText = `Bishop (${pieceValues['bishop'] - 3})`;
    if (playerGold < pieceValues['bishop'] - 3) bishopButton.disabled = 'true';
    popup.appendChild(bishopButton);

    const rookButton = document.createElement('button');
    rookButton.onclick = () => promotePawn(piece, 'rook', pos);
    rookButton.innerText = `Rook (${pieceValues['rook'] - 3})`;
    if (playerGold < pieceValues['rook'] - 3) rookButton.disabled = 'true';
    popup.appendChild(rookButton);

    const queenButton = document.createElement('button');
    queenButton.onclick = () => promotePawn(piece, 'queen', pos);
    queenButton.innerText = `Queen (${pieceValues['queen'] - 3})`;
    if (playerGold < pieceValues['queen'] - 3) queenButton.disabled = 'true';
    popup.appendChild(queenButton);

    popup.style.display = 'block';

    currentTurn = 'PAUSED';
}

function promotePawn(pawn, newPieceType, pos) {
    // Remove the pawn
    pawn.remove();

    // Create the new piece
    createPiece(newPieceType, pos, pawn.classList.contains('player') ? 'player' : 'enemy');

    //hide message
    popup.innerHTML = '';
    popup.style.display = 'none';

    if (currentTurn == 'PAUSED') currentTurn = 'player';
    endTurn();
}

function getPos(element) {
    return JSON.parse(element.dataset.pos);
}

function getCell(pos) {
    const posString = JSON.stringify(pos);
    return chessboard.querySelector(`.cell[data-pos='${posString}']`);
}

function getPiece(pos) {
    const cell = getCell(pos);
    return cell ? cell.querySelector('.piece') : null;
}

function highlightValidCells(piece) {
    const pos = getPos(piece);
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.classList.remove('highlight'));

    const targetCells = calculatePossibleMoves(pos, piece);

    targetCells.forEach(targetCellCoords => {
        const targetCell = getCell(targetCellCoords[1])
        targetCell.classList.add('highlight');
    });
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

function selectCell(cell) {
    selectedCell?.classList.remove('selected');
    selectedCell = cell;
    if (cell) {
        selectedCell?.classList.add('selected');
        const pos = getPos(selectedCell);
        const selectedPiece = getPiece(pos)
        highlightValidCells(selectedPiece);
    }
}

function highlightPieces() {
    //remove existing highlights
    unHighlightPieces();

    //highlight pieces that can move
    if (currentTurn == 'player') {
        const pieces = document.querySelectorAll(`.piece.${currentTurn}`);
        const availablePieces = [];
        pieces.forEach(piece => {
            if (calculatePossibleMoves(getPos(piece), piece).length > 0) availablePieces.push(piece);
        });
        availablePieces.forEach(piece => piece.parentNode.classList.add('available'));
    }
}

function unHighlightPieces() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('highlight')
        cell.classList.remove('available')
    });
}

function enemyTurn() {
    const enemyPieces = document.querySelectorAll('.piece.enemy');
    if (enemyPieces.length === 0) return; // No pieces to move

    let allPiecesMoves = [];

    // Iterate through each enemy piece
    for (var i = 0; i < enemyPieces.length; i++) {
        const pos = getPos(enemyPieces[i]);

        const validMoves = calculatePossibleMoves(pos, enemyPieces[i]);

        if (validMoves.length > 0) allPiecesMoves.push(validMoves);
    }

    if (allPiecesMoves.length === 0) return; // No valid moves or attacks

    //choose a random piece
    const piecesMoves = allPiecesMoves[Math.floor(Math.random() * allPiecesMoves.length)];
    const [ piece, endPos ] = piecesMoves[Math.floor(Math.random() * piecesMoves.length)];

    movePiece(piece, endPos);
}

function getRandomPositions(rowStart, rowEnd, count) {
    const positions = [];
    while (positions.length < count) {
        const row = Math.floor(Math.random() * (rowEnd - rowStart + 1)) + rowStart;
        const col = Math.floor(Math.random() * boardSize);
        const pos = { x: col, y: row };
        if (!positions.some(p => p.x === pos.x && p.y === pos.y)) {
            positions.push(pos);
        }
    }
    return positions;
}

// Calculate the total points for a player
function calculatePoints(player) {
    let totalPoints = 0;
    const pieces = document.querySelectorAll(`.piece.${player}`);
    pieces.forEach(piece => {
        const pieceType = getPieceType(piece);
        totalPoints += pieceValues[pieceType] || 0;
    });
    return totalPoints;
}

// Check if a player can make any valid moves
function canPlayerMove(player) {
    const pieces = document.querySelectorAll(`.piece.${player}`);
    for (const piece of pieces) {
        if (calculatePossibleMoves(getPos(piece), piece).length > 0) return true;
    }
    return false;
}

// Check if the game is over
function isGameOver() {
    const playerHasKing = document.querySelectorAll(`.player.king`).length > 0;
    const enemyHasKing = document.querySelectorAll(`.enemy.king`).length > 0;

    const currentPlayerCanMove = canPlayerMove(currentTurn);

    return !playerHasKing || !enemyHasKing || !currentPlayerCanMove;
}

function endGame() {
    const playerPoints = calculatePoints('player');
    const enemyPoints = calculatePoints('enemy');
    let result;
    let pointsEarned = 0;

    //determine winner
    if (playerPoints > enemyPoints) {
        result = 'You won!';
        pointsEarned = enemyPoints < playerPoints ? playerPoints - enemyPoints : 0;
        playerGold += pointsEarned;
        matchStreak += 1;
    } else if (enemyPoints > playerPoints) {
        result = 'You lost!'
        matchStreak = 0;
    } else {
        result = 'Stalemate'
    }

    // Build player loadout
    playerLoadOut = [];
    document.querySelectorAll('.player').forEach(piece => {
        playerLoadOut.push(getPieceType(piece)); // Assuming piece type is the second class
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
    unHighlightPieces();
}

function newMatch() {
    //reset variables
    popup.innerHTML = '';
    popup.style.display = 'none';
    selectCell(null);
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

    const playerPawnPositions = getRandomPositions(boardSize-3, boardSize-1, boardSize); // Bottom 3 rows for player
    const enemyPawnPositions = getRandomPositions(0, 2, boardSize); // Top 3 rows for enemy

    for (var i = 0; i < boardSize; i++) {
        createPiece(playerLoadOut[i], playerPawnPositions[i], 'player');
        createPiece(enemyLoadOut[i], enemyPawnPositions[i], 'enemy');
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
    popup.innerHTML = `
        <h2>${result}</h2>
        <p>${message}</p>
        <button onclick="newMatch()">New Game</button>
    `;
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