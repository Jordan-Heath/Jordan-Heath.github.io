//variables
var stories = [];
var selectedStory = new Story("none", "none", "none");

//Page Elements
var storySelector = document.getElementById("storySelector");
var storyOutput = document.getElementById("storyOutput");

function refreshPageElements() {
    storySelector = document.getElementById("storySelector");
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

    //fill the story selector
}

function storySelected() {
    // Get the selected value
    var selectedStoryName = storySelector.value;

    // Find the selected story from the global stories array
    var selectedStory = stories.find(story => story.name === selectedStoryName);

    // Display the selected story
    storyOutput.innerHTML = "<h2>" + selectedStory.name + "</h2><p><strong>Theme:</strong> " + selectedStory.theme + "</p><p>" + selectedStory.story + "</p>";

    //populate the storyDetails form
}

//when the user has filled out the details on the story details
function printStory() {
    //confirm details are filled out

    //print the story in an animated way?
    //play music?
    //read the story with tts?
}





document.addEventListener('DOMContentLoaded', () => {
    refreshPageElements();
    loadData();
});