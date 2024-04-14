class StatusBarCoin extends StatusBar {
    percentage = 60
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

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(this.percentage);
        this.x = 20;
        this.y = 40;
    }

    coinsvAvailable() {
        return this.percentage > this.emptyCoins
    }

    coinsFull() {
        return this.percentage < this.fullCoins
    }
}