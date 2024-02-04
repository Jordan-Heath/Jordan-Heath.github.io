document.addEventListener('DOMContentLoaded', () => {
    const model = new CharacterModel();
    const view = new CharacterView();
    const controller = new CharacterController(model, view);

    const generateButton = document.getElementById('generateButton');

    generateButton.addEventListener('click', () => {
        controller.generateCharacter();
    });

    controller.initialize();
});