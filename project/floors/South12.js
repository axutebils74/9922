main.floors.South12=
{
    "floorId": "South12",
    "title": "停风林边缘",
    "name": "停风林边缘",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "grass",
    "bgm": "area8.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,4": [
            {
                "type": "confirm",
                "text": "接下来是一段剧情，是否跳过？",
                "yes": [],
                "no": [
                    {
                        "type": "setBlock",
                        "number": "hero3",
                        "loc": [
                            [
                                6,
                                3
                            ]
                        ]
                    },
                    {
                        "type": "unfollow",
                        "name": "hero3.png"
                    },
                    {
                        "type": "animate",
                        "name": "E_question",
                        "loc": "hero"
                    },
                    "\t[hero]咦，有一颗白捡的黄宝石？",
                    "\t[晴芸,hero3]刚才路上也看到过几颗，似乎性质和其他宝石很不一样。",
                    "\t[hero]没错，其中蕴含的力量十分强大，而且我正好有办法用上它。",
                    "\t[晴芸,hero3]诶，这么厉害吗！",
                    {
                        "type": "show",
                        "loc": [
                            [
                                4,
                                6
                            ],
                            [
                                8,
                                6
                            ],
                            [
                                5,
                                7
                            ],
                            [
                                7,
                                7
                            ],
                            [
                                6,
                                8
                            ]
                        ],
                        "time": 100
                    },
                    {
                        "type": "animate",
                        "name": "heal",
                        "loc": [
                            6,
                            8
                        ]
                    },
                    "\t[除灵者Ⅱ型,N515]\b[down,6,7]当场抓获。你们刚才的谈话已被记录。",
                    "\t[除灵者Ⅰ型,N514]\b[down,8,6]蓝发目标疑似械灵，准备清除。",
                    "\t[除灵者Ⅰ型,N514]\b[down,5,7]粉发目标是人类，即刻远离。",
                    {
                        "type": "animate",
                        "name": "E_unhappy",
                        "loc": [
                            6,
                            3
                        ]
                    },
                    "\t[晴芸,hero3]喂喂喂，你们在说什么？",
                    "\t[除灵者Ⅰ型,N514]\b[down,7,7]准备击毙目标，请即刻远离。",
                    {
                        "type": "animate",
                        "name": "E_angry",
                        "loc": [
                            6,
                            3
                        ],
                        "async": true
                    },
                    {
                        "type": "jump",
                        "from": [
                            6,
                            3
                        ],
                        "dxy": [
                            0,
                            0
                        ],
                        "time": 300,
                        "keep": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    "\t[晴芸,hero3]不行！你们这么不讲道理，我看你们才应该被击毙！",
                    "\t[除灵者Ⅱ型,N515]\b[down,6,7]清理械灵是我们的任务，请你不要妨碍。",
                    "\t[晴芸,hero3]姐姐刚才也干掉了一个械灵呢！所以说起来她还帮了你们的忙，你们就这样对她？",
                    {
                        "type": "animate",
                        "name": "E_sweat",
                        "loc": "hero"
                    },
                    "\t[hero]（等等，现在到底什么情况……）",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[除灵者Ⅱ型,N515]\b[down,6,7]那又如何？械灵内部本就经常自相残杀，如同养蛊一般，特别是低等械灵，完全就是高等械灵的养料。",
                    "\t[除灵者Ⅱ型,N515]\b[down,6,7]上届比赛时候的械灵之王“\r[red]幽\r”就已经恐怖如斯，这与那些不计其数的被他击杀、吸收的低等械灵脱不了联系。",
                    "\t[hero]等一下，就算我击杀低等械灵不能证明什么，你们又为何认定我是械灵？",
                    "\t[除灵者Ⅱ型,N515]\b[down,6,7]因为黄宝石。看来你自己都不知道，只有你们这些该死的械灵才能吸收黄宝石的力量。",
                    {
                        "type": "animate",
                        "name": "E_unhappy",
                        "loc": "hero"
                    },
                    "\t[hero]这……我本来没有吸收黄宝石的能力的，只是因为偶然捡到一个增强模块……",
                    {
                        "type": "jump",
                        "from": [
                            6,
                            3
                        ],
                        "dxy": [
                            0,
                            0
                        ],
                        "time": 300,
                        "keep": true,
                        "async": true
                    },
                    {
                        "type": "playSound",
                        "name": "jump.mp3"
                    },
                    "\t[晴芸,hero3]对对对，我可以作证！",
                    {
                        "type": "waitAsync"
                    },
                    "\t[除灵者Ⅰ型,N514]\b[down,7,7]（什么模块？没听说过……）",
                    "\t[除灵者Ⅱ型,N515]\b[down,6,7]如果这样的话也好办，让我们把它拆了取出这个增强模块，再让我们完成验证即可。",
                    "\t[晴芸,hero3]你们这……简直就是强盗！",
                    "\t[除灵者Ⅱ型,N515]\b[down,6,7]看来你还是不准备配合我们。我只好来硬的了。",
                    {
                        "type": "move",
                        "loc": [
                            6,
                            8
                        ],
                        "time": 500,
                        "keep": true,
                        "steps": [
                            "up:1"
                        ]
                    },
                    "\t[晴芸,hero3]姐姐上去揍他们！",
                    "\t[hero]（不行……这些家伙太强了，根本不是我能抗衡的……\n要不你先跑，我想办法……）",
                    {
                        "type": "show",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            6,
                            6
                        ]
                    },
                    "\t[？？,N516]\b[down,6,6]停手。",
                    "\t[除灵者Ⅱ型,N515]\b[down,6,7]你是何人？为什么要妨碍我们的正义行为？",
                    "\t[？？,N516]\b[down,6,6]我无意阻碍你们，只是无法容忍你们的无理而已。",
                    {
                        "type": "turnBlock",
                        "direction": "up",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[？？,N516]\b[down,6,6]我可以从这位小姐的眼睛里看到她的机型信息。\n型号是——9922，跟械灵的型号命名完全不符。",
                    "\t[除灵者Ⅱ型,N515]\b[down,6,7]什么？从眼睛里看出机型信息？你这是哪门子超能力？",
                    "\t[除灵者Ⅰ型,N514]\b[down,7,7]同意，说谎可能性高。",
                    {
                        "type": "turnBlock",
                        "direction": "down",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[？？,N516]\b[down,6,6]除灵者Ⅱ型，第114514台被制造出的该型号机械。\n由于编号特殊，制作者特意赋予了你一种奇特的弱点——",
                    "\t[？？,N516]\b[down,6,6]特别害怕红茶，沾到一点就会失去全部机能，至少昏睡8个小时。",
                    "\t[除灵者Ⅱ型,N515]\b[down,6,7]我……靠！",
                    "\t[？？,N516]\b[down,6,6]这边的除灵者Ⅰ型，第999891台被制造出的该型号机械。特点是……",
                    {
                        "type": "animate",
                        "name": "E_embarrass",
                        "loc": [
                            7,
                            7
                        ],
                        "async": true
                    },
                    "\t[除灵者Ⅰ型,N514]\b[down,7,7]投降，投降，求你别说！",
                    "\t[除灵者Ⅱ型,N515]\b[down,6,7]谔谔，光是嘴皮子厉害可没用，老子和你拼了！",
                    {
                        "type": "animate",
                        "name": "blueattack",
                        "loc": [
                            6,
                            7
                        ],
                        "async": true
                    },
                    {
                        "type": "move",
                        "loc": [
                            6,
                            7
                        ],
                        "time": 300,
                        "keep": true,
                        "steps": [
                            "down:1"
                        ]
                    },
                    {
                        "type": "waitAsync"
                    },
                    "\t[除灵者Ⅱ型,N515]\b[down,6,7]……",
                    "\t[？？,N516]\b[down,6,6]再动手，你就死。",
                    "\t[除灵者Ⅱ型,N515]\b[down,6,7]……",
                    "\t[晴芸,hero3]（哇，好厉害！）",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "waitAsync"
                    },
                    "\t[除灵者Ⅱ型,N515]\b[down,6,7]咳咳，这个，看来确实是我们搞错了，是我们愚蠢的行为污了您的眼，实在抱歉，告辞。",
                    "\t[除灵者Ⅰ型,N514]\b[down,4,6]（行动中止？）",
                    "\t[除灵者Ⅰ型,N514]\b[down,8,6]（假定目标不是械灵，增强模块亦不寻常……吃黄宝石，闻所未闻。）",
                    "\t[除灵者Ⅰ型,N514]\b[down,7,7]（目标可疑，不能轻易放过……）",
                    "\t[除灵者Ⅱ型,N515]\b[down,6,7]（你们懂个P！都到这份上了，你们还看不出来这怪女人我们惹不起？\n先撤，之后还有机会再做调查。再不走，万一她心情不好，我们都得当场暴毙！）",
                    "\t[除灵者Ⅰ型,N514]\b[down,5,7]（收到，撤退。）",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                4,
                                6
                            ],
                            [
                                5,
                                7
                            ],
                            [
                                7,
                                7
                            ],
                            [
                                8,
                                6
                            ],
                            [
                                6,
                                8
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "animate",
                        "name": "zone",
                        "loc": [
                            6,
                            7
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
                            6,
                            6
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "N516",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "turnBlock",
                        "direction": "up",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ]
                    },
                    "\t[？？,N516]\b[down,6,6]这个你接着。",
                    {
                        "type": "animate",
                        "name": "hand",
                        "loc": [
                            6,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "jump",
                        "from": [
                            6,
                            5
                        ],
                        "to": [
                            6,
                            4
                        ],
                        "time": 300
                    },
                    {
                        "type": "setValue",
                        "name": "item:yellowGem",
                        "operator": "+=",
                        "value": "1"
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
                        "type": "setBlock",
                        "number": "N523",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": [
                            6,
                            5
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    "\t[？？,N516]\b[down,6,5]9922，你的型号很独特。型号来历？",
                    "\t[hero]我……",
                    "\t[？？,N516]\b[down,6,5]你不知道，对吧。",
                    "\t[hero]是，是……",
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
                    {
                        "type": "setBlock",
                        "number": "N522",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ]
                    },
                    "\t[？？,N516]\b[down,6,5]（这也太巧了……我能从它身上找到关于自己身世的线索吗……）",
                    {
                        "type": "setBlock",
                        "number": "N516",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "move",
                        "loc": [
                            6,
                            5
                        ],
                        "time": 500,
                        "keep": true,
                        "steps": [
                            "down:1"
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "N522",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ]
                    },
                    "\t[？？,N516]\b[down,6,6]你，是参赛者？奔着冠军去的那种。",
                    "\t[hero]没，没有。我这点实力怎么可能敢争冠军……",
                    "\t[？？,N516]\b[down,6,6]……我们后会有期。",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "animate",
                        "name": "light2",
                        "loc": [
                            6,
                            6
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "E_unhappy",
                        "loc": "hero"
                    },
                    "\t[晴芸,hero3]……真是奇怪的家伙。\n喂，头一次见到你这么紧张，话都说不利索。",
                    {
                        "type": "changePos",
                        "direction": "up"
                    },
                    "\t[hero]很强。深不可测。",
                    "\t[晴芸,hero3]所以你就一副如临大敌的样子？不用这么担心呀，她显然对我们没有敌意，甚至\n\r[yellow]对你非常感兴趣\r——我的直觉告诉我的。",
                    "\t[hero]怎么可能，我身上有什么她能看得上的东西……以她表现出的实力，就算这神秘徽章恐怕也入不了她的眼吧……",
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    "\t[hero]话说，械灵到底是什么？刚才在村庄的时候我就想问了。",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[晴芸,hero3]这，说来话长。\n姐姐一定知道，人类一直在研究智能机械的技术吧。",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[晴芸,hero3]虽然人类很早就研究出了专用型的AI——比如棋类游戏的AI，很久以前就超越了人类的最高水准，但是，对于通用型AI的研究——也就是让机器像人一样什么都能学，这方面的进展一直很缓慢。",
                    "\t[晴芸,hero3]于是，就有人提出了另一个方案——既然将机械变得像人很困难，那么不如尝试对人进行机械化改造。\n理论上讲，机械化改造到极致的人，和拟人化改造到极致的机械，是一样的。",
                    "\t[晴芸,hero3]将生物的大脑进行机械化改造之后的智慧体，被统称为械灵。",
                    "\t[hero]大脑进行机械化改造后的各种生物……原来如此。（和之前绿姐姐的说法是一致的）\n另外，我记得刚才那个机器人提到一个叫“幽”的，械灵之王？",
                    "\t[晴芸,hero3]是两年前举办的第一届激励大赛的冠军，名为“\r[red]幽\r”的械灵。它在比赛中表现出了压倒性的实力优势，以无敌之姿横扫所有对手，震惊了全场。",
                    "\t[晴芸,hero3]这次比赛“幽”很可能也参加了。姐姐一定要小心呀。",
                    {
                        "type": "changePos",
                        "direction": "down"
                    },
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    "\t[hero]（能取得上届冠军的话，恐怕实力至少也不比刚才那个神秘女人弱……\n说是要小心，其实真要是碰上了我们连逃跑的能力都没有……）",
                    "\t[hero]（总之还是要尽快变强，才能把命运握在自己手里。）",
                    {
                        "type": "move",
                        "loc": [
                            6,
                            3
                        ],
                        "time": 100,
                        "steps": [
                            "down:1"
                        ]
                    },
                    {
                        "type": "follow",
                        "name": "hero3.png"
                    },
                    {
                        "type": "waitAsync",
                        "excludeAnimates": true
                    }
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
                "type": "hide",
                "remove": true
            }
        ],
        "6,6": {
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
        "5,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,7": {
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
        "10,1": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "(core.status.hero.loc.x ==10)",
                    "true": [
                        "\t[系统提示]这里原本应该有个门，你已经触发了样板bug导致此门提前消失。\n所以，你暴毙了。",
                        {
                            "type": "lose",
                            "reason": ""
                        }
                    ]
                },
                "前方通往截浪滩。\n需要剧情推进到某个点才能开启此门。"
            ]
        }
    },
    "changeFloor": {
        "12,1": {
            "floorId": "South8",
            "loc": [
                0,
                6
            ]
        },
        "0,11": {
            "floorId": "West1",
            "loc": [
                12,
                8
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "5,2": [
            {
                "type": "setValue",
                "name": "flag:door_South12_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,2": [
            {
                "type": "setValue",
                "name": "flag:door_South12_6_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,3": {
            "0": {
                "condition": "flag:door_South12_6_3==2",
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
                        "name": "flag:door_South12_6_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "map": [
    [149,149,149,149,149,149,149,149,149,149,149,149,149],
    [149,50012,334,330, 82,  0, 32,  0,323,  0, 85,  0, 94],
    [149,149,149,149,149,471,  0,481,149,149,149,149,149],
    [  0,  0,  0,149,149,149, 85,149,149,149,  0,  0,  0],
    [  0,  0,  0,149,323,  0,  0,  0,323,149,  0,  0,  0],
    [50073,50074,50075,149,  0,  0, 30,  0,  0,149,50072,50073,50074],
    [  0,  0,  0,149,535,  0,522,  0,535,149,  0,  0,  0],
    [  0,  0,  0,149,  0,535,  0,535,  0,149,  0,  0,  0],
    [  0,  0,  0,149,323,  0,538,  0,323,149,  0,  0,  0],
    [50073,50074,50075,149,149,149, 85,149,149,149,50072,50073,50074],
    [149,149,149,149,149,149,  0,149,149,149,149,149,149],
    [ 92,  0, 32,  0,323,  0, 32, 82,330,334,50004,50007,149],
    [149,149,149,149,149,149,149,149,149,149,149,149,149]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,50001,  0,  0,  0,  0,  0,50002,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,50013,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,50006,  0,  0,  0,50006,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,50013,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,50001,  0,  0,  0,  0,50001,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [50041,50042,50043,  0,  0,  0,  0,  0,  0,  0,50040,50041,50042],
    [50049,50050,50051,  0,  0,  0,  0,  0,  0,  0,50048,50049,50050],
    [50057,50058,50059,  0,  0,  0,  0,  0,  0,  0,50056,50057,50058],
    [50065,50066,50067,  0,  0,  0,  0,  0,  0,  0,50064,50065,50066],
    [50041,50042,50043,  0,  0,  0,  0,  0,  0,  0,50040,50041,50042],
    [50049,50050,50051,  0,  0,  0,  0,  0,  0,  0,50048,50049,50050],
    [50057,50058,50059,  0,  0,  0,  0,  0,  0,  0,50056,50057,50058],
    [50065,50066,50067,  0,  0,  0,  0,  0,  0,  0,50064,50065,50066],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": [
        12,
        1
    ],
    "downFloor": null,
    "upFloor": null,
    "hard1_enemy_ratio": 80,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}