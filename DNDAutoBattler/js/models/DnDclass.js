class DndClass {
    constructor(name, proficiencies, equipment) {
        this.name = name;
        this.proficiencies = proficiencies;
        this.equipment = equipment;
        //this.classSpecifics = classSpecifics;
    }
}


const classes = {
    barbarian: new DndClass(
        "Barbarian",
        
    ),
    bard: new DndClass(
        "Bard",
    ),
    cleric: new DndClass(
        "Cleric",
    ),
    druid: new DndClass(
        "Druid",
    ),
    fighter: new DndClass(
        "Fighter",
    ),
    monk: new DndClass(
        "Monk",
    ),
    paladin: new DndClass(
        "Paladin",
    ),
    ranger: new DndClass(
        "Ranger",
    ),
    rogue: new DndClass(
        "Rogue",
    ),
    sorcerer: new DndClass(
        "Sorcerer",
    ),
    warlock: new DndClass(
        "Warlock",
    ),
    wizard: new DndClass(
        "Wizard",
    )
}