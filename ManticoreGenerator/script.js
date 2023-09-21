function randomArrayValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
    let SelectedHead = "";
    let SelectedBody = "";
    let SelectedHind = "";
    let SelectedTail = "";
    let SelectedWing = "";
    //let SelectedMentalIllness = "";

    const generateButton = document.getElementById("generateButton");
    const resultDisplay = document.getElementById("result");

    const headResponse = loadTextFile('https://jordan-heath.github.io/ManticoreGenerator/data/heads.txt');
    const torsoResponse = loadTextFile('https://jordan-heath.github.io/ManticoreGenerator/data/torsos.txt');
    const hindResponse = loadTextFile('https://jordan-heath.github.io/ManticoreGenerator/data/hinds.txt');
    const tailResponse = loadTextFile('https://jordan-heath.github.io/ManticoreGenerator/data/tails.txt');
    const wingResponse = loadTextFile('https://jordan-heath.github.io/ManticoreGenerator/data/wings.txt');
    //const mentalIllnessResponse = loadTextFile('https://jordan-heath.github.io/ManticoreGenerator/data/mentalIllnesses.txt');

    heads = (headResponse.text()).split('\n');
    torsos = (torsoResponse.text()).split('\n');
    hinds = (hindResponse.text()).split('\n');
    tails = (tailResponse.text()).split('\n');
    wings = (wingResponse.text()).split('\n');
    //mentalIllnesses = (mentalIllnessResponse.text()).split('\n');

    generateButton.addEventListener("click", () => {
        SelectedHead = randomArrayValue(heads);
        SelectedBody = randomArrayValue(torso);
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
