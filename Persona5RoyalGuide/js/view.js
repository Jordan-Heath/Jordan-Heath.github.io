function selectNewMonthButton(newMonth) {
    document.querySelector('.month-button.selected')?.classList.remove('selected');
    const newMonthButton = findButtonByText(monthsContainer, newMonth);
    if (newMonthButton) {
        newMonthButton.classList.add('selected');
    }
}

function selectNewDateButton(newDate) {
    document.querySelector('.date-button.selected')?.classList.remove('selected');
    const newDateButton = findButtonByText(datesContainer, newDate);
    if (newDateButton) {
        newDateButton.classList.add('selected');
    }
}

function createProgressBar(dayProgress, parentElement) {
    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('progress-bar-container');

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressBar.style.width = `${dayProgress * 100}%`;

    const progressText = document.createElement('h2');
    progressText.classList.add('progress-text');
    progressText.innerText = `${Math.round(dayProgress * 100)}%`;

    progressBarContainer.appendChild(progressBar);
    progressBarContainer.appendChild(progressText);
    parentElement.appendChild(progressBarContainer);
}

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
    const walkthrough = document.getElementById('walkthrough');
    walkthrough.scrollTo(0, walkthrough.scrollHeight);
}

function applyDayColor(day, element) {
    if (day === 'Saturday') element.classList.add('blue');
    if (day === 'Sunday') element.classList.add('red');
}

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

function createButton(text, className, clickHandler) {
    const button = document.createElement('button');
    button.innerHTML = text;
    button.className = className;
    button.addEventListener('click', clickHandler);
    return button;
}

function toggleNav() {
    nav.style.display = nav.style.display == 'none' ? 'flex' : 'none';
}

function resizePage() {
    if (window.innerWidth <= 1100) {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
}