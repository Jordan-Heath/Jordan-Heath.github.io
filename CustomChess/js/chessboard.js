class Chessboard { //refers to match
    constructor() {

    }

    drawChessboard() {
        chessboardElement.innerHTML = '';
        for (let row = 0; row < player.boardSize; row++) {
            for (let col = 0; col < player.boardSize; col++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
                cell.dataset.pos = JSON.stringify({ x: col, y: row });
                cell.addEventListener('click', handleCellClick);
                chessboardElement.appendChild(cell);
            }
        }
    }
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    try {
        e.preventDefault();

        const startPos = JSON.parse(e.dataTransfer.getData('text/plain'));
        const targetElement = e.currentTarget;
        const endPos = JSON.parse(targetElement.dataset.pos);
    
        const piece = getPieceFromPos(startPos);
    
        if (!piece) return;
    
        if (piece.isValidMove(endPos) || piece.isValidAttack(endPos)) piece.movePiece(endPos);
    } catch(e) {
        console.log('Error on cell drop: ', e)
    }
}

function handleCellClick(e) {
    try {
        const selectedPiece = getPieceFromDiv(document.querySelector('.selected'));
        const endPos = JSON.parse(e.currentTarget.dataset.pos);
        const targetPiece = getPieceFromPos(endPos);
    
        if (selectedPiece?.player == currentTurn
            && (selectedPiece.isValidMove(endPos) || selectedPiece.isValidAttack(endPos))) {
            selectedPiece.movePiece(endPos);
        } else if (targetPiece) {
            targetPiece.select();
        } else {
            generalHighlights();
        }
    } catch(e) {
        console.log('Error on cell click: ', e)
    }
}

function getRandomPositions(rowStart, rowEnd, count) {
    const positions = [];
    while (positions.length < count) {
        const row = Math.floor(Math.random() * (rowEnd - rowStart + 1)) + rowStart;
        const col = Math.floor(Math.random() * player.boardSize);
        const pos = { x: col, y: row };
        if (!positions.some(p => p.x === pos.x && p.y === pos.y)) {
            positions.push(pos);
        }
    }
    return positions;
}

function isPathBlocked(startPos, endPos) {
    if (player.upgrades.includes("piecesCanJump") && getPieceFromPos(startPos).player == 'player') return false;

    const deltaY = endPos.y - startPos.y;
    const deltaX = endPos.x - startPos.x;
    const stepY = deltaY === 0 ? 0 : deltaY / Math.abs(deltaY);
    const stepX = deltaX === 0 ? 0 : deltaX / Math.abs(deltaX);

    let pos = { x: startPos.x + stepX, y: startPos.y + stepY }

    while (pos.y !== endPos.y || pos.x !== endPos.x) {
        if (getPieceFromPos(pos)) {
            return true; // Path is blocked by another piece
        }
        if (pos.y > player.boardSize || pos.y < 0 || pos.x > player.boardSize || pos.x < 0) {
            console.log(`Error occured in isPathBlocked when moving from ${startPos.x},${startPos.y} to ${endPos.x}, ${endPos.y}`);
            return true;
        }

        pos.y += stepY;
        pos.x += stepX;
    }

    return false;
}

function getCell(pos) {
    const posString = JSON.stringify(pos);
    return chessboardElement.querySelector(`.cell[data-pos='${posString}']`);
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

function selectionHighlights(piece) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.classList.remove('highlight', 'highlight-enemy', 'dangerous'));

    const targetCells = piece.availableMoves;

    const highlightType = piece.player == 'player' ? 'highlight' : 'highlight-enemy';
    targetCells.forEach(targetCellCoords => {
        //highlight tiles you can move to
        getCell(targetCellCoords).classList.add(highlightType);

        //highlight tiles that are dangerous
        if (player.upgrades.includes('safetySight')
            && piece.player == 'player'
            && isPosDangerous(piece, targetCellCoords, piece.player)) {
            getCell(targetCellCoords).classList.add('highlight', 'dangerous');
        }
    });
}

function generalHighlights() {
    //remove existing highlights
    clearHighlights();

    if (currentTurn == 'player') {
        const playerPieces = getPlayersPieces('player');

        playerPieces.forEach(piece => {
            //highlight pieces that can move
            const moves = piece.availableMoves;
            if ((currentTurn == 'player')
                && moves.length > 0) {
                piece.div.classList.add('available');
            };

            //highlight your vulnerable pieces
            if (player.upgrades.includes('protectiveSight')
                && isPosDangerous(piece, piece.pos, piece.player)) {
                piece.div.classList.add('vulnerable');
            }

            //highlight enemy pieces that are vulnerable
            if (player.upgrades.includes('killerSight')) {
                getPlayersPieces('enemy').forEach(enemyPiece => {
                    if (isPosDangerous(enemyPiece, enemyPiece.pos, enemyPiece.player)) {
                        enemyPiece.div.classList.add('vulnerable');
                    }
                });
            }
        });
    }
}

function clearHighlights() {
    document.querySelectorAll('.piece').forEach(pieceDiv => {
        pieceDiv.classList.remove('selected', 'available', 'vulnerable');
    });

    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('highlight', 'highlight-enemy', 'dangerous');
    });
}

function isPosDangerous(concernedPiece, pos, player) {
    // temporarily move any piece from the target position
    const targetPiece = getPieceFromPos(pos);
    if (targetPiece) targetPiece.pos = {x: player.boardSize, y: player.boardSize}; //temporarily move off board

    // Temporarily move the concerned piece to the target position
    const concernedPieceOriginalPos = { ...concernedPiece.pos };
    concernedPiece.pos = pos;

    // Get the enemy pieces
    const enemyPieces = getPlayersPieces(player === 'player' ? 'enemy' : 'player');

    // Check if any enemy piece can attack the target position
    const isDangerous = enemyPieces.some(piece => {
        const possibleAttacks = piece.calculateAvailableMoves();
        return possibleAttacks.some(attackPos => attackPos.x === pos.x && attackPos.y === pos.y);
    });

    // Return the pieces to their original positions
    concernedPiece.pos = concernedPieceOriginalPos;
    if (targetPiece) targetPiece.pos = pos;

    return isDangerous;
}
