//arrays
const monthNames = [
	"April", "May", "June", "July", "August", "September",
	"October", "November", "December", "January", "February"
];

const dayIndices = {
	'Sunday': 7, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6
};

const keyActions = {
	'NumpadAdd': () => { if (guideSave.navigationHotkeysEnabled) changeDate(1) },
	'NumpadSubtract': () => { if (guideSave.navigationHotkeysEnabled) changeDate(-1) },
	'Numpad0': () => { if (guideSave.numberHotkeysEnabled) guideButtons[0]?.click() },
	'Numpad1': () => { if (guideSave.numberHotkeysEnabled) guideButtons[1]?.click() },
	'Numpad2': () => { if (guideSave.numberHotkeysEnabled) guideButtons[2]?.click() },
	'Numpad3': () => { if (guideSave.numberHotkeysEnabled) guideButtons[3]?.click() },
	'Numpad4': () => { if (guideSave.numberHotkeysEnabled) guideButtons[4]?.click() },
	'Numpad5': () => { if (guideSave.numberHotkeysEnabled) guideButtons[5]?.click() },
	'Numpad6': () => { if (guideSave.numberHotkeysEnabled) guideButtons[6]?.click() },
	'Numpad7': () => { if (guideSave.numberHotkeysEnabled) guideButtons[7]?.click() },
	// 'Numpad8': () => { if (guideSave.numberHotkeysEnabled) guideButtons[8]?.click() },
	// 'Numpad9': () => { if (guideSave.numberHotkeysEnabled) guideButtons[9]?.click() },
	'Escape': () => { if (guideSave.escapeHotkeyEnabled) document.querySelector('.close-button')?.click() },
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

//elements
const monthsContainer = document.getElementById('months-container');
const datesContainer = document.getElementById('dates-container');
const output = document.getElementById('output');
const nav = document.getElementById('nav');
const navButton = document.getElementById('nav-button');
const guideButtons = document.getElementById('nav').querySelectorAll('button');
const walkthrough = document.getElementById('walkthrough');
const guide = document.getElementById('guide');

//constants
const debounceDelay = 500; //ms
const guideSave = new GuideSave();