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
        { // Course Maker Tutorial
            name: "Course Maker Tutorial",
            author: "Qualification Academy",
            description: "This test will ensure you know how to make your own quizzes - thus enabling you to use the Course Maker!",
            difficulty: "Easy",
            duration: "Unlimited",
            correctAnswersRequired: "6",
            questions: [
                {
                    question: "The first step of making a course is to decide on a subject. Which of these is a valid subject for a course?",
                    type: "multiple choice",
                    correctAnswer: [
                        "Cheese",
                        "Earwax",
                        "Broccolli",
                        "Dolphins"
                    ],
                    answers: [
                        "Cheese",
                        "Earwax",
                        "Broccolli",
                        "Dolphins"
                    ]
                },
                {
                    question: "Lets assume you decide to make a course on Cheese. Which of these is a good description for that course?",
                    type: "single choice",
                    correctAnswer: [
                        "This course will teach you about cheese."
                    ],
                    answers: [
                        "\"\"",
                        "my quiz wot i made.",
                        "This course will teach you about cheese.",
                        "Description"
                    ]
                },
                {
                    question: "Your course on cheese is going to require the player to answer 500 questions correctly in 15 seconds. Which difficulty is most appropriate?",
                    type: "single choice",
                    correctAnswer: [
                        "Impossible"
                    ],
                    answers: [
                        "Easy",
                        "Medium",
                        "Hard",
                        "Impossible"
                    ]
                },
                {
                    question: "In an academic setting, it is common to have 1 minute to answer a multiple choice question. If your quiz has 10 thoughtful questions, what is the most appropriate length of time for the quiz?",
                    type: "single choice",
                    correctAnswer: [
                        "10 minutes"
                    ],
                    answers: [
                        "60 seconds",
                        "5 minutes",
                        "10 minutes",
                        "15 minutes"
                    ]
                },
                {
                    question: "Now it's time to write questions. What do you need to do to write course questions?",
                    type: "multiple choice",
                    correctAnswer: [
                        "Research the Subject",
                        "Turn trivia into questions",
                        "Create trick answers"
                    ],
                    answers: [
                        "Research the Subject",
                        "Turn trivia into questions",
                        "Plagiarise another quiz",
                        "Create trick answers"
                    ]
                },
                {
                    question: "You have finished writing your Course on cheese. You decide the user needs to get 8/10 questions to pass the course. What should you do now?",
                    type: "multiple choice",
                    correctAnswer: [
                        "Select (Create Course) to add it to the game",
                        "Select (Export) to share the quiz with friends"
                    ],
                    answers: [
                        "Select (Create Course) to add it to the game",
                        "Select (Export) to share the quiz with friends",
                        "Select (Import) to override the course",
                        "Select (Quit) to lose all progress on the quiz"
                    ]
                }
            ],
            isCustom: false
        },
        { // Asteroid Aficionado
            name: "Asteroid Aficionado",
            author: "Qualification Academy",
            description: "Strap in for a course that will take you out of this world, but then plummeting back into this world at above terminal velocity.",
            difficulty: "Easy",
            duration: "5 minutes",
            correctAnswersRequired: "3",
            questions: [
                {
                    question: "What is the region of the solar system where most asteroids are found?",
                    type: "single choice",
                    correctAnswer: [
                        "Asteroid Belt"
                    ],
                    answers: [
                        "Kuiper Belt",
                        "Asteroid Belt",
                        "Oort Cloud",
                        "Heliosphere"
                    ]
                },
                {
                    question: "What is the name of the largest asteroid in the solar system?",
                    type: "single choice",
                    correctAnswer: [
                        "Ceres"
                    ],
                    answers: [
                        "Vesta",
                        "Ceres",
                        "Pallas",
                        "Hygiea"
                    ]
                },
                {
                    question: "Asteroids are primarily composed of which materials?",
                    type: "single choice",
                    correctAnswer: [
                        "Metals and rock"
                    ],
                    answers: [
                        "Ice and dust",
                        "Metals and rock",
                        "Plasma and gas",
                        "Crystals and water"
                    ]
                },
                {
                    question: "What is the difference between an asteroid and a comet?",
                    type: "single choice",
                    correctAnswer: [
                        "Comets are icy, while asteroids are rocky."
                    ],
                    answers: [
                        "Comets are icy, while asteroids are rocky.",
                        "Asteroids are found beyond Neptune, while comets are closer to the Sun.",
                        "Comets orbit planets, while asteroids do not.",
                        "Asteroids emit light, while comets do not."
                    ]
                },
                {
                    question: "What is the phenomenon called when an asteroid enters Earth's atmosphere?",
                    type: "single choice",
                    correctAnswer: [
                        "Meteor"
                    ],
                    answers: [
                        "Meteor",
                        "Meteoroid",
                        "Meteorite",
                        "Bolide"
                    ]
                }
            ],
            isCustom: false
        },
        { // Broccoli Bonafide
            name: "Brocolli Bonafide",
            author: "Qualification Academy",
            description: "Be the envy of all of your friends by demonstrating you're a bonafide broccoli head.",
            difficulty: "Medium",
            duration: "5 minutes",
            correctAnswersRequired: 3,
            questions: [
                {
                    question: "Broccoli belongs to which plant family?",
                    type: "single choice",
                    correctAnswer: [
                        "Brassicaceae"
                    ],
                    answers: [
                        "Solanaceae",
                        "Fabaceae",
                        "Brassicaceae",
                        "Poaceae"
                    ]
                },
                {
                    question: "Which nutrient is broccoli particularly high in, contributing to its status as a \"superfood\"?",
                    type: "single choice",
                    correctAnswer: [
                        "Vitamin C"
                    ],
                    answers: [
                        "Vitamin C",
                        "Vitamin B12",
                        "Vitamin D",
                        "Potassium"
                    ]
                },
                {
                    question: "What part of the broccoli plant is most commonly consumed?",
                    type: "multiple choice",
                    correctAnswer: [
                        "Stems",
                        "Flowers"
                    ],
                    answers: [
                        "Leaves",
                        "Stems",
                        "Roots",
                        "Flowers"
                    ]
                },
                {
                    question: "Broccoli is a cultivar of which wild plant?",
                    type: "single choice",
                    correctAnswer: [
                        "Wild cabbage"
                    ],
                    answers: [
                        "Wild cabbage",
                        "Wild spinach",
                        "Wild mustard",
                        "Wild kale"
                    ]
                },
                {
                    question: "Which cooking method retains the most nutrients in broccoli?",
                    type: "single choice",
                    correctAnswer: [
                        "Steaming"
                    ],
                    answers: [
                        "Boiling",
                        "Frying",
                        "Steaming",
                        "Roasting"
                    ]
                }
            ],
            isCustom: false
        },
        { // Cheese Connoisseur
            name: "Cheese Connoisseur",
            author: "Qualification Academy",
            description: "What stinks? It must be the stink of cheese in this quiz of course! Pound down all 5 questions and you may call yourself a true 'Cheese Connoisseur'!",
            difficulty: "Easy",
            duration: "5 minutes",
            correctAnswersRequired: "3",
            questions: [
                {
                    question: "Which country is credited with producing the most varieties of cheese?",
                    type: "single choice",
                    correctAnswer: [
                        "France"
                    ],
                    answers: [
                        "France",
                        "Italy",
                        "Switzerland",
                        "United States"
                    ]
                },
                {
                    question: "What is the primary enzyme used in traditional cheese-making to curdle milk?",
                    type: "single choice",
                    correctAnswer: [
                        "Rennet"
                    ],
                    answers: [
                        "Amylase",
                        "Rennet",
                        "Protease",
                        "Lipase"
                    ]
                },
                {
                    question: "Which cheese is known as the “King of Cheeses”?",
                    type: "single choice",
                    correctAnswer: [
                        "Parmigiano-Reggiano"
                    ],
                    answers: [
                        "Gouda",
                        "Roquefort",
                        "Parmigiano-Reggiano",
                        "Brie"
                    ]
                },
                {
                    question: "Which type of cheese has characteristic blue veins created by mold?",
                    type: "single choice",
                    correctAnswer: [
                        "Gorgonzola"
                    ],
                    answers: [
                        "Cheddar",
                        "Gorgonzola",
                        "Mozzarella",
                        "Ricotta"
                    ]
                },
                {
                    question: "What is the term for the outer layer or “skin” of a cheese?",
                    type: "single choice",
                    correctAnswer: [
                        "Rind"
                    ],
                    answers: [
                        "Rind",
                        "Crust",
                        "Peel",
                        "Coat"
                    ]
                }
            ],
            isCustom: false
        },
        { // Dolphin Debonair
            name: "Dolphin Debonair",
            author: "Qualification Academy",
            description: "Dolphins are an often beloved creature. Show how much you love them by completing this course.",
            difficulty: "Medium",
            duration: "6 minutes",
            correctAnswersRequired: 4,
            questions: [
                {
                    question: "What is the primary component of a dolphin's diet?",
                    type: "single choice",
                    correctAnswer: [
                        "Fish and squid"
                    ],
                    answers: [
                        "Plankton",
                        "Fish and squid",
                        "Seaweed",
                        "Crustaceans"
                    ]
                },
                {
                    question: "What is the name of the specialized organ dolphins use for echolocation?",
                    type: "single choice",
                    correctAnswer: [
                        "Melon"
                    ],
                    answers: [
                        "Melon",
                        "Blowhole",
                        "Rostrum",
                        "Fluke"
                    ]
                },
                {
                    question: "Dolphins are part of which biological order?",
                    type: "single choice",
                    correctAnswer: [
                        "Cetacea"
                    ],
                    answers: [
                        "Pinnipedia",
                        "Carnivora",
                        "Cetacea",
                        "Sirenia"
                    ]
                },
                {
                    question: "Which dolphin species is the most commonly recognized?",
                    type: "single choice",
                    correctAnswer: [
                        "Bottlenose dolphin"
                    ],
                    answers: [
                        "Bottlenose dolphin",
                        "Spinner dolphin",
                        "Amazon river dolphin",
                        "Risso's dolphin"
                    ]
                },
                {
                    question: "What is unique about dolphin communication?",
                    type: "single choice",
                    correctAnswer: [
                        "Each dolphin has a unique \"signature whistle.\""
                    ],
                    answers: [
                        "They use written symbols on sand.",
                        "Each dolphin has a unique \"signature whistle.\"",
                        "They communicate by changing their skin color.",
                        "They use vibrations in their tail fluke."
                    ]
                },
                {
                    question: "What is the typical lifespan of a bottlenose dolphin in the wild?",
                    type: "single choice",
                    correctAnswer: [
                        "20-30 years"
                    ],
                    answers: [
                        "10-15 years",
                        "20-30 years",
                        "40-50 years",
                        "Over 70 years"
                    ]
                }
            ],
            isCustom: false
        },
        { // Earwax Expert
            name: "Earwax Expert",
            author: "Qualification Academy",
            description: "Explore the facinating domain of earwax",
            difficulty: "Medium",
            duration: "7 minutes",
            correctAnswersRequired: 6,
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
                        "Ceruminous glands"
                    ],
                    answers: [
                        "Sebaceous glands",
                        "Ceruminous glands",
                        "Endocrine glands",
                        "Apocrine glands"
                    ]
                },
                {
                    question: "What is the primary purpose of earwax?",
                    type: "single choice",
                    correctAnswer: [
                        "To lubricate and protect the ear canal"
                    ],
                    answers: [
                        "To amplify sound waves",
                        "To lubricate and protect the ear canal",
                        "To absorb excess moisture",
                        "To regulate ear temperature"
                    ]
                },
                {
                    question: "Which type of earwax is genetically more common in East Asian populations?",
                    type: "single choice",
                    correctAnswer: [
                        "Dry earwax"
                    ],
                    answers: [
                        "Wet earwax",
                        "Dry earwax",
                        "Brown earwax",
                        "Sticky earwax"
                    ]
                },
                {
                    question: "What is the main chemical composition of earwax?",
                    type: "single choice",
                    correctAnswer: [
                        "Fats, cholesterol, and dead skin cells"
                    ],
                    answers: [
                        "Proteins and nucleic acids",
                        "Fats, cholesterol, and dead skin cells",
                        "Minerals and salts",
                        "Enzymes and bile pigments"
                    ]
                },
                {
                    question: "What can happen if there is too much earwax in the ear canal?",
                    type: "multiple choice",
                    correctAnswer: [
                        "Hearing loss",
                        "Pain or discomfort",
                        "Tinnitus (ringing in the ears)",
                        "Vertigo"
                    ],
                    answers: [
                        "Hearing loss",
                        "Pain or discomfort",
                        "Tinnitus (ringing in the ears)",
                        "Vertigo"
                    ]
                },
                {
                    question: "Which tool is commonly used by medical professionals to safely remove impacted earwax?",
                    type: "single choice",
                    correctAnswer: [
                        "Curette"
                    ],
                    answers: [
                        "Otoscope",
                        "Ear syringe",
                        "Curette",
                        "Endoscope"
                    ]
                },
                {
                    question: "Earwax contains compounds that help to fight off which of these?",
                    type: "multiple choice",
                    correctAnswer: [
                        "Viruses",
                        "Bacteria",
                        "Fungus"
                    ],
                    answers: [
                        "Viruses",
                        "Bacteria",
                        "Fungus",
                        "Earbuds"
                    ]
                }
            ],
            isCustom: false
        },
        { // Fossil Fanatic
            name: "Fossil Fanatic",
            author: "Qualification Academy",
            description: "From Fukuiraptor to Fukuisaurus, there are many fossils frequenting the firmament. How Familiar are you?",
            difficulty: "Medium",
            duration: "5 minutes",
            correctAnswersRequired: 7,
            questions: [
                {
                    question: "What type of rock are fossils most commonly found in?",
                    type: "single choice",
                    correctAnswer: [
                        "Sedimentary"
                    ],
                    answers: [
                        "Igneous",
                        "Sedimentary",
                        "Metamorphic",
                        "Volcanic"
                    ]
                },
                {
                    question: "What is the study of fossils called?",
                    type: "single choice",
                    correctAnswer: [
                        "Paleontology"
                    ],
                    answers: [
                        "Geology",
                        "Paleontology",
                        "Archaeology",
                        "Anthropology"
                    ]
                },
                {
                    question: "Which type of fossil preserves the activity of an organism, such as footprints or burrows?",
                    type: "single choice",
                    correctAnswer: [
                        "Trace fossil"
                    ],
                    answers: [
                        "Body fossil",
                        "Trace fossil",
                        "Cast fossil",
                        "Mold fossil"
                    ]
                },
                {
                    question: "What is the name of the process where minerals replace the organic material of an organism, turning it into stone?",
                    type: "single choice",
                    correctAnswer: [
                        "Petrification"
                    ],
                    answers: [
                        "Fossilization",
                        "Petrification",
                        "Crystallization",
                        "Mineralization"
                    ]
                },
                {
                    question: "What is amber, often containing preserved fossils, made from?",
                    type: "single choice",
                    correctAnswer: [
                        "Resin"
                    ],
                    answers: [
                        "Tree sap",
                        "Volcanic glass",
                        "Resin",
                        "Crystallized honey"
                    ]
                },
                {
                    question: "What is a coprolite?",
                    type: "single choice",
                    correctAnswer: [
                        "Fossilized dung"
                    ],
                    answers: [
                        "Fossilized bone",
                        "Fossilized plant",
                        "Fossilized dung",
                        "Fossilized footprint"
                    ]
                },
                {
                    question: "The extinction event that killed the dinosaurs occurred approximately how many million years ago?",
                    type: "single choice",
                    correctAnswer: [
                        "65 million years ago"
                    ],
                    answers: [
                        "65 million years ago",
                        "85 million years ago",
                        "100 million years ago",
                        "120 million years ago"
                    ]
                },
                {
                    question: "Which fossil is often referred to as the \"missing link\" between dinosaurs and birds?",
                    type: "single choice",
                    correctAnswer: [
                        "Archaeopteryx"
                    ],
                    answers: [
                        "Velociraptor",
                        "Pteranodon",
                        "Compsognathus",
                        "Archaeopteryx"
                    ]
                },
                {
                    question: "What is the term for a fossil that is widespread, easily recognizable, and limited to a short span of geological time?",
                    type: "single choice",
                    correctAnswer: [
                        "Index fossil"
                    ],
                    answers: [
                        "Indicator fossil",
                        "Trace fossil",
                        "Index fossil",
                        "Transition fossil"
                    ]
                }
            ],
            isCustom: false
        },
        { // Geography Genius
            name: "Geography Genius",
            author: "Qualificaton Academy",
            description: "Our world is large and unknown. But how much do you know of it? Take this course to find out.",
            difficulty: "Hard",
            duration: "15 minutes",
            correctAnswersRequired: 12,
            questions: [
                {
                    question: "Which country has the longest coastline in the world?",
                    type: "single choice",
                    correctAnswer: [
                        "Canada"
                    ],
                    answers: [
                        "Canada",
                        "Russia",
                        "Australia",
                        "United States"
                    ]
                },
                {
                    question: "What is the largest hot desert in the world?",
                    type: "single choice",
                    correctAnswer: [
                        "Sahara"
                    ],
                    answers: [
                        "Kalahari",
                        "Sonoran",
                        "Sahara",
                        "Gobi"
                    ]
                },
                {
                    question: "The Amazon River is located in which countries?",
                    type: "multiple choice",
                    correctAnswer: [
                        "Brazil",
                        "Peru",
                        "Colombia"
                    ],
                    answers: [
                        "Argentina",
                        "Brazil",
                        "Peru",
                        "Colombia"
                    ]
                },
                {
                    question: "Which mountain range separates Europe and Asia?",
                    type: "single choice",
                    correctAnswer: [
                        "Ural Mountains"
                    ],
                    answers: [
                        "Alps",
                        "Andes",
                        "Himalayas",
                        "Ural Mountains"
                    ]
                },
                {
                    question: "Which city is known as the \"Eternal City\"?",
                    type: "single choice",
                    correctAnswer: [
                        "Rome"
                    ],
                    answers: [
                        "Athens",
                        "Cairo",
                        "Rome",
                        "Paris"
                    ]
                },
                {
                    question: "Which country is entirely landlocked and located in southern Africa?",
                    type: "single choice",
                    correctAnswer: [
                        "Zambia"
                    ],
                    answers: [
                        "Botswana",
                        "Namibia",
                        "Zambia",
                        "Malawi"
                    ]
                },
                {
                    question: "Which country has the most official languages?",
                    type: "single choice",
                    correctAnswer: [
                        "South Africa"
                    ],
                    answers: [
                        "India",
                        "South Africa",
                        "Switzerland",
                        "Bolivia"
                    ]
                },
                {
                    question: "Which ocean is the smallest and shallowest in the world?",
                    type: "single choice",
                    correctAnswer: [
                        "Arctic Ocean"
                    ],
                    answers: [
                        "Arctic Ocean",
                        "Southern Ocean",
                        "Indian Ocean",
                        "Atlantic Ocean"
                    ]
                },
                {
                    question: "What is the largest country in the world by land area?",
                    type: "single choice",
                    correctAnswer: [
                        "Russia"
                    ],
                    answers: [
                        "United States",
                        "Canada",
                        "China",
                        "Russia"
                    ]
                },
                {
                    question: "What is the capital city of Bhutan?",
                    type: "single choice",
                    correctAnswer: [
                        "Thimphu"
                    ],
                    answers: [
                        "Thimphu",
                        "Kathmandu",
                        "Lhasa",
                        "Dhaka"
                    ]
                },
                {
                    question: "Which country has the most time zones?",
                    type: "single choice",
                    correctAnswer: [
                        "Russia"
                    ],
                    answers: [
                        "United States",
                        "Russia",
                        "China",
                        "France"
                    ]
                },
                {
                    question: "Which two countries share the longest international land border?",
                    type: "single choice",
                    correctAnswer: [
                        "United States and Canada"
                    ],
                    answers: [
                        "United States and Canada",
                        "Brazil and Argentina",
                        "Russia and China",
                        "India and Bangladesh"
                    ]
                },
                {
                    question: "Which country is home to the world’s highest waterfall, Angel Falls?",
                    type: "single choice",
                    correctAnswer: [
                        "Venezuela"
                    ],
                    answers: [
                        "Venezuela",
                        "Brazil",
                        "Argentina",
                        "Colombia"
                    ]
                },
                {
                    question: "Which continent has the most countries?",
                    type: "single choice",
                    correctAnswer: [
                        "Africa"
                    ],
                    answers: [
                        "Africa",
                        "Asia",
                        "Europe",
                        "North America"
                    ]
                },
                {
                    question: "What is the largest cold desert in the world?",
                    type: "single choice",
                    correctAnswer: [
                        "Gobi"
                    ],
                    answers: [
                        "Gobi",
                        "Kyzylkum",
                        "Atacama",
                        "Great Victoria"
                    ]
                }
            ],
            isCustom: false
        },
        { // History Hotshot
            name: "History Hotshot",
            author: "Qualification Academy",
            description: "A truly grueling course that expects you to be familiar with thousands of years of history. Horrible.",
            difficulty: "Impossible",
            duration: "20 minutes",
            correctAnswersRequired: 16,
            questions: [
                {
                    question: "Who was the first emperor of Rome?",
                    type: "single choice",
                    correctAnswer: [
                        "Augustus"
                    ],
                    answers: [
                        "Julius Caesar",
                        "Augustus",
                        "Nero",
                        "Tiberius"
                    ]
                },
                {
                    question: "Which empire was known as the “Land of the Rising Sun”?",
                    type: "single choice",
                    correctAnswer: [
                        "Japanese Empire"
                    ],
                    answers: [
                        "Mongol Empire",
                        "Byzantine Empire",
                        "Japanese Empire",
                        "Ottoman Empire"
                    ]
                },
                {
                    question: "The Hundred Years' War was fought between which two countries?",
                    type: "multiple choice",
                    correctAnswer: [
                        "England",
                        "France"
                    ],
                    answers: [
                        "England",
                        "Holy Roman Empire",
                        "France",
                        "Spain"
                    ]
                },
                {
                    question: "Who was the first female pharaoh of Egypt?",
                    type: "single choice",
                    correctAnswer: [
                        "Hatshepsut"
                    ],
                    answers: [
                        "Cleopatra",
                        "Hatshepsut",
                        "Nefertiti",
                        "Sobekneferu"
                    ]
                },
                {
                    question: "What was the name of the ship that brought the Pilgrims to America in 1620?",
                    type: "single choice",
                    correctAnswer: [
                        "Mayflower"
                    ],
                    answers: [
                        "Santa Maria",
                        "Mayflower",
                        "Golden Hind",
                        "Endeavour"
                    ]
                },
                {
                    question: "Who wrote the Communist Manifesto?",
                    type: "multiple choice",
                    correctAnswer: [
                        "Friedrich Engels",
                        "Karl Marx"
                    ],
                    answers: [
                        "Friedrich Engels",
                        "Vladimir Lenin",
                        "Leon Trotsky",
                        "Karl Marx"
                    ]
                },
                {
                    question: "Which war is often referred to as “The Great War”?",
                    type: "single choice",
                    correctAnswer: [
                        "World War I"
                    ],
                    answers: [
                        "World War I",
                        "World War II",
                        "Napoleonic Wars",
                        "The Seven Years' War"
                    ]
                },
                {
                    question: "What was the main purpose of the Magna Carta, signed in 1215?",
                    type: "single choice",
                    correctAnswer: [
                        "To limit the powers of the king"
                    ],
                    answers: [
                        "To end feudalism",
                        "To limit the powers of the king",
                        "To establish the Church of England",
                        "To abolish slavery"
                    ]
                },
                {
                    question: "Which treaty ended World War I?",
                    type: "single choice",
                    correctAnswer: [
                        "Treaty of Versailles"
                    ],
                    answers: [
                        "Treaty of Versailles",
                        "Treaty of Paris",
                        "Treaty of Tordesillas",
                        "Treaty of Ghent"
                    ]
                },
                {
                    question: "Which ancient civilization built Machu Picchu?",
                    type: "single choice",
                    correctAnswer: [
                        "Inca"
                    ],
                    answers: [
                        "Aztec",
                        "Maya",
                        "Inca",
                        "Olmec"
                    ]
                },
                {
                    question: "Which empire built the famous road system called the \"Royal Road\"?",
                    type: "single choice",
                    correctAnswer: [
                        "Persian Empire"
                    ],
                    answers: [
                        "Roman Empire",
                        "Persian Empire",
                        "Ottoman Empire",
                        "Byzantine Empire"
                    ]
                },
                {
                    question: "What was the main religion of the Mughal Empire in India?",
                    type: "single choice",
                    correctAnswer: [
                        "Islam"
                    ],
                    answers: [
                        "Hinduism",
                        "Buddhism",
                        "Islam",
                        "Sikhism"
                    ]
                },
                {
                    question: "Which famous leader crossed the Alps with elephants to attack Rome?",
                    type: "single choice",
                    correctAnswer: [
                        "Hannibal Barca"
                    ],
                    answers: [
                        "Julius Caesar",
                        "Hannibal Barca",
                        "Alexander the Great",
                        "Attila the Hun"
                    ]
                },
                {
                    question: "What was the name of the radical political group that played a key role in the French Revolution?",
                    type: "single choice",
                    correctAnswer: [
                        "Jacobins"
                    ],
                    answers: [
                        "Girondins",
                        "Jacobins",
                        "Sans-Culottes",
                        "Montagnards"
                    ]
                },
                {
                    question: "Which empire did Charlemagne rule?",
                    type: "single choice",
                    correctAnswer: [
                        "Carolingian Empire"
                    ],
                    answers: [
                        "Byzantine Empire",
                        "Holy Roman Empire",
                        "Frankish Empire",
                        "Carolingian Empire"
                    ]
                },
                {
                    question: "Who led the Haitian Revolution, which resulted in the first independent nation in Latin America?",
                    type: "single choice",
                    correctAnswer: [
                        "Toussaint Louverture"
                    ],
                    answers: [
                        "Toussaint Louverture",
                        "Simon Bolívar",
                        "Miguel Hidalgo",
                        "Francisco Morazán"
                    ]
                },
                {
                    question: "Which ancient Greek historian is often called the \"Father of History\"?",
                    type: "single choice",
                    correctAnswer: [
                        "Herodotus"
                    ],
                    answers: [
                        "Thucydides",
                        "Herodotus",
                        "Xenophon",
                        "Socrates"
                    ]
                },
                {
                    question: "Which Chinese dynasty was overthrown by the Mongol Empire, leading to the establishment of the Yuan Dynasty?",
                    type: "single choice",
                    correctAnswer: [
                        "Song Dynasty"
                    ],
                    answers: [
                        "Tang Dynasty",
                        "Song Dynasty",
                        "Ming Dynasty",
                        "Zhou Dynasty"
                    ]
                },
                {
                    question: "What was the primary trade route revitalized under Mongol rule during the Pax Mongolica?",
                    type: "single choice",
                    correctAnswer: [
                        "The Silk Road"
                    ],
                    answers: [
                        "The Silk Road",
                        "The Amber Road",
                        "The Tea Horse Road",
                        "The Maritime Spice Route"
                    ]
                },
                {
                    question: "Which Chinese explorer and diplomat led naval expeditions during the Ming Dynasty, extending China's influence across Asia and Africa?",
                    type: "single choice",
                    correctAnswer: [
                        "Zheng He"
                    ],
                    answers: [
                        "Zheng He",
                        "Zhang Qian",
                        "Xuanzang",
                        "Kangxi Emperor"
                    ]
                }
            ],
            isCustom: false
        }
    ]
}