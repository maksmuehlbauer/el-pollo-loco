/**
 * Represents background objects in the game.
 * @extends MovableObject
 */
class BackgroundObjects extends MovableObject{
    width = 721;
    height = 480;

    /**
     * Creates a new BackgroundObjects instance.
     * @param {string} imagePath - The path to the image of the background object.
     * @param {number} x - The initial x-coordinate of the background object.
     * @param {number} y - The initial y-coordinate of the background object.
     */
    constructor(imagePath, x, y) {
        super().loadImage(imagePath)
        this.x = x;
        this.y = y;
        
    }
}