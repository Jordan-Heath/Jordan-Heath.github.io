const RARITY_CHANCE = [128, 64, 32, 16, 8, 4, 2, 1]; //255
const IMPROVED_RARITY_CHANCE = [64, 32, 16, 8, 4, 2, 1, 1]; //128
// 0, 1, 2, 3, 4, 5, 6, 7
/* Poor, Common, Uncommon, Rare, Epic, Legendary, Artifact, Heirloom */

const LOCATIONS = ["city", "forest", "pier", "cave"];

const SEARCH_INTERVAL = 3000; //milliseconds
const IMPROVED_SEARCH_INTERVAL = 2500; //milliseconds

const SAVE_INTERVAL = 30000; //milliseconds

//#region City Data
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
const CITY_COLLECTABLE_JSON_URL = `[

]`
const CITY_COMBO_JSON_DATA = `[
    { "location": "city", "id": "stickstone", "name": "Sticks & Stones", "description": "[Twig + Pebble] Words cannot compare", "rarity": 0, "value": 0.40, "requirements": ["twig", "pebble"] },
    { "location": "city", "id": "garbage", "name": "Garbage Collector", "description": "[Plastic Bag + Bottle Cap + Can + Glass + Ciggerette Butt] Eww", "rarity": 1, "value": 0.80, "requirements": ["plasticbag", "bottlecap", "can", "glass", "cigbutt"] },
    { "location": "city", "id": "gambling", "name": "Gambling", "description": "[Strange Currency + Lotto Ticket] Too bad it's worthless", "rarity": 2, "value": 3, "requirements": ["dollar", "lottoticket"] },
    { "location": "city", "id": "allchips", "name": "Potato Reuinited", "description": "[Chip + Chips] Together at last", "rarity": 3, "value": 5, "requirements": ["chip", "chips"] },
    { "location": "city", "id": "litcig", "name": "Nicotine Addiction", "description": "[Full Ciggerette + Lighter] A cigerrete you may puff upon", "rarity": 4, "value": 30, "requirements": ["cig", "lighter"] },
    { "location": "city", "id": "music", "name": "Music", "description": "[CD + CD Player] A rapturous auditory experience", "rarity": 5, "value": 50, "requirements": ["cd", "cdplayer"] },
    { "location": "city", "id": "cinema", "name": "Cinema", "description": "[VCR + TV] Tape that impresses both the ears and the eyes", "rarity": 6, "value": 100, "requirements": ["vcr", "tv"] },
    { "location": "city", "id": "coins", "name": "Coin Collection", "description": "[Copper + Silver + Gold] A neat set of funny metals", "rarity": 7, "value": 1000, "requirements": ["coppercoin", "silvercoin", "goldcoin"] }
]`;

//#endregion City Data

//#region Forest Data
const FOREST_COLLECTABLE_JSON_DATA = `[
	{ "location": "forest", "id": "leaf", "name": "Leaf", "rarity": 0, "value": 0.05 },
	{ "location": "forest", "id": "stick", "name": "Stick", "rarity": 0, "value": 0.06 },
	{ "location": "forest", "id": "sap", "name": "Sap", "rarity": 0, "value": 0.05 },
	{ "location": "forest", "id": "cockroach", "name": "Cockroach", "rarity": 0, "value": 0.05 },
	{ "location": "forest", "id": "fly", "name": "Fly", "rarity": 0, "value": 0.05 },

	{ "location": "forest", "id": "dungbeetle", "name": "Dung Beetle", "rarity": 1, "value": 0.10 },
	{ "location": "forest", "id": "cicada", "name": "Cicada", "rarity": 1, "value": 0.20 },
	{ "location": "forest", "id": "ant", "name": "Ant", "rarity": 1, "value": 0.30 },
	{ "location": "forest", "id": "bee", "name": "Bee", "rarity": 1, "value": 0.40 },

	{ "location": "forest", "id": "moth", "name": "Moth", "rarity": 2, "value": 0.50 },
	{ "location": "forest", "id": "weevil", "name": "Weevil", "rarity": 2, "value": 0.60 },
	{ "location": "forest", "id": "aphid", "name": "Aphid", "rarity": 2, "value": 0.70 },
	{ "location": "forest", "id": "caterpillar", "name": "Caterpillar", "rarity": 2, "value": 0.80 },

	{ "location": "forest", "id": "butterfly", "name": "Butterfly", "rarity": 3, "value": 1 },
	{ "location": "forest", "id": "firefly", "name": "Fire fly", "rarity": 3, "value": 2 },
	{ "location": "forest", "id": "spider", "name": "Spider", "rarity": 3, "value": 3 },

	{ "location": "forest", "id": "stickbug", "name": "Stick Bug", "rarity": 4, "value": 5 },
	{ "location": "forest", "id": "mantis", "name": "Preying Mantis", "rarity": 4, "value": 6 },
	{ "location": "forest", "id": "dragonfly", "name": "Dragonfly", "rarity": 4, "value": 7 },

	{ "location": "forest", "id": "leafinsect", "name": "Leaf Insect", "rarity": 5, "value": 10 },
	{ "location": "forest", "id": "christmasbeetle", "name": "Christmas Beetle", "rarity": 5, "value": 20 },

	{ "location": "forest", "id": "chalice", "name": "Silver Chalice", "rarity": 6, "value": 50 },
	{ "location": "forest", "id": "ancientbox", "name": "Ancient Box", "rarity": 6, "value": 60 },

	{ "location": "forest", "id": "goldenidol", "name": "Golden Idol", "rarity": 7, "value": 100 }
]`;
const FOREST_COMBO_JSON_DATA = `[
    { "location": "forest", "id": "stickleaf", "name": "Stick and Leaf", "description": "[Stick + Leaf] Natures Fingers", "rarity": 0, "value": 0.50, "requirements": ["stick", "leaf"] },
    { "location": "forest", "id": "buzzboys", "name": "The Buzzy Boys", "description": "[Fly + Bee] One is yuck, one is scary", "rarity": 1, "value": 4, "requirements": ["fly", "bee"] },
    { "location": "forest", "id": "bestfriends", "name": "Best Friends", "description": "[Weevil + Aphid] Look at them", "rarity": 2, "value": 7, "requirements": ["weevil", "aphid"] },
    { "location": "forest", "id": "thesame", "name": "The Same", "description": "[Caterpillar + Butterfly] We've had a mix up, they're the same", "rarity": 3, "value": 10, "requirements": ["caterpillar", "butterfly"] },
    { "location": "forest", "id": "shamantis", "name": "Sha-Mantis", "description": "[Stick + Preying Mantis] He conjures storms and boils seas", "rarity": 4, "value": 60, "requirements": ["stick", "mantis"] },
    { "location": "forest", "id": "stickleaf2", "name": "Stick and Leaf?", "description": "[Stick Bug + Leaf Insect] They wriggle unsettlingly", "rarity": 5, "value": 100, "requirements": ["stickbug", "leafinsect"] },
    { "location": "forest", "id": "iridescence", "name": "Iridescence", "description": "[Dragonfly + Christmas Beetle] beautiful", "rarity": 6, "value": 200, "requirements": ["dragonfly", "christmasbeetle"] },
    { "location": "forest", "id": "goldenarc", "name": "Golden Arc", "description": "[Ancient Box + Golden Idol] My face feels tingley", "rarity": 7, "value": 1000, "requirements": ["ancientbox", "goldenidol"] }
]`;
//#endregion Forest Data

//#region Pier Data
const PIER_COLLECTABLE_JSON_DATA = `[
    { "location": "pier", "id": "boot", "name": "Leather Boot", "rarity": 0, "value": 0.10 },
    { "location": "pier", "id": "driftwood", "name": "Drift Wood", "rarity": 0, "value": 0.20 },
    { "location": "pier", "id": "tire", "name": "Tire", "rarity": 0, "value": 0.30 },
    { "location": "pier", "id": "seaglass", "name": "Sea Glass", "rarity": 0, "value": 0.40 },
    { "location": "pier", "id": "netting", "name": "Netting", "rarity": 0, "value": 0.50 },

    { "location": "pier", "id": "carp", "name": "Carp", "rarity": 1, "value": 0.60 },
    { "location": "pier", "id": "scallop", "name": "Scallop", "rarity": 1, "value": 0.70 },
    { "location": "pier", "id": "prawn", "name": "Prawn", "rarity": 1, "value": 0.80 },
    { "location": "pier", "id": "crab", "name": "Crab", "rarity": 1, "value": 0.90 },
    
    { "location": "pier", "id": "starfish", "name": "Starfish", "rarity": 2, "value": 1 },
    { "location": "pier", "id": "jellyfish", "name": "Jellyfish", "rarity": 2, "value": 2 },
	{ "location": "pier", "id": "mackerel", "name": "Mackerel", "rarity": 2, "value": 3 },
	{ "location": "pier", "id": "salmon", "name": "Salmon", "rarity": 2, "value": 4 },

    { "location": "pier", "id": "eel", "name": "Eel", "rarity": 3, "value": 5 },
	{ "location": "pier", "id": "snapper", "name": "Red Snapper", "rarity": 3, "value": 6 },
	{ "location": "pier", "id": "lobster", "name": "Lobster", "rarity": 3, "value": 7 },
    
	{ "location": "pier", "id": "turtle", "name": "Turtle", "rarity": 4, "value": 10 },
	{ "location": "pier", "id": "octopus", "name": "Octopus", "rarity": 4, "value": 20 },
	{ "location": "pier", "id": "tuna", "name": "Tuna", "rarity": 4, "value": 30 },

	{ "location": "pier", "id": "shark", "name": "Shark", "rarity": 5, "value": 50 },
	{ "location": "pier", "id": "pearl", "name": "Pearl", "rarity": 5, "value": 60 },

	{ "location": "pier", "id": "coelacanth", "name": "Coelacanth", "rarity": 6, "value": 100 },
	{ "location": "pier", "id": "nautilus", "name": "Nautilus", "rarity": 6, "value": 200 },
    
    { "location": "pier", "id": "treasure", "name": "Buried Treasure", "rarity": 7, "value": 500 }
]`;
const PIER_COMBO_JSON_DATA = `[
	{ "location": "pier", "id": "tireswing", "name": "Tire Swing", "description": "[Tire + Netting] The foundations for a good afternoon", "rarity": 0, "value": 5, "requirements": ["tire", "netting"] },
	{ "location": "pier", "id": "wallhanging", "name": "Wall Hanging", "description": "[Sea Glass + Scallop] Something to remember that trip to the pier", "rarity": 1, "value": 7, "requirements": ["seaglass", "scallop"] },
	{ "location": "pier", "id": "magicwand", "name": "Magic Wand", "description": "[Drift Wood + Starfish] This is how they are made", "rarity": 2, "value": 10, "requirements": ["driftwood", "starfish"] },
    { "location": "pier", "id": "shelltrio", "name": "Shell Trio", "description": "[Prawn + Crab + Lobster] Hardest achievement here", "rarity": 3, "value": 70, "requirements": ["prawn", "crab", "lobster"] },
    { "location": "pier", "id": "bento", "name": "Bento Box", "description": "[Tuna + Salmon + Red Snapper] Amazing combo served raw", "rarity": 4, "value": 300, "requirements": ["tuna", "salmon", "snapper"] },
    { "location": "pier", "id": "fishandchips", "name": "Fish and Chips", "description": "[Octopus + Shark] Calamari and flake", "rarity": 5, "value": 600, "requirements": ["octopus", "shark"] },
	{ "location": "pier", "id": "ancientfish", "name": "Ancient Fish", "description": "[Coelacanth + Nautilus] Probably should put these back...", "rarity": 6, "value": 2000, "requirements": ["coelacanth", "nautilus"] },
    { "location": "pier", "id": "plunder", "name": "Plunder", "description": "[Pearl + Treasure] The seas bounties are yours now", "rarity": 7, "value": 5000, "requirements": ["pearl", "treasure"] }
]`;
//#endregion Pier Data

//#region Cave Data
const CAVE_COLLECTABLE_JSON_DATA = `[
    { "location": "cave", "id": "refuse", "name": "Animal refuse", "rarity": 0, "value": 0.50 },
    { "location": "cave", "id": "rope", "name": "Rope", "rarity": 0, "value": 0.60 },
    { "location": "cave", "id": "lantern", "name": "Oil Lantern", "rarity": 0, "value": 0.70 },
    { "location": "cave", "id": "vase", "name": "Broken Vase", "rarity": 0, "value": 0.80 },
    { "location": "cave", "id": "coal", "name": "Coal", "rarity": 0, "value": 0.90 },

    { "location": "cave", "id": "agate", "name": "Agate", "rarity": 1, "value": 1 },
    { "location": "cave", "id": "obsidian", "name": "Obsidian", "rarity": 1, "value": 2 },
    { "location": "cave", "id": "tinore", "name": "Tin Ore", "rarity": 1, "value": 3 },
    { "location": "cave", "id": "ironore", "name": "Iron Ore", "rarity": 1, "value": 4 },

    { "location": "cave", "id": "tigerseye", "name": "Tigers-eye", "rarity": 2, "value": 5 },
    { "location": "cave", "id": "copperore", "name": "Copper Ore", "rarity": 2, "value": 6 },
    { "location": "cave", "id": "fluorite", "name": "Fluorite", "rarity": 2, "value": 7 },
    { "location": "cave", "id": "calcite", "name": "Calcite crystals", "rarity": 2, "value": 8 },

    { "location": "cave", "id": "opal", "name": "Opal", "rarity": 3, "value": 10 },
    { "location": "cave", "id": "cavemushroom", "name": "Cave Mushroom", "rarity": 3, "value": 20 },
    { "location": "cave", "id": "emerald", "name": "Emerald", "rarity": 3, "value": 30 },

    { "location": "cave", "id": "amethyst", "name": "Amethyst", "rarity": 4, "value": 50 },
    { "location": "cave", "id": "silverore", "name": "Silver Ore", "rarity": 4, "value": 60 },
    { "location": "cave", "id": "sapphire", "name": "Sapphire", "rarity": 4, "value": 70 },

    { "location": "cave", "id": "ruby", "name": "Ruby", "rarity": 5, "value": 100 },
    { "location": "cave", "id": "fossil", "name": "Fossil", "rarity": 5, "value": 200 },

    { "location": "cave", "id": "goldore", "name": "Gold Ore", "rarity": 6, "value": 500 },
    { "location": "cave", "id": "diamond", "name": "Diamond", "rarity": 6, "value": 600 },

    { "location": "cave", "id": "platinumore", "name": "Platinum Ore", "rarity": 7, "value": 1000 }
]`;
const CAVE_COMBO_JSON_DATA = `[
    { "location": "cave", "id": "patchedvase", "name": "Patched Vase", "description": "[Animal Refuse + Vase] I wouldn't drink from it", "rarity": 0, "value": 8, "requirements": ["refuse", "vase"] },
    { "location": "cave", "id": "furnace", "name": "Furnace", "description": "[Coal + Iron Ore] The industrial revolution has begun", "rarity": 1, "value": 40, "requirements": ["coal", "ironore"] },
    { "location": "cave", "id": "bronze", "name": "Bronze", "description": "[Tin + Copper] I learnt that in Runescape", "rarity": 2, "value": 60, "requirements": ["tinore", "copperore"] },
    { "location": "cave", "id": "mushroomfarm", "name": "Mushroom Farm", "description": "[Cave Mushroom + Refuse] An infinite number of the blighters", "rarity": 3, "value": 200, "requirements": ["cavemushroom", "refuse"] },
    { "location": "cave", "id": "crystalprism", "name": "Crystal Prism", "description": "[Amethyst + Lantern] A lantern that emits colorful light", "rarity": 4, "value": 5, "requirements": ["amethyst", "lantern"] },
    { "location": "cave", "id": "pokemongen3", "name": "Pokemon Gen 3", "description": "[Emerald + Ruby + Sapphire] Remember Torchic?", "rarity": 5, "value": 5, "requirements": ["emerald", "ruby", "sapphire"] },
    { "location": "cave", "id": "minecraft", "name": "Minecraft", "description": "[Coal + Iron + Diamond] On to the nether!", "rarity": 6, "value": 6000, "requirements": ["coal", "ironore", "diamond"] },
    { "location": "cave", "id": "banking", "name": "Fundamentals Of Banking", "description": "[Copper + Silver + Gold + Platinum] The foundations of our currency", "rarity": 7, "value": 10000, "requirements": ["copperore", "silverore", "goldore", "platinumore"] }
]`;
//#endregion Cave Data

const COLLECTABLES_JSON = {
	city: CITY_COLLECTABLE_JSON_DATA,
	forest: FOREST_COLLECTABLE_JSON_DATA,
	pier: PIER_COLLECTABLE_JSON_DATA,
	cave: CAVE_COLLECTABLE_JSON_DATA
}

const COMBOS_JSON = {
	city: CITY_COMBO_JSON_DATA,
	forest: FOREST_COMBO_JSON_DATA,
	pier: PIER_COMBO_JSON_DATA,
	cave: CAVE_COMBO_JSON_DATA
}