class Tama {
    constructor(object) {
        this.name = object.name; // ""
        this.sex = object.sex; // "Unknown", "Male", "Female", "Both"
        this.description = object.description; // ""
        this.stage = object.stage; // "Egg", "Baby", "Child", "Teenager", "Adult"
        this.image = object.image; // "tama/Placeholder.webp"
        this.wikiLink = object.wikiLink; // "https://tamagotchi.fandom.com/wiki/..."

        this.likes = object.likes; // [ "" ]
        this.dislikes = object.dislikes; // [ "" ]

        this.evolvesFrom = object.evolvesFrom; // [ "" ]
        this.evolutionRequirement = object.evolutionRequirement; // ""
        this.shortEvolutionRequirement = object.evolutionRequirementShort; // ""
        this.evolvesTo = object.evolvesTo; // [ "" ]

        this.special = object.special;
    }

    renderCompletionDiv() {
        const div = this.renderDiv();
        div.addEventListener('click', () => {
            createPopup(this.renderDetailedDiv());
        });

        return div;
    }

    renderEvolutionDiv() {
        const div = this.renderDiv();

        div.addEventListener('click', () => {
            // createPopup(this.detailsDiv);
            SAVE.tamaSelected = this.name;
            renderTama();

            if (div.classList.contains('selected')) {
                createPopup(this.renderDetailedDiv());
            }
        });

        return div;
    }

    renderDiv() {
        const div = document.createElement('div');
        div.className = `tama ${this.sex.toLowerCase()} ${SAVE.acquiredTamas.includes(this.name) ? 'acquired' : ''}`;
        div.dataset.name = this.name;
        div.innerHTML = `
            <div class="image-container"><img src="assets/img/${this.image}" alt="${this.name}" /></div>
            <p>${this.name}</p>
        `;

        return div;
    }

    renderDetailedDiv() {
        const div = document.createElement('div');
        div.className = "tama-detailed";
        div.innerHTML = `
            <button class="popup-close-button" onclick="dismissPopup()">&times;</button>
            <h1>${this.name}</h1>
            <div class="image-container"><img src="assets/img/${this.image}" alt="${this.name}" /></div>
            <table>
                <!-- <tr><th colspan="2">Description</th></tr>
                <tr><td colspan="2">${this.description}</td></tr> -->
                <tr><th>Sex</th><td>${this.sex}</td></tr>
                <tr><th>Stage</th><td>${this.stage}</td></tr>
                ${this.evolutionRequirement != '' ? `<tr><th>Evolution Requirement</th><td>${this.evolutionRequirement}</td></tr>` : ''}
                ${this.evolvesFrom.length > 0 ? `<tr><th>Evolves From</th><td>${this.evolvesFrom.map(tamaName => `<a href="javascript:void(0)" onclick="popupTama('${tamaName}')">${tamaName} </a>`)}</td></tr>` : ''}
                ${this.evolvesTo.length > 0 ? `<tr><th>Evolves To</th><td>${this.evolvesTo.map(tamaName => `<a href="javascript:void(0)" onclick="popupTama('${tamaName}')">${tamaName} </a>`)}</td></tr>` : ''}
                <tr><th colspan="2">Wiki Link</th></tr>
                <tr><td colspan="2"><a href="${this.wikiLink}" target="_blank">${this.wikiLink}</a></td></tr>
            </table>
            <div>
                <input type="checkbox" class="tama-detailed-checkbox" id="${this.name}-detailed-checkbox" ${SAVE.acquiredTamas.includes(this.name) ? 'checked' : ''}/>
                <label for="${this.name}-detailed-checkbox">Collected</label>
            </div>
        `;

        const checkbox = div.querySelector('.tama-detailed-checkbox');
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                SAVE.acquiredTamas.push(this.name);
            } else {
                const index = SAVE.acquiredTamas.indexOf(this);
                if (index !== -1) {
                    SAVE.acquiredTamas.splice(index, 1);
                }
            }

            document.querySelectorAll('.tama[data-name="' + this.name + '"]').forEach(tamaElement => tamaElement.classList.toggle('acquired', checkbox.checked));

            saveToLocalStorage();
        });

        return div;
    }
}

const TAMA_DATA = [
    //#region Egg Stage (1)
    { // Egg
        name: "Egg",
        sex: "Unknown",
        description: "",
        stage: "Egg",
        image: "tama/Egg1.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Egg",
        evolvesFrom: [ ],
        evolutionRequirement: "",
        evolutionRequirementShort: "",
        evolvesTo: [
            "Yuuyutchi",
            "Niinitchi"
        ]
    },
    //#endregion

    //#region Baby Stage (2)
    { // Yuuyutchi
        name: "Yuuyutchi",
        sex: "Male",
        description: "",
        stage: "Baby",
        image: "tama/Yuuyutchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Yooyutchi",
        evolvesFrom: ["Egg"],
        evolutionRequirement: "If born Male (50% chance)",
        evolutionRequirementShort: "50%",
        evolvesTo: [
            "Welcotchi",
            "Mitsumarutchi"
        ]
    },
    { // Niinitchi
        name: "Niinitchi",
        sex: "Female",
        description: "",
        stage: "Baby",
        image: "tama/Niinitchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Niinitchi",
        evolvesFrom: ["Egg"],
        evolutionRequirement: "If born Female (50% chance)",
        evolutionRequirementShort: "50%",
        evolvesTo: ["Lionetchi", "Otamatchi"]
    },
    //#endregion

    //#region Child Stage (4)
    { // Welcotchi
        name: "Welcotchi",
        sex: "Male",
        description: "",
        stage: "Child",
        image: "tama/Welcotchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Welcotchi",
        evolvesFrom: ["Yuuyutchi"],
        evolutionRequirement: "Happiness above 10 pts",
        evolutionRequirementShort: "Hap >= 10",
        evolvesTo: ["Kuriritchi", "Gunchitchi", "Curltchi"]
    },
    { // Mitsumarutchi
        name: "Mitsumarutchi",
        sex: "Male",
        description: "",
        stage: "Child",
        image: "tama/Mitsumarutchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Mitsumarutchi",
        evolvesFrom: ["Yuuyutchi"],
        evolutionRequirement: "Happiness below 10 pts",
        evolutionRequirementShort: "Hap < 10",
        evolvesTo: ["Kuriritchi", "Gunchitchi", "Curltchi"]
    },
    { // Lionetchi
        name: "Lionetchi",
        sex: "Female",
        description: "",
        stage: "Child",
        image: "tama/Lionetchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Lionetchi",
        evolvesFrom: ["Niinitchi"],
        evolutionRequirement: "Happiness above 10 pts",
        evolutionRequirementShort: "Hap >= 10",
        evolvesTo: ["Labilatchi", "Teftetchi", "Tustustchi"]
    },
    { // Otamatchi
        name: "Otamatchi",
        sex: "Female",
        description: "",
        stage: "Child",
        image: "tama/Otamatchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Otamatchi",
        evolvesFrom: ["Niinitchi"],
        evolutionRequirement: "Happiness below 10 pts",
        evolutionRequirementShort: "Hap < 10",
        evolvesTo: ["Labilatchi", "Teftetchi", "Tustustchi"]
    },
    //#endregion

    //#region Teenager Stage (6)
    { // Kuriritchi
        name: "Kuriritchi",
        sex: "Male",
        description: "",
        stage: "Teenager",
        image: "tama/Kuriritchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Kuriritchi",
        evolvesFrom: ["Welcotchi", "Mitsumarutchi"],
        evolutionRequirement: "Happiness between 15-20 pts OR craft DIY >= 10",
        evolutionRequirementShort: "Hap >= 15 OR DIY >= 10",
        evolvesTo: ["Mametchi", "Weeptchi", "Shimagurutchi", "Hypertchi", "ShimaShimatchi"]
    },
    { // Gunchitchi
        name: "Gunchitchi",
        sex: "Male",
        description: "",
        stage: "Teenager",
        image: "tama/Gunchitchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Gunchitchi",
        evolvesFrom: ["Welcotchi", "Mitsumarutchi"],
        evolutionRequirement: "Happiness between 6-14 pts OR feed snack >= 40",
        evolutionRequirementShort: "Hap >= 6 OR Snack >= 40",
        evolvesTo: ["Kuchipatchi", "Shykutchi", "Bigsmile", "Hypertchi", "ShimaShimatchi"]
    },
    { // Curltchi
        name: "Curltchi",
        sex: "Male",
        description: "",
        stage: "Teenager",
        image: "tama/Curltchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Curltchi",
        evolvesFrom: ["Welcotchi", "Mitsumarutchi"],
        evolutionRequirement: "Hapiness between 0-5 pts OR get perfect score in Tama Arcade >= 15",
        evolutionRequirementShort: "Hap >= 0 OR Arcade >= 15",
        evolvesTo: ["Kikitchi", "Unimarutchi", "Gozarutchi", "Hypertchi", "ShimaShimatchi"]
    },
    { // Labilatchi
        name: "Labilatchi",
        sex: "Female",
        description: "",
        stage: "Teenager",
        image: "tama/Labilatchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Labilatchi",
        evolvesFrom: ["Lionetchi", "Otamatchi"],
        evolutionRequirement: "Happiness between 15-20 pts OR craft DIY >= 10",
        evolutionRequirementShort: "Hap >= 15 OR DIY >= 10",
        evolvesTo: ["Neliatchi", "Milktchi", "Momotchi", "Bubbletchi", "Yattatchi"]
    },
    { // Teftetchi
        name: "Teftetchi",
        sex: "Female",
        description: "",
        stage: "Teenager",
        image: "tama/Teftetchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Teftetchi",
        evolvesFrom: ["Lionetchi", "Otamatchi"],
        evolutionRequirement: "Happiness between 6-14 pts OR feed snack >= 40",
        evolutionRequirementShort: "Hap >= 6 OR Snack >= 40",
        evolvesTo: ["Woopatchi", "Memetchi", "Picochutchi", "Bubbletchi", "Yattatchi"]
    },
    { // Tustustchi
        name: "Tustustchi",
        sex: "Female",
        description: "",
        stage: "Teenager",
        image: "tama/Tustustchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Tustustchi",
        evolvesFrom: ["Lionetchi", "Otamatchi"],
        evolutionRequirement: "Hapiness between 0-5 pts OR get perfect score in Tama Arcade >= 15 times",
        evolutionRequirementShort: "Hap >= 0 OR Arcade >= 15",
        evolvesTo: ["Mimitchi", "Unimarutchi", "Sebiretchi", "Bubbletchi", "Yattatchi"]
    },
    //#endregion

    //#region Adult Stage (21)
    { // Mametchi
        name: "Mametchi",
        sex: "Male",
        description: "",
        stage: "Adult",
        image: "tama/mametchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Mametchi",
        evolvesFrom: ["Kuriritchi"],
        evolutionRequirement: "0 Care Mistakes OR ( 1-3 Care Mistakes AND Go Tama Walk 3 times )",
        evolutionRequirementShort: "0CM OR ?",
        evolvesTo: [ ]
    },
    { // Weeptchi
        name: "Weeptchi",
        sex: "Male",
        description: "",
        stage: "Adult",
        image: "tama/Weeptchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Weeptchi",
        evolvesFrom: ["Kuriritchi"],
        evolutionRequirement: "1-3 Care Mistakes",
        evolutionRequirementShort: "1-3CM",
        evolvesTo: [ ]
    },
    { // Shimagurutchi
        name: "Shimagurutchi",
        sex: "Male",
        description: "",
        stage: "Adult",
        image: "tama/Shimagurutchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Shimagurutchi",
        evolvesFrom: ["Kuriritchi"],
        evolutionRequirement: "4+ Care Mistakes",
        evolutionRequirementShort: "4+CM",
        evolvesTo: [ ]
    },
    { // Kuchipatchi
        name: "Kuchipatchi",
        sex: "Male",
        description: "",
        stage: "Adult",
        image: "tama/Kuchipatchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Kuchipatchi",
        evolvesFrom: ["Gunchitchi"],
        evolutionRequirement: "0-1 Care Mistakes OR ( 2-5 Care Mistakes AND Order Tama Delivery >= 10 times )",
        evolutionRequirementShort: "0-1CM OR ?",
        evolvesTo: [ ]
    },
    { // Shykutchi
        name: "Shykutchi",
        sex: "Male",
        description: "",
        stage: "Adult",
        image: "tama/Shykutchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Shykutchi",
        evolvesFrom: ["Gunchitchi"],
        evolutionRequirement: "2-5 Care Mistakes",
        evolutionRequirementShort: "2-5CM",
        evolvesTo: [ ]
    },
    { // Bigsmile
        name: "Bigsmile",
        sex: "Male",
        description: "",
        stage: "Adult",
        image: "tama/Bigsmile.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Bigsmile",
        evolvesFrom: ["Gunchitchi"],
        evolutionRequirement: "6+ Care Mistakes",
        evolutionRequirementShort: "6+CM",
        evolvesTo: [ ]
    },
    { // Kikitchi
        name: "Kikitchi",
        sex: "Male",
        description: "",
        stage: "Adult",
        image: "tama/Kikitchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Kikitchi",
        evolvesFrom: ["Curltchi"],
        evolutionRequirement: "0-1 Care Mistakes OR ( 2-5 Care Mistakes AND get perfect arcade score in Tama Arcade >= 20 times )",
        evolutionRequirementShort: "0-1CM OR ?",
        evolvesTo: [ ]
    },
    { // Unimarutchi
        name: "Unimarutchi",
        sex: "Both",
        description: "",
        stage: "Adult",
        image: "tama/Unimarutchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Unimarutchi",
        evolvesFrom: ["Curltchi", "Tustustchi"],
        evolutionRequirement: "2-5 Care Mistakes",
        evolutionRequirementShort: "2-5CM",
        evolvesTo: [ ]
    },
    { // Gozarutchi
        name: "Gozarutchi",
        sex: "Male",
        description: "",
        stage: "Adult",
        image: "tama/Gozarutchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Gozarutchi",
        evolvesFrom: ["Curltchi"],
        evolutionRequirement: "6+ Care Mistakes",
        evolutionRequirementShort: "6+CM",
        evolvesTo: [ ]
    },
    { // Hypertchi
        name: "Hypertchi",
        sex: "Male",
        description: "",
        stage: "Adult",
        image: "tama/Hypertchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Hypertchi",
        evolvesFrom: ["Kuriritchi", "Gunchitchi", "Curltchi"],
        evolutionRequirement: "Multiple of 5th Generation (eg. 5, 10, 15...) AND Born from Marriage on Tamaverse AND Go Tama Travel Trips >= 3 times",
        evolutionRequirementShort: "?",
        evolvesTo: [ ],
        special: true
    },
    { // ShimaShimatchi
        name: "ShimaShimatchi",
        sex: "Male",
        description: "",
        stage: "Adult",
        image: "tama/Shimashimatchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/ShimaShimatchi",
        evolvesFrom: ["Kuriritchi", "Gunchitchi", "Curltchi"],
        evolutionRequirement: "Born from marriage between 2 Uni devices AND craft at least 1 DIY",
        evolutionRequirementShort: "?",
        evolvesTo: [ ],
        special: true
    },
    { // Neliatchi
        name: "Neliatchi",
        sex: "Female",
        description: "",
        stage: "Adult",
        image: "tama/Neliatchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Neliatchi",
        evolvesFrom: ["Labilatchi"],
        evolutionRequirement: "0 Care Mistakes OR ( 1-3 Care Mistakes AND Go Tama Walk 3 times )",
        evolutionRequirementShort: "0CM OR ?",
        evolvesTo: [ ]
    },
    { // Milktchi
        name: "Milktchi",
        sex: "Female",
        description: "",
        stage: "Adult",
        image: "tama/Milktchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Milktchi",
        evolvesFrom: ["Labilatchi"],
        evolutionRequirement: "1-3 Care Mistakes",
        evolutionRequirementShort: "1-3CM",
        evolvesTo: [ ]
    },
    { // Momotchi
        name: "Momotchi",
        sex: "Female",
        description: "",
        stage: "Adult",
        image: "tama/Momotchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Momotchi",
        evolvesFrom: ["Labilatchi"],
        evolutionRequirement: "4+ Care Mistakes",
        evolutionRequirementShort: "4+CM",
        evolvesTo: [ ]
    },
    { // Woopatchi
        name: "Woopatchi",
        sex: "Female",
        description: "",
        stage: "Adult",
        image: "tama/Woopatchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Woopatchi",
        evolvesFrom: ["Teftetchi"],
        evolutionRequirement: "0-1 Care Mistakes OR ( 2-5 Care Mistakes AND Order Tama Delivery >= 10 times )",
        evolutionRequirementShort: "0-1CM OR ?",
        evolvesTo: [ ]
    },
    { // Memetchi
        name: "Memetchi",
        sex: "Female",
        description: "",
        stage: "Adult",
        image: "tama/Memetchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Memetchi",
        evolvesFrom: ["Teftetchi"],
        evolutionRequirement: "2-5 Care Mistakes",
        evolutionRequirementShort: "2-5CM",
        evolvesTo: [ ]
    },
    { // Picochutchi
        name: "Picochutchi",
        sex: "Female",
        description: "",
        stage: "Adult",
        image: "tama/Picochutchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Picochutchi",
        evolvesFrom: ["Teftetchi"],
        evolutionRequirement: "6+ Care Mistakes",
        evolutionRequirementShort: "6+CM",
        evolvesTo: [ ]
    },
    { // Mimitchi
        name: "Mimitchi",
        sex: "Female",
        description: "",
        stage: "Adult",
        image: "tama/Mimitchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Mimitchi",
        evolvesFrom: ["Tustustchi"],
        evolutionRequirement: "0-1 Care Mistakes OR ( 2-5 Care Mistakes AND get perfect arcade score in Tama Arcade >= 20 times )",
        evolutionRequirementShort: "0-1CM OR ?",
        evolvesTo: [ ]
    },
    { // Sebiretchi
        name: "Sebiretchi",
        sex: "Female",
        description: "",
        stage: "Adult",
        image: "tama/Sebiretchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Sebiretchi",
        evolvesFrom: ["Tustustchi"],
        evolutionRequirement: "6+ Care Mistakes",
        evolutionRequirementShort: "6+CM",
        evolvesTo: [ ]
    },
    { // Bubbletchi
        name: "Bubbletchi",
        sex: "Female",
        description: "",
        stage: "Adult",
        image: "tama/Bubbletchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Bubbletchi",
        evolvesFrom: ["Labilatchi", "Teftetchi", "Tustustchi"],
        evolutionRequirement: "Multiple of 5th Generation (eg. 5, 10, 15...) AND Born from Marriage on Tamaverse AND Buy Tama Fashion outfits >= 3 times",
        evolutionRequirementShort: "?",
        evolvesTo: [ ],
        special: true
    },
    { // Yattatchi
        name: "Yattatchi",
        sex: "Female",
        description: "",
        stage: "Adult",
        image: "tama/Yattatchi.webp",
        wikiLink: "https://tamagotchi.fandom.com/wiki/Yattatchi",
        evolvesFrom: ["Labilatchi", "Teftetchi", "Tustustchi"],
        evolutionRequirement: "Born from marriage between 2 Uni devices AND craft at least 1 DIY",
        evolutionRequirementShort: "?",
        evolvesTo: [ ],
        special: true
    }
    //#endregion
];

const TAMAS = TAMA_DATA.map(tama => new Tama(tama));

