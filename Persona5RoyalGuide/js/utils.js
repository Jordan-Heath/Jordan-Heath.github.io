// LocalStorage Utility Functions
function saveSelection(month, date) {
    localStorage.setItem('selectedMonth', month);
    localStorage.setItem('selectedDate', date);
}

// Button Utility Functions
function findButtonByText(container, text) {
    return Array.from(container.querySelectorAll('button')).find(button => button.textContent === text);
}

function createButton(text, className, clickHandler) {
    const button = document.createElement('button');
    button.innerHTML = text;
    button.className = className;
    button.addEventListener('click', clickHandler);
    return button;
}

// Audio Utility Function
function playSelectSound() {
    const selectSound = new Audio(selectSoundSrc);
    selectSound.play();
}

// DOM Manipulation Utility Functions
function createAndAppendElement(tag, text, parent) {
    const element = document.createElement(tag);
    element.innerHTML = text;
    parent.appendChild(element);
    return element; // Return the created element
}

function createNavigationButton(text, clickHandler, parent) {
    const button = document.createElement('button');
    button.classList.add(`${text.toLowerCase().replace(' ', '-')}-button`);
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    parent.appendChild(button);
}

function applyDayColor(day, element) {
    if (day === 'Saturday') element.classList.add('blue');
    if (day === 'Sunday') element.classList.add('red');
}

function calculateTotalDays(guideData, monthNames) {
    let totalDays = 0;
    monthNames.forEach(month => {
        totalDays += Object.keys(guideData[month]).length;
    });
    return totalDays;
}

function calculateCurrentDayIndex(guideData, monthNames, currentMonth, currentDate) {
    let currentDayIndex = 0;
    let foundCurrentDay = false;
    for (const monthName of monthNames) {
        const dates = Object.keys(guideData[monthName]);
        for (const day of dates) {
            if (monthName === currentMonth && day === currentDate) {
                foundCurrentDay = true;
                break;
            }
            currentDayIndex++;
        }
        if (foundCurrentDay) {
            break;
        }
    }
    return currentDayIndex;
}
