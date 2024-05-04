class Endboss extends MovableObject {
    worldSounds = new WorldSounds()
    y = 125;
    width = 225;
    height = 350;
      
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
        this.energy = 10;
        this.speed = 10
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.startBossFight()) {
                this.playAnimation(this.IMAGES_WALK);
                this.moveLeft();
                this.worldSounds.playEndbossStartSound()
            } else if (this.x === 5100) {
                this.playAnimation(this.IMAGES_ALERT);
            } else if (this.distanceCharToBoss() < 100) {
                this.playAnimation(this.IMAGES_ATTACK);
                this.moveLeft();
                this.speed = 1
            } else if (this.distanceCharToBoss() < 400) {
                this.playAnimation(this.IMAGES_ATTACK);
                this.moveLeft();
                this.speed = 30
                this.worldSounds.playEndbossStartSound()
            }  else {
                this.playAnimation(this.IMAGES_WALK);
                this.moveLeft();
                this.speed = 10
            }          
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD)
                this.worldSounds.playEndbossDieSound();
                this.speed = 0
            }
            if (this.isHit()) {
                this.playAnimation(this.IMAGES_HURT)
                this.worldSounds.pauseBackgroundSound();
                this.worldSounds.playEndbossHitSound() 
            } 
        }, 125)
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