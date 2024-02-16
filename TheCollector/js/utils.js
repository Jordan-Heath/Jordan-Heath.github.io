function CreateDiv(id, classname) {
    const result = document.createElement("div");
    result.id = id;
    result.className = classname;
    return result;
}

/* randomNumber */
//#region randomNumber
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

function GetRandomCollectable(collectables) {
    this.values = [];
    this.weights = [];

    let i = 0;
    collectables.forEach(collectable => {
        this.values.push(i);
        this.weights.push(RARITY_CHANCE[collectable.rarity]); //convert the rarity
        i++;
    });

    return collectables[GetWeightedRandom(values, weights)];
}
//#endregion randomNumber

function Round(number) {
    return number.toFixed(2);
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

function capitalizeFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}


/* itemTable */
//#region itemTable
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

function CreateShopItemTable(shopItem) {
    const table = document.createElement("table");
    table.className = 'shopItemTable';

    const itemName = shopItem.name;
    const itemImage = `<img src="images/shop/${shopItem.id}.png">`
    const itemDesc = shopItem.description;
    const purchaseButton = shopItem.owned ? 'Owned' : `<button onclick="controller.Purchase('${shopItem.id}')">${ConvertToCurrency(shopItem.price)}</button>`;

    table.createTHead().innerHTML = itemName;
    table.insertRow(0).insertCell(0).innerHTML = itemImage;
    table.insertRow(1).insertCell(0).innerHTML = itemDesc;
    table.createTFoot().innerHTML = purchaseButton;

    return table;
}

function CreateMapTable(location, enabled) {
    const table = document.createElement("table");
    table.className = 'mapTable';

    const mapName = capitalizeFirstLetter(location);
    const mapImage = `<img src="images/environment/${location}.png"}>`
    const moveButton = enabled ? `<button onclick="controller.Move('${location}')">GO</button>` : '<button disabled>GO</button>';

    table.createTHead.innerHTML = mapName;
    table.insertRow(0).insertCell(0).innerHTML = mapImage;
    table.createTFoot().innerHTML = moveButton;

    return table;
}
//#endregion itemTable