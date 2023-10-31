main.floors.Ch4_5F=
{
    "floorId": "Ch4_5F",
    "title": "荒烟村-15",
    "name": "荒烟村-15",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 50,
    "defaultGround": "sand",
    "bgm": "area17.mp3",
    "color": [
        0,
        0,
        0,
        0.6
    ],
    "weather": [
        "fog",
        3
    ],
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "boss17.mp3"
        },
        {
            "type": "loadBgm",
            "name": "story2.mp3"
        }
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "flag:boss17_phase>=1",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.setBgLight([\n\t[6, 5, 250]\n]);\n}"
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
                "function": "function(){\ncore.plugin.checkEnemy(\"Ch4_51\", \"Ch4_5E\");\n}"
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
                "type": "if",
                "condition": "flags.hard == 1",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[系统提示]前方boss战，确认要继续前进吗？",
                        "choices": [
                            {
                                "text": "前进！",
                                "color": [
                                    255,
                                    215,
                                    0,
                                    1
                                ],
                                "action": []
                            },
                            {
                                "text": "再准备一下",
                                "action": [
                                    {
                                        "type": "moveHero",
                                        "steps": [
                                            "backward:1"
                                        ]
                                    },
                                    {
                                        "type": "exit"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "choices",
                        "text": "\t[系统提示]前方boss战，确认要继续前进吗？\n（建议携带约1e血，1600能量，以及25黄。1蓝=3黄）",
                        "choices": [
                            {
                                "text": "前进！",
                                "color": [
                                    255,
                                    215,
                                    0,
                                    1
                                ],
                                "action": []
                            },
                            {
                                "text": "再准备一下",
                                "action": [
                                    {
                                        "type": "moveHero",
                                        "steps": [
                                            "backward:1"
                                        ]
                                    },
                                    {
                                        "type": "exit"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": "hero"
            },
            {
                "type": "setVolume",
                "value": 0,
                "time": 100,
                "async": true
            },
            "\t[hero]\b[down,null]咦，前面有个人。\n太好了，竟然还能找到幸存者……",
            {
                "type": "moveHero",
                "async": true,
                "steps": [
                    "up:1"
                ]
            },
            "\t[晴芸,N762]\b[down,null]站住，别过去！\n你是22吗，这种浓度的毒雾里怎么可能有人幸存？",
            "\t[hero]\b[down,null]诶？",
            {
                "type": "turnBlock",
                "direction": "down",
                "loc": [
                    [
                        6,
                        5
                    ]
                ]
            },
            "\t[？？,N758]\b[down,6,5]这次这么快就出结果了吗……\n等等，你们是……？",
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    11
                ]
            },
            "\t[晴芸,N762]\b[down,null]准备战斗，我先去准备炮火支援。",
            {
                "type": "unfollow",
                "name": "hero3_2.png"
            },
            {
                "type": "setBlock",
                "number": "N765",
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
                "type": "setValue",
                "name": "flag:boss17_phase",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.setBgLight([\n\t[6, 5, 250]\n]);\n}"
            },
            "\t[？？,N758]\b[down,6,5]短发妹子，我的短发妹子……\n你不知道，虽然我失去了你，但你一直活在我心中。",
            "\t[hero]\b[down,null]（？？？这人怎么比我还22，人都认不对）",
            "\t[？？,N758]\b[down,6,5]我付出740%倍于常人的努力，不断提升自己的阶级，只为能再次拥有你。",
            "\t[hero]\b[down,null]额……抱歉，你是哪位？",
            "\t[？？,N758]\b[down,6,5]你真的不记得我了？不，你一定是假装不认识我，你完全没有必要这样的。\n现在的我早已不是当初那个小小的六等公民了，不，何止是六等，现在即使是那些曾经在我眼里高不可攀的一等公民，也不过是低贱的畜生罢了。",
            "\t[hero]\b[down,null]你一定是认错人了……\n等等，你刚才说……你是……！",
            {
                "type": "if",
                "condition": "(!core.isReplaying())",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.plugin.prepareForWarning(6,5);\n}"
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
                "type": "waitAsync",
                "excludeAnimates": true
            },
            {
                "type": "playBgm",
                "name": "boss17.mp3",
                "keep": true
            },
            {
                "type": "setVolume",
                "value": 90,
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "E756",
                "loc": [
                    [
                        6,
                        5
                    ]
                ]
            },
            "\t[无常,N758]\b[down,6,5]再次自我介绍，我名为无常，是高贵的\r[orange]第零公民\r。",
            "\t[hero]（我tm……这里怎么就遇到第零公民了……\n而且似乎还是个精神不太正常的……）",
            "\t[无常,N758]\b[down,6,5]即使这样你也不肯正眼看我吗……为什么为什么为什么！",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[无常,N758]\b[down,6,5]看来，再怎么高的地位，也无法让你回心转意了。\n既然如此，那我就来硬的！\n\r[red]这次，绝不会让你跑掉！\r",
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "waitAsync",
                "excludeAnimates": true
            }
        ],
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
        "4,3": {
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
        "6,8": {
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
        "8,7": {
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
        "9,5": {
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
        "8,3": {
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
        "2,1": {
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
        "2,9": {
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
        "10,1": {
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
        "10,9": {
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
                {
                    "type": "if",
                    "condition": "(flag:boss17_phase==3)",
                    "true": [
                        {
                            "type": "while",
                            "condition": "true",
                            "data": [
                                {
                                    "type": "choices",
                                    "text": "\t[钥匙大炮,N755]每消耗1把黄钥匙，降低敌人7%基础攻防血。\n1蓝=3黄，1红=9黄。\n此降低效果先于角色技能的减少效果计算。",
                                    "choices": [
                                        {
                                            "text": "用黄钥匙炸！",
                                            "color": [
                                                255,
                                                247,
                                                90,
                                                1
                                            ],
                                            "need": "item:yellowKey>0",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "item:yellowKey",
                                                    "operator": "-=",
                                                    "value": "1"
                                                },
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
                                                    "type": "setValue",
                                                    "name": "flag:Ch4_5F_keys",
                                                    "operator": "+=",
                                                    "value": "1"
                                                },
                                                {
                                                    "type": "function",
                                                    "function": "function(){\ncore.plugin.calcBoss17Info(1);\n}"
                                                }
                                            ]
                                        },
                                        {
                                            "text": "用蓝钥匙炸！",
                                            "color": [
                                                106,
                                                103,
                                                255,
                                                1
                                            ],
                                            "need": "item:blueKey>0",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "item:blueKey",
                                                    "operator": "-=",
                                                    "value": "1"
                                                },
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
                                                    "type": "setValue",
                                                    "name": "flag:Ch4_5F_keys",
                                                    "operator": "+=",
                                                    "value": "3"
                                                },
                                                {
                                                    "type": "function",
                                                    "function": "function(){\ncore.plugin.calcBoss17Info(3);\n}"
                                                }
                                            ]
                                        },
                                        {
                                            "text": "用红钥匙炸！",
                                            "color": [
                                                255,
                                                78,
                                                78,
                                                1
                                            ],
                                            "need": "item:redKey>0",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "item:redKey",
                                                    "operator": "-=",
                                                    "value": "1"
                                                },
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
                                                    "type": "setValue",
                                                    "name": "flag:Ch4_5F_keys",
                                                    "operator": "+=",
                                                    "value": "9"
                                                },
                                                {
                                                    "type": "function",
                                                    "function": "function(){\ncore.plugin.calcBoss17Info(9);\n}"
                                                }
                                            ]
                                        },
                                        {
                                            "text": "用绿钥匙炸！",
                                            "color": [
                                                78,
                                                255,
                                                107,
                                                1
                                            ],
                                            "need": "item:greenKey>0",
                                            "condition": "switch:A<0 && flags.hard==2",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "switch:A",
                                                    "operator": "+=",
                                                    "value": "1"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "item:greenKey",
                                                    "operator": "-=",
                                                    "value": "1"
                                                },
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
                                                    "type": "setValue",
                                                    "name": "flag:Ch4_5F_keys",
                                                    "operator": "+=",
                                                    "value": "9"
                                                },
                                                {
                                                    "type": "function",
                                                    "function": "function(){\ncore.plugin.calcBoss17Info(9);\n}"
                                                }
                                            ]
                                        },
                                        {
                                            "text": "不炸",
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
                    ],
                    "false": [
                        "\t[晴芸,N762]还没准备好，你再拖住他一会！"
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "6,12": {
            "floorId": "Ch4_5E",
            "loc": [
                6,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,5": [
            {
                "type": "if",
                "condition": "(flag:boss17_phase===1)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:boss17_phase",
                        "value": "2"
                    },
                    {
                        "type": "setBlock",
                        "number": "E766",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "resetEnemyOnPoint",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "jumpHero",
                        "loc": [
                            6,
                            7
                        ],
                        "time": 300
                    },
                    {
                        "type": "changePos",
                        "direction": "up"
                    },
                    "\t[无常,E766]反抗还挺激烈的，你心里一定还恨我吧……\n那就狠狠地打我吧，尽情地发泄吧……但你是跑不掉的！",
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            6,
                            5
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
                                8,
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
                                9,
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
                                8,
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
                                6,
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
                                4,
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
                                6,
                                2
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
                                10,
                                1
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
                                10,
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
                                2,
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
                                2,
                                1
                            ]
                        ],
                        "time": 100
                    },
                    {
                        "type": "playSound",
                        "name": "092-Attack04.ogg"
                    },
                    {
                        "type": "waitAsync",
                        "excludeAnimates": true
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:boss17_phase===2)",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:boss17_phase",
                                "value": "3"
                            },
                            {
                                "type": "setBlock",
                                "number": "N758",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ]
                            },
                            {
                                "type": "resetEnemyOnPoint",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ]
                            },
                            {
                                "type": "resetEnemyOnPoint",
                                "loc": [
                                    [
                                        6,
                                        3
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
                                "loc": [
                                    6,
                                    5
                                ],
                                "time": 200,
                                "keep": true,
                                "steps": [
                                    "backward:2"
                                ]
                            },
                            {
                                "type": "waitAsync",
                                "excludeAnimates": true
                            },
                            "\t[无常,N758]还没闹够吗？\n原本还担心把你打伤了，现在看来是我想多了。",
                            "\t[无常,N758]你一定还不知道吧，借助多年来在这里定期开展的生化实验，我在\r[yellow]生物进化\r方向的造诣已经无人能及！",
                            "\t[无常,N758]这个世纪，一定是生命科学的世纪！\n就让你见识一下，我最先进的研究成果！\n\\c[20]\r[red]谔谔，啊啊啊啊啊！\r\\c",
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
                                "power": 10
                            },
                            {
                                "type": "playSound",
                                "name": "billy.mp3"
                            },
                            {
                                "type": "animate",
                                "name": "dark3",
                                "loc": [
                                    6,
                                    3
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "E767",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ]
                            },
                            {
                                "type": "animate",
                                "name": "roar",
                                "loc": [
                                    6,
                                    3
                                ]
                            },
                            {
                                "type": "animate",
                                "name": "E_dots",
                                "loc": "hero"
                            },
                            "\t[hero]这……也太强了吧……",
                            "\t[晴芸,N762]\b[up,11,11]大炮准备好了！用钥匙砸死他！",
                            "\t[系统提示]现在撞击右下机关门可以使用钥匙大炮！",
                            {
                                "type": "function",
                                "function": "function(){\ncore.showBgFgMap('bg2', [10, 9]);\ncore.updateWeather();\n}"
                            },
                            {
                                "type": "waitAsync"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,3": [
            {
                "type": "if",
                "condition": "(flag:last_battle_enemyId ===\"E767\")",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "E767",
                        "loc": [
                            [
                                6,
                                3
                            ]
                        ]
                    },
                    {
                        "type": "jumpHero",
                        "loc": [
                            6,
                            4
                        ],
                        "time": 300
                    },
                    {
                        "type": "changePos",
                        "direction": "up"
                    },
                    {
                        "type": "animate",
                        "name": "skill10",
                        "loc": [
                            6,
                            3
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "rage_buff",
                        "loc": [
                            6,
                            3
                        ]
                    },
                    {
                        "type": "resetEnemyOnPoint",
                        "loc": [
                            [
                                6,
                                3
                            ]
                        ]
                    },
                    {
                        "type": "setEnemy",
                        "id": "E767",
                        "name": "hp",
                        "value": "250000000",
                        "norefresh": true
                    },
                    {
                        "type": "setEnemy",
                        "id": "E767",
                        "name": "atk",
                        "value": "7400000",
                        "norefresh": true
                    },
                    {
                        "type": "setEnemy",
                        "id": "E767",
                        "name": "def",
                        "value": "7400000"
                    },
                    {
                        "type": "animate",
                        "name": "morphattack",
                        "loc": [
                            6,
                            4
                        ],
                        "async": true
                    },
                    {
                        "type": "moveHero",
                        "time": 100,
                        "steps": [
                            "backward:5"
                        ]
                    },
                    "\t[hero]这家伙……也太抗揍了……\n而且它的能力竟然恢复了！",
                    "\t[晴芸,N762]拉开距离了！继续轰炸！",
                    {
                        "type": "animate",
                        "name": "fire2",
                        "loc": [
                            6,
                            3
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "fire2",
                        "loc": [
                            6,
                            3
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "fire",
                        "loc": [
                            10,
                            11
                        ]
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
                    "\t[晴芸,N762]糟了……炮管过热了……",
                    {
                        "type": "animate",
                        "name": "roar",
                        "loc": [
                            6,
                            3
                        ],
                        "async": true
                    },
                    "\t[狂暴天舌狗,E767]吼——\n你~是~我~的~\n我~要~活~活~舔~死~你~",
                    {
                        "type": "move",
                        "loc": [
                            6,
                            3
                        ],
                        "time": 200,
                        "keep": true,
                        "steps": [
                            "down:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "zhanji2",
                        "loc": [
                            6,
                            4
                        ]
                    },
                    {
                        "type": "move",
                        "loc": [
                            6,
                            4
                        ],
                        "time": 200,
                        "keep": true,
                        "steps": [
                            "up:1"
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "N2221_up",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "setBlock",
                        "number": "Ndebug009",
                        "loc": [
                            [
                                3,
                                2
                            ]
                        ],
                        "async": true
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            3,
                            2
                        ],
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "Ndebug009",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ],
                        "async": true
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            8,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "Ndebug008",
                        "loc": [
                            [
                                9,
                                2
                            ]
                        ],
                        "async": true
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            9,
                            2
                        ],
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "Ndebug008",
                        "loc": [
                            [
                                4,
                                5
                            ]
                        ],
                        "async": true
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            4,
                            5
                        ]
                    },
                    {
                        "type": "waitAsync"
                    },
                    "\t[2 2 2 1,N2221]除零者，炮决这狗东西！",
                    {
                        "type": "function",
                        "function": "function(){\nif (!core.isReplaying()) {\n\tvar curX = 8;\n\tvar interval = setInterval(function () {\n\t\tif (curX > 0) {\n\t\t\tcore.drawAnimate(\"fire2\", 6, 3);\n\t\t\tcore.playSound('smallExplosion.mp3');\n\t\t\tcurX -= 1;\n\t\t} else { clearInterval(interval) }\n\t}, 200);\n\tvar curY = 8;\n\tvar interval2 = setInterval(function () {\n\t\tif (curY > 0) {\n\t\t\tcore.drawAnimate(\"snipe\", 6, 3);\n\t\t\tcore.playSound('smallExplosion.mp3');\n\t\t\tcurY -= 1;\n\t\t} else { clearInterval(interval2) }\n\t}, 200);\n}\n}"
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 2000,
                        "speed": 10,
                        "power": 10,
                        "async": true
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
                        "name": "supernova",
                        "loc": [
                            6,
                            3
                        ],
                        "async": true
                    },
                    {
                        "type": "playBgm",
                        "name": "story2.mp3",
                        "keep": true
                    },
                    {
                        "type": "pauseBgm"
                    },
                    {
                        "type": "setCurtain",
                        "time": 1000
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
                        "type": "waitAsync"
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "Ch4_5G",
                        "loc": [
                            6,
                            7
                        ],
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
    [177,177,177,177,177,177,177,177,177,177,177,177,177],
    [177,177,746,  0,  0,179,179,179,  0,  0,746,177,177],
    [177,  0,  0,  0,  0,  0,747,  0,  0,  0,  0,  0,177],
    [177,  0,  0,  0,747,  0,  0,  0,747,  0,  0,  0,177],
    [177,179,  0,  0,  0,  0,  0,  0,  0,  0,  0,179,177],
    [177,179,  0,747,  0,  0,761,  0,  0,747,  0,179,177],
    [177,179,  0,  0,  0,  0,  0,  0,  0,  0,  0,179,177],
    [177,  0,  0,  0,747,  0,  0,  0,747,  0,  0,  0,177],
    [177,  0,  0,  0,  0,  0,747,  0,  0,  0,  0,  0,177],
    [177,179,746,  0,  0,  0,168,  0,  0,  0,746,179,177],
    [177,179,  0,177,177,177,126,177,177,177,  0,179,177],
    [177,  0,  0,177,177,177,  0,177,177,177,755,  0,177],
    [177,177,177,177,177,177,  0,177,177,177,177,177,177]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,130024,  0,  0,  0,  0,  0],
    [  0,  0,  0,130005,  0,  0,  0,  0,  0,130005,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,130006,  0,  0,  0,  0,  0,  0],
    [  0,  0,130024,  0,  0,  0,130014,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,130020,130021,  0,130022,130023,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,130007,  0,  0,  0,130024,  0,  0],
    [  0,  0,  0,  0,  0,  0,130015,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,130005,  0,  0,  0,  0,  0,130005,  0,  0,  0],
    [  0,  0,  0,  0,  0,130024,  0,  0,  0,  0, 93,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0, 93,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "flyPoint": [
        6,
        12
    ],
    "hard1_enemy_ratio": 95
}