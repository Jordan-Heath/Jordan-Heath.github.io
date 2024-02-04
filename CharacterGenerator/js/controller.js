class CharacterController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    async initialize() {
        await this.model.loadData();
        this.generateCharacter();
    }

    generateCharacter() {
        this.model.generateCharacter();
        this.view.updateCharacterSheet(this.model);
    }
};