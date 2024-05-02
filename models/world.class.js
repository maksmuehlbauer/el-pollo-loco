class World {
    character = new Character();
    statusBarHp = new StatusBarHp();
    statusBarBottle = new StatusBarBottle();
    coinCount = new CoinCount();
    chickenCounter = new ChickenCounter();
    playTime = new TimeMeasurement();
    coolDownClock = new CoolDownClock()
    newSubworld = new SubWorld();
    level = createLevel1();
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    throwableObject = [];
    collectedCoins = 0;
    killedChickens = 0;
    scores = [];
    

    
        
    
    // der Konstruktor wird ausgeführt sobald eine Instanz von der jeweiligen Klasse erstellt wird (in diese Fall der Klasse World)
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.run();
        this.gameOver();
        this.victory();
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
            this.checkCollisions();
            this.removeThrownBottleFromMap();
        }, 100)
    }


    checkThrowObjects() {
        if (this.keyboard.THROW && this.throwableObject.length === this.bottleCoolDown && this.statusBarBottle.bottlesvAvailable()) {
                this.statusBarBottle.setPercentage(this.statusBarBottle.percentage -= 20);
                let bottle = new ThrowableObject(this.character.x, this.character.y);
                this.throwableObject.push(bottle);
                
                this.removeThrownBottleFromMap(bottle);
                this.lastThrowTime = new Date().getTime()
            }
        }


    removeThrownBottleFromMap(bottle) {
        const index = this.throwableObject.indexOf(bottle);
        if (index !== -1) {
            setTimeout(() => {
                this.throwableObject.splice(index, 1)
            }, 1500);
        }
    }


    checkCollisions() {
        this.collisionEnemies();
        this.collisionBottleObject();
        this.collisionCoinObject();
        this.collisionBottleWithEnemies();
    }


    collisionEnemies() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit(5)
                this.statusBarHp.setPercentage(this.character.energy)
            }
        });
    }


    // collisionBottleWithEnemies() {
    //     this.level.enemies.forEach((enemy) => {
    //         this.throwableObject.forEach((bottle) => {
    //             if (bottle.isColliding(enemy)) {
    //                 let enemyIndex = this.level.enemies.indexOf(enemy)
    //                 this.level.enemies[enemyIndex].hit(20)
    //                 if (this.enemyDies(enemyIndex)) {
    //                     this.level.enemies[enemyIndex].speed = 0;
    //                     this.removeDeadObjectFromWorld(enemyIndex);
                        
    //                     // this.killedChickens += 1
    //                 }
    //             }
    //         });
    //     });
    // }

    collisionBottleWithEnemies() {
        this.level.enemies.forEach((enemy, enemyIndex) => {
            this.throwableObject.forEach((bottle, bottleIndex) => {
                if (bottle.isColliding(enemy)) {
                    enemy.hit(20);
                    if (this.enemyDies(enemyIndex)) {
                        this.level.enemies[enemyIndex].speed = 0;
                        this.removeDeadObjectFromWorld(enemyIndex);
                        this.killedChickens += 1
                        
                    }
                    this.throwableObject.splice(bottleIndex, 1);
                }
            });
        });
    }


    removeDeadObjectFromWorld(enemyIndex) {
        // let endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
        if (this.findEndboss() !== undefined && this.level.enemies[enemyIndex] === this.findEndboss()) {
            setTimeout(() => {
                this.level.enemies.splice(enemyIndex, 1);
            }, 3000);
        } else {
            setTimeout(() => {
                this.level.enemies.splice(enemyIndex, 1);
            }, 1000);
        }
    }
    
        
    collisionBottleObject() {
        this.level.collectableBottles.forEach((collectObject) => {
            if (this.statusBarBottle.bottlesFull() && this.character.isColliding(collectObject)) { 
                    this.statusBarBottle.setPercentage(this.statusBarBottle.percentage += 20)
                    let collectableObjectIndex = this.level.collectableBottles.indexOf(collectObject)
                    this.level.collectableBottles.splice(collectableObjectIndex, 1)
            }
        });
    }


    collisionCoinObject() {
        this.level.collectableCoins.forEach((collectObject, index) => {
            if (this.character.isColliding(collectObject)) {
                this.collectedCoins++;
                this.level.collectableCoins.splice(index, 1);
            }
        });
    }


    enemyDies(enemyIndex) {
        return this.level.enemies[enemyIndex].energy <= 0
    }


    victory() {
        let endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
        let victoryInterval = setInterval(() => {
            if (endboss.isDead()) {
                this.victoryScreen();
                this.pushScores();
                this.saveScores();
                clearInterval(victoryInterval);
                setTimeout(() => {
                    this.stopAllIntervals();
                }, 3000);
            }
        }, 200);
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
    
    

    victoryScreen() {
        document.getElementById('btn-box').innerHTML = window.victoryScreenHTML();
        document.getElementById('game-overlay').classList.add('victory-overlay');
        document.getElementById('game-overlay').innerHTML += window.showScoresBoxHTML(this.killedChickens, this.collectedCoins, this.calculateElapsedTime());
    }


    gameOver() {
        let gameOverInterval = setInterval(() => {
            if (this.character.isDead()) {
                this.showGameOverScreen();
                clearInterval(gameOverInterval);
                setTimeout(() => {
                    this.stopAllIntervals();
                }, 1500);
            }
        }, 200);
    }


    draw() {
        // Clear Canvas per Frame
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.bgObjects);
        this.addObjectsToMap(this.level.collectableBottles);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.collectableBottles);
        this.addObjectsToMap(this.level.collectableCoins);
        this.addObjectsToMap(this.throwableObject);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);

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
        let self = this
        requestAnimationFrame(function() {
            self.draw();
        });
    }


    drawPlayerCounts() {
        this.ctx.font = '18px Sancreek';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(this.collectedCoins, 60, 76);
        this.ctx.fillText(this.killedChickens, 60, 112);
        this.ctx.fillText(this.calculateElapsedTime() + ' s', 60, 148);
        this.ctx.fillText(this.calculateThrowCoolDown() + ' s', 60, 180);


        // if (this.bottleCoolDown === 0) {
        //     console.log('reday')
        //     this.ctx.fillText("Ready to throw", 60, 180); // Text, wenn der Cooldown abgelaufen ist
        // } else {
        //     this.ctx.fillText(throwCoolDown + ' s', 60, 180); // Aktuelle Cooldown-Zeit
        // }
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


