/**
 * Represents a keyboard controller for player input.
 */
class Keyboard {
    LEFT = false;
    RIGHT = false;
    DOWN = false;
    UP = false;
    SPACE = false;
    THROW = false;
    lastKeyboardAction = 6;

    
    /**
     * Creates an instance of Keyboard.
     */
    constructor() {
        this.desktopPressEvents();
        this.mobilePressEvents();
        this.lastKeyboardAction = new Date().getTime();
    }


    /**
     * Sets up touch events for mobile controls.
     */
    mobilePressEvents() {
        document.getElementById('btn-left').addEventListener('touchstart', (e) => {
            if (e.cancelable) e.preventDefault();
            this.LEFT = true;
        });

        document.getElementById('btn-left').addEventListener('touchend', (e) => {
            if (e.cancelable) e.preventDefault();
            this.LEFT = false;
            this.lastKeyboardInput()
        });

        document.getElementById('btn-right').addEventListener('touchstart', (e) => {
            if (e.cancelable) e.preventDefault();
            this.RIGHT = true;
        });

        document.getElementById('btn-right').addEventListener('touchend', (e) => {
            if (e.cancelable) e.preventDefault();
            this.RIGHT = false;
            this.lastKeyboardInput()
        });

        document.getElementById('btn-throw').addEventListener('touchstart', (e) => {
            if (e.cancelable) e.preventDefault();
            this.THROW = true;
        });

        document.getElementById('btn-throw').addEventListener('touchend', (e) => {
            if (e.cancelable) e.preventDefault();
            this.THROW = false;
            this.lastKeyboardInput()
        });

        document.getElementById('btn-jump').addEventListener('touchstart', (e) => {
            if (e.cancelable) e.preventDefault();
            this.SPACE = true;
        });

        document.getElementById('btn-jump').addEventListener('touchend', (e) => {
            if (e.cancelable) e.preventDefault();
            this.SPACE = false;
            this.lastKeyboardInput()
        });
        
    }


    /**
     * Sets up desktop keyboard events.
     */
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


    /**
     * Calculates the elapsed time since the last keyboard action.
     * @returns {number} The elapsed time in seconds.
     */
    calculateElapsedTime() {
        let currentTime = new Date().getTime();
        let elapsedTime = currentTime - this.lastKeyboardAction
        elapsedTime = elapsedTime / 1000
        return elapsedTime
    }

    
    /**
     * Updates the timestamp of the last keyboard action.
     * @returns {number} The updated timestamp.
     */
    lastKeyboardInput() {
        this.lastKeyboardAction = new Date().getTime();
        return this.lastKeyboardAction
    }
}






