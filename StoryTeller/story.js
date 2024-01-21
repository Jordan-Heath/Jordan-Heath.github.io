class Story {
    constructor(name, theme, story) {
        this.name = name;
        this.theme = theme;
        this.story = story;
        this.completeStory = null;
        this.missingWords = this.findMissingWords();
    }

    populateMissingWords() {
        this.missingWords.forEach(missingWord => {
            var input = document.getElementById(`${missingWord.id}input`);
            missingWord.value = input.value;
        });
    }

    replacePlaceholderWithValue(completeStory, missingWord) {
        if (missingWord.value.length === 0) {
            missingWord.value = missingWord.type;
        }
        const regex = new RegExp(missingWord.id, 'g');
        return completeStory.replace(regex, missingWord.value.toUpperCase());
    }

    composeStory() {
        this.populateMissingWords();

        let completeStory = this.story;

        // Replace placeholder text with inputted values
        this.missingWords.forEach(missingWord => {
            completeStory = this.replacePlaceholderWithValue(completeStory, missingWord);
        });

        this.completeStory = completeStory;
    }

    findMissingWords() {
        const regex = /<([^>]+)>/g;
        const rawMatches = this.story.match(regex);
        const matches = rawMatches ? [...new Set(rawMatches)] : [];

        return matches.map(missingWord => new MissingWord(missingWord));
    }
}
