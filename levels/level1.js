function createLevel(){
    return new Level(
    [
        new Endboss()
        // other Enemies
    ],
    [
        // Clouds
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
        // Coins
    ]
);
}
