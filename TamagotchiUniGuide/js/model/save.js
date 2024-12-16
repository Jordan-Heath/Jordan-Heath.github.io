const SAVE = {
    acquiredTamas: [],
    acquiredDLCTamas: [],
    acquiredPets: [],
    acquiredCareIcons: [],
    tamaSelected: "Egg",
    renderedParentGenerations: 5,
    renderedChildrenGenerations: 1,
    filterSpecials: false,
    showEvolutionRequirement: true,
    openedPage: 'home',
    evolutionChartzoom: 100,
    selectedDLC: 'Very Berry Land'
}

function saveToLocalStorage() {
    localStorage.setItem('tamagotchiUniGuideSave', JSON.stringify(SAVE));
}

function loadFromLocalStorage() {
    if (localStorage.getItem('tamagotchiUniGuideSave')) {
        const saveData = JSON.parse(localStorage.getItem('tamagotchiUniGuideSave'));

        SAVE.acquiredTamas = saveData.acquiredTamas || [];
        SAVE.acquiredDLCTamas = saveData.acquiredDLCTamas || [];
        SAVE.acquiredPets = saveData.acquiredPets || [];
        SAVE.acquiredCareIcons = saveData.acquiredCareIcons || [];
        SAVE.tamaSelected = saveData.tamaSelected || "Egg";
        SAVE.renderedParentGenerations = saveData.renderedParentGenerations || 5;
        SAVE.renderedChildrenGenerations = saveData.renderedChildrenGenerations || 1;
        SAVE.filterSpecials = saveData.filterSpecials || false;
        SAVE.showEvolutionRequirement = saveData.showEvolutionRequirement || true;
        SAVE.openedPage = saveData.openedPage || 'home';
        SAVE.evolutionChartzoom = saveData.evolutionChartzoom || 100;
        SAVE.selectedDLC = saveData.selectedDLC || 'Very Berry Land';
    }
}

function deleteFromLocalStorage() {
    localStorage.removeItem('tamagotchiUniGuideSave');
}

function exportSave() {
    const blob = new Blob([JSON.stringify(SAVE)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tamagotchiUniGuideSave.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importSave() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = () => {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const data = JSON.parse(reader.result);
            Object.assign(SAVE, data);
            saveToLocalStorage();
            location.reload(true);
        };
        reader.readAsText(file);
    };
    input.click();
}