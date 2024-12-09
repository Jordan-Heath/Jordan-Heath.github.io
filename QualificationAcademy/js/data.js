const data = {
    courses: [
        {
            name: "Course Tutorial",
            description: "This is a tutorial course. It will help you learn how to play the game.",
            difficulty: "Easy",
            duration: "Unlimited",
            numberOfQuestions: 2,
            correctAnswersRequired: 2,
            questions: [
                {
                    question: "Which answer is \"Answer 1\"?",
                    type: "single choice",
                    correctAnswer: [
                        "Answer 1"
                    ],
                    answers: [
                        "Answer 1",
                        "Answer 2",
                        "Answer 3",
                        "Answer 4"
                    ]
                },
                {
                    question: "Select \"Answer 1\" and \"Answer 2\"",
                    type: "multiple choice",
                    correctAnswer: [
                        "Answer 1",
                        "Answer 2"
                    ],
                    answers: [
                        "Answer 1",
                        "Answer 2",
                        "Answer 3",
                        "Answer 4"
                    ]
                }
            ],
            isCustom: false
        },
        {
            name: "Creating Quizzes",
            description: "This test will ensure you know how to make your own quizzes - thus enabling you to use the Course Maker!",
            difficulty: "Medium",
            duration: "10 minutes",
            numberOfQuestions: 4,
            correctAnswersRequired: "4",
            questions: [
                {
                    "question": "What is the first step to making a quiz?",
                    "type": "single choice",
                    "correctAnswer": [
                        "Deciding a subject"
                    ],
                    "answers": [
                        "Deciding a subject",
                        "Writing the questions",
                        "Writing the answers",
                        "Inventing trick answers"
                    ]
                },
                {
                    "question": "What is the second step to making a quiz?",
                    "type": "single choice",
                    "correctAnswer": [
                        "Writing the questions"
                    ],
                    "answers": [
                        "Deciding a subject",
                        "Writing the questions",
                        "Writing the answers",
                        "Inventing trick answers"
                    ]
                },
                {
                    "question": "What is the third step to making a quiz?",
                    "type": "single choice",
                    "correctAnswer": [
                        "Writing the answers"
                    ],
                    "answers": [
                        "Deciding a subject",
                        "Writing the questions",
                        "Writing the answers",
                        "Inventing trick answers"
                    ]
                },
                {
                    "question": "What is the final step to writing a quiz?",
                    "type": "single choice",
                    "correctAnswer": [
                        "Inventing trick answers"
                    ],
                    "answers": [
                        "Deciding a subject",
                        "Writing the questions",
                        "Writing the answers",
                        "Inventing trick answers"
                    ]
                }
            ],
            isCustom: false
        },
        {
            name: "Earwax Cert I",
            description: "Explore the facinating domain of earwax",
            difficulty: "Medium",
            duration: "5 minutes",
            numberOfQuestions: 4,
            correctAnswersRequired: 4,
            questions: [
                {
                    question: "What is the scientific name of earwax?",
                    type: "single choice",
                    correctAnswer: [
                        "Cerumen"
                    ],
                    answers: [
                        "Mucus",
                        "Cerumen",
                        "Saliva",
                        "Rheum"
                    ]
                },
                {
                    question: "Which glands produce earwax?",
                    type: "single choice",
                    correctAnswer: [
                        "Sweat glands"
                    ],
                    answers: [
                        "Sebaceous glands",
                        "Sweat glands",
                        "Salivary glands",
                        "Thyroid glands"
                    ]
                },
                {
                    question: "What is the primary purpose of earwax?",
                    type: "single choice",
                    correctAnswer: [
                        "To trap dirt and debris"
                    ],
                    answers: [
                        "To transmit sound",
                        "To trap dirt and debris",
                        "To lubricate the ear drum",
                        "None of the above"
                    ]
                },
                {
                    question: "What can happen if there is too much earwax in the ear canal?",
                    type: "multiple choice",
                    correctAnswer: [
                        "Hearing loss",
                        "Pain or discomfort",
                        "Tinnitus (ringing in the ears)"
                    ],
                    answers: [
                        "Hearing loss",
                        "Pain or discomfort",
                        "Tinnitus (ringing in the ears)",
                        "Coughing or sneezing"
                    ]
                }
            ],
            isCustom: false
        }
    ]
}