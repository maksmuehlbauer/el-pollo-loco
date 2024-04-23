class ChickenSmall extends MovableObject {
    y = 375;
    width = 55;
    height = 55;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'    
    ]

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ]

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png')
        this.loadImages(this.IMAGES_WALKING)
        this.loadImages(this.IMAGES_DEAD)
        this.x = 700 + Math.random() * 4700;
        this.speed = 0.1 + Math.random() * 0.20
        this.energy = 20;
        this.animate()
    }

    animate() {
        setInterval( () => {
            this.moveLeft()
        }, 1000 / 60)


        setInterval(() => {
            if (this.moveLeft) {
                this.playAnimation(this.IMAGES_WALKING)
            }
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD)
            }
            
        }, 250)
    }
}