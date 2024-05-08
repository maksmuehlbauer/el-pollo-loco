class MovableObject extends DrawableObject {
    speed = 0.1;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100000;
    lastHit = 0;
    throwSpeed = 20;
    offset = {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
      }


    applyGravity() {
        setInterval(() =>{
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 30)
    }


    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 150;
        }
    }


    hit(damge) {
        this.energy -= damge;
        if (this.energy <= 0) {
            this.energy = 0
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    isHit() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;  
    }


    isDead() {
        return this.energy === 0;
        
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

    
    characterStartAnimation() {
        return this.x === 0
    }


    isColliding(mo) {
        return (
          this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
          this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
          this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
          this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
        );
      }

}


// Junus alt
    // isColliding(mo) {
    //     return this.x + this.width > mo.x &&
    //         this.y + this.height > mo.y &&
    //         this.x < mo.x &&
    //         this.y < mo.y + mo.height;
    // }

    // Junus nue
    // Bessere Formel zur Kollisionsberechnung (Genauer)
    // isColliding (obj) {
    //     return  (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) && 
    //             (this.Y + this.offsetY + this.height) >= obj.Y &&
    //             (this.Y + this.offsetY) <= (obj.Y + obj.height) && 
    //             obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

    // }


