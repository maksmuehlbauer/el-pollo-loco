/**
 * Represents the sounds of the game world.
 */
class WorldSounds {
    endbossMuted = true

    constructor() {
        this.collectCoin_sound = new Audio('audio/collect-coin1.mp3');
        this.collectBottle_sound = new Audio('audio/collect-bottle2.mp3');
        this.background_music = new Audio('audio/background-music2.mp3');
        this.hurt_sound = new Audio('audio/hurt.mp3');
        this.sleeping_sound = new Audio('audio/snoring.mp3');
        this.gameOver_sound = new Audio('audio/game-over2.mp3');
        this.jumping_sound = new Audio('audio/jump.mp3');
        this.walking_sound = new Audio('audio/walk.mp3');
        this.breakingBottle_sound = new Audio('audio/break-bottle.mp3');
        this.throw_sound = new Audio('audio/throw.mp3');
        this.endbossDie_sound = new Audio('audio/victory.mp3');
        this.endbossHurt_sound = new Audio('audio/endboss-hurt.mp3');
        this.endbossStart_sound = new Audio('audio/enboss-starts.mp3');
        this.sound_chickenDead = new Audio('audio/chicken-dead.mp3');

        this.sounds = [
            this.collectCoin_sound,
            this.collectBottle_sound,
            this.background_music,
            this.hurt_sound,
            this.sleeping_sound,
            this.gameOver_sound,
            this.jumping_sound,
            this.walking_sound,
            this.breakingBottle_sound,
            this.throw_sound,
            this.endbossDie_sound,
            this.endbossHurt_sound,
            this.endbossStart_sound,
            this.sound_chickenDead
        ];
    }


    /**
     * Toggles the mute state for all endboss-related sounds.
     */
    muteEndbossSounds() {
        if (this.endbossMuted) {
            this.endbossDie_sound.muted = true
            this.endbossHurt_sound.muted = true
            this.endbossStart_sound.muted = true
            this.sound_chickenDead.muted = true
            this.endbossMuted = false
        }
        else {
            this.endbossDie_sound.muted = false;
            this.endbossHurt_sound.muted = false;
            this.endbossStart_sound.muted = false;
            this.sound_chickenDead.muted = false;
            this.endbossMuted = true
        }
    }


    /**
     * Mutes or unmutes all sounds in the game.
     * @param {boolean} mute - If true, mutes all sounds. If false, unmutes all sounds.
     */
    muteAllSounds(mute) {
        this.sounds.forEach(sound => {
            sound.muted = mute;
        })
    }

    
    // Example usage within the game
    toggleMute() {
        this.isMuted = !this.isMuted;
        this.muteAllSounds(this.isMuted);
    }

        
    /**
     * Plays the sound of a chicken dying.
     */
    playChickenDieSound() {
        this.sound_chickenDead.volume = 0.1;
        this.sound_chickenDead.play();
    }


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