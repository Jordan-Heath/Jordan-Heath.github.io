//#region CardPacks
function renderCardPacks() {
    const CardPacksElement = document.querySelector('.cardpacks');
    CardPacksElement.innerHTML = '';
    let selectedCardPackElement = null;

    if (globals.selectedCardPack === null) {
        //set it to the highest CardPack unlocked
        save.cardPacks.forEach(cardPack => {
            if (cardPack.unlockedBy !== null && !save.upgrades.find((u) => u.ID === cardPack.unlockedBy).owned) return;
            else globals.selectedCardPack = globals.selectedCardPack > cardPack.ID ? globals.selectedCardPack : cardPack.ID;
        });
    }

    save.cardPacks.forEach((cardPackData) => {
        if (cardPackData.unlockedBy !== null && !save.upgrades.find((u) => u.ID === cardPackData.unlockedBy).owned) {
            return;
        }

        let cardPackChallengeHTML = !save.settings.disableChallenges ? 
            `<p><strong>${cardPackData.challenge}</strong>: ${challengeDescriptions[cardPackData.challenge]}</p>` : '';

        const cardPackElement = document.createElement('div');
        cardPackElement.className = 'cardpack card';
        cardPackElement.onclick = () => selectCardPack(cardPackData.ID, cardPackElement);
        cardPackElement.innerHTML = `
            <img 
                class="card-image" 
                src="images/cardpacks/${cardPackData.image}" 
                alt="${cardPackData.name}">
            <div class="card-details">
                <p class="card-name">${cardPackData.name}</p>
                <p>${cardPackData.description}</p> 
                ${cardPackChallengeHTML}
            </div>
        `;

        if (cardPackData.ID === globals.selectedCardPack) {
            selectedCardPackElement = cardPackElement;
        }

        CardPacksElement.appendChild(cardPackElement);
    });

    selectCardPack(globals.selectedCardPack, selectedCardPackElement);
}

function renderChallenges() {
    const cardPackOpenerElement = document.querySelector('.cardpack-opener');

    let activeChallenge = save.cardPacks.find((g) => g.ID === globals.selectedCardPack).challenge;
    if (save.settings.disableChallenges
        && activeChallenge !== 'Passive') 
            activeChallenge = 'None'

    clearChallenges();

    // Start challenge
    switch (activeChallenge) {
        case 'Moving Button':
            startMovingButtonChallenge();
            break;
        case 'Collector':
            startCollectorChallenge();
            break;
        case 'Number Popup':
            startKeyPressChallenge(numbers);
            break;
        case 'Typing Challenge':
            startTypingChallenge();
            break;
        case 'Passive':
            startPassiveChallenge();
            break;
        default:
            cardPackOpenerElement.disabled = false;
            cardPackOpenerElement.innerHTML = 'Click to Open!';
            cardPackOpenerElement.onclick = openCardPack;
    }
}

function renderMoneyReward(value) {
    const rewardContainer = document.querySelector('.reward');
    const rewardElement = document.createElement('div');

    rewardElement.classList.add('popup');
    rewardElement.textContent = `$${value.toFixed(2)}`;
    rewardContainer.appendChild(rewardElement);

    rewardElement.style.top = `${Math.random() * 10}%`;
    rewardElement.style.left = `${Math.random() * (rewardContainer.offsetWidth - rewardElement.offsetWidth)}px`;
    
    setTimeout(() => {
        rewardContainer.removeChild(rewardElement);
    }, 2700);
}

function renderMonsterReward(monsterData, isShiny = false) {
    const rewardContainer = document.querySelector('.reward');
    const rewardElement = document.createElement('div');

    rewardElement.className = `popup ${isShiny ? 'shiny' : ''}`;

    if (monsterData.rewardElement === null
        || monsterData.rewardElement === undefined
    ) {
        monsterData.rewardElement = document.createElement('div');
        monsterData.rewardElement.className = getCardClassName(monsterData);
        monsterData.rewardElement.innerHTML = `
            ${getCardHeaderHTML(monsterData)}
            <div class="card-details">
                <p class="card-name">${monsterData.name}</p>
                ${getCardSkillTableHTML(monsterData, isShiny)}
            </div>
        `;
    }
    
    monsterData.rewardElement.classList.toggle('shiny', isShiny);
    
    //duplicate the reward element
    rewardElement.appendChild(monsterData.rewardElement.cloneNode(true));
    
    rewardContainer.appendChild(rewardElement);

    rewardElement.style.bottom = `${Math.random() * 10}%`;
    rewardElement.style.left = `${Math.random() * (rewardContainer.offsetWidth - rewardElement.offsetWidth)}px`;
    
    setTimeout(() => {
        rewardContainer.removeChild(rewardElement);
    }, 2700);
}
//#endregion CardPacks

//#region HUD
function updateHUD() {
    const elements = {
        money: document.querySelector('#money'),
        revenue: document.querySelector('#revenue'),
        collectionNumber: document.querySelector('#collection-number'),
        shinyChance: document.querySelector('#shiny-chance')
    };

    const ownedMonster = save.monsters.filter((m) => m.owned === true).length

    elements.money.textContent = save.money.toFixed(2);
    elements.revenue.textContent = save.revenue.toFixed(2);
    elements.collectionNumber.textContent = `${ownedMonster}/${save.monsters.length} (${(ownedMonster * 100 / save.monsters.length).toFixed(0)}%)`;
    elements.shinyChance.textContent = (save.shinyChance * 100).toFixed(1);
}

function displayMessage(messageText, duration = 3000) {
    const messageContainer = document.querySelector('.messageContainer');
    const messageElement = document.createElement('p');
    messageElement.classList.add('message');
    messageElement.textContent = messageText;
    messageContainer.appendChild(messageElement);

    messageElement.style.opacity = '1';

    setTimeout(() => {
        messageElement.style.opacity = '0';
    }, duration);

    setTimeout(() => {
        messageElement.remove();
    }, duration + 1000);
}
//#endregion HUD

//#region Collection
function renderCollection() {
    const collectionContainer = document.querySelector('.collection');
    collectionContainer.innerHTML = ''; // clear the container

    const evolveCost = getEvolveCost();
    const sacrificeCost = getSacrificeCost();

    let aMonsterCanEvolve = false;
    let aMonsterCanBeSacrificed = false;

    save.monsters.forEach((monsterData) => {
        const cardElement = renderMonsterCard(monsterData);
        collectionContainer.appendChild(cardElement);

        if (canMonsterEvolve(monsterData, evolveCost)) aMonsterCanEvolve = true;
        if (canMonsterBeSacrificed(monsterData, sacrificeCost)) aMonsterCanBeSacrificed = true;
    });

    document.getElementById('evolve-all-button').disabled = !aMonsterCanEvolve;
    document.getElementById('sacrifice-all-button').disabled = !aMonsterCanBeSacrificed;
    const collectionNavTab = document.getElementById('collection-nav-tab');
    if (collectionNavTab.classList.contains('active')) collectionNavTab.classList.remove('notifying');
    else collectionNavTab.classList.toggle('notifying', aMonsterCanEvolve || aMonsterCanBeSacrificed);
}

function renderMonsterCard(monsterData) {
    const cardElement = document.createElement('div');

    if (monsterData.cardElement !== null 
        && monsterData.cardElement !== undefined
        && monsterData.cardElement.dataset.count === String(monsterData.count)
        && monsterData.cardElement.dataset.shiny === String(monsterData.shiny)
        && monsterData.cardElement.dataset.statsVisible === String(true)
        && monsterData.cardElement.dataset.evolvingCost === String(getEvolveCost())
        && monsterData.cardElement.dataset.isSacrificable === String(true)) {
        return monsterData.cardElement;
    }

    if (monsterData.owned) {
        const isEvolvable = monsterData.evolvesTo.length > 0 && getEvolveCost() > 0;
        const statsVisible = true; //save.upgrades.find((u) => u.ID === 4.1).owned;
        const isSacrificable = monsterData.evolvesTo.length === 0 && save.upgrades.find((u) => u.ID === 3.4).owned; //
        
        const evolveCost = getEvolveCost();
        const sacrificeCost = getSacrificeCost();

        cardElement.dataset.ID = monsterData.ID;
        cardElement.dataset.count = monsterData.count;
        cardElement.dataset.shiny = monsterData.shiny;
        cardElement.dataset.statsVisible = statsVisible;
        cardElement.dataset.evolvingCost = getEvolveCost();
        cardElement.dataset.isSacrificable = isSacrificable;

        cardElement.className = getCardClassName(monsterData);
        cardElement.innerHTML = `
        ${getCardHeaderHTML(monsterData)}
        <div class="card-details">
            <p class="card-name">${monsterData.name}</p>
            ${statsVisible ? getCardSkillTableHTML(monsterData) : ''}
            ${isEvolvable ? `
                <button 
                    class="evolve-button"
                    ${monsterData.count < evolveCost ? 'disabled' : ''}
                    onclick="evolveMonster(${monsterData.ID})">
                        Evolve (${monsterData.count}/${evolveCost})
                </button>` : ''}
            ${isSacrificable ? `
                <button
                    class="sacrifice-button"
                    ${monsterData.count < sacrificeCost ? 'disabled' : ''}
                    onclick="sacrificeMonster(${monsterData.ID})">
                        Sacrifice (${monsterData.count}/${sacrificeCost})
                </button>` : ''}
        </div>
        `;

    } else {
        cardElement.dataset.ID = monsterData.ID;
        cardElement.className = 'card placeholder';
        cardElement.innerHTML = `
        <div class="card-ID">${monsterData.ID}</div>
        <img 
            class="card-image" 
            src="images/monsters/unknown-pokemon.png" 
            alt="Unknown Monster">
        <div class="card-details"></div>
        `;
    }

    monsterData.cardElement = cardElement;
    return cardElement;
}

function updateMonsterCollection(monsterData = null) {
    const evolveCost = getEvolveCost();
    const sacrificeCost = getSacrificeCost();
    const canSacrifice = sacrificeCost > 0;

    let aMonsterCanEvolve = false;
    let aMonsterCanBeSacrificed = false;

    function updateMonsterCard(monsterData, cardElement) {
        if (canMonsterEvolve(monsterData, evolveCost)) aMonsterCanEvolve = true;
        if (canMonsterBeSacrificed(monsterData, sacrificeCost)) aMonsterCanBeSacrificed = true;

        if (cardElement.dataset.count !== String(monsterData.count) ||
            cardElement.dataset.shiny !== String(monsterData.shiny) ||
            cardElement.dataset.evolvingCost !== String(evolveCost) ||
            cardElement.dataset.isSacrificable !== String(canSacrifice)) {
    
            const updatedCardElement = renderMonsterCard(monsterData);
        
            cardElement.dataset.count = updatedCardElement.dataset.count;
            cardElement.dataset.shiny = updatedCardElement.dataset.shiny;
            cardElement.dataset.evolvingCost = updatedCardElement.dataset.evolvingCost;
            cardElement.dataset.isSacrificable = updatedCardElement.dataset.isSacrificable;
    
            cardElement.className = updatedCardElement.className;
            cardElement.innerHTML = updatedCardElement.innerHTML;
        }
    }

    if (monsterData !== null) {
        //once needs update
        const cardElement = document.querySelector(`[data--i-d="${monsterData.ID}"]`);
        updateMonsterCard(monsterData, cardElement);

        if (aMonsterCanEvolve) document.getElementById('evolve-all-button').disabled = false;
        if (aMonsterCanBeSacrificed) document.getElementById('sacrifice-all-button').disabled = false;
        if (aMonsterCanEvolve || aMonsterCanBeSacrificed) document.getElementById('collection-nav-tab').classList.add('notifying');

    } else if (document.querySelector('.collection-container').classList.contains('active')) {
        //all needs update
        save.monsters.forEach(monsterData => {
            const cardElement = document.querySelector(`[data--i-d="${monsterData.ID}"]`);
            updateMonsterCard(monsterData, cardElement);
        });

        document.getElementById('evolve-all-button').disabled = !aMonsterCanEvolve;
        document.getElementById('sacrifice-all-button').disabled = !aMonsterCanBeSacrificed;

        const collectionNavTab = document.getElementById('collection-nav-tab');
        if (collectionNavTab.classList.contains('active')) collectionNavTab.classList.remove('notifying');
        else collectionNavTab.classList.toggle('notifying', aMonsterCanEvolve || aMonsterCanBeSacrificed);
    }
}
//#endregion Collection

//#region Upgrades

function renderUpgrades() {
    const upgradesContainer = document.querySelector('.upgrades');
    const ownedUpgradesContainer = document.querySelector('.owned-upgrades');
    upgradesContainer.innerHTML = '';

    save.upgrades.forEach((upgradeData) => {
        const upgradeElement = renderUpgradeCard(upgradeData);

        if (upgradeData.owned) {
            ownedUpgradesContainer.appendChild(upgradeElement);
        } else {
            upgradesContainer.appendChild(upgradeElement);
        }
    });
}

function renderUpgradeCard(upgradeData) {
    const element = document.createElement('div');

    const isOwned = upgradeData.owned;
    const isUnaffordable = upgradeData.cost > save.money || isOwned;
    const isUnavailable = upgradeData.unlockedBy !== null && !save.upgrades.find((u) => u.ID === upgradeData.unlockedBy).owned;

    element.dataset.ID = upgradeData.ID;
    element.dataset.owned = isOwned;
    element.dataset.unaffordable = isUnaffordable;
    element.dataset.unavailable = isUnavailable;

    element.className = `upgrade card ${upgradeData.rarity} ${isUnavailable ? 'unavailable' : ''}`;
    element.innerHTML = `
        <img 
            class="card-image" 
            src="images/upgrades/${upgradeData.image}" 
            alt="${upgradeData.name}" 
            onerror="this.src='images/upgrades/placeholder.png';">
        <div class="card-details">
            <p class="card-name">${upgradeData.name}</p>
            <p style="font-style: italic; text-align: justify;">${upgradeData.description}</p>
            <button ${isUnaffordable && !isUnavailable ? 'disabled' : ''} 
                onclick="purchaseUpgrade(${upgradeData.ID})">
                    ${isOwned ? 'Already Owned' : `Purchase ($${upgradeData.cost})`}
            </button>
        </div>
    `;

    return element;
}

function updateUpgrades() {
    const upgradeContainer = document.querySelector('.upgrade-container');
    if (!upgradeContainer.classList.contains('active')) return;

    document.querySelectorAll('.upgrade').forEach((upgradeElement) => {
        const upgradeData = save.upgrades.find((u) => u.ID === parseFloat(upgradeElement.dataset.ID));

        const isOwned = upgradeData.owned;
        const isUnaffordable = upgradeData.cost > save.money || isOwned;
        const isUnavailable = upgradeData.unlockedBy !== null && !save.upgrades.find((u) => u.ID === upgradeData.unlockedBy).owned;


        const needsUpdate = upgradeElement.dataset.owned !== String(isOwned)
            || upgradeElement.dataset.unaffordable !== String(isUnaffordable)
            || upgradeElement.dataset.unavailable !== String(isUnavailable);
        
        if (needsUpdate) {
            const updatedUpgradeElement = renderUpgradeCard(upgradeData, isOwned, isUnavailable);
        
            if (upgradeElement.dataset.owned !== String(isOwned)) {
                upgradeElement.remove();
                const ownedUpgradesContainer = document.querySelector('.owned-upgrades')
                const ownedUpgradeElements = Array.from(document.querySelectorAll('.owned-upgrades .upgrade'));

                const procedingUpgrade = ownedUpgradeElements.find((ue) => ue.dataset.ID > updatedUpgradeElement.dataset.ID)
                if (procedingUpgrade !== undefined) {
                    ownedUpgradesContainer.insertBefore(updatedUpgradeElement, procedingUpgrade);
                } else {
                    ownedUpgradesContainer.appendChild(updatedUpgradeElement);
                }

            } else {
                upgradeElement.dataset.owned = updatedUpgradeElement.dataset.owned;
                upgradeElement.dataset.unaffordable = updatedUpgradeElement.dataset.unaffordable;
                upgradeElement.dataset.unavailable = updatedUpgradeElement.dataset.unavailable;

                upgradeElement.className = updatedUpgradeElement.className;
                upgradeElement.innerHTML = updatedUpgradeElement.innerHTML;
            }
        };
    });
}
//#endregion Upgrades

//#region Jobs
function renderJobs() {
    const jobsContainer = document.querySelector('.jobs');
    jobsContainer.innerHTML = '';

    save.jobs.forEach((job) => {
        const jobCard = renderJob(job);
        jobsContainer.appendChild(jobCard);
    });
}

function renderJob(jobData) {
    const assignedMonsterData = jobData.assignedMonster;

    const assignedMonsterName = assignedMonsterData ? assignedMonsterData.name : 'Vacant';
    const aptitudeScore = assignedMonsterData ? calculateAptitudeScore(assignedMonsterData, jobData.skill) : 0;
    const aptitudeRarity = assignedMonsterData ? aptitudes[aptitudeScore] : '';
    const aptitude = assignedMonsterData ? aptitudes[aptitudeScore] : 'Vacant';

    const jobElement = document.createElement('div');
    jobElement.onclick = () => selectJob(jobData, jobElement);
    jobElement.className = `job card ${jobData.ID === globals.selectedJob ? 'selected' : ''} ${aptitudeRarity}`;
    jobElement.dataset.ID = jobData.ID;
    jobElement.dataset.monsterID = jobData.assignedMonster?.ID;

    if (jobData.assignedMonster === null) {
        jobElement.innerHTML = `
            <img
                class="card-image"
                src="images/jobs/placeholder.png"
                alt="${jobData.name}">
            <div class="card-details">
                <p class="card-name">${jobData.name}</p>
            </div>
        `;
        return jobElement;
    } else {
        jobElement.innerHTML = `
            <img
                class="card-image"
                src="images/monsters/${assignedMonsterData?.shiny ? 'shiny/' : ''}${assignedMonsterData?.image}"
                alt="${jobData.name}">
            <div class="card-details">
                <p class="card-name">${jobData.name} (${jobData.skill})</p>
                <p>Assigned: ${assignedMonsterName}</p>
                <p>Aptitude: ${aptitude}</p>
            </div>
        `;
    }

    return jobElement;
}

function updateJobs() {
    // only update if jobs-container is active
    if (!document.querySelector('.jobs-container').classList.contains('active')) {
        return;
    }

    // render the selected job & monster assigner
    updateSelectedJob();
    updateMonsterAssigner();

    document.querySelectorAll('.job').forEach((jobElement) => {
        //check if the data matches the job element
        const jobData = save.jobs.find((j) => j.ID === parseInt(jobElement.dataset.ID));

        const needsUpdate = jobElement.dataset.monsterID !== String(jobData.assignedMonster?.ID);

        //if job data doesn't match job element, update it
        if (needsUpdate) {
            const newJobElement = renderJob(jobData);
            jobElement.dataset.monsterID = newJobElement.dataset.monsterID;

            jobElement.className = newJobElement.className;
            jobElement.innerHTML = newJobElement.innerHTML;
        }
    });
}

function updateSelectedJob() {
    const jobViewer = document.querySelector('.job-viewer');
    jobViewer.innerHTML = '';

    if (globals.selectedJob === null) {
        jobViewer.innerHTML = `<div class="job-details"><p>Select a job to view details</p></div>`;
        return;
    }

    // get the job data
    const selectedJobData = save.jobs.find((j) => j.ID === globals.selectedJob);

    // selected monster
    let assignedMonsterPerformanceDetailsHTML = '';
    if (selectedJobData?.assignedMonster !== null) {
        // get the monster data
        const assignedMonsterData = selectedJobData.assignedMonster;

        // get the skill of the selected job
        const assignedMonsterReleventSkill = assignedMonsterData.skills[selectedJobData.skill];
        const aptitudeScore = assignedMonsterData ? calculateAptitudeScore(assignedMonsterData, selectedJobData.skill) : 0;
        const assignedMonsterReleventAptitude = aptitudes[aptitudeScore];
        const assignedMonsterRevenuePerMinute = selectedJobData.revenuePerSkill * assignedMonsterReleventSkill * getRevenueBonus() * (assignedMonsterData.shiny ? shinySkillMultiplier : 1);

        assignedMonsterPerformanceDetailsHTML = `
        <div class="performance-details">
            <img 
                class="card-image"
                src="images/monsters/${assignedMonsterData.shiny ? 'shiny/' : ''}${assignedMonsterData.image}"
                alt="${assignedMonsterData.name}">
            <div>
                <p>Work currently being performed by <strong>${assignedMonsterData.name}</strong>. They are doing a <strong>${assignedMonsterReleventAptitude}</strong> job</p>
                <p>Revenue per minute: ${assignedMonsterRevenuePerMinute.toFixed(2)}</p>
            </div>
        </div>
        `;
    }

    jobViewer.innerHTML = `
    <div class="job-details">
        <h2>${selectedJobData.name}</h2>
        <p>This job requires <strong>${selectedJobData.skill}</strong>. <i>${selectedJobData.description}</i></p>
        ${assignedMonsterPerformanceDetailsHTML}
    </div>
    `;
}

function updateMonsterAssigner() {
    const monsterAssigner = document.querySelector('.monster-assigner');
    monsterAssigner.innerHTML = '';

    if (globals.selectedJob === null) {
        return;
    }

    const selectedJobData = save.jobs.find((j) => j.ID === globals.selectedJob);

    const availableMonsters = save.monsters.filter((m) => m.owned);

    //sort based on their capability at the selected job's skill
    availableMonsters.sort((a, b) => {
        return (b.skills[selectedJobData.skill] * (b.shiny ? shinySkillMultiplier : 1)) - (a.skills[selectedJobData.skill] * (a.shiny ? shinySkillMultiplier : 1));
    });

    //render all owned monsters
    availableMonsters.forEach((monsterData) => {
        const monstersJob = monsterData.assignedJob;
        const isMonsterAssigned = monsterData.assignedJob !== null && monsterData.assignedJob !== undefined;
        const isMonsterAssignedToSelectedJob = isMonsterAssigned && monstersJob.ID === selectedJobData.ID;

        if (monsterData.monsterAssignerElement !== null
            && monsterData.monsterAssignerElement !== undefined
            && monsterData.monsterAssignerElement.dataset.shiny === String(monsterData.shiny)
            && monsterData.monsterAssignerElement.dataset.isMonsterAssigned === String(isMonsterAssigned)
            && monsterData.monsterAssignerElement.dataset.isMonsterAssignedToSelectedJob === String(isMonsterAssignedToSelectedJob)
        ) {
            monsterAssigner.appendChild(monsterData.monsterAssignerElement);
            return;
        }

        //build element
        const monsterElement = document.createElement('div');

        monsterElement.className = `monster card ${monsterData.ID === selectedJobData.assignedMonster?.ID ? 'selected' : ''} ${monsterData.rarity} ${monsterData.shiny ? 'shiny' : ''}`;
        monsterElement.dataset.ID = monsterData.ID;
        monsterElement.dataset.shiny = String(monsterData.shiny);
        monsterElement.dataset.isMonsterAssigned = String(isMonsterAssigned);
        monsterElement.dataset.isMonsterAssignedToSelectedJob = String(isMonsterAssignedToSelectedJob);

        monsterElement.innerHTML = `
        ${getCardHeaderHTML(monsterData)}
        <div class="card-details">
            <p class="card-name">${monsterData.name}</p>
            ${getCardSkillTableHTML(monsterData)}
            <button ${isMonsterAssignedToSelectedJob ? 'disabled' : ''}>
                ${isMonsterAssigned ? 
                    isMonsterAssignedToSelectedJob ? 
                        'Assigned' : 
                        'Reassign' : 
                    'Assign'}
            </button>
        </div>
        `;

        //attach the event listener to the button
        const assignButton = monsterElement.querySelector('button');
        assignButton.addEventListener('click', () => {
            // assign the monster to the selected job
            assignJob(save.jobs.find((j) => j.ID === globals.selectedJob), monsterData);
        });

        monsterData.monsterAssignerElement = monsterElement;
        monsterAssigner.appendChild(monsterElement);
    });
}
//#endregion Jobs

//#region Settings
function renderSettings() {
    // set the pay frequency
    document.querySelector('#pay-frequency').value = save.settings.payFrequency;
    document.getElementById('pay-frequency-value').textContent = `every ${save.settings.payFrequency} seconds (${(1/save.settings.payFrequency).toFixed(2)}/sec)`;

    // set the cheat mode
    document.getElementById('cheat-mode').checked = save.settings.cheatMode;
    document.getElementById('cheat-mode-value').textContent = save.settings.cheatMode ? 'Enabled' : 'Disabled';

    // set the mobile friendly
    document.getElementById('disable-challenges').checked = save.settings.disableChallenges;
    document.getElementById('disable-challenges-value').textContent = save.settings.disableChallenges ? 'Enabled' : 'Disabled';
}
//#endregion Settings