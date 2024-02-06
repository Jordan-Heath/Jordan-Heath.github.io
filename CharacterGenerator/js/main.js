async function initialize() {
    await model.loadData();
    generateCharacter();
}

const model = new Model();
const view = new PageView();
initialize();