// Get canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Input state
const game = {
    keys: {},
    walls: [],
    interactables: [],
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    camera.size.width = canvas.width;
    camera.size.height = canvas.height;
}

function init() {
    // Event listeners
    window.addEventListener('keydown', (e) => (game.keys[e.key.toLowerCase()] = true));
    window.addEventListener('keyup', (e) => (game.keys[e.key.toLowerCase()] = false));

    //listen for touch events
    canvas.addEventListener('touchstart', (e) => {game.keys['click'] = {x: e.touches[0].clientX, y: e.touches[0].clientY}});
    canvas.addEventListener('touchmove', (e) => {if (game.keys['click']) game.keys['click'] = {x: e.touches[0].clientX, y: e.touches[0].clientY}});
    canvas.addEventListener('touchend', (e) => {game.keys['click'] = false});

    //listen for mouse events
    canvas.addEventListener('mousedown', (e) => {game.keys['click'] = {x: e.clientX, y: e.clientY}});
    canvas.addEventListener('mousemove', (e) => {if (game.keys['click']) game.keys['click'] = {x: e.clientX, y: e.clientY}});
    // canvas.addEventListener('mouseup', (e) => {game.keys['click'] = false});
    window.addEventListener('resize', resizeCanvas);
    //listen for mousewheel
    canvas.addEventListener('wheel', (e) => { game.keys['wheel'] = e; });

    resizeCanvas();
    buildMap(0,0);           // Build the tile-based world
    updateCamera();       // Update camera position
}

// Game loop
function update() {
    movePlayer(game.keys, map.walls); // Walls currently empty
    updateCamera();       // Update camera position
    updateWorld();        // Update the world

    updateDebug();        // Update debug info
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWorld(ctx);       // Draw the tile-based world
    drawPlayer(ctx);      // Draw the player

    drawDebug(ctx);       // Draw debug info
}

function gameLoop() {
    try {
        update();
        draw();
    } catch (e) {
        console.error(e);
    }
    requestAnimationFrame(gameLoop);
    // setTimeout(gameLoop, 1000 / 3);
}

// Start the game loop
init();
gameLoop();
