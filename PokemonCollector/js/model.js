function addMonster(monsterData, isShiny = false) {
    monsterData.owned = true
    monsterData.count++;
    if (isShiny) monsterData.shiny = true;

    updateMonsterCollection();
}

function getEvolveCost() {
    if (save.upgrades.find((u) => u.ID === 3.3).owned) return 3; // "Evolving Monsters +2", the cost is 3
    else if (save.upgrades.find((u) => u.ID === 3.2).owned) return 4; // "Evolving Monsters +1", the cost is 4
    else if (save.upgrades.find((u) => u.ID === 3.1).owned) return 5; // "Evolving Monsters", the cost is 5
    else return 0;
}

function getSacrificeCost() {
    if (save.upgrades.find((u) => u.ID === 3.4).owned) return 10; // "Sacrificing Monsters", the cost is 10
    else return 0;
}

function getRevenueBonus() {
    if (save.upgrades.find((u) => u.ID === 2.1).owned) return 1.5; // "Proficient Workers 50%", 1.5 multiplier
    else if (save.upgrades.find((u) => u.ID === 2.2).owned) return 1.25; // "Proficient Workers 25%", 1.25 multiplier
    else if (save.upgrades.find((u) => u.ID === 2.3).owned) return 1.1; // "Proficient Workers 10%", 1.1 multiplier
    else return 1;
}

function calculateRevenuePerSecond() {
    // foreach of the jobs, calculate the revenue per second
    // add them all together
    // return the total
    let totalRevenue = 0;

    save.jobs.forEach((jobData) => {
        if (jobData.assignedMonster === null) return;

        //get the assigned monster's skill in the selected job
        let jobPerformance = jobData.assignedMonster.skills[jobData.skill];
        if (jobData.assignedMonster.shiny) jobPerformance *= shinySkillMultiplier;

        totalRevenue += jobData.revenuePerSkill * jobPerformance;
    });

    //mutliply by upgrade bonus
    totalRevenue *= getRevenueBonus();

    document.getElementById('revenue').textContent = totalRevenue.toFixed(2);
    save.revenue = totalRevenue;
}

function handleRepeatableUpgrade(upgrade) {
    switch (upgrade.id) {
        case 5.1: //'Raise Shiny Chance'
            save.repeatableUpgrades.timesBoostedShinyChance++;
            raiseShinyChance();
            break;
        case 5.2: //'Raise Gatcha Speed'
            save.repeatableUpgrades.passiveGatchaSpeed += 1;
            renderChallenges();
            break;
    }
}

function saveToLocalStorage() {
    const saveData = {
        monsters: [],
        upgrades: [],
        jobs: [],
        money: save.money,
        revenue: save.revenue,
        shinyChance: save.shinyChance,
        repeatableUpgrades: save.repeatableUpgrades,
        settings: save.settings
    };

    save.monsters.forEach(monsterData => {
        saveData.monsters.push({
            ID: monsterData.ID,
            owned: monsterData.owned,
            count: monsterData.count,
            shiny: monsterData.shiny
        });
    });

    save.upgrades.forEach(upgradeData => {
        saveData.upgrades.push({
            ID: upgradeData.ID,
            owned: upgradeData.owned
        });
    });

    save.jobs.forEach(jobData => {
        saveData.jobs.push({
            ID: jobData.ID,
            assignedMonster: jobData.assignedMonster !== null ? { ID: jobData.assignedMonster.ID } : null
        });
    });

    localStorage.setItem('save', JSON.stringify(saveData));
}

function loadFromLocalStorage() {
    const saveString = localStorage.getItem('save');
    
    if (saveString) {
        const loadedData = JSON.parse(saveString)

        save.monsters.forEach(monsterData => {
            const loadedMonster = loadedData.monsters.find((m) => m.ID === monsterData.ID);
            if (loadedMonster !== undefined) {
                monsterData.owned = loadedMonster.owned;
                monsterData.count = loadedMonster.count;
                monsterData.shiny = loadedMonster.shiny;
            }
        });

        save.upgrades.forEach(upgradeData => {
            const loadedUpgrade = loadedData.upgrades.find((u) => u.ID === upgradeData.ID);
            if (loadedUpgrade !== undefined) {
                upgradeData.owned = loadedUpgrade.owned;
            }
        });

        save.jobs.forEach(jobData => {
            const loadedJob = loadedData.jobs.find((j) => j.ID === jobData.ID);
            if (loadedJob !== undefined) {
                const assignedMonster = save.monsters.find((m) => m.ID === loadedJob.assignedMonster?.ID);
                jobData.assignedMonster = assignedMonster !== undefined ? assignedMonster : null;
            }
        });

        save.money = loadedData.money;
        save.revenue = loadedData.revenue;
        save.shinyChance = loadedData.shinyChance;
        save.repeatableUpgrades = loadedData.repeatableUpgrades;
        save.settings = loadedData.settings;
    }
}

function raiseShinyChance() {
    //save.shinyChance += Math.random() * 0.009 + 0.001; // between 0.001 and 0.01
    save.shinyChance += 0.001
    updateHUD();
}