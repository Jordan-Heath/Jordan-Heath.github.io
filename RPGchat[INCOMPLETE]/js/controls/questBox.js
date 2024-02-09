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