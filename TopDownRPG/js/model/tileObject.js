const tileSize = {
    width: 32,
    height: 48
};

// Tile images
const tileTypes = {
    void: {
        id: 'vo',
        name: 'void',
        image: createImage('./assets/images/tiles/void.png'),
        spawn: () => { // outer most tiles are void, some fraying
            map.grid.forEach((row) => {
                row.forEach((tile) => {
                    if (tile.col == 0 || tile.col == map.cols - 1 || tile.row == 0 || tile.row == map.rows - 1) 
                        tile.assignTileType(tileTypes.void);
                });
            });
        },

        collision: true,
        onCollision: () => { 
            console.log('void collided with');

            let dx = 0;
            let dy = 0;

            //move player to opposite side of the map, then build new map
            if (player.pos.x < 2*tileSize.width) { // left
                player.pos.x = map.cols * tileSize.width - 2*tileSize.width;
                dx -= 1;
            } else if (player.pos.x > map.cols * tileSize.width - 3*tileSize.width) { // right
                player.pos.x = tileSize.width;
                dx += 1;
            }

            if (player.pos.y < 2*tileSize.height) { // top
                player.pos.y = map.rows * tileSize.height - 2*tileSize.height;
                dy -= 1;
            } else if (player.pos.y > map.rows * tileSize.height - 3*tileSize.height) { // bottom
                player.pos.y = tileSize.height;
                dy += 1;
            }

            player.movingTo = null;

            buildMap(map.coords.x - dx, map.coords.y - dy, map.coords.z); 
        },

        interactable: false,
        onInteract: (tile) => {  console.log('void interacted with'); }
    },
    dirt: {
        id: 'di',
        name: 'dirt',
        image: createImage('./assets/images/tiles/dirt.png'),
        spawn: () => { // Set all tiles to dirt
            map.grid.forEach((row) => {
                row.forEach((tile) => {
                    tile.assignTileType(tileTypes.dirt);
                    tile.assignNeighbouringTiles();
                });
            });
        },

        collision: false,
        onCollision: () => { console.log('dirt collided with'); },

        interactable: false,
        onInteract: (tile) => { console.log('dirt interacted with'); }
    },
    grass: {
        id: 'gr',
        name: 'grass',
        image: createImage('./assets/images/tiles/grass.png'),
        spawn: (tile) => { // Set half of dirty/grassy tiles to grass
            let grassChance = Math.random() * 0.3 + 0.2;

            map.grid.forEach((row) => {
                row.forEach((tile) => {
                    // Check if the tile has at least 3/4 dirt tile neighbours
                    let matchingNeighbours = tile.numberOfMatchingNeighbours(tileTypes.dirt);
                    matchingNeighbours += tile.numberOfMatchingNeighbours(tileTypes.grass);
                    if (matchingNeighbours >= 3 && Math.random() < grassChance) tile.assignTileType(tileTypes.grass);
                });
            });
        },

        collision: false,
        onCollision: () => { console.log('grass collided with'); },

        interactable: false,
        onInteract: (tile) => { console.log('grass interacted with'); }
    },
    weeds: {
        id: 'we',
        name: 'weeds',
        image: createImage('./assets/images/tiles/weeds.png'),
        spawn: () => { // set very grassy areas to weeds
            map.grid.forEach((row) => {
                row.forEach((tile) => {
                    let matchingNeighbours = tile.numberOfMatchingNeighbours(tileTypes.grass);
                    if (matchingNeighbours >= 4) tile.assignTileType(tileTypes.weeds);
                });
            })
        },

        collision: true,
        onCollision: () => { console.log('weeds collided with'); },

        interactable: true,
        onInteract: (tile) => { 
            tile.assignTileType(tileTypes.grass);
        }
    },
    shallowWater: {
        id: 'sw',
        name: 'shallowWater',
        image: createImage('./assets/images/tiles/shallow-water.png'),
        spawn: () => { // spawn pools of water
            const numberOfPools = Math.random() * 5 + 5;
            const waterTiles = new Set();
            let growthChance = Math.random() * 0.2 + 0.2;

            for (let poolNumber = 0; poolNumber < numberOfPools; poolNumber++) {
                let row = Math.floor(Math.random() * map.rows);
                let col = Math.floor(Math.random() * map.cols);
                waterTiles.add(map.grid[row][col]);
            }

            for (growthChance; growthChance > 0; growthChance -= 0.1) {
                waterTiles.forEach((tile) => {
                    const neighbours = tile.getNeighbourTiles();
                    neighbours.forEach((neighbour) => {
                        if (neighbour.id === tileTypes.dirt.id && Math.random() < growthChance) {
                            waterTiles.add(neighbour);
                            neighbour.assignTileType(tileTypes.shallowWater);
                        }
                    });
                });
            }
        },

        collision: false,
        onCollision: () => { console.log('shallow water collided with'); },

        interactable: false,
        onInteract: (tile) => { console.log('shallow water interacted with'); }
    },
    deepWater: {
        id: 'dw',
        name: 'deepWater',
        image: createImage('./assets/images/tiles/deep-water.png'),
        spawn: () => { // surrounded water becomes deep
            map.grid.forEach((row) => {
                row.forEach((tile) => {
                    let matchingNeighbours = tile.numberOfMatchingNeighbours(tileTypes.shallowWater);
                    matchingNeighbours += tile.numberOfMatchingNeighbours(tileTypes.deepWater);
                    if (matchingNeighbours == 4) tile.assignTileType(tileTypes.deepWater);
                });
            });
        },

        collision: true,
        onCollision: () => { console.log('deep water collided with'); },

        interactable: false,
        interact: (tile) => { console.log('deep water interacted with'); }
    }
}

class Tile {
    constructor(row, col) {
        this.x = col * tileSize.width;
        this.y = row * tileSize.height;

        this.width = tileSize.width;
        this.height = tileSize.height;

        this.row = row;
        this.col = col;
        
        this.leftTile = null;
        this.rightTile = null;
        this.topTile = null;
        this.bottomTile = null;

        this.id = tileTypes.dirt.id;
        this.name = tileTypes.dirt.name;
        this.image = tileTypes.dirt.image;

        this.collision = tileTypes.dirt.collision;
        this.onCollision = tileTypes.dirt.onCollision;

        this.interactable = tileTypes.dirt.interactable;
        this.onInteract = tileTypes.dirt.onInteract;
    }

    assignTileType(tileType) {
        this.id = tileType.id;
        this.name = tileType.name;
        this.image = tileType.image;

        this.collision = tileType.collision;
        this.onCollision = tileType.onCollision;

        this.interactable = tileType.interactable;
        this.onInteract = tileType.onInteract;


        if (this.interactable) {
            if (!map.interactables.includes(this))
                map.interactables.push(this);
        } else {
            map.interactables = map.interactables.filter((tile) => tile !== this);
        }

        if (this.collision) {
            if (!map.walls.includes(this))
                map.walls.push(this);
        } else {
            map.walls = map.walls.filter((tile) => tile !== this);
        }
    }

    assignNeighbouringTiles() {
        if (this.col > 0) 
            this.leftTile = map.grid[this.row][this.col - 1];
        if (this.col < map.cols) 
            this.rightTile = map.grid[this.row][this.col + 1];
        if (this.row > 0) 
            this.topTile = map.grid[this.row - 1][this.col];
        if (this.row < map.rows - 1) 
            this.bottomTile = map.grid[this.row + 1][this.col];
    }

    numberOfMatchingNeighbours(tileType) {
        let count = 0;

        if (this.leftTile && this.leftTile.id === tileType.id) 
            count++;
        if (this.rightTile && this.rightTile.id === tileType.id) 
            count++;
        if (this.topTile && this.topTile.id === tileType.id) 
            count++;
        if (this.bottomTile && this.bottomTile.id === tileType.id) 
            count++;

        return count;
    }

    getNeighbourTiles() {
        let neighbours = [];

        if (this.leftTile) 
            neighbours.push(this.leftTile);
        if (this.rightTile) 
            neighbours.push(this.rightTile);
        if (this.topTile) 
            neighbours.push(this.topTile);
        if (this.bottomTile) 
            neighbours.push(this.bottomTile);

        return neighbours;
    }

    randomNeighbourTile() {
        let neighbours = this.getNeighbourTiles();

        return neighbours[Math.floor(Math.random() * neighbours.length)];
    }
}
