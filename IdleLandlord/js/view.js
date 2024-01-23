function createPropertyContainer(property) {
    const propertyContainer = document.createElement('div');
    propertyContainer.classList.add('property-container');

    const columnView = document.createElement('div');
    columnView.className = 'column';

    const propertyId = document.createElement('p');
    propertyId.className = 'title';
    if (property.owned > 0) {
        propertyId.innerText = `${property.owned} ${property.id} ($${round(property.owned * property.income)}/s)`;
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

    return propertyContainer;
}

function updatePropertiesView() {
    const propertyButtonsContainer = document.getElementById('propertyButtons');
    propertyButtonsContainer.innerHTML = ''; // Clear existing buttons

    data.properties.forEach(property => {
        const propertyContainer = createPropertyContainer(property);
        propertyButtonsContainer.appendChild(propertyContainer);
    });
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
    workExperienceFill.style.width = `${(player.xp - data.xpSubstract) / data.xpGoal * 100}%`;
    workExperienceBar.appendChild(workExperienceFill);
}

function updateNameView() {
    document.getElementById('businessName').value = player.name;
}

function updatePageView() {
    updatePropertiesView();
    updateIncomeView();
    updateMoneyView();
    updateNameView();
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
