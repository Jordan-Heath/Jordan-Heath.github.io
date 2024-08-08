class Chessboard {
    constructor() {

    }

    drawChessboard() {
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
    }
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

function promptPromotion(piece) {
    popup.innerHTML = '<h2>Promote Your Pawn</h2>';

    const knightButton = document.createElement('button');
    knightButton.onclick = () => piece.promote('knight');
    knightButton.innerText = `Knight (${pieceValues['knight'] - 3})`;
    if (playerGold < pieceValues['knight'] - 3) knightButton.disabled = 'true';
    popup.appendChild(knightButton);

    const bishopButton = document.createElement('button');
    bishopButton.onclick = () => piece.promote('bishop');
    bishopButton.innerText = `Bishop (${pieceValues['bishop'] - 3})`;
    if (playerGold < pieceValues['bishop'] - 3) bishopButton.disabled = 'true';
    popup.appendChild(bishopButton);

    const rookButton = document.createElement('button');
    rookButton.onclick = () => piece.promote('rook');
    rookButton.innerText = `Rook (${pieceValues['rook'] - 3})`;
    if (playerGold < pieceValues['rook'] - 3) rookButton.disabled = 'true';
    popup.appendChild(rookButton);

    const queenButton = document.createElement('button');
    queenButton.onclick = () => piece.promote('queen');
    queenButton.innerText = `Queen (${pieceValues['queen'] - 3})`;
    if (playerGold < pieceValues['queen'] - 3) queenButton.disabled = 'true';
    popup.appendChild(queenButton);

    popup.style.display = 'block';

    currentTurn = 'PAUSED';
}

function isPathBlocked(startPos, endPos) {
    if (purchasedUpgrades.includes("piecesCanJump")) return false;

    const deltaY = endPos.y - startPos.y;
    const deltaX = endPos.x - startPos.x;
    const stepY = deltaY === 0 ? 0 : deltaY / Math.abs(deltaY);
    const stepX = deltaX === 0 ? 0 : deltaX / Math.abs(deltaX);

    let pos = {x: startPos.x + stepX, y: startPos.y + stepY}

    while (pos.y !== endPos.y || pos.x !== endPos.x) {
        if (getPiece(pos)) {
            return true; // Path is blocked by another piece
        }
        pos.y += stepY;
        pos.x += stepX;
    }

    return false;
}

function getPos(element) {
    return JSON.parse(element.dataset.pos);
}

function getCell(pos) {
    const posString = JSON.stringify(pos);
    return chessboard.querySelector(`.cell[data-pos='${posString}']`);
}

function getPlayersPieces(player) {
    return pieces.filter(piece => piece.player === player);
}

function getPiece(pos) {
    return pieces.find(piece => piece.pos.x === pos.x && piece.pos.y === pos.y);
}

function highlightValidCells(piece) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.classList.remove('highlight'));

    const targetCells = piece.calculatePossibleMoves();

    targetCells.forEach(targetCellCoords => {
        getCell(targetCellCoords).classList.add('highlight');
    });
}

function highlightPieces() {
    //remove existing highlights
    clearHighlights();

    //highlight pieces that can move
    if (currentTurn == 'player') {
        getPlayersPieces('player').forEach(piece => {
            if (piece.calculatePossibleMoves().length > 0) piece.div.parentNode.classList.add('available');
        });
    }
}

function clearHighlights() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('selected', 'highlight', 'available');
    });
}