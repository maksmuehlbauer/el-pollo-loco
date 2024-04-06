class World {
    character = new Character();
    enemies = [new Chicken(), new Chicken(), new Chicken()];
    clouds = [new Cloud()];
    bgObjects = [
        new BackgroundObjects('img/5_background/layers/air.png', 0, 0),
        new BackgroundObjects('img/5_background/layers/3_third_layer/1.png', 0, 0),
        new BackgroundObjects('img/5_background/layers/2_second_layer/1.png', 0, 0),
        new BackgroundObjects('img/5_background/layers/1_first_layer/1.png', 0, 0),
        
    ];
    canvas;
    ctx;
    keyboard;


    // der Konstruktor wird ausgeführt sobald eine Instanz von der jeweiligen Klasse erstellt wird (in diese Fall der Klasse World)
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    // Link so that you can access all variables in the World class with the Character class (Primary for keyboard Class)
    setWorld() {
        this.character.world = this
    }

    draw() {
        // Clear Canvas per Frame
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)

        this.addObjectsToMap(this.bgObjects)
        this.addObjectsToMap(this.clouds)
        this.addObjectsToMap(this.enemies)
        this.addToMap(this.character)
        

        let self = this
        requestAnimationFrame(function() {
            self.draw();
        });
    }


    addObjectsToMap(objects) {
        objects.forEach( object => {
            this.addToMap(object)
        })
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width * 1, mo.height)

        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
    
}