const save = {
    monsters: data.monsters,
    cardPacks: data.cardPacks,
    upgrades: data.upgrades,
    jobs: data.jobs,
    money: 0,
    revenue: 0,
    shinyChance: 0.001,
    repeatableUpgrades: {
        timesBoostedShinyChance: 0,
        passiveCardPackSpeed: 1
    },
    settings: {
        payFrequency: 1,
        cheatMode: false,
        disableChallenges: false,
        notificationFrequency: 60,
        saveFrequency: 15
    }
};

const globals = {
    selectedCardPack: null,
    selectedJob: null,
    payInterval: null,
    saveInterval: null,
    collectionInterval: null,
    upgradesInterval: null,
    keyPressEventListener: null,
    keyReleaseEventListener: null,
    cardPackOpenerEventListener: null,
    resizeListener: null,
    gameInterval: null,
    activeKeys: [],
    gameBeaten: false
};

document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();

    renderCardPacks();
    renderCollection();
    renderUpgrades();
    renderJobs();
    renderSettings();

    updateHUD();

    // Check if user is on mobile device
    if ('ontouchstart' in document.documentElement
        && save.settings.disableChallenges === false
    ) {
        save.settings.disableChallenges = true;
        renderSettings();
        renderCardPacks();
        alert('CardPack challenges have been disabled due to lack of mobile support.');
    }

    //pay interval is set to save.settings.payFrequency
    globals.payInterval = setInterval(() => {
        save.money += save.revenue / 60 * save.settings.payFrequency;
        updateUpgrades();
        updateHUD();
    }, save.settings.payFrequency * 1000);

    //save interval every 10 sec
    globals.saveInterval = setInterval(() => {
        saveToLocalStorage();
        displayMessage('Saved');
    }, 15000); //save.settings.saveFrequency * 1000);

    //collection interval every 1 min
    globals.collectionInterval = setInterval(() => {
        //if the evolveCost or sacrificeCost do not equal 0, and the collection is not active, check if any monsters are available to evolve or sacrifice
        const collectionContainerElement = document.querySelector('.collection-container');
        if (collectionContainerElement.classList.contains('active')) return;

        const collectionNavTab = document.getElementById('collection-nav-tab');
        const evolveCost = getEvolveCost();
        const sacrificeCost = getSacrificeCost();
        if (evolveCost > 0
            && save.monsters.some((m) => m.count >= evolveCost && m.evolvesTo.length > 0)) {
            collectionNavTab.classList.add('notifying');
            displayMessage('Monsters are able to be evolved');
        }

        if (sacrificeCost > 0
            && save.monsters.some((m) => m.count >= sacrificeCost && m.evolvesTo.length === 0)) {
            collectionNavTab.classList.add('notifying');
            displayMessage('Monsters are able to be sacrificed');
        }
    }, 60000); //save.settings.notificationFrequency * 1000)

    globals.upgradesInterval = setInterval(() => {
        //if the user can afford an upgrade, show a message
        const upgradesNavTab = document.getElementById('upgrades-nav-tab');
        if (upgradesNavTab.classList.contains('active')) return;
        
        if (save.upgrades.some((u) => {
            if (u.owned) return false;
            if (u.cost > save.money) return false;
            if (u.unlockedBy !== null && save.upgrades.find((u2) => u2.ID === u.unlockedBy).owned) return false;
            return true;
        })) {
            upgradesNavTab.classList.add('notifying');
            displayMessage('Upgrades are available');
        }
    }, 60000); //save.settings.notificationFrequency * 1000);

    globals.jobsInterval = setInterval(() => {
        //if the user hasn't assigned a job
        const jobsNavTab = document.getElementById('jobs-nav-tab');
        if (jobsNavTab.classList.contains('active')) return;
        
        if (save.monsters.some((m) => m.owned && isNullOrUndefined(m.assignedJob)) 
            && save.jobs.some((j) => j.assignedMonster === null)) {
            jobsNavTab.classList.add('notifying');
            displayMessage('Jobs are available');
        }
    }, 60000); //save.settings.notificationFrequency * 1000);
});