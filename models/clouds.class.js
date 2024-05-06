class Cloud extends MovableObject{


    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.animate();
        this.width = 400 + Math.random() * 200;
        this.height = 350 + Math.random() * 150;
        this.x = x;
        this.y = y + Math.random() * 20;
    }


    animate() {
        this.moveLeft();
    }


    moveLeft() {
        setInterval( () => {
            this.x -= this.speed;
        }, 1000 / 60)
    }
}