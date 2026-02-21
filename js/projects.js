const projects = [
  {
    "name": "Vue Picross",
    "link": "https://jordan-heath.github.io/VuePicross/",
    "thumbnail": "thumbnails/VuePicross.png",
    "screenshot": "screenshots/VuePicross.png",
    "description": "I wanted to experiment with web dev frameworks. This app is made in Vue. It's a picross game with minimal bells and whistles. Just wanted a basic polished Picross.",
    "features": [
      "It's Picross!",
      "Lift click and drag to fill, Right click to mark incorrect",
      "Animations and sounds"
    ],
    "credits": [],
    "featured": true,
    "category": "Game",
    "releaseyear": 2026,
    "rating": 5
  },
  {
    "name": "Jeopardy",
    "link": "https://jordan-heath.github.io/Jeopardy/",
    "thumbnail": "thumbnails/Jeopardy.png",
    "screenshot": "screenshots/Jeopardy.png",
    "description": "I made this back in 2024 and never got around to releasing it. I converted it from a mixed bag of questions to a basic C++ programming quiz.",
    "features": [
      "15 questions, spanning 5 categories",
      "Images to accompany questions",
      "Up to 6 players",
      "Name your players",
      "Everyone gets a turn to answer the questions"
    ],
    "credits": ["TODO"],
    "featured": false,
    "category": "Game",
    "releaseyear": 2026,
    "rating": 5
  },
  {
    "name": "Ants",
    "link": "https://jordan-heath.github.io/Ants/",
    "thumbnail": "thumbnails/Ants.png",
    "screenshot": "",
    "description": "I was looking to make a wallpaper and was inspired by the classic DVD screensaver. I wanted to add a little more flare so I chose to make it ants and have them pivot direction.",
    "features": [
      "Seemingly limitless ants",
      "They bounce off the walls",
      "They're clever enough to face where they are going I guess"
    ],
    "credits": ["TODO"],
    "featured": false,
    "category": "Utility",
    "releaseyear": 2026,
    "rating": 5
  },
  {
    "name": "CoughTTS",
    "link": "https://jordan-heath.github.io/CoughTTS/",
    "thumbnail": "thumbnails/CoughTTS.png",
    "screenshot": "",
    "description": "Started as a joke because I had a chest infection and couldn't speak. Experiementing with text-to-speech and implementing \"then\" events.",
    "features": [
      "8 different coughs",
      "Text-to-speech",
      "Imports TTS voices from your browser",
      "Dial to adjust cough frequency"
    ],
    "credits": ["Cough audio source: https://pixabay.com/sound-effects/cough-voice-12330/"],
    "featured": false,
    "category": "Utility",
    "releaseyear": 2026,
    "rating": 5
  },
  {
    "name": "Game Guide Checklist",
    "link": "https://jordan-heath.github.io/GameGuideChecklist/",
    "thumbnail": "thumbnails/GameGuideChecklist.png",
    "screenshot": "",
    "description": "Convert a game guide into a checklist to help you remember all the things you need to know. I was sick of paywalling of checklisting as a feature. I also wanted a darkmode second screen guide. I made this a couple years ago as a pyflask server, but converted it to a static webapp.",
    "features": [
      "Functional",
      "Dark mode",
      "Checklist system",
      "Light polish"
    ],
    "credits": [],
    "featured": false,
    "category": "Guide",
    "releaseyear": 2026,
    "rating": 5
  },
  {
    "name": "Cyber Omniglot",
    "link": "https://jordan-heath.github.io/CyberOmniglot/",
    "thumbnail": "thumbnails/CyberOmniglot.png",
    "screenshot": "screenshots/CyberOmniglot.png",
    "description": "Inspired by the \"Morrowind\" coversation system, and puzzle games like \"The Rise of the Golden Idol\". I wanted to make a refined yet classic looking conversation puzzle game. I settled on a limited number of characters, simple translation puzzle, as the immense writing task overtook the coding practice the game was supposed to be.",
    "features": [
      "Text to Speech",
      "Retro UI",
      "Simple translation puzzle",
      "5 unique characters",
      "80 lines of dialogue",
      "9 words to translate",
      "Dynamic word replacement"
    ],
    "credits": ["TODO"],
    "featured": true,
    "category": "Game",
    "releaseyear": 2025,
    "rating": 5
  },
  {
    "name": "Strategy Map Simulator",
    "link": "https://jordan-heath.github.io/StrategyMapSimulator/",
    "thumbnail": "thumbnails/StrategyMapSimulator.png",
    "screenshot": "screenshots/StrategyMapSimulator.png",
    "description": "Inspired by Paradox Interactive games like \"Victoria 3\" and \"Hearts of Iron IV\". I wanted to experiment with a complicated canvas based game. The UI was placeholder and then I lost interest.",
    "features": [
      "Procedurally generated landmass",
      "Map editor",
      "Kingdom AI",
      "Drawing tools",
      "Bad UI"
    ],
    "credits": [],
    "featured": true,
    "category": "Game",
    "releaseyear": 2025,
    "rating": 5
  },
  {
    "name": "Persona 3 Reload Guide",
    "link": "https://jordan-heath.github.io/Persona3ReloadGuide/",
    "thumbnail": "thumbnails/Persona3ReloadGuide.png",
    "screenshot": "",
    "description": "Fairly raw copy of the Persona 5 Royal Guide but for Persona 3 Reload.",
    "features": [
      "Mobile friendly",
      "Full day-by-day guide",
      "Integrated notepad",
      "Fusion calculator link",
      "Keyboard shortcuts",
      "Persona-themed design"
    ],
    "credits": ["TODO"],
    "featured": false,
    "category": "Guide",
    "releaseyear": 2025,
    "rating": 5
  },
  {
    "name": "Tamagotchi Uni Guide",
    "link": "https://jordan-heath.github.io/TamagotchiUniGuide/",
    "thumbnail": "thumbnails/TamagotchiUniGuide.png",
    "screenshot": "",
    "description": "A webapp I put together for my partner to help them keep track of their Tamagotchi Uni. It was important that it had a nice mobile-friendly design, kept track of progress in the game, and informed the user in a very accessible way.",
    "features": [
      "Mobile friendly",
      "Local storage saves",
      "Completion stats",
      "Evolution chart",
      "DLC support",
      "Care tracking"
    ],
    "credits": ["TODO"],
    "featured": false,
    "category": "Guide",
    "releaseyear": 2024,
    "rating": 5
  },
  {
    "name": "Qualification Academy",
    "link": "https://jordan-heath.github.io/QualificationAcademy/",
    "thumbnail": "thumbnails/QualificationAcademy.png",
    "screenshot": "",
    "description": "A game where you complete a series of questions to receive a certificate. I wanted it to be elegant and fun.",
    "features": [
      "10+ unlockable qualifications",
      "Custom courses",
      "Elegant UI",
      "Sound effects",
      "Dark mode",
      "JSON import/export"
    ],
    "credits": ["TODO"],
    "featured": false,
    "category": "Game",
    "releaseyear": 2024,
    "rating": 5
  },
  {
    "name": "Pokemon Collector",
    "link": "https://jordan-heath.github.io/PokemonCollector/",
    "thumbnail": "thumbnails/PokemonCollector.png",
    "screenshot": "",
    "description": "I've wanted to make a card collection game for a while, but given I could not do enough good quality art to do it myself, i decided last minute to make it a fan game.",
    "features": [
      "6 card packs",
      "151 Pokemon + 151 shiny variants",
      "Upgrades and jobs",
      "Cheat mode",
      "Optimized rendering"
    ],
    "credits": [
      "Pokemon is a product of GameFreak",
      "Assets Sourced from https://github.com/waydelyle/pokemon-assets"
    ],
    "featured": false,
    "category": "Game",
    "releaseyear": 2024,
    "rating": 5
  },
  {
    "name": "Custom Chess",
    "link": "https://jordan-heath.github.io/CustomChess/",
    "thumbnail": "thumbnails/CustomChess.png",
    "screenshot": "screenshots/CustomChess.png",
    "description": "A chess variant inspired by Balatro featuring progression and AI opponents.",
    "features": [
      "Save system",
      "Working chess pieces",
      "Reckless AI",
      "Streak rewards",
      "Carry-over progression"
    ],
    "credits": [
      "Chess Piece Art: https://opengameart.org/content/8x13-chess-pieces",
      "Skull Image: https://opengameart.org/content/pixel-art-skull",
      "Chess Piece Sounds: https://pixabay.com/sound-effects/chess-pieces-60890/"
    ],
    "featured": true,
    "category": "Game",
    "releaseyear": 2024,
    "rating": 5
  },
  {
    "name": "Persona 5 Royal Guide",
    "link": "https://jordan-heath.github.io/Persona5RoyalGuide/",
    "thumbnail": "thumbnails/Persona5RoyalGuide.png",
    "screenshot": "",
    "description": "I wanted an elegant guide styled after the game to occupy my second screen while playing. Other guides would require you to keep track of the day you were up to by scrolling through difficult to read whole pages of text, require you to switch tabs for negotiations and part time quizes.",
    "features": [
      "300-day guide",
      "Confidant and negotiation guides",
      "Fusion embed",
      "Date saving",
      "Keyboard shortcuts",
      "Mobile friendly"
    ],
    "credits": [
      "Guides:",
      "Walkthrough by aqiu384.github.io: https://aqiu384.github.io/p5r-walkthrough/ace-walkthrough",
      "Flower Guide by samurai-gamers: https://samurai-gamers.com/persona-5/flower-shop-part-time-guide/",
      "Convenience Store Guide by samurai-gamers: https://samurai-gamers.com/persona-5/triple-seven-convenience-store-part-time-job-guide/",
      "Confidant Guide by aqiu384.github.io: https://aqiu384.github.io/p5r-walkthrough/confidants",
      "Negotiation Guide by joyceychen.com: https://joyceychen.com/persona5-negotiation/royal",
      "Assets:",
      "Fusion Calculator by p5rfusioncalculator.com: https://p5rfusioncalculator.com/#/list)",
      "Title Font: https://www.reddit.com/r/Persona5/comments/kqickc/persona_5_menu_font_prototype/",
      "Background source: https://steamcommunity.com/sharedfiles/filedetails/?id=2948225096&insideModal=0",
      "Knife Sound source: https://www.sounds-resource.com/playstation_3/persona5/sound/30366/",
      "Knife Image source: https://www.spriters-resource.com/playstation_3/persona5/sheet/92802/",
      "Web Icon: https://tcrf.net/Persona_5_Royal/Unused_Graphics"
    ],
    "featured": false,
    "category": "Guide",
    "releaseyear": 2024,
    "rating": 5
  },
  {
    "name": "The Collector",
    "link": "https://jordan-heath.github.io/TheCollector/",
    "thumbnail": "thumbnails/TheCollector.png",
    "screenshot": "",
    "description": "An idle collection game featuring item combos, zones, and upgrade systems.",
    "features": [
      "96 items",
      "32 combos",
      "Upgrade store",
      "4 zones",
      "Save system"
    ],
    "credits": [],
    "featured": false,
    "category": "Game",
    "releaseyear": 2024,
    "rating": 5
  },
  {
    "name": "Meal Planner",
    "link": "https://jordan-heath.github.io/MealPlanner/",
    "thumbnail": "thumbnails/MealPlanner.png",
    "screenshot": "",
    "description": "A shitty meal planning tool that generates plans, recipes, and shopping lists.",
    "features": [
      "33 meals",
      "Auto meal plan generation",
      "Shopping list",
      "Recipe maker",
      "Recipe browser"
    ],
    "credits": [
      "Recipes: https://www.themealdb.com/api.php"
    ],
    "featured": false,
    "category": "Utility",
    "releaseyear": 2024,
    "rating": 5
  },
  {
    "name": "Idle Landlord",
    "link": "https://jordan-heath.github.io/IdleLandlord/",
    "thumbnail": "thumbnails/IdleLandlord.png",
    "screenshot": "",
    "description": "A landlord-themed clicker game focused on passive income and progression.",
    "features": [
      "Job promotions",
      "7 properties",
      "Property upgrades",
      "Auto-save",
      "JSON import/export"
    ],
    "credits": [],
    "featured": false,
    "category": "Game",
    "releaseyear": 2024,
    "rating": 5
  },
  {
    "name": "Story Teller",
    "link": "https://jordan-heath.github.io/StoryTeller/",
    "thumbnail": "thumbnails/StoryTeller.png",
    "screenshot": "",
    "description": "A Madlibs-style storytelling app with music and customizable stories.",
    "features": [
      "16 stories",
      "Dynamic text reveal",
      "7 music tracks",
      "Adjustable text speed",
      "Custom story import"
    ],
    "credits": [
      "Music sourced from https://www.fesliyanstudios.com/",
      "Fantasy: Rolling Hills Of Ireland by Alex Zachariou",
      "Science Fiction: Final Descent by David Robson",
      "Mystery: Shady Business by David Renda",
      "Horror: Ghost stories by Steve Oxen",
      "Western: Prairie Evening by Steve Oxen",
      "Non-Fiction: Retro News At Nine by Steve Oxen",
      "Other: Mediterranean Underscore by Steve Oxen"
    ],
    "featured": false,
    "category": "Game",
    "releaseyear": 2024,
    "rating": 5
  },
  {
    "name": "Manticore Generator",
    "link": "https://jordan-heath.github.io/ManticoreGenerator/",
    "thumbnail": "thumbnails/ManticoreGenerator.png",
    "screenshot": "",
    "description": "A friend of mine saw the character generator and was working on creating some manticores for a personal project. They asked if I could make something similar to assist them in the process.",
    "features": [
      "461 animals",
      "Tail/wing probability settings",
      "Lockable body parts",
      "Image search integration"
    ],
    "credits": [
      "Original Concept: Brin",
      "Original Animal List: https://gist.github.com/atduskgreg/3cf8ef48cb0d29cf151bedad81553a54"
    ],
    "featured": false,
    "category": "Utility",
    "releaseyear": 2023,
    "rating": 5
  },
  {
    "name": "Character Generator",
    "link": "https://jordan-heath.github.io/CharacterGenerator/",
    "thumbnail": "thumbnails/CharacterGenerator.png",
    "screenshot": "",
    "description": "A whimsical character generator with names, demographics, and stats.",
    "features": [
      "Syllable-based names",
      "Demographic details",
      "Character stats"
    ],
    "credits": [
      "Background Image: https://www.pexels.com/photo/empty-brown-canvas-235985/",
      "Paper Texture: https://pixabay.com/photos/paper-old-texture-parchment-1074131/",
      "Races, Classes and some backgrounds are from D&D."
    ],
    "featured": false,
    "category": "Utility",
    "releaseyear": 2023,
    "rating": 5
  },
  {
    "name": "Percentage Clock",
    "link": "https://jordan-heath.github.io/PercentageClock/",
    "thumbnail": "thumbnails/PercentageClock.png",
    "screenshot": "",
    "description": "On challenging days, it's helpful to know how much of the day is left. Percentage Clock provides this information in a simple number. It might not offer much comfort as I got a bit carried away with the CSS animation library.",
    "features": [
      "Current time indicator",
      "Color transition",
      "Heartbeat pulse animation",
      "Interactive sound effect"
    ],
    "credits": [],
    "featured": false,
    "category": "Utility",
    "releaseyear": 2023,
    "rating": 5
  },
  {
    "name": "Word Scrambler",
    "link": "https://jordan-heath.github.io/WordScrambler/",
    "thumbnail": "thumbnails/WordScrambler.png",
    "screenshot": "",
    "description": "Scrambles input text into a semi-comprehensible format.",
    "features": [
      "Text scrambling",
      "Lightweight tool"
    ],
    "credits": [],
    "featured": false,
    "category": "Utility",
    "releaseyear": 2023,
    "rating": 5
  },
  {
    "name": "Top Down RPG",
    "link": "https://jordan-heath.github.io/TopDownRPG/",
    "thumbnail": "thumbnails/TopDownRPG.png",
    "screenshot": "",
    "description": "Playable demo of a top-down RPG prototype.",
    "features": [
      "Top-down gameplay",
      "Click or arrow controls",
      "Collisions and interaction with long grass",
      "Playable demo"
    ],
    "credits": [
      "Caves of Qud"
    ],
    "featured": false,
    "category": "Game",
    "releaseyear": 0,
    "rating": 5
  },
  {
    "name": "Pet Game",
    "link": "https://jordan-heath.github.io/PetGame/",
    "thumbnail": "thumbnails/PetGame.png",
    "screenshot": "",
    "description": "Playable demo of a Digimon/Tamagotchi-inspired pet game.",
    "features": [
      "Virtual pet mechanics",
      "Playable demo"
    ],
    "credits": [],
    "featured": false,
    "category": "Game",
    "releaseyear": 0,
    "rating": 5
  }
]
