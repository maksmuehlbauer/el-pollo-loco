class World {
    character = new Character();
    // endboss = new Endboss();
    level = level1
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBarHp = new StatusBarHp();
    statusBarCoin = new StatusBarCoin();
    statusBarBottle = new StatusBarBottle();
    throwableObject = [];



    // der Konstruktor wird ausgeführt sobald eine Instanz von der jeweiligen Klasse erstellt wird (in diese Fall der Klasse World)
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.startBossFight()
        this.gameOver()
      

    }

    // Link so that you can access all variables in the World class with the Character class (Primary for keyboard Class)
    setWorld() {
        this.character.world = this
    }

    // gameOver() {
    //     if (this.character.energy <= 0) {
    //         document.getElementById('canvas').innerHTML = `<h1>test</h1>`
    //         console.log('test')
    //     }
    // }

    run() {
        setInterval(() => {
            this.checkThrowObejcts();
            this.checkCollisions();
            this.removeThrownBottleFromMap()
        }, 200)
    }

    
    startBossFight() {
        setInterval(() => {
        let endboss = this.level.enemies.findIndex(enemy => enemy instanceof Endboss);
            if (this.character.x > 2000) {
                this.level.enemies[endboss].move()
            }
        }, 200)
    }    
    

    checkThrowObejcts() {
        if (this.statusBarBottle.bottlesvAvailable())
            if (this.keyboard.THROW && this.throwableObject.length === 0) {
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
                        this.removeDeadObjectFromWorld(enemyIndex)
                    }
                }
            });
        });
    }


    enemyDies(enemyIndex) {
        return this.level.enemies[enemyIndex].energy <= 0
    }



    removeDeadObjectFromWorld(enemyIndex) {
        let endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
        if (endboss === endboss) {
            setTimeout(() => {
                this.level.enemies.splice(enemyIndex, 1)
            }, 3000);
        } else {
            this.level.enemies.splice(enemyIndex, 1)
        }
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
                    this.statusBarCoin.setPercentage(this.statusBarCoin.percentage += 20)
                    let collectableObjectIndex = this.level.collectableCoins.indexOf(collectObject)
                    this.level.collectableCoins.splice(collectableObjectIndex, 1)
                }
            }
        });
    }

    gameOver() {
        setInterval(() => {
            if (this.character.energy <= 0) {
                document.getElementById('game-overlay').style.display = "flex";
                document.getElementById('game-overlay').classList.add('red-rect')
                document.getElementById('game-overlay').innerHTML += /*html*/`
                    <button id="retry-btn" class="button" onclick="retryLevel()">Retry</button>
                    <button id="main-menu" class="button" onclick="MainMenu()">Main Menu</button>
                `;
                document.getElementById('canvas').style.display = "none";
                document.getElementById('retry-btn').style.display = "block";
                document.getElementById('main-menu').style.display = "block";
                document.getElementById('game-over-txt').style.display = "block";
            }
        }, 200);

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
        this.addToMap(this.statusBarCoin)
        this.addToMap(this.statusBarBottle)

 



         let self = this
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    // showGameOverRect() {
    //     // this.ctx.filter = "blur(5px)"; komischer strich im hintergrund
    //     this.ctx.fillStyle = "rgba(255,0,0,1.5)";
    //     this.ctx.fillRect(0, 0 ,this.canvas.width ,this.canvas.height);
    // }


    // drawGameOverText() {
    //     let text = "Game Over"
    //     let textWidth = this.ctx.measureText(text).width;
    //     let x = (canvas.width - textWidth) / 2;
    //     let y = canvas.height / 2;
    //     this.ctx.font = "bold 48px Sancreek"
    //     this.ctx.fillStyle = "black";
    //     this.ctx.fillText(text, x, y);
    // }

    






























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
        mo.drawFrame(this.ctx)
        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }
    }

    // addNewObjectsToMap() {
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


}