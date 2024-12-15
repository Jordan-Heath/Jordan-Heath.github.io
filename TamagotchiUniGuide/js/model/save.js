const SAVE = {
    acquiredTamas: [],
    acquiredDLCTamas: [],
    acquiredBadges: [],
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
        Object.assign(SAVE, JSON.parse(localStorage.getItem('tamagotchiUniGuideSave')));
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