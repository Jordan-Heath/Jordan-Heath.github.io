class CharacterModel {
    constructor() {
        this.nameSyllables = [];
        this.titleWords = [];
        this.selectedFirstName = "";
        this.selectedLastName = "";

        this.races = [];
        this.classes = [];
        this.backgrounds = [];
        this.selectedRace = "";
        this.selectedClass = "";
        this.selectedBackground = "";
        this.selectedAge = "";
        this.selectedAlignment = new Alignment();
        this.selectedHeight = "";
        this.selectedWeight = "";

        this.abilities = ABILITIES;
        this.selectedAbilities = [];

        this.skills = [];
        this.selectedSkills = [];
    }

    async loadData() {
        const loadJsonData = (url) => fetch(url).then(response => response.json());

        // Load version number and other data from data.json
        return Promise.all([
            loadJsonData(NAME_SYLLABLES_URL),
            loadJsonData(TITLE_WORDS_URL),
            loadJsonData(RACES_URL),
            loadJsonData(CLASSES_URL),
            loadJsonData(BACKGROUNDS_URL),
            loadJsonData(SKILLS_URL)
        ])
            .then(([nameSyllablesData,
                titleWordsData,
                racesData,
                classesData,
                backgroundsData,
                skillsData]) => {

                this.nameSyllables = nameSyllablesData.nameSyllables;
                this.titleWords = titleWordsData.titleWords;

                racesData.races.forEach(race => {
                    this.races.push(new Race(race));
                });

                classesData.classes.forEach(characterClass => {
                    this.classes.push(characterClass);
                });

                this.backgrounds = backgroundsData.backgrounds;

                skillsData.skills.forEach(skill => {
                    this.skills.push(new Skill(skill.name, skill.relatedAbility))
                });
            })
            .catch(error => console.error('Error loading data:', error));
    }

    generateCharacter() {
        this.selectedFirstName = this.generateName();
        this.selectedLastName = this.generateTitle();

        this.selectedRace = this.generateRace();
        this.selectedSubRace = this.generateSubRace();
        this.selectedClass = this.generateClass();
        this.selectedBackground = this.generateBackground();

        this.selectedAge = this.generateAge();
        this.selectedAlignment = this.generateAlignment();
        this.selectedHeight = this.generateHeight();
        this.selectedWeight = this.generateWeight();

        this.selectedAbilities = this.generateAbilityScores();
        this.selectedSkills = this.generateSkillsScores();
    }

    generateAbilityScores() {
        let abilities = []

        ABILITIES.forEach(ability => {
            abilities.push(new Ability(ability));
        });

        //set abilities to minimum
        abilities.forEach((ability) => {
            ability.value = abilityScoreMinimum;
        });

        //set the remaining score to total MINUS minimums assigned
        let remainingPoints = abilityScoreTotal - (abilityScoreMinimum * abilities.length);

        //select random ability, give it a point, subtract from remaining
        while (remainingPoints > 0) {
            const randomAbilityIndex = getRandomNumber(0, abilities.length - 1);
            const selectedAbility = abilities[randomAbilityIndex];

            if (selectedAbility.value < abilityScoreMaximum) {
                selectedAbility.value++;
                remainingPoints--;
            }
        }

        //race bonuses
        this.selectedRace.abilityIncreases.forEach(increase => {
            let relatedAbility = abilities.find(ability => ability.name === increase.name)
            relatedAbility.value += increase.value;
        });
        //class bonus?
        //2 for major ability, 1 for minor ability

        return abilities;
    }

    generateSkillsScores() {
        let skills = [];

        //deep copy the skills
        this.skills.forEach(skill => {
            skills.push(new Skill(skill.name, skill.relatedAbility))
        });

        //determine proficient skills
        let proficientSkillCount = getRandomNumber(proficientSkillsBase - proficientSkillsVariance, proficientSkillsBase + proficientSkillsVariance);

        while (proficientSkillCount > 0) {
            const randomsSkillIndex = getRandomNumber(0, skills.length - 1);
            const selectedSkill = skills[randomsSkillIndex];

            if (selectedSkill.proficient !== true) {
                selectedSkill.proficient = true;
                proficientSkillCount--;
            }
        }

        //assign skill values
        skills.forEach(skill => {
            skill.value = this.selectedAbilities.find(ability => ability.name === skill.relatedAbility).modifier();
            if (skill.proficient) skill.value += 5;
        });

        //class modifiers

        return skills;
    }

    generateName() {
        const numberOfSyllables = weightedRandom([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
        const syllables = Array.from({ length: numberOfSyllables }, () => randomArrayValue(this.nameSyllables));
        let name = capitalizeFirstLetter(syllables.join(''));

        return name;
    }

    generateTitle() {
        const numberOfWords = weightedRandom([1, 2, 3], [1, 198, 1]);
        const words = Array.from({length: numberOfWords }, () => capitalizeFirstLetter(randomArrayValue(this.titleWords)));
        const title = words.join('');

        return title;
    }

    generateRace() {
        return randomArrayValue(this.races);
    }
    generateSubRace() {
        return randomArrayValue(this.selectedRace.subRaces);
    }
    generateClass() {
        return randomArrayValue(this.classes);
    }
    generateBackground() {
        return randomArrayValue(this.backgrounds);
    }
    generateAge() {
        return getRandomNumber(this.selectedRace.ageMin, this.selectedRace.ageMax);
    }
    generateAlignment() {
        return new Alignment(getRandomNumber(-100, 100), getRandomNumber(-100, 100));
    }
    generateHeight() {
        return getRandomNumber(this.selectedRace.heightMin, this.selectedRace.heightMax);
    }
    generateWeight() {
        return getRandomNumber(this.selectedRace.weightMin, this.selectedRace.weightMax);
    }
}


class Ability {
    constructor(name) {
        this.name = name;
        this.value = 0;
    }
    modifier() {
        return Math.round((this.value - 11) / 2)
    }
}

class Skill {
    constructor(name, ability) {
        this.name = name;
        this.relatedAbility = ability;
        this.proficient = false;
        this.value = 0;
    }
}

class Race {
    constructor(data) {
        this.name = data.name;

        this.ageMin = data.ageMin;
        this.ageMax = data.ageMax;

        this.heightMin = data.heightMin;
        this.heightMax = data.heightMax;

        this.weightMin = data.weightMin;
        this.weightMax = data.weightMax;

        this.subRaces = data.subRaces; //an array of strings

        this.speed = data.speed;

        this.languages = data.languages; //an array of strings

        this.abilityIncreases = data.abilityIncreases; //an array of string/int pairs

        this.link = data.link;
    }
}

class Alignment {
    constructor(good, lawful) {
        this.good = good; //100 is good, -100 is evil
        this.lawful = lawful; //100 is lawful, -100 is chaotic
    }

    toText() {
        let description = "";

        if (this.lawful > 45) description += "Lawful"
        else if (this.lawful < -45) description += "Chaotic"
        else description += "True"

        if (this.good > 45) description += " Good";
        else if (this.good < -45) description += " Evil";
        else description += " Neutral"

        return description;
    }
}