class CharacterView {
    constructor() {
        this.characterSheetElement = document.getElementById("characterSheet");

        this.nameElement = document.getElementById("characterName");

        this.raceElement = document.getElementById("raceElement");
        this.classElement = document.getElementById("classElement");
        this.backgroundElement = document.getElementById("backgroundElement");
        this.ageElement = document.getElementById("ageElement");
        this.heightElement = document.getElementById("heightElement");
        
        this.strengthElement = document.getElementById("strengthElement");
        this.dexterityElement = document.getElementById("dexterityElement");
        this.constitutionElement = document.getElementById("constitutionElement");
        this.intelligenceElement = document.getElementById("intelligenceElement");
        this.wisdomElement = document.getElementById("wisdomElement");
        this.charismaElement = document.getElementById("charismaElement");
    }

    animateRandomise() {
        this.characterSheetElement.classList.add('animate');

        // Remove animation class after animation completes
        setTimeout(() => {
            this.characterSheetElement.classList.remove('animate');
        }, 400); // Match animation duration
    }

    updateCharacterSheet(model) {
        this.nameElement.textContent = `${model.selectedFirstName} ${model.selectedLastName}`;
        this.printCharacterSheet(model);
        this.printAbilities(model.abilities);
        this.animateRandomise();
    }

    printCharacterSheet(model) {
        raceElement.innerText = model.selectedRace;
        classElement.innerText = model.selectedClass;
        backgroundElement.innerText = model.selectedBackground;
        ageElement.innerText =model.selectedAge;
        heightElement.innerText = model.selectedHeight;
        //tableHTML += `<tr><th>Weight</th><td>${model.selectedWeight}</td>`;
    }

    printAbilities(abilities) {
        this.strengthElement.innerText = abilities.find(ability => ability.name === "Strength").value;
        this.dexterityElement.innerText = abilities.find(ability => ability.name === "Dexterity").value;
        this.constitutionElement.innerText = abilities.find(ability => ability.name === "Constitution").value;
        this.intelligenceElement.innerText = abilities.find(ability => ability.name === "Intelligence").value;
        this.wisdomElement.innerText = abilities.find(ability => ability.name === "Wisdom").value;
        this.charismaElement.innerText = abilities.find(ability => ability.name === "Charisma").value;
    }
};