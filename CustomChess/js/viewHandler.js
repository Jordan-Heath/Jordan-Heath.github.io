//elements
//#region elements
//startMenu
const startMenuElement = document.getElementById('startMenu');
    const profileButtonElement = document.getElementById('profileButton');
    const collectionButtonElement = document.getElementById('collectionButton');
    const playButtonParagraph = document.getElementById('playButtonParagraph');
    const playButtonElement = document.getElementById('playButton');
    const quitButtonElement = document.getElementById('quitButton');

//profileMenu
const profileMenuElement = document.getElementById('profileMenu');

//collectionMenu
const collectionMenuElement = document.getElementById('collectionMenu');

//match
const matchElement = document.getElementById('match');
const matchMenuButtonElement = document.getElementById('match-menu-button');
    const matchMenuElement = document.getElementById('match-menu');
        const matchMenuProfileButton = document.getElementById('match-menu-profile-button');
        const matchMenuCollectionButton = document.getElementById('match-menu-collection-button');
        const matchMenuReturnButton = document.getElementById('match-menu-return-button');
const chessboardElement = document.getElementById('chessboard');
const popupElement = document.getElementById('popup');
const matchUIElement = document.getElementById('matchUI');
    const matchInfoElement = document.getElementById('matchInfo');
    const turnIndicatorElement = document.getElementById('turnIndicator');
    const runInfoElement = document.getElementById('runInfo');
// #endregion elements

class ViewHandler {
    static attachListeners() {
        //Start Menu
        playButtonElement.addEventListener('click', () => {
            Match.newMatch();
        });
        profileButtonElement.addEventListener('click', () => {
            ViewHandler.printProfileMenu();
        });
        collectionButtonElement.addEventListener('click', () => {
            ViewHandler.printCollectionMenu();
        });
        quitButtonElement.addEventListener('click', () => {
            location.href = "../index.html";
        });

        //Match
        matchMenuButtonElement.addEventListener('click', () => {
            ViewHandler.toggleMatchMenu();
        });
        matchMenuProfileButton.addEventListener('click', () => {
            ViewHandler.printProfileMenu(); 
        });
        matchMenuCollectionButton.addEventListener('click', () => {
            ViewHandler.printCollectionMenu(); 
        });
        matchMenuReturnButton.addEventListener('click', () => {
            this.loadStartMenu();
        });
    }

    static printProfileMenu() {
        matchMenuElement.style.display = 'none';
        profileMenuElement.innerHTML = `
            <h2>Stats</h2>
            <div id="stats">
                <table>
                    <tr><th class='table-divider' colspan='2'>Pieces</th></tr>
                    <tr><th>Pieces Taken</th><td>${Player.piecesTaken}</td></tr>
                    <tr><th>Pieces Lost</th><td>${Player.piecesLost}</td></tr>
                </table>
                <table>
                    <tr><th class='table-divider' colspan='2'>Matches</th></tr>
                    <tr><th>Matches Won</th><td>${Player.matchesWon}</td></tr>
                    <tr><th>Matches Lost</th><td>${Player.matchesLost}</td></tr>
                </table>
                <table>
                    <tr><th class='table-divider' colspan='2'>Other</th></tr>
                    <tr><th>Gold Earned</th><td>${Player.goldEarned}</td></tr>
                    <tr><th>Pieces Promoted</th><td>${Player.piecesPromoted}</td></tr>
                </table>
                <table>
                    <tr><th class='table-divider' colspan='2'>Upgrades</th></tr>
                    <tr><th>Upgrades Purchased</th><td>${Player.upgradesPurchased}</td></tr>
                    <tr><th>Upgrades Sold</th><td>${Player.upgradesSold}</td></tr>
                </table>
                <table>
                    <tr><th class='table-divider' colspan='2'>Prestige</th></tr>
                    <tr><th>Highest Streak</th><td>${Player.highestStreak}</td></tr>
                    <tr><th>Times Prestiged</th><td>${Player.timesPrestiged}</td></tr>
                </table>
            </div>
    
            <h2>Prestige</h2>
            <div id="prestige">
                ${Player.timesPrestiged > 0 ? `<p>Prestige Rank ${Player.timesPrestiged}</p>` : ''}
                <p>If your highest streak is ${(Player.timesPrestiged + 1) * 20} you can prestige.</p>
                <p>Prestiging will cost all your upgrades, but permanently raise your teamsize by 1</p>
                <button onclick="Player.prestige()"
                            ${(Player.highestStreak >= (Player.timesPrestiged + 1) * 20) //must have high streak
                            && (Player.upgrades.length === UpgradeData.length) //must have all upgrades
                            ? '' : 'disabled'}>
                    Prestige
                </button>
            </div>
    
            <h2>Save Management</h2>
            <div id="save-management">
                <p>Not Implemented</p>
                <button disabled>Export Save</button>
                <button disabled>Import Save</button>
                <button onclick="Player.deleteSave()">Delete Save</button>
            </div>
            <button class="close-button" onclick="ViewHandler.closeMenu(profileMenu)">Close</button>
        `;
        profileMenuElement.style.display = 'flex';
    }
    
    static printCollectionMenu() {
        matchMenuElement.style.display = 'none';

        let loadoutHTML = '';
        let upgradesHTML = '';
    
        // build loadout html
        Player.loadOut.forEach(pieceType => {
            loadoutHTML += `<img src='assets/white/${pieceType}.png'>`;
        });
        
        // build upgrades html
        if (Player.upgrades.length === 0) {
            upgradesHTML = '<h3>You have no upgrades</h3>';
        } else {
            Player.upgrades.forEach(upgradeID => {
                const upgrade = UpgradeData.find(u => u.id == upgradeID);
                upgradesHTML += `
                <div class="upgrade">
                    <h3>${upgrade.name}</h3>
                    <div class="row">
                        <p>${upgrade.description}</p>
                        <button onclick="Player.sellUpgrade('${upgradeID}')">Sell (${upgrade.cost}g)</button>
                    </div>
                </div>
                `
            });
        }
    
        collectionMenuElement.innerHTML = `
            <h2>Loadout</h2>
            <div id="loadout">${loadoutHTML}</div>
    
            <h2>Upgrades</h2>
            <div id="upgrades">${upgradesHTML}</div>
    
            <button class="close-button" onclick="ViewHandler.closeMenu(collectionMenuElement)">Close</button>
        `;
        collectionMenuElement.style.display = 'flex';
    }

    static closeMenu(menuElement) {
        menuElement.style.display = 'none';
    }

    static promptEndGameMessage(result, message) {
        popupElement.innerHTML = `
        <h2>${result}</h2>
        <p id='endGameMessageParagraph'>${message}</p>
        ${ViewHandler.getShopItems()}
        <button onclick="Match.newMatch()">New Match</button>
        `;
    
        popupElement.style.display = 'block';
    
        chessboardElement.style.opacity = 0;
    }

    static getShopItems() {
        let shopItemsHTML = '';

        for (const shopItemID of Player.shopItems) {
            const upgrade = UpgradeData.find(u => u.id == shopItemID);
            shopItemsHTML += `
            <div class="upgrade">
                <h3>${upgrade.name}</h3>
                <div class="row">
                    <p>${upgrade.description}</p>
                    <button id="${upgrade.id}Button" 
                            ${upgrade.cost > Player.gold || Player.hasUpgrade(upgrade.id) ? 'disabled="true"' : ''}
                            onclick="Player.buyUpgrade('${upgrade.id}')">
                            Buy ($${upgrade.cost})
                    </button>
                </div>
            </div>
            `
        }
    
        let shopHTML = `
        <div class="shop">
            ${shopItemsHTML === '' ? 'All upgrades purchased!' : shopItemsHTML}
        </div>
        `;
    
        return shopHTML;
    }

    static promptEnemyForfeit() {
        popupElement.innerHTML = `
            <h2>Enemy Offer's Forfeit</h2>
            <p>If you accept, you will be granted an additional 3 gold.</p>
            <p>If you decline, you will no longer be able to promote pieces.\n
            The enemy will forfeit again in 10 turns, unless they can level the playing field</p>
        `;
    
        const AcceptButton = document.createElement('button');
        AcceptButton.onclick = () => {
            Match.getPlayersPieces(2).find(piece => piece.pieceType === 'king').kill(50, -50, 200); //kill the enemies king
            Player.gold += 3;
            setTimeout(() => Match.endGame(), 500);
        };
        AcceptButton.innerText = `Accept`;
        popupElement.appendChild(AcceptButton);
    
        const RejectButton = document.createElement('button');
        RejectButton.onclick = () => {
            popupElement.style.display = 'none';
            forfeitCounter = -6;
            promotionDisabled = true;
            currentTurn = 2; //enemy's turn
            Enemy.turn();
        };
        RejectButton.innerText = `Reject`;
        popupElement.appendChild(RejectButton);
    
        popupElement.style.display = 'block';
    }

    static promptPromotion(piece) {
        const pieceIndex = allPieces.indexOf(piece);

        let promoteToKingButton = '';
        if (Player.hasUpgrade("promoteToKing")) {
            promoteToKingButton = `
                    <button 
                        ${Player.gold < pieceValues['king'] - Player.promotionDiscount ? 'disabled' : ''} 
                        onclick="allPieces[${pieceIndex}].promote('king')">
                            King (${pieceValues['king'] - Player.promotionDiscount}g)
                    </button>
                `;
        }

        popupElement.innerHTML = `
            <h2>Promote Your Pawn</h2>
            <button onclick="allPieces[${pieceIndex}].promote('random')">Random (Free)</button>
            <div>
                <button 
                    ${Player.gold < pieceValues['knight'] - Player.promotionDiscount ? 'disabled' : ''} 
                    onclick="allPieces[${pieceIndex}].promote('knight')">
                        Knight (${pieceValues['knight'] - Player.promotionDiscount}g)
                </button>
                <button 
                    ${Player.gold < pieceValues['bishop'] - Player.promotionDiscount ? 'disabled' : ''} 
                    onclick="allPieces[${pieceIndex}].promote('bishop')">
                        Bishop (${pieceValues['bishop'] - Player.promotionDiscount}g)
                </button>
                <button 
                    ${Player.gold < pieceValues['rook'] - Player.promotionDiscount ? 'disabled' : ''} 
                    onclick="allPieces[${pieceIndex}].promote('rook')">
                        Rook (${pieceValues['rook'] - Player.promotionDiscount}g)
                </button>
                <button 
                    ${Player.gold < pieceValues['queen'] - Player.promotionDiscount ? 'disabled' : ''} 
                    onclick="allPieces[${pieceIndex}].promote('queen')">
                        Queen (${pieceValues['queen'] - Player.promotionDiscount}g)
                </button>
                ${promoteToKingButton}
            </div>
        `;
    
        popupElement.style.display = 'block';
    }

    static printMatchUI(message) {
        matchInfoElement.innerHTML = `
        <p>Player Score: ${Match.calculatePoints(1)}</p>
        <p>Enemy Score: ${Match.calculatePoints(2)}</p>
        <p>Expected Gold: ${(Player.matchStreak + 1) + Math.ceil(((Match.calculatePoints(2) - pieceValues['king']) / 3))}
        `;

        let checkMessage = '';
        const kings = allPieces.filter(piece => piece.pieceType === 'king');

        for( const king of kings ) {
            const playerInDanger = Chessboard.isPosDangerous(king, king.pos);
            checkMessage = playerInDanger ? '<p>King is in Check</p>' : '';
        }
    
        turnIndicatorElement.innerHTML = `
        <p>${message}</p>
        ${checkMessage}
        `;
    
        runInfoElement.innerHTML = `
        <p>Match Streak: ${Player.matchStreak} </p>
        <p>Gold: ${Player.gold}g</p>
        `;
    }

    static loadStartMenu() {
        matchMenuElement.style.display = 'none';
        matchElement.style.display = 'none';
        startMenuElement.style.display = 'flex';

        //if new player
        if (localStorage.getItem("CustomChessSave") === null) {
            profileButtonElement.disabled = true;
            collectionButtonElement.disabled = true;
            playButtonParagraph.innerText = 'New Game';
        } else {
            profileButtonElement.disabled = false;
            collectionButtonElement.disabled = false;
            playButtonParagraph.innerText = `Continue (Match Streak ${Player.matchStreak})`
        }
    }

    static toggleMatchMenu() {
        matchMenuElement.style.display = matchMenuElement.style.display == 'none' ? 'flex' : 'none';
    }
}