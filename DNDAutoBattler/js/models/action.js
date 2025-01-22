class Action {
    constructor(characterName, name, baseDamage, damageVariation, type) {
        this.characterName = characterName;
        this.name = name;
        this.baseDamage = baseDamage;
        this.damageVariation = damageVariation;
        this.type = type;
    }

    perform() {
        switch (this.type) {
            case 'attack':
                this.attack();
                break;
            case 'heal':
                this.heal();
                break;
            default:
                console.error('Unknown action type');
        }
    }

    attack(targets) {
        // Pick a random target
        const target = targets[Math.floor(Math.random() * this.target.length)];
        battle.logMessage(`${this.characterName} attacks ${target.name} with ${this.name}!`);

        // Calculate damage
        const damage = this.baseDamage + Math.floor(Math.random() * this.damageVariation);
        target.hp -= damage;
        battle.logMessage(`${target.name} takes ${damage} damage!`);
    }

    printDetails() {
        switch (this.type) {
            case 'attack':
                return `${this.name} (1d${this.damageVariation} + ${this.baseDamage})`;
            case 'heal':
                return `${this.name} (1d${this.damageVariation} + ${this.baseDamage})`;
        }
    }
}