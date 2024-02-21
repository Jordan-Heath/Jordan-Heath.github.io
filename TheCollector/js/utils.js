//#region Random Number Generation
function GetRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomArrayValue(array) {
    return array[Math.floor(Math.random() * array.length)];
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

function GetRandomCollectable(collectables, rarityChance) {
    this.values = [];
    this.weights = [];

    let i = 0;
    collectables.forEach(collectable => {
        this.values.push(i);
        this.weights.push(rarityChance[collectable.rarity]); //convert the rarity
        i++;
    });

    return collectables[GetWeightedRandom(values, weights)];
}
//#endregion Random Number Generation

//#region Miscellanious
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

function checkTestingMode() {
    const url = window.location.href;
    const testingMode = url.includes('file');

    testingMode ? console.log('Running in testing mode') : console.log('Not running in testing mode');

    return testingMode;
}

function isSecureProtocol() {
    return window.location.protocol === 'https:';
}
//#endregion Miscellanious

//#region View Building
function CreateDiv(id, classname) {
    const result = document.createElement("div");
    result.id = id;
    result.className = classname;
    return result;
}

function AppendRowsToTable(rows, table) {
    for (const rowData of rows) {
        const tableRow = table.insertRow();
        for (const cellContent of rowData) {
            const cell = tableRow.insertCell();
            cell.innerHTML = cellContent;
        }
    }
}

function CreateCollectableTable(collectable) {
    const table = document.createElement("table");
    table.className = 'collectable-table';
    table.style.backgroundColor = `var(--rarity-${collectable.discovered ? collectable.rarity : 'empty'})`;

    const rows = [
        [collectable.discovered ? collectable.name : '?'], // collectableName
        [`<img src="images/${collectable.discovered ? `${collectable.location}/${collectable.id}` : 'unknown'}.png">`], // collectableImage
        [`${collectable.numberOwned} owned`], // collectableCount
        [collectable.discovered ? ConvertToCurrency(collectable.value) : '?'] // collectableValue
    ];

    AppendRowsToTable(rows, table);

    // Set a unique ID for the table
    table.id = `${collectable.id}TableElement`;

    return table;
}

function CreateComboTable(combo) {
    const table = document.createElement("table");
    table.className = 'combo-table';
    table.style.backgroundColor = `var(--rarity-${combo.discovered ? combo.rarity : 'empty'})`;

    const rows = [
        [combo.discovered ? combo.name : '?'], // comboName
        [`<img src="images/${combo.discovered ? `${combo.location}/${combo.id}` : 'unknown'}.png">`], // comboImage
        [combo.discovered ? combo.description : '?'] // comboDescription
    ];

    AppendRowsToTable(rows, table);

    // Set a unique ID for the table
    table.id = `${combo.id}TableElement`;

    return table;
}
function CreateShopItemTable(shopItem) {
    const table = document.createElement("table");
    table.className = 'shop-item-table';

    const rows = [
        [shopItem.name], // itemName
        [`<img src="images/shop/${shopItem.id}.png">`], // itemImage
        [shopItem.description], // itemDesc
        [shopItem.owned ? 'Owned' : `<button onclick="controller.Purchase('${shopItem.id}')">${ConvertToCurrency(shopItem.price)}</button>`] // purchaseButton
    ];

    AppendRowsToTable(rows, table);
    return table;
}

function CreateMapTable(location, enabled) {
    const table = document.createElement("table");
    table.className = 'map-table';

    const rows = [
        [CapitalizeFirstLetter(location)], // mapName
        [`<img src="images/environments/${location}.png">`], // mapImage
        [enabled ? `<button onclick="controller.Move('${location}')">GO</button>` : '<button disabled>GO</button>'] // moveButton
    ];

    AppendRowsToTable(rows, table);

    return table;
}
//#endregion View Building