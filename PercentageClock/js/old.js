/* Old Behaviour */
function toggleOldMode() {
    isOldBehaviour = !isOldBehaviour;
    if (isOldBehaviour) {
        body.classList = '';
        percentageElement.style.animation = 'textAnimation 8s infinite';
        percentageElement.style.background = '#0000ff';
        percentageElement.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.7)';
        percentageElement.style.filter = 'hue-rotate(45deg) brightness(1.5) contrast(1.2)';

        sunElement.style.display = 'none';
        moonElement.style.display = 'none';
        mountainsContainer.style.display = 'none';
        cloudsContainer.style.display = 'none';


        percentageElement.addEventListener("click", toggleAnnoyingNoise);
    } else {
        percentageElement.style.animation = '';
        percentageElement.style.background = '';
        percentageElement.style.boxShadow = '';
        percentageElement.style.filter = '';

        sunElement.style.display = 'block';
        moonElement.style.display = 'block';
        mountainsContainer.style.display = 'block';
        cloudsContainer.style.display = 'block';

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