const pieceRules = {
    pawn: {
        move: (startPos, endPos, piece) => {
            const deltaY = endPos.y - startPos.y;
            const deltaX = Math.abs(endPos.x - startPos.x);
            const isStartingRow = (piece.classList.contains('player') && startPos.y > boardSize - 3) || 
                                  (piece.classList.contains('enemy') && startPos.y < 2);
    
            if (deltaX === 0) {
                // Move forward by one square
                if ( (deltaY === 1 && piece.classList.contains('enemy')) ||
                     (deltaY === -1 && piece.classList.contains('player')) ) {
                    return true;
                }
                // Move forward by two squares from the first 2 rows
                if (isStartingRow && 
                    ((piece.classList.contains('player') && deltaY === -2) ||
                     (piece.classList.contains('enemy') && deltaY === 2)) &&
                     !isPathBlocked(startPos, endPos)) {
                    return true;
                }
            }
    
            return false;
        },
        attack: (startPos, endPos, piece) => {
            const deltaY = endPos.y - startPos.y;
            const deltaX = Math.abs(endPos.x - startPos.x);
    
            if (deltaX === 1) {
                if ((deltaY === 1 && piece.classList.contains('enemy')) ||
                    (deltaY === -1 && piece.classList.contains('player'))) {
                    return true;
                }
            }
    
            return false;
        }
    },
    rook: {
        move: (startPos, endPos, piece) => {
            return (startPos.y === endPos.y || startPos.x === endPos.x) && !isPathBlocked(startPos, endPos);
        },
        attack: (startPos, endPos, piece) => {
            return pieceRules.rook.move(startPos, endPos, piece);
        }
    },
    bishop: {
        move: (startPos, endPos, piece) => {
            return Math.abs(endPos.y - startPos.y) === Math.abs(endPos.x - startPos.x) && !isPathBlocked(startPos, endPos);
        },
        attack: (startPos, endPos, piece) => {
            return pieceRules.bishop.move(startPos, endPos, piece);
        }
    },
    knight: {
        move: (startPos, endPos, piece) => {
            const deltaY = Math.abs(endPos.y - startPos.y);
            const deltaX = Math.abs(endPos.x - startPos.x);
            return (deltaY === 2 && deltaX === 1) || (deltaY === 1 && deltaX === 2);
        },
        attack: (startPos, endPos, piece) => {
            return pieceRules.knight.move(startPos, endPos, piece);
        }
    },
    queen: {
        move: (startPos, endPos, piece) => {
            return (startPos.y === endPos.y || startPos.x === endPos.x || Math.abs(endPos.y - startPos.y) === Math.abs(endPos.x - startPos.x)) && !isPathBlocked(startPos, endPos);
        },
        attack: (startPos, endPos, piece) => {
            return pieceRules.queen.move(startPos, endPos, piece);
        }
    },
    king: {
        move: (startPos, endPos, piece) => {
            const deltaY = Math.abs(endPos.y - startPos.y);
            const deltaX = Math.abs(endPos.x - startPos.x);
            return deltaY <= 1 && deltaX <= 1;
        },
        attack: (startPos, endPos, piece) => {
            return pieceRules.king.move(startPos, endPos, piece);
        }
    }
};

// Function to check if the path is blocked for sliding pieces (rook, bishop, queen)
function isPathBlocked(startPos, endPos) {
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

function isValidMove(startPos, endPos, piece) {
    if (getPiece(endPos)) return false; //prevent moving onto occupied tiles
    if (endPos.x < 0 || endPos.x >= boardSize || endPos.y < 0 || endPos.y >= boardSize) return false; //prevent going off the board
    
    const pieceType = getPieceType(piece);
    return pieceType && pieceRules[pieceType]?.move ? pieceRules[pieceType].move(startPos, endPos, piece) : false;
}

function isValidAttack(startPos, endPos, piece) {
    const targetPiece = getPiece(endPos)
    if (!targetPiece || targetPiece.classList.contains(currentTurn)) return false; //prevent attacking nothing OR taking own pieces
    if (endPos.x < 0 || endPos.x >= boardSize || endPos.y < 0 || endPos.y >= boardSize) return false; //prevent going off the board

    const pieceType = getPieceType(piece);
    return pieceType && pieceRules[pieceType]?.attack ? pieceRules[pieceType].attack(startPos, endPos, piece) : false;
}

function getPieceType(piece) {
    if (piece.classList.contains('pawn')) return 'pawn';
    if (piece.classList.contains('rook')) return 'rook';
    if (piece.classList.contains('bishop')) return 'bishop';
    if (piece.classList.contains('knight')) return 'knight';
    if (piece.classList.contains('queen')) return 'queen';
    if (piece.classList.contains('king')) return 'king';
    return null;
}

function calculatePossibleMoves(startPos, piece) {
    const possibleMoves = [];
    const pieceType = getPieceType(piece);
    const isPlayerPiece = piece.classList.contains('player');

    // For each piece, determine the possible moves based on its type
    switch (pieceType) {
        case 'pawn':
            const moveDirection = isPlayerPiece ? -1 : 1;
            // Pawns move 1-2 squares forward and attack diagonally
            const pawnMoves = [
                [0, 1], [0, 2]
            ];

            pawnMoves.forEach(([deltaX, deltaY]) => {
                const endPos = { x: startPos.x + deltaX, 
                                y: startPos.y + (deltaY * moveDirection)};
                if (isValidMove(startPos, endPos, piece)) {
                    possibleMoves.push([piece, endPos]);
                }
            });

            const pawnAttacks = [
                [1, 1], [-1, 1]
            ];

            pawnAttacks.forEach(([deltaX, deltaY]) => {
                const endPos = { x: startPos.x + deltaX, y: startPos.y + deltaY * moveDirection};
                if (isValidAttack(startPos, endPos, piece)) {
                    possibleMoves.push([piece, endPos]);
                }
            });
            break;
        // Other cases for rook, knight, bishop, queen, king remain unchanged
        // ...
        case 'rook':
            // Rooks move horizontally or vertically
            const rookDirections = [
                [1, 0], [0, 1], [-1, 0], [0, -1]
            ];
            rookDirections.forEach(([deltaX, deltaY]) => {
                for (let y = startPos.y + deltaY, x = startPos.x + deltaX; y >= 0 && y < boardSize && x >= 0 && x < boardSize; y += deltaY, x += deltaX) {
                    endPos = {x: x, y: y}
                    if (isValidMove(startPos, endPos, piece) || isValidAttack(startPos, endPos, piece)) {
                        possibleMoves.push([piece, endPos]);
                    }
                    if (getPiece(endPos)) break; // Blocked by a piece
                }
            });
            break;
        case 'bishop':
            // Bishops move diagonally
            const bishopDirections = [
                [1, 1], [1, -1], [-1, 1], [-1, -1]
            ];
            bishopDirections.forEach(([deltaX, deltaY]) => {
                for (let y = startPos.y + deltaY, x = startPos.x + deltaX; y >= 0 && y < boardSize && x >= 0 && x < boardSize; y += deltaY, x += deltaX) {
                    endPos = {x: x, y: y}
                    if (isValidMove(startPos, endPos, piece) || isValidAttack(startPos, endPos, piece)) {
                        possibleMoves.push([piece, endPos]);
                    }
                    if (getPiece(endPos)) break; // Blocked by a piece
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
                const endPos = { x: startPos.x + deltaX, y: startPos.y + deltaY };
                if (isValidMove(startPos, endPos, piece) || isValidAttack(startPos, endPos, piece)) {
                    possibleMoves.push([piece, endPos]);
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
                for (let y = startPos.y + deltaY, x = startPos.x + deltaX; y >= 0 && y < boardSize && x >= 0 && x < boardSize; y += deltaY, x += deltaX) {
                    endPos = {x: x, y: y}
                    if (isValidMove(startPos, endPos, piece) || isValidAttack(startPos, endPos, piece)) {
                        possibleMoves.push([piece, endPos]);
                    }
                    if (getPiece(endPos)) break; // Blocked by a piece
                }
            });
            break;
        case 'king':
            // Kings move one square in any direction
            const kingMoves = [
                [1, 0], [0, 1], [-1, 0], [0, -1],
                [1, 1], [1, -1], [-1, 1], [-1, -1]
            ];
            kingMoves.forEach(([deltaX, deltaY]) => {
                const endPos = { x: startPos.x + deltaX, y: startPos.y + deltaY };
                if (isValidMove(startPos, endPos, piece) || isValidAttack(startPos, endPos, piece)) {
                    possibleMoves.push([piece, endPos]);
                }
            });
            break;
        default:
            break;
    }

    return possibleMoves;
}
