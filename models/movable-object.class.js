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


    markDeadEnemy() {
        this.speed = 0;
        this.isKilled = true;
    }

}






