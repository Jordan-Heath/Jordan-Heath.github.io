document.addEventListener("DOMContentLoaded", openTitle);

const clickSound = new Audio("assets/audio/click.mp3");
const officeSounds = new Audio("assets/audio/office-ambience.mp3");
const writingSounds = [new Audio("assets/audio/writing1.mp3"), new Audio("assets/audio/writing2.mp3")];

const drumrollSound = new Audio("assets/audio/drumroll.mp3");
const successSound = new Audio("assets/audio/success.mp3");
const failureSound = new Audio("assets/audio/failure.mp3");

const data = {
    courses: [
        { // Course Tutorial
            name: "Course Tutorial",
            author: "Qualification Academy",
            description: "This is a tutorial course. It will help you learn how to play the game.",
            difficulty: "Easy",
            duration: "Unlimited",
            correctAnswersRequired: 2,
            questions: [
                {
                    question: "Please select the answer labeled \"A\".",
                    type: "single choice",
                    correctAnswer: [
                        "A"
                    ],
                    answers: [
                        "A",
                        "B",
                        "C",
                        "D"
                    ]
                },
                {
                    question: "Some questions will have multiple correct answers. Please select the answers labeled \"A\" and \"B\".",
                    type: "multiple choice",
                    correctAnswer: [
                        "A",
                        "B"
                    ],
                    answers: [
                        "A",
                        "B",
                        "C",
                        "D"
                    ]
                }
            ],
            isCustom: false
        },
        { // Quiz 1: Applying Communication Skills in the Workplace
            name: "Quiz 1: Applying Communication Skills in the Workplace",
            author: "Jordan Heath",
            description: "Revision Quiz for BSBCMM211 Apply communication skills - Session 1",
            difficulty: "Easy",
            duration: "Unlimited",
            correctAnswersRequired: "3",
            questions: [
                {
                    question: "What is the best way to identify your work task?",
                    type: "single choice",
                    correctAnswer: [
                        "Check your job description, schedule, or ask your supervisor"
                    ],
                    answers: [
                        "Assume what needs to be done",
                        "Check your job description, schedule, or ask your supervisor",
                        "Wait for someone to tell you what to do",
                        "Do what your coworkers are doing"
                    ]
                },
                {
                    question: "Which of the following is an example of a formal communication channel?",
                    type: "single choice",
                    correctAnswer: [
                        "A workplace email from a manager"
                    ],
                    answers: [
                        "A casual chat in the breakroom",
                        "A workplace email from a manager",
                        "A conversation with a friend outside work",
                        "A personal text message"
                    ]
                },
                {
                    question: "Who would be considered a stakeholder in a customer service role?",
                    type: "single choice",
                    correctAnswer: [
                        "The customers, managers, and colleagues involved in the service process"
                    ],
                    answers: [
                        "Only the employees in your department",
                        "The customers, managers, and colleagues involved in the service process",
                        "Only the CEO of the company",
                        "Just the IT department"
                    ]
                },
                {
                    question: "Why is it important to seek advice from a supervisor about communication methods?",
                    type: "single choice",
                    correctAnswer: [
                        "To ensure you are using the correct and professional way to communicate"
                    ],
                    answers: [
                        "To ensure you are using the correct and professional way to communicate",
                        "So you can avoid communicating with people directly",
                        "Because supervisors don't trust employees to communicate on their own",
                        "To have an excuse for not completing your task"
                    ]
                }
            ],
            isCustom: false
        },
        { // Quiz 2: Effective Verbal & Non-verbal Communication
            "name": "Quiz 2: Effective Verbal & Non-verbal Communication​",
            "author": "Jordan Heath",
            "description": "Revision Quiz for BSBCMM211 Apply communication skils - session 2",
            "difficulty": "Easy",
            "duration": "Unlimited",
            "correctAnswersRequired": "3",
            "questions": [
                {
                    "question": "What is the most important factor to consider when planning verbal communication?",
                    "type": "single choice",
                    "correctAnswer": [
                        "Identifying the purpose and audience"
                    ],
                    "answers": [
                        "Speaking loudly",
                        "Identifying the purpose and audience",
                        "Using complex words",
                        "Avoiding eye contact"
                    ]
                },
                {
                    "question": "Which of the following is an example of effective non-verbal communication?",
                    "type": "single choice",
                    "correctAnswer": [
                        "Using an open posture and nodding"
                    ],
                    "answers": [
                        "Crossing your arms while speaking",
                        "Avoiding eye contact",
                        "Using an open posture and nodding",
                        "Speaking very fast"
                    ]
                },
                {
                    "question": "Which of these is the best way to ask for useful feedback on your communication?",
                    "type": "single choice",
                    "correctAnswer": [
                        "“Was there anything unclear in what I said?”"
                    ],
                    "answers": [
                        "“Was there anything unclear in what I said?”",
                        "“You understood me, right?”",
                        "“I don’t need feedback.”",
                        "“Did you like my voice?”"
                    ]
                },
                {
                    "question": "What is a key part of active listening?",
                    "type": "single choice",
                    "correctAnswer": [
                        "Nodding and summarizing key points"
                    ],
                    "answers": [
                        "Interrupting to share your opinion",
                        "Nodding and summarizing key points",
                        "Checking your phone while listening",
                        "Planning what to say next while the person is speaking"
                    ]
                }
            ],
            "isCustom": false
        }
    ]
};

const globals = {
    pageChangeDelay: 1000,
    audioFadeDuration: 2000,
    audioFadeInterval: 2000 / 100,

    notificationDuration: 3000,

    anticipationScreenDuration: 3900,

    questionNumber: 0,

    initialised: false,
    settingsEventListenersApplied: false,
    courseListEventListenersApplied: false
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
    },
    initiationDate: {
        date: "",
        time: ""
    }
}

function openTitle() {
    const titleView = document.getElementById("title-view");

    if (!globals.initialised) {
        loadFonts();
    
        loadFromLocalStorage();
    
        toggleDarkMode(save.settings.darkMode);
        toggleFasterPageChanges(save.settings.fasterPageChanges);
        toggleAudio(save.settings.audioEnabled);
    
        officeSounds.loop = true;

        globals.initialised = true;
    } else if (save.settings.audioEnabled) {
        clickSound.play();
        fadeOutSound(officeSounds);
    }

    buildTitle();

    transitionToView(titleView);
}

function openCourseSelectView() {
    const courseSelectView = document.getElementById("course-select-view");

    // save name
    if (save.name == "") {
        save.name = document.getElementById("title-view-name-input").value;

        save.initiationDate = {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        };

        saveToLocalStorage();
    }

    // play click, play office sound
    if (save.settings.audioEnabled) {
        clickSound.play();
        fadeInSound(officeSounds);
    }

    // build the course list
    setTimeout(() => { buildCourseList(courseSelectView); }, globals.pageChangeDelay/2);

    // transition to course list
    transitionToView(courseSelectView);
}

function openSettingsView() {
    const settingsView = document.getElementById("settings-view");

    if (save.settings.audioEnabled) clickSound.play();

    buildSettings();

    transitionToView(settingsView);
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

        if (nameFilter != "" 
            && !course.name.toLowerCase().includes(nameFilter.toLowerCase())
            && !course.author.toLowerCase().includes(nameFilter.toLowerCase())
            && !course.description.toLowerCase().includes(nameFilter.toLowerCase())
            && !course.difficulty.toLowerCase().includes(nameFilter.toLowerCase())) {
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

function openCourseDetailsView(courseID) {
    const courseDetailsView = document.getElementById("course-details-view");
    const course = data.courses[courseID];

    // play click sound
    if (save.settings.audioEnabled) clickSound.play();

    // build the course details view
    buildCourseDetails(course, courseDetailsView);

    // transition to course details view
    transitionToView(courseDetailsView);
}

function openCourseMakerView(courseID = null) {
    const courseMakerView = document.getElementById("course-maker-view");

    if (save.settings.audioEnabled) {
        clickSound.play();
        fadeOutSound(officeSounds);
    }

    // build the course maker view
    buildCourseMaker(courseMakerView, courseID);

    // transition to course maker view
    transitionToView(courseMakerView);
}

function openCourseTestView(courseID) {
    const courseTestView = document.getElementById("course-test-view");
    const course = data.courses[courseID];

    if (save.settings.audioEnabled) {
        clickSound.play();
        fadeOutSound(officeSounds);
    }

    // build the course view
    buildCourseTest(course);

    // transition to course view
    transitionToView(courseTestView);
}

function submitAnswers(courseID, outOfTime = false) {
    const courseResultsView = document.getElementById("course-results-view");
    const anticipationScreen = document.getElementById("course-results-anticipation-view");
    
    const course = data.courses[courseID];
    if (save.settings.audioEnabled) clickSound.play();

    const proceedEvent = () => {
        closePopup();
        if (save.settings.audioEnabled) clickSound.play();

        if (course.timer) clearInterval(course.timer);

        const answers = calculateCourseScore(course);
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
        transitionToView(anticipationScreen);
        buildAnticipationMenu(anticipationScreen, courseResultsView, results.passed);
    }

    if (outOfTime) {
        displayPopup(`
            <p>You have run out of time</p>
            <button id="submit-answers">OK</button>
        `)

        document.getElementById("submit-answers").addEventListener("click", proceedEvent);
        return;
    }

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
}

function calculateCourseScore(course) {
    const answers = {
        totalAnswers: course.questions.length,
        correctAnswers: 0,
        givenAnswers: []
    };

    function unescapeHtml(html) {
        return html?.replace(/&amp;/g, "&")
                    .replace(/&lt;/g, "<")
                    .replace(/&gt;/g, ">")
                    .replace(/&quot;/g, '"')
                    .replace(/&#039;/g, "'");
    }

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
            //if (givenAnswers[0] == question.correctAnswer[0]) {
            //filter all quotation marks
            if (unescapeHtml(givenAnswers[0]) == question.correctAnswer[0]) {
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

function openCourseResultsView(courseID) {
    const newScreen = document.getElementById("course-results-view");
    const course = data.courses[courseID];
    const courseCompletionData = save.completedCourses.find(c => c.name == course.name);

    if (save.settings.audioEnabled) clickSound.play();

    // build the course results view
    buildCourseResults(course, courseCompletionData, newScreen);

    // transition to course results view
    transitionToView(newScreen);
}

function downloadCertificate(courseID) {
    const course = data.courses[courseID];
    const certificate = buildCertificate(courseID);

    const link = document.createElement("a");
    link.href = certificate.toDataURL("image/png");
    link.download = `${course.name}.png`;
    link.click();
}

