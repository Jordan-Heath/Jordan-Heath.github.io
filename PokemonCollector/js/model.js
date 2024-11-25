function addMonster(monsterData, isShiny = false) {
    monsterData.owned = true
    monsterData.count++;
    if (isShiny) monsterData.shiny = true;

    updateMonsterCollection(monsterData);
}

function handleRepeatableUpgrade(upgrade) {
    switch (upgrade.id) {
        case 5.1: //'Raise Shiny Chance'
            save.repeatableUpgrades.timesBoostedShinyChance++;
            raiseShinyChance();
            break;
        case 5.2: //'Raise CardPack Speed'
            save.repeatableUpgrades.passiveCardPackSpeed += 1;
            renderChallenges();
            break;
    }
}

function raiseShinyChance() {
    save.shinyChance += 0.001
    updateHUD();
}

//#region Saving
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
                
                if (assignedMonster !== undefined)  {
                    assignedMonster.assignedJob = jobData;
                    assignedMonster.assignedJob.assignedMonster = assignedMonster;
                }
            }
        });

        save.money = loadedData.money;
        save.revenue = loadedData.revenue;
        save.shinyChance = loadedData.shinyChance;
        save.repeatableUpgrades = loadedData.repeatableUpgrades;
        save.settings = loadedData.settings;
    }
}
//#endregion Saving

//#region Queries
function calculateAptitudeScore(monsterData, skill) {
    const adjustedMonsterSkill = monsterData.skills[skill] * (monsterData.shiny ? shinySkillMultiplier : 1);

    if (adjustedMonsterSkill >= 300)
        return 6;
    if (adjustedMonsterSkill >= 200)
        return 5;
    if (adjustedMonsterSkill >= 150)
        return 4;
    if (adjustedMonsterSkill >= 120)
        return 3;
    if (adjustedMonsterSkill >= 80)
        return 2;
    if (adjustedMonsterSkill >= 40)
        return 1;
    return 0;
}

function canMonsterEvolve(monsterData, evolveCost = getEvolveCost()) {
    return evolveCost > 0
        && monsterData.evolvesTo.length > 0
        && monsterData.count >= evolveCost;
}

function canMonsterBeSacrificed(monsterData, sacrificeCost = getSacrificeCost()) {
    return sacrificeCost > 0
        && monsterData.evolvesTo.length === 0
        && monsterData.count >= sacrificeCost;
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
    if (save.upgrades.find((u) => u.ID === 2.5).owned) return 3; // "Proficient Workers 200%", 3.0 multiplier
    else if (save.upgrades.find((u) => u.ID === 2.4).owned) return 2; // "Proficient Workers 100%", 2.0 multiplier
    else if (save.upgrades.find((u) => u.ID === 2.3).owned) return 1.5; // "Proficient Workers 50%", 1.5 multiplier
    else if (save.upgrades.find((u) => u.ID === 2.2).owned) return 1.25; // "Proficient Workers 25%", 1.25 multiplier
    else if (save.upgrades.find((u) => u.ID === 2.1).owned) return 1.1; // "Proficient Workers 10%", 1.1 multiplier
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
//#endregion Queries

//#region View
function doesCardNeedUpdate(monsterData, cardElement) {
    return monsterData.owned && (
        cardElement.dataset.count !== String(monsterData.count) ||
        cardElement.dataset.shiny !== String(monsterData.shiny) ||
        cardElement.dataset.evolvingCost !== String(getEvolveCost()) ||
        cardElement.dataset.isSacrificable !== String(canMonsterBeSacrificed(monsterData))
    );
}

function getCardHeaderHTML(monsterData) {
    let cardTypeHTML = '';
    let imgBackgroundColors = [];
    monsterData.types.forEach(type => {
        type = type.toLowerCase();

        cardTypeHTML += `<img src="images/types/${type}.png" alt="${type}">`;

        imgBackgroundColors.push(`var(--${type}-color)`);
    })

    const result = `
        <div class="card-type"> 
            ${cardTypeHTML} 
        </div>
        <div class="card-ID">${monsterData.ID}</div>
        <img 
            style="background: linear-gradient(180deg, ${imgBackgroundColors[0]}, ${imgBackgroundColors[1] || imgBackgroundColors[0]});"
            class="card-image" 
            src="images/monsters/${monsterData.shiny ? 'shiny/' : ''}${monsterData.image}"
            alt="${monsterData.name}">`;

    return result;
}

function getCardSkillTableHTML(monsterData, isShiny = monsterData.shiny) {
    const skillMultiplier = isShiny ? shinySkillMultiplier : 1;
    const result = `
        <table>
            <tr>
                <th>${skillsReadable[0]}</th>
                <th>${skillsReadable[1]}</th>
                <th>${skillsReadable[2]}</th>
            </tr>
            <tr>
                <td>${monsterData.skills[skills[0]] * skillMultiplier}</td>
                <td>${monsterData.skills[skills[1]] * skillMultiplier}</td>
                <td>${monsterData.skills[skills[2]] * skillMultiplier}</td>
            </tr>
            <tr>
                <th>${skillsReadable[3]}</th>
                <th>${skillsReadable[4]}</th>
                <th>${skillsReadable[5]}</th>
            </tr>
            <tr>
                <td>${monsterData.skills[skills[3]] * skillMultiplier}</td>
                <td>${monsterData.skills[skills[4]] * skillMultiplier}</td>
                <td>${monsterData.skills[skills[5]] * skillMultiplier}</td>
            </tr>
        </table>`;

    return result;
}

function getCardClassName(monsterData) {
    return `card ${monsterData.rarity} ${monsterData.shiny ? 'shiny' : ''}`;
}
//#endregion View