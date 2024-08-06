function monthButtonFunction(month) {
    buttonElement = findButtonByText(monthsContainer, month);

    // return if already selected
    if (buttonElement.classList.contains('selected')) return;

    // change selection to this month
    playSelectSound(knifeSoundSrc);
    selectElement(buttonElement, '.month-button');

    // save the new month, render the dates for the month
    saveDate(month, null);
    renderDatesContainer(month);

    // ensure output is hidden
    output.style.display = 'none';
}

function dateButtonFunction(month, date) {
    buttonElement = findButtonByText(datesContainer, date);

    // return if already selected
    if (buttonElement.classList.contains('selected')) return;

    // change selection to this date
    playSelectSound(knifeSoundSrc);
    selectElement(buttonElement, '.date-button');

    // save the new date, render the output
    saveDate(month, date);
    renderOutput(month, date);
}

function guideButtonFunction(loadedGuide, selectedButton) {
    // return if already selected
    if (selectedButton.classList.contains('selected')) return;

    // change selection to this guide
    playSelectSound(clickSoundSrc);
    selectElement(selectedButton, '.guide-button');

    // create guide
    guide.innerHTML = loadedGuide
    guide.appendChild(createButton('Close', 'close-button', () => closeGuideButton()));

    // switch to guide
    guide.style.display = 'block';
    walkthrough.style.display = 'none';

    // hide nav if on mobile
    resizePage();
}

function closeGuideButton() {
    buttonElement = guideButtons[0];

    // return if already selected
    if (buttonElement.classList.contains('selected')) return;

    // change selection to this guide
    playSelectSound(clickSoundSrc);
    selectElement(buttonElement, '.guide-button');

    // clear guide & switch to walkthrough
    guide.innerHTML = '';
    guide.style.display = 'none';
    walkthrough.style.display = 'block';

    // hide nav if on mobile
    resizePage();
}

function notepadButtonFuction(selectedButton) {
    //open popup page
    guideButtonFunction(notepadData, selectedButton);

    //select elements
    notepad = document.getElementById('notepad');
    highlightedWordsElement = document.getElementById('highlightedWords');

    //initialise values
    notepad.value = localStorage.getItem("notepadContent") || '';
    highlightedWordsElement.value = localStorage.getItem("highlightedWordsContent") || '';

    //add notepad save & tab support
    const debouncedNotepadSave = debounce(() => {
        console.log('Saved notepadContent');
        localStorage.setItem("notepadContent", notepad.value);
    });
    notepad.addEventListener("input", debouncedNotepadSave);
    notepad.addEventListener("keydown", handleTabKey);

    //add highlighted words save
    const debouncedHighlightedWordsSave = debounce(() => {
        console.log('Saved highlightedWords');
        localStorage.setItem("highlightedWordsContent", highlightedWordsElement.value);
        renderOutput(selectedMonth, selectedDate);
    });
    highlightedWordsElement.addEventListener("input", debouncedHighlightedWordsSave);
}

function navButtonFunction() {
    playSelectSound(clickSoundSrc);

    if (nav.style.display == 'none') {
        // nav opened
        nav.style.display = 'flex';
        navButton.classList.add('selected');
    } else {
        // nav closed
        nav.style.display = 'none';
        navButton.classList.remove('selected');
    }    
}