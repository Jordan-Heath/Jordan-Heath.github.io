class Monster {
    constructor(name, hp, attack) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;

        // this.element = this.draw();
    }

    draw() {
        // if (this.element) {
        //     return this.element;
        // }

        const div = document.createElement('div');
        div.classList.add('monster');
        div.textContent = `${this.name} (HP: ${this.hp}, ATK: ${this.attack})`;
        return div;
    }
}