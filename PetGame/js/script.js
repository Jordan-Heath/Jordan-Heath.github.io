let pet = new Pet();
let currentView = 'defaultView';
let light = true;

function init() {
    // Display the default view
    openView('defaultView');
    // Initialize pet's initial stats and appearance
    
    startUpdateLoop();
    // Update the UI to reflect the initial pet state
}

//#region Update
function startUpdateLoop() {
    setInterval(update, UPDATE_FREQUENCY);
}

function update() {
    pet.update(UPDATE_FREQUENCY/1000);

    updateCharacterView();
    updateBackgroundView();
    updateStatsView();
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

    document.getElementById("hungryValue").textContent = pet.hungerPercentage();
    document.getElementById("happyValue").textContent = pet.happyPercentage();

    document.getElementById("trainingValue").textContent = pet.training;
    document.getElementById("ageValue").textContent = Math.round(pet.age);
    document.getElementById("weightValue").textContent = pet.weight;
    
    document.getElementById("moneyValue").textContent = pet.money;
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
//#endregion menues

//#region buttonFunctions
function feed(type) {
    if (!pet.isAvailable()) return;

    pet.state = 'eating';
    switch(type) {
        case('meal'):
            pet.addHunger(25);
            pet.weight += 0.1;
            pet.bowels += 10;
            break;
        case('snack'):
            pet.addHappy(12.5)
            pet.weight += 0.5;
            pet.bowels += 5;
            break;
    }

    setTimeout(() => {
        pet.state = 'default';
    }, EATING_LENGTH)
}

function train(action) {
    // Logic to train the pet based on the action (praise or punish)
    // Update pet's training level accordingly
}

function toilet() {
    if (!pet.isAvailable()) return;

    pet.state = 'toilet'

    setTimeout(() => {
        pet.bowels -= 100;
        happy();
    }, TOILET_LENGTH)
}

function sleep() {
    if (!pet.isAvailable() && pet.state !== 'sleep') return;

    light = !light;
    sleepElement.hidden = light;
    pet.state = light ? 'default' : 'sleep';
    updateBackgroundView();
    updateCharacterView();
}

function heal() {
    if (!pet.isAvailable()) return;

    pet.state = 'healing'

    setTimeout(() => {
        pet.health = 100;
        happy();
    }, HEALING_LENGTH)
}
//#endregion buttonFunctions

function happy() {
    pet.state = 'happy';
    pet.happy += 5;

    setTimeout(() => {
        pet.state = 'default';
    }, HAPPY_LENGTH);
}

// Event listener to initialize the interface when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);
