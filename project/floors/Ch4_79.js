main.floors.Ch4_79=
{
    "floorId": "Ch4_79",
    "title": "拓岩镇-禁区",
    "name": "拓岩镇-禁区",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
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
            "type": "loadBgm",
            "name": "area19.mp3"
        }
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(core.getBlockId(6,2)==\"E802\")",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.setBgLight([\n\t[6, 2, 250]\n]);\n}"
                }
            ],
            "false": [
                {
                    "type": "if",
                    "condition": "(core.getBlockId(6,6)==\"E801\")",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.setBgLight([\n\t[6, 6, 200]\n]);\n}"
                        }
                    ],
                    "false": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.setBgLight([]);\n}"
                        }
                    ]
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {
        "6,10": [
            "\t[系统提示]需要清理前面所有敌人。正在检测中……",
            {
                "type": "function",
                "function": "function(){\ncore.plugin.checkEnemy(\"Ch4_61\", \"Ch4_78\");\n}"
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
        "6,9": [
            {
                "type": "function",
                "function": "function(){\ncore.hideBgFgMap(\"bg2\", [6, 9]);\n}"
            },
            {
                "type": "setValue",
                "name": "flag:disableFly",
                "value": "1"
            },
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "up:1"
                ]
            },
            {
                "type": "setVolume",
                "value": 0,
                "time": 1000,
                "async": true
            },
            "\t[hero]\b[down,null]也该出现了吧，被称为\r[yellow]洛渔神\r的家伙？",
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "time": 500
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.setBgLight([\n\t[6, 6, 200]\n]);\n}"
            },
            "\t[洛渔,E801]\b[down,null]我在听。",
            "\t[晴芸,hero3]\b[down,null]看到你这形象……难道这就是那帮疯子狂热地膜拜你的原因？",
            "\t[洛渔,E801]\b[down,null]不，虎魔帮的绝大部分人都没见过我的真容。\n不过那些下级天使他们倒是经常见。",
            "\t[hero]\b[down,null]（这家伙看起来倒是能交流）\n所以这到底怎么回事？我本来只是找秩见送信的，你为何要指示虎魔帮的人追杀我们？",
            "\t[洛渔,E801]\b[down,null]你不懂我们的力量来源。",
            {
                "type": "animate",
                "name": "E_unhappy",
                "loc": "hero"
            },
            "\t[晴芸,hero3]\b[down,null]但是我已经懂了。你和之前的那些天使没有本质区别，都是秩见获取力量的工具。\n直说吧，我们想要见到秩见，是不是必须先打你一顿？",
            "\t[洛渔,E801]\b[down,null]能与强大的对手战斗，我很荣幸。",
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    10
                ]
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "waitAsync",
                "excludeAnimates": true
            },
            {
                "type": "setVolume",
                "value": 90,
                "time": 0
            },
            {
                "type": "playBgm",
                "name": "boss18.mp3",
                "keep": true
            },
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
                "time": 100,
                "keep": true,
                "steps": [
                    "right:4",
                    "down:2",
                    "right:1"
                ]
            },
            {
                "type": "turnBlock",
                "direction": "left",
                "loc": [
                    [
                        11,
                        11
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        10,
                        11
                    ]
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    10,
                    10
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "6,6": {
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
            "data": []
        },
        "10,11": {
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
            "data": []
        },
        "7,3": {
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
            "data": []
        },
        "6,2": {
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
            "data": []
        },
        "8,5": {
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
            "data": []
        },
        "5,4": {
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
            "data": []
        },
        "3,5": {
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
            "data": []
        },
        "4,7": {
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
            "data": []
        },
        "5,9": {
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
            "data": []
        },
        "7,8": {
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
            "data": []
        },
        "9,7": {
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
            "data": []
        },
        "6,0": [
            {
                "type": "choices",
                "text": "\t[系统提示]过去就回不来了。",
                "choices": [
                    {
                        "text": "确认",
                        "color": [
                            255,
                            215,
                            0,
                            1
                        ],
                        "action": [
                            {
                                "type": "changeFloor",
                                "floorId": "Ch4_7A",
                                "loc": [
                                    6,
                                    12
                                ],
                                "direction": "up",
                                "time": 2000
                            }
                        ]
                    },
                    {
                        "text": "我再拖延一会",
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
        ],
        "10,10": {
            "trigger": "action",
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
                "\t[晴芸,hero3]姐姐顶住，一会我给他准备个大的！"
            ]
        }
    },
    "changeFloor": {
        "6,12": {
            "floorId": "Ch4_78",
            "loc": [
                6,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,6": [
            {
                "type": "if",
                "condition": "(flag:last_battle_enemyId === \"E801\")",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "E801",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "jumpHero",
                        "loc": [
                            6,
                            7
                        ],
                        "time": 300,
                        "async": true
                    },
                    {
                        "type": "changePos",
                        "direction": "up"
                    },
                    {
                        "type": "move",
                        "time": 500,
                        "keep": true,
                        "steps": [
                            "up:1"
                        ]
                    },
                    {
                        "type": "waitAsync"
                    },
                    "\t[洛渔,E801]\b[down,6,5]真是令人印象深刻的实力……",
                    "\t[？？]\b[down,6,2]够了。",
                    "\t[洛渔,E801]\b[down,6,5]遵命。",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "animate",
                        "name": "light2",
                        "loc": [
                            6,
                            5
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "dark",
                        "loc": [
                            6,
                            2
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                6,
                                2
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.plugin.setBgLight([\n\t[6, 2, 250]\n]);\n}"
                    },
                    {
                        "type": "if",
                        "condition": "(!core.isReplaying())",
                        "true": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.prepareForWarning(6,2);\n}"
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
                    "\t[hero]\b[down,hero]终于现身了，如此强大的气场，你便是秩见吧。",
                    "\t[秩见,E802]\b[down,6,2]我刚才已经收到洛渔上报的信息。把信拿出来。",
                    {
                        "type": "moveHero",
                        "steps": [
                            "up:1"
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[秩见,E802]\b[down,6,2]“素来听闻拓岩镇管理者主修宗教信仰之力，建立以极端狂热情绪为代表的虎魔帮，从无脑膜拜的情绪中汲取力量，打压不愿皈依的普通民众。”",
                    "\t[秩见,E802]\b[down,6,2]“如今虎魔帮势力越发强大，加上管理者有意放出大鬼小鬼煽风点火，正常人的生存愈发艰难，但凡有点自己思想的理性人都早已跑路，只剩一群为虎作伥的狺狺狂吠之徒，对着苟延残喘的正常人宣泄情绪。”",
                    "\t[秩见,E802]\b[down,6,2]“今日我便派遣手下两员大将前来讨贼，救万民于水火之中。\n——反抗军首领 2 2 2 1”",
                    "\t[hero]\b[down,hero]啊这……",
                    "\t[晴芸,hero3]\b[up,11,11]（2221果然早就料到了……）",
                    "\t[秩见,E802]\b[down,6,2]你似乎很意外。不过，你的想法和意图并不重要。\n\r[orange]由我在这里亲自将你们击败，很重要。\r",
                    "\t[秩见,E802]\b[down,6,2]你们两人在被追杀的过程中迅速成长，到最后甚至能击溃多名高阶成员联合组成的大阵。\n这使得那些不愿归顺我的投机取巧之辈重燃苟活的奢望，一些虎魔帮成员的信念也产生了动摇，觉得你们不可战胜。",
                    "\t[秩见,E802]\b[down,6,2]然而你们不过是我的垫脚石罢了！\n你们的连胜纪录将由我终结，然后拓岩镇的所有人都将死心塌地的追随我、膜拜我！我的地位将彻底稳固，再无人能够撼动！",
                    "\t[秩见,E802]\b[down,6,2]你的同伴早就心生畏惧临阵脱逃了吧！\n来感受这，不可言说的力量！",
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            6,
                            2
                        ],
                        "async": true
                    },
                    {
                        "type": "playSound",
                        "name": "se_power0.wav"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 1000,
                        "speed": 10,
                        "power": 10
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                7,
                                3
                            ]
                        ],
                        "time": 100
                    },
                    {
                        "type": "playSound",
                        "name": "092-Attack04.ogg"
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "time": 100
                    },
                    {
                        "type": "playSound",
                        "name": "092-Attack04.ogg"
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 100
                    },
                    {
                        "type": "playSound",
                        "name": "092-Attack04.ogg"
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 100
                    },
                    {
                        "type": "playSound",
                        "name": "092-Attack04.ogg"
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "time": 100
                    },
                    {
                        "type": "playSound",
                        "name": "092-Attack04.ogg"
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                4,
                                7
                            ]
                        ],
                        "time": 100
                    },
                    {
                        "type": "playSound",
                        "name": "092-Attack04.ogg"
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                3,
                                5
                            ]
                        ],
                        "time": 100
                    },
                    {
                        "type": "playSound",
                        "name": "092-Attack04.ogg"
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                5,
                                4
                            ]
                        ],
                        "time": 100
                    },
                    {
                        "type": "playSound",
                        "name": "092-Attack04.ogg"
                    },
                    {
                        "type": "if",
                        "condition": "flags.hard == 1",
                        "true": [
                            "\t[系统提示]0伤击败秩见可以额外获得\r[yellow]10\r颗黄极石。"
                        ]
                    }
                ]
            }
        ],
        "6,2": [
            {
                "type": "if",
                "condition": "(flag:last_battle_enemyId === \"E802\")",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "E802",
                        "loc": [
                            [
                                6,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "jumpHero",
                        "loc": [
                            6,
                            3
                        ],
                        "time": 300
                    },
                    {
                        "type": "changePos",
                        "direction": "up"
                    },
                    {
                        "type": "animate",
                        "name": "blueattack",
                        "loc": [
                            6,
                            3
                        ],
                        "async": true
                    },
                    {
                        "type": "sleep",
                        "time": 200
                    },
                    {
                        "type": "moveHero",
                        "time": 100,
                        "async": true,
                        "steps": [
                            "backward:1"
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "(core.getBlock(6,4)!=null)",
                        "true": [
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        6,
                                        4
                                    ]
                                ],
                                "remove": true
                            }
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 200
                    },
                    {
                        "type": "waitAsync",
                        "excludeAnimates": true
                    },
                    {
                        "type": "move",
                        "loc": [
                            6,
                            2
                        ],
                        "time": 100,
                        "keep": true,
                        "steps": [
                            "down:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "blueattack",
                        "loc": [
                            6,
                            4
                        ],
                        "async": true
                    },
                    {
                        "type": "sleep",
                        "time": 200
                    },
                    {
                        "type": "moveHero",
                        "time": 100,
                        "async": true,
                        "steps": [
                            "backward:1"
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "(core.getBlock(6,5)!=null)",
                        "true": [
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "remove": true
                            }
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 200
                    },
                    {
                        "type": "waitAsync",
                        "excludeAnimates": true
                    },
                    {
                        "type": "move",
                        "loc": [
                            6,
                            3
                        ],
                        "time": 100,
                        "keep": true,
                        "steps": [
                            "down:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "crossattack",
                        "loc": [
                            6,
                            4
                        ],
                        "async": true
                    },
                    {
                        "type": "sleep",
                        "time": 200
                    },
                    {
                        "type": "move",
                        "loc": [
                            6,
                            4
                        ],
                        "time": 200,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "up:1"
                        ]
                    },
                    {
                        "type": "moveHero",
                        "time": 200,
                        "steps": [
                            "backward:1"
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "(core.getBlock(6,6)!=null)",
                        "true": [
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        6,
                                        6
                                    ]
                                ],
                                "remove": true
                            }
                        ]
                    },
                    {
                        "type": "waitAsync",
                        "excludeAnimates": true
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.setFlag(\"tmpz\", 0);\nfor (var i = 1; i <= 11; ++i) {\n\tfor (var j = 2; j <= 9; ++j) {\n\t\tif (core.getBlockId(i, j) == \"E803\") {\n\t\t\tcore.setFlag(\"tmpz\", 1);\n\t\t}\n\t}\n}\n}"
                    },
                    {
                        "type": "if",
                        "condition": "(flag:tmpz == 1)",
                        "true": [
                            "\t[秩见,E802]\b[down,6,3]必须承认你很强，不过我更胜一筹！",
                            "\t[晴芸,hero3]\b[down,null]糟了，他可以从那些杂兵身上获得力量！",
                            {
                                "type": "animate",
                                "name": "yongchang",
                                "loc": [
                                    6,
                                    3
                                ]
                            },
                            "\t[秩见,E802]\b[down,6,3]死吧！",
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "value": "0"
                            },
                            {
                                "type": "animate",
                                "name": "explosion",
                                "loc": "hero"
                            },
                            {
                                "type": "lose",
                                "reason": ""
                            }
                        ]
                    },
                    "\t[秩见,E802]\b[down,6,3]看来我是无法干净利落地击败你了……",
                    "\t[hero]\b[down,hero]我真的很不理解，你看上去不傻，为什么整出虎魔帮这种逆天组织……",
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            6,
                            3
                        ],
                        "async": true
                    },
                    {
                        "type": "playSound",
                        "name": "se_power0.wav"
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 2000,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    "\t[秩见,E802]\b[down,6,3]不过感谢你刚才对我造成的伤害，我已经积攒了大量的剑意值！\n接下来，我会让你体验到什么叫真正的……",
                    {
                        "type": "animate",
                        "name": "fire2",
                        "loc": [
                            6,
                            3
                        ]
                    },
                    "\t[晴芸,hero3]\b[down,hero]不会给你机会变身了。\n下地狱去忏悔吧！",
                    {
                        "type": "animate",
                        "name": "fire2",
                        "loc": [
                            6,
                            3
                        ],
                        "async": true
                    },
                    {
                        "type": "animate",
                        "name": "explosion_small",
                        "loc": [
                            6,
                            3
                        ]
                    },
                    "\t[秩见,E802]\b[down,6,3]这，这怎么可能！你怎么会有这种力量！",
                    "\t[晴芸,hero3]\b[down,hero]看看拓岩镇在你的治理下变成了什么鬼样子。\n去陪那些被虎魔帮迫害至死的平民吧！",
                    "\t[秩见,E802]\b[down,6,3]不！你们根本不懂！",
                    "\t[hero]\b[down,hero]哦？",
                    "\t[秩见,E802]\b[down,6,3]虎魔帮的成员明明很幸福！他们通过膜拜找到了存在的意义，我将他们的信仰转化为力量，这明明是双赢的事情！",
                    "\t[晴芸,hero3]\b[down,hero]说的真对，你把虎魔帮成员洗脑成除了膜人和仇杀什么都不会的大可爱，看得出来他们确实很享受这种感觉。",
                    "\t[晴芸,hero3]\b[down,hero]但是……你考虑过其他人吗？你对于信仰不同的人，没有半点包容吗？",
                    "\t[秩见,E802]\b[down,6,3]其他人？那只不过是可能产生戾气的不稳定因素，只要把他们清理干净，我一定能创造一个完全稳定、和谐的社会……",
                    "\t[hero]\b[down,hero]\r[yellow]纯净派\r。",
                    "\t[秩见,E802]\b[down,6,3]你竟然知道这个词？你们到底是什么人？",
                    "\t[hero]\b[down,hero]你还是去世吧。",
                    {
                        "type": "animate",
                        "name": "fire2",
                        "loc": [
                            6,
                            3
                        ],
                        "async": true
                    },
                    {
                        "type": "animate",
                        "name": "explosion_small",
                        "loc": [
                            6,
                            3
                        ]
                    },
                    "\t[秩见,E802]\b[down,6,3]蠢货，我们的事业是正义的……谔谔，啊啊啊啊啊啊！",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                3
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "animate",
                        "name": "explosion",
                        "loc": [
                            6,
                            3
                        ],
                        "async": true
                    },
                    {
                        "type": "setVolume",
                        "value": 0,
                        "time": 2000,
                        "async": true
                    },
                    {
                        "type": "setCurtain",
                        "color": [
                            255,
                            255,
                            255,
                            1
                        ],
                        "time": 2000,
                        "keep": true
                    },
                    {
                        "type": "waitAsync",
                        "excludeAnimates": true
                    },
                    {
                        "type": "pauseBgm"
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                10
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                11
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                11,
                                11
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "changePos",
                        "loc": [
                            6,
                            6
                        ],
                        "direction": "up"
                    },
                    {
                        "type": "moveHero",
                        "time": 200,
                        "async": true,
                        "steps": [
                            "up:2"
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "hero3_up",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "waitAsync",
                        "excludeAnimates": true
                    },
                    {
                        "type": "setCurtain",
                        "time": 1000
                    },
                    {
                        "type": "changePos",
                        "direction": "up"
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            1
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
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:disableFly",
                        "value": "0"
                    },
                    "\t[hero]\b[down,null]呼，结束了……",
                    {
                        "type": "jump",
                        "from": [
                            6,
                            7
                        ],
                        "to": [
                            6,
                            6
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true
                    },
                    {
                        "type": "animate",
                        "name": "E_love",
                        "loc": [
                            6,
                            6
                        ],
                        "async": true
                    },
                    "\t[晴芸,hero3]\b[down,null]没错！咱们太强啦！",
                    {
                        "type": "changePos",
                        "direction": "down"
                    },
                    {
                        "type": "animate",
                        "name": "E_sweat",
                        "loc": "hero"
                    },
                    "\t[hero]\b[down,null]说实话，拓岩镇的管理者就这点脑子，挺令我失望的。\n现在该回去了吧？",
                    "\t[晴芸,hero3]\b[down,null]前方好像有什么人在等我们，去看看吧。",
                    {
                        "type": "waitAsync",
                        "excludeAnimates": true
                    },
                    {
                        "type": "move",
                        "loc": [
                            6,
                            6
                        ],
                        "time": 100,
                        "steps": [
                            "up:2"
                        ]
                    },
                    {
                        "type": "follow",
                        "name": "hero3.png"
                    },
                    {
                        "type": "playBgm",
                        "name": "area18.mp3"
                    },
                    {
                        "type": "setVolume",
                        "value": 90,
                        "time": 0
                    },
                    {
                        "type": "changePos",
                        "direction": "up"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [150298,150299,150300,150301,151176,151177,  0,151170,151171,150296,150297,150298,150299],
    [150306,150307,150308,150309,151184,151185, 85,151178,151179,150304,150305,150306,150307],
    [881,666,881, 84,  0,  0,802,  0,  0, 84,881,666,881],
    [150013,150013,150013,150013,  0,  0,  0,803,  0,150013,150013,150013,150013],
    [150013,331,150013, 82,  0,803, 82,  0,  0, 82,150013,331,150013],
    [150013,330, 83,803,  0,  0,  0,  0,803,  0, 83,330,150013],
    [150013,150013,150013,  0,  0,  0,801,  0,  0,  0,150013,150013,150013],
    [150013, 81,  0,  0,803,  0,  0,  0,  0,803,  0, 82,150013],
    [150013,  0,  0,150013,  0,  0,  0,803,  0,150013,  0,  0,150013],
    [150013, 82,  0,  0,  0,803,  0,  0,  0,  0,  0, 81,150013],
    [150013,150013,150013,150013, 82,150013,126,150013, 84,150013,  0,150013,150013],
    [150013,569,334, 83,386,150013, 83,150013, 23,150013,755,  0,150013],
    [150013,150013,150013,150013,150013,150013,  0,150013,150013,150013,150013,150013,150013]
],
    "bgmap": [

],
    "fgmap": [

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
    [  0,  0,  0,  0,  0,  0,168,  0,  0,  0,  0,  0,  0],
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
    "hard1_enemy_ratio": 95
}