main.floors.Ch4_120=
{
    "floorId": "Ch4_120",
    "title": "柏兰大道-8",
    "name": "柏兰大道-8",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "T754",
    "bgm": "area20.mp3",
    "color": [
        255,
        0,
        0,
        0.1
    ],
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "area21.mp3"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,9": [
            {
                "type": "function",
                "function": "function(){\ncore.hideBgFgMap(\"bg2\", [6, 9]);\n}"
            },
            "\t[hero]\b[down,null]这附近的火海，都是你造成的吧？",
            "\t[鸠炎,E882]\b[down,null]我所到之处都是一片火海，大家都讨厌我。\n但我真的不是故意的，我控制不住自己。",
            "\t[hero]\b[down,null]你也是从外界来的第零公民？",
            "\t[鸠炎,E882]\b[down,null]第零公民？你是说封印我的那帮家伙吗？\n我跟他们不是一路人。而且事实恰恰相反，我要让他们为封印我付出代价！",
            "\t[hero]\b[down,null]这样可太好了，我知道附近有个叫福博的第零公民，我们一起去把这罪大恶极的胖子干掉。",
            "\t[鸠炎,E882]\b[down,null]不，那可不行，以多欺少算不上本事，而且我不喜欢与人合作。\n福博是吧？我要在与他单对单的情况下把他干掉，证明他是个废物！",
            "\t[hero]\b[down,null]？？？",
            "\t[鸠炎,E882]\b[down,null]你太弱了，无法完成这个使命。\n把你的力量都交给我吧，我来替你完成你的心愿！",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "6,2": [
            "\t[系统提示]需要清理前面所有敌人。正在检测中……",
            {
                "type": "function",
                "function": "function(){\ncore.plugin.checkEnemy(\"Ch4_113\", \"Ch4_120\");\n}"
            },
            {
                "type": "if",
                "condition": "(flag:remainEnemyCount>1)",
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
                    "检测通过！\n剩余敌人：${flag:remainEnemyInfo}",
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
        "6,12": [
            {
                "type": "if",
                "condition": "(!flag:alone)",
                "true": [
                    {
                        "type": "moveHero",
                        "steps": [
                            "backward:1"
                        ]
                    },
                    "\t[hero]\b[up,hero]道路已经打通了，赶快回去把晴芸带上吧。"
                ],
                "false": [
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    "\t[hero]\b[up,hero]……又一次，一个人了。",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[hero]\b[up,hero]我这是怎么了……这明明应该是个幻境，但是为什么……\n在确认她离去以后，忍不住多看了几眼……",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[hero]\b[up,hero]……继续，前进。",
                    {
                        "type": "changeFloor",
                        "floorId": "Ch4_121",
                        "loc": [
                            6,
                            0
                        ],
                        "time": 1000
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "Ch4_119",
            "loc": [
                7,
                12
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,6": [
            {
                "type": "jumpHero",
                "loc": [
                    6,
                    8
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            {
                "type": "animate",
                "name": "fire",
                "loc": [
                    6,
                    5
                ],
                "async": true
            },
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
                "type": "hide",
                "loc": [
                    [
                        6,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "setBlock",
                "number": "E882",
                "loc": [
                    [
                        6,
                        6
                    ]
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    6
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "up:1"
                ]
            },
            {
                "type": "waitAsync"
            },
            "\t[鸠炎,E882]\b[down,null]不错……你很强……\n我宣布……你通过了我的考验……",
            "\t[hero]\b[down,null]非要打一架，何必呢……",
            "\t[鸠炎,E882]\b[down,null]你……有资格……接收我的力量……",
            {
                "type": "animate",
                "name": "rage_buff",
                "loc": "hero"
            },
            "\t[hero]\b[down,null]？？",
            "\t[系统提示]\b[down,null]技能获得了增强。\n小技能减少敌人的攻防增加至\r[yellow]150w\r点。\n\r[#e525ff]【奥义】毁 天 灭 地\r减少攻防增加至\r[yellow]250w\r点，并且每次战斗后，奥义消耗的能量减少\r[yellow]100\r点。",
            {
                "type": "setValue",
                "name": "flag:skill10_ddef",
                "value": "1500000"
            },
            {
                "type": "setValue",
                "name": "flag:skill12_datk",
                "value": "1500000"
            },
            {
                "type": "setValue",
                "name": "flag:skill13_datk",
                "value": "2500000"
            },
            {
                "type": "setValue",
                "name": "flag:skill13_ddef",
                "value": "2500000"
            },
            {
                "type": "setValue",
                "name": "flag:skill13_cost_reduce",
                "value": "100"
            },
            {
                "type": "sleep",
                "time": 500
            },
            "\t[鸠炎,E882]\b[down,null]你……一定要……干死……他们……",
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
                "name": "explosion_small",
                "loc": [
                    6,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "explosion",
                "loc": [
                    6,
                    5
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    3
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
                "type": "openDoor",
                "loc": [
                    2,
                    9
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    2,
                    10
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    10,
                    9
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    10,
                    10
                ]
            },
            "\t[hero]\b[down,null]……这人好奇怪。\n不过，我会完成你的心愿的。这本来也是我要做的事情，而且你给我的感觉不是很坏。",
            {
                "type": "setValue",
                "name": "flag:afterBoss",
                "value": "1"
            },
            {
                "type": "waitAsync"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [861,861,861,861,861,861,  0,861,861,861,861,861,861],
    [569,569,569,569, 84,  0,  0,  0, 84,569,569,569,569],
    [ 84,861, 83,861,861,861,126,861,861,861, 83,861, 84],
    [881,881,881,861,861,  0, 85,  0,861,861,881,881,881],
    [861,861,861,861,861,  0,  0,  0,861,861,861,861,861],
    [150423,861,  0,  0,  0,861,861,861,  0,  0,  0,861,150422],
    [150431,861,  0,861,  0,861,882,861,  0,861,  0,861,150430],
    [150431,861,  0,861,  0,  0,  0,  0,  0,861,  0,861,150430],
    [150431,861,  0,  0,861,861,861,861,861,  0,  0,861,150430],
    [150439,861, 85,  0,  0,  0,  0,  0,  0,  0, 85,861,150438],
    [861,861, 85,861,861,861,  0,861,861,861, 85,861,861],
    [861,569,569,569,569,861, 85,861,569,569,569,569,861],
    [861,861,861,861,861,861,  0,861,861,861,861,861,861]
],
    "hard1_enemy_ratio": 95,
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
        0
    ],
    "upFloor": [
        6,
        12
    ]
}