let canvas;
let world;
let keyboard = new Keyboard();
let worldSounds = new WorldSounds();
let scores = [];
loadScores();


function init() {
    canvas = document.getElementById('canvas');
    // startGame();
}


function retryLevel(id) {
    document.getElementById('show-scores-box').remove();
    document.getElementById('game-overlay').classList.remove(id);
    startGame();
}


function MainMenu() {
    window.location.href = 'index.html';    
}


function startGame() {
    document.getElementById('game-overlay').style.display = "none";
    initWorld();
    showControls();
}


function initWorld() {
  world = new World(canvas, keyboard, worldSounds);
  world.draw();
  world.worldSounds.playBackgroundSound();
}


function showControls() {
    document.getElementById('movement-box').classList.remove('d-none');
}


function helpFaq() {
    document.getElementById('game-overlay').innerHTML = helpFaqHTML();
}


function showScoreBoard() {
    sortScores();
    let topFiveScores = scores.slice(0, 5);
    document.getElementById('game-overlay').innerHTML = showScoreBoardHTML(); 
    let scoreTable = document.getElementById('score-table');
    topFiveScores.forEach((score, i) => {
        scoreTable.innerHTML += leaderboardTableHTML(i, score);
    });
}


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


function loadScores() {
    let ScoresAsText = localStorage.getItem("Scores");
    if (scores) {
        scores = JSON.parse(ScoresAsText);
    }
  }

function fullscreen() {
  let fullscreen = document.getElementById('canvas');
  enterFullscreen(fullscreen)
}


function enterFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.msRequestFullscreen) {  
    element.msRequestFullscreen();
  } else if(element.webkitRequestFullscreen) {  
    element.webkitRequestFullscreen();
  }
}


function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}


function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


function updateMobileOrientation() {
  if (window.orientation === 0) {
    document.getElementById('mobile-info').classList.remove('d-none')
    console.log("portrait");
  } else if (window.orientation === 90 || window.orientation === -90) {
    document.getElementById('mobile-info').classList.add('d-none')
    console.log("landscape");
  } 
}


function checkDeviceOutput() {
  if (isMobileDevice()) {      console.log("Die Seite wird auf einem Mobilgerät geöffnet.");
      document.getElementById('mobile-info').classList.remove('d-none')
      window.addEventListener('orientationchange', updateMobileOrientation);
    }
    // else {
    //   console.log("Die Seite wird nicht auf einem Mobilgerät geöffnet.");
    // }
}


document.addEventListener('DOMContentLoaded', checkDeviceOutput);
