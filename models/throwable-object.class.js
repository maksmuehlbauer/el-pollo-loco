
class ThrowableObject extends MovableObject {
    worldSounds = new WorldSounds();
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
    



    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png')
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.loadImages(this.IMAGES_BOTTLE_THROW);
        this.animate();
        this.applyGravity();
        this.bottleFly();
        this.worldSounds.playThrowSound()
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 70;
        this.speedY = 20; 
        this.speedX = 15;
    }

        
    animate() {
        let bottleAnimation = setInterval(() => {
            if (this.isInAir()) {
                this.playAnimation(this.IMAGES_BOTTLE_THROW);
            } else {
                this.speedY = 0; // Stoppe die vertikale Bewegung
                this.speedX = 0;
                this.acceleration = 0;
                this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
                this.worldSounds.playBreakBottleSound()
                setTimeout(() => {
                    clearInterval(bottleAnimation)
                }, 1000);
            }
        }, 65);
    }

    isInAir() {
        return this.y < 370;
    }


    bottleFly() {
        setInterval(() => {
            if (this.y < 370) {
                this.x += this.speedX;
            }
        }, 30);
    }





}

