class World {
    character = new Character();
    statusBarHp = new StatusBarHp();
    statusBarBottle = new StatusBarBottle();
    coinCount = new CoinCount();
    chickenCounter = new ChickenCounter();
    playTime = new TimeMeasurement();
    coolDownClock = new CoolDownClock()
    level = createLevel();
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    throwableObject = [];
    collectedCoins = 0;
    defaultEnemyLength = this.level.enemies.length;
    killedChickens = 0;
    scores = [];
    
        
    
    // der Konstruktor wird ausgeführt sobald eine Instanz von der jeweiligen Klasse erstellt wird (in diese Fall der Klasse World)
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


    stopAllIntervals() {
        for (let i = 1; i < 9999; i++) {
            window.clearInterval(i)
        } 
    }

    
    // Link so that you can access all variables in the World class with the Character class (Primary for keyboard Class)
    setWorld() {
        this.character.world = this
    }


    run() {
        setInterval(() => {
            this.checkThrowObjects();
            this.removeThrownBottleFromMap();
            this.checkChickenCount()
        }, 1000 / 60) 
    }


    checkCollisions() {
        setInterval(() => {
            this.collisionEnemies();
            this.collisionBottleObject();
            this.collisionCoinObject();
            this.collisionBottleWithEnemies();
            // this.collisionJumpingOnEnemy();
        }, 1000 / 30);
    }


    checkThrowObjects() {
        if (this.keyboard.THROW && this.throwableObject.length <= this.bottleCoolDown && this.statusBarBottle.bottlesvAvailable() && !this.character.otherDirection) {
                this.statusBarBottle.setPercentage(this.statusBarBottle.percentage -= 20);
                let bottle = new ThrowableObject(this.character.x, this.character.y);
                this.throwableObject.push(bottle);
                this.removeThrownBottleFromMap(bottle);
                this.lastThrowTime = new Date().getTime();
            }
        }


    collisionEnemies() {
        this.level.enemies.forEach((enemy, enemyIndex) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.isAboveGround() && enemy !== this.findEndboss()) {
                    console.log('Hit From Above')
                    enemy.hit(20)
                    console.log(this.character.energy)
                    if (this.enemyDies(enemyIndex)) {
                        enemy.markDeadEnemy();
                        this.removeDeadObjectFromWorld(enemyIndex);
                    }
                } else if (!this.character.isAboveGround() && !enemy.isDead()) {
                    this.character.hit(2)
                    this.statusBarHp.setPercentage(this.character.energy)
                }
            }
        });
    }

    
    removeThrownBottleFromMap(bottle) {
        const index = this.throwableObject.indexOf(bottle);
        if (index !== -1) {
            setTimeout(() => {
                this.throwableObject.splice(index, 1)
            }, 1500);
        }
    }


    collisionBottleWithEnemies() {
        this.level.enemies.forEach((enemy, enemyIndex) => {
            this.throwableObject.forEach((bottle, bottleIndex) => {
                if (bottle.isColliding(enemy)) {
                    bottle.speedX = 0;
                    this.calculateEnemyDamage(enemy, enemyIndex);
                    if (this.enemyDies(enemyIndex)) {
                        enemy.markDeadEnemy();
                        this.removeDeadObjectFromWorld(enemyIndex);
                    }
                }
            });
        });
    }





    calculateEnemyDamage(enemy, enemyIndex) {
        if (this.findEndboss() !== undefined && this.level.enemies[enemyIndex] === this.findEndboss()) {
            enemy.hit(1);
        } else if (enemy.energy <= 20){
            enemy.hit(20);
        }
    }


    checkChickenCount() {
        let currentEnemyLength = this.level.enemies.length
        this.killedChickens = this.defaultEnemyLength - currentEnemyLength
    }

    removeDeadObjectFromWorld(enemyIndex) {
        if (this.findEndboss() !== undefined && this.level.enemies[enemyIndex] === this.findEndboss()) {
            setTimeout(() => {
                this.level.enemies = this.level.enemies.filter(enemy => !enemy.isKilled);
            }, 3000);
        } else {
            setTimeout(() => {
                this.level.enemies = this.level.enemies.filter(enemy => !enemy.isKilled);
            }, 1000);
        }
    }


    enemyDies(enemyIndex) {
        return this.level.enemies[enemyIndex].energy <= 0
    }


    bottleInArray() {
        return this.throwableObject.length > 0
    }
  
        
    collisionBottleObject() {
        this.level.collectableBottles.forEach((collectObject) => {
            if (this.statusBarBottle.bottlesFull() && this.character.isColliding(collectObject)) { 
                    this.statusBarBottle.setPercentage(this.statusBarBottle.percentage += 20)
                    let collectableObjectIndex = this.level.collectableBottles.indexOf(collectObject)
                    this.level.collectableBottles.splice(collectableObjectIndex, 1)
                    this.worldSounds.playCollectBottleSound();
            }
        });
    }


    collisionCoinObject() {
        this.level.collectableCoins.forEach((collectObject, index) => {
            if (this.character.isColliding(collectObject)) {
                this.collectedCoins++;
                this.level.collectableCoins.splice(index, 1);
                this.worldSounds.playCollectCoinSound();
            }
        });
    }


    victory() {
        let victoryInterval = setInterval(() => {
            if (this.findEndboss().isDead()) {
                this.victoryScreen();
                this.pushScores();
                this.saveScores();
                this.worldSounds.pauseBackgroundSound()
                clearInterval(victoryInterval);
                setTimeout(() => {
                    this.stopAllIntervals();
                }, 3000);
            }
        }, 200);
    }


    victoryScreen() {
        document.getElementById('btn-box').innerHTML = window.victoryScreenHTML();
        document.getElementById('game-overlay').classList.add('victory-overlay');
        document.getElementById('game-overlay').innerHTML += window.showScoresBoxHTML(this.killedChickens, this.collectedCoins, this.calculateElapsedTime());
    }

    
    findEndboss() {
        let endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
        return endboss;
    }


    pushScores() {
        this.scores.push({
            "chickens" : this.killedChickens,
            "coins" : this.collectedCoins,
            "time" : this.calculateElapsedTime()
        });
    }


    showGameOverScreen() {
        document.getElementById('btn-box').innerHTML = window.showGameOverScreenHTML();
        document.getElementById('game-overlay').classList.add('game-over-overlay');
        document.getElementById('game-overlay').innerHTML += window.showScoresBoxHTML(this.killedChickens, this.collectedCoins, this.calculateElapsedTime());
        document.getElementById('status-txt').innerHTML = `Game Over`;
        document.getElementById('movement-box').classList.add('d-none');
    }
    


    gameOver() {
        let gameOverInterval = setInterval(() => {
            if (this.character.isDead()) {
                this.showGameOverScreen();
                this.worldSounds.pauseBackgroundSound()
                clearInterval(gameOverInterval);
                setTimeout(() => {
                    this.stopAllIntervals();
                }, 1500);
            }
        }, 200);
    }


    draw() {
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.drawMap()
        this.ctx.translate(-this.camera_x, 0);
        this.drawHud();
        this.drawAnimationFrame() 
    }


    drawAnimationFrame() {
        let self = this
        requestAnimationFrame(function() {
            self.draw();
        });
    }

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


    drawHud() {
        if (!this.character.isDead()) {
            let endboss = this.findEndboss();
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


    drawPlayerCounts() {
        this.ctx.font = '18px Sancreek';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(this.collectedCoins, 60, 76);
        this.ctx.fillText(this.killedChickens, 60, 112);
        this.ctx.fillText(this.calculateElapsedTime() + ' s', 60, 148);
        this.ctx.fillText(this.calculateThrowCoolDown() + ' s', 60, 180);
    }


     calculateElapsedTime() {
        let currentTime = new Date().getTime();
        let elapsedTime = currentTime - this.startTime;
        elapsedTime = (elapsedTime / 1000).toFixed(0);
        return elapsedTime
    }


    calculateThrowCoolDown() {
        let lastThrowTime = this.lastThrowTime || 0;
        let currentTime = new Date().getTime();
        let elapsedTime = currentTime - lastThrowTime;
        let coolDown = 1500;
        let remainingCooldown = Math.max(coolDown - elapsedTime, 0);
        return (remainingCooldown / 1000).toFixed(1);
    }
    

    addObjectsToMap(objects) {
        objects.forEach( object => {
            this.addToMap(object)
        })
    }


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


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


    saveScores() {
        this.loadFromStorage()
        scores.push({
            "chickens": this.killedChickens,
            "coins": this.collectedCoins,
            "time": this.calculateElapsedTime()
        });
        localStorage.setItem("Scores", JSON.stringify(scores));
    }
    

    loadFromStorage() {
        if (localStorage.getItem("Scores")) {
            scores = JSON.parse(localStorage.getItem("Scores"));
        } else {
            scores = [];
        }
    }
}


