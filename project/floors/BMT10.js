main.floors.BMT10=
{
    "floorId": "BMT10",
    "title": "地下 10 层",
    "name": "地下-10",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground2",
    "bgm": "area3.mp3",
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "area4.mp3"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[操儡者,evilBat]\b[down,11,1]傀儡大阵在此！汝等休想前进一步！",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[芳芷,hero2]哇，好大的阵势。怎样，你有把握闯过去吧？",
        {
            "type": "animate",
            "name": "E_love",
            "loc": "hero"
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.setBgLight([\n\t[4, 0, 150],\n\t[8, 0, 150],\n\t[0, 4, 150],\n\t[4, 4, 150],\n\t[8, 4, 150],\n\t[12, 4, 150],\n\t[0, 8, 150],\n\t[4, 8, 150],\n\t[8, 8, 150],\n\t[12, 8, 150],\n\t[4, 12, 150],\n\t[8, 12, 150]\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "10,2": {
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
                    "condition": "flag:B4Fmission_finish == 1",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "下去之后就再也回不来了，确认要下去吗？",
                            "yes": [
                                {
                                    "type": "setValue",
                                    "name": "flag:__visited__",
                                    "value": "null"
                                },
                                {
                                    "type": "changeFloor",
                                    "floorId": "BMT11",
                                    "direction": "down",
                                    "time": 500
                                },
                                {
                                    "type": "disableShop",
                                    "id": "B3FShop"
                                },
                                {
                                    "type": "disableShop",
                                    "id": "B4FShop"
                                }
                            ],
                            "no": [
                                {
                                    "type": "moveHero",
                                    "steps": [
                                        "backward:1"
                                    ]
                                }
                            ]
                        }
                    ],
                    "false": [
                        {
                            "type": "confirm",
                            "text": "下去之后就再也回不来了，确认要下去吗？\n（B4F有绿钥匙支线）",
                            "yes": [
                                {
                                    "type": "setValue",
                                    "name": "flag:__visited__",
                                    "value": "null"
                                },
                                {
                                    "type": "changeFloor",
                                    "floorId": "BMT11",
                                    "direction": "down",
                                    "time": 500
                                },
                                {
                                    "type": "disableShop",
                                    "id": "B3FShop"
                                },
                                {
                                    "type": "disableShop",
                                    "id": "B4FShop"
                                }
                            ],
                            "no": [
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
        "11,11": [
            {
                "type": "setValue",
                "name": "flag:B10Fdoor",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "playSound",
                "name": "1045.mp3"
            },
            {
                "type": "if",
                "condition": "(flag:B10Fdoor == 2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            1
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            2
                        ]
                    },
                    {
                        "type": "waitAsync"
                    }
                ]
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "1,1": [
            {
                "type": "setValue",
                "name": "flag:B10Fdoor",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "playSound",
                "name": "1045.mp3"
            },
            {
                "type": "if",
                "condition": "(flag:B10Fdoor == 2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            1
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            2
                        ]
                    },
                    {
                        "type": "waitAsync"
                    }
                ]
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "11,1": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "flag:B10Frage",
                    "true": [
                        "\t[操儡者,evilBat]我草，你们竟然把这么多傀儡全干掉了……",
                        "\t[操儡者,evilBat]不过想必你们也是强弩之末了！我和你拼了！"
                    ],
                    "false": [
                        "\t[操儡者,evilBat]哈哈，是不是觉得把我干掉就可以破解大阵了？不过，你们还有多少体力呢？"
                    ]
                },
                {
                    "type": "battle",
                    "loc": [
                        11,
                        1
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "2,10": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "11,1": [
            {
                "type": "setBlock",
                "number": "N410"
            },
            "\t[操儡者,evilBat]谔谔啊啊啊啊我投降！我投降！",
            {
                "type": "if",
                "condition": "flag:B10Frage",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[系统提示]检测到本层所有傀儡已被消灭。\n获得成就\r[yellow]【莽夫一个】\r！\n然而并没有什么用处。",
                        "choices": [
                            {
                                "text": "？？？",
                                "action": []
                            }
                        ]
                    }
                ]
            },
            "\t[芳芷,hero2]看你能让这些傀儡变强这么多，结果本体就这点本事，不怎么厉害嘛。",
            "\t[操儡者,evilBat]嘤嘤嘤怎么你也要嘲讽我啊！我的心哇凉哇凉的啊！",
            {
                "type": "animate",
                "name": "E_sweat",
                "loc": "hero"
            },
            {
                "type": "sleep",
                "time": 1000
            },
            "\t[操儡者,evilBat]不过你说的倒确实没错，我专修傀儡操控之术，自身的战斗力在圣匙帮里并不算强。",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[操儡者,evilBat]我提醒一句，再往下走可就要遇到我圣匙帮的核心战力了。",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[芳芷,hero2]难道是把匙之力掌控到更深层次的高手？",
            "\t[操儡者,evilBat]没错，对匙之力掌控的越深，就能从钥匙散布的气场中获取越多的力量。而这，依然不是钥匙一道的极限。",
            "\t[操儡者,evilBat]真正可怕的是，有人极其精通钥匙之力，以至于能将自身神念融入钥匙之中，让钥匙为自己所驱使，进而开发出强大的战技。",
            {
                "type": "animate",
                "name": "E_unhappy",
                "loc": "hero"
            },
            "\t[hero]（完全听不懂他在说什么……）",
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "show",
                "loc": [
                    [
                        10,
                        2
                    ]
                ],
                "time": 500
            },
            "\t[操儡者,evilBat]总之我建议你们\r[yellow]不要带任何钥匙下去\r。向下的楼梯已经开启，我爬了。",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            },
            "\t[hero]（不要带任何钥匙下去……）",
            "\t[芳芷,hero2]这家伙，不会是在骗人吧……诶，他还留下了什么东西。",
            {
                "type": "if",
                "condition": "(flag:hard == 1)",
                "true": [
                    "机器之心增强了，额外提升10%基础攻防。修复\\i[skill0]效果提升350点。",
                    {
                        "type": "function",
                        "function": "function(){\ncore.plugin.addValpp('atk', 10);\ncore.plugin.addValpp('def', 10);\n}"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:skill0_val",
                        "operator": "+=",
                        "value": "350"
                    }
                ],
                "false": [
                    "机器之心增强了，额外提升30%基础攻防。",
                    {
                        "type": "function",
                        "function": "function(){\ncore.plugin.addValpp('atk', 30);\ncore.plugin.addValpp('def', 30);\n}"
                    }
                ]
            },
            "\t[hero]（准备好再下去吧。）"
        ],
        "3,1": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,1": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,1": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,1": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,3": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,3": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,3": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,3": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,3": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,3": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,5": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,5": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,5": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,7": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,7": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,9": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,9": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,9": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,9": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,9": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,9": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,11": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,11": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,11": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,11": [
            {
                "type": "setValue",
                "name": "flag:door_BMT10_10_1",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,1": {
            "0": {
                "condition": "flag:door_BMT10_10_1==32",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "setValue",
                        "name": "flag:B10Frage",
                        "value": "1"
                    },
                    {
                        "type": "openDoor"
                    }
                ]
            },
            "1": null
        },
        "11,2": {
            "0": {
                "condition": "flag:door_BMT10_10_1==32",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "setValue",
                        "name": "flag:B10Frage",
                        "value": "1"
                    },
                    {
                        "type": "openDoor"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "map": [
    [310,310,310,310,310,310,310,310,310,310,310,310,310],
    [310,168,  0,222,310,222, 21,222,310,222, 85,264,310],
    [310,  0, 32,  0,325,  0,216,  0,324,  0, 88, 85,310],
    [310,222,  0,222,310,222,  0,222,310,222,  0,222,310],
    [310,310,324,310,310,310, 34,310,310,310,325,310,310],
    [310,222,  0,222,310,222,  0,222,310,222,  0,222,310],
    [310, 21,216,  0, 34,  0,326,  0, 34,  0,216, 21,310],
    [310,222,  0,222,310,222,  0,222,310,222,  0,222,310],
    [310,310,325,310,310,310, 34,310,310,310,324,310,310],
    [310,222,  0,222,310,222,  0,222,310,222,  0,222,310],
    [310,  0, 87,  0,324,  0,216,  0,325,  0, 32,  0,310],
    [310,334,  0,222,310,222, 21,222,310,222,  0,168,310],
    [310,310,310,310,310,310,310,310,310,310,310,310,310]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,103,  0,  0,  0,103,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [103,  0,  0,  0,103,  0,  0,  0,103,  0,  0,  0,103],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [103,  0,  0,  0,103,  0,  0,  0,103,  0,  0,  0,103],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,103,  0,  0,  0,103,  0,  0,  0,  0]
],
    "color": [
        0,
        0,
        0,
        0.9
    ],
    "underGround": true,
    "hard1_enemy_ratio": 85,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}