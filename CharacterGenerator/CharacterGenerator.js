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

// Array to hold the paths of your text files
const textFiles = ["data/races.txt", "data/classes.txt", "data/backgrounds.txt"];

// Function to load and display a random line from a random text file
async function loadRandomLine() {
    const randomFile = getRandomElement(textFiles);
    const lines = await readTextFile(randomFile);
    const randomLine = getRandomElement(lines);

    // Replace 'output' with the ID of the HTML element where you want to display the line
    const outputElement = document.getElementById('output');
    outputElement.textContent = randomLine;
}

// Attach the loadRandomLine function to a button click event or any other trigger
// For example, assuming you have a button with the ID 'generateButton':
// document.getElementById('generateButton').addEventListener('click', loadRandomLine);

// Call the function initially to display a random line when the page loads
loadRandomLine();
