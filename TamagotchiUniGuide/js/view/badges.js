const badgesElement = document.getElementById('badges');
const navButtonBadges = document.getElementById('nav-button-badges');

function openBadges() {
    SAVE.openedPage = 'badges';
    saveToLocalStorage();

    if (badgesElement.style.display == 'none') {
        document.querySelectorAll('section').forEach(section => section.style.display = 'none');
        badgesElement.style.display = 'block';
    }

    if (!navButtonBadges.classList.contains('active')) {
        document.querySelectorAll('.nav-button').forEach(button => button.classList.remove('active'))
        navButtonBadges.classList.add('active')
    }

    renderBadges();
}

function renderBadges() {
}