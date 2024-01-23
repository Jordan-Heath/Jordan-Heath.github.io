function playerBusinessName() {
    player.name = document.getElementById('businessName').value;
}

function startIntervals() {
    setInterval(earnIncome, incomeInterval);
    // setInterval(() => player.saveToCookies(), autoSaveInterval * 1000);
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
    const upgrade = data.upgrades.find((u) => u.id === upgradeid);

    //make the transaction
    if (upgrade && player.money >= upgrade.cost) {
        player.money -= upgrade.cost;
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
