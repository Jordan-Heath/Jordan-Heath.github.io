class Player {
    constructor(name, element) {
        this.name = name;
        this.element = element;
        this.score = 0;
        this.isChooser = false;
        this.currentAnswer = null;
    }

    enableControls() {
        // Enable answer buttons
        const buttons = this.element.querySelectorAll('.answer-button');
        buttons.forEach(button => button.disabled = false);
    }

    disableControls() {
        // Disable answer buttons
        const buttons = this.element.querySelectorAll('.answer-button');
        buttons.forEach(button => {
            button.disabled = true
            button.classList.remove("activated");
        });
    }

    updateView() {
        // Update player score display
        const scoreElement = this.element.querySelector('.player-score');
        scoreElement.innerHTML = this.score;
    }

    chooseQuestion() {
        this.isChooser = true;
        // Add .chooser class to the player element
        this.element.classList.add('chooser');
    }

    removeChooser() {
        this.isChooser = false;
        // Remove .chooser class from the player element
        this.element.classList.remove('chooser');
    }
}
