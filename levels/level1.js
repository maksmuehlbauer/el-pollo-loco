let level1;


level1 = new Level(
    [
        new Endboss(),
        new Chicken(), 
        new Chicken(), 
        new Chicken()

        
    ],
    [
        new Cloud('img/5_background/layers/4_clouds/1.png', 0, 0),
        new Cloud('img/5_background/layers/4_clouds/2.png', 720, -20),
        new Cloud('img/5_background/layers/4_clouds/1.png', 1440, 10),
        new Cloud('img/5_background/layers/4_clouds/2.png', 2110, 25),
        new Cloud('img/5_background/layers/4_clouds/2.png', 2860, 25),
        new Cloud('img/5_background/layers/4_clouds/2.png', 3580, 25),
        new Cloud('img/5_background/layers/4_clouds/2.png', 4280, 25),
        new Cloud('img/5_background/layers/4_clouds/2.png', 5100, 25),
    ],
    [
        new BackgroundObjects('img/5_background/layers/air.png', -719, 0),
        new BackgroundObjects('img/5_background/layers/3_third_layer/2.png', -719, 0),
        new BackgroundObjects('img/5_background/layers/2_second_layer/2.png', -719, 0),
        new BackgroundObjects('img/5_background/layers/1_first_layer/2.png', -719, 0),

        new BackgroundObjects('img/5_background/layers/air.png', 0, 0),
        new BackgroundObjects('img/5_background/layers/3_third_layer/1.png', 0, 0),
        new BackgroundObjects('img/5_background/layers/2_second_layer/1.png', 0, 0),
        new BackgroundObjects('img/5_background/layers/1_first_layer/1.png', 0, 0),

        new BackgroundObjects('img/5_background/layers/air.png', 720, 0),
        new BackgroundObjects('img/5_background/layers/3_third_layer/2.png', 720, 0),
        new BackgroundObjects('img/5_background/layers/2_second_layer/2.png', 720, 0),
        new BackgroundObjects('img/5_background/layers/1_first_layer/2.png', 720, 0),

        new BackgroundObjects('img/5_background/layers/air.png', 720*2, 0),
        new BackgroundObjects('img/5_background/layers/3_third_layer/1.png', 720*2, 0),
        new BackgroundObjects('img/5_background/layers/2_second_layer/1.png', 720*2, 0),
        new BackgroundObjects('img/5_background/layers/1_first_layer/1.png', 720*2, 0),

        new BackgroundObjects('img/5_background/layers/air.png', 720*3, 0),
        new BackgroundObjects('img/5_background/layers/3_third_layer/2.png', 720*3, 0),
        new BackgroundObjects('img/5_background/layers/2_second_layer/2.png', 720*3, 0),
        new BackgroundObjects('img/5_background/layers/1_first_layer/2.png', 720*3, 0),

        new BackgroundObjects('img/5_background/layers/air.png', 720*4, 0),
        new BackgroundObjects('img/5_background/layers/3_third_layer/1.png', 720*4, 0),
        new BackgroundObjects('img/5_background/layers/2_second_layer/1.png', 720*4, 0),
        new BackgroundObjects('img/5_background/layers/1_first_layer/1.png', 720*4, 0),

        new BackgroundObjects('img/5_background/layers/air.png', 720*5, 0),
        new BackgroundObjects('img/5_background/layers/3_third_layer/2.png', 720*5, 0),
        new BackgroundObjects('img/5_background/layers/2_second_layer/2.png', 720*5, 0),
        new BackgroundObjects('img/5_background/layers/1_first_layer/2.png', 720*5, 0),

        new BackgroundObjects('img/5_background/layers/air.png', 720*6, 0),
        new BackgroundObjects('img/5_background/layers/3_third_layer/1.png', 720*6, 0),
        new BackgroundObjects('img/5_background/layers/2_second_layer/1.png', 720*6, 0),
        new BackgroundObjects('img/5_background/layers/1_first_layer/1.png', 720*6, 0),

        new BackgroundObjects('img/5_background/layers/air.png', 720*7, 0),
        new BackgroundObjects('img/5_background/layers/3_third_layer/2.png', 720*7, 0),
        new BackgroundObjects('img/5_background/layers/2_second_layer/2.png', 720*7, 0),
        new BackgroundObjects('img/5_background/layers/1_first_layer/2.png', 720*7, 0),
    ],
    [
        new BottleObject('img/6_salsa_bottle/salsa_bottle.png', 300, 375),
        new BottleObject('img/6_salsa_bottle/salsa_bottle.png', 600, 350),
        new BottleObject('img/6_salsa_bottle/salsa_bottle.png', 1100, 325),
        new BottleObject('img/6_salsa_bottle/salsa_bottle.png', 1700, 100),
        new BottleObject('img/6_salsa_bottle/salsa_bottle.png', 2600, 50),
        new BottleObject('img/6_salsa_bottle/salsa_bottle.png', 3100, 250),
        new BottleObject('img/6_salsa_bottle/salsa_bottle.png', 3750, 325),
        new BottleObject('img/6_salsa_bottle/salsa_bottle.png', 4300, 100),
        new BottleObject('img/6_salsa_bottle/salsa_bottle.png', 4700, 50)

    ],
    [
        new CoinObject('img/8_coin/coin_1.png', 300, 100),
        new CoinObject('img/8_coin/coin_1.png', 300, 50),
        new CoinObject('img/8_coin/coin_1.png', 250, 100),
        new CoinObject('img/8_coin/coin_1.png', 250, 50),

        new CoinObject('img/8_coin/coin_1.png', 650, 200),
        new CoinObject('img/8_coin/coin_1.png', 650, 150),
        new CoinObject('img/8_coin/coin_1.png', 600, 200),
        new CoinObject('img/8_coin/coin_1.png', 600, 150),

        new CoinObject('img/8_coin/coin_1.png', 1000, 300),
        new CoinObject('img/8_coin/coin_1.png', 1050, 300),

        new CoinObject('img/8_coin/coin_1.png', 1000, 300),
        new CoinObject('img/8_coin/coin_1.png', 1050, 300),

        new CoinObject('img/8_coin/coin_1.png', 1400, 50),
        new CoinObject('img/8_coin/coin_1.png', 1450, 375),

        new CoinObject('img/8_coin/coin_1.png', 2000, 50),
        new CoinObject('img/8_coin/coin_1.png', 2200, 100),

        new CoinObject('img/8_coin/coin_1.png', 2500, 50),
        new CoinObject('img/8_coin/coin_1.png', 2550, 50),
        new CoinObject('img/8_coin/coin_1.png', 2500, 375),
        new CoinObject('img/8_coin/coin_1.png', 2550, 375),

        new CoinObject('img/8_coin/coin_1.png', 3000, 50),
        new CoinObject('img/8_coin/coin_1.png', 3100, 75),
        new CoinObject('img/8_coin/coin_1.png', 3050, 250),
        new CoinObject('img/8_coin/coin_1.png', 2950, 375),

        new CoinObject('img/8_coin/coin_1.png', 3600, 50),
        new CoinObject('img/8_coin/coin_1.png', 3625, 75),
        new CoinObject('img/8_coin/coin_1.png', 3700, 375),
        new CoinObject('img/8_coin/coin_1.png', 3750, 375),

        new CoinObject('img/8_coin/coin_1.png', 4100, 60),
        new CoinObject('img/8_coin/coin_1.png', 4100, 80),
        new CoinObject('img/8_coin/coin_1.png', 4175, 250),
        new CoinObject('img/8_coin/coin_1.png', 4200, 375),

        new CoinObject('img/8_coin/coin_1.png', 4600, 250),
        new CoinObject('img/8_coin/coin_1.png', 4700, 200),

        new CoinObject('img/8_coin/coin_1.png', 5100, 50),
        new CoinObject('img/8_coin/coin_1.png', 5150, 50),
        new CoinObject('img/8_coin/coin_1.png', 5100, 150),
        new CoinObject('img/8_coin/coin_1.png', 5150, 150)  
        // 38 Coins
    ]

);

