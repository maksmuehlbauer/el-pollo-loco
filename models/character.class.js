class Character extends MovableObject{
    x = 0
    y = 0
    width = 150;
    height = 300
    speed = 10;
    lastCharacterAction;
    shortIdleCD = 6;
    longIdleCD = 10;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];
    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];
    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];
    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];
    IMAGES_IDLE_SHORT = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    IMAGES_IDLE_LONG = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png'
    ]
    world;     // Link so that you can access all variables in the World class with the Character class (Primary for keyboard Class)
    walking_sound = new Audio('audio/walk.mp3');
    sleeping_sound = new Audio('audio/snoring.mp3');
    jumping_sound = new Audio('audio/jump.mp3');
    hurt_sound = new Audio('audio/hurt.mp3');
    gameOver_sound = new Audio('audio/game-over2.mp3')

  

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE_SHORT);
        this.loadImages(this.IMAGES_IDLE_LONG);
        this.applyGravity()
        this.animate();
    }

    animate() {
        
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.playWalkSound();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.playWalkSound()
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                this.playJumpSound()
            }
            this.world.camera_x = -this.x + 100;
            
        }, 1000 / 60)
        

        let characterAnimation = setInterval(() => {
            this.sleeping_sound.pause();
            if (this.characterStartAnimation()) {
                this.loadImage('img/2_character_pepe/3_jump/J-32.png')
            } else if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD)
                this.gameOverSound()
                clearInterval(characterAnimation)
            } else if (this.isHit()){
                this.playAnimation(this.IMAGES_HURT)
                this.playHurtSound()
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING)
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING)
                } else if (this.longAFK()) {
                    this.playAnimation(this.IMAGES_IDLE_LONG)
                    this.playSleepingSound();
                } else if (this.shortAFK()) {
                    this.playAnimation(this.IMAGES_IDLE_SHORT)
                }
            }
        }, 100)
    }

    shortAFK() {
        return this.world.keyboard.calculateElapsedTime() > this.shortIdleCD
    }

    longAFK() {
        return this.world.keyboard.calculateElapsedTime() > this.longIdleCD
    }


    playJumpSound() {
        this.jumping_sound.currentTime = 0;
        this.jumping_sound.play();
    }


    playWalkSound() {
        this.walking_sound.play();
    }


    playHurtSound() {
        this.hurt_sound.volume = 0.4;
        this.hurt_sound.play();
    }


    gameOverSound() {
        this.gameOver_sound.play()
    }


    playSleepingSound() {
        this.sleeping_sound.play();
    }
}