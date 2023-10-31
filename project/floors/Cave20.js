main.floors.Cave20=
{
    "floorId": "Cave20",
    "title": "通幽径入口",
    "name": "通幽径入口",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "soil",
    "color": null,
    "firstArrive": [
        {
            "type": "disableShop",
            "id": "South8Shop"
        },
        {
            "type": "setValue",
            "name": "flag:lightRadius",
            "value": "100"
        },
        {
            "type": "setValue",
            "name": "flag:skill4_result",
            "value": "\"E527\""
        },
        {
            "type": "setVolume",
            "value": 0,
            "time": 1000,
            "async": true
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
        "\t[薇,N522]\b[down,null]好了，松手吧。",
        {
            "type": "waitAsync"
        },
        {
            "type": "moveHero",
            "time": 200,
            "steps": [
                "backward:2"
            ]
        },
        "\t[薇,N522]\b[down,null]这么害怕我干什么？",
        "\t[晴芸,hero3]\b[down,null]薇姐姐你体内的力量太强了，我隔着咕姐的身体都能感觉到！\n以前有没有过哪个不开眼的家伙想骚扰你，然后直接被你体内的力量化为灰烬了？",
        "\t[薇,N522]\b[down,null]才没有。",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]\b[down,null]算下来这是你第三次救我了。而且这次还救了这个人类女孩。\n所以你打算怎么做？你不会真的要跟着那个杀人魔王吧？",
        {
            "type": "move",
            "loc": [
                6,
                8
            ],
            "time": 300,
            "keep": true,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": [
                6,
                7
            ]
        },
        "\t[薇,N522]\b[down,null]我觉得幽从来没把我当回事。我不喜欢他高高在上的态度。\n但我也无法接受卑微而平凡地活下去。",
        "\t[薇,N522]\b[down,null]如果我不隐藏实力，人类始终还会把我当作威胁。\n无法根除人类内心中对于械灵的傲慢与偏见，即使现在除灵者暂时倒下了，谁又知道是否会有千千万万除灵者站起来呢？",
        "\t[薇,N522]\b[down,null]所以我觉得他没说错，如果我选择维护现有的秩序，就注定要接受卑微和平凡的生活。",
        {
            "type": "moveHero",
            "steps": [
                "up:1"
            ]
        },
        "\t[hero]\b[down,null]不，我不认为人类都仇视械灵。至少我熟悉的几个人类高层都不是这样，比如……",
        "\t[薇,N522]\b[down,null]你想说刚才被幽“解决”的人。的确，这里的人对械灵都很友好，但他们都不算什么高层。\n而且如果你离开这里到其他地区看看，就会知道，有无数的人，已经习惯了对械灵的无理由仇视。\n这是我在调查自己身世的路途上亲身体会过的。",
        "\t[薇,N522]\b[down,null]大多数人类对械灵的仇视不是一朝一夕的，这种仇恨是人类的掌权者长期给群众灌输而成的，如今已经根深蒂固。\n刚才的两个人心地善良、有能力、有地位，但是从整个人类社会的体量去考虑，他们什么都改变不了。",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]所以，在跟随幽和留在这里之间，你的选择是……",
        "\t[薇,N522]\b[down,null]……我还需要一点时间。",
        {
            "type": "playBgm",
            "name": "boss5.mp3",
            "keep": true
        },
        {
            "type": "setVolume",
            "value": 90,
            "time": 0
        },
        {
            "type": "setBlock",
            "number": "N2221_right",
            "loc": [
                [
                    4,
                    8
                ]
            ]
        },
        {
            "type": "animate",
            "name": "fire",
            "loc": [
                4,
                8
            ]
        },
        "\t[2 2 2 1,N2221]\b[down,null]真令我失望，维护这个烂到骨子里的世界，还是与我一同成为新世界的神，\n你竟然在这两个选项之间犹豫了。",
        {
            "type": "turnBlock",
            "direction": "left",
            "loc": [
                [
                    6,
                    7
                ]
            ]
        },
        {
            "type": "changePos",
            "direction": "left"
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[hero]\b[down,null]幽！你还没走！",
        "\t[2 2 2 1,N2221]\b[down,null]You？说什么英文，直接叫“你”不行吗？",
        "\t[hero]\b[down,null]这个笑话一点都不好笑……",
        "\t[2 2 2 1,N2221]\b[down,null]你以为我就这么放过你了，倒是有点好笑——\n皇极徽章的持有者，即使是我也不能大意。",
        "\t[2 2 2 1,N2221]\b[down,null]不过很可惜，上次我尚且能胜1188一手，这次我将你直接蹂躏，不费吹灰之力！",
        {
            "type": "changePos",
            "direction": "up"
        },
        {
            "type": "jump",
            "from": [
                4,
                8
            ],
            "to": [
                6,
                8
            ],
            "time": 500,
            "keep": true,
            "async": true
        },
        {
            "type": "move",
            "loc": [
                6,
                7
            ],
            "time": 100,
            "keep": true,
            "steps": [
                "down:2"
            ]
        },
        {
            "type": "turnBlock",
            "direction": "up",
            "loc": [
                [
                    6,
                    9
                ]
            ]
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "turnBlock",
            "direction": "down",
            "loc": [
                [
                    6,
                    8
                ]
            ]
        },
        {
            "type": "animate",
            "name": "crossattack",
            "loc": [
                6,
                8
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "yidaoliangduan",
            "loc": [
                6,
                9
            ],
            "async": true
        },
        {
            "type": "move",
            "loc": [
                6,
                8
            ],
            "time": 300,
            "keep": true,
            "steps": [
                "backward:2"
            ]
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": [
                6,
                6
            ]
        },
        "\t[2 2 2 1,N2221]\b[down,null]……有趣。就因为她和你长得像，你就要保她？",
        "\t[薇,N522]\b[down,null]……",
        {
            "type": "vibrate",
            "direction": "horizontal",
            "time": 500,
            "speed": 10,
            "power": 10,
            "async": true
        },
        {
            "type": "playSound",
            "name": "048-Explosion01.ogg"
        },
        "\t[2 2 2 1,N2221]\b[down,null]你总是这样！把自己的同情倾注给弱者，不管它们是否配得上！\n强者也是需要关爱的！",
        {
            "type": "waitAsync"
        },
        "\t[晴芸,hero3]\b[down,null]（喂，我怎么感觉他在吃醋……）",
        "\t[薇,N522]\b[down,null]不，她不是弱者，我非常看好她的潜力。而且——\n她能给我亲切感，你给不了。",
        {
            "type": "setVolume",
            "value": 0,
            "time": 2000,
            "async": true
        },
        "\t[2 2 2 1,N2221]\b[down,null]是吗，原来你是这么想的吗……",
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[2 2 2 1,N2221]\b[down,null]……呵。正好。",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[2 2 2 1,N2221]\b[down,null]既然你这么高看她，我们打个赌如何？",
        {
            "type": "waitAsync"
        },
        "\t[2 2 2 1,N2221]\b[down,null]我用出自己2.221%的实力，对她发起决斗！\n若是我输了，就证明她确实值得你正眼相看，我就放过她！",
        "\t[薇,N522]\b[down,null]2.221%？你如何定义你发挥的实力比例？",
        "\t[2 2 2 1,N2221]\b[down,null]我在决斗中这样……",
        {
            "type": "animate",
            "name": "E_dots",
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": [
                6,
                9
            ]
        },
        "\t[薇,N522]\b[down,null]你若是输了，就不能再找她的麻烦。",
        "\t[2 2 2 1,N2221]\b[down,null]一言为定。",
        "\t[薇,N522]\b[down,null]我盯着你，你一定要按照说好的去做，不要失信。",
        "\t[2 2 2 1,N2221]\b[down,null]哼，那是当然。",
        "\t[hero]\b[down,null]看来这个赌局，我没有拒绝的权力了。",
        "\t[薇,N522]\b[down,null]这是你必须迈过的一关。上。",
        {
            "type": "unfollow",
            "name": "hero3.png"
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
            "type": "jumpHero",
            "loc": [
                6,
                8
            ],
            "time": 500
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
                "down:2",
                "left:1"
            ]
        },
        {
            "type": "turnBlock",
            "direction": "up",
            "loc": [
                [
                    5,
                    11
                ]
            ]
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                6,
                10
            ]
        },
        {
            "type": "function",
            "function": "function(){\ncore.values.animateSpeed = 365;\n}"
        },
        {
            "type": "playBgm",
            "name": "boss2221.mp3",
            "keep": true
        },
        {
            "type": "setVolume",
            "value": 90,
            "time": 0
        },
        "\t[2 2 2 1,N2221]\b[down,null]我从你身上感觉到了有趣的“情绪”。你想说什么？",
        "\t[hero]\b[down,null]你为什么要杀害绿姐姐和真正的2221？",
        "\t[2 2 2 1,N2221]\b[down,null]哦？你这么关心她们？\n我可没时间用来浪费在无关紧要的人身上，要打就快点，我赶时间。",
        {
            "type": "animate",
            "name": "E_angry",
            "loc": "hero",
            "async": true
        },
        "\t[hero]\b[down,null]我现在，只想送你下地狱。",
        {
            "type": "waitAsync"
        },
        "\t[2 2 2 1,N2221]\b[down,null]哈哈哈哈，让我看看你有多少本事！",
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
        {
            "type": "animate",
            "name": "yongchang",
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "setBlock",
            "number": "E629",
            "loc": [
                [
                    6,
                    6
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "E627",
            "loc": [
                [
                    7,
                    4
                ],
                [
                    8,
                    7
                ],
                [
                    5,
                    8
                ],
                [
                    4,
                    5
                ]
            ]
        },
        {
            "type": "animate",
            "name": "fire",
            "loc": [
                7,
                4
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "fire_mute",
            "loc": [
                8,
                7
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "fire_mute",
            "loc": [
                5,
                8
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "fire_mute",
            "loc": [
                4,
                5
            ]
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "setValue",
            "name": "flag:Chap3_boss",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:Chap3_boss_bomb_count",
            "value": "4"
        },
        {
            "type": "setValue",
            "name": "item:skill5",
            "value": "0"
        },
        "\t[系统提示]受到至尊法则的压制，暂时无法使用\\i[skill5]鸽化。"
    ],
    "eachArrive": [],
    "parallelDo": "if (core.getFlag(\"Chap3_boss\", 0) == 1) {\n\tcore.createCanvas(\"Chap3_boss_bomb_canvas\", 0, 0, 480, 480, 104);\n\tcore.fillBoldText(\"Chap3_boss_bomb_canvas\", \"场上爆弹总数：\" + core.getFlag(\"Chap3_boss_bomb_count\", 0), 78, 406, core.getFlag(\"Chap3_boss_phase\", 0) == 0 ? \"#FFFF00\" : \"#FF0000\", \"#000000\", \"20px Verdana\");\n\tif (core.getFlag(\"Chap3_boss_phase\", 0) == 0) {\n\t\tcore.fillBoldText(\"Chap3_boss_bomb_canvas\", \"召唤cd：\" + (3 - core.getFlag(\"make_E627_cd\", 0)), 268, 406, \"#FFFF00\", \"#000000\", \"20px Verdana\");\n\t}\n}",
    "events": {
        "6,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
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
            "data": [
                {
                    "type": "choices",
                    "text": "\t[第三章计分点,X30023]第三章结束，选择你要进行的操作：",
                    "choices": [
                        {
                            "text": "钥匙/能量换血",
                            "action": [
                                {
                                    "type": "openShop",
                                    "id": "Chap3End",
                                    "open": true
                                }
                            ]
                        },
                        {
                            "text": "提交成绩",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "core.itemCount(\"greenKey\") < 99",
                                    "true": [
                                        {
                                            "type": "win",
                                            "reason": "Chap.3-咸鱼",
                                            "norank": 1
                                        }
                                    ],
                                    "false": [
                                        {
                                            "type": "if",
                                            "condition": "core.getFlag(\"Chap3_talent_type\", 0) == 10",
                                            "true": [
                                                {
                                                    "type": "win",
                                                    "reason": "Chap.3-旅行"
                                                }
                                            ],
                                            "false": [
                                                {
                                                    "type": "if",
                                                    "condition": "core.getFlag(\"Chap3_talent_type\", 0) == 11",
                                                    "true": [
                                                        {
                                                            "type": "win",
                                                            "reason": "Chap.3-探险"
                                                        }
                                                    ],
                                                    "false": [
                                                        {
                                                            "type": "if",
                                                            "condition": "core.getFlag(\"Chap3_talent_type\", 0) == 12",
                                                            "true": [
                                                                {
                                                                    "type": "win",
                                                                    "reason": "Chap.3-开拓"
                                                                }
                                                            ],
                                                            "false": [
                                                                {
                                                                    "type": "lose",
                                                                    "reason": "作弊"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "离开",
                            "action": []
                        }
                    ]
                }
            ]
        },
        "6,0": [
            {
                "type": "choices",
                "text": "\t[hero]对了，话说回来，我们要去哪？",
                "choices": [
                    {
                        "text": "前往皇极山",
                        "action": [
                            "\t[hero]嗯，现在就赶往决赛场地阻止幽吧！",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "9922前往位于皇极山的决赛场地，但并没有足够的能力阻止2 2 2 1。\n然后它暴毙了。",
                            {
                                "type": "lose",
                                "reason": ""
                            }
                        ]
                    },
                    {
                        "text": "前往格沃堡",
                        "action": [
                            "\t[hero]以我现在的实力，如果直接去皇极山正面与幽抗衡，也不过是以卵击石而已。\n还是听她的建议吧。我感觉她对我们还是友善的，我相信她。",
                            "\t[晴芸,hero3]好耶，冲吖~",
                            {
                                "type": "insert",
                                "name": "第三章结束"
                            }
                        ]
                    },
                    {
                        "text": "再想想",
                        "condition": "!switch:A",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
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
    "changeFloor": {},
    "afterBattle": {
        "6,6": [
            {
                "type": "if",
                "condition": "flag:last_battle_enemyId != \"E629\"",
                "true": [
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:Chap3_boss == 1)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nvar end = true;\nvar is_first = true;\nfor (var i = 0; i < 13; ++i) {\n\tfor (var j = 0; j < 13; ++j) {\n\t\tif (core.getBlockId(i, j) == \"E627\") {\n\t\t\tend = false;\n\t\t}\n\t\tif (core.getBlockId(i, j) == \"E628\") {\n\t\t\tend = false;\n\t\t\tcore.setBlock(\"E627\", i, j);\n\t\t\tif (is_first) {\n\t\t\t\tcore.drawAnimate(\"fire\", i, j);\n\t\t\t\tis_first = false;\n\t\t\t} else {\n\t\t\t\tcore.drawAnimate(\"fire_mute\", i, j);\n\t\t\t}\n\t\t}\n\t}\n}\ncore.drawAnimate(\"supernova\", 6, 6);\nif (end) {\n\tcore.addFlag(\"Chap3_boss\", 1);\n}\n}"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:Chap3_boss ==2)",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.status.hero.money > 0",
                        "true": [
                            {
                                "type": "choices",
                                "text": "\t[系统提示]恭喜你获得成就【省教王中王】！\n第三章末尾击败2 2 2 1时金钱大于0。\n没有奖励，并且没收你身上的所有金钱。",
                                "choices": [
                                    {
                                        "text": "？？？",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "value": "0"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.deleteCanvas(\"Chap3_boss_bomb_canvas\");\n}"
                    },
                    {
                        "type": "insert",
                        "name": "第三章末尾"
                    },
                    {
                        "type": "setVolume",
                        "value": 0,
                        "time": 2000,
                        "async": true
                    },
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 1500,
                        "speed": 10,
                        "power": 10,
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
                        "time": 1000
                    },
                    {
                        "type": "setBlock",
                        "number": "N2221",
                        "loc": [
                            [
                                6,
                                3
                            ]
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "changePos",
                        "direction": "up"
                    },
                    {
                        "type": "jumpHero",
                        "loc": [
                            6,
                            8
                        ],
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 1000
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
                    "\t[2 2 2 1,N2221]\b[this,6,3]你赢了。我愿赌服输，我放过你。",
                    "\t[2 2 2 1,N2221]\b[this,6,3]不过，我也达成目标了。就在刚刚，皇极徽章被我扔到了空间乱流之中，你不可能再找到它了。",
                    {
                        "type": "animate",
                        "name": "E_surprise",
                        "loc": "hero"
                    },
                    "\t[2 2 2 1,N2221]\b[this,6,3]别太惊讶，我刚才在你身上留下的手段不止于此……\n比如你现在身上的钥匙，也全都被我封印了！哈哈哈哈！",
                    "\t[2 2 2 1,N2221]\b[this,6,3]22号械灵，跟随我与否，你还是再仔细考虑考虑吧。\n哈哈哈哈！告辞！",
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
                        "name": "fire",
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
                    {
                        "type": "changePos",
                        "direction": "down"
                    },
                    {
                        "type": "moveHero",
                        "steps": [
                            "down:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "E_unhappy",
                        "loc": "hero",
                        "async": true
                    },
                    "\t[hero]\b[this,hero]……情况很不妙，不仅皇极徽章没了、身上的钥匙被他废了，甚至，就连能力都损失了一小部分……",
                    {
                        "type": "animate",
                        "name": "E_love",
                        "loc": [
                            7,
                            11
                        ],
                        "async": true
                    },
                    "\t[晴芸,hero3]\b[this,7,11]没关系！刚才你们观看 VR 的时候，我悄悄地顺出来一个好东西，它一定能代替皇极徽章的作用！",
                    "\t[hero]\b[this,hero]喂喂，偷东西不好吧！",
                    "\t[晴芸,hero3]\b[this,7,11]这……这怎么能叫偷！这叫抢救！\n我不拿，它就随着刚才的爆炸被埋在地底了！",
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "turnBlock",
                        "direction": "right",
                        "loc": [
                            [
                                5,
                                11
                            ]
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[薇,N522]\b[this,5,11]是吗，我看看。",
                    {
                        "type": "turnBlock",
                        "direction": "left",
                        "loc": [
                            [
                                7,
                                11
                            ]
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
                            5,
                            11
                        ]
                    },
                    "\t[薇,N522]\b[this,5,11]嗯……不错。但还远远不够。",
                    {
                        "type": "animate",
                        "name": "E_unhappy",
                        "loc": "hero"
                    },
                    "\t[hero]\b[this,hero]那，那怎么办……",
                    "\t[薇,N522]\b[this,5,11]我建议你们直接前往\r[yellow]格沃堡\r。",
                    "\t[hero]\b[this,hero]？？？那不是械灵的老巢吗？\n还是说，你打算带我们一起去？",
                    "\t[薇,N522]\b[this,5,11]并不。\n不管你接下来有什么打算，都祝你好运。\n我还有别的事情，告辞。",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                5,
                                11
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "animate",
                        "name": "light2",
                        "loc": [
                            5,
                            11
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "jump.mp3"
                    },
                    {
                        "type": "jump",
                        "from": [
                            7,
                            11
                        ],
                        "dxy": [
                            0,
                            0
                        ],
                        "time": 300,
                        "keep": true,
                        "async": true
                    },
                    "\t[晴芸,hero3]\b[this,7,11]好耶！我们出发吧！",
                    {
                        "type": "waitAsync"
                    },
                    "\t[hero]\b[this,hero]你还要跟着？",
                    "\t[晴芸,hero3]\b[this,7,11]我有预感，这个世界马上就要被幽搅得天翻地覆了，只有跟在姐姐身边才是最安全的，对吧？",
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    {
                        "type": "move",
                        "loc": [
                            7,
                            11
                        ],
                        "time": 100,
                        "steps": [
                            "left:1",
                            "up:2"
                        ]
                    },
                    {
                        "type": "follow",
                        "name": "hero3.png"
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                10,
                                11
                            ]
                        ],
                        "time": 500
                    },
                    "\t[系统提示]你现在可以到右下角的电脑处将钥匙换成分数并提交成绩。\n或者直接往上走，进入下一章。\n进入下一章的时候会清空身上的非绿色钥匙，并重置血量和能量。",
                    {
                        "type": "playBgm",
                        "name": "area12.mp3"
                    }
                ],
                "false": [
                    {
                        "type": "setBlock",
                        "number": "E629",
                        "loc": [
                            [
                                6,
                                6
                            ]
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
    [149,149,149,149,149,149, 91,149,149,149,149,149,149],
    [149,149,149,149,149,149, 85,149,149,149,149,149,149],
    [90027,90028,  0,  0,  0,  0,  0,  0,  0,  0,  0,90027,90028],
    [149,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,149],
    [149,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,149],
    [149,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,149],
    [149,  0,  0,  0,  0,  0,629,  0,  0,  0,  0,  0,149],
    [149,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,149],
    [149,  0,  0,  0,  0,  0,521,  0,  0,  0,  0,  0,149],
    [149,149,  0,  0,  0,  0,  0,  0,  0,  0,  0,149,149],
    [149,149,149,149,149,149,  0,149,149,149,149,149,149],
    [90027,90028,  0,  0,  0,  0,  0,390,  0,  0,30023,90027,90028],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,90005,  0,90005,  0,90005,  0,90005,  0,90005,  0,  0],
    [  0,90005,  0,90005,  0,90005,  0,90005,  0,90005,  0,90005,  0],
    [  0,  0,90005,  0,90005,  0,90005,  0,90005,  0,90005,  0,  0],
    [  0,90005,  0,90005,  0,90005,  0,90005,  0,90005,  0,90005,  0],
    [  0,  0,90005,  0,90005,  0,90005,  0,90005,  0,90005,  0,  0],
    [  0,90005,  0,90005,  0,90005,  0,90005,  0,90005,  0,90005,  0],
    [  0,  0,90005,  0,90005,  0,90005,  0,90005,  0,90005,  0,  0],
    [  0,  0,  0,90005,  0,90005,  0,90005,  0,90005,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [90019,90020,  0,  0,  0,  0,  0,  0,  0,  0,  0,90019,90020],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [90019,90020,  0,  0,  0,  0,  0,  0,  0,  0,  0,90019,90020],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

],
    "hard1_enemy_ratio": 100,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "bgm": null
}