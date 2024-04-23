class StatusBarBottle extends StatusBar {
    percentage = 60
    emptyBottles = 0
    fullBottles = 100

    IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(this.percentage);
        this.x = 180;
        this.y = 0;
    }

    bottlesvAvailable() {
        return this.percentage > this.emptyBottles
    }

    bottlesFull() {
        return this.percentage < this.fullBottles
    }
}