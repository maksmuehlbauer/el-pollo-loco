let canvas;
let world;
let keyboard = new Keyboard();
let scores = [];

loadScores();


function init() {
    canvas = document.getElementById('canvas');
    // startGame() 
    // showScoreBoard();
}


function retryLevel(id) {
    document.getElementById('show-scores-box').remove()
    document.getElementById('game-overlay').classList.remove(id)
    startGame()
}


function MainMenu() {
    console.log('Main Menu')
    window.location.href = 'index.html'
}


function startGame() {
    document.getElementById('game-overlay').style.display = "none";
    world = new World(canvas, keyboard);
    world.draw();
}


function helpFaqHTML() {
    document.getElementById('game-overlay').innerHTML = /*html*/`
        <a href="index.html" class="button btn-back">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
               <polygon points="70,20 70,80 20,50" fill="currentColor"/>
            </svg>
        </a>
        <div id="rules">
            <h2>Rules:</h2>
            <p>1. Defeat the final boss, to save your Scores</p>
            <p>2. Loosing dont save scores</p>
            <p>3. measured values = Time > Coins > defeated Chickens</p>
            <p>4. if your energy bar drops to zero, you lose.</p>
            <p>5. Check your stats at the leaderboard</p>

            <h2>Game Mechanics:</h2>
            <p>1. You can throw one bottle every 1.5/sek</p>
            <p>2. You can hold 5 bottles max.</p>
            <p>3. Normal and small Chickens are one shot, Boss have more energy</p>
            <p>4. From time to time there spawn new enemys and bottles</p>
        </div>
    `
}


function showScoreBoard() {
    sortScores();
    let topFiveScores = scores.slice(0, 5)
    document.getElementById('game-overlay').innerHTML = showScoreBoardHTML(); 
    let scoreTable = document.getElementById('score-table');
    topFiveScores.forEach((score, i) => {
        scoreTable.innerHTML += leaderboardTableHTML(i, score);
    })
}


function sortScores() {
    scores.sort((a, b) => {
        if (parseInt(a.time) !== parseInt(b.time)) {
            return parseInt(b.time) - parseInt(a.time);
        }
        if (a.coins !== b.coins) {
            return b.coins - a.coins;
        }
        return b.chickens - a.chickens;
    });
}


function showScoreBoardHTML() {
    return /*html*/`
    <a href="index.html" class="button btn-back">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
           <polygon points="70,20 70,80 20,50" fill="currentColor"/>
        </svg>
    </a>
    <div id="rules">
        <h2>Scoreboard</h2>
        <table id="score-table">
            <tr>
                <th>Nr.</th>
                <th><img src="img/10_interactions/time.png" class="img-time"></th>
                <th><img src="img/8_coin/coin_1.png"></th>
                <th><img src="img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"></th>
            <tr>
        </table>
    </div>
`
}


function leaderboardTableHTML(i, score) {
    return /*html*/`
    <td>#${i + 1}</td>
    <td>${score.time} s</td>
    <td>${score.coins}</td>
    <td>${score.chickens}</td>
    `
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


function loadScores() {
    let ScoresAsText = localStorage.getItem("Scores");
    if (scores) {
        scores = JSON.parse(ScoresAsText);
    }
  }