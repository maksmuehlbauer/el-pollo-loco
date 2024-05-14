/**
 * Represents a counter for chickens.
 * @extends DrawableObject
 */
class ChickenCounter extends DrawableObject {
    x = 20
    y = 90
    width = 30
    height = 30

    
    /**
     * Creates an instance of ChickenCounter.
     */
    constructor() {
        super();
        this.loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    }
}


