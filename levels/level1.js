const level1 = new Level(
    [
        new Chicken(), 
        new Chicken(), 
        new Chicken(),
        new Endboss()
    ],
    [
        new Cloud('img/5_background/layers/4_clouds/1.png', 0, 0),
        new Cloud('img/5_background/layers/4_clouds/2.png', 720, -20),
        new Cloud('img/5_background/layers/4_clouds/1.png', 1440, 10),
        new Cloud('img/5_background/layers/4_clouds/2.png', 2110, 25)
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
        
    ]

)