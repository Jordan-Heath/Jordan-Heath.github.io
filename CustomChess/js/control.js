// Drag-and-Drop Functions
function handleDragStart(e) {
    // Don't let player drag when it's not their turn
    if (!e.target.classList.contains(currentTurn)) {
        e.preventDefault();
        return;
    }

    const startPos = getPos(e.target);
    e.dataTransfer.setData('text/plain', JSON.stringify(startPos));

    selectCell(e.target);
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

    if (isValidMove(startPos, endPos, piece)) {
        movePiece(piece, endPos);
    } else if (isValidAttack(startPos, endPos, piece)) {
        movePiece(piece, endPos);
    }
}

// Other functions
function getPos(element) {
    return JSON.parse(element.dataset.pos);
}

// Piece Selection and Highlighting
function handlePieceClick(e) {
    //don't let player select when it's not their turn
    if (!e.target.classList.contains(currentTurn)) return;
    e.stopPropagation();

    selectCell(e.target)
}

function handleCellClick(e) {
    if (selectedCell) {
        const startPos = getPos(selectedCell);
        const endPos = getPos(e.target);

        const selectedPiece = getPiece(startPos);

        if (isValidMove(startPos, endPos, selectedPiece) || 
            isValidAttack(startPos, endPos, selectedPiece)) {
            movePiece(selectedPiece, endPos);
        }
    }
}