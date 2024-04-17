class Cloud extends MovableObject{
    y = 0;
    width = 600;
    height = 350;


    constructor(imagePath, x, y) {
        super().loadImage(imagePath)
        this.x = x;
        this.y = y

        this.animate()
    }

    // constructor() {
    //     super().loadImage(this.IMAGES[0])
    //     this.x = Math.random() * 520;
    //     this.animate()

    // }

    animate() {
        this.moveLeft();
    }

    moveLeft() {
        setInterval( () => {
            this.x -= this.speed;
        }, 1000 / 60)
    }
}