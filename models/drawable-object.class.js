/**
 * Represents a drawable object in the game.
 */
class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 250; // default 250
    width = 100;
    height = 150;

    /**
     * Loads an image from the given path.
     * @param {string} path - The path to the image.
     */
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image" src="">
        this.img.src = path;
    }


    /**
     * Loads multiple images from an array of paths.
     * @param {string[]} arr - Array of image paths.
     */
    loadImages(arr) {
        arr.forEach( (path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    
    /**
     * Draws the object on the canvas context.
     * @param {CanvasRenderingContext2D} ctx - The canvas context.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width * 1, this.height);
    }


    /**
     * Draws a frame (hitbox) around the drawable object.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    drawFrame(ctx) {
    if (this instanceof Character || this instanceof Chicken || this instanceof ChickenSmall || this instanceof Endboss || this instanceof CollectableObjects) {
      ctx.beginPath();
      ctx.lineWidth = "2";
      ctx.strokeStyle = "red";
      ctx.rect(
        this.x + this.offset.left,
        this.y + this.offset.top,
        this.width - this.offset.left - this.offset.right,
        this.height - this.offset.top - this.offset.bottom
      );
      ctx.stroke();
    }
  }
}