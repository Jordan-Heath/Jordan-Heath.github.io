class XPBar {
    constructor(DivElement) {
        this.XPBarElement = document.getElementById(DivElement);
        this.XPBarText = document.createElement('span');
        this.XPBarFill = document.createElement('div');
        this.applyStyle();
        this.XPBarElement.appendChild(this.XPBarText);
        this.XPBarElement.appendChild(this.XPBarFill);
    }

    applyStyle() {
        this.XPBarElement.classList.add("XPBar");

        this.XPBarText.classList.add("XPText");

        this.XPBarFill.classList.add("XPFill");
    }

    update(barText, fillPercentage) {
        this.XPBarText.innerText = barText;
        this.XPBarFill.style.width = `${fillPercentage}%`;
    }
}


// Initialize character information
const characterInfoLines = document.getElementById("characterInfoLines");
const playerNameElement = document.getElementById("playerNameElement");
const playerHealthElement = document.getElementById("playerHealthElement");
//const playerManaElement = document.getElementById("p")
const playerGoldElement = document.getElementById('playerGoldElement');
const xpBar = new XPBar('XPBar');
const playerStatElements = document.getElementById("playerStatElements");


function updateCharacterInfo() {
    playerNameElement.textContent = `${player.name}`;
    playerHealthElement.textContent = `Health: ${player.health}`;

    xpBar.update(`Level: ${player.level}`, player.xpPercentage())

    //playerManaElement.textContent = `${player.mana}`;
    playerStatElements.innerHTML = "";
    player.stats.forEach(stat => {
        const statElement = document.createElement("p");
        statElement.textContent = `${stat.name}: ${stat.value}`;
        playerStatElements.appendChild(statElement);
    });
}

function initializePlayerStats() {
    SKILLS.forEach(skill => {
        var statElement = document.createElement("p");
        statElement
    });
}

updateCharacterInfo();

// Quest Box
const questDialog = document.getElementById("questDialog");
const continueButton = document.getElementById("continueButton");

function progressQuest() {
    if (dialogueIndex < npcDialogues.length) {
        questDialog.textContent = npcDialogues[dialogueIndex];
        dialogueIndex++;

        if (dialogueIndex === npcDialogues.length) {
            continueButton.textContent = "End Conversation";
        }
    } else {
        // End of conversation logic
        alert("End of conversation. Quest accepted!");
    }
}

function continue_clicked() {
    //progressQuest();

    player.xp += 1;
    player.tryLevelUp();
    updateCharacterInfo();
}