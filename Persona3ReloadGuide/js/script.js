function initialize() {
    const selectDateAudio = new Audio(selectDateSoundSrc);
    const clickAudio = new Audio(clickSoundSrc);

    document.addEventListener('keydown', (event) => {
        const action = keyActions[event.code];
        if (action) {
            action();
        }
    });

    window.addEventListener('resize', resizePage);

    renderMonthsContainer();
    guideSave.loadFromLocalStorage();

    const selectedMonth = guideSave.selectedMonth;
    if (selectedMonth) {
        selectElement(findButtonByText(monthsContainer, selectedMonth), '.month-button');
        renderDatesContainer();

        const selectedDate = guideSave.selectedDate;
        if (selectedDate) {
            selectElement(findButtonByText(datesContainer, selectedDate), '.date-button');
            renderOutput();
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

function renderDatesContainer() {
    datesContainer.innerHTML = '';

    const dateHeading = createElement('h2', guideSave.selectedMonth, 'month');
    dateHeading.style.gridColumn = `var(--start-on-${getFirstDayOfMonth(guideSave.selectedMonth).toLowerCase()})`;
    datesContainer.appendChild(dateHeading);

    Object.keys(walkthroughData[guideSave.selectedMonth]).forEach(fullDate => {
        const [weekday, date] = fullDate.split(' ');

        const buttonText = `<span class='day-of-week'>${weekday}</span> ${date}`;
        const dateButton = createButton(buttonText, 'date-button', () => dateButtonFunction(guideSave.selectedMonth, fullDate));
        applyDayColor(date, weekday, dateButton);

        datesContainer.appendChild(dateButton);
    });
}

function renderOutput() {
    output.innerHTML = '';
    const details = walkthroughData[guideSave.selectedMonth][guideSave.selectedDate];
    const [weekday, date] = guideSave.selectedDate.split(' ');

    const dateHeading = createElement('div', '', 'date-heading');
    output.appendChild(dateHeading);

    dateHeading.appendChild(createElement('h1', date));
    const dateSubHeading = createElement('h2', weekday);
    applyDayColor(date, weekday, dateSubHeading);
    dateHeading.appendChild(dateSubHeading);

    Object.entries(details).forEach(([time, events]) => {
        output.appendChild(createElement('h3', time));
        output.appendChild(createElement('div', events));
    });

    highlightOutput();

    output.appendChild(createProgressBar(guideSave.selectedMonth, guideSave.selectedDate));
    output.appendChild(createButton('Previous Day', 'previous-day-button', () => changeDate(-1)));
    output.appendChild(createButton('Next Day', 'next-day-button', () => changeDate(1)));

    output.style.display = 'block';
}

function highlightOutput() {
    if (guideSave.highlightedWordsContent) {
        const words = guideSave.highlightedWordsContent.split('\n').map(word => word.trim());
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
    playSelectSound(selectDateSoundSrc);

    if (!guideSave.selectedMonth || !guideSave.selectedDate) return;

    const { newMonth, newDate } = calculateNewDate(guideSave.selectedMonth, guideSave.selectedDate, offset);
    guideSave.saveDate(newMonth, newDate);

    selectElement(findButtonByText(monthsContainer, guideSave.selectedMonth), '.month-button');
    renderDatesContainer();

    selectElement(findButtonByText(datesContainer, guideSave.selectedDate), '.date-button');
    renderOutput();

    scrollToBottom();
}

function getFirstDayOfMonth(month) {
    return Object.keys(walkthroughData[month])[0].split(' ')[0];
}

function calculateNewDate(currentMonth, currentDate, offset) {
    const dates = Object.keys(walkthroughData[currentMonth]);
    const currentIndex = dates.indexOf(currentDate);

    let newDateIndex = currentIndex + offset;
    let newMonth = currentMonth;

    if (newDateIndex < 0) {
        newMonth = monthNames[monthNames.indexOf(currentMonth) - 1] || monthNames[monthNames.length - 1];
        newDateIndex = Object.keys(walkthroughData[newMonth]).length - 1;
    } else if (newDateIndex >= dates.length) {
        newMonth = monthNames[monthNames.indexOf(currentMonth) + 1] || monthNames[0];
        newDateIndex = 0;
    }

    const newDate = Object.keys(walkthroughData[newMonth])[newDateIndex];
    return { newMonth, newDate };
}

function calculateTotalDays(walkthroughData, monthNames) {
    return monthNames.reduce((total, month) => total + Object.keys(walkthroughData[month]).length, 0);
}

function calculateCurrentDayIndex(walkthroughData, monthNames, currentMonth, currentDate) {
    let currentDayIndex = 0;
    for (const monthName of monthNames) {
        for (const day of Object.keys(walkthroughData[monthName])) {
            if (monthName === currentMonth && day === currentDate) {
                return currentDayIndex;
            }
            currentDayIndex++;
        }
    }
    return currentDayIndex;
}

document.addEventListener('DOMContentLoaded', () => initialize());