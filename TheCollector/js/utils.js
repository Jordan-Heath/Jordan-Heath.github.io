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

/* Miscellenious */
//#region misc
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

function CapitalizeFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}
//#endregion misc

/* itemTable */
//#region itemTable
function CreateCollectableTable(collectable) {
    const table = document.createElement("table");
    table.className = 'collectable-table';
    table.style.backgroundColor = `var(--rarity-${collectable.discovered ? collectable.rarity : 'empty'})`;

    const collectableName = collectable.discovered ?  collectable.name : '?';
    const collectableValue = collectable.discovered ? ConvertToCurrency(collectable.value) : '?';
    const collectableImage = `<img src="images/${collectable.discovered ? `${collectable.location}/${collectable.id}` : 'unknown'}.png">`;
    const collectableCount = `${collectable.numberOwned} owned`;

    table.insertRow(0).innerHTML = `<th>${collectableName}</th>`;
    table.insertRow(1).innerHTML = `<td>${collectableImage}</td>`;
    table.insertRow(2).innerHTML = `<th>${collectableCount}</th>`;
    table.insertRow(3).innerHTML = `<th>${collectableValue}</th>`;

    return table;
}

function CreateComboTable(combo) {
    const table = document.createElement("table");
    table.className = 'combo-table';
    table.style.backgroundColor = `var(--rarity-${combo.discovered ? combo.rarity : 'empty'})`

    const comboName = combo.discovered ? combo.name : '?'
    const comboImage = `<img src="images/${combo.discovered ? `${combo.location}/${combo.id}` : 'unknown'}.png">`
    const comboDescription = combo.discovered ? combo.description : '?';

    table.insertRow(0).innerHTML = `<th>${comboName}</th>`;
    table.insertRow(1).innerHTML = `<td>${comboImage}</td>`;
    table.insertRow(2).innerHTML = `<th>${comboDescription}</th>`;

    return table;
}

function CreateShopItemTable(shopItem) {
    const table = document.createElement("table");
    table.className = 'shop-item-table';

    const itemName = shopItem.name;
    const itemImage = `<img src="images/shop/${shopItem.id}.png">`
    const itemDesc = shopItem.description;
    const purchaseButton = shopItem.owned ? 'Owned' : `<button onclick="controller.Purchase('${shopItem.id}')">${ConvertToCurrency(shopItem.price)}</button>`;

    table.insertRow(0).innerHTML = `<th>${itemName}</th>`;
    table.insertRow(1).innerHTML = `<td>${itemImage}</td>`;
    table.insertRow(2).innerHTML = `<td>${itemDesc}</td>`;
    table.insertRow(3).innerHTML = `<th>${purchaseButton}</th>`;

    return table;
}

function CreateMapTable(location, enabled) {
    const table = document.createElement("table");
    table.className = 'map-table';

    const mapName = CapitalizeFirstLetter(location);
    const mapImage = `<img src="images/environments/${location}.png"}>`
    const moveButton = enabled ? `<button onclick="controller.Move('${location}')">GO</button>` : '<button disabled>GO</button>';

    table.insertRow(0).innerHTML = `<th>${mapName}</th>`;
    table.insertRow(1).innerHTML = `<td>${mapImage}</td>`;
    table.insertRow(2).innerHTML = `<th>${moveButton}</th>`;

    return table;
}
//#endregion itemTable