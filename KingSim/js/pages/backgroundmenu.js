class BackgroundMenuClass {
    constructor() {
        this.element = document.getElementById("background-entry-screen");
    }

    show() {
        MainMenu.hide();
        this.element.classList.add("active");
        TransitionMenu.hide();
        GameScreen.hide();

        this.build();
    }

    hide() {
        this.element.classList.remove("active");
    }

    build() {
        this.element.innerHTML = "";

        const formElement = document.createElement("form");
        formElement.id = "background-entry-form";
        formElement.innerHTML = `
            <h2>Background</h2>
            <h3>Player Details</h3>
            <div>
                <label for="player-name">Player Name:</label>
                <input type="text" id="player-name" name="player-name">
            </div>
            <div>
                <label for="kingdom">Kingdom:</label>
                <select id="kingdom" name="kingdom">
                    <option value="human">Human</option>
                    <option value="dwarf">Dwarf</option>
                    <option value="elf">Elf</option>
                </select>
            </div>
            <div>
                <label for="lineage">Lineage:</label>
                <select id="lineage" name="lineage">
                    <option value="either">Either</option>
                    <option value="matriarchal">Matriarchal</option>
                    <option value="patriarchal">Patriarchal</option>
                </select>
            </div>
            <h3>Difficulty Settings</h3>
            <div>
                <label for="wealth">Wealth:</label>
                <select id="wealth" name="wealth">
                    <option value="2">Easy</option>
                    <option value="1">Medium</option>
                    <option value="0">Hard</option>
                </select>
            </div>
            <div>
                <label for="welfare">Welfare:</label>
                <select id="welfare" name="welfare">
                    <option value="2">Easy</option>
                    <option value="1">Medium</option>
                    <option value="0">Hard</option>
                </select>
            </div>
            <div>
                <label for="foreign-relations">Foreign Relations:</label>
                <select id="foreign-relations" name="foreign-relations">
                    <option value="2">Easy</option>
                    <option value="1">Medium</option>
                    <option value="0">Hard</option>
                </select>
            </div>
            <div>
                <label for="military-strength">Military Strength:</label>
                <select id="military-strength" name="military-strength">
                    <option value="2">Easy</option>
                    <option value="1">Medium</option>
                    <option value="0">Hard</option>
                </select>
            </div>
            <h3>Challenges</h3>
            <div>
                <label for="famine">Famine:</label>
                <input type="checkbox" id="famine" name="famine" checked>
            </div>
            <div>
                <label for="war">War:</label>
                <input type="checkbox" id="war" name="war" checked>
            </div>
            <div>
                <label for="demons">Demons:</label>
                <input type="checkbox" id="demons" name="demons" checked>
            </div>
            <button type="button" onclick="BackgroundMenu.submitForm()">Start Game</button>
        `;
        
        this.element.appendChild(formElement);
    }

    submitForm() {
        const formElement = document.getElementById("background-entry-form");
        SAVE.buildFromForm(formElement);
        BackgroundMenu.hide();
        TransitionMenu.showIntro();
    }
}

const BackgroundMenu = new BackgroundMenuClass();