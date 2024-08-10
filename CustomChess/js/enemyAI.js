function enemyTurn() {
    const enemyPieces = getPlayersPieces('enemy');
    const kingPiece = enemyPieces.find(piece => piece.pieceType === 'king');

    // Gather possible moves for each enemy piece
    const allPiecesMoves = [];
    for (let piece of enemyPieces) {
        const availableMoves = piece.availableMoves;
        if (availableMoves.length > 0) {
            allPiecesMoves.push({ piece, moves: availableMoves });
        }
    }

    // 1. Check if the king is in danger and prioritize moves to save it
    if (tryAvoidCheckMate(kingPiece)) return;

    // 2. Prioritize attacking moves
    if (tryAttackPiece(allPiecesMoves, kingPiece)) return;

    // 3. Move any piece except the king
    if (tryMovePiece(allPiecesMoves)) return;

    // 4. Move the king if no non-king moves are available
    delayForfeit(kingPiece);
}

function tryAvoidCheckMate(kingPiece) {
    if (isPosDangerous(kingPiece, kingPiece.pos, 'enemy')) {
        const possibleKingMoves = kingPiece.availableMoves;
        console.log('Check');
        
        // Try safely attacking with the king
        for (const move of possibleKingMoves) {
            const targetPiece = getPieceFromPos(move);
            if (targetPiece && !isPosDangerous(kingPiece, move, 'enemy')) {
                kingPiece.movePiece(move);
                return true;
            }
        }

        // Try safely moving the king
        for (const move of possibleKingMoves) {
            if (!isPosDangerous(kingPiece, move, 'enemy')) {
                kingPiece.movePiece(move);
                return true;
            }
        }
    }

    return false;
}

function tryAttackPiece(allPiecesMoves, kingPiece) {
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
                return true;
            }
        }
    }
}

function tryMovePiece(allPiecesMoves) {
    const nonKingMoves = allPiecesMoves.filter(pieceAndMoves => pieceAndMoves.piece.pieceType !== 'king');
    if (nonKingMoves.length > 0) {
        const randomPiece = nonKingMoves[Math.floor(Math.random() * nonKingMoves.length)];
        const randomMove = randomPiece.moves[Math.floor(Math.random() * randomPiece.moves.length)];
        forfeitCounter = 0;
        randomPiece.piece.movePiece(randomMove);
        return true;
    }
}

function delayForfeit(kingPiece) {
    //forfeit is closer
    forfeitCounter += 1;
    if (forfeitCounter >= player.forfeitThreshold) {
        promptEnemyForfeit("This game is going nowhere.");
        return;
    }

    // Try moving the king to a safe position
    const possibleKingMoves = kingPiece.availableMoves;
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