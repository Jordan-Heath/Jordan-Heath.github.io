function initialise() {
    renderMonthsContainer();

    const { currentMonth, currentDate } = getCurrentSelection();

    if (currentMonth) {
        selectElement(findButtonByText(monthsContainer, currentMonth), '.month-button')
        //findButtonByText(monthsContainer, currentMonth)?.classList.add('selected');
        renderDatesContainer(currentMonth);

        if (currentDate) {
            selectElement(findButtonByText(datesContainer, currentDate), '.date-button')
            //findButtonByText(datesContainer, currentDate)?.classList.add('selected');
            renderOutput(currentMonth, currentDate);
        }
    }

    resizePage();
}

function renderMonthsContainer() {
    monthsContainer.appendChild(createElement('h2', "Month"));

    monthNames.forEach(month => {
        monthsContainer.appendChild(createButton(month, 'month-button', () => monthButtonFunction(month)));
    });
}

function renderDatesContainer(month) {
    datesContainer.innerHTML = '';

    const dateHeading = createElement('h2', month);
    dateHeading.style.gridColumn = `var(--start-on-${getFirstDayOfMonth(month).toLowerCase()})`;
    datesContainer.appendChild(dateHeading);

    Object.keys(walkthroughData[month]).forEach(fullDate => {
        const [date, weekday] = fullDate.split(' ');

        const buttonText = `${date} <span class='day-of-week'>${weekday}</span>`
        const dateButton = createButton(buttonText, 'date-button', () => dateButtonFunction(month, fullDate));
        applyDayColor(date, weekday, dateButton);

        datesContainer.appendChild(dateButton);
    });
}

function renderOutput(selectedMonth, selectedDate) {
    output.innerHTML = '';
    const details = walkthroughData[selectedMonth][selectedDate];
    const [date, weekday] = selectedDate.split(' ');

    //headings
    output.appendChild(createElement('h1', date));
    const dateSubHeading = createElement('h2', weekday);
    applyDayColor(date, weekday, dateSubHeading);
    output.appendChild(dateSubHeading);

    //details
    Object.entries(details).forEach(([time, events]) => {
        output.appendChild(createElement('h3', time))
        output.appendChild(createElement('div', events))
    });

    //progressbar and buttons
    output.appendChild(createProgressBar(selectedMonth, selectedDate));
    output.appendChild(createButton('Previous Day', 'previous-day-button', () => changeDate(-1)));
    output.appendChild(createButton('Next Day', 'next-day-button', () => changeDate(1)));

    //highlight and display
    highlightOutput();
    output.style.display = 'block'; // Show output when date details are displayed
}

function highlightOutput() {
    highlightedWordsContent = localStorage.getItem('highlightedWordsContent');

    if (highlightedWordsContent) {
        const words = highlightedWordsContent.split('\n').map(word => word.trim());
        const originalText = output.innerHTML;
    
        let highlightedText = originalText;
    
        words.forEach(word => {
            if (word) {
                const regex = new RegExp(`(${word})`, 'gi');
                highlightedText = highlightedText.replace(regex, '<span class="highlight">$1</span>');
            }
        });
    
        output.innerHTML = highlightedText;
    }
}

function changeDate(offset) {
    playSelectSound(knifeSoundSrc);

    const { currentMonth, currentDate } = getCurrentSelection();
    if (!currentMonth || !currentDate) return;

    //determine date
    const { newMonth, newDate } = calculateNewDate(currentMonth, currentDate, offset);
    saveDate(newMonth, newDate);

    //select correct month
    selectElement(findButtonByText(monthsContainer, newMonth), '.month-button');
    renderDatesContainer(newMonth);

    //select correct date
    selectElement(findButtonByText(datesContainer, newDate), '.date-button');
    renderOutput(newMonth, newDate);

    scrollToBottom();
}

//hotkey handler
document.addEventListener('keydown', (event) => {
    const action = keyActions[event.code];
    if (action) {
        action();
    }
});

//change nav behaviour on screen resize
window.addEventListener('resize', resizePage)

initialise();