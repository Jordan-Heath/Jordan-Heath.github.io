document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();

    attachEventListeners();

    switch (SAVE.openedPage) {
        case 'home': openHome(); break;
        case 'evolution-chart': openEvolutionChart(); break;
        case 'completion-diary':  openCompletionDiary(); break;
        case 'dlc-characters': openDLCCharacters(); break;
        case 'likes-dislikes': openLikesDislikes(); break;
        case 'pets': openPets(); break;
        case 'badges': openBadges(); break;
    }
});

function attachEventListeners() {
    //nav buttons
    const nav = document.querySelector('nav');
    const navOpenButton = document.getElementById('nav-open-button');
    const navButtonHome = document.getElementById('nav-button-home');
    const navButtonEvolutionChart = document.getElementById('nav-button-evolution-chart');
    const navButtonCompletionDiary = document.getElementById('nav-button-completion-diary');
    const navButtonDLCCharacters = document.getElementById('nav-button-dlc-characters');
    const navButtonLikesDislikes = document.getElementById('nav-button-likes-dislikes');
    const navButtonPets = document.getElementById('nav-button-pets');
    const navButtonBadges = document.getElementById('nav-button-badges');

    navOpenButton.addEventListener('click', () => {
        navOpenButton.classList.toggle('active');
        nav.classList.toggle('active');
    });

    navButtonHome.addEventListener('click', openHome);
    navButtonEvolutionChart.addEventListener('click', openEvolutionChart);
    navButtonCompletionDiary.addEventListener('click', openCompletionDiary);
    navButtonDLCCharacters.addEventListener('click', openDLCCharacters);
    navButtonLikesDislikes.addEventListener('click', openLikesDislikes);
    navButtonPets.addEventListener('click', openPets);
    navButtonBadges.addEventListener('click', openBadges);

    // Completion Diary
    const filterStagesElement = document.getElementById('filter-stages');
    const filterGenderElement = document.getElementById('filter-gender');

    filterStagesElement.addEventListener('change', () => {
        filterCompletionDiary();
    });
    
    filterGenderElement.addEventListener('change', () => {
        filterCompletionDiary();
    });

    // Evolution guide
    const evolutionChartFilterSpecialsCheckbox = document.getElementById('evolution-chart-filter-specials-checkbox');
    const evolutionChartShowEvolutionRequirementCheckbox = document.getElementById('evolution-chart-show-evolution-requirement-checkbox');
    const evolutionChartRenderedParentGenerationsRange = document.getElementById('evolution-chart-rendered-parent-generations-range');
    const evolutionChartRenderedParentGenerationsValue = document.getElementById('evolution-chart-rendered-parents-generations-value');
    const evolutionChartRenderedChildrenGenerationsRange = document.getElementById('evolution-chart-rendered-children-generations-range');
    const evolutionChartRenderedChildrenGenerationsValue = document.getElementById('evolution-chart-rendered-children-generations-value');
    const evolutionChartZoomRange = document.getElementById('evolution-chart-zoom-range');
    const evolutionChartZoomValue = document.getElementById('evolution-chart-zoom-value');
    const evolutionChartContainerElement = document.getElementById('evolution-chart-container');

    evolutionChartFilterSpecialsCheckbox.checked = SAVE.filterSpecials;
    evolutionChartFilterSpecialsCheckbox.addEventListener('change', () => {
        SAVE.filterSpecials = evolutionChartFilterSpecialsCheckbox.checked;
        saveToLocalStorage();

        renderTama();
    });

    evolutionChartShowEvolutionRequirementCheckbox.checked = SAVE.showEvolutionRequirement;
    evolutionChartShowEvolutionRequirementCheckbox.addEventListener('change', () => {
        SAVE.showEvolutionRequirement = evolutionChartShowEvolutionRequirementCheckbox.checked;
        saveToLocalStorage();

        renderTama();
    });

    evolutionChartRenderedParentGenerationsRange.value = SAVE.renderedParentGenerations;
    evolutionChartRenderedParentGenerationsValue.innerHTML = SAVE.renderedParentGenerations;
    evolutionChartRenderedParentGenerationsRange.addEventListener('input', () => {
        SAVE.renderedParentGenerations = Number(evolutionChartRenderedParentGenerationsRange.value);
        evolutionChartRenderedParentGenerationsValue.innerHTML = SAVE.renderedParentGenerations;
        saveToLocalStorage();
    
        renderTama();
    });

    evolutionChartRenderedChildrenGenerationsRange.value = SAVE.renderedChildrenGenerations;
    evolutionChartRenderedChildrenGenerationsValue.innerHTML = SAVE.renderedChildrenGenerations;
    evolutionChartRenderedChildrenGenerationsRange.addEventListener('input', () => {
        SAVE.renderedChildrenGenerations = Number(evolutionChartRenderedChildrenGenerationsRange.value);
        evolutionChartRenderedChildrenGenerationsValue.innerHTML = SAVE.renderedChildrenGenerations;
        saveToLocalStorage();
    
        renderTama();
    });

    evolutionChartZoomRange.value = SAVE.evolutionChartzoom;
    evolutionChartZoomValue.innerHTML = `${SAVE.evolutionChartzoom}%`;
    evolutionChartContainerElement.style.zoom = `${SAVE.evolutionChartzoom}%`;
    evolutionChartZoomRange.addEventListener('input', () => {
        SAVE.evolutionChartzoom = Number(evolutionChartZoomRange.value);
        evolutionChartZoomValue.innerHTML = `${SAVE.evolutionChartzoom}%`;

        saveToLocalStorage();

        evolutionChartContainerElement.style.zoom = `${SAVE.evolutionChartzoom}%`;
        renderTama();
    });


    // DLC characters
    const DLCButtonVeryBerryLand = document.getElementById('dlc-button-very-berry-land');
    const DLCButtonLovemeloConcert = document.getElementById('dlc-button-lovemelo-concert');
    const DLCButtonTamamoriFashionShow = document.getElementById('dlc-button-tamamori-fashion-show');
    const DLCButtonAngelFestival = document.getElementById('dlc-button-angel-festival');
    const DLCButtonMonsterCarnival = document.getElementById('dlc-button-monster-carnival');
    const DLCButtonSanrioCharacters = document.getElementById('dlc-button-sanrio-characters');
    const DLCButtonFairyTaleLibrary = document.getElementById('dlc-button-fairy-tale-library');
    const DLCButtonPokoPeaLand = document.getElementById('dlc-button-pokopea-land');

    DLCButtonVeryBerryLand.addEventListener('click', () => selectDLC('Very Berry Land'));
    DLCButtonLovemeloConcert.addEventListener('click', () => selectDLC('LoveMelo Concert'));
    DLCButtonTamamoriFashionShow.addEventListener('click', () => selectDLC('Tamamori Fashion Show'));
    DLCButtonAngelFestival.addEventListener('click', () => selectDLC('Angel Festival'));
    DLCButtonMonsterCarnival.addEventListener('click', () => selectDLC('Monster Carnival'));
    DLCButtonSanrioCharacters.addEventListener('click', () => selectDLC('Sanrio Characters'));
    DLCButtonFairyTaleLibrary.addEventListener('click', () => selectDLC('Fairy Tale Library'));
    DLCButtonPokoPeaLand.addEventListener('click', () => selectDLC('PokoPea Land'));
}