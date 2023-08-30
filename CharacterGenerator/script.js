const firstNames = [
    "Aleron", 
    "Elysia", 
    "Grom", 
    "Lorelei", 
    "Finn"
];
const lastNames = [
    "Blackwood", 
    "Fireforge", 
    "Bloodfang", 
    "Moonshadow", 
    "Holloway"
];
const races = [
    "Human", 
    "Elf", 
    "Dwarf", 
    "Orc", 
    "Halfling"
];
const classes = [
    "Warrior", 
    "Mage", 
    "Rogue", 
    "Cleric", 
    "Ranger"
];
const backgrounds = [
    "Noble", 
    "Peasant", 
    "Outlaw", 
    "Scholar", 
    "Adventurer"
];

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function generateCharacter() {
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    const race = getRandomElement(races);
    const charClass = getRandomElement(classes);
    const background = getRandomElement(backgrounds);

    const characterInfo = `
<h2>${firstName} ${lastName}</h2>
<p><strong>Race:</strong> ${race}</p>
<p><strong>Class:</strong> ${charClass}</p>
<p><strong>Background:</strong> ${background}</p>
`;

    document.getElementById("characterInfo").innerHTML = characterInfo;
}

generateCharacter();