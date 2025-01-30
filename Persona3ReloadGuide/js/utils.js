function findButtonByText(container, text) {
    return Array.from(container.querySelectorAll('button')).find(button => button.textContent === text);
}

function playSelectSound(soundeffect) {
    const selectSound = new Audio(soundeffect);
    selectSound.play();
}

function createElement(tag, html, className) {
    const element = document.createElement(tag);
    element.innerHTML = html;
    element.className = className;
    return element;
}

function createButton(text, className, clickHandler) {
    const button = createElement('button', text, className);
    button.addEventListener('click', clickHandler);
    return button;
}

function selectElement(selectedElement, className) {
    const previouslySelectedElement = document.querySelector(`${className}.selected`);
    if (previouslySelectedElement) previouslySelectedElement.classList.remove('selected');
    selectedElement.classList.add('selected');
}

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
    const walkthrough = document.getElementById('walkthrough');
    walkthrough.scrollTo(0, walkthrough.scrollHeight);
}

function createProgressBar(month, date) {
    const totalDays = calculateTotalDays(walkthroughData, monthNames);
    const currentDayIndex = calculateCurrentDayIndex(walkthroughData, monthNames, month, date);
    const dayProgress = currentDayIndex / totalDays;

    const progressBarContainer = createElement('div', '', 'progress-bar-container');

    const progressBar = createElement('div', '', 'progress-bar');
    progressBar.style.width = `${dayProgress * 100}%`;

    const progressText = createElement('h2', `${Math.round(dayProgress * 100)}%`, 'progress-text');

    progressBarContainer.appendChild(progressBar);
    progressBarContainer.appendChild(progressText);
    return progressBarContainer;
}

function debounce(func) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), debounceDelay);
    };
}

function handleTabKey(e) {
    if (e.key == "Tab") {
        e.preventDefault();
        const textArea = e.currentTarget;
        textArea.setRangeText(
            "\t",
            textArea.selectionStart,
            textArea.selectionEnd,
            "end"
        );
    }
}

function applyDayColor(date, weekday, element) {
    element.classList.toggle('blue', weekday === 'Sat');
    element.classList.toggle('red', weekday === 'Sun' || holidays.includes(date));
}

function resizePage() {
    const nav = document.getElementById('nav');
    const navButton = document.getElementById('navButton');
    if (window.innerWidth <= 1100) {
        nav.style.display = 'none';
        navButton.classList.remove('selected');
    } else {
        nav.style.display = 'flex';
    }
}