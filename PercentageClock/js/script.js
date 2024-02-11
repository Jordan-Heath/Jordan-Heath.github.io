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
const nightlength = (100 - duskStartTime) + (dawnEndTime);
const daylength = duskEndTime - dawnStartTime;

//update controls
let slowMode = false;
let updateFrequency = 100; //16 is 60fps //33 is 30fps

//old behaviour
let isOldBehaviour = false;
let isNoisePlaying = false;

//testingmode
let testingMode = false;
let testingModeSpeed = updateFrequency / 1000; // % per second
let timeoffset;

function update() {
    //calculate percentage
    const now = new Date();
    //const totalMilliseconds = now.getMilliseconds() + now.getSeconds() * 1000;
    //const delay = 1000 - (totalMilliseconds % 1000);
    const totalSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    let percentage = (totalSeconds / (24 * 60 * 60)) * 100;

    //testing speed
    if (testingMode) {
        if (timeoffset === undefined) timeoffset = percentage;
        percentage = (timeoffset += testingModeSpeed) % 100;
        //dawn testing mode
        //percentage = (percentage * testingModeSpeed) % (dawnEndTime - dawnStartTime + 2) + (dawnStartTime - 1); 
        //day testing mode
        //percentage = 
        //dusk testing mode
        //percentage = (percentage * testingModeSpeed) % (duskEndTime - duskStartTime + 2) + (duskStartTime - 1); 
        //night testing mode
        //percentage = 
    }

    //background color
    if (isOldBehaviour) {
        const totalMilliseconds = now.getMilliseconds() + now.getSeconds() * 1000;
        const delay = 1000 - (totalMilliseconds % 1000);

        oldBehaviour(percentage, totalSeconds)

        percentageElement.textContent = `${percentage.toFixed(3)}%`;
        setTimeout(update, delay);
        return;
    }

    updateBackground(percentage);
    percentageElement.textContent = `${percentage.toFixed(3)}%`;

    setTimeout(update, updateFrequency);
}

function updateBackground(percentage) {
    if (isDawn(percentage)) {
        dawnTime(percentage);
    } else if (isDusk(percentage)) {
        duskTime(percentage);
    } else if (isDay(percentage)) {
        dayTime(percentage);
    } else if (isNight(percentage)) {
        nightTime(percentage);
    }

    updateSun(percentage);
    updateMoon(percentage);
}

function dawnTime(percentage) {
    body.classList = '';

    dawnPercentage = getDawnPercentage(percentage); //converts 20-25 to 0-100
    inverseDawnPercentage = 1 - dawnPercentage; //inverts 0-100 to 100-0

    let sunriseBrightness = 60 * dawnPercentage; //brighten over time
    let textBrightness = 256 * inverseDawnPercentage; //darken over time
    let opacity = (-4 * Math.pow(dawnPercentage, 2) + 4 * dawnPercentage) * maxSunsetSunriseIntensity;
    //parabola generated from: https://www.analyzemath.com/parabola/three_points_para_calc.html

    body.style.color = `rgb(${textBrightness}, ${textBrightness}, ${textBrightness})`

    let fadeInValue = (3*dawnPercentage - 1)/2;
    let fadeOutValue = (3*inverseDawnPercentage - 1)/2;

    //add a red glow to the middle, peaking at mid-dawn
    //fade in day
    //fade out night
    body.style.background = 
       `linear-gradient(to bottom, transparent, rgba(255, ${sunriseBrightness}, 0, ${opacity}), transparent),
        linear-gradient(to bottom, rgb(135, 207, 235, ${fadeInValue}), rgb(255, 255, 255, ${fadeInValue})),
        linear-gradient(to bottom, rgb(12, 20, 69, ${fadeOutValue}), rgb(0, 0, 0, ${fadeOutValue}))`; 

    //fade in clouds
    cloudsContainer.style.opacity = `${fadeInValue}`;
    starsContainer.style.opacity = `${fadeOutValue}`;
}

function dayTime(percentage) {
    body.style.color = '';
    body.style.background = '';
    cloudsContainer.style.opacity = 1;
    starsContainer.style.opacity = 0;
    body.classList = 'day';
}

function duskTime(percentage) {
    body.classList = '';

    duskPercentage = getDuskPercentage(percentage); //converts 75-80 to 0-100
    inverseDuskPercentage = 1 - duskPercentage; //inverts 0-100 to 100-0

    let sunsetBrightness = 60 * duskPercentage; //brighten over time
    let textBrightness = 255 * duskPercentage; //brighten over time
    let opacity = -1.2 * Math.pow(duskPercentage, 2) + 1.2 * duskPercentage;
    //parabola generated from: https://www.analyzemath.com/parabola/three_points_para_calc.html

    body.style.color = `rgb(${textBrightness}, ${textBrightness}, ${textBrightness})`

    let fadeInValue = (3*duskPercentage - 1)/2;
    let fadeOutValue = (3*inverseDuskPercentage - 1)/2;

    //add a red glow to the middle, peaking at mid-dusk
    //fade in night
    //fade out day
    body.style.background = 
       `linear-gradient(to bottom, transparent, rgba(255, ${sunsetBrightness}, 0, ${opacity}), transparent),
        linear-gradient(to bottom, rgb(12, 20, 69, ${fadeInValue}), rgb(0, 0, 0, ${fadeInValue})),
        linear-gradient(to bottom, rgb(135, 207, 235, ${fadeOutValue}), rgb(255, 255, 255, ${fadeOutValue}))`; 

    //fade out clouds
    cloudsContainer.style.opacity = `${fadeOutValue}`;
    starsContainer.style.opacity = `${fadeInValue}`;
}

function nightTime(percentage) {
    body.style.color = '';
    body.style.background = '';
    cloudsContainer.style.opacity = 0;
    starsContainer.style.opacity = 1;
    body.classList = 'night';
}

function updateSun(percentage) {
    if (!isDay(percentage)) {
        sunElement.style.display = 'none';
        return;
    }
    sunElement.style.display = 'block';
    let dayPercentage = getDayPercentage(percentage);

    let x = dayPercentage * 110 - 5;
    let y = (0.016 * Math.pow(x, 2)) - (1.6 * x) + 50;
    //parabola generated from: https://www.analyzemath.com/parabola/three_points_para_calc.html

    let size = `${20 - (y / 10)}vh`

    //if (size > 200) size = 200;
    sunElement.style.width = size;
    sunElement.style.height = size;
    
    sunElement.style.left = `${x}vw`;
    sunElement.style.top = `${y}vh`;
}

function updateMoon(percentage) {
    if (!isNight(percentage)) {
        moonElement.style.display = 'none';
        return;
    }
    moonElement.style.display = 'block';
    let nightPercentage = getNightPercentage(percentage);

    let x = nightPercentage * 110 -5;
    let y = (0.016 * Math.pow(x, 2)) - (1.6 * x) + 50;
    //parabola generated from: https://www.analyzemath.com/parabola/three_points_para_calc.html

    let size = `${16 - 0.8*(y / 10)}vh`

    //if (size > 200) size = 200;
    moonElement.style.width = size;
    moonElement.style.height = size;
    
    moonElement.style.left = `${x}vw`;
    moonElement.style.top = `${y}vh`;
}

document.addEventListener("DOMContentLoaded", () => {
    update();
});