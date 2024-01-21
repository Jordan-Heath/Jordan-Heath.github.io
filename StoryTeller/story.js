class Story {
    constructor(name, theme, story) {
        this.name = name;
        this.theme = theme;
        this.story = story;
        this.completeStory;
        if (this.story !== undefined) this.missingWords = this.findMissingWords();
    }

    composeStory() {
        //var printableStory = `${this.name}\n `;
        var completeStory = this.story;
        
        //replace placeholder text with inputted values
        this.missingWords.forEach(missingWord => {
            if (missingWord.value.length === 0) {
                missingWord.value = missingWord.type;
            }
            var regex = new RegExp(missingWord.id, 'g');
            completeStory = completeStory.replace(regex, missingWord.value.toUpperCase());
        });

        this.completeStory = completeStory;
        return completeStory;
    }

    findMissingWords() {
        // Regular expression to match words inside triangle brackets
        var regex = /<([^>]+)>/g;

        // Extract words inside triangle brackets
        var rawmatches = this.story.match(regex);

        // Filter out duplicates and return as an array
        var matches = rawmatches ? [...new Set(rawmatches)] : [];

        var missingWords = [];
        matches.forEach(missingWord => {
            missingWords.push(new MissingWord(missingWord))
        });
        return missingWords;
    }
};