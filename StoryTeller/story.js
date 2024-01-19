class Story {
    constructor(name, theme, story) {
        this.name = name;
        this.theme = theme;
        this.story = story;

        this.missingWords = this.findMissingWords();
    }

    displayStory() {
        return `<h2>${this.name}</h2><p><strong>Theme:</strong> ${this.theme}</p><p>${this.story}</p>`;
    }

    findMissingWords() {
        // Regular expression to match words inside triangle brackets
        var regex = /<([^>]+)>/g;

        // Extract words inside triangle brackets
        var matches = this.story.match(regex);

        // Filter out duplicates and return as an array
        matches ? [...new Set(matches)] : [];
    }
};

// Usage example:
//const exampleStory = new Story("enchantedForest", "The Enchanted Forest", "Fantasy", "Once upon a time...");
//console.log(exampleStory.displayStory());