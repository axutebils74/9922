main.floors.MT20=
{
    "floorId": "MT20",
    "title": "主塔 20 层",
    "name": "主塔-20",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "area2.mp3",
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "boss2.mp3"
        },
        {
            "type": "loadBgm",
            "name": "area3.mp3"
        }
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(flag:B20F_boss_activated == 2)",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:B20F_boss_activated",
                    "value": "3"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.visitFloor(\"MT0\");\ncore.visitFloor(\"MT1\");\ncore.visitFloor(\"MT2\");\ncore.visitFloor(\"MT3\");\ncore.visitFloor(\"MT4\");\ncore.visitFloor(\"MT5\");\ncore.visitFloor(\"MT6\");\ncore.visitFloor(\"MT7\");\ncore.visitFloor(\"MT8\");\ncore.visitFloor(\"MT9\");\ncore.visitFloor(\"MT10\");\ncore.visitFloor(\"MT11\");\ncore.visitFloor(\"MT12\");\ncore.visitFloor(\"MT13\");\ncore.visitFloor(\"MT14\");\ncore.visitFloor(\"MT15\");\ncore.visitFloor(\"MT16\");\ncore.visitFloor(\"MT17\");\ncore.visitFloor(\"MT18\");\ncore.visitFloor(\"MT19\");\n}"
                },
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[hero]（呼……总算回来了……真不容易……）"
            ]
        }
    ],
    "parallelDo": "",
    "events": {
        "6,6": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    9
                ]
            },
            {
                "type": "playBgm",
                "name": "boss2.mp3",
                "keep": true
            },
            "\t[???,Thief]好啊，想不到你们还真的敢来自投罗网。",
            "\t[hero]（怎么感觉有点不对劲……）",
            "\t[芳芷,hero2]（确实……这个人的态度和之前在15F见到他时完全不同了，好像变得严肃了不少。）",
            "\t[???,Thief]从15F见到你们时我就疑惑，你们哪来的这么多钥匙，能够到达那里。",
            "\t[???,Thief]我故意放过你们，躲在这里的红门后面，想不到你们竟然还是进来了！而且我很确信整个区域都没有红钥匙！",
            "\t[???,Thief]说，你们的红钥匙从哪来的！",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[芳芷,hero2]啊这……从一个商人那里买来的。",
            "\t[???,Thief]哼，满嘴鬼话，老子从来没在这见过什么商人。",
            {
                "type": "animate",
                "name": "E_unhappy",
                "loc": "hero"
            },
            "\t[芳芷,hero2]啊？你没见过？可是……",
            "\t[???,Thief]算了，事到如今那已经不重要了。整个地上都没有红钥匙，那么你们这红钥匙必定来源于地下，也就是我圣匙帮的领地。",
            "\t[???,Thief]而且你们竟敢将它用来开门，更是罪上加罪。你们已经触犯我圣匙帮的\r[red]禁忌\r，我将在这里亲手解决你们。",
            "\t[窃匙大盗,Thief]\\c[20]记住，杀你者，圣匙帮，窃匙大盗！\\c",
            {
                "type": "setValue",
                "name": "flag:disableFly",
                "value": "1"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "6,2": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "core.hasItem('steelKey')",
                    "true": [
                        {
                            "type": "openDoor",
                            "loc": [
                                6,
                                2
                            ],
                            "needKey": true
                        }
                    ],
                    "false": [
                        "\t[hero]（打不开，只能去地下找钥匙了。）"
                    ]
                }
            ]
        },
        "6,1": [
            {
                "type": "if",
                "condition": "(core.hasItem('yellowKey') ||( core.hasItem('blueKey') || core.hasItem('redKey')))",
                "true": [
                    "\t[系统提示]你的身上竟然有非绿色的钥匙，真的是非常有想法。\n作者奖励你一个成就，钥匙我就帮你换成钱了。",
                    {
                        "type": "playSound",
                        "name": "buy.mp3"
                    },
                    {
                        "type": "setValue",
                        "name": "status:money",
                        "operator": "+=",
                        "value": "item:yellowKey*25 + item:blueKey*80"
                    },
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
                        "type": "choices",
                        "text": "\t[系统提示]获得成就\r[yellow]【以备后患？】\r！\n到达20F上楼梯时身上有非绿色的钥匙。\n然而并没有什么用处。",
                        "choices": [
                            {
                                "text": "？？？",
                                "action": []
                            }
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "flag:hard == 1 && !core.hasItem(\"skill0\")",
                "true": [
                    "\t[系统提示]哇，你竟然还没有买\\i[skill0]修复！\n放你过去，但因此对游戏体验产生的任何不良影响，作者概不负责。"
                ]
            },
            {
                "type": "confirm",
                "text": "第一章结束，你可以选择提交成绩并结束。\n选择取消则继续游戏。",
                "yes": [
                    {
                        "type": "win",
                        "reason": "Chap.1-通过第20层"
                    }
                ],
                "no": []
            },
            {
                "type": "autoText",
                "text": "第二章\n冲击塔顶",
                "time": 2000
            },
            {
                "type": "changeFloor",
                "floorId": ":next",
                "direction": "down",
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "6,5": [
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
                        "type": "setBlock",
                        "number": "thief_20"
                    },
                    "\t[窃匙大盗,Thief]哼，有点本事，不过还没完呢！"
                ],
                "false": [
                    {
                        "type": "setBlock",
                        "number": "thief",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setVolume",
                        "value": 0,
                        "time": 2000,
                        "async": true
                    },
                    "\t[窃匙大盗,Thief]\b[down,6,5]谔谔，啊啊啊啊啊啊！\n算你们厉害，不过你们休想继续往上走了！",
                    {
                        "type": "jump",
                        "from": [
                            6,
                            5
                        ],
                        "to": [
                            8,
                            2
                        ],
                        "time": 300,
                        "keep": true
                    },
                    {
                        "type": "jump",
                        "from": [
                            8,
                            2
                        ],
                        "to": [
                            6,
                            11
                        ],
                        "time": 300
                    },
                    {
                        "type": "setValue",
                        "name": "flag:20F_boss_finish",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:disableFly",
                        "value": "0"
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
                            3,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            7
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            7
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            9
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            0
                        ],
                        "floorId": "MT0"
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "playBgm",
                        "name": "area2.mp3"
                    },
                    {
                        "type": "setVolume",
                        "value": 90,
                        "time": 0
                    },
                    "\t[芳芷,hero2]哇，这下发财了！",
                    {
                        "type": "animate",
                        "name": "E_question",
                        "loc": "hero"
                    },
                    "\t[芳芷,hero2]你看他背后那么多好东西，他都不要啦！看得出来他真的很生气！",
                    {
                        "type": "animate",
                        "name": "E_sweat",
                        "loc": "hero"
                    },
                    "\t[芳芷,hero2]但是他刚才逃跑前把铁门钥匙带走了，前面有个铁门好像打不开的样子。接下来去哪啊？",
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    "\t[芳芷,hero2]去地下？不是吧不是吧不是吧，地下好黑我好怕怕……",
                    {
                        "type": "animate",
                        "name": "E_unhappy",
                        "loc": "hero"
                    },
                    "\t[芳芷,hero2]嘿嘿，开个玩笑，我怎么可能会怕呢。\n不过你要小心点，圣匙帮的人可比这些弟人啥的难对付多了。",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[芳芷,hero2]你说我们怎么惹到他了？嗯……这个……\n他刚才好像说，我们竟敢拿红钥匙用来开门？",
                    {
                        "type": "animate",
                        "name": "E_question",
                        "loc": "hero"
                    },
                    "\t[芳芷,hero2]呃……虽然我也觉得红钥匙就是用来开红门的，不过如果我们能像他那样直接跳过门的话，应该就可以省下钥匙了……",
                    {
                        "type": "animate",
                        "name": "E_unhappy",
                        "loc": "hero"
                    },
                    "\t[芳芷,hero2]还是别胡思乱想了，准备去地下层吧！",
                    {
                        "type": "waitAsync"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "4,2": [
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": "hero"
            },
            "\t[芳芷,hero2]哇，这个黑乎乎的东西看着不一般啊。",
            "\t[hero]（感觉自己变强了好多……而且，拿在手里就有一种异样的、很难形容的感觉。）",
            {
                "type": "if",
                "condition": "flag:hard == 2",
                "true": [
                    "\t[系统提示]基础攻防增加3点，并获得20%的基础攻防加成。",
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "operator": "+=",
                        "value": "3"
                    },
                    {
                        "type": "setValue",
                        "name": "status:def",
                        "operator": "+=",
                        "value": "3"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.plugin.addValpp('atk', 20);\ncore.plugin.addValpp('def', 20);\n}"
                    }
                ],
                "false": [
                    "\t[系统提示]获得10%的基础攻防加成。",
                    {
                        "type": "function",
                        "function": "function(){\ncore.plugin.addValpp('atk', 10);\ncore.plugin.addValpp('def', 10);\n}"
                    }
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [151,151,151,151,151,151,151,151,151,151,151,151,151],
    [151,334, 21, 34, 33,151, 87,151, 33, 34, 21,334,151],
    [151, 22,322,151,392,151, 86,151, 25,151,323, 21,151],
    [151,151, 68,151,151,151,  0,151,151,151, 68,151,151],
    [151,151,322, 85,  0,231, 85,240,  0, 85,323,151,151],
    [151, 20, 20, 20, 81, 20,269, 20, 81, 20, 20, 20,151],
    [151, 34,323, 20,  0,  0,  0,  0,  0, 20,322, 34,151],
    [151, 68,236, 20, 85, 20, 83, 20, 85, 20,236, 68,151],
    [151, 20, 82, 20, 33, 81, 31, 81, 33, 20, 82, 20,151],
    [151,240, 32, 20, 20, 20, 81, 20, 20, 20, 32,240,151],
    [151,322,233, 81,  0, 81, 32, 81,  0, 81,233,323,151],
    [151,231, 31, 20, 31, 20, 88, 20, 31, 20, 31,231,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151]
],
    "bgmap": [

],
    "fgmap": [

],
    "hard1_enemy_ratio": 85,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true,
    "weather": [
        "sun",
        5
    ]
}