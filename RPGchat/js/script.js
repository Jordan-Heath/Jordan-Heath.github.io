// Sample NPC dialogues
const npcDialogues = [
    "Welcome, adventurer! You seem new around here.",
    "The village is in danger. Can you help us?",
    "You have gained 50 experience points!",
    "Congratulations! You've leveled up to level 2!",
    "Thank you for saving the village!"
];

let dialogueIndex = 0;

function continueDialogue() {
    const npcDialogueElement = document.getElementById("npc-dialogue");
    const continueButton = document.getElementById("continue-button");

    if (dialogueIndex < npcDialogues.length) {
        npcDialogueElement.textContent = npcDialogues[dialogueIndex];
        dialogueIndex++;

        if (dialogueIndex === npcDialogues.length) {
            continueButton.textContent = "End Conversation";
        }
    } else {
        // End of conversation logic
        alert("End of conversation. Quest accepted!");
    }
}

// Initialize character information
document.getElementById("character-name").textContent = "Player";
document.getElementById("character-level").textContent = "Level: 1";
document.getElementById("character-health").textContent = "Health: 100";

// Start the initial dialogue
continueDialogue();
