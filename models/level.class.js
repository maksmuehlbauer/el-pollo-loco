class Level {
    enemies;
    clouds;
    bgObjects;
    level_end_x = 1400;

    constructor(enemies, clouds, bgObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.bgObjects = bgObjects;
    }
}