const challengeDescriptions = {
    "None": "This gatcha has no challenge. Click to spin!",
    "Moving Button": "This Gatcha Moves the Spinner Button to a random location after each spin.",
    "Collector": "This Gatcha requires the player to steer the Spinner Button into the goal by using the arrow keys.",
    "Number Popup": "This Gatcha requires the player to press the correct number key to open the gatcha.",
    "Typing Challenge": "The player must type the name of the monster to open the gatcha.",
    "Passive": `This Gatcha spins itself!`
}

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const arrows = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
const arrowSymbols = {
    "ArrowUp": '↑',
    "ArrowDown": '↓',
    "ArrowLeft": '←',
    "ArrowRight": '→'
}

function startCollectorChallenge() {
    const spinnerContainerElement = document.querySelector('.spinner');
    const goalElements = [];
    for (let i = 0; i < spinnerContainerElement.offsetWidth; i += 410) {
        const goalElement = document.createElement('div');
        goalElement.className = 'goal';
        goalElements.push(goalElement);
    }

    goalElements.forEach((goalElement) => {
        spinnerContainerElement.appendChild(goalElement);

        goalElement.style.left = `${Math.random() * (spinnerContainerElement.offsetWidth - goalElement.offsetWidth)}px`;
        goalElement.style.top = `${Math.random() * (spinnerContainerElement.offsetHeight - goalElement.offsetHeight)}px`;
    });

    const gatchaSpinnerElement = document.querySelector('.gatcha-spinner');
    gatchaSpinnerElement.innerHTML = "Press the Arrow Keys to move the button";
    gatchaSpinnerElement.style.top = `${spinnerContainerElement.offsetHeight / 2 - gatchaSpinnerElement.offsetHeight / 2}px`;
    gatchaSpinnerElement.style.left = `${spinnerContainerElement.offsetWidth / 2 - gatchaSpinnerElement.offsetWidth / 2}px`;

    const moveSpinner = () => {
        if (globals.activeKeys['ArrowUp'] && parseInt(gatchaSpinnerElement.style.top || 0) > 0) {
            gatchaSpinnerElement.style.top = `${parseInt(gatchaSpinnerElement.style.top || 0) - 10}px`;
        }
        if (globals.activeKeys['ArrowDown'] && parseInt(gatchaSpinnerElement.style.top || 0) < spinnerContainerElement.offsetHeight - gatchaSpinnerElement.offsetHeight) {
            gatchaSpinnerElement.style.top = `${parseInt(gatchaSpinnerElement.style.top || 0) + 10}px`;
        }
        if (globals.activeKeys['ArrowLeft'] && parseInt(gatchaSpinnerElement.style.left || 0) > 0) {
            gatchaSpinnerElement.style.left = `${parseInt(gatchaSpinnerElement.style.left || 0) - 10}px`;
        }
        if (globals.activeKeys['ArrowRight'] && parseInt(gatchaSpinnerElement.style.left || 0) < spinnerContainerElement.offsetWidth - gatchaSpinnerElement.offsetWidth) {
            gatchaSpinnerElement.style.left = `${parseInt(gatchaSpinnerElement.style.left || 0) + 10}px`;
        }

        goalElements.forEach((goalElement) => {
            if (
                parseInt(gatchaSpinnerElement.style.top || 0) + gatchaSpinnerElement.offsetHeight >=
                parseInt(goalElement.style.top || 0) &&
                parseInt(gatchaSpinnerElement.style.top || 0) <=
                parseInt(goalElement.style.top || 0) + goalElement.offsetHeight &&
                parseInt(gatchaSpinnerElement.style.left || 0) + gatchaSpinnerElement.offsetWidth >=
                parseInt(goalElement.style.left || 0) &&
                parseInt(gatchaSpinnerElement.style.left || 0) <=
                parseInt(goalElement.style.left || 0) + goalElement.offsetWidth
            ) {
                goalElement.style.left = `${Math.random() * (spinnerContainerElement.offsetWidth - goalElement.offsetWidth)}px`;
                goalElement.style.top = `${Math.random() * (spinnerContainerElement.offsetHeight - goalElement.offsetHeight)}px`;

                spinGatcha();
            }
        });
    };

    let intervalID = null;

    const startMovement = () => {
        if (!intervalID) {
            intervalID = setInterval(moveSpinner, 16); // Adjust interval speed as needed
        }
    };

    const stopMovement = () => {
        if (intervalID) {
            clearInterval(intervalID);
            intervalID = null;
        }
    };

    globals.keyPressEventListener = (event) => {
        globals.activeKeys[event.key] = true; // Mark the key as pressed
        gatchaSpinnerElement.innerHTML = arrowSymbols[event.key];
        startMovement(); // Ensure movement starts when a key is pressed

        if (arrows.includes(event.key)) event.preventDefault();
    };

    globals.keyReleaseEventListener = (event) => {
        globals.activeKeys[event.key] = false; // Mark the key as released
        if (!Object.values(globals.activeKeys).some((key) => key)) {
            stopMovement(); // Stop movement if no keys are pressed
        }
    };

    document.addEventListener('keydown', globals.keyPressEventListener);
    document.addEventListener('keyup', globals.keyReleaseEventListener);
}

function startKeyPressChallenge(keyPressOptionsArray) {
    //choose a random option from the array
    const timer = 1; //seconds
    const updateInterval = 0.01;
    let timeRemaining = timer + updateInterval;

    let requiredKey = keyPressOptionsArray[Math.floor(Math.random() * keyPressOptionsArray.length)];

    //set the gatcha spinner to the option
    const gatchaSpinnerElement = document.querySelector('.gatcha-spinner');
    gatchaSpinnerElement.style.fontSize = '40px';
    let printKey = requiredKey.toUpperCase();
    if (arrows.includes(requiredKey)) printKey = arrowSymbols[requiredKey];
    gatchaSpinnerElement.innerHTML = `${printKey}`;

    //create a progressbar
    const progressBarElement = document.createElement('div');
    progressBarElement.className = 'progress-bar';
    document.querySelector('.spinner').appendChild(progressBarElement);
    
    globals.gameInterval = setInterval(() => {
        timeRemaining -= updateInterval;
        progressBarElement.innerText = `${timeRemaining.toFixed(1)}s`;
        progressBarElement.style.width = `${timeRemaining * 100 / timer}%`;

        if (timeRemaining <= 0) {
            //reset progress
            timeRemaining = timer + updateInterval;

            //change number
            requiredKey = keyPressOptionsArray[Math.floor(Math.random() * keyPressOptionsArray.length)];
            printKey = requiredKey.toUpperCase();
            if (arrows.includes(requiredKey)) printKey = arrowSymbols[requiredKey];
            gatchaSpinnerElement.innerHTML = `${printKey}`;
        }
    }, updateInterval * 1000);

    //listen for keypress
    globals.keyPressEventListener = (event) => {
        if (event.key === requiredKey) {
            spinGatcha();
        }
    };

    document.addEventListener('keydown', globals.keyPressEventListener);
}

function startTypingChallenge() {
    //choose the name of a random monster in save.monsters
    const monster = save.monsters[Math.floor(Math.random() * save.monsters.length)];

    const gatchaSpinnerElement = document.querySelector('.gatcha-spinner');
    gatchaSpinnerElement.style.display = 'none';

    //make an array of remaining letters, an array where completed letters go
    const remainingWord = monster.name.split('');
    const completedLetters = [];

    //delete old spelling bee elements
    document.querySelectorAll('.spelling-bee')?.forEach((spellingBeeElement) => spellingBeeElement.remove());
    
    //create spelling bee element
    const spellingBeeElement = document.createElement('div');
    spellingBeeElement.className = 'spelling-bee';
    spellingBeeElement.innerHTML = `
        <p>${monster.name}</p>
        <p style="white-space: pre;">${completedLetters.join(' ') + ' ' + remainingWord.map((letter) => (letter === ' ' ? ' ' : '_')).join(' ')}</p>
    `;
    document.querySelector('.spinner').appendChild(spellingBeeElement);

    //listen for keypress
    globals.keyPressEventListener = (event) => {
        //if the key pressed is the first letter of the remaining word (not case sensitive)

        if (event.key.toLowerCase() === remainingWord[0].toLowerCase()) {
            completedLetters.push(remainingWord[0]);
            remainingWord.shift();

            // skip spaces
            if (remainingWord[0] === ' ') {
                completedLetters.push(remainingWord[0]);
                remainingWord.shift();
            }

            spellingBeeElement.innerHTML = `
                <p>${monster.name}</p>
                <p style="white-space: pre;">${completedLetters.join(' ') + ' ' + remainingWord.map((letter) => (letter === ' ' ? ' ' : '_')).join(' ')}</p>
            `;

            if (remainingWord.length === 0) {
                spinGatcha();
                document.removeEventListener('keydown', globals.keyPressEventListener);
                startTypingChallenge();
            }
        }
    };

    document.addEventListener('keydown', globals.keyPressEventListener);
}

function startMovingButtonChallenge() {
    const gatchaSpinnerElement = document.querySelector('.gatcha-spinner');
    gatchaSpinnerElement.disabled = false;
    
    const spinnerContainer = document.querySelector('.spinner');
    const spinnerButton = document.querySelector('.gatcha-spinner');

    spinnerButton.style.left = `${Math.random() * (spinnerContainer.offsetWidth - spinnerButton.offsetWidth)}px`;
    spinnerButton.style.top = `${Math.random() * (spinnerContainer.offsetHeight - spinnerButton.offsetHeight)}px`;

    globals.gatchaSpinnerEventListener = () => {
        spinnerButton.style.left = `${Math.random() * (spinnerContainer.offsetWidth - spinnerButton.offsetWidth)}px`;
        spinnerButton.style.top = `${Math.random() * (spinnerContainer.offsetHeight - spinnerButton.offsetHeight)}px`;
    }

    gatchaSpinnerElement.addEventListener('click', globals.gatchaSpinnerEventListener);
}

function startPassiveChallenge() {
    const gatchaSpinnerElement = document.querySelector('.gatcha-spinner');
    gatchaSpinnerElement.innerHTML = 'Lay back and relax!';

    const spinInterval = 1000 / save.repeatableUpgrades.passiveGatchaSpeed;

    globals.gameInterval = setInterval(() => {
        spinGatcha();
    }, spinInterval);
}

function clearChallenges() {
    const gatchaSpinnerElement = document.querySelector('.gatcha-spinner');

    const challengeElements = document.querySelectorAll('.goal, .spelling-bee, .progress-bar');
    challengeElements.forEach((challenge) => challenge.remove());

    document.removeEventListener('keydown', globals.keyPressEventListener);
    document.removeEventListener('keyup', globals.keyReleaseEventListener);
    window.removeEventListener('resize', globals.resizeListener);
    gatchaSpinnerElement.removeEventListener('click', globals.gatchaSpinnerEventListener);

    clearInterval(globals.gameInterval);
}
