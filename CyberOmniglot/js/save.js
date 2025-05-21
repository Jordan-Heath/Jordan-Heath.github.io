// Save class to handle saving and loading game data
class Save {
    constructor() {
        this.openedMain = "crewmates",
        this.selectedNPC ="Professor Quill",
        this.unlockedTopics = ["What is going on?"],
        this.askedQuestions = { },
        this.dictionary = { },
        this.settings = {
            textToSpeech: true,
        }
    }

    
    loadFromLocalStorage() {
        const saveData = localStorage.getItem("save");
        if (saveData) {
            const parsedData = JSON.parse(saveData);
            this.openedMain = parsedData.openedMain || this.openedMain;
            this.selectedNPC = parsedData.selectedNPC || this.selectedNPC;
            this.unlockedTopics = parsedData.unlockedTopics || this.unlockedTopics;
            this.askedQuestions = parsedData.askedQuestions || this.askedQuestions;
            this.dictionary = parsedData.dictionary || this.dictionary;
            this.settings = parsedData.settings || this.settings;
        }
    }
    saveToLocalStorage() {
        const saveData = {
            openedMain: this.openedMain,
            selectedNPC: this.selectedNPC,
            unlockedTopics: this.unlockedTopics,
            askedQuestions: this.askedQuestions,
            dictionary: this.dictionary,
            settings: this.settings
        };
        localStorage.setItem("save", JSON.stringify(saveData));
    }
    clearLocalStorage() {
        // ask the user via an alert if they want to clear the local storage
        if (confirm("Are you sure you want to clear the local storage? This will reset your progress.")) {
            localStorage.removeItem("save");
            location.reload();
        }
    }


    setOpenedMain(main) { this.openedMain = main; this.saveToLocalStorage(); }


    setSelectedNPC(npcName) { this.selectedNPC = npcName; this.saveToLocalStorage(); }
    getSelectedNPC() { return data.npcs[this.selectedNPC]; }


    addTopic(topic) {
        if (!this.hasTopic(topic)) {
            this.unlockedTopics.push(topic);
            this.saveToLocalStorage();
            return true;
        }
        return false;
    }
    hasTopic(topic) { return this.unlockedTopics.includes(topic); }


    addAskedQuestion(npc, question) {
        if (this.askedQuestions[npc]) {
            if (!this.askedQuestions[npc].includes(question)) {
                this.askedQuestions[npc].push(question);
                this.saveToLocalStorage();
                return true;
            }
        } else {
            this.askedQuestions[npc] = [question];
        }
        return false;
    }
    hasAskedQuestion(npc, question) {
        if (this.askedQuestions[npc]) {
            return this.askedQuestions[npc].includes(question);
        } else {
            return false;
        }
    }


    parseByDictionary(text) {
        if (this.dictionary[text] && this.dictionary[text].term != null) {
            // if the term is not empty, return the term
            return `<b>${this.dictionary[text].term}</b>`;
        } else {
            return text;
        }
    }
    addtoDictionary(alienName, translation = null, definition = null) {
        // if translation is null, set it to the alienName
        if (this.dictionary[alienName] == undefined) {
            // add to dictionary
            this.dictionary[alienName] = {
                term: translation,
                definition: definition,
            };
        } else {
            if (translation == null && this.dictionary[alienName].term != null)
                translation = this.dictionary[alienName].term;
            if (definition == null && this.dictionary[alienName].definition != null)
                definition = this.dictionary[alienName].definition;

            // update dictionary
            // if translation or definition is empty, keep the old one
            this.dictionary[alienName].term = translation;
            this.dictionary[alienName].definition = definition;
        }

        this.saveToLocalStorage();
    }
}

const save = new Save();