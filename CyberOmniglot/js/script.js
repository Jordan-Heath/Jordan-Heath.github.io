// Open a main element
function openMain(mainName = "crewmates") {
    save.setOpenedMain(mainName);

    // Stop any speaking
    stopSpeaking();

    // Hide all main elements, show the selected one
    const mainElements = document.querySelectorAll("main");
    mainElements.forEach(mainElement => {
        mainElement.style.display = "none";
    });
    const mainElement = document.querySelector(`#${mainName}`);
    mainElement.style.display = "block";

    // Remove selected class from all nav buttons, then add it to the selected one
    const navButtons = document.querySelectorAll(".nav-button");
    navButtons.forEach(navButton => {
        navButton.classList.remove("selected");
    });
    const navButton = document.querySelector(`#${mainName}-button`);
    navButton.classList.add("selected");

    // Trigger the render function for the selected main
    switch (mainName) {
        case "crewmates":
            renderCrewmates();
            break;
        case "dictionary":
            renderDictionary();
            break;
        case "configuration":
            renderConfiguration();
            break;
        default:
            break;
    }
}

// #region Crewmates

// render crewmates
function renderCrewmates() {
    populateNPCSelector();
    selectNPC(save.getSelectedNpc().name);
}

// Populate NPC selector
function populateNPCSelector() {
    const selector = document.querySelector(".npc-selector");
    selector.innerHTML = "<p id='npc-selector-title'>Select Crewmate</p>"; // Clear existing NPC buttons

    function createButton(npcName) {
        const button = document.createElement("button");
        button.textContent = npcName;
        button.dataset.npc = npcName;
        button.classList.add("npc-button");
        button.addEventListener("click", () => selectNPC(npcName));
        return button;
    }

    // If Professor Quill hasn't been unlocked, show Professor Quill as ???
    if (!save.hasTopic("Professor Quill")) {
        selector.appendChild(createButton("???"));
    }

    // Create a button for each NPC
    Object.keys(data.npcs).forEach(npcName => {
        if (save.hasTopic(npcName)) {
            selector.appendChild(createButton(npcName));
        }
    });

    // Highlight the button of the selected NPC
    const selectedButton = selector.querySelector(`.npc-button[data-npc="${save.selectedNPC}"]`);
    if (selectedButton) {
        selectedButton.classList.add("selected");
    }
}

// Select NPC
function selectNPC(npcName = "Professor Quill") {
    const selectedNpc = save.setSelectedNPC(npcName);
    stopSpeaking();

    // Set NPC portrait
    const npcPortrait = document.getElementById("npc-portrait");
    npcPortrait.src = `images/${npcName.toLowerCase()}.png`;
    npcPortrait.alt = npcName;

    // Set NPC name
    const npcNameElement = document.getElementById("npc-name");
    npcNameElement.innerHTML = save.hasTopic(npcName) ? selectedNpc.name : "???";

    // Set NPC role
    const npcRoleElement = document.getElementById("npc-role");
    npcRoleElement.innerHTML = save.hasTopic(npcName) ? selectedNpc.role : "???";

    // Update progress bar
    updateNpcProgressBar();

    // Clear responses box
    const responsesElement = document.getElementById("responses");
    responsesElement.innerHTML = "[Click a topic to talk.]";

    // Highlight selected NPC button
    const npcButtons = document.querySelectorAll(".npc-button");
    npcButtons.forEach(button => {
        button.classList.remove("selected");
    });
    const selectedButton = document.querySelector(`.npc-button[data-npc="${npcName}"]`);
    if (selectedButton) selectedButton.classList.add("selected");

    // Update topics box
    populateTopics();
}

// Speak
function speak(textToSpeak, voiceName = null, pitch = 1, rate = 1.2) {
    // clean up text by removing any words with <a> tags and any text within <> or [] brackets
    let cleanText = textToSpeak.replace(/<a[^>]*>(.*?)<\/a>/g, "error");
    cleanText = cleanText.replace(/<[^>]*>/g, "");
    cleanText = cleanText.replace(/\[[^\]]*\]/g, "");

    const utterance = new SpeechSynthesisUtterance(cleanText);

    if (voiceName) {
        const voiceMatch = speechSynthesis.getVoices().find(voice => voice.name === voiceName);
        if (voiceMatch) {
            utterance.voice = voiceMatch;
            utterance.pitch = pitch;
            utterance.rate = rate;
        }
    }

    stopSpeaking();
    speechSynthesis.speak(utterance);
}

// Stop speaking
function stopSpeaking() {
    speechSynthesis.cancel();
}

// Select topic
function selectTopic(topicName) {
    const responseContainer = document.getElementById("responses");
    const npcNameElement = document.getElementById("npc-name");

    const selectedNpc = save.getSelectedNpc();
    const response = selectedNpc.topics[topicName];

    // Add topic to asked topics
    if (save.addAskedQuestion(selectedNpc.name, topicName)) {
        populateTopics();
        updateNpcProgressBar();
    }

    // Add any new topics mentioned in the response to unlocked topics
    allTopics.forEach(topicKey => {
        if (response.toLowerCase().includes(topicKey.toLowerCase())) {
            if (save.addTopic(topicKey)) {
                populateTopics();

                // if the topic is also the name of an NPC, update npc name and run populateNPCSelector
                if (data.npcs[topicKey] !== undefined) {
                    npcNameElement.innerHTML = selectedNpc.name;
                    populateNPCSelector();
                }
            }
        }
    });

    // Highlight any topics found in the response by splitting
    let highlightedResponse = response;
    Object.keys(selectedNpc.topics).forEach(topic => {
        const regex = new RegExp(`(${topic})`, 'gi');
        highlightedResponse = highlightedResponse.split(regex).map(part => {
            const matchedTextParsed = save.parseTextByDictionary(part);
            return part.toLowerCase() === topic.toLowerCase()
                ? `<span class='highlight' onclick='selectTopic("${part.charAt(0).toUpperCase() + part.slice(1)}")'>${matchedTextParsed}</span>`
                : part;
        }).join('');
    });

    // Render the response
    responseContainer.insertAdjacentHTML(
        "beforeend",
        `
            <h3>${save.parseTextByDictionary(topicName)}</h3>
            <div class='response'>
                ${highlightedResponse}
            </div>
        `
    );

    // Speak the response
    if (save.settings['textToSpeech'])
        speak(highlightedResponse, selectedNpc.voice, selectedNpc.pitch, selectedNpc.rate);

    // Scroll to the bottom of the response
    responseContainer.scrollTop = responseContainer.scrollHeight;
}

// Populate topics
function populateTopics() {
    const topicsContainer = document.getElementById("topics");
    const selectedNpc = save.getSelectedNpc();

    // Clear topics container
    topicsContainer.innerHTML = "";

    // Loop over topics
    for (const topicName in selectedNpc.topics) {
        // Only show unlocked topics
        if (!save.hasTopic(topicName)) continue;

        // Replace topic name with dictionary value if available
        const parsedTopicName = save.parseTextByDictionary(topicName);

        // Create topic element
        const topicElement = document.createElement("div");
        topicElement.innerHTML = parsedTopicName;
        topicElement.classList.add("topic");

        // Highlight topics that have not been asked
        if (!save.askedQuestions[selectedNpc.name]) {
            save.askedQuestions[selectedNpc.name] = [];
        }
        if (!save.hasAskedQuestion(selectedNpc.name, topicName)) {
            topicElement.classList.add("highlight");
        }

        // Add "Select Topic" click event
        topicElement.addEventListener("click", () => {
            selectTopic(topicName);
        });

        // Add topic to topics container
        topicsContainer.appendChild(topicElement);
    }
}

// Update Progress Bar
function updateNpcProgressBar() {
    const NpcProgressContainer = document.getElementById("npc-progress-container");

    // progress is how many of the topics the selected NPC has been asked, out of the total number of topics they have available
    const selectedNpc = save.getSelectedNpc();
    const totalTopics = Object.keys(selectedNpc.topics).length;
    const askedTopics = Object.keys(save.askedQuestions[selectedNpc.name] || {}).length;
    const progress = (askedTopics / totalTopics) * 100;

    document.getElementById("npc-progress-bar-fill").style.width = `${progress}%`;
    document.getElementById("npc-progress-bar-text").innerHTML = `${askedTopics} of ${totalTopics} questions asked`;
}

//#endregion Crewmates

// #region Dictionary

// Populate dictionary
function renderDictionary() {
    updateDictionaryProgressBar();

    const dictionaryTerms = document.getElementById("dictionary-terms");
    dictionaryTerms.innerHTML = ""; // Clear existing dictionary entries

    // Build a select element which contains all the dictionary definitions
    const selectElement = document.createElement("select");
    selectElement.appendChild(document.createElement("option"));
    Object.values(data.dictionary).forEach(dictionaryWord => {

        // if the word is not in the dictionary or the word is not locked
        if (!save.dictionary[dictionaryWord.term] || !save.dictionary[dictionaryWord.term].locked) {
            const optionElement = document.createElement("option");
            optionElement.value = dictionaryWord.definition;
            optionElement.innerHTML = dictionaryWord.definition;
            selectElement.appendChild(optionElement);
        }
    });

    // Add all known "unknown words" to the dictionary
    Object.values(data.dictionary).forEach(dictionaryWord => {
        if (save.hasTopic(dictionaryWord.term)) {
            const existingEntry = save.dictionary[dictionaryWord.term];
            const savedDictionaryName = existingEntry?.term || "";

            // Create the term element
            const termElement = document.createElement("div");
            termElement.classList.add("dictionary-term");
            dictionaryTerms.appendChild(termElement);

            // Term and assigned name - assign the save.dictionary
            termElement.innerHTML = 
            `<strong>${dictionaryWord.term}</strong>: 
            <input type="text" 
                value="${savedDictionaryName}" 
                data-term="${dictionaryWord.term}" 
                placeholder="Enter a name" 
                onkeyup="save.addDictionaryEntry(this.dataset.term, this.value, null)"/>
            <br />`;

            // Meaning and select element
            if (!existingEntry || !existingEntry.locked) {
                // add the select element if the answer has not been locked in
                termElement.innerHTML += `<label>Meaning:</label> <select>${selectElement.innerHTML}</select>`;
                const newSelectElement = termElement.querySelector("select");
                newSelectElement.classList.add("dictionary-select");
                newSelectElement.dataset.term = dictionaryWord.term;
                newSelectElement.value = save.dictionary[dictionaryWord.term]?.definition;
                newSelectElement.addEventListener("change", (e) => {
                    save.addDictionaryEntry(dictionaryWord.term, null, e.target.value);
                    checkAnswers();
                });
            } else {
                // if the answer has been locked in, show the selected value
                termElement.innerHTML += `<label>Meaning:</label> <span>${existingEntry.definition}</span>`;
            }
        }
    });
}

function updateDictionaryProgressBar() {
    const wordsFound = Object.keys(save.dictionary).length;
    const totalWords = Object.keys(data.dictionary).length;
    const wordsNamed = Object.keys(save.dictionary).filter(word => save.dictionary[word].term !== null).length;
    const wordsLocked = Object.keys(save.dictionary).filter(word => save.dictionary[word].locked).length;

    document.getElementById("words-found-progress-bar-fill").style.width = `${(wordsFound / totalWords) * 100}%`;
    document.getElementById("words-named-progress-bar-fill").style.width = `${(wordsNamed / wordsFound) * 100}%`;
    document.getElementById("words-defined-progress-bar-fill").style.width = `${(wordsLocked / wordsFound) * 100}%`;

    document.getElementById("words-found-progress-bar-text").innerHTML = `${wordsFound} of ${totalWords} words found`;
    document.getElementById("words-named-progress-bar-text").innerHTML = `${wordsNamed} of ${wordsFound} words named`;
    document.getElementById("words-defined-progress-bar-text").innerHTML = `${wordsLocked} of ${wordsFound} words defined`;
}

function checkAnswers() {
    // checks the selectors to see if they match the dictionary
    let correctAnswers = [];
    const dictionarySelectors = document.querySelectorAll(".dictionary-select");

    dictionarySelectors.forEach(selector => {
        if (data.dictionary[selector.dataset.term]?.definition === selector.value) {
            correctAnswers.push(selector.dataset.term);
        }
    });

    // if 3 or more are correct, lock them in.
    if (correctAnswers.length >= 3) {
        // lock in the correct answers
        correctAnswers.forEach(answer => {
            save.dictionary[answer].locked = true;
            save.saveToLocalStorage();
        });

        // remove the dictionary selectors
        renderDictionary();
    }
}

//#endregion Dictionary

// #region Configuration

// Populate Configuration
function renderConfiguration() {
    document.getElementById("text-to-speech-setting").checked = save.settings.textToSpeech;
}

// #endregion Configuration

// load the page
document.addEventListener("DOMContentLoaded", () => {
    save.loadFromLocalStorage();
    openMain(save.openedMain);
});