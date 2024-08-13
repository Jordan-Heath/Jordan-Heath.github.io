class EnemyObj {
    constructor() { }

    turn() {
        const enemyPieces = Match.getPlayersPieces(2);
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
        if (this.tryAvoidCheckMate(kingPiece)) return;
    
        // 2. Prioritize attacking moves
        if (this.tryAttackPiece(allPiecesMoves, kingPiece)) return;
    
        // 3. Move any piece except the king
        if (this.tryMovePiece(allPiecesMoves)) return;
    
        // 4. Move the king if no non-king moves are available
        this.delayForfeit(kingPiece);
    }
    
    tryAvoidCheckMate(kingPiece) {
        if (Chessboard.isPosDangerous(kingPiece, kingPiece.pos, 2)) {
            const possibleKingMoves = kingPiece.availableMoves;
            console.log('Check');
            
            // Try safely attacking with the king
            for (const move of possibleKingMoves) {
                const targetPiece = Chessboard.getPieceFromPos(move);
                if (targetPiece && !Chessboard.isPosDangerous(kingPiece, move, 2)) {
                    kingPiece.movePiece(move);
                    return true;
                }
            }
    
            // Try safely moving the king
            for (const move of possibleKingMoves) {
                if (!Chessboard.isPosDangerous(kingPiece, move, 2)) {
                    kingPiece.movePiece(move);
                    return true;
                }
            }

            console.log('likely CheckMate');
        }
    
        return false;
    }
    
    tryAttackPiece(allPiecesMoves, kingPiece) {
        for (let pieceAndMoves of allPiecesMoves) {
            for (let move of pieceAndMoves.moves) {
                const targetPiece = Chessboard.getPieceFromPos(move);
                if (targetPiece) {
                    // If the piece is the king, ensure the move is to a safe position
                    if (pieceAndMoves.piece.pieceType === 'king' && Chessboard.isPosDangerous(kingPiece, move, 2)) {
                        continue;
                    }
                    forfeitCounter = 0;
                    pieceAndMoves.piece.movePiece(move);
                    return true;
                }
            }
        }
    }
    
    tryMovePiece(allPiecesMoves) {
        const nonKingMoves = allPiecesMoves.filter(pieceAndMoves => pieceAndMoves.piece.pieceType !== 'king');
        if (nonKingMoves.length > 0) {
            const randomPiece = nonKingMoves[Math.floor(Math.random() * nonKingMoves.length)];
            const randomMove = randomPiece.moves[Math.floor(Math.random() * randomPiece.moves.length)];
            forfeitCounter = 0;
            randomPiece.piece.movePiece(randomMove);
            return true;
        }
    }
    
    delayForfeit(kingPiece) {
        //forfeit is closer
        forfeitCounter += 1;
        if (forfeitCounter >= Player.forfeitThreshold) {
            currentTurn = 0; //pause
            ViewHandler.promptEnemyForfeit();
            return;
        }
    
        // Try moving the king to a safe position
        const possibleKingMoves = kingPiece.availableMoves;
        shuffle(possibleKingMoves);
        for (const move of possibleKingMoves) {
            if (!Chessboard.isPosDangerous(kingPiece, move, 2)) {
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

    buildTeam() {
        const loadOut = [];
    
        loadOut.push('king');
    
        while(loadOut.length < Player.boardSize) {
            if (loadOut.length < Player.matchStreak) loadOut.push(getWeightedRandomPieceType());
            else loadOut.push('pawn');
        }
    
        const enemyPiecePositions = Chessboard.getRandomPositions(0, 2, 8);
    
        for (var i = 0; i < 8; i++) {
            allPieces.push(new Piece(loadOut[i], enemyPiecePositions[i], 2));
        }
    }
}