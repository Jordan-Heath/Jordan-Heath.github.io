const monsters = [
    new Monster('Goblin', 30, 5),
    new Monster('Orc', 50, 10),
    new Monster('Troll', 80, 15),
    new Monster('Dragon', 150, 25),
    new Monster('Skeleton', 25, 4)
];

const weapons = {
    longsword: new Weapon('Longsword', 0, 8, 3, {}),
    quaterstaff: new Weapon('Quarterstaff', 0, 6, 4, {}),
    mace: new Weapon('Mace', 1, 2, 10, {}),
    longbow: new Weapon('Longbow', 1, 2, 10, {}),
    dagger: new Weapon('Dagger', 1, 2, 10, {})
}

const armor = {
    leatherArmor: new Armor('Leather Armor', 1, 2, 10, {}),
    chainmail: new Armor('Chainmail', 1, 2, 10, {}),
    shield: new Armor('Shield', 1, 2, 10, {}),
    lightArmor: new Armor('Light Armor', 1, 2, 10, {}),
    mediumArmor: new Armor('Medium Armor', 1, 2, 10, {}),
    heavyArmor: new Armor('Heavy Armor', 1, 2, 10, {})
}

const spells = {
    secondWind: new Spell('Second Wind', 1, 'Evocation', 1, 20, [], 1, "Grant a target a +1 bonus to attack and damage rolls for 1 hour."),
    huntersMark: new Spell('Hunter\'s Mark', 1, 'Evocation', 1, 20, [], 1, "Grant a target a +1 bonus to attack and damage rolls for 1 hour."),
    fireball: new Spell('Fireball', 1, 'Evocation', 1, 20, [], 1, "Cast a great ball of fire at a target. It deals 10d6 points of fire damage."),
    magicMissile: new Spell('Magic Missile', 1, 'Evocation', 1, 20, [], 1, "Cast 10 magic missiles at a target. Each missile deals 1d4 points of damage."),
    healingWord: new Spell('Healing Word', 1, 'Divination', 1, {}, 1, "Heal a target for 10 hit points."),
    sacredFlame: new Spell('Sacred Flame', 1, 'Divination', 1, {}, 1, "Cast a beam of holy light at a target. It deals 5d6 points of radiant damage."),
    bless: new Spell('Bless', 1, 'Divination', 1, {}, 1, "Grant a target a +1 bonus to attack and damage rolls for 1 hour.")
};

const characters = [
    new Character(
        'Jim',
        'Fighter',
        'Soldier',
        3,
        'Human',
        'Lawful Good',
        100,
        16,
        15,
        {
            strength: 16,
            dexterity: 12,
            constitution: 14,
            intelligence: 10,
            wisdom: 10,
            charisma: 10
        },
        [
            weapons.longsword,
            armor.chainmail,
            armor.shield,
        ],
        [
            spells.secondWind
        ],
        [
            new Action('Jim', 'Longsword', 0, 8, 'attack'),
            new Action('Jim', 'Second Wind', 0, 5, 'heal'),
        ]
    ),
    new Character(
        'Heraldo',
        'Wizard',
        'Acolyte',
        3,
        'Human',
        'Neutral',
        70,
        12,
        20,
        {
            strength: 8,
            dexterity: 14,
            constitution: 12,
            intelligence: 16,
            wisdom: 12,
            charisma: 10
        },
        [
            weapons.quaterstaff
        ],
        [
            spells.fireball, 
            spells.magicMissile
        ],
        [
            new Action('Heraldo', 'Quaterstaff', 0, 4, 'attack'),
            new Action('Heraldo', 'Magic Missile', 0, 4, 'attack'),
            new Action('Heraldo', 'Fireball', 0, 40, 'attack'),
            new Action('Heraldo', 'Arcane Recovery', 0, 5, 'heal')
        ]
    ),
    new Character(
        'Bartolomeo',
        'Ranger',
        'Outlander',
        3,
        'Human',
        'Neutral',
        80,
        14,
        18,
        {
            strength: 10,
            dexterity: 16,
            constitution: 13,
            intelligence: 12,
            wisdom: 14,
            charisma: 10
        },
        [
            weapons.longbow, 
            armor.leatherArmor
        ],
        [
            spells.huntersMark
        ],
        [
            new Action('Bartolomeo', 'Longbow', 0, 4, 'attack'),
            new Action('Bartolomeo', 'Hunters Mark', 0, 5, 'heal')
        ]
    ),
    new Character(
        'Ricardo',
        'Cleric',
        'Priest',
        3,
        'Human',
        'Lawful Good',
        90,
        15,
        10,
        {
            strength: 12,
            dexterity: 10,
            constitution: 14,
            intelligence: 10,
            wisdom: 16,
            charisma: 12
        },
        [
            weapons.mace, 
            armor.shield, 
            armor.chainmail
        ],
        [
            spells.healingWord, 
            spells.sacredFlame, 
            spells.bless
        ],
        [
            new Action('Ricardo', 'Mace', 0, 4, 'attack'),
            new Action('Ricardo', 'Healing Word', 0, 5, 'heal'),
            new Action('Ricardo', 'Sacred Flame', 0, 40, 'attack'),
            new Action('Ricardo', 'Bless', 0, 5, 'heal')
        ]
    )
];