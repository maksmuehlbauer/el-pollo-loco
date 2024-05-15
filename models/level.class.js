/**
 * Represents a level in the game.
 */
class Level {
    enemies;
    clouds;
    bgObjects;
    collectableBottles;
    collectableCoins;
    level_end_x = 5100;
    numberOfEnemies = 20;
    numberOfBackgrounds = 7;
    numberOfBottles = 8;
    numberOfClouds = 10;
    numberOfCoins = 40;
    enemyTypes = [Chicken, ChickenSmall];
    currentIndex = 0;


    /**
     * Creates an instance of Level.
     * @param {Array} enemies - The array of enemies.
     * @param {Array} clouds - The array of clouds.
     * @param {Array} bgObjects - The array of background objects.
     * @param {Array} collectableBottles - The array of collectable bottles.
     * @param {Array} collectableCoins - The array of collectable coins.
     */
    constructor(enemies, clouds, bgObjects, collectableBottles, collectableCoins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.bgObjects = bgObjects;
        this.collectableBottles = collectableBottles;
        this.collectableCoins = collectableCoins;
        this.fillWorldWithChickens();
        this.fillWorldWithBackground();
        this.fillWorldWithCollectableBottles();
        this.fillWorldWithClouds();
        this.fillWorldWithCoins();
        this.addNewObjectsToMap();
    }  


    /**
     * Finds the end boss enemy in enemy array.
     * @returns {Enemy} - The end boss enemy object if found, otherwise undefined.
     */
    findEndboss() {
        let endboss = this.enemies.find(enemy => enemy instanceof Endboss);
        return endboss;
    }


    /**
     * Adds new objects to the map at intervals.
     */
    addNewObjectsToMap() {
        setInterval(() => {
            this.collectableBottles.push(new BottleObject('img/6_salsa_bottle/salsa_bottle.png', Math.random() * 4000))
        }, 10000);            
    }


    /**
     * Returns a random integer between min and max.
     * @param {number} min - The minimum value.
     * @param {number} max - The maximum value.
     * @returns {number} A random integer between min and max.
     */
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    /**
     * Fills the world with coins.
     */
    fillWorldWithCoins() {
        for (let i = 0; i < this.numberOfCoins; i++) {
            this.collectableCoins.push(new CoinObject('img/8_coin/coin_1.png', this.getRandomInt(500, 4900), this.getRandomInt(50, 375)))
        }
    }
    

    /**
     * Fills the world with chickens.
     */
    fillWorldWithChickens() {
        for (let i = 0; i < this.numberOfEnemies; i++) {
            this.addAndChangeEnemyType();
        }
    }


    /**
     * Adds a new enemy and changes its type.
     */
    addAndChangeEnemyType() {
        this.enemies.push(new this.enemyTypes[this.currentIndex]());
        this.currentIndex = (this.currentIndex + 1) % this.enemyTypes.length
    }


    /**
     * Fills the world with clouds.
     */
    fillWorldWithClouds() {
        for (let i = 0; i <= this.numberOfClouds; i++) {
            this.clouds.push(
                new Cloud('img/5_background/layers/4_clouds/' + ((i % 2) + 1) + '.png', 680*i, 0),
            )
        }
    }


    /**
     * Fills the world with background objects.
     */
    fillWorldWithBackground() {
        for (let i = 0; i <= this.numberOfBackgrounds; i++) {
            this.bgObjects.push(
                new BackgroundObjects('img/5_background/layers/air.png', 720*i, 0),
                new BackgroundObjects('img/5_background/layers/3_third_layer/' + ((i % 2) + 1) + '.png', 720*i, 0),
                new BackgroundObjects('img/5_background/layers/2_second_layer/' + ((i % 2) + 1) + '.png', 720*i, 0),
                new BackgroundObjects('img/5_background/layers/1_first_layer/' + ((i % 2) + 1) + '.png', 720*i, 0)
            );
        }
    }


    /**
     * Fills the world with collectable bottles.
     */
    fillWorldWithCollectableBottles() {
        for (let i = 1; i <= this.numberOfBottles; i++) {
            this.collectableBottles.push(
                new BottleObject('img/6_salsa_bottle/salsa_bottle.png', 400*i)
            )
        }
    }
}
