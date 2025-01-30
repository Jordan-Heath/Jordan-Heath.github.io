function monthButtonFunction(month) {
    const buttonElement = findButtonByText(monthsContainer, month);

    if (buttonElement.classList.contains('selected')) return;

    playSelectSound(selectDateSoundSrc);
    selectElement(buttonElement, '.month-button');

    guideSave.saveDate(month, null);
    renderDatesContainer();

    output.style.display = 'none';
}

function dateButtonFunction(month, date) {
    const buttonElement = findButtonByText(datesContainer, date);

    if (buttonElement.classList.contains('selected')) return;

    playSelectSound(selectDateSoundSrc);
    selectElement(buttonElement, '.date-button');

    guideSave.saveDate(month, date);
    renderOutput();
}

function guideButtonFunction(loadedGuide, selectedButton) {
    if (selectedButton.classList.contains('selected')) return;

    playSelectSound(clickSoundSrc);
    selectElement(selectedButton, '.guide-button');

    guide.innerHTML = loadedGuide;
    guide.appendChild(createButton('Close', 'close-button', () => closeGuideButton()));

    guide.style.display = 'block';
    walkthrough.style.display = 'none';

    resizePage();
}

function closeGuideButton() {
    const buttonElement = guideButtons[0];

    if (buttonElement.classList.contains('selected')) return;

    playSelectSound(clickSoundSrc);
    selectElement(buttonElement, '.guide-button');

    guide.innerHTML = '';
    guide.style.display = 'none';
    walkthrough.style.display = 'block';

    resizePage();
}

function notepadButtonFuction(selectedButton) {
    guideButtonFunction(notepadData, selectedButton);

    const notepad = document.getElementById('notepad');
    const highlightedWordsElement = document.getElementById('highlightedWords');

    notepad.value = guideSave.notepadContent;
    highlightedWordsElement.value = guideSave.highlightedWordsContent;

    const debouncedNotepadSave = debounce(() => {
        guideSave.notepadContent = notepad.value;
        guideSave.saveToLocalStorage();
    });
    const debouncedHighlightedWordsSave = debounce(() => {
        guideSave.highlightedWordsContent = highlightedWordsElement.value;
        guideSave.saveToLocalStorage();

        renderOutput();
    });

    notepad.addEventListener("input", debouncedNotepadSave);
    notepad.addEventListener("keydown", handleTabKey);

    highlightedWordsElement.addEventListener("input", debouncedHighlightedWordsSave);
}

function controlsButtonFunction(selectedButton) {
    guideButtonFunction(controls, selectedButton);

    const numberHotkeysCheckbox = document.getElementById('numberHotkeysCheckbox');
    const navigationHotkeysCheckbox = document.getElementById('navigationHotkeysCheckbox');
    const escapeHotkeyCheckbox = document.getElementById('escapeHotkeyCheckbox');

    numberHotkeysCheckbox.checked = guideSave.numberHotkeysEnabled;
    navigationHotkeysCheckbox.checked = guideSave.navigationHotkeysEnabled;
    escapeHotkeyCheckbox.checked = guideSave.escapeHotkeyEnabled;

    numberHotkeysCheckbox.addEventListener('click', () => {
        guideSave.numberHotkeysEnabled = numberHotkeysCheckbox.checked;
        guideSave.saveToLocalStorage();
    });

    navigationHotkeysCheckbox.addEventListener('click', () => {
        guideSave.navigationHotkeysEnabled = navigationHotkeysCheckbox.checked;
        guideSave.saveToLocalStorage();
    });

    escapeHotkeyCheckbox.addEventListener('click', () => {
        guideSave.escapeHotkeyEnabled = escapeHotkeyCheckbox.checked;
        guideSave.saveToLocalStorage();
    });
}

function navButtonFunction() {
    playSelectSound(clickSoundSrc);

    if (nav.style.display == 'none') {
        nav.style.display = 'flex';
        navButton.classList.add('selected');
    } else {
        nav.style.display = 'none';
        navButton.classList.remove('selected');
    }    
}
