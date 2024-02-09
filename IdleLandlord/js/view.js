//initialise Page
function initialiseViews() {
    createPropertiesView();

    updatePageView();
}

function updatePageView() {
    updatePropertiesView();
    updateNameView();
    updateIncomeView();
    updateMoneyView();
    updateJobView();
}

// Header
function toggleSettings() {
    settings = document.getElementById("settings");
    settings.style.display === 'none' ? settings.style.display = 'flex' : settings.style.display = 'none';
}

// Left Column
function createPropertiesView() {
    const propertiesView = document.getElementById('propertiesView');

    data.properties.forEach(property => {
        propertiesView.appendChild(property.view);

        //upgrades
        property.upgrades.forEach(upgrade => {
            upgradesView.appendChild(upgrade.view);
        });
    });

    updatePropertiesView();
}

function updatePropertiesView() {
    data.properties.forEach(property => {
        property.updateView();
    });
}

// Middle Column
function updateNameView() {
    var businessNameView = document.getElementById('businessName');

    if (player.name === "Your Name") {
        /* #businessName {
            width: 100%;
            font-size: 32px;
            text-align: center;
            background: none;
            border: none;
            margin-top: 10px;
            margin-bottom: 20px;
        } */
        businessNameView.style.background = "white";
        businessNameView.style.border = "1px";
    } else {
        businessNameView.style.background = "none";
        businessNameView.style.border = "none";
    }

    businessNameView.value = player.name;
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
    document.getElementById('payRate').innerText = `${round(data.job.payRate)}/click`;

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
    //force buttons visible to prevent breaking when resizing
    //document.getElementById('footer').style.display = "flex";

    //load columns
    var leftColumn = document.getElementById('leftColumn');
    var middleColumn = document.getElementById('middleColumn');
    var rightColumn = document.getElementById('rightColumn');

    //load buttons 
    var leftButton = document.getElementById('leftFooterButton');
    var middleButton = document.getElementById('middleFooterButton');
    var rightButton = document.getElementById('rightFooterButton');

    //reset columns
    leftColumn.classList.add('mobile-hidden');
    middleColumn.classList.add('mobile-hidden');
    rightColumn.classList.add('mobile-hidden');

    //reset buttons
    leftButton.classList.remove('selected-footer-button');
    middleButton.classList.remove('selected-footer-button');
    rightButton.classList.remove('selected-footer-button');

    switch (menu) {
        case 'properties':
            leftButton.classList.add('selected-footer-button');
            leftColumn.classList.remove('mobile-hidden');
            break;
        case 'home':
            middleButton.classList.add('selected-footer-button');
            middleColumn.classList.remove('mobile-hidden');
            break;
        case 'upgrades':
            rightButton.classList.add('selected-footer-button');
            rightColumn.classList.remove('mobile-hidden');
            break;
    }
}