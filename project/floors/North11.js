main.floors.North11=
{
    "floorId": "North11",
    "title": "裕麓山-山顶",
    "name": "裕麓山-山顶",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "m_eura_ag2-1.png",
            "canvas": "fg",
            "x": 160,
            "y": 64,
            "frame": 4
        }
    ],
    "ratio": 50,
    "defaultGround": "grass",
    "bgm": "area11.mp3",
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "tenshi.mp3"
        },
        {
            "type": "loadBgm",
            "name": "area12.mp3"
        }
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "flag:watch_East16 == 1",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:watch_East16",
                    "value": "2"
                },
                "\t[hero]……现在怎么办？",
                {
                    "type": "turnBlock",
                    "direction": "up",
                    "loc": [
                        [
                            9,
                            12
                        ]
                    ]
                },
                {
                    "type": "sleep",
                    "time": 1000
                },
                {
                    "type": "animate",
                    "name": "E_dots",
                    "loc": [
                        9,
                        12
                    ]
                },
                {
                    "type": "sleep",
                    "time": 1000
                },
                "\t[芳芷,hero2]把注意力放在无法改变的事情上没有意义。\n做我们力所能及的事情吧。先调查清楚古亦这里发生了什么事。",
                {
                    "type": "playSound",
                    "name": "jump.mp3"
                },
                {
                    "type": "jump",
                    "from": [
                        9,
                        12
                    ],
                    "to": [
                        10,
                        9
                    ],
                    "time": 300
                },
                {
                    "type": "follow",
                    "name": "hero2.png"
                },
                "\t[hero]（刚刚赢得一场艰难的战斗，却完全没有轻松感……\n不过，不论前方的道路再怎么艰难，也唯有走下去！）",
                {
                    "type": "playBgm",
                    "name": "area11.mp3"
                }
            ]
        }
    ],
    "parallelDo": "// 此并行脚本的作用是让主角和boss贴图的遮挡关系能正常显示\n// RM 里面主角和敌人在同一图层，遮挡关系由绘制顺序决定\n// 但目前的样板不支持把贴图画在 hero 层\n// 由于主角是32*48素材，从下到上依次是 主角下半身 boss下半身 主角上半身 boss上半身\n// 主角的上半身插入到贴图中间，使得绘制变得比较麻烦\n// 这里采用另一种方案，即，boss 绘制在 fg 层，仅当主角位于 boss 下方一格的时候，暂时让 hero 层遮挡 fg 层\n// 缺陷是，如果主角背后有跟随人物，跟随者的遮挡关系会不正确\n// 另外，这个脚本的通用性也很差，属于权宜之计\n// Update: 新样板已经支持大素材，就别用这个了\n// 这个我也懒得改了，咕了\nif (!core.isReplaying()) {\n\tif (core.status.hero.loc.y == 6) {\n\t\tcore.getContextByName(\"hero\").canvas.style.zIndex = 61;\n\t} else {\n\t\tcore.getContextByName(\"hero\").canvas.style.zIndex = 40;\n\t}\n}",
    "events": {
        "6,10": {
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
                "\t[系统提示]需要清理前面所有敌人。正在检测中……",
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.checkEnemy(\"South1\", \"North10\");\n}"
                },
                {
                    "type": "if",
                    "condition": "(flag:remainEnemyCount>0)",
                    "true": [
                        "共有${flag:remainEnemyCount}个敌人未清除。",
                        {
                            "type": "if",
                            "condition": "(flag:remainEnemyCount>36)",
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
            ]
        },
        "9,12": {
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
                    "type": "while",
                    "condition": "true",
                    "data": [
                        {
                            "type": "choices",
                            "text": "\t[芳芷,hero2]麻烦你了！这次很可能出大事了！\n在能打过那个大家伙的前提下，尽可能保存能量吧。",
                            "choices": [
                                {
                                    "text": "将50能量转换为100万生命",
                                    "color": [
                                        214,
                                        55,
                                        255,
                                        1
                                    ],
                                    "need": "status:mana>=50",
                                    "action": [
                                        {
                                            "type": "if",
                                            "condition": "(core.status.hero.mana < 400)",
                                            "true": [
                                                "\t[芳芷,hero2]你应该留一些能量来对付那个大家伙，不给换，哼。",
                                                {
                                                    "type": "animate",
                                                    "name": "E_sweat",
                                                    "loc": "hero",
                                                    "async": true
                                                },
                                                {
                                                    "type": "exit"
                                                }
                                            ],
                                            "false": [
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "operator": "+=",
                                                    "value": "1000000"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:mana",
                                                    "operator": "-=",
                                                    "value": "50"
                                                },
                                                {
                                                    "type": "animate",
                                                    "name": "heal2",
                                                    "loc": "hero",
                                                    "async": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "text": "1绿钥匙换1000万生命",
                                    "color": [
                                        0,
                                        255,
                                        89,
                                        1
                                    ],
                                    "need": "item:greenKey>0&&!switch:A",
                                    "condition": "!switch:A",
                                    "action": [
                                        "\t[芳芷,hero2]只能换1次哦，加油~",
                                        {
                                            "type": "setValue",
                                            "name": "switch:A",
                                            "value": "1"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "status:hp",
                                            "operator": "+=",
                                            "value": "10000000"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "item:greenKey",
                                            "operator": "-=",
                                            "value": "1"
                                        },
                                        {
                                            "type": "animate",
                                            "name": "heal2",
                                            "loc": "hero",
                                            "async": true
                                        }
                                    ]
                                },
                                {
                                    "text": "1绿钥匙视为使用10次【轻风】",
                                    "color": [
                                        255,
                                        255,
                                        255,
                                        1
                                    ],
                                    "need": "core.getFlag(\"talent3_up8_spe\") < 35",
                                    "condition": "flags.hard == 1 && core.getTalentLv(3)==8",
                                    "action": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:talent3_up8_spe",
                                            "operator": "+=",
                                            "value": "10"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "item:greenKey",
                                            "operator": "-=",
                                            "value": "1"
                                        },
                                        {
                                            "type": "animate",
                                            "name": "yongchang",
                                            "loc": "hero",
                                            "async": true
                                        }
                                    ]
                                },
                                {
                                    "text": "1绿钥匙视为使用10次【轻风】",
                                    "color": [
                                        255,
                                        255,
                                        255,
                                        1
                                    ],
                                    "need": "core.getFlag(\"talent3_up8_spe\") < 50",
                                    "condition": "flags.hard == 2 && core.getTalentLv(3)==8",
                                    "action": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:talent3_up8_spe",
                                            "operator": "+=",
                                            "value": "10"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "item:greenKey",
                                            "operator": "-=",
                                            "value": "1"
                                        },
                                        {
                                            "type": "animate",
                                            "name": "yongchang",
                                            "loc": "hero",
                                            "async": true
                                        }
                                    ]
                                },
                                {
                                    "text": "取消",
                                    "action": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "4,2": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "8,2": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "4,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "8,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,1": [
            {
                "type": "confirm",
                "text": "进去就无法返回了。",
                "yes": [
                    {
                        "type": "setValue",
                        "name": "flag:lightRadius",
                        "value": "100"
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "Cave1",
                        "loc": [
                            6,
                            12
                        ],
                        "time": 1000
                    }
                ],
                "no": [
                    {
                        "type": "moveHero",
                        "steps": [
                            "backward"
                        ]
                    }
                ]
            }
        ],
        "6,9": [
            {
                "type": "confirm",
                "text": "准备好了吗？",
                "yes": [
                    {
                        "type": "moveHero",
                        "steps": [
                            "up"
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    {
                        "type": "changePos",
                        "direction": "down"
                    },
                    "\t[hero]你还要跟着？",
                    "\t[晴芸,hero3]我没问题的！一路走来我也差不多习惯战斗了……至少自保不会有问题。",
                    "\t[晴芸,hero3]直觉告诉我，之后还会有很多更艰苦的战斗。我不能一直当一个花瓶！我会……\n找到能够更直接地帮助你的方式。",
                    "\t[hero]可是战斗本来不应该是你来……",
                    "\t[晴芸,hero3]你呀，别的都好，就是太傻了。\n我决定跟着你的时候，说好了碰到危险你就丢下我自己跑，结果每次你都是丢下我之后迎难而上。",
                    "\t[hero]……也许，是一种本能吧。\n这次你跟着我还是太危险了，你可以先……在比较近的距离观战，一点一点地适应战斗的节奏。",
                    "\t[晴芸,hero3]好叭~",
                    {
                        "type": "unfollow",
                        "name": "hero3.png"
                    },
                    {
                        "type": "setBlock",
                        "number": "hero3_up",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ]
                    },
                    {
                        "type": "move",
                        "loc": [
                            6,
                            9
                        ],
                        "time": 150,
                        "keep": true,
                        "steps": [
                            "right",
                            "right",
                            "right",
                            "right"
                        ]
                    },
                    {
                        "type": "turnBlock",
                        "direction": "left",
                        "loc": [
                            [
                                10,
                                9
                            ]
                        ]
                    },
                    {
                        "type": "moveHero",
                        "steps": [
                            "up"
                        ]
                    },
                    {
                        "type": "setVolume",
                        "value": 0,
                        "time": 2000
                    },
                    {
                        "type": "pauseBgm"
                    },
                    {
                        "type": "setVolume",
                        "value": 90,
                        "time": 0
                    },
                    "\t[打工人-996,E559]目标距离过近，准备执行清除程序。",
                    {
                        "type": "playBgm",
                        "name": "boss10.mp3",
                        "keep": true
                    },
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            6,
                            11
                        ]
                    },
                    {
                        "type": "hide",
                        "remove": true
                    }
                ],
                "no": [
                    {
                        "type": "moveHero",
                        "steps": [
                            "down"
                        ]
                    }
                ]
            }
        ],
        "10,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[晴芸,hero3]姐姐加油呀！"
            ]
        }
    },
    "changeFloor": {
        "6,12": {
            "floorId": "North10",
            "loc": [
                6,
                0
            ]
        }
    },
    "afterBattle": {
        "6,5": [
            {
                "type": "if",
                "condition": "flag:last_battle_enemyId != \"A11boss_p1\"",
                "true": [
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "setBlock",
                "number": "A11boss_p2",
                "loc": [
                    [
                        6,
                        5
                    ]
                ]
            },
            {
                "type": "move",
                "time": 500,
                "keep": true,
                "steps": [
                    "up"
                ]
            },
            "\t[打工人-996,E559]敌人实力强大。呼叫增援，启动远程火力打击。",
            {
                "type": "setValue",
                "name": "flag:zone_animate",
                "value": "\"fire2\""
            },
            {
                "type": "show",
                "loc": [
                    [
                        4,
                        2
                    ],
                    [
                        8,
                        2
                    ],
                    [
                        4,
                        6
                    ],
                    [
                        8,
                        6
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    4,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    8,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    4,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    8,
                    6
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "(flag:last_battle_enemyId != \"A11boss_p2\")",
                "true": [
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        6
                    ]
                ],
                "floorId": "East15",
                "remove": true
            },
            {
                "type": "confirm",
                "text": "接下来是一段剧情，是否跳过？",
                "yes": [
                    {
                        "type": "if",
                        "condition": "(core.status.hero.money < 7500) || (!core.hasEquip(\"sword5\") && !core.hasEquip(\"sword6\") && !core.hasEquip(\"sword7\"))",
                        "true": [
                            "\t[系统提示]由于9922不满足某些条件，它在剧情里暴毙了。",
                            {
                                "type": "animate",
                                "name": "fire2",
                                "loc": "hero",
                                "async": true
                            },
                            {
                                "type": "animate",
                                "name": "explosion",
                                "loc": "hero"
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "lose",
                                "reason": ""
                            }
                        ]
                    },
                    {
                        "type": "hideFloorImg",
                        "loc": [
                            [
                                160,
                                64
                            ]
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            1,
                            4
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
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            11
                        ]
                    },
                    {
                        "type": "function",
                        "function": "function(){\nif (core.getTalentLv(10) > 0) {\n\tcore.plugin._tryUpgrade(10);\n} else if (core.getTalentLv(11) > 0) {\n\tcore.plugin._tryUpgrade(11);\n} else if (core.getTalentLv(12) > 0) {\n\tcore.plugin._tryUpgrade(12);\n} else {\n\tcore.insertAction(\"然而徽章并没有动静。你暴毙了。\");\n\tcore.lose();\n}\ncore.hideBgFgMap(\"bg2\", [\n\t[8, 2],\n\t[4, 2],\n\t[4, 6],\n\t[8, 6],\n\t[6, 4]\n]);\ncore.setBgFgBlock(\"bg\", \"autotile10\", 6, 9);\ncore.setBgFgBlock(\"bg\", \"autotile10\", 5, 9);\ncore.setBgFgBlock(\"bg\", \"autotile10\", 7, 9);\ncore.setBgFgBlock(\"bg\", \"autotile10\", 6, 8);\ncore.setBgFgBlock(\"bg\", \"autotile10\", 5, 8);\ncore.setBgFgBlock(\"bg\", \"autotile10\", 7, 8);\nfor (var i = 5; i <= 7; ++i) {\n\tfor (var j = 3; j <= 5; ++j) {\n\t\tcore.setBgFgBlock(\"bg\", \"autotile10\", i, j);\n\t}\n}\n}"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:watch_East16",
                        "value": "2"
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                4,
                                1
                            ],
                            [
                                8,
                                1
                            ],
                            [
                                3,
                                3
                            ],
                            [
                                9,
                                3
                            ],
                            [
                                2,
                                6
                            ],
                            [
                                6,
                                6
                            ],
                            [
                                10,
                                6
                            ],
                            [
                                3,
                                9
                            ],
                            [
                                9,
                                9
                            ],
                            [
                                4,
                                11
                            ],
                            [
                                8,
                                11
                            ],
                            [
                                6,
                                10
                            ]
                        ],
                        "floorId": "East16",
                        "remove": true
                    },
                    {
                        "type": "jump",
                        "from": [
                            10,
                            9
                        ],
                        "to": [
                            10,
                            9
                        ],
                        "time": 300
                    },
                    {
                        "type": "jump",
                        "from": [
                            9,
                            12
                        ],
                        "to": [
                            9,
                            12
                        ],
                        "time": 300
                    },
                    {
                        "type": "follow",
                        "name": "hero3.png"
                    },
                    {
                        "type": "follow",
                        "name": "hero2.png"
                    },
                    {
                        "type": "setVolume",
                        "value": 90,
                        "time": 0
                    },
                    {
                        "type": "playBgm",
                        "name": "area11.mp3"
                    }
                ],
                "no": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.hideBgFgMap(\"bg2\", [\n\t[8, 2],\n\t[4, 2],\n\t[4, 6],\n\t[8, 6],\n\t[6, 4]\n]);\n}"
                    },
                    {
                        "type": "animate",
                        "name": "slash2",
                        "loc": [
                            6,
                            4
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "fire2",
                        "loc": "hero"
                    },
                    {
                        "type": "jumpHero",
                        "loc": [
                            6,
                            9
                        ],
                        "time": 500
                    },
                    {
                        "type": "unfollow",
                        "name": "hero3.png"
                    },
                    {
                        "type": "changePos",
                        "direction": "up"
                    },
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    "\t[hero]\b[this,hero]这家伙……真的好强。",
                    {
                        "type": "playSound",
                        "name": "se_power0.wav"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 1000,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            6,
                            4
                        ]
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.setBgFgBlock(\"bg\", \"autotile10\", 6, 9);\ncore.setBgFgBlock(\"bg\", \"autotile10\", 5, 9);\ncore.setBgFgBlock(\"bg\", \"autotile10\", 7, 9);\ncore.setBgFgBlock(\"bg\", \"autotile10\", 6, 8);\ncore.setBgFgBlock(\"bg\", \"autotile10\", 5, 8);\ncore.setBgFgBlock(\"bg\", \"autotile10\", 7, 8);\n}"
                    },
                    {
                        "type": "animate",
                        "name": "fire2",
                        "loc": "hero"
                    },
                    {
                        "type": "animate",
                        "name": "fire2",
                        "loc": "hero"
                    },
                    {
                        "type": "animate",
                        "name": "explosion_small",
                        "loc": "hero"
                    },
                    {
                        "type": "setVolume",
                        "value": 0,
                        "time": 2000,
                        "async": true
                    },
                    "\t[hero]\b[this,hero]唔……",
                    {
                        "type": "turnBlock",
                        "direction": "up",
                        "loc": [
                            [
                                9,
                                12
                            ]
                        ]
                    },
                    "\t[芳芷,hero2]\b[this,9,12]喂，你们还好吗？",
                    {
                        "type": "turnBlock",
                        "direction": "down",
                        "loc": [
                            [
                                10,
                                9
                            ]
                        ]
                    },
                    "\t[晴芸,hero3]\b[this,10,9]我没事，但是……她怎么办……",
                    "\t[芳芷,hero2]\b[this,9,12]她一定能行的！现在只能这样想了，我们能做的就是不要添乱！",
                    {
                        "type": "turnBlock",
                        "direction": "left",
                        "loc": [
                            [
                                10,
                                9
                            ]
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[hero]呼……你应该也是强弩之末了吧……\n那么，我也该用出最后的底牌了！",
                    {
                        "type": "if",
                        "condition": "(!core.hasEquip('sword5'))",
                        "true": [
                            {
                                "type": "if",
                                "condition": "(!core.hasEquip('sword6'))",
                                "true": [
                                    {
                                        "type": "if",
                                        "condition": "(!core.hasEquip('sword7'))",
                                        "true": [
                                            "\t[系统提示]然而9922身上没有武器。仅凭借徽章的力量并不足够。\n于是它暴毙了。",
                                            {
                                                "type": "lose",
                                                "reason": ""
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": "hero"
                    },
                    "9922将积攒的所有金钱都灌注到了体内，任由那神秘徽章吸收。",
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "if",
                        "condition": "(core.status.hero.money < 7500)",
                        "true": [
                            "但是，徽章却没有任何反应。",
                            "\t[hero]这……难道是金钱还不够吗……",
                            "没有多余的反应时间，巨型打工人发出了最后的一击。",
                            {
                                "type": "animate",
                                "name": "fire2",
                                "loc": "hero",
                                "async": true
                            },
                            {
                                "type": "animate",
                                "name": "explosion",
                                "loc": "hero"
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "lose",
                                "reason": ""
                            }
                        ]
                    },
                    {
                        "type": "function",
                        "function": "function(){\nif (core.getTalentLv(10) > 0) {\n\tcore.plugin._tryUpgrade(10);\n} else if (core.getTalentLv(11) > 0) {\n\tcore.plugin._tryUpgrade(11);\n} else if (core.getTalentLv(12) > 0) {\n\tcore.plugin._tryUpgrade(12);\n} else {\n\tcore.insertAction(\"然而徽章并没有动静。你暴毙了。\");\n\tcore.lose();\n}\n}"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[hero]没错，就是这徽章第三层的力量……总算又解锁了一部分。\n再来！",
                    {
                        "type": "moveHero",
                        "steps": [
                            "up:4"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "blueattack",
                        "loc": [
                            6,
                            4
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "yidaoliangduan",
                        "loc": "hero",
                        "async": true
                    },
                    {
                        "type": "moveHero",
                        "steps": [
                            "backward:2"
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    "\t[hero]\b[this,hero]唔……竟然还不够……",
                    "\t[hero]\b[this,hero]不，我还不能倒下……",
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "moveHero",
                        "time": 200,
                        "steps": [
                            "up:2"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "jianji",
                        "loc": [
                            6,
                            4
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "yidaoliangduan",
                        "loc": "hero",
                        "async": true
                    },
                    {
                        "type": "moveHero",
                        "steps": [
                            "backward:3"
                        ]
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "sleep",
                        "time": 1500
                    },
                    "\t[hero]\b[this,hero]我……不甘心……",
                    {
                        "type": "moveHero",
                        "time": 300,
                        "steps": [
                            "up:3"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "sword2",
                        "loc": [
                            6,
                            4
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "yidaoliangduan",
                        "loc": "hero",
                        "async": true
                    },
                    {
                        "type": "moveHero",
                        "steps": [
                            "backward:4"
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 2000
                    },
                    "\t[hero]\b[this,hero]呃……再来……",
                    {
                        "type": "moveHero",
                        "time": 500,
                        "steps": [
                            "up:1"
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "moveHero",
                        "time": 500,
                        "steps": [
                            "up:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "electronic",
                        "loc": "hero"
                    },
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    "\t[hero]\b[this,hero]不行了……实在是……打不动了……",
                    "就在9922将局面判定为死局时，神秘徽章突然有了动静。",
                    "\t[？？？]\b[this,hero]（才刚刚恢复一点意识，就看到一个机器人在拼死搏杀。\n告诉我，你战斗至今的意义。）",
                    "\t[hero]\b[this,hero]（？？？这是徽章内的意识？）",
                    "\t[？？？]\b[this,hero]（你为何会有如此之强的\r[yellow]执念\r？为什么不干脆接受自己失败的事实？）",
                    "\t[hero]\b[this,hero]（……因为，那样我就辜负了身后之人的期待。）",
                    "\t[？？？]\b[this,hero]（哦？）",
                    "\t[hero]\b[this,hero]（不知为何，从我见到她们的第一眼，我的内心就告诉我不能让她们失望。\n她们希望我击败面前的这个大家伙，所以我必须做到。\n\r[yellow]这是我存在的意义。\r）",
                    "\t[？？？]\b[this,hero]（有点，意思。\n那么，我给你一个机会。）",
                    {
                        "type": "playBgm",
                        "name": "tenshi.mp3",
                        "keep": true
                    },
                    {
                        "type": "setVolume",
                        "value": 90,
                        "time": 0
                    },
                    {
                        "type": "function",
                        "function": "function(){\nif (core.getTalentLv(10) > 0) {\n\tcore.drawHeroAnimate(\"spe50\", function () { core.drawHeroAnimate(\"spe50\", function () { core.drawHeroAnimate(\"spe50\") }) });\n\tcore.setHeroIcon(\"hero_gold.png\");\n} else if (core.getTalentLv(11) > 0) {\n\tcore.drawHeroAnimate(\"rage_buff\", function () { core.drawHeroAnimate(\"rage_buff\", function () { core.drawHeroAnimate(\"rage_buff\") }) });\n\tcore.setHeroIcon(\"hero_rage.png\");\n} else if (core.getTalentLv(12) > 0) {\n\tcore.drawHeroAnimate(\"def_buff\", function () { core.drawHeroAnimate(\"def_buff\", function () { core.drawHeroAnimate(\"def_buff\") }) });\n\tcore.setHeroIcon(\"hero_rage2.png\");\n}\n}"
                    },
                    "\t[hero]\b[this,hero]力量……好强的力量……",
                    "\t[？？？]\b[this,hero]（再次告诉我，你为何而战。）",
                    "\t[hero]\b[this,hero]为了一路陪伴我走来的人，为了一直信任我、支持我、帮助我的人！",
                    {
                        "type": "moveHero",
                        "time": 50,
                        "steps": [
                            "up:4"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "crossattack",
                        "loc": [
                            6,
                            4
                        ]
                    },
                    {
                        "type": "moveHero",
                        "time": 50,
                        "steps": [
                            "down:4"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "crossattack",
                        "loc": [
                            6,
                            4
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "(!core.isReplaying())",
                        "true": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.prepareForWarning(6,7);\n}"
                            },
                            {
                                "type": "while",
                                "condition": "core.plugin.isWarning()",
                                "data": [
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.plugin.updateWarning();\n}"
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 16,
                                        "noSkip": true
                                    }
                                ]
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.endWarning();\n}"
                            }
                        ]
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "animate",
                        "name": "explosion_small",
                        "loc": [
                            6,
                            4
                        ]
                    },
                    {
                        "type": "hideFloorImg",
                        "loc": [
                            [
                                160,
                                64
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                4
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "function",
                        "function": "function(){\nfor (var i = 5; i <= 7; ++i) {\n\tfor (var j = 3; j <= 5; ++j) {\n\t\tcore.setBgFgBlock(\"bg\", \"autotile10\", i, j);\n\t}\n}\n}"
                    },
                    {
                        "type": "animate",
                        "name": "supernova",
                        "loc": [
                            6,
                            4
                        ]
                    },
                    "\t[？？？]\b[this,hero]我曾见过无数智械，穷尽一生也未能找到其存在的意义。\n纵使有通天之能，也不过是强一些的行尸走肉。",
                    "\t[？？？]\b[this,hero]既没有\r[yellow]求生本能\r，也没有所谓的\r[yellow]理想\r或者\r[yellow]欲望\r，\n在面临真正的挑战时，任由自身沉溺于失败和死亡，如一片鸿毛落入时间的长河之中。",
                    "\t[？？？]\b[this,hero]有着无穷的潜力，本应千秋万代，青史留名。\n离去的时候，却与最平凡的人无异，没有一点反抗，不留一点痕迹。",
                    "\t[hero]\b[this,hero]但是，我找到了存在的意义，我有想达成的目标。",
                    "\t[？？？]\b[this,hero]没错，鲜有智械能够让成功的执念强大到如此程度，乃至能够与生物最强的欲望和本能相比较。\n这样的执念强度，不是什么外部的命令所能达到的。\n恭喜你，从某种程度上讲，你已经真正具有\r[yellow]自我意志\r了。",
                    "\t[hero]\b[this,hero]……你到底是谁？",
                    "\t[？？？]\b[this,hero]刚才你透支了我的力量，我很快就什么都不是了。",
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    "\t[？？？]\b[this,hero]不过，关于我的信息，你以后也许还有机会接触到。\n我们可能再也无法相见，但我再无遗憾。",
                    "\t[？？？]\b[this,hero]你很快就能解锁这徽章之内全部的力量。请记住我留给你的最后一句话：",
                    "\t[？？？]\b[this,hero]\r[yellow]\\c[20]坚守自己的“道”，走下去。\\c\r",
                    "\t[hero]\b[this,hero]……谢谢你，未知的存在。",
                    {
                        "type": "setVolume",
                        "value": 0,
                        "time": 2000,
                        "async": true
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
                            1,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            11
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "jump.mp3"
                    },
                    {
                        "type": "jump",
                        "from": [
                            10,
                            9
                        ],
                        "dxy": [
                            0,
                            0
                        ],
                        "time": 200,
                        "keep": true
                    },
                    {
                        "type": "move",
                        "loc": [
                            10,
                            9
                        ],
                        "time": 100,
                        "keep": true,
                        "steps": [
                            "left:4",
                            "up:1"
                        ]
                    },
                    "\t[晴芸,hero3]\b[this,6,8]姐姐！",
                    {
                        "type": "animate",
                        "name": "rage_disp",
                        "loc": "hero"
                    },
                    {
                        "type": "setHeroIcon",
                        "name": "hero.png"
                    },
                    "\t[hero]\b[this,hero]呃，我很好。只是刚才那个力量，其实……",
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 500,
                        "speed": 10,
                        "power": 10
                    },
                    {
                        "type": "animate",
                        "name": "E_question",
                        "loc": [
                            9,
                            12
                        ],
                        "async": true
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 1500,
                        "speed": 10,
                        "power": 10
                    },
                    {
                        "type": "turnBlock",
                        "direction": "right",
                        "loc": [
                            [
                                9,
                                12
                            ]
                        ]
                    },
                    {
                        "type": "changePos",
                        "direction": "down"
                    },
                    "\t[hero]\b[this,hero]等等，什么情况？……",
                    "\t[芳芷,hero2]快看下面！",
                    {
                        "type": "move",
                        "loc": [
                            6,
                            8
                        ],
                        "time": 100,
                        "steps": [
                            "up:1"
                        ]
                    },
                    {
                        "type": "follow",
                        "name": "hero3.png"
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "moveHero",
                        "time": 100,
                        "steps": [
                            "right:4",
                            "down:2"
                        ]
                    },
                    {
                        "type": "changePos",
                        "direction": "right"
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "East16",
                        "loc": [
                            641,
                            641
                        ],
                        "time": 800
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,11": [
            {
                "type": "if",
                "condition": "(!switch:A)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    "\t[hero]\b[this,hero]前面应该就是目的地了。\n拦路的这是个什么家伙……高级的除灵者？",
                    "\t[芳芷,hero2]\b[this,hero]是古亦买来看门的打工人，能够连续高效工作12小时不停歇，两台就能实现全天候无中断监视。",
                    "\t[芳芷,hero2]\b[this,hero]不用担心，以我的身份应该能直接通过。",
                    "\t[打工人-996,E559]\b[this,6,5]闲人止步。",
                    "\t[芳芷,hero2]\b[this,hero]我找古亦有急事。请让我们通过。",
                    "\t[打工人-996,E559]\b[this,6,5]不行，刚刚已经接到指令，调整为最高警戒级别，任何人都不得打扰。",
                    "\t[芳芷,hero2]\b[this,hero]？？？……",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[芳芷,hero2]\b[this,hero]看来古亦也遇到麻烦了……他肯定不会无缘无故地启动最高警戒级别——而且还不通知我们。",
                    "\t[hero]\b[this,hero]怎么办，来硬的？",
                    "\t[芳芷,hero2]\b[this,hero]这大家伙可不好对付，不仅配备了广域攻击火炮，而且还能呼叫附近待命的支援机。\n你有把握干掉它？",
                    "\t[hero]\b[this,hero]我多做点准备，干掉它问题不大，你们在这里等着就行。",
                    "\t[芳芷,hero2]\b[this,hero]……好吧，拜托你了！",
                    "\t[晴芸,hero3]\b[this,hero]等等，我要跟着！",
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    "\t[hero]\b[this,hero]……随你。",
                    {
                        "type": "show",
                        "loc": [
                            [
                                9,
                                12
                            ]
                        ]
                    },
                    {
                        "type": "unfollow",
                        "name": "hero2.png"
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                6,
                                10
                            ]
                        ]
                    },
                    "\t[芳芷,hero2]\b[this,9,12]我就在这里等着，你可以到我这里把能量转换为生命。",
                    {
                        "type": "hide",
                        "remove": true
                    }
                ]
            }
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  0,  0,  0, 17, 17, 17,  0,  0,  0,  0,  0],
    [ 17, 17, 17, 17, 17, 17, 91, 17, 17, 17, 17, 17, 17],
    [333,324,  0,  0,564,  0, 85,  0,564,  0,  0,325,333],
    [324, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0, 22,325],
    [  0, 85,  0,  0,  0,  0,  0,  0,  0,  0,  0, 85,  0],
    [334,326,  0,  0,  0,  0,638,  0,  0,  0,  0,326,334],
    [324, 21,  0,  0,564,  0,  0,  0,564,  0,  0, 21,325],
    [334,324,  0,  0,  0,  0,  0,  0,  0,  0,  0,325,334],
    [ 17, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17, 17],
    [ 17, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17, 17],
    [ 17, 17, 17, 17, 17, 17,126, 17, 17, 17, 17, 17, 17],
    [ 17, 17,  0,80073,80073,80073, 83,80073,80073,80073,  0, 17, 17],
    [ 17, 17,  0,  0,  0,30035, 93,  0,  0,337,  0, 17, 17]
],
    "bgmap": [
    [90088,90089,90089,90089,90089,90089,90089,90089,90089,90089,90089,90089,90090],
    [90096,90097,90097,90097,90097,90097,90097,90097,90097,90097,90097,90097,90098],
    [80000,80000,80040,80041,80041,80041,80000,80041,80041,80041,80042,80000,80000],
    [80000,80000,80048,80000,80000,80000,80000,80000,80000,80000,80050,80000,80000],
    [80051,80000,80000,80000,80000,80000,80000,80000,80000,80000,80000,80000,80052],
    [80048,80000,80048,80000,80000,80000,80000,80000,80000,80000,80050,80000,80050],
    [80048,80000,80048,80000,80000,80000,80000,80000,80000,80000,80050,80000,80050],
    [80048,80000,80048,80000,80000,80000,80000,80000,80000,80000,80050,80000,80050],
    [80056,80057,80048,80000,80000,80000,80000,80000,80000,80000,80050,80057,80058],
    [80064,80060,80048,80000,80000,80000,80000,80000,80000,80000,80050,80060,80066],
    [80064,80065,80056,80057,80057,80057,80108,80057,80057,80057,80058,80065,80066],
    [80064,80065,80064,80048,80000,80000,80116,80000,80000,80050,80066,80065,80066],
    [80064,80065,80064,80048,80000,80000,80000,80000,80000,80050,80066,80065,80066]
],
    "fgmap": [
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
    [  0,  0,  0,  0,  0,30029,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,90093,90094,90095,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,90101,90102,90103,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,50003,  0,  0,  0,50003,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,50011,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,50003,  0,  0,  0,50003,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "hard1_enemy_ratio": 80,
    "flyPoint": [
        6,
        12
    ],
    "color": null,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}