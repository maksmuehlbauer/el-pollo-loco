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