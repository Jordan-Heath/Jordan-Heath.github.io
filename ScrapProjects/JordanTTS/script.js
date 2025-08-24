let coughFrequency = 0.10;
const coughSounds = [
    new Audio(`audio/cough1.mp3`),
    new Audio(`audio/cough2.mp3`),
    new Audio(`audio/cough3.mp3`),
    new Audio(`audio/cough4.mp3`),
    new Audio(`audio/cough5.mp3`),
    new Audio(`audio/cough6.mp3`),
    new Audio(`audio/cough7.mp3`),
    new Audio(`audio/cough8.mp3`)
];

function populateVoiceList() {
    const voiceSelect = document.getElementById('voices');

    const voices = speechSynthesis.getVoices();

    voices.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    voiceSelect.innerHTML = '';
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.textContent = `${voice.name}`;
        voiceSelect.appendChild(option);
    });
}

function updateCoughFrequency() {
    coughFrequency = document.getElementById('coughFrequency').value;
    document.getElementById('coughFrequencyValue').textContent = coughFrequency;
}

function selectVoice() {
    // have the voice introduce themself
    speakText(["Hello testing 1 2 3"], 0);
}

function speakButton() {
    document.getElementById('speakButton').disabled = true;

    const rawText = document.getElementById('text').value;
    const words = rawText.split(' ');
    let sentences = [""];
    let sentenceCount = 0;

    // create sentences from the split words, adding coughs in between
    for (let i = 0; i < words.length; i++) {

        // add the word to the current sentence
        sentences[sentenceCount] = sentences[sentenceCount] ? sentences[sentenceCount] + " " + words[i] : words[i];

        // check if a cough should be added
        if (Math.random() < coughFrequency) {
            // add a cough sound, then a new sentence begins
            sentenceCount++;
        }
    }
    
    console.log(sentences);
    speakText(sentences, 0);
}

function cough(sentences, index = 0) {
    const coughSound = coughSounds[Math.floor(Math.random() * coughSounds.length)];

    coughSound.volume = 0.5;
    coughSound.currentTime = 0;
    coughSound.play();

    coughSound.onended = () => {
        if (Math.random() < coughFrequency) {
            cough(sentences, index);
        } else if (index < sentences.length) {
            speakText(sentences, index);
        } else {
            document.getElementById('speakButton').disabled = false;
        }
    }
}

function speakText(sentences, index = 0) {
    const voiceSelect = document.getElementById('voices');

    const utterance = new SpeechSynthesisUtterance(sentences[index]);
    const selectedVoice = voiceSelect.value;
    utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === selectedVoice);
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);

    // when the utterance is done speaking, cough
    utterance.onend = () => {
        index++;

        if (index < sentences.length || Math.random() < coughFrequency) {
            cough(sentences, index);
        }
    }
}

document.addEventListener("DOMContentLoaded", () =>{
    populateVoiceList();
    updateCoughFrequency();
});