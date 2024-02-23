let pet = new Pet();
let player = new Player();
let currentView = 'defaultView';
let light = true;
let numberOfPoos = 0;
let previousTime = Date.now();
let testingMode = true //checkTestingMode();

function init() {
    openView('defaultView');

    if (testingMode) {
        debugStats.style.display = 'block';
    }
    
    startUpdateLoop();
}

//#region Update
function startUpdateLoop() {
    setInterval(update, UPDATE_FREQUENCY);
}

function update() {
    const currentTime = Date.now(); // Get current time
    const millisecondsPassed = currentTime - previousTime; // Calculate milliseconds passed
    const secondsPassed = millisecondsPassed / 1000; // Convert milliseconds to seconds

    pet.update(secondsPassed); // Pass seconds to pet.update()

    updateCharacterView();
    updateBackgroundView();
    updateStatsView();

    previousTime = currentTime; // Update previous time for the next update
}

function updateCharacterView() {
    characterElement.style.backgroundImage = pet.image();
    characterElement.className = pet.state;
}

function updateBackgroundView() {
    defaultView.className = pet.state;
}

function updateStatsView() {
    document.getElementById("nameValue").textContent = pet.name;
    document.getElementById("speciesValue").textContent = pet.species;
    //hr
    document.getElementById('stateValue').textContent = pet.state;
    document.getElementById("hungryValue").textContent = pet.printHunger();
    document.getElementById("happyValue").textContent = pet.printHappy();
    document.getElementById("xpValue").textContent = pet.xp;
    //hr
    document.getElementById('evolutionValue').textContent = EVOLUTION_STATES[pet.evolution];
    document.getElementById("ageValue").textContent = Math.round(pet.age * 10)/10;
    document.getElementById("weightValue").textContent = Math.round(pet.weight * 10)/10;
    //hr
    document.getElementById("moneyValue").textContent = player.money;

    //debug
    if (testingMode) {
        document.getElementById('preciseHunger').textContent = pet.hungerPercentage();
        document.getElementById('preciseHappy').textContent = pet.happyPercentage();
        document.getElementById('preciseHealth').textContent = pet.healthPercentage();
        document.getElementById('bowelsValue').textContent = Math.round(pet.bowels);
        document.getElementById('maturityValue').textContent = Math.round(pet.maturity);
    }
}
//#endregion Update

//#region menues
function openMenu(menuid) {
    //input = statsMenuView, foodDropdownView, trainingDropdownView
    const submenu = document.getElementById(menuid);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

function openView(view) {
    //input = defaultView, gameView, journalView

    // Hide the current view
    document.getElementById(currentView).hidden = true;

    // Show the new view
    document.getElementById(view).hidden = false;
    currentView = view;
}

function toggleNewPetButton(hidden) {
    document.getElementById('newPetButton').hidden = hidden;
}
//#endregion menues

//#region Actions
function createPooElement() {
    const pooContainer = document.getElementById('pooContainer');
    let poo = document.createElement('img');
    poo.src = 'assets/effects/poo.gif';
    poo.alt = 'poo';
    pooContainer.appendChild(poo);
}
function flushPooElements() {
    document.getElementById('pooContainer').innerHTML = '';
}
function newPet() {
    toggleNewPetButton(true);
    pet = new Pet();
}
//#endregion Actions

//#region misc
function checkTestingMode() {
    const url = window.location.href;
    const testingMode = url.includes('file');

    testingMode ? console.log('Running in testing mode') : console.log('Not running in testing mode');

    return testingMode;
}
function randomArrayValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}
//#endregion misc

// Event listener to initialize the interface when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);
