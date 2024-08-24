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
        if (Chessboard.isPosDangerous(kingPiece, kingPiece.pos)) {
            const possibleKingMoves = kingPiece.availableMoves;
            console.log('Check');
            
            // Try safely attacking with the king
            for (const move of possibleKingMoves) {
                const targetPiece = Chessboard.getPieceFromPos(move);
                if (targetPiece && !Chessboard.isPosDangerous(kingPiece, move)) {
                    kingPiece.movePiece(move);
                    return true;
                }
            }
    
            // Try safely moving the king
            for (const move of possibleKingMoves) {
                if (!Chessboard.isPosDangerous(kingPiece, move)) {
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
                    if (pieceAndMoves.piece.pieceType === 'king' && Chessboard.isPosDangerous(kingPiece, move)) {
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
            if (!Chessboard.isPosDangerous(kingPiece, move)) {
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
    
        // Calculate the number of kings based on match streak
        const numberOfKings = 1 + Math.floor(Player.matchStreak / 20);
        for (let i = 0; i < numberOfKings; i++) {
            loadOut.push('king');
        }
    
        // Initialize team size and promoted units
        let teamSize = 8;  // Start with base team size
        let promotedUnits = 0;  // No promoted units initially
    
        // Determine number of promoted units and adjust team size accordingly
        for (let i = 0; i < Player.matchStreak; i++) {
            promotedUnits++;
    
            if (promotedUnits > (teamSize - numberOfKings)) {
                promotedUnits = Math.floor(promotedUnits / 3);
                teamSize++;
            }
        }

        teamSize = Math.min(teamSize, Player.boardSize * 3)
    
        // Add promoted units to the loadOut array
        for (let i = 0; i < promotedUnits; i++) {
            loadOut.push(getWeightedRandomPieceType());
        }
    
        // Fill the remaining slots with pawns until reaching the team size
        while (loadOut.length < teamSize) {
            loadOut.push('pawn');
        }
    
        // Sort loadOut based on pieceValues in descending order (high value first)
        loadOut.sort((a, b) => pieceValues[b] - pieceValues[a]);
    
        // Place pieces on the board
        Chessboard.placePlayerPieces(2, loadOut, teamSize);
    }
    
}