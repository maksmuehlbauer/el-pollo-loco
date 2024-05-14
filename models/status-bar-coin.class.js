/**
 * Represents a status bar for coins in the game.
 * @extends StatusBar
 */
class StatusBarCoin extends StatusBar {
    percentage = 0
    emptyCoins = 0
    fullCoins = 100

    IMAGES = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];


    /**
     * Constructs a new StatusBarCoin object.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(this.percentage);
        this.x = 20;
        this.y = 40;
    }


    /**
     * Checks if coins are available.
     * @returns {boolean} True if coins are available, false otherwise.
     */
    coinsvAvailable() {
        return this.percentage > this.emptyCoins
    }

    
    /**
     * Checks if coins are full.
     * @returns {boolean} True if coins are full, false otherwise.
     */
    coinsFull() {
        return this.percentage < this.fullCoins
    }
}