//variables
var stories = [];
var selectedStory = new Story();
var typeSpeed = 50; //milliseconds per character typed
var isTyping = false;

//Page Elements
var storySelector = document.getElementById("storySelector");
var storyDetails = document.getElementById("storyDetails");
var storyOutput = document.getElementById("storyOutput");

//Asset
var storyMusic = new Audio('data/music.mp3');

function refreshPageElements() {
    storySelector = document.getElementById("storySelector");
    storyDetails = document.getElementById("storyDetails");
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

function storySelected() {
    selectedStory = stories.find(story => story.name === storySelector.value);
    storyMusic.pause();
    storyMusic = new Audio(`data/music/${selectedStory.theme}.mp3`)

    //test
    //printStory();

    storyDetails.innerHTML = "";
    clearStory();

    //populate the storyDetails form
    var heading = document.createElement("h3");
    heading.textContent = `Theme: ${selectedStory.theme}`;
    storyDetails.appendChild(heading);

    var labelControl;
    var inputControl;
    selectedStory.missingWords.forEach(missingWord => {
        labelControl = document.createElement("label")
        inputControl = document.createElement("input")
        labelControl.innerText = missingWord.type + ":";
        labelControl.for, inputControl.id = missingWord.id + "input";
        inputControl.type = "text";

        //inputControl.value = "TEST WORD"; //test line

        storyDetails.appendChild(labelControl);
        storyDetails.appendChild(inputControl);
    });

    var submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    storyDetails.appendChild(submitButton);
    submitButton.addEventListener("click", submitDetails)
}

function submitDetails() {
    isTyping = !isTyping;
    clearStory();
    if (!isTyping) {
        return;
    }
    printStory();
}

//when the user has filled out the details on the story details
function printStory() {
    //produce story
    selectedStory.missingWords.forEach(missingWord => {
        var input = document.getElementById(missingWord.id + "input");
        missingWord.value = input.value;
    });
    let retrievedStory = selectedStory.displayStory();

    //play music?
    if (storyMusic.readyState >= 2) {
        storyMusic.play();
    }

    //print the story in an animated way?
    storyOutput.hidden = false;
    var i = 0;
    function typeWriter() {
        if (i < retrievedStory.length && isTyping) {
            storyOutput.innerHTML += retrievedStory.charAt(i);
            i++;
            setTimeout(typeWriter, typeSpeed);
        } else {
            isTyping = false;
        }
    }
    typeWriter();
}

function clearStory() {
    storyOutput.innerHTML = "";
    storyOutput.hidden = true;
    storyMusic.pause();
    storyMusic.currentTime = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    refreshPageElements();
    storySelector.value = 'placeholder';
    loadData();
});