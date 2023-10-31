main.floors.MT47=
{
    "floorId": "MT47",
    "title": "主塔 47 层",
    "name": "辉煌圣殿-47",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area6.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 10,
    "defaultGround": "ground",
    "bgm": "area6.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,6": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "if",
                    "condition": "(!switch:A)",
                    "true": [
                        {
                            "type": "setValue",
                            "name": "switch:A",
                            "value": "1"
                        },
                        "\t[机械屠夫-改,E430]发现目标，执行屠宰程序。",
                        {
                            "type": "battle",
                            "loc": [
                                6,
                                6
                            ]
                        },
                        {
                            "type": "openDoor",
                            "loc": [
                                6,
                                4
                            ]
                        },
                        {
                            "type": "openDoor",
                            "loc": [
                                6,
                                8
                            ]
                        },
                        {
                            "type": "openDoor",
                            "loc": [
                                6,
                                2
                            ]
                        },
                        {
                            "type": "openDoor",
                            "loc": [
                                6,
                                10
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 500
                        },
                        {
                            "type": "animate",
                            "name": "E_unhappy",
                            "loc": "hero"
                        },
                        "\t[hero]无法理解，附近那么多东西它都不砍，看到我来了就动手……",
                        "\t[芳芷,hero2]很显然，它们的敌意只针对你。\n不过这些机器人跟你不一样，它们是没有独立意识的。",
                        "\t[hero]所以说，有一个幕后黑手在操控它们吗……\n看来只有继续往上走，一探究竟了。"
                    ],
                    "false": [
                        {
                            "type": "battle",
                            "loc": [
                                6,
                                6
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "9,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,330,  0,252,143,331, 53,331,143, 88,  0,  0,143],
    [143,214,143,330,143,143, 85,143,143,143,143,366,143],
    [143,323,143, 22,  0,279,  0,322,213,323,143, 21,143],
    [143,143,143,143,143,143, 85,143,143,143,143,  0,143],
    [143,330,245,322,330,273,  0,273,323,330,245,330,143],
    [143,  0,143,143,143,143,430,143,143,143,143,  0,143],
    [143,330,213,330,323,273,  0,273,330,322,213,330,143],
    [143, 81,143,143,143,143, 85,143,143,143,143,143,143],
    [143,252,143,323,214, 81,322,  0,330,279,323,  0,143],
    [143, 68,143, 21,143,143, 85,143,143,143,143, 81,143],
    [143, 87,143, 53,143,331, 53,331,143, 23,322,214,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143]
],
    "bgmap": [

],
    "fgmap": [

],
    "hard1_enemy_ratio": 75,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}