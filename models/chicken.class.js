/**
 * Represents a normal chicken enemy in the game.
 * @extends MovableObject
 */
class Chicken extends MovableObject  {
    y = 385;
    width = 55;
    height = 70;
    offset = {
        left: 10,
        right: 10,
        bottom: 3,
        top: 5,
      }
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'    
    ]

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ]
    

    /**
     * Creates a new Chicken instance.
     */
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.loadImages(this.IMAGES_WALKING)
        this.loadImages(this.IMAGES_DEAD)
        this.x = 700 + Math.random() * 4700;
        this.speed = 0.15 + Math.random() * 0.25
        this.energy = 20;
        this.animate()
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
        let chickenAnimation = setInterval(() => {
            if (this.moveLeft) {
                this.playAnimation(this.IMAGES_WALKING);
            }
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                clearInterval(chickenAnimation)
            }
        }, 250)
    }
}