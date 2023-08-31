// Function to return a random value from the array it is passed
function randomArrayValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function for weighted random selection
function weightedRandom(values, weights) {
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    const randomValue = Math.random() * totalWeight;

    let cumulativeWeight = 0;
    for (let i = 0; i < values.length; i++) {
        cumulativeWeight += weights[i];
        if (randomValue <= cumulativeWeight) {
            return values[i];
        }
    }
}

////////////////////////////////////////////////////////

// Model.js
class CharacterModel {
    constructor() {
        this.races = [];
        this.classes = [];
        this.backgrounds = [];
        this.namePrefixes = [];
        this.nameMiddles = [];
        this.nameSuffixes = [];
        this.lastNames = [];

        this.selectedRace = "";
        this.selectedClass = "";
        this.selectedBackground = "";
        this.selectedFirstName = "";
        this.selectedLastName = "";

        this.abilityScores = {
            Strength: 5,
            Dexterity: 5,
            Constitution: 5,
            Intelligence: 5,
            Wisdom: 5,
            Charisma: 5
        };
    }

    // Function to load data from text documents
    async loadData() {
        try {
            const fetchUrls = [
                'https://grumpypurple.github.io/CharacterGenerator/data/name-prefixes.txt',
                'https://grumpypurple.github.io/CharacterGenerator/data/name-middles.txt',
                'https://grumpypurple.github.io/CharacterGenerator/data/name-suffixes.txt',
                'https://grumpypurple.github.io/CharacterGenerator/data/last-names.txt',
                'https://grumpypurple.github.io/CharacterGenerator/data/races.txt',
                'https://grumpypurple.github.io/CharacterGenerator/data/classes.txt',
                'https://grumpypurple.github.io/CharacterGenerator/data/backgrounds.txt'
            ];

            const fetchResponses = await Promise.all(fetchUrls.map(url => fetch(url)));
            const fetchTexts = await Promise.all(fetchResponses.map(response => response.text()));

            [
                this.namePrefixes,
                this.nameMiddles,
                this.nameSuffixes,
                this.lastNames,
                this.races,
                this.classes,
                this.backgrounds
            ] = fetchTexts.map(text => text.split('\n'));
        } catch (error) {
            console.error("Error loading data:", error);
        }
    }

    // Function to generate a random character
    generateCharacter() {
        this.selectedFirstName = this.generateName();
        this.selectedLastName = randomArrayValue(this.lastNames);
        this.selectedRace = randomArrayValue(this.races);
        this.selectedClass = randomArrayValue(this.classes);
        this.selectedBackground = randomArrayValue(this.backgrounds);
    }

    // Function to generate random ability scores
    generateAbilityScores() {
        //reset values
        let abilityScores = {
            Strength: 5,
            Dexterity: 5,
            Constitution: 5,
            Intelligence: 5,
            Wisdom: 5,
            Charisma: 5
        };
        let totalPoints = 20

        //randomly assign points
        while (totalPoints > 0) {
            let randomAbility = randomArrayValue(abilityNames);
            abilityScores[randomAbility] += 1;
            totalPoints -= 1;
        }
    }

    // Function to generate a random character name
    generateName() {
        let randomPrefix = randomArrayValue(this.namePrefixes);
        let randomNumberOfMiddles = weightedRandom([0, 1, 2, 3], [4, 3, 2, 1]);
        let selectedMiddles = Array.from({ length: randomNumberOfMiddles }, () => randomArrayValue(this.nameMiddles));
        let randomSuffix = randomArrayValue(this.nameSuffixes);

        return randomPrefix + selectedMiddles.join('') + randomSuffix;
    }
}

////////////////////////////////////////////////////////

// View.js
class CharacterView {
    constructor() {
        this.nameElement = document.getElementById("characterName");
        this.characterInfo = document.getElementById("characterInfo");
        this.raceElement = document.getElementById("characterRace");
        this.classElement = document.getElementById("characterClass");
        this.backgroundElement = document.getElementById("characterBackground");
    }

    animateRandomise() {
        this.nameElement.classList.add('animate');
        this.characterInfo.classList.add('animate');

        // Remove animation class after animation completes
        setTimeout(() => {
            this.nameElement.classList.remove('animate');
            this.characterInfo.classList.remove('animate');
        }, 500); // Match animation duration
    }

    updateCharacterSheet(firstName, lastName, race, characterClass, background) {
        this.nameElement.textContent = `${firstName} ${lastName}`;
        this.raceElement.textContent = race;
        this.classElement.textContent = characterClass;
        this.backgroundElement.textContent = background;
        this.animateRandomise();
    }
};

////////////////////////////////////////////////////////

// Controller.js
class CharacterController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    // Function to initialize the character generator
    async initialize() {
        await this.model.loadData();
        this.generateCharacter(); // Generate character after loading data
    }

    generateCharacter() {
        this.model.generateCharacter();
        this.view.updateCharacterSheet(this.model.selectedFirstName, this.model.selectedLastName, this.model.selectedRace, this.model.selectedClass, this.model.selectedBackground);
    }
};

// main.js
//import { CharacterModel } from './model.js';
//import { CharacterView } from './view.js';
//import { CharacterController } from './controller.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new CharacterModel();
    const view = new CharacterView();
    const controller = new CharacterController(model, view);

    // Find the button element by its ID
    const generateButton = document.getElementById('generateButton');

    // Attach an event listener to the button's click event
    generateButton.addEventListener('click', () => {
        controller.generateCharacter(); // Call the generateCharacter function
    });

    controller.initialize();
});