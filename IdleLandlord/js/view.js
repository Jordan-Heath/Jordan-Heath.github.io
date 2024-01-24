let propertyContainers = null;

// Left Column
function updatePropertiesView() {
    const propertiesView = document.getElementById('propertiesView');
    propertiesView.innerHTML = ''; // Clear existing buttons

    // Check if propertyContainers is null, create them if needed
    if (propertyContainers === null) {
        propertyContainers = createPropertyContainers();
    } else {
        // If propertyContainers already exist, update their details
        propertyContainers.forEach((propertyContainer, index) => {
            const property = data.properties[index];
            const columnView = propertyContainer.querySelector('.column');
            const propertyId = columnView.querySelector('.title');
            const buyButton = propertyContainer.querySelector('button');

            propertyId.innerText = getPropertyTitle(property);
            buyButton.innerText = `$${property.cost}`;
        });
    }

    // Append the containers to the DOM
    propertyContainers.forEach(propertyContainer => {
        propertiesView.appendChild(propertyContainer);
    });
}

function createPropertyContainers() {
    return data.properties.map(property => {
        const propertyContainer = createPropertyContainer(property);
        return propertyContainer;
    });
}

function createPropertyContainer(property) {
    const propertyContainer = document.createElement('div');
    propertyContainer.classList.add('purchaseable-container');

    const columnView = document.createElement('div');
    columnView.className = 'column';

    const propertyId = document.createElement('p');
    propertyId.className = 'title';
    propertyId.innerText = getPropertyTitle(property);

    const propertyDescription = document.createElement('p');
    propertyDescription.className = 'description';
    propertyDescription.innerText = property.description;

    columnView.appendChild(propertyId);
    columnView.appendChild(propertyDescription);
    propertyContainer.appendChild(columnView);

    property.recalculateCost();
    const buyButton = createButtonElement(`$${property.cost}`, () => buyProperty(property.id));
    propertyContainer.appendChild(buyButton);

    return propertyContainer;
}

// Right Column
function updateUpgradesView() {
    const upgradesView = document.getElementById('upgradesView');
    upgradesView.innerHTML = '';

    var usedUpgrades = [];

    data.upgrades.forEach(upgrade => {
        if (shouldSkipUpgrade(upgrade, usedUpgrades)) return;

        const upgradeContainer = createPurchaseableContainer();
        const columnView = createColumn();
        const upgradeId = createParagraph('title', `${upgrade.propertyId}: ${upgrade.id}`);
        const upgradeDescription = createParagraph('description', upgrade.description);

        columnView.appendChild(upgradeId);
        columnView.appendChild(upgradeDescription);
        upgradeContainer.appendChild(columnView);

        const buyButton = createButtonElement(`$${upgrade.cost}`, () => buyUpgrade(upgrade.id));
        upgradeContainer.appendChild(buyButton);
        usedUpgrades.push(upgrade);
        upgradesView.appendChild(upgradeContainer);
    });
}

// Middle Column
function updateNameView() {
    document.getElementById('businessName').value = player.name;
}

function updateIncomeView() {
    updateElementText('income', `Income: $${round(data.income)}/s`);
}

function updateMoneyView() {
    updateElementText('money', `Money: $${round(player.money)}`);
}

function updateJobView() {
    updateElementText('jobTitle', data.job.id);
    updateElementText('jobDescription', data.job.description);
    updateElementText('payRate', data.job.payRate);

    const workExperienceBar = document.getElementById('workExperienceBar');
    workExperienceBar.innerHTML = '';

    const workExperienceNumber = createSpan('workExperienceNumber', player.xp);
    workExperienceBar.appendChild(workExperienceNumber);

    const workExperienceFill = createDiv('workExperienceFill');
    workExperienceFill.style.width = `${calculateWorkExperienceWidth(player.xp, data.xpSubstract, data.xpGoal)}%`;
    workExperienceBar.appendChild(workExperienceFill);
}

function sendMessage(message) {
    const messageOutput = document.getElementById('messageOutput');
    messageOutput.innerHTML = message;
    messageOutput.style.display = 'block';
    messageOutput.classList.add('fade');

    function clearMessage() {
        messageOutput.innerHTML = '';
        messageOutput.style.display = 'none';
        messageOutput.classList.remove('fade');
    }

    setTimeout(clearMessage, MESSAGE_TIMEOUT);
}

function updatePageView() {
    updatePropertiesView();
    updateNameView();
    updateIncomeView();
    updateMoneyView();
    updateJobView();
    updateUpgradesView();
}

// Helper functions to create elements
function createPurchaseableContainer() {
    const container = document.createElement('div');
    container.classList.add('purchaseable-container');
    return container;
}

function createColumn() {
    const column = document.createElement('div');
    column.className = 'column';
    return column;
}

function createParagraph(className, text) {
    const paragraph = document.createElement('p');
    paragraph.className = className;
    paragraph.innerText = text;
    return paragraph;
}

function createSpan(id, text) {
    const span = document.createElement('span');
    span.id = id;
    span.innerText = text;
    return span;
}

function createDiv(id) {
    const div = document.createElement('div');
    div.id = id;
    return div;
}

function createButtonElement(text, clickHandler) {
    const button = document.createElement('button');
    button.innerText = text;
    button.addEventListener('click', clickHandler);
    return button;
}

function updateElementText(elementId, newText) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = newText;
    }
}

function getPropertyTitle(property) {
    if (player.ownedProperties[property.id] > 0) {
        return `${player.ownedProperties[property.id]} ${property.id} ($${round(player.ownedProperties[property.id] * property.income)}/s)`;
    } else {
        return property.id;
    }
}

function shouldSkipUpgrade(upgrade, usedUpgrades) {
    return player.ownedUpgrades[upgrade.id] ||
        player.ownedProperties[upgrade.propertyId] === 0 ||
        usedUpgrades.some(u => u.propertyId === upgrade.propertyId);
}

function calculateWorkExperienceWidth(xp, xpSubstract, xpGoal) {
    return (xp - xpSubstract) / (xpGoal - xpSubstract) * 100;
}

// Initial update
updatePageView();
