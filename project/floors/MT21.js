main.floors.MT21=
{
    "floorId": "MT21",
    "title": "主塔 21 层",
    "name": "战场前线-21",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 10,
    "defaultGround": "ground4",
    "bgm": null,
    "firstArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.removeMaps(\"BMT20\", \"MT20\");\ncore.values.animateSpeed = 330;\n}"
        },
        {
            "type": "setValue",
            "name": "flag:current_chapter",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "flag:current_area",
            "value": "5"
        },
        {
            "type": "setValue",
            "name": "flag:mana_item",
            "value": "25"
        },
        "\t[系统提示]\\i[I_light]\r[yellow]大型探照灯\r暂时没有用处了，失去此物品。",
        {
            "type": "setValue",
            "name": "item:I_light",
            "value": "0"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "moveHero",
            "time": 300,
            "steps": [
                "down:2"
            ]
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[？？？,Ngule]\b[down,6,5]哦，我感应到身后有一股弱小的气息出现了。应该就是你所说的那个铁皮疙瘩了吧。",
        "\t[？？？,Ngule]\b[down,6,5]你不会把希望寄托在这种废物上面吧？不会吧不会吧？",
        "\t[茉莉,Nmoli]\b[up,6,8]什么？你知道它苏醒到现在才过了多久？战力增长有多快？",
        "\t[？？？,Ngule]\b[down,6,5]所以呢，又有什么用？我赌它连我一招都接不下来，你敢不敢赌？",
        "\t[茉莉,Nmoli]\b[up,6,8]现在也许还不行，不过它的学习速度非常快，很快就可以一个人把你们全打趴下。\n你到区域末尾等着它一路打上来，如何？",
        "\t[孤勒,Ngule]\b[down,6,5]哈哈哈哈哈，难道我还怕它不成，赌了！\n后面的废物听着，本区域由我\r[yellow]孤狼军\r掌控，我孤勒在区域末尾等着你。希望你能来到我面前，让我亲手斩杀你。哈哈哈哈……",
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
            "name": "fire",
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
            "type": "move",
            "loc": [
                6,
                8
            ],
            "time": 300,
            "keep": true,
            "steps": [
                "up:3"
            ]
        },
        "\t[芳芷,hero2]刚才那家伙，是……",
        "\t[茉莉,Nmoli]一个狂妄自大的家伙，脑子大概不太好使的那种。\n不过这个区域的人脑子都有点问题，哎呀想想都来气，不提了。",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[茉莉,Nmoli]言归正传，从这里到塔顶共有三个区域，而这第一个区域由他手下的孤狼军占据。\n我原本想看你自己表演的，但这次上来发现孤狼军比以前强了不少，你应付起来可能会很吃力。",
        "\t[茉莉,Nmoli]恰好，我有能力给你提供一点帮助。\n站好别动，我要对你施法了。",
        {
            "type": "animate",
            "name": "E_love",
            "loc": "hero"
        },
        {
            "type": "animate",
            "name": "yongchang",
            "loc": "hero"
        },
        {
            "type": "setValue",
            "name": "item:I319",
            "value": "1"
        },
        "\t[茉莉,Nmoli]搞定。往你的机器之心上加了点魔法，让你能够吸收钥匙的力量。",
        "\t[芳芷,hero2]对它的心做这种奇怪的事情，真的没事吗？……",
        "\t[茉莉,Nmoli]放心吧，不会有事的。\n毕竟我也是对这方面有过一些了解的。",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[茉莉,Nmoli]而且这还不够，所以我把工具人也叫来了。",
        "\t[hero]（工具人？……）",
        {
            "type": "show",
            "loc": [
                [
                    8,
                    4
                ]
            ]
        },
        {
            "type": "changePos",
            "direction": "right"
        },
        {
            "type": "animate",
            "name": "yongchang",
            "loc": [
                8,
                4
            ]
        },
        "\t[杜衡,N340]三位美女好，工具人向你们报到。",
        {
            "type": "animate",
            "name": "E_love",
            "loc": "hero"
        },
        {
            "type": "changePos",
            "direction": "down"
        },
        "\t[茉莉,Nmoli]最后再给你4把绿钥匙，我偷偷在周围这些绿门里放了些道具……\n给你提供道具有些犯规的意思，所以最好不要去拿，我还是希望你能仅凭自己的力量……",
        "\t[茉莉,Nmoli]不过如果你实在需要的话就拿了吧，想必那个自大狂也不会介意。",
        {
            "type": "setValue",
            "name": "item:greenKey",
            "operator": "+=",
            "value": "4"
        },
        "\t[茉莉,Nmoli]另外如果你把4个绿门都开了，还会获得一个额外的物品。",
        "\t[茉莉,Nmoli]我能做的就这些了，加油吖！",
        {
            "type": "animate",
            "name": "yongchang",
            "loc": [
                6,
                5
            ]
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
        "\t[芳芷,hero2]就这么自顾自地消失了……",
        "\t[杜衡,N340]剩下的就交给我吧！这回我能够优化你的能量流动效率，有我的帮助你们一定能把那个咕什么……咕乐干掉。",
        {
            "type": "animate",
            "name": "E_love",
            "loc": "hero"
        },
        {
            "type": "if",
            "condition": "(flag:hard == 2)",
            "true": [
                {
                    "type": "openShop",
                    "id": "20FShop"
                },
                {
                    "type": "openShop",
                    "id": "20FEquipShop"
                }
            ],
            "false": [
                {
                    "type": "openShop",
                    "id": "20FShop_easy"
                },
                {
                    "type": "openShop",
                    "id": "20FEquipShop"
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,6": {
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
            "data": [
                {
                    "type": "choices",
                    "text": "\t[杜衡,N340]有什么需要我帮忙的？",
                    "choices": [
                        {
                            "text": "我要强化技能",
                            "condition": "!flag:20FShop_finish",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "(flag:hard == 1)",
                                    "true": [
                                        {
                                            "type": "openShop",
                                            "id": "20FShop_easy",
                                            "open": true
                                        }
                                    ],
                                    "false": [
                                        {
                                            "type": "openShop",
                                            "id": "20FShop",
                                            "open": true
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "我要买卖东西",
                            "action": [
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
                                            "type": "if",
                                            "condition": "(flag:hard == 1)",
                                            "true": [
                                                "\t[杜衡,N340]我这里没什么可买的……"
                                            ],
                                            "false": [
                                                "\t[杜衡,N340]我这里没什么可买的……哦对，我这有几瓶药水，能帮助你把能量转换成生命，对你可能有点用。"
                                            ]
                                        },
                                        "\t[杜衡,N340]至于你说你要卖东西，唔，我看看你要出售什么……铁剑、铁盾，就这？",
                                        {
                                            "type": "animate",
                                            "name": "E_dots",
                                            "loc": "hero"
                                        },
                                        "\t[杜衡,N340]我理解这些东西对你确实没有什么用处了，但我毕竟不是专门收废品的……我可以收购你的旧装备，但别指望我能开多高的价格。",
                                        {
                                            "type": "animate",
                                            "name": "E_love",
                                            "loc": "hero"
                                        }
                                    ]
                                },
                                {
                                    "type": "openShop",
                                    "id": "20FEquipShop",
                                    "open": true
                                }
                            ]
                        },
                        {
                            "text": "我要打造一把破剑",
                            "condition": "flag:can_buy_sword0 ",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "(!switch:B)",
                                    "true": [
                                        {
                                            "type": "setValue",
                                            "name": "switch:B",
                                            "value": "1"
                                        },
                                        "\t[杜衡,N340]啊？？？",
                                        {
                                            "type": "animate",
                                            "name": "E_dots",
                                            "loc": "hero"
                                        },
                                        "\t[杜衡,N340]哦哦，我明白了，原来是做这个用。",
                                        "\t[杜衡,N340]说实话打造装备这方面我真的是外行，不过只是打造一把破剑的话……我可以试试……"
                                    ]
                                },
                                {
                                    "type": "if",
                                    "condition": "(flag:hard == 1)",
                                    "true": [
                                        {
                                            "type": "confirm",
                                            "text": "确认要用10金币打造一把破剑吗?",
                                            "yes": [
                                                {
                                                    "type": "if",
                                                    "condition": "(status:money < 10)",
                                                    "true": [
                                                        "\t[hero]（金币不够……）",
                                                        {
                                                            "type": "exit"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:money",
                                                    "operator": "-=",
                                                    "value": "10"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "item:sword0",
                                                    "operator": "+=",
                                                    "value": "1"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:can_buy_sword0",
                                                    "value": "0"
                                                },
                                                "\t[杜衡,N340]搞定了……",
                                                {
                                                    "type": "if",
                                                    "condition": "(core.getFlag('rage_stack', 0) > 80)",
                                                    "true": [
                                                        {
                                                            "type": "animate",
                                                            "name": "E_dots",
                                                            "loc": "hero"
                                                        },
                                                        "\t[杜衡,N340]哦对还有一件事，等你哪天觉得这东西没用了，别指望我收购这东西，我真不是收破烂的。",
                                                        {
                                                            "type": "animate",
                                                            "name": "E_angry",
                                                            "loc": "hero"
                                                        },
                                                        "\t[杜衡,N340]（怎么觉得它的状态有些不太对……）"
                                                    ],
                                                    "false": [
                                                        {
                                                            "type": "animate",
                                                            "name": "E_love",
                                                            "loc": "hero"
                                                        },
                                                        "\t[杜衡,N340]哦对还有一件事，等你哪天觉得这东西没用了，别指望我收购这东西，我真不是收破烂的。",
                                                        {
                                                            "type": "animate",
                                                            "name": "E_unhappy",
                                                            "loc": "hero"
                                                        }
                                                    ]
                                                }
                                            ],
                                            "no": []
                                        }
                                    ],
                                    "false": [
                                        {
                                            "type": "confirm",
                                            "text": "确认要用1000金币打造一把破剑吗?",
                                            "yes": [
                                                {
                                                    "type": "if",
                                                    "condition": "(status:money < 1000)",
                                                    "true": [
                                                        "\t[hero]（金币不够……）",
                                                        {
                                                            "type": "exit"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:money",
                                                    "operator": "-=",
                                                    "value": "1000"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "item:sword0",
                                                    "operator": "+=",
                                                    "value": "1"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:can_buy_sword0",
                                                    "value": "0"
                                                },
                                                "\t[杜衡,N340]总算搞定了……希望它能在保护你免于自残伤害的同时，还能让你应付敌人。",
                                                {
                                                    "type": "if",
                                                    "condition": "(core.getFlag('rage_stack', 0) > 80)",
                                                    "true": [
                                                        {
                                                            "type": "animate",
                                                            "name": "E_dots",
                                                            "loc": "hero"
                                                        },
                                                        "\t[杜衡,N340]哦对还有一件事，等你哪天觉得这东西没用了，别指望我收购这东西，我真不是收破烂的。",
                                                        {
                                                            "type": "animate",
                                                            "name": "E_angry",
                                                            "loc": "hero"
                                                        },
                                                        "\t[杜衡,N340]（怎么觉得它的状态有些不太对……）"
                                                    ],
                                                    "false": [
                                                        {
                                                            "type": "animate",
                                                            "name": "E_love",
                                                            "loc": "hero"
                                                        },
                                                        "\t[杜衡,N340]哦对还有一件事，等你哪天觉得这东西没用了，别指望我收购这东西，我真不是收破烂的。",
                                                        {
                                                            "type": "animate",
                                                            "name": "E_unhappy",
                                                            "loc": "hero"
                                                        }
                                                    ]
                                                }
                                            ],
                                            "no": [
                                                {
                                                    "type": "if",
                                                    "condition": "(!switch:C)",
                                                    "true": [
                                                        {
                                                            "type": "setValue",
                                                            "name": "switch:C",
                                                            "value": "1"
                                                        },
                                                        {
                                                            "type": "if",
                                                            "condition": "(core.getFlag('rage_stack', 0) > 80)",
                                                            "true": [
                                                                "\t[hero]（这么贵？？？）",
                                                                "\t[杜衡,N340]毕竟我不是专业人士啊，工具人也不是什么都会的……",
                                                                {
                                                                    "type": "animate",
                                                                    "name": "E_angry",
                                                                    "loc": "hero"
                                                                }
                                                            ],
                                                            "false": [
                                                                "\t[hero]（这么贵？？？）",
                                                                "\t[杜衡,N340]毕竟我不是专业人士啊，工具人也不是什么都会的……",
                                                                "\t[hero]（好吧，我再考虑考虑……）"
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
                            "text": "没事",
                            "action": []
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:chase_no_force",
                "value": "1"
            }
        ],
        "11,7": [
            "\t[系统提示]谔谔，这钥匙你都拿，你也太咸鱼了吧。",
            "\t[系统提示]咳咳，不过这其实可以看成是一个能力门，如果你不拿这个钥匙，就永远无法获得这把钥匙开门所提升的能力了。\n如果你是经过认真思考后决定开2黄门拿1黄钥匙的，那么辣鸡作者向你致敬，你做出了一个不错的选择。",
            "\t[系统提示]友情提示，\r[yellow]本章\r都没有买钥匙的地方。\n为了充分利用\r[aqua]匙之道\r\\i[I319]，可以提前开必开的门，但不要仅仅为了开门而开门。",
            "\t[系统提示]另外，本区域纯血门数量有限，收益也不高，请适当开启绕怪门。\n当然如果你咸了下面的绿就不用管这些了。",
            "\t[hero]（？？？）"
        ]
    },
    "afterOpenDoor": {
        "3,1": [
            {
                "type": "setValue",
                "name": "flag:MT21_greenDoor",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,9": [
            {
                "type": "setValue",
                "name": "flag:MT21_greenDoor",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,1": [
            {
                "type": "setValue",
                "name": "flag:MT21_greenDoor",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,9": [
            {
                "type": "setValue",
                "name": "flag:MT21_greenDoor",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "6,6": {
            "0": {
                "condition": "flag:MT21_greenDoor == 4",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            6,
                            6
                        ]
                    },
                    {
                        "type": "show"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [142,142,142,142,142,142,142,142,142,142,142,142,142],
    [142, 22, 22, 84,  0,  0,  0,  0,  0, 84,394,394,142],
    [142, 22,142,142,  0,  0,  0,  0,  0,142,142, 47,142],
    [142,142,142,142,  0,  0,  0,  0,  0,142,142,142,142],
    [142, 81, 34, 81,  0,  0,  0,  0,383,20059,20060,20061,142],
    [142, 34,142,142,  0,  0,419,  0,  0,20067,20068,20069,142],
    [142,142,142,142,  0,  0, 64,  0,  0,142,142,142,142],
    [142, 33, 33, 82,  0,  0,  0,  0,  0, 81, 81, 21,142],
    [142,142,142,142,  0,  0,415,  0,  0,142,142,142,142],
    [142, 21, 21, 84,  0, 21, 22, 21,  0, 84, 59,332,142],
    [142, 21,142,142,142,142, 21,142,142,142,142, 59,142],
    [142,386, 22, 82, 59,142, 87,142,386, 82, 59,332,142],
    [142,142,142,142,142,142,142,142,142,142,142,142,142]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20052,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "hard1_enemy_ratio": 75,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {}
}