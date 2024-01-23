function saveBusinessName(newName) {
    data.name = document.getElementById("businessName").value;
}

function startIntervals() {
    setInterval(earnIncome, incomeInterval);
    //setInterval(() => data.saveToCookies(), autosaveInterval*1000);
}

function earnIncome() {
    data.money += round(data.checkIncome() * incomeInterval / 1000);
    updateMoney();
}

function work() {
    data.money += data.checkWorkRate();
    updateMoney();
}

function buyProperty(propertyName) {
    const property = data.properties.find(p => p.name === propertyName);

    if (property && data.money >= property.cost) {
        data.money -= property.cost;
        property.owned += 1;
        updatePage();
    } else {
        sendMessage("Not enough money to buy the property!");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    data.loadData();
});