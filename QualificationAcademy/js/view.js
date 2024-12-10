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

function transitionToView(nextView) {
    const activeView = document.querySelector("main.active");

    // remove active screen
    activeView?.classList.add("closing");
    setTimeout(() => {
        //scroll to top
        window.scrollTo(0, 0);

        activeView?.classList.remove("active");
        activeView?.classList.remove("closing");
        nextView.classList.add("active");
    }, globals.pageChangeDelay);
}
// #endregion

// #region View Builders
function buildTitle() {
    const titleViewText = document.getElementById("title-view-text");
    const titleViewNameInput = document.getElementById("title-view-name-input");
    const titleViewStartButton = document.getElementById("title-view-start-button");

    if (save.name == "") {
        titleViewStartButton.disabled = true;

        titleViewNameInput.addEventListener("input", () => {
            const startButton = document.getElementById("title-view-start-button");
            startButton.disabled = titleViewNameInput.value == "";
        });

        titleViewNameInput.addEventListener("keydown", (event) => {
            if (event.key == "Enter") openCourseSelectView();
        })
    } else {
        titleViewText.innerHTML = `
            <p>Welcome back, <strong>${save.name}</strong></p>
            <p>You have completed ${save.completedCourses.length}/${data.courses.length} courses</p>
            <p>Click "Start" to play</p>
        `;

        titleViewNameInput.style.display = "none";
    }
}

function buildSettings() {
    const nameInput = document.getElementById("settings-name-input");
    const initiationDate = document.getElementById("initiation-date");
    const darkmodeCheckbox = document.getElementById("darkmode-checkbox");
    const pageTransitionsCheckbox = document.getElementById("page-transitions-checkbox");
    const audioCheckbox = document.getElementById("audio-checkbox");
    const shuffleQuestionsCheckbox = document.getElementById("shuffle-questions-checkbox");
    const shuffleAnswersCheckbox = document.getElementById("shuffle-answers-checkbox");
    const exitSettingsButton = document.getElementById("exit-settings");

    nameInput.value = save.name;
    initiationDate.innerHTML = `Member since ${save.initiationDate.time} - ${save.initiationDate.date}`;
    darkmodeCheckbox.checked = save.settings.darkMode;
    pageTransitionsCheckbox.checked = save.settings.fasterPageChanges;
    audioCheckbox.checked = save.settings.audioEnabled;
    shuffleQuestionsCheckbox.checked = save.settings.shuffleQuestions;
    shuffleAnswersCheckbox.checked = save.settings.shuffleAnswers;

    if (!globals.settingsEventListenersApplied) {
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

        exitSettingsButton.addEventListener("click", () => {
            const courseSelectView = document.getElementById("course-select-view");

            if (save.settings.audioEnabled) clickSound.play();

            saveToLocalStorage();

            transitionToView(courseSelectView);
        });

        globals.settingsEventListenersApplied = true;
    }
}

function buildCourseList() {
    if (!globals.courseListEventListenersApplied) {
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

            filterCourses();
        });

        globals.courseListEventListenersApplied = true;
    }

    document.getElementById("courses").innerHTML = `
        ${data.courses.map((course, index) => {
        const completedCourse = save.completedCourses.find(c => c.name == course.name);
        return `
                <div class="course${completedCourse ? " completed" : ""}" id="course-${index}">
                    <h3>${course.name}</h3>
                    <p>By <strong>${course.author}</strong></p>
                    <p><i>${course.description}</i></p>
                    <table>
                        <tr>
                            <th>Difficulty</th>
                            <td>${course.difficulty}</td>
                        </tr>
                        <tr>
                            <th>Duration</th>
                            <td>${course.duration}</td>
                        </tr>
                        <tr>
                            <th>Required Grade</th>
                            <td>${course.correctAnswersRequired}/${course.questions.length}</td>
                        </tr>
                        ${completedCourse ? `
                            <tr>
                                <th><strong>Date Completed</strong></th>
                                <td><strong>${completedCourse.date}</strong></td>
                            </tr>
                        ` : ""}
                        ${completedCourse ? `
                            <tr>
                                <th><strong>Grade Attained</strong></th>
                                <td><strong>${completedCourse.score} / ${course.correctAnswersRequired}</strong></td>
                            </tr>
                        ` : ""}
                    </table>
                    <div class="course-controls">
                        <button onclick="openCourseDetailsView(${index})">Select</button>
                        ${completedCourse ? `<button onclick="openCourseResultsView(${index})">Show Certificate</button>` : ""}
                        ${course.isCustom ? `
                        <div class="custom-course-controls">
                            <button class="edit-course-button" onclick="openCourseMakerView(${index})">Edit</button>
                            <button class="delete-course-button" onclick="promptDeleteCourse(${index})">Delete</button>
                        </div>` : ""}
                    </div>
                </div>
            `;
    }).join("")}
    `;

    filterCourses();
}

function buildCourseDetails(course) {
    document.getElementById("course-details-view").innerHTML = `   
        <h2>${course.name}</h2>
        <div>
            <p>Rules:</p>
            <ul>
                ${course.duration !== "Unlimited" ? `<li>You will have ${course.duration} to complete the test.</li>` : ""}
                <li>You will need to get ${course.correctAnswersRequired} out of ${course.questions.length} questions right to pass.</li>
            </ul>
        </div>
        <div class="course-details-controls">
            <button onclick="openCourseTestView(${data.courses.indexOf(course)})">Accept</button>
            <button onclick="openCourseSelectView()">Decline</button>
        </div>
    `;
}

function buildCourseTest(course) {
    function shuffle(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
    }

    //shuffle the order of the questions
    if (save.settings.shuffleQuestions) shuffle(course.questions);

    //shuffle the order of the answers
    if (save.settings.shuffleAnswers) {
        course.questions.forEach(question => {
            shuffle(question.answers);
        });
    }

    function escapeHTML(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    document.getElementById("course-test-view").innerHTML = `
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
                            value="${escapeHTML(value)}"
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

        let minutes = 0
        let seconds = 0

        switch (unit) {
            case "seconds":
                seconds = number;
                break;
            case "minutes":
                minutes = number;
                break;
        }

        // tick every second, adjust the timer
        course.timer = setInterval(() => {
            seconds--;
            if (seconds < 0 && minutes > 0) {
                minutes--;
                seconds = 59;
            }

            timerElement.innerHTML = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

            if (seconds <= 0 && minutes <= 0) {
                clearInterval(course.timer);
                submitAnswers(data.courses.indexOf(course), true);
            }
        }, 1000);
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

        ${results.passed ? `<div id="certificate-canvas"></div>` : ""}

        <details class="certificate-questions" open>
            <summary>Results</summary>
            <p><strong>${results ? `You got ${results.score} out of ${course.correctAnswersRequired} questions right.` : ""}</strong></p>
            ${course.questions.map((question, index) => {
        const givenAnswer = results.answers.givenAnswers[index] ? results.answers.givenAnswers[index].givenAnswer : [];
        const correct = results.answers.givenAnswers[index] ? results.answers.givenAnswers[index].correct : false;

        return `
                    <div class="question">
                        <p><i>${question.question}</i></p>
                        <p>
                            <strong>Given Answer:</strong> ${givenAnswer.join(", ")} 
                            ${correct ? "<span style='color: green'>✔</span>" : "<span style='color: red'>✘</span>"}
                        </p>
                    </div>
                `;
    }).join("")}
        </details>

        <div class="course-results-controls">
            <button onclick="openCourseSelectView()">Return</button>
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

    // after 500ms to 1000ms, start the progress bar
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

    // after 4000ms, play the success/failure sound
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

//#region Course Maker
function buildCourseMaker(element, editingCourseID = null) {
    const editingCourse = editingCourseID !== null ? data.courses[editingCourseID] : null;

    const populateCourseData = (course, prefix = '') => `
        <p>Course Name: <strong>${course.name}</strong></p>
        <p>Course Description: <strong>${course.description}</strong></p>
        <p>Course Difficulty: <strong>${course.difficulty}</strong></p>
        <p>Course Duration: <strong>${course.duration}</strong></p>
        <p>Number of Questions: <strong>${course.questions.length}</strong></p>
        <p>Correct Answers Required: <strong>${course.correctAnswersRequired}</strong></p>
        <p>Questions:</p>
        <ul>
            ${course.questions.map(q => `
                <li><strong>${q.question}</strong> (${q.type})
                <ul>
                    ${q.answers.map(a => `<li>${a}${q.correctAnswer.includes(a) ? " (Correct Answer)" : ""}</li>`).join('')}
                </ul></li>`).join('')}
        </ul>`;

    const buildPopupContent = (course, editingCourse) => `
        <h2>Course Preview</h2>
        <div style="text-align: left; width: 600px; background-color: var(--main-color); padding: 10px; display: flex; flex-direction: row;">
            ${editingCourse ? `<div><h3>Old Course</h3>${populateCourseData(editingCourse)}</div>` : ''}
            <div><h3>New Course</h3>${populateCourseData(course)}</div>
        </div>
        <button id="start-course">Save Course</button>
        <button id="cancel-start-course">Cancel</button>`;

    const addListeners = () => {
        const clickListener = (element, func) => element.addEventListener('click', func);

        clickListener(courseAddQuestionButton, () => {
            if (save.settings.audioEnabled) clickSound.play();
            createQuestion();
        });

        clickListener(courseCreateButton, () => {
            if (save.settings.audioEnabled) clickSound.play();
            const course = convertCourseToJSON();
            if (validateCourse(course)) {
                displayPopup(buildPopupContent(course, editingCourse));
                clickListener(document.getElementById('start-course'), () => saveCourse(course, editingCourseID));
                clickListener(document.getElementById('cancel-start-course'), closePopup);
            }
        });

        clickListener(courseExportButton, () => {
            if (save.settings.audioEnabled) clickSound.play();
            const course = convertCourseToJSON();
            validateCourse(course) ? exportCourse(course) : displayNotification("Please complete the course before exporting.");
        });

        clickListener(courseImportButton, () => {
            if (save.settings.audioEnabled) clickSound.play();
            courseImportInput.click();
        });

        courseImportInput.addEventListener('change', () => {
            const file = courseImportInput.files[0];
            const reader = new FileReader();
            reader.onload = () => loadCourse(JSON.parse(reader.result));
            reader.readAsText(file);
        });

        clickListener(courseReturnButton, () => {
            if (save.settings.audioEnabled) clickSound.play();
            displayPopup(`
                <h2>Are you sure you want to return to the title screen?</h2>
                <p>Any progress you have made on this course will be lost.</p>
                <button id="confirm-return">Return to Course List</button>
                <button id="close-popup">Cancel</button>
            `);
            clickListener(document.getElementById('confirm-return'), () => { openCourseSelectView(); closePopup() });
            clickListener(document.getElementById('close-popup'), closePopup);
        });
    };

    const saveCourse = (course, editingCourseID) => {
        if (save.settings.audioEnabled) clickSound.play();
        if (editingCourseID) deleteCourse(editingCourseID);
        save.customCourses.push(course);
        data.courses.push(course);
        saveToLocalStorage();
        closePopup();
        openCourseSelectView();
    };

    element.innerHTML = `
        <h2>Create a new course</h2>
        <div id="course-maker-form">
            <h3>Course Details</h3>
            <div>
                <h4>Course Name</h4>
                <input type="text" id="course-name-input" placeholder="Course Name" autocomplete="off" required>
            </div>
            <div>
                <h4>Author</h4>
                <input type="text" id="course-author-input" value="${save.name}" placeholder="Author" autocomplete="off" required>
            </div>
            <div>
                <h4>Description</h4>
                <textarea id="course-description-input" placeholder="This course will teach..."></textarea>
            </div>
            <div>
                <h4>Difficulty</h4>
                <select id="course-difficulty-input">
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                    <option value="Impossible">Impossible</option>
                </select>
            </div>
            <div>
                <h4>Duration</h4>
                <select id="course-duration-input">
                    <option value="Unlimited">Unlimited</option>
                    <option value="15 seconds">15 seconds</option>
                    <option value="30 seconds">30 seconds</option>
                    <option value="60 seconds">60 seconds</option>
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
            <button id="course-maker-create-button">${editingCourse ? 'Update Course' : 'Create Course'}</button>
            <button id="course-maker-export-button">Export</button>
            <button id="course-maker-import-button">Import</button>
            <input type="file" id="course-maker-import-input" accept=".json">
            <button id="course-maker-return-button">Quit</button>
        </div>
    `;

    globals.questionNumber = 0;

    const courseAddQuestionButton = document.getElementById('course-maker-add-question');
    const courseCreateButton = document.getElementById('course-maker-create-button');
    const courseExportButton = document.getElementById('course-maker-export-button');
    const courseImportButton = document.getElementById('course-maker-import-button');
    const courseImportInput = document.getElementById('course-maker-import-input');
    const courseReturnButton = document.getElementById('course-maker-return-button');

    addListeners();

    if (editingCourse) loadCourse(editingCourse);
}

function loadCourse(course) {
    if (validateCourse(course, false)) {
        const courseElement = document.getElementById("course-maker-view");
        const courseName = courseElement.querySelector("#course-name-input");
        const courseAuthor = courseElement.querySelector("#course-author-input");
        const courseDescription = courseElement.querySelector("#course-description-input");
        const courseDifficulty = courseElement.querySelector("#course-difficulty-input");
        const courseDuration = courseElement.querySelector("#course-duration-input");
        const courseCorrectAnswersRequired = courseElement.querySelector("#course-correct-answers-required-input");
        const courseQuestionsList = courseElement.querySelector("#course-maker-questions-list");

        globals.questionNumber = 0;
        courseName.value = course.name;
        courseAuthor.value = course.author;
        courseDescription.value = course.description;
        courseDifficulty.value = course.difficulty;
        courseDuration.value = course.duration;
        courseCorrectAnswersRequired.value = course.correctAnswersRequired;

        courseQuestionsList.innerHTML = "";
        course.questions.forEach(createQuestionFromJSON);
    }
}

function createQuestion() {
    const courseQuestionsList = document.getElementById("course-maker-questions-list");
    const questionNumber = ++globals.questionNumber;

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
        ${['A', 'B', 'C', 'D'].map(letter => `
            <div class="course-maker-question-answers">
                <h4>Answer ${letter}</h4>
                <input type="text" id="course-question-${questionNumber}-answer-${letter.toLowerCase()}-input" class="course-question-answer-input" placeholder="Answer ${letter}" autocomplete="off">
                <input type="radio" name="course-question-${questionNumber}-correct-answer-input" class="course-question-correct-answer-input" id="course-question-${questionNumber}-correct-answer-${letter.toLowerCase()}-input" value="Answer ${letter}">
                <label for="course-question-${questionNumber}-correct-answer-${letter.toLowerCase()}-input">Correct?</label>
            </div>`).join('')}
        <button class="course-question-remove-button" id="course-question-${questionNumber}-remove">Remove</button>
    `;

    courseQuestionsList.appendChild(questionElement);

    const updateQuestionCount = () => {
        const questionsTotal = document.querySelectorAll(".course-maker-question").length;
        document.getElementById("course-question-number").textContent = questionsTotal;
        const courseCorrectAnswersRequiredInput = document.getElementById("course-correct-answers-required-input");
        courseCorrectAnswersRequiredInput.value = questionsTotal;
        courseCorrectAnswersRequiredInput.max = questionsTotal;
    };

    questionElement.querySelector(`#course-question-${questionNumber}-remove`).addEventListener("click", () => {
        if (save.settings.audioEnabled) clickSound.play();
        displayPopup(`
            <p>Are you sure you want to remove this question?</p>
            <button id="remove-question-yes">Yes</button>
            <button id="remove-question-no">No</button>
        `);

        document.getElementById("remove-question-yes").addEventListener("click", () => {
            if (save.settings.audioEnabled) clickSound.play();
            questionElement.remove();
            updateQuestionCount();
            closePopup();
        });

        document.getElementById("remove-question-no").addEventListener("click", () => {
            if (save.settings.audioEnabled) clickSound.play();
            closePopup();
        });
    });

    const questionInputs = questionElement.querySelectorAll(`.course-question-correct-answer-input`);
    questionInputs.forEach(input => input.addEventListener("change", () => {
        if (save.settings.audioEnabled) writingSounds[Math.floor(Math.random() * writingSounds.length)].play();
    }));

    questionElement.querySelector(`#course-question-${questionNumber}-type-input`).addEventListener("change", ({ target }) => {
        questionInputs.forEach(input => input.setAttribute("type", target.value === "single choice" ? "radio" : "checkbox"));
    });

    updateQuestionCount();
    return questionElement;
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
        context.moveTo(canvas.width / 2 - 150, printHeight);
        context.lineTo(canvas.width / 2 + 150, printHeight);
        context.stroke();
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
        printHeight += padding;
        context.strokeStyle = "#422800";
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(canvas.width - 50, printHeight);
        context.lineTo(50, printHeight);
        context.stroke();
        printHeight += gap;

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