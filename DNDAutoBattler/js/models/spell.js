class Spell {
    constructor(name, level, school, castingTime, range, components, duration, description, numberOfHits) {
        this.name = name;
        this.level = level;
        this.school = school;
        this.castingTime = castingTime;
        this.range = range;
        this.components = components; // { verbal: true/false, somatic: true/false, material: 'material description' }
        this.duration = duration;
        this.description = description;
        this.numberOfHits = numberOfHits;
    }

    cast() {
        console.log(`${this.name} (Level ${this.level} ${this.school}) has been cast.`);
        console.log(`Casting Time: ${this.castingTime}, Range: ${this.range}, Duration: ${this.duration}`);
        console.log(`Components: ${this.components.verbal ? 'V' : ''}${this.components.somatic ? 'S' : ''}${this.components.material ? 'M (' + this.components.material + ')' : ''}`);
        console.log(`Description: ${this.description}`);
    }

    printDetails() {
        return `${this.name} (Level ${this.level} ${this.school})`;
    }
}

// Example usage:
// const fireball = new Spell(
//     "Fireball",
//     3,
//     "Evocation",
//     "1 action",
//     "150 feet",
//     { verbal: true, somatic: true, material: "a tiny ball of bat guano and sulfur" },
//     "Instantaneous",
//     "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame."
// );
// fireball.cast();

