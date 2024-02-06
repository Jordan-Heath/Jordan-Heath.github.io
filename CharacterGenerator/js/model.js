class Model {
    constructor() {
        this.races = [];
        this.classes = [];
        this.backgrounds = [];
        this.firstNames = [];
        this.nameSyllables = [];
        this.lastNames = [];

        this.selectedFirstName = "";
        this.selectedLastName = "";
        this.selectedRace = "";
        this.selectedClass = "";
        this.selectedBackground = "";
        this.selectedAge = "";
        this.selectedHeight = "";
        this.selectedWeight = "";
        this.abilities = [];
        ABILITIES.forEach(ability => {
            this.abilities.push(new Ability(ability));
        });
    }

    async loadData() {
        const loadJsonData = (url) => fetch(url).then(response => response.json());

        // Load version number and other data from data.json
        return Promise.all([
            loadJsonData(FIRST_NAMES_URL),
            loadJsonData(NAME_SYLLABLES_URL),
            loadJsonData(LAST_NAMES_URL),
            loadJsonData(RACES_URL),
            loadJsonData(CLASSES_URL),
            loadJsonData(BACKGROUNDS_URL),
        ])
            .then(([firstNamesData,
                nameSyllablesData,
                lastNamesData,
                racesData,
                classesData,
                backgroundsData]) => {

                this.firstNames = firstNamesData.firstNames;
                this.nameSyllables = nameSyllablesData.nameSyllables;
                this.lastNames = lastNamesData.lastNames;
                racesData.forEach(race => {
                    //change to making race objects for each
                    //this.races.push(new Race(race.name, race.maxHeight, race.minHeight, race.maxAge, race.minAge, etc))
                    this.races.push(race);
                });
                classesData.forEach(characterClass => {
                    //change to making class objects for each
                    //this.class.push(new Class(class.name, etc))
                    this.class.push(characterClass);
                });
                this.backgrounds = backgroundsData.backgrounds;
            })
            .catch(error => console.error('Error loading data:', error));
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
        //set abilities to minimum
        this.abilities.forEach((ability) => {
            ability.value = abilityScoreMinimum;
        });

        //set the remaining score to total MINUS minimums assigned
        let remainingPoints = abilityScoreTotal - (abilityScoreMinimum * abilities.length);

        //select random ability, give it a point, subtract from remaining
        while (remainingPoints > 0) {
            const randomAbilityIndex = getRandomNumber(0, this.abilities.length - 1);
            const selectedAbility = this.abilities[randomAbilityIndex];

            if (selectedAbility.value < abilityScoreMaximum) {
                selectedAbility.value++;
                remainingPoints--;
            }
        }

        //Class & Race bonuses?
    }

    generateName() {
        const numberOfSyllables = weightedRandom([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
        const syllables = Array.from({ length: numberOfSyllables }, () => randomArrayValue(this.nameSyllables));
        const name = syllables.join('');

        return name;
    }
}