class Tile {
    constructor(x, y, elevationBias) {
        this.x = x;
        this.y = y;
        this.country = null;
        this.neighbours = [];

        this.prosperity = 0;
        this.development = 0.1;
        this.buildings = [];

        this.elevation = elevationBias + Math.random() * 10 - Math.random() * 10;
        this.elevation = this.elevation < 0 ? 0 : this.elevation;
        this.elevation = this.elevation > 5 ? 5 : this.elevation;

        this.terrain = game.terrain[Math.round(this.elevation)];
    }

    paintTerrain(terrain, elevation = terrain.elevation) {
        if (terrain) {
            this.elevation = elevation;
            this.terrain = terrain;
            this.calculateProsperity();
            if (!this.terrain.accessible) this.country?.loseTile(this);
        }
    }

    draw(x, y, size) {
        const tileMap = game.tileMap;
        tileMap.ctx.fillStyle = this.terrain.color;
        tileMap.ctx.fillRect(x, y, size, size);

        if (this.country) {
            //opacity
            tileMap.ctx.globalAlpha = 0.7;
            tileMap.ctx.fillStyle = this.country.color;
            tileMap.ctx.fillRect(x, y, size, size);
            tileMap.ctx.globalAlpha = 1;
        }

        if (this.country) {

            if (this.country.capitalTile === this) {
                tileMap.ctx.drawImage(document.getElementById('capital'), x, y, size, size);

            } else if (this.buildings.includes("developed3")) {
                tileMap.ctx.drawImage(document.getElementById('developed3'), x, y, size, size);

            } else if (this.buildings.includes("developed2")) {
                tileMap.ctx.drawImage(document.getElementById('developed2'), x, y, size, size);

            } else if (this.buildings.includes("developed1")) {
                tileMap.ctx.drawImage(document.getElementById('developed1'), x, y, size, size);

            } else if (this.buildings.includes("developed0")) {
                tileMap.ctx.drawImage(document.getElementById('developed0'), x, y, size, size);

            } else if (this.buildings.includes("dock")) {
                tileMap.ctx.drawImage(document.getElementById('dock'), x, y, size, size);
            }
        }
    }

    getNeighbours(tileMap = game.tileMap) {
        if (this.neighbours.length > 0) return this.neighbours;

        // top
        if (this.y > 0) 
            this.neighbours.push(tileMap.mapData[this.y - 1][this.x]);

        // bottom
        if (this.y < tileMap.mapHeight - 1) 
            this.neighbours.push(tileMap.mapData[this.y + 1][this.x]);

        // left
        if (this.x > 0) this.neighbours.push(tileMap.mapData[this.y][this.x - 1]);
        else this.neighbours.push(tileMap.mapData[this.y][tileMap.mapWidth - 1]);

        // right
        if (this.x < tileMap.mapWidth - 1) this.neighbours.push(tileMap.mapData[this.y][this.x + 1]);
        else this.neighbours.push(tileMap.mapData[this.y][0]);

        return this.neighbours;
    }

    belongsTo(country) {
        return this.country?.name === country.name;
    }

    isUnclaimed() {
        return this.country === null;
    }

    isAccessible() {
        return this.terrain.accessible;
    }

    evolveLand() {
        this.elevation += Math.random() * 0.2 - 0.1;
        this.elevation = this.getNeighbours().reduce((acc, neighbour) => acc + neighbour.elevation, this.elevation) / (this.getNeighbours().length + 1);
        if (this.elevation < 2) this.elevation *= 0.95;
        if (this.elevation > 2) this.elevation *= 1.05;

        this.paintTerrain(game.terrain[Math.round(this.elevation)], this.elevation);
    }

    canByTakenBy(country) {
        if (!this.isAccessible()) return false;
        if (this.belongsTo(country)) return false;

        return true;
    }

    develop() {
        this.development += 0.01;

        if (this.development > 0.8 && !this.buildings.includes("developed3")) this.buildings.push("developed3");
        if (this.development > 0.6 && !this.buildings.includes("developed2")) this.buildings.push("developed2");
        if (this.development > 0.4 && !this.buildings.includes("developed1")) this.buildings.push("developed1");
        if (this.development > 0.2 && !this.buildings.includes("developed0")) this.buildings.push("developed0");

        this.calculateProsperity();
    }

    calculateProsperity(country = this.country) {
        if (country) {
            const distanceToCapital = country.distanceToCapital(this)
            this.prosperity = (this.terrain.prosperity * this.development) / distanceToCapital;
        } else {
            this.prosperity = this.terrain.prosperity * this.development;
        }

        return this.prosperity;
    }
}