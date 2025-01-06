class Country {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.size = 1;

        this.money = 0;
        this.score = 0;

        this.growthChance = Math.random() / 2;
        this.attackChance = Math.random() / 2;
        this.defenseChance = Math.random() / 2;
        this.developChance = Math.random() / 2;
        this.governmentalStability = 1 - Math.random()/100;

        this.capitalTile = null;
        this.tiles = [];
        this.neighbouringTiles = [];
    }

    updateTiles(tileMap = game.tileMap) {
        // get all tiles that are owned by this country
        this.tiles = [];

        for (let y = 0; y < tileMap.mapHeight; y++) {
            for (let x = 0; x < tileMap.mapWidth; x++) {
                const tile = tileMap.mapData[y][x];
                if (tile.belongsTo(this)) {
                    this.tiles.push(tile);
                }
            }
        }
    }

    updateNeighbouringTiles(tileMap = game.tileMap) {
        // get all tiles that are adjacent to tiles owned by this country
        this.neighbouringTiles = [];

        this.tiles.forEach(tile => {
            tile.getNeighbours(tileMap).forEach(neighbour => {
                this.neighbouringTiles.push(neighbour);
            });
        });
    }

    refresh() {
        this.updateTiles();
        this.updateNeighbouringTiles();
    }

    update() {
        if (this.tiles.length === 0) return;
        if (this.capitalTile.country !== this) this.shrink();
        if (this.neighbouringTiles.length === 0) this.refresh();

        this.getTaxes();
        this.governmentalChange();

        const developableTiles = this.tiles.filter(tile => tile.isAccessible() && tile.development < 1);
        const accessibleTiles = this.neighbouringTiles.filter(tile => tile.isAccessible() && tile.country === null);
        const enemyTiles = this.neighbouringTiles.filter(tile => tile.country !== null);

        const canDevelop = developableTiles.length > 0 && this.money >= this.size;
        const canExpand = accessibleTiles.length > 0 && this.money >= 2*this.size;
        const canAttack = enemyTiles.length > 0 && this.money >= 3*this.size;
        const canReclaimLand = !canExpand && !canAttack && this.money >= 4*this.size;

        if (canAttack && this.attackChance > Math.random()) this.attack(enemyTiles);
        else if (canDevelop && this.developChance > Math.random()) this.develop(developableTiles);
        else if (canExpand && this.growthChance > Math.random()) this.expand(accessibleTiles);
        else if (canReclaimLand) this.reclaimLand();

        this.size = this.tiles.length;
        this.calculateScore();
    }

    attack(attackableTiles = this.neighbouringTiles.filter(tile => tile.country !== null && tile.country !== this)) {
        if (attackableTiles.length > 0) {
            const tileToAttack = attackableTiles.reduce((mostProsperousTileSoFar, currentTile) => {
                return currentTile.calculateProsperity(this) > mostProsperousTileSoFar.calculateProsperity(this) ? currentTile : mostProsperousTileSoFar;
            }, attackableTiles[0]);

            if (tileToAttack.country.defenseChance + tileToAttack.development/2 < Math.random()) {
                tileToAttack.country.loseTile(tileToAttack);
                this.gainTile(tileToAttack);
                this.money -= 3*this.size;
            }
        }
    }

    develop(developableTiles = this.tiles.filter(tile => tile.isAccessible() && tile.development < 1)) {
        developableTiles.sort((a, b) => b.terrain.prosperity - a.terrain.prosperity);

        const tileToDevelop = developableTiles[0];
        this.money -= 1*this.size;
        tileToDevelop.develop();
    }

    expand(unclaimedTiles = this.neighbouringTiles.filter(tile => tile.isUnclaimed())) {

        if (unclaimedTiles.length > 0) {
            const mostProsperousTile = unclaimedTiles.reduce((mostProsperousTileSoFar, currentTile) => {
                return currentTile.calculateProsperity(this) > mostProsperousTileSoFar.calculateProsperity(this) ? currentTile : mostProsperousTileSoFar;
            }, unclaimedTiles[0]);

            this.gainTile(mostProsperousTile);
            this.money -= 2*this.size;
        }
    }

    reclaimLand() {
        const tileToReclaim = this.neighbouringTiles[Math.floor(Math.random() * this.neighbouringTiles.length)];
        tileToReclaim.buildings.push('dock');

        this.gainTile(tileToReclaim);
        this.money -= 4*this.size;
    }

    shrink() {
        this.tiles.sort((a, b) => b.calculateProsperity(this) - a.calculateProsperity(this));

        const tileToShrink = this.tiles[0];
        this.loseTile(tileToShrink);
    }

    governmentalChange() {
        if (Math.random() > this.governmentalStability) {
            this.growthChance += Math.random() / 10 - 0.05;
            this.attackChance += Math.random() / 10 - 0.05;
            this.defenseChance += Math.random() / 10 - 0.05;
            this.developChance += Math.random() / 10 - 0.05;

            this.growthChance = this.growthChance < 0 ? 0 : this.growthChance;
            this.attackChance = this.attackChance < 0 ? 0 : this.attackChance;
            this.defenseChance = this.defenseChance < 0 ? 0 : this.defenseChance;
            this.developChance = this.developChance < 0 ? 0 : this.developChance;

            this.growthChance = this.growthChance > 1 ? 1 : this.growthChance;
            this.attackChance = this.attackChance > 1 ? 1 : this.attackChance;
            this.defenseChance = this.defenseChance > 1 ? 1 : this.defenseChance;
            this.developChance = this.developChance > 1 ? 1 : this.developChance;
        }
    }

    gainTile(tile) {
        // inefficient method - redo everything
        // tile.country = this;
        // this.refresh();

        // efficient method
        // update the tile
        tile.country = this;
        // remove from neighbouring tiles
        this.neighbouringTiles = this.neighbouringTiles.filter(t => t !== tile);
        // add to tiles
        this.tiles.push(tile);
        // add it's neighbouring tiles to neighbouring tiles
        this.neighbouringTiles.push(...tile.getNeighbours().filter(t => !t.belongsTo(this)));
    }

    loseTile(tile) {
        // inefficient method - redo everything
        tile.country = null;
        this.refresh()

        // efficient method
        // remove from tiles
        // this.tiles = this.tiles.filter(t => t !== tile);
        // remove from neighbouring tiles if they are not neighbouring another of this country's tiles
            // too difficult?
    }

    getTaxes() {
        // add the prosperity of every tile owned by this country
        this.tiles.forEach(t => {
            this.money += t.prosperity;
        });
    }

    distanceToCapital(tile) {
        const xDistanceNormal = Math.abs(this.capitalTile.x - tile.x);
        const yDistanceNormal = Math.abs(this.capitalTile.y - tile.y);

        const xDistanceCrossingBorder = Math.abs(game.tileMap.mapWidth + this.capitalTile.x - tile.x);
        const yDistanceCrossingBorder = Math.abs(game.tileMap.mapHeight + this.capitalTile.y - tile.y);


        const xDistance = xDistanceNormal < xDistanceCrossingBorder ? xDistanceNormal : xDistanceCrossingBorder;
        const yDistance = yDistanceNormal < yDistanceCrossingBorder ? yDistanceNormal : yDistanceCrossingBorder;

        return xDistance + yDistance + 1;
    }

    calculateScore() {
        let score = 0;

        this.tiles.forEach(tile => {
            score += tile.prosperity;
        });

        this.score = score > this.score ? score : this.score;
    }
}