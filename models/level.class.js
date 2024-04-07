class Level {
    enemies;
    clouds;
    bgObjects;
    level_end_x = 2250;

    constructor(enemies, clouds, bgObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.bgObjects = bgObjects;
    }
}