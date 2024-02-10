const body = document.body;
const percentageElement = document.getElementById("percentage");
const sunElement = document.getElementById("sun");
const moonElement = document.getElementById("moon");

//sunset sunrise
const dawnStartTime = 20; //also day start time
const dawnEndTime = 25; //also night end time
const duskStartTime = 75; //also night start time
const duskEndTime = 80; //also day end time
const maxSunsetSunriseIntensity = 0.3;

//update controls
const updateFrequency = 16;

//old behaviour
let isOldBehaviour = false;
let isNoisePlaying = false;

//testingmode
let testingMode = false;
let testingModeSpeed = 1 / (updateFrequency);
let timeoffset;


function update() {
    //calculate percentage
    const now = new Date();
    const totalMilliseconds = now.getMilliseconds() + now.getSeconds() * 1000;
    const delay = 1000 - (totalMilliseconds % 1000);
    const totalSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    let percentage = (totalSeconds / (24 * 60 * 60)) * 100;

    //testing speed
    if (testingMode) {
        if (timeoffset === undefined) timeoffset = percentage;
        percentage = (timeoffset += testingModeSpeed) % 100;
        //percentage = (percentage * testingModeSpeed) % (dawnEndTime - dawnStartTime + 2) + (dawnStartTime - 1); //dawn testing mode
        //percentage = (percentage * testingModeSpeed) % (duskEndTime - duskStartTime + 2) + (duskStartTime - 1); //dusk testing mode
    }
        

    //background color
    if (isOldBehaviour) {
        oldBehaviour(percentage)

    } else {
        updateBackground(percentage);
    }

    percentageElement.textContent = `${percentage.toFixed(3)}%`;
    setTimeout(update, updateFrequency);
}

function updateBackground(percentage) {
    if (dawnStartTime < percentage && percentage <= dawnEndTime) {  // 20 --> 25
        dawnTime(percentage);
    } else if (dawnEndTime < percentage && percentage <= duskStartTime) {  // 25 --> 75
        dayTime(percentage);
    } else if (duskStartTime < percentage && percentage <= duskEndTime) {  // 75 --> 80
        duskTime(percentage);
    } else {                        // 80 --> 100, 0 --> 20
        nightTime(percentage);
    }

    updateSun(percentage);
    updateMoon(percentage);
}

function dawnTime(percentage) {
    body.classList = '';

    dawnPercentage = (percentage-dawnStartTime) * (100 / (dawnEndTime - dawnStartTime)) / 100; //converts 20-25 to 0-100
    inverseDawnPercentage = 1 - dawnPercentage; //inverts 0-100 to 100-0

    let brightness = 125 * dawnPercentage;
    let opacity = (-4 * Math.pow(dawnPercentage, 2) + 4 * dawnPercentage) * maxSunsetSunriseIntensity;

    //fade in day from 22.5
    //fade out night time linearly
    //add a red glow to the middle, peaking at 22.5
    body.style.background = 
       `linear-gradient(to bottom, #00000000, rgba(255, ${brightness}, 0, ${opacity}), #00000000),
        linear-gradient(to bottom, rgb(135, 207, 235, ${2 * dawnPercentage - 1}), rgb(255, 255, 255, ${2 * dawnPercentage - 1})),
        linear-gradient(to bottom, rgb(12, 20, 69, ${inverseDawnPercentage}), rgb(0, 0, 0, ${inverseDawnPercentage}))`; 
}

function nightTime(percentage) {
    sunElement.style.display = 'none';
    moonElement.style.display = 'block';
    body.style.background = '';
    body.classList = 'night';

}

function updateMoon(percentage) {
    let moonPercentage;
    if (percentage >= duskStartTime) {
        //0 at 75 (when it appears)
        //50 at 100 (when it peaks)
        moonPercentage = (percentage - duskStartTime) / 50 ;
    } else if (percentage < dawnEndTime) {
        //50 at 0 (when it peaks)
        //100 at 25 (when it disappers)
        moonPercentage = percentage * (0.5 / 25) + 0.5;
    } else {
        moonElement.style.display = 'none';
        return;
    }
    moonElement.style.display = 'block';
    let x = moonPercentage * 120 - 10;
    let y = (0.016 * Math.pow(x, 2)) - (1.6 * x) + 50;

    let size = 5 * y
    //if (size > 200) size = 200;
    moonElement.style.width = `${size}px`;
    moonElement.style.height = `${size}px`;
    
    moonElement.style.left = `${x}%`;
    moonElement.style.top = `${y}vh`;
}

function updateSun(percentage) {
    if (percentage > duskEndTime || percentage < dawnStartTime) {
        sunElement.style.display = 'none';
        return;
    }
    sunElement.style.display = 'block';
    let sunPercentage = (percentage - dawnStartTime) / (duskEndTime - dawnStartTime)

    let x = sunPercentage * 120 - 10;
    let y = (0.016 * Math.pow(x, 2)) - (1.6 * x) + 50;

    let size = 5 * y
    //if (size > 200) size = 200;
    sunElement.style.width = `${size}px`;
    sunElement.style.height = `${size}px`;
    
    sunElement.style.left = `${x}%`;
    sunElement.style.top = `${y}vh`;
}


function dayTime(percentage) {
    body.style.backgroundColor = '';
    body.style.background = '';
    body.classList = 'day';
}

function duskTime(percentage) {
    body.classList = '';

    duskPercentage = (percentage-duskStartTime) * (100 / (duskEndTime - duskStartTime)) / 100; //converts 75-80 to 0-100
    inverseDuskPercentage = 1 - duskPercentage; //inverts 0-100 to 100-0

    let brightness = 125 * duskPercentage;
    let opacity = -1.2 * Math.pow(duskPercentage, 2) + 1.2 * duskPercentage;

    //fade in night time linearly
    //fade in night from 77.5
    //add a red glow to the middle, peaking at 77.5
    body.style.background = 
       `linear-gradient(to bottom, #00000000, rgba(255, ${brightness}, 0, ${opacity}), #00000000),
        linear-gradient(to bottom, rgb(12, 20, 69, ${duskPercentage}), rgb(0, 0, 0, ${duskPercentage})),
        linear-gradient(to bottom, rgb(135, 207, 235, ${2 * inverseDuskPercentage}), rgb(255, 255, 255, ${2 * inverseDuskPercentage}))`; 
}





/* Old Behaviour */
function toggleOldMode() {
    isOldBehaviour = !isOldBehaviour;
    if (isOldBehaviour) {
        body.classList = '';
        percentageElement.style.animation = 'textAnimation 8s infinite';
        percentageElement.style.background = '#0000ff';
        percentageElement.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.7)';
        percentageElement.style.filter = 'hue-rotate(45deg) brightness(1.5) contrast(1.2)';

        percentageElement.addEventListener("click", toggleAnnoyingNoise);
    } else {
        percentageElement.style.animation = '';
        percentageElement.style.background = '';
        percentageElement.style.boxShadow = '';
        percentageElement.style.filter = '';

        percentageElement.removeEventListener("click", toggleAnnoyingNoise);
    }
}

function oldBehaviour (percentage) {
    moonElement.style.display = 'none';
    body.style.background = '';

    const redValue = Math.floor(255 - (255 * percentage / 100));
    const greenValue = Math.floor(255 * (percentage / 100));
    body.style.background = `rgb(${redValue}, ${greenValue}, 0)`;

    //music player
    if (isNoisePlaying) {
        const seconds = totalSeconds % 60;
        const baseFrequency = 100 + (seconds / 59) * 800;
        const randomVariance = (Math.random() - 0.5) * 10; // Added random variance
        const frequency = baseFrequency + randomVariance;
        playTone(frequency, 0.2);
    }
}

function toggleAnnoyingNoise() {
    isNoisePlaying = !isNoisePlaying;
}

function playTone(frequency, volume) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
}

document.addEventListener("DOMContentLoaded", () => {
    update();
});
