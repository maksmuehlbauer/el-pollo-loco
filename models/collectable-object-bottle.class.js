class BottleObject extends MovableObject {
    width = 100;
    height = 100;
    
    IMAGES_ANIMATION = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ]


    constructor(imagePath, x) {
        super()
        this.loadImage(imagePath);
        this.loadImages(this.IMAGES_ANIMATION);
        this.x = x + Math.random() * 200
        this.y = 350 + Math.random() * 25
        this.animate();

    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ANIMATION)
        }, 350);
    }



}