/**
 * Represents a throwable object in the game, extending the MovableObject class.
 * @extends MovableObject
 */
class ThrowableObject extends MovableObject {
    // worldSounds = new WorldSounds();
    IMAGES_BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ]

    IMAGES_BOTTLE_THROW = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ]
    

    /**
     * Creates a new ThrowableObject.
     * @param {number} x - The x-coordinate of the object.
     * @param {number} y - The y-coordinate of the object.
     */
    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png')
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.loadImages(this.IMAGES_BOTTLE_THROW);
        this.animate();
        this.applyGravity();
        this.bottleFly();
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 70;
        this.speedY = 20; 
        this.speedX = 15;
    }


    /**
     * Animates the bottle based on its state.
     */
    animate() {
        let bottleAnimation = setInterval(() => {
            if (this.isFlying() && this.isInAir()) {
                this.playAnimation(this.IMAGES_BOTTLE_THROW);
            }  
            else {
                this.speedY = 0;
                this.acceleration = 0;
                this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
                setTimeout(() => {
                    clearInterval(bottleAnimation)
                }, 1000);
            }
        }, 65);
    }


    /**
     * Checks if the bottle is in the air.
     * @returns {boolean} - True if the bottle is in the air, false otherwise.
     */
    isInAir() {
        return this.y < 370;
    }


    /**
     * Checks if the bottle is flying.
     * @returns {boolean} - True if the bottle is flying, false otherwise.
     */
    isFlying() {
        return this.speedX > 0
    }


    /**
     * Makes the bottle fly horizontally.
     */
    bottleFly() {
        setInterval(() => {
            if (this.y < 370) {
                this.x += this.speedX;
            }
        }, 30);
    }
}

