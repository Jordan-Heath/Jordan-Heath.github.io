const kaiju = [
    { name: "Godzilla", img: "godzilla.jpg" }, 
    { name: "King Kong", img: "kingkong.jpg" },
    { name: "Mothra", img: "mothra.jpg" },
    { name: "Rodan", img: "rodan.jpg" },
    { name: "Gigan", img: "gigan.jpg" },
    { name: "Mechagodzilla", img: "mechagodzilla.jpg" },
    { name: "King Ghidorah", img: "kingghidorah.jpg" },
    { name: "Anguirus", img: "anguirus.jpg" },
    { name: "Gamera", img: "gamera.jpg" },
    { name: "Hedorah", img: "hedorah.jpg" },
    { name: "Ebirah", img: "ebirah.jpg" },
    { name: "Destoroyah", img: "destoroyah.jpg" },
    { name: "SpaceGodzilla", img: "spacegodzilla.jpg" },
    { name: "Biollante", img: "biollante.jpg" },
    { name: "Megaguirus", img: "megaguirus.jpg" },
    { name: "Baragon", img: "baragon.jpg" }
];

const bracketContainer = document.getElementById('bracket-container');
const nextRoundBtn = document.getElementById('nextRoundBtn');
nextRoundBtn.addEventListener('click', handleNextRound);

function generateBracket() {
    const round = document.createElement('div');
    round.classList.add('round');

    for (let i = 0; i < kaiju.length; i += 2) {
        const match = document.createElement('div');
        match.classList.add('match');

        createCard(kaiju[i], match);
        createCard(kaiju[i + 1], match);

        round.appendChild(match);
    }

    bracketContainer.appendChild(round);
}

function createCard(kaijuData, match) {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = kaijuData.img;
    img.alt = kaijuData.name;
    card.appendChild(img);

    const name = document.createElement('div');
    name.textContent = kaijuData.name;
    card.appendChild(name);

    card.addEventListener('click', () => {
        selectWinner(card, match);
    });

    match.appendChild(card);
}

function selectWinner(card, match) {
    // Deselect any other selected card in the match
    const cards = match.querySelectorAll('.card');
    cards.forEach(c => c.classList.remove('selected'));

    card.classList.add('selected'); 

    // Check if all matches in the round have winners
    const allWinnersSelected = checkRoundComplete(bracketContainer.lastChild);  
    nextRoundBtn.disabled = !allWinnersSelected;
}

function checkRoundComplete(round) {
    const matches = round.querySelectorAll('.match');
    for (const match of matches) {
        if (!match.querySelector('.selected')) {
            return false; // Not all winners selected
        }
    }
    return true; 
}

function handleNextRound() {
    freezeRound(bracketContainer.lastChild);
    const winners = collectWinners(bracketContainer.lastChild);

    // Special case for the final round
    if (winners.length === 1) {
        nextRoundBtn.textContent = "Declare Winner";
        nextRoundBtn.addEventListener('click', () => {
            freezeRound(bracketContainer.lastChild);
            nextRoundBtn.remove(); // Remove the button
        });
    } else {
        generateNewRound(winners);
    }
}

function freezeRound(round) {
    const cards = round.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.add('frozen');
        card.removeEventListener('click', selectWinner); 
    });
}

function collectWinners(round) {
    const winners = [];
    const selectedCards = round.querySelectorAll('.selected');
    selectedCards.forEach(card => {
        winners.push({
            name: card.querySelector('div').textContent,
            img: card.querySelector('img').src 
        });
    });
    return winners;
}

function generateNewRound(winners) {
    const newRound = document.createElement('div');
    newRound.classList.add('round');

    // Create matches with winners
    for (let i = 0; i < winners.length; i += 2) {
        const match = document.createElement('div');
        match.classList.add('match');

        createCard(winners[i], match);
        createCard(winners[i + 1], match);

        newRound.appendChild(match);
    }

    // Add the next round to the bracket container
    bracketContainer.appendChild(newRound);
}


generateBracket(); 