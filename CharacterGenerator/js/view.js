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
        this.animateRandomise();
    }

    printCharacterSheet(model) {
        raceElement.innerHTML = `<a href="${model.selectedRace.link}" target="_blank">${model.selectedRace.name}${model.selectedSubRace !== undefined ? ` - ${model.selectedSubRace}` : ""}</a>`
        classElement.innerText = model.selectedClass;
        backgroundElement.innerText = model.selectedBackground;
        ageElement.innerText = model.selectedAge;
        heightElement.innerText = `${model.selectedHeight}cm`;
        weightElement.innerText = `${model.selectedWeight}kg`;
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
};