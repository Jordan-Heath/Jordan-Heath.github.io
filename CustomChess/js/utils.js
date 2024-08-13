function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

function getWeightedRandom(values, weights) {
    // Calculate the total weight
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

    // Generate a random number between 0 and totalWeight
    let random = Math.random() * totalWeight;

    // Determine which piece corresponds to the random number
    for (let i = 0; i < values.length; i++) {
        random -= weights[i];
        if (random <= 0) {
            return values[i];
        }
    }
}