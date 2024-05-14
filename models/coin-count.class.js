/**
 * Represents a coin counter in the game.
 * @extends MovableObject
 */
class CoinCount extends DrawableObject {
    x = 20
    y = 55
    width = 30
    height = 30


    /**
     * Creates a new CoinCount instance.
     */
    constructor() {
        super();
        this.loadImage('img/8_coin/coin_1.png');
    }
}


