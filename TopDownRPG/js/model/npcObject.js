class NpcObject {
    constructor(x, y, width, height, image) {
        this.pos = {
            x,
            y,
        };
        this.size = {
            width,
            height,
        };
        this.image = image;
        this.collision = true;
        this.onCollision = () => {};
        this.interactable = true;
        this.onInteract = () => {};
    }
}
