class Pet {
    constructor() {
        this.state = 'egg';
        this.busy = true;

        this.name = '';
        this.species = 'egg';

        //stats
        this.maxHunger = MAX_HUNGER[0];
        this.maxHappy = MAX_HAPPY[0];
        this.maxHealth = MAX_HEALTH[0];
        
        //bio
        this.evolution = 0;
        this.age = 0;
        this.weight = 5; //hardcoded

        //bars
        this.hunger = 50;
        this.happy = 50;
        this.xp = 0;

        //hidden bars
        this.health = 50;
        this.bowels = 0;
        this.maturity = 0;
    }

    image() {
        switch(this.state) {
            case('egg'):
                return `url('assets/effects/egg.gif')`
            case('retire'):
                return `url('assets/effects/retire.gif')`
            case('toilet'):
                return `url('assets/effects/toilet.gif')`;
            case('dead'):
                return `url('assets/effects/dead.png')`;
            default:
                return `url('assets/pets/${this.species}/${this.state}.gif')`;
        }
    }

    update(secondsPassed) {
        if (this.state === 'sleep') return;
        if (this.state === 'dead') return;

        this.modifyMaturity(MATURITY_INCREASE_PER_SECOND[this.evolution] * secondsPassed);
        if (this.evolution === 0) return; //eggs don't decay

        this.modifyHunger(-HUNGER_DECAY_PER_SECOND * secondsPassed);
        this.modifyHappy(-HAPPY_DECAY_PER_SECOND * secondsPassed);
        this.modifyAge(AGE_INCREASE_PER_SECOND * secondsPassed);
        this.modifyHealth(-HEALTH_DECAY_PER_SECOND * secondsPassed * (1 + numberOfPoos));
        this.modifyBowels(BOWEL_INCREASE_PER_SECOND * secondsPassed);
    }

    //#region Actions
    meal() {
        if (this.busy) return;
    
        this.busy = true;
        this.state = 'eating';
        this.modifyHunger(this.maxHunger/5);
        this.weight += 0.1;
        this.bowels += 10;

        setTimeout(() => {
            this.state = 'default';
            this.busy = false;
        }, EATING_LENGTH)
    }

    treat() {
        if (this.busy) return;
    
        this.busy = true;
        this.state = 'eating';
        this.modifyHappy(this.maxHappy/5)
        this.weight += 0.2;
        this.bowels += 5;
    
        setTimeout(() => {
            this.state = 'default';
            this.busy = false;
        }, EATING_LENGTH)
    }

    praise() {
        if (this.busy) return;
        this.modifyHappy(this.maxHappy /5);
        this.happyAnimation();
    }

    punish() {
        if (this.busy) return;
        this.modifyHappy(-this.maxHappy /5);
        this.sadAnimation();
    }

    toilet() {
        if (this.busy) return;
        if (this.bowels < 50 && numberOfPoos < 1) return this.noAnimation();
    
        this.busy = true;
        this.bowels = 0;
        this.state = 'toilet'
        flushPooElements();
    
        setTimeout(() => {
            this.happyAnimation();
        }, TOILET_LENGTH)
    }
    
    sleep() {
        if (this.busy && this.state !== 'sleep') return;
    
        this.busy = !this.busy;
        light = !light;
        sleepElement.hidden = light;
        this.state = light ? 'default' : 'sleep';
        updateBackgroundView();
        updateCharacterView();
    }
    
    heal() {
        if (this.busy) return;
        if (this.health > 50) return this.noAnimation();
    
        this.busy = true;
        this.state = 'healing';
    
        setTimeout(() => {
            this.health = this.maxHealth;
            this.happyAnimation();
        }, HEALING_LENGTH)
    }
    
    defecate() {
        this.bowels = 0;
        numberOfPoos += 1;
        createPooElement();
    }
    evolve() {
        this.evolution += 1;
        this.maturity = 0;
        this.maxHunger = MAX_HUNGER[this.evolution];
        this.maxHappy = MAX_HAPPY[this.evolution];
        this.maxHealth = MAX_HEALTH[this.evolution];
        this.weight = this.weight * this.evolution;

        //if baby, hatch
        if (this.evolution === 1) this.hatch();
        if (this.evolution === 5) this.retire();

        //fetch new species
        //TODO: IMPLEMENT SPECIES
        this.species = 'cheddar';
    }

    hatch() {
        this.state = 'default';
        this.name = randomArrayValue(NAMES);
        this.busy = false;
    }

    retire() {
        this.busy = true;
        this.state = 'retire';
        toggleNewPetButton(false);
    }

    die() {
        this.busy = true;
        this.state = 'dead';
        toggleNewPetButton(false);
    }
    //#endregion Actions
    
    //#region Animations
    happyAnimation() {
        this.busy = true;
        this.state = 'happy';
    
        setTimeout(() => {
            this.state = 'default';
            this.busy = false;
        }, HAPPY_LENGTH);
    }
    
    sadAnimation() {
        this.busy = true;
        this.state = 'sad';
    
        setTimeout(() => {
            this.state = 'default';
            this.busy = false;
        }, SAD_LENGTH);
    }
    
    noAnimation() {
        this.busy = true;
        this.state = 'no';
    
        setTimeout(() => {
            this.state = 'default';
            this.busy = false;
        }, NO_LENGTH);
    }
    //#endregion Animations

    //#region Value Sanitation
    modifyHunger(points) {
        //eat the points
        this.hunger += points;

        //0 < this.hunger < this.maxHunger
        if (this.hunger < 0) {
            if (!this.busy) this.state = 'sick';
            this.modifyHealth(this.hunger); //subtract the defict from health
            this.hunger = 0;
        } 
        if (this.hunger > this.maxHunger) this.hunger = this.maxHunger;
    }

    modifyHappy(points) {
        //eat the points
        this.happy += points;

        //0 < this.happy < this.maxHappy
        if (this.happy < 0) {
            if (!this.busy) this.state = 'sick';
            this.modifyHealth(this.happy); //subtract the defict from health
            this.happy = 0;
        }
        if (this.happy > this.maxHappy) this.happy = this.maxHappy;
    }

    modifyAge(points) {
        this.age += points;
    }

    modifyHealth(points) {
        this.health += points;

        if (this.health < 0) this.die();
        if (this.health < 20 && !this.busy) this.state = 'sick';
        if (this.health > this.maxHealth) this.health = this.maxHealth;
    }

    modifyBowels(points) {
        this.bowels += points;

        if (this.bowels >= 100) this.defecate();
    }

    modifyMaturity(points) {
        this.maturity += points;

        if (this.maturity >= 100) this.evolve();
    }
    //#endregion Value Sanitation

    //#region Print values
    printHunger() {
        const value = this.hungerPercentage();
        const numX = Math.ceil(value / 20); // Round up the division result
        const numO = 5 - numX; // Calculate the number of 'O's
        const result = 'X'.repeat(numX) + 'O'.repeat(numO); // Assemble the string
        return result;
    }
    printHappy() {
        const value = this.happyPercentage();
        const numX = Math.ceil(value / 20); // Calculate the number of 'X's
        const numO = 5 - numX; // Calculate the number of 'O's
        const result = 'X'.repeat(numX) + 'O'.repeat(numO); // Assemble the string
        return result;
    }
    
    hungerPercentage() {
        return Math.round((this.hunger / this.maxHunger) * 100);
    }

    happyPercentage() {
        return Math.round((this.happy / this.maxHappy) * 100);
    }
    healthPercentage() {
        return Math.round((this.health / this.maxHealth) * 100);
    }
    //#endregion Print values
}


class ProgressBar {
    constructor(DivElement) {
        this.ProgressBarElement = document.getElementById(DivElement);
        this.ProgressBarText = document.createElement('span');
        this.ProgressBarFill = document.createElement('div');
        this.applyStyle();
        this.ProgressBarElement.appendChild(this.ProgressBarText);
        this.ProgressBarElement.appendChild(this.ProgressBarFill);
    }

    applyStyle() {
        this.ProgressBarElement.className = "ProgressBar";
        this.ProgressBarText.className = "ProgressText";
        this.ProgressBarFill.className = "ProgressFill";
    }

    update(barText, fillPercentage) {
        this.ProgressBarText.innerText = barText;
        this.ProgressBarFill.style.width = `${fillPercentage}%`;
    }
}