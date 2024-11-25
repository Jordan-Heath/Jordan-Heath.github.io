function selectCardPack(cardPackID, cardPackElement) {
    globals.selectedCardPack = cardPackID;

    //unselect all cardpack elements and select the one that was clicked
    document.querySelectorAll('.cardpack').forEach((cardpack) => cardpack.classList.remove('selected'));
    cardPackElement.classList.add('selected');

    //update opener
    const cardpackOpenerElement = document.querySelector('.cardpack-opener');
    cardpackOpenerElement.style = null;
    cardpackOpenerElement.innerHTML = `Click to spin!`;

    renderChallenges();
}

function openCardPack() {
    const selectedCardPack = save.cardPacks.find(cardpack => cardpack.ID === globals.selectedCardPack);

    let rewardRarity = getWeightedRandom(rarity, selectedCardPack.odds);
    if (rewardRarity === 'coin') {
        save.money += selectedCardPack.moneyReward;
        updateHUD();
        renderMoneyReward(selectedCardPack.moneyReward);
    } else {
        const eligibleMonsters = save.monsters.filter((monster) => monster.rarity === rewardRarity);
        const rewardMonster = eligibleMonsters[Math.floor(Math.random() * eligibleMonsters.length)];
        const isShiny = Math.random() < save.shinyChance;

        addMonster(rewardMonster, isShiny);
        renderMonsterReward(rewardMonster, isShiny);
    }
}

function evolveMonster(monsterID, doDisplayMessage = true) {
    const evolveCost = getEvolveCost();
    const monsterData = save.monsters.find((m) => m.ID === monsterID);
    
    if (!monsterData) { alert('Monster not found'); return; }
    if (monsterData.count < evolveCost) { alert(`You need at least ${evolveCost} ${monsterData.name} to evolve`); return; }
    if (!monsterData.evolvesTo.length > 0) { alert(`Cannot evolve ${monsterData.name}`); return; }

    // get monster data
    const resultingMonster = save.monsters.find((m) => m.name === monsterData.evolvesTo[Math.floor(Math.random() * monsterData.evolvesTo.length)]);

    if (!resultingMonster) { alert('Evolved monster not found'); return; }
    
    monsterData.count -= evolveCost;
    updateMonsterCollection(monsterData);

    addMonster(resultingMonster);
    if (doDisplayMessage) displayMessage(`${monsterData.name} evolved into ${resultingMonster.name}`);
}

function sacrificeMonster(monsterID, doDisplayMessage = true) {
    const sacrificeCost = getSacrificeCost()
    const monsterData = save.monsters.find((m) => m.ID === monsterID);

    if (!monsterData) { alert('Monster not found'); return; }
    if (monsterData.count < sacrificeCost) { alert(`You need at least ${sacrificeCost} ${monsterData.name} to sacrifice`); return; }
    if (monsterData.evolvesTo.length > 0) { alert(`Cannot sacrifice ${monsterData.name}`); return; }

    monsterData.count -= sacrificeCost;
    updateMonsterCollection(monsterData);

    raiseShinyChance();
    updateHUD();
    if (doDisplayMessage) displayMessage(`${monsterData.name} sacrificed`);
}

function evolveAllMonsters() {
    const evolveCost = getEvolveCost();
    let evolvedMonsters = 0;

    if (evolveCost === 0) { alert('You have not unlocked the ability to evolve any monsters'); return; }

    save.monsters.forEach(monster => {
        while (canMonsterEvolve(monster, evolveCost)) {
            evolveMonster(monster.ID, false);
            evolvedMonsters++;
        }
    });

    displayMessage(`${evolvedMonsters * evolveCost} ${evolvedMonsters === 1 ? 'monster was' : 'monsters were'} evolved`);
}

function sacrificeAllMonsters() {
    const sacrificeCost = getSacrificeCost();
    let sacrificedMonsters = 0;

    if (sacrificeCost === 0) { alert('You have not unlocked the ability to sacrifice any monsters'); return; }

    save.monsters.forEach(monster => {
        while (monster.count >= sacrificeCost && monster.evolvesTo.length === 0) {
            sacrificeMonster(monster.ID);
            sacrificedMonsters++;
        }
    });

    displayMessage(`${sacrificedMonsters * sacrificeCost} ${sacrificedMonsters === 1 ? 'monster was' : 'monsters were'} sacrificed`);
}

function selectNavTab(tab, container) {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach((tab) => tab.classList.remove('active'));
    tab.classList.add('active');

    const containers = document.querySelectorAll('.container');
    containers.forEach((container) => container.classList.remove('active'));
    document.querySelector(container).classList.add('active');

    document.querySelector('nav').classList.remove('active');
    document.getElementById('mobile-menu-button').classList.remove('active');

    //deactivate controls
    clearChallenges();

    // update the selected container
    switch (container) {
        case '.cardpack-container':
            renderCardPacks();
            break;
        case '.collection-container':
            document.getElementById('collection-nav-tab').classList.remove('notifying');
            updateMonsterCollection();
            break;
        case '.upgrade-container':
            document.getElementById('upgrades-nav-tab').classList.remove('notifying');
            updateUpgrades();
            break;
        case '.jobs-container':
            document.getElementById('jobs-nav-tab').classList.remove('notifying');
            updateJobs();
            break;
        case '.settings':
            renderSettings();
            break;
    }
}

function purchaseUpgrade(selectedUpgradeID) {
    const upgradeData = save.upgrades.find((u) => u.ID === selectedUpgradeID);

    if (upgradeData === undefined) { alert('Upgrade not found'); return; }
    if (save.money < upgradeData.cost) { alert('Not enough money'); return; }

    save.money -= upgradeData.cost;

    if (upgradeData.repeatable) {
        handleRepeatableUpgrade(upgradeData);
    } else {
        upgradeData.owned = true;
    }

    updateUpgrades();
    calculateRevenuePerSecond();
    updateHUD();
}

function selectJob(selectedJob, selectedJobElement) {
    globals.selectedJob = selectedJob.ID;

    // unselect the previous job, then select the new one
    document.querySelectorAll('.job.selected').forEach((jobElement) => jobElement.classList.remove('selected'));
    selectedJobElement.classList.add('selected');

    // render the selected job
    updateSelectedJob();
    updateMonsterAssigner();
}

function assignJob(selectedJobData, monsterData) {
    if (!selectedJobData) { alert('Job not found'); return; }
    if (!monsterData) { alert('Monster not found'); return; }
    if (!monsterData.owned) { alert('You don\'t have this monster'); return; }
    if (selectedJobData.assignedMonster?.ID === monsterData.ID) { alert('This monster is already assigned to this job'); return; }

    //check if this monster has already been assigned a job
    const monstersCurrentJob = monsterData.assignedJob;
    if (monstersCurrentJob !== undefined
        && monstersCurrentJob !== null
    ) {
        //confirm the user wishes to reassign them, then reassign
        if (!confirm(`${monsterData.name} is already assigned to ${monstersCurrentJob.name}. Do you wish to reassign them?`)) {
            return;
        }

        //ensure old job is unassigned
        monstersCurrentJob.assignedMonster = null;
    }

    //esnure previous employee is unassigned
    if (selectedJobData.assignedMonster !== null) {
        selectedJobData.assignedMonster.assignedJob = null;
    }

    selectedJobData.assignedMonster = monsterData;
    monsterData.assignedJob = selectedJobData;

    calculateRevenuePerSecond();
    updateJobs();
}

// #region Settings
function saveGame() {
    saveToLocalStorage();
    displayMessage('Save successful!');
}

function deleteSave() {
    if (confirm('Are you sure you want to delete your save?')) {
        localStorage.removeItem('save');
        location.reload();
    }
}

function exportSave() {
    const saveString = localStorage.getItem('save');
    const blob = new Blob([saveString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'save.json';
    a.click();
    URL.revokeObjectURL(url);
}

function updatePayFrequency() {
    save.settings.payFrequency = document.getElementById('pay-frequency').value;
    document.getElementById('pay-frequency-value').textContent = `every ${save.settings.payFrequency} seconds (${(1 / save.settings.payFrequency).toFixed(2)}/sec)`;

    //change the interval to the new value
    clearInterval(globals.payInterval);
    globals.payInterval = setInterval(() => {
        save.money += save.revenue / 60 * save.settings.payFrequency;
        updateHUD();
    }, save.settings.payFrequency * 1000);
}
// #endregion Settings


function toggleCheatMode() {
    if (document.getElementById('cheat-mode').checked) {
        document.getElementById('cheat-mode-value').textContent = 'Enabled';
        save.settings.cheatMode = true;
        data.upgrades.find((u) => u.ID === 0).owned = true;
    } else {
        document.getElementById('cheat-mode-value').textContent = 'Disabled';
        save.settings.cheatMode = false;
        data.upgrades.find((u) => u.ID === 0).owned = false;

        if (globals.selectedCardPack === 0) {
            globals.selectedCardPack = 1;
            renderCardPacks();
        }
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.querySelector('nav');
    mobileMenu.classList.toggle('active');

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    mobileMenuButton.classList.toggle('active');
}

function toggleDisableChallenges() {
    if (document.getElementById('disable-challenges').checked) {
        document.getElementById('disable-challenges-value').textContent = 'Enabled';
        save.settings.disableChallenges = true;
    } else {
        document.getElementById('disable-challenges-value').textContent = 'Disabled';
        save.settings.disableChallenges = false;
    }
}