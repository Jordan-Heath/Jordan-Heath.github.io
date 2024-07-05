const progressBar = document.querySelector('.progress');
const updatesArea = document.querySelector('.updates');

const xpBar = document.querySelector('.xp-bar');
const levelDisplay = document.querySelector('.level');
const goldDisplay = document.querySelector('.gold');
const weaponDisplay = document.querySelector('.weapon');
const damageDisplay = document.querySelector('.damage');

const explorationUpdates = [ 
    "Gathering herbs...",
    "Exploring a dusty path...",
    "Finding an abandoned campsite...",
    "Discovering a hidden trail...",
    "Crossing a shallow stream...",
    "Noticing strange markings..." 
];

const weaponAdjectives = [
    "Rusty", "Shiny", "Ancient", "Bent", "Chipped", "Wooden", "Iron", "Gleaming"
];
const weaponNouns = [
    "Sword", "Dagger", "Axe", "Club", "Mace", "Stick", "Staff", "Spear"
];

const enemyAdjectives = [
    "Slimy", "Foul", "Vicious", "Spiky", "Armored", "Tiny", "Diseased"
];
const enemyNouns = [
    "Goblin", "Rat", "Slime", "Spider", "Zombie", "Wolf", "Skeleton"
];

let player = {
    xp: 0,
    level: 1,
    gold: 0,
    weapon: "Unarmed",
    damageRange: [1, 2]
};

let currentEnemy = null;

function updateProgress() {
    let width = 0; 
    const intervalId = setInterval(frame, 20); // Update every 20 milliseconds

    function frame() {
        if (width >= 100) {
            clearInterval(intervalId);
            printUpdate();
            updateProgress(); // Start a new progress bar
        } else {
            width++;
            progressBar.style.width = width + '%'; 
        }
    }

    updatePlayerStats();
}

function updatePlayerStats() {
    let xpProgress = player.xp % 100; // 100 is the XP needed per level 
    xpBar.style.width = xpProgress + '%';

    player.level = Math.floor(player.xp / 100) + 1;
    levelDisplay.textContent = player.level;

    player.gold += Math.floor(Math.random() * 5) + 1; // Random gold
    goldDisplay.textContent = player.gold;

    player.xp +=  Math.floor(Math.random() * 10) + 5; // Random XP
}

function printUpdate() {
    if (currentEnemy) {
        attackEnemy();
    } else if (Math.random() < 0.25) { // 25% chance to encounter an enemy
        startEnemyEncounter();
    } else if (Math.random() < 0.1) { // 10% chance for weapon find
        findWeapon();
    } else {
        const randomIndex = Math.floor(Math.random() * explorationUpdates.length);
        const updateText = explorationUpdates[randomIndex];

        const newUpdate = document.createElement('p');
        newUpdate.textContent = updateText;
        updatesArea.appendChild(newUpdate);
    }
}

function startEnemyEncounter() {
    const numAdjectives = Math.floor(Math.random() * 3) + 1; 
    const adjectives = [];
    for (let i = 0; i < numAdjectives; i++) {
        adjectives.push(enemyAdjectives[Math.floor(Math.random() * enemyAdjectives.length)]);
    }
    const noun = enemyNouns[Math.floor(Math.random() * enemyNouns.length)];

    const enemyHealth = Math.floor(Math.random() * (player.level * 2)) + 1;
    currentEnemy = {
        name: adjectives.join(' ') + ' ' + noun,
        maxHealth: enemyHealth,
        health: enemyHealth
    };

    const newUpdate = document.createElement('p');
    newUpdate.textContent = "You've encountered a " + currentEnemy.name + "!";
    updatesArea.appendChild(newUpdate);
}

function attackEnemy() {
    const damage = Math.floor(Math.random() * (player.damageRange[1] - player.damageRange[0] + 1)) + player.damageRange[0];
    currentEnemy.health -= damage;

    const newUpdate = document.createElement('p');
    newUpdate.textContent = "You hit the " + currentEnemy.name + " for " + damage + " damage!";
    updatesArea.appendChild(newUpdate);

    if (currentEnemy.health <= 0) {
        defeatEnemy();
    }
}

function defeatEnemy() {
    let newUpdate = document.createElement('p');
    newUpdate.textContent = "You defeated the " + currentEnemy.name + "!";
    updatesArea.appendChild(newUpdate);

    let xpGain = Math.floor(currentEnemy.maxHealth / 2); 
    let goldGain = currentEnemy.maxHealth; 

    player.xp += xpGain;
    player.gold += goldGain;

    newUpdate = document.createElement('p');
    newUpdate.textContent = "You gained " + xpGain + " XP and " + goldGain + " gold!";
    updatesArea.appendChild(newUpdate);

    findWeapon(); // Player finds a weapon after the battle

    currentEnemy = null; // Reset enemy 
    updatePlayerStats();
}

function findWeapon() {
    const numAdjectives= Math.floor(Math.random() * 3) + 1; // 1-3 adjectives
    const adjectives = [];
    for (let i = 0; i < numAdjectives; i++) {
        adjectives.push(weaponAdjectives[Math.floor(Math.random() * weaponAdjectives.length)]);
    }
    const noun = weaponNouns[Math.floor(Math.random() * weaponNouns.length)];

    player.weapon = adjectives.join(' ') + ' ' + noun;
    weaponDisplay.textContent = player.weapon;

    // Adjust damage 
    const damageAdjustment = Math.floor(Math.random() * 2) + 1;
    if (Math.random() < 0.5) {
        player.damageRange[0] += damageAdjustment;
    } else {
        player.damageRange[1] += damageAdjustment;
    }

    // Ensure min damage doesn't exceed max 
    if (player.damageRange[0] > player.damageRange[1]) {
        player.damageRange[0] = player.damageRange[1]; 
    }

    damageDisplay.textContent = player.damageRange[0] + '-' + player.damageRange[1];     
}

// Start the initial progress
updateProgress();