class CharacterView {
    constructor() {
        this.characterSheetElement = document.getElementById("characterSheet");

        this.nameElement = document.getElementById("characterName");

        this.raceElement = document.getElementById("raceElement");
        this.classElement = document.getElementById("classElement");
        this.backgroundElement = document.getElementById("backgroundElement");
        this.ageElement = document.getElementById("ageElement");
        this.heightElement = document.getElementById("heightElement");
        this.weightElement = document.getElementById("weightElement");
        
        this.abilitiesElement = document.getElementById("abilitiesElement");
        this.strengthElement = document.getElementById("strengthElement");
        this.dexterityElement = document.getElementById("dexterityElement");
        this.constitutionElement = document.getElementById("constitutionElement");
        this.intelligenceElement = document.getElementById("intelligenceElement");
        this.wisdomElement = document.getElementById("wisdomElement");
        this.charismaElement = document.getElementById("charismaElement");

        this.skillsTable1 = document.getElementById("skillsTable1");
        this.skillsTable2 = document.getElementById("skillsTable2");

        this.alignmentVisualElement = document.getElementById("alignmentVisualElement");
    }

    animateRandomise() {
        this.characterSheetElement.classList.add('animate');

        // Remove animation class after animation completes
        setTimeout(() => {
            this.characterSheetElement.classList.remove('animate');
        }, 200); // Match animation duration
    }

    updateCharacterSheet(model) {
        this.nameElement.textContent = `${model.selectedFirstName} ${model.selectedLastName}`;
        this.printCharacterSheet(model);
        this.printAbilities(model.selectedAbilities);
        this.printSkills(model.selectedSkills);
        this.printAlignmentVisual(model.selectedAlignment);
        this.animateRandomise();
    }

    printCharacterSheet(model) {
        raceElement.innerHTML = `<a href="${model.selectedRace.link}" target="_blank">${model.selectedRace.name}${model.selectedSubRace !== undefined ? ` - ${model.selectedSubRace}` : ""}</a>`
        classElement.innerText = model.selectedClass;
        backgroundElement.innerText = model.selectedBackground;
        ageElement.innerText = model.selectedAge;
        alignmentElement.innerText = model.selectedAlignment.toText();
        heightElement.innerText = `${model.selectedHeight}cm`;
        weightElement.innerText = `${model.selectedWeight}kg`;
        languagesElement.innerText = model.selectedRace.languages.join(', ');
    }

    printAbilities(abilities) {
        this.abilitiesElement.innerHTML = "";
        abilities.forEach(ability => {
            this.abilitiesElement.innerHTML += `<table>
                                                <tr><th>${ability.name}</th></tr>
                                                <tr><td>${ability.value}</td></tr>
                                                <tr><th>${ability.modifier() < 0 ? "" : "+"}${ability.modifier()}</th></tr>
                                                </table>`;
        });
    }

    printSkills(skills) {
        const rows = skills.length / 2;

        this.skillsTable1.innerHTML = "";
        for (let i = 0; i < rows; i++) {
            let skillRow = this.skillsTable1.insertRow();
            if (skills[i].proficient) skillRow.classList.add("proficient");
            skillRow.innerHTML = `<th>${skills[i].name}</th><td>${skills[i].value}</td>`;
        }

        this.skillsTable2.innerHTML = "";
        for (let i = rows; i < rows*2; i++) {
            let skillRow = this.skillsTable2.insertRow();
            if (skills[i].proficient) skillRow.classList.add("proficient");
            skillRow.innerHTML = `<th>${skills[i].name}</th><td>${skills[i].value}</td>`;
        }
    }

    printAlignmentVisual(alignment) {
        const resolution = 10;
        const xValue = -Math.round((alignment.lawful - 100)/20); //0 is lawful, 10 is chaotic
        const yValue = -Math.round((alignment.good - 100)/20); //0 is good, 10 is evil

        let table = document.createElement("table");

        let tableRow = document.createElement("tr");
        let tableHeader = document.createElement("th");
        tableHeader.innerText="Good";
        tableHeader.colSpan = "13";
        tableRow.appendChild(tableHeader);
        table.appendChild(tableRow);

        for (let y = 0; y <= resolution; y++) {
            let tableRow = document.createElement("tr");
            if (y === 0) {
                let tableHeader = document.createElement("th");
                tableHeader.rowSpan = "11";
                tableHeader.innerText = "Lawful";
                tableHeader.style = "writing-mode: vertical-rl; text-orientation: upright;"
                tableRow.appendChild(tableHeader);
            }

            for (let x = 0; x <= resolution; x++) {
                if (y === yValue && x === xValue) {
                    let selectedCell = document.createElement("th");
                    selectedCell.innerText = "X";
                    tableRow.appendChild(selectedCell);
                } else tableRow.appendChild(document.createElement("td"));
            }

            if (y === 0) {
                let tableHeader = document.createElement("th");
                tableHeader.rowSpan = "11";
                tableHeader.innerText = "Chaotic";
                tableHeader.style = "writing-mode: vertical-rl; text-orientation: upright;"
                tableRow.appendChild(tableHeader);
            }

            table.appendChild(tableRow);
        }

        tableRow = document.createElement("tr");
        tableHeader = document.createElement("th");
        tableHeader.innerText="Evil";
        tableHeader.colSpan = "13";
        tableRow.appendChild(tableHeader);
        table.appendChild(tableRow);

        this.alignmentVisualElement.innerHTML = "";
        this.alignmentVisualElement.appendChild(table);
    }
};