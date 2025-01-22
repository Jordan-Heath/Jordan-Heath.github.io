//add a click indicator to the canvas when the page is clicked

const debugSettings = {
    showCoords: true,
    showCamera: true,
    showPlayer: true,
    showZoom: true,
    showKeys: true,
    showClick: true,
    showPlayerInteractionBox: false,
}

let debugClick = false;


function updateDebug() {
    if (game.keys['click']) {
        const click = game.keys['click'];
        debugClick = {
            x: (click.x/camera.zoom)  + (camera.pos.x/camera.zoom),
            y: (click.y/camera.zoom) + (camera.pos.y/camera.zoom),
        };
    }
}

function drawDebug(ctx) {
    ctx.save();

    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText(`Coords: ${map.coords.x}, ${map.coords.y}`, 10, 30);
    ctx.fillText(`Camera: ${camera.pos.x}, ${camera.pos.y}`, 10, 60);
    ctx.fillText(`Player: ${player.pos.x}, ${player.pos.y}`, 10, 90);
    ctx.fillText(`Zoom: ${camera.zoom}`, 10, 120);
    ctx.fillText(`Keys: ${Object.keys(game.keys).filter(key => game.keys[key]).join(', ')}`, 10, 150);

    ctx.restore();


    ctx.save();
    ctx.translate(-camera.pos.x, -camera.pos.y);
    ctx.scale(camera.zoom, camera.zoom);

    if (debugSettings.showPlayerInteractionBox) {
        // Define player's interaction rectangles
        const interactionRect = { // Left
            x: player.pos.x - player.size.width / 2,
            y: player.pos.y - player.size.height / 2,
            width: player.size.width * 2,
            height: player.size.height * 2,
        }

        // Draw player's interaction rectangles (for debugging, can be removed in production)
        ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)'; // Semi-transparent red
        ctx.strokeRect(interactionRect.x, interactionRect.y, interactionRect.width, interactionRect.height);
    }

    ctx.restore();
}