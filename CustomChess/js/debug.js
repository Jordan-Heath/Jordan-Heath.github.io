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
    "Give All Upgrades": () => {
        upgradeData.forEach(upgrade => {
            if (!player.upgrades.includes(upgrade.id)) {
                player.upgrades.push(upgrade.id);
            }

            //need to refresh availableMoves and highlights
            newMatch();
        });
    },
    "Win Match": () => {
        getPlayersPieces('enemy').forEach(piece => {
            piece.kill(50, -50, 200);
        });
        setTimeout(() => endGame(), 500);
    },
    "Randomly Promote all player Pawns": () => {
        getPlayersPieces('player').forEach(piece => {
            if (piece.pieceType === 'pawn') piece.promote('random');
        });

        clearHighlights();
        generalHighlights();
    },
    "Reset Save": () => {
        player = new Player();
        player.saveToLocalStorage();
        location.reload();
    },
    "Close Debug Menu": () => {
        popupElement.innerHTML = '';
        popupElement.style.display = 'none';
    }
};