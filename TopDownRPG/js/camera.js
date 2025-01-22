const camera = {
    pos: {
        x: 0,
        y: 0
    },
    size: {
        width: 800, // Match canvas width
        height: 600, // Match canvas height
    },
    zoom: 1,
};

function updateCamera() {
    if (game.keys['wheel']) {
        if (game.keys['wheel'].deltaY < 0 && camera.zoom < 3) {
            camera.zoom *= 1.1;
        } else if (game.keys['wheel'].deltaY > 0 && camera.zoom > 0.5) {
            camera.zoom *= 0.9;
        }
        game.keys['wheel'] = false;
    }

    const zoom = camera.zoom;
    const playerCenterX = player.pos.x + player.size.width / 2;
    const playerCenterY = player.pos.y + player.size.height / 2;
    const halfScreenWidth = camera.size.width / 2;
    const halfScreenHeight = camera.size.height / 2;

    camera.pos.x = playerCenterX * zoom - halfScreenWidth;
    camera.pos.y = playerCenterY * zoom - halfScreenHeight;

    const minWorldX = -tileSize.width * zoom;
    const maxWorldX = (gridSize.width+1) * tileSize.width * zoom - camera.size.width;
    const minWorldY = -tileSize.height * zoom;
    const maxWorldY = (gridSize.height+1) * tileSize.height * zoom - camera.size.height;

    camera.pos.x = Math.max(minWorldX, Math.min(camera.pos.x, maxWorldX));
    camera.pos.y = Math.max(minWorldY, Math.min(camera.pos.y, maxWorldY));

    if (camera.pos.x === NaN || camera.pos.y === NaN) {
        camera.pos.x = 0;
        camera.pos.y = 0;
    }

    // if very zoomed out, center camera
    if (maxWorldX < 0) camera.pos.x = maxWorldX / 2;
    if (maxWorldY < 0) camera.pos.y = maxWorldY / 2;
}
