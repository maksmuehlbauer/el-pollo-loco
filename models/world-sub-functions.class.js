class SubWorld {
    /**
     * Displays the victory screen.
     */
    victoryScreen(killedChickens, collectedCoins, time) {
        document.getElementById('btn-box').innerHTML = window.victoryScreenHTML();
        document.getElementById('game-overlay').classList.add('victory-overlay');
        document.getElementById('game-overlay').innerHTML += window.showScoresBoxHTML(killedChickens, collectedCoins, time);
    }

    /**
     * Displays the game over screen.
     */
    showGameOverScreen(killedChickens, collectedCoins, time) {
        document.getElementById('btn-box').innerHTML = window.showGameOverScreenHTML();
        document.getElementById('game-overlay').classList.add('game-over-overlay');
        document.getElementById('game-overlay').innerHTML += window.showScoresBoxHTML(killedChickens, collectedCoins, time);
        document.getElementById('status-txt').innerHTML = `Game Over`;
        document.getElementById('movement-box').classList.add('d-none');
    }


    /**
     * Stops all intervals.
     */
    stopAllIntervals() {
        for (let i = 1; i < 9999; i++) {
            window.clearInterval(i)
        } 
    }


        /**
     * Removes a thrown bottle from the map after a delay.
     * @param {ThrowableObject} bottle - The bottle to remove.
     */
        removeThrownBottleFromMap(bottle, throwableObject) {
            const index = throwableObject.indexOf(bottle);
            if (index !== -1) {
                setTimeout(() => {
                    throwableObject.splice(index, 1)
                }, 1500);
            }
        }
}