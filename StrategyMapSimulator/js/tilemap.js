class TileMap {
    constructor(canvasId, countries) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.tileSizeBase = 10;
        this.tileSize = this.tileSizeBase;
        this.mapWidth = 128; // in tiles
        this.mapHeight = 64; // in tiles

        this.offsetX = 0; // current X offset of the map
        this.offsetY = 0; // current Y offset of the map

        this.isDragging = false;
        this.dragStartX = 0;
        this.dragStartY = 0;

        this.isDrawing = false;
        this.drawStartX = 0;
        this.drawStartY = 0;

        this.mapEvolutionPasses = 5;
        this.spawnDelay = 300;
        this.mapData = [];
        
        this.generateRandomMap(countries);

        this.initEventListeners();
    }

    generateRandomMap(countries, stage = 0) {
        // STAGE 0: spawn a map of tiles
        if (stage === 0) {
            const elevationBiasMinimum = -3;
            const elevationBiasVariance = 5
            let elevationBias;

            for (let y = 0; y < this.mapHeight; y++) {
                // made the parabola here: https://www.desmos.com/calculator/lac2i0bgum
                elevationBias = -(4*elevationBiasVariance)*(y/this.mapHeight)*(y/this.mapHeight) + (4*elevationBiasVariance)*(y/this.mapHeight) + elevationBiasMinimum;
                
                this.mapData[y] = new Array(this.mapWidth);

                for (let x = 0; x < this.mapWidth; x++) {
                    this.mapData[y][x] = new Tile(x, y, elevationBias);
                }
            }

            console.log("Stage 0 Complete: Map generated");
            stage++;
            setTimeout(() => {this.generateRandomMap(countries, stage)}, this.spawnDelay);
            return;
        }

        // STAGE 1: evolve the map
        if (stage === 1) {
            if (this.mapEvolutionPasses > 1) {
                for (let y = 0; y < this.mapHeight; y++) {
                    for (let x = 0; x < this.mapWidth; x++) {
                        this.mapData[y][x].evolveLand();
                    }
                }
                this.mapEvolutionPasses--;
            } else {
                console.log("Stage 1 Complete: Map flattened");
                stage++;
                setTimeout(() => {this.generateRandomMap(countries, stage)}, this.spawnDelay);
                return;
            }
        }

        // STAGE 2: spawn countries
        if (stage === 2) {
            let availableTiles = this.mapData.flat().filter(t => t.canByTakenBy(new Country('', '')) && t.isUnclaimed());
            let index = 0;

            while (availableTiles.length > 0) {
                const country = new Country(CountryNames[index % CountryNames.length], Colors[index % Colors.length]);
                game.countries.push(country);
                const randomTile = availableTiles[Math.floor(Math.random() * availableTiles.length)];
                country.gainTile(randomTile);
                country.capitalTile = randomTile;

                index++;
                availableTiles = availableTiles.filter(t => country.distanceToCapital(t) > 30);
            }

            console.log("Stage 2 Complete: Countries spawned");
            stage++;
            setTimeout(() => {this.generateRandomMap(countries, stage)}, this.spawnDelay);
            game.userInterface.selectedCountry = countries[0];
            return;
        }

        if (stage < 3) setTimeout(() => {this.generateRandomMap(countries, stage)}, this.spawnDelay);
    }

    /**
     * Draws the visible portion of the map on the canvas.
     */
    drawMap() {
        // Clear the entire canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Calculate the visible range of columns and rows based on current offset and tile size
        const startCol = Math.floor(this.offsetX / this.tileSize);
        const startRow = Math.floor(this.offsetY / this.tileSize);
        const endCol = startCol + Math.ceil(this.canvas.width / this.tileSize) + 1;
        const endRow = startRow + Math.ceil(this.canvas.height / this.tileSize) + 1;

        // Loop through each tile in the visible range
        for (let y = startRow; y < endRow; y++) {
            for (let x = startCol; x < endCol; x++) {
                // Adjust x for wrapping horizontally across the map
                let rollOverX = x % this.mapWidth;
                if (rollOverX < 0) rollOverX += this.mapWidth;

                // Retrieve the tile at the current position
                const tile = this.mapData[y]?.[rollOverX];

                // Draw the tile if it exists
                tile?.draw(
                    x * this.tileSize - this.offsetX, 
                    y * this.tileSize - this.offsetY, 
                    this.tileSize
                );
            }
        }
    }

    initEventListeners() {
        game.eventListeners.mouseDownListener = (e) => this.startDraggingMap(e);
        game.eventListeners.mouseMoveListener = (e) => this.draggingMap(e);
        game.eventListeners.mouseUpListener = () => this.stopDraggingMap();
        game.eventListeners.mouseLeaveListener = () => this.stopDraggingMap();
        game.eventListeners.wheelListener = (e) => this.zoomMap(e);
        game.eventListeners.resizeListener = () => this.onResize();
    }

    startDraggingMap(e) {
        this.isDragging = true;
        this.dragStartX = e.clientX;
        this.dragStartY = e.clientY;
    }

    draggingMap(e) {
        if (this.isDragging) {
            const deltaX = e.clientX - this.dragStartX;
            const deltaY = e.clientY - this.dragStartY;
            this.dragStartX = e.clientX;
            this.dragStartY = e.clientY;

            this.offsetX -= deltaX;
            this.offsetY -= deltaY;

            this.drawMap();
        }
    }

    stopDraggingMap() {
        this.isDragging = false;
    }

    selectCountry(e) {
        let x = Math.floor((e.clientX + this.offsetX) / this.tileSize);
        let y = Math.floor((e.clientY + this.offsetY) / this.tileSize);

        //rollover x
        while (x < 0) x += this.mapWidth;
        while (x >= this.mapWidth) x -= this.mapWidth;

        // console.log(`Selected tile coordinates: (${x}, ${y})`);

        const country = this.mapData[y]?.[x]?.country;

        // if (country) {
        //     console.log(`Selected country: ${country.name}`);
        // } else {
        //     console.log('No country selected');
        // }

        game.userInterface.selectedCountry = country ?? null;
    }

    startDrawingOnMap(e) {
        this.isDrawing = true;
        this.drawingOnMap(e);
    }

    drawingOnMap(e) {
        if (this.isDrawing) {
            let x = Math.floor((e.clientX + this.offsetX) / this.tileSize);
            let y = Math.floor((e.clientY + this.offsetY) / this.tileSize);

            //rollover x
            while (x < 0) x += this.mapWidth;
            while (x >= this.mapWidth) x -= this.mapWidth;

            const tile = this.mapData[y]?.[x];
            if (tile) {
                tile.paintTerrain(game.userInterface.drawButtonSetting);

                game.countries.forEach(country => country.refresh());
            }
        }
    }

    stopDrawingOnMap() {
        this.isDrawing = false;
    }

    zoomMap(e) {
        e.preventDefault();

        const zoomFactor = 1.1;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Convert mouse position to map coordinates
        const mapX = (mouseX + this.offsetX) / this.tileSize;
        const mapY = (mouseY + this.offsetY) / this.tileSize;

        const minTileSize = 10;
        const maxTileSize = 100;

        if (e.deltaY > 0 && this.tileSize > minTileSize) {
            // Zoom in
            this.tileSize = Math.max(minTileSize, this.tileSize / zoomFactor);
        } else if (e.deltaY < 0 && this.tileSize < maxTileSize) {
            // Zoom out
            this.tileSize = Math.min(maxTileSize, this.tileSize * zoomFactor);
        }

        // Adjust offsets to keep the zoom centered around the mouse
        this.offsetX = mapX * this.tileSize - mouseX;
        this.offsetY = mapY * this.tileSize - mouseY;

        this.drawMap();
    }

    onResize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.drawMap();
    }
}