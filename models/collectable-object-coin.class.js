/**
 * Represents a coin object in the game.
 * @extends MovableObject
 */
class CoinObject extends MovableObject {
    width = 40;
    height = 40;

    IMAGES_ANIMATION = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ]


    /**
     * Creates a new CoinObject instance.
     * @param {string} imagePath - The path to the image of the coin.
     * @param {number} x - The initial x-coordinate of the coin.
     * @param {number} y - The initial y-coordinate of the coin.
     */
    constructor(imagepath, x, y,) {
        super()
        this.loadImage(imagepath);
        this.loadImages(this.IMAGES_ANIMATION);
        this.animate();
        this.x = x;
        this.y = y;
    }


    /**
     * Animates the coin.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ANIMATION)
        }, 500);
    }
}