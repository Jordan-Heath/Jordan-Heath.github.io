
function drawHUD() {
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText(`Coords: ${map.coords.x}, ${map.coords.y}`, 10, 30);
}