function CreateDiv(id, classname) {
    const result = document.createElement("div");
    result.id = id;
    result.className = classname;
    return result;
}

function GetRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GetWeightedRandom(values, weights) {
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    const randomValue = Math.random() * totalWeight;
    let cumulativeWeight = 0;

    for (let i = 0; i < values.length; i++) {
        cumulativeWeight += weights[i];

        if (randomValue <= cumulativeWeight) {
            return values[i];
        }
    }
}

function Round(number) {
    return number.toFixed(2);
}

function CreateCollectableTable(collectable) {
    const table = document.createElement("table");
    table.className = 'collectableTable';
    table.style.backgroundColor = `var(--rarity-${collectable.discovered ? collectable.rarity : 'empty'})`;

    const collectableName = collectable.discovered ? `${collectable.name} (${ConvertToCurrency(collectable.value)})` : '?';
    const collectableImage = `<img src="images/${collectable.discovered ? `${collectable.location}/${collectable.id}` : 'unknown'}.png">`;
    const collectableCount = `${collectable.numberOwned} found`;

    table.createTHead().innerHTML = collectableName;
    table.insertRow(0).insertCell(0).innerHTML = collectableImage;
    table.createTFoot().innerHTML = collectableCount;

    return table;
}

function CreateComboTable(combo) {
    const table = document.createElement("table");
    table.className = 'comboTable';
    table.style.backgroundColor = `var(--rarity-${combo.discovered ? combo.rarity : 'empty'})`

    const comboName = combo.discovered ? combo.name : '?'
    const comboImage = `<img src="images/${combo.discovered ? `${combo.location}/${combo.id}` : 'unknown'}.png">`
    const comboDescription = combo.discovered ? combo.description : '?';

    table.createTHead().innerHTML = comboName;
    table.insertRow(0).insertCell(0).innerHTML = comboImage;
    table.createTFoot().innerHTML = comboDescription;

    return table;
}

function ConvertToCurrency(number) {
    // Splitting the number into integer and decimal parts
    const integerPart = Math.floor(number);

    // Converting integer part into gold, silver, and copper
    const platinum = Math.floor(integerPart / 10000);
    const gold = Math.floor((integerPart % 10000) / 100);
    const silver = integerPart % 100;
    const copper = Math.floor((number - integerPart).toFixed(2) * 100);

    return `${platinum > 0 ? `${platinum}🔵` : ''}${gold > 0 ? `${gold}🟡` : ''}${silver > 0 ? `${silver}⚪` : ''}${copper > 0 ? `${copper}🟤` : ''}`;
    //return `${platinum > 0 ? `${platinum} platinum, ` : ''}${gold > 0 ? `${gold} gold, ` : ''}${silver > 0 ? `${silver} silver, ` : ''}${copper > 0 ? `${copper} copper` : ''}`;
}