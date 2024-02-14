function CreateDiv(id) {
    const result = document.createElement("div");
    result.id = id;
    return result;
}

function GetRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function WeightedRandom(values, weights) {
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
    table.style.backgroundColor = `var(--rarity-${collectable.discovered ? collectable.rarity : 'empty'})`

    const nameRow = document.createElement("tr");
    const nameElement = document.createElement("th");
    nameElement.innerText = collectable.discovered ? collectable.name : '?';
    nameElement.id = `${collectable.id}NameElement`
    nameRow.appendChild(nameElement);

    const imageRow = document.createElement("tr");
    const imageElement = document.createElement("td");
    imageElement.innerHTML = `<img src="images/${collectable.discovered ? collectable.type + '/' + collectable.id : 'unknown'}.png">`
    imageElement.id = `${collectable.id}ImageElement`
    imageRow.appendChild(imageElement);

    const numberRow = document.createElement("tr");
    const numberElement = document.createElement("th");
    numberElement.innerText = collectable.numberOwned;
    numberElement.id = `${collectable.id}NumberElement`
    numberRow.appendChild(numberElement)

    table.appendChild(nameRow);
    table.appendChild(imageRow);
    table.appendChild(numberRow);

    return table;
}


function convertToCurrency(number) {
    // Splitting the number into integer and decimal parts
    const integerPart = Math.floor(number);

    // Converting integer part into gold, silver, and copper
    const platinum = Math.floor(integerPart / 10000);
    const gold = Math.floor((integerPart % 10000) / 100);
    const silver = integerPart % 100;
    const copper = Math.floor((number - integerPart).toFixed(2) * 100);

    return `${platinum > 0 ? `${platinum} platinum, ` : ''}${gold > 0 ? `${gold} gold, ` : ''}${silver > 0 ? `${silver} silver, ` : ''}${copper > 0 ? `${copper} copper` : ''}`;
}