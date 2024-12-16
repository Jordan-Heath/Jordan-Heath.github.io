
const ITEMS = {
//#region meals
    meals: [
    //#region Base
        {
            name: "Milk",
            source: "Base",
            likedBy: [ ]
        },
        {
            name: "Cereal",
            source: "Base",
            likedBy: [ ]
        },
        {
            name: "Biryani",
            source: "Base",
            likedBy: [ "Spoiled", "Hypertchi" ]
        },
        {
            name: "Cactus Steak",
            source: "Base",
            likedBy: [ "Shy", "Unimarutchi" ]
        },
        {
            name: "Churrasco Meat Skewers",
            source: "Base",
            likedBy: [ "Energetic", "Yattatchi" ]
        },
        {
            name: "Cheese Fondue",
            source: "Base",
            likedBy: [ "Spoiled", "Neliatchi" ]
        },
        {
            name: "Clam Chowder",
            source: "Base",
            likedBy: [ "Spoiled", "Unimarutchi" ]
        },
        {
            name: "Couscous",
            source: "Base",
            likedBy: [ "Shy", "Bigsmile" ]
        },
        {
            name: "Cream Stew",
            source: "Base",
            likedBy: [ "Mysterious", "ShimaShimatchi" ]
        },
        {
            name: "Deep Dish Pizza",
            source: "Base",
            likedBy: [ "Energetic ", "Bigsmile", "Hotcaketchi", "Kuchipatchi" ]
        },
        {
            name: "Dim Sum",
            source: "Base",
            likedBy: [ "Mysterious", "Hotcaketchi", "Kuchipatchi" ]
        },
        {
            name: "Dobin Mushi",
            source: "Base",
            likedBy: [ "Docile", "Mametchi" ]
        },
        {
            name: "Falafels",
            source: "Base",
            likedBy: [ "Mysterious" ]
        },
        {
            name: "Galette",
            source: "Base",
            likedBy: [ "Spoiled", "Neliatchi" ]
        },
        {
            name: "Gyro Kebabs",
            source: "Base",
            likedBy: [ "Energetic", "Hypertchi" ]
        },
        {
            name: "Hamburger",
            source: "Base",
            likedBy: [ "Energetic", "Hypertchi", "Mystartchi" ]
        },
        {
            name: "Ham Sandwich",    
            source: "Base",
            likedBy: [ "Energetic", "Hypertchi", "Weeptchi" ]
        },
        {
            name: "Injera",
            source: "Base",
            likedBy: [ "Mysterious", "Memetchi", "Shimagurutchi", "Usahana Memetchi" ]
        },
        {
            name: "Lobster Sub",
            source: "Base",
            likedBy: [ "Energetic" ]
        },
        {
            name: "Loco Moco",
            source: "Base",
            likedBy: [ "Mysterious", "Shimagurutchi" ]
        },
        {
            name: "Margherita Pizza",
            source: "Base",
            likedBy: [ "Spoiled", "Unimarutchi" ]
        },
        {
            name: "Mahi Mahi",
            source: "Base",
            likedBy: [ "Docile", "Shykutchi" ]
        },
        {
            name: "Mimosa Salad",
            source: "Base",
            likedBy: [ "Docile", "Ichigotchi", "Neliatchi", "Shykutchi", "Tanghulutchi" ]
        },
        {
            name: "Mushroom Risotto",
            source: "Base",
            likedBy: [ "Mysterious", "Mametchi" ]
        },
        {
            name: "Oden Hot Pot",
            source: "Base",
            likedBy: [ "Mysterious", "Cornetchi", "Memetchi" ]
        },
        {
            name: "Pho Noodles",    
            source: "Base",
            likedBy: [ "Mysterious", "Unimarutchi" ]
        },
        {
            name: "Ramen",
            source: "Base",
            likedBy: [ "Mysterious", "Ichigotchi", "Neliatchi", "Picochutchi" ]
        },
        {
            name: "Roast Beef",
            source: "Base",
            likedBy: [ "Energetic", "Hypertchi", "Woopatchi" ]
        },
        {
            name: "Samgye-Tang Soup",
            source: "Base",
            likedBy: [ "Shy", "Bubbletchi" ]
        },
        {
            name: "Sausage",
            source: "Base",
            likedBy: [ "Energetic", "Sebiretchi" ]
        },
        {
            name: "Somen Noodles",
            source: "Base",
            likedBy: [ "Docile", "Bubbletchi" ]
        },
        {
            name: "Soup",
            source: "Base",
            likedBy: [ "Docile", "Ichigotchi", "Neliatchi", "Shykutchi" ]
        },
        {
            name: "Steak",
            source: "Base",
            likedBy: [ "Energetic", "Bubbletchi" ]
        },
        {
            name: "Steamed Eggs",
            source: "Base",
            likedBy: [ "Docile", "Kikitchi", "Yattatchi" ]
        },
        {
            name: "Sumo-Style Hot Pot",
            source: "Base",
            likedBy: [ "Mysterious", "Gozarutchi" ]
        },
        {
            name: "Sukiyaki Hot Pot",
            source: "Base",
            likedBy: [ "Docile", "Gozarutchi" ]
        },
        {
            name: "Sushi",
            source: "Base",
            likedBy: [ "Docile", "Gozarutchi" ]
        },        
        {
            name: "Tempura",
            source: "Base",
            likedBy: [ "Docile", "Mimitchi" ]
        },
        {
            name: "Tom Yum Soup",
            source: "Base",
            likedBy: [ "Shy", "Hypertchi", "Picochutchi" ]
        },
        {
            name: "Veggie Sticks",
            source: "Base",
            likedBy: [ "Spoiled", "Kikitchi", "Mimitchi", "Shykutchi" ]
        },
    //#endregion
    //#region Seasonal Download
        {
            name: "Pumpkin Gratin",
            source: "Seasonal Download",
            likedBy: [ "Shy", "Picochutchi", "Weeptchi" ]
        },
        {
            name: "Special Dinner",
            source: "Seasonal Download",
            likedBy: [ "Spoiled", "Milktchi" ]
        },
        {
            name: "New Year's Dish",
            source: "Seasonal Download",
            likedBy: [ "Docile", "Momotchi" ]
        },
        {
            name: "Cabbage Rolls",
            source: "Seasonal Download",
            likedBy: [ "Shy", "Mimitchi" ]
        },
        {
            name: "Caprese",
            source: "Seasonal Download",
            likedBy: [ "Shy", "Woopatchi" ]
        },
        {
            name: "Vegetable Salad",
            source: "Seasonal Download",
            likedBy: [ "Spoiled", "Neliatchi", "Shykutchi" ]
        },
    //#endregion
    //#region Tama Arena Prizes
        {
            name: "Croissant",
            source: "Tama Arena Prizes",
            likedBy: [ "Mysterious", "Docile" ]
        },
    //#endregion
    ],
//#endregion
//#region snacks
    snacks: [
    //#region Base
        {
            name: "Cookie",
            source: "Base",
            likedBy: [ ]
        },
        {
            name: "Jelly Beans",
            source: "Base",
            likedBy: [ ]
        },
        {
            name: "Acai Bowl",
            source: "Base",
            likedBy: [ "Docile", "Mametchi", "Memetchi" ]
        },
        {
            name: "Almondo Jelly / Annin Tofu",
            source: "Base",
            likedBy: [ "Shy", "Gozarutchi", "Momotchi" ]    
        },
        {
            name: "Apple Pie",
            source: "Base",
            likedBy: [ "Spoiled", "Kuchipatchi" ]
        },
        {
            name: "Avocado Flan / Avocado Pudding",
            source: "Base",
            likedBy: [ "Energetic", "Gozarutchi", "Woopatchi" ]
        },
        {
            name: "Bananas Foster",
            source: "Base",
            likedBy: [ "Energetic", "Kikitchi" ]
        },
        {
            name: "Buche de Noel / Yule Log",
            source: "Base",
            likedBy: [ "Spoiled", "Bubbletchi" ]
        },
        {
            name: "Canalé / Canelé",
            source: "Base",
            likedBy: [ "Mysterious", "ShimaShimatchi" ]
        },
        {
            name: "Cherry Pie",
            source: "Base",
            likedBy: [ "Energetic", "Hypertchi" ]
        },
        {
            name: "Chocolate",
            source: "Base",
            likedBy: [ "Energetic", "Kuchipatchi" ]
        },
        {
            name: "Cupcake",
            source: "Base",
            likedBy: [ "Energetic", "Sebiretchi" ]
        },
        {
            name: "Dates",
            source: "Base",
            likedBy: [ "Docile", "Kikitchi" ]
        },
        {
            name: "Donut",
            source: "Base",
            likedBy: [ "Shy" ]
        },
        {
            name: "Dreamy Cotton Candy",
            source: "Base",
            likedBy: [ "Spoiled", "Woopatchi" ]
        },
        {
            name: "Dondurma Ice Cream",
            source: "Base",
            likedBy: [ "Shy", "Hypertchi" ]
        },
        {
            name: "Flan",
            source: "Base",
            likedBy: [ "Docile", "ShimaShimatchi" ]
        },
        {
            name: "Fondant Chocolat / Molten Lava Cake",
            source: "Base",
            likedBy: [ "Docile", "Bubbletchi", "Picochutchi" ]
        },
        {
            name: "Green Tea",
            source: "Base",
            likedBy: [ "Shy", "Kuchipatchi", "Mametchi" ]
        },
        {
            name: "Hot Chocolate",
            source: "Base",
            likedBy: [ "Docile", "Hypertchi" ]
        },
        {
            name: "Ice Cream Cone",
            source: "Base",
            likedBy: [ "Energetic", "Shykutchi" ]
        },
        {
            name: "Kiwano Jelly",
            source: "Base",
            likedBy: [ "Energetic", "Woopatchi" ]
        },
        {
            name: "Kiwi",
            source: "Base",
            likedBy: [ "Energetic", "Kikitchi" ]
        },
        {
            name: "Knafeh",
            source: "Base",
            likedBy: [ "Shy", "Shimagurutchi" ]
        },
        {
            name: "Macarons",
            source: "Base",
            likedBy: [ "Spoiled", "Neliatchi" ]
        },
        {
            name: "Mango Shaved Ice",
            source: "Base",
            likedBy: [ "Energetic", "Shykutchi" ]
        },
        {
            name: "Marron Glace",
            source: "Base",
            likedBy: [ "Energetic", "Mametchi" ]
        },
        {
            name: "Matcha Glace",
            source: "Base",
            likedBy: [ "Docile", "Kuchipatchi" ]
        },
        {
            name: "Melon Softserve",
            source: "Base",
            likedBy: [ "Shy", "Neliatchi" ]
        },
        {
            name: "Nerikiri",
            source: "Base",
            likedBy: [ "Docile", "Gozarutchi" ]
        },
        {
            name: "Pancakes and Syrup",
            source: "Base",
            likedBy: [ "Spoiled", "Weeptchi" ]
        },
        {
            name: "Popcorn",
            source: "Base",
            likedBy: [ "Energetic", "Hypertchi" ]
        },
        {
            name: "Pumpkin Bavarois / Pumpkin Custard",
            source: "Base",
            likedBy: [ "Shy", "Mimitchi" ]
        },
        {
            name: "Red Bean Sweets / Mizu Yokan",
            source: "Base",
            likedBy: [ "Mysterious", "Gozarutchi", "Mametchi" ]
        },
        {
            name: "Strawberry Parfait / Berry Sundae",
            source: "Base",
            likedBy: [ "Spoiled", "Milktchi", "Pianitchi" ]
        },
        {
            name: "Sweet Potato",
            source: "Base",
            likedBy: [ "Mysterious", "Kuchipatchi" ]
        },
        {
            name: "Tama Dutch Baby Pancake",
            source: "Base",
            likedBy: [ "Spoiled", "Milktchi" ]
        },
        {
            name: "Taro Balls / Yuyuan",
            source: "Base",
            likedBy: [ "Shy", "Unimarutchi" ]
        },
        {
            name: "Tropical Parfait / Shaved Ice",
            source: "Base",
            likedBy: [ "Energetic", "Bigsmile" ]
        },
        {
            name: "Waffles",
            source: "Base",
            likedBy: [ "Spoiled", "Kuchipatchi", "Momotchi" ]
        },
    //#endregion
    //#region Seasonal Download
        {
            name: "Fall Tart",
            source: "Seasonal Download",
            likedBy: [ "Docile", "Sebiretchi" ]
        },
        {
            name: "Winter Tart",
            source: "Seasonal Download",
            likedBy: [ "Docile", "Hypertchi", "Unimarutchi" ]
        },
        {
            name: "Para Jelly",
            source: "Seasonal Download",
            likedBy: [ "Spoiled", "Neliatchi" ]
        },
        {
            name: "Spring Tart",
            source: "Seasonal Download",
            likedBy: [ "Docile", "Neliatchi" ]
        },
        {
            name: "Summer Tart",
            source: "Seasonal Download",
            likedBy: [ "Docile", "Shykutchi" ]
        },
        {
            name: "Handmade Cookies",
            source: "Seasonal Download",
            likedBy: [ "Spoiled", "Yattatchi" ]
        }
    //#endregion
    ],
//#endregion

//#region head accessories
    headAccessories: [ 
    //#region Base
        {
            name: "Afro",
            source: "Base",
            likedBy: [ "All" ]
        },
        {
            name: "Bedazzled Headband",
            source: "Base",
            likedBy: [ "Spoiled", "Hypertchi" ]
        },
        {
            name: "BFF Hat",
            source: "Base",
            likedBy: [ "All" ]
        },
        {
            name: "BFF Headband",
            source: "Base",
            likedBy: [ "All" ]
        },
        {
            name: "Fluffy Bow",
            source: "Base",
            likedBy: [ "Spoiled", "Milktchi", "Pianitchi" ]
        },
        {
            name: "Bubble Hat",
            source: "Base",
            likedBy: [ "Shy", "Bubbletchi", "Rhythristchi" ]
        },
        {
            name: "Bucket Hat",
            source: "Base",
            likedBy: [ "All" ]
        },
        {
            name: "Clamshell Hat",
            source: "Base",
            likedBy: [ "Docile", "Shykutchi" ]
        },
        {
            name: "Crown",
            source: "Base",
            likedBy: [ "Mysterious", "Kikitchi", "Mametchi" ]
        },
        {
            name: "Football Helmet",
            source: "Base",
            likedBy: [ "Energetic", "Bigsmile" ]
        },
        {
            name: "Fruit Headband",
            source: "Base",
            likedBy: [ "Spoiled", "Kikitchi" ]
        },
        {
            name: "Funny Face",
            source: "Base",
            likedBy: [ "All" ]
        },
        {
            name: "Gift Wrapping Bow",
            source: "Base",
            likedBy: [ "Spoiled", "Onimarutchi", "Unimarutchi" ]
        },
        {
            name: "Giraffe Headband",
            source: "Base",
            likedBy: [ "Shy", "Kikitchi" ]
        },
        {
            name: "Headphones",
            source: "Base",
            likedBy: [ "Shy", "Bubbletchi", "Hypertchi" ]
        },
        {
            name: "Kabuto Helmet",
            source: "Base",
            likedBy: [ "Energetic", "Gozarutchi" ]
        },
        {
            name: "Knit Hat",
            source: "Base",
            likedBy: [ "Docile", "Mimitchi" ]
        },
        {
            name: "Koala Hat",
            source: "Base",
            likedBy: [ "Shy", "Mimitchi", "Momotchi", "Pochacco Mimitchi" ]
        },
        {
            name: "Leaf Crown",
            source: "Base",
            likedBy: [ "Docile", "Meduupa", "Woopatchi" ]
        },
        {
            name: "Lion Hat",
            source: "Base",
            likedBy: [ "Energetic", "ShimaShimatchi" ]
        },
        {
            name: "Matching Funny Hats",
            source: "Base",
            likedBy: [ "All" ]
        },
        {
            name: "Mushroom Hat",
            source: "Base",
            likedBy: [ "Mysterious", "ShimaShimatchi" ]
        },
        {
            name: "Newspaper Hat",
            source: "Base",
            likedBy: [ "Docile", "Mametchi" ]
        },
        {
            name: "Night Cap",
            source: "Base",
            likedBy: [ "Mysterious", "Kuchipatchi" ]
        },
        {
            name: "Non La Hat",
            source: "Base",
            likedBy: [ "Docile", "Mimitchi" ]
        },
        {
            name: "Panda Hat",
            source: "Base",
            likedBy: [ "Spoiled", "Hypertchi" ]
        },
        {
            name: "Pink Bow",
            source: "Base",
            likedBy: [ "Spoiled", "Momotchi", "Onimarutchi", "Unimarutchi" ]
        },
        {
            name: "Pink Horns",
            source: "Base",
            likedBy: [ "Mysterious", "Milktchi", "Onimarutchi", "Unimarutchi" ]
        },
        {
            name: "Princess Wig",
            source: "Base",
            likedBy: [ "Spoiled", "Bubbletchi" ]
        },
        {
            name: "Rasta Cap",
            source: "Base",
            likedBy: [ "Mysterious", "ShimaShimatchi", "Woopatchi" ]
        },
        {
            name: "Robot Head",
            source: "Base",
            likedBy: [ "Mysterious", "Onimarutchi", "Unimarutchi" ]
        },
        {
            name: "Rococo Hat",
            source: "Base",
            likedBy: [ "Mysterious", "Memetchi", "Usahana Memetchi" ]
        },
        {
            name: "Rose Crown",
            source: "Base",
            likedBy: [ "Spoiled", "Momotchi" ]
        },
        {
            name: "Santa Hat / Red Hat",
            source: "Base",
            likedBy: [ "Docile", "Milktchi" ]
        },
        {
            name: "Sauna Hat",
            source: "Base",
            likedBy: [ "Energetic", "Kuchipatchi", "Patchi Purin", "Yattatchi" ]
        },
        {
            name: "Snow Tiara",
            source: "Base",
            likedBy: [ "Spoiled", "Memetchi", "Milktchi", "Momotchi", "Pianitchi" ]
        },
        {
            name: "Sombrero",
            source: "Base",
            likedBy: [ "Shy", "Bigsmile" ]
        },
        {
            name: "Space Helmet",
            source: "Base",
            likedBy: [ "Energetic", "Kuchipatchi", "Patchi Purin" ]
        },
        {
            name: "Tulip Hat",
            source: "Base",
            likedBy: [ "Shy", "Kuromi Melodytchi", "MyMelo Lovelitchi", "Neliatchi", "Yumemittie" ]
        },
        {
            name: "Turban",
            source: "Base",
            likedBy: [ "Docile", "Kikitchi" ]
        },
        {
            name: "Viking Helmet",
            source: "Base",
            likedBy: [ "Energetic", "Bigsmile" ]
        },
        {
            name: "Wheat Crown",
            source: "Base",
            likedBy: [ "Spoiled", "Memetchi", "Usahana Memetchi" ]
        },
    //#endregion
    //#region Seasonal Download
        {
            name: "Cone Hat",
            source: "Seasonal Download",
            likedBy: [ "Mysterious", "Bubbletchi", "Kuchipatchi" ]
        },
        {
            name: "Pumpkin Hat",
            source: "Seasonal Download",
            likedBy: [ "Docile", "ShimaShimatchi" ]
        },
        {
            name: "Cake Costume",
            source: "Seasonal Download",
            likedBy: [ "Spoiled" ]
        },
        {
            name: "Gold Poop Hat",
            source: "Seasonal Download",
            likedBy: [ "Mysterious" ]
        },
        {
            name: "Dragon Headband",
            source: "Seasonal Download",
            likedBy: [ "Spoiled" ]
        },
        {
            name: "Side Parted Wig",
            source: "Seasonal Download",
            likedBy: [ "Docile" ]
        },
        {
            name: "Strawberry Costume",
            source: "Seasonal Download",
            likedBy: [ "Spoiled" ]
        },
        {
            name: "Egg Hat / Shell Hat",
            source: "Seasonal Download",
            likedBy: [ "Shy", "Mame Kitty", "Mametchi", "Shimagurutchi" ]
        },
        {
            name: "Madam Wig",
            source: "Seasonal Download",
            likedBy: [ "Spoiled" ]
        },
        {
            name: "Heroine Wig",
            source: "Seasonal Download",
            likedBy: [ "Docile", "Energetic", "Shy" ]
        },
        {
            name: "Carousel Hat",
            source: "Seasonal Download",
            likedBy: [ "Spoiled" ]
        },
        {
            name: "Chef Hat",
            source: "Seasonal Download",
            likedBy: [ "Docile" ]
        },
        {
            name: "Ninja Hood",
            source: "Seasonal Download",
            likedBy: [ "Shy" ]
        },
        {
            name: "Clown Hat",
            source: "Seasonal Download",
            likedBy: [ "Mysterious" ]
        },
        {
            name: "Axe Headband",    
            source: "Seasonal Download",
            likedBy: [ ]
        },
        {
            name: "Dapper Wig",
            source: "Seasonal Download",
            likedBy: [ "Docile" ]
        },
        {
            name: "Safety Helmet",
            source: "Seasonal Download",
            likedBy: [ ]
        },
    //#endregion
    //#region Download Codes
        {
            name: "Hip-Hop Cap",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Pink Headband",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Purple Headband",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Tooth Headband",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Tama Tour UFO Hat",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Academic Cap",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Ribbon Badge Sun Hat",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Takoyaki Box",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Tigertchi Hat",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Geoffrey Hat",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Gal Wig",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Blue Beret",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Fruits Hat",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Happi²♡ Tiara",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Shimaenagatchi Hat",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "School Hat",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Chibi Manga Squirrel",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Capsule Head Band",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Taitchiyaki Gurumi",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Whispering Tama",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Conductor Hat",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Baseball Hat",
            source: "Download Codes",
            likedBy: [ "Energetic" ]
        },
        {
            name: "Pekora Wig",
            source: "Download Codes",
            likedBy: [ "Docile" ]
        },
        {
            name: "Noel Wig",
            source: "Download Codes",
            likedBy: [ "Shy" ]
        },
        {
            name: "Flare Wig",
            source: "Download Codes",
            likedBy: [ "Spoiled" ]
        },
        {
            name: "Marine Wig",
            source: "Download Codes",
            likedBy: [ "Energetic" ]
        },
        {
            name: "TMGC Hat",
            source: "Download Codes",
            likedBy: [ ]
        },
        {
            name: "Momotaro Wig",
            source: "Download Codes",
            likedBy: [ ]
        },
        {
            name: "Gift Ribbon",
            source: "Download Codes",
            likedBy: [ ]
        },
    //#endregion
    //#region Tama Arena Prizes
        {
            name: "Race Helmet",
            source: "Tama Arena Prizes",
            likedBy: [ "All" ]
        },
        {
            name: "Bunny Crown",
            source: "Tama Arena Prizes",
            likedBy: [ "All" ]
        },
        {
            name: "Tree Afro",
            source: "Tama Arena Prizes",
            likedBy: [ "All" ]
        },
        {
            name: "Nyan Headband",
            source: "Tama Arena Prizes",
            likedBy: [ "All" ]
        },
        {
            name: "Dragon Helmet",
            source: "Tama Arena Prizes",
            likedBy: [ "All" ]
        },
        {
            name: "Fencing Mask",
            source: "Tama Arena Prizes",
            likedBy: [ "Energetic" ]
        },
        {
            name: "Autumn Afro",
            source: "Tama Arena Prizes",
            likedBy: [ ]
        },
        {
            name: "Winter Tree Suit",
            source: "Tama Arena Prizes",
            likedBy: [ ]
        }
    //#endregion 
    ],
//#endregion
//#region face accessories
    faceAccessories: [ 
    //#region Base
        {
            name: "Bedazzled Glasses",
            source: "Base",
            likedBy: [ "Docile", "Kikitchi" ]
        },
        {
            name: "Cyber Sunglasses",
            source: "Base",
            likedBy: [ "Shy", "Picochutchi" ]
        },
        {
            name: "Eyemask",
            source: "Base",
            likedBy: [ "Docile", "Kuchipatchi", "ShimaShimatchi" ]
        },
        {
            name: "Fake Glasses",
            source: "Base",
            likedBy: [ "All" ]
        },
        {
            name: "Flower Earrings",
            source: "Base",
            likedBy: [ "Spoiled", "Bubbletchi", "Kuromi Melodytchi", "Neliatchi", "Sebiretchi", "Yumemittie" ]
        },
        {
            name: "Fluffy Earrings",
            source: "Base",
            likedBy: [ "Energetic", "Memetchi" ]
        },
        {
            name: "Frame",
            source: "Base",
            likedBy: [ "All" ]
        },
        {
            name: "Ghost Mask",
            source: "Base",
            likedBy: [ "Docile", "Weeptchi" ]
        },
        {
            name: "Jing Ju Mask",
            source: "Base",
            likedBy: [ "Docile", "Kuchipatchi" ]
        },
        {
            name: "King Mask",
            source: "Base",
            likedBy: [ "Docile", "Sebiretchi" ]
        },
        {
            name: "Leaf Mask",
            source: "Base",
            likedBy: [ "Shy", "Kuchipatchi" ]
        },
        {
            name: "Mask",
            source: "Base",
            likedBy: [ "Docile", "Mimitchi", "Shykutchi" ]
        },
        {
            name: "Mushroom Glasses",
            source: "Base",
            likedBy: [ "Docile", "Shimagurutchi" ]
        },
        {
            name: "Opal Earrings",
            source: "Base",
            likedBy: [ "Mysterious", "Cornetchi" ]
        },
        {
            name: "Rose Glasses",
            source: "Base",
            likedBy: [ "Docile", "Coffretchi", "Cornetchi", "Memetchi", "Usahana Memetchi" ]
        },
        {
            name: "Santa's Beard / White Beard",
            source: "Base",
            likedBy: [ "Energetic", "Shimagurutchi" ]
        },
        {
            name: "Shell Earrings",
            source: "Base",
            likedBy: [ "Spoiled", "Shykutchi" ]
        },
        {
            name: "Snorkel Set",
            source: "Base",
            likedBy: [ "Energetic", "Shykutchi" ]
        },
        {
            name: "Sport Sunglasses",
            source: "Base",
            likedBy: [ "Energetic", "Bubbletchi", "Kikitchi", "Sebiretchi" ]
        },
        {
            name: "Sweat",
            source: "Base",
            likedBy: [ "Energetic", "Gozarutchi", "Woopatchi" ]
        },
        {
            name: "Tulip Cheeks",
            source: "Base",
            likedBy: [ "Spoiled", "Kuromi Melodytchi", "Neliatchi", "Yumemittie" ]
        },
    //#endregion
    //#region Seasonal Download
        {
            name: "Intense Eyes",
            source: "Seasonal Download",
            likedBy: [ "Spoiled" ]
        },
        {
            name: "Dragon Moustache",
            source: "Seasonal Download",
            likedBy: [ "Docile" ]
        },
        {
            name: "Flash",
            source: "Seasonal Download",
            likedBy: [ ]
        },
        {
            name: "Heart Eyewear",
            source: "Seasonal Download",
            likedBy: [ "Spoiled" ]
        },
        {
            name: "Pastel Sunglasses",
            source: "Seasonal Download",
            likedBy: [ "Mysterious", "Sebiretchi" ]
        },
        {
            name: "Secret Mask",
            source: "Seasonal Download",
            likedBy: [ "Docile", "Energetic", "Shy" ]
        },
        {
            name: "Coaster Glasses",
            source: "Seasonal Download",
            likedBy: [ "Spoiled" ]
        },
        {
            name: "Chef Mustache",
            source: "Seasonal Download",
            likedBy: [ "Docile" ]
        },
        {
            name: "Scroll", 
            source: "Seasonal Download",
            likedBy: [ "Shy" ]
        },
        {   
            name: "Clown Makeup",
            source: "Seasonal Download",
            likedBy: [ "Mysterious" ]
        },
        {
            name: "Vampiric Eyewear",
            source: "Seasonal Download",
            likedBy: [ ]
        },
        {
            name: "Shrewd Glasses",
            source: "Seasonal Download",
            likedBy: [ "Docile" ]
        },
    //#endregion
    //#region Download Codes
        {
            name: "Lucha Libre Mask",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Masquerade Mask",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Academic Glasses",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Fiery Eyewear",
            source: "Download Codes",
            likedBy: [ "Energetic" ]
        }
    //#endregion
    ],
//#endregion
//#region body accessories
    bodyAccessories: [ 
    //#region Base
        {
            name: "Bagpipe",
            source: "Base",
            likedBy: [ "Docile", "Shykutchi" ]
        },
        {
            name: "BFF Bag",
            source: "Base",
            likedBy: [ "All" ]
        },
        {
            name: "BFF Balloons",
            source: "Base",
            likedBy: [ "All" ]
        },
        {
            name: "BFF Walking Stick",
            source: "Base",
            likedBy: [ "All" ]
        },
        {
            name: "Bubble Balloon",
            source: "Base",
            likedBy: [ "Docile", "Bubbletchi", "Rhythristchi" ]
        },
        {
            name: "Camel Toy",
            source: "Base",
            likedBy: [ "Spoiled", "Shimagurutchi" ]
        },
        {
            name: "Candy Cane / Christmas Walking Stick",
            source: "Base",
            likedBy: [ "Spoiled", "Onimarutchi", "Unimarutchi" ]
        },
        {
            name: "Egg Basket",
            source: "Base",
            likedBy: [  "Energetic", "Mimitchi", "Pochacco Mimitchi", "Woopatchi" ]
        },
        {
            name: "Elephant Toy",
            source: "Base",
            likedBy: [ "Spoiled", "Meduupa", "Woopatchi" ]
        },
        {
            name: "Fan",
            source: "Base",
            likedBy: [ "Shy", "Gozarutchi", "Ichigotchi", "Kuromi Melodytchi", "Melodytchi", "MyMelo Lovelitchi", "Neliatchi", "Tanghulutchi", "Yumemittie" ]
        },
        {
            name: "Fire Torch",
            source: "Base",
            likedBy: [ "Energetic", "Sebiretchi", "Yattatchi" ]
        },
        {
            name: "Football",
            source: "Base",
            likedBy: [ "Energetic", "Bigsmile", "Hypertchi" ]
        },
        {
            name: "Fruit Basket",
            source: "Base",
            likedBy: [ "Spoiled", "Kikitchi", "Momotchi" ]
        },
        {
            name: "Guitar",
            source: "Base",
            likedBy: [ "Shy", "Bigsmile", "Shimagurutchi", "Unimarutchi" ]
        },
        {
            name: "Jewel Wand",
            source: "Base",
            likedBy: [ "Mysterious", "Bigsmile" ]
        },
        {
            name: "Knit Scarf",
            source: "Base",
            likedBy: [ "Shy", "Picochutchi" ]
        },
        {
            name: "Knitted Snowman",
            source: "Base",
            likedBy: [ "Mysterious", "Kuchipatchi" ]
        },
        {
            name: "Leaf Poncho",
            source: "Base",
            likedBy: [ "Energetic", "Shimagurutchi" ]
        },
        {
            name: "Magic Lamp",
            source: "Base",
            likedBy: [ "Shy", "Kikitchi", "Kuchipatchi" ]
        },
        {
            name: "Milky Way",
            source: "Base",
            likedBy: [ "Mysterious", "Milktchi" ]
        },
        {
            name: "Mushroom Basket",
            source: "Base",
            likedBy: [ "Spoiled", "Kuchipatchi" ]
        },
        {
            name: "Nazar",
            source: "Base",
            likedBy: [ "Mysterious", "Picochutchi", "Weeptchi" ]
        },
        {
            name: "Newspaper Sword",
            source: "Base",
            likedBy: [ "Energetic", "Yattatchi" ]
        },
        {
            name: "Pillow",
            source: "Base",
            likedBy: [ "Mysterious", "Kuchipatchi", "Milktchi" ]
        },
        {
            name: "Poncho",
            source: "Base",
            likedBy: [ "Shy", "Kikitchi" ]    
        },
        {
            name: "Selfie Stick",
            source: "Base",
            likedBy: [ "Energetic", "Bubbletchi" ]
        },
        {
            name: "Single Rose",
            source: "Base",
            likedBy: [ "Energetic", "Kuromi Melodytchi", "Melodytchi", "MyMelo Lovelitchi", "Neliatchi", "Yumemittie" ]
        },
        {
            name: "Snow Wand",
            source: "Base",
            likedBy: [ "Docile", "Sebiretchi" ]
        },
        {
            name: "Teddy Bear",
            source: "Base",
            likedBy: [ "Spoiled", "Milktchi" ]
        },
        {
            name: "Tulip Bouquet",
            source: "Base",
            likedBy: [ "Energetic", "Kuromi Melodytchi", "Melodytchi", "Neliatchi", "Yumemittie" ]
        },
        {
            name: "Ukulele",
            source: "Base",
            likedBy: [ "Docile" ]
        },
        {
            name: "Umbrella",
            source: "Base",
            likedBy: [ "Docile", "Gozarutchi", "Mametchi" ]
        },
        {
            name: "Vuvuzela",
            source: "Base",
            likedBy: [ "Energetic", "Bigsmile" ]
        },
        {
            name: "Wheat Bouquet",
            source: "Base",
            likedBy: [ "Shy", "Weeptchi" ]
        },
        {
            name: "White Tama Toy",
            source: "Base",
            likedBy: [ "All" ]
        },
    //#endregion
    //#region Seasonal Download
        {
            name: "Pumpkin Basket / Pumpkin Bucket",
            source: "Seasonal Download",
            likedBy: [ "Shy", "Memetchi", "Mimitchi" ]
        },
        {
            name: "Toilet Balloon",
            source: "Seasonal Download",
            likedBy: [ "Docile" ]
        },
        {
            name: "Single Rose",
            source: "Seasonal Download",
            likedBy: [ "Energetic", "MyMelo Lovelitchi", "Melodytchi", "Neliatchi", "Yumemittie" ]
        },
        {
            name: "Holiday Cape",
            source: "Seasonal Download",
            likedBy: [ "Shy" ]
        },
        {
            name: "Dragon Cloud",
            source: "Seasonal Download",
            likedBy: [ "Shy" ]
        },
        {
            name: "Poop Balloon",
            source: "Seasonal Download",
            likedBy: [ "Mysterious" ]
        },
        {
            name: "Tama Reporters",
            source: "Seasonal Download",
            likedBy: [ ]
        },
        {
            name: "Lily Flowers",
            source: "Seasonal Download",
            likedBy: [ "Spoiled" ]
        },
        {
            name: "Engagement Ring",
            source: "Seasonal Download",
            likedBy: [ "Spoiled" ]
        },
        {
            name: "Muscle Body",
            source: "Seasonal Download",
            likedBy: [ "Docile", "Energetic", "Shy" ]
        },
        {
            name: "Inner Tube",
            source: "Seasonal Download",
            likedBy: [ "Spoiled", "ShimaShimatchi", "Shykutchi" ]
        },
        {
            name: "Torch",
            source: "Seasonal Download",
            likedBy: [ "Energetic" ]
        },
        {
            name: "Viking Pouch",
            source: "Seasonal Download",
            likedBy: [ "Spoiled" ]
        },
        {
            name: "Gold Medal",
            source: "Seasonal Download",
            likedBy: [ "Energetic" ]
        },
        {
            name: "Silver Medal",
            source: "Seasonal Download",
            likedBy: [ "Energetic" ]
        },
        {
            name: "Bronze Medal",
            source: "Seasonal Download",
            likedBy: [ "Energetic" ]
        },
        {
            name: "Cloche",
            source: "Seasonal Download",
            likedBy: [ "Docile" ]
        },
        {
            name: "Whirlwind",
            source: "Seasonal Download",
            likedBy: [ "Shy" ]
        },
        {
            name: "Juggling Balls",
            source: "Seasonal Download",
            likedBy: [ "Mysterious" ]
        },
        {
            name: "Biting Zombie",
            source: "Seasonal Download",
            likedBy: [ "Shy" ]
        },
        {
            name: "Zombie Tama Toy",
            source: "Seasonal Download",
            likedBy: [ "Shy" ]
        },
        {
            name: "Formal Necktie",
            source: "Seasonal Download",
            likedBy: [ "Docile" ]
        },
    //#endregion
    //#region Download Codes
        {
            name: "Standing Flags", //TODO: confirm part is correct (Might be a back accessory)
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Black Balloon",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Purple Balloon",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Black Belt",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "White Belt",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Travel Trunk",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Tama Tour Flag",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Academic Book",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Colorful Walking Stick",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Cheer Dolls",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Smile Box",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Donpen Stuffed Animal",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Ecousatchi Dolls",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Yamada Bouquet",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Yodobashi Camera",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Gotchi Kendama",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Hairclip Wig",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "TFM Radio Casette",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Kotatsu",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Panda Pochette",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Plush Doggies",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Flower Light Stick",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Calpis Water",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Tulip Name Tag",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Dream Locomotive",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Glove and Ball",
            source: "Download Codes",
            likedBy: [ "Energetic" ]
        },
        {
            name: "Japan #1 Flag",
            source: "Download Codes",
            likedBy: [ ]
        },
        {
            name: "Gift Box",
            source: "Download Codes",
            likedBy: [ ]
        },
    //#endregion
    //#region Tama Arena Prizes
        {
            name: "Race Trophy",
            source: "Tama Arena Prizes",
            likedBy: [ "All" ]
        },
        {
            name: "Tsukimi Dumplings",
            source: "Tama Arena Prizes",
            likedBy: [ "All" ]
        },
        {
            name: "Tree Prop",
            source: "Tama Arena Prizes",
            likedBy: [ "All" ]
        },
        {
            name: "Tamaverse Water",
            source: "Tama Arena Prizes",
            likedBy: [ "All" ]
        },
        {
            name: "Sick Bag",
            source: "Tama Arena Prizes",
            likedBy: [ ]
        },
        {
            name: "Tree Costume",
            source: "Tama Arena Prizes",
            likedBy: [ "All" ]
        },
        {
            name: "Candle Light",
            source: "Tama Arena Prizes",
            likedBy: [ "All" ]
        },
        {
            name: "Handheld Lantern",
            source: "Tama Arena Prizes",
            likedBy: [ "All" ]
        },
        {
            name: "Dango Prop",
            source: "Tama Arena Prizes",
            likedBy: [ "Mysterious" ]
        },
        {
            name: "Tissue",
            source: "Tama Arena Prizes",
            likedBy: [ ]
        },
        {
            name: "Flower Blanket",
            source: "Tama Arena Prizes",
            likedBy: [ "All" ]
        },
        {
            name: "Wedding Bouquet",
            source: "Tama Arena Prizes",
            likedBy: [ "All" ]
        },
        {
            name: "Toilet Paper",
            source: "Tama Arena Prizes",
            likedBy: [ ]
        },
        {
            name: "Surfboard",
            source: "Tama Arena Prizes",
            likedBy: [ "Energetic" ]
        },
        {
            name: "Fencing Sword",
            source: "Tama Arena Prizes",
            likedBy: [ "Energetic" ]
        },
        {
            name: "Goal Tama Plush",
            source: "Tama Arena Prizes",
            likedBy: [ ]
        },
        {
            name: "Grand Prix Trophy",
            source: "Tama Arena Prizes",
            likedBy: [ ]
        },
    //#endregion 
    ],
//#endregion
//#region back accessories
    backAccessories: [ 
    //#region Base
        {
            name: "Bat Wings",
            source: "Base",
            likedBy: [ "Spoiled", "Hypertchi", "Memetchi" ]
        },
        {
            name: "Big Bow",
            source: "Base",
            likedBy: [ "Spoiled" ]
        },
        {
            name: "Bubble Wreath",
            source: "Base",
            likedBy: [ "Energetic", "Bubbletchi" ]
        },
        {
            name: "Flower Wreath",
            source: "Base",
            likedBy: [ "Spoiled", "Neliatchi" ]
        },
        {
            name: "Jet Wings",
            source: "Base",
            likedBy: [ "Shy", "Onimarutchi", "Unimarutchi" ]
        },
        {
            name: "Ghost Friends",
            source: "Base",
            likedBy: [ "Docile", "Sebiretchi" ]
        },
        {
            name: "Leaf Wings",
            source: "Base",
            likedBy: [ "Mysterious", "Sebiretchi" ]
        },
        {
            name: "Mushroom Backpack",
            source: "Base",
            likedBy: [ "Mysterious", "Gozarutchi" ]
        },
        {
            name: "Newspaper Cloak",
            source: "Base",
            likedBy: [ "Energetic", "Gozarutchi", "Kikitchi", "Sebiretchi" ]
        },
        {
            name: "Samba Feathers",
            source: "Base",
            likedBy: [ "Energetic", "Hypertchi" ]
        },
        {
            name: "Scuba Tank",
            source: "Base",
            likedBy: [ "Energetic", "Shykutchi" ]
        },
        {
            name: "Shell Backpack",
            source: "Base",
            likedBy: [ "Mysterious", "Shykutchi" ]
        },
        {
            name: "Snowflake",
            source: "Base",
            likedBy: [ "Energetic", "Bigsmile" ]
        },
        {
            name: "Steam",
            source: "Base",
            likedBy: [ "Energetic", "Kuchipatchi", "Sebiretchi" ]
        },
        // ...
    //#endregion
    //#region Seasonal Download
        {
            name: "Present Bag",
            source: "Seasonal Download",
            likedBy: [ "Shy", "Weeptchi" ]
        },
        {
            name: "Good Luck Rake",
            source: "Seasonal Download",
            likedBy: [ ]
        },
        {
            name: "Dragon Aura",
            source: "Seasonal Download",
            likedBy: [ "Energetic" ]
        },
        {
            name: "Interview Panel",
            source: "Seasonal Download",
            likedBy: [ "Shy" ]
        },
        {
            name: "Flower Wreath",
            source: "Seasonal Download",
            likedBy: [ "Spoiled", "Flowerdite", "Kuromi Melodytchi", "MyMelo Lovelitchi", "Neliatchi", "Yumemittie" ]
        },
        {
            name: "Lily Back",
            source: "Seasonal Download",
            likedBy: [ "Spoiled" ]
        },
        {
            name: "Rose Back",
            source: "Seasonal Download",
            likedBy: [ "Spoiled" ]
        },
        {
            name: "Cape of Justice",
            source: "Seasonal Download",
            likedBy: [ "Docile", "Energetic", "Shy" ]
        },
        {
            name: "Ferris Wheel",
            source: "Seasonal Download",
            likedBy: [ "Spoiled" ]
        },
        {
            name: "Afterimages",
            source: "Seasonal Download",
            likedBy: [ "Shy" ]
        },
        {
            name: "Colorful Balloons",
            source: "Seasonal Download",
            likedBy: [ "Mysterious" ]
        },    
        {
            name: "Lurking Zombie",
            source: "Seasonal Download",
            likedBy: [ "Shy" ]
        },
    //#endregion
    //#region Download Codes
        {
            name: "Uotami Mark",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Fireworks Aura",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Tama Tour Rainbow",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Academic Aura",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "School Backpack",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Angel Balloons",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Monster Balloons",
            source: "Download Codes",
            likedBy: [ "All" ]
        },
        {
            name: "Passionate Fire",
            source: "Download Codes",
            likedBy: [ "Energetic" ]
        },
        {
            name: "Tama Friends Plush",
            source: "Download Codes",
            likedBy: [ ]
        },
        {
            name: "Gift Mountain",
            source: "Download Codes",
            likedBy: [ ]
        },
    //#endregion
    //#region Tama Arena Prizes
        {
            name: "Music Aura",
            source: "Tama Arena Prizes",            
            likedBy: [ "All" ]
        },
        {
            name: "Diamond Dust",
            source: "Tama Arena Prizes",            
            likedBy: [ "All" ]
        },
        {
            name: "Nyan Nyan Aura",
            source: "Tama Arena Prizes",            
            likedBy: [ "All" ]
        },
        {
            name: "Elegant Umbrella",
            source: "Tama Arena Prizes",            
            likedBy: [ "All" ]
        },
        {
            name: "Veil Tama",
            source: "Tama Arena Prizes",            
            likedBy: [ "All" ]
        },
        {
            name: "Summer Sunlight",
            source: "Tama Arena Prizes",            
            likedBy: [ "Energetic" ]
        },
        {
            name: "Laurel Aura",
            source: "Tama Arena Prizes",            
            likedBy: [ ]
        },
        {
            name: "UFO Balloon",
            source: "Tama Arena Prizes",            
            likedBy: [ "Mysterious" ]
        },
    //#endregion 
    ],
//#endregion
//#region items
    items: [ 
    //#region Base
        {
            name: "Cleaning Robot",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Rattle",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Building Blocks",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Ball",
            source: "Base",
            dislikedBy: [ "Shy" ]
        },
        {
            name: "Baseball Set",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Bike",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Blanket",
            source: "Base",
            dislikedBy: [ "Energetic" ]
        },
        {
            name: "Boomerang",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Bread Maker",
            source: "Base",
            dislikedBy: [ "Spoiled" ]
        },
        {
            name: "Castanet",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Coloring Book",
            source: "Base",
            dislikedBy: [ "Energetic" ]
        },
        {
            name: "Djembe Drum",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Dolphin Floatie",
            source: "Base",
            dislikedBy: [ "Docile" ]
        },
        {
            name: "Easter Egg",
            source: "Base",
            dislikedBy: [ "Spoiled" ]
        },
        {
            name: "Face Massager",
            source: "Base",
            dislikedBy: [ "Mysterious" ]
        },
        {
            name: "Flower Seeds",
            source: "Base",
            dislikedBy: [ "Energetic" ]
        },
        {
            name: "Fossils",
            source: "Base",
            dislikedBy: [ "Energetic" ]
        },
        {
            name: "Gong",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Kite",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Magic Carpet",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Magic Lamp",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Maracas",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Microphone",
            source: "Base",
            dislikedBy: [ "Shy" ]
        },
        {
            name: "Paraglider",
            source: "Base",
            dislikedBy: [ "Spoiled" ]
        },
        {
            name: "Planetarium",
            source: "Base",
            dislikedBy: [ "Energetic" ]
        },
        {
            name: "Pumpkin Seeds",
            source: "Base",
            dislikedBy: [ "Energetic" ]
        },
        {
            name: "Rickshaw / Tuk Tuk",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Rocking Horse",
            source: "Base",
            dislikedBy: [ "Shy" ]
        },
        {
            name: "Rugby Ball",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Safari Truck",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Samba Set",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Sauna Stove",
            source: "Base",
            dislikedBy: [ "Spoiled" ]
        },
        {
            name: "Science Tools",
            source: "Base",
            dislikedBy: [ "Spoiled" ]
        },
        {
            name: "Skateboard",
            source: "Base",
            dislikedBy: [ ]
        },
        {
            name: "Sled",
            source: "Base",
            dislikedBy: [ "Docile" ]
        },
        {
            name: "Stuffed Animal",
            source: "Base",
            dislikedBy: [ "Energetic" ]
        },
        {
            name: "Trampoline",
            source: "Base",
            dislikedBy: [ "Docile" ]
        },
        {
            name: "Wasshoi Carriage",
            source: "Base",
            dislikedBy: [ ]
        },
    //#endregion
    //#region Seasonal download
        {
            name: "Shaved Ice Maker",
            source: "Seasonal Download",
            dislikedBy: [ "Spoiled" ]
        },
        {
            name: "Paperback Book / Book",
            source: "Seasonal Download",
            dislikedBy: [ "Energetic" ]
        },
        {
            name: "Music Box",
            source: "Seasonal Download",
            dislikedBy: [ "Energetic" ]
        },
        {
            name: "Knitting Set",
            source: "Seasonal Download",
            dislikedBy: [ "Energetic" ]
        },
        {
            name: "Picnic Set",
            source: "Seasonal Download",
            dislikedBy: [ "Shy" ]
        },
        {
            name: "Fire Works",
            source: "Seasonal Download",
            dislikedBy: [ "Shy" ]
        },
        {
            name: "Sushi Conveyor Belt",
            source: "Seasonal Download",
            dislikedBy: [ ]
        },
        {
            name: "Jagariko Bits",
            source: "Seasonal Download",
            dislikedBy: [ ]
        },
        {
            name: "Aloe Yogurt",
            source: "Seasonal Download",
            dislikedBy: [ ]
        },
    //#endregion
    ],
//#endregion
}