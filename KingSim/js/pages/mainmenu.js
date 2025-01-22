class MainMenuClass {
    constructor() {
        this.element = document.getElementById("main-menu-screen");
    }

    show() {
        this.element.classList.add("active");
        BackgroundMenu.hide();
        TransitionMenu.hide();
        GameScreen.hide();

        this.build();
    }

    hide() {
        this.element.classList.remove("active");
    }

    build() {
        this.element.innerHTML = "";

        //h1
        const h1 = document.createElement("h1");
        h1.innerText = "Fantasy Decision Game";
        this.element.appendChild(h1);

        //buttons
        const newGameButton = document.createElement("button");
        newGameButton.innerText = "New Game";
        newGameButton.onclick = () => MainMenu.startNewGame();
        this.element.appendChild(newGameButton);

        const continueGameButton = document.createElement("button");
        continueGameButton.innerText = "Continue Game";
        if (!localStorage.getItem("save")) continueGameButton.disabled = true;
        continueGameButton.onclick = () => MainMenu.continueGame();
        this.element.appendChild(continueGameButton);
    }

    startNewGame() {
        BackgroundMenu.show();
        MainMenu.hide();
    }

    continueGame() {
        // TODO: implement loading game from local storage
    }
}

const MainMenu = new MainMenuClass();