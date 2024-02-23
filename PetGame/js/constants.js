//#region STATES
const STATE_IDS = {
    'default': 0,
    'happy': 1,
    'sad': 2,

    'sleeping': 3,
    'eating': 4,
    'toilet': 5,
    'no': 6,
    'sick': 7,
    'dead': 8
}

const STATE_NAMES = {
    0: 'default',
    1: 'happy',
    2: 'sad',

    3: 'sleeping',
    4: 'eating',
    5: 'toilet',
    6: 'no',
    7: 'sick',
    8: 'dead'
}

const EVOLUTION_STATES = {
    0: 'egg',
    1: 'baby',
    2: 'child',
    3: 'adult',
    4: 'senior',
}
//#endregion STATES

//#region ANIMATION LENGTHS
const UPDATE_FREQUENCY = 300;
const EATING_LENGTH = 2000;
const TOILET_LENGTH = 3000;
const HEALING_LENGTH = 3000;
const HAPPY_LENGTH = 2000;
const SAD_LENGTH = HAPPY_LENGTH;
const NO_LENGTH = 2000;
//#endregion ANIMATION LENGTHS

//#region DECAY/INCREASE RATES
const HUNGER_DECAY_PER_SECOND = 0.2; //8.3min to empty
const HAPPY_DECAY_PER_SECOND = 0.2; //8.3min to empty
const AGE_INCREASE_PER_SECOND = 0.01; //1.6min to age
const HEALTH_DECAY_PER_SECOND = 0.01; //1.4 to poor health, 2.7hr to die
const BOWEL_INCREASE_PER_SECOND = 0.5; //3.3min to shit
const MATURITY_INCREASE_PER_SECOND = [
    3, //33.3sec to hatch
    0.2, //8.3min to mature
    0.1, //16.6min to mature
    0.05, //33.3min to mature
    0.025 //1.11hr to retire
]
//#endregion DECAY/INCREASE RATES

//#region STATS
const MAX_HUNGER = [
    50, //egg
    50, //baby
    100, //child
    150, //adult
    200 //senior
]
const MAX_HAPPY = [
    50, //egg
    50, //baby
    100, //child
    150, //adult
    200 //senior
]
const MAX_HEALTH = [
    50, //egg
    50, //baby
    100, //child
    150, //adult
    200 //senior
]
//#endregion STATS


//#region PLACEHOLDER DATA
const NAMES = [
    'honkytonk',
    'gerald',
    'harald',
    'germ',
    'skingler',
    'gleg',
    'oilium',
    'dirty'
]
//#endregion PLACEHOLDER DATA