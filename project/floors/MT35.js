main.floors.MT35=
{
    "floorId": "MT35",
    "title": "主塔 35 层",
    "name": "孤狼战场-35",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area5.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 10,
    "defaultGround": "ground",
    "bgm": "area5.mp3",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "moveHero",
            "time": 300,
            "steps": [
                "up"
            ]
        },
        "\t[孤勒,Ngule]哈哈哈，好，很好。能够来到我面前，不得不承认你有那么一点本事。",
        "\t[孤勒,Ngule]但是也到此为止了。我孤勒，会用你能想象到的最残忍的手段，将你彻底毁灭。",
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]（为什么你对我敌意这么大？）",
        "\t[孤勒,Ngule]我不屑于回答废物提出的问题。",
        {
            "type": "animate",
            "name": "E_angry",
            "loc": "hero"
        },
        "\t[孤勒,Ngule]来吧，我让你先攻，让我看看你有什么本事，竟敢来我这里找死。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "0,0": [
            {
                "type": "comment",
                "text": "boss战后的剧情"
            },
            {
                "type": "sleep",
                "time": 2000
            },
            {
                "type": "changePos",
                "direction": "down"
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "down:1"
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
                    "down:1"
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
                    "down:1"
                ]
            },
            {
                "type": "animate",
                "name": "rage_disp",
                "loc": "hero"
            },
            {
                "type": "setHeroIcon",
                "name": "hero.png"
            },
            {
                "type": "setBlock",
                "number": "N339",
                "loc": [
                    [
                        6,
                        10
                    ]
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
                    6,
                    10
                ],
                "to": [
                    6,
                    6
                ],
                "time": 500,
                "keep": true
            },
            "\t[芳芷,hero2]哇，你刚才也太帅了吧！",
            {
                "type": "animate",
                "name": "E_sweat",
                "loc": "hero"
            },
            "\t[hero]你，你没事？！",
            "\t[芳芷,hero2]人家才没你想象的那么脆弱。毕竟我也算是死过一次的人了。",
            "\t[hero]什，什么意思？",
            "\t[芳芷,hero2]……也该告诉你了，关于\r[red]那个存在\r的故事。",
            {
                "type": "playBgm",
                "name": "story.mp3"
            },
            {
                "type": "sleep",
                "time": 1000
            },
            "\t[芳芷,hero2]塔外的世界，曾经是一个人类与各种机械生命和平共处的地方。\n无论是你这样天生就由机械构成的\r[yellow]智械\r，还是曾经是生物、后来对大脑进行机械化改造而成的\r[yellow]械灵\r，都有各自的生存空间。",
            "\t[芳芷,hero2]但是，在1年前的\r[yellow]背叛之夜\r，一个代号\r[red]2221\r的智械，打破了平静。2221带领机械大军对人类发起战斗，一个又一个城市在双方的对抗中化为灰烬。在战斗最激烈的时候，一道白光闪过，然后2221就把我们都关到了这个塔里，与世隔绝了——",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[芳芷,hero2]——这些都是听别人说的。我在那天傍晚不知被什么人偷袭而昏迷了，在塔内醒来的时候已经过去好多天，并且身体甚至大脑被机械改造过了……\n偷袭者十有八九就是2221。",
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": "hero"
            },
            "\t[hero]这么说，你当时算是人类的高层了？不然怎么会遭到2221的毒手？",
            "\t[芳芷,hero2]不，远远算不上高层，我以前负责教导新生产的智械，也就是“老师”。",
            "\t[hero]原来绿姐姐以前是老师！我一直觉得你很有教导天赋！",
            {
                "type": "animate",
                "name": "E_sweat",
                "loc": [
                    6,
                    6
                ]
            },
            "\t[芳芷,hero2]都是过去了，自从那个晚上之后我就只是个普通人——不对，普通的机器人。\n从生物被改造成机械，更符合“械灵”的定义呢，虽然我的大脑机械化的比例并不高，严格来讲也不算多纯正的械灵。",
            "\t[hero]哇，哪里普通了嘛，我为什么感觉你的身体比我的还抗揍啊！给你打造身躯的人在哪，能找到吗？",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": [
                    6,
                    6
                ]
            },
            "\t[芳芷,hero2]这个……其实……就是杜衡……",
            "\t[hero]咦，为什么我觉得你对他的态度完全不像是……",
            "\t[芳芷,hero2]完全不像是救命恩人是吧。因为……",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[芳芷,hero2]我没允许他救我啊！",
            {
                "type": "animate",
                "name": "E_sweat",
                "loc": "hero"
            },
            "\t[芳芷,hero2]没开玩笑，我醒过来的时候，虽然还留着以前的记忆，但是分明感觉自己像是变成另一个人了。\n可能是因为大脑有一部分机械化了，思考的时候总觉得很别扭，有的时候会感觉脑海中有两个人格在打架。\n这种感觉很痛苦的，虽然至今已经一年了，也算是慢慢适应了。",
            "\t[芳芷,hero2]哎呀扯远了，现在主要的关注点应该放在你身上。",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[hero]所以，我以后需要去对抗2221？",
            "\t[芳芷,hero2]也许是对抗，也许只是获得一个交流的契机。\n2221在背叛之夜的表现很不正常，像是变了一个人一样，我总觉得不对劲。\n把我们关在这里养着，这个行为本身也很令人迷惑。他的目的肯定不是消灭我们，不然他早就动手了。而他真正的目的到底是什么还不得而知。",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[芳芷,hero2]另外，几乎所有的智械都被2221收编了，\n只有你是例外，跟我们一起被关到了这里呢。猜猜原因？",
            {
                "type": "animate",
                "name": "E_unhappy",
                "loc": "hero"
            },
            "\t[芳芷,hero2]因为你被创造出来之后没有通过智商检测，还没开机就直接被扔到回收站去了。",
            {
                "type": "animate",
                "name": "E_sweat",
                "loc": "hero"
            },
            "\t[芳芷,hero2]哈哈，开玩笑的，根据我这一路上的观察，你很聪明的，只是“年龄”很小，经验不太足，以及……我怀疑……\n当初你的创造者把你造到一半，然后\r[yellow]咕了\r，然后决定让你自生自灭了。",
            {
                "type": "animate",
                "name": "E_sweat",
                "loc": "hero"
            },
            "\t[hero]鸽子害人啊！",
            "\t[芳芷,hero2]这恐怕是迫不得已。你的创造者可不是一般人，许多智械都出自他的手下……\n也不知道他如今过得怎样……",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[芳芷,hero2]按你所说，复读机给你留下的信息是登上塔顶找到他，那么说不定他就在塔顶，只是由于某些特殊的原因才无法下来。\n也许，等你到达塔顶，我们就都能离开这里了。",
            "\t[hero]看来，只要继续前进就好了。",
            "\t[芳芷,hero2]是的，只要走下去，总会真相大白。",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[芳芷,hero2]我知道的都告诉你了，其实我还有个问题想问你。",
            {
                "type": "animate",
                "name": "E_question",
                "loc": "hero"
            },
            "\t[芳芷,hero2]你刚才说我对你很重要，我不理解。\n我对你来讲其实没有什么价值，或者即使有一点，也绝对不值得你爆发出刚才的那种力量……去拼命。",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[hero]其实我也不知道为什么，但我就是这样认为的。\n而且在刚才看到你被击中的瞬间，我确实感觉自己能操控的力量变多了，这是客观发生的，并非因我的意愿。\n这算不算是人类所谓的“感情”？",
            "\t[芳芷,hero2]……我不知道，也许吧。\n（不，这不科学……它为什么会这样认为……\n难道说是那颗心有什么特殊的设定……或者是被他改造的……）",
            {
                "type": "sleep",
                "time": 1000
            },
            "\t[hero]在前方等待着我的到底是什么……我真的能登上塔顶吗……",
            "\t[芳芷,hero2]不论是依靠感性的直觉还是理性的分析，我得到的结论都是一样的：你一定能的。",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[芳芷,hero2]不过以后你可千万别再像刚才那样拼命了，这种超负荷运转对你带来的损伤很可能是永久性的。\n你会答应我的吧？",
            "\t[hero]……好。",
            {
                "type": "waitAsync"
            },
            {
                "type": "insert",
                "loc": [
                    12,
                    0
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "6,0": [
            {
                "type": "changeFloor",
                "floorId": ":next",
                "loc": [
                    6,
                    11
                ],
                "time": 1000
            }
        ],
        "12,0": [
            {
                "type": "comment",
                "text": "boss战后的数据处理"
            },
            {
                "type": "if",
                "condition": "flag:hard == 2",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[系统提示]由于超负荷运转，能量爆发\\i[skill1]的消耗增加10点。",
                        "choices": [
                            {
                                "text": "我知道了",
                                "action": []
                            }
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:skill1_cost",
                        "operator": "+=",
                        "value": "10"
                    }
                ],
                "false": [
                    {
                        "type": "choices",
                        "text": "\t[系统提示]由于超负荷运转，修复\\i[skill0]的消耗增加5点。\n不过，每次使用带来的倍率提升\\i[I343]也从2%变为3%。",
                        "choices": [
                            {
                                "text": "我知道了",
                                "action": []
                            }
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:skill0_cost",
                        "operator": "+=",
                        "value": "5"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:skill0_ratio_increase_pp",
                        "value": "3"
                    }
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        4
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        4
                    ]
                ],
                "remove": true
            },
            {
                "type": "move",
                "loc": [
                    6,
                    6
                ],
                "time": 300,
                "steps": [
                    "up"
                ]
            },
            {
                "type": "follow",
                "name": "hero2.png"
            },
            {
                "type": "playBgm",
                "name": "area5.mp3"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        4
                    ]
                ],
                "floorId": "MT21",
                "remove": true
            },
            {
                "type": "disableShop",
                "id": "20FShop"
            },
            {
                "type": "disableShop",
                "id": "20FEquipShop"
            },
            {
                "type": "disableShop",
                "id": "20FShop_easy"
            },
            {
                "type": "showStatusBar"
            },
            {
                "type": "openDoor",
                "loc": [
                    3,
                    6
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    9,
                    6
                ]
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
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        0
                    ]
                ]
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {},
    "afterBattle": {
        "6,4": [
            {
                "type": "switch",
                "condition": "flag:34F_boss_phase",
                "caseList": [
                    {
                        "case": "0",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:34F_boss_phase",
                                "value": "1"
                            },
                            {
                                "type": "setBlock",
                                "number": "Egule2",
                                "loc": [
                                    [
                                        6,
                                        4
                                    ]
                                ]
                            },
                            "\t[孤勒,Ngule]有点本事，再来！\n我带领手下的孤狼军苦修多时，都是为了突破这座塔的束缚、完成复仇！怎么可能就这样倒下！"
                        ]
                    },
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:34F_boss_phase",
                                "value": "2"
                            },
                            {
                                "type": "setBlock",
                                "number": "Ngule",
                                "loc": [
                                    [
                                        6,
                                        4
                                    ]
                                ]
                            },
                            {
                                "type": "setVolume",
                                "value": 0,
                                "time": 2000
                            },
                            {
                                "type": "confirm",
                                "text": "接下来是一段剧情，是否跳过？",
                                "yes": [
                                    {
                                        "type": "setVolume",
                                        "value": 90,
                                        "time": 0
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
                                        "type": "hide",
                                        "loc": [
                                            [
                                                5,
                                                4
                                            ]
                                        ],
                                        "remove": true
                                    },
                                    {
                                        "type": "hide",
                                        "loc": [
                                            [
                                                7,
                                                4
                                            ]
                                        ],
                                        "remove": true
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
                                        "type": "hide",
                                        "loc": [
                                            [
                                                6,
                                                2
                                            ]
                                        ],
                                        "remove": true
                                    },
                                    {
                                        "type": "hide",
                                        "loc": [
                                            [
                                                6,
                                                1
                                            ]
                                        ],
                                        "remove": true
                                    },
                                    {
                                        "type": "hide",
                                        "loc": [
                                            [
                                                6,
                                                9
                                            ]
                                        ],
                                        "remove": true
                                    },
                                    {
                                        "type": "hide",
                                        "loc": [
                                            [
                                                6,
                                                10
                                            ]
                                        ],
                                        "remove": true
                                    },
                                    {
                                        "type": "hide",
                                        "loc": [
                                            [
                                                6,
                                                11
                                            ]
                                        ],
                                        "remove": true
                                    },
                                    {
                                        "type": "hide",
                                        "loc": [
                                            [
                                                5,
                                                2
                                            ]
                                        ],
                                        "floorId": "MT34",
                                        "remove": true
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
                                    {
                                        "type": "insert",
                                        "loc": [
                                            12,
                                            0
                                        ]
                                    }
                                ],
                                "no": [
                                    "\t[孤勒,Ngule]……",
                                    "\t[孤勒,Ngule]呵……真是好久没有体会到这种感觉了……",
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "setVolume",
                                        "value": 90,
                                        "time": 0
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "boss5.mp3",
                                        "keep": true
                                    },
                                    "\t[孤勒,Ngule]你问我为什么对你有这么大的敌意？你又懂什么？",
                                    "\t[孤勒,Ngule]你知道我经历过的痛苦吗？全家上下，皆因\r[red]那个混蛋\r而丧命，现在又把我关到这破塔里！\n如果不是因为你这种机器人的存在，这一切本来都不会发生！",
                                    "\t[孤勒,Ngule]不过，我还活着，我一定要完成复仇！\n这样的决心，这样的\r[yellow]觉悟\r，你能理解吗？不，你一个机器人，你连亲人都没有，你一个没马的东西不可能明白的。",
                                    {
                                        "type": "animate",
                                        "name": "E_dots",
                                        "loc": "hero"
                                    },
                                    "\t[孤勒,Ngule]果然是冷酷无情的东西，面对这种辱骂一点反应都没有。",
                                    "\t[孤勒,Ngule]我还没能击败\r[red]那个混蛋\r，怎么可能先倒在另一个机器人面前！让你看看，何为人类的潜力，何为决心，何为觉悟！",
                                    {
                                        "type": "animate",
                                        "name": "rage_buff",
                                        "loc": [
                                            6,
                                            4
                                        ]
                                    },
                                    {
                                        "type": "moveHero",
                                        "steps": [
                                            "backward:1"
                                        ]
                                    },
                                    "\t[hero]（不好！）",
                                    {
                                        "type": "move",
                                        "loc": [
                                            6,
                                            4
                                        ],
                                        "time": 100,
                                        "keep": true,
                                        "steps": [
                                            "down:1"
                                        ]
                                    },
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
                                        "name": "MSLASH.ogg"
                                    },
                                    {
                                        "type": "animate",
                                        "name": "yidaoliangduan",
                                        "loc": "hero",
                                        "async": true
                                    },
                                    {
                                        "type": "hideStatusBar"
                                    },
                                    {
                                        "type": "moveHero",
                                        "steps": [
                                            "backward:5"
                                        ]
                                    },
                                    {
                                        "type": "hide",
                                        "loc": [
                                            [
                                                6,
                                                9
                                            ]
                                        ],
                                        "remove": true
                                    },
                                    {
                                        "type": "hide",
                                        "loc": [
                                            [
                                                6,
                                                10
                                            ]
                                        ],
                                        "remove": true
                                    },
                                    {
                                        "type": "hide",
                                        "loc": [
                                            [
                                                6,
                                                11
                                            ]
                                        ],
                                        "remove": true
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
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
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    "\t[孤勒,Ngule]\b[down,6,6]看到没有，这是何等的力量！人在极度愤怒的情况下，所能爆发出的力量，怎会是你这样一个小小的机器人所能理解的？",
                                    "\t[hero]\b[up,6,11]（……）",
                                    {
                                        "type": "animate",
                                        "name": "electronic",
                                        "loc": "hero"
                                    },
                                    "\t[hero]\b[up,6,11]（似乎……无法移动了……）",
                                    "\t[孤勒,Ngule]\b[down,6,6]一招，使你缴械。下一招，便要让你零件碎一地！",
                                    {
                                        "type": "animate",
                                        "name": "electronic",
                                        "loc": "hero"
                                    },
                                    "\t[hero]\b[up,6,11]（看来……我还是失败了……）",
                                    {
                                        "type": "setValue",
                                        "name": "flag:disable_changefloor_sound",
                                        "value": "1"
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
                                        "type": "changeFloor",
                                        "floorId": ":before",
                                        "loc": [
                                            641,
                                            641
                                        ]
                                    },
                                    {
                                        "type": "setCurtain",
                                        "time": 500
                                    },
                                    "\t[芳芷,hero2]……",
                                    "\t[芳芷,hero2]这里怎么一点动静都没有……过了这么久也该打完了吧……",
                                    {
                                        "type": "move",
                                        "loc": [
                                            5,
                                            2
                                        ],
                                        "time": 500,
                                        "steps": [
                                            "down:1",
                                            "right:1",
                                            "down:1"
                                        ]
                                    },
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
                                        "type": "changeFloor",
                                        "floorId": ":next",
                                        "loc": [
                                            6,
                                            11
                                        ]
                                    },
                                    {
                                        "type": "setCurtain",
                                        "time": 500
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:disable_changefloor_sound",
                                        "value": "0"
                                    },
                                    "\t[孤勒,Ngule]\b[down,6,6]该结束了。能够死在我最强的一击之下，你也足以自傲了！",
                                    {
                                        "type": "animate",
                                        "name": "rage_buff",
                                        "loc": [
                                            6,
                                            5
                                        ]
                                    },
                                    {
                                        "type": "animate",
                                        "name": "rage_buff",
                                        "loc": [
                                            6,
                                            5
                                        ]
                                    },
                                    {
                                        "type": "animate",
                                        "name": "rage_buff",
                                        "loc": [
                                            6,
                                            5
                                        ]
                                    },
                                    "\t[孤勒,Ngule]\b[down,6,6]死吧！",
                                    {
                                        "type": "pauseBgm"
                                    },
                                    {
                                        "type": "move",
                                        "loc": [
                                            6,
                                            6
                                        ],
                                        "time": 100,
                                        "keep": true,
                                        "steps": [
                                            "down:1"
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "N405",
                                        "loc": [
                                            [
                                                6,
                                                8
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "timestop.wav"
                                    },
                                    {
                                        "type": "screenFlash",
                                        "color": [
                                            255,
                                            255,
                                            255,
                                            1
                                        ],
                                        "time": 300,
                                        "times": 1
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    {
                                        "type": "autoText",
                                        "text": "\t[芳芷,N402]\b[down,6,8]？？？",
                                        "time": 1000
                                    },
                                    {
                                        "type": "setCurtain",
                                        "time": 0
                                    },
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
                                        "name": "MSLASH.ogg"
                                    },
                                    {
                                        "type": "animate",
                                        "name": "yidaoliangduan",
                                        "loc": [
                                            6,
                                            8
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "move",
                                        "loc": [
                                            6,
                                            8
                                        ],
                                        "time": 100,
                                        "keep": true,
                                        "steps": [
                                            "down:2"
                                        ]
                                    },
                                    {
                                        "type": "animate",
                                        "name": "electronic",
                                        "loc": [
                                            6,
                                            10
                                        ]
                                    },
                                    "\t[芳芷,hero2]\b[up,6,10]唔……这什么情况……",
                                    "翻译器掉在了地上，滚到了9922脚下。",
                                    "\t[孤勒,Ngule]\b[down,6,7]嗯？你是从哪冒出来的？\n不过没有区别，看刚才你身上冒出的电火花，你也是机器人，一起死吧！",
                                    {
                                        "type": "setVolume",
                                        "value": 100,
                                        "time": 0
                                    },
                                    {
                                        "type": "playBgm",
                                        "name": "tenshi.mp3",
                                        "keep": true
                                    },
                                    {
                                        "type": "animate",
                                        "name": "rage_buff",
                                        "loc": "hero",
                                        "async": true
                                    },
                                    {
                                        "type": "animate",
                                        "name": "rage_buff",
                                        "loc": "hero",
                                        "async": true
                                    },
                                    {
                                        "type": "animate",
                                        "name": "rage_buff",
                                        "loc": "hero",
                                        "async": true
                                    },
                                    {
                                        "type": "animate",
                                        "name": "rage_buff",
                                        "loc": "hero"
                                    },
                                    {
                                        "type": "setHeroIcon",
                                        "name": "hero_rage.png"
                                    },
                                    "\t[hero]\b[up,6,11]（装上翻译器）\n\\c[28]\r[red]我     要     你     死！\r\\c",
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
                                            7
                                        ],
                                        "time": 100,
                                        "keep": true,
                                        "steps": [
                                            "up:1"
                                        ]
                                    },
                                    {
                                        "type": "animate",
                                        "name": "crossattack",
                                        "loc": [
                                            6,
                                            7
                                        ]
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 100
                                    },
                                    "\t[孤勒,Ngule]\b[down,6,6]？？？什么？？？你怎么可能又能动了？",
                                    "\t[hero]你也许是对的，我的确不懂何为情感，何为觉悟。\n我只知道你严重地伤害了一个对我极其重要的人，因此我必须与你\r[red]拼命\r。",
                                    "\t[hero]你刚才说，人在极度愤怒的情况下能爆发出极大的力量。\n愤怒是什么，我并不关心，但我之前与你手下的孤狼军的战斗中，学会了如何爆发出最强的力量。",
                                    {
                                        "type": "jumpHero",
                                        "loc": [
                                            6,
                                            7
                                        ],
                                        "time": 300
                                    },
                                    {
                                        "type": "animate",
                                        "name": "crossattack",
                                        "loc": [
                                            6,
                                            7
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 100
                                    },
                                    {
                                        "type": "move",
                                        "loc": [
                                            6,
                                            6
                                        ],
                                        "time": 50,
                                        "keep": true,
                                        "steps": [
                                            "up:2"
                                        ]
                                    },
                                    "\t[hero]所谓暴戾，便是以命搏命的战斗方式，不在意对方凶狠的攻击，才能给对方以最为凶狠的还击。",
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "jumpHero",
                                        "loc": [
                                            6,
                                            5
                                        ],
                                        "time": 300
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
                                        "time": 100
                                    },
                                    {
                                        "type": "move",
                                        "loc": [
                                            6,
                                            4
                                        ],
                                        "time": 50,
                                        "keep": true,
                                        "steps": [
                                            "up:3"
                                        ]
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
                                        "type": "hide",
                                        "loc": [
                                            [
                                                6,
                                                2
                                            ]
                                        ],
                                        "remove": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    "\t[孤勒,Ngule]\b[down,6,1]你！你！为什么你会突然变得这么强！",
                                    "\t[hero]就像你一开始并没有用尽全力一样，我也没有。\n这场战斗，我即使超负荷运转，也必须赢！",
                                    "\t[hero]即使这种战斗方式会付出很大的代价，然而\n\n\\c[20]\r[red]我是绝对不会容忍她受到伤害的。\r\\c",
                                    "\t[孤勒,Ngule]\b[down,6,1]不，为什么，她有什么特别之处，值得你这样……",
                                    "\t[hero]\\c[20]而伤害了她的你，必须\r[red]死\r！\\c",
                                    {
                                        "type": "jumpHero",
                                        "loc": [
                                            6,
                                            2
                                        ],
                                        "time": 300
                                    },
                                    {
                                        "type": "hide",
                                        "loc": [
                                            [
                                                6,
                                                1
                                            ]
                                        ],
                                        "remove": true
                                    },
                                    {
                                        "type": "vibrate",
                                        "direction": "horizontal",
                                        "time": 500,
                                        "speed": 10,
                                        "power": 10,
                                        "async": true
                                    },
                                    {
                                        "type": "animate",
                                        "name": "supernova",
                                        "loc": [
                                            6,
                                            1
                                        ],
                                        "async": true
                                    },
                                    "\t[孤勒,Ngule]\b[down,6,1]谔谔，啊啊啊啊啊啊！",
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
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "waitAsync"
                                    }
                                ]
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
    [142,142,142,142,142,142,142,142,142,142,142,142,142],
    [142,142,142,142,142,142,142,142,142,142,142,142,142],
    [142, 27, 33,142,142,142,142,142,142,142, 33, 28,142],
    [142, 33, 27,142,142,142,142,142,142,142, 28, 33,142],
    [142, 27, 33,142,  0, 17,419, 17,  0,142, 33, 28,142],
    [142, 21, 27,142,  0,  0,  0,  0,  0,142, 28, 21,142],
    [142, 27, 23, 85,  0,  0,  0,  0,  0, 85, 22, 28,142],
    [142, 21, 27,142,  0,  0,  0,  0,  0,142, 28, 21,142],
    [142, 27, 33,142,  0,  0,  0,  0,  0,142, 33, 28,142],
    [142, 33, 27,142,142,142,142,142,142,142, 28, 33,142],
    [142, 27, 33,142,142,142,142,142,142,142, 33, 28,142],
    [142,142,142,142,142,142,142,142,142,142,142,142,142],
    [142,142,142,142,142,142,142,142,142,142,142,142,142]
],
    "bgmap": [

],
    "fgmap": [

],
    "hard1_enemy_ratio": 75,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {}
}