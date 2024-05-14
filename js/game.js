let canvas;
let world;
let keyboard = new Keyboard();
let worldSounds = new WorldSounds();
let scores = [];
loadScores();


/**
 * Initializes the canvas element.
 */
function init() {
    canvas = document.getElementById('canvas');
}


/**
 * Retries the current level.
 * @param {string} id - The ID of victory or loosing HTML Element.
 */
function retryLevel(id) {
    document.getElementById('show-scores-box').remove();
    document.getElementById('game-overlay').classList.remove(id);
    startGame();
}


/**
 * Redirects to the main menu page.
 */
function MainMenu() {
    window.location.href = 'index.html';    
}


/**
 * Starts the game by hiding the game overlay, initializing the world, and showing controls.
 */
function startGame() {
    document.getElementById('game-overlay').style.display = "none";
    initWorld();
    showControls();
}


/**
 * Initializes the game world by creating a new World instance, drawing it, and playing background sounds.
 */
function initWorld() {
  world = new World(canvas, keyboard, worldSounds);
  world.draw();
  world.worldSounds.playBackgroundSound();
}


/**
 * Displays the movement controls box.
 */
function showControls() {
    document.getElementById('movement-box').classList.remove('d-none');
}


/**
 * Displays the help/FAQ content on the game overlay.
 */
function helpFaq() {
    document.getElementById('game-overlay').innerHTML = helpFaqHTML();
}


/**
 * Displays the top five scores on the game overlay.
 */
function showScoreBoard() {
    sortScores();
    let topFiveScores = scores.slice(0, 5);
    document.getElementById('game-overlay').innerHTML = showScoreBoardHTML(); 
    let scoreTable = document.getElementById('score-table');
    topFiveScores.forEach((score, i) => {
        scoreTable.innerHTML += leaderboardTableHTML(i, score);
    });
}


/**
 * Sorts the scores array based on coins collected, time taken, and chickens rescued.
 */
function sortScores() {
    scores.sort((a, b) => {
        if (parseInt(a.coins) !== parseInt(b.coins)) {
            return parseInt(b.coins) - parseInt(a.coins);
        };
        if (a.time !== b.time) {
            return a.time - b.time;
        };
        return b.chickens - a.chickens;
    });
}


/**
 * Loads scores data from local storage.
 */
function loadScores() {
    let ScoresAsText = localStorage.getItem("Scores");
    if (scores) {
        scores = JSON.parse(ScoresAsText);
    }
  }


/**
 * Enters fullscreen mode by toggling the fullscreen state of the canvas element.
 */
function fullscreen() {
  let fullscreen = document.getElementById('canvas');
  enterFullscreen(fullscreen)
}


/**
 * Enters fullscreen mode for the specified element.
 * @param {HTMLElement} element - The element to enter fullscreen mode.
 */
function enterFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.msRequestFullscreen) {  
    element.msRequestFullscreen();
  } else if(element.webkitRequestFullscreen) {  
    element.webkitRequestFullscreen();
  }
}


/**
 * Exits fullscreen mode.
 */
function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}


/**
 * Checks if the current device is a mobile device.
 * @returns {boolean} True if the current device is a mobile device, false otherwise.
 */
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


/**
 * Updates the display based on the mobile device orientation.
 */
function updateMobileOrientation() {
  if (window.orientation === 0) {
    document.getElementById('mobile-info').classList.remove('d-none')
    console.log("portrait");
  } else if (window.orientation === 90 || window.orientation === -90) {
    document.getElementById('mobile-info').classList.add('d-none')
    console.log("landscape");
  } 
}


/**
 * Checks the device type and sets up event listener for orientation change if it's a mobile device.
 */
function checkDeviceOutput() {
  if (isMobileDevice()) { 
      document.getElementById('mobile-info').classList.remove('d-none')
      window.addEventListener('orientationchange', updateMobileOrientation);
    }
}


/**
 * Listens for the DOMContentLoaded event and calls checkDeviceOutput when the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', checkDeviceOutput);
