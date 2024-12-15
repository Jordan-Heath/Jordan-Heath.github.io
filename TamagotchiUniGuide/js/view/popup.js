const popupElement = document.getElementById('popup');

function createPopup(element) {
    popupElement.innerHTML = '';

    popupElement.appendChild(element);
    popupElement.style.display = 'block';
}

function dismissPopup() {
    popupElement.classList.add('dismissed');

    setTimeout(() => {
        popupElement.innerHTML = '';
        popupElement.style.display = 'none';
        popupElement.classList.remove('dismissed');
    }, 500);
}

function popupTama(tamaName) {
    const tama = TAMAS.find(tama => tama.name == tamaName);
    createPopup(tama.renderDetailedDiv());
}