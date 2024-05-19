let canvas;
let world;
let keyboard = new Keyboard();
let worldSounds = new WorldSounds();
let scores = [];
let soundToggle = true;
loadScores();


/**
 * mute or unmute all sounds
 */
function muteAllSounds() {
  world.worldSounds.toggleMute()
  world.worldSoundMuted();
  toggleSoundImages();
}


/**
 * toggle sound Images on or off
 */
function toggleSoundImages() {
  if (soundToggle) {
    document.getElementById('mute').src = './img/10_interactions/sound-on.png'
    soundToggle = false;
  } else {
    document.getElementById('mute').src = './img/10_interactions/sound-off.png'
    soundToggle = true;
  }  
}


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
 * Displays the main menu by modifying the game overlay and updating UI elements.
 * @param {string} id - The ID of the class to be removed from the game overlay.
 */
function showMainMenu(id) {
  document.getElementById('game-overlay').style.display = "flex";
  document.getElementById('game-overlay').classList.remove(id)
  document.getElementById('show-scores-box').remove()
  document.getElementById('btn-box').innerHTML = mainMenuButtons();
}


/**
 * Handles the back button functionality to display the main menu and update UI elements.
 */
function backButton() {
  let gameOverlay = document.getElementById('game-overlay');
  gameOverlay.style.display = "flex";
  gameOverlay.innerHTML += createButtonBox();
  document.getElementById('rules').remove()
  document.getElementById('btn-box').innerHTML = mainMenuButtons();
  document.getElementById('back-button').classList.add('d-none')
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
    document.getElementById('mobile-controls').classList.remove('d-none');
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
    document.getElementById('game-overlay').innerHTML = showScoreBoardHTML(); 
    let scoreTable = document.getElementById('score-table');
    let noScoreInfo = document.getElementById('rules');
    if (!checkLocalStorage()) {
      noScoreInfo.innerHTML += noScoresYet();
    }
    if (checkLocalStorage()) {
      sortScores();
      let topFiveScores = scores.slice(0, 5);
      topFiveScores.forEach((score, i) => {
          scoreTable.innerHTML += leaderboardTableHTML(i, score);
      });
    }
}


/**
 * Checks if there is a "Scores" item in the local storage and returns its value.
 * @returns {string|null} The value of the "Scores" item in local storage, or null if it does not exist.
 */
function checkLocalStorage() {
  return localStorage.getItem("Scores")
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
 * Adds an event listener that responds to changes in screen orientation.
 * When the orientation changes to 0 degrees (portrait mode), an element with the ID 'mobile-info' is made visible.
 * When the orientation changes to any other angle, the element is hidden.
 */
window.addEventListener("orientationchange", (event) => {
    if (event.target.screen.orientation.angle === 0) {
      document.getElementById('mobile-info').classList.remove('d-none')
    } else {
      document.getElementById('mobile-info').classList.add('d-none')
    }
  }
)

/**
 * Checks the current device type based on the window width.
 * If the window width is 480 pixels or less, it displays the element with the ID 'mobile-info'.
 * Otherwise, it hides the element.
 */
function checkDeviceType() {
  const width = window.innerWidth;
  if (width <= 430) {
    if (isMobileDevice()) {
      document.getElementById('mobile-info').classList.remove('d-none')
    } 
    
  } else {
    document.getElementById('mobile-info').classList.add('d-none')

  }
}


// Adds an event listener to check the device type whenever the window is resized.
window.addEventListener('resize', checkDeviceType);


// Initial check of the device type when the script is first loaded.
checkDeviceType();