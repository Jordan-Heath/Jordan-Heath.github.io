class MissingWord {
    constructor(id) {
        this.id = id;
        this.type = this.convertIdToType(id);
        this.value = ""; //what this will be replaced with in the output
    }

    convertIdToType(text) {
        // Remove < > tags
        let textWithoutTags = text.slice(1, -1);
        // Convert to sentence case
        let lowerCaseText = textWithoutTags.toLowerCase();
        let sentenceCaseText = lowerCaseText.charAt(0).toUpperCase() + lowerCaseText.slice(1);
        // Remove numbers
        let textWithoutNumbers = sentenceCaseText.replace(/\d+/g, '');
        return textWithoutNumbers;
    }
};