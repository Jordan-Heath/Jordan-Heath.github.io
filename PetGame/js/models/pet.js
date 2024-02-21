class Pet {
    constructor() {
        this.species = 'cheddar';
        this.state = 'default';

        //stats
        this.maxHunger = 100;
        this.maxHappy = 100;
        
        //bio
        this.name = 'pet';
        this.age = 0;
        this.weight = 5;

        //bars
        this.hunger = 100;
        this.happy = 100;
        this.training = 0;

        //hidden bars
        this.health = 100;
        this.bowels = 100;

        this.money = 0;
    }

    image() {
        switch(this.state) {
            case('toilet'):
                return `url('assets/effects/toilet.gif')`;
            case('sleep'):
                return `url('assets/pets/${pet.species}/${pet.state}.gif'), url('assets.effects/sleep.gif')`
            default:
                return `url('assets/pets/${pet.species}/${pet.state}.gif')`;
        }
    }

    update(secondsPassed) {
        if (this.state !== 'sleep') {
            this.hunger -= HUNGER_DECAY_PER_SECOND * secondsPassed;
            this.happy -= HAPPY_DECAY_PER_SECOND * secondsPassed;
            this.age += AGE_INCREASE_PER_SECOND * secondsPassed;
            this.health -= HEALTH_DECAY_PER_SECOND * secondsPassed;
            this.bowels += BOWEL_INCREASE_PER_SECOND * secondsPassed;
        }
    }

    addHunger(points) {
        //eat the points
        this.hunger += points;
        //ensure not greater than max
        this.hunger = this.hunger > this.maxHunger ? this.maxHunger : this.hunger;
    }

    addHappy(points) {
        //eat the points
        this.happy += points;
        //ensure not greater than max
        this.happy = this.happy > this.maxHappy ? this.maxHappy : this.happy;
    }

    hungerPercentage() {
        return Math.round((this.hunger / this.maxHunger) * 100);
    }

    happyPercentage() {
        return Math.round((this.happy / this.maxHappy) * 100);
    }

    isAvailable() {
        return pet.state === 'default';
    }
}