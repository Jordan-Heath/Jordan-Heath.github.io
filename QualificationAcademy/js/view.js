// #region View Functions
function displayPopup(content) {
    const popupContainer = document.getElementById("popup-container");
    popupContainer.innerHTML = `
        <div class="popup">
            ${content}
        </div>`;
    popupContainer.classList.add("active");
}

function closePopup() {
    const popupContainer = document.getElementById("popup-container");
    popupContainer.innerHTML = "";
    popupContainer.classList.remove("active");
}

function displayNotification(content) {
    const notificationContainer = document.getElementById("notification-container");

    const notificationElement = document.createElement("div");
    notificationElement.className = "notification active";
    notificationElement.innerHTML = content;

    notificationContainer.appendChild(notificationElement);

    setTimeout(() => {
        notificationElement.classList.remove("active");
    }, globals.notificationDuration);

    setTimeout(() => {
        notificationElement.remove();
    }, globals.notificationDuration + 500);
}

function transitionToScreen(previousScreen, nextScreen) {
    // remove active screen
    previousScreen.classList.add("closing");
    setTimeout(() => {
        previousScreen.classList.remove("active");
        previousScreen.classList.remove("closing");
        nextScreen.classList.add("active");
    }, globals.pageChangeDelay);
}
// #endregion

// #region View Builders
function buildTitleScreen(element) {
    if (save.name == "") {
        element.innerHTML = `
            <h1>Qualification Academy</h1>
            <div id="title-screen-text">
                <p>In this game you will be asked to answer a series of questions.</p>
                <p>Get them all right and you will receive a certificate.</p>
                <p>Sign your name and click "Start"</p>
            </div>
            <input type="text" id="name-input" placeholder="Your name" value="" autocomplete="off">
            <button id="start-button" disabled="" onclick="startGame()">Start</button>
        `;

        const nameInput = document.getElementById("name-input");
        nameInput.addEventListener("input", () => {
            const startButton = document.getElementById("start-button");
            startButton.disabled = nameInput.value == "";
        });

        nameInput.addEventListener("keydown", (event) => {
            if (event.key == "Enter") startGame();
        })
    } else {
        element.innerHTML = `
            <h1>Qualification Academy</h1>
            <div id="title-screen-text">
                <p>Welcome back, <strong>${save.name}</strong></p>
                <p>You have completed ${save.completedCourses.length}/${data.courses.length} courses</p>
                <p>Click "Start" to play</p>
            </div>
            <button onclick="startGame()">Start</button>
        `;
    }
}

function buildCourseList(element) {
    element.innerHTML = `
        <button id="exit-button" onclick="exitGame()">Exit</button>
        <button id="settings-button" onclick="showSettings()">Settings</button>
        <h2>Select a course</h2>
        <div class="course-filter">
            <input type="text" id="course-filter-input" placeholder="Search" autocomplete="off">
            <select id="course-filter-difficulty" value="all">
                <option value="All">All</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
            <select id="course-filter-completed" value="all">
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Incomplete">Incomplete</option>
            </select>
            <button id="clear-filters">Clear Filters</button>
        </div>
        <div id="courses">
        ${data.courses.map((course, index) => {
            const completedCourse = save.completedCourses.find(c => c.name == course.name);
            return `
                <div class="course${completedCourse ? " completed" : ""}" id="course-${index}">
                    <h3>${course.name}</h3>
                    <p>${course.description}</p>
                    <table>
                        <tr>
                            <th>Difficulty</th>
                            <td>${course.difficulty}</td>
                        </tr>
                        <tr>
                            <th>Number of questions</th>
                            <td>${course.numberOfQuestions}</td>
                        </tr>
                        <tr>
                            <th>Duration</th>
                            <td>${course.duration}</td>
                        </tr>
                        ${completedCourse ? `
                            <tr>
                                <th>Date Completed</th>
                                <td>${completedCourse.date}</td>
                            </tr>
                        ` : ""}
                        ${completedCourse ? `
                            <tr>
                                <th>Score</th>
                                <td>${completedCourse.score} / ${course.correctAnswersRequired}</td>
                            </tr>
                        ` : ""}
                    </table>
                    <div class="course-controls">
                        <button onclick="selectCourse(${index})">Select</button>
                        ${completedCourse ? `<button onclick="showCertificate(${index})">Show Certificate</button>` : ""}
                        ${course.isCustom ? `
                        <button class="export-course-button" onclick="exportCourse(${index})">Export</button>
                        <button class="delete-course-button" onclick="deleteCourse(${index})">Delete</button>` : ""}
                    </div>
                </div>
            `;
        }).join("")}
        </div>
        <button onclick="openCourseMaker()">Create New Course</button>
    `;

    const courseFilterInput = document.getElementById("course-filter-input");
    const courseFilterDifficulty = document.getElementById("course-filter-difficulty");
    const courseFilterCompleted = document.getElementById("course-filter-completed");
    const clearFiltersButton = document.getElementById("clear-filters");

    courseFilterInput.addEventListener("input", filterCourses);
    courseFilterDifficulty.addEventListener("change", filterCourses);
    courseFilterCompleted.addEventListener("change", filterCourses);

    clearFiltersButton.addEventListener("click", () => {
        if (save.settings.audioEnabled) clickSound.play();

        courseFilterInput.value = "";
        courseFilterDifficulty.value = "All";
        courseFilterCompleted.value = "All";
    });
}

function buildCourseMaker(element) {
    element.innerHTML = `
        <h2>Create a new course</h2>
        <div id="course-maker-form">
            <h3>Course Details</h3>

            <div>
                <h4>Course Name</h4>
                <input type="text" id="course-name-input" placeholder="Course Name" autocomplete="off" required>
            </div>
            <div>
                <h4>Description</h4>
                <textarea id="course-description-input" placeholder="This course will teach..."></textarea>
            </div>
            <div>
                <h4>Difficulty</h4>
                <select id="course-difficulty-input" value="">
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div>
                <h4>Duration</h4>
                <select id="course-duration-input" value="">
                    <option value="Unlimited">Unlimited</option>
                    <option value="5 minutes">5 minutes</option>
                    <option value="10 minutes">10 minutes</option>
                    <option value="15 minutes">15 minutes</option>
                </select>
            </div>
            
        </div>

        <div id="course-maker-questions">
            <h3>Questions</h3>
            <p class="details">
                Add questions by clicking the button below. You can expand and collapse questions by clicking on the question title.<br>
                *Question numbers are just for reference, they are not used in the game.
            </p>

            <div id="course-maker-questions-list"></div>

            <button id="course-maker-add-question">+Add Question</button>    

            <div>
                <p>
                    Correct Answers Required
                    <input type="number" id="course-correct-answers-required-input" placeholder="Correct Answers Required" min="0" max="0" value="0" autocomplete="off">
                    /<span id="course-question-number">0</span>
                </p>
            </div>
        </div>

        <div id="course-maker-controls">
            <button id="course-maker-create-button">Save & Exit</button>
            <button id="course-maker-export-button">Export</button>
            <button id="course-maker-import-button">Import</button>
            <input type="file" id="course-maker-import-input" accept=".json">

            <button id="course-maker-return-button">Quit</button>
        </div>
    `;
    
    let questionNumber = 0;
    const courseQuestionsList = document.getElementById("course-maker-questions-list");
    const courseQuestionNumber = document.getElementById("course-question-number");
    const courseCorrectAnswersRequiredInput = document.getElementById("course-correct-answers-required-input");
    const courseAddQuestionButton = document.getElementById("course-maker-add-question");

    const courseCreateButton = document.getElementById("course-maker-create-button");
    const courseExportButton = document.getElementById("course-maker-export-button");
    const courseImportButton = document.getElementById("course-maker-import-button");
    const courseImportInput = document.getElementById("course-maker-import-input");
    const courseReturnButton = document.getElementById("course-maker-return-button");

    //we are going to add a lot of event listeners here

    function createQuestion() {
        questionNumber++;
        const questionElement = document.createElement("details");
        questionElement.className = "course-maker-question";
        questionElement.open = true;
        questionElement.innerHTML = `
            <summary id="course-question-${questionNumber}-title">Question #${questionNumber}</summary>
            <div>
                <h4>Question</h4>
                <textarea id="course-question-${questionNumber}-input" placeholder="What is...?"></textarea>
            </div>
            <div>
                <h4>Type</h4>
                <select id="course-question-${questionNumber}-type-input">
                    <option value="single choice">Single Choice</option>
                    <option value="multiple choice">Multiple Choice</option>
                </select>
            </div>
            <div class="course-maker-question-answers">
                <h4>Answer 1</h4>
                <input type="text" id="course-question-${questionNumber}-answer-1-input" class="course-question-answer-input" placeholder="Answer 1" autocomplete="off">
                <input type="radio" name="course-question-${questionNumber}-correct-answer-input" class="course-question-correct-answer-input" id="course-question-${questionNumber}-correct-answer-1-input" value="Answer 1">
                <label for="course-question-${questionNumber}-correct-answer-1-input">Answer 1 Correct</label>
            </div>
            <div class="course-maker-question-answers">
                <h4>Answer 2</h4>
                <input type="text" id="course-question-${questionNumber}-answer-2-input" class="course-question-answer-input" placeholder="Answer 2" autocomplete="off">
                <input type="radio" name="course-question-${questionNumber}-correct-answer-input" class="course-question-correct-answer-input" id="course-question-${questionNumber}-correct-answer-2-input" value="Answer 2">
                <label for="course-question-${questionNumber}-correct-answer-2-input">Answer 2 Correct</label>
            </div>
            <div class="course-maker-question-answers">
                <h4>Answer 3</h4>
                <input type="text" id="course-question-${questionNumber}-answer-3-input" class="course-question-answer-input" placeholder="Answer 3" autocomplete="off">
                <input type="radio" name="course-question-${questionNumber}-correct-answer-input" class="course-question-correct-answer-input" id="course-question-${questionNumber}-correct-answer-3-input" value="Answer 3">
                <label for="course-question-${questionNumber}-correct-answer-3-input">Answer 3 Correct</label>
            </div>
            <div class="course-maker-question-answers">
                <h4>Answer 4</h4>
                <input type="text" id="course-question-${questionNumber}-answer-4-input" class="course-question-answer-input" placeholder="Answer 4" autocomplete="off">
                <input type="radio" name="course-question-${questionNumber}-correct-answer-input" class="course-question-correct-answer-input" id="course-question-${questionNumber}-correct-answer-4-input" value="Answer 4">
                <label for="course-question-${questionNumber}-correct-answer-4-input">Answer 4 Correct</label>
            </div>
            <button class="course-question-remove-button" id="course-question-${questionNumber}-remove">Remove</button>
        `;

        courseQuestionsList.appendChild(questionElement);

        const questionRemoveButton = questionElement.querySelector(`#course-question-${questionNumber}-remove`);
        const questionInputs = questionElement.querySelectorAll(`.course-question-correct-answer-input`);
        const questionTypeInput = questionElement.querySelector(`#course-question-${questionNumber}-type-input`);
        const questionsTotal = document.querySelectorAll(".course-maker-question").length;

        questionRemoveButton.addEventListener("click", () => {
            if (save.settings.audioEnabled) clickSound.play();

            displayPopup(`
                <p>Are you sure you want to remove this question?</p>
                <button id="remove-question-yes">Yes</button>
                <button id="remove-question-no">No</button>
            `);
            
            const removeQuestionYesButton = document.getElementById("remove-question-yes");
            const removeQuestionNoButton = document.getElementById("remove-question-no");
            removeQuestionYesButton.addEventListener("click", () => {
                if (save.settings.audioEnabled) clickSound.play();

                questionElement.remove();

                const questionsTotal = document.querySelectorAll(".course-maker-question").length;
                courseQuestionNumber.innerHTML = questionsTotal;
                courseCorrectAnswersRequiredInput.value = questionsTotal;
                courseCorrectAnswersRequiredInput.max = questionsTotal;

                closePopup();
            });

            removeQuestionNoButton.addEventListener("click", () => {
                if (save.settings.audioEnabled) clickSound.play();

                closePopup();
            });
        });
        
        questionInputs.forEach(input => input.addEventListener("change", () => {
            if (save.settings.audioEnabled) writingSounds[Math.floor(Math.random() * writingSounds.length)].play();
        }));
        
        questionTypeInput.addEventListener("change", () => {
            switch (questionTypeInput.value) {
                case "single choice":
                    questionInputs.forEach(input => input.setAttribute("type", "radio"));
                    break;
                case "multiple choice":
                    questionInputs.forEach(input => input.setAttribute("type", "checkbox"));
                    break;
            }
        });
        
        courseQuestionNumber.innerHTML = questionsTotal;
        courseCorrectAnswersRequiredInput.value = questionsTotal;
        courseCorrectAnswersRequiredInput.max = questionsTotal;

        return questionElement;
    }

    function validateCourse(course = convertCourseToJSON()) {
        if (!course.name) {
            displayNotification("Please enter a course name.");
            return false;
        } else if (!course.description) {
            displayNotification("Please enter a course description.");
            return false;
        } else if (!course.difficulty) {
            displayNotification("Please select a course difficulty.");
            return false;
        } else if (!course.duration) {
            displayNotification("Please select a course duration.");
            return false;
        } else if (course.numberOfQuestions == 0) {
            displayNotification("Please add at least one question.");
            return false;
        } else if (course.questions.some(question => !question.question)) {
            //which question is missing the question
            const questionNumber = course.questions.findIndex(question => !question.question) + 1;
            displayNotification(`Please enter a question for question ${questionNumber}.`);
            return false;
        } else if (course.questions.some(question => !question.type)) {
            //which question is missing the type
            const questionNumber = course.questions.findIndex(question => !question.type) + 1;
            displayNotification(`Please select a question type for question ${questionNumber}.`);
            return false;
        } else if (course.questions.some(question => !question.correctAnswer)) {
            //which question is missing the correct answer
            const questionNumber = course.questions.findIndex(question => !question.correctAnswer) + 1;
            displayNotification(`Please select a correct answer for question ${questionNumber}.`);
            return false;
        } else if (course.questions.some(question => !question.answers)) {
            displayNotification("Please enter an answer for each question.");
            return false;
        } else return true;
    }

    function loadCourse(course) {
        const courseName = document.getElementById("course-name-input");
        const courseDescription = document.getElementById("course-description-input");
        const courseDifficulty = document.getElementById("course-difficulty-input");
        const courseDuration = document.getElementById("course-duration-input");
        const courseCorrectAnswersRequired = document.getElementById("course-correct-answers-required-input");
        const courseQuestionsList = document.getElementById("course-maker-questions-list");

        questionNumber = 0;
        courseName.value = course.name;
        courseDescription.value = course.description;
        courseDifficulty.value = course.difficulty;
        courseDuration.value = course.duration;
        courseCorrectAnswersRequired.value = course.correctAnswersRequired;

        courseQuestionsList.innerHTML = "";
        course.questions.forEach((question) => {
            const questionElement = createQuestion();
            questionElement.querySelector(`#course-question-${questionNumber}-input`).value = question.question;
            questionElement.querySelector(`#course-question-${questionNumber}-type-input`).value = question.type;
            questionElement.querySelector(`#course-question-${questionNumber}-answer-1-input`).value = question.answers[0];
            questionElement.querySelector(`#course-question-${questionNumber}-answer-2-input`).value = question.answers[1];
            questionElement.querySelector(`#course-question-${questionNumber}-answer-3-input`).value = question.answers[2];
            questionElement.querySelector(`#course-question-${questionNumber}-answer-4-input`).value = question.answers[3];
            questionElement.querySelector(`#course-question-${questionNumber}-correct-answer-1-input`).checked = question.correctAnswer.includes(question.answers[0]);
            questionElement.querySelector(`#course-question-${questionNumber}-correct-answer-2-input`).checked = question.correctAnswer.includes(question.answers[1]);
            questionElement.querySelector(`#course-question-${questionNumber}-correct-answer-3-input`).checked = question.correctAnswer.includes(question.answers[2]);
            questionElement.querySelector(`#course-question-${questionNumber}-correct-answer-4-input`).checked = question.correctAnswer.includes(question.answers[3]);
        });
    }

    courseAddQuestionButton.addEventListener("click", () => {
        if (save.settings.audioEnabled) clickSound.play();
        createQuestion();
    });

    courseCreateButton.addEventListener("click", () => {
        if (save.settings.audioEnabled) clickSound.play();

        const course = convertCourseToJSON();
        if (validateCourse(course)) {
            //show the course to user via a popup
            displayPopup(`
                <h2>Course Preview</h2>

                <div style="text-align: left; width: 600px; background-color: var(--main-color); padding: 10px; display: flex; flex-direction: row;">
                    <div>
                        <p>Course Name: <strong>${course.name}</strong></p>
                        <p>Course Description: <strong>${course.description}</strong></p>
                        <p>Course Difficulty: <strong>${course.difficulty}</strong></p>
                        <p>Course Duration: <strong>${course.duration}</strong></p>
                        <p>Number of Questions: <strong>${course.numberOfQuestions}</strong></p>
                        <p>Correct Answers Required: <strong>${course.correctAnswersRequired}</strong></p>
                        <p>Questions:</p>
                        <ul>
                            ${course.questions.map(question => `
                                <li><strong>${question.question}</strong> (${question.type})
                                <ul>
                                    ${question.answers.map(answer => `<li>${answer}${question.correctAnswer.includes(answer) ? " (Correct Answer)" : ""}</li>`).join("")}
                                </ul></li>`).join("")}
                        </ul>
                    </div>
                </div>

                <button id="start-course">Save Course</button>
                <button id="cancel-start-course">Cancel</button>
            `);

            const startCourseButton = document.getElementById("start-course");
            const cancelStartCourseButton = document.getElementById("cancel-start-course");

            startCourseButton.addEventListener("click", () => {
                if (save.settings.audioEnabled) clickSound.play();

                save.customCourses.push(course);
                data.courses.push(course);
                saveToLocalStorage();

                closePopup();

                startGame();
            });

            cancelStartCourseButton.addEventListener("click", () => {
                if (save.settings.audioEnabled) clickSound.play();
                closePopup();
            });
        }
    });

    courseExportButton.addEventListener("click", () => {
        if (save.settings.audioEnabled) clickSound.play();

        if (!validateCourse()) {
            displayNotification("Please complete the course before exporting.");
            return;
        }

        //convert to json, then download as a file
        const course = convertCourseToJSON();
        exportCourse(null, course);
    });

    courseImportButton.addEventListener("click", () => {
        if (save.settings.audioEnabled) clickSound.play();
        courseImportInput.click();
    });

    courseImportInput.addEventListener("change", () => {
        const file = courseImportInput.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const course = JSON.parse(reader.result);
            loadCourse(course);
        };
        reader.readAsText(file);
    });

    courseReturnButton.addEventListener("click", () => {
        if (save.settings.audioEnabled) clickSound.play();

        displayPopup(`
            <h2>Are you sure you want to return to the title screen?</h2>
            <p>Any progress you have made on this course will be lost.</p>
            <button id="confirm-return">Return to Course List</button>
            <button id="close-popup">Cancel</button>
        `);

        document.getElementById("confirm-return").addEventListener("click", () => {
            if (save.settings.audioEnabled) clickSound.play();
            closePopup();
            startGame();
        });

        document.getElementById("close-popup").addEventListener("click", () => {
            if (save.settings.audioEnabled) clickSound.play();
            closePopup();
        });
    });
}

function buildSettings(element) {
    element.innerHTML = `
        <h2>Settings</h2>
        <div class="setting">
            <h3>Name</h3>
            <input type="text" id="name-input" placeholder="Your name" value="${save.name}" autocomplete="off">
        </div>
        <div class="setting">
            <h3>Visuals</h3>
            <p>
                <input type="checkbox" id="page-transitions-checkbox" ${save.settings.fasterPageChanges ? "checked" : ""} />
                <label for="page-transitions-checkbox">Faster Page Transitions</label>
            </p>
            <p>
                <input type="checkbox" id="darkmode-checkbox" ${save.settings.darkMode ? "checked" : ""} /> 
                <label for="darkmode-checkbox">Dark Mode [Not Recommended].</label>
            </p>
        </div>
        <div class="setting">
            <h3>Audio</h3>
            <p>
                <input type="checkbox" id="audio-checkbox" ${save.settings.audioEnabled ? "checked" : ""} />
                <label for="audio-checkbox">Enable/Disable audio</label>
            </p>
        </div>
        <div class="setting">
            <h3>Gameplay</h3>
            <p>
                <input type="checkbox" id="shuffle-questions-checkbox" ${save.settings.shuffleQuestions ? "checked" : ""} />
                <label for="shuffle-questions-checkbox">Shuffle Question Order</label>
            </p>
            <p>
                <input type="checkbox" id="shuffle-answers-checkbox" ${save.settings.shuffleAnswers ? "checked" : ""} />
                <label for="shuffle-answers-checkbox">Shuffle Answer Order</label>
            </p>
        </div>
        <div class="setting">
            <h3>Delete Save</h3>
            <p>Restart your game by deleting your save.</p>
            <button onclick="newGame()">Delete</button>
        </div>
        <div class="setting">
            <h3>Credits</h3>
            <p>Sounds:</p>
            <ul>
                <li>Office Ambiance: <a href="https://pixabay.com/sound-effects/office-ambience-24734/">Pixabay</a></li>
                <li>Click Sound: <a href="https://pixabay.com/sound-effects/click-234708/">Pixabay</a></li>
                <li>Writing Sound: <a href="https://pixabay.com/sound-effects/writing-263642/">Pixabay</a></li>
                <li>Drumroll Sound: <a href="https://pixabay.com/sound-effects/065391-drumrollwav-88344/">Pixabay</a></li>
                <li>Success Sound: <a href="https://pixabay.com/sound-effects/success-fanfare-trumpets-6185/">Pixabay</a></li>
                <li>Failure Sound: <a href="https://pixabay.com/sound-effects/failure-drum-sound-effect-2-7184/">Pixabay</a></li>
            </ul>
        </div>
        <div class="settings-controls">
            <button id="exit-settings">Save & Exit</button>
        </div>
    `;

    const nameInput = document.getElementById("name-input");
    const darkmodeCheckbox = document.getElementById("darkmode-checkbox");
    const pageTransitionsCheckbox = document.getElementById("page-transitions-checkbox");
    const audioCheckbox = document.getElementById("audio-checkbox");
    const shuffleQuestionsCheckbox = document.getElementById("shuffle-questions-checkbox");
    const shuffleAnswersCheckbox = document.getElementById("shuffle-answers-checkbox");

    nameInput.addEventListener("input", () => {
        save.name = nameInput.value;
        if (save.settings.audioEnabled) writingSounds[Math.floor(Math.random() * writingSounds.length)].play();
    });

    darkmodeCheckbox.addEventListener("change", () => {
        toggleDarkMode(darkmodeCheckbox.checked);
        if (save.settings.audioEnabled) writingSounds[Math.floor(Math.random() * writingSounds.length)].play();
    });

    pageTransitionsCheckbox.addEventListener("change", () => {
        toggleFasterPageChanges(pageTransitionsCheckbox.checked);
        if (save.settings.audioEnabled) writingSounds[Math.floor(Math.random() * writingSounds.length)].play();
    });

    audioCheckbox.addEventListener("change", () => {
        toggleAudio(audioCheckbox.checked);
        if (save.settings.audioEnabled) writingSounds[Math.floor(Math.random() * writingSounds.length)].play();
    });

    shuffleQuestionsCheckbox.addEventListener("change", () => {
        toggleShuffleQuestions(shuffleQuestionsCheckbox.checked);
        if (save.settings.audioEnabled) writingSounds[Math.floor(Math.random() * writingSounds.length)].play();
    });

    shuffleAnswersCheckbox.addEventListener("change", () => {
        toggleShuffleAnswers(shuffleAnswersCheckbox.checked);
        if (save.settings.audioEnabled) writingSounds[Math.floor(Math.random() * writingSounds.length)].play();
    });

    document.getElementById("exit-settings").addEventListener("click", () => {
        const activeScreen = document.querySelector("main.active");
        const selectCourseView = document.getElementById("select-course-view");

        if (save.settings.audioEnabled) clickSound.play();

        saveToLocalStorage();

        transitionToScreen(activeScreen, selectCourseView);
    });
}

function buildCourseDetails(course, element) {
    element.innerHTML = `   
        <h2>${course.name}</h2>
        <div>
            <p>Rules:</p>
            <ul>
                ${course.duration !== "Unlimited" ? `<li>You will have ${course.duration} to complete the test.</li>` : ""}
                <li>You will need to get ${course.correctAnswersRequired} out of ${course.numberOfQuestions} questions right to pass.</li>
            </ul>
        </div>
        <div class="course-details-controls">
            <button onclick="acceptCourse(${data.courses.indexOf(course)})">Accept</button> <!-- Sends you to course-view -->
            <button onclick="startGame()">Decline</button> <!-- Returns you to select-course-view -->
        </div>
    `;
}

function buildCourseTest(course, element) {
    //shuffle the order of the questions
    // course.questions.sort(() => Math.random() - 0.5);

    //shuffle the order of the answers
    course.questions.forEach(question => {
        question.answers.sort(() => Math.random() - 0.5);
    });

    element.innerHTML = `
        <h2>${course.name}</h2>
        ${course.questions.map((question, index) => `
            <div class="question">
                <h3>Question ${index + 1}</h3>
                <p>${question.question}${question.type == "multiple choice" ? " (Multiple Choice)" : ""}</p>
                <div class="question-controls">${Object.entries(question.answers).map(([key, value]) => `
                    <div class="answer">
                        <input 
                            type="${question.type == "single choice" ? "radio" : "checkbox"}" 
                            name="question-${index + 1}" 
                            value="${value}" 
                            id="question-${index + 1}-answer-${key}" />
                        <label for="question-${index + 1}-answer-${key}">${value}</label>
                    </div>
                `).join("")}</div>
            </div>
        `).join("")}
        <button onclick="submitAnswers(${data.courses.indexOf(course)})">Submit</button>
        ${course.duration !== "Unlimited" ? '<div id="timer"></div>' : ""}
    `;

    if (course.duration !== "Unlimited") {
        const timerElement = document.getElementById("timer");

        const duration = course.duration.split(" ");
        const number = parseInt(duration[0]);
        const unit = duration[1];

        switch (unit) {
            case "seconds":
                let seconds = number;
                timerElement.innerHTML = `Time left: ${seconds} seconds`;
                course.timer = setInterval(() => {
                    seconds--;
                    timerElement.innerHTML = `Time left: ${seconds} seconds`;
                    if (seconds <= 0) {
                        clearInterval(interval);
                        submitAnswers(data.courses.indexOf(course), true);
                    }
                }, 1000);
                break;
            case "minutes":
                let minutes = number;
                timerElement.innerHTML = `Time left: ${minutes} minutes`;
                course.timer = setInterval(() => {
                    minutes--;
                    timerElement.innerHTML = `Time left: ${minutes} minutes`;
                    if (minutes <= 0) {
                        clearInterval(interval);
                        submitAnswers(data.courses.indexOf(course), true);
                    }
                }, 60000);
                break;
        }
    }

    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.checked = false;
        input.addEventListener("change", () => {
            if (save.settings.audioEnabled) {
                // play a random writing sound
                const randomSound = writingSounds[Math.floor(Math.random() * writingSounds.length)];
                randomSound.currentTime = 0;
                randomSound.play();
            }
        });
    });
}

function buildCourseResults(course, results, element) {
    element.innerHTML = `<h2>Results</h2>
        <p>${results.passed ? "Congratulations! You passed the course." : "Better luck next time."}</p>

        <details class="certificate-questions">
            <summary>Results</summary>
            <p>${results ? `You got ${results.score} out of ${course.correctAnswersRequired} questions right.` : ""}</p>
            ${course.questions.map((question, index) => {
                const givenAnswer = results.answers.givenAnswers[index] ? results.answers.givenAnswers[index].givenAnswer : [];
                const correct = results.answers.givenAnswers[index] ? results.answers.givenAnswers[index].correct : false;

                return `
                    <div class="question">
                        <h3>Question ${index + 1}</h3>
                        <p>${question.question}</p>
                        <p>Given Answer: ${givenAnswer.join(", ")}</p>
                        <p>${correct ? "Correct" : "Incorrect"}</p>
                    </div>
                `;
            }).join("")}
        </details>

        ${results.passed ? `<div id="certificate-canvas"></div>` : ""}

        <div>
            <button onclick="startGame()">Return</button>
            ${results.passed ? `<button onclick="downloadCertificate(${data.courses.indexOf(course)})">Download Certificate</button>` : ''}
        </div>
    `;

    const certificateCanvas = document.getElementById("certificate-canvas");
    if (certificateCanvas) {
        buildCertificate(data.courses.indexOf(course), certificateCanvas);
    }
}

function buildAnticipationMenu(element, transitionToElement, passed) {
    element.innerHTML = `
        <h2>Your results will be ready soon</h2>
        <progress id="anticipation-progress" max="100" value="0"></progress>
    `;

    const anticipationProgress = document.getElementById("anticipation-progress");

    let anticipationProgressValue = 0;
    let anticipationTickEvent = null;

    const TickLength = (globals.anticipationScreenDuration - 1.5 * globals.pageChangeDelay) / 100;

    // after 1000ms, start the progress bar
    const startAnticipationPage = () => {
        anticipationTickEvent = setInterval(doAnticipationTick, TickLength);
    }

    // after 3000ms to 3500ms, stop the progress bar
    const doAnticipationTick = () => {
        anticipationProgressValue++;
        anticipationProgress.value = anticipationProgressValue;

        if (anticipationProgressValue >= 100) {
            // stop the progress bar
            clearInterval(anticipationTickEvent);

            endAnticipationPage();
        }
    }

    // after 4000ms, play the anticipation sound
    const endAnticipationPage = () => {
        element.classList.remove("active");
        transitionToElement.classList.add("active");

        if (save.settings.audioEnabled) {
            setTimeout(() => {
                if (passed) successSound.play();
                else if (!passed) failureSound.play();
            }, 1000);
        }
    }

    setTimeout(startAnticipationPage, globals.pageChangeDelay);

    setTimeout(endAnticipationPage, globals.anticipationScreenDuration);
}
// #endregion

//#region Certificate Printing
function buildCertificate(courseID, element = null) {
    const course = data.courses[courseID];
    const courseCompletionData = save.completedCourses.find(c => c.name == course.name);

    //build the page
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 400;

    const h1 = 36;
    const h2 = 30;
    const h3 = 24;
    const h4 = 18;
    const gap = 20;
    const padding = 10;

    let printHeight = 20;

    const context = canvas.getContext("2d");

    function buildThePage() {
        context.fillStyle = "#fff8dc";
        context.fillRect(0, 0, canvas.width, canvas.height);

        // build the certificate
        printHeight += h1;
        context.fillStyle = "black";
        context.font = `${h1}px 'UnifrakturMaguntia', sans-serif`;
        context.textAlign = "center";
        context.fillText("Qualification Academy", canvas.width / 2, printHeight);
        printHeight += gap;
    }

    function addSignature() {
        printHeight += h3;
        context.font = `${h3}px 'Noto Sans', sans-serif`;
        context.fillText("Humbly awards this certificate to", canvas.width / 2, printHeight);
        
        printHeight += gap;
        printHeight += h1;
        context.font = `${h1}px 'Herr Von Muellerhoff', cursive`;
        context.fillText(save.name, canvas.width / 2, printHeight);
        

        // add underline
        printHeight += padding;
        context.strokeStyle = "#422800";
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(canvas.width / 2 - 100, printHeight);
        context.lineTo(canvas.width / 2 + 100, printHeight);
        context.stroke();
        printHeight += gap;
    }

    function addCourse() {
        printHeight += h3;
        context.font = `${h3}px 'Noto Sans', sans-serif`;
        context.fillText("for outstanding achievement and dedication in", canvas.width / 2, printHeight);

        printHeight += gap;
        printHeight += h1;
        context.font = `${h1}px 'Herr Von Muellerhoff', sans-serif`;
        context.fillText(course.name, canvas.width / 2, printHeight);

        // add underline
        printHeight += padding;
        context.strokeStyle = "#422800";
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(canvas.width / 2 - 100, printHeight);
        context.lineTo(canvas.width / 2 + 100, printHeight);
        context.stroke();
        printHeight += gap;
    }

    function addBlankSpace() {
        // add a separator
        printHeight += gap;
        context.strokeStyle = "#422800";
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(canvas.width - 100, printHeight);
        context.lineTo(100, printHeight);
        context.stroke();
    }

    function addFooter() {
        // add a separator
        printHeight += gap;
        context.strokeStyle = "#422800";
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(canvas.width - 50, printHeight);
        context.lineTo(50, printHeight);
        context.stroke();

        // add the score
        printHeight += h4;
        context.font = `${h4}px 'Noto Sans', sans-serif`;
        context.fillText("Course Score", canvas.width / 4, printHeight);

        printHeight += h2;
        context.font = `${h4}px 'Noto Sans', sans-serif`;
        context.fillText(`${courseCompletionData.score} / ${course.correctAnswersRequired}`, canvas.width / 4, printHeight);

        // date the bottom
        printHeight -= h2;
        context.font = `${h4}px 'Noto Sans', sans-serif`;
        context.fillText("Completed on", canvas.width / 2, printHeight);

        printHeight += h2;
        context.font = `${h4}px 'Noto Sans', sans-serif`;
        context.fillText(courseCompletionData.date, canvas.width / 2, printHeight);

        // sign the bottom
        printHeight -= h2;
        context.font = `${h4}px 'Noto Sans', sans-serif`;
        context.fillText("Signature", canvas.width * 3 / 4, printHeight);

        printHeight += h2;
        context.font = `${h3}px 'Herr Von Muellerhoff', cursive`;
        context.fillText(save.name, canvas.width * 3 / 4, printHeight);

        printHeight += padding;
        context.strokeStyle = "#422800";
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(canvas.width * 3 / 4 - 90, printHeight);
        context.lineTo(canvas.width * 3 / 4 + 90, printHeight);
        context.stroke();
    }

    buildThePage();
    addSignature();
    addCourse();
    addBlankSpace();
    addFooter();
    if (element) element.appendChild(canvas);

    return canvas;
}

function loadFonts() {
    let font1 = new FontFace("UnifrakturMaguntia", "url('assets/fonts/UnifrakturMaguntia-Regular.ttf')");
    font1.load().then(() => {
        document.fonts.add(font1);
    });
    let font2 = new FontFace("Noto Sans", "url('assets/fonts/NotoSans-Regular.ttf')");
    font2.load().then(() => {
        document.fonts.add(font2);
    })
    let font3 = new FontFace("Herr Von Muellerhoff", "url('assets/fonts/HerrVonMuellerhoff-Regular.ttf')");
    font3.load().then(() => {
        document.fonts.add(font3);
    })
}
//#endregion