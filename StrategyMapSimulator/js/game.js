class Game {
    constructor() {
        this.eventListeners = {};
        this.tickRates = [
            500,
            250,
            100,
            50,
            10
        ];
        this.tickRate = this.tickRates[2];
        this.terrain = [
            new Terrain('DeepWater', 0, false, 0, '#255859'),
            new Terrain('Water', 1, false, 0, '#5f999b'),
            new Terrain('Beach', 2, true, 2, '#f8cd6e'),
            new Terrain('Grass', 3, true, 3, '#899d5e'),
            new Terrain('Hill', 4, true, 2, '#76583f'),
            new Terrain('Mountain', 5, false, 0, '#dddddd'),
        ];
        this.countries = [];
        this.date = {
            day: 1,
            month: 0,
            year: 0
        }

        this.userInterface = new UserInterface();
    }

    attachEventListeners() {
        this.tileMap.canvas.addEventListener('mousedown', e => this.eventListeners.mouseDownListener(e));
        this.tileMap.canvas.addEventListener('mousemove', e => this.eventListeners.mouseMoveListener(e));
        this.tileMap.canvas.addEventListener('mouseup', e => this.eventListeners.mouseUpListener(e));
        this.tileMap.canvas.addEventListener('mouseleave', e => this.eventListeners.mouseLeaveListener(e));
        this.tileMap.canvas.addEventListener('wheel', e => this.eventListeners.wheelListener(e));
        window.addEventListener('resize', e => this.eventListeners.resizeListener(e));

        //add event listeners for number keys 1 2 3 4 5 to set speed
        document.addEventListener('keydown', e => {
            if (e.key == '1') this.changeSpeed(0);
            if (e.key == '2') this.changeSpeed(1);
            if (e.key == '3') this.changeSpeed(2);
            if (e.key == '4') this.changeSpeed(3);
            if (e.key == '5') this.changeSpeed(4);
            if (e.key == ' ') this.playPause();
        })
    }

    init() {
        this.tileMap = new TileMap('mapCanvas', this.countries);
        this.updateInterval = setInterval(() => this.updateLoop(), this.tickRate);
        this.drawLoop();
        this.attachEventListeners();
    }

    updateLoop() {
        if (this.tileMap) {
            this.update();
        }
    }

    drawLoop() {
        if (this.tileMap) {
            this.draw();
        }

        requestAnimationFrame(() => this.drawLoop());
    }

    update() {
        this.countries.forEach(country => country.update());
        this.updateDate();
    }
    
    draw() {
        this.tileMap.drawMap();
        this.userInterface.draw();
    }

    playPause() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
        } else {
            this.updateInterval = setInterval(() => this.updateLoop(), this.tickRate);
        }

        this.userInterface.playPauseButton.innerHTML = this.updateInterval ? '⏸︎' : '▶';
    }
    
    changeSpeed(speed) {
        this.tickRate = this.tickRates[speed];
        console.log(this.tickRate);
        clearInterval(this.updateInterval);
        this.updateInterval = setInterval(() => this.updateLoop(), this.tickRate);

        this.userInterface.playPauseButton.innerHTML = this.updateInterval ? '⏸︎' : '▶';

        this.userInterface.speedButtons.forEach((button, index) => button.classList.remove('active'));
        for (let i = 0; i <= speed; i++) {
            this.userInterface.speedButtons[i].classList.add('active');
        }
    }

    updateDate() {
        this.date.day += 1;
        const daysPerMonth = year % 4 == 0 ? DaysPerMonthLeapYear : DaysPerMonth;
        if (this.date.day > daysPerMonth[this.date.month]) {
            this.date.day = 1;
            this.date.month += 1;
            if (this.date.month > 11) {
                this.date.month = 1;
                this.date.year += 1;
            }
        }
    }
}

const game = new Game();
game.init();