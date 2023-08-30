function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
    }
    const textData = await response.text();
    return textData.trim().split('\n');
}

async function generateCharacter() {
    try {
        const firstNameData = await fetchData('data/first-names.txt');
        const lastNameData = await fetchData('data/last-names.txt');
        const raceData = await fetchData('data/races.txt');
        const charClassData = await fetchData('data/classes.txt');
        const backgroundData = await fetchData('data/backgrounds.txt');

        const firstName = getRandomElement(firstNameData);
        const lastName = getRandomElement(lastNameData);
        const race = getRandomElement(raceData);
        const charClass = getRandomElement(charClassData);
        const background = getRandomElement(backgroundData);

        /*
        const characterInfo = `
        <h2>${firstName} ${lastName}</h2>
        <p><strong>Race:</strong> ${race}</p>
        <p><strong>Class:</strong> ${charClass}</p>
        <p><strong>Background:</strong> ${background}</p>
        `;
        document.getElementById("characterInfo").innerHTML = characterInfo;
        */

        document.getElementById("characterName").textContent = firstName + " " + lastName;
        document.getElementById("characterRace").textContent = race;
        document.getElementById("characterClass").textContent = charClass;
        document.getElementById("characterBackground").textContent = background;
    } catch (error) {
        console.error('Error:', error);
    }
}

generateCharacter();
