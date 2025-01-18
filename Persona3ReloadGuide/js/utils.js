//find a button in {container} with value {text}
function findButtonByText(container, text) {
    return Array.from(container.querySelectorAll('button')).find(button => button.textContent === text);
}

//play a {soundeffect}
function playSelectSound(soundeffect) {
    const selectSound = new Audio(soundeffect);
    selectSound.play();
}

//create a {tag} element with a {text} value and a {className}
function createElement(tag, text, className) {
    const element = document.createElement(tag);
    element.innerHTML = text;
    element.className = className;
    return element;
}

//create a button element with a {text} value, a {className}, and a {clickHandler}
function createButton(text, className, clickHandler) {
    const button = createElement('button', text, className);
    button.addEventListener('click', clickHandler);
    return button;
}

//select a {selectedElement} and unsellect all {className}s
function selectElement(selectedElement, className) {
    document.querySelector(`${className}.selected`)?.classList.remove('selected');
    selectedElement.classList.add('selected');
}

//scrolls to the bottom of window and bottom of walkthrough
function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
    const walkthrough = document.getElementById('walkthrough');
    walkthrough.scrollTo(0, walkthrough.scrollHeight);
}

//creates the game progress bar based on current {month} and {date}
function createProgressBar(month, date) {
    const totalDays = calculateTotalDays(walkthroughData, monthNames);
    const currentDayIndex = calculateCurrentDayIndex(walkthroughData, monthNames, month, date);
    const dayProgress = currentDayIndex / totalDays;

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
    return progressBarContainer;
}

//run {func} after 500ms. Used to chunk together changes to textarea before saving.
function debounce(func) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), debounceDelay);
    };
}

//enables the use of the tab key on {e}
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

//applies red/blue color to {element} based on {date} and {weekday}
function applyDayColor(date, weekday, element) {
    if (weekday === 'Sat') element.classList.add('blue');
    if (weekday === 'Sun') element.classList.add('red');
    if (holidays.includes(date)) element.classList.add('red');
}

//changes nav layout based on screen width
function resizePage() {
    if (window.innerWidth <= 1100) {
        nav.style.display = 'none';
        navButton.classList.remove('selected');
    } else {
        nav.style.display = 'flex';
    }
}