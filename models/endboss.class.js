/**
 * Represents the end boss character in the game.
 * @extends MovableObject
 */
class Endboss extends MovableObject {
    y = 125;
    width = 225;
    height = 350;
    closeRangeToBoss = 100;
    farRangeToBoss = 400;
    offset = {
        left: 20,
        right: 5,
        bottom: 15,
        top: 60,
      }

    soundplayed = true
    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ]
    IMAGES_WALK = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ]
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];
    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G21.png'
    ]


    /**
     * Creates an instance of the Endboss class.
     */
    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png')
        this.loadImages(this.IMAGES_ALERT)
        this.loadImages(this.IMAGES_ATTACK)
        this.loadImages(this.IMAGES_WALK)
        this.loadImages(this.IMAGES_DEAD)
        this.loadImages(this.IMAGES_HURT)
        this.x = 5100;
        this.energy = 100;
        this.speed = 10
        this.animate();
        this.worldSounds = new WorldSounds();
    }


    muteAllEndbossSounds() {
        this.worldSounds.muteEndbossSounds()
    }


    /**
     * Animates the boss's behavior.
     */
    animate() {
        setInterval(() => {
            this.endbossAnimationLogic()
            this.endbossIsDead();
            this.endbossIsHit();
        }, 125)
    }


    /**
     * Manages the animation logic for the end boss encounter.
     * Determines which animation sequence to play based on various conditions.
     */
    endbossAnimationLogic() {
        if (this.startBossFight()) {
            this.bossStartSequence();
        } else if (this.startingPosition()) {
            this.playAnimation(this.IMAGES_ALERT);
        } else if (this.distanceCharToBoss() < this.closeRangeToBoss) {
            this.closeToBossAttackSequence()
        } else if (this.distanceCharToBoss() < this.farRangeToBoss) {
            this.farFromBossAttackSequence();
        }  else {
            this.defaultlWalkLeftSequence();
        } 
    }

    /**
     * Checks if the end boss is dead and triggers the dead sequence if true.
     */
    endbossIsDead() {
        if (this.isDead()) {
            this.bossIsDeadSequence();
        }
    }


    /**
     * Checks if the end boss is hit and triggers the damage sequence if true.
     */
    endbossIsHit() {
        if (this.isHit()) {
            this.bossGetDamageSequence();
        } 
    }


    /**
     * Initiates the sequence when the boss starts moving.
     */
    bossStartSequence() {
        this.playAnimation(this.IMAGES_WALK);
        this.moveLeft();
        this.worldSounds.playEndbossStartSound()
    }

    /**
     * Initiates the sequence when the character is close to the boss for an attack.
     */
    closeToBossAttackSequence() {
        this.playAnimation(this.IMAGES_ATTACK);
        this.moveLeft();
        this.speed = 1
        this.soundplayed = true;
    }


    /**
     * Initiates the sequence when the boss starts moving.
     */
    bossStartSequence() {
        this.playAnimation(this.IMAGES_WALK);
        this.moveLeft();
        this.worldSounds.playEndbossStartSound();
    }


    /**
     * Initiates the sequence when the character is close to the boss for an attack.
     */
    closeToBossAttackSequence() {
        this.playAnimation(this.IMAGES_ATTACK);
        this.moveLeft();
        this.speed = 1;
        this.soundplayed = true;
    }


    /**
     * Initiates the sequence when the character is far from the boss for an attack.
     */
    farFromBossAttackSequence() {
        this.playAnimation(this.IMAGES_ATTACK);
        this.moveLeft();
        this.speed = 30
        this.worldSounds.playEndbossStartSound()
        this.soundplayed = true;
    }


    /**
     * Initiates the default walking sequence to the left.
     */
    defaultlWalkLeftSequence() {
        this.playAnimation(this.IMAGES_WALK);
        this.moveLeft();
        this.speed = 10
    }


    /**
     * Initiates the sequence when the boss dies.
     */
    bossIsDeadSequence() {
        this.playAnimation(this.IMAGES_DEAD)
        this.worldSounds.playEndbossDieSound();
        this.speed = 0
    }


    /**
     * Initiates the sequence when the boss gets damaged.
     */
    bossGetDamageSequence() {
        this.playAnimation(this.IMAGES_HURT)
        if (this.soundplayed) {
            this.worldSounds.playEndbossHitSound()
            this.soundplayed = false;
        }
    }


    /**
     * Checks if the boss is at its starting position.
     * @returns {boolean} True if the boss is at its starting position, otherwise false.
     */
    startingPosition() {
        return this.x === 5100
    }


    /**
     * Checks if the boss fight has started.
     * @returns {boolean} True if the boss fight has started, otherwise false.
     */
    startBossFight() {
        return world.character.x >= 4550
    }


    /**
     * Calculates the distance between the character and the boss.
     * @returns {number} The distance between the character and the boss.
     */
    distanceCharToBoss() {
        let distance = Math.abs(world.character.x - this.x)
        return distance
    }
    

    /**
     * Moves the boss.
     */
    move() {
        setInterval( () => {
            this.moveLeft()
        }, 100)
    }
}