const careIconsElement = document.getElementById('care-icons');
const navButtonCareIcons = document.getElementById('nav-button-care-icons');

let careIconsRendered = false;

function openCareIcons() {
    SAVE.openedPage = 'care-icons';
    saveToLocalStorage();

    if (careIconsElement.style.display == 'none') {
        document.querySelectorAll('section').forEach(section => section.style.display = 'none');
        careIconsElement.style.display = 'block';
    }

    if (!navButtonCareIcons.classList.contains('active')) {
        document.querySelectorAll('.nav-button').forEach(button => button.classList.remove('active'))
        navButtonCareIcons.classList.add('active')
    }

    if (!careIconsRendered) renderCareIcons();
}
    

function renderCareIcons() {
    const careIconsGridElement = document.getElementById('care-icons-grid-container');
    careIconsGridElement.innerHTML = '';

    const careIcons = CARE_ICONS.map(icon => `
        <div class="care-icon">
            <p><strong>${icon.name}</strong></p>
            <!-- <img src="assets/img/${icon.image}" alt="${icon.name}" /> -->
            <p>${icon.description}</p>
            <div>
                <input type="checkbox" class="care-icon-checkbox" onchange="collectCareIcon('${icon.name}')" id="${icon.name}-care-icon-checkbox" ${SAVE.acquiredCareIcons.includes(icon.name) ? 'checked' : ''}/>
                <label for="${icon.name}-care-icon-checkbox">Got</label>
            </div>
        </div>`).join('');
    careIconsGridElement.innerHTML = careIcons;

    careIconsRendered = true;
}

function collectCareIcon(careIconName) {
    if (SAVE.acquiredCareIcons.includes(careIconName)) {
        SAVE.acquiredCareIcons.splice(SAVE.acquiredCareIcons.indexOf(careIconName), 1);
    } else {
        SAVE.acquiredCareIcons.push(careIconName);
    }
    saveToLocalStorage();
}