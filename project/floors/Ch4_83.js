main.floors.Ch4_83=
{
    "floorId": "Ch4_83",
    "title": "华炳街-3",
    "name": "华炳街-3",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "T817",
    "bgm": "area19.mp3",
    "color": [
        0,
        0,
        0,
        0.2
    ],
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "area19_2.mp3"
        },
        {
            "type": "moveHero",
            "steps": [
                "right:1"
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]\b[down,hero]……似乎有难缠的敌人堵在了必经之路上。",
        "\t[晴芸,hero3]\b[down,hero]确实很棘手。不过我知道有另外一条路可以绕开它。",
        "\t[晴芸,hero3]\b[down,11,1]这附近就有个通往\r[yellow]望梅界\r的传送门。\n我们可以利用里面的传送快速到达其他区域。",
        "\t[hero]\b[down,hero]嗯，现在我要应付这些敌人还是挺吃力的，能绕则绕吧。",
        "\t[晴芸,hero3]\b[down,11,1]下城区的敌人就已经这么厉害了，上城区的敌人只会更加棘手。\n看来不能急于突进了，也许先找到2221带领的主力部队比较好？2221那么厉害，说不定我们跟着划划水就行了呢~"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,1": {
            "floorId": "Ch4_93",
            "loc": [
                6,
                12
            ],
            "time": 500
        },
        "12,9": {
            "floorId": "Ch4_84",
            "loc": [
                0,
                9
            ]
        },
        "0,1": {
            "floorId": "Ch4_82",
            "loc": [
                12,
                6
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [197,197,197,197,197,197,197,197,197,197,197,197,197],
    [  0,  0,  0,334,  0, 84,660,661,662,197,660, 89,197],
    [197,197,810,160851, 82,197,197,808,664,197,333,334,197],
    [197,  0,333,  0,660,197,812, 21,161229,197, 21,  0,197],
    [197,811,197,807,197,197, 82,197,197,197,807,161228,197],
    [197, 21,197, 21,  0,197,  0, 21,  0, 83,332,661,197],
    [197,811,160880,  0,566,814,334,160619, 81,161229,813,161217,197],
    [197, 21,160888,334,  0,160618,  0,809,  0,661,  0,333,197],
    [197,197,197,197, 81, 82, 81,197,197,197,197,197,197],
    [197,881, 82, 21,  0,161229,  0,197,  0,810,566,  0,  0],
    [197, 82,197,  0,820, 22,820,197,334,197,820,197,197],
    [197,881,197,333,  0,197,  0,661,  0,197,  0,334,197],
    [197,197,197,197,197,197,197,197,197,197,197,197,197]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,140667,  0,140659,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,161221,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,161220,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,161221,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,161221,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 92,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 94],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "upFloor": [
        12,
        9
    ],
    "downFloor": [
        0,
        1
    ],
    "hard1_enemy_ratio": 95
}