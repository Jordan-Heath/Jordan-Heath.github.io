const dlcCharactersElement = document.getElementById('dlc-characters');
const navButtonDLCCharacters = document.getElementById('nav-button-dlc-characters');

const dlcCharactersTableContainerElement = document.getElementById('dlc-characters-table-container');
const dlcCharactersTableHeadingElement = document.getElementById('dlc-characters-table-heading');
const dlcCharactersTableElement = document.getElementById('dlc-characters-table');

function openDLCCharacters() {
    SAVE.openedPage = 'dlc-characters';
    saveToLocalStorage();

    if (dlcCharactersElement.style.display == 'none') {
        document.querySelectorAll('section').forEach(section => section.style.display = 'none');
        dlcCharactersElement.style.display = 'block';
    }

    if (!navButtonDLCCharacters.classList.contains('active')) {
        document.querySelectorAll('.nav-button').forEach(button => button.classList.remove('active'));
        navButtonDLCCharacters.classList.add('active');
    }

    renderDLCCharacters();
}

function renderDLCCharacters() {
    document.querySelectorAll('.dlc-button').forEach(button => button.classList.remove('active'));
    switch (SAVE.selectedDLC) {
        case 'Very Berry Land': document.getElementById('dlc-button-very-berry-land').classList.add('active'); break;
        case 'LoveMelo Concert': document.getElementById('dlc-button-lovemelo-concert').classList.add('active'); break;
        case 'Tamamori Fashion Show': document.getElementById('dlc-button-tamamori-fashion-show').classList.add('active'); break;
        case 'Angel Festival': document.getElementById('dlc-button-angel-festival').classList.add('active'); break;
        case 'Monster Carnival': document.getElementById('dlc-button-monster-carnival').classList.add('active'); break;
        case 'Sanrio Characters': document.getElementById('dlc-button-sanrio-characters').classList.add('active'); break;
        case 'Fairy Tale Library': document.getElementById('dlc-button-fairy-tale-library').classList.add('active'); break;
        case 'PokoPea Land': document.getElementById('dlc-button-pokopea-land').classList.add('active'); break;
    }

    dlcCharactersTableElement.innerHTML = '';

    const selectedDlcCharacters = DLC_TAMAS.filter(dlcTama => dlcTama.dlc == SAVE.selectedDLC);

    dlcCharactersTableElement.innerHTML += `
        <thead>
            <tr>
                <th colspan="4"><h2 onclick="window.open('${DLCs.find(dlc => dlc.name == SAVE.selectedDLC).wikiLink}', '_blank')">${SAVE.selectedDLC}</h2></th>
            </tr>
            <tr>
                <th>Name</th>
                <th colspan="2">Evolution Requirement</th>
                <th>Collect</th>
            </tr>
        </thead>
    `;

    selectedDlcCharacters.forEach(dlcTama => {
        dlcCharactersTableElement.innerHTML += dlcTama.renderTableRows();
    });

    // dlcCharactersTableElement.innerHTML = tablehtml;
}

function selectDLC(dlc) {
    SAVE.selectedDLC = dlc;
    saveToLocalStorage();
    renderDLCCharacters();
}

function collectDLCTama(name) {
    if (SAVE.acquiredDLCTamas.includes(name)) {
        // remove it
        const index = SAVE.acquiredDLCTamas.indexOf(name);
        SAVE.acquiredDLCTamas.splice(index, 1);
    } else {
        // add it
        SAVE.acquiredDLCTamas.push(name);
    }

    saveToLocalStorage();
    renderDLCCharacters();
}