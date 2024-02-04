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
                //FIRSTNAMESLINK,
                NAMEPREFIXESLINK,
                NAMEMIDDLESLINK,
                NAMESUFFICESLINK,
                LASTNAMESLINK,
                RACESLINK,
                CLASSESLINK,
                BACKGROUNDSLINK,
                ABILITIESLINK
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
        this.selectedAge = 10 * weightedRandom([2, 3, 4, 5, 6, 7, 8, 9], [128, 64, 32, 16, 8, 4, 2, 1]) + getRandomNumber(0, 9);
        this.selectedHeight = `${getRandomNumber(heightFeetMinimum, heightFeetMaximum)}ft ${getRandomNumber(0, 11)}inches`;
        this.selectedWeight = `${getRandomNumber(weightKiloMinimum, weightKiloMaximum)}kgs`;
        this.abilityScores = this.generateAbilityScores();
    }

    generateAbilityScores() {
        const abilityScores = {};

        //set abilities to minimum
        this.abilityNames.forEach((abilityName) => {
            abilityScores[abilityName] = abilityScoreMinimum;
        });

        //set the remaining score to total MINUS minimums assigned
        let remainingPoints = abilityScoreTotal - abilityScoreMinimum * this.abilityNames.length;

        //select random ability, give it a point, subtract from remaining
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