let playerViews = document.querySelectorAll(".player");

let topics = [];
let players = [];
let starttime;
let currentQuestion;

function initialize() {
    startGameButton.disabled = true;

    // add listener to load custom game button
    quizFileInput.addEventListener('change', loadCustomGame);

    // Load topics from data
    loadTopics(DATA);
}

function selectPlayerCount(button, playerCount) {
    // Remove the activated class from all player count buttons
    const buttons = document.querySelectorAll('.playerCountButton');
    buttons.forEach(btn => btn.classList.remove('activated'));
    button.classList.add("activated");

    // Reset Players
    players = [];

    // Get the players container
    const playersContainer = document.getElementById('players');
    playersContainer.innerHTML = ''; // Clear existing player elements

    // Build the player elements and initialize players
    for (let i = 0; i < playerCount; i++) {
        // Create player element
        const playerElement = document.createElement('div');
        playerElement.id = `player${i + 1}`;
        playerElement.className = 'player';

        // Create input for player name
        const playerNameInput = document.createElement('input');
        playerNameInput.className = 'player-name';
        playerNameInput.type = 'text';
        playerNameInput.placeholder = `Player ${i + 1}...`;
        playerNameInput.onchange = function() {
            players[i].name = this.value;
        };

        // Create player score display
        const playerScore = document.createElement('div');
        playerScore.className = 'player-score';
        playerScore.textContent = '0';

        // Create answer buttons table
        const table = document.createElement('table');
        const answerButtons = ['a', 'b', 'c', 'd'];
        for (let row = 0; row < 2; row++) {
            const tr = document.createElement('tr');
            for (let col = 0; col < 2; col++) {
                const td = document.createElement('td');
                const button = document.createElement('button');
                button.className = 'answer-button';
                button.textContent = answerButtons[row * 2 + col].toUpperCase();
                button.onclick = function() {
                    playerSelectAnswer(this, players[i], answerButtons[row * 2 + col]);
                };
                td.appendChild(button);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        // Append elements to playerElement
        playerElement.appendChild(playerNameInput);
        playerElement.appendChild(playerScore);
        playerElement.appendChild(table);

        // Append playerElement to players container
        playersContainer.appendChild(playerElement);

        // Initialize player
        players.push(new Player(`Player ${i + 1}`, playerElement));
    }

    // Disable controls for all players
    players.forEach(player => player.disableControls());

    // Enable the start game button
    startGameButton.disabled = false;

    playerViews = document.querySelectorAll(".player");
}

function startGame() {
    // Navigate to gameboard-view
    openingView.style.display = 'none';
    gameboardView.style.display = 'block';

    starttime = Date.now();

    players[0].chooseQuestion();
}

function selectQuestion(button, topicNumber, questionNumber) {
    // Disable selected question's button on gameboard-view
    button.disabled = true;

    // Load selected question from topic
    currentQuestion = topics[topicNumber].questions[questionNumber];

    // Navigate to question view
    gameboardView.style.display = 'none';
    questionView.style.display = 'block';
    answerQuestionButton.style.display = 'block';
    answerQuestionButton.disabled = true;
    

    // Set the image source
    questionID.innerHTML = `${topics[topicNumber].name} for ${currentQuestion.score}`;
    questionImage.src = `assets/images/${currentQuestion.image}`;
    
    // Construct the question view text content with typing effect
    typeText(currentQuestion.heading, questionHeading, () => {
        typeText(currentQuestion.paragraph, questionParagraph, () => {
            questionAnswerTable.style.opacity = 1;
            typeText(`A: ${currentQuestion.a}`, questionAnswerA, () => {
                typeText(`B: ${currentQuestion.b}`, questionAnswerB, () => {
                    typeText(`C: ${currentQuestion.c}`, questionAnswerC, () => {
                        typeText(`D: ${currentQuestion.d}`, questionAnswerD, () => {
                            // Enable controls for players to answer
                            answerQuestionButton.style.opacity = 1;
                            players.forEach(player => player.enableControls());
                        });
                    });
                });
            });
        });
    });
}

// Function to simulate typing effect
function typeText(text, element, callback) {
    let index = 0;
    const intervalId = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(intervalId);
            if (callback) callback();
        }
    }, 10); // Adjust typing speed as needed
}

function playerSelectAnswer(button, player, selection) {
    // Remove the activated class from all player count buttons
    const buttons = player.element.querySelectorAll('.answer-button');
    buttons.forEach(btn => btn.classList.remove('activated'));

    // Add the activated class to the clicked button
    button.classList.add("activated");

    player.currentAnswer = selection;
    answerQuestionButton.disabled = false;

    players.forEach(player => {
        if (player.currentAnswer === null)
            answerQuestionButton.disabled = true;
    });
}

function answerQuestion() {
    // Disable/change controls
    answerQuestionButton.style.display = 'none';
    answerQuestionButton.style.opacity = 0;
    returnGameboardButton.style.display = 'block';
    returnGameboardButton.disabled = true;
    players.forEach(player => player.disableControls());

    // Determine who won, assign scores and update view
    players.forEach(player => {
        if (currentQuestion.answer === player.currentAnswer) {
            player.score += currentQuestion.score;
            player.element.classList.add('correctPlayer');
        } else {
            player.score -= currentQuestion.score;
            player.element.classList.add('incorrectPlayer');
        }
        player.currentAnswer = null;
        player.updateView();
    });

    // Highlight the correct answer
    const correctAnswerElement = document.getElementById(`questionAnswer${currentQuestion.answer.toUpperCase()}`);
    correctAnswerElement.classList.add('correctAnswer');

    // Load/animate answer
    typeText(currentQuestion.answerParagraph, questionAnswer, () => {
        // Enable controls to return to gameboard
        returnGameboardButton.disabled = false;
        returnGameboardButton.style.opacity = 1;
    });
}

function returnToGameboard() {
    // clear question page
    questionHeading.textContent = '';
    questionImage.src = '';
    questionImage.alt = '';
    questionParagraph.textContent = '';
    questionAnswerTable.style.opacity = 0;
    questionAnswerA.textContent = '';
    questionAnswerB.textContent = '';
    questionAnswerC.textContent = '';
    questionAnswerD.textContent = '';
    questionAnswer.textContent = '';
    document.querySelectorAll('.answer').forEach(answerElement => {
        answerElement.classList.remove('correctAnswer');
    });

    // Clear Player Correct/Incorrect
    players.forEach(player => {
        player.element.classList.remove('correctPlayer');
        player.element.classList.remove('incorrectPlayer');
    });

    // Change question chooser
    returnGameboardButton.style.display = 'none';
    returnGameboardButton.style.opacity = 0;
    questionView.style.display = 'none';
    gameboardView.style.display = 'block';

    currentQuestion.completed = true;

    // Check if the game is over
    let gameover = topics.every(topic => topic.questions.every(question => question.completed));

    if (gameover) {
        gameOver();
    } else {
        // Select the next question chooser
        let currentIndex = players.findIndex(player => player.isChooser);
        players[currentIndex].removeChooser(); // Remove .chooser from current chooser
        currentIndex = (currentIndex + 1) % players.length;
        players[currentIndex].chooseQuestion(); // Add .chooser to the next chooser
    }
}

function gameOver() {
    // Navigate to endscreen
    gameboardView.style.display = 'none';
    gameoverView.style.display = 'block';

    // Determine who won
    let winner = players.reduce((max, player) => player.score > max.score ? player : max, players[0]);

    // Print winner details
    winnerName.innerHTML = winner.name;
    winnerScore.innerHTML = winner.score;

    // Calculate game time in minutes and seconds
    let totalTimeInSeconds = Math.floor((Date.now() - starttime) / 1000);
    let minutes = Math.floor(totalTimeInSeconds / 60);
    let seconds = totalTimeInSeconds % 60;

    // Display game time
    gameTime.innerHTML = `${minutes} minutes ${seconds} seconds`;
}

function loadCustomGame(event) {
    const file = event.target.files[0];
    if (!file) {
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        const contents = e.target.result;
        try {
            const data = JSON.parse(contents);
            loadTopics(data);

            //make user aware custom game is in progress
            customIndicator.style.display = "block";
            startGameButton.innerHTML = '<h2>Start CUSTOM Game<h2>';
            alert('Enjoy Your Custom Game!');
        } catch (error) {
            alert('Invalid JSON file');
            location.reload();
        }
    };
    reader.readAsText(file);
}

function loadTopics(data) {
    topics = [];

    // Assuming DATA is an object with topic names as keys and arrays of question data as values
    Object.keys(data).forEach(topicName => {
        topics.push(new Topic(topicName, data[topicName].map(questionData => {
            return new Question(
                questionData.heading,
                questionData.image,
                questionData.paragraph,
                questionData.a,
                questionData.b,
                questionData.c,
                questionData.d,
                questionData.answer,
                questionData.score,
                questionData.answerParagraph
            );
        })));
    });

    // Dynamically build the gameboard
    const tbody = gameboardView.querySelector('tbody');

    // Clear existing headers and questions
    subjectNames.innerHTML = '';
    tbody.innerHTML = '';

    // Create the header row
    const headerRow = document.createElement('tr');
    topics.forEach((topic) => {
        const th = document.createElement('th');
        th.textContent = `${topic.name}`; // Or use topic.name if available
        headerRow.appendChild(th);
    });
    subjectNames.appendChild(headerRow);

    // Create the question rows
    for (let i = 0; i < topics[0].questions.length; i++) { // Assuming 5 questions per topic
        const row = document.createElement('tr');
        topics.forEach((topic, topicIndex) => {
            const cell = document.createElement('td');
            const button = document.createElement('button');
            button.textContent = `${topic.questions[i].score}`; // Scores are 100, 200, 300, 400, 500
            button.setAttribute('onclick', `selectQuestion(this, ${topicIndex}, ${i});`);
            cell.appendChild(button);
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    }

    // Preload images
    preloadImages();
}

function preloadImages() {
    // Preload images used in questions
    const images = [];
    topics.forEach(topic => {
        topic.questions.forEach(question => {
            const img = new Image();
            img.src = `images/${question.image}`;
            images.push(img);
        });
    });
}

// Call the initialize function to set up the game
initialize();