const monthNames = [
    "April", "May", "June", "July", "August", "September",
    "October", "November", "December", "January", "February"
];

const dayIndices = {
    'Sunday': 7, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6
};

const monthsContainer = document.getElementById('months-container');
const datesContainer = document.getElementById('dates-container');
const output = document.getElementById('output');

function loadSelection() {
    const savedMonth = localStorage.getItem('selectedMonth');
    const savedDate = localStorage.getItem('selectedDate');

    if (savedMonth) {
        const monthButton = findButtonByText(monthsContainer, savedMonth);
        if (monthButton) {
            monthButton.classList.add('selected');
            renderDates(savedMonth);

            if (savedDate) {
                const dateButton = findButtonByText(datesContainer, savedDate);
                if (dateButton) {
                    dateButton.classList.add('selected');
                    displayDetails(savedMonth, savedDate);
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
    const details = guideData[month][date];
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

    createNavigationButton('Previous Day', previousDay, output);
    createNavigationButton('Next Day', nextDay, output);

    output.style.display = 'block'; // Show output when date details are displayed
}

function renderMonths() {
    createAndAppendElement('h2', "Month", monthsContainer);

    monthNames.forEach(month => {
        const monthButton = createButton(month, 'month-button', () => {
            playSelectSound();

            document.querySelector('.month-button.selected')?.classList.remove('selected');
            monthButton.classList.add('selected');

            saveSelection(month, null);
            renderDates(month);

            output.style.display = 'none'; // Hide output when month is selected
        });
        monthsContainer.appendChild(monthButton);
    });
}

function getFirstDayOfMonth(month) {
    const firstDate = Object.keys(guideData[month])[0];
    return firstDate.split(' ')[1];
}

function renderDates(month) {
    datesContainer.innerHTML = '';

    const firstDayOfMonth = getFirstDayOfMonth(month);
    const dateHeading = createAndAppendElement('h2', month, datesContainer);
    dateHeading.style.gridColumn = `var(--start-on-${firstDayOfMonth.toLowerCase()})`;

    Object.keys(guideData[month]).forEach(date => {
        const dateComponents = date.split(' ');
        const dateButton = createButton(`${dateComponents[0]} <span class='day-of-week'>${dateComponents[1]}</span>`, 'date-button', () => {
            playSelectSound();
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
    popup.innerHTML = '';
    playSelectSound();

    document.querySelector('nav .selected')?.classList.remove('selected');
    selectedButton.classList.add('selected');

    popup.innerHTML = loadedGuide

    const closeButton = createButton('Close', 'close-button', () => {
        popup.innerHTML = '';
        popup.style.display = 'none';
        selectedButton.classList.remove('selected');
    });
    popup.appendChild(closeButton);
    popup.style.display = 'block';
}

function filterQuestions() {
    const input = document.getElementById("searchBar").value.toUpperCase();
    const tables = document.querySelectorAll("#questions table");

    tables.forEach(table => {
        const question = table.querySelector("th").textContent.toUpperCase();
        const answers = Array.from(table.querySelectorAll("td")).map(td => td.textContent.toUpperCase());

        table.style.display = (question.includes(input) || answers.some(answer => answer.includes(input))) ? "" : "none";
    });
}

function previousDay() {
    playSelectSound();
    navigateDay(-1);
}

function nextDay() {
    playSelectSound();
    navigateDay(1);
}

function navigateDay(offset) {
    const currentMonth = localStorage.getItem('selectedMonth');
    const currentDate = localStorage.getItem('selectedDate');

    if (!currentMonth || !currentDate) return;

    const dates = Object.keys(guideData[currentMonth]);
    const currentIndex = dates.indexOf(currentDate);

    let newDateIndex = currentIndex + offset;
    let newMonth = currentMonth;

    if (newDateIndex < 0) {
        newMonth = monthNames[monthNames.indexOf(currentMonth) - 1] || monthNames[monthNames.length - 1];
        newDateIndex = Object.keys(guideData[newMonth]).length - 1;
    } else if (newDateIndex >= dates.length) {
        newMonth = monthNames[monthNames.indexOf(currentMonth) + 1] || monthNames[0];
        newDateIndex = 0;
    }

    const newDate = Object.keys(guideData[newMonth])[newDateIndex];
    saveSelection(newMonth, newDate);
    displayDetails(newMonth, newDate);
    renderDates(newMonth);

    document.querySelector('.date-button.selected')?.classList.remove('selected');
    const newDateButton = findButtonByText(datesContainer, newDate);
    if (newDateButton) {
        newDateButton.classList.add('selected');
    }

    //scroll to bottom
    window.scrollTo(0, document.body.scrollHeight);
    const main = document.querySelector('main');
    if (main) main.scrollTo(0, main.scrollHeight);
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'NumpadAdd') {
        nextDay();
    } else if (event.code === 'NumpadSubtract') {
        previousDay();
    }
});

renderMonths();
loadSelection();
