main.floors.Village=
{
    "floorId": "Village",
    "title": "村庄",
    "name": "村庄",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "grass",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "moveHero",
            "time": 100,
            "steps": [
                "down:2"
            ]
        },
        {
            "type": "changePos",
            "direction": "right"
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[hero]\b[down,hero]（绿姐姐？？？）",
        {
            "type": "unfollow",
            "name": "hero3.png"
        },
        {
            "type": "show",
            "loc": [
                [
                    1,
                    1
                ]
            ]
        },
        {
            "type": "jump",
            "from": [
                1,
                1
            ],
            "to": [
                1,
                1
            ],
            "time": 300,
            "keep": true
        },
        {
            "type": "turnBlock",
            "direction": "right",
            "loc": [
                [
                    1,
                    1
                ]
            ]
        },
        "\t[晴芸,hero3]\b[down,1,1]总算回来啦！咦，那边好热闹的样子，要不要凑过去看一……",
        {
            "type": "moveHero",
            "time": 50,
            "steps": [
                "down:7",
                "right:6",
                "up:2"
            ]
        },
        {
            "type": "animate",
            "name": "E_sweat",
            "loc": [
                1,
                1
            ]
        },
        {
            "type": "move",
            "loc": [
                1,
                1
            ],
            "time": 130,
            "keep": true,
            "steps": [
                "down:8",
                "right:5",
                "up:2"
            ]
        },
        {
            "type": "turnBlock",
            "direction": "up",
            "loc": [
                [
                    6,
                    7
                ]
            ]
        },
        "\t[芳芷？,hero2]\b[down,8,1]很荣幸能够在这里宣布，第二届激励大赛正式开始！\n想参加决赛的不要忘记在日落前赶到皇极山哦~",
        {
            "type": "animate",
            "name": "heal",
            "loc": [
                8,
                1
            ],
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    1
                ]
            ],
            "remove": true,
            "async": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero",
            "async": true
        },
        "\t[hero]\b[down,hero]哎等等……好像已经晚了……而且只是个全息投影……",
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    3
                ],
                [
                    7,
                    3
                ],
                [
                    9,
                    3
                ],
                [
                    10,
                    3
                ],
                [
                    7,
                    4
                ],
                [
                    7,
                    5
                ],
                [
                    6,
                    5
                ],
                [
                    5,
                    5
                ],
                [
                    5,
                    4
                ],
                [
                    9,
                    4
                ],
                [
                    11,
                    4
                ],
                [
                    9,
                    5
                ],
                [
                    10,
                    5
                ],
                [
                    11,
                    5
                ]
            ],
            "remove": true,
            "async": true
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "E_question",
            "loc": "hero",
            "async": true
        },
        {
            "type": "changePos",
            "direction": "left"
        },
        "\t[hero]\b[down,hero]所以这里好像在举办什么激励大赛？",
        {
            "type": "turnBlock",
            "direction": "right",
            "loc": [
                [
                    6,
                    7
                ]
            ]
        },
        "\t[晴芸,hero3]\b[down,6,7]是吖是吖，这附近都是比赛场地呢。",
        "\t[hero]\b[down,hero]附近都是？包括咱们刚刚离开的停风林吗？",
        "\t[晴芸,hero3]\b[down,6,7]只包括一部分区域，咱们刚刚走过的地方都不算比赛场地内部。\n所以这一路上碰到的怪物才这么弱。",
        {
            "type": "animate",
            "name": "E_sweat",
            "loc": "hero",
            "async": true
        },
        "\t[hero]\b[down,hero]才这么……弱……\n要不是这徽章的力量我根本走不出来……更不用说你了……",
        "\t[晴芸,hero3]\b[down,6,7]相对的弱，相对的！\n所以这个比赛，姐姐会参加的吧？",
        {
            "type": "waitAsync",
            "excludeAnimates": true
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]\b[down,hero]我可以不参加吗？……",
        "\t[晴芸,hero3]\b[down,6,7]可是，有小道消息说，这次比赛的背后有一个\r[yellow]很大很大的阴谋\r！",
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[hero]\b[down,hero]什么？！",
        "\t[晴芸,hero3]\b[down,6,7]我也只是听说，具体什么情况并不清楚。",
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]\b[down,hero]好，这个比赛，我参加了！\n不过，我好像还不知道比赛规则之类的……",
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "jump",
            "from": [
                6,
                7
            ],
            "to": [
                6,
                7
            ],
            "time": 300,
            "keep": true
        },
        "\t[晴芸,hero3]\b[down,6,7]没关系，我知道呀！",
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[hero]\b[down,hero]你知道？",
        "\t[晴芸,hero3]\b[down,6,7]因，因为那边的木牌已经写的很清楚了嘛。",
        "\t[晴芸,hero3]\b[down,6,6]其实说起来也没有太多规则，参赛者们可以自由地在比赛区域探险、寻找宝藏，增强自身，最后赶到决赛场地进行擂台赛。\n大概就是这样，是不是很简单？",
        "\t[hero]\b[down,hero]确实简单。不过，我参赛不需要报名之类的手续吗？",
        {
            "type": "animate",
            "name": "E_love",
            "loc": [
                6,
                7
            ]
        },
        "\t[晴芸,hero3]\b[down,6,7]不用，比赛期间场地是完全开放的，你甚至可以拿到宝物之后把决赛\r[yellow]鸽了\r。\n听说上届就有不少智械听到\r[red]某家伙\r的名头就知难而退了，没有去参加决赛呢……",
        "\t[hero]\b[down,hero]明白了，我会尽力的。\n（只是，所谓的阴谋……还有出现在这里的绿姐姐……到底是怎么回事？）",
        {
            "type": "move",
            "loc": [
                6,
                7
            ],
            "time": 100,
            "steps": [
                "right:1"
            ]
        },
        {
            "type": "follow",
            "name": "hero3.png"
        },
        {
            "type": "moveHero",
            "steps": [
                "down:2",
                "left:2"
            ]
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        {
            "type": "changePos",
            "direction": "right"
        },
        "\t[hero]……你确定你还要跟着我吗？",
        "\t[晴芸,hero3]当然啦！人家也喜欢探险呀！",
        "\t[hero]那，你能帮上什么呢？",
        "\t[晴芸,hero3]我认识路！我之前经常在这一片区域玩的……",
        "\t[hero]还有吗？",
        "\t[晴芸,hero3]还有……其他的信息，比如宝藏的位置……",
        "\t[hero]感觉还是不够有吸引力啊……",
        {
            "type": "animate",
            "name": "E_angry",
            "loc": [
                6,
                9
            ],
            "async": true
        },
        "\t[晴芸,hero3]反正让我跟着你又没有什么坏处，我肯定不会拖后腿的！\n真要是遇到危险，你丢下我自己跑就行了！",
        {
            "type": "animate",
            "name": "E_sweat",
            "loc": "hero",
            "async": true
        },
        "\t[hero]好好好，我同意了。",
        {
            "type": "animate",
            "name": "E_love",
            "loc": [
                6,
                9
            ],
            "async": true
        },
        "\t[晴芸,hero3]太好啦，一起出发吧！\n先去停风林深处找宝藏吧！就在咱们相遇的位置附近。",
        {
            "type": "changePos",
            "direction": "left"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "openDoor",
            "loc": [
                6,
                1
            ],
            "floorId": "South1"
        },
        {
            "type": "waitAsync",
            "excludeAnimates": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "8,12": [
            "\t[村庄守卫,rogue]闲人勿入！",
            "\t[hero]（没必要到那边去……）"
        ],
        "11,6": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "core.getBlockId(11, 6) == \"recluse\"",
                    "true": [
                        "\t[系统提示]需要清理前面所有敌人。正在检测中……",
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.checkEnemy(\"South1\", \"East10\");\n}"
                        },
                        {
                            "type": "if",
                            "condition": "(flag:remainEnemyCount>0)",
                            "true": [
                                "共有${flag:remainEnemyCount}个敌人未清除。",
                                "剩余enemy:${flag:remainEnemyInfo}"
                            ],
                            "false": [
                                "检测通过！",
                                {
                                    "type": "hide"
                                }
                            ]
                        }
                    ],
                    "false": [
                        "\t[晴芸,hero3]那边是比赛场地之一的\r[yellow]花月道\r。\n姐姐现在的战斗力过去就是白给呢。",
                        {
                            "type": "animate",
                            "name": "E_unhappy",
                            "loc": "hero"
                        },
                        "\t[hero]我也感觉那边有很多强大的气息，暂时先不过去了。"
                    ]
                }
            ]
        },
        "5,1": [
            "\\c[20]第二届激励大赛须知\\c\n1. 友谊第一，比赛第二。本次大赛的目的是通过适当的对抗和竞争，让所有参赛者都获得实力的增长和荣誉的提升，并促进大家之间的交流。\n2. 概述：智械和械灵在比赛场地内与各种来自魔法界的生物战斗，并寻找各处的试炼空间获取奖励。决赛将在今天傍晚在\r[yellow]皇极山\r举行，胜者将获得超级丰厚的神秘奖励！\n3. 参赛条件：欢迎任何智械和械灵参加，无需报名，比赛场地开放后即可自由进入探索。\n4. 比赛场地范围：停风林深处、截浪滩、花月道、……",
            "\t[hero]这个比赛果然没什么规则，不知背后的阴谋到底是指什么呢……"
        ]
    },
    "changeFloor": {
        "1,0": {
            "floorId": "South10",
            "loc": [
                6,
                12
            ],
            "time": 800
        },
        "12,6": {
            "floorId": "East1",
            "loc": [
                0,
                6
            ],
            "time": 1000
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [50031, 91,50031,50031,50031,50031,50031,50031,50031,50031,50031,50031,50031],
    [50031,374,  0,  0,50031,129,  0,  0,336,  0,  0,  0,50031],
    [50031,  0,  0,  0,50031,  0,  0,  0,  0,  0,  0,  0,50031],
    [50031,  0,  0,  0,50031,  0,398,398,  0,534,532,  0,50031],
    [50031,  0,  0,  0,50031,398,  0,617,  0,533,  0,533,50031],
    [50031,  0,  0,  0,50031,398,613,621,  0,532,534,532,50031],
    [50031,  0,  0,  0,50031,  0,  0,  0,  0,  0,  0, 85, 94],
    [50031,  0,  0,  0,50031,  0,  0,  0,  0,  0,  0,  0,50031],
    [50031,  0,  0,  0,50031,  0,  0,  0,50112,50113,50114,50115,50116],
    [50031,  0,  0,  0,  0,  0,  0,  0,50120,50121,50122,50123,50124],
    [50031, 84,50031, 84,50031,  0,  0,  0,50128,50129,50130,50131,50132],
    [50031,331,50031, 21,50031,50031,  0,  0,50136,50137,50138,50139,50140],
    [50031,334,50031, 22, 21,50031,50031,  0,395,  0,  0,  0,  0]
],
    "bgmap": [
    [  0,146,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,146,  0,  0,  0,  0,  0,  0,  0,  0,  0,50002,  0],
    [  0,  0,  0,50001,  0,  0,147,147,147,147,147,  0,  0],
    [  0,  0,  0,  0,  0,  0,147,147,147,147,147,  0,  0],
    [  0,  0,  0,  0,  0,  0,147,147,147,147,147,  0,  0],
    [  0,  0,  0,  0,  0,  0,147,147,147,147,147,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,147,147],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,50001,  0,  0,  0,50001,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,147,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,147,147,147,147,147,147]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,50105,50106,50107,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "village.mp3",
    "flyPoint": [
        6,
        8
    ],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}