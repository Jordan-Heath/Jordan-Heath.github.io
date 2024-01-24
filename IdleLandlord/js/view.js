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
    document.getElementById('footerIncome').innerText = `$${round(data.income)}/s`;
}

function updateMoneyView() {
    document.getElementById('money').innerText = `$${round(player.money)}`
    document.getElementById('footerMoney').innerText = `$${round(player.money)}`
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
    var leftColumn = document.getElementById('leftColumn');
    var middleColumn = document.getElementById('middleColumn');
    var rightColumn = document.getElementById('rightColumn');

    //load buttons 
    var leftButton = document.getElementById('leftFooterButton');
    var middleButton = document.getElementById('middleFooterButton');
    var rightButton = document.getElementById('rightFooterButton');

    //reset columns
    leftColumn.style.display = 'none';
    middleColumn.style.display = 'none';
    rightColumn.style.display = 'none';

    //reset buttons
    leftButton.style.backgroundColor = '';
    middleButton.style.backgroundColor = '#a38769';
    rightButton.style.backgroundColor = '';

    switch (menu) {
        case 'properties':
            leftButton.style.backgroundColor = '#8c6d4f';
            leftColumn.style.display = 'flex';
            break;
        case 'home':
            middleButton.style.backgroundColor = '#8c6d4f'
            middleColumn.style.display = 'flex';
            break;
        case 'upgrades':
            rightButton.style.backgroundColor = '#8c6d4f'
            rightColumn.style.display = 'flex';
            break;
    }
}