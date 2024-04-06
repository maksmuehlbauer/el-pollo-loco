class MovableObject {
    x = 120;
    y = 250;
    img;
    width = 100;
    height = 150;
    imageCache = {};


    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image" src="">
        this.img.src = path;
    }

    // create Image cache for every player and npc, dynamic for image range
    loadImages(arr) {
        arr.forEach( (path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
        
    }

        
    moveLeft() {
        console.log('moving left')
    }
    

    moveRight() {
        console.log('moving right')
    }


}