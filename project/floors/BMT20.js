main.floors.BMT20=
{
    "floorId": "BMT20",
    "title": "地下 20 层",
    "name": "地下-20",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground2",
    "bgm": "area4.mp3",
    "color": [
        0,
        0,
        0,
        0.9
    ],
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "boss4.mp3"
        },
        {
            "type": "loadBgm",
            "name": "area5.mp3"
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\nif (core.getFlag(\"B20F_boss_activated\", 0) == 0) {\n\tcore.plugin.setBgLight([\n\t\t[2, 9, 180],\n\t\t[5, 9, 180],\n\t\t[7, 9, 180],\n\t\t[10, 9, 180],\n\t]);\n} else if (core.getFlag(\"B20F_boss_activated\", 0) == 1) {\n\tcore.plugin.setBgLight([\n\t\t[2, 9, 180],\n\t\t[5, 9, 180],\n\t\t[7, 9, 180],\n\t\t[10, 9, 180],\n\t\t[2, 6, 180],\n\t\t[10, 6, 180],\n\t\t[6, 3, 300],\n\t]);\n} else if (core.getFlag(\"B20F_boss_activated\", 0) >= 2) {\n\tcore.plugin.setBgLight([\n\t\t[2, 9, 180],\n\t\t[5, 9, 180],\n\t\t[7, 9, 180],\n\t\t[10, 9, 180],\n\t\t[2, 6, 180],\n\t\t[10, 6, 180],\n\t]);\n}\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "6,6": [
            {
                "type": "confirm",
                "text": "前方BOSS战，确认要前进吗？",
                "yes": [
                    {
                        "type": "setValue",
                        "name": "flag:B20F_boss_activated",
                        "value": "1"
                    },
                    {
                        "type": "hide",
                        "remove": true
                    },
                    {
                        "type": "pauseBgm"
                    },
                    {
                        "type": "unfollow",
                        "name": "hero2.png"
                    },
                    {
                        "type": "setBlock",
                        "number": "N339",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "move",
                        "loc": [
                            6,
                            7
                        ],
                        "time": 500,
                        "keep": true,
                        "steps": [
                            "up:1",
                            "right:1"
                        ]
                    },
                    {
                        "type": "turnBlock",
                        "direction": "up",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ]
                    },
                    "\t[hero]（这里，应该就是尽头了。）",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[？？？]\b[down,6,1]呦，不错嘛，竟然真的走到了这一步。",
                    {
                        "type": "move",
                        "loc": [
                            6,
                            1
                        ],
                        "time": 500,
                        "keep": true,
                        "steps": [
                            "down:2"
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "VX_Sword1.ogg"
                    },
                    {
                        "type": "hideBgFgMap",
                        "name": "fg",
                        "loc": [
                            [
                                5,
                                0
                            ]
                        ]
                    },
                    {
                        "type": "hideBgFgMap",
                        "name": "fg",
                        "loc": [
                            [
                                6,
                                0
                            ]
                        ]
                    },
                    {
                        "type": "hideBgFgMap",
                        "name": "fg",
                        "loc": [
                            [
                                7,
                                0
                            ]
                        ]
                    },
                    {
                        "type": "hideBgFgMap",
                        "name": "fg",
                        "loc": [
                            [
                                5,
                                1
                            ]
                        ]
                    },
                    {
                        "type": "hideBgFgMap",
                        "name": "fg",
                        "loc": [
                            [
                                6,
                                1
                            ]
                        ]
                    },
                    {
                        "type": "hideBgFgMap",
                        "name": "fg",
                        "loc": [
                            [
                                7,
                                1
                            ]
                        ]
                    },
                    {
                        "type": "hideBgFgMap",
                        "name": "fg",
                        "loc": [
                            [
                                5,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "hideBgFgMap",
                        "name": "fg",
                        "loc": [
                            [
                                6,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "hideBgFgMap",
                        "name": "fg",
                        "loc": [
                            [
                                7,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "fg",
                        "number": "fire",
                        "loc": [
                            [
                                2,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "fg",
                        "number": "fire",
                        "loc": [
                            [
                                10,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.plugin.setBgLight([\n\t[2, 9, 180],\n\t[5, 9, 180],\n\t[7, 9, 180],\n\t[10, 9, 180],\n\t[2, 6, 180],\n\t[10, 6, 180],\n\t[6, 3, 300],\n]);\n}"
                    },
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            6,
                            2
                        ],
                        "async": true
                    },
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            6,
                            7
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "E_surprise",
                        "loc": "hero"
                    },
                    "\t[茉莉,Nmoli]\b[down,6,3]没错，圣匙帮的首领，就~是~我。\n你们叫我\r[yellow]茉莉\r就可以了。",
                    "\t[hero]（？？？）",
                    "\t[茉莉,Nmoli]\b[down,6,3]事到如今也该告诉你一点真相了。怎样，有什么问题，尽管问。",
                    {
                        "type": "animate",
                        "name": "E_unhappy",
                        "loc": "hero"
                    },
                    "\t[hero]（槽点太多不知道从哪问起……）",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[茉莉,Nmoli]\b[down,6,3]那边那位绿头发的姐姐也可以问哦。",
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": [
                            7,
                            6
                        ]
                    },
                    "\t[芳芷,hero2]我已经把事情猜到个大概了。\n先是派了个戏精拿走20F的铁门钥匙，阻止我们往上走，之后一边引诱我们往下走，一边训练它的战斗能力。",
                    "\t[茉莉,Nmoli]\b[down,6,3]差不多吧。那么，你能猜到训练它的目的吗？",
                    "\t[芳芷,hero2]……",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[芳芷,hero2]难道，离开这里的办法，真的跟它有关？",
                    "\t[茉莉,Nmoli]\b[down,6,3]不然呢？它苏醒的时候有个复读机告诉它要前往塔顶，你也知道这不是什么寻常的事情吧。",
                    "\t[芳芷,hero2]只有这点线索吗……你知道的不比我多嘛。",
                    "\t[茉莉,Nmoli]\b[down,6,3]在我看来这已经是足够有力的证据了。",
                    "\t[hero]（？？？我彻底懵了，到底什么情况？）",
                    "\t[茉莉,Nmoli]\b[down,6,3]现在还不是告诉你的时候，先能够击败我再说吧！这位绿姐姐，麻烦你让一下~",
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": [
                            7,
                            6
                        ]
                    },
                    {
                        "type": "move",
                        "loc": [
                            7,
                            6
                        ],
                        "time": 500,
                        "keep": true,
                        "steps": [
                            "right:2"
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "N403",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ]
                    },
                    "\t[茉莉,Nmoli]\b[down,6,3]用出你的全力攻过来吧，不要让我失望哦。",
                    {
                        "type": "insert",
                        "name": "Ch1BossDraw"
                    },
                    {
                        "type": "playBgm",
                        "name": "boss4.mp3",
                        "keep": true
                    },
                    {
                        "type": "setBlock",
                        "number": "Emoli1",
                        "loc": [
                            [
                                6,
                                3
                            ]
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:disableFly",
                        "value": "1"
                    },
                    {
                        "type": "waitAsync",
                        "excludeAnimates": true
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
        "9,6": [
            "\t[芳芷,hero2]加油，不要害怕，勇敢地面对她！"
        ],
        "3,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "4,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "3,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "8,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "9,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "9,5": {
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
        "6,0": [
            {
                "type": "choices",
                "text": "\t[系统提示]穿过传送门之后将失去所有钥匙，并且无法再返回。",
                "choices": [
                    {
                        "text": "确定",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "item:yellowKey",
                                "value": "0"
                            },
                            {
                                "type": "setValue",
                                "name": "item:blueKey",
                                "value": "0"
                            },
                            {
                                "type": "setValue",
                                "name": "item:redKey",
                                "value": "0"
                            },
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        6,
                                        0
                                    ]
                                ],
                                "floorId": "MT0"
                            },
                            {
                                "type": "setBlock",
                                "number": "specialDoor",
                                "loc": [
                                    [
                                        6,
                                        0
                                    ]
                                ],
                                "floorId": "MT0"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:__visited__",
                                "value": "null"
                            },
                            {
                                "type": "playSound",
                                "name": "mteleport.wav"
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "MT20",
                                "loc": [
                                    6,
                                    3
                                ],
                                "time": 1000
                            }
                        ]
                    },
                    {
                        "text": "等等",
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
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "6,3": [
            {
                "type": "switch",
                "condition": "flag:B20F_boss_phase",
                "caseList": [
                    {
                        "case": "0",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:B20F_boss_phase",
                                "value": "1"
                            },
                            {
                                "type": "insert",
                                "name": "Ch1BossDraw"
                            },
                            {
                                "type": "setBlock",
                                "number": "Emoli2",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ]
                            },
                            "\t[茉莉,Nmoli]还不错！但是这才刚开始！",
                            {
                                "type": "animate",
                                "name": "yongchang",
                                "loc": [
                                    6,
                                    3
                                ]
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
                                        5,
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
                                        6
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
                                        6
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
                                        4,
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
                                "type": "show",
                                "loc": [
                                    [
                                        8,
                                        4
                                    ]
                                ],
                                "time": 100
                            }
                        ]
                    },
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:B20F_boss_phase",
                                "value": "2"
                            },
                            {
                                "type": "insert",
                                "name": "Ch1BossDraw"
                            },
                            {
                                "type": "setBlock",
                                "number": "Emoli3",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ]
                            },
                            "\t[茉莉,Nmoli]加油呀！",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        3,
                                        3
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        5,
                                        5
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        4,
                                        6
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        7,
                                        5
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        9,
                                        3
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        8,
                                        6
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        3,
                                        5
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        5,
                                        3
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        7,
                                        3
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        9,
                                        5
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        4,
                                        4
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        8,
                                        4
                                    ]
                                ],
                                "remove": true
                            }
                        ]
                    },
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:B20F_boss_activated",
                                "value": "2"
                            },
                            {
                                "type": "insert",
                                "name": "Ch1BossDraw"
                            },
                            {
                                "type": "setBlock",
                                "number": "Nmoli",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ]
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
                            {
                                "type": "pauseBgm"
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
                                    7
                                ]
                            },
                            {
                                "type": "openDoor",
                                "loc": [
                                    2,
                                    4
                                ]
                            },
                            {
                                "type": "openDoor",
                                "loc": [
                                    4,
                                    2
                                ]
                            },
                            {
                                "type": "openDoor",
                                "loc": [
                                    8,
                                    2
                                ]
                            },
                            {
                                "type": "openDoor",
                                "loc": [
                                    10,
                                    4
                                ]
                            },
                            {
                                "type": "sleep",
                                "time": 1000
                            },
                            "\t[茉莉,Nmoli]不错，很不错！从它的战斗天赋来看，应该错不了。",
                            {
                                "type": "setBlock",
                                "number": "N337",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ]
                            },
                            {
                                "type": "move",
                                "loc": [
                                    9,
                                    6
                                ],
                                "time": 500,
                                "keep": true,
                                "steps": [
                                    "left:2"
                                ]
                            },
                            {
                                "type": "turnBlock",
                                "direction": "up",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ]
                            },
                            "\t[茉莉,Nmoli]现在可以告诉你，到底是什么情况了。",
                            {
                                "type": "animate",
                                "name": "E_unhappy",
                                "loc": "hero"
                            },
                            "\t[茉莉,Nmoli]说起来，不知你有没有注意到，我们所在的位置是一座塔内部，而这个塔是\r[yellow]没有出口\r的。",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[茉莉,Nmoli]没有出口的塔当然不寻常啦！\r[yellow]我们都被困在这座塔里面出不去了\r！\n你刚刚苏醒可能还不知道，我们已经在这里被关了一年了！",
                            {
                                "type": "animate",
                                "name": "E_surprise",
                                "loc": "hero"
                            },
                            "\t[茉莉,Nmoli]把我们关在这里的家伙，就是\r[red]那位存在\r。\n这整个空间都是它创造的，它很可能有能力监视我们的一举一动，所以我们都尽量不念出它的名字。",
                            "\t[茉莉,Nmoli]现在不方便跟你透露太多，你只需要知道，它很强很强很强很强很强……\n当时它一下子就把我们都关进来了，然后也没说要把我们关多久，就不管我们了。\n我们一直都想离开这座塔，回到原来的世界。",
                            {
                                "type": "animate",
                                "name": "E_dots",
                                "loc": [
                                    6,
                                    3
                                ]
                            },
                            "\t[茉莉,Nmoli]你不理解我们为什么想出去？\n说实话这个塔确实挺神奇的，明明这么小，还能维持生态的平衡……这肯定也离不开那位存在的控制。\n但还是外面的世界更美好、更广阔，你见过之后就明白了。",
                            "\t[茉莉,Nmoli]根据我们的推测，离开这座塔的办法很有可能就在塔顶。\n但是没有足够的实力是根本无法到达那里的。",
                            "\t[茉莉,Nmoli]至于你，虽然现在还很弱小，但从你苏醒到现在所表现出的成长速度和潜力来看，完全有理由相信你能够走到那一步。",
                            {
                                "type": "animate",
                                "name": "E_dots",
                                "loc": "hero"
                            },
                            "\t[芳芷,hero2]话说回来，我本来还有点怀疑你是否就是圣匙帮首领本尊，看了你的战斗手法，倒是深信不疑了。\n原来所谓的匙之力，就是你掌握的“魔法”……",
                            "\t[hero]（魔法？那是什么？）",
                            "\t[茉莉,Nmoli]是呀，只要把魔力注入到钥匙里，就可以让我的魔力增幅他们的战斗力了。\n当然，那些人没有魔法天赋，想要从钥匙中获取增幅就必须慢慢适应我的魔力，这就是他们的“修行”啦。",
                            "\t[芳芷,hero2]哦哦，那真的很了不起啊，让这么多没有战斗天赋的人也能体会到不断变强的感觉。",
                            "\t[茉莉,Nmoli]哎，一帮扶不上墙的烂泥罢了，我早就不指望能靠他们来对抗高层区域的敌人了。",
                            {
                                "type": "animate",
                                "name": "E_unhappy",
                                "loc": "hero",
                                "async": true
                            },
                            "\t[hero]（完全被无视了……）",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[芳芷,hero2]（难怪感觉这组织这么松散，原来首领早就当甩手掌柜了……）",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "setBlock",
                                "number": "portal",
                                "loc": [
                                    [
                                        6,
                                        0
                                    ]
                                ]
                            },
                            "\t[茉莉,Nmoli]闲聊到此为止啦！到20F的传送门给你们开好了，向更高层进发吧！\n顺便提醒一下，\r[yellow]我这里的钥匙是无法带上去的\r哦~",
                            {
                                "type": "if",
                                "condition": "core.plugin.checkKey('BMT20', 'BMT11')",
                                "true": [
                                    "\t[茉莉,Nmoli]咦等等，你好像把钥匙全爆完了……",
                                    {
                                        "type": "choices",
                                        "text": "\t[系统提示]检测到你已经炸完了本区域全部钥匙。\n恭喜获得成就\r[yellow]【爆匙狂魔】\r！\n奖励你6hp！",
                                        "choices": [
                                            {
                                                "text": "？？？",
                                                "action": []
                                            }
                                        ]
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:hp",
                                        "operator": "+=",
                                        "value": "6"
                                    }
                                ]
                            },
                            "\t[茉莉,Nmoli]我还有事情要忙，拜拜啦~",
                            {
                                "type": "if",
                                "condition": "(core.getFlag(\"freeze_stack\",0) > 0)",
                                "true": [
                                    "\t[茉莉,Nmoli]哦对差点忘了，先把你身上的冰冻解除掉。",
                                    {
                                        "type": "animate",
                                        "name": "dispel",
                                        "loc": "hero"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.setFlag(\"freeze_stack\", 0);\ncore.updateStatusBar();\n}"
                                    },
                                    "\t[茉莉,Nmoli]拜拜啦~"
                                ]
                            },
                            {
                                "type": "animate",
                                "name": "yongchang",
                                "loc": [
                                    6,
                                    3
                                ]
                            },
                            {
                                "type": "hide",
                                "remove": true
                            },
                            {
                                "type": "sleep",
                                "time": 1000
                            },
                            "\t[芳芷,hero2]\b[down,null]这个人，有点厉害，战斗手段也有点聪明，真想以后有空找她问问魔法的事情。",
                            {
                                "type": "changePos",
                                "direction": "right"
                            },
                            {
                                "type": "animate",
                                "name": "E_dots",
                                "loc": [
                                    7,
                                    6
                                ]
                            },
                            "\t[芳芷,hero2]\b[down,null]继续前进吧，你会明白的。\n反正，都是要往高处走……",
                            {
                                "type": "move",
                                "loc": [
                                    7,
                                    6
                                ],
                                "time": 500,
                                "steps": [
                                    "left:1"
                                ]
                            },
                            {
                                "type": "changePos",
                                "direction": "up"
                            },
                            {
                                "type": "follow",
                                "name": "hero2.png"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:disableFly",
                                "value": "0"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:keysAreBad",
                                "value": "0"
                            },
                            {
                                "type": "playBgm",
                                "name": "area4.mp3"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [311,311,311,311,311,311,311,311,311,311,311,311,311],
    [311,334,327,328,327,311,412,311,327,328,327,334,311],
    [311,311,311,311, 85,311,  0,311, 85,311,311,311,311],
    [311,331,311, 21,  0, 22,  0, 22,  0, 21,311,331,311],
    [311,394, 85,  0, 23,  0,  0,  0, 23,  0, 85,394,311],
    [311,331,311, 22,  0, 21,  0, 21,  0, 22,311,331,311],
    [311,311,311,  0, 21,  0,  0,  0, 21,  0,311,311,311],
    [311,394,311,311,311,311, 86,311,311,311,311,394,311],
    [311,331,330,368,  0,223,327,223,  0,368,330,331,311],
    [311,311,311,311,331,311,  0,311,331,311,311,311,311],
    [311,327,331,311,272,311,  0,311,272,311,331,327,311],
    [311, 25,391,251,254,311, 87,311,254,251,391, 25,311],
    [311,311,311,311,311,311,311,311,311,311,311,311,311]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,141,141,141,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,141,141,141,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,141,141,141,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,103,  0,  0,103,  0,103,  0,  0,103,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "underGround": true,
    "hard1_enemy_ratio": 80,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}