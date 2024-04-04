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

    // der Konstruktor wird ausgeführt sobald eine Instanz von der jeweiligen Klasse erstellt wird (in diese Fall der Klasse World)
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas
        this.draw();
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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)
    }
    
}