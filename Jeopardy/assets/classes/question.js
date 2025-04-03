class Question {
    constructor(heading, image, paragraph, a, b, c, d, answer, score, answerParagraph) {
        this.heading = heading;
        this.image = image;
        this.paragraph = paragraph;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.answer = answer;
        this.score = score;
        this.answerParagraph = answerParagraph;

        this.completed = false;
    }
}