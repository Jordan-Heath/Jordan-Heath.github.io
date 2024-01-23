const save = new Save();
const properties = [];
const incomeInterval = 50;
const DATA_URL = 'https://jordan-heath.github.io/IdleLandlord/data/data.json';

function exportSave() {
    const saveData = {
        money: save.money,
        income: save.income,
        propertyOwnership: Object.fromEntries(save.propertyOwnership.entries())
    };

    const blob = new Blob([JSON.stringify(saveData)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'save.json';
    link.click();
}

function importSave(event) {
    const input = event.target;
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function () {
            try {
                const importedSave = JSON.parse(reader.result);
                save.money = importedSave.money;
                save.income = importedSave.income;
                save.propertyOwnership = new Map(Object.entries(importedSave.propertyOwnership));

                updateDisplay();
                updateButtons();
            } catch (error) {
                console.error('Error importing save:', error);
            }
        };

        reader.readAsText(file);
    }
}

function loadData() {
    fetch(DATA_URL)
        .then(response => response.json())
        .then(data => {
            // Update the work rate
            save.workRate = parseInt(data.Work);

            // Load properties
            properties.push(...data.properties);

            // Initialize propertyOwnership with all properties set to 0
            properties.forEach(property => {
                save.propertyOwnership.set(property.name, 0);
            });

            updateButtons();
            startIncomeInterval();
        })
        .catch(error => console.error('Error loading data:', error));
}

function startIncomeInterval() {
    setInterval(updateIncome, incomeInterval);
}

function updateIncome() {
    for (const [property, count] of save.propertyOwnership.entries()) {
        var profit = properties.find(p => p.name === property).income * count
        save.money += profit * incomeInterval / 1000;
    }
    updateDisplay();
}

function updateButtons() {
    const propertyButtonsContainer = document.getElementById('propertyButtons');
    propertyButtonsContainer.innerHTML = ''; // Clear existing buttons

    properties.forEach(property => {
        const propertyContainer = document.createElement('div');
        propertyContainer.classList.add('property-container');

        const propertyName = document.createElement('p');
        if (save.propertyOwnership.get(property.name)) {
            propertyName.innerText = `${save.propertyOwnership.get(property.name)} `;
            propertyName.innerText += `${property.name} `;
            propertyName.innerText += `($${save.propertyOwnership.get(property.name) * property.income}/s)`;
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
    document.getElementById('moneyValue').innerText = save.money;
    document.getElementById('incomeValue').innerText = save.income;
}

function work() {
    save.money += workRate;
    updateDisplay();
}

function buyProperty(propertyName) {
    const property = properties.find(p => p.name === propertyName);

    if (property && save.money >= property.cost) {
        save.money -= property.cost;
        save.propertyOwnership.set(propertyName, save.propertyOwnership.get(propertyName) + 1);
        save.income += property.income;
        updateDisplay();
        updateButtons();
    } else {
        alert("Not enough money to buy the property!");
    }
}

// Load properties when the script is executed

document.addEventListener('DOMContentLoaded', function () {
    //document.getElementById('exportButton').addEventListener('click', exportSave);
    //document.getElementById('importButton').addEventListener('click', () => {
        //document.getElementById('importInput').click();
    //});
    //document.getElementById('importInput').addEventListener('change', importSave);
    loadData();
});