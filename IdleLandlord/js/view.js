//initialise Page
function initialiseViews() {
    createPropertiesView();
    createUpgradesView();

    updatePageView();
}

function updatePageView() {
    updatePropertiesView();
    updateNameView();
    updateIncomeView();
    updateMoneyView();
    updateJobView();
    updateUpgradesView();
}

// Header
function toggleSettings() {
    settings = document.getElementById("settings");
    settings.style.display === 'none' ? settings.style.display = 'block' : settings.style.display = 'none';
}

// Left Column
function createPropertiesView() {
    const propertiesView = document.getElementById('propertiesView');

    data.properties.forEach(property => {
        propertiesView.appendChild(property.view);
    });

    updatePropertiesView();
}

function updatePropertiesView() {
    data.properties.forEach(property => {
        property.updateView();
    });
}

// Right Column
function createUpgradesView() {
    const upgradesView = document.getElementById('upgradesView');

    data.upgrades.forEach(upgrade => {
        upgradesView.appendChild(upgrade.view);
    });

    updateUpgradesView();
}

function updateUpgradesView() {
    data.upgrades.forEach(upgrade => {
        upgrade.updateView();
    });
}

// Middle Column
function updateNameView() {
    document.getElementById('businessName').value = player.name;
}

function updateIncomeView() {
    document.getElementById('income').innerText = `$${round(data.income)}/s`
}

function updateMoneyView() {
    document.getElementById('money').innerText = `$${round(player.money)}`
}

function updateJobView() {
    document.getElementById('jobTitle').innerText = data.job.id;
    document.getElementById('jobDescription').innerText = data.job.description;
    document.getElementById('payRate').innerText = data.job.payRate;

    //update xp number
    document.getElementById('workExperienceNumber').innerText = player.xp;

    //update xp bar
    const workExperienceFill = document.getElementById('workExperienceFill');
    workExperienceFill.style.width = `${(player.xp - data.xpSubstract) / (data.xpGoal - data.xpSubstract) * 100}%`;
}

function sendMessage(message) {
    const messageOutput = document.getElementById('messageOutput');
    messageOutput.innerHTML = message;
    messageOutput.style.opacity = 1;

    function clearMessage() {
        messageOutput.style.opacity = 0;
    }

    setTimeout(clearMessage, MESSAGE_TIMEOUT);
}

// Mobile Control
function showMenu(menu){
    //load columns
    leftColumn = document.getElementById('leftColumn');
    middleColumn = document.getElementById('middleColumn');
    rightColumn = document.getElementById('rightColumn');

    //reset columns
    leftColumn.style.display = 'none';
    middleColumn.style.display = 'none';
    rightColumn.style.display = 'none';

    switch (menu) {
        case 'properties':
            leftColumn.style.display = 'flex';
            break;
        case 'home':
            middleColumn.style.display = 'flex';
            break;
        case 'upgrades':
            rightColumn.style.display = 'flex';
            break;
    }
}