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
        if (confirm("Are you sure you want to delete your saved data? This cannot be undone.")) {
            localStorage.removeItem("save");
            location.reload();
        }
    }


    setOpenedMain(main) { this.openedMain = main; this.saveToLocalStorage(); }


    setSelectedNPC(npcName) { this.selectedNPC = npcName; this.saveToLocalStorage(); return this.getSelectedNpc(); }
    getSelectedNpc() { return data.npcs[this.selectedNPC]; }


    addTopic(topic) {
        if (!this.hasTopic(topic)) {
            this.unlockedTopics.push(topic);
            this.saveToLocalStorage();

            // if the topic is a dictionary entry, add it to the dictionary
            const dictionaryEntry = data.dictionary[topic];
            if (dictionaryEntry) {
                this.addDictionaryEntry(topic);
            }

            return true;
        }
        return false;
    }
    hasTopic(topic) { return this.unlockedTopics.includes(topic); }


    addAskedQuestion(npcName, questionText) {
        if (!this.askedQuestions[npcName]) {
            this.askedQuestions[npcName] = [];
        }
        
        if (!this.askedQuestions[npcName].includes(questionText)) {
            this.askedQuestions[npcName].push(questionText);
            this.saveToLocalStorage();
            return true;
        }
        
        return false;
    }
    hasAskedQuestion(npcName, questionText) {
        return this.askedQuestions[npcName]?.includes(questionText) ?? false;
    }


    parseTextByDictionary(text) {
        const dictionaryEntry = this.dictionary[text];

        if (dictionaryEntry && dictionaryEntry.term) {
            return `<b>${dictionaryEntry.term}</b>`;
        }

        return text;
    }
    addDictionaryEntry(alienName, term = null, definition = null) {
        const existingEntry = this.dictionary[alienName];

        if (existingEntry) {
            if (term !== null && term !== "") {
                existingEntry.term = term;
            }

            if (definition !== null && definition !== "") {
                existingEntry.definition = definition;
            }
        } else {
            this.dictionary[alienName] = {
                "term": term,
                "definition": definition,
                locked: false,
            };
        }

        updateDictionaryProgressBar();
        this.saveToLocalStorage();
    }
}

const save = new Save();