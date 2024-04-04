class BackgroundObjects extends MovableObject{
    width = 721;
    height = 480;


    constructor(imagePath, x, y) {
        super().loadImage(imagePath)
        this.x = x;
        this.y = y;
        
    }
}