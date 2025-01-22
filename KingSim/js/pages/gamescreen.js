class GameScreenClass {
    constructor() {
        this.element = document.getElementById("game-screen");
        this.chooseActionMenu = document.getElementById("choose-action-menu");
        this.actionDetailsMenu = document.getElementById("action-details-menu");
        this.uiElement = document.getElementById("ui");

        this.chosenAction = null;
        this.randomEvent = null;
    }

    show() {
        MainMenu.hide();
        BackgroundMenu.hide();
        TransitionMenu.hide();
        this.element.classList.add("active");

        this.build();
    }

    hide() {
        this.element.classList.remove("active");
    }

    build() {
        this.element.innerHTML = "";

        // Build "Choose Action" menu
        this.chooseActionMenu = document.createElement("div");
        this.chooseActionMenu.id = "choose-action-menu";
        this.chooseActionMenu.classList = "subscreen active";
        this.element.appendChild(this.chooseActionMenu);
        const actions = Object.keys(Actions);
        actions.forEach(action => {
            const button = document.createElement("button");
            button.innerText = Actions[action].name;
            button.onclick = () => this.chooseAction(action);
            this.chooseActionMenu.appendChild(button);
        });

        // Build "Action Details" menu
        this.actionDetailsMenu = document.createElement("div");
        this.actionDetailsMenu.id = "action-details-menu";
        this.actionDetailsMenu.classList = "subscreen";
        this.element.appendChild(this.actionDetailsMenu);

        // Build UI
        const uiElement = document.createElement("div");
        uiElement.id = "ui";
        this.element.appendChild(uiElement);
        this.updateUI();

        this.promptAction();
    }

    updateUI() {
        const uiElement = document.getElementById("ui");
        uiElement.innerHTML = "";
        uiElement.innerHTML = `
            <h1>${SAVE.playerName}</h1>
            <p>Week: ${SAVE.week}</p>
            <h2>Stats</h2>
            <p>Wealth: ${SAVE.wealth}</p>
            <p>Welfare: ${SAVE.welfare}</p>
            <p>Foreign Relations: ${SAVE.foreignRelations}</p>
            <p>Military Strength: ${SAVE.militaryStrength}</p>
            <h2>Crisis Risk</h2>
        `;

        SAVE.crisis.map(c => {
            // make progress bars
            const barContainer = document.createElement("div");
            barContainer.classList.add("progress-bar-container");
            uiElement.appendChild(barContainer);

            const bar = document.createElement("div");
            bar.classList.add("progress-bar");
            
            let score = 0;
            switch (c) {
                case "famine":
                    score = SAVE.welfare;
                    break;
                case "war":
                    score = SAVE.foreignRelations;
                    break;
                case "demons":
                    score = SAVE.militaryStrength;
                    break;
            }
            if (score < 5) bar.classList.add("fail");
            if (score >= 5) bar.classList.add("pass");
            if (score >= 10) bar.classList.add("victory");

            barContainer.innerHTML = `<p>${c}: ${score*10}%</p>`;
            barContainer.appendChild(bar);
            bar.style.width = `${score * 10}%`;
        
        }).join("")
    }

    promptAction() {
        // hide the action details menu
        this.actionDetailsMenu.classList.remove("active");

        // show the choose action menu
        this.chooseActionMenu.classList.add("active");

        if (SAVE.week <= 10) {
            // Do nothing
        } else {
            TransitionMenu.showEnding();
        }
    }

    chooseAction(action) {
        this.chosenAction = Actions[action];

        // hide the choose action menu
        this.chooseActionMenu.classList.remove("active");

        // show the action details menu
        this.actionDetailsMenu.classList.add("active");
        this.actionDetailsMenu.innerHTML = ``;

        // TODO: typewriter effect
        // create an array of the text for each element
        // create an array for the elements to be written to

        const text = [];
        const elements = [];

        text.push(this.chosenAction.name);
        elements.push(document.createElement("h2"));

        text.push(this.chosenAction.outcome());
        elements.push(document.createElement("p"));
        this.updateUI();

        text.push("");
        elements.push(document.createElement("hr"));

        // TODO: make a method that prevents repeating events
        // this.randomEvent = Actions[action].randomEvents[Math.floor(Math.random() * Actions[action].randomEvents.length)];
        this.randomEvent = this.chosenAction.randomEvents[0];
        text.push(this.randomEvent.name);
        elements.push(document.createElement("h2"));

        text.push(this.randomEvent.text());
        elements.push(document.createElement("p"));

        text.push("");
        elements.push(document.createElement("hr"));

        text.push("Choices");
        elements.push(document.createElement("h2"));

        const choices = Object.keys(this.randomEvent.choices);
        choices.forEach(choice => {
            text.push(this.randomEvent.choices[choice]);
            const button = document.createElement("button");
            button.onclick = () => this.chooseActionChoice(choice);
            elements.push(button);
        });

        this.typeWriterEffect(text, elements);
    }

    chooseActionChoice(choice) {
        // disables all the buttons in the action details menu
        const buttons = this.actionDetailsMenu.getElementsByTagName("button");
        for (let button of buttons) { button.disabled = true; }

        // adds "selected" to the button that was clicked
        const selectedButton = this.actionDetailsMenu.querySelectorAll(`button`)[choice-1];
        selectedButton.classList.add("selected");

        const text = [];
        const elements = [];

        text.push("");
        elements.push(document.createElement("hr"));

        text.push(this.randomEvent.choices[choice]);
        elements.push(document.createElement("h2"));

        text.push(this.randomEvent.outcome(parseInt(choice)));
        elements.push(document.createElement("p"));
        this.updateUI();

        text.push("");
        elements.push(document.createElement("hr"));

        text.push("End Week");
        const endWeekButton = document.createElement("button");
        endWeekButton.onclick = () => {
            SAVE.week += 1;
            this.promptAction();
        }
        elements.push(endWeekButton);

        this.typeWriterEffect(text, elements);
    }


    typeWriterEffect(strings, elements) {
        // Create a function to type out each string
        function typeString(string, container, callback) {
            let index = 0;
            const interval = setInterval(() => {
                if (index < string.length) {
                    container.textContent += string[index];
                    index++;
                } else {
                    clearInterval(interval);
                    callback(); // Call the callback after finishing
                }
            }, 10); // Delay between letters (adjust as needed)
        }
    
        // Iterate over the strings array and write them
        function writeStrings(index) {
            if (index >= strings.length) return;
    
            GameScreen.actionDetailsMenu.appendChild(elements[index]); // Add a new div for the string
    
            typeString(strings[index], elements[index], () => writeStrings(index + 1));
        }
    
        // Start the writing process
        writeStrings(0);
    }
}

const GameScreen = new GameScreenClass();