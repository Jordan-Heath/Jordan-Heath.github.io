// #region Saving
function saveToLocalStorage() {
    localStorage.setItem("QualificationAcademySave", JSON.stringify(save));
    displayNotification("Saved");
}

function loadFromLocalStorage() {
    const saveString = localStorage.getItem("QualificationAcademySave");
    if (saveString) {
        const saveData = JSON.parse(saveString);
        Object.assign(save, saveData);

        //add all custom courses to the course list
        save.customCourses.forEach(course => {
            data.courses.push(course);
        });
    }
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
    const course = {};
    course.name = document.getElementById("course-name-input").value;
    course.description = document.getElementById("course-description-input").value;
    course.difficulty = document.getElementById("course-difficulty-input").value;
    course.duration = document.getElementById("course-duration-input").value;
    course.numberOfQuestions = document.querySelectorAll(".course-maker-question").length;
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
}

function deleteCourse(courseID) {
    if (save.settings.audioEnabled) clickSound.play();

    displayPopup(`
        <p>Are you sure you want to delete this course?</p>
        <button id="delete-course">Yes</button>
        <button id="cancel-delete">No</button>
    `);

    document.getElementById("delete-course").addEventListener("click", () => { 
        if (save.settings.audioEnabled) clickSound.play();

        const course = data.courses[courseID];
        data.courses.splice(courseID, 1);
        save.customCourses.splice(save.customCourses.indexOf(course), 1);

        if (save.completedCourses.find(c => c.name == course.name)) 
            save.completedCourses.splice(save.completedCourses.indexOf(save.completedCourses.find(c => c.name == course.name)), 1);

        saveToLocalStorage();

        startGame();

        closePopup();
    });

    document.getElementById("cancel-delete").addEventListener("click", () => { 
        if (save.settings.audioEnabled) clickSound.play();
        closePopup(); 
    });
}

function exportCourse(courseID, course = null) {
    if (save.settings.audioEnabled) clickSound.play();

    course = course || data.courses[courseID];

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