//variables
var stories = [];
var selectedStory = new Story("none", "none", "none");

//Page Elements
var storySelector = document.getElementById("storySelector");
var storyDetails = document.getElementById("storyDetails");
var storyOutput = document.getElementById("storyOutput");

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
            // Update the global stories variable
            stories = data.stories;

            // Populate select options dynamically
            stories.forEach(story => {
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

    //test
    //printStory();

    //populate the storyDetails form
    var heading = document.createElement("h2");
    heading.textContent = selectedStory.name;
    storyDetails.appendChild(heading);
}

//when the user has filled out the details on the story details
function printStory() {
    //confirm details are filled out

    //print the story in an animated way?
    //play music?
    //read the story with tts?

    storyOutput.innerHTML = selectedStory.displayStory();
}





document.addEventListener('DOMContentLoaded', () => {
    refreshPageElements();
    loadData();
});