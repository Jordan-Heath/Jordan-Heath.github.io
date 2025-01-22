class Weapon {
    constructor(name, baseDamage, damageVariation, weight, properties) {
        this.name = name;
        this.baseDamage = baseDamage;
        this.damageVariation = damageVariation;
        this.weight = weight;
        this.properties = properties;
    }

    printDetails() {
        return `${this.name} (1d${this.damageVariation} + ${this.baseDamage}) ${this.weight} lbs.`;
    }
}
