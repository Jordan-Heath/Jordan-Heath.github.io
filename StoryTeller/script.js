//settings
var typeEffectEnabled = true;
var fadeEffectEnabled = true;
// typespeed = milliseconds in a second / letters per second
var typeSpeed = 1000 / 20; //default 20
// fadespeed = seconds to fade * milliseconds in a second / loops to completely fade
var fadeSpeed = 5 * 1000 / 100; //default 5

//variables
var stories = [];
var selectedStory;
var audioPlayer;
var typedLetter;
var isTyping = false;

//Page Elements
var customStylesheet;
var settings;
var typeEffectSetting;
var typeSpeedSetting;
var typeSpeedValue
var fadeEffectSetting;
var fadeSpeedSetting;
var storySelect;
var storySelector;
var storyDetails;
var storyDetailsForm;
var storyDetailsControls;
var submitButton;
var audioButton;
var storyOutput;


//Step 0: load page
function loadPageElements() {
    customStylesheet = document.getElementById("customStylesheet");

    settings = document.getElementById("settings");
    typeEffectSetting = document.getElementById("typeEffectSetting");
    typeSpeedSetting = document.getElementById("typeSpeedSetting");
    typeSpeedValue = document.getElementById("typeSpeedValue");
    fadeEffectSetting = document.getElementById("fadeEffectSetting");
    fadeSpeedSetting = document.getElementById("fadeSpeedSetting");

    storySelect = document.getElementById("storySelect");
    storySelector = document.getElementById("storySelector");

    storyDetails = document.getElementById("storyDetails");
    storyDetailsForm = document.getElementById("storyDetailsForm");
    storyDetailsControls = document.getElementById("storyDetailsControls");
    submitButton = document.getElementById("submitButton");
    audioButton = document.getElementById("audioButton");

    storyOutput = document.getElementById("storyOutput");
}

function loadData() {
    // Load stories from external JSON file
    fetch('https://jordan-heath.github.io/StoryTeller/data/stories.json')
        .then(response => response.json())
        .then(data => {
            // Populate select options dynamically
            data.stories.forEach(story => {
                stories.push(new Story(story.name, story.theme, story.story))
                var option = document.createElement("option");
                option.value = story.name;
                option.textContent = story.name;
                storySelector.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching stories:', error));
}

//Step 1: choose a story
function storySelected() {
    //load new story, purge old story
    selectedStory = stories.find(story => story.name === storySelector.value);
    storyDetails.style.display = "flex";
    storyDetailsForm.innerHTML = "";
    clearStory();

    //populate the storyDetails form
    var heading = document.createElement("h3");
    heading.textContent = `Theme: ${selectedStory.theme}`;
    storyDetailsForm.appendChild(heading);

    //madlibs words
    selectedStory.missingWords.forEach(missingWord => {
        var labelControl = document.createElement("label")
        var inputControl = document.createElement("input")
        labelControl.innerText = missingWord.type + ":";
        labelControl.htmlFor = missingWord.id + "input";
        inputControl.id = missingWord.id + "input";
        inputControl.type = "text";

        //inputControl.value = "TEST WORD"; //test line

        storyDetailsForm.appendChild(labelControl);
        storyDetailsForm.appendChild(inputControl);
    });

    //Manage audio
    audioPlayer.pause();
    audioPlayer.loadNewAudio(new Audio(`data/music/${selectedStory.theme}.mp3`));
    audioPlayer.attachButton(audioButton);

    //change design
    customStylesheet.href = `data/design/${selectedStory.theme}.css`;
}

//Step 2: submit details to story
function submitDetails() {
    isTyping = !isTyping;
    clearStory();
    if (!isTyping) {
        return;
    }
    printStory();
}

function printStory() {
    //compose story
    selectedStory.missingWords.forEach(missingWord => {
        var input = document.getElementById(missingWord.id + "input");
        missingWord.value = input.value;
    });
    selectedStory.composeStory();

    //tts?

    //play music?
    audioPlayer.play();

    //typewriter effect
    storyOutput.hidden = false;
    typedLetter = 0;
    typeEffectEnabled ? typeWriter() : storyOutput.innerHTML = selectedStory.completeStory;
}

function typeWriter() {
    if (!isTyping) {
        return;
    } else if (typedLetter >= selectedStory.completeStory.length) {
        isTyping = false;
        storyOutput.innerHTML = selectedStory.completeStory;
        if (fadeSpeedEnabled) { fadeMusic(); }
    } else {
        storyOutput.innerHTML += selectedStory.completeStory.charAt(typedLetter);
        typedLetter++;
        setTimeout(typeWriter, typeSpeed);
    }
}

function clearStory() {
    if (storyOutput.hidden !== true) {
        storyOutput.innerHTML = "";
        storyOutput.hidden = true;
        audioPlayer.pause();
    }
}

//Music functions
function fadeMusic() {
    if (audioPlayer.volume() > 0 && audioPlayer.isPlaying() && isTyping === false) {
        console.log(`setting volume to ${audioPlayer.volume() - 1}`);
        audioPlayer.setVolume(audioPlayer.volume() - 1);
        setTimeout(fadeMusic, fadeSpeed);
    }
}

function toggleAudio() {
    audioPlayer.isPlaying() ? audioPlayer.pause() : audioPlayer.play();
}

//Settings
function toggleSettings() {
    settings.hidden = !settings.hidden;
}

function updateSettings() {
    //update values
    typeEffectEnabled = typeEffectSetting.checked;
    typeSpeed = 1000 / typeSpeedSetting.value;
    fadeSpeedEnabled = fadeEffectSetting.checked;
    fadeSpeed = 10 * fadeSpeedSetting.value;

    //enable/disable controls
    typeSpeedSetting.disabled = !typeEffectEnabled;
    fadeEffectSetting.disabled = !typeEffectEnabled;
    fadeSpeedSetting.disabled = !typeEffectEnabled || !fadeSpeedEnabled;

    //update values
    typeSpeedValue.innerHTML = typeSpeedSetting.value;
    fadeSpeedValue.innerHTML = fadeSpeedSetting.value;
}


document.addEventListener('DOMContentLoaded', () => {
    loadPageElements();
    loadData();
    storySelector.value = 'placeholder';
    audioPlayer = new AudioPlayer();
});