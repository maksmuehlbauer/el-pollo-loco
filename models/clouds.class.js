class Cloud extends MovableObject{
    y = 0;
    width = 720;
    height = 480;
    fps = 1000 / 60


    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png')
        this.x = Math.random() * 520;
        this.animate()

    }

    animate() {
        setInterval( () => {
            this.x -= 0.1;
        }, this.fps)
    }
}