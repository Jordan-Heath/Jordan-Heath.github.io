const rarity = ['coin', 'common', 'uncommon', 'rare', 'epic', 'legendary'];
const rarityColor = ['gray', 'white', 'green', 'blue', 'purple', 'gold'];

//monsters can do jobs based on their skills
const skills = ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'];
const skillsReadable = ['HP', 'Att', 'Def', 'Sp.Att', 'Sp.Def', 'Spe',]
//their performance is indicated by their aptitude (1/2 | 3/4 | 5/6 | 7/8 | 9/10)
const aptitudes = ['Poor', 'Average', 'Good', 'Great', 'Excellent', 'Amazing', 'Godly'];

const shinySkillMultiplier = 3;

const data = {
    //#region Monsters
    "monsters": [
        {
            "ID": 1,
            "name": "Bulbasaur",
            "image": "bulbasaur.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Ivysaur"
            ],
            "types": [
                "Grass",
                "Poison"
            ],
            "skills": {
                "HP": 45,
                "Attack": 49,
                "Defense": 49,
                "Special Attack": 65,
                "Special Defense": 65,
                "Speed": 45
            },
            "owned": false,
            "count": 0,
            "shiny": false,
            "element": null
        },
        {
            "ID": 2,
            "name": "Ivysaur",
            "image": "ivysaur.png",
            "rarity": rarity[3],
            "evolvesTo": [
                "Venusaur"
            ],
            "types": [
                "Grass",
                "Poison"
            ],
            "skills": {
                "HP": 60,
                "Attack": 62,
                "Defense": 63,
                "Special Attack": 80,
                "Special Defense": 80,
                "Speed": 60
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 3,
            "name": "Venusaur",
            "image": "venusaur.png",
            "rarity": rarity[4],
            "evolvesTo": [],
            "types": [
                "Grass",
                "Poison"
            ],
            "skills": {
                "HP": 80,
                "Attack": 82,
                "Defense": 83,
                "Special Attack": 100,
                "Special Defense": 100,
                "Speed": 80
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 4,
            "name": "Charmander",
            "image": "charmander.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Charmeleon"
            ],
            "types": [
                "Fire"
            ],
            "skills": {
                "HP": 39,
                "Attack": 52,
                "Defense": 43,
                "Special Attack": 60,
                "Special Defense": 50,
                "Speed": 65
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 5,
            "name": "Charmeleon",
            "image": "charmeleon.png",
            "rarity": rarity[3],
            "evolvesTo": [
                "Charizard"
            ],
            "types": [
                "Fire"
            ],
            "skills": {
                "HP": 58,
                "Attack": 64,
                "Defense": 58,
                "Special Attack": 80,
                "Special Defense": 65,
                "Speed": 80
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 6,
            "name": "Charizard",
            "image": "charizard.png",
            "rarity": rarity[4],
            "evolvesTo": [],
            "types": [
                "Fire",
                "Flying"
            ],
            "skills": {
                "HP": 78,
                "Attack": 84,
                "Defense": 78,
                "Special Attack": 109,
                "Special Defense": 85,
                "Speed": 100
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 7,
            "name": "Squirtle",
            "image": "squirtle.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Wartortle"
            ],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 44,
                "Attack": 48,
                "Defense": 65,
                "Special Attack": 50,
                "Special Defense": 64,
                "Speed": 43
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 8,
            "name": "Wartortle",
            "image": "wartortle.png",
            "rarity": rarity[3],
            "evolvesTo": [
                "Blastoise"
            ],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 59,
                "Attack": 63,
                "Defense": 80,
                "Special Attack": 65,
                "Special Defense": 80,
                "Speed": 58
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 9,
            "name": "Blastoise",
            "image": "blastoise.png",
            "rarity": rarity[4],
            "evolvesTo": [],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 79,
                "Attack": 83,
                "Defense": 100,
                "Special Attack": 85,
                "Special Defense": 105,
                "Speed": 78
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 10,
            "name": "Caterpie",
            "image": "caterpie.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Metapod"
            ],
            "types": [
                "Bug"
            ],
            "skills": {
                "HP": 45,
                "Attack": 30,
                "Defense": 35,
                "Special Attack": 20,
                "Special Defense": 20,
                "Speed": 45
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 11,
            "name": "Metapod",
            "image": "metapod.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Butterfree"
            ],
            "types": [
                "Bug"
            ],
            "skills": {
                "HP": 50,
                "Attack": 20,
                "Defense": 55,
                "Special Attack": 25,
                "Special Defense": 25,
                "Speed": 30
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 12,
            "name": "Butterfree",
            "image": "butterfree.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Bug",
                "Flying"
            ],
            "skills": {
                "HP": 60,
                "Attack": 45,
                "Defense": 50,
                "Special Attack": 90,
                "Special Defense": 80,
                "Speed": 70
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 13,
            "name": "Weedle",
            "image": "weedle.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Kakuna"
            ],
            "types": [
                "Bug",
                "Poison"
            ],
            "skills": {
                "HP": 40,
                "Attack": 35,
                "Defense": 30,
                "Special Attack": 20,
                "Special Defense": 20,
                "Speed": 50
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 14,
            "name": "Kakuna",
            "image": "kakuna.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Beedrill"
            ],
            "types": [
                "Bug",
                "Poison"
            ],
            "skills": {
                "HP": 45,
                "Attack": 25,
                "Defense": 50,
                "Special Attack": 25,
                "Special Defense": 25,
                "Speed": 35
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 15,
            "name": "Beedrill",
            "image": "beedrill.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Bug",
                "Poison"
            ],
            "skills": {
                "HP": 65,
                "Attack": 90,
                "Defense": 40,
                "Special Attack": 45,
                "Special Defense": 80,
                "Speed": 75
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 16,
            "name": "Pidgey",
            "image": "pidgey.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Pidgeotto"
            ],
            "types": [
                "Normal",
                "Flying"
            ],
            "skills": {
                "HP": 40,
                "Attack": 45,
                "Defense": 40,
                "Special Attack": 35,
                "Special Defense": 35,
                "Speed": 56
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 17,
            "name": "Pidgeotto",
            "image": "pidgeotto.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Pidgeot"
            ],
            "types": [
                "Normal",
                "Flying"
            ],
            "skills": {
                "HP": 63,
                "Attack": 60,
                "Defense": 55,
                "Special Attack": 50,
                "Special Defense": 50,
                "Speed": 71
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 18,
            "name": "Pidgeot",
            "image": "pidgeot.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Normal",
                "Flying"
            ],
            "skills": {
                "HP": 83,
                "Attack": 80,
                "Defense": 75,
                "Special Attack": 70,
                "Special Defense": 70,
                "Speed": 101
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 19,
            "name": "Rattata",
            "image": "rattata.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Raticate"
            ],
            "types": [
                "Normal"
            ],
            "skills": {
                "HP": 30,
                "Attack": 56,
                "Defense": 35,
                "Special Attack": 25,
                "Special Defense": 35,
                "Speed": 72
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 20,
            "name": "Raticate",
            "image": "raticate.png",
            "rarity": rarity[2],
            "evolvesTo": [],
            "types": [
                "Normal"
            ],
            "skills": {
                "HP": 55,
                "Attack": 81,
                "Defense": 60,
                "Special Attack": 50,
                "Special Defense": 70,
                "Speed": 97
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 21,
            "name": "Spearow",
            "image": "spearow.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Fearow"
            ],
            "types": [
                "Normal",
                "Flying"
            ],
            "skills": {
                "HP": 40,
                "Attack": 60,
                "Defense": 30,
                "Special Attack": 31,
                "Special Defense": 31,
                "Speed": 70
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 22,
            "name": "Fearow",
            "image": "fearow.png",
            "rarity": rarity[2],
            "evolvesTo": [],
            "types": [
                "Normal",
                "Flying"
            ],
            "skills": {
                "HP": 65,
                "Attack": 90,
                "Defense": 65,
                "Special Attack": 61,
                "Special Defense": 61,
                "Speed": 100
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 23,
            "name": "Ekans",
            "image": "ekans.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Arbok"
            ],
            "types": [
                "Poison"
            ],
            "skills": {
                "HP": 35,
                "Attack": 60,
                "Defense": 44,
                "Special Attack": 40,
                "Special Defense": 54,
                "Speed": 55
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 24,
            "name": "Arbok",
            "image": "arbok.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Poison"
            ],
            "skills": {
                "HP": 60,
                "Attack": 95,
                "Defense": 69,
                "Special Attack": 65,
                "Special Defense": 79,
                "Speed": 80
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 25,
            "name": "Pikachu",
            "image": "pikachu.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Raichu",
                // "Raichu-Alola"
            ],
            "types": [
                "Electric"
            ],
            "skills": {
                "HP": 35,
                "Attack": 55,
                "Defense": 40,
                "Special Attack": 50,
                "Special Defense": 50,
                "Speed": 90
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 26,
            "name": "Raichu",
            "image": "raichu.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Electric"
            ],
            "skills": {
                "HP": 60,
                "Attack": 90,
                "Defense": 55,
                "Special Attack": 90,
                "Special Defense": 80,
                "Speed": 110
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 27,
            "name": "Sandshrew",
            "image": "sandshrew.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Sandslash"
            ],
            "types": [
                "Ground"
            ],
            "skills": {
                "HP": 50,
                "Attack": 75,
                "Defense": 85,
                "Special Attack": 20,
                "Special Defense": 30,
                "Speed": 40
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 28,
            "name": "Sandslash",
            "image": "sandslash.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Ground"
            ],
            "skills": {
                "HP": 75,
                "Attack": 100,
                "Defense": 110,
                "Special Attack": 45,
                "Special Defense": 55,
                "Speed": 65
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 29,
            "name": "Nidoran-F",
            "image": "nidoran-f.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Nidorina"
            ],
            "types": [
                "Poison"
            ],
            "skills": {
                "HP": 55,
                "Attack": 47,
                "Defense": 52,
                "Special Attack": 40,
                "Special Defense": 40,
                "Speed": 41
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 30,
            "name": "Nidorina",
            "image": "nidorina.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Nidoqueen"
            ],
            "types": [
                "Poison"
            ],
            "skills": {
                "HP": 70,
                "Attack": 62,
                "Defense": 67,
                "Special Attack": 55,
                "Special Defense": 55,
                "Speed": 56
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 31,
            "name": "Nidoqueen",
            "image": "nidoqueen.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Poison",
                "Ground"
            ],
            "skills": {
                "HP": 90,
                "Attack": 92,
                "Defense": 87,
                "Special Attack": 75,
                "Special Defense": 85,
                "Speed": 76
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 32,
            "name": "Nidoran-M",
            "image": "nidoran-m.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Nidorino"
            ],
            "types": [
                "Poison"
            ],
            "skills": {
                "HP": 46,
                "Attack": 57,
                "Defense": 40,
                "Special Attack": 40,
                "Special Defense": 40,
                "Speed": 50
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 33,
            "name": "Nidorino",
            "image": "nidorino.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Nidoking"
            ],
            "types": [
                "Poison"
            ],
            "skills": {
                "HP": 61,
                "Attack": 72,
                "Defense": 57,
                "Special Attack": 55,
                "Special Defense": 55,
                "Speed": 65
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 34,
            "name": "Nidoking",
            "image": "nidoking.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Poison",
                "Ground"
            ],
            "skills": {
                "HP": 81,
                "Attack": 102,
                "Defense": 77,
                "Special Attack": 85,
                "Special Defense": 75,
                "Speed": 85
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 35,
            "name": "Clefairy",
            "image": "clefairy.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Clefable"
            ],
            "types": [
                "Fairy"
            ],
            "skills": {
                "HP": 70,
                "Attack": 45,
                "Defense": 48,
                "Special Attack": 60,
                "Special Defense": 65,
                "Speed": 35
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 36,
            "name": "Clefable",
            "image": "clefable.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Fairy"
            ],
            "skills": {
                "HP": 95,
                "Attack": 70,
                "Defense": 73,
                "Special Attack": 95,
                "Special Defense": 90,
                "Speed": 60
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 37,
            "name": "Vulpix",
            "image": "vulpix.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Ninetales"
            ],
            "types": [
                "Fire"
            ],
            "skills": {
                "HP": 38,
                "Attack": 41,
                "Defense": 40,
                "Special Attack": 50,
                "Special Defense": 65,
                "Speed": 65
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 38,
            "name": "Ninetales",
            "image": "ninetales.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Fire"
            ],
            "skills": {
                "HP": 73,
                "Attack": 76,
                "Defense": 75,
                "Special Attack": 81,
                "Special Defense": 100,
                "Speed": 100
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 39,
            "name": "Jigglypuff",
            "image": "jigglypuff.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Wigglytuff"
            ],
            "types": [
                "Normal",
                "Fairy"
            ],
            "skills": {
                "HP": 115,
                "Attack": 45,
                "Defense": 20,
                "Special Attack": 45,
                "Special Defense": 25,
                "Speed": 20
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 40,
            "name": "Wigglytuff",
            "image": "wigglytuff.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Normal",
                "Fairy"
            ],
            "skills": {
                "HP": 140,
                "Attack": 70,
                "Defense": 45,
                "Special Attack": 85,
                "Special Defense": 50,
                "Speed": 45
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 41,
            "name": "Zubat",
            "image": "zubat.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Golbat"
            ],
            "types": [
                "Poison",
                "Flying"
            ],
            "skills": {
                "HP": 40,
                "Attack": 45,
                "Defense": 35,
                "Special Attack": 30,
                "Special Defense": 40,
                "Speed": 55
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 42,
            "name": "Golbat",
            "image": "golbat.png",
            "rarity": rarity[2],
            "evolvesTo": [
                // "Crobat"
            ],
            "types": [
                "Poison",
                "Flying"
            ],
            "skills": {
                "HP": 75,
                "Attack": 80,
                "Defense": 70,
                "Special Attack": 65,
                "Special Defense": 75,
                "Speed": 90
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 43,
            "name": "Oddish",
            "image": "oddish.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Gloom"
            ],
            "types": [
                "Grass",
                "Poison"
            ],
            "skills": {
                "HP": 45,
                "Attack": 50,
                "Defense": 55,
                "Special Attack": 75,
                "Special Defense": 65,
                "Speed": 30
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 44,
            "name": "Gloom",
            "image": "gloom.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Vileplume",
                // "Bellossom"
            ],
            "types": [
                "Grass",
                "Poison"
            ],
            "skills": {
                "HP": 60,
                "Attack": 65,
                "Defense": 70,
                "Special Attack": 85,
                "Special Defense": 75,
                "Speed": 40
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 45,
            "name": "Vileplume",
            "image": "vileplume.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Grass",
                "Poison"
            ],
            "skills": {
                "HP": 75,
                "Attack": 80,
                "Defense": 85,
                "Special Attack": 110,
                "Special Defense": 90,
                "Speed": 50
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 46,
            "name": "Paras",
            "image": "paras.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Parasect"
            ],
            "types": [
                "Bug",
                "Grass"
            ],
            "skills": {
                "HP": 35,
                "Attack": 70,
                "Defense": 55,
                "Special Attack": 45,
                "Special Defense": 55,
                "Speed": 25
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 47,
            "name": "Parasect",
            "image": "parasect.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Bug",
                "Grass"
            ],
            "skills": {
                "HP": 60,
                "Attack": 95,
                "Defense": 80,
                "Special Attack": 60,
                "Special Defense": 80,
                "Speed": 30
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 48,
            "name": "Venonat",
            "image": "venonat.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Venomoth"
            ],
            "types": [
                "Bug",
                "Poison"
            ],
            "skills": {
                "HP": 60,
                "Attack": 55,
                "Defense": 50,
                "Special Attack": 40,
                "Special Defense": 55,
                "Speed": 45
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 49,
            "name": "Venomoth",
            "image": "venomoth.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Bug",
                "Poison"
            ],
            "skills": {
                "HP": 70,
                "Attack": 65,
                "Defense": 60,
                "Special Attack": 90,
                "Special Defense": 75,
                "Speed": 90
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 50,
            "name": "Diglett",
            "image": "diglett.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Dugtrio"
            ],
            "types": [
                "Ground"
            ],
            "skills": {
                "HP": 10,
                "Attack": 55,
                "Defense": 25,
                "Special Attack": 35,
                "Special Defense": 45,
                "Speed": 95
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 51,
            "name": "Dugtrio",
            "image": "dugtrio.png",
            "rarity": rarity[2],
            "evolvesTo": [],
            "types": [
                "Ground"
            ],
            "skills": {
                "HP": 35,
                "Attack": 100,
                "Defense": 50,
                "Special Attack": 50,
                "Special Defense": 70,
                "Speed": 120
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 52,
            "name": "Meowth",
            "image": "meowth.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Persian"
            ],
            "types": [
                "Normal"
            ],
            "skills": {
                "HP": 40,
                "Attack": 45,
                "Defense": 35,
                "Special Attack": 40,
                "Special Defense": 40,
                "Speed": 90
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 53,
            "name": "Persian",
            "image": "persian.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Normal"
            ],
            "skills": {
                "HP": 65,
                "Attack": 70,
                "Defense": 60,
                "Special Attack": 65,
                "Special Defense": 65,
                "Speed": 115
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 54,
            "name": "Psyduck",
            "image": "psyduck.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Golduck"
            ],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 50,
                "Attack": 52,
                "Defense": 48,
                "Special Attack": 65,
                "Special Defense": 50,
                "Speed": 55
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 55,
            "name": "Golduck",
            "image": "golduck.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 80,
                "Attack": 82,
                "Defense": 78,
                "Special Attack": 95,
                "Special Defense": 80,
                "Speed": 85
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 56,
            "name": "Mankey",
            "image": "mankey.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Primeape"
            ],
            "types": [
                "Fighting"
            ],
            "skills": {
                "HP": 40,
                "Attack": 80,
                "Defense": 35,
                "Special Attack": 35,
                "Special Defense": 45,
                "Speed": 70
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 57,
            "name": "Primeape",
            "image": "primeape.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Fighting"
            ],
            "skills": {
                "HP": 65,
                "Attack": 105,
                "Defense": 60,
                "Special Attack": 60,
                "Special Defense": 70,
                "Speed": 95
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 58,
            "name": "Growlithe",
            "image": "growlithe.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Arcanine"
            ],
            "types": [
                "Fire"
            ],
            "skills": {
                "HP": 55,
                "Attack": 70,
                "Defense": 45,
                "Special Attack": 70,
                "Special Defense": 50,
                "Speed": 60
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 59,
            "name": "Arcanine",
            "image": "arcanine.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Fire"
            ],
            "skills": {
                "HP": 90,
                "Attack": 110,
                "Defense": 80,
                "Special Attack": 100,
                "Special Defense": 80,
                "Speed": 95
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 60,
            "name": "Poliwag",
            "image": "poliwag.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Poliwhirl"
            ],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 40,
                "Attack": 50,
                "Defense": 40,
                "Special Attack": 40,
                "Special Defense": 40,
                "Speed": 90
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 61,
            "name": "Poliwhirl",
            "image": "poliwhirl.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Poliwrath",
                // "Politoed"
            ],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 65,
                "Attack": 65,
                "Defense": 65,
                "Special Attack": 50,
                "Special Defense": 50,
                "Speed": 90
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 62,
            "name": "Poliwrath",
            "image": "poliwrath.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Water",
                "Fighting"
            ],
            "skills": {
                "HP": 90,
                "Attack": 95,
                "Defense": 95,
                "Special Attack": 70,
                "Special Defense": 90,
                "Speed": 70
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 63,
            "name": "Abra",
            "image": "abra.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Kadabra"
            ],
            "types": [
                "Psychic"
            ],
            "skills": {
                "HP": 25,
                "Attack": 20,
                "Defense": 15,
                "Special Attack": 105,
                "Special Defense": 55,
                "Speed": 90
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 64,
            "name": "Kadabra",
            "image": "kadabra.png",
            "rarity": rarity[3],
            "evolvesTo": [
                "Alakazam"
            ],
            "types": [
                "Psychic"
            ],
            "skills": {
                "HP": 40,
                "Attack": 35,
                "Defense": 30,
                "Special Attack": 120,
                "Special Defense": 70,
                "Speed": 105
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 65,
            "name": "Alakazam",
            "image": "alakazam.png",
            "rarity": rarity[4],
            "evolvesTo": [],
            "types": [
                "Psychic"
            ],
            "skills": {
                "HP": 55,
                "Attack": 50,
                "Defense": 45,
                "Special Attack": 135,
                "Special Defense": 95,
                "Speed": 120
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 66,
            "name": "Machop",
            "image": "machop.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Machoke"
            ],
            "types": [
                "Fighting"
            ],
            "skills": {
                "HP": 70,
                "Attack": 80,
                "Defense": 50,
                "Special Attack": 35,
                "Special Defense": 35,
                "Speed": 35
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 67,
            "name": "Machoke",
            "image": "machoke.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Machamp"
            ],
            "types": [
                "Fighting"
            ],
            "skills": {
                "HP": 80,
                "Attack": 100,
                "Defense": 70,
                "Special Attack": 50,
                "Special Defense": 60,
                "Speed": 45
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 68,
            "name": "Machamp",
            "image": "machamp.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Fighting"
            ],
            "skills": {
                "HP": 90,
                "Attack": 130,
                "Defense": 80,
                "Special Attack": 65,
                "Special Defense": 85,
                "Speed": 55
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 69,
            "name": "Bellsprout",
            "image": "bellsprout.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Weepinbell"
            ],
            "types": [
                "Grass",
                "Poison"
            ],
            "skills": {
                "HP": 50,
                "Attack": 75,
                "Defense": 35,
                "Special Attack": 70,
                "Special Defense": 30,
                "Speed": 40
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 70,
            "name": "Weepinbell",
            "image": "weepinbell.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Victreebel"
            ],
            "types": [
                "Grass",
                "Poison"
            ],
            "skills": {
                "HP": 65,
                "Attack": 90,
                "Defense": 50,
                "Special Attack": 85,
                "Special Defense": 45,
                "Speed": 55
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 71,
            "name": "Victreebel",
            "image": "victreebel.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Grass",
                "Poison"
            ],
            "skills": {
                "HP": 80,
                "Attack": 105,
                "Defense": 65,
                "Special Attack": 100,
                "Special Defense": 70,
                "Speed": 70
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 72,
            "name": "Tentacool",
            "image": "tentacool.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Tentacruel"
            ],
            "types": [
                "Water",
                "Poison"
            ],
            "skills": {
                "HP": 40,
                "Attack": 40,
                "Defense": 35,
                "Special Attack": 50,
                "Special Defense": 100,
                "Speed": 70
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 73,
            "name": "Tentacruel",
            "image": "tentacruel.png",
            "rarity": rarity[2],
            "evolvesTo": [],
            "types": [
                "Water",
                "Poison"
            ],
            "skills": {
                "HP": 80,
                "Attack": 70,
                "Defense": 65,
                "Special Attack": 80,
                "Special Defense": 120,
                "Speed": 100
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 74,
            "name": "Geodude",
            "image": "geodude.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Graveler"
            ],
            "types": [
                "Rock",
                "Ground"
            ],
            "skills": {
                "HP": 40,
                "Attack": 80,
                "Defense": 100,
                "Special Attack": 30,
                "Special Defense": 30,
                "Speed": 20
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 75,
            "name": "Graveler",
            "image": "graveler.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Golem"
            ],
            "types": [
                "Rock",
                "Ground"
            ],
            "skills": {
                "HP": 55,
                "Attack": 95,
                "Defense": 115,
                "Special Attack": 45,
                "Special Defense": 45,
                "Speed": 35
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 76,
            "name": "Golem",
            "image": "golem.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Rock",
                "Ground"
            ],
            "skills": {
                "HP": 80,
                "Attack": 120,
                "Defense": 130,
                "Special Attack": 55,
                "Special Defense": 65,
                "Speed": 45
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 77,
            "name": "Ponyta",
            "image": "ponyta.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Rapidash"
            ],
            "types": [
                "Fire"
            ],
            "skills": {
                "HP": 50,
                "Attack": 85,
                "Defense": 55,
                "Special Attack": 65,
                "Special Defense": 65,
                "Speed": 90
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 78,
            "name": "Rapidash",
            "image": "rapidash.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Fire"
            ],
            "skills": {
                "HP": 65,
                "Attack": 100,
                "Defense": 70,
                "Special Attack": 80,
                "Special Defense": 80,
                "Speed": 105
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 79,
            "name": "Slowpoke",
            "image": "slowpoke.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Slowbro"
            ],
            "types": [
                "Water",
                "Psychic"
            ],
            "skills": {
                "HP": 90,
                "Attack": 65,
                "Defense": 65,
                "Special Attack": 40,
                "Special Defense": 40,
                "Speed": 15
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 80,
            "name": "Slowbro",
            "image": "slowbro.png",
            "rarity": rarity[2],
            "evolvesTo": [],
            "types": [
                "Water",
                "Psychic"
            ],
            "skills": {
                "HP": 95,
                "Attack": 75,
                "Defense": 110,
                "Special Attack": 100,
                "Special Defense": 80,
                "Speed": 30
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 81,
            "name": "Magnemite",
            "image": "magnemite.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Magneton"
            ],
            "types": [
                "Electric",
                "Steel"
            ],
            "skills": {
                "HP": 25,
                "Attack": 35,
                "Defense": 70,
                "Special Attack": 95,
                "Special Defense": 55,
                "Speed": 45
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 82,
            "name": "Magneton",
            "image": "magneton.png",
            "rarity": rarity[2],
            "evolvesTo": [
                // "Magnezone"
            ],
            "types": [
                "Electric",
                "Steel"
            ],
            "skills": {
                "HP": 50,
                "Attack": 60,
                "Defense": 95,
                "Special Attack": 120,
                "Special Defense": 70,
                "Speed": 70
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 83,
            "name": "Farfetch'd",
            "image": "farfetchd.png",
            "rarity": rarity[2],
            "evolvesTo": [],
            "types": [
                "Normal",
                "Flying"
            ],
            "skills": {
                "HP": 52,
                "Attack": 90,
                "Defense": 55,
                "Special Attack": 58,
                "Special Defense": 62,
                "Speed": 60
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 84,
            "name": "Doduo",
            "image": "doduo.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Dodrio"
            ],
            "types": [
                "Normal",
                "Flying"
            ],
            "skills": {
                "HP": 35,
                "Attack": 85,
                "Defense": 45,
                "Special Attack": 35,
                "Special Defense": 35,
                "Speed": 75
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 85,
            "name": "Dodrio",
            "image": "dodrio.png",
            "rarity": rarity[2],
            "evolvesTo": [],
            "types": [
                "Normal",
                "Flying"
            ],
            "skills": {
                "HP": 60,
                "Attack": 110,
                "Defense": 70,
                "Special Attack": 60,
                "Special Defense": 60,
                "Speed": 110
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 86,
            "name": "Seel",
            "image": "seel.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Dewgong"
            ],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 65,
                "Attack": 45,
                "Defense": 55,
                "Special Attack": 45,
                "Special Defense": 70,
                "Speed": 45
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 87,
            "name": "Dewgong",
            "image": "dewgong.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Water",
                "Ice"
            ],
            "skills": {
                "HP": 90,
                "Attack": 70,
                "Defense": 80,
                "Special Attack": 70,
                "Special Defense": 95,
                "Speed": 70
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 88,
            "name": "Grimer",
            "image": "grimer.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Muk"
            ],
            "types": [
                "Poison"
            ],
            "skills": {
                "HP": 80,
                "Attack": 80,
                "Defense": 50,
                "Special Attack": 40,
                "Special Defense": 50,
                "Speed": 25
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 89,
            "name": "Muk",
            "image": "muk.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Poison"
            ],
            "skills": {
                "HP": 105,
                "Attack": 105,
                "Defense": 75,
                "Special Attack": 65,
                "Special Defense": 100,
                "Speed": 50
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 90,
            "name": "Shellder",
            "image": "shellder.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Cloyster"
            ],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 30,
                "Attack": 65,
                "Defense": 100,
                "Special Attack": 45,
                "Special Defense": 25,
                "Speed": 40
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 91,
            "name": "Cloyster",
            "image": "cloyster.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Water",
                "Ice"
            ],
            "skills": {
                "HP": 50,
                "Attack": 95,
                "Defense": 180,
                "Special Attack": 85,
                "Special Defense": 45,
                "Speed": 70
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 92,
            "name": "Gastly",
            "image": "gastly.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Haunter"
            ],
            "types": [
                "Ghost",
                "Poison"
            ],
            "skills": {
                "HP": 30,
                "Attack": 35,
                "Defense": 30,
                "Special Attack": 100,
                "Special Defense": 35,
                "Speed": 80
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 93,
            "name": "Haunter",
            "image": "haunter.png",
            "rarity": rarity[3],
            "evolvesTo": [
                "Gengar"
            ],
            "types": [
                "Ghost",
                "Poison"
            ],
            "skills": {
                "HP": 45,
                "Attack": 50,
                "Defense": 45,
                "Special Attack": 115,
                "Special Defense": 55,
                "Speed": 95
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 94,
            "name": "Gengar",
            "image": "gengar.png",
            "rarity": rarity[4],
            "evolvesTo": [],
            "types": [
                "Ghost",
                "Poison"
            ],
            "skills": {
                "HP": 60,
                "Attack": 65,
                "Defense": 60,
                "Special Attack": 130,
                "Special Defense": 75,
                "Speed": 110
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 95,
            "name": "Onix",
            "image": "onix.png",
            "rarity": rarity[2],
            "evolvesTo": [
                // "Steelix"
            ],
            "types": [
                "Rock",
                "Ground"
            ],
            "skills": {
                "HP": 35,
                "Attack": 45,
                "Defense": 160,
                "Special Attack": 30,
                "Special Defense": 45,
                "Speed": 70
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 96,
            "name": "Drowzee",
            "image": "drowzee.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Hypno"
            ],
            "types": [
                "Psychic"
            ],
            "skills": {
                "HP": 60,
                "Attack": 48,
                "Defense": 45,
                "Special Attack": 43,
                "Special Defense": 90,
                "Speed": 42
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 97,
            "name": "Hypno",
            "image": "hypno.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Psychic"
            ],
            "skills": {
                "HP": 85,
                "Attack": 73,
                "Defense": 70,
                "Special Attack": 73,
                "Special Defense": 115,
                "Speed": 67
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 98,
            "name": "Krabby",
            "image": "krabby.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Kingler"
            ],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 30,
                "Attack": 105,
                "Defense": 90,
                "Special Attack": 25,
                "Special Defense": 25,
                "Speed": 50
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 99,
            "name": "Kingler",
            "image": "kingler.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 55,
                "Attack": 130,
                "Defense": 115,
                "Special Attack": 50,
                "Special Defense": 50,
                "Speed": 75
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 100,
            "name": "Voltorb",
            "image": "voltorb.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Electrode"
            ],
            "types": [
                "Electric"
            ],
            "skills": {
                "HP": 40,
                "Attack": 30,
                "Defense": 50,
                "Special Attack": 55,
                "Special Defense": 55,
                "Speed": 100
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 101,
            "name": "Electrode",
            "image": "electrode.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Electric"
            ],
            "skills": {
                "HP": 60,
                "Attack": 50,
                "Defense": 70,
                "Special Attack": 80,
                "Special Defense": 80,
                "Speed": 150
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 102,
            "name": "Exeggcute",
            "image": "exeggcute.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Exeggutor",
                // "Exeggutor-Alola"
            ],
            "types": [
                "Grass",
                "Psychic"
            ],
            "skills": {
                "HP": 60,
                "Attack": 40,
                "Defense": 80,
                "Special Attack": 60,
                "Special Defense": 45,
                "Speed": 40
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 103,
            "name": "Exeggutor",
            "image": "exeggutor.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Grass",
                "Psychic"
            ],
            "skills": {
                "HP": 95,
                "Attack": 95,
                "Defense": 85,
                "Special Attack": 125,
                "Special Defense": 75,
                "Speed": 55
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 104,
            "name": "Cubone",
            "image": "cubone.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Marowak",
                // "Marowak-Alola"
            ],
            "types": [
                "Ground"
            ],
            "skills": {
                "HP": 50,
                "Attack": 50,
                "Defense": 95,
                "Special Attack": 40,
                "Special Defense": 50,
                "Speed": 35
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 105,
            "name": "Marowak",
            "image": "marowak.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Ground"
            ],
            "skills": {
                "HP": 60,
                "Attack": 80,
                "Defense": 110,
                "Special Attack": 50,
                "Special Defense": 80,
                "Speed": 45
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 106,
            "name": "Hitmonlee",
            "image": "hitmonlee.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Fighting"
            ],
            "skills": {
                "HP": 50,
                "Attack": 120,
                "Defense": 53,
                "Special Attack": 35,
                "Special Defense": 110,
                "Speed": 87
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 107,
            "name": "Hitmonchan",
            "image": "hitmonchan.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Fighting"
            ],
            "skills": {
                "HP": 50,
                "Attack": 105,
                "Defense": 79,
                "Special Attack": 35,
                "Special Defense": 110,
                "Speed": 76
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 108,
            "name": "Lickitung",
            "image": "lickitung.png",
            "rarity": rarity[3],
            "evolvesTo": [
                // "Lickilicky"
            ],
            "types": [
                "Normal"
            ],
            "skills": {
                "HP": 90,
                "Attack": 55,
                "Defense": 75,
                "Special Attack": 60,
                "Special Defense": 75,
                "Speed": 30
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 109,
            "name": "Koffing",
            "image": "koffing.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Weezing",
                // "Weezing-Galar"
            ],
            "types": [
                "Poison"
            ],
            "skills": {
                "HP": 40,
                "Attack": 65,
                "Defense": 95,
                "Special Attack": 60,
                "Special Defense": 45,
                "Speed": 35
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 110,
            "name": "Weezing",
            "image": "weezing.png",
            "rarity": rarity[2],
            "evolvesTo": [],
            "types": [
                "Poison"
            ],
            "skills": {
                "HP": 65,
                "Attack": 90,
                "Defense": 120,
                "Special Attack": 85,
                "Special Defense": 70,
                "Speed": 60
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 111,
            "name": "Rhyhorn",
            "image": "rhyhorn.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Rhydon"
            ],
            "types": [
                "Ground",
                "Rock"
            ],
            "skills": {
                "HP": 80,
                "Attack": 85,
                "Defense": 95,
                "Special Attack": 30,
                "Special Defense": 30,
                "Speed": 25
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 112,
            "name": "Rhydon",
            "image": "rhydon.png",
            "rarity": rarity[3],
            "evolvesTo": [
                // "Rhyperior"
            ],
            "types": [
                "Ground",
                "Rock"
            ],
            "skills": {
                "HP": 105,
                "Attack": 130,
                "Defense": 120,
                "Special Attack": 45,
                "Special Defense": 45,
                "Speed": 40
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 113,
            "name": "Chansey",
            "image": "chansey.png",
            "rarity": rarity[3],
            "evolvesTo": [
                // "Blissey"
            ],
            "types": [
                "Normal"
            ],
            "skills": {
                "HP": 250,
                "Attack": 5,
                "Defense": 5,
                "Special Attack": 35,
                "Special Defense": 105,
                "Speed": 50
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 114,
            "name": "Tangela",
            "image": "tangela.png",
            "rarity": rarity[3],
            "evolvesTo": [
                // "Tangrowth"
            ],
            "types": [
                "Grass"
            ],
            "skills": {
                "HP": 65,
                "Attack": 55,
                "Defense": 115,
                "Special Attack": 100,
                "Special Defense": 40,
                "Speed": 60
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 115,
            "name": "Kangaskhan",
            "image": "kangaskhan.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Normal"
            ],
            "skills": {
                "HP": 105,
                "Attack": 95,
                "Defense": 80,
                "Special Attack": 40,
                "Special Defense": 80,
                "Speed": 90
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 116,
            "name": "Horsea",
            "image": "horsea.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Seadra"
            ],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 30,
                "Attack": 40,
                "Defense": 70,
                "Special Attack": 70,
                "Special Defense": 25,
                "Speed": 60
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 117,
            "name": "Seadra",
            "image": "seadra.png",
            "rarity": rarity[3],
            "evolvesTo": [
                // "Kingdra"
            ],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 55,
                "Attack": 65,
                "Defense": 95,
                "Special Attack": 95,
                "Special Defense": 45,
                "Speed": 85
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 118,
            "name": "Goldeen",
            "image": "goldeen.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Seaking"
            ],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 45,
                "Attack": 67,
                "Defense": 60,
                "Special Attack": 35,
                "Special Defense": 50,
                "Speed": 63
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 119,
            "name": "Seaking",
            "image": "seaking.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 80,
                "Attack": 92,
                "Defense": 65,
                "Special Attack": 65,
                "Special Defense": 80,
                "Speed": 68
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 120,
            "name": "Staryu",
            "image": "staryu.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Starmie"
            ],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 30,
                "Attack": 45,
                "Defense": 55,
                "Special Attack": 70,
                "Special Defense": 55,
                "Speed": 85
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 121,
            "name": "Starmie",
            "image": "starmie.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 60,
                "Attack": 75,
                "Defense": 85,
                "Special Attack": 100,
                "Special Defense": 85,
                "Speed": 115
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 122,
            "name": "Mr. Mime",
            "image": "mr-mime.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Psychic",
                "Fairy"
            ],
            "skills": {
                "HP": 40,
                "Attack": 45,
                "Defense": 65,
                "Special Attack": 100,
                "Special Defense": 120,
                "Speed": 90
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 123,
            "name": "Scyther",
            "image": "scyther.png",
            "rarity": rarity[3],
            "evolvesTo": [
                // "Scizor"
            ],
            "types": [
                "Bug",
                "Flying"
            ],
            "skills": {
                "HP": 70,
                "Attack": 110,
                "Defense": 80,
                "Special Attack": 55,
                "Special Defense": 80,
                "Speed": 105
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 124,
            "name": "Jynx",
            "image": "jynx.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Ice",
                "Psychic"
            ],
            "skills": {
                "HP": 65,
                "Attack": 50,
                "Defense": 35,
                "Special Attack": 115,
                "Special Defense": 95,
                "Speed": 95
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 125,
            "name": "Electabuzz",
            "image": "electabuzz.png",
            "rarity": rarity[3],
            "evolvesTo": [
                // "Electivire"
            ],
            "types": [
                "Electric"
            ],
            "skills": {
                "HP": 65,
                "Attack": 83,
                "Defense": 57,
                "Special Attack": 95,
                "Special Defense": 85,
                "Speed": 105
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 126,
            "name": "Magmar",
            "image": "magmar.png",
            "rarity": rarity[3],
            "evolvesTo": [
                // "Magmortar"
            ],
            "types": [
                "Fire"
            ],
            "skills": {
                "HP": 65,
                "Attack": 95,
                "Defense": 57,
                "Special Attack": 100,
                "Special Defense": 85,
                "Speed": 93
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 127,
            "name": "Pinsir",
            "image": "pinsir.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Bug"
            ],
            "skills": {
                "HP": 65,
                "Attack": 125,
                "Defense": 100,
                "Special Attack": 55,
                "Special Defense": 70,
                "Speed": 85
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 128,
            "name": "Tauros",
            "image": "tauros.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Normal"
            ],
            "skills": {
                "HP": 75,
                "Attack": 100,
                "Defense": 95,
                "Special Attack": 40,
                "Special Defense": 70,
                "Speed": 110
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 129,
            "name": "Magikarp",
            "image": "magikarp.png",
            "rarity": rarity[1],
            "evolvesTo": [
                "Gyarados"
            ],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 20,
                "Attack": 10,
                "Defense": 55,
                "Special Attack": 15,
                "Special Defense": 20,
                "Speed": 80
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 130,
            "name": "Gyarados",
            "image": "gyarados.png",
            "rarity": rarity[2],
            "evolvesTo": [],
            "types": [
                "Water",
                "Flying"
            ],
            "skills": {
                "HP": 95,
                "Attack": 125,
                "Defense": 79,
                "Special Attack": 60,
                "Special Defense": 100,
                "Speed": 81
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 131,
            "name": "Lapras",
            "image": "lapras.png",
            "rarity": rarity[4],
            "evolvesTo": [],
            "types": [
                "Water",
                "Ice"
            ],
            "skills": {
                "HP": 130,
                "Attack": 85,
                "Defense": 80,
                "Special Attack": 85,
                "Special Defense": 95,
                "Speed": 60
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 132,
            "name": "Ditto",
            "image": "ditto.png",
            "rarity": rarity[2],
            "evolvesTo": [],
            "types": [
                "Normal"
            ],
            "skills": {
                "HP": 48,
                "Attack": 48,
                "Defense": 48,
                "Special Attack": 48,
                "Special Defense": 48,
                "Speed": 48
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 133,
            "name": "Eevee",
            "image": "eevee.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Vaporeon",
                "Jolteon",
                "Flareon"
                // "Espeon",
                // "Umbreon",
                // "Leafeon",
                // "Glaceon",
                // "Sylveon"
            ],
            "types": [
                "Normal"
            ],
            "skills": {
                "HP": 55,
                "Attack": 55,
                "Defense": 50,
                "Special Attack": 45,
                "Special Defense": 65,
                "Speed": 55
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 134,
            "name": "Vaporeon",
            "image": "vaporeon.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Water"
            ],
            "skills": {
                "HP": 130,
                "Attack": 65,
                "Defense": 60,
                "Special Attack": 110,
                "Special Defense": 95,
                "Speed": 65
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 135,
            "name": "Jolteon",
            "image": "jolteon.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Electric"
            ],
            "skills": {
                "HP": 65,
                "Attack": 65,
                "Defense": 60,
                "Special Attack": 110,
                "Special Defense": 95,
                "Speed": 130
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 136,
            "name": "Flareon",
            "image": "flareon.png",
            "rarity": rarity[3],
            "evolvesTo": [],
            "types": [
                "Fire"
            ],
            "skills": {
                "HP": 65,
                "Attack": 130,
                "Defense": 60,
                "Special Attack": 95,
                "Special Defense": 110,
                "Speed": 65
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 137,
            "name": "Porygon",
            "image": "porygon.png",
            "rarity": rarity[3],
            "evolvesTo": [
                // "Porygon2"
            ],
            "types": [
                "Normal"
            ],
            "skills": {
                "HP": 65,
                "Attack": 60,
                "Defense": 70,
                "Special Attack": 85,
                "Special Defense": 75,
                "Speed": 40
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 138,
            "name": "Omanyte",
            "image": "omanyte.png",
            "rarity": rarity[3],
            "evolvesTo": [
                "Omastar"
            ],
            "types": [
                "Rock",
                "Water"
            ],
            "skills": {
                "HP": 35,
                "Attack": 40,
                "Defense": 100,
                "Special Attack": 90,
                "Special Defense": 55,
                "Speed": 35
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 139,
            "name": "Omastar",
            "image": "omastar.png",
            "rarity": rarity[4],
            "evolvesTo": [],
            "types": [
                "Rock",
                "Water"
            ],
            "skills": {
                "HP": 70,
                "Attack": 60,
                "Defense": 125,
                "Special Attack": 115,
                "Special Defense": 70,
                "Speed": 55
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 140,
            "name": "Kabuto",
            "image": "kabuto.png",
            "rarity": rarity[3],
            "evolvesTo": [
                "Kabutops"
            ],
            "types": [
                "Rock",
                "Water"
            ],
            "skills": {
                "HP": 30,
                "Attack": 80,
                "Defense": 90,
                "Special Attack": 55,
                "Special Defense": 45,
                "Speed": 55
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 141,
            "name": "Kabutops",
            "image": "kabutops.png",
            "rarity": rarity[4],
            "evolvesTo": [],
            "types": [
                "Rock",
                "Water"
            ],
            "skills": {
                "HP": 60,
                "Attack": 115,
                "Defense": 105,
                "Special Attack": 65,
                "Special Defense": 70,
                "Speed": 80
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 142,
            "name": "Aerodactyl",
            "image": "aerodactyl.png",
            "rarity": rarity[4],
            "evolvesTo": [],
            "types": [
                "Rock",
                "Flying"
            ],
            "skills": {
                "HP": 80,
                "Attack": 105,
                "Defense": 65,
                "Special Attack": 60,
                "Special Defense": 75,
                "Speed": 130
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 143,
            "name": "Snorlax",
            "image": "snorlax.png",
            "rarity": rarity[4],
            "evolvesTo": [],
            "types": [
                "Normal"
            ],
            "skills": {
                "HP": 160,
                "Attack": 110,
                "Defense": 65,
                "Special Attack": 65,
                "Special Defense": 110,
                "Speed": 30
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 144,
            "name": "Articuno",
            "image": "articuno.png",
            "rarity": rarity[5],
            "evolvesTo": [],
            "types": [
                "Ice",
                "Flying"
            ],
            "skills": {
                "HP": 90,
                "Attack": 85,
                "Defense": 100,
                "Special Attack": 95,
                "Special Defense": 125,
                "Speed": 85
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 145,
            "name": "Zapdos",
            "image": "zapdos.png",
            "rarity": rarity[5],
            "evolvesTo": [],
            "types": [
                "Electric",
                "Flying"
            ],
            "skills": {
                "HP": 90,
                "Attack": 90,
                "Defense": 85,
                "Special Attack": 125,
                "Special Defense": 90,
                "Speed": 100
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 146,
            "name": "Moltres",
            "image": "moltres.png",
            "rarity": rarity[5],
            "evolvesTo": [],
            "types": [
                "Fire",
                "Flying"
            ],
            "skills": {
                "HP": 90,
                "Attack": 100,
                "Defense": 90,
                "Special Attack": 125,
                "Special Defense": 85,
                "Speed": 90
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 147,
            "name": "Dratini",
            "image": "dratini.png",
            "rarity": rarity[2],
            "evolvesTo": [
                "Dragonair"
            ],
            "types": [
                "Dragon"
            ],
            "skills": {
                "HP": 41,
                "Attack": 64,
                "Defense": 45,
                "Special Attack": 50,
                "Special Defense": 50,
                "Speed": 50
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 148,
            "name": "Dragonair",
            "image": "dragonair.png",
            "rarity": rarity[3],
            "evolvesTo": [
                "Dragonite"
            ],
            "types": [
                "Dragon"
            ],
            "skills": {
                "HP": 61,
                "Attack": 84,
                "Defense": 65,
                "Special Attack": 70,
                "Special Defense": 70,
                "Speed": 70
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 149,
            "name": "Dragonite",
            "image": "dragonite.png",
            "rarity": rarity[4],
            "evolvesTo": [],
            "types": [
                "Dragon",
                "Flying"
            ],
            "skills": {
                "HP": 91,
                "Attack": 134,
                "Defense": 95,
                "Special Attack": 100,
                "Special Defense": 100,
                "Speed": 80
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 150,
            "name": "Mewtwo",
            "image": "mewtwo.png",
            "rarity": rarity[5],
            "evolvesTo": [],
            "types": [
                "Psychic"
            ],
            "skills": {
                "HP": 106,
                "Attack": 110,
                "Defense": 90,
                "Special Attack": 154,
                "Special Defense": 90,
                "Speed": 130
            },
            "owned": false,
            "count": 0,
            "shiny": false
        },
        {
            "ID": 151,
            "name": "Mew",
            "image": "mew.png",
            "rarity": rarity[5],
            "evolvesTo": [],
            "types": [
                "Psychic"
            ],
            "skills": {
                "HP": 100,
                "Attack": 100,
                "Defense": 100,
                "Special Attack": 100,
                "Special Defense": 100,
                "Speed": 100
            },
            "owned": false,
            "count": 0,
            "shiny": false
        }
    ],
    //#endregion Monsters
    //#region CardPacks
    "cardPacks": [
        /*
        {
            "name": name of the CardPack
            "image": directory of the image of the CardPack
            "odds": an array of odds, first number represents the likelihood of money, secon number a common, third a uncommon, etc
            "moneyReward": how much money the CardPack will reward
            "challenge": the challenge that needs to be completed to unlock the CardPack
            "unlockedBy": the upgrade that unlocks the CardPack
        }
        */
        {
            "ID": 0,
            "name": "Cheat CardPack",
            "description": "Cheat CardPack gives you any card with equal chance. Rewards $100 on money rewards.",
            "image": "legendary.png",
            "rarity": "shiny",
            "odds": [1, 1, 1, 1, 1, 1],
            "moneyReward": 500,
            "challenge": "None",
            "unlockedBy": 0 // "Unlock Cheat Mode"
        },
        {
            "ID": 1,
            "name": "Common CardPack",
            "description": "Common CardPack can only reward common cards. Rewards $0.5 on money rewards.",
            "image": "common.png",
            "rarity": "common",
            "odds": [50, 50, 0, 0, 0, 0],
            "moneyReward": 0.5,
            "challenge": "None",
            "unlockedBy": null
        },
        {
            "ID": 2,
            "name": "Uncommon CardPack",
            "description": "Uncommon CardPack has a 10% to give an uncommon card. Rewards $1 on money rewards.",
            "image": "uncommon.png",
            "rarity": "uncommon",
            "odds": [45, 40, 10, 0, 0, 0],
            "moneyReward": 1,
            "challenge": "Moving Button",
            "unlockedBy": 1.1 // "Unlock Uncommon CardPack"
        },
        {
            "ID": 3,
            "name": "Rare CardPack",
            "description": "Rare CardPack has a 5% chance to give a rare card. Rewards $3 on money rewards.",
            "image": "rare.png",
            "rarity": "rare",
            "odds": [40, 40, 15, 5, 0, 0],
            "moneyReward": 3,
            "challenge": "Collector",
            "unlockedBy": 1.2 // "Unlock Rare CardPack"
        },
        {
            "ID": 4,
            "name": "Epic CardPack",
            "description": "Epic CardPack has a 3% chance to give an epic card. Rewards $5 on money rewards.",
            "image": "epic.png",
            "rarity": "epic",
            "odds": [35, 30, 25, 7, 3, 0],
            "moneyReward": 5,
            "challenge": "Number Popup",
            "unlockedBy": 1.3 // "Unlock Epic CardPack"
        },
        {
            "ID": 5,
            "name": "Legendary CardPack",
            "description": "Legendary CardPack has a 1% chance to give a legendary card. Rewards $10 on money rewards.",
            "image": "legendary.png",
            "rarity": "legendary",
            "odds": [30, 15, 25, 12, 5, 3],
            "moneyReward": 10,
            "challenge": "Typing Challenge",
            "unlockedBy": 1.4 // "Unlock Legendary CardPack"
        },
        {
            "ID": 6,
            "name": "Passive CardPack",
            "description": "You've worked hard, now it's time to rest. This legendary CardPack opens itself.",
            "image": "legendary.png",
            "rarity": "shiny",
            "odds": [30, 15, 25, 12, 5, 3],
            "moneyReward": 10,
            "challenge": "Passive",
            "unlockedBy": 1.5 // "Unlock Passive CardPack"
        }
    ],
    //#endregion CardPacks
    //#region Upgrades
    "upgrades": [
        //#region unlock CardPacks
        {
            "ID": 0,
            "name": "Unlock Cheat Mode",
            "image": "legendary-cardpack-2.png",
            "rarity": "legendary",
            "description": "Unlocks the Cheat CardPack machine.",
            "cost": 0,
            "unlockedBy": 0,
            "owned": false
        },
        {
            "ID": 1.1,
            "name": "Unlock Uncommon CardPack",
            "image": "uncommon-cardpack.png",
            "rarity": "uncommon",
            "description": "Unlocks the Uncommon CardPack machine. Requires user to complete \"Moving Button\" Challenge. Chance to give common cards.",
            "cost": 5,
            "unlockedBy": null,
            "owned": false
        },
        {
            "ID": 1.2,
            "name": "Unlock Rare CardPack",
            "image": "rare-cardpack.png",
            "rarity": "rare",
            "description": "Unlocks the Rare CardPack machine. Requires user to complete \"Collector\" Challenge. Chance to give rare cards.",
            "cost": 10,
            "unlockedBy": 1.1,
            "owned": false
        },
        {
            "ID": 1.3,
            "name": "Unlock Epic CardPack",
            "image": "epic-cardpack.png",
            "rarity": "epic",
            "description": "Unlocks the Epic CardPack machine. Requires user to complete \"Number Popup\" Challenge. Chance to give epic cards.",
            "cost": 100,
            "unlockedBy": 1.2,
            "owned": false
        },
        {
            "ID": 1.4,
            "name": "Unlock Legendary CardPack",
            "image": "legendary-cardpack.png",
            "rarity": "legendary",
            "description": "Unlocks the Legendary CardPack. Requires user to complete \"Typing Challenge\" Challenge. Chance to give legendary cards.",
            "cost": 1000,
            "unlockedBy": 1.3,
            "owned": false
        },
        {
            "ID": 1.5,
            "name": "Unlock Passive CardPack",
            "image": "legendary-cardpack-2.png",
            "rarity": "legendary",
            "description": "Unlocks the Passive CardPack. Spins once per second. Legendary CardPack with no challenge.",
            "cost": 5000,
            "unlockedBy": 1.4,
            "owned": false
        },
        //#endregion unlock CardPacks
        //#region worker enhancements
        {
            "ID": 2.1,
            "name": "Proficient Workers 10%",
            "image": "placeholder.png",
            "rarity": "common",
            "description": "10% better workers",
            "cost": 10,
            "unlockedBy": null,
            "owned": false
        },
        {
            "ID": 2.2,
            "name": "Proficient Workers 25%",
            "image": "placeholder.png",
            "rarity": "uncommon",
            "description": "25% better workers",
            "cost": 50,
            "unlockedBy": 2.1,
            "owned": false
        },
        {
            "ID": 2.3,
            "name": "Proficient Workers 50%",
            "image": "placeholder.png",
            "rarity": "rare",
            "description": "50% better workers",
            "cost": 100,
            "unlockedBy": 2.2,
            "owned": false
        },
        {
            "ID": 2.4,
            "name": "Proficient Workers 100%",
            "image": "placeholder.png",
            "rarity": "epic",
            "description": "100% better workers",
            "cost": 500,
            "unlockedBy": 2.3,
            "owned": false
        },
        {
            "ID": 2.5,
            "name": "Proficient Workers 200%",
            "image": "placeholder.png",
            "rarity": "legendary",
            "description": "200% better workers",
            "cost": 1000,
            "unlockedBy": 2.4,
            "owned": false
        },
        //#endregion worker enhancements
        //#region evolving monsters
        {
            "ID": 3.1,
            "name": "Evolving Monsters",
            "image": "placeholder.png",
            "rarity": "uncommon",
            "description": "Unlock evolving monsters. Costs 5 Cards to evolve",
            "cost": 10,
            "unlockedBy": null,
            "owned": false
        },
        {
            "ID": 3.2,
            "name": "Evolving Monsters +1",
            "image": "placeholder.png",
            "rarity": "rare",
            "description": "Cheaper evolving requirement. Costs 4 Cards to evolve",
            "cost": 100,
            "unlockedBy": 3.1,
            "owned": false
        },
        {
            "ID": 3.3,
            "name": "Evolving Monsters +2",
            "image": "placeholder.png",
            "rarity": "epic",
            "description": "Cheaper evolving requirement. Costs 3 Cards to evolve",
            "cost": 500,
            "unlockedBy": 3.2,
            "owned": false
        },
        {
            "ID": 3.4,
            "name": "Sacrificing Monsters",
            "image": "placeholder.png",
            "rarity": "legendary",
            "description": "Unlock sacrificing legendary monsters to raise shiny chance by 1%.",
            "cost": 1000,
            "unlockedBy": 3.3,
            "owned": false
        },
        //#endregion evolving monsters
        //#region ui enhancements
        /*{
            "ID": 4.1,
            "name": "Learn the skills of monsters",
            "image": "placeholder.png",
            "rarity": "uncommon",
            "description": "Become able to view the skills of your monsters, so you can better assign them to work.",
            "cost": 10,
            "unlockedBy": null,
            "owned": false
        },*/
        //#endregion ui enhancements
        //#region repeatable upgrades
        {
            "ID": 5.1,
            "name": "Raise Shiny Chance",
            "image": "placeholder.png",
            "rarity": "shiny",
            "description": "Raise shiny chance by 0.1%.",
            "cost": 2500,
            "unlockedBy": null,
            "owned": false,
            "repeatable": true
        },
        {
            "ID": 5.2,
            "name": "Speed up Passive CardPack",
            "image": "placeholder.png",
            "rarity": "shiny",
            "description": "Get 1 more passive CardPack per second.",
            "cost": 5000,
            "unlockedBy": 1.5,
            "owned": false,
            "repeatable": true
        }
        //#endregion repeatable upgrades
    ],
    //#endregion Upgrades
    //#region Jobs
    "jobs": [
        {
            "ID": 0,
            "name": "Healer",
            "image": "placeholder.png",
            "description": "Pokémon with high HP are typically resilient and durable, making them great for roles requiring endurance or care for others.",
            "skill": skills[0],
            "revenuePerSkill": 0.1,
            // "unlockedBy": null,
            "assignedMonster": null
        },
        {
            "ID": 1,
            "name": "Lumberjack",
            "image": "placeholder.png",
            "description": "High Attack indicates physical strength, so these Pokémon excel in physically demanding or combat-heavy roles.",
            "skill": skills[1],
            "revenuePerSkill": 0.1,
            // "unlockedBy": null,
            "assignedMonster": null
        },
        {
            "ID": 2,
            "name": "Blacksmith",
            "image": "placeholder.png",
            "description": "High Defense Pokémon are tough and protective, making them ideal for guarding or building roles that require durability.",
            "skill": skills[2],
            "revenuePerSkill": 0.1,
            // "unlockedBy": null,
            "assignedMonster": null
        },
        {
            "ID": 3,
            "name": "Researcher",
            "image": "placeholder.png",
            "description": "Pokémon with high Special Attack often have unique or magical abilities, which could align with intelligence, creativity, or high-tech applications.",
            "skill": skills[3],
            "revenuePerSkill": 0.1,
            // "unlockedBy": null,
            "assignedMonster": null
        },
        {
            "ID": 4,
            "name": "Merchant",
            "image": "placeholder.png",
            "description": "High Special Defense implies mental fortitude or resistance to special/magical effects, making them suitable for advisory or protective roles.",
            "skill": skills[4],
            "revenuePerSkill": 0.1,
            // "unlockedBy": null,
            "assignedMonster": null
        },
        {
            "ID": 5,
            "name": "Courier",
            "image": "placeholder.png",
            "description": "High Speed Pokémon are quick and agile, thriving in roles requiring rapid action or movement.",
            "skill": skills[5],
            "revenuePerSkill": 0.1,
            // "unlockedBy": null,
            "assignedMonster": null
        }
    ]
    //#endregion Jobs
}