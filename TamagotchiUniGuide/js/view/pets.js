const petsElement = document.getElementById('pets');
const navButtonPets = document.getElementById('nav-button-pets');

let petsRendered = false;

function openPets() {
    SAVE.openedPage = 'pets';
    saveToLocalStorage();

    if (petsElement.style.display == 'none') {
        document.querySelectorAll('section').forEach(section => section.style.display = 'none');
        petsElement.style.display = 'block';
    }

    if (!navButtonPets.classList.contains('active')) {
        document.querySelectorAll('.nav-button').forEach(button => button.classList.remove('active'))
        navButtonPets.classList.add('active')
    }

    if (!petsRendered) renderPets();
}

function renderPets() {
    const petsTableElement = document.createElement('table');

    PETS.forEach(pet => {
        petsTableElement.innerHTML += `
        <tr>
            <th class="${pet.dlc == '' ? 'base' : 'dlc'}" colspan="2">${pet.name}${pet.dlc != '' ? ` (${pet.dlc})` : ''}</th>
            <th><a href="${pet.wikiLink}" target="_blank" rel="noopener noreferrer">Wiki</a></th>
        </tr>
        <tr>
            <th><img src="assets/img/${pet.image}" alt="${pet.name}" /></th>
            <td>${pet.requirement}</td>
            <td>
                <input id="${pet.name}" value="${pet.name}" type="checkbox" onchange="collectPet('${pet.name}')" ${SAVE.acquiredPets.includes(pet.name) ? 'checked' : ''}/>
                <label for="${pet.name}">Collected?</label>
            </td>
        </tr>
        `
    });

    const petsTableContainer = document.getElementById('pets-table-container');
    petsTableContainer.innerHTML = '';
    petsTableContainer.appendChild(petsTableElement);

    petsRendered = true;
}

function collectPet(petName) {
    if (SAVE.acquiredPets.includes(petName)) {
        const index = SAVE.acquiredPets.indexOf(petName);
        SAVE.acquiredPets.splice(index, 1);
    } else {
        SAVE.acquiredPets.push(petName);
    }
    saveToLocalStorage();
}