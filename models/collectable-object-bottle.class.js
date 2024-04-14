class BottleObject extends CollectableObjects {
    width = 70;
    height = 70;


    constructor(imagePath, x, y,) {
        super()
        this.loadImage(imagePath);
        this.x = 1000 + Math.random() * 1400;
        this.y = y


    }




}