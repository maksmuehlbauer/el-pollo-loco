class ThrowableObject extends MovableObject {
    IMAGES_BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ]
    

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png')
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 70;
        this.throwBottle();
        this.animate();
    }

    animate() {
        let i = 0;
        let interval1 = setInterval(() => {
            if (this.y >= 370) {
                i++
                this.playAnimation(this.IMAGES_BOTTLE_SPLASH)
            }
        }, 200)
    }

    throwBottle() {
        this.speedY = 20; 
        this.speedX = 15
        this.applyGravity();

        setInterval(() => { 
            this.x += this.speedX ;

            if (this.y >= 370) {
                this.speedY = 0
                this.speedX = 0
            }

            
        }, 25)

        
    }

}