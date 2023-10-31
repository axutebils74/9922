main.floors.Ch4_110=
{
    "floorId": "Ch4_110",
    "title": "摩极大厦76F",
    "name": "摩极大厦76F",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "area19_3.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 50,
    "defaultGround": "ground8",
    "bgm": "area19_3.mp3",
    "firstArrive": [
        {
            "type": "comment",
            "text": "辣鸡作者在这层发现了一个feature，如果带临时护盾炸死了光环怪，流程是“造成伤害-护盾叠满-衰减一步”。\n摆烂，不修了。"
        },
        {
            "type": "loadBgm",
            "name": "boss5.mp3"
        },
        {
            "type": "loadBgm",
            "name": "area20.mp3"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,10": [
            "\t[系统提示]需要清理前面所有敌人。正在检测中……",
            {
                "type": "function",
                "function": "function(){\ncore.plugin.checkEnemy(\"Ch4_81\", \"Ch4_110\");\n}"
            },
            {
                "type": "if",
                "condition": "(flag:remainEnemyCount>0)",
                "true": [
                    "共有${flag:remainEnemyCount}个敌人未清除。",
                    {
                        "type": "if",
                        "condition": "(flag:remainEnemyCount>641)",
                        "true": [
                            "当前剩余敌人较多，请自行检查。"
                        ],
                        "false": [
                            "剩余敌人：${flag:remainEnemyInfo}"
                        ]
                    }
                ],
                "false": [
                    "检测通过！",
                    {
                        "type": "hide"
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\ncore.removeFlag(\"remainEnemyInfo\");\ncore.removeFlag(\"remainEnemyCount\");\n}"
            }
        ],
        "6,11": [
            {
                "type": "choices",
                "text": "\t[系统提示]过去就回不来了。",
                "choices": [
                    {
                        "text": "冲！",
                        "color": [
                            255,
                            215,
                            0,
                            1
                        ],
                        "action": [
                            {
                                "type": "setCurtain",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    1
                                ],
                                "time": 500
                            },
                            "之后的楼层空空荡荡，没有遇到任何抵抗。\n大概是被2 2 2 1清理干净了吧。\n很快，9922和晴芸来到了顶层。",
                            {
                                "type": "setCurtain",
                                "time": 0
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "Ch4_111",
                                "loc": [
                                    641,
                                    10
                                ],
                                "direction": "up"
                            }
                        ]
                    },
                    {
                        "text": "还没准备好",
                        "action": [
                            {
                                "type": "moveHero",
                                "steps": [
                                    "backward:1"
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,5": [
            {
                "type": "openDoor",
                "loc": [
                    4,
                    6
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    6
                ]
            }
        ],
        "6,8": []
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,6": {
            "1": null
        },
        "6,8": {
            "0": null,
            "1": null
        },
        "6,7": {
            "0": null,
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [150883,150897,150897,150897,150897,150897,150897,150897,150897,150897,150897,150897,150884],
    [150890,567, 82,566,198,  0, 88,  0,198,566, 82,567,150888],
    [150890,568,198,  0,835,  0,334,  0,835,  0,198,568,150888],
    [150890, 82,198,198,198,566,  0,333,198,846,198, 82,150888],
    [150890,333,836,334,846,  0,  0,  0,198,334,836,333,150888],
    [150890, 82,198,198,198,198,848,198,198,198,198, 82,150888],
    [150890,566,198,841, 85,  0,567,  0, 85,840,198,566,150888],
    [150890,567,849,660,198,334,  0,334,198,662,849,567,150888],
    [150890, 83,198,198,198,198,848,198,198,198,198, 83,150888],
    [150890,660,840,333, 22,661,568,660, 21,333,841,661,150888],
    [150890,566,198,198,198,198,126,198,198,198,198,566,150888],
    [150890,567, 83, 81,852,198, 89,198,852, 81, 83,567,150888],
    [150891,150881,150881,150881,150881,150881,150881,150881,150881,150881,150881,150881,150892]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318]
],
    "fg2map": [

],
    "flyPoint": [
        6,
        1
    ],
    "hard1_enemy_ratio": 95
}