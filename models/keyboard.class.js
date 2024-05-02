class Keyboard {
    LEFT = false;
    RIGHT = false;
    DOWN = false;
    UP = false;
    SPACE = false;
    THROW = false;
    lastKeyboardAction;



    constructor() {
        this.desktopPressEvents();
        this.mobilePressEvents();
        this.lastKeyboardInput()
    }


    mobilePressEvents() {
        
        document.getElementById('btn-left').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.LEFT = true;
        });

        document.getElementById('btn-left').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.LEFT = false;
            this.lastKeyboardInput()
        });

        document.getElementById('btn-right').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.RIGHT = true;
        });

        document.getElementById('btn-right').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.RIGHT = false;
            this.lastKeyboardInput()
        });

        document.getElementById('btn-throw').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.THROW = true;
        });

        document.getElementById('btn-throw').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.THROW = false;
            this.lastKeyboardInput()
        });

        document.getElementById('btn-jump').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.SPACE = true;
        });

        document.getElementById('btn-jump').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.SPACE = false;
            this.lastKeyboardInput()
        });
        
    }

    desktopPressEvents() {
        
        window.addEventListener("keydown", (event) => {
            this.lastKeyboardInput()
            // console.log(event)
            if (event.keyCode === 39) {
                keyboard.RIGHT = true;
            }
        
            if (event.keyCode === 37) {
                keyboard.LEFT = true;
            }
        
            if (event.keyCode === 38) {
                keyboard.UP = true;
            }
        
            if (event.keyCode === 40) {
                keyboard.DOWN = true;
            }
        
            if (event.keyCode === 32) {
                keyboard.SPACE = true;
            }
            if (event.keyCode === 68) {
                keyboard.THROW = true;
            }
        });
        
        
        window.addEventListener("keyup", (event) => {
            // console.log(event)
            if (event.keyCode === 39) {
                keyboard.RIGHT = false;
            }
        
            if (event.keyCode === 37) {
                keyboard.LEFT = false;
            }
        
            if (event.keyCode === 38) {
                keyboard.UP = false;
            }
        
            if (event.keyCode === 40) {
                keyboard.DOWN = false;
            }
        
            if (event.keyCode === 32) {
                keyboard.SPACE = false;
            }
            if (event.keyCode === 68) {
                keyboard.THROW = false;
            }
        });
    }


    calculateElapsedTime() {
        let currentTime = new Date().getTime();
        let elapsedTime = currentTime - this.lastKeyboardAction
        elapsedTime = elapsedTime / 1000
        return elapsedTime
    }

    
    lastKeyboardInput() {
        this.lastKeyboardAction = new Date().getTime();
        return this.lastKeyboardAction
    }
}






