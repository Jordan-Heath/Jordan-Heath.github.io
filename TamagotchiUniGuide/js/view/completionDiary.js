const completionDiaryElement = document.getElementById('completion-diary');
const navButtonCompletionDiary = document.getElementById('nav-button-completion-diary');

let completionDiaryRendered = false;

function openCompletionDiary() {
    SAVE.openedPage = 'completion-diary';
    saveToLocalStorage();

    if (completionDiaryElement.style.display == 'none') {
        document.querySelectorAll('section').forEach(section => section.style.display = 'none');
        completionDiaryElement.style.display = 'block';
    }

    if (!navButtonCompletionDiary.classList.contains('active')) {
        document.querySelectorAll('.nav-button').forEach(button => button.classList.remove('active'));
        navButtonCompletionDiary.classList.add('active');
    }

    if (!completionDiaryRendered) renderCompletionDiary();

    filterCompletionDiary();
}

function renderCompletionDiary() {
    // add tama elements
    const eggContainerElement = document.getElementById('egg-container');
    TAMAS.forEach(tama => {
        if (tama.stage == 'Egg') eggContainerElement.appendChild(tama.renderCompletionDiv());
    })

    const babyContainerElement = document.getElementById('baby-container');
    TAMAS.forEach(tama => {
        if (tama.stage == 'Baby') babyContainerElement.appendChild(tama.renderCompletionDiv());
    })

    const childContainerElement = document.getElementById('child-container');
    TAMAS.forEach(tama => {
        if (tama.stage == 'Child') childContainerElement.appendChild(tama.renderCompletionDiv());
    })

    const teenagerContainerElement = document.getElementById('teenager-container');
    TAMAS.forEach(tama => {
        if (tama.stage == 'Teenager') teenagerContainerElement.appendChild(tama.renderCompletionDiv());
    })

    const adultContainerElement = document.getElementById('adult-container');
    TAMAS.forEach(tama => {
        if (tama.stage == 'Adult') adultContainerElement.appendChild(tama.renderCompletionDiv());
    })

    completionDiaryRendered = true;
}

function filterCompletionDiary() {
    //filter stage
    const tamaGridHeadings = completionDiaryElement.querySelectorAll('.tama-grid-heading');
    const tamaGrids = completionDiaryElement.querySelectorAll('.tama-grid');
    const filterStage = document.getElementById('filter-stages').value; // All, Egg, Baby, Child, Teenager, Adult
    if (filterStage != 'All') {
        tamaGridHeadings.forEach(tamaGridHeading => tamaGridHeading.classList.add('hidden'));
        tamaGrids.forEach(tamaGrid => tamaGrid.classList.add('hidden'));

        const selectedGridHeading = document.getElementById(`${filterStage.toLowerCase()}-container-heading`); // egg-container-heading, baby-container-heading, child-container-heading, teenager-container-heading, adult-container-heading
        selectedGridHeading.classList.remove('hidden');

        const selectedGrid = document.getElementById(`${filterStage.toLowerCase()}-container`); // egg-container, baby-container, child-container, teenager-container, adult-container
        selectedGrid.classList.remove('hidden');
    } else {
        tamaGridHeadings.forEach(tamaGridHeading => tamaGridHeading.classList.remove('hidden'));
        tamaGrids.forEach(tamaGrid => tamaGrid.classList.remove('hidden'));
    }


    //filter gender
    const filterGender = document.getElementById('filter-gender').value; // All, Male, Female

    const showedTamas = TAMAS.map(tama => {
        if (filterGender !== 'All' && tama.sex == filterGender) return;
        else return tama.name
    });

    completionDiaryElement.querySelectorAll('.tama').forEach(tamaElement => {
        if (!showedTamas.includes(tamaElement.dataset.name)) tamaElement.classList.add('hidden');
        else tamaElement.classList.remove('hidden');
    });
}