class Chessboard { //refers to match
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

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();

    const startPos = JSON.parse(e.dataTransfer.getData('text/plain'));
    const targetElement = e.target.classList.contains('cell') ? e.target : e.target.parentNode;
    const endPos = JSON.parse(targetElement.dataset.pos);

    const piece = getPieceFromPos(startPos);

    if (!piece) return;

    if (piece.isValidMove(endPos) || piece.isValidAttack(endPos)) piece.movePiece(endPos);
}

function handleCellClick(e) {
    const selectedPiece = getPieceFromDiv(document.querySelector('.selected'));

    const targetCell = e.target.classList.contains('cell') ? e.target : e.target.parentNode ;
    const endPos = getCellPos(targetCell);
    const targetPiece = getPieceFromPos(endPos);

    if (selectedPiece?.player == currentTurn 
        && (selectedPiece.isValidMove(endPos) || selectedPiece.isValidAttack(endPos))) {
        selectedPiece.movePiece(endPos);
    } else if (targetPiece) {
        targetPiece.select();
    } else {
        highlightAvailablePieces();
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

    const randomButton = document.createElement('button');
    randomButton.onclick = () => piece.promote('random');
    randomButton.innerText = `Random (Free)`;
    popup.appendChild(randomButton);

    const specificPromotions = document.createElement('div');
    popup.appendChild(specificPromotions);

    const knightButton = document.createElement('button');
    knightButton.onclick = () => piece.promote('knight');
    knightButton.innerText = `Knight (${pieceValues['knight'] - player.promotionDiscount})`;
    if (player.gold < pieceValues['knight'] - player.promotionDiscount) knightButton.disabled = 'true';
    specificPromotions.appendChild(knightButton);

    const bishopButton = document.createElement('button');
    bishopButton.onclick = () => piece.promote('bishop');
    bishopButton.innerText = `Bishop (${pieceValues['bishop'] - player.promotionDiscount})`;
    if (player.gold < pieceValues['bishop'] - player.promotionDiscount) bishopButton.disabled = 'true';
    specificPromotions.appendChild(bishopButton);

    const rookButton = document.createElement('button');
    rookButton.onclick = () => piece.promote('rook');
    rookButton.innerText = `Rook (${pieceValues['rook'] - player.promotionDiscount})`;
    if (player.gold < pieceValues['rook'] - player.promotionDiscount) rookButton.disabled = 'true';
    specificPromotions.appendChild(rookButton);

    const queenButton = document.createElement('button');
    queenButton.onclick = () => piece.promote('queen');
    queenButton.innerText = `Queen (${pieceValues['queen'] - player.promotionDiscount})`;
    if (player.gold < pieceValues['queen'] - player.promotionDiscount) queenButton.disabled = 'true';
    specificPromotions.appendChild(queenButton);

    popup.style.display = 'block';

    currentTurn = 'PAUSED';
}

function isPathBlocked(startPos, endPos) {
    if (player.upgrades.includes("piecesCanJump") && getPieceFromPos(startPos).player == 'player') return false;

    const deltaY = endPos.y - startPos.y;
    const deltaX = endPos.x - startPos.x;
    const stepY = deltaY === 0 ? 0 : deltaY / Math.abs(deltaY);
    const stepX = deltaX === 0 ? 0 : deltaX / Math.abs(deltaX);

    let pos = {x: startPos.x + stepX, y: startPos.y + stepY}

    while (pos.y !== endPos.y || pos.x !== endPos.x) {
        if (getPieceFromPos(pos)) {
            return true; // Path is blocked by another piece
        }
        pos.y += stepY;
        pos.x += stepX;
    }

    return false;
}

function getCellPos(element) {
    return JSON.parse(element.dataset.pos);
}

function getCell(pos) {
    const posString = JSON.stringify(pos);
    return chessboard.querySelector(`.cell[data-pos='${posString}']`);
}

function getPlayersPieces(player) {
    return pieces.filter(piece => piece.player === player);
}

function getPieceFromPos(pos) {
    return pieces.find(piece => piece.pos.x === pos.x && piece.pos.y === pos.y);
}

function getPieceFromDiv(div) {
    return pieces.find(piece => piece.div === div);
}

function highlightValidCells(piece) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.classList.remove('highlight', 'highlight-enemy'));

    const targetCells = piece.calculatePossibleMoves();

    const highlightType = piece.player == 'player' ? 'highlight' : 'highlight-enemy';
    targetCells.forEach(targetCellCoords => {
        getCell(targetCellCoords).classList.add(highlightType);
    });
}

//highlightAvailablePieces
function highlightAvailablePieces() {
    //remove existing highlights
    clearHighlights();

    //highlight pieces that can move
    if (currentTurn == 'player') {
        getPlayersPieces('player').forEach(piece => {
            if (piece.calculatePossibleMoves().length > 0) piece.div.classList.add('available');
        });
    }
}

function clearHighlights() {
    document.querySelectorAll('.piece').forEach(pieceDiv => {
        pieceDiv.classList.remove('selected', 'available');
    });

    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('highlight', 'highlight-enemy');
    });
}

function isPosDangerous(concernedPiece, pos, player) {
    const enemyPieces = getPlayersPieces(player === 'player' ? 'enemy' : 'player');
    
    return enemyPieces.some(piece => {
        //temporarily move the concerned piece to the tile
        const piecePos = { ...concernedPiece.pos };
        concernedPiece.pos = pos;

        const possibleAttacks = piece.calculatePossibleMoves();

        //return the piece to it's position
        concernedPiece.pos = piecePos;

        const result = possibleAttacks.some(attackPos => attackPos.x === pos.x && attackPos.y === pos.y);
        if (result) console.log(`${pos.x},${pos.y} is unsafe`);
        return result;
    });
}
