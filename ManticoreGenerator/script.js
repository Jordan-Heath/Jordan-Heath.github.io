//Constants
let heads = [];
let torsos = [];
let hinds = [];
let tails = [];
let wings =[];
//mentalIllnesses = [];

let SelectedHead = "";
let SelectedBody = "";
let SelectedHind = "";
let SelectedTail = "";
let SelectedWing = "";
//let SelectedMentalIllness = "";

function randomArrayValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function LoadAsync() {
    try {
        const fetchUrls = [
            'https://jordan-heath.github.io/ManticoreGenerator/data/heads.txt',
            'https://jordan-heath.github.io/ManticoreGenerator/data/torsos.txt',
            'https://jordan-heath.github.io/ManticoreGenerator/data/hinds.txt',
            'https://jordan-heath.github.io/ManticoreGenerator/data/tails.txt',
            'https://jordan-heath.github.io/ManticoreGenerator/data/wings.txt'
        ];

        const fetchResponses = await Promise.all(fetchUrls.map(url => fetch(url)));
        const fetchTexts = await Promise.all(fetchResponses.map(response => response.text()));

        [
            heads,
            torsos,
            hinds,
            tails,
            wings
        ] = fetchTexts.map(text => text.split('\n'));
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

const generateButton = document.getElementById("generateButton");
const resultDisplay = document.getElementById("result");

document.addEventListener("DOMContentLoaded", () => {
    LoadAsync();

    generateButton.addEventListener("click", () => {
        SelectedHead = randomArrayValue(heads);
        SelectedBody = randomArrayValue(torsos);
        SelectedHind = randomArrayValue(hinds);
        SelectedTail = randomArrayValue(tails);
        SelectedWing = randomArrayValue(wings);
        //SelectedMentalIllness = randomArrayValue(mentalIllnesses);

        // Example result:
        let manticoreContent = "";
        manticoreContent += "<table>";
        manticoreContent += `<tr><th>Head</th><td>${SelectedHead}</td></tr>`
        manticoreContent += `<tr><th>Body</th><td>${SelectedBody}</td></tr>`
        manticoreContent += `<tr><th>Hind</th><td>${SelectedHind}</td></tr>`
        if (getRandomNumber(0, 10) > 3) {
            manticoreContent += `<tr><th>Tail</th><td>${SelectedTail}</td></tr>`
        }
        if (getRandomNumber(0, 10) > 7) {
            manticoreContent += `<tr><th>Wings</th><td>${SelectedWing}</td></tr>`
        }
        manticoreContent += "</table>";
        
        resultDisplay.innerHTML = manticoreContent;
    });
});
