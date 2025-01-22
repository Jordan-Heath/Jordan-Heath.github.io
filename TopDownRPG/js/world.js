// World map (2D array of tile types)
const maps = [];
const map = {
    grid: [],
    walls: [],
    interactables: [],
    rows: 20,
    cols: 50,
    total: 1000,
    coords: {
        x: 0,
        y: 0,
        z: 0,
    }
};
const gridSize = {
    height: 20,
    width: 50,
    total: 20 * 50
};

function buildMap(x, y, z=0) {
    let existingMap = maps.find(m => {
        if (m.coords.x == x && m.coords.y == y && m.coords.z == z) {
            return m;
        }
    });

    if (existingMap) {
        console.log(`loading (${x}, ${y})`);

        map.grid = existingMap.grid;
        map.walls = existingMap.grid.flat().filter(tile => tile.collision);
        map.interactables = existingMap.grid.flat().filter(tile => tile.interactable);
        map.rows = existingMap.rows;
        map.cols = existingMap.cols;
        map.total = existingMap.total;
        map.coords = existingMap.coords;
    } else  {
        console.log(`building (${x}, ${y})`);
        map.walls = [];
        map.coords = {x, y, z};
        map.grid = [];

        for (let row = 0; row < gridSize.height; row++) {
            map.grid[row] = [];
    
            for (let col = 0; col < gridSize.width; col++) {
                const tile = new Tile(row, col);
    
                map.grid[row][col] = tile;
            }
        }
    
        tileTypes.dirt.spawn();
        tileTypes.shallowWater.spawn();
        tileTypes.deepWater.spawn();
        tileTypes.grass.spawn();
        tileTypes.weeds.spawn();
        tileTypes.void.spawn();

        maps.push({
            grid: map.grid,
            interactables: map.interactables,
            walls: map.walls,
            rows: map.rows,
            cols: map.cols,
            total: map.total,
            coords: {
                x: map.coords.x,
                y: map.coords.y,
                z: map.coords.z,
            }
        });
    }
}

function updateWorld() {
    if (game.keys['+']) {
        buildMap(0,0); // respawn at 0, 0
        player.pos.x = 800;
        player.pos.y = 480;
        game.keys['+'] = false;
    }
}

// Draw the map
function drawWorld(ctx) {
    ctx.save();
    ctx.translate(-camera.pos.x, -camera.pos.y);
    ctx.scale(camera.zoom, camera.zoom);

    for (let row = 0; row < map.rows; row++) {
        for (let col = 0; col < map.cols; col++) {
            const tile = map.grid[row][col];

            // Draw the tile
            ctx.drawImage(tile.image, tile.x, tile.y, tileSize.width, tileSize.height);
        }
    }

    ctx.restore();
}
