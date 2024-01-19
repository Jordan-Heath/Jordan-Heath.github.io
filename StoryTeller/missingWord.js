class Story {
    constructor(id) {
        this.id = id;
        this.type = "Noun"; //remove number from id, and make sentence case for "type"
        this.value = ""; //what this will be replaced with in the output
    }

    displayStory() {
        return `<h2>${this.name}</h2><p><strong>Theme:</strong> ${this.theme}</p><p>${this.story}</p>`;
    }
};