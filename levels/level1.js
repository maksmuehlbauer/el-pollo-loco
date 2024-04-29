// let level1;

function createLevel1(){
    return new Level(
    [
        new Endboss(),
        //other Enemies
    ],
    [
        // new Cloud('img/5_background/layers/4_clouds/1.png', 0, 0),
    ],
    [
        new BackgroundObjects('img/5_background/layers/air.png', -719, 0),
        new BackgroundObjects('img/5_background/layers/3_third_layer/2.png', -719, 0),
        new BackgroundObjects('img/5_background/layers/2_second_layer/2.png', -719, 0),
        new BackgroundObjects('img/5_background/layers/1_first_layer/2.png', -719, 0),
        // other Backghrounds
    ],
    [
        // Bottles
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
    ]
);
}
