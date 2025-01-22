class Armor {
    constructor(name, baseAC, type, weight, properties) {
        this.name = name;
        this.baseAC = baseAC;
        this.type = type; // e.g., 'light', 'medium', or 'heavy'
        this.weight = weight;
        this.properties = properties; // e.g., { stealthDisadvantage: true, maxDexBonus: 2 }
    }

    calculateTotalAC(dexterityModifier) {
        if (this.type === 'light') {
            return this.baseAC + dexterityModifier;
        } else if (this.type === 'medium') {
            const dexBonus = Math.min(dexterityModifier, this.properties.maxDexBonus || 2);
            return this.baseAC + dexBonus;
        } else if (this.type === 'heavy') {
            return this.baseAC; // heavy armor doesn't add dexterity modifier
        }
        return this.baseAC;
    }

    printDetails() {
        return `${this.name} (AC: ${this.baseAC}, Type: ${this.type}, Weight: ${this.weight} lbs.)`;
    }
}

// Example usage:
// const chainShirt = new Armor('Chain Shirt', 13, 'medium', 20, { maxDexBonus: 2 });
// console.log(chainShirt.calculateTotalAC(3)); // Output: 15
