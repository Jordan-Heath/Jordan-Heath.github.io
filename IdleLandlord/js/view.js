// Left Column
function updatePropertiesView() {
    //TODO: build buttons once, then change to only update button details

    const propertiesView = document.getElementById('propertiesView');
    propertiesView.innerHTML = ''; // Clear existing buttons

    data.properties.forEach(property => {
        const propertyContainer = document.createElement('div');
        propertyContainer.classList.add('purchaseable-container');

        const columnView = document.createElement('div');
        columnView.className = 'column';

        const propertyId = document.createElement('p');
        propertyId.className = 'title';
        if (player.ownedProperties[property.id] > 0) {
            propertyId.innerText = `${player.ownedProperties[property.id]} `
            propertyId.innerText += `${property.id} `
            propertyId.innerText += `($${round(player.ownedProperties[property.id] * property.income)}/s)`;
        } else {
            propertyId.innerText = property.id;
        }

        const propertyDescription = document.createElement('p');
        propertyDescription.className = 'description';
        propertyDescription.innerText = property.description;

        columnView.appendChild(propertyId);
        columnView.appendChild(propertyDescription);
        propertyContainer.appendChild(columnView);

        property.recalculateCost();
        const buyButton = createButtonElement(`$${property.cost}`, () => buyProperty(property.id));
        propertyContainer.appendChild(buyButton);
        propertiesView.appendChild(propertyContainer);
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

    workExperienceBar = document.getElementById('workExperienceBar');
    workExperienceBar.innerHTML = "";

    const workExperienceNumber = document.createElement('span');
    workExperienceNumber.id = 'workExperienceNumber';
    workExperienceNumber.innerText = player.xp
    workExperienceBar.appendChild(workExperienceNumber);

    const workExperienceFill = document.createElement('div');
    workExperienceFill.id = 'workExperienceFill';
    workExperienceFill.style.width = `${(player.xp - data.xpSubstract) / (data.xpGoal - data.xpSubstract) * 100}%`;
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

//Right Column
function updateUpgradesView() {
    //TODO: build buttons once, then change to only update button details

    const upgradesView = document.getElementById('upgradesView');
    upgradesView.innerHTML = '';

    data.upgrades.forEach(upgrade => {
        if (player.ownedUpgrades[upgrade.id]) return; //dont print owned upgrades
        //TODO: only one upgrade for a property is available at a time?

        const upgradeContainer = document.createElement('div');
        upgradeContainer.classList.add('purchaseable-container');

        const columnView = document.createElement('div');
        columnView.className = 'column';

        const upgradeId = document.createElement('p');
        upgradeId.className = 'title';
        upgradeId.innerText = `${upgrade.propertyId}: ${upgrade.id}`

        const upgradeDescription = document.createElement('p');
        upgradeDescription.className = 'description';
        upgradeDescription.innerText = upgrade.description;

        columnView.appendChild(upgradeId);
        columnView.appendChild(upgradeDescription);
        upgradeContainer.appendChild(columnView);

        const buyButton = createButtonElement(`$${upgrade.cost}`, () => buyUpgrade(upgrade.id));
        upgradeContainer.appendChild(buyButton);
        upgradesView.appendChild(upgradeContainer);
    });
}



function updatePageView() {
    updatePropertiesView();

    updateNameView();
    updateIncomeView();
    updateMoneyView();
    updateJobView();

    updateUpgradesView()
}