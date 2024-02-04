//const SKILLS = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
//const MAXSKILLLEVEL = 10;

class Player {
    constructor() {
        this.name = "Hero";

        this.health = 100;
        //this.mana = 100;

        this.level = 1;
        this.xp = 0;

        this.stats = [];
        SKILLS.forEach(skill => {
            this.stats.push(new Stat(skill, 0));
        });

        this.gold = 0;
    }

    tryLevelUp() {
        if (this.xp >= this.level * 10) {
            this.xp -= this.level * 10;
            this.level += 1;

            // Filter out stats that are already at 10
            const eligibleStats = this.stats.filter(stat => stat.value < MAXSKILLLEVEL);

            if (eligibleStats.length > 0) {
                // Choose a random stat from the eligible stats
                const randomStatIndex = Math.floor(Math.random() * eligibleStats.length);
                // Increase the selected stat by 1
                eligibleStats[randomStatIndex].value += 1;
            }
        }
    }

    xpPercentage() {
        return (this.xp / (this.level * 10)) * 100;
    }
}

class Stat {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

const player = new Player();
