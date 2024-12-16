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
    // Tamas
    // base
    const baseTamaCount = SAVE.acquiredTamas.length;
    const baseTamaPercent = (baseTamaCount / TAMAS.length) * 100;
    document.getElementById('base-tama-count').textContent = baseTamaCount + ' / ' + TAMAS.length;
    document.getElementById('base-tama-percent').textContent = `${baseTamaPercent.toFixed(2)}%`;

    // dlc
    const dlcTamaCount = SAVE.acquiredDLCTamas.length;
    const dlcTamaPercent = (dlcTamaCount / DLC_TAMAS.length) * 100;
    document.getElementById('dlc-tama-count').textContent = dlcTamaCount + ' / ' + DLC_TAMAS.length;
    document.getElementById('dlc-tama-percent').textContent = `${dlcTamaPercent.toFixed(2)}%`;

    // total
    const totalTamaCount = baseTamaCount + dlcTamaCount;
    const totalTamaPercent = (totalTamaCount / (TAMAS.length + DLC_TAMAS.length)) * 100;
    document.getElementById('total-tama-count').textContent = totalTamaCount + ' / ' + (TAMAS.length + DLC_TAMAS.length);
    document.getElementById('total-tama-percent').textContent = `${totalTamaPercent.toFixed(2)}%`;
    

    // Pets
    // base
    const basePets = PETS.filter(pet => pet.dlc == '');
    const basePetCount = SAVE.acquiredPets.filter(petName => basePets.find(pet => pet.name == petName)).length;
    const basePetPercent = (basePetCount / basePets.length) * 100;
    document.getElementById('base-pet-count').textContent = basePetCount + ' / ' + basePets.length;
    document.getElementById('base-pet-percent').textContent = `${basePetPercent.toFixed(2)}%`;

    // dlc
    const dlcPets = PETS.filter(pet => pet.dlc != '');
    const dlcPetCount = SAVE.acquiredPets.filter(petName => dlcPets.find(pet => pet.name == petName)).length;
    const dlcPetPercent = (dlcPetCount / dlcPets.length) * 100;
    document.getElementById('dlc-pet-count').textContent = dlcPetCount + ' / ' + dlcPets.length;
    document.getElementById('dlc-pet-percent').textContent = `${dlcPetPercent.toFixed(2)}%`;

    // total
    const totalPetCount = SAVE.acquiredPets.length;
    const totalPetPercent = (totalPetCount / PETS.length) * 100;
    document.getElementById('total-pet-count').textContent = totalPetCount + ' / ' + PETS.length;
    document.getElementById('total-pet-percent').textContent = `${totalPetPercent.toFixed(2)}%`;
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