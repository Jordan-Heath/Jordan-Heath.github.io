const evolutionChartElement = document.getElementById('evolution-chart');
const evolutionChartContainerElement = document.getElementById('evolution-chart-container');

const navButtonEvolutionChart = document.getElementById('nav-button-evolution-chart');

function openEvolutionChart() {
    SAVE.openedPage = 'evolution-chart';
    saveToLocalStorage();
    
    if (evolutionChartElement.style.display == 'none') {
        document.querySelectorAll('section').forEach(section => section.style.display = 'none');
        evolutionChartElement.style.display = 'flex';
    }

    if (!navButtonEvolutionChart.classList.contains('active')) {
        document.querySelectorAll('.nav-button').forEach(button => button.classList.remove('active'));
        navButtonEvolutionChart.classList.add('active');
    }

    renderTama();
}

function renderTama() {
    evolutionChartContainerElement.innerHTML = '';

    const selectedTama = TAMAS.find(tama => tama.name == SAVE.tamaSelected);
    
    const tamaContainer = document.createElement('div');
    tamaContainer.className = "tama-container";
    evolutionChartContainerElement.appendChild(tamaContainer);

    // above the tama, show parents
    if (selectedTama.evolvesFrom.length > 0) {
        renderParents(selectedTama, tamaContainer);

        // tamaContainer.appendChild(buildArrow("↑"));
        if (SAVE.showEvolutionRequirement) tamaContainer.appendChild(buildEvolutionRequirement(selectedTama));
        tamaContainer.appendChild(buildArrow("↓"));
    }

    // show tama
    const tamaDiv = selectedTama.renderEvolutionDiv();
    tamaDiv.classList.add('selected');
    tamaContainer.appendChild(tamaDiv);

    // below the tama, show children
    if (selectedTama.evolvesTo.length > 0) {
        tamaContainer.appendChild(buildArrow("↓"));

        renderChildren(selectedTama, tamaContainer);
    }

    //scroll to center tamaDiv
    tamaDiv.scrollIntoView({ behavior: 'smooth', inline: 'center' });
}

function renderParents(childTama, parentElement, level = 0) {
    if (level == SAVE.renderedParentGenerations) return;

    const tamaEvolvesFrom = document.createElement('div');
    tamaEvolvesFrom.className = `tama-evolves-from ${childTama.evolvesFrom.length > 1 ? 'multiple-evolves-from' : ''}`;
    parentElement.appendChild(tamaEvolvesFrom);

    childTama.evolvesFrom.forEach(evolvesFrom => {
        const tama = TAMAS.find(tama => tama.name == evolvesFrom);
        
        const tamaContainer = document.createElement('div');
        tamaContainer.className = "tama-container";
        tamaEvolvesFrom.appendChild(tamaContainer);

        if (tama.evolvesFrom.length > 0 && level + 1 < SAVE.renderedParentGenerations) {
            renderParents(tama, tamaContainer, level + 1);

            if (SAVE.showEvolutionRequirement) tamaContainer.appendChild(buildEvolutionRequirement(tama));

            // tamaContainer.appendChild(buildArrow("↑"));
            tamaContainer.appendChild(buildArrow("↓"));
        }

        tamaContainer.appendChild(tama.renderEvolutionDiv());
    });
}

function renderChildren(praentTama, parentElement, level = 0) {
    if (level == SAVE.renderedChildrenGenerations) return;

    const tamaEvolvesTo = document.createElement('div');
    tamaEvolvesTo.className = `tama-evolves-to ${praentTama.evolvesTo.length > 1 ? 'multiple-evolves-to' : ''}`;
    parentElement.appendChild(tamaEvolvesTo);

    //render grandchildren
    praentTama.evolvesTo.forEach(evolvesTo => {
        const tama = TAMAS.find(tama => tama.name == evolvesTo);

        if (SAVE.filterSpecials && tama.special == true) return;
        
        const tamaContainer = document.createElement('div');
        tamaContainer.className = "tama-container";
        tamaEvolvesTo.appendChild(tamaContainer);

        if (SAVE.showEvolutionRequirement) tamaContainer.appendChild(buildEvolutionRequirement(tama));
        
        tamaContainer.appendChild(tama.renderEvolutionDiv());

        if (tama.evolvesTo.length > 0 && level + 1 < SAVE.renderedChildrenGenerations) {
            tamaContainer.appendChild(buildArrow("↓"));

            renderChildren(tama, tamaContainer, level + 1);
        }
    });
}

function buildArrow(direction) {
    const arrow = document.createElement('p');
    arrow.className = "arrow";
    arrow.innerHTML = direction;
    return arrow;
}

function buildEvolutionRequirement(tama) {
    if (tama.shortEvolutionRequirement == '') return;

    const requirement = document.createElement('p');
    requirement.className = "evolution-requirement";
    requirement.innerHTML = tama.shortEvolutionRequirement;
    return requirement;
}