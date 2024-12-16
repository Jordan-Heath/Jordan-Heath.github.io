class DLCTama {
    constructor(object) {
        this.name = object.name; // ""
        this.sex = object.sex; // "Unknown", "Male", "Female", "Both"
        this.image = object.image; // "tama/Placeholder.webp"
        this.wikiLink = object.wikiLink; // "https://tamagotchi.fandom.com/wiki/..."

        this.itemName = object.itemName; // ""
        this.itemType = object.itemType; // "Snack", "Meal", "Item"
        this.itemImage = object.itemImage; // "item/Unknown.webp"

        this.evolutionRequirement = object.evolutionRequirement; // ""
        this.dlc = object.dlc; // ""
    }

    renderTableRows() {
        return `
            <tr>
                <th class="${this.sex}">${this.name}</th>
                <th colspan="2">${this.itemType}: ${this.itemName}</th>
                <th><a href="${this.wikiLink}" target="_blank" rel="noopener noreferrer">Wiki</a></th>
            </tr>
            <tr>
                <th><img src="assets/img/${this.image}" alt="${this.name}" /></th>
                <th><img src="assets/img/${this.itemImage}" alt="${this.itemName}" /></th>
                <td>${this.evolutionRequirement}</td>
                <td>
                <input 
                        id="${this.name}" 
                        value="${this.name}" 
                        type="checkbox" 
                        onchange="collectDLCTama('${this.name}')" 
                        ${SAVE.acquiredDLCTamas.includes(this.name) ? 'checked' : ''}/>
                    <label for="${this.name}">Collected?</label>
                </td>
            </tr>
        `
    }
}

// add Tama DLC Characters (AKA Ticket characters on the wiki)
// https://ticketshop.tamagotchi-official.com/
// https://tamagotchi.fandom.com/wiki/Tamagotchi_Uni/Character_list
// https://tamagotchi.fandom.com/wiki/Tamagotchi_Uni/Item_list

//TODO Fix Unknowns

const DLCs = [
    {
        name: "Very Berry Land",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Tamagotchi_Uni/Character_list#Very_Berry_Land"
    },
    {
        name: "LoveMelo Concert",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Tamagotchi_Uni/Character_list#LoveMelo_%E2%99%AA_Concert"
    },
    {
        name: "Tamamori Fashion Show",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Tamagotchi_Uni/Character_list#Tamamori_Fashion_Show_%E2%98%85"
    },
    {
        name: "Angel Festival",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Tamagotchi_Uni/Character_list#Angel_Festival"
    },
    {
        name: "Monster Carnival",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Tamagotchi_Uni/Character_list#Monster_Carnival"
    },
    {
        name: "Sanrio Characters",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Tamagotchi_Uni/Character_list#Sanrio_Characters"
    },
    {
        name: "Fairy Tale Library",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Tamagotchi_Uni/Character_list#Fairy_Tale_Library"
    },
    {
        name: "PokoPea Land",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Tamagotchi_Uni/Character_list#PokoPea_Land"
    }
];

const DLC_TAMA_DATA = [
//#region Very Berry Land (6)
    { // Ichigotchi (Snack: Strawberry Rice Cake)
        name: "Ichigotchi",
        sex: "Female",
        image: "dlctama/Ichigotchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Ichigotchi",
        itemName: "Strawberry Rice Cake",
        itemType: "Snack",
        itemImage: "item/StrawberryRiceCake.webp",
        evolutionRequirement: "Feed Strawberry Rice Cake snack the most",
        dlc: "Very Berry Land"
    },
    { // Ringotchi (Snack: Apple Cake)
        name: "Ringotchi",
        sex: "Female",
        image: "dlctama/Ringotchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Ringotchi",
        itemName: "Apple Cake",
        itemType: "Snack",
        itemImage: "item/AppleCake.webp",
        evolutionRequirement: "Feed Apple Cake snack the most",
        dlc: "Very Berry Land"
    },
    { // Patitchi (Snack: Patissier Cake)
        name: "Patitchi",
        sex: "Female",
        image: "dlctama/Patitchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Patitchi",
        itemName: "Patissier Cake",
        itemType: "Snack",
        itemImage: "item/PatissierCake.webp",
        evolutionRequirement: "Feed Patissier Cake snack the most",
        dlc: "Very Berry Land"
    },
    { // Cornetchi (Meal: Ice Cream Sandwich)
        name: "Cornetchi",
        sex: "Female",
        image: "dlctama/Cornetchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Cornetchi",
        itemName: "Ice Cream Sandwich",
        itemType: "Meal",
        itemImage: "item/IceCreamSandwich.webp",
        evolutionRequirement: "Feed Ice Cream Sandwich meal the most",
        dlc: "Very Berry Land"
    },
    { // Hotcaketchi (Item: Frying Pan)
        name: "Hotcaketchi",
        sex: "Male",
        image: "dlctama/Hotcaketchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Hotcaketchi",
        itemName: "Frying Pan",
        itemType: "Item",
        itemImage: "item/FryingPan.webp",
        evolutionRequirement: "Play with Frying Pan item the most",
        dlc: "Very Berry Land"
    },
    { // Tanghulutchi (Snack: Fruit Candy)
        name: "Tanghulutchi",
        sex: "Female",
        image: "dlctama/Tanghulutchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Tanghulutchi",
        itemName: "Fruit Candy",
        itemType: "Snack",
        itemImage: "item/FruitCandy.webp",
        evolutionRequirement: "Feed Fruit Candy snack the most",
        dlc: "Very Berry Land"
    },
//#endregion
//#region LoveMelo Concert (6)
    { // Lovelitchi (Snack: Lovely Frappe)
        name: "Lovelitchi",
        sex: "Female",
        image: "dlctama/Lovelitchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Lovelitchi",
        itemName: "Lovely Frappe",
        itemType: "Snack",
        itemImage: "item/LovelyFrappe.webp",
        evolutionRequirement: "Feed Lovely Frappe snack the most",
        dlc: "LoveMelo Concert"
    },
    { // Melodytchi (Snack: ♪ Sachertorte)
        name: "Melodytchi",
        sex: "Female",
        image: "dlctama/Melodytchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Melodytchi",
        itemName: "♪ Sachertorte",
        itemType: "Snack",
        itemImage: "item/Sachertorte.webp",
        evolutionRequirement: "Feed ♪ Sachertorte snack the most",
        dlc: "LoveMelo Concert"
    },
    { // Pianitchi (Item: Smart Piano Pad)
        name: "Pianitchi",
        sex: "Female",
        image: "dlctama/Pianitchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Pianitchi",
        itemName: "Smart Piano Pad",
        itemType: "Item",
        itemImage: "item/SmartPianoPad.webp",
        evolutionRequirement: "Play with Smart Piano Pad item the most",
        dlc: "LoveMelo Concert"
    },
    { // Checkeratchi (Item: DJ Booth)
        name: "Chekeratchi",
        sex: "Male",
        image: "dlctama/Chekeratchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Chekeratchi",
        itemName: "DJ Booth",
        itemType: "Item",
        itemImage: "item/DJBooth.webp",
        evolutionRequirement: "Play with DJ Booth item the most",
        dlc: "LoveMelo Concert"
    },
    { // Drumcrubitchi (Snack: Drum Popcorn)
        name: "Drumcrubitchi",
        sex: "Male",
        image: "dlctama/Drumcrubitchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Drumcrubitchi",
        itemName: "Drum Popcorn",
        itemType: "Snack",
        itemImage: "item/DrumPopcorn.webp",
        evolutionRequirement: "Feed Drum Popcorn snack the most",
        dlc: "LoveMelo Concert"
    },
    { // Rhythristchi (Meal: Rhythm Noodles)
        name: "Rhythristchi",
        sex: "Female",
        image: "dlctama/Rhythristchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Rhythristchi",
        itemName: "Rhythm Noodles",
        itemType: "Meal",
        itemImage: "item/RhythmNoodles.webp",
        evolutionRequirement: "Feed Rhythm Noodles meal the most",
        dlc: "LoveMelo Concert"
    },
//#endregion
//#region Tamamori Fashion Show (6)
    { // Coffretchi (Snack: Puff Macaron)
        name: "Coffretchi",
        sex: "Female",
        image: "dlctama/Coffretchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Coffretchi",
        itemName: "Puff Macaron",
        itemType: "Snack",
        itemImage: "item/PuffMacaron.webp",
        evolutionRequirement: "Feed Puff Macaron snack the most",
        dlc: "Tamamori Fashion Show"
    },
    { // Moriritchi (Meal: Tamamori Noodles)
        name: "Moriritchi",
        sex: "Female",
        image: "dlctama/Moriritchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Moriritchi",
        itemName: "Tamamori Noodles",
        itemType: "Meal",
        itemImage: "item/TamamoriNoodles.webp",
        evolutionRequirement: "Feed Tamamori Noodles meal the most",
        dlc: "Tamamori Fashion Show"
    },
    { // Mystartchi (Snack: Top Hat Éclair)
        name: "Mystartchi",
        sex: "Male",
        image: "dlctama/Mystartchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Mystartchi",
        itemName: "Top Hat Éclair",
        itemType: "Snack",
        itemImage: "item/TopHatEclair.webp",
        evolutionRequirement: "Feed Top Hat Éclair snack the most",
        dlc: "Tamamori Fashion Show"
    },
    { // Spacytchi (Meal: Spacy Curry)
        name: "Spacytchi",
        sex: "Male",
        image: "dlctama/Spacytchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Spacytchi",
        itemName: "Spacy Curry",
        itemType: "Meal",
        itemImage: "item/SpacyCurry.webp",
        evolutionRequirement: "Feed Spacy Curry meal the most",
        dlc: "Tamamori Fashion Show"
    },
    { // Dresstchi (Meal: Dress Salad)
        name: "Dresstchi",
        sex: "Female",
        image: "dlctama/Dresstchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Dresstchi",
        itemName: "Dress Salad",
        itemType: "Meal",
        itemImage: "item/DressSalad.webp",
        evolutionRequirement: "Feed Dress Salad meal the most",
        dlc: "Tamamori Fashion Show"
    },
    { // Boots Brothers (Snack: Boots-Glass Tea)
        name: "Boots Brothers",
        sex: "Male",
        image: "dlctama/Boots-Brothers.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Boots_Brothers",
        itemName: "Boots-Glass Tea",
        itemType: "Snack",
        itemImage: "item/BootsGlassTea.webp",
        evolutionRequirement: "Feed Boots-Glass Tea snack the most",
        dlc: "Tamamori Fashion Show"
    },
    //#endregion
//#region Angel Festival (6)
    { // Mame-El (Meal: Bell Brioche)
        name: "Mame-El",
        sex: "Male",
        image: "dlctama/Mame-El.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Mame-El",
        itemName: "Bell Brioche",
        itemType: "Meal",
        itemImage: "item/BellBrioche.webp",
        evolutionRequirement: "Feed Bell Brioche meal the most",
        dlc: "Angel Festival"
    },
    { // Pegasustchi (Snack: Pegasus Cotton Candy)
        name: "Pegasustchi",
        sex: "Male",
        image: "dlctama/Pegasustchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Pegasustchi",
        itemName: "Pegasus Cotton Candy",
        itemType: "Snack",
        itemImage: "item/PegasusCottonCandy.webp",
        evolutionRequirement: "Feed Pegasus Cotton Candy snack the most",
        dlc: "Angel Festival"
    },
    { // Flowerdite (Snack: Rain Candy)
        name: "Flowerdite",
        sex: "Female",
        image: "dlctama/Flowerdite.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Flowerdite",
        itemName: "Rain Candy",
        itemType: "Snack",
        itemImage: "item/RainCandy.webp",
        evolutionRequirement: "Feed Rain Candy snack the most",
        dlc: "Angel Festival"
    },
    { // Sebirecupid (Meal: Heart Omelette)
        name: "Sebirecupid",
        sex: "Female",
        image: "dlctama/Sebirecupid.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Sebirecupid",
        itemName: "Heart Omelette",
        itemType: "Meal",
        itemImage: "item/HeartOmelette.webp",
        evolutionRequirement: "Feed Heart Omelette meal the most",
        dlc: "Angel Festival"
    },
    { // Yumemittie (Meal: Ribbon Bread)
        name: "Yumemittie",
        sex: "Female",
        image: "dlctama/Yumemittie.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Yumemittie",
        itemName: "Ribbon Bread",
        itemType: "Meal",
        itemImage: "item/RibbonBread.webp",
        evolutionRequirement: "Feed Ribbon Bread meal the most",
        dlc: "Angel Festival"
    },
    { // Unimarucorn (Snack: Unicorn Parfait)
        name: "Unimarucorn",
        sex: "Both",
        image: "dlctama/Unimarucorn.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Unimarucorn",
        itemName: "Unicorn Parfait",
        itemType: "Snack",
        itemImage: "item/UnicornParfait.webp",
        evolutionRequirement: "Feed Unicorn Parfait snack the most",
        dlc: "Angel Festival"
    },
//#endregion
//#region Monster Carnival (6)
    { // Mamegon (Snack: Monster Sandwich)
        name: "Mamegon",
        sex: "Male",
        image: "dlctama/Mamegon.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Mamegon",
        itemName: "Monster Sandwich",
        itemType: "Snack",
        itemImage: "item/MonsterSandwich.webp",
        evolutionRequirement: "Feed Monster Sandwich snack the most",
        dlc: "Monster Carnival"
    },
    { // Slimypatchi (Snack: Slimy Jelly)
        name: "Slimypatchi",
        sex: "Male",
        image: "dlctama/Slimypatchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Slimypatchi",
        itemName: "Slimy Jelly",
        itemType: "Snack",
        itemImage: "item/SlimyJelly.webp",
        evolutionRequirement: "Feed Slimy Jelly snack the most",
        dlc: "Monster Carnival"
    },
    { // Meduupa (Snack: Snake Churros)
        name: "Meduupa",
        sex: "Female",
        image: "dlctama/Meduupa.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Meduupa",
        itemName: "Snake Churros",
        itemType: "Snack",
        itemImage: "item/SnakeChurros.webp",
        evolutionRequirement: "Feed Snake Churros snack the most",
        dlc: "Monster Carnival"
    },
    { // Gobpyon (Snack: Goblin Bun)
        name: "Gobpyon",
        sex: "Female",
        image: "dlctama/Gobpyon.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Gobpyon",
        itemName: "Goblin Bun",
        itemType: "Snack",
        itemImage: "item/GoblinBun.webp",
        evolutionRequirement: "Feed Goblin Bun snack the most",
        dlc: "Monster Carnival"
    },
    { // Giveuptchi (Snack: Eye Ball Jelly)
        name: "Giveuptchi",
        sex: "Female",
        image: "dlctama/Giveuptchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Giveuptchi",
        itemName: "Eye Ball Jelly",
        itemType: "Snack",
        itemImage: "item/EyeballJelly.webp",
        evolutionRequirement: "Feed Eye Ball Jelly snack the most",
        dlc: "Monster Carnival"
    },
    { // Onimarutchi (Snack: Ogre Rice Ball)
        name: "Onimarutchi",
        sex: "Both",
        image: "dlctama/Onimarutchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Onimarutchi",
        itemName: "Ogre Rice Ball",
        itemType: "Snack",
        itemImage: "item/OgreRiceBall.webp",
        evolutionRequirement: "Feed Ogre Rice Ball snack the most",
        dlc: "Monster Carnival"
    },
//#endregion
//#region Sanrio Characters (10)
    { // Mame Kitty (Item: Ribbon Box)
        name: "Mame Kitty",
        sex: "Female",
        image: "dlctama/Mame-Kitty.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Mame_Kitty",
        itemName: "Ribbon Box",
        itemType: "Item",
        itemImage: "item/RibbonBox.webp",
        evolutionRequirement: "Use Ribbon Box item the most",
        dlc: "Sanrio Characters"
    },
    { // Patchipurin (Item: Purin Bag)
        name: "Patchi Purin",
        sex: "Male",
        image: "dlctama/Patchipurin.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Patchipurin",
        itemName: "Purin Bag",
        itemType: "Item",
        itemImage: "item/PurinBag.webp",
        evolutionRequirement: "Use Purin Bag item the most",
        dlc: "Sanrio Characters"
    },
    { // Usahana Memetchi (Snack: Flower Sherbert)
        name: "Usahana Memetchi",
        sex: "Female",
        image: "dlctama/Usahana-Memetchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Usahana_Memetchi",
        itemName: "Flower Sherbert",
        itemType: "Snack",
        itemImage: "item/FlowerSherbert.webp",
        evolutionRequirement: "Feed Flower Sherbert snack the most",
        dlc: "Sanrio Characters"
    },
    { // Cinnamon Moriritchi (Item: Cinnamon Cup)
        name: "Cinnamon Moriritchi",
        sex: "Female",
        image: "dlctama/Cinnamon-Moriritchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Moriritchi#Cinnamon_Moriritchi",
        itemName: "Cinnamon Cup",
        itemType: "Item",
        itemImage: "item/CinnamonCup.webp",
        evolutionRequirement: "Play with Cinnamon Cup item the most",
        dlc: "Sanrio Characters"
    },
    { // Kuromi Melodytchi (Item: Kuromi Diary)
        name: "Kuromi Melodytchi",
        sex: "Female",
        image: "dlctama/Kuromi-Melodytchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Melodytchi#Kuromi_Melodytchi",
        itemName: "Kuromi Diary",
        itemType: "Item",
        itemImage: "item/KuromiDiary.webp",
        evolutionRequirement: "Use Kuromi Diary item the most",
        dlc: "Sanrio Characters"
    },
    { // Hangyodon Sebiretchi (Snack: Hangyodon Bun)
        name: "Hangyodon Sebiretchi",
        sex: "Female",
        image: "dlctama/Hangyodon-Sebiretchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Sebiretchi#Hangyodon_Sebiretchi",
        itemName: "Hangyodon Bun",
        itemType: "Snack",
        itemImage: "item/HangyodonBun.webp",
        evolutionRequirement: "Feed Hangyodon Bun snack the most",
        dlc: "Sanrio Characters"
    },
    { // My Melo Lovelitchi (Snack: Melody Strawberry)
        name: "MyMelo Lovelitchi",
        sex: "Female",
        image: "dlctama/MyMelo-Lovelitchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Lovelitchi#MyMelo_Lovelitchi",
        itemName: "Melody Strawberry",
        itemType: "Snack",
        itemImage: "item/MelodyStrawberry.webp",
        evolutionRequirement: "Feed Melody Strawberry snack the most",
        dlc: "Sanrio Characters"
    },
    { // Pochacco Mimitchi (Snack: Pochacco Rice Ball)
        name: "Pochacco Mimitchi",
        sex: "Female",
        image: "dlctama/Pochacco-Mimitchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Mimitchi#Pochacco_Mimitchi",
        itemName: "Pochacco Rice Ball",
        itemType: "Snack",
        itemImage: "item/PochaccoRiceBall.webp",
        evolutionRequirement: "Feed Pochacco Rice Ball snack the most",
        dlc: "Sanrio Characters"
    },
    { // Cogimyun Woopatchi (Snack: Cotton Cogimyun)
        name: "Cogimyun Woopatchi",
        sex: "Female",
        image: "dlctama/Cogimyun-Woopatchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Woopatchi#Cogimyun_Woopatchi",
        itemName: "Cotton Cogimyun",
        itemType: "Snack",
        itemImage: "item/CottonCogimyun.webp",
        evolutionRequirement: "Feed Cotton Cogimyun snack the most",
        dlc: "Sanrio Characters"
    },
    { // Little Unimarutchi (Snack: Star Pancake)
        name: "Little Unimarutchi",
        sex: "Both",
        image: "dlctama/Little-Unimarutchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Unimarutchi#Little_Unimarutchi",
        itemName: "Star Pancake",
        itemType: "Snack",
        itemImage: "item/StarPancake.webp",
        evolutionRequirement: "Feed Star Pancake snack the most",
        dlc: "Sanrio Characters"
    },
//#endregion
//#region Fairy Tale Library (6)
    { // Mamecchio (Snack: Whale Jelly)
        name: "Mamecchio",
        sex: "Male",
        image: "dlctama/Mamecchio.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Mamecchio",
        itemName: "Whale Jelly",
        itemType: "Snack",
        itemImage: "item/WhaleJelly.webp",
        evolutionRequirement: "Feed Whale Jelly snack the most",
        dlc: "Fairy Tale Library"
    },
    { // Piggypatchis (Item: Piggy Bank)
        name: "Piggypatchis",
        sex: "Male",
        image: "dlctama/Piggypatchis.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Piggypatchis",
        itemName: "Piggy Bank",
        itemType: "Item",
        itemImage: "item/PiggyBank.webp",
        evolutionRequirement: "Use Piggy Bank item the most",
        dlc: "Fairy Tale Library"
    },
    { // Kikigoku (Item: Flying Cloud)
        name: "Kikigoku",
        sex: "Male",
        image: "dlctama/Kikigoku.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Kikigoku",
        itemName: "Flying Cloud",
        itemType: "Item",
        itemImage: "item/FlyingCloud.webp",
        evolutionRequirement: "Use Flying Cloud item the most",
        dlc: "Fairy Tale Library"
    },
    { // Pyonderella (Snack: Pumpkin Pudding)
        name: "Pyonderella",
        sex: "Female",
        image: "dlctama/Pyonderella.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Pyonderella",
        itemName: "Pumpkin Pudding",
        itemType: "Snack",
        itemImage: "item/PumpkinPudding.webp",
        evolutionRequirement: "Feed Pumpkin Pudding snack the most",
        dlc: "Fairy Tale Library"
    },
    { // Milkyukihime (Snack: Caramelized Apple)
        name: "Milkyukihime",
        sex: "Female",
        image: "dlctama/Milkyukihime.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Milkyukihime",
        itemName: "Caramelized Apple",
        itemType: "Snack",
        itemImage: "item/CaramelizedApple.webp",
        evolutionRequirement: "Feed Caramelized Apple snack the most",
        dlc: "Fairy Tale Library"
    },
    { // Neliakaguya (Snack: Kaguya Sushi)
        name: "Neliakaguya",
        sex: "Female",
        image: "dlctama/Neliakaguya.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Neliakaguya",
        itemName: "Kaguya Sushi",
        itemType: "Snack",
        itemImage: "item/KaguyaSushi.webp",
        evolutionRequirement: "Feed Kaguya Sushi snack the most",
        dlc: "Fairy Tale Library"
    },
//#endregion
//#region PokoPea Land (7)
    { // Peanuts-kun (Snack: Peanuts-kun Jellies)
        name: "Peanuts-kun",
        sex: "Male",
        image: "dlctama/Peanuts-Kun.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Peanuts-kun",
        itemName: "Peanuts-kun Jellies",
        itemType: "Snack",
        itemImage: "item/PeanutskunJellies.webp",
        evolutionRequirement: "Feed Peanuts-kun Jellies snack the most",
        dlc: "PokoPea Land"
    },
    { // Chancho (Snack: Soda Tasters)
        name: "Chancho",
        sex: "Male",
        image: "dlctama/Chancho.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Chancho",
        itemName: "Soda Tasters",
        itemType: "Snack",
        itemImage: "item/SodaTasters.webp",
        evolutionRequirement: "Feed Soda Tasters snack the most",
        dlc: "PokoPea Land"
    },
    { // Peanutsoyaji (Item Peanuts-kun Sauna)
        name: "Peanutsoyaji",
        sex: "Male",
        image: "dlctama/Peanutsoyaji.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Peanutsoyaji",
        itemName: "Peanuts-kun Sauna",
        itemType: "Item",
        itemImage: "item/PeanutskunSauna.webp",
        evolutionRequirement: "Use Peanuts-kun Sauna item the most",
        dlc: "PokoPea Land"
    },
    { // Ponpoko (Unknown)
        name: "Ponpoko",
        sex: "Female",
        image: "dlctama/Ponpoko.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Ponpoko",
        itemName: "Unknown", //TODO
        itemType: "Unknown", //TODO
        itemImage: "item/Unknown.webp", //TODO
        evolutionRequirement: "Unknown", //TODO
        dlc: "PokoPea Land"
    },
    { // Gachikoi Ponpoko (Unknown)
        name: "Gachikoi Ponpoko",
        sex: "Female",
        image: "dlctama/Gachikoi-Ponpoko.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Gachikoi_Ponpoko",
        itemName: "Unknown", //TODO
        itemType: "Unknown", //TODO
        itemImage: "item/Unknown.webp", //TODO
        evolutionRequirement: "Unknown", //TODO
        dlc: "PokoPea Land"
    },
    { // Banana-hairtchi (Snack: Ramune)
        name: "Banana-hairtchi",
        sex: "Female",
        image: "dlctama/Banana-hairtchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Banana-hairtchi",
        itemName: "Ramune",
        itemType: "Snack",
        itemImage: "item/Ramune.webp",
        evolutionRequirement: "Feed Ramune snack the most",
        dlc: "PokoPea Land"
    },
    { // Tanuki Ninja (Unknown)
        name: "Tanuki Ninja",
        sex: "Unknown",
        image: "dlctama/Tanuki-Ninja.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Tanuki_Ninja",
        itemName: "Unknown", //TODO
        itemType: "Unknown", //TODO
        itemImage: "item/Unknown.webp", //TODO
        evolutionRequirement: "Unknown", //TODO
        dlc: "PokoPea Land"
    },
//#endregion
];

const DLC_TAMAS = DLC_TAMA_DATA.map(tama => new DLCTama(tama));