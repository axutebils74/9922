main.floors.Ch4_78=
{
    "floorId": "Ch4_78",
    "title": "拓岩镇-18",
    "name": "拓岩镇-18",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "T770",
    "bgm": "area18.mp3",
    "color": [
        0,
        0,
        0,
        0.4
    ],
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]好大的阵仗。各种小鬼大鬼、虎魔机器、援恐天使都一起上了。",
        "\t[虎魔仇杀者,E796]\b[down,6,4]别以为你们很厉害！我们虎魔帮的力量，根本不是你们能抗衡的！你们能活到现在，完全是因为洛渔神的仁慈！",
        "\t[晴芸,hero3]垂死挣扎而已，解决这批敌人之后，那位第零公民也该现身了吧。",
        {
            "type": "if",
            "condition": "flags.hard == 2",
            "true": [
                "\t[晴芸,hero3]对了，如果你觉得这些敌人不好对付，给我一些绿钥匙，我来处理他们。"
            ],
            "false": [
                "\t[晴芸,hero3]对了，如果你觉得这些敌人不好对付，我可以引动万能绿钥匙的力量，直接消灭他们！"
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    7,
                    11
                ]
            ]
        },
        {
            "type": "animate",
            "name": "yongchang",
            "loc": [
                7,
                11
            ]
        },
        {
            "type": "loadBgm",
            "name": "boss18.mp3"
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.setBgLight([\n\t[6, 5, 250]\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "7,11": {
            "trigger": null,
            "enable": false,
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
                    "condition": "flags.hard==2",
                    "true": [
                        {
                            "type": "choices",
                            "text": "\t[钥匙大炮,N755]投入5把绿钥匙，秒杀本图所有敌人，并摧毁前方的所有门！",
                            "_collapsed": true,
                            "choices": [
                                {
                                    "text": "炸！",
                                    "color": [
                                        192,
                                        0,
                                        0,
                                        1
                                    ],
                                    "action": [
                                        {
                                            "type": "setValue",
                                            "name": "item:greenKey",
                                            "operator": "-=",
                                            "value": "5"
                                        },
                                        {
                                            "type": "playSound",
                                            "name": "se_power0.wav"
                                        },
                                        {
                                            "type": "animate",
                                            "name": "yongchang",
                                            "loc": [
                                                7,
                                                11
                                            ],
                                            "async": true
                                        },
                                        {
                                            "type": "vibrate",
                                            "direction": "horizontal",
                                            "time": 1000,
                                            "speed": 10,
                                            "power": 10
                                        },
                                        {
                                            "type": "animate",
                                            "name": "thunder4",
                                            "loc": [
                                                6,
                                                4
                                            ]
                                        },
                                        {
                                            "type": "function",
                                            "function": "function(){\nvar cnt = 0;\nvar total_money = 0;\nfor (var i = 0; i < 13; ++i) {\n\tfor (var j = 0; j < 13; ++j) {\n\t\tif (core.plugin.isEnemy(i, j)) {\n\t\t\tvar id = core.getBlockId(i, j);\n\t\t\ttotal_money += core.material.enemys[id].money;\n\t\t\tcore.drawAnimate(\"fire4_mute\", i, j);\n\t\t\tcore.removeBlock(i, j);\n\t\t\tcnt++;\n\t\t\t// 至尊飞升\n\t\t\tcore.addFlag(\"talentT3_3_upX\", 1);\n\t\t\tcore.plugin._tryUpgrade3(3, true); // 也包含依赖至尊飞升的其他升级\n\t\t}\n\t}\n}\ncore.setFlag(\"temp\", cnt);\ncore.setFlag(\"temp_money\", total_money);\nif (cnt > 0) {\n\tcore.playSound(\"119-Fire03.ogg\");\n}\n}"
                                        },
                                        {
                                            "type": "if",
                                            "condition": "(flag:temp == 0)",
                                            "true": [
                                                "\t[钥匙大炮,N755]\b[down,null]未找到目标，操作失败。",
                                                {
                                                    "type": "setValue",
                                                    "name": "item:greenKey",
                                                    "operator": "+=",
                                                    "value": "5"
                                                },
                                                {
                                                    "type": "animate",
                                                    "name": "E_dots",
                                                    "loc": "hero"
                                                },
                                                "\t[晴芸,hero3]\b[down,null]怎么样，这里面的AI还是挺智能的吧？\n这个我收起来啦~",
                                                {
                                                    "type": "animate",
                                                    "name": "yongchang",
                                                    "loc": [
                                                        7,
                                                        11
                                                    ],
                                                    "async": true
                                                },
                                                {
                                                    "type": "hide",
                                                    "remove": true
                                                }
                                            ],
                                            "false": [
                                                {
                                                    "type": "function",
                                                    "function": "function(){\nvar cnt = 0;\nfor (var i = 0; i < 13; ++i) {\n\tfor (var j = 0; j < 9; ++j) {\n\t\tvar id = core.getBlockId(i, j);\n\t\tif (id == \"yellowDoor\" || id == \"blueDoor\" || id == \"redDoor\") {\n\t\t\tcore.drawAnimate(\"fire4_mute\", i, j);\n\t\t\tcore.removeBlock(i, j);\n\t\t}\n\t}\n}\n\ncore.hideBgFgMap(\"fg\", [1, 5]);\ncore.hideBgFgMap(\"fg\", [3, 5]);\ncore.hideBgFgMap(\"fg\", [9, 5]);\ncore.hideBgFgMap(\"fg\", [11, 5]);\ncore.drawMap();\n}"
                                                },
                                                {
                                                    "type": "openDoor",
                                                    "loc": [
                                                        1,
                                                        5
                                                    ]
                                                },
                                                {
                                                    "type": "openDoor",
                                                    "loc": [
                                                        3,
                                                        5
                                                    ]
                                                },
                                                {
                                                    "type": "openDoor",
                                                    "loc": [
                                                        9,
                                                        5
                                                    ]
                                                },
                                                {
                                                    "type": "openDoor",
                                                    "loc": [
                                                        11,
                                                        5
                                                    ]
                                                },
                                                {
                                                    "type": "sleep",
                                                    "time": 500
                                                },
                                                {
                                                    "type": "animate",
                                                    "name": "fire4",
                                                    "loc": [
                                                        7,
                                                        11
                                                    ],
                                                    "async": true
                                                },
                                                {
                                                    "type": "hide",
                                                    "remove": true
                                                },
                                                {
                                                    "type": "animate",
                                                    "name": "E_dots",
                                                    "loc": "hero"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:money",
                                                    "operator": "+=",
                                                    "value": "flag:temp_money"
                                                },
                                                "\t[系统提示]被消灭的\r[yellow]${flag:temp}\r个敌人总共爆出了\r[yellow]${flag:temp_money}\r金币。",
                                                "\t[hero]\b[up,hero]这也太暴力了……",
                                                "\t[晴芸,hero3]\b[up,hero]对虎魔帮的成员不需要心存怜悯。\n它们的死亡比活着的一辈子都更有价值。"
                                            ]
                                        },
                                        {
                                            "type": "function",
                                            "function": "function(){\ncore.removeFlag(\"temp\");\ncore.removeFlag(\"temp_money\");\n}"
                                        }
                                    ]
                                },
                                {
                                    "text": "不炸",
                                    "action": []
                                }
                            ]
                        }
                    ],
                    "false": [
                        {
                            "type": "choices",
                            "text": "\t[钥匙大炮,N755]引动\\i[I_superGreenKey]万能绿钥匙的力量，秒杀本图所有敌人，并摧毁前方的所有门！",
                            "choices": [
                                {
                                    "text": "炸！",
                                    "color": [
                                        192,
                                        0,
                                        0,
                                        1
                                    ],
                                    "action": [
                                        {
                                            "type": "playSound",
                                            "name": "se_power0.wav"
                                        },
                                        {
                                            "type": "animate",
                                            "name": "yongchang",
                                            "loc": [
                                                7,
                                                11
                                            ],
                                            "async": true
                                        },
                                        {
                                            "type": "vibrate",
                                            "direction": "horizontal",
                                            "time": 1000,
                                            "speed": 10,
                                            "power": 10
                                        },
                                        {
                                            "type": "animate",
                                            "name": "thunder4",
                                            "loc": [
                                                6,
                                                4
                                            ]
                                        },
                                        {
                                            "type": "function",
                                            "function": "function(){\nvar cnt = 0;\nvar total_money = 0;\nfor (var i = 0; i < 13; ++i) {\n\tfor (var j = 0; j < 13; ++j) {\n\t\tif (core.plugin.isEnemy(i, j)) {\n\t\t\tvar id = core.getBlockId(i, j);\n\t\t\ttotal_money += core.material.enemys[id].money;\n\t\t\tcore.drawAnimate(\"fire4_mute\", i, j);\n\t\t\tcore.removeBlock(i, j);\n\t\t\tcnt++;\n\t\t\t// 至尊飞升\n\t\t\tcore.addFlag(\"talentT3_3_upX\", 1);\n\t\t\tcore.plugin._tryUpgrade3(3, true); // 也包含依赖至尊飞升的其他升级\n\t\t}\n\t}\n}\ncore.setFlag(\"temp\", cnt);\ncore.setFlag(\"temp_money\", total_money);\nif (cnt > 0) {\n\tcore.playSound(\"119-Fire03.ogg\");\n}\n}"
                                        },
                                        {
                                            "type": "if",
                                            "condition": "(flag:temp == 0)",
                                            "true": [
                                                "\t[钥匙大炮,N755]\b[down,null]未找到目标，操作失败。",
                                                {
                                                    "type": "animate",
                                                    "name": "E_dots",
                                                    "loc": "hero"
                                                },
                                                "\t[晴芸,hero3]\b[down,null]怎么样，这里面的AI还是挺智能的吧？\n这个我收起来啦~",
                                                {
                                                    "type": "animate",
                                                    "name": "yongchang",
                                                    "loc": [
                                                        7,
                                                        11
                                                    ],
                                                    "async": true
                                                },
                                                {
                                                    "type": "hide",
                                                    "remove": true
                                                }
                                            ],
                                            "false": [
                                                {
                                                    "type": "function",
                                                    "function": "function(){\nvar cnt = 0;\nfor (var i = 0; i < 13; ++i) {\n\tfor (var j = 0; j < 9; ++j) {\n\t\tvar id = core.getBlockId(i, j);\n\t\tif (id == \"yellowDoor\" || id == \"blueDoor\" || id == \"redDoor\") {\n\t\t\tcore.drawAnimate(\"fire4_mute\", i, j);\n\t\t\tcore.removeBlock(i, j);\n\t\t}\n\t}\n}\n\ncore.hideBgFgMap(\"fg\", [1, 5]);\ncore.hideBgFgMap(\"fg\", [3, 5]);\ncore.hideBgFgMap(\"fg\", [9, 5]);\ncore.hideBgFgMap(\"fg\", [11, 5]);\ncore.drawMap();\n}"
                                                },
                                                {
                                                    "type": "openDoor",
                                                    "loc": [
                                                        1,
                                                        5
                                                    ]
                                                },
                                                {
                                                    "type": "openDoor",
                                                    "loc": [
                                                        3,
                                                        5
                                                    ]
                                                },
                                                {
                                                    "type": "openDoor",
                                                    "loc": [
                                                        9,
                                                        5
                                                    ]
                                                },
                                                {
                                                    "type": "openDoor",
                                                    "loc": [
                                                        11,
                                                        5
                                                    ]
                                                },
                                                {
                                                    "type": "sleep",
                                                    "time": 500
                                                },
                                                {
                                                    "type": "animate",
                                                    "name": "fire4",
                                                    "loc": [
                                                        7,
                                                        11
                                                    ],
                                                    "async": true
                                                },
                                                {
                                                    "type": "hide",
                                                    "remove": true
                                                },
                                                {
                                                    "type": "animate",
                                                    "name": "E_dots",
                                                    "loc": "hero"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:money",
                                                    "operator": "+=",
                                                    "value": "flag:temp_money"
                                                },
                                                "\t[系统提示]被消灭的\r[yellow]${flag:temp}\r个敌人总共爆出了\r[yellow]${flag:temp_money}\r金币。",
                                                "\t[hero]\b[up,hero]这也太暴力了……",
                                                "\t[晴芸,hero3]\b[up,hero]对虎魔帮的成员不需要心存怜悯。\n它们的死亡比活着的一辈子都更有价值。"
                                            ]
                                        },
                                        {
                                            "type": "function",
                                            "function": "function(){\ncore.removeFlag(\"temp\");\ncore.removeFlag(\"temp_money\");\n}"
                                        }
                                    ]
                                },
                                {
                                    "text": "我自己解决他们",
                                    "action": []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "6,0": {
            "floorId": "Ch4_79",
            "loc": [
                6,
                12
            ]
        },
        "6,12": {
            "floorId": "Ch4_77",
            "loc": [
                6,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "3,4": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_78_3_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(3, 5);\n}"
            }
        ],
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_78_3_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(3, 5);\n}"
            }
        ],
        "1,4": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_78_1_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(1, 5);\n}"
            }
        ],
        "1,6": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_78_1_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(1, 5);\n}"
            }
        ],
        "11,4": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_78_11_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(11, 5);\n}"
            }
        ],
        "11,6": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_78_11_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(11, 5);\n}"
            }
        ],
        "9,4": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_78_9_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(9, 5);\n}"
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_78_9_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(9, 5);\n}"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "3,5": {
            "0": {
                "condition": "flag:door_Ch4_78_3_5==2",
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
                        "name": "flag:door_Ch4_78_3_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "1,5": {
            "0": {
                "condition": "flag:door_Ch4_78_1_5==2",
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
                        "name": "flag:door_Ch4_78_1_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "9,5": {
            "0": {
                "condition": "flag:door_Ch4_78_9_5==2",
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
                        "name": "flag:door_Ch4_78_9_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "11,5": {
            "0": {
                "condition": "flag:door_Ch4_78_11_5==2",
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
                        "name": "flag:door_Ch4_78_11_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [150076,150077,150076,150077,150076,150077,  0,150076,150077,150076,150077,150076,150077],
    [150013,150013,  0,791,782,150013,798,150013,782,791,  0,150013,150013],
    [ 81,  0,794, 82,150013,150013, 83,150013,150013, 82,794,  0, 81],
    [ 81,150013,150013,  0,797,  0, 82,  0,797,  0,150013,150013, 81],
    [  0,782,150013,792,  0,150013,796,150013,  0,780,150013,793,  0],
    [  0, 85,783, 85,  0,794, 23,794,  0, 85,783, 85,  0],
    [  0,776,150013,793,  0,150013, 82,150013,  0,782,150013,792,  0],
    [ 81,150013,150013,  0,780,  0,783,  0,776,  0,150013,150013, 81],
    [  0,  0,794, 81,  0,783,  0,783,  0, 81,794,  0,  0],
    [150013,150013,150013,150013,150013,150013,796,150013,150013,150013,150013,150013,150013],
    [566,566,150013,334, 82,  0,  0,  0, 82,566,150013,334,566],
    [566, 82,334,566,150013,  0,  0,755,150013,566,566, 82,334],
    [150025,150025,150025,150025,150025,150026,  0,150024,150025,150025,150025,150025,150025]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,865,  0,865,  0,  0,  0,  0,  0,865,  0,865,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0, 91,  0,  0,  0,  0,  0,  0],
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
    [  0,  0,  0,  0,  0,  0, 93,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "downFloor": [
        6,
        12
    ],
    "upFloor": [
        6,
        0
    ],
    "hard1_enemy_ratio": 95
}