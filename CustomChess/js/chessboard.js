class Chessboard {
    static draw() {
        chessboardElement.innerHTML = '';
        for (let row = 0; row < Player.boardSize; row++) {
            for (let col = 0; col < Player.boardSize; col++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
                cell.dataset.pos = JSON.stringify({ x: col, y: row });
                cell.addEventListener('click', Chessboard.handleCellClick);
                chessboardElement.appendChild(cell);
            }
        }

        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('dragover', Chessboard.handleDragOverCell);
            cell.addEventListener('drop', Chessboard.handleDropOnCell);
        });
    }

    static getCell(pos) {
        const posString = JSON.stringify(pos);
        return chessboardElement.querySelector(`.cell[data-pos='${posString}']`);
    }

    static clearHighlights() {
        document.querySelectorAll('.piece').forEach(pieceDiv => {
            pieceDiv.classList.remove('selected', 'available', 'vulnerable');
        });

        document.querySelectorAll('.cell').forEach(cell => {
            cell.classList.remove('highlight', 'dangerous');
        });
    }

    static selectionHighlights(piece) {
        Chessboard.clearHighlights();
        Chessboard.generalHighlights();

        piece.div.classList.add('selected');

        const targetCells = piece.availableMoves;

        targetCells.forEach(targetCellCoords => {
            Chessboard.getCell(targetCellCoords).classList.add('highlight');

            if (Player.hasUpgrade('safetySight') &&
                piece.player === 1 &&
                Chessboard.isPosDangerous(piece, targetCellCoords)) {
                    Chessboard.getCell(targetCellCoords).classList.add('dangerous');
            }
        });
    }

    static generalHighlights() {
        Chessboard.clearHighlights();

        if (currentTurn === 1) { //player's turn
            Match.getPlayersPieces(currentTurn).forEach(piece => {
                const moves = piece.availableMoves;
                if (piece.player === 1 //if piece belong's to player
                    && moves.length > 0) {
                    piece.div.classList.add('available');
                }

                if (Player.hasUpgrade('protectiveSight') &&
                    Chessboard.isPosDangerous(piece, piece.pos)) {
                    piece.div.classList.add('vulnerable');
                }

                if (Player.hasUpgrade('killerSight')) {
                    Match.getPlayersPieces(2).forEach(enemyPiece => {
                        if (Chessboard.isPosDangerous(enemyPiece, enemyPiece.pos)) {
                            enemyPiece.div.classList.add('vulnerable');
                        }
                    });
                }
            });
        }
    }

    static isPosDangerous(concernedPiece, pos) {
        // temporarily move any piece from the target position
        const targetPiece = Chessboard.getPieceFromPos(pos);
        if (targetPiece) targetPiece.pos = {x: Player.boardSize, y: Player.boardSize}; //temporarily move off board
    
        // Temporarily move the concerned piece to the target position
        const concernedPieceOriginalPos = { ...concernedPiece.pos };
        concernedPiece.pos = pos;
    
        // Get the enemy pieces
        const enemyPieces = Match.getPlayersPieces(concernedPiece.player === 1 ? 2 : 1);
    
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

    static getPieceFromPos(pos) {
        return allPieces.find(piece => piece.pos.x === pos.x && piece.pos.y === pos.y);
    }

    static getRandomPositions(rowStart, rowEnd, count) {
        const positions = [];
        while (positions.length < count) {
            const row = Math.floor(Math.random() * (rowEnd - rowStart + 1)) + rowStart;
            const col = Math.floor(Math.random() * Player.boardSize);
            const pos = { x: col, y: row };
            if (!positions.some(p => p.x === pos.x && p.y === pos.y)) {
                positions.push(pos);
            }
        }
        return positions;
    }

    //#region Event Listeners
    static handleDragOverCell(e) {
        e.preventDefault();
    }
    
    static handleDropOnCell(e) {
        try {
            e.preventDefault();
    
            const startPos = JSON.parse(e.dataTransfer.getData('text/plain'));
            const targetElement = e.currentTarget;
            const endPos = JSON.parse(targetElement.dataset.pos);
        
            const piece = Chessboard.getPieceFromPos(startPos);
        
            if (!piece) return;
        
            if (piece.isValidMove(endPos) || piece.isValidAttack(endPos)) piece.movePiece(endPos);
        } catch(e) {
            console.log('Error on cell drop: ', e)
        }
    }
    
    static handleCellClick(e) {
        try {
            const selectedPiece = allPieces.find(piece => piece.div === document.querySelector('.selected'));
            const endPos = JSON.parse(e.currentTarget.dataset.pos);
            const targetPiece = Chessboard.getPieceFromPos(endPos);
        
            if (selectedPiece?.player == currentTurn
                && (selectedPiece.isValidMove(endPos) || selectedPiece.isValidAttack(endPos))) {
                selectedPiece.movePiece(endPos);
            } else if (targetPiece) {
                Chessboard.selectionHighlights(targetPiece);
            } else {
                Chessboard.generalHighlights();
            }
        } catch(e) {
            console.log('Error on cell click: ', e)
        }
    }
    //#endregion Even Listeners
}
