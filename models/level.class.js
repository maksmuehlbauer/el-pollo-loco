class Level {
    enemies;
    clouds;
    bgObjects;
    collectableBottles;
    collectableCoins;
    level_end_x = 5100;

    constructor(enemies, clouds, bgObjects, collectableBottles, collectableCoins, ) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.bgObjects = bgObjects;
        this.collectableBottles = collectableBottles;
        this.collectableCoins = collectableCoins;
    }   
}