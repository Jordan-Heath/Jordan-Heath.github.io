class Country {
    constructor(name, color) {
        // Country name and color
        this.name = name;
        this.color = color;
        this.textColor = findContrastingTextColor(color);

        // Country size is the number of tiles it controls
        this.size = 1;

        // Money is the amount of resources the country has
        this.money = 0;

        // Score is the prosperity of the country's controlled tiles
        this.score = 0;

        // Stats are the governmental stability, growth chance, attack chance, defense chance and development chance
        this.growthChance = Math.random() / 2;
        this.attackChance = Math.random() / 2;
        this.defenseChance = Math.random() / 2;
        this.developChance = Math.random() / 2;
        this.governmentalStability = 1 - Math.random() / 100;

        // Capital tile is the tile that is the capital of the country
        this.capitalTile = null;

        // Tiles is a set of tiles controlled by the country
        this.tiles = new Set();

        // Neighbouring tiles is a set of tiles that are not controlled by the country but are adjacent to the country's tiles
        this.neighbouringTiles = new Set();
    }

    updateTiles(tileMap = game.tileMap) {
        // Update the country's tiles
        this.tiles.clear();
        for (let row of tileMap.mapData) {
            for (let tile of row) {
                if (tile.belongsTo(this)) {
                    this.tiles.add(tile);
                }
            }
        }
    }

    updateNeighbouringTiles(tileMap = game.tileMap) {
        // Update the country's neighbouring tiles
        this.neighbouringTiles.clear();
        for (let tile of this.tiles) {
            for (let neighbour of tile.getNeighbours(tileMap)) {
                if (!this.tiles.has(neighbour)) {
                    this.neighbouringTiles.add(neighbour);
                }
            }
        }
    }

    refresh() {
        // Update the country's tiles and neighbouring tiles
        this.updateTiles();
        this.updateNeighbouringTiles();
    }

    update() {
        // Update the country's money
        if (this.tiles.size === 0) return;
        if (this.capitalTile.country !== this) this.shrink();

        this.getTaxes();
        this.governmentalChange();

        // Get developable and accessible tiles
        

        // Check if country can develop, then develop
        this.develop();

        // Check if country expand, attack or reclaim land
        
        
        
        // Choose an action
        if (this.attack());
        else if (this.expand());
        else if (this.reclaimLand());

        // Update country size and score
        this.size = this.tiles.size;
        this.calculateScore();
    }

    attack() {
        const attackableTiles = [...this.neighbouringTiles].filter(tile => tile.country !== null);
        const canAttack = attackableTiles.length > 0 && this.money >= 2*this.size;

        // Attack a random enemy tile
        if (canAttack && this.attackChance > Math.random()) {
            const tileToAttack = attackableTiles.reduce((mostProsperousTile, currentTile) =>
                currentTile.calculateProsperity(this) > mostProsperousTile.calculateProsperity(this) ? currentTile : mostProsperousTile, attackableTiles[0]);

            if (tileToAttack.country.defenseChance + tileToAttack.development / 8 < Math.random()) {
                tileToAttack.country.loseTile(tileToAttack);
                this.gainTile(tileToAttack);
                this.money -= 2*this.size;
                return true;
            }
        }

        return false;
    }

    develop() {
        const developableTiles = [...this.tiles].filter(tile => tile.isAccessible() && tile.development < 4);
        const canDevelop = developableTiles.length > 0 && this.money >= this.size/2;

        if (canDevelop && this.developChance > Math.random()) {
            // Develop a random developable tile
            if (developableTiles.length > 0) {
                developableTiles.sort((a, b) => b.prosperity - a.prosperity);
                const tileToDevelop = developableTiles[0];
                this.money -= this.size/2;
                tileToDevelop.develop();
            }
        }
    }

    expand() {
        const unclaimedTiles = [...this.neighbouringTiles].filter(tile => tile.isAccessible() && tile.country === null);
        const canExpand = unclaimedTiles.length > 0 && this.money >= 4*this.size;

        // Expand to a random unclaimed tile
        if (canExpand && this.growthChance > Math.random()) {
            const mostProsperousTile = unclaimedTiles.reduce((mostProsperousTile, currentTile) =>
                currentTile.calculateProsperity(this) > mostProsperousTile.calculateProsperity(this) ? currentTile : mostProsperousTile, unclaimedTiles[0]);

            this.gainTile(mostProsperousTile);
            this.money -= 4*this.size;
            return true;
        }

        return false;
    }

    reclaimLand() {
        const canExpand = [...this.neighbouringTiles].filter(tile => tile.isAccessible() && tile.country === null).length > 0;
        const canAttack = [...this.neighbouringTiles].filter(tile => tile.country !== null).length > 0;
        const canReclaimLand = !canExpand && !canAttack && this.money >= 4*this.size;

        if (canReclaimLand) {
            // Reclaim a random unclaimed tile
            const tileToReclaim = [...this.neighbouringTiles][Math.floor(Math.random() * this.neighbouringTiles.size)];
            if (tileToReclaim) {
                tileToReclaim.buildings.push('dock');
                this.gainTile(tileToReclaim);
                this.money -= 4*this.size;
            }
        }
    }

    shrink() {
        // Shrink the country if its governmental stability is low
        if (Math.random() > this.defenseChance) {
            const tileToShrink = [...this.tiles].sort((a, b) => b.calculateProsperity(this) - a.calculateProsperity(this))[0];
            this.loseTile(tileToShrink);
        }
    }

    governmentalChange() {
        // Change the country's stats based on governmental stability
        if (Math.random() > this.governmentalStability) {
            const changeAmount = () => Math.random() / 10 - 0.05;
            this.growthChance = Math.min(1, Math.max(0, this.growthChance + changeAmount()));
            this.attackChance = Math.min(1, Math.max(0, this.attackChance + changeAmount()));
            this.defenseChance = Math.min(1, Math.max(0, this.defenseChance + changeAmount()));
            this.developChance = Math.min(1, Math.max(0, this.developChance + changeAmount()));
        }

        const changeAmount = () => Math.random() / 1000 - 0.0005;
        this.governmentalStability = Math.min(1, Math.max(0, this.governmentalStability + changeAmount()));
    }

    gainTile(tile) {
        // Add the tile to the country's tiles
        tile.country = this;
        tile.hasChanged = true;
        this.neighbouringTiles.delete(tile);
        this.tiles.add(tile);
        for (let neighbour of tile.getNeighbours()) {
            if (!neighbour.belongsTo(this)) {
                this.neighbouringTiles.add(neighbour);
            }
        }
    }

    loseTile(tile) {
        // Remove the tile from the country's tiles
        tile.country = null;
        tile.hasChanged = true;
        this.tiles.delete(tile);
        this.refresh();
    }

    getTaxes() {
        // Calculate the taxes from the country's tiles
        this.money += [...this.tiles].reduce((total, tile) => total + tile.prosperity, 0);
    }

    distanceToCapital(tile) {
        // Calculate the distance between a tile and the capital tile
        return this.capitalTile.distanceToTile(tile) + 1;
    }

    calculateScore() {
        // Calculate the country's score
        this.score = Math.max(this.score, [...this.tiles].reduce((total, tile) => total + tile.prosperity, 0));
    }
}
