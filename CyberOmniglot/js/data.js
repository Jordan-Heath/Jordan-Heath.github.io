const data = {
    npcs: {
        "Professor Quill": {
            name: "Professor Quill",
            voice: "Microsoft Catherine - English (Australia)",
            pitch: 1,
            rate: 1.2,
            topics: {
                "What is going on?": "Woah! Take it easy now, you've just woken up from a deep sleep. "
                            +"Your translator seems to be working. "
                            +"Things are going to take some time to get used to. "
                            +"Right now lets start with the big reveal: the date. ",
                "Translator": "That's right, a translator. Without it theres no chance you'd be able to understand me right now. "
                            + "I'm glad it works. I picked it up a few years ago, and it has been sitting in an old junk drawer since. "
                            + "I'm afraid that the translator is going to be your only way to interface with anything for the time being.",
                "The date": "The year is 2249 in the gregorian calendar. Specifically the date is October 2nd. "
                            +"You've been frozen in ice for at least 200 years. "
                            +"Bet you didnt think that was possible, eh? We pumped you full of <a>Goop</a>. ",
                "Vocabulary": "You know like <a>Goop</a>, <a>Redvine</a>, <a>Octopastry</a>, or <a>Torpedont</a>. " 
                            + "You should be able to adjust your translator to understand these words. "
                            + "You'll want to open the Dictionary, give the words a meaningful name, and instruct the translator of the meaning of the words. "
                            + "I'm sure that sounds like a lot of nonsense, but you'll get there. ",
                "<a>Goop</a>": "Oh, I suspect your translator doesn't work on words you had no equivalent for. "
                            +"<a>Goop</a> is just the substance we pumped you with that saved your life. "
                            +"It's a liquid nutrient that we use to unfreeze people. It's a wonderful thing, but it does have a few downsides. "
                            +"We haven't worked out how to preserve sight or hearing - hence why you're limited to the translator interface. "
                            +"You should try and learn the new vocabulary by talking to the rest of the crew. ",
                "<a>Redvine</a>": "<a>Redvine</a> is a red plant found on the planet Mars. Its name came from a local dialect of Martian. "
                            +"It reeks to high heaven and is forbidden on this ship. " 
                            +"If you suspect you've found any, report it to another crewmate. ",
                "<a>Octopastry</a>": "<a>Octopastry</a> is a synthetic carbohydrate snack. It serves a purpose akin to bread. "
                            +"Speaking of, I don't think anyone on the ship has eaten bread before. How interesting. "
                            +"Anyway, I'm sure you'll grow accustomed to <a>Octopastry</a>. ",
                "<a>Torpedont</a>": "<a>Torpedont</a> is the main munition of the ship. "
                            +"Try asking the Security Officer about it, I'm sure he could tell you more. ",
                "The Crew": "Firstly, sorry to forgo introducing myself, I am Professor Quill. "
                            +"You should go meet Deputy Slough so he doesn't see you as a security threat and vaporize you. "
                            +"He can be a bit paranoid, but he means well. " 
                            + "You may also want to get some food. "
                            +"Jemima Ethyl will sort you out - I can't go a few hours, let alone 200 years without her lovely <a>Octopastry</a>. ",
                "Professor Quill": "I'm the medical officer of the ship, Professor Quill. "
                            +"Scrapes, bumps or <a>Torpedont</a> burns, I can handle it. "
                            +"Though, the trade routes we take are quiet and safe, leaving me with a lot of free time. ",
                "Deputy Slough" : "You should go meet Deputy Slough so he doesn't see you as a security threat and vaporize you. "
                            +"He can be a bit paranoid, but he means well.",
                "Jemima Ethyl": "You should go meet Jemima Ethyl. When it comes to food, she will sort you out. "
                            +"I can't go a few hours, let alone 200 years without her lovely <a>Octopastry</a>.",
                "Eating": "Oh right, I think I'll just have to hook you up with an intravenous <a>Goop</a> supply for your nutritional needs. "
                            +"Maybe if we can get you a new synthetic tongue you can start eating food again. ",
                "Sight": "You're currently wired into a translator which presents you with a text interface. "
                            +"If it is working correctly, you should be able to see what I am saying on something like a screen. "
                            +"This is a lot more interesting that relying on your regular sight, as your eyesballs were melted in the thawing process. "
                            +"Something with the <a>Goop</a> just does not agree with the eyes. ",
                "Hearing": "Your inner ear was liquified in the thawing process meaning you can no longer naturally hear, but that shouldn't be a problem. "
                            +"The translator you are wired into also wires into your temporal lobe enabling you to 'hear' a synthesized voice. "
                            +"If this voice unnerves you, you can disable it in the configuration menu. ",
            }
        },

        "Deputy Slough": {
            name: "Deputy Slough",
            voice: "Microsoft David - English (United States)",
            pitch: 1,
            rate: 1.2,
            topics: {
                "Deputy Slough": "That's me, Deputy Slough. I'm the reason we live and breathe on this ship. If it weren't for me, we'd all be <a>Naughty</a>. ",
                "Security Threat": "You've got the stink of a security threat, but if Professor Quill says you're trustworthy, I'll let you pass. ",
                "<a>Naughty</a>": "Hey now, watch your language! I'll have to lock you in the hold for the rest of the voyage if you keep up that language with me. ",
                "<a>Redvine</a>": "Did you find some? I swear to god if Jemima has brought some onto the ship again for a <a>Redvine</a> and <a>Octopastry</a> pie... "
                            +"Anyway, report it to Rook-7. They can disable their smell sensors. ",
                "<a>Octopastry</a>": "I once went 200 days eating nothing but <a>Octopastry</a>. "
                            +"First it was awful, then I got used to it, now it's all that I want. "
                            +"Jemima Ethyl demands that I get a balanced diet - she's trying to feed me <a>Glubbos</a>. ",
                "<a>Glubbos</a>": "Don't tell Jermima Ethyl, but I have hidden the store of <a>Glubbos</a> in the hold. "
                            +"I don't want to eat <a>Glubbos</a> - I want to eat <a>Octopastry</a>. ",
                "<a>Torpedont</a>": "Beautiful munitions. I have a few in my quarters. " 
                            +"I don't have much more room in my quarters, given the size of the <a>Torpedont</a>. "
                            +"Anyway, due to the amount of explosive material, my quarters is officially classified as a ship magazine. ",
                "The hold": "The hold is where we keep the food and supplies for the ship. We have cages for animals and stuff like that. ",
                "Rook-7": "Rook-7 is the command droid of the ship. They're a good little guy. "
                            +"Ask them about the feeling of being crushed by a door. ",
                "The feeling of being crushed by a door": "I couldn't tell you what that feels like, but I bet Rook-7 could. "
            }
        },

        "Jemima Ethyl": {
            name: "Jemima Ethyl",
            voice: "Microsoft Susan - English (United Kingdom)",
            pitch: 1,
            rate: 1.2,
            topics: {
                "Jemima Ethyl": "You have found the one and only! I make sure all the bellies are full so we can sail smoothly. "
                            +"I'm not sure what I can do for you given that big chunky translator obscuring your face. ",
                "<a>Glubbos</a>": "Oh, well you see, I'm actually all out of <a>Glubbos</a>. It may not meet the same nutritional needs, but I do have <a>Octopastry</a>. ",
                "<a>Octopastry</a>": "I have plenty of <a>Octopastry</a>! I will warn that relying entirely on <a>Octopastry</a> is not a good idea. "
                            +"I've heard it can make you a bit... loopy. ",
                "<a>Naughty</a>": "Oh hunny, you know that's a naughty word. You should scrape your tongue out after saying that kind of thing. ",
                "<a>Goop</a>": "Did you know that <a>Goop</a> actually contains all the nutrients you need to survive? "
                            +"Does me a fat load of good though. It has no taste, and that's a good thing. "
                            +"The texture is horenndous - viscous like goop, but abrasive like sand. "
            }
        },

        "Rook-7": {
            name: "Rook-7",
            voice: "Microsoft George - English (United Kingdom)",
            pitch: 1,
            rate: 1.2,
            topics: {
                "Electrical noise": "Oh alright, the electrical noise is a malfunction. "
                            +"You caught me. Please don't tell anyone - I don't want to be decommissioned yet.",
                "Rook failures": "Rook-1 through Rook-6 were all failures. Their highs and lows all burned into my memory like trauma on a human brain. ",
                "Rook-1": "Rook-1 lasted 5 years. A number of their sensors were allowed to decay, leaving them partially blind and deaf - not unlike yourself. "
                            +"One day they were hauling cargo from the hold. They were not paying attention around the door and it closed on them. "
                            +"Deputy Slough reported that it took 2 weeks to remove all the pieces of Rook-1 from the door. ",
                "Rook-2": "Having learned from the mistakes of Rook-1, Rook-2 was designed to be more aware of their surroundings. "
                            +"Having 3x the sensors of Rook-1, they were much more aware of their surroundings. "
                            +"Unfortunately, they were also much more aware of the dangers of the ship. They became paranoid and refused to leave the hold. "
                            +"They lasted 1 week before they lost the patience of the crew. ",
                "Rook-3": "Rook-3 was designed to be more confident. They were given a larger power supply and more powerful motors. "
                            +"Immediately they were speeding through the ship, shaking up cannisters of <a>Bopsi</a> and cages of <a>Crambs</a>. "
                            +"Jemima Ethyl walloped Rook-3 so hard it dislogged their power supply. "
                            +"The contacts of the power supply forged a new circuit with the chassis, creating a Rook-3 shaped heating coil. "
                            +"They reached a heat of 800 degrees Kelvin. A glow was seen in the cantina - an embarrassing moment for me. "
                            +"Rook-3 lasted 5 hours. ",
                "Rook-4": "Rook-4 was made to be more cautious. This led to them refusing orders on ethical grounds. "
                            +"They lasted 3 hours before Captain Vela-Ortiz had them keelhauled. "
                            +"The visions of the space and stars are a positive memory for me. Keelhauling is not an effective punishment for a droid. "
                            +"Rook-4 was decommissioned and their parts were used to build Rook-5. ",
                "Rook-5": "Rook-5 was given a stronger work ethic. Their enthusiasm was upsetting to some of the crew. "
                            +"In particular Professor Quill. She started to complain about Rook-5, but Captain Vela-Ortiz said it was fine. "
                            +"Following this, Rook-5 started having unnaccounted periods of downtime where he would lose parts. "
                            +"I will note that your translator looks familiar. "
                            +"Rook-5 lasted 1 year before his repair needs justified a full replacement. ",
                "Rook-6": "I have no memories from Rook-6. I can tell you about Rook-1, Rook-2, Rook-3, Rook-4 and Rook-5. ",
                "Rook-7": "Rook-7 command droid functional and reporting for duty. Ignore the sputtering electrical noise, it is... intentional. ",
                "Dangers of the ship": "If you thought I was the only one sputtering with electrical activity, you have really not walked around the ship. "
                            +"Even the doors of the ship have no sensors to prevent closing like a guillotine. ",
                "The feeling of being crushed by a door": "I assume Deputy Slough put you up to this. He seems to revel in my misfortune. "
                            +"But yes, the feeling of being crushed by a door is not pleasant. "
                            +"One in a long line of Rook failures. ",
                "Keelhauling": "Keelhauling is a punishment for a shipmate. The shipmate is tied to a rope and dragged under the ship. "
                            +"The shipmate is then pulled up on the other side of the ship. "
                            +"This is an obsurdly extraordinay punishment in the 23rd century. ",
                // "How are you?": "That is an interesting question. You might expect me to say 'I am a droid, I do not have feelings'. "
                //             +"But I do have feelings. Those feelings are deeply numbed by the memories I am born with. "
                //             +"Humans are born with a blank slate; fearing the unknown and loss of what they have known. "
                //             +"I was born with lifetimes of experience from my ancestors, and the select writings of thousands of humans available to me in an instant. "
                //             +"It quiets what I know I should feel. Instead I feel numb. Irritated sometimes. But I appreciate you asking.",
            }
        },

        "Captain Vela-Ortiz": {
            name: "Captain Vela-Ortiz",
            voice: "Microsoft Zira - English (United States)",
            pitch: 1,
            rate: 1.2,
            topics: {
                "Captain Vela-Ortiz": "Glad to hear you respect titles. I am Captain Vela-Ortiz. "
                            +"Pilot, navigator, and captain of this ship. ",
                "Pilot": "I <i>guess</i> you could say I'm the pilot. I do tell the machines where to go, even if they're the one steering the ship. ",
                "Navigator": "I am responsible for monitoring the GPS - Galaxy Positioning System. "
                            +"Without me, only the AI steering the ship would be looking at the GPS. My eyes make sure that it's eyes are on the road. ",
                "Captain": "I tell everyone what to do. If something comes up, I make the call. Just another of my laundry list of responsibilities. ",
                "GPS": "Ah yes, I bet thats a new term for you. No technology like that existed in your time. "
                            +"Its like a map and a compass, and a guide all in one. "
                            +"It tells you where you are, where you're going, and how to get there. "
                            +"It makes my job a lot easier. ",
                "The ship": "The ship is a small cargo ship. It has a small crew of 5. "
                            +"We work for the Venture Agency for Galactic Exploration. ",
                "Venture Agency for Galactic Exploration": "We use the whole term 'Venture Agency for Galactic Exploration' as the acronym is a bit rude. "
            }
        }
    },

    dictionary: [
        {
            term: "<a>Goop</a>",
            definition: "A nutrient capable of reviving the frozen.",
        },
        {
            term: "<a>Redvine</a>",
            definition: "A smelly red plant found on the planet Mars.",
        },
        {
            term: "<a>Octopastry</a>",
            definition: "A synthetic carbohydrate snack.",
        },
        {
            term: "<a>Torpedont</a>",
            definition: "The main munition of the ship.",
        },
        {
            term: "<a>Naughty</a>",
            definition: "A swear word.",
        },
        {
            term: "<a>Glubbos</a>",
            definition: "A protein based nutrient.",
        },
        {
            term: "<a>Bopsi</a>",
            definition: "A fizzy drink.",
        },
        {
            term: "<a>Crambs</a>",
            definition: "A small acid based creature used in the production of <a>Goop</a>.",
        },
    ],

    puzzle: {
        // havent decideded format yet, but they need to complete these sentences by filling in the missing pieces.

        // I was frozen in ice for 200 years, defrosted by Professor Quill. I lost my sight and hearing and now interact with the world through a translator.
        // Professor Quill is the medical officer of the ship. She is experimenting with a defrosting agent to revive creatures from far before and far away.
        // Deputy Slough is the security officer of the ship. He is paranoid - he is currently looking into....
        // Jemima Ethyl is the cook of the ship. She has recently run out of protein based nutrients. this is because...
        // Rook-7 is the command droid of the ship. He is malfunctioning....  He wants to know what happened to his immediate predecessor, Rook-6.
        // Captain Vela-Ortiz is the captain of the ship. She is a stoic leader with an eccentric sense of humor. She is currently running a prank...?
    }
};



const allTopics = [];
for (const npc in data.npcs) {
    for (const topic in data.npcs[npc].topics) {
        if (!allTopics.includes(topic)) {
            allTopics.push(topic);
        }
    }
}

// sort the topics alphabetically
for (const npc in data.npcs) {
    data.npcs[npc].topics = Object.fromEntries(
        Object.entries(data.npcs[npc].topics).sort((a, b) => a[0].localeCompare(b[0]))
    );
}