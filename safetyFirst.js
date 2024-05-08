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