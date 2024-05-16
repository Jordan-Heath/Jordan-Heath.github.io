const battlefield = document.getElementById("battlefield");
const startMatchBtn = document.getElementById("startMatchBtn");
const fightArena = document.getElementById("fightArena");
const fighter1Div = document.getElementById("fighter1");
const fighter2Div = document.getElementById("fighter2");
const combatLogDiv = document.getElementById("combatLog");
const beginFightBtn = document.getElementById("beginFightBtn");
const numCharacters = 100;
const attackFrequency = 500;

const syllables = ["ra", "ka", "zo", "bi", "fu", "mu", "do", "ki", "sha"];

let characters = [];

const MAX_HEALTH = 50;
const MIN_HEALTH = 10;
const MAX_STRENGTH = 10;
const MIN_STRENGTH = 3;
const MAX_ACCURACY = 0.75;
const MIN_ACCURACY = 0.5;
const MAX_DEFENSE = 4;
const MIN_DEFENSE = 0;

function generateCharacter() {
    const maxHealth = Math.floor(Math.random() * (MAX_HEALTH - MIN_HEALTH + 1)) + MIN_HEALTH;
    const name = Array.from({ length: 3 }, () => syllables[Math.floor(Math.random() * syllables.length)]).map((syllable, index) => index === 0 ? syllable.charAt(0).toUpperCase() + syllable.slice(1) : syllable).join("");
    const strength = Math.floor(Math.random() * (MAX_STRENGTH - MIN_STRENGTH + 1)) + MIN_STRENGTH;
    const accuracy = Math.random() * (MAX_ACCURACY - MIN_ACCURACY) + MIN_ACCURACY;
    const defense = Math.floor(Math.random() * (MAX_DEFENSE - MIN_DEFENSE + 1)) + MIN_DEFENSE;

    return {
        maxHealth,
        currentHealth: maxHealth,
        name,
        strength,
        accuracy,
        defense
    };
}

function createCharacterElement(character) {
    const characterDiv = document.createElement("div");
    characterDiv.classList.add("character");
    characterDiv.innerHTML = `
        <strong>${character.name}</strong><br>
        ${character.currentHealth}/${character.maxHealth}
    `;
    return characterDiv;
}

function displayFighterStats(fighter, div) {
    div.innerHTML = `
        <h2>${fighter.name}</h2>
        <p>Health: ${fighter.currentHealth}/${fighter.maxHealth}</p>
        <p>Strength: ${fighter.strength}</p>
        <p>Accuracy: ${Math.round(fighter.accuracy * 100)}%</p>
        <p>Defense: ${fighter.defense}</p>
    `;
}

function shakeCharacter(attacker) {
    const attackerDiv = attacker === fighter1 ? fighter1Div : fighter2Div;
    const defenderDiv = attacker === fighter1 ? fighter2Div : fighter1Div;
    
    attackerDiv.classList.add(attacker === fighter1 ? "fighter1attacking" : "fighter2attacking");
    defenderDiv.classList.add("shaking");

    setTimeout(() => {
        attackerDiv.classList.remove(attacker === fighter1 ? "fighter1attacking" : "fighter2attacking");
        defenderDiv.classList.remove("shaking");
    }, attackFrequency);
}

function updateHealthDisplays() {
    displayFighterStats(fighter1, fighter1Div);
    displayFighterStats(fighter2, fighter2Div);
}

function endFight(winner) {
    combatLogDiv.innerHTML += `<p><strong>${winner.name} wins!</strong></p>`;

    const completeFightBtn = document.createElement("button");
    completeFightBtn.textContent = "Complete Fight";
    combatLogDiv.appendChild(completeFightBtn);
    combatLogDiv.scrollTop = combatLogDiv.scrollHeight;

    completeFightBtn.addEventListener("click", completeFight);
}

function completeFight() {
    fightArena.style.display = "none";
    combatLogDiv.innerHTML = "";
    combatLogDiv.append(beginFightBtn);
    fighter1Div.innerHTML = "";
    fighter2Div.innerHTML = "";

    updateBattlefieldDisplay();

    beginFightBtn.disabled = false;
    startMatchBtn.disabled = false;
}

function updateBattlefieldDisplay() {
    characters.forEach((character, index) => {
        const characterDiv = battlefield.children[index];
        characterDiv.innerHTML = `<strong>${character.name}</strong>`;

        if (character.currentHealth <= 0) {
            characterDiv.classList.add("defeated");
            characterDiv.innerHTML += "<br>Defeated";
        } else {
            characterDiv.innerHTML += `<br>${character.currentHealth}/${character.maxHealth}`;
        }
    });
}

function selectRandomCharacter(characters) {
    const availableCharacters = characters.filter(char => char.currentHealth > 0);
    return availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
}

function attack(attacker, defender) {
    shakeCharacter(attacker);

    const attackRoll = Math.floor(Math.random() * attacker.strength) + 1;
    const defenseRoll = Math.floor(Math.random() * defender.defense) + 1;
    const accuracyRoll = Math.random();

    let damage = Math.max(0, attackRoll - defenseRoll);
    let logMessage;

    if (accuracyRoll <= attacker.accuracy) {
        defender.currentHealth -= damage;
        logMessage = `${attacker.name} attacks for ${attackRoll}, ${defender.name} takes ${damage} damage`;
    } else {
        logMessage = `${attacker.name} attacks for ${attackRoll}, and misses`;
    }

    combatLogDiv.innerHTML += `<p>${logMessage}</p>`;
    combatLogDiv.scrollTop = combatLogDiv.scrollHeight;
    updateHealthDisplays();

    if (defender.currentHealth <= 0) {
        endFight(attacker);
        return;
    }

    setTimeout(() => attack(defender, attacker), attackFrequency);
}

function startMatch() {
    const highlighted = document.querySelectorAll(".character.highlighted");
    highlighted.forEach(char => char.classList.remove("highlighted"));

    fighter1 = selectRandomCharacter(characters);
    fighter2 = selectRandomCharacter(characters);

    battlefield.children[characters.indexOf(fighter1)].classList.add("highlighted");
    battlefield.children[characters.indexOf(fighter2)].classList.add("highlighted");

    fightArena.style.display = "flex";
    displayFighterStats(fighter1, fighter1Div);
    displayFighterStats(fighter2, fighter2Div);
}

function initialize() {
    startMatchBtn.addEventListener("click", startMatch);

    beginFightBtn.addEventListener("click", () => {
        beginFightBtn.disabled = true;
        startMatchBtn.disabled = true;
        attack(fighter1, fighter2);
    });

    for (let i = 0; i < numCharacters; i++) {
        const character = generateCharacter();
        characters.push(character);
        battlefield.appendChild(createCharacterElement(character));
    }
}

initialize();
