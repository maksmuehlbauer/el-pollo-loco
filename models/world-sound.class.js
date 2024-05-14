/**
 * Represents the sounds of the game world.
 */
class WorldSounds {
    collectCoin_sound = new Audio('audio/collect-coin1.mp3');
    collectBottle_sound = new Audio('audio/collect-bottle2.mp3');
    background_music = new Audio('audio/background-music2.mp3');
    hurt_sound = new Audio('audio/hurt.mp3');
    sleeping_sound = new Audio('audio/snoring.mp3');
    gameOver_sound = new Audio('audio/game-over2.mp3');
    jumping_sound = new Audio('audio/jump.mp3');
    walking_sound = new Audio('audio/walk.mp3');
    breakingBottle_sound = new Audio('audio/break-bottle.mp3')
    throw_sound = new Audio('audio/throw.mp3');
    endbossDie_sound = new Audio('audio/victory.mp3')
    endbossHurt_sound = new Audio('audio/endboss-hurt.mp3')
    endbossStart_sound = new Audio('audio/enboss-starts.mp3')
    sound_chickenDead = new Audio('audio/chicken-dead.mp3');


    /**
     * Plays the throw sound effect.
     */
    playThrowSound() {
        this.throw_sound.volume = 0.3
        this.throw_sound.play()
    }


    /**
     * Plays the breaking bottle sound effect.
     */
    playBreakBottleSound() {
        this.breakingBottle_sound.volume = 0.3
        this.breakingBottle_sound.play();
    }
   

    /**
     * Plays the collect coin sound effect.
     */
    playCollectCoinSound() {
        this.collectCoin_sound.volume = 0.1;
        this.collectCoin_sound.play();
    }


    /**
     * Plays the collect bottle sound effect.
     */
    playCollectBottleSound() {
        this.collectBottle_sound.volume = 0.1;
        this.collectBottle_sound.play();
    }


    /**
     * Plays the background music.
     */
    playBackgroundSound() {
        this.background_music.currentTime = 0;
        this.background_music.volume = 0.5;
        this.background_music.play();
    }


    /**
     * Pauses the background music.
     */
    pauseBackgroundSound() {
        this.background_music.pause();
    }   


    /**
     * Plays the character hurt sound effect.
     */
    playCharacterHurtSound() {
        this.hurt_sound.volume = 0.1;
        this.hurt_sound.play();
    }


    /**
     * Plays the character sleeping sound effect.
     */
    playCharacterSleepingSound() {
        this.sleeping_sound.play();
    }


    /**
     * Pauses the character sleeping sound effect.
     */
    pauseCharacterSleepingSound() {
        this.sleeping_sound.pause();
    }


    /**
     * Plays the game over sound effect.
     */
    playGameOverSound() {
        this.gameOver_sound.play()
    }


    /**
     * Plays the character jump sound effect.
     */
    playCharacterJumpSound() {
        this.jumping_sound.currentTime = 0;
        this.jumping_sound.play();
    }


    /**
     * Plays the character walk sound effect.
     */
    playCharacterWalkSound() {
        this.walking_sound.play();
    }


    /**
     * Pauses the character walk sound effect.
     */
    pauseCharacterWalkSound() {
        if (this.walking_sound.played && this.walking_sound.currentTime > 0) {
            this.walking_sound.pause();
        }
    }


    /**
     * Plays the end boss start sound effect.
     */
    playEndbossStartSound() {
        this.endbossStart_sound.volume = 1;
        this.endbossStart_sound.play();
    }


    /**
     * Plays the end boss hit sound effect.
     */
    playEndbossHitSound() {
        this.endbossHurt_sound.volume = 0.5
        this.endbossHurt_sound.play();       
    }


    /**
     * Pauses the end boss hit sound effect.
     */
    pauseEndbossHitSound() {
        this.endbossHurt_sound.pause();       
    }

    
    /**
     * Plays the end boss die sound effect.
     */
    playEndbossDieSound() {
        this.endbossDie_sound.volume = 0.5
        this.endbossDie_sound.play();
    }
}