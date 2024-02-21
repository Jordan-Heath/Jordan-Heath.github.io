const STATE_IDS = {
    'default': 0,
    'happy': 1,
    'sad': 2,

    'sleeping': 3,
    'eating': 4,
    'toilet': 5,
    'no': 6
}

const STATE_NAMES = {
    0: 'default',
    1: 'happy',
    2: 'sad',

    3: 'sleeping',
    4: 'eating',
    5: 'toilet',
    6: 'no'
}

const UPDATE_FREQUENCY = 300;
const EATING_LENGTH = 3000;
const TOILET_LENGTH = 3000;
const HEALING_LENGTH = 3000;
const HAPPY_LENGTH = 3000;

const HUNGER_DECAY_PER_SECOND = 0.1;
const HAPPY_DECAY_PER_SECOND = 0.1;
const AGE_INCREASE_PER_SECOND = 0.01;
const HEALTH_DECAY_PER_SECOND = 0.01;
const BOWEL_INCREASE_PER_SECOND = 0.1;