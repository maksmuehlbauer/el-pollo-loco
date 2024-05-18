/**
 * Represents the game world.
 */
class World {
    character = new Character();
    statusBarHp = new StatusBarHp();
    statusBarBottle = new StatusBarBottle();
    coinCount = new CoinCount();
    chickenCounter = new ChickenCounter();
    playTime = new TimeMeasurement();
    coolDownClock = new CoolDownClock()
    level = createLevel();
    subWorld = new SubWorld();
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    throwableObject = [];
    collectedCoins = 0;
    defaultEnemyLength = this.level.enemies.length;
    killedChickens = 0;
    scores = [];
            
    
    /**
     * Constructs a new World.
     * @param {HTMLCanvasElement} canvas - The canvas element.
     * @param {Keyboard} keyboard - The keyboard controller.
     * @param {WorldSounds} worldSounds - The sounds of the game world.
     */
    constructor(canvas, keyboard, worldSounds) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.worldSounds = worldSounds;
        this.setWorld();
        this.run();
        this.gameOver();
        this.victory();
        this.checkCollisions();
        this.startTime = new Date().getTime();
        this.bottleCoolDown = 0;
    }

    /**
     * 
     */
    worldSoundMuted() {
        let endboss = this.level.findEndboss();
        endboss.muteAllEndbossSounds()
    }

    
    /**
     * Sets the world for the character.
     */
    setWorld() {
        this.character.world = this
    }


    /**
     * Runs the game loop.
     */
    run() {
        setInterval(() => {
            this.checkThrowObjects();
            this.checkChickenCount()
        }, 1000 / 60) 
    }


    /**
     * Checks for throwable objects and handles throwing.
     */
    checkThrowObjects() {
        if (this.keyboard.THROW && this.throwableObject.length <= this.bottleCoolDown && this.statusBarBottle.bottlesvAvailable() && !this.character.otherDirection) {
                this.worldSounds.playThrowSound()
                this.statusBarBottle.setPercentage(this.statusBarBottle.percentage -= 20);
                let bottle = new ThrowableObject(this.character.x, this.character.y);
                this.throwableObject.push(bottle);
                this.subWorld.removeThrownBottleFromMap(bottle, this.throwableObject);
                this.lastThrowTime = new Date().getTime();
            }
        }

  
    /**
     * Checks for collisions in the game.
     */
        checkCollisions() {
            setInterval(() => {
                this.collisionEnemies();
                this.collisionBottleObject();
                this.collisionCoinObject();
                this.collisionBottleWithEnemies();
            }, 1000 / 30);
        }
    

    /**
     * Checks for collisions between throwable objects and enemies.
     */
        collisionBottleWithEnemies() {
            this.level.enemies.forEach((enemy, enemyIndex) => {
                this.throwableObject.forEach((bottle) => {
                    if (bottle.isColliding(enemy)) {
                        this.worldSounds.playBreakBottleSound()
                        bottle.speedX = 0;
                        this.calculateEnemyDamage(enemy);
                        if (enemy.isDead()) {
                            this.worldSounds.playChickenDieSound();
                            enemy.markDeadEnemy();
                            this.removeDeadObjectFromWorld(enemy);
                        }
                    }
                });
            });
        }


    /**
     * Handles collisions between the player and enemies.
     */
    collisionEnemies() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.isFalling() && enemy !== this.level.findEndboss()) {
                    enemy.hit(20)
                    if (enemy.isDead()) {
                        this.worldSounds.playChickenDieSound();
                        enemy.markDeadEnemy();
                        this.removeDeadObjectFromWorld(enemy);
                    }
                } else if (!this.character.isAboveGround() && !enemy.isDead()) {
                    this.character.hit(2)
                    this.statusBarHp.setPercentage(this.character.energy)
                }
            }
        });
    }


    /**
     * Handles collisions between the character and collectable bottles.
     */
    collisionBottleObject() {
        this.level.collectableBottles.forEach((collectObject, bottleIndex) => {
            if (this.statusBarBottle.bottlesFull() && this.character.isColliding(collectObject)) { 
                    this.statusBarBottle.setPercentage(this.statusBarBottle.percentage += 20)
                    this.level.collectableBottles.splice(bottleIndex, 1)
                    this.worldSounds.playCollectBottleSound();
            }
        });
    }
    
    
    /**
     * Handles collisions between the character and collectable coins.
     */
    collisionCoinObject() {
        this.level.collectableCoins.forEach((collectObject, coinIndex) => {
            if (this.character.isColliding(collectObject)) {
                this.collectedCoins++;
                this.level.collectableCoins.splice(coinIndex, 1);
                this.worldSounds.playCollectCoinSound();
            }
        });
    }


    /**
     * Calculates damage to an enemy.
     * @param {Enemy} enemy - The enemy object.
     * @param {number} enemyIndex - The index of the enemy in the enemies array.
     */
    calculateEnemyDamage(enemy) {
        if (enemy === this.level.findEndboss()) {
            enemy.hit(1);
        } else if (enemy.energy <= 20){
            enemy.hit(20);
        }
    }


    /**
     * Checks the number of killed chickens.
     */
    checkChickenCount() {
        let currentEnemyLength = this.level.enemies.length
        this.killedChickens = this.defaultEnemyLength - currentEnemyLength
    }


    /**
     * Removes dead enemies from the world.
     * @param {number} enemyIndex - The index of the enemy to remove.
     */
    removeDeadObjectFromWorld(enemy) {
        if (enemy === this.level.findEndboss()) {
            setTimeout(() => {
                this.level.enemies = this.level.enemies.filter(enemy => !enemy.isKilled);
            }, 3000);
        } else {
            setTimeout(() => {
                this.level.enemies = this.level.enemies.filter(enemy => !enemy.isKilled);
            }, 1000);
        }
    }
      

    /**
     * Handles the victory condition of the game.
     */
    victory() {
        let victoryInterval = setInterval(() => {
            if (this.level.findEndboss().isDead()) {
                this.subWorld.victoryScreen(this.killedChickens, this.collectedCoins, this.calculateElapsedTime());
                this.pushScores();
                this.saveScores();
                this.worldSounds.pauseBackgroundSound()
                clearInterval(victoryInterval);
                setTimeout(() => {
                    this.subWorld.stopAllIntervals();
                }, 3000);
            }
        }, 200);
    }

   
    /**
     * Handles the game over condition of the game.
     */
    gameOver() {
        setInterval(() => {
            if (this.character.isDead()) {
                this.subWorld.showGameOverScreen(this.killedChickens, this.collectedCoins, this.calculateElapsedTime());
                this.worldSounds.pauseBackgroundSound()
                this.subWorld.stopAllIntervals();
            }
        }, 200);
    }


    /**
     * Pushes the scores of the current game session to the scores array.
     */
    pushScores() {
        this.scores.push({
            "chickens" : this.killedChickens,
            "coins" : this.collectedCoins,
            "time" : this.calculateElapsedTime()
        });
    }


    /**
     * Clears the canvas, translates it according to camera position, draws the map, HUD, and requests animation frame.
     */
    draw() {
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.drawMap()
        this.ctx.translate(-this.camera_x, 0);
        this.drawHud();
        this.drawAnimationFrame() 
    }


    /**
     * Requests animation frame for continuous drawing.
     */
    drawAnimationFrame() {
        let self = this
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    
    /**
     * Draws the game map.
     */
    drawMap() {
        this.addObjectsToMap(this.level.bgObjects);
        this.addObjectsToMap(this.level.collectableBottles);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.collectableBottles);
        this.addObjectsToMap(this.level.collectableCoins);
        this.addObjectsToMap(this.throwableObject);
        this.addToMap(this.character);
    }


    /**
     * Draws the heads-up display (HUD) if character is alive.
     */
    drawHud() {
        if (!this.character.isDead()) {
            let endboss = this.level.findEndboss();
            if (endboss && endboss.energy > 0) {
                this.addToMap(this.statusBarHp);
                this.addToMap(this.coinCount);
                this.addToMap(this.chickenCounter);
                this.addToMap(this.playTime);
                this.addToMap(this.coolDownClock);
                this.addToMap(this.statusBarBottle);
                this.drawPlayerCounts();
            }
        }
    }


    /**
     * Draws player counts on the HUD.
     */
    drawPlayerCounts() {
        this.ctx.font = '18px Sancreek';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(this.collectedCoins, 60, 76);
        this.ctx.fillText(this.killedChickens, 60, 112);
        this.ctx.fillText(this.calculateElapsedTime() + ' s', 60, 148);
        this.ctx.fillText(this.calculateThrowCoolDown() + ' s', 60, 180);
    }


    /**
     * Calculates elapsed time since the game started.
     * @returns {number} - Elapsed time in seconds.
     */
     calculateElapsedTime() {
        let currentTime = new Date().getTime();
        let elapsedTime = currentTime - this.startTime;
        elapsedTime = (elapsedTime / 1000).toFixed(0);
        return elapsedTime
    }


    /**
     * Calculates remaining cooldown time for throwing objects.
     * @returns {number} - Remaining cooldown time in seconds.
     */
    calculateThrowCoolDown() {
        let lastThrowTime = this.lastThrowTime || 0;
        let currentTime = new Date().getTime();
        let elapsedTime = currentTime - lastThrowTime;
        let coolDown = 1500;
        let remainingCooldown = Math.max(coolDown - elapsedTime, 0);
        return (remainingCooldown / 1000).toFixed(1);
    }
    

    /**
     * Adds objects to the map for drawing.
     * @param {Array} objects - Array of objects to add to the map.
     */
    addObjectsToMap(objects) {
        objects.forEach( object => {
            this.addToMap(object)
        })
    }


    /**
     * Draws an object on the map.
     * @param {Object} mo - The object to draw.
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo)
        }
        mo.draw(this.ctx)
        // mo.drawFrame(this.ctx)
        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }
    }


    /**
     * Flips the image horizontally.
     * @param {Object} mo - The object whose image is flipped.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    /**
     * Flips the image back to its original state.
     * @param {Object} mo - The object whose image is flipped back.
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


    /**
     * Saves scores to local storage.
     */
    saveScores() {
        this.loadFromStorage()
        scores.push({
            "chickens": this.killedChickens,
            "coins": this.collectedCoins,
            "time": this.calculateElapsedTime()
        });
        localStorage.setItem("Scores", JSON.stringify(scores));
    }
    

    /**
     * Loads scores from local storage.
     */
    loadFromStorage() {
        if (localStorage.getItem("Scores")) {
            scores = JSON.parse(localStorage.getItem("Scores"));
        } else {
            scores = [];
        }
    }
}


