class CoinObject extends MovableObject {
    width = 40;
    height = 40;

    IMAGES_ANIMATION = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ]


    constructor(imagepath, x, y,) {
        super()
        this.loadImage(imagepath);
        this.loadImages(this.IMAGES_ANIMATION);
        this.animate();
        this.x = x;
        this.y = y;
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ANIMATION)
        }, 500);
    }
}