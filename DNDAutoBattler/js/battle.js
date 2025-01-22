class Battle {
    constructor() {
        this.messageElement = document.getElementById('battleLog');
        this.monstersElement = document.getElementById('monsters');
        this.charactersElement = document.getElementById('characterSheets');
        this.monsters = [];
        this.characters = [];

        this.turnOrder = [];
        this.turn = 0;
    }

    generateMonsters() {
        this.monsters.push(new Monster(monsters[0].name, monsters[0].hp, monsters[0].attack));
        this.monsters.push(new Monster(monsters[0].name, monsters[0].hp, monsters[0].attack));
    }

    generateCharacters() {
        this.characters = [ characters[Math.floor(Math.random() * characters.length)] ];
    }

    drawMonsters() {
        this.monstersElement.innerHTML = '';

        this.monsters.forEach(monster => {
            this.monstersElement.appendChild(monster.draw());
        });
    }

    drawCharacters() {
        this.charactersElement.innerHTML = '';

        this.characters.forEach(character => {
            this.charactersElement.appendChild(character.draw());
        });
    }

    logMessage(message) {
        const entry = document.createElement('p');
        entry.textContent = message;
        this.messageElement.appendChild(entry);
        this.messageElement.scrollTop = this.messageElement.scrollHeight;
    }

    start() {
        this.logMessage('Battle started!');

        setInterval(() => {
            this.updateBattle();
        }, 3000);
    }

    updateBattle() {
        // 
    }
}