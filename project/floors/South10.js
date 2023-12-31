main.floors.South10=
{
    "floorId": "South10",
    "title": "停风林-10",
    "name": "停风林-10",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "grass",
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "village.mp3"
        },
        {
            "type": "loadBgm",
            "name": "dungeon1.mp3"
        },
        {
            "type": "loadBgm",
            "name": "area9.mp3"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,5": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "setVolume",
                    "value": 0,
                    "time": 2000
                },
                "\t[hero]这是个什么东西……",
                "\t[晴芸,hero3]诶，确实，它的画风不太对劲呀……",
                {
                    "type": "battle",
                    "loc": [
                        6,
                        5
                    ]
                },
                {
                    "type": "sleep",
                    "time": 1000
                },
                "\t[晴芸,hero3]太好啦，前面就是出口了！",
                "\t[hero]（械灵……都是这个样子的吗……）",
                {
                    "type": "setVolume",
                    "value": 90,
                    "time": 0
                }
            ]
        }
    },
    "changeFloor": {
        "6,0": {
            "floorId": "South9",
            "loc": [
                8,
                12
            ]
        },
        "6,12": {
            "floorId": "Village",
            "loc": [
                1,
                0
            ],
            "time": 800
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [149,149,149,149,149,149, 91,149,149,149,149,149,149],
    [149,  0, 32,  0, 27,486,  0,486, 28,  0, 32,  0,149],
    [149,471,149,149,149,149, 22,149,149,149,149,481,149],
    [149,  0,149, 31, 28,467,  0,467, 27, 31,149,  0,149],
    [149, 32,50004, 21,149,149, 83,149,149, 21,50004, 32,149],
    [149, 21, 30,149,149,  0,490,  0,149,149, 30, 21,149],
    [149,149,149,149,  0, 32, 23, 32,  0,149,149,149,149],
    [149,  0, 27,149, 31,  0, 30,  0, 31,149, 28,  0,149],
    [149,334,149,149,149,149,481,149,149,149,149,334,149],
    [149,471, 21,481, 81,  0,  0,  0, 81,471, 21,481,149],
    [149, 21,149, 28,149, 32,  0, 32,149, 27,149, 21,149],
    [149,149,149,149,149,149,  0,149,149,149,149,149,149],
    [149,149,149,149,149,149, 93,149,149,149,149,149,149]
],
    "bgm": "area8.mp3",
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,50001,  0,  0,  0,  0,  0,  0,  0,  0,  0,50001,  0],
    [  0,  0,  0,  0,  0,  0,50021,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,50001,  0,  0,  0,  0,  0,  0,  0,  0,  0,50002,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,50010,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,146,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,146,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": null,
    "downFloor": [
        6,
        0
    ],
    "upFloor": [
        6,
        0
    ],
    "hard1_enemy_ratio": 80,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}