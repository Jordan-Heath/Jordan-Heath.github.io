const cardContainer = document.getElementById('cardContainer');
const fortuneContainer = document.getElementById('fortuneContainer');
const button = document.getElementById('button');

let cards = [];

function randomArrayValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function makeCardView(card) {
    const cardview = document.createElement('div');
    cardview.classList.add('card');

    const img = document.createElement('img');
    img.src = `assets/cards/${card.number}.jpg`;
    img.alt = `${card.card}`;

    const meaning = document.createElement('p');
    meaning.innerHTML = card.meaning;

    cardview.appendChild(img);
    cardview.appendChild(meaning);
    return cardview;
}

function drawCard() {

    if (cards.length === 0) {
        // Clear Draw Fortune Prompt
        cardContainer.innerHTML = '';
    }

    if (cards.length === 3) {
        // Reset Fortune
        cards = [];

        cardContainer.innerHTML = '<h1>Draw your Fortune</h1>';
        fortuneContainer.innerHTML = '';
        button.innerHTML = 'Draw Card';

        return;
    } 

    let newCard = randomArrayValue(tarotCards);
    cards.push(newCard);


    let cardView = makeCardView(newCard);
    cardContainer.appendChild(cardView);

    if (cards.length === 3) {
        button.innerHTML = 'Reset';
        printFortune();
    }
}

function printFortune() {
    const fortune = `${cards[0].string1} ${cards[1].string2} ${cards[2].string3}`;
    let index = 0;

    function printCharacter() {
        if (index >= fortune.length || cards.length !== 3) {
            return;
        }
        
        fortuneContainer.innerHTML += fortune[index];
        if (fortune[index] === '.') {
            fortuneContainer.innerHTML += '<br>';
        }
        index += 1;
        // Call printCharacter again after a delay
        setTimeout(printCharacter, 25); // Adjust the delay as needed
    }

    // Select the container where you want to display the fortune text
    const fortuneContainer = document.getElementById('fortuneContainer');

    printCharacter();
}
