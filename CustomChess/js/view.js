//elements
//#region elements
const menu = document.getElementById('menu');
const menuStats = menu.querySelector('#stats');
const menuLoadout = menu.querySelector('#loadout');
const menuUpgrades = menu.querySelector('#upgrades');
const chessboardElement = document.getElementById('chessboard');
const ui = document.getElementById('ui');
const popupElement = document.getElementById('popup');
const matchInfo = document.getElementById('matchInfo');
const turnIndicator = document.getElementById('turnIndicator');
const runInfo = document.getElementById('runInfo');
// #endregion elements

function printMenu() {
    menuStats.innerHTML = `
    <table>
    <tr><th>Pieces Taken</th><td>${'WIP'}</td></tr>
    <tr><th>Pieces Lost</th><td>${'WIP'}</td></tr>
    <tr><th>Matches Won</th><td>${'WIP'}</td></tr>
    <tr><th>Gold Earned</th><td>${'WIP'}</td></tr>
    <tr><th>Highest Streak</th><td>${'WIP'}</td></tr>
    `;

    let loadoutHTML = '';
    player.loadOut.forEach(pieceType => {
        loadoutHTML += `<img src='assets/player/${pieceType}.png'>`;
    });
    menuLoadout.innerHTML = loadoutHTML;

    let upgradesHTML = '';
    if (player.upgrades.length === 0) upgradesHTML = '<h3>You have no upgrades</h3>';
    player.upgrades.forEach(upgradeID => {
        const upgrade = upgradeData.find(u => u.id == upgradeID);
        upgradesHTML += `
        <div class="upgrade">
            <h3>${upgrade.name}</h3>
            <div class="row">
                <p>${upgrade.description}</p>
                <button onclick="player.sellUpgrade('${upgradeID}')">Sell (${upgrade.cost})</button>
            </div>
        </div>
        `
    });
    menuUpgrades.innerHTML = upgradesHTML;
}

function endGameMessage(result, message) {
    popupElement.innerHTML = `
    <h2>${result}</h2>
    <p id='endGameMessageParagraph'>${message}</p>
    ${getShopItems()}
    <button onclick="newMatch()">New Match</button>
    `;

    popupElement.style.display = 'block';
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
        ${shopItemsHTML}
    </div>
    `;

    return shopHTML;
}

function promptEnemyForfeit() {
    currentTurn = 'PAUSED';

    popupElement.innerHTML = "<h2>Enemy Offer's Forfeit</h2>";

    const AcceptButton = document.createElement('button');
    AcceptButton.onclick = () => {
        pieces.find(piece => piece.pieceType === 'king' && piece.player === 'enemy').kill(50, -50, 200);
        endGame();
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
    popup.innerHTML = '<h2>Promote Your Pawn</h2>';

    const randomButton = document.createElement('button');
    randomButton.onclick = () => piece.promote('random');
    randomButton.innerText = `Random (Free)`;
    popup.appendChild(randomButton);

    const specificPromotions = document.createElement('div');
    popup.appendChild(specificPromotions);

    const knightButton = document.createElement('button');
    knightButton.onclick = () => piece.promote('knight');
    knightButton.innerText = `Knight (${pieceValues['knight'] - player.promotionDiscount})`;
    if (player.gold < pieceValues['knight'] - player.promotionDiscount) knightButton.disabled = 'true';
    specificPromotions.appendChild(knightButton);

    const bishopButton = document.createElement('button');
    bishopButton.onclick = () => piece.promote('bishop');
    bishopButton.innerText = `Bishop (${pieceValues['bishop'] - player.promotionDiscount})`;
    if (player.gold < pieceValues['bishop'] - player.promotionDiscount) bishopButton.disabled = 'true';
    specificPromotions.appendChild(bishopButton);

    const rookButton = document.createElement('button');
    rookButton.onclick = () => piece.promote('rook');
    rookButton.innerText = `Rook (${pieceValues['rook'] - player.promotionDiscount})`;
    if (player.gold < pieceValues['rook'] - player.promotionDiscount) rookButton.disabled = 'true';
    specificPromotions.appendChild(rookButton);

    const queenButton = document.createElement('button');
    queenButton.onclick = () => piece.promote('queen');
    queenButton.innerText = `Queen (${pieceValues['queen'] - player.promotionDiscount})`;
    if (player.gold < pieceValues['queen'] - player.promotionDiscount) queenButton.disabled = 'true';
    specificPromotions.appendChild(queenButton);

    popup.style.display = 'block';

    currentTurn = 'PAUSED';
}