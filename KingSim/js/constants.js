const Intro = [
    { // Line 1
        text: () => {
            return `I'm very sorry to inform you of your ${SAVE.parent}'s passing.`;
        }
    },
    { // Line 2
        text: () => {
            return `It is with further sorrow I must tell you of the position your country finds itself in:`;
        }
    },
    { // Line 3.1
        text: () => {
            if (SAVE.crisis.includes("famine"))
                return `There are reports of climate catastrophe and famine to the south - it seems that a famine approaches.`;
            else 
                return ``;
        }
    },
    { // Line 3.2
        text: () => {
            if (SAVE.crisis.includes("war"))
                return `Your neighbors see this as a moment of instability and are eyeing your lands for conquest.`;
            else 
                return ``;
        }
    },
    { // Line 3.3
        text: () => {
            if (SAVE.crisis.includes("demons"))
                return `There are reports of demonic activity on the rise - we need to be on guard.`;
            else 
                return ``;
        }
    },
    { // Line 4
        text: () => {
            return `To survive the coming crisis, you will need:`;
        }
    },
    { // Line 5.1
        text: () => {
            if (SAVE.crisis.includes("famine"))
                return `To improve the conditions of your people.`;
            else 
                return ``;
        }
    },
    { // Line 5.2
        text: () => {
            if (SAVE.crisis.includes("war"))
                return `To demonstrate your capabilities as a leader to your neighbors.`;
            else 
                return ``;
        }
    },
    { // Line 5.3
        text: () => {
            if (SAVE.crisis.includes("demons"))
                return `To build a strong defense against the dark forces.`;
            else 
                return ``;
        }
    },
    { // Line 6
        text: () => {
            return `The crown now falls to you to lead your people.`;
        }
    }
]

const Ending = [
    { // Line 1 - intro
        text: () => {
            return `You were given an impossible task - to lead your people through a crisis.`
        }
    },
    { // Line 2 - outcome
        text: () => {
            const victory = SAVE.isVictory(); // todo
            const pass = SAVE.isPass(); // todo
            
            if (victory) {
                return `And to the challenge you did rise.`;
            } else if (pass) {
                return `And you met that challenge.`;
            } else {
                return `So this outcome was inevitable.`;
            }
        }
    },
    { // Line 3 - famine outcome
        text: () => {
            if (SAVE.crisis.includes("famine")) {
                const victory = SAVE.isVictory("famine"); // todo
                const pass = SAVE.isPass("famine"); // todo

                if (victory) {
                    return `Despite the lower yield, your people have never before lived such fulfilling lives.`;
                } else if (pass) {
                    return `Your people are a little more gaunt than before, but they are still alive.`;
                } else {
                    return `Your people starve on the streets. The rotting flesh failing to provide sustenance to those desperate enough to try it.`;
                }
            } else 
                return ``;
        }
    },
    { // Line 4 - war outcome
        text: () => {
            if (SAVE.crisis.includes("war")) {
                const victory = SAVE.isVictory("war"); // todo
                const pass = SAVE.isPass("war"); // todo

                if (victory) {
                    return `Your neighbors have formed a pact with you. An era of prosperity has begun.`;
                } else if (pass) {
                    return `After a few skirmishes, you established a working relationship with your neighbors.`;
                } else {
                    return `Your enemies outnumbered you. The streets have been plundered.`;
                }
            } else 
                return ``;
        }
    },
    { // Line 5 - demons outcome
        text: () => {
            if (SAVE.crisis.includes("demons")) {
                const victory = SAVE.isVictory("demons"); // todo
                const pass = SAVE.isPass("demons"); // todo

                if (victory) {
                    return `Your people met the dark forces and destroyed them.`;
                } else if (pass) {
                    return ``;
                } else {
                    return `Your capital is a charnel pit, spewing forth demons and undead. Your people feed their souls to the darkness.`;
                }
            } else 
                return ``;
        }
    },
    { // Line 6
        text: () => {
            return `The end.` // TODO elaborate on ending - go into what happens to player and to the future
        }
    }
]

const Actions = {
    gather: {
        name: "Gather Resources",
        text: () => "Gather resources",
        outcome: () => {
            SAVE.wealth += 1;
            return "You spend the week exploring and exploiting your lands. [+1 Wealth]";
        },
        randomEvents: [
            { // 1. Town Secret
                name: "Town Secret",
                text: () => "While exploring your lands, you discovered a town with much finer streets that one would expect in the middle of a wilderness. "
                        + "This wealth is suspicious and could be seized by the state. "
                        + "What would you like to do?",
                choices: {
                    1: "Redistribute the wealth to the neighbouring towns",
                    2: "Cease the wealth to the state",
                    3: "Enquire further into the matter",
                    4: "Leave the matter alone"
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // redistribute
                        SAVE.welfare += 2;
                        SAVE.foreignRelations -= 1;
                        return "You redistribute the wealth to the neighbouring towns [+2 welfare]. This decision upsets the richer populace, spreading rumors outside your kingdom [-1 foreign relations].";

                    } else if (choice === 2) {
                        // cease
                        SAVE.wealth += 2;
                        SAVE.welfare -= 1;
                        return "You cease the wealth to the state [+2 wealth]. The people of the town will have to live without it [-1 welfare].";

                    } else if (choice === 3) {
                        // enquire
                        SAVE.militaryStrength -= 1;
                        SAVE.wealth += 2;
                        return "The town was home to a family of occultists, who sacrifice your military liasons and the rest of the town [-1 military strength]. At least the wealth is now free for the taking [+2 wealth].";

                    } else if (choice === 4) {
                        // leave alone
                        return "You leave the town without doing anything. Maybe they are just bankers or something?";
                    }
                }
            },
            { // 2. 
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 3.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 4.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 5.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 6.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 7.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 8.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 9.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 10.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            }
        ]
    },
    help: {
        name: "Help your people",
        text: () => "Help your people",
        outcome: () => {
            SAVE.welfare += 1;
            return "You spend the week helping your people. [+1 Welfare]";
        },
        randomEvents: [
            { // 1.
                name: "Well Needed",
                text: () => "A group of elven villagers complain of poor access to water and discrimination preventing access from the city. "
                        + "They request your help. What would you like to do?",
                choices: {
                    1: "Build a well",
                    2: "Use the military to force out the elven villagers",
                    3: "Do nothing",
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // build well
                        SAVE.wealth -= 2;
                        SAVE.welfare += 1;
                        SAVE.foreignRelations += 1;
                        return "You spend 2 gold to build a well [-2 wealth]. The elven villagers are grateful [+1 Welfare] [+1 Foreign Relations].";
                        
                    } else if (choice === 2) {
                        // use military
                        SAVE.militaryStrength += 1;
                        SAVE.foreignRelations -= 2;
                        SAVE.welfare += 1;
                        return "You use this as a training exercise for your troops [+1 Military Strength]. The elven villagers let the neighboring kingdoms know what you did [-2 Foreign Relations]. The homes they vacated are now free for our needy to take [+1 Welfare].";
                        
                    } else if (choice === 3) {
                        // do nothing
                        SAVE.foreignRelations -= 1;
                        SAVE.welfare -= 1;
                        return "You cannot afford to build a well [-1 Welfare]. The elven villagers are disappointed [-1 Foreign Relations].";
                    }
                }
            },
            { // 2.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 3.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 4.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 5.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 6.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 7.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 8.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 9.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 10.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            }
        ]
    },
    diplomacy: {
        name: "Diplomacy and Foreign Relations",
        text: () => "Diplomacy",
        outcome: () => {
            SAVE.foreignRelations += 1;
            return "You spend the week in diplomacy with your neighbors. [+1 Foreign Relations]";
        },
        randomEvents: [
            { // 1. Border Clash
                name: "Border Clash",
                text: () => "A number of your troops stationed on the border with a neighboring kingdom have disobyed orders and are attacking enemy villagers."
                        + "The kingdom has demanded diplomatic intervention. What would you like to do?",
                choices: {
                    1: "Offer tribute for the harm caused",
                    2: "Discipline your troops",
                    3: "Check if they got any loot",
                    4: "Ignore"
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // Tribute
                        SAVE.wealth -= 2;
                        SAVE.foreignRelations += 2;
                        return "You offer tribute for the harm caused [-2 Wealth]. The kingdom is grateful [+2 Foreign Relations].";
                        
                    } else if (choice === 2) {
                        // Discipline
                        SAVE.militaryStrength -= 1;
                        SAVE.foreignRelations += 1;
                        return "You discipline your troops [-1 Military Strength]. The kingdom is grateful [+1 Foreign Relations].";

                    } else if (choice === 3) {
                        // Loot
                        SAVE.wealth += 4;
                        SAVE.foreignRelations -= 2;
                        return "They DID get loot [+4 Wealth]. The kingdom is disappointed [-2 Foreign Relations].";

                    } else if (choice === 4) {
                        // Leave alone
                        SAVE.foreignRelations -= 1;
                        return "You claim the message was lost in the post. The kingdom is disappointed [-1 Foreign Relations].";
                    }
                }
            },
            { // 2.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 3.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 4.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 5.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 6.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 7.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 8.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 9.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 10.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            }
        ]
    },
    military: {
        name: "Develop Military Strength",
        text: () => "Military",
        outcome: () => {
            SAVE.militaryStrength += 1;
            return "You spend the week training your troops [+1 military strength].";
        },
        randomEvents: [
            { // 1. Goblin Problem
                name: "Goblin Problem",
                text: () => "One of your towns reaches out to you for help. "
                        + "They report that errent goblins have been performing raids on their town. "
                        + "They request that you send multiple raiding parties to clear out the goblins.",
                choices: {
                    1: "Send a large raid party to kill the goblins",
                    2: "Send a small raid party to clear out the goblins",
                    3: "Send a diplomat to negotiate with the goblins",
                    4: "Instruct the local militia to clear out the goblins"
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // Large raid party
                        SAVE.militaryStrength -= 1;
                        SAVE.wealth += 1;
                        SAVE.welfare += 1;
                        return "The goblins are iradicated but not without some casualties [-1 Military Strength]. The village is grateful and sends you local delicacies [+1 Wealth]. The village prosperity is improved [+1 Welfare].";

                    } else if (choice === 2) {
                        // small raid party
                        SAVE.welfare += 1;
                        SAVE.militaryStrength += 1;
                        return "The goblins are driven off from the village by your small raid party [+1 Welfare]. Your troops get some good practice [+1 Military Strength].";

                    } else if (choice === 3) {
                        // diplomat
                        SAVE.welfare += 1;
                        SAVE.foreignRelations -= 1;
                        return "The diplomat returns having convinced the goblins to leave the village alone [+1 Welfare]. You recieve correspondance from a neighbor that the goblins now trouble them [-1 Foreign Relations].";

                    } else if (choice === 4) {
                        // militia
                        SAVE.welfare -= 2;
                        return "The militia only serves to draw the ire of the goblins. The village is massacred [-2 Welfare].";
                    }
                }
            },
            { // 2.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 3.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 4.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 5.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 6.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 7.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 8.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 9.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 10.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            }
        ]
    },
    policy: {
        name: "Set Policy",
        text: () => "Policy",
        outcome: () => {
            const options = ["wealth", "welfare", "foreignRelations", "militaryStrength"];
            const optionsWritable = ["Wealth", "Welfare", "Foreign Relations", "Military Strength"];
            const option = Math.floor(Math.random() * options.length);
            SAVE[options[option]] += 2;

            return `You work with your bureaucrats to set a new policy [+2 ${optionsWritable[option]}].`;
        },
        randomEvents: [
            { // 1. Tax Rate Increase
                name: "Tax Rate Increase",
                text: () => "An advisor approaches you and points to a discrepancy in the budget. "
                            + "It appears that to meet this week's budget, the tax rate must be increased. "
                            + "What do you do?`",
                choices: {
                    1: "Increase general tax rate.",
                    2: "Impose tariffs.",
                    3: "Decrease military spending.",
                    4: "Don't increase the tax rate."
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // General increase
                        SAVE.wealth += 2;
                        SAVE.welfare -= 1;
                        return "The tax increase has balanced the budget with some to spare [+2 Wealth]. Your people feel the burden of your decision [-1 Welfare].";

                    } else if (choice === 2) {
                        // Tariffs
                        SAVE.wealth += 2;
                        SAVE.foreignRelations -= 1;
                        return "The tariffs have balanced the budget with some to spare [+2 Wealth]. Foreign relations are strained by the economic impact [-1 Foreign Relations].";

                    } else if (choice === 3) {
                        // Military decrease
                        SAVE.wealth += 2;
                        SAVE.militaryStrength -= 1;
                        return "Your cost cutting has balanced the budget with some to spare [+2 Wealth]. Some troops are left without weapons and armor [-1 Military Strength].";

                    } else if (choice === 4) {
                        // Don't increase
                        SAVE.wealth -= 2;
                        return "Your tax income fails to meet the budget. The difference is met by your treasury [-2 Wealth].";
                    }
                }
            },
            { // 2.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 3.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 4.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 5.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 6.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 7.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 8.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 9.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            },
            { // 10.
                name: "",
                text: () => ``,
                choices: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                outcome: (choice) => {
                    if (choice === 1) {
                        // 
                        return "";

                    } else if (choice === 2) {
                        // 
                        return "";

                    } else if (choice === 3) {
                        // 
                        return "";

                    } else if (choice === 4) {
                        // 
                        return "";
                    }
                }
            }
        ]
    }
}
