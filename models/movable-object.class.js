class MovableObject {
    x = 120;
    y = 250; // default 250
    img;
    width = 100;
    height = 150;
    imageCache = {};
    currentImage = 0;
    speed = 0.1;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;


    applyGravity() {
        setInterval(() =>{
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 30)
    }

    isAboveGround() {
        return this.y < 150
    }


    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image" src="">
        this.img.src = path;
    }

    // create Image cache for every player and npc, dynamic for image range
    loadImages(arr) {
        arr.forEach( (path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
        
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width * 1, this.height);
    }


    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    hit() {
        this.energy -= 5;
        if (this.energy <= 0) {
            this.energy = 0
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHit() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        console.log(timePassed);
        return timePassed < 5;
    }

    isDead() {
        return this.energy === 0;
    }


    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

        
    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path]
        this.currentImage++;
    }

    jump() {
        return this.speedY = 30
    }
}


    // Bessere Formel zur Kollisionsberechnung (Genauer)
    // isColliding (obj) {
    //     return  (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) && 
    //             (this.Y + this.offsetY + this.height) >= obj.Y &&
    //             (this.Y + this.offsetY) <= (obj.Y + obj.height) && 
    //             obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

    // }