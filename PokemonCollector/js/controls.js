/**
 * Set the selected gatcha in the save object and update the UI
 * @param {string} gatchaName - the name of the gatcha to select
 * @param {Element} gatchaElement - the element of the gatcha to select
 */
function selectGatcha(gatchaID, gatchaElement) {
    globals.selectedGatcha = gatchaID;

    //unselect all gatcha elements and select the one that was clicked
    document.querySelectorAll('.gatcha').forEach((gatcha) => gatcha.classList.remove('selected'));
    gatchaElement.classList.add('selected');

    //update spinner
    const gatchaSpinnerElement = document.querySelector('.gatcha-spinner');
    gatchaSpinnerElement.style = null;
    gatchaSpinnerElement.innerHTML = `Click to spin!`;

    renderChallenges();
}

function spinGatcha() {
    const selectedGatcha = save.gatchas.find(gatcha => gatcha.ID === globals.selectedGatcha);

    let rewardRarity = getWeightedRandom(rarity, selectedGatcha.odds);
    if (rewardRarity === 'coin') {
        save.money += selectedGatcha.moneyReward;
        updateHUD();
        renderMoneyReward(selectedGatcha.moneyReward);
    } else {
        const eligibleMonsters = save.monsters.filter((monster) => monster.rarity === rewardRarity);
        const rewardMonster = eligibleMonsters[Math.floor(Math.random() * eligibleMonsters.length)];
        const isShiny = Math.random() < save.shinyChance;

        addMonster(rewardMonster, isShiny);
        renderMonsterReward(rewardMonster, isShiny);
    }
}

function evolveMonster(monsterID) {
    const evolveCost = getEvolveCost();
    const monsterData = save.monsters.find((m) => m.ID === monsterID);
    
    if (!monsterData) { alert('Monster not found'); return; }
    if (monsterData.count < evolveCost) { alert(`You need at least ${evolveCost} ${monsterData.name} to evolve`); return; }
    if (!monsterData.evolvesTo.length > 0) { alert(`Cannot evolve ${monsterData.name}`); return; }

    // get monster data
    const resultingMonster = save.monsters.find((m) => m.name === monsterData.evolvesTo[Math.floor(Math.random() * monsterData.evolvesTo.length)]);

    if (!resultingMonster) { alert('Evolved monster not found'); return; }
    
    monsterData.count -= evolveCost;
    addMonster(resultingMonster);
}

function sacrificeMonster(monsterID) {
    const sacrificeCost = getSacrificeCost()
    const monsterData = save.monsters.find((m) => m.ID === monsterID);

    if (!monsterData) { alert('Monster not found'); return; }
    if (monsterData.count < sacrificeCost) { alert(`You need at least ${sacrificeCost} ${monsterData.name} to sacrifice`); return; }
    if (monsterData.evolvesTo.length > 0) { alert(`Cannot sacrifice ${monsterData.name}`); return; }

    monsterData.count -= sacrificeCost;
    updateMonsterCollection();

    raiseShinyChance();
    updateHUD();
}

function evolveAllMonsters() {
    const evolveCost = getEvolveCost();

    save.monsters.forEach(monster => {
        while ( monster.count >= evolveCost && monster.evolvesTo.length > 0)
            evolveMonster(monster.ID);
    });
}

function sacrificeAllMonsters() {
    const sacrificeCost = getSacrificeCost();

    save.monsters.forEach(monster => {
        while (monster.count >= sacrificeCost && monster.evolvesTo.length === 0)
            sacrificeMonster(monster.ID);
    });
}

function selectNavTab(tab, container) {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach((tab) => tab.classList.remove('active'));
    tab.classList.add('active');

    const containers = document.querySelectorAll('.container');
    containers.forEach((container) => container.classList.remove('active'));
    document.querySelector(container).classList.add('active');

    //deactivate controls
    clearChallenges();

    // update the selected container
    switch (container) {
        case '.gatcha-container':
            renderGatchas();
            break;
        case '.collection-container':
            updateMonsterCollection();
            break;
        case '.upgrade-container':
            updateUpgrades();
            break;
        case '.jobs-container':
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
    updateMonsterCollection();
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
    const monstersCurrentJob = save.jobs.find((j) => j.assignedMonster?.ID === monsterData.ID);
    if (monstersCurrentJob !== undefined) {
        //confirm the user wishes to reassign them, then reassign
        if (!confirm(`The monster ${monsterData.name} is already assigned to a job. Do you wish to reassign them?`)) {
            return;
        }
        
        //set the assigned monster to null
        monstersCurrentJob.assignedMonster = null;
    }

    selectedJobData.assignedMonster = monsterData;

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
        updateMonsterCollection();
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

        if (globals.selectedGatcha === 0) {
            globals.selectedGatcha = 1;
            renderGatchas();
        }
    }
}