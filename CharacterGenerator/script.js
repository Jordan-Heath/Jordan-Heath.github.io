// Define arrays to store the loaded data
let races = [];
let classes = [];
let backgrounds = [];
let firstNames = [];
let lastNames = [];

// Function to load data from text documents
async function loadData() {
    try {
        const raceResponse = await fetch('races.txt');
        const classResponse = await fetch('classes.txt');
        const backgroundResponse = await fetch('backgrounds.txt');
        const firstNamesResponse = await fetch('firstnames.txt');
        const lastNamesResponse = await fetch('lastnames.txt');

        races = (await raceResponse.text()).split('\n');
        classes = (await classResponse.text()).split('\n');
        backgrounds = (await backgroundResponse.text()).split('\n');
        firstNames = (await firstNamesResponse.text()).split('\n');
        lastNames = (await lastNamesResponse.text()).split('\n');
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

// Function to initialize the character generator
async function initialize() {
    await loadData();
    generateCharacter(); // Generate character after loading data
}

// Function to generate a random character
function generateCharacter() {
    // Generate random indices
    const randomRaceIndex = Math.floor(Math.random() * races.length);
    const randomClassIndex = Math.floor(Math.random() * classes.length);
    const randomBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
    const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length);
    const randomLastNameIndex = Math.floor(Math.random() * lastNames.length);

    // Update character info
    const nameElement = document.getElementById("characterName");
    const raceElement = document.getElementById("characterRace");
    const classElement = document.getElementById("characterClass");
    const backgroundElement = document.getElementById("characterBackground");

    const fullName = `${firstNames[randomFirstNameIndex]} ${lastNames[randomLastNameIndex]}`;

    nameElement.textContent = fullName;
    raceElement.textContent = races[randomRaceIndex];
    classElement.textContent = classes[randomClassIndex];
    backgroundElement.textContent = backgrounds[randomBackgroundIndex];
}

// Initialize once when the page loads
initialize();
