const quest = {
    "type" : "dialog",
    "dialog": [
        {
            "type": "text",
            "text": "You walk up upon a goat"
        },
        {
            "type": "text",
            "text": "The goat looks strong and fluffy, and it's eyes carry a dangerous glare"
        },
        {
            "type": "choice",
            "text": "What do you do?",
            "choices": [
                {
                    "type": "skill check",
                    "text": "fight",
                    "skill": "strength",
                    "difficulty": "2",
                    "successDialog": [
                        {
                            
                        }
                    ],
                    "failureDialog": [
                        {
                            
                        }
                    ]
                },
                {
                    "type": "skill check",
                    "text": "charm"
                },
                {
                    "type": "skill check",
                    "text": "flee"
                },
                {
                    "type": "dialog",
                    "text": "give up"
                }
            ]
        }
    ]
}

    //type dialog contains a dialog array that is iterated through
    //type text displays text to screen
    //type choice includes an array of different choices to choose from
    //type skill check will display the text like a type text, but be followed by either the successDialog array, or the failureDialog array
    //type dialog