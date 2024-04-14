class Endboss extends MovableObject {
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
        this.x = 2200;
        this.energy = 60;
        this.animate()
               
    }


    animate() {
        setInterval(() => {
            if (this.x === 2200) {
                this.playAnimation(this.IMAGES_ALERT)
            }
            if (this.x < 2200) {
                this.playAnimation(this.IMAGES_WALK)
            }
            if (this.x < 2100) {
                this.playAnimation(this.IMAGES_ATTACK)
            }
            if (this.energy <= 0) {
                this.playAnimation(this.IMAGES_DEAD)
            }
            if (this.isHit()) {
                this.playAnimation(this.IMAGES_HURT)
            } 
        }, 250)
    }




    move() {
        setInterval( () => {
            this.moveLeft()
        }, 100)
    }




    // animateBossFight() {
    //     setInterval( () => {
    //         // this.moveLeft()
    //         this.playAnimation(this.IMAGES_WALKING)
    //     }, 1000 / 60)
    // }
    
}