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

function sortArray(array) {
    //generic version of sortCollection that sorts an array based on its own ID's
    array.sort((a, b) => {
        return a.ID - b.ID;
    });
}

function isNullOrUndefined(value) {
    return value === null || typeof value === 'undefined';
}