// LocalStorage Utility Functions
function saveSelection(month, date) {
    localStorage.setItem('selectedMonth', month);
    localStorage.setItem('selectedDate', date);
}

// Button Utility Functions
function findButtonByText(container, text) {
    return Array.from(container.querySelectorAll('button')).find(button => button.textContent === text);
}

// Audio Utility Function
function playSelectSound(soundeffect) {
    const selectSound = new Audio(soundeffect);
    selectSound.play();
}