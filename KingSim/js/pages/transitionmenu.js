class TransitionMenuClass {
    constructor() {
        this.element = document.getElementById("transition-screen");
    }

    show() {
        MainMenu.hide();
        BackgroundMenu.hide();
        this.element.classList.add("active");
        GameScreen.hide();
    }

    hide() {
        this.element.classList.remove("active");
    }

    showIntro() {
        this.show();

        const text = Intro.map(line => line.text());
        const elements = text.map(line => {
            const p = document.createElement("p");
            p.className = "line";
            return p;
        });

        text.push("Start Game");
        const button = document.createElement("button");
        button.classList.add("button");
        button.onclick = () => GameScreen.show();
        elements.push(button);

        this.typeWriterEffect(text, elements);
    }

    showEnding() {
        this.show();

        const text = Ending.map(line => line.text());
        const elements = text.map(line => {
            const p = document.createElement("p");
            p.className = "line";
            return p;
        });

        text.push("Return to Main Menu");
        const button = document.createElement("button");
        button.classList.add("button");
        button.onclick = () => MainMenu.show();
        elements.push(button);

        this.typeWriterEffect(text, elements);
    }

    typeWriterEffect(strings, elements) {
        // Create a function to type out each string
        function typeString(string, container, callback) {
            let index = 0;
            const interval = setInterval(() => {
                if (index < string.length) {
                    container.textContent += string[index];
                    index++;
                } else {
                    clearInterval(interval);
                    callback(); // Call the callback after finishing
                }
            }, 10); // Delay between letters (adjust as needed)
        }
    
        // Iterate over the strings array and write them
        function writeStrings(index) {
            if (index >= strings.length) return;
    
            TransitionMenu.element.appendChild(elements[index]); // Add a new div for the string
    
            typeString(strings[index], elements[index], () => writeStrings(index + 1));
        }
    
        // Start the writing process
        writeStrings(0);
    }
};

const TransitionMenu = new TransitionMenuClass();