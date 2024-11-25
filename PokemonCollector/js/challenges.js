const challengeDescriptions = {
    "Moving Button": "This CardPack Moves the opener Button to a random location after each spin.",
    "Collector": "This CardPack requires the player to steer the opener Button into the goal by using the arrow keys.",
    "Number Popup": "This CardPack requires the player to press the correct number key to open the CardPack.",
    "Typing Challenge": "The player must type the name of the monster to open the CardPack.",
    "Passive": `This CardPack spins itself!`,
    "None": "This CardPack has no challenge. Click to spin!"
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
    const openerContainerElement = document.querySelector('.opener');
    const goalElements = [];
    for (let i = 0; i < openerContainerElement.offsetWidth; i += 410) {
        const goalElement = document.createElement('div');
        goalElement.className = 'goal';
        goalElements.push(goalElement);
    }

    goalElements.forEach((goalElement) => {
        openerContainerElement.appendChild(goalElement);

        goalElement.style.left = `${Math.random() * (openerContainerElement.offsetWidth - goalElement.offsetWidth)}px`;
        goalElement.style.top = `${Math.random() * (openerContainerElement.offsetHeight - goalElement.offsetHeight)}px`;
    });

    const cardPackOpenerElement = document.querySelector('.cardpack-opener');
    cardPackOpenerElement.innerHTML = "Press the Arrow Keys to move the button";
    cardPackOpenerElement.style.top = `${openerContainerElement.offsetHeight / 2 - cardPackOpenerElement.offsetHeight / 2}px`;
    cardPackOpenerElement.style.left = `${openerContainerElement.offsetWidth / 2 - cardPackOpenerElement.offsetWidth / 2}px`;

    const moveopener = () => {
        if (globals.activeKeys['ArrowUp'] && parseInt(cardPackOpenerElement.style.top || 0) > 0) {
            cardPackOpenerElement.style.top = `${parseInt(cardPackOpenerElement.style.top || 0) - 10}px`;
        }
        if (globals.activeKeys['ArrowDown'] && parseInt(cardPackOpenerElement.style.top || 0) < openerContainerElement.offsetHeight - cardPackOpenerElement.offsetHeight) {
            cardPackOpenerElement.style.top = `${parseInt(cardPackOpenerElement.style.top || 0) + 10}px`;
        }
        if (globals.activeKeys['ArrowLeft'] && parseInt(cardPackOpenerElement.style.left || 0) > 0) {
            cardPackOpenerElement.style.left = `${parseInt(cardPackOpenerElement.style.left || 0) - 10}px`;
        }
        if (globals.activeKeys['ArrowRight'] && parseInt(cardPackOpenerElement.style.left || 0) < openerContainerElement.offsetWidth - cardPackOpenerElement.offsetWidth) {
            cardPackOpenerElement.style.left = `${parseInt(cardPackOpenerElement.style.left || 0) + 10}px`;
        }

        goalElements.forEach((goalElement) => {
            if (
                parseInt(cardPackOpenerElement.style.top || 0) + cardPackOpenerElement.offsetHeight >=
                parseInt(goalElement.style.top || 0) &&
                parseInt(cardPackOpenerElement.style.top || 0) <=
                parseInt(goalElement.style.top || 0) + goalElement.offsetHeight &&
                parseInt(cardPackOpenerElement.style.left || 0) + cardPackOpenerElement.offsetWidth >=
                parseInt(goalElement.style.left || 0) &&
                parseInt(cardPackOpenerElement.style.left || 0) <=
                parseInt(goalElement.style.left || 0) + goalElement.offsetWidth
            ) {
                goalElement.style.left = `${Math.random() * (openerContainerElement.offsetWidth - goalElement.offsetWidth)}px`;
                goalElement.style.top = `${Math.random() * (openerContainerElement.offsetHeight - goalElement.offsetHeight)}px`;

                openCardPack();
            }
        });
    };

    let intervalID = null;

    const startMovement = () => {
        if (!intervalID) {
            intervalID = setInterval(moveopener, 16); // Adjust interval speed as needed
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
        cardPackOpenerElement.innerHTML = arrowSymbols[event.key];
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

    //set the CardPack opener to the option
    const cardPackOpenerElement = document.querySelector('.cardpack-opener');
    cardPackOpenerElement.style.fontSize = '40px';
    let printKey = requiredKey.toUpperCase();
    if (arrows.includes(requiredKey)) printKey = arrowSymbols[requiredKey];
    cardPackOpenerElement.innerHTML = `${printKey}`;

    //create a progressbar
    const progressBarElement = document.createElement('div');
    progressBarElement.className = 'progress-bar';
    document.querySelector('.opener').appendChild(progressBarElement);
    
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
            cardPackOpenerElement.innerHTML = `${printKey}`;
        }
    }, updateInterval * 1000);

    //listen for keypress
    globals.keyPressEventListener = (event) => {
        if (event.key === requiredKey) {
            openCardPack();
        }
    };

    document.addEventListener('keydown', globals.keyPressEventListener);
}

function startTypingChallenge() {
    //choose the name of a random monster in save.monsters
    const monster = save.monsters[Math.floor(Math.random() * save.monsters.length)];

    const cardPackOpenerElement = document.querySelector('.cardpack-opener');
    cardPackOpenerElement.style.display = 'none';

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
    document.querySelector('.opener').appendChild(spellingBeeElement);

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
                openCardPack();
                document.removeEventListener('keydown', globals.keyPressEventListener);
                startTypingChallenge();
            }
        }
    };

    document.addEventListener('keydown', globals.keyPressEventListener);
}

function startMovingButtonChallenge() {
    const cardPackOpenerElement = document.querySelector('.cardpack-opener');
    cardPackOpenerElement.disabled = false;
    
    const openerContainer = document.querySelector('.opener');
    const openerButton = document.querySelector('.cardpack-opener');

    openerButton.style.left = `${Math.random() * (openerContainer.offsetWidth - openerButton.offsetWidth)}px`;
    openerButton.style.top = `${Math.random() * (openerContainer.offsetHeight - openerButton.offsetHeight)}px`;

    globals.cardPackOpenerEventListener = () => {
        openerButton.style.left = `${Math.random() * (openerContainer.offsetWidth - openerButton.offsetWidth)}px`;
        openerButton.style.top = `${Math.random() * (openerContainer.offsetHeight - openerButton.offsetHeight)}px`;

        openCardPack();
    }

    cardPackOpenerElement.addEventListener('click', globals.cardPackOpenerEventListener);
}

function startPassiveChallenge() {
    const cardPackOpenerElement = document.querySelector('.cardpack-opener');
    cardPackOpenerElement.innerHTML = 'Lay back and relax!';
    cardPackOpenerElement.disabled = true;

    const spinInterval = 1000 / save.repeatableUpgrades.passiveCardPackSpeed;

    globals.gameInterval = setInterval(() => {
        openCardPack();
    }, spinInterval);
}

function clearChallenges() {
    const cardPackOpenerElement = document.querySelector('.cardpack-opener');

    const challengeElements = document.querySelectorAll('.goal, .spelling-bee, .progress-bar');
    challengeElements.forEach((challenge) => challenge.remove());

    document.removeEventListener('keydown', globals.keyPressEventListener);
    document.removeEventListener('keyup', globals.keyReleaseEventListener);
    window.removeEventListener('resize', globals.resizeListener);
    cardPackOpenerElement.removeEventListener('click', globals.cardPackOpenerEventListener);
    cardPackOpenerElement.onclick = null;

    clearInterval(globals.gameInterval);
}
