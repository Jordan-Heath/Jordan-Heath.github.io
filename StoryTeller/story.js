class Story {
    constructor(name, theme, story) {
        this.name = name;
        this.theme = theme;
        this.story = story;
    }

    displayStory() {
        return `<h2>${this.name}</h2><p><strong>Theme:</strong> ${this.theme}</p><p>${this.story}</p>`;
    }
};

// Usage example:
//const exampleStory = new Story("enchantedForest", "The Enchanted Forest", "Fantasy", "Once upon a time...");
//console.log(exampleStory.displayStory());