class Save {
    constructor() {
        this.playerName = "";
        this.parent = "";
        this.kingdom = "";
        this.enemyKingdoms = [];
        this.lineage = "";

        this.wealth = 0;
        this.welfare = 0;
        this.foreignRelations = 0;
        this.militaryStrength = 0;

        this.crisis = [];
        this.week = 1
    }

    loadFromLocalStorage() {
        const saveData = localStorage.getItem('FantasyDecisionGameSave');
        if (saveData) {
            this.playerName = JSON.parse(saveData).playerName;
            this.parent = JSON.parse(saveData).parent;
            this.kingdom = JSON.parse(saveData).kingdom;
            this.lineage = JSON.parse(saveData).lineage;
            this.wealth = JSON.parse(saveData).wealth;
            this.welfare = JSON.parse(saveData).welfare;
            this.foreignRelations = JSON.parse(saveData).foreignRelations;
            this.militaryStrength = JSON.parse(saveData).militaryStrength;
            this.crisis = JSON.parse(saveData).crisis;
            this.week = JSON.parse(saveData).week
        }
    }

    saveToLocalStorage() {
        const saveData = {
            playerName: this.playerName,
            parent: this.parent,
            kingdom: this.kingdom,
            lineage: this.lineage,
            wealth: this.wealth,
            welfare: this.welfare,
            foreignRelations: this.foreignRelations,
            militaryStrength: this.militaryStrength,
            crisis: this.crisis,
            week: this.week
        };
        localStorage.setItem('FantasyDecisionGameSave', JSON.stringify(saveData));
    }

    buildFromForm(formElement) {
        // take the form data, and set the values in the SAVE object

        // text input of player name
        this.playerName = formElement.querySelector('input[name="player-name"]').value

        // selector for player kingdom race - human, dwarf, elf
        this.kingdom = formElement.querySelector('select[name="kingdom"]').value
        this.enemyKingdoms = [];
        if (this.kingdom === "human") {
            this.enemyKingdoms.push("dwarf");
            this.enemyKingdoms.push("elf");
        } else if (this.kingdom === "dwarf") {
            this.enemyKingdoms.push("human");
            this.enemyKingdoms.push("elf");
        } else {
            this.enemyKingdoms.push("human");
            this.enemyKingdoms.push("dwarf");
        }

        // selector for player kingdom lineage - matriarchal, patriarchal, either
        const lineage = formElement.querySelector('select[name="lineage"]').value
        if (lineage === "matriarchal") {
            this.lineage = "matriarchal";
            this.parent = "mother";
        } else if (lineage === "patriarchal") {
            this.lineage = "patriarchal";
            this.parent = "father";
        } else {
            this.lineage = "either";
            this.parent = Math.random() > 0.5 ? "mother" : "father";
        }

        // selector for player wealth - easy, medium, hard
        this.wealth = parseInt(formElement.querySelector('select[name="wealth"]').value);


        // selector for player welfare - easy, medium, hard
        this.welfare = parseInt(formElement.querySelector('select[name="welfare"]').value);
        
        // selector for player foreign relations - easy, medium, hard
        this.foreignRelations = parseInt(formElement.querySelector('select[name="foreign-relations"]').value);

        // selector for player military strength - easy, medium, hard
        this.militaryStrength = parseInt(formElement.querySelector('select[name="military-strength"]').value);
        

        // checkboxes for threats - famine, war, demons
        this.crisis = [];
        if (formElement.querySelector('input[name="famine"]').checked) {
            this.crisis.push("famine");
        }
        if (formElement.querySelector('input[name="war"]').checked) {
            this.crisis.push("war");
        }
        if (formElement.querySelector('input[name="demons"]').checked) {
            this.crisis.push("demons");
        }
    }

    isVictory(specificCondition = null) {
        if (specificCondition) {
            const victories = {
                famine: () => this.crisis.includes("famine") && this.welfare >= 10,
                war: () => this.crisis.includes("war") && this.foreignRelations >= 10,
                demons: () => this.crisis.includes("demons") && this.militaryStrength >= 10,
            };
            return victories[specificCondition]();
        }

        return !this.crisis.some(c => {
            switch (c) {
                case "famine":
                    return this.welfare < 10;
                case "war":
                    return this.foreignRelations < 10;
                case "demons":
                    return this.militaryStrength < 10;
                default:
                    return false;
            }
        });
    }

    isPass(specificCondition = null) {
        if (specificCondition) {
            const passes = {
                famine: () => this.crisis.includes("famine") && this.welfare >= 5,
                war: () => this.crisis.includes("war") && this.foreignRelations >= 5,
                demons: () => this.crisis.includes("demons") && this.militaryStrength >= 5,
            };
            return passes[specificCondition]();
        }

        return !this.crisis.some(c => {
            switch (c) {
                case "famine":
                    return this.welfare < 5;
                case "war":
                    return this.foreignRelations < 5;
                case "demons":
                    return this.militaryStrength < 5;
                default:
                    return false;
            }
        })
    }
}

const SAVE = new Save();