/**
 * Represents a cooldown clock object in the game.
 * @extends DrawableObject
 */
class CoolDownClock extends DrawableObject {
    x = 20
    y = 160
    width = 30
    height = 30


    /**
     * Creates a new CoolDownClock instance.
     */
    constructor() {
        super();
        this.loadImage('img/10_interactions/sandclock.png');
    }
}


