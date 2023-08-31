// Define arrays to store the loaded data
let races = [];
let classes = [];
let backgrounds = [];

let namePrefixes = [];
let nameMiddles = [];
let nameSuffixes = [];

//let firstNames = [];
let lastNames = [];

// Function to load data from text documents
async function loadData() {
    try {
        const raceResponse = await fetch('https://grumpypurple.github.io/CharacterGenerator/data/races.txt');
        const classResponse = await fetch('https://grumpypurple.github.io/CharacterGenerator/data/classes.txt');
        const backgroundResponse = await fetch('https://grumpypurple.github.io/CharacterGenerator/data/backgrounds.txt');
        
        const namePrefixResponse = await loadTextFile('https://grumpypurple.github.io/CharacterGenerator/data/name-prefixes.txt');
        const nameMiddlesResponse = await loadTextFile('https://grumpypurple.github.io/CharacterGenerator/data/name-middles.txt');
        const nameSuffixResponse = await loadTextFile('https://grumpypurple.github.io/CharacterGenerator/data/name-suffixes.txt');

        //const firstNamesResponse = await fetch('https://grumpypurple.github.io/CharacterGenerator/data/first-names.txt');
        const lastNamesResponse = await fetch('https://grumpypurple.github.io/CharacterGenerator/data/last-names.txt');

        races = (await raceResponse.text()).split('\n');
        classes = (await classResponse.text()).split('\n');
        backgrounds = (await backgroundResponse.text()).split('\n');

        namePrefixes = (await namePrefixResponse.text()).split('\n');
        nameMiddles = (await nameMiddlesResponse.text()).split('\n');
        nameSuffixes = (await nameSuffixResponse.text()).split('\n');

        //firstNames = (await firstNamesResponse.text()).split('\n');
        lastNames = (await lastNamesResponse.text()).split('\n');
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

function GenerateName() {
    const randomPrefix = namePrefixes[Math.floor(Math.random() * namePrefixes.length)];
    const randomMiddle = nameMiddles[Math.floor(Math.random() * nameMiddles.length)];
    const randomSuffix = nameSuffixes[Math.floor(Math.random() * nameSuffixes.length)];

    const generatedName = randomPrefix + randomMiddle + randomSuffix;

    return generatedName;
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
    
    const randomFirstNameIndex = GenerateName();
    //const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length);
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
    animateRandomise();
}

function animateRandomise() {
    // Add animation class to heading
    const heading = document.getElementById('characterName');
    heading.classList.add('animate');

    // Add animation class to characterInfo (table)
    const characterInfo = document.getElementById('characterInfo');
    characterInfo.classList.add('animate');

    // Remove animation class after animation completes
    setTimeout(() => {
        heading.classList.remove('animate');
        characterInfo.classList.remove('animate');
    }, 500); // Match animation duration
}


// Initialize once when the page loads
initialize();
