const petsElement = document.getElementById('pets');
const navButtonPets = document.getElementById('nav-button-pets');

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

    renderPets();
}

function renderPets() {

}