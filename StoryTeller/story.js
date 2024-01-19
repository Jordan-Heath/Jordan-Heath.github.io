class Story {
    constructor(name, theme, story) {
        this.name = name;
        this.theme = theme;
        this.story = story;

        if (this.story !== undefined)
        {
            this.missingWords = this.findMissingWords();
        }
    }

    displayStory() {
        //var printableStory = `${this.name}\n `;
        var printableStory = this.story;
        
        //replace placeholder text with inputted values
        this.missingWords.forEach(missingWord => {
            if (missingWord.value.length === 0) {
                missingWord.value = "Whoops";
            }
            var regex = new RegExp(missingWord.id, 'g');
            printableStory = printableStory.replace(regex, missingWord.value.toUpperCase());
        });

        return printableStory;
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