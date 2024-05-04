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


    playThrowSound() {
        this.throw_sound.volume = 0.3
        this.throw_sound.play()
    }

    playBreakBottleSound() {
        this.breakingBottle_sound.volume = 0.3
        this.breakingBottle_sound.play();
    }
   

    playCollectCoinSound() {
        this.collectCoin_sound.volume = 0.1;
        this.collectCoin_sound.play();
    }


    playCollectBottleSound() {
        this.collectBottle_sound.volume = 0.1;
        this.collectBottle_sound.play();
    }


    playBackgroundSound() {
        this.background_music.currentTime = 0;
        this.background_music.volume = 0.5;
        this.background_music.play();
    }

    pauseBackgroundSound() {
        this.background_music.pause();
    }   


    playCharacterHurtSound() {
        this.hurt_sound.volume = 0.1;
        this.hurt_sound.play();
    }

    playCharacterSleepingSound() {
        this.sleeping_sound.play();
    }


    pauseCharacterSleepingSound() {
        this.sleeping_sound.pause();
    }


    playGameOverSound() {
        this.gameOver_sound.play()
    }


    playCharacterJumpSound() {
        this.jumping_sound.currentTime = 0;
        this.jumping_sound.play();
    }


    playCharacterWalkSound() {
        this.walking_sound.play();
    }


    pauseCharacterWalkSound() {
        if (this.walking_sound.played && this.walking_sound.currentTime > 0) {
            this.walking_sound.pause();
        }
    }

    playEndbossStartSound() {
        this.endbossStart_sound.volume = 1;
        this.endbossStart_sound.play();
    }


    playEndbossHitSound() {
        this.endbossHurt_sound.volume = 0.5
        this.endbossHurt_sound.play();
    }


    playEndbossDieSound() {
        this.endbossDie_sound.volume = 0.5
        this.endbossDie_sound.play();
    }


    muteAllSounds() {
        this.collectCoin_sound.muted = true
        this.collectBottle_sound.muted = true
        this.background_music.muted = true
        this.hurt_sound.muted = true
        this.sleeping_sound.muted = true
        this.gameOver_sound.muted = true
        this.jumping_sound.muted = true
        this.walking_sound.muted = true 
        this.breakingBottle_sound.muted = true
        this.throw_sound.muted = true
        this.endbossDie_sound.muted = true
        this.endbossHurt_sound.muted = true
        this.endbossStart_sound.muted = true
        }
}