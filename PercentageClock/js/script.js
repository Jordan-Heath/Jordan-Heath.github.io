const body = document.body;
const percentageElement = document.getElementById("percentage");
const moonElement = document.getElementById("moon");
const dawnElement = document.getElementById("dawn");

let isOldBehaviour = false;
let isNoisePlaying = false;


function update() {
    //calculate percentage
    const now = new Date();
    const totalMilliseconds = now.getMilliseconds() + now.getSeconds() * 1000;
    const delay = 1000 - (totalMilliseconds % 1000);
    const totalSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    let percentage = (totalSeconds / (24 * 60 * 60)) * 100;

    //percentage = (percentage * 500) % 7 + 19;

    //background color
    if (isOldBehaviour) {
        oldBackground(percentage)
    } else if (percentage <= 20) {  // 00 --> 19.99
        //night time black
        nightTime(percentage);
    } else if (percentage <= 25) {  // 20 --> 24.99 
        //dawn
        dawnTime(percentage);
    } else if (percentage <= 75) {  // 25 --> 74.99
        //day
        dayTime(percentage);
    } else if (percentage <= 80) {  // 75 --> 79.99
        //dusk
        nightTime(percentage);
        duskTime(percentage);
    } else {                        // 80 --> 100
        //night time black
        nightTime(percentage);
    }
    

    //music player
    if (isOldBehaviour && isNoisePlaying) {
        const frequency = getFrequencyFromSeconds(totalSeconds % 60);
        playTone(frequency, 0.2);
    }

    percentageElement.textContent = `${percentage.toFixed(3)}%`;
    setTimeout(update, 50);
}

function dawnTime(percentage) {
    dawnPercentage = (percentage-20) *20/100;
    //20-25

    let brightness = 125 * dawnPercentage;
    let opacity = -1.2 * Math.pow(dawnPercentage, 2) + 1.2 * dawnPercentage;

    body.style.background = `linear-gradient(to bottom, #00000000, rgba(255, ${brightness}, 0, ${opacity}), #00000000),
                            linear-gradient(to bottom, rgb(12, 20, 69, ${1 - dawnPercentage}), rgb(0, 0, 0, ${1 - dawnPercentage})),
                            linear-gradient(to bottom, rgb(135, 207, 235, ${2 * dawnPercentage - 1}), rgb(255, 255, 255, ${2 * dawnPercentage - 1}))`; //day, fade in

    updateMoon(percentage);
}

function nightTime(percentage) {
    moonElement.style.display = 'block';
    body.style.background = '';
    body.classList = 'night';

    updateMoon(percentage);
}

function updateMoon(percentage) {
    let y = 0;
    if (percentage >= 75) {
        x = (percentage-75) *2.2;
    } else { //percentage <= 25
        x = (percentage*2.2) + 50;
    }
    y = (0.016 * Math.pow(x, 2)) - (1.6 * x) + 50;

    let size = 5 * y
    if (size > 200) size = 200;
    moonElement.style.width = `${size}px`;
    moonElement.style.height = `${size}px`;
    
    moonElement.style.left = `${x}%`;
    moonElement.style.top = `${y}vh`;
}


function dayTime() {
    moonElement.style.display = 'none';
    body.style.background = '';
    body.classList = 'day';
}

function duskTime() {

}





/* Old Behaviour */
function toggleOldMode() {
    isOldBehaviour = !isOldBehaviour;
    if (isOldBehaviour) {
        body.classList = '';
        percentageElement.style.animation = 'spinAnimation 8s infinite';
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

function oldBackground (percentage) {
    moonElement.style.display = 'none';
    body.style.background = '';

    const redValue = Math.floor(255 - (255 * percentage / 100));
    const greenValue = Math.floor(255 * (percentage / 100));
    body.style.background = `rgb(${redValue}, ${greenValue}, 0)`;
}

function toggleAnnoyingNoise() {
    isNoisePlaying = !isNoisePlaying;
}

function getFrequencyFromSeconds(seconds) {
    const baseFrequency = 100 + (seconds / 59) * 800;
    const randomVariance = (Math.random() - 0.5) * 10; // Added random variance
    return baseFrequency + randomVariance;
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
