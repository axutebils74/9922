main.floors.West10=
{
    "floorId": "West10",
    "title": "截浪滩-10",
    "name": "截浪滩-10",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "sand",
    "bgm": "area9.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "steps": [
                "down"
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": [
                4,
                1
            ]
        },
        "\t[hero]这里怎么这么多械灵……",
        "\t[晴芸,hero3]想必是因为那些除灵者没有清理过这边吧。\n这里位置比较偏僻，差不多要到尽头了。",
        "\t[hero]嗯，清理掉这些家伙就去比赛的主要场地吧，我感觉自己现在已经具备足够的实力了。",
        {
            "type": "loadBgm",
            "name": "area10.mp3"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,1": [
            {
                "type": "if",
                "condition": "core.getBlockId(6, 6) == \"specialDoor\"",
                "true": [
                    "打开前方机关门还需要在花型图案上击败${5-flag:door_West10_6_6}只怪物。"
                ],
                "false": [
                    "你已经打开附近的机关门。"
                ]
            }
        ]
    },
    "changeFloor": {
        "4,0": {
            "floorId": "West7",
            "loc": [
                4,
                12
            ]
        },
        "12,9": {
            "floorId": "West11",
            "loc": [
                0,
                2
            ],
            "time": 800
        }
    },
    "afterBattle": {
        "4,5": [
            {
                "type": "setValue",
                "name": "flag:door_West10_6_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,6);\n}"
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:door_West10_6_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,6);\n}"
            }
        ],
        "6,9": [
            {
                "type": "if",
                "condition": "flag:last_battle_enemyId != \"Exl_D\"",
                "true": [
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    9
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
                "type": "openDoor",
                "loc": [
                    5,
                    9
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    8
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    5,
                    7
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    7
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    8
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    9,
                    9
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    10
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    11
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    5,
                    11
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    10
                ]
            },
            "\t[hero]这附近的械灵也清理得差不多了，感觉是时候离开这里了。",
            "\t[晴芸,hero3]等一下……前面还有路，我想去看看。",
            "\t[hero]……那边似乎没什么特别的东西，不过既然你这么说，还是去看一下吧。"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,6": {
            "0": {
                "condition": "flag:door_West10_6_6==5",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_West10_6_6",
                        "value": "null"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.hideBgFgMap(\"bg2\", [\n\t[4, 5],\n\t[8, 5]\n]);\n\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [  0, 17, 30,60023, 91,60023, 30,490, 34,60037,60000,60000,60000],
    [  0, 17,490,60023,  0,129,60023,525,60023,60037,  0,  0,  0],
    [  0, 17, 34,60019,524,  0,  0,  0, 81,60037,  0,  0,  0],
    [  0, 17,  0,525,  0, 30,60023,  0,524,60037,  0,  0,  0],
    [  0, 17,60009,  0, 81,  0,  0,60023,  0,60132,60133,60134,60135],
    [  0, 17, 17,60023,  0,525,  0,525,  0,60045,60046,60046,60046],
    [  0,  0, 17,  0,60023,60023, 85,60023,60023,60056,60057,60057,60057],
    [  0,  0, 17,60015, 30, 85,  0, 85, 30,60023, 33,  0, 33],
    [  0,  0, 17, 17, 85,  0,  0,  0, 85,60023,  0,334,  0],
    [  0,  0,  0, 17,  0, 85,526, 85,  0, 85, 22,  0, 94],
    [  0,  0,  0, 17, 85,  0, 85,  0, 85,60023,  0,334,  0],
    [  0,  0,  0, 17, 30, 85,  0, 85, 30,60023, 33,  0, 33],
    [  0,  0,  0, 17,60024,60025,60025,60025,60025,60025,60025,60025,60025]
],
    "bgmap": [
    [155,154,150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [155,154,150,  0,  0,  0,  0,  0,  0,  0,60000,60000,60000],
    [155,154,150,  0,  0,  0,60010,  0,  0,  0,60000,60000,60000],
    [155,154,150,  0,  0,  0,  0,  0,  0,  0,60000,60000,60000],
    [155,154,150,150,  0,  0,  0,  0,  0,60037,60000,60000,60000],
    [155,154,154,150,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [155,155,154,150,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [156,155,154,150,150,  0,  0,  0,  0,  0,  0,  0,  0],
    [156,155,154,154,150,  0,  0,  0,  0,  0,  0,60010,  0],
    [156,155,155,154,150,  0,  0,  0,  0,  0,  0,  0,  0],
    [156,156,155,154,150,  0,  0,  0,  0,  0,  0,60010,  0],
    [156,156,155,154,150,  0,  0,  0,  0,  0,  0,  0,  0],
    [156,156,155,154,150,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,60100,60101,60102,60103],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,60108,60109,60110,60111],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,60116,60117,60118,60119],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,60124,60125,60126,60127],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,60007,  0,  0,868,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,168,  0,  0,  0,168,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "downFloor": [
        4,
        0
    ],
    "upFloor": [
        12,
        9
    ],
    "hard1_enemy_ratio": 80,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true,
    "weather": [
        "sun",
        5
    ]
}