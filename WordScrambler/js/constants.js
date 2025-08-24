const COPYCHANCE = 0.8
const DELETECHANCE = 0.01

const BACKGROUNDREPEAT = 100;

const CONJUNCTIONS = ["an", "the", "to", "when", "he", "up", "with", "a", "of", "but", "by", "his", "her", "she", "and"];

const LOREMIPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ";

const EXAMPLETEXT = ["Word Scrambler gave me a hernia.",
                    "Word Scrambler is a bad application.",
                    "Nothing quite like a good Word Scrambler.",
                    "This does not make a good portfolio project.",
                    "Click below to see the example text get scrambled.",
                    "Word scrambler will lower the case of ALL text entered. It will also delete ANY symbols added to text.",
                    `The app works by removing the following conjuctions: ${CONJUNCTIONS.join(' ')}.`,
                    `Every word has a ${COPYCHANCE * 100}% chance to be duplicated at least once.`,
                    `Every word has a ${DELETECHANCE * 100}% chance to be deleted.`,
                    `${LOREMIPSUM}`];