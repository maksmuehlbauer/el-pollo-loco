/**
 * Represents a cloud in the game.
 * @extends MovableObject
 */
class Cloud extends MovableObject{

    /**
     * Creates a new Cloud instance.
     * @param {string} imagePath - The path to the image of the cloud.
     * @param {number} x - The initial x-coordinate of the cloud.
     * @param {number} y - The initial y-coordinate of the cloud.
     */
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.animate();
        this.width = 400 + Math.random() * 200;
        this.height = 350 + Math.random() * 150;
        this.x = x;
        this.y = y + Math.random() * 20;
    }


    /**
     * Animates the movement of the cloud.
     */
    animate() {
        this.moveLeft();
    }

    
    /**
     * Moves the cloud to the left.
     */
    moveLeft() {
        setInterval( () => {
            this.x -= this.speed;
        }, 1000 / 60)
    }
}