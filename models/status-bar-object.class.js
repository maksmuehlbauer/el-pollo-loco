/**
 * Represents a status bar object in the game.
 * @extends DrawableObject
 */
class StatusBar extends DrawableObject {
    width = 150
    height = 50
    x = 20
    y = 0
    percentage = this.percentage;
    
    
    /**
     * Sets the percentage of the status bar and updates its appearance accordingly.
     * @param {number} percentage - The percentage value to set.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    
    /**
     * Resolves the index of the image in the IMAGES array based on the current percentage.
     * @returns {number} - The index of the image.
     */
    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }
}


