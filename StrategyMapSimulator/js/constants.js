const Months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const DaysPerMonth = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];

const DaysPerMonthLeapYear = [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];

const DaysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const DaySuffixes = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    21: 'st',
    22: 'nd',
    23: 'rd',
    31: 'st'
}

const CountryNames = [
    'Gloypland',
    'Frapturnia',
    'Colwslia',
    'Volyvia',
    'Acturt',
    'Boystown',
    'Dunemarch',
    'Ardentia',
    'Hillside',
    'Fropland',
]

const Colors = [
    'Red',
    'Green',
    'Blue',
    'Yellow',
    'Magenta',
    'Aqua',
    'DarkSlateGray',
    'White',
    'Orange',
    'Purple',
    'Lime',
    'Teal'
];

const Terrains = [
    new Terrain('DeepWater', 0, false, 2.5, '#255859'),
    new Terrain('Water', 1, false, 1.5, '#5f999b'),
    new Terrain('Beach', 2, true, 3, '#f8cd6e'),
    new Terrain('Grass', 3, true, 4, '#899d5e'),
    new Terrain('Hill', 4, true, 3, '#76583f'),
    new Terrain('Mountain', 5, false, 1.5, '#dddddd'),
];

function findContrastingTextColor(colorName) {
    const colors = {
        red: '#ff0000',
        green: '#008000',
        blue: '#0000ff',
        yellow: '#ffff00',
        magenta: '#ff00ff',
        aqua: '#00ffff',
        darkslategray: '#2f4f4f',
        white: '#ffffff',
        orange: '#ffa500',
        purple: '#800080',
        lime: '#00ff00',
        teal: '#008080'
    };

    const hex = colors[colorName.toLowerCase()];
    if (!hex) return 'black';

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? 'black' : 'white';
}
