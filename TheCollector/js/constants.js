const RARITY_CHANCE = [128, 64, 32, 16, 8, 4, 2, 1];
// 0, 1, 2, 3, 4, 5, 6, 7
/* Poor, Common, Uncommon, Rare, Epic, Legendary, Artifact, Heirloom */

const LOCATIONS = ["city", "forest", "pier", "cave"];

const SEARCH_INTERVAL = 3000; //milliseconds
const SAVE_INTERVAL = 30000; //milliseconds

const COMMON_MESSAGE_INTERVAL = 1000;
const RARE_MESSAGE_INTERVAL = 2000;

const CITY_COLLECTABLE_JSON_DATA = `[
    { "location": "city", "id": "coppercoin", "name": "Copper Coin", "rarity": 0, "value": 0.01 },
    { "location": "city", "id": "twig", "name": "Twig", "rarity": 0, "value": 0.02 },
    { "location": "city", "id": "plasticbag", "name": "Plastic Bag", "rarity": 0, "value": 0.03 },
    { "location": "city", "id": "pebble", "name": "Pebble", "rarity": 0, "value": 0.04 },
    { "location": "city", "id": "bottlecap", "name": "Bottle Cap", "rarity": 0, "value": 0.05 },
    { "location": "city", "id": "can", "name": "Can", "rarity": 1, "value": 0.05 },
    { "location": "city", "id": "glass", "name": "Glass", "rarity": 1, "value": 0.06 },
    { "location": "city", "id": "gum", "name": "Gum", "rarity": 1, "value": 0.07 },
    { "location": "city", "id": "cigbutt", "name": "Ciggerette Butt", "rarity": 1, "value": 0.08 },
    { "location": "city", "id": "dollar", "name": "Strange Currency", "rarity": 2, "value": 0.10 },
    { "location": "city", "id": "chip", "name": "Chip", "rarity": 2, "value": 0.20 },
    { "location": "city", "id": "lottoticket", "name": "Lotto Ticket", "rarity": 2, "value": 0.30 },
    { "location": "city", "id": "loyaltycard", "name": "Loyalty Card", "rarity": 2, "value": 0.40 },
    { "location": "city", "id": "chips", "name": "Chips", "rarity": 3, "value": 0.50 },
    { "location": "city", "id": "cig", "name": "Full Ciggerette", "rarity": 3, "value": 0.60 },
    { "location": "city", "id": "cd", "name": "CD", "rarity": 3, "value": 0.70 },
    { "location": "city", "id": "silvercoin", "name": "Silver Coin", "rarity": 4, "value": 1 },
    { "location": "city", "id": "vcr", "name": "VCR", "rarity": 4, "value": 2 },
    { "location": "city", "id": "lighter", "name": "Lighter", "rarity": 4, "value": 3 },
    { "location": "city", "id": "cdplayer", "name": "CD Player", "rarity": 5, "value": 5 },
    { "location": "city", "id": "laptop", "name": "Old Laptop", "rarity": 5, "value": 6 },
    { "location": "city", "id": "tv", "name": "TV", "rarity": 6, "value": 10 },
    { "location": "city", "id": "bike", "name": "Bike", "rarity": 6, "value": 20 },
    { "location": "city", "id": "goldcoin", "name": "Gold Coin", "rarity": 7, "value": 100 }
  ]`;

const CITY_COMBO_JSON_DATA = `[
    { "location": "city", "id": "stickstone", "name": "Sticks & Stones", "description": "[Twig + Pebble]\\nWords cannot compare", "rarity": 0, "value": 0.40, "requirements": ["twig", "pebble"] },
    { "location": "city", "id": "garbage", "name": "Garbage Collector", "description": "[Plastic Bag + Bottle Cap + Can + Glass + Ciggerette Butt]\\nEww", "rarity": 1, "value": 0.80, "requirements": ["plasticbag", "bottlecap", "can", "glass", "cigbutt"] },
    { "location": "city", "id": "gambling", "name": "Gambling", "description": "[Strange Currency + Lotto Ticket]\\nToo bad it's worthless", "rarity": 2, "value": 3, "requirements": ["dollar", "lottoticket"] },
    { "location": "city", "id": "allchips", "name": "Potato Reuinited", "description": "[Chip + Chips]\\nTogether at last", "rarity": 3, "value": 5, "requirements": ["chip", "chips"] },
    { "location": "city", "id": "litcig", "name": "Nicotine Addiction", "description": "[Full Ciggerette + Lighter]\\nA cigerrete you may puff upon", "rarity": 4, "value": 30, "requirements": ["cig", "lighter"] },
    { "location": "city", "id": "music", "name": "Music", "description": "[CD + CD Player]\\nA rapturous auditory experience", "rarity": 5, "value": 50, "requirements": ["cd", "cdplayer"] },
    { "location": "city", "id": "cinema", "name": "Cinema", "description": "[VCR + TV]\\nTape that impresses both the ears and the eyes", "rarity": 6, "value": 100, "requirements": ["vcr", "tv"] },
    { "location": "city", "id": "coins", "name": "Coin Collection", "description": "[Copper + Silver + Gold]\\nA neat set of funny metals", "rarity": 7, "value": 1000, "requirements": ["coppercoin", "silvercoin", "goldcoin"] }
]`;
