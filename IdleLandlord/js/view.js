function updateButtons() {
    const propertyButtonsContainer = document.getElementById('propertyButtons');
    propertyButtonsContainer.innerHTML = ''; // Clear existing buttons

    data.properties.forEach(property => {
        const propertyContainer = document.createElement('div');
        propertyContainer.classList.add('property-container');

        const propertyName = document.createElement('p');
        if (property.owned > 0) {
            propertyName.innerText = `${property.owned} `;
            propertyName.innerText += `${property.name} `;
            propertyName.innerText += `($${property.owned * property.income}/s)`;
        } else {
            propertyName.innerText = property.name;
        }

        const buyButton = document.createElement('button');
        buyButton.innerText = `$${property.inflatedCost}`;
        buyButton.onclick = () => buyProperty(property.name);

        propertyContainer.appendChild(propertyName);
        propertyContainer.appendChild(buyButton);

        propertyButtonsContainer.appendChild(propertyContainer);
    });
}

function updateMoney() {
    document.getElementById('moneyValue').innerText = data.money;
}

function updateIncome() {
    document.getElementById('incomeValue').innerText = data.checkIncome();
}

function updateName() {
    document.getElementById("businessName").value = data.name;
}

function updatePage() {
    updateButtons();
    updateIncome();
    updateMoney();
    updateName();
}

function sendMessage(message) {
    document.getElementById("messageWindow").innerHTML = message;
    document.getElementById("messageWindow").style.display = "block";
    element.classList.add('fade');
    function clearMessage() {
        document.getElementById("messageWindow").innerHTML = "";
        document.getElementById("messageWindow").style.display = "none";
    }
    setTimeout(clearMessage, MESSAGE_TIMEOUT);
}