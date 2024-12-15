const homeElement = document.getElementById('home');
const navButtonHome = document.getElementById('nav-button-home');

function openHome() {
    SAVE.openedPage = 'home';
    saveToLocalStorage();

    if (homeElement.style.display == 'none') {
        document.querySelectorAll('section').forEach(section => section.style.display = 'none');
        homeElement.style.display = 'block';
    }

    if (!navButtonHome.classList.contains('active')) {
        document.querySelectorAll('.nav-button').forEach(button => button.classList.remove('active'));
        navButtonHome.classList.add('active');
    }

    updateHomeTable();
}

function updateHomeTable() {
    const baseTamaCount = SAVE.acquiredTamas.length;
    const dlcTamaCount = SAVE.acquiredDLCTamas.length;
    const totalTamaCount = baseTamaCount + dlcTamaCount;

    document.getElementById('base-tama-count').textContent = baseTamaCount + ' / ' + TAMAS.length;
    document.getElementById('dlc-tama-count').textContent = dlcTamaCount + ' / ' + DLC_TAMAS.length;
    document.getElementById('total-tama-count').textContent = totalTamaCount + ' / ' + (TAMAS.length + DLC_TAMAS.length);

    const baseTamaPercent = (baseTamaCount / TAMAS.length) * 100;
    const dlcTamaPercent = (dlcTamaCount / DLC_TAMAS.length) * 100;
    const totalTamaPercent = (totalTamaCount / (TAMAS.length + DLC_TAMAS.length)) * 100;

    document.getElementById('base-tama-percent').textContent = `${baseTamaPercent.toFixed(2)}%`;
    document.getElementById('dlc-tama-percent').textContent = `${dlcTamaPercent.toFixed(2)}%`;
    document.getElementById('total-tama-percent').textContent = `${totalTamaPercent.toFixed(2)}%`;
}

function resetSave() {
    const savePrompt = document.createElement('div');
    savePrompt.className = 'reset-save-prompt';
    savePrompt.innerHTML = `
        Are you sure you want to reset the save?<br>
        <br>
        <button class="save-prompt-button" onclick="resetSaveConfirm()">Yes</button>
        <button class="save-prompt-button" onclick="dismissPopup()">No</button>
    `

    createPopup(savePrompt);
}

function resetSaveConfirm() {
    deleteFromLocalStorage();
    location.reload(true);
}