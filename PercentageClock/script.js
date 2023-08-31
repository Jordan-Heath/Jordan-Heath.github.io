document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const percentageElement = document.querySelector(".percentage");
    const starsContainer = document.querySelector(".stars-container");
    let isNoisePlaying = false;

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

    function update() {
        const now = new Date();
        const totalMilliseconds = now.getMilliseconds() + now.getSeconds() * 1000;
        const delay = 1000 - (totalMilliseconds % 1000);
        const totalSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        const percentage = (totalSeconds / (24 * 60 * 60)) * 100;
        percentageElement.textContent = `${percentage.toFixed(3)}%`;

        const redValue = Math.floor(255 * (1 - percentage / 100));
        const greenValue = Math.floor(255 * (percentage / 100));
        body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, 0)`;

        if (isNoisePlaying) {
            const frequency = getFrequencyFromSeconds(totalSeconds % 60);
            playTone(frequency, 0.2);
        }

        percentageElement.classList.remove("animated");
        void percentageElement.offsetWidth;
        percentageElement.classList.add("animated");

        setTimeout(update, delay);
    }

    function toggleAnnoyingNoise() {
        isNoisePlaying = !isNoisePlaying;
    }

    window.toggleAnnoyingNoise = toggleAnnoyingNoise;

    update();
});
