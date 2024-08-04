const monthNames = [
    "April", "May", "June", "July", "August", "September",
    "October", "November", "December", "January", "February"
];

const dayIndices = {
    'Sunday': 7, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6
};

const keyActions = {
    'NumpadAdd': () => navigateDay(1),
    'NumpadSubtract': () => navigateDay(-1),
    'Numpad1': () => navButtons[0]?.click(),
    'Numpad2': () => navButtons[1]?.click(),
    'Numpad3': () => navButtons[2]?.click(),
    'Numpad4': () => navButtons[3]?.click(),
    'Numpad5': () => navButtons[4]?.click(),
    'Numpad6': () => navButtons[5]?.click(),
    'Numpad7': () => navButtons[6]?.click(),
    'Numpad8': () => navButtons[7]?.click(),
    'Numpad9': () => navButtons[8]?.click(), //not implemented
    'Escape': () => document.querySelector('.close-button')?.click(),
};

const holidays = [
    "4/29",
    "5/3",
    "5/4",
    "5/5",
    "7/18",
    "8/11",
    "9/19",
    "9/22",
    "10/10",
    "11/3",
    "11/23",
    "12/23"
];

const monthsContainer = document.getElementById('months-container');
const datesContainer = document.getElementById('dates-container');
const output = document.getElementById('output');
const nav = document.getElementById('nav');
const navButton = document.getElementById('nav-button');
const navButtons = document.getElementById('nav').querySelectorAll('button');
const walkthrough = document.getElementById('walkthrough');