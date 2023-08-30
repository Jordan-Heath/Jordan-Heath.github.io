// Variables for storing randomly chosen character details
let chosenRace = "";
let chosenClass = "";
let chosenBackground = "";

// Constants for storing data read from files
const races = readTextFile("data/races.txt");
const classes = readTextFile("data/classes.txt");
const backgrounds = readTextFile("data/backgrounds.txt");

// Function to read a text file and return its content as an array of lines
async function readTextFile(file) {
    const response = await fetch(file);
    const text = await response.text();
    return text.split('\n').filter(line => line.trim() !== '');
}

// Function to select a random element from an array
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Function to load and display a random character details
function generateRandomCharacter() {
    chosenRace = getRandomElement(races);
    chosenClass = getRandomElement(classes);
    chosenBackground = getRandomElement(backgrounds);

    updateCharacterDetails();
}

// Function to update the character details on the HTML page
function updateCharacterDetails() {
    document.getElementById('race').textContent = chosenRace;
    document.getElementById('class').textContent = chosenClass;
    document.getElementById('background').textContent = chosenBackground;
}

// Attach the generateRandomCharacter function to the button click event
document.getElementById('generateButton').addEventListener('click', generateRandomCharacter);

// Call the function initially to display a random character when the page loads
generateRandomCharacter();
