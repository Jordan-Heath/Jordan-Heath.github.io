// #region Saving
function saveToLocalStorage() {
    try {
        localStorage.setItem("QualificationAcademySave", JSON.stringify(save));
        displayNotification("Saved");
    } catch (error) {
        console.error("Error saving save data:", error);
    }
}

function loadFromLocalStorage() {
    try {
        const saveString = localStorage.getItem("QualificationAcademySave");
        if (saveString) {
            const saveData = JSON.parse(saveString);
            Object.assign(save, saveData);

            //add all custom courses to the course list
            save.customCourses.forEach(course => {
                data.courses.push(course);
            });
        }
    } catch (error) {
        console.error("Error loading save data:", error);
    }
}

function exportSave() {
    saveToLocalStorage();

    const saveString = localStorage.getItem("QualificationAcademySave");
    const blob = new Blob([saveString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "save.json";
    a.click();
    URL.revokeObjectURL(url);
}

function importSave() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";
    fileInput.addEventListener("change", () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                try {
                    const saveData = JSON.parse(reader.result);
                    Object.assign(save, saveData);
                    saveToLocalStorage();
                    location.reload();
                } catch (error) {
                    console.error("Error importing save data:", error);
                }
            };
            reader.readAsText(file);
        }
    });
    fileInput.click();
}

function deleteSave() {
    // ask the user if they are certain
    displayPopup(`
        <p>Are you sure you want to delete your save?</p>
        <button id="delete-save">Yes</button>
        <button id="cancel-delete">No</button>
    `);

    document.getElementById("delete-save").addEventListener("click", () => {
        localStorage.removeItem("QualificationAcademySave");
        location.reload();
    });

    document.getElementById("cancel-delete").addEventListener("click", () => {
        closePopup();
    });
}
// #endregion

// #region Settings
function toggleAudio(state) {
    save.settings.audioEnabled = state;
    document.getElementById("popup-container").classList.remove("active");

    if (state == null) {
        displayPopup(`
            <p>This game makes use of audio</p>
            <p>Do you want to play audio?</p>
            <button id="play-audio">Yes</button>
            <button id="mute-audio">No</button>
        `);
    
        document.getElementById("play-audio").addEventListener("click", () => {
            toggleAudio(true);
            clickSound.play();
        });
    
        document.getElementById("mute-audio").addEventListener("click", () => {
            toggleAudio(false);
        });
    } else if (state) {
        fadeInSound(officeSounds);
    } else {
        officeSounds.pause();
    }
}

function toggleDarkMode(state) {
    save.settings.darkMode = state;

    if (state) {
        //attach darkmode stylesheet to head
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "styles/darkmode.css";
        document.head.appendChild(link);
    } else {
        //remove darkmode stylesheet from head
        const link = document.querySelector("link[href='styles/darkmode.css']");
        if (link) document.head.removeChild(link);
    }
}

function toggleFasterPageChanges(state) {
    save.settings.fasterPageChanges = state;

    if (state) {
        globals.pageChangeDelay = 500;
    } else {
        globals.pageChangeDelay = 1000;
    }
}

function toggleShuffleQuestions(state) {
    save.settings.shuffleQuestions = state;
}

function toggleShuffleAnswers(state) {
    save.settings.shuffleAnswers = state;
}
// #endregion

// #region Audio
function fadeInSound(audio) {
    audio.volume = 0;
    audio.play();
    const interval = setInterval(() => {
        if (audio.volume >= 0.99) {
            audio.volume = 1;
            clearInterval(interval);
        } else {
            audio.volume += 0.01;
        }
    }, globals.audioFadeInterval);
}

function fadeOutSound(audio) {
    audio.play();
    audio.volume = 1;
    const interval = setInterval(() => {
        if (audio.volume <= 0.01) {
            audio.pause();
            audio.volume = 0;
            clearInterval(interval);
        } else {
            audio.volume -= 0.01;
        }
    }, globals.audioFadeInterval);
}
// #endregion

// #region Course Maker
function convertCourseToJSON() {
    try {
        const course = {};
        course.name = document.getElementById("course-name-input").value;
        course.author = document.getElementById("course-author-input").value;
        course.description = document.getElementById("course-description-input").value;
        course.difficulty = document.getElementById("course-difficulty-input").value;
        course.duration = document.getElementById("course-duration-input").value;
        course.correctAnswersRequired = document.getElementById("course-correct-answers-required-input").value;
        course.questions = Array.from(document.querySelectorAll(".course-maker-question")).map(question => {
            const answerElements = Array.from(question.querySelectorAll(".course-maker-question-answers"));
            correctAnswers = [];
            answerElements.forEach(answerElement => {
                if (answerElement.querySelector(".course-question-correct-answer-input").checked)
                    correctAnswers.push(answerElement.querySelector(".course-question-answer-input").value) 
            });

            return {
                question: question.querySelector("textarea").value,
                type: question.querySelector("select").value,
                correctAnswer: correctAnswers,
                answers: Array.from(question.querySelectorAll(".course-question-answer-input")).map(answer => answer.value)
            };
        });
        course.isCustom = true;
        return course;
    } catch (error) {
        displayNotification("Failed to convert course to JSON");
        console.error("Error converting course to JSON:", error);
        return null;
    }
}

function createQuestionFromJSON(question) {
    const questionElement = createQuestion();
    questionElement.querySelector(`#course-question-${globals.questionNumber}-input`).value = question.question;
    questionElement.querySelector(`#course-question-${globals.questionNumber}-type-input`).value = question.type;
    questionElement.querySelector(`#course-question-${globals.questionNumber}-answer-a-input`).value = question.answers[0];
    questionElement.querySelector(`#course-question-${globals.questionNumber}-answer-b-input`).value = question.answers[1];
    questionElement.querySelector(`#course-question-${globals.questionNumber}-answer-c-input`).value = question.answers[2];
    questionElement.querySelector(`#course-question-${globals.questionNumber}-answer-d-input`).value = question.answers[3];
    if (question.type == "multiple choice") {
        questionElement.querySelectorAll(".course-question-correct-answer-input").forEach(element => element.type = "checkbox");
    }
    questionElement.querySelector(`#course-question-${globals.questionNumber}-correct-answer-a-input`).checked = question.correctAnswer.includes(question.answers[0]);
    questionElement.querySelector(`#course-question-${globals.questionNumber}-correct-answer-b-input`).checked = question.correctAnswer.includes(question.answers[1]);
    questionElement.querySelector(`#course-question-${globals.questionNumber}-correct-answer-c-input`).checked = question.correctAnswer.includes(question.answers[2]);
    questionElement.querySelector(`#course-question-${globals.questionNumber}-correct-answer-d-input`).checked = question.correctAnswer.includes(question.answers[3]);

    return questionElement;
}

function validateCourse(course = convertCourseToJSON(), displayNotification = true) {
    const checks = [
        { condition: !course, message: "Something went wrong while validating the course." },
        { condition: !course.name, message: "Please enter a course name." },
        { condition: !course.description, message: "Please enter a course description." },
        { condition: !course.difficulty, message: "Please select a course difficulty." },
        { condition: !course.duration, message: "Please select a course duration." },
        { condition: course.questions.length === 0, message: "Please add at least one question." }
    ];

    for (const { condition, message } of checks) {
        if (condition) {
            if (displayNotification) displayNotification(message);
            return false;
        }
    }

    for (let i = 0; i < course.questions.length; i++) {
        const question = course.questions[i];
        const questionChecks = [
            { condition: !question.question, message: `Please enter a question for question ${i + 1}.` },
            { condition: !question.type, message: `Please select a question type for question ${i + 1}.` },
            { condition: !question.correctAnswer, message: `Please select a correct answer for question ${i + 1}.` },
            { condition: !question.answers, message: "Please enter an answer for each question." }
        ];

        for (const { condition, message } of questionChecks) {
            if (condition) {
                if (displayNotification) displayNotification(message);
                return false;
            }
        }
    }

    return true;
}

function promptDeleteCourse(courseID) {
    if (save.settings.audioEnabled) clickSound.play();

    displayPopup(`
        <p>Are you sure you want to delete this course?</p>
        <button id="delete-course">Yes</button>
        <button id="cancel-delete">No</button>
    `);

    document.getElementById("delete-course").addEventListener("click", () => { 
        if (save.settings.audioEnabled) clickSound.play();

        deleteCourse(courseID);

        openCourseSelectView();

        closePopup();
    });

    document.getElementById("cancel-delete").addEventListener("click", () => { 
        if (save.settings.audioEnabled) clickSound.play();
        closePopup(); 
    });
}

function deleteCourse(courseID) {
    const course = data.courses[courseID];
        data.courses.splice(courseID, 1);
        save.customCourses.splice(save.customCourses.indexOf(course), 1);

        if (save.completedCourses.find(c => c.name == course.name)) 
            save.completedCourses.splice(save.completedCourses.indexOf(save.completedCourses.find(c => c.name == course.name)), 1);

        saveToLocalStorage();
}

function exportCourse(course) {
    if (!course) {
        displayNotification("Failed to export course");
        return;
    }
    if (save.settings.audioEnabled) clickSound.play();

    const json = JSON.stringify(course, null, 4);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${course.name}.json`;
    a.click();
    URL.revokeObjectURL(url);
}
//#endregion