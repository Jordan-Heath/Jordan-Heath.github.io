const player = {
    pos: {
        x: 800,
        y: 480,
    },
    size: {
        width: 30,
        height: 46,
    },
    speed: 1,
    image: createImage('./assets/images/characters/player.png'),
    movingTo: null,
    location: {
        x: 0,
        y: 0,
    },
};

function drawPlayer(ctx) {
    ctx.save();
    ctx.translate(-camera.pos.x, -camera.pos.y);
    ctx.scale(camera.zoom, camera.zoom);

    // Draw the player image
    ctx.drawImage(
        player.image,
        player.pos.x,
        player.pos.y,
        player.size.width,
        player.size.height
    );

    if (player.movingTo) {
        // draw the target location
        ctx.fillStyle = "#d74200";
        ctx.beginPath();
        ctx.arc(
            player.movingTo.x + player.size.width/2, 
            player.movingTo.y + player.size.height/2, 
            5, 
            0, 
            2 * Math.PI);
        ctx.fill();
    }

    ctx.restore();
}

function movePlayer(keys, walls) {
    const { pos, size } = player;
    const speed = keys['shift'] ? player.speed * 2 : player.speed;
    const isMoving = keys['arrowleft'] || keys['arrowright'] || keys['arrowup'] || keys['arrowdown'] || keys['a'] || keys['d'] || keys['w'] || keys['s'] || keys['click'] || player.movingTo;
    let deltaX = 0;
    let deltaY = 0;

    if (keys['arrowleft'] || keys['a']) deltaX = -speed;
    if (keys['arrowright'] || keys['d']) deltaX = speed;
    if (keys['arrowup'] || keys['w']) deltaY = -speed;
    if (keys['arrowdown'] || keys['s']) deltaY = speed;

    if (deltaX !== 0 && deltaY !== 0) {
        keys['click'] = false;
        player.movingTo = null;
    }

    if (keys['click']) {
        //validate the click is good data
        if (isNaN(keys['click'].x) || isNaN(keys['click'].y)) {
            throw new Error('Click data is NaN');
        }

        player.movingTo = {
            x: (keys['click'].x + camera.pos.x) / camera.zoom - (player.size.width/2),
            y: (keys['click'].y + camera.pos.y) / camera.zoom - (player.size.height/2),
        };

        if (keys['shift']) {
            player.pos.x = player.movingTo.x;
            player.pos.y = player.movingTo.y;
            player.movingTo = null;
            keys['click'] = false;
            keys['e'] = true; // Interact with objects
        }

        keys['click'] = false;
    }

    if (player.movingTo) {
        const targetX = player.movingTo.x;
        const targetY = player.movingTo.y;

        const distanceX = targetX - player.pos.x;
        const distanceY = targetY - player.pos.y;

        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        const travelTime = distance < 100 ? distance : distance / 2;

        deltaX = distanceX / travelTime;
        deltaY = distanceY / travelTime;

        if (Math.abs(distanceX) < 2 && Math.abs(distanceY) < 2) {
            player.movingTo = null;
        }
    }

    if (isMoving) {
        const nextX = pos.x + deltaX;
        if (isNaN(nextX)) throw new Error('Next X is NaN');
        const nextY = pos.y + deltaY;
        if (isNaN(nextY)) throw new Error('Next Y is NaN');

        const collisionX = walls.find(wall => isColliding({ x: nextX, y: pos.y, width: size.width, height: size.height }, wall));
        const collisionY = walls.find(wall => isColliding({ x: collisionX ? pos.x : nextX, y: nextY, width: size.width, height: size.height }, wall));

        if (!collisionX && !isNaN(nextX)) pos.x = nextX;
        if (!collisionY && !isNaN(nextY)) pos.y = nextY;

        if (collisionX || collisionY) {
            collisionX?.onCollision(collisionX);
            collisionY?.onCollision(collisionY);
        }

        if (player.movingTo && (collisionX?.interactable || collisionY?.interactable)) {
            collisionX?.onInteract(collisionX);
            collisionY?.onInteract(collisionY);
            player.movingTo = null;
        }
    }

    if (keys[' '] || keys['e']) {
        interactWithObjects();
        keys[' '] = false;
        keys['e'] = false;
    }

    if (isNaN(player.pos.x) || isNaN(player.pos.y)) {
        player.pos.x = 800;
        player.pos.y = 480;
        throw new Error('Player position is NaN');
    }
}

function isColliding(rect, wall) {
    return (
        rect.x < wall.x + wall.width &&
        rect.x + rect.width > wall.x &&
        rect.y < wall.y + wall.height &&
        rect.y + rect.height > wall.y
    );
}

function interactWithObjects() {
    //check a player sized object in all directions of the player, if they collide with an interactable object, trigger it
    const playerInteractionRect = {
        x: player.pos.x - player.size.width / 2,
        y: player.pos.y - player.size.height / 2,
        width: player.size.width * 2,
        height: player.size.height * 2,
    }

    for (const interactable of map.interactables) {
        if (isColliding(playerInteractionRect, interactable)) {
            interactable.onInteract(interactable);
            break;
        }
    }
}