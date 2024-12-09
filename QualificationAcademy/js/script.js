document.addEventListener("DOMContentLoaded", init);

const clickSound = new Audio("assets/audio/click.mp3");
const officeSounds = new Audio("assets/audio/office-ambience.mp3");
const writingSounds = [new Audio("assets/audio/writing1.mp3"), new Audio("assets/audio/writing2.mp3")];

const drumrollSound = new Audio("assets/audio/drumroll.mp3");
const successSound = new Audio("assets/audio/success.mp3");
const failureSound = new Audio("assets/audio/failure.mp3");

const globals = {
    pageChangeDelay: 1000,
    audioFadeDuration: 2000,
    audioFadeInterval: 2000 / 100,

    notificationDuration: 3000,

    anticipationScreenDuration: 3900
};

const save = {
    name: "",
    initiationDate: null,
    completedCourses: [],
    customCourses: [],
    settings: {
        darkMode: false,
        fasterPageChanges: false,
        audioEnabled: null,
        shuffleQuestions: false,
        shuffleAnswers: true
    }
}

function init() {
    const titleScreen = document.getElementById("title-screen");
    titleScreen.classList.add("active");

    loadFonts();

    loadFromLocalStorage();

    toggleDarkMode(save.settings.darkMode);
    toggleFasterPageChanges(save.settings.fasterPageChanges);
    toggleAudio(save.settings.audioEnabled);

    officeSounds.loop = true;

    buildTitleScreen(titleScreen);
}

function newGame() {
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

function startGame() {
    const activeScreen = document.querySelector("main.active");
    const selectCourseView = document.getElementById("select-course-view");

    // save name
    if (save.name == "") {
        save.name = document.getElementById("name-input").value;
        save.initiationDate = new Date();
        saveToLocalStorage();
    }

    // play click, play office sound
    if (save.settings.audioEnabled) {
        clickSound.play();
        fadeInSound(officeSounds);
    }

    // build the course list
    buildCourseList(selectCourseView);

    // transition to course list
    transitionToScreen(activeScreen, selectCourseView);
}

function exitGame() {
    const activeScreen = document.querySelector("main.active");
    const titleScreen = document.getElementById("title-screen");

    if (save.settings.audioEnabled) {
        clickSound.play();
        fadeOutSound(officeSounds);
    }

    buildTitleScreen(titleScreen);

    transitionToScreen(activeScreen, titleScreen);
}

function showSettings() {
    const activeScreen = document.querySelector("main.active");
    const settingsView = document.getElementById("settings-view");

    if (save.settings.audioEnabled) clickSound.play();

    buildSettings(settingsView);
    transitionToScreen(activeScreen, settingsView);
}

function filterCourses() {
    const nameFilter = document.getElementById("course-filter-input").value;
    const difficultyFilter = document.getElementById("course-filter-difficulty").value;
    const completedFilter = document.getElementById("course-filter-completed").value;
    const courseElements = document.querySelectorAll(".course");

    courseElements.forEach(courseElement => {
        courseElement.classList.remove("filtered");
    });

    data.courses.forEach((course, index) => {
        const courseElement = document.getElementById(`course-${index}`);
        const courseCompletionData = save.completedCourses.find(c => c.name == course.name);

        if (nameFilter != "" && !course.name.toLowerCase().includes(nameFilter.toLowerCase())) {
            courseElement.classList.add("filtered");
        } 
        
        if (difficultyFilter != "All" && course.difficulty != difficultyFilter) {
            courseElement.classList.add("filtered");
        } 

        switch (completedFilter) {
            case "Completed":
                if (!courseCompletionData || !courseCompletionData.passed) courseElement.classList.add("filtered");
                break;
            case "Incomplete":
                if (courseCompletionData && courseCompletionData.passed) courseElement.classList.add("filtered");
                break;
            case "All":
                break;
        }
    })
}

function selectCourse(courseID) {
    const activeScreen = document.querySelector("main.active");
    const courseDetailsView = document.getElementById("course-details-view");
    const course = data.courses[courseID];

    // play click sound
    if (save.settings.audioEnabled) clickSound.play();

    // build the course details view
    buildCourseDetails(course, courseDetailsView);

    // transition to course details view
    transitionToScreen(activeScreen, courseDetailsView);
}

function openCourseMaker() {
    const activeScreen = document.querySelector("main.active");
    const courseMakerView = document.getElementById("course-maker-view");

    if (save.settings.audioEnabled) clickSound.play();

    // build the course maker view
    buildCourseMaker(courseMakerView);

    // transition to course maker view
    transitionToScreen(activeScreen, courseMakerView);
}

function acceptCourse(courseID) {
    const activeScreen = document.querySelector("main.active");
    const courseView = document.getElementById("course-view");
    const course = data.courses[courseID];

    if (save.settings.audioEnabled) {
        clickSound.play();
        fadeOutSound(officeSounds);
    }

    // build the course view
    buildCourseTest(course, courseView);

    // transition to course view
    transitionToScreen(activeScreen, courseView);
}

function submitAnswers(courseID, confirmed = false) {
    const activeScreen = document.querySelector("main.active");
    const courseResultsView = document.getElementById("course-results-view");
    const anticipationScreen = document.getElementById("course-results-anticipation-view");
    
    const course = data.courses[courseID];
    if (save.settings.audioEnabled) clickSound.play();

    const proceedEvent = () => {
        closePopup();
        if (save.settings.audioEnabled) clickSound.play();

        if (course.timer) clearInterval(course.timer);

        const answers = calculateScore(course);
        const results = {
            name: course.name,
            passed: answers.correctAnswers >= course.correctAnswersRequired,
            score: answers.correctAnswers,
            date: new Date().toLocaleDateString(),
            answers: answers
        };

        //determine if passed
        if (results.passed) {
            let courseCompletionData = save.completedCourses.find(c => c.name == course.name);

            if (!courseCompletionData) {
                save.completedCourses.push(results);
            } else if (results.score > courseCompletionData.score) {
                courseCompletionData.passed = results.passed;
                courseCompletionData.score = results.score;
                courseCompletionData.date = results.date;
                courseCompletionData.answers = results.answers;
            }
            
            saveToLocalStorage();
        }

        // build the course results view
        buildCourseResults(course, results, courseResultsView);

        // remove course view screen
        if (save.settings.audioEnabled) drumrollSound.play();

        // build the anticipation screen
        transitionToScreen(activeScreen, anticipationScreen);
        buildAnticipationMenu(anticipationScreen, courseResultsView, results.passed);
    }

    if (!confirmed) {
        // prompt the user if they're sure
        displayPopup(`
            <p>Are you sure you want to submit your answers?</p>
            <button id="submit-answers">Yes</button>
            <button id="cancel-answers">No</button>
        `);

        document.getElementById("submit-answers").addEventListener("click", proceedEvent);

        document.getElementById("cancel-answers").addEventListener("click", () => {
            closePopup();
            if (save.settings.audioEnabled) clickSound.play();
        });
    } else {
        displayPopup(`
            <p>You have run out of time</p>
            <button id="submit-answers">OK</button>
        `)

        document.getElementById("submit-answers").addEventListener("click", proceedEvent);
    }
}

function calculateScore(course) {
    const answers = {
        totalAnswers: course.questions.length,
        correctAnswers: 0,
        givenAnswers: []
    };

    for (let i = 0; i < course.questions.length; i++) {
        const question = course.questions[i];
        const answerElements = document.querySelectorAll(`input[name="question-${i + 1}"]`);
        const givenAnswers = Array.from(answerElements).filter(answer => answer.checked).map(answer => answer.value);
        answers.givenAnswers.push({
            question: question.question,
            givenAnswer: givenAnswers,
            correct: null
        });


        if (question.type == "single choice") {
            if (givenAnswers.length == 1 && givenAnswers[0] == question.correctAnswer[0]) {
                answers.correctAnswers++;
                answers.givenAnswers[i].correct = true;
            } else {
                answers.givenAnswers[i].correct = false;
            }
        } else if (question.type == "multiple choice") {
            if (givenAnswers.length == question.correctAnswer.length && givenAnswers.every(answer => question.correctAnswer.includes(answer))) {
                answers.correctAnswers++;
                answers.givenAnswers[i].correct = true;
            } else {
                answers.givenAnswers[i].correct = false;
            }
        }
    }

    return answers;
}

function showCertificate(courseID) {
    const activeScreen = document.querySelector("main.active");
    const newScreen = document.getElementById("course-results-view");
    const course = data.courses[courseID];
    const courseCompletionData = save.completedCourses.find(c => c.name == course.name);

    if (save.settings.audioEnabled) clickSound.play();

    // build the course results view
    buildCourseResults(course, courseCompletionData, newScreen);

    // transition to course results view
    transitionToScreen(activeScreen, newScreen);
}

function downloadCertificate(courseID) {
    const course = data.courses[courseID];
    const certificate = buildCertificate(courseID);

    const link = document.createElement("a");
    link.href = certificate.toDataURL("image/png");
    link.download = `${course.name}.png`;
    link.click();
}