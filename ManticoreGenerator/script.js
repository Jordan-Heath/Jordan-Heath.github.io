// Constants
//data
let heads = [];
let bodies = [];
let hinds = [];
let tails = [];
let wings = [];
//values
let SelectedHead = "";
let SelectedBody = "";
let SelectedHind = "";
let SelectedTail = "";
let SelectedWing = "";
//page elements
let generateButton = document.getElementById("generateButton");
let headElement = document.getElementById("head");
let bodyElement = document.getElementById("body");
let hindElement = document.getElementById("hind");
let tailElement = document.getElementById("tail");
let wingElement = document.getElementById("wings");
let headCheckboxElement = document.getElementById("headCheckbox");
let bodyCheckboxElement = document.getElementById("bodyCheckbox");
let hindCheckboxElement = document.getElementById("hindCheckbox");
let tailCheckboxElement = document.getElementById("tailCheckbox");
let wingCheckboxElement = document.getElementById("wingCheckbox");

function randomArrayValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function convertToBingImagesLink(animal, bodypart) {
    if (animal == "None") {
        return "None";
    }
    // I dont want to include the specific part of the body in the image search
    //return "<a href=\"https://www.bing.com/images/search?q=" + animal.replace(/\s/g, '+') + "+" + bodypart + "+animal\" target=\"_blank\">" + animal + "</a>";
    return "<a href=\"https://www.bing.com/images/search?q=" + animal.replace(/\s/g, '+') + "+animal\" target=\"_blank\">" + animal + "</a>";
}

async function LoadAsync() {
    try {
        const fetchUrls = [
            'https://jordan-heath.github.io/ManticoreGenerator/data/heads.txt',
            'https://jordan-heath.github.io/ManticoreGenerator/data/bodies.txt',
            'https://jordan-heath.github.io/ManticoreGenerator/data/hinds.txt',
            'https://jordan-heath.github.io/ManticoreGenerator/data/tails.txt',
            'https://jordan-heath.github.io/ManticoreGenerator/data/wings.txt'
        ];

        const fetchResponses = await Promise.all(fetchUrls.map(url => fetch(url)));
        const fetchTexts = await Promise.all(fetchResponses.map(response => response.text()));

        [
            heads,
            bodies,
            hinds,
            tails,
            wings
        ] = fetchTexts.map(text => text.split('\n'));

        UpdateResult();
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

function UpdateResult() {
    if (!headCheckboxElement.checked) {
        SelectedHead = randomArrayValue(heads);
    }
    if (!bodyCheckboxElement.checked) {
        SelectedBody = randomArrayValue(bodies);
    }
    if (!hindCheckboxElement.checked) {
        SelectedHind = randomArrayValue(hinds);
    }
    if (!tailCheckboxElement.checked) {
        if (getRandomNumber(0, 100) > 30) {
            SelectedTail = randomArrayValue(tails);
        }
        else {
            SelectedTail = "None";
        }
    }
    if (!wingCheckboxElement.checked) {
        if (getRandomNumber(0, 100) > 70) {
            SelectedWing = randomArrayValue(wings);
        }
        else {
            SelectedWing = "None";
        }
    }

    //"<a href=\"https://www.bing.com/images/search?q=" +  + "\" target=\"_blank\">" +  + "</a>";
    headElement.innerHTML = convertToBingImagesLink(SelectedHead, "Head");
    bodyElement.innerHTML = convertToBingImagesLink(SelectedBody, "Body");
    hindElement.innerHTML = convertToBingImagesLink(SelectedHind, "Hind");
    tailElement.innerHTML = convertToBingImagesLink(SelectedTail, "Tail");
    wingElement.innerHTML = convertToBingImagesLink(SelectedWing, "Wing");
}

document.addEventListener("DOMContentLoaded", () => {
    generateButton = document.getElementById("generateButton");
    headElement = document.getElementById("head");
    bodyElement = document.getElementById("body");
    hindElement = document.getElementById("hind");
    tailElement = document.getElementById("tail");
    wingElement = document.getElementById("wings");
    headCheckboxElement = document.getElementById("headCheckbox")
    bodyCheckboxElement = document.getElementById("bodyCheckbox")
    hindCheckboxElement = document.getElementById("hindCheckbox")
    tailCheckboxElement = document.getElementById("tailCheckbox")
    wingCheckboxElement = document.getElementById("wingCheckbox")

    LoadAsync();

    generateButton.addEventListener("click", () => {
        UpdateResult();
    });
});
