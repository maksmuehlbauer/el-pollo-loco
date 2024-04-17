let canvas;
let world;
let keyboard = new Keyboard();



function init() {
    loadingStartScreen();
    canvas = document.getElementById('canvas');
    startGame() 

}


function loadingStartScreen() {
    document.getElementById('canvas-container').innerHTML += /*html*/`
        <div id="img-container">
            <button id="help-btn" class="button d-block" onclick="helpFAQ()">Help</button>
            <button id="start-btn" class="button d-block" onclick="startGame()">Start</button>
        </div>
    `
}


function retryLevel() {
    console.log('retry')
    startGame()
    
}

function MainMenu() {
    console.log('Main Menu')
    window.location.href = 'index.html'
}

function startGame() {
    hideStartScreen();
    document.getElementById('canvas').style.display = "block";
    document.getElementById('img-container').style.display = "none";
    document.getElementById('canvas-container').style.height = "480px";
    world = new World(canvas, keyboard);
    world.draw();
}


function helpFAQ() {
    hideStartScreen();
    document.getElementById('img-container').innerHTML += /*html*/`
    <button class="button menu-btn" onclick="MainMenu()">Main Menu</button>
        <div id="rules">
        
            <h2>Rules:</h2>
            <p>1. Throw bottles at the chickens to clear a path to the final boss.</p>
            <p>2. You can also jump over the chickens but it won't do any harm</p>
            <p>3. Defeat the final boss to complete the level.</p>
            <p>4. if your energy bar drops to zero, you lose.</p>
            
            <h2>Game Mechanics:</h2>
            <p>1. You can throw one bottle every 1.5/sek</p>
            <p>2. You can hold 5 bottles max.</p>
            <p>3. Normal Chickens are one shot, Boss have more energy</p>
            <p>4. From time to time there spawn new enemys and bottles</p>
            
        </div>
    `
}


function hideStartScreen() {
    document.getElementById('help-btn').style.display = "none";
    document.getElementById('start-btn').style.display = "none";

}




window.addEventListener("keydown", (event) => {
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


