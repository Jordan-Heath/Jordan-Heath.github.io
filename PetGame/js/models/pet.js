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
        this.bowels = 0;

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
            this.addHunger(-HUNGER_DECAY_PER_SECOND * secondsPassed);
            this.addHappy(-HAPPY_DECAY_PER_SECOND * secondsPassed);
            this.age += AGE_INCREASE_PER_SECOND * secondsPassed;
            this.health -= HEALTH_DECAY_PER_SECOND * secondsPassed;
            this.bowels += BOWEL_INCREASE_PER_SECOND * secondsPassed;
        }
    }

    addHunger(points) {
        //eat the points
        this.hunger += points;

        //0 < this.hunger < this.maxHunger
        if (this.hunger < 0) this.hunger = 0;
        if (this.hunger > this.maxHunger) this.hunger = this.maxHunger;
    }

    addHappy(points) {
        //eat the points
        this.happy += points;

        //0 < this.happy < this.maxHappy
        if (this.happy < 0) this.happy = 0;
        if (this.happy > this.maxHappy) this.happy = this.maxHappy;
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