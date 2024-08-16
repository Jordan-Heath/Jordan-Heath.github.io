let clickCount = 0;

document.getElementById('turnIndicator').addEventListener('click', () => {
    clickCount++;
    if (clickCount >= 5) {
        debugPopup();
        clickCount = 0; // Reset click count after showing popup
    }
});

// Function to build and show the debug popup
function debugPopup() {
    // Display the popup
    popupElement.style.display = 'block';

    // Iterate over debugFunctions and build the debugFunctionButtons
    let debugFunctionsHTML = '';
    for (const [name, func] of Object.entries(debugFunctions)) {
        debugFunctionsHTML += `
            <button onclick="window.${name.replace(/ /g, '_')}()">${name}</button>
        `;
        // Define the function in the window object to be accessible from inline HTML
        window[name.replace(/ /g, '_')] = func;
    }

    // Create and add content to the popup
    popupElement.innerHTML = `
        <div class="debugMenu">
            ${debugFunctionsHTML}
        </div>
    `;
}

// Define the debug functions
const debugFunctions = {
    "Win Match": () => {
        for (const piece of Match.getPlayersPieces(2)) {
            if (piece.pieceType === 'king') piece.kill(50, -50, 200);
        };
        setTimeout(() => Match.endGame(), 500);
    },
    "Give All Upgrades": () => {
        for (const upgrade of UpgradeData) {
            if (!Player.hasUpgrade(upgrade.id)) {
                Player.upgrades.push(upgrade.id);
            }

            //need to refresh availableMoves and highlights
            Match.newMatch();
        }
    },
    "Raise Match streak by 10": () => {
        Player.matchStreak += 10;
        if (Player.matchStreak > Player.highestStreak) Player.highestStreak = Player.matchStreak;
        Match.newMatch();
    },
    "Randomly Promote all player Pawns": () => {
        for (const piece of Match.getPlayersPieces(1)) {
            if (piece.pieceType === 'pawn') piece.promote('random');
        }

        Chessboard.generalHighlights();
    },
    "Close Debug Menu": () => {
        popupElement.innerHTML = '';
        ViewHandler.closeMenu(popupElement);
    }
};