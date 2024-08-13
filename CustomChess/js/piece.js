class Piece {
    constructor(pieceType, pos, player) {
        this.pos = pos;
        this.pieceType = pieceType;
        this.player = player;
        this.div = document.createElement('div');
        this.img = document.createElement('img');
        this.availableMoves = [];

        this.img.src = `assets/${pieceColor[player]}/${pieceType}.png`;
        this.div.appendChild(this.img);
        this.div.classList.add('piece', pieceColor[player], pieceType);
        this.div.draggable = true;
        this.img.addEventListener('dragstart', (e) => this.handleDragStart(e, this));
        this.img.addEventListener('click', (e) => this.handlePieceClick(e, this));

        //piece shouldn't append itself
        const cell = Chessboard.getCell(pos);
        cell.appendChild(this.div);
    }

    //#region Event Listeners
    handleDragStart(e, piece) {
        Chessboard.selectionHighlights(piece);

        // Don't let player drag when it's not their turn
        if (!e.currentTarget.parentNode.classList.contains(pieceColor[currentTurn])) {
            e.preventDefault();
            return;
        }

        const startPos = piece.pos;
        e.dataTransfer.setData('text/plain', JSON.stringify(startPos));
    }

    handlePieceClick(e, piece) {
        if (document.querySelector('.selected')) return;
        e.stopPropagation();
        Chessboard.selectionHighlights(piece);
    }
    //#endregion Event Listeners

    movePiece(endPos, callback = () => Match.endTurn()) {
        const targetCell = Chessboard.getCell(endPos);
        const startCell = Chessboard.getCell(this.pos);
        Chessboard.clearHighlights();

        // Calculate the angle for the arrow
        const animationStartPos = startCell.getBoundingClientRect();
        const animationEndPos = targetCell.getBoundingClientRect();
        const deltaX = animationEndPos.left - animationStartPos.left;
        const deltaY = animationEndPos.top - animationStartPos.top;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        // Create and style an arrow element
        document.querySelector('.arrow')?.remove();
        const arrow = document.createElement('div');
        arrow.classList.add('arrow');
        startCell.appendChild(arrow);
        arrow.style.transform = `rotate(${angle}deg)`;

        // Apply the animation transform
        requestAnimationFrame(() => {
            this.div.style.transition = 'transform 0.4s ease';
            this.div.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            Chessboard.getPieceFromPos(endPos)?.kill(deltaX, deltaY, angle);

            // After the animation completes, move the piece back to the grid and reset styles
            this.div.addEventListener('transitionend', () => {
                this.div.style.transition = '';
                this.div.style.transform = '';

                // Move the piece and update its position
                targetCell.appendChild(this.div);
                this.pos = endPos;

                callback();
            }, { once: true });
        });
    }

    promote(newPieceType) {
        if (newPieceType === 'random') {
            newPieceType = getWeightedRandomPieceType();
        } else {
            Player.gold -= pieceValues[newPieceType] - 3;
            ViewHandler.printMatchUI('');
        }

        this.pieceType = newPieceType;
        this.availableMoves = this.calculateAvailableMoves();
        this.img.src = `assets/${pieceColor[this.player]}/${this.pieceType}.png`;
        this.div.className = `piece ${pieceColor[this.player]} ${this.pieceType}`;

        popup.innerHTML = '';
        popup.style.display = 'none';

        if (this.player == 1) Player.piecesPromoted += 1;

        if (currentTurn === 0) { //if paused
            currentTurn = 1; //make it player's turn
            Match.endTurn();
        }
    }

    isValidMove(endPos) {
        if (Chessboard.getPieceFromPos(endPos)) return false; //prevent moving onto occupied tiles
        if (this.pos.x >= Player.boardSize || this.pos.y >= Player.boardSize) return false; //if in the temp position, it has no valid moves
        if (endPos.x < 0 || endPos.x >= Player.boardSize || endPos.y < 0 || endPos.y >= Player.boardSize) return false; //prevent going off the board

        return pieceRules[this.pieceType].move(this, endPos);
    }

    isValidAttack(endPos) {
        const targetPiece = Chessboard.getPieceFromPos(endPos)
        if (!targetPiece || targetPiece.player == this.player) return false; //prevent attacking nothing OR taking own pieces
        if (this.pos.x >= Player.boardSize || this.pos.y >= Player.boardSize) return false; //if in the temp position, it has no valid moves
        if (endPos.x < 0 || endPos.x >= Player.boardSize || endPos.y < 0 || endPos.y >= Player.boardSize) return false; //prevent going off the board

        return pieceRules[this.pieceType].attack(this, endPos);
    }

    calculateAvailableMoves() {
        const availableMoves = [];

        // For each piece, determine the possible moves based on its type
        switch (this.pieceType) {
            case 'pawn':
                const moveDirection = this.player == 1 ? -1 : 1; //white pieces move up, black pieces down
                // Pawns move 1-2 squares forward and attack diagonally
                const pawnMoves = [
                    [0, 1], [0, 2], [1, 1], [-1, 1], [1, 2], [-1, 2]
                ];

                pawnMoves.forEach(([deltaX, deltaY]) => {
                    const endPos = {
                        x: this.pos.x + deltaX,
                        y: this.pos.y + (deltaY * moveDirection)
                    };
                    if (this.isValidMove(endPos) || this.isValidAttack(endPos)) {
                        availableMoves.push(endPos);
                    }
                });
                break;
            case 'rook':
                // Rooks move horizontally or vertically
                const rookDirections = [
                    [1, 0], [0, 1], [-1, 0], [0, -1]
                ];
                rookDirections.forEach(([deltaX, deltaY]) => {
                    for (let y = this.pos.y + deltaY, x = this.pos.x + deltaX; y >= 0 && y < Player.boardSize && x >= 0 && x < Player.boardSize; y += deltaY, x += deltaX) {
                        const endPos = { x: x, y: y }
                        if (this.isValidMove(endPos) || this.isValidAttack(endPos)) {
                            availableMoves.push(endPos);
                        }
                    }
                });
                break;
            case 'bishop':
                // Bishops move diagonally
                const bishopDirections = [
                    [1, 1], [1, -1], [-1, 1], [-1, -1]
                ];
                bishopDirections.forEach(([deltaX, deltaY]) => {
                    for (let y = this.pos.y + deltaY, x = this.pos.x + deltaX; y >= 0 && y < Player.boardSize && x >= 0 && x < Player.boardSize; y += deltaY, x += deltaX) {
                        const endPos = { x: x, y: y }
                        if (this.isValidMove(endPos) || this.isValidAttack(endPos)) {
                            availableMoves.push(endPos);
                        }
                    }
                });
                break;
            case 'knight':
                // Knights move in an L shape
                const knightMoves = [
                    [2, 1], [2, -1], [-2, 1], [-2, -1],
                    [1, 2], [1, -2], [-1, 2], [-1, -2]
                ];
                knightMoves.forEach(([deltaX, deltaY]) => {
                    const endPos = { x: this.pos.x + deltaX, y: this.pos.y + deltaY };
                    if (this.isValidMove(endPos) || this.isValidAttack(endPos)) {
                        availableMoves.push(endPos);
                    }
                });
                break;
            case 'queen':
                // Queens move horizontally, vertically, or diagonally
                const queenDirections = [
                    [1, 0], [0, 1], [-1, 0], [0, -1],
                    [1, 1], [1, -1], [-1, 1], [-1, -1]
                ];
                queenDirections.forEach(([deltaX, deltaY]) => {
                    for (let y = this.pos.y + deltaY, x = this.pos.x + deltaX; y >= 0 && y < Player.boardSize && x >= 0 && x < Player.boardSize; y += deltaY, x += deltaX) {
                        const endPos = { x: x, y: y }
                        if (this.isValidMove(endPos) || this.isValidAttack(endPos)) {
                            availableMoves.push(endPos);
                        }
                    }
                });
                break;
            case 'king':
                // Kings move one square in any direction
                const kingDirections = [
                    [1, 0], [0, 1], [-1, 0], [0, -1],
                    [1, 1], [1, -1], [-1, 1], [-1, -1]
                ];
                kingDirections.forEach(([deltaX, deltaY]) => {

                    if (Player.hasUpgrade('kingMovesLikeQueen') && this.player == 1) { //is player piece
                        for (let y = this.pos.y + deltaY, x = this.pos.x + deltaX; y >= 0 && y < Player.boardSize && x >= 0 && x < Player.boardSize; y += deltaY, x += deltaX) {
                            const endPos = { x: x, y: y }
                            if (this.isValidMove(endPos) || this.isValidAttack(endPos)) {
                                availableMoves.push(endPos);
                            }
                        }
                    } else {
                        const endPos = { x: this.pos.x + deltaX, y: this.pos.y + deltaY };
                        if (this.isValidMove(endPos) || this.isValidAttack(endPos)) {
                            availableMoves.push(endPos);
                        }
                    }
                });
                break;
        }

        return availableMoves;
    }

    select() {
    }

    kill(deltaX, deltaY, angle) {
        if (this.player == 1) Player.piecesLost += 1;
        else Player.piecesTaken += 1;

        const index = allPieces.indexOf(this);
        if (index > -1) {
            allPieces.splice(index, 1);
        }

        // Set up the animation with a 0.1s delay
        requestAnimationFrame(() => {
            // Delay the start of the animation by 0.1 seconds
            setTimeout(() => {
                this.div.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                this.div.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${angle - 90}deg)`;
                this.div.style.opacity = '0';

                // After the animation completes, remove the piece and update the game state
                this.div.addEventListener('transitionend', () => {
                    this.div.remove();
                    const index = allPieces.indexOf(this);
                    if (index > -1) {
                        allPieces.splice(index, 1);
                    }
                }, { once: true });
            }, 50); // 100 milliseconds delay
        });
    }

    isPathBlocked(endPos) {
        if (Player.hasUpgrade("piecesCanJump") && this.player == 1) return false;
    
        const deltaY = endPos.y - this.pos.y;
        const deltaX = endPos.x - this.pos.x;
        const stepY = deltaY === 0 ? 0 : deltaY / Math.abs(deltaY);
        const stepX = deltaX === 0 ? 0 : deltaX / Math.abs(deltaX);
    
        let pos = { x: this.pos.x + stepX, y: this.pos.y + stepY }
    
        while (pos.y !== endPos.y || pos.x !== endPos.x) {
            if (Chessboard.getPieceFromPos(pos)) {
                return true; // Path is blocked by another piece
            }
            if (pos.y > Player.boardSize || pos.y < 0 || pos.x > Player.boardSize || pos.x < 0) {
                console.log(`Error occured in isPathBlocked when moving from ${this.pos.x},${this.pos.y} to ${endPos.x}, ${endPos.y}`);
                return true;
            }
    
            pos.y += stepY;
            pos.x += stepX;
        }
    
        return false;
    }
}

const pieceValues = {
    'pawn': 1,
    'knight': 2,
    'bishop': 3,
    'rook': 4,
    'queen': 5,
    'king': 6
};

const pieceWeights = {
    'knight': 1 / pieceValues['knight'],
    'bishop': 1 / pieceValues['bishop'],
    'rook': 1 / pieceValues['rook'],
    'queen': 1 / pieceValues['queen']
};

const pieceRules = {
    pawn: {
        move: (piece, endPos) => {
            const deltaY = endPos.y - piece.pos.y;
            const deltaX = Math.abs(endPos.x - piece.pos.x);

            if (piece.player === 2) {
                const isStartingRow = piece.pos.y < 2;
                if (deltaX === 0) {
                    // Move down by one square
                    if (deltaY === 1) return true;

                    // Move down by two squares from the first 2 rows, ignore path if moving diagonal
                    if (isStartingRow && 
                        deltaY === 2 && 
                        (deltaX != 0 || !piece.isPathBlocked(endPos))) {
                        return true;
                    }
                }
            } else {
                const isStartingRow = piece.pos.y > Player.boardSize - 3; 
                if (deltaX === 0 || (deltaX === 1 && Player.hasUpgrade("pawnMoveDiagonal"))) {
                    // Move up by one square
                    if (deltaY === -1) return true;

                    // Move up by two squares from the first 2 rows (unless upgraded), ignore path if moving diagonal
                    if ((isStartingRow || Player.hasUpgrade("pawnTwoSteps")) &&
                        deltaY === -2 &&
                        (deltaX != 0 || !piece.isPathBlocked(endPos))) {
                        return true;
                    }
                }
            }
            return false;
        },
        attack: (piece, endPos) => {
            const deltaY = endPos.y - piece.pos.y;
            const deltaX = Math.abs(endPos.x - piece.pos.x);

            if (deltaX === 1) {
                if ((deltaY === 1 && piece.player == 2) ||
                    (deltaY === -1 && piece.player == 1)) {
                    return true;
                }
            }

            if (Player.hasUpgrade("pawnAttackFowards") && piece.player == 1) return pieceRules.pawn.move(piece, endPos);

            return false;
        }
    },
    rook: {
        move: (piece, endPos) => {
            return (piece.pos.y === endPos.y || piece.pos.x === endPos.x) && !piece.isPathBlocked(endPos);
        },
        attack: (piece, endPos) => {
            return pieceRules.rook.move(piece, endPos);
        }
    },
    bishop: {
        move: (piece, endPos) => {
            return Math.abs(endPos.y - piece.pos.y) === Math.abs(endPos.x - piece.pos.x) && !piece.isPathBlocked(endPos);
        },
        attack: (piece, endPos) => {
            return pieceRules.bishop.move(piece, endPos);
        }
    },
    knight: {
        move: (piece, endPos) => {
            const deltaY = Math.abs(endPos.y - piece.pos.y);
            const deltaX = Math.abs(endPos.x - piece.pos.x);
            return (deltaY === 2 && deltaX === 1) || (deltaY === 1 && deltaX === 2);
        },
        attack: (piece, endPos) => {
            return pieceRules.knight.move(piece, endPos);
        }
    },
    queen: {
        move: (piece, endPos) => {
            return (piece.pos.y === endPos.y || piece.pos.x === endPos.x || Math.abs(endPos.y - piece.pos.y) === Math.abs(endPos.x - piece.pos.x)) && !piece.isPathBlocked(endPos);
        },
        attack: (piece, endPos) => {
            return pieceRules.queen.move(piece, endPos);
        }
    },
    king: {
        move: (piece, endPos) => {
            if (Player.hasUpgrade('kingMovesLikeQueen')) return pieceRules.queen.move(piece, endPos);

            const deltaY = Math.abs(endPos.y - piece.pos.y);
            const deltaX = Math.abs(endPos.x - piece.pos.x);
            return deltaY <= 1 && deltaX <= 1;
        },
        attack: (piece, endPos) => {
            return pieceRules.king.move(piece, endPos);
        }
    }
}

function getWeightedRandomPieceType() {
    const pieces = Object.keys(pieceWeights);
    const weights = pieces.map(piece => pieceWeights[piece]);

    return getWeightedRandom(pieces, weights);
}