class QuestChoice {
    constructor(choiceData) {
        this.choice = choiceData.choice;

        this.skillCheck = choiceData.skillCheck;
        this.skillRequirement = choiceData.skillRequirement;

        this.successDialog = choiceData.successDialog;
        this.reward = choiceData.reward;
        this.rewardAmount = choiceData.rewardAmount;

        this.failDialog = choiceData.failDialog;
        this.punishment = choiceData.punishment;
        this.punishmentAmount = choiceData.punishmentAmount;
    }

    passCheck() {
        return null;
    }
}