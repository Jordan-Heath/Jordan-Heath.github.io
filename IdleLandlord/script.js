let money = 0;
let income = 0;
let properties = [];

function loadProperties() {
    fetch('data/properties.json')
        .then(response => response.json())
        .then(data => {
            properties = data.properties; // Access the 'properties' array
            updateButtons();
        })
        .catch(error => console.error('Error loading properties:', error));
}

function updateButtons() {
    const propertyButtonsContainer = document.getElementById('propertyButtons');

    properties.forEach(property => {
        const button = document.createElement('button');
        button.id = `buy${property.name}Button`;
        button.textContent = `Buy ${property.name} ($${property.cost})`;
        button.onclick = () => buyProperty(property.name);

        propertyButtonsContainer.appendChild(button);
    });
}

function updateDisplay() {
    document.getElementById('moneyValue').innerText = money;
    document.getElementById('incomeValue').innerText = income;
}

function work() {
    money += 10;
    updateDisplay();
}

function buyProperty(propertyName) {
    const property = properties.find(p => p.name === propertyName);

    if (property && money >= property.cost) {
        money -= property.cost;
        income += property.income;
        updateDisplay();

        setInterval(() => {
            money += income;
            updateDisplay();
        }, 1000);
    } else {
        alert("Not enough money to buy the property!");
    }
}

// Load properties when the script is executed
loadProperties();
