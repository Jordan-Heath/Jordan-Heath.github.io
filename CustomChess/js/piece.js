class Piece {
    constructor(pieceType, pos, player) {
        this.pos = pos;
        this.pieceType = pieceType;
        this.player = player;
        this.div = document.createElement('div');
        this.img = document.createElement('img');
        this.availableMoves = [];

        this.img.src = `assets/${this.player}/${this.pieceType}.png`;
        this.div.appendChild(this.img);
        this.div.classList.add('piece', player, pieceType);
        this.div.draggable = true;
        this.img.addEventListener('dragstart', (e) => this.handleDragStart(e, this));
        this.img.addEventListener('click', (e) => this.handlePieceClick(e, this));

        // this.div.addEventListener('touchStart', (e) => this.handleDragStart(e, this));

        //piece shouldn't append itself
        const cell = getCell(pos);
        cell.appendChild(this.div);
    }

    handleDragStart(e, piece) {
        piece.select();

        // Don't let player drag when it's not their turn
        if (!e.currentTarget.parentNode.classList.contains(currentTurn)) {
            e.preventDefault();
            return;
        }

        const startPos = piece.pos;
        e.dataTransfer.setData('text/plain', JSON.stringify(startPos));
    }

    handlePieceClick(e, piece) {
        if (document.querySelector('.selected')) return;
        e.stopPropagation();
        piece.select();
    }

    movePiece(endPos) {
        const targetCell = getCell(endPos);
        const startCell = getCell(this.pos);
        clearHighlights();

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
            getPieceFromPos(endPos)?.kill(deltaX, deltaY, angle);

            // After the animation completes, move the piece back to the grid and reset styles
            this.div.addEventListener('transitionend', () => {
                this.div.style.transition = '';
                this.div.style.transform = '';

                // Move the piece and update its position
                targetCell.appendChild(this.div);
                this.pos = endPos;

                endTurn();
            }, { once: true });
        });
    }

    promote(newPieceType) {
        if (newPieceType === 'random') {
            newPieceType = getWeightedRandomPieceType();
        } else {
            player.gold -= pieceValues[newPieceType] - 3;
            printMatchUI('');
        }

        this.pieceType = newPieceType;
        this.availableMoves = this.calculateAvailableMoves();
        this.img.src = `assets/${this.player}/${this.pieceType}.png`;
        this.div.className = `piece ${this.player} ${this.pieceType}`;

        popup.innerHTML = '';
        popup.style.display = 'none';

        if (this.player == 'player') player.piecesPromoted += 1;

        if (currentTurn === 'PAUSED') {
            currentTurn = 'player';
            endTurn();
        }
    }

    isValidMove(endPos) {
        if (getPieceFromPos(endPos)) return false; //prevent moving onto occupied tiles
        if (this.pos.x >= player.boardSize || this.pos.y >= player.boardSize) return false; //if in the temp position, it has no valid moves
        if (endPos.x < 0 || endPos.x >= player.boardSize || endPos.y < 0 || endPos.y >= player.boardSize) return false; //prevent going off the board

        return pieceRules[this.pieceType].move(this, endPos);
    }

    isValidAttack(endPos) {
        const targetPiece = getPieceFromPos(endPos)
        if (!targetPiece || targetPiece.player == this.player) return false; //prevent attacking nothing OR taking own pieces
        if (this.pos.x >= player.boardSize || this.pos.y >= player.boardSize) return false; //if in the temp position, it has no valid moves
        if (endPos.x < 0 || endPos.x >= player.boardSize || endPos.y < 0 || endPos.y >= player.boardSize) return false; //prevent going off the board

        return pieceRules[this.pieceType].attack(this, endPos);
    }

    calculateAvailableMoves() {
        const availableMoves = [];

        // For each piece, determine the possible moves based on its type
        switch (this.pieceType) {
            case 'pawn':
                const moveDirection = this.player == 'player' ? -1 : 1;
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
                    for (let y = this.pos.y + deltaY, x = this.pos.x + deltaX; y >= 0 && y < player.boardSize && x >= 0 && x < player.boardSize; y += deltaY, x += deltaX) {
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
                    for (let y = this.pos.y + deltaY, x = this.pos.x + deltaX; y >= 0 && y < player.boardSize && x >= 0 && x < player.boardSize; y += deltaY, x += deltaX) {
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
                    for (let y = this.pos.y + deltaY, x = this.pos.x + deltaX; y >= 0 && y < player.boardSize && x >= 0 && x < player.boardSize; y += deltaY, x += deltaX) {
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

                    if (player.upgrades.includes('kingMovesLikeQueen') && this.player == 'player') {
                        for (let y = this.pos.y + deltaY, x = this.pos.x + deltaX; y >= 0 && y < player.boardSize && x >= 0 && x < player.boardSize; y += deltaY, x += deltaX) {
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
        document.querySelector('.selected')?.classList.remove('selected');
        this.div.classList.add('selected');
        selectionHighlights(this);
    }

    kill(deltaX, deltaY, angle) {
        if (this.player == 'player') player.piecesLost += 1;
        else player.piecesTaken += 1;

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
                    const index = pieces.indexOf(this);
                    if (index > -1) {
                        pieces.splice(index, 1);
                    }
                }, { once: true });
            }, 50); // 100 milliseconds delay
        });
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

            if (piece.player === 'enemy') {
                const isStartingRow = piece.pos.y < 2;
                if (deltaX === 0) {
                    // Move down by one square
                    if (deltaY === 1) return true;

                    // Move down by two squares from the first 2 rows, ignore path if moving diagonal
                    if (isStartingRow && 
                        deltaY === 2 && 
                        (deltaX != 0 || !isPathBlocked(piece.pos, endPos))) {
                        return true;
                    }
                }
            } else {
                const isStartingRow = piece.pos.y > player.boardSize - 3; 
                if (deltaX === 0 || (deltaX === 1 && player.upgrades.includes("pawnMoveDiagonal"))) {
                    // Move up by one square
                    if (deltaY === -1) return true;

                    // Move up by two squares from the first 2 rows (unless upgraded), ignore path if moving diagonal
                    if ((isStartingRow || player.upgrades.includes("pawnTwoSteps")) &&
                        deltaY === -2 &&
                        (deltaX != 0 || !isPathBlocked(piece.pos, endPos))) {
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
                if ((deltaY === 1 && piece.player == 'enemy') ||
                    (deltaY === -1 && piece.player == 'player')) {
                    return true;
                }
            }

            if (player.upgrades.includes("pawnAttackFowards") && piece.player == 'player') return pieceRules.pawn.move(piece, endPos);

            return false;
        }
    },
    rook: {
        move: (piece, endPos) => {
            return (piece.pos.y === endPos.y || piece.pos.x === endPos.x) && !isPathBlocked(piece.pos, endPos);
        },
        attack: (piece, endPos) => {
            return pieceRules.rook.move(piece, endPos);
        }
    },
    bishop: {
        move: (piece, endPos) => {
            return Math.abs(endPos.y - piece.pos.y) === Math.abs(endPos.x - piece.pos.x) && !isPathBlocked(piece.pos, endPos);
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
            return (piece.pos.y === endPos.y || piece.pos.x === endPos.x || Math.abs(endPos.y - piece.pos.y) === Math.abs(endPos.x - piece.pos.x)) && !isPathBlocked(piece.pos, endPos);
        },
        attack: (piece, endPos) => {
            return pieceRules.queen.move(piece, endPos);
        }
    },
    king: {
        move: (piece, endPos) => {
            if (player.upgrades.includes('kingMovesLikeQueen')) return pieceRules.queen.move(piece, endPos);

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

    // Calculate the total weight
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

    // Generate a random number between 0 and totalWeight
    let random = Math.random() * totalWeight;

    // Determine which piece corresponds to the random number
    for (let i = 0; i < pieces.length; i++) {
        random -= weights[i];
        if (random <= 0) {
            return pieces[i];
        }
    }
}