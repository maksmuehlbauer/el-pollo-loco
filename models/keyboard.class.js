/**
 * Represents a keyboard controller for player input.
 */
class Keyboard {
    LEFT = false;
    RIGHT = false;
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
        this.mobileLeftControl();
        this.mobileRightControl();
        this.mobileThrowControl();
        this.mobileJumpControl();
    }


    /**
     * Sets up mobile control for the jump action.
     * Adds touchstart and touchend event listeners to the jump button.
     */
    mobileJumpControl() {
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
     * Sets up mobile control for the throw action.
     * Adds touchstart and touchend event listeners to the throw button.
     */
    mobileThrowControl() {
        document.getElementById('btn-throw').addEventListener('touchstart', (e) => {
            if (e.cancelable) e.preventDefault();
            this.THROW = true;
        });

        document.getElementById('btn-throw').addEventListener('touchend', (e) => {
            if (e.cancelable) e.preventDefault();
            this.THROW = false;
            this.lastKeyboardInput()
        });
    }


    /**
     * Sets up mobile control for moving right.
     * Adds touchstart and touchend event listeners to the right button.
     */
    mobileRightControl() {
        document.getElementById('btn-right').addEventListener('touchstart', (e) => {
            if (e.cancelable) e.preventDefault();
            this.RIGHT = true;
        });

        document.getElementById('btn-right').addEventListener('touchend', (e) => {
            if (e.cancelable) e.preventDefault();
            this.RIGHT = false;
            this.lastKeyboardInput()
        });
    }


    /**
     * Sets up mobile control for moving left.
     * Adds touchstart and touchend event listeners to the left button.
     */
    mobileLeftControl() {
        document.getElementById('btn-left').addEventListener('touchstart', (e) => {
            if (e.cancelable) e.preventDefault();
            this.LEFT = true;
        });

        document.getElementById('btn-left').addEventListener('touchend', (e) => {
            if (e.cancelable) e.preventDefault();
            this.LEFT = false;
            this.lastKeyboardInput()
        });
    }


    /**
     * Sets up desktop keyboard events.
     */
    desktopPressEvents() {
        this.keyDownTrueEvents();
        this.keyUpFalseEvents();
    }

    
    /**
     * Adds event listeners for keydown events to set the corresponding keyboard controls to true.
     */
    keyDownTrueEvents() {
        window.addEventListener("keydown", (event) => {
            this.lastKeyboardInput()
            if (event.keyCode === 39) {
                keyboard.RIGHT = true;
            }
            if (event.keyCode === 37) {
                keyboard.LEFT = true;
            }
            if (event.keyCode === 32) {
                keyboard.SPACE = true;
            }
            if (event.keyCode === 68) {
                keyboard.THROW = true;
            }
        });
    }


    /**
     * Adds event listeners for keyup events to set the corresponding keyboard controls to false.
     */
    keyUpFalseEvents() {
        window.addEventListener("keyup", (event) => {
            if (event.keyCode === 39) {
                keyboard.RIGHT = false;
            }
            if (event.keyCode === 37) {
                keyboard.LEFT = false;
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






