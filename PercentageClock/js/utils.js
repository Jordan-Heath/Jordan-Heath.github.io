function isDay(percentage) {
    // day lasts from the start of dawn til the end of dusk
    return dawnStartTime < percentage && percentage <= duskEndTime;
}
function isNight(percentage) {
    // night lasts from the start of dusk til the end of dawn
    return duskStartTime < percentage || percentage <= dawnEndTime;
}
function isDawn(percentage) {
    //dawn is the early overlap of day and night
    return dawnStartTime < percentage && percentage <= dawnEndTime;
}
function isDusk(percentage) {
    //dawn is the late overlap of day and night
    return duskStartTime < percentage && percentage <= duskEndTime;
}

function getDawnPercentage(percentage) {
    return (percentage-dawnStartTime) * (100 / (dawnEndTime - dawnStartTime)) / 100
}

function getDayPercentage(percentage) {
    return (percentage - dawnStartTime) / (duskEndTime - dawnStartTime);
}

function getDuskPercentage(percentage) {
    return (percentage-duskStartTime) * (100 / (duskEndTime - duskStartTime)) / 100;
}

function getNightPercentage(percentage) {
    let nightPercentage;

    if (percentage >= duskStartTime) {
        nightPercentage = (percentage - duskStartTime) / ((100 - duskStartTime) / nightlength) / 100;
    } else if (percentage < dawnEndTime) {
        nightPercentage = (percentage + (100 - duskStartTime)) / nightlength;
    }

    return nightPercentage;
}