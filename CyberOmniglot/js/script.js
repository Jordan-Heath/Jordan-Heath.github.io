// open main
function openMain(mainname = "crewmates") {
    save.setOpenedMain(mainname);

    // stop any speaking
    stopSpeaking();

    // hide all mains, show the selected one
    const main = document.querySelector(`#${mainname}`);
    const mains = document.querySelectorAll("main");
    mains.forEach(main => {
        main.style.display = "none";
    });
    main.style.display = "block";

    // remove selected class from all buttons, then add it to the selected one
    const navButtons = document.querySelectorAll(".nav-button");
    navButtons.forEach(button => {
        button.classList.remove("selected");
    });
    const mainButton = document.querySelector(`#${mainname}-button`);
    mainButton.classList.add("selected");

    // trigger the render function for the selected main
    switch (mainname) {
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
    selectNPC(save.getSelectedNPC().name);
}

// build npc selector from data
function populateNPCSelector() {
    const npcSelector = document.querySelector(".npc-selector");
    npcSelector.innerHTML = ""; // Clear existing NPC buttons

    // If professor quill hasn't been unlocked, show Professor Quill as ???
    if (!save.hasTopic("Professor Quill")) {
        const npcButton = document.createElement("button");
        npcButton.innerHTML = "???";
        npcButton.classList.add("npc-button");
        npcButton.setAttribute("data-npc", "Professor Quill");
        npcButton.addEventListener("click", () => selectNPC("Professor Quill"));
        npcSelector.appendChild(npcButton);
    }

    Object.keys(data.npcs).forEach(npcName => {
        if (save.hasTopic(npcName)) {
            const npcButton = document.createElement("button");
            npcButton.innerHTML = npcName;
            npcButton.classList.add("npc-button");
            npcButton.setAttribute("data-npc", npcName);
            npcButton.addEventListener("click", () => selectNPC(npcName));
            npcSelector.appendChild(npcButton);
        }
    });

    // highlight the button of the selected NPC
    const selectedButton = document.querySelector(`.npc-button[data-npc="${save.getSelectedNPC().name}"]`);
    if (selectedButton) {
        selectedButton.classList.add("selected");
    }
}

// Select NPC
function selectNPC(npcName = "Professor Quill") {
    save.setSelectedNPC(npcName);

    // Print NPC portrait
    document.getElementById("npc-portrait").src = `images/${npcName.toLowerCase()}.png`;
    document.getElementById("npc-portrait").alt = npcName;

    // Print NPC name - If the NPC is not unlocked, show ??? as the name
    document.getElementById("npc-name").innerHTML = save.hasTopic(npcName) ? save.getSelectedNPC().name : "???";

    // Clear responses box
    document.getElementById("responses").innerHTML = "[Click a topic to talk.]";

    // update the npc selector buttons
    const npcButtons = document.querySelectorAll(".npc-button");
    npcButtons.forEach(npcButton => {
        npcButton.classList.remove("selected");
    });
    const selectedButton = document.querySelector(`.npc-button[data-npc="${npcName}"]`);
    selectedButton.classList.add("selected");

    // update the topics box
    populateTopics();
}

// Speak
function speak(text, voiceName = null, pitch = 1, rate = 1.2) {
    // any words with <a> tags should be replaced with "error" text
    text = text.replace(/<a[^>]*>(.*?)<\/a>/g, "error");

    // remove any text within <> brackets
    text = text.replace(/<[^>]*>/g, "");
    // remove any text within [] brackets
    text = text.replace(/\[[^\]]*\]/g, "");

    const u = new SpeechSynthesisUtterance(text);
    if (voiceName) {
        const match = speechSynthesis.getVoices().find(v => v.name === voiceName);
        if (match) {
            u.voice = match;
            u.pitch = pitch;
            u.rate = rate;
        }
    }

    stopSpeaking();
    speechSynthesis.speak(u);
}

// Stop speaking
function stopSpeaking() {
    speechSynthesis.cancel();
}

// Select topic
function selectTopic(topic) {
    const responseContainer = document.getElementById("responses");
    const npcNameElement = document.getElementById("npc-name");

    const selectedNPC = save.getSelectedNPC();
    const response = selectedNPC.topics[topic];

    // Add topic to asked topics
    if (save.addAskedQuestion(selectedNPC.name, topic)) {
        populateTopics();
    }

    // Add any new topics mentioned in the response to unlocked topics
    allTopics.forEach(topicKey => {
        if (response.toLowerCase().includes(topicKey.toLowerCase())) {
            if (save.addTopic(topicKey)) {
                populateTopics();

                // if the topic is also the name of an NPC, update npc name and run populateNPCSelector
                if (data.npcs[topicKey] !== undefined) {
                    npcNameElement.innerHTML = selectedNPC.name;
                    populateNPCSelector();
                }
            }
        }
    });

    // Highlight any topics found in the response by splitting
    let highlightedResponse = response;
    Object.keys(selectedNPC.topics).forEach(topic => {
        const regex = new RegExp(`(${topic})`, 'gi');
        highlightedResponse = highlightedResponse.split(regex).map(part => {
            const matchedTextParsed = save.parseByDictionary(part);
            return part.toLowerCase() === topic.toLowerCase()
                ? `<span class='highlight' onclick='selectTopic("${part.charAt(0).toUpperCase() + part.slice(1)}")'>${matchedTextParsed}</span>`
                : part;
        }).join('');
    });

    // Render the response
    responseContainer.insertAdjacentHTML(
        "beforeend",
        `
            <h3>${save.parseByDictionary(topic)}</h3>
            <div class='response'>
                ${highlightedResponse}
            </div>
        `
    );

    // Speak the response
    if (save.settings['textToSpeech'])
        speak(highlightedResponse, selectedNPC.voice, selectedNPC.pitch, selectedNPC.rate);

    // Scroll to the bottom of the response
    responseContainer.scrollTop = responseContainer.scrollHeight;
}

// Populate topics
function populateTopics() {
    const topicsContainer = document.getElementById("topics");
    const selectedNPC = save.getSelectedNPC();

    // Clear topics container
    topicsContainer.innerHTML = "";

    // Loop over topics
    for (const rawTopicName in selectedNPC.topics) {
        // Only show unlocked topics
        if (!save.hasTopic(rawTopicName)) continue;

        // if the topic is in save.dictionary, replace it with the dictionary value
        const parsedTopicName = save.parseByDictionary(rawTopicName);

        // Create topic element
        const topicElement = document.createElement("div");
        topicElement.innerHTML = parsedTopicName;
        topicElement.classList.add("topic");

        // Highlight topics that have NOT been asked
        if (save.askedQuestions[selectedNPC.name] === undefined) {
            save.askedQuestions[selectedNPC.name] = [];
        }
        if (!save.hasAskedQuestion(selectedNPC.name, rawTopicName)) {
            topicElement.classList.add("highlight");
        }

        // Add "Select Topic" click event
        topicElement.addEventListener("click", () => {
            selectTopic(rawTopicName);
        });

        // Add topic to topics container
        topicsContainer.appendChild(topicElement);
    }
}

//#endregion Crewmates

// #region Dictionary

// Populate dictionary
function renderDictionary() {
    const dictionaryContent = document.querySelector("#dictionary .window .content");
    dictionaryContent.innerHTML = `<p>Words the translator cannot translate will appear here. From the dictionary you can: </p>
                                    <ol>
                                        <li>Give a new name for the word. This will help you recognise it later. </li>
                                        <li>Determine the meaning for the word from a list of gathered definitions. </li>
                                    </ol>
                                    `;

    // build a select element which containts all the dictionary.definitions
    const selectElement = document.createElement("select");
    selectElement.appendChild(document.createElement("option"));
    data.dictionary.forEach(unknownWord => {
        const optionElement = document.createElement("option");
        optionElement.value = unknownWord.definition;
        optionElement.innerHTML = unknownWord.definition;
        selectElement.appendChild(optionElement);
    });

    // add all known "unknown word"s to the dictionary
    data.dictionary.forEach(unknownWord => {
        if (save.hasTopic(unknownWord.term)) {
            const savedDictionaryName = save.dictionary[unknownWord.term]?.term || "";

            // create the term element
            const termElement = document.createElement("div");
            termElement.classList.add("dictionary-term");
            dictionaryContent.appendChild(termElement);

            // term and assigned name - assign the save.dictionary
            termElement.innerHTML = `<strong>${unknownWord.term}</strong>: 
                                    <input type="text" 
                                        value="${savedDictionaryName}" 
                                        data-term="${unknownWord.term}" 
                                        placeholder="Enter a name" 
                                        onkeyup="save.addtoDictionary(this.dataset.term, this.value, null)"/> 
                                    <!-- <button class="rename-button" onclick="save.addtoDictionary('${unknownWord.term}', this.parentNode.querySelector('input').value, null)">Rename</button> -->
                                    <br />`;

            // meaning and select element
            termElement.innerHTML += `<label>Meaning:</label><select>${selectElement.innerHTML}</select>`;
            const newSelectElement = termElement.querySelector("select");
            newSelectElement.value = save.dictionary[unknownWord.term]?.definition;
            newSelectElement.addEventListener("change", (e) => {
                save.addtoDictionary(unknownWord.term, null, e.target.value);
            });
        }
    });
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