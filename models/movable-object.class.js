/**
 * Represents a movable object in the game.
 * @extends DrawableObject
 */
class MovableObject extends DrawableObject {
    speed = 0.1;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    throwSpeed = 20;
    offset = {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
      }


    /**
     * Applies gravity to the movable object.
     */
    applyGravity() {
        setInterval(() =>{
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;

            }
        }, 1000 / 30)
    }


    /**
     * Checks if the object is above the ground.
     * @returns {boolean} True if the object is above the ground, otherwise false.
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            
            return this.y < 165;
        }
    }

    isFalling() {
        return this.speedY < 0 && this.isAboveGround();
    }


    hit(damge) {
        this.energy -= damge;
        if (this.energy <= 0) {
            this.energy = 0
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * Handles the hit received by the movable object.
     * @param {number} damage - The amount of damage received.
     */
    isHit() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;  
    }


    /**
     * Checks if the movable object is dead.
     * @returns {boolean} True if the object is dead, otherwise false.
     */
    isDead() {
        return this.energy <= 0;
        
    }


    /**
     * Moves the object to the left.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Moves the object to the right.
     */
    moveRight() {
        this.x += this.speed;
    }


    /**
     * Plays the animation of the movable object.
     * @param {string[]} images - The array of image paths for animation.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path]
        this.currentImage++;
    }


    /**
     * Makes the object jump.
     * @returns {number} The vertical speed after jumping.
     */
    jump() {
        return this.speedY = 30
    }

    
    /**
     * Checks if the character animation is starting.
     * @returns {boolean} True if the character animation is starting, otherwise false.
     */
    characterStartAnimation() {
        return this.x === 0
    }


    /**
     * Checks if a object is colliding with another object.
     * @param {MovableObject} mo - The other movable object.
     * @returns {boolean} True if the objects are colliding, otherwise false.
     */
    isColliding(mo) {
        return (
          this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
          this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
          this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
          this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
        );
      }


    /**
     * Marks the enemy as dead.
     */
    markDeadEnemy() {
        this.speed = 0;
        this.isKilled = true;
    }


}






