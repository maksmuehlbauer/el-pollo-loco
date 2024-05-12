class Endboss extends MovableObject {
    worldSounds = new WorldSounds()
    y = 125;
    width = 225;
    height = 350;
    closeRangeToBoss = 100;
    farRangeToBoss = 400;
    offset = {
        left: 10,
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
    }


    animate() {
        setInterval(() => {
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
            if (this.isDead()) {
                this.bossIsDeadSequence();
            }
            if (this.isHit()) {
                this.bossGetDamageSequence();
            } 
        }, 125)


    }


    bossStartSequence() {
        this.playAnimation(this.IMAGES_WALK);
        this.moveLeft();
        this.worldSounds.playEndbossStartSound()
    }


    closeToBossAttackSequence() {
        this.playAnimation(this.IMAGES_ATTACK);
        this.moveLeft();
        this.speed = 1
        this.soundplayed = true;
    }


    farFromBossAttackSequence() {
        this.playAnimation(this.IMAGES_ATTACK);
        this.moveLeft();
        this.speed = 30
        this.worldSounds.playEndbossStartSound()
        this.soundplayed = true;
    }


    defaultlWalkLeftSequence() {
        this.playAnimation(this.IMAGES_WALK);
        this.moveLeft();
        this.speed = 10
    }


    bossIsDeadSequence() {
        this.playAnimation(this.IMAGES_DEAD)
        this.worldSounds.playEndbossDieSound();
        this.speed = 0
    }


    bossGetDamageSequence() {
        this.playAnimation(this.IMAGES_HURT)
        if (this.soundplayed) {
            this.worldSounds.playEndbossHitSound()
            this.soundplayed = false;
        }
    }


    startingPosition() {
        return this.x === 5100
    }


    startBossFight() {
        return world.character.x >= 4550
    }


    distanceCharToBoss() {
        let distance = Math.abs(world.character.x - this.x)
        return distance
    }


    move() {
        setInterval( () => {
            this.moveLeft()
        }, 100)
    }
}