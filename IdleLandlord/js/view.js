//initialise Page
function initialiseViews() {
    createPropertiesView();
    createUpgradesView();

    updatePageView();
}

// Header
function toggleSettings() {
    settings = document.getElementById("settings");
    settings.style.display === 'none' ? settings.style.display = 'block' : settings.style.display = 'none';
}

// Left Column
function createPropertiesView() {
    const propertiesView = document.getElementById('propertiesView');

    // create if unloaded
    data.properties.forEach(property => {
        property.createView();
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

    // create if unloaded
    data.upgrades.forEach(upgrade => {
        upgrade.createView();
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
    document.getElementById('income').innerText = `Income: $${round(data.income)}/s`
}

function updateMoneyView() {
    document.getElementById('money').innerText = `Money: $${round(player.money)}`
}

function updateJobView() {
    document.getElementById('jobTitle').innerText = data.job.id;
    document.getElementById('jobDescription').innerText = data.job.description;
    document.getElementById('payRate').innerText = data.job.payRate;

    //update xp number
    document.getElementById('workExperienceNumber').innerText = player.xp;

    //update xp bar
    const workExperienceFill = document.getElementById('workExperienceFill');
    workExperienceFill.style.width = `${calculateWorkExperienceWidth(player.xp, data.xpSubstract, data.xpGoal)}%`;
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

function updatePageView() {
    updatePropertiesView();
    updateNameView();
    updateIncomeView();
    updateMoneyView();
    updateJobView();
    updateUpgradesView();
}

function calculateWorkExperienceWidth(xp, xpSubstract, xpGoal) {
    return (xp - xpSubstract) / (xpGoal - xpSubstract) * 100;
}