/**
 * Represents a small chicken enemy in the game.
 * @extends MovableObject
 */
class ChickenSmall extends MovableObject {
    y = 398;
    width = 55;
    height = 55;
    offset = {
        left: 12,
        right: 12,
        bottom: 3,
        top: 5,
      }
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'    
    ]

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ]
    


    /**
     * Creates a new ChickenSmall instance.
     */
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png')
        this.loadImages(this.IMAGES_WALKING)
        this.loadImages(this.IMAGES_DEAD)
        this.animate()
        this.x = 700 + Math.random() * 4700;
        this.speed = 0.1 + Math.random() * 0.20
        this.energy = 20;
    }


    /**
     * Animates chicken movement and state.
     */
    animate() {
        this.moveLeftState();
        this.chickenStateAnimations();
    }

    
    /**
     * Continuously moves the chicken left.
     */
    moveLeftState() {
        setInterval( () => {
            this.moveLeft()
        }, 1000 / 60)
    }


    /**
     * Animates the chicken state based on various conditions.
     */
    chickenStateAnimations() {
        let chickenSmallAnimation = setInterval(() => {
            if (this.moveLeft) {
                this.playAnimation(this.IMAGES_WALKING)
            }
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                clearInterval(chickenSmallAnimation)
            }
        }, 250)
    }
}