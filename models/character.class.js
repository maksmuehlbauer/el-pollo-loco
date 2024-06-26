/**
 * Represents the user character in the game.
 * @extends MovableObject
 */
class Character extends MovableObject{
    x = 0;
    y = 165;
    width = 150;
    height = 300
    speed = 10;
    shortIdleCD = 0;
    longIdleCD = 15;
    offset = {
        left: 40,
        right: 55,
        bottom: 15,
        top: 110,
      }
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
    world;
 
    /**
     * Creates a new Character instance.
     */
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

    
    /**
     * Animates character movement and state.
     */
    animate() {
        this.characterMovementAnimations();
        this.characterStateAnimations();
    }


    /**
    * Animates character movement based on keyboard input.
    */
    characterMovementAnimations() {
        setInterval(() => {
            this.world.worldSounds.pauseCharacterWalkSound();
            this.characterMoveRight();
            this.characterMoveLeft();
            this.characterJump();
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60)
    }


    /**
     * Moves the character to the right if the right arrow key is pressed and the character hasn't reached the end of the level.
     */
    characterMoveRight() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.otherDirection = false;
            this.world.worldSounds.playCharacterWalkSound();
        }
    }


    /**
     * Moves the character to the left if the left arrow key is pressed and the character hasn't reached the beginning of the level.
     */
    characterMoveLeft() {
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
            this.world.worldSounds.playCharacterWalkSound();
        }
    }


    /**
     * Makes the character jump if the space bar is pressed and the character is on the ground.
     */
    characterJump() {
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
            this.world.worldSounds.playCharacterJumpSound();
            this.characterJumpAnimation();
            
            
        }
    }



    /**
    * Animates character state based on various conditions.
    */
    characterStateAnimations() {
        let characterAnimation = setInterval(() => {
            this.world.worldSounds.pauseCharacterSleepingSound();
            this.characterAnimationLogic();
        }, 125)
    }

    /**
     * Handles the animation logic for the character based on its current state.
     */
    characterAnimationLogic() {
        if (this.isDead()) {
            this.characterIsDead()
        } else if (this.isHit()){
            this.characterIsHit() 
        } else if (this.longAFK()) {
            this.characterIsAfk()
        } else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING)
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALKING)
        }  else if (this.shortAFK()) {
            this.playAnimation(this.IMAGES_IDLE_SHORT)
        }  
    }


    /**
     * Plays the death animation for the character and plays the game over sound.
     */
    characterIsDead() {
        this.playAnimation(this.IMAGES_DEAD)
        this.world.worldSounds.playGameOverSound();
        // clearInterval(characterAnimation)
    }


    /**
     * Plays the hit animation for the character and plays the hurt sound.
     */
    characterIsHit() {
        this.playAnimation(this.IMAGES_HURT)
        this.world.worldSounds.playCharacterHurtSound()
    }


    /**
     * Plays the long AFK animation for the character and plays the sleeping sound.
     */ 
    characterIsAfk() {
        this.playAnimation(this.IMAGES_IDLE_LONG)
        this.world.worldSounds.playCharacterSleepingSound();
    }


    /**
     * Checks if the character has been idle for a short period.
     * @returns {boolean} True if the character has been idle for a short period, false otherwise.
     */
    shortAFK() {
        return this.world.keyboard.calculateElapsedTime() > this.shortIdleCD
    }

    
    /**
     * Checks if the character has been idle for a long period.
     * @returns {boolean} True if the character has been idle for a long period, false otherwise.
     */
    longAFK() {
        return this.world.keyboard.calculateElapsedTime() > this.longIdleCD
    }

    

}


