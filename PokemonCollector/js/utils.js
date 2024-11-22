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

function calculateAptitudeScore(monsterData, skill) {
    const adjustedMonsterSkill = monsterData.skills[skill] * (monsterData.shiny ? shinySkillMultiplier : 1);

    if (adjustedMonsterSkill >= 300)
        return 6;
    if (adjustedMonsterSkill >= 200)
        return 5;
    if (adjustedMonsterSkill >= 150)
        return 4;
    if (adjustedMonsterSkill >= 120)
        return 3;
    if (adjustedMonsterSkill >= 80)
        return 2;
    if (adjustedMonsterSkill >= 40)
        return 1;
    return 0;
}