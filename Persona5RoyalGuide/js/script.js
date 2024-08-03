function renderMonths() {
    createAndAppendElement('h2', "Month", monthsContainer);

    monthNames.forEach(month => {
        const monthButton = createButton(month, 'month-button', () => {
            if (monthButton.classList.contains('selected')) return;

            playSelectSound(knifeSoundSrc);

            document.querySelector('.month-button.selected')?.classList.remove('selected');
            monthButton.classList.add('selected');

            saveSelection(month, null);
            renderDates(month);

            output.style.display = 'none'; // Hide output when month is selected
        });
        monthsContainer.appendChild(monthButton);
    });
}

function loadSelection() {
    const { currentMonth, currentDate } = getCurrentSelection();

    if (currentMonth) {
        const monthButton = findButtonByText(monthsContainer, currentMonth);
        if (monthButton) {
            monthButton.classList.add('selected');
            renderDates(currentMonth);

            if (currentDate) {
                const dateButton = findButtonByText(datesContainer, currentDate);
                if (dateButton) {
                    dateButton.classList.add('selected');
                    displayDetails(currentMonth, currentDate);
                    output.style.display = 'block'; // Show output for selected date
                }
            } else {
                output.style.display = 'none'; // Hide output if only month is selected
            }
        }
    }
}

function displayDetails(month, date) {
    output.innerHTML = '';
    const details = walkthroughData[month][date];
    const dateComponents = date.split(' ');

    createAndAppendElement('h1', dateComponents[0], output);

    const dateSubHeading = document.createElement('h2');
    dateSubHeading.innerText = dateComponents[1];
    applyDayColor(dateComponents[1], dateSubHeading);
    output.appendChild(dateSubHeading);

    Object.entries(details).forEach(([time, events]) => {
        createAndAppendElement('h3', time, output);
        createAndAppendElement('div', events, output);
    });

    // Calculate the percentage progress
    const totalDays = calculateTotalDays(walkthroughData, monthNames);
    const currentDayIndex = calculateCurrentDayIndex(walkthroughData, monthNames, month, date);
    const dayProgress = currentDayIndex / totalDays;

    // Create and append the progress bar using the utility function
    createProgressBar(dayProgress, output);

    createNavigationButton('Previous Day', () => navigateDay(-1), output);
    createNavigationButton('Next Day', () => navigateDay(1), output);

    output.style.display = 'block'; // Show output when date details are displayed
}

function renderDates(month) {
    datesContainer.innerHTML = '';

    const firstDayOfMonth = getFirstDayOfMonth(month);
    const dateHeading = createAndAppendElement('h2', month, datesContainer);
    dateHeading.style.gridColumn = `var(--start-on-${firstDayOfMonth.toLowerCase()})`;

    Object.keys(walkthroughData[month]).forEach(date => {
        const dateComponents = date.split(' ');
        const dateButton = createButton(`${dateComponents[0]} <span class='day-of-week'>${dateComponents[1]}</span>`, 'date-button', () => {
            if (dateButton.classList.contains('selected')) return;

            playSelectSound(knifeSoundSrc);
            displayDetails(month, date);
            saveSelection(month, date);

            document.querySelector('.date-button.selected')?.classList.remove('selected');
            dateButton.classList.add('selected');
        });

        applyDayColor(dateComponents[1], dateButton);
        datesContainer.appendChild(dateButton);
    });
}

function openPopup(loadedGuide, selectedButton) {
    if(selectedButton.classList.contains('selected')) return;

    playSelectSound(clickSoundSrc);
    popup.innerHTML = '';
    document.querySelector('nav .selected')?.classList.remove('selected');
    selectedButton.classList.add('selected');

    if (loadedGuide == '') {
        popup.style.display = 'none';
        walkthrough.style.display = 'block';
    } else {
        popup.innerHTML = loadedGuide

        const closeButton = createButton('Close', 'close-button', () => openPopup('', navButtons[0]));
        popup.appendChild(closeButton);
        walkthrough.style.display = 'none';
        popup.style.display = 'block';
    }

    resizePage();
}

function navigateDay(offset) {
    playSelectSound(knifeSoundSrc);

    const { currentMonth, currentDate } = getCurrentSelection();
    if (!currentMonth || !currentDate) return;

    const { newMonth, newDate } = calculateNewDate(currentMonth, currentDate, offset);

    selectNewMonthButton(newMonth);
    saveSelection(newMonth, newDate);
    displayDetails(newMonth, newDate);
    renderDates(newMonth);
    selectNewDateButton(newDate);

    scrollToBottom();
}

document.addEventListener('keydown', (event) => {
    const action = keyActions[event.code];
    if (action) {
        action();
    }
});

window.addEventListener('resize', resizePage)

renderMonths();
loadSelection();
resizePage();