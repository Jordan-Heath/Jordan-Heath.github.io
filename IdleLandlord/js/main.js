function saveBusinessName() {
    player.name = document.getElementById('businessName').value;
    updateNameView();
}

function startIntervals() {
    setInterval(earnIncome, incomeInterval);
    setInterval(() => player.saveToCookies(), autoSaveInterval * 1000);
}

function earnIncome() {
    player.money += data.income * (incomeInterval / 1000);
    updateMoneyView();
}

function work() {
    player.money += data.job.payRate;
    updateMoneyView();

    player.xp += 1;
    data.updateJob();
}

function buyProperty(propertyId) {
    //find the property
    const property = data.properties.find((p) => p.id === propertyId);

    //make the transaction
    if (property && player.money >= property.cost) {
        player.money -= property.cost;
        player.ownedProperties[propertyId] += 1;

        //update data/page
        property.recalculateCost();
        data.updateIncome();
        updatePageView();
    } else {
        sendMessage("Not enough money to buy the property!");
    }
}

function buyUpgrade(upgradeid) {
    //find the upgrade
    let foundUpgrade;
    data.properties.forEach(property => {
        property.upgrades.forEach(upgrade => {
            if (upgrade.id === upgradeid)
                foundUpgrade = upgrade;
        });
    });
    

    //make the transaction
    if (foundUpgrade && player.money >= foundUpgrade.cost) {
        player.money -= foundUpgrade.cost;
        player.ownedUpgrades[upgradeid] = true;

        //upgrade data/page
        data.updateIncome();
        updatePageView();
    } else {
        sendMessage("Not enough money to buy the upgrade!");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    data.loadData();
});
