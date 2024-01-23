function round(number) {
    return number.toFixed(2);
}

function createButtonElement(text, onClick) {
    const button = document.createElement('button');
    button.innerText = text;
    button.onclick = onClick;
    return button;
}

function updateElementText(elementId, text) {
    document.getElementById(elementId).innerHTML = text;
}