class World {
    character = new Character();
    // level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBarHp = new StatusBarHp();
    statusBarCoin = new StatusBarCoin();
    statusBarBottle = new StatusBarBottle();
    coinCount = new CoinCount();
    chickenCounter = new ChickenCounter();
    playTime = new TimeMeasurement();
    throwableObject = [];
    collectedCoins = 0;
    killedChickens = 0;
    bottleCoolDown = 1.5
    scores = [];



    // der Konstruktor wird ausgeführt sobald eine Instanz von der jeweiligen Klasse erstellt wird (in diese Fall der Klasse World)
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = level1;
        // this.draw();
        this.setWorld();
        this.run();
        this.startBossFight();
        this.gameOver();
        this.victory();
        this.startTime = new Date().getTime();
        this.bottleCoolDown = 0;
    }


    // Link so that you can access all variables in the World class with the Character class (Primary for keyboard Class)
    setWorld() {
        this.character.world = this
    }

    run() {
        setInterval(() => {
            this.checkThrowObjects();
            this.checkCollisions();
            this.removeThrownBottleFromMap()
        }, 100)
    }

    
    startBossFight() {
        setInterval(() => {
        let endboss = this.level.enemies.findIndex(enemy => enemy instanceof Endboss);
            if (this.character.x > 4600) {
                this.level.enemies[endboss].move()
            }
        }, 200)
    }    
    

    checkThrowObjects() {
        if (this.keyboard.THROW && this.throwableObject.length === this.bottleCoolDown && this.statusBarBottle.bottlesvAvailable()) {
                this.statusBarBottle.setPercentage(this.statusBarBottle.percentage -= 20);
                let bottle = new ThrowableObject(this.character.x, this.character.y);
                this.throwableObject.push(bottle);
                this.removeThrownBottleFromMap(bottle);
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


    collisionBottleWithEnemies() {
        this.level.enemies.forEach((enemy) => {
            this.throwableObject.forEach((bottle) => {
                if (bottle.isColliding(enemy)) {
                    let enemyIndex = this.level.enemies.indexOf(enemy)
                    this.level.enemies[enemyIndex].hit(20)
                    if (this.enemyDies(enemyIndex)) {
                        this.level.enemies[enemyIndex].speed = 0;
                        this.removeDeadObjectFromWorld(enemyIndex)
                        this.killedChickens += 1
                    }
                }
            });
        });
    }


    collisionBottleObject() {
        this.level.collectableBottles.forEach((collectObject) => {
            if (this.statusBarBottle.bottlesFull()) { 
                if (this.character.isColliding(collectObject)) {
                    this.statusBarBottle.setPercentage(this.statusBarBottle.percentage += 20)
                    let collectableObjectIndex = this.level.collectableBottles.indexOf(collectObject)
                    this.level.collectableBottles.splice(collectableObjectIndex, 1)
                }
            }
        });
    }


    collisionCoinObject() {
        this.level.collectableCoins.forEach((collectObject) => {
            if (this.statusBarCoin.coinsFull()) { 
                if (this.character.isColliding(collectObject)) {
                    this.collectedCoins += 1;
                    this.statusBarCoin.setPercentage(this.statusBarCoin.percentage += 0)
                    let collectableObjectIndex = this.level.collectableCoins.indexOf(collectObject)
                    this.level.collectableCoins.splice(collectableObjectIndex, 1)
                }
            }
        });
    }


    enemyDies(enemyIndex) {
        return this.level.enemies[enemyIndex].energy <= 0
    }



    removeDeadObjectFromWorld(enemyIndex) {
        let endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
        if (endboss !== undefined && this.level.enemies[enemyIndex] === endboss) {
            setTimeout(() => {
                this.level.enemies.splice(enemyIndex, 1);
            }, 3000);
        } else {
            setTimeout(() => {
                this.level.enemies.splice(enemyIndex, 1);
            }, 1000);
        }
    }


    victory() {
        let endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
        let victoryInterval = setInterval(() => {
            if (endboss.energy <= 0) {
                endboss.speed = 0
                this.victoryScreen();
                this.scores.push({
                    "chickens" : this.killedChickens,
                    "coins" : this.collectedCoins,
                    "time" : this.calculateElapsedTime()
                })
                this.saveScores();
                clearInterval(victoryInterval)
            }
        }, 200);
        
    }


    showScoresBoxHTML() {
        return /*html*/`
            <div id="show-scores-box">
                <h1 class="victory-txt">Victory</h1>
                <div class="counter-box">
                    <img src="img/3_enemies_chicken/chicken_normal/1_walk/1_w.png">
                    <h2>${this.killedChickens}</h2>
                </div>
                <div class="counter-box">
                    <img src="img/8_coin/coin_1.png">
                    <h2>${this.collectedCoins}</h2>
                </div>
                <div class="counter-box">
                    <img src="img/10_interactions/time.png">
                    <h2>${this.calculateElapsedTime()}</h2>
                </div>
            </div>
        `
    }


    victoryScreen() {
        document.getElementById('btn-box').innerHTML = /*html*/`
        <a href="#" class="button" onclick="retryLevel('victory-overlay')">
            <img src="img/10_interactions/retry.png" class="img-btn">
        </a>
        <a href="index.html" class="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                <line x1="0" y1="5" x2="30" y2="5" stroke="black" stroke-width="2"/>
                <line x1="0" y1="15" x2="30" y2="15" stroke="black" stroke-width="2"/>
                <line x1="0" y1="25" x2="30" y2="25" stroke="black" stroke-width="2"/>
            </svg>
        </a>
    `
    document.getElementById('game-overlay').classList.add('victory-overlay')
    document.getElementById('game-overlay').innerHTML += this.showScoresBoxHTML()
    }
    


    gameOver() {
        let gameOverInterval = setInterval(() => {
            if (this.character.energy <= 0 ) {
                this.showGameOverScreen()
                clearInterval(gameOverInterval)

            }
        }, 200);
    }

    showGameOverScreen() {
        document.getElementById('btn-box').innerHTML = /*html*/`
            <a href="#" class="button" onclick="retryLevel('game-over-overlay')">
                <img src="img/10_interactions/retry.png" class="img-btn">
            </a>
            <a href="index.html" class="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                    <line x1="0" y1="5" x2="30" y2="5" stroke="black" stroke-width="2"/>
                    <line x1="0" y1="15" x2="30" y2="15" stroke="black" stroke-width="2"/>
                    <line x1="0" y1="25" x2="30" y2="25" stroke="black" stroke-width="2"/>
                </svg>
            </a>
        `
        document.getElementById('game-overlay').classList.add('game-over-overlay')
        document.getElementById('game-overlay').innerHTML += this.showScoresBoxHTML()
    }

    draw() {
        // Clear Canvas per Frame
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)

        this.ctx.translate(this.camera_x, 0)

        this.addObjectsToMap(this.level.bgObjects)
        this.addObjectsToMap(this.level.clouds)
        this.addObjectsToMap(this.level.enemies)
        this.addObjectsToMap(this.level.collectableBottles)
        this.addObjectsToMap(this.level.collectableCoins)
        this.addObjectsToMap(this.throwableObject)
        this.addToMap(this.character)
        
        this.ctx.translate(-this.camera_x, 0)

        this.addToMap(this.statusBarHp)
        this.addToMap(this.coinCount)
        this.addToMap(this.chickenCounter)
        this.addToMap(this.playTime)
        this.addToMap(this.statusBarBottle);
        this.drawPlayerCounts();


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
        this.ctx.fillText('Cd: ' + this.lastThrowTime + ' s', 25, 180);
    }


    calculateElapsedTime() {
        let currentTime = new Date().getTime();
        let elapsedTime = currentTime - this.startTime;
        elapsedTime = (elapsedTime / 1000).toFixed(0)
        return elapsedTime
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


    //     addNewObjectsToMap() {
    //     this.addNewBottlesToMap();
    //     this.addNewChickensToMap();
    // }


    addNewBottlesToMap() {
        setInterval(() => {
            this.level.collectableBottles.push(new BottleObject('img/6_salsa_bottle/salsa_bottle.png', 2000, 325))
        }, 10000);            
    }


    addNewChickensToMap() {
        setInterval(() => {
            this.level.enemies.push(new Chicken())
        }, 10000);            
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