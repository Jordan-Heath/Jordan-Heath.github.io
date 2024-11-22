const save = {
    monsters: data.monsters,
    gatchas: data.gatchas,
    upgrades: data.upgrades,
    jobs: data.jobs,
    money: 0,
    revenue: 0,
    shinyChance: 0.001,
    repeatableUpgrades: {
        timesBoostedShinyChance: 0,
        passiveGatchaSpeed: 1
    },
    settings: {
        payFrequency: 1,
        cheatMode: false
    }
};

const globals = {
    selectedGatcha: 1,
    selectedJob: null,
    payInterval: null,
    saveInterval: null,
    keyPressEventListener: null,
    keyReleaseEventListener: null,
    gatchaSpinnerEventListener: null,
    resizeListener: null,
    gameInterval: null,
    activeKeys: []
};

document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();

    renderGatchas();
    renderCollection();
    renderUpgrades();
    renderJobs();
    renderSettings();

    updateHUD();

    //pay interval is set to save.settings.payFrequency
    globals.payInterval = setInterval(() => {
        save.money += save.revenue / 60 * save.settings.payFrequency;
        updateHUD();
        updateMonsterCollection();
    }, save.settings.payFrequency * 1000);

    //save interval every 10 sec
    globals.saveInterval = setInterval(() => {
        saveToLocalStorage();
        displayMessage('Saved');
    }, 10000);
});