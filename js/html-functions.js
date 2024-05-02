window.showGameOverScreenHTML = function () {
    return /*html*/`
    <a href="#" class="button" onclick="retryLevel('game-over-overlay')">
        <img src="img/10_interactions/retry.png" class="img-btn">
    </a>
    <a href="index.html" class="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
            <line x1="0" y1="5" x2="30" y2="5" stroke="black" stroke-width="2"/>
            <line x1="0" y1="15" x2="30" y2="15" stroke="black" stroke-width="2"/>
            <line x1="0" y1="25" x2="30" y2="25" stroke="black" stroke-width="2"/>
        </svg>
    </a>
`
}


window.showScoresBoxHTML = function(chickens, coins, time) {
    return /*html*/`
    <div id="show-scores-box">
        <h1 id="status-txt">Victory</h1>
        <div class="counter-box">
            <img src="img/3_enemies_chicken/chicken_normal/1_walk/1_w.png">
            <h2>${chickens}</h2>
        </div>
        <div class="counter-box from-left-animation">
            <img src="img/8_coin/coin_1.png">
            <h2>${coins}</h2>
        </div>
        <div class="counter-box">
            <img src="img/10_interactions/time.png">
            <h2>${time}</h2>
        </div>
    </div>
`
}

window.victoryScreenHTML = function() {
    return /*html*/`
    <a href="#" class="button" onclick="retryLevel('victory-overlay')">
        <img src="img/10_interactions/retry.png" class="img-btn">
    </a>
    <a href="index.html" class="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
            <line x1="0" y1="5" x2="30" y2="5" stroke="black" stroke-width="2"/>
            <line x1="0" y1="15" x2="30" y2="15" stroke="black" stroke-width="2"/>
            <line x1="0" y1="25" x2="30" y2="25" stroke="black" stroke-width="2"/>
        </svg>
    </a>
`
}


function helpFaqHTML() {
    return /*html*/`
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
        <p>1. You can throw one bottle every 1.5/sek (look at => <img class="rules-cd-img" src="img/10_interactions/sandclock.png">)</p>
        <p>2. You can hold 5 bottles max.</p>
        <p>3. Normal and small Chickens are one shot, Boss have more energy</p>
        <p>4. From time to time there spawn new enemys and bottles</p>
    </div>
`
}


function showScoreBoardHTML() {
    return /*html*/`
    <a href="index.html" class="button btn-back">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
           <polygon points="70,20 70,80 20,50" fill="currentColor"/>
        </svg>
    </a>
    <div id="rules">
        <h2>Top 5 Scores</h2>
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
