//elements
//#region elements
//startMenu
const startMenuElement = document.getElementById('startMenu');
    const profileButtonElement = document.getElementById('profileButton');
    const collectionButtonElement = document.getElementById('collectionButton');
    const playButtonParagraph = document.getElementById('playButtonParagraph');

//profileMenu
const profileMenuElement = document.getElementById('profileMenu');

//collectionMenu
const collectionMenuElement = document.getElementById('collectionMenu');

//match
const matchElement = document.getElementById('match');
const matchMenuElement = document.getElementById('match-menu');
const chessboardElement = document.getElementById('chessboard');
const popupElement = document.getElementById('popup');
const matchUIElement = document.getElementById('ui');
    const matchInfoElement = document.getElementById('matchInfo');
    const turnIndicatorElement = document.getElementById('turnIndicator');
    const runInfoElement = document.getElementById('runInfo');
// #endregion elements

function printProfileMenu() {
    profileMenuElement.innerHTML = `
        <h2>Stats</h2>
        <div id="stats">
            <table>
                <tr><th class='table-divider' colspan='2'>Pieces</th></tr>
                <tr><th>Pieces Taken</th><td>${player.piecesTaken}</td></tr>
                <tr><th>Pieces Lost</th><td>${player.piecesLost}</td></tr>
            </table>
            <table>
                <tr><th class='table-divider' colspan='2'>Matches</th></tr>
                <tr><th>Matches Won</th><td>${player.matchesWon}</td></tr>
                <tr><th>Matches Lost</th><td>${player.matchesLost}</td></tr>
            </table>
            <table>
                <tr><th class='table-divider' colspan='2'>Other</th></tr>
                <tr><th>Gold Earned</th><td>${player.goldEarned}</td></tr>
                <tr><th>Pieces Promoted</th><td>${player.piecesPromoted}</td></tr>
            </table>
            <table>
                <tr><th class='table-divider' colspan='2'>Upgrades</th></tr>
                <tr><th>Upgrades Purchased</th><td>${player.upgradesPurchased}</td></tr>
                <tr><th>Upgrades Sold</th><td>${player.upgradesSold}</td></tr>
            </table>
            <table>
                <tr><th class='table-divider' colspan='2'>Prestige</th></tr>
                <tr><th>Highest Streak</th><td>${player.highestStreak}</td></tr>
                <tr><th>Times Prestiged</th><td>${player.timesPrestiged}</td></tr>
            </table>
        </div>

        <h2>Prestige</h2>
        <div id="prestige">
            <p>Not Implemented</p>
            <p>If you have all upgrades, and your highest streak is ${player.timesPrestiged + 10} you can prestige.</p>
            <p>Pretiging will cost all your upgrades and gold, but permanently raise your teamsize by 1</p>
            <button disabled>Prestige</button>
        </div>

        <h2>Save Management</h2>
        <div id="save-management">
            <p>Not Implemented</p>
            <button disabled>Export Save</button>
            <button disabled>Import Save</button>
            <button disabled>Delete Save</button>
        </div>
        <button class="close-button" onclick="closeMenu(profileMenu)">Close</button>
    `;
    profileMenuElement.style.display = 'flex';
}

function printCollectionMenu() {
    let loadoutHTML = '';
    let upgradesHTML = '';

    // build loadout html
    player.loadOut.forEach(pieceType => {
        loadoutHTML += `<img src='assets/player/${pieceType}.png'>`;
    });
    
    // build upgrades html
    if (player.upgrades.length === 0) {
        upgradesHTML = '<h3>You have no upgrades</h3>';
    } else {
        player.upgrades.forEach(upgradeID => {
            const upgrade = upgradeData.find(u => u.id == upgradeID);
            upgradesHTML += `
            <div class="upgrade">
                <h3>${upgrade.name}</h3>
                <div class="row">
                    <p>${upgrade.description}</p>
                    <button onclick="player.sellUpgrade('${upgradeID}')">Sell (${upgrade.cost}g)</button>
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

        <button class="close-button" onclick="closeMenu(collectionMenuElement)">Close</button>
    `;
    collectionMenuElement.style.display = 'flex';
}

function closeMenu(menuElement) {
    menuElement.style.display = 'none';
}

function promptEndGameMessage(result, message) {
    popupElement.innerHTML = `
    <h2>${result}</h2>
    <p id='endGameMessageParagraph'>${message}</p>
    ${getShopItems()}
    <button onclick="newMatch()">New Match</button>
    `;

    popupElement.style.display = 'block';

    chessboardElement.style.opacity = 0;
}

function getShopItems() {
    const availableUpgrades = [];
    upgradeData.forEach(upgrade => {
        if (!player.upgrades.includes(upgrade.id)) availableUpgrades.push(upgrade);
    });

    shuffle(availableUpgrades);

    let shopItemsHTML = '';

    for(let i = 0; i < player.shopSize && i < availableUpgrades.length; i++) {
        shopItemsHTML += `
        <div class="upgrade">
            <h3>${availableUpgrades[i].name}</h3>
            <div class="row">
                <p>${availableUpgrades[i].description}</p>
                <button id="${availableUpgrades[i].id}Button" 
                        ${availableUpgrades[i].cost > player.gold ? 'disabled="true"' : ''}
                        onclick="player.buyUpgrade('${availableUpgrades[i].id}')">
                        Buy ($${availableUpgrades[i].cost})
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

function promptEnemyForfeit() {
    currentTurn = 'PAUSED';

    popupElement.innerHTML = `
    <h2>Enemy Offer's Forfeit</h2>
    <p>If you accept, you will be granted an additional 3 gold.</p>
    `;

    const AcceptButton = document.createElement('button');
    AcceptButton.onclick = () => {
        pieces.find(piece => piece.pieceType === 'king' && piece.player === 'enemy').kill(50, -50, 200);
        player.gold += 3;
        setTimeout(() => endGame(), 500);
    };
    AcceptButton.innerText = `Accept`;
    popupElement.appendChild(AcceptButton);

    const RejectButton = document.createElement('button');
    RejectButton.onclick = () => {
        popupElement.style.display = 'none';
        forfeitCounter = 0;
        currentTurn = 'enemy';
        enemyTurn();
    };
    RejectButton.innerText = `Reject`;
    popupElement.appendChild(RejectButton);

    popupElement.style.display = 'block';

    currentTurn = 'PAUSED';
}

function promptPromotion(piece) {
    currentTurn = 'PAUSED';
    popupElement.innerHTML = '<h2>Promote Your Pawn</h2>';

    const randomButton = document.createElement('button');
    randomButton.onclick = () => piece.promote('random');
    randomButton.innerText = `Random (Free)`;
    popupElement.appendChild(randomButton);

    const specificPromotions = document.createElement('div');
    popupElement.appendChild(specificPromotions);

    const knightButton = document.createElement('button');
    knightButton.onclick = () => piece.promote('knight');
    knightButton.innerText = `Knight (${pieceValues['knight'] - player.promotionDiscount}g)`;
    if (player.gold < pieceValues['knight'] - player.promotionDiscount) knightButton.disabled = 'true';
    specificPromotions.appendChild(knightButton);

    const bishopButton = document.createElement('button');
    bishopButton.onclick = () => piece.promote('bishop');
    bishopButton.innerText = `Bishop (${pieceValues['bishop'] - player.promotionDiscount}g)`;
    if (player.gold < pieceValues['bishop'] - player.promotionDiscount) bishopButton.disabled = 'true';
    specificPromotions.appendChild(bishopButton);

    const rookButton = document.createElement('button');
    rookButton.onclick = () => piece.promote('rook');
    rookButton.innerText = `Rook (${pieceValues['rook'] - player.promotionDiscount}g)`;
    if (player.gold < pieceValues['rook'] - player.promotionDiscount) rookButton.disabled = 'true';
    specificPromotions.appendChild(rookButton);

    const queenButton = document.createElement('button');
    queenButton.onclick = () => piece.promote('queen');
    queenButton.innerText = `Queen (${pieceValues['queen'] - player.promotionDiscount}g)`;
    if (player.gold < pieceValues['queen'] - player.promotionDiscount) queenButton.disabled = 'true';
    specificPromotions.appendChild(queenButton);

    popupElement.style.display = 'block';

    currentTurn = 'PAUSED';
}

function printMatchUI(message) {
    matchInfoElement.innerHTML = `
    <p>Player Score: ${calculatePoints('player')}</p>
    <p>Enemy Score: ${calculatePoints('enemy')}</p>
    `;

    turnIndicatorElement.innerHTML = `
    <p>${message}</p>
    `;

    runInfoElement.innerHTML = `
    <p>Match Streak: ${player.matchStreak} </p>
    <p>Gold: ${player.gold}g</p>
    `;
}

function loadStartMenu() {
    //if new player
    if (localStorage.getItem("CustomChessSave") === null) {
        profileButtonElement.disabled = true;
        collectionButtonElement.disabled = true;
        playButtonParagraph.innerText = 'New Game';
    } else {
            playButtonParagraph.innerText = `Continue (Match Streak ${player.matchStreak})`
    }
}

function toggleMatchMenu() {
    matchMenuElement.style.display = matchMenuElement.style.display == 'none' ? 'flex' : 'none';
}