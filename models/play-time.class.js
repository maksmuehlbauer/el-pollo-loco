/**
 * Represents a time measurement object in the game.
 * @extends DrawableObject
 */
class TimeMeasurement extends DrawableObject {
    x = 20
    y = 125
    width = 30
    height = 30

    
    /**
     * Constructs a new TimeMeasurement object.
     */
    constructor() {
        super();
        this.loadImage('img/10_interactions/time.png');
    }
}


