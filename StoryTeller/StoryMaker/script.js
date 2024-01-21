function addReplacementPair() {
    var replacementPairsDiv = document.getElementById('replacementPairs');

    // Create a new pair of text boxes
    var newPair = document.createElement('div');
    newPair.className = 'replacementPair';

    // Create text box for the word to be replaced
    var replaceWordInput = document.createElement('input');
    replaceWordInput.type = 'text';
    replaceWordInput.className = 'replaceWord';
    replaceWordInput.required = true;

    // Create text box for the replacement word
    var replacementInput = document.createElement('input');
    replacementInput.type = 'text';
    replacementInput.className = 'replacement';
    replacementInput.required = true;

    // Create remove button
    var removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = '-';
    removeButton.onclick = function () {
        removeReplacementPair(this);
    };

    // Append text boxes and remove button to the new pair
    newPair.appendChild(document.createTextNode('Replace Word'));
    newPair.appendChild(replaceWordInput);
    newPair.appendChild(document.createTextNode(' With a '));
    newPair.appendChild(replacementInput);
    newPair.appendChild(removeButton);

    // Append the new pair to the replacementPairsDiv
    replacementPairsDiv.appendChild(newPair);
}

function removeReplacementPair(button) {
    // Get the parent element (replacementPair div)
    var pairDiv = button.parentNode;

    // Remove the parent element from the DOM
    pairDiv.parentNode.removeChild(pairDiv);
}

function convertToJSON() {
    // Get values from form
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    nameInput.style.backgroundColor = isEmpty(name) ? '#ffcccc' : '';

    var themeSelect = document.getElementById('theme');
    var theme = themeSelect.value;
    themeSelect.style.backgroundColor = isEmpty(theme) ? '#ffcccc' : '';

    var storyTextarea = document.getElementById('story');
    var story = storyTextarea.value;
    storyTextarea.style.backgroundColor = isEmpty(story) ? '#ffcccc' : '';

    // Get word replacement pairs
    var replacementPairs = document.querySelectorAll('.replacementPair');

    // Function to check if a string is empty
    function isEmpty(str) {
        return str === "";
    }

    // Function to apply red background if a pair is empty
    function applyRedBackground(pair) {
        var replaceWord = pair.querySelector('.replaceWord').value;
        var replacement = pair.querySelector('.replacement').value;
        var isEmptyPair = isEmpty(replaceWord) || isEmpty(replacement);
        pair.style.backgroundColor = isEmptyPair ? '#ffcccc' : '';
        return isEmptyPair;
    }


    // Get replacement words and perform replacements in the story text
    var replacementWords = [];
    replacementPairs.forEach(function (pair) {
        applyRedBackground(pair)

        var replaceWord = pair.querySelector('.replaceWord').value;
        var replacement = pair.querySelector('.replacement').value;

        // Check if replacement is empty
        if (replacement === "") {
            var regex = new RegExp(replaceWord, 'gi');
            story = story.replace(regex, '');
        } else {
            var foundReplacement = replacementWords.find(function (item) {
                return item.string === replacement;
            });

            if (foundReplacement) {
                foundReplacement.int++;
            } else {
                replacementWords.push({ string: replacement, int: 1 });
            }

            var regex = new RegExp(replaceWord, 'gi');
            story = story.replace(regex, `<${replacement.toUpperCase()}${foundReplacement ? foundReplacement.int : 1}>`);
        }
    });

    // Create a JavaScript object
    var storyObject = {
        name: name,
        theme: theme,
        story: story
    };

    // Convert the object to JSON
    var jsonOutput = JSON.stringify(storyObject, null, 2);

    // Display the JSON output
    document.getElementById('jsonOutput').value = jsonOutput;
}


// Function to fetch themes from JSON file and populate the select menu
function populateThemes() {
    var selectMenu = document.getElementById('theme');

    // Fetch the themes.json file
    fetch('https://jordan-heath.github.io/StoryTeller/data/themes.json')
        .then(response => response.json())
        .then(data => {
            // Iterate through the themes and add options to the select menu
            data.themes.forEach(theme => {
                var option = document.createElement('option');
                option.value = theme;
                option.text = theme;
                selectMenu.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching themes:', error));
}

// Call the function to populate themes when the page loads
window.onload = populateThemes;