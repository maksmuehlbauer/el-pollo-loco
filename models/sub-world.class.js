class SubWorld {
    

    showGameOverScreen(killedChickens, collectedCoins, calculateElapsedTime) {
        document.getElementById('btn-box').innerHTML = window.showGameOverScreenHTML();
        document.getElementById('game-overlay').classList.add('game-over-overlay');
        document.getElementById('game-overlay').innerHTML += window.showScoresBoxHTML(killedChickens, collectedCoins, calculateElapsedTime);
        document.getElementById('status-txt').innerHTML = `Game Over`;
        document.getElementById('movement-box').classList.add('d-none');
    }
    

}