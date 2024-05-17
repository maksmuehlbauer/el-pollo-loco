/**
 * Represents a bottle object in the game.
 * @extends MovableObject
 */
class BottleObject extends MovableObject {
    width = 100;
    height = 100;
    offset = {
        left: 30,
        right: 25,
        bottom: 10,
        top: 20,
      }
    IMAGES_ANIMATION = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ]


    /**
     * Creates a new BottleObject instance.
     * @param {string} imagePath - The path to the image of the bottle.
     * @param {number} x - The initial x-coordinate of the bottle.
     */
    constructor(imagePath, x) {
        super()
        this.loadImage(imagePath);
        this.loadImages(this.IMAGES_ANIMATION);
        this.animate();
        this.x = x + Math.random() * 200
        this.y = 350 + Math.random() * 25
    }


    /**
     * Animates the bottle.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ANIMATION)
        }, 350);
    }
}