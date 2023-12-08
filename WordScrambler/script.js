COPYCHANCE = 0.8
DELETECHANCE = 0.99


function submit() {

    //console.log(document.getElementById("textInput").value)
    var input = document.getElementById("textInput").value

    input = input.split(' ');
    //console.log(input)

    input = reformat(input);
    //console.log(input)

    input = deleteConjuctions(input);
    //console.log(input)

    input = randomiseLength(input);
    //console.log(input)

    input = randomiseOrder(input);
    //console.log(input)

    document.getElementById("textOutput").value = input.join(' ');
}

function reformat(array) {
    for (i = 0; i < array.length; i++) {
        // remove symbols
        array[i] = array[i].replace(/[^\w\s]/gi, '');
        // make lower case
        array[i] = array[i].toLowerCase();
    }
    return array;
}

function deleteConjuctions(array) {
    var conjuctions = ["an", "the", "to", "when", "he", "up", "with", "a", "of", "but", "by", "his", "her", "she", "and"]

    // For each word in array
    for (i = 0; i < array.length; i++) {
        // For each word in conjuctions
        for (j = 0; j < conjuctions.length; j++) {
            // Test if a conjuction
            if (array[i] == conjuctions[j]) {
                // delete and iterate
                array.splice(i, 1);
                i--;
                j = conjuctions.length;
            }
        }
    }

    return array;
}

function randomiseLength(array) {
    for (i = 0; i < array.length; i++) {
        // Chance to Copy
        if (COPYCHANCE < Math.random()) array.push(array[i]);

        // Chance to Delete
        else if (DELETECHANCE < Math.random()) array.splice(i, 1);
    }

    return array;
}

function randomiseOrder(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}