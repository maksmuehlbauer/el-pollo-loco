    // collisionBottleWithEnemies() {
    //     this.level.enemies.forEach((enemy, enemyIndex) => {
    //         this.throwableObject.forEach((bottle, bottleIndex) => {
    //             if (bottle.isColliding(enemy)) {
    //                 enemy.hit(20);
    //                 if (this.enemyDies(enemyIndex)) {
    //                     this.level.enemies[enemyIndex].speed = 0;
    //                     this.removeDeadObjectFromWorld(enemyIndex);
    //                     this.killedChickens += 1
    //                 }
    //                 this.throwableObject.splice(bottleIndex, 1);
    //             }
    //         });
    //     });
    // }


    // collisionBottleWithEnemies() {
    //     if (this.bottleInArray()) {
    //         let bottle = this.throwableObject[0]
    //         this.level.enemies.forEach((enemy, enemyIndex) => {
    //         if (bottle.isColliding(enemy)) {
    //             enemy.hit(20);
    //             if (this.enemyDies(enemyIndex)) {
    //                 this.level.enemies[enemyIndex].speed = 0;
    //                 this.removeDeadObjectFromWorld(enemyIndex);
    //                 this.killedChickens += 1
    //                 }
    //             this.throwableObject.splice(0, 1);
    //             }
    //         })
    //     }
    // }


// 08.05.02024
        // collisionBottleWithEnemies() {
    //     this.level.enemies.forEach((enemy, enemyIndex) => {
    //         this.throwableObject.forEach((bottle, bottleIndex) => {
    //             if (bottle.isColliding(enemy)) {
              
    //                 enemy.hit(20);
    //                 bottle.speedX = 0;
    //                 if (!this.enemyDiesExecuted && this.enemyDies(enemyIndex)) {
    //                     this.level.enemies[enemyIndex].speed = 0;
    //                     this.removeDeadObjectFromWorld(enemyIndex);
    //                     this.killedChickens += 1
    //                     this.enemyDiesExecuted = true;
    //                     setTimeout(() => {
    //                         this.enemyDiesExecuted = false;
    //                     }, 1500);
    //                 }
    //                 // this.throwableObject.splice(bottleIndex, 1);
                    
    //             }
    //         });
    //     });
    // }

    

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


        // collisionEnemies() {
    //     this.level.enemies.forEach((enemy) => {
    //         if (this.character.isColliding(enemy)) {
    //             this.character.hit(2)
    //             this.statusBarHp.setPercentage(this.character.energy)
    //         }
    //     });
    // }


    // isPlayerOnEnemy(mo) {
    //     return (
    //         this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
    //         this.y + this.height - this.offset.bottom <= mo.y + mo.height / 2 &&
    //         this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
    //         this.x + this.offset.left < mo.x + mo.width - mo.offset.right
    //     );
    // }


        // removeThrownBottleFromMap(bottle) {
    //     const index = this.throwableObject.indexOf(bottle);
    //     if (index !== -1) {
    //         setTimeout(() => {
    //             this.throwableObject.splice(index, 1)
    //         }, 1500);
    //     }
    // }

    
    // characterStateAnimations() {
    //     let characterAnimation = setInterval(() => {
    //         this.world.worldSounds.pauseCharacterSleepingSound();

    //         if (this.isDead()) {
    //             this.playAnimation(this.IMAGES_DEAD)
    //             this.world.worldSounds.playGameOverSound();
    //             clearInterval(characterAnimation)
    //         } else if (this.isHit()){
    //             this.playAnimation(this.IMAGES_HURT)
    //             this.world.worldSounds.playCharacterHurtSound()
    //         } else if (this.longAFK()) {
    //             this.playAnimation(this.IMAGES_IDLE_LONG)
    //             this.world.worldSounds.playCharacterSleepingSound();
    //         } else if (this.isAboveGround()) {
    //             this.playAnimation(this.IMAGES_JUMPING)
                
    //         } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
    //             this.playAnimation(this.IMAGES_WALKING)
    //         }  else if (this.shortAFK()) {
    //             this.playAnimation(this.IMAGES_IDLE_SHORT)
    //         }                 
    //     }, 125  )
    // }


            // collsionBottleWithTerrain() {
        //     this.throwableObject.forEach((bottle) => {
        //         if (!bottle.isInAir()) {
        //             this.worldSounds.playBreakBottleSound()
        //             setTimeout(() => {
                        
        //             }, 1200);
        //         }
        //     })
        // }