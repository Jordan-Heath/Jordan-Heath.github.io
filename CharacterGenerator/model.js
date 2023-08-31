class CharacterModel {
    constructor() {
        this.races = [];
        this.classes = [];
        this.backgrounds = [];
        this.namePrefixes = [];
        this.nameMiddles = [];
        this.nameSuffixes = [];
        this.lastNames = [];
        this.abilityNames = [];

        this.selectedFirstName = "";
        this.selectedLastName = "";
        this.selectedRace = "";
        this.selectedClass = "";
        this.selectedBackground = "";
        this.selectedAge = "";
        this.selectedHeight = "";
        this.selectedWeight = "";
        this.abilityScores = {};
    }

    async loadData() {
        try {
            const fetchUrls = [
                'https://grumpypurple.github.io/CharacterGenerator/data/name-prefixes.txt',
                'https://grumpypurple.github.io/CharacterGenerator/data/name-middles.txt',
                'https://grumpypurple.github.io/CharacterGenerator/data/name-suffixes.txt',
                'https://grumpypurple.github.io/CharacterGenerator/data/last-names.txt',
                'https://grumpypurple.github.io/CharacterGenerator/data/races.txt',
                'https://grumpypurple.github.io/CharacterGenerator/data/classes.txt',
                'https://grumpypurple.github.io/CharacterGenerator/data/backgrounds.txt',
                'https://grumpypurple.github.io/CharacterGenerator/data/abilities.txt'
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
                this.backgrounds,
                this.abilityNames
            ] = fetchTexts.map(text => text.split('\n'));
        } catch (error) {
            console.error("Error loading data:", error);
        }
    }

    generateCharacter() {
        this.selectedFirstName = this.generateName();
        this.selectedLastName = randomArrayValue(this.lastNames);
        this.selectedRace = randomArrayValue(this.races);
        this.selectedClass = randomArrayValue(this.classes);
        this.selectedBackground = randomArrayValue(this.backgrounds);
        this.selectedAge = 10 * weightedRandom([2, 3, 4, 5, 6, 7, 8, 9], [14, 12, 10, 8, 6, 4, 2, 1]) + getRandomNumber(0, 9);
        this.selectedHeight = `${getRandomNumber(heightFeetMinimum, heightFeetMaximum)}ft ${getRandomNumber(0, 11)}inches`;
        this.selectedWeight = `${getRandomNumber(weightKiloMinimum, weightKiloMaximum)}kgs`;
        this.abilityScores = this.generateAbilityScores();
    }

    generateAbilityScores() {
        const abilityScores = {};

        this.abilityNames.forEach((abilityName) => {
            abilityScores[abilityName] = abilityScoreMinimum;
        });

        let remainingPoints = abilityScoreTotal - abilityScoreMinimum * this.abilityNames.length;

        while (remainingPoints > 0) {
            const randomAbilityIndex = getRandomNumber(0, this.abilityNames.length - 1);
            const abilityName = this.abilityNames[randomAbilityIndex];

            if (abilityScores[abilityName] < abilityScoreMaximum) {
                abilityScores[abilityName]++;
                remainingPoints--;
            }
        }

        return abilityScores;
    }

    generateName() {
        let randomPrefix = randomArrayValue(this.namePrefixes);
        let randomNumberOfMiddles = weightedRandom([0, 1, 2, 3], [4, 3, 2, 1]);
        let selectedMiddles = Array.from({ length: randomNumberOfMiddles }, () => randomArrayValue(this.nameMiddles));
        let randomSuffix = randomArrayValue(this.nameSuffixes);

        return randomPrefix + selectedMiddles.join('') + randomSuffix;
    }
}