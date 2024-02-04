// Settings
var typeEffectEnabled = true;
var fadeEffectEnabled = true;
var typeSpeed = 1000 / 20; // milliseconds in a second / letters per second
var fadeSpeed = 5 * 1000 / 100; // seconds to fade * milliseconds in a second / loops to completely fade

//variables
var stories = [];
var selectedStory;
var audioPlayer;
var typedLetter;
var isTyping = false;

// Page Elements
var customStylesheet, settings, typeEffectSetting, typeSpeedSetting, typeSpeedValue,
    fadeEffectSetting, fadeSpeedSetting, storySelect, storySelector,
    storyDetailsForm, storyDetailsControls, submitButton, clearButton, audioButton, 
    storyOutput;

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

    storyDetailsForm = document.getElementById("storyDetailsForm");
    storyDetailsControls = document.getElementById("storyDetailsControls");
    submitButton = document.getElementById("submitButton");
    clearButton = document.getElementById("clearButton");
    audioButton = document.getElementById("audioButton");

    storyOutput = document.getElementById("storyOutput");
}

// Step 1: Load data
function loadData() {
    fetch('https://jordan-heath.github.io/StoryTeller/data/stories.json')
        .then(response => response.json())
        .then(data => data.stories.forEach(jsonStory => addStory(new Story(jsonStory.name, jsonStory.theme, jsonStory.story))))
        .catch(error => console.error('Error fetching stories:', error));
}

function addStory(story) {
    stories.push(story)
    var option = document.createElement("option");
    option.value = story.name;
    option.textContent = `${story.theme}: ${story.name} (${story.missingWords.length})`;
    storySelector.appendChild(option);
}

//Step 1: choose a story
function storySelected() {
    selectedStory = stories.find(story => story.name === storySelector.value);
    storyDetailsControls.style.display = "flex";
    storyDetailsForm.innerHTML = "";
    if (storyOutput.innerText !== "") clearStory();


    //madlibs words
    selectedStory.missingWords.forEach(missingWord => {
        var labelControl = document.createElement("label")
        var inputControl = document.createElement("input")
        labelControl.innerText = missingWord.type + ":";
        labelControl.htmlFor = missingWord.id + "input";
        inputControl.id = missingWord.id + "input";
        inputControl.type = "text";

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
function submitStory() {
    selectedStory.composeStory();
    writeStory();
    audioPlayer.play();
    storyDetailsForm.style.display = "none";
    storyOutput.style.display = "block";
    submitButton.style.display = "none";
    clearButton.style.display = "inline";
}

function clearStory() {
    storyOutput.innerHTML = "";
    audioPlayer.pause();
    storyDetailsForm.style.display = "flex";
    storyOutput.style.display = "none";
    submitButton.style.display = "inline";
    clearButton.style.display = "none";
}

function writeStory() {
    function fadeMusic() {
        if (audioPlayer.volume() > 0 && audioPlayer.isPlaying()) {
            audioPlayer.setVolume(audioPlayer.volume() - 1);
            setTimeout(fadeMusic, fadeSpeed);
        }
    }

    function typeWriter() {
        if (typedLetter > 0 && storyOutput.innerText === "") {
            return;
        } else if (typedLetter >= selectedStory.completeStory.length) {
            storyOutput.innerHTML = selectedStory.completeStory;
            if (fadeEffectEnabled) fadeMusic();
        } else {
            storyOutput.innerHTML += selectedStory.completeStory.charAt(typedLetter);
            typedLetter++;
            setTimeout(typeWriter, typeSpeed);
        }
    }

    //typewriter effect
    typedLetter = 0;
    if (typeEffectEnabled) {
        typeWriter();
    } else {
        storyOutput.innerText = selectedStory.completeStory;
    }
}



//Settings
function toggleSettings() {
    settings.hidden = !settings.hidden;
}

function updateSettings() {
    //update values
    typeEffectEnabled = typeEffectSetting.checked;
    typeSpeed = 1000 / typeSpeedSetting.value;
    fadeEffectEnabled = fadeEffectSetting.checked;
    fadeSpeed = 10 * fadeSpeedSetting.value;

    //enable/disable controls
    typeSpeedSetting.disabled = !typeEffectEnabled;
    fadeEffectSetting.disabled = !typeEffectEnabled;
    fadeSpeedSetting.disabled = !typeEffectEnabled || !fadeEffectEnabled;

    //update values
    typeSpeedValue.innerHTML = typeSpeedSetting.value;
    fadeSpeedValue.innerHTML = fadeSpeedSetting.value;
}

function selectFile() {
    var fileInput = document.getElementById('fileInput');
    fileInput.click();
    fileInput.addEventListener('change', loadFile);
}

function loadFile() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function (event) {
            var fileContent = event.target.result;

            try {
                var jsonData = JSON.parse(fileContent);

                // Create a new Story instance using the loaded JSON data
                var story = new Story(jsonData.name, jsonData.theme, jsonData.story);

                //add and select story
                addStory(story);
                storySelector.value = story.name;
                storySelected();

            } catch (error) {
                console.error('Error parsing JSON content:', error);
                alert('Error parsing JSON content. Please check the format.');
            }
        };

        reader.readAsText(file);
    } else {
        alert('Please select a file.');
    }
}

function toggleAudio() {
    audioPlayer.isPlaying() ? audioPlayer.pause() : audioPlayer.play();
}


document.addEventListener('DOMContentLoaded', () => {
    loadPageElements();
    loadData();
    updateSettings();
    storySelector.value = 'placeholder';
    audioPlayer = new AudioPlayer();
    clearStory();
});