const properties = [];
const incomeInterval = 50;
const DATA_URL = 'https://jordan-heath.github.io/IdleLandlord/data/data.json';
const data = new Data();

var workRate

function exportSave() {
    const saveData = {
        version: data.version,
        name: data.name,
        money: data.money,
        ownedProperties: Object.fromEntries(data.properties.entries())//,
        //ownedUpgrades: Object.fromEntries(data.upgrades.entries())
    };

    const blob = new Blob([JSON.stringify(saveData)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${data.name === "" ? "save" : data.name}.json`;
    link.click();
}

function importSave() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function () {
            try {
                const importedSave = JSON.parse(reader.result);
                if(importedSave.version != data.version) {
                    alert("Save version is outdated and may have issues.");
                }
                data.baseWorkRate = importedSave
                data.name = importedSave.name;
                data.money = importedSave.money;

                //TODO: create a process to merge the owned numbers over the owned numbers
                data.properties = new Map(Object.entries(importedSave.ownedProperties));
                //TODO: implement upgrades
                //data.upgrades = new Map(Object.entries(importedSave.ownedUpgrades));

                updateDisplay();
                updateButtons();
            } catch (error) {
                console.error('Error importing save:', error);
            }
        };

        reader.readAsText(file);
    }
}

function editBusinessName() {
    const businessNameElement = document.getElementById('businessName');

    // Create an input field
    const inputElement = document.createElement('input');
    inputElement.value = businessNameElement.innerText;
    
    // Add an event listener to save changes on Enter key press
    inputElement.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            saveBusinessName(inputElement.value);
        }
    });

    // Replace the h2 with the input field
    businessNameElement.replaceWith(inputElement);

    // Focus the input field
    inputElement.focus();
}

function saveBusinessName(newName) {
    // Update the business name wherever necessary
    // For now, let's just update the h2 element
    const businessNameElement = document.createElement('h2');
    businessNameElement.id = 'businessName';
    businessNameElement.innerText = newName;

    // Add the event listener back to the updated h2
    businessNameElement.addEventListener('click', editBusinessName);

    // Replace the input field with the updated h2
    const inputElement = document.querySelector('input');
    inputElement.replaceWith(businessNameElement);
}

function startIncomeInterval() {
    setInterval(earnIncome, incomeInterval);
}

function earnIncome() {
    data.money += data.income() * incomeInterval / 1000;
    updateDisplay();
}

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
        buyButton.innerText = `$${property.cost}`;
        buyButton.onclick = () => buyProperty(property.name);

        propertyContainer.appendChild(propertyName);
        propertyContainer.appendChild(buyButton);

        propertyButtonsContainer.appendChild(propertyContainer);
    });
}

function updateDisplay() {
    document.getElementById('moneyValue').innerText = data.money;
}

function work() {
    data.money += data.baseWorkRate;
    updateDisplay();
}

function buyProperty(propertyName) {
    const property = data.properties.find(p => p.name === propertyName);

    if (property && data.money >= property.cost) {
        data.money -= property.cost;
        property.owned += 1;
        document.getElementById('incomeValue').innerText = data.income();
        updateDisplay();
        updateButtons();
    } else {
        alert("Not enough money to buy the property!");
    }
}

// Load properties when the script is executed

document.addEventListener('DOMContentLoaded', function () {
    const businessNameElement = document.getElementById('businessName');
    businessNameElement.addEventListener('click', editBusinessName);

    data.loadData();
});