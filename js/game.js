let canvas;
let world;
let keyboard = new Keyboard();
let scores = [];

loadScores();


function init() {
    canvas = document.getElementById('canvas');
    startGame() 
    // showScoreBoard();
    // helpFaq()
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
    world = new World(canvas, keyboard);
    world.draw();
    showControls();
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
        if (parseInt(a.time) !== parseInt(b.time)) {
            return parseInt(a.time) - parseInt(b.time);
        };
        if (a.coins !== b.coins) {
            return b.coins - a.coins;
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
    } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
      element.msRequestFullscreen();
    } else if(element.webkitRequestFullscreen) {  // iOS Safari
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

