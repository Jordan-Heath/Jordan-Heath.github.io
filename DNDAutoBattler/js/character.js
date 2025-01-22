class Character {
    constructor(
            name, 
            class_, 
            background, 
            level, 
            race, 
            alignment, 
            experience, 
            hp, 
            ac, 
            abilities, 
            equipment, 
            spells, 
            actions) 
    {
        this.name = name;
        this.class_ = class_;
        this.background = background;
        this.level = level;
        this.race = race;
        this.alignment = alignment;
        this.experience = experience;
        this.hp = hp;
        this.maxHP = hp;
        this.ac = ac;
        this.abilities = {
            strength: abilities.strength,
            strengthModifier: this.calculateAbilityModifier(abilities.strength),
            dexterity: abilities.dexterity,
            dexterityModifier: this.calculateAbilityModifier(abilities.dexterity),
            constitution: abilities.constitution,
            constitutionModifier: this.calculateAbilityModifier(abilities.constitution),
            intelligence: abilities.intelligence,
            intelligenceModifier: this.calculateAbilityModifier(abilities.intelligence),
            wisdom: abilities.wisdom,
            wisdomModifier: this.calculateAbilityModifier(abilities.wisdom),
            charisma: abilities.charisma,
            charismaModifier: this.calculateAbilityModifier(abilities.charisma)
        };
        this.equipment = equipment; //[] of weapons/armor
        this.spells = spells; //[] of spells
        this.actions = actions; //[] of actions

        this.element = this.draw();
    }

    draw() {
        if (this.element) {
            return this.element;
        }

        const div = document.createElement('div');
        div.classList.add('character-sheet');
        div.innerHTML = `
            <div class="character-info-header">
                <div class="character-name">
                    <h1>${this.name}</h1>
                    <p>Character Name</p>
                </div>
                <table>
                    <tr>
                        <th>${this.class_}</th>
                        <th>${this.background}</th>
                        <th>${this.level}</th>
                    </tr>
                    <tr>
                        <td>Class</td>
                        <td>Background</td>
                        <td>Level</td>
                    </tr>
                    <tr>
                        <th>${this.race}</th>
                        <th>${this.alignment}</th>
                        <th>${this.experience}</th>
                    </tr>
                    <tr>
                        <td>Race</td>
                        <td>Alignment</td>
                        <td>Experience</td>
                    </tr>
                </table>
            </div>
            <div class="character-info-body">
                <div class="abilities">
                    <div class="ability-square">
                        <p>Strength</p>
                        <h1>${this.abilities.strengthModifier > 0 ? '+' : ''}${this.abilities.strengthModifier}</h1>
                        <p>${this.abilities.strength}</p>
                    </div>
                    <div class="ability-square">
                        <p>Dexterity</p>
                        <h1>${this.abilities.dexterityModifier > 0 ? '+' : ''}${this.abilities.dexterityModifier}</h1>
                        <p>${this.abilities.dexterity}</p>
                    </div>
                    <div class="ability-square">
                        <p>Constitution</p>
                        <h1>${this.abilities.constitutionModifier > 0 ? '+' : ''}${this.abilities.constitutionModifier}</h1>
                        <p>${this.abilities.constitution}</p>
                    </div>
                    <div class="ability-square">
                        <p>Intelligence</p>
                        <h1>${this.abilities.intelligenceModifier > 0 ? '+' : ''}${this.abilities.intelligenceModifier}</h1>
                        <p>${this.abilities.intelligence}</p>
                    </div>
                    <div class="ability-square">
                        <p>Wisdom</p>
                        <h1>${this.abilities.wisdomModifier > 0 ? '+' : ''}${this.abilities.wisdomModifier}</h1>
                        <p>${this.abilities.wisdom}</p>
                    </div>
                    <div class="ability-square">
                        <p>Charisma</p>
                        <h1>${this.abilities.charismaModifier > 0 ? '+' : ''}${this.abilities.charismaModifier}</h1>
                        <p>${this.abilities.charisma}</p>
                    </div>
                </div>
                <div class="character-info-body-main">
                    <div class="hp-ac">
                        <div class="hp-ac-square">
                            <h1>${this.hp} / ${this.hp}</h1>
                            <p>HP</p>
                        </div>
                        <div class="hp-ac-square">
                            <h1>${this.ac}</h1>
                            <p>AC</p>
                        </div>
                    </div>
                    <div class="equipment">
                        <h1>Equipment</h1>
                        ${
                            this.equipment.map(item => `
                                <p>${item.printDetails()}</p>
                            `).join('')
                        }
                    </div>
                    <div class="spells">
                        <h1>Spells</h1>
                        ${
                            this.spells.map(spell => `
                                <p>${spell.printDetails()}</p>
                            `).join('')
                        }
                    </div>
                    <div class="actions">
                        <h1>Actions</h1>
                        <p>${
                            this.actions.map(action => `
                                <p>${action.printDetails()}</p>
                            `).join('')
                        }</p>
                    </div>
                </div>
            </div>
        `;
        return div;
    }

    calculateAbilityModifier(ability) {
        return Math.floor((ability - 10) / 2);
    }
}