function toggleSlowMode() {
    slowMode = !slowMode;
    slowMode ? updateFrequency = 1000 : updateFrequency = 100;
    testingModeSpeed = updateFrequency / 1000;
}

function toggleTestMode() {
    testingMode = !testingMode;
}