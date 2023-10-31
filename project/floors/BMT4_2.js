main.floors.BMT4_2=
{
    "floorId": "BMT4_2",
    "title": "小屋",
    "name": "小屋",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground2",
    "bgm": null,
    "color": [
        0,
        0,
        0,
        0.4
    ],
    "firstArrive": [
        {
            "type": "openDoor",
            "loc": [
                6,
                9
            ]
        },
        {
            "type": "setValue",
            "name": "flag:arrived_B4FShop",
            "value": "1"
        }
    ],
    "eachArrive": [
        {
            "type": "pauseBgm"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.setBgLight([\n\t[5, 2, 180],\n\t[3, 7, 180],\n\t[9, 7, 180]\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "6,3": [
            {
                "type": "if",
                "condition": "(!flag:B4FShop_finish)",
                "true": [
                    {
                        "type": "openShop",
                        "id": "B4FShop",
                        "open": true
                    },
                    {
                        "type": "turnBlock",
                        "direction": "up"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "((!switch:A)&&flag:B4Fmission_finish)",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:B",
                                "value": "1"
                            },
                            "\t[杜衡,N340]什么？里面没啥有价值的东西？",
                            "\t[杜衡,N340]哎，倒也是意料之中。辛苦你们了。",
                            {
                                "type": "turnBlock",
                                "direction": "up"
                            },
                            {
                                "type": "exit"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "(!switch:B)",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "switch:B",
                                "value": "1"
                            },
                            "\t[杜衡,N340]最稳妥的强化方式已经都完成了，不过这颗机器之心还有很大的潜力可以挖掘。",
                            {
                                "type": "animate",
                                "name": "E_dots",
                                "loc": "hero"
                            },
                            "\t[杜衡,N340]怎么，你想让我继续强化它？我倒是可以去做，但我可不能保证没有什么副作用。",
                            {
                                "type": "animate",
                                "name": "E_love",
                                "loc": "hero"
                            },
                            "\t[芳芷,hero2]他说可能有副作用，你还真往坑里跳呀……",
                            "\t[杜衡,N340]算了算了，我不能昧着自己的良心，万一给你搞暴毙了，我担不起这个责任。",
                            {
                                "type": "animate",
                                "name": "E_unhappy",
                                "loc": "hero"
                            },
                            "\t[杜衡,N340]不过，我倒是有个忙希望你帮一下。",
                            "\t[杜衡,N340]在房间右侧有个洞口，里面有一些怪物不知道在守着什么东西。",
                            "\t[杜衡,N340]当然你不去也无所谓，我只是有点好奇那东西是什么而已。",
                            "\t[杜衡,N340]你想去的话，直接把门撞开就行了。",
                            {
                                "type": "turnBlock",
                                "direction": "up"
                            }
                        ],
                        "false": [
                            "\t[杜衡,N340]……",
                            {
                                "type": "turnBlock",
                                "direction": "up"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,8": [
            {
                "type": "moveHero",
                "time": 200,
                "steps": [
                    "up:3"
                ]
            },
            {
                "type": "unfollow",
                "name": "hero2.png"
            },
            {
                "type": "setBlock",
                "number": "N405",
                "loc": [
                    [
                        6,
                        6
                    ]
                ]
            },
            {
                "type": "waitAsync"
            },
            "\t[？？？,N385]\b[down,6,3]说了多少遍了来找我请先敲门！你们圣匙帮成员真该学学基本的礼貌……",
            {
                "type": "turnBlock",
                "direction": "down",
                "loc": [
                    [
                        6,
                        3
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": [
                    6,
                    3
                ]
            },
            "\t[芳芷,hero2]\b[down,6,6]（杜衡……怎么是这个家伙……）",
            "\t[杜衡,N340]\b[down,6,3]……",
            {
                "type": "animate",
                "name": "E_question",
                "loc": "hero"
            },
            "\t[杜衡,N340]\b[down,6,3]你……你来这干嘛……",
            "\t[芳芷,hero2]\b[down,6,6]没事，我们走错路了。",
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
            "\t[芳芷,hero2]\b[down,6,6]走吧。",
            "\t[杜衡,N340]\b[down,6,3]哎等等，好不容易又见到一面，一定要这么冷淡吗？",
            "\t[芳芷,hero2]\b[down,6,6]……",
            "\t[杜衡,N340]\b[down,6,3]那个，我觉得，有些事情，还是好好谈谈……",
            "\t[芳芷,hero2]\b[down,6,6]不谈。",
            "\t[杜衡,N340]\b[down,6,3]不是，你好歹给我个机会吧……",
            "\t[杜衡,N340]\b[down,6,3]而且你们能到我这里绝对不是偶然，别告诉我你们出门遛弯能一不小心走到圣匙帮的地盘上，顺便把拦路的家伙全放倒。",
            "\t[芳芷,hero2]\b[down,6,6]所以呢？你想干嘛？",
            "\t[杜衡,N340]\b[down,6,3]你看那个智械，带着\r[yellow]那东西\r，绝对适合我这的新技术……就当是为了它好……",
            "\t[芳芷,hero2]\b[down,6,6]……",
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
            "\t[芳芷,hero2]\b[down,6,6]……可以。",
            {
                "type": "animate",
                "name": "E_question",
                "loc": "hero"
            },
            "\t[hero]\b[down,6,5]（？？？这到底是个什么情况？？？）",
            {
                "type": "move",
                "loc": [
                    6,
                    6
                ],
                "time": 200,
                "keep": true,
                "steps": [
                    "right:1",
                    "up:2"
                ]
            },
            {
                "type": "turnBlock",
                "direction": "left",
                "loc": [
                    [
                        7,
                        4
                    ]
                ]
            },
            "\t[芳芷,hero2]\b[down,7,4]介绍一下。这位是杜衡，我的前同事。",
            "\t[杜衡,N340]\b[down,6,3]是的是的，虽然我们的工作内容完全不同。\n我的研究方向是\r[yellow]感性学习\r。怎么样，不知道这个词是什么意思吧？",
            {
                "type": "animate",
                "name": "E_unhappy",
                "loc": "hero"
            },
            "\t[杜衡,N340]\b[down,6,3]我问你，你“活着”的意义是什么？",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[杜衡,N340]\b[down,6,3]你说要登上塔顶？在那之后呢？",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "animate",
                "name": "E_unhappy",
                "loc": "hero"
            },
            "\t[杜衡,N340]\b[down,6,3]不知道了？这是个很严重的问题。\n也正是我要解决的问题。",
            "\t[杜衡,N340]\b[down,6,3]我承接前辈多年的研究成果，感性学习技术凝聚出的结晶，便是你手上的\\i[I392]\r[yellow]机器之心\r。\n现在它还是一片空白，不过只要让我稍微改装一下，发掘出它的潜力，你所能掌控的力量，乃至思考问题的方式都会发生质的变化。\n唯一的问题是现在我手头缺钱，所以……",
            "\t[芳芷,hero2]\b[down,7,4]够了够了，你说得这么绕，它听不懂。直白点。",
            "\t[杜衡,N340]\b[down,6,3]好好，简单来讲就是，给我钱，我帮你变得更强！够简单了吧！",
            {
                "type": "animate",
                "name": "E_love",
                "loc": "hero"
            },
            "\t[杜衡,N340]\b[down,6,3]好，欢迎来骚扰我。",
            {
                "type": "turnBlock",
                "direction": "up",
                "loc": [
                    [
                        6,
                        3
                    ]
                ]
            },
            {
                "type": "move",
                "loc": [
                    7,
                    4
                ],
                "time": 200,
                "steps": [
                    "down:1",
                    "left:1"
                ]
            },
            {
                "type": "follow",
                "name": "hero2.png"
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "openShop",
                "id": "B4FShop"
            }
        ],
        "10,5": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "(!flag:B4FShop_finish)",
                    "true": [
                        {
                            "type": "turnBlock",
                            "direction": "right",
                            "loc": [
                                [
                                    6,
                                    3
                                ]
                            ]
                        },
                        "\t[杜衡,N340]\b[down,6,3]别开那个门，后面有奇怪的东西。",
                        {
                            "type": "animate",
                            "name": "E_unhappy",
                            "loc": "hero"
                        },
                        "\t[杜衡,N340]\b[down,6,3]如果你真想去看的话，最好先变得足够强。\n比如，先让我完成对那颗心的改造。",
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    6,
                                    3
                                ]
                            ]
                        }
                    ],
                    "false": [
                        {
                            "type": "openDoor"
                        }
                    ]
                }
            ]
        },
        "3,2": [
            "《2274传》\n讲述了一位名为2274的勇士，行侠仗义，成就传奇，之后转行做厨师的故事。",
            "\t[hero]（？？？）"
        ],
        "4,2": [
            "《2221传》\n讲述了一位名为2221的勇士在沼泽中徘徊的故事。",
            "\t[hero]（不知道他什么时候能走出沼泽。）"
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "BMT4",
            "loc": [
                6,
                0
            ],
            "time": 500
        },
        "11,5": {
            "floorId": "BMT4_3",
            "loc": [
                0,
                6
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [310,310,310,310,310,310,310,310,310,310,310,310,310],
    [310,310,310,310,310,310,310,310,310,310,310,310,310],
    [310,310,310,10088,10089,10115,10107,  0,10108,10109,310,310,310],
    [310,310,310,  0,  0,  0,385,  0,10116,10117,310,310,310],
    [310,310,310,10106,  0,  0,  0,  0,  0,  0,310,310,310],
    [310,310,310,  0,  0,  0,  0,  0,  0,  0, 85, 89,310],
    [310,310,310,  0,  0,  0,  0,  0,  0,  0,310,310,310],
    [310,310,310,  0,  0,  0,  0,  0,  0,  0,310,310,310],
    [310,310,310,10102,  0,  0,  0,10100,10101,10102,310,310,310],
    [310,310,310,310,310,310, 85,310,310,310,310,310,310],
    [310,310,310,310,310,310,  0,310,310,310,310,310,310],
    [310,310,310,310,310,310,  0,310,310,310,310,310,310],
    [310,310,310,310,310,310, 89,310,310,310,310,310,310]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,10096,10097,10113,10114,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,10113,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,10080,10081,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,10094,  0,  0,  0,10092,10093,10094,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "underGround": true,
    "cannotMoveDirectly": false,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {}
}