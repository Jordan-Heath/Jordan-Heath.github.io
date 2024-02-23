class Player {
    constructor(pet) {
        this.money = 0;
        this.currentPet = pet;
    }

    newPet() {
        this.currentPet = new Pet();
    }

    unlockPet(petId) {
        //TODO: add petId to log
    }
}