main.floors.MT55=
{
    "floorId": "MT55",
    "title": "主塔 55 层",
    "name": "辉煌圣殿-55",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area6.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 10,
    "defaultGround": "ground3",
    "bgm": "area6.mp3",
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "area7.mp3"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,8": [
            "\t[系统提示]需要清理前面所有敌人。正在检测中……",
            {
                "type": "function",
                "function": "function(){\ncore.plugin.checkEnemy(\"MT36\",\"MT55\");\n}"
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
            },
            {
                "type": "function",
                "function": "function(){\ncore.removeFlag(\"remainEnemyInfo\");\ncore.removeFlag(\"remainEnemyCount\");\n}"
            }
        ],
        "6,7": [
            {
                "type": "pauseBgm"
            },
            {
                "type": "moveHero",
                "steps": [
                    "up:2"
                ]
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[hero]这里，似乎就是圣殿的最顶层了。\n按理说应该有个什么人等着我才对吧。",
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        3
                    ]
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
            "\t[？？？,Eancang]哈哈哈，稀客啊。",
            "\t[hero]果然出现了！",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[？？？,Eancang]小芳，好久不见。怎样，你已经找到离开这座塔的方法了？",
            "\t[芳芷,hero2]还没有。你明明知道，离开的方法很可能就在比这里更高的地方。",
            "\t[？？？,Eancang]还在执着于离开这里吗？为何不加入我们，共享这天伦之乐呢？",
            "\t[？？？,Eancang]你这一路走来，应该已经发现了，辉煌圣殿的物质水平，比起你上次来这里的时候又有了很大的增长。这是不是足以说明，我们应当顺从\r[red]那位大人\r的意思，在这里安分地生活呢？",
            "\t[芳芷,hero2]我不想跟你吵这个了。不如，听听这位智械的想法？",
            "\t[hero]？？？到底什么情况？",
            {
                "type": "sleep",
                "time": 1000
            },
            "\t[安苍,Eancang]老夫名为安苍，如今乃是\r[red]那位大人\r亲自指派的辉煌圣殿的总管。\n老夫的职责，便是带领着人类与智械在塔内过上和平而快乐的生活。",
            "\t[安苍,Eancang]想必你也已经见识过了，辉煌圣殿的物资是何等的充足，在这里生活是何等的幸福。\n抛弃一切压力和烦恼，尽情地拥抱这歌舞升平的天堂。",
            "\t[hero]有吗，可是我只感觉路上一直有脑子不好使的家伙拦路呀。",
            "\t[安苍,Eancang]这好办，它们只不过是会本能地攻击外来者而已。\n只要老夫在你身上留个印记，你就算加入我们了，辉煌圣殿的任何成员都会将你视作朋友。",
            "\t[hero]我对这个不感兴趣。我只想继续往上走。\n难道说你一定要阻拦我吗？",
            {
                "type": "playBgm",
                "name": "boss5.mp3",
                "keep": true
            },
            {
                "type": "sleep",
                "time": 2000
            },
            "\t[安苍,Eancang]必须阻拦你。\n\r[red]那位大人\r允许我随意管理这座圣殿，唯一的要求就是\n\r[orange]不能让任何人上去\r。",
            "\t[hero]所以，为什么呢？",
            "\t[安苍,Eancang]凡人就不要妄想揣测神的意图了。\n我们现在享有的一切，都是\r[red]那位大人\r赏赐给我们的，那位大人说什么，我们就应当怎么做，否则我们一旦惹怒了它，连现在拥有的也要失去。",
            "\t[hero]我只是对上面比较好奇而已，我也没有与2221为敌的意思，只是想当面膜拜它，这样也不行吗？",
            "\t[安苍,Eancang]你若是执意要往上走，便是违逆那位大人的旨意，莫怪我与你为敌。",
            "\t[hero]……看来，只有一战了。\n话说你不趁我弱小的时候打败我，难道现在你有把握战胜我？",
            "\t[安苍,Eancang]哼，老夫好歹也是当今全塔战斗力最强的人类。\n况且，即使我没有把握战胜你，也应当用出全力与你一战。\n既是为了辉煌圣殿的成员们，也是为了你。",
            "\t[安苍,Eancang]再往上是\r[red]那位大人\r开通的道路。你若是连我都打不赢，去了也是白白送命。",
            {
                "type": "setValue",
                "name": "flag:disableFly",
                "value": "1"
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    9
                ]
            },
            "\t[安苍,Eancang]来吧，让老夫领教一下，妄图挑战\r[red]那位大人\r的勇士，有什么样的实力！\n分身术！",
            {
                "type": "setBlock",
                "number": "Eancang",
                "loc": [
                    [
                        6,
                        3
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        5,
                        4
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "def_buff",
                "loc": [
                    5,
                    4
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        7,
                        4
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "anti_rage",
                "loc": [
                    7,
                    4
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        5,
                        6
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "heal",
                "loc": [
                    5,
                    6
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        7,
                        6
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "thunder",
                "loc": [
                    7,
                    6
                ]
            },
            {
                "type": "sleep",
                "time": 500
            },
            "\t[hero]……还真是难缠。",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "6,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,1": [
            {
                "type": "pauseBgm"
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
            "\t[hero]这个传送门果然十分不稳定……\n那么，要上了！",
            {
                "type": "playSound",
                "name": "mteleport.wav"
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
                "async": true
            },
            {
                "type": "vibrate",
                "direction": "horizontal",
                "time": 2000,
                "speed": 10,
                "power": 10
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "changeFloor",
                "floorId": "MT5X",
                "loc": [
                    1,
                    42
                ],
                "direction": "down",
                "time": 1000
            }
        ],
        "8,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "flag:hard == 2",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(!switch:A)",
                            "true": [
                                {
                                    "type": "confirm",
                                    "text": "确认要用2000金币强化集中防御吗?",
                                    "yes": [
                                        {
                                            "type": "setValue",
                                            "name": "switch:A",
                                            "value": "1"
                                        },
                                        {
                                            "type": "playSound",
                                            "name": "buy.mp3"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "status:money",
                                            "operator": "-=",
                                            "value": "2000"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "flag:skill2_val",
                                            "operator": "+=",
                                            "value": "50"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "flag:skill2_charge",
                                            "operator": "-=",
                                            "value": "1"
                                        },
                                        "\t[系统提示]\\i[skill2]集中防御的效果额外增加50%的基础防御，且蓄力所需回合数-1。",
                                        "\t[杜衡,N340]搞定了，这是我最后能为你做的了。\n加油吧，我也很期待上面的风景。"
                                    ],
                                    "no": []
                                }
                            ],
                            "false": [
                                "\t[杜衡,N340]这回我真的没啥可做的了。\n加油吧，我也很期待上面的风景。"
                            ]
                        }
                    ],
                    "false": [
                        {
                            "type": "if",
                            "condition": "(!switch:A)",
                            "true": [
                                {
                                    "type": "confirm",
                                    "text": "确认要用3000金币强化 修复 吗?",
                                    "yes": [
                                        {
                                            "type": "setValue",
                                            "name": "switch:A",
                                            "value": "1"
                                        },
                                        {
                                            "type": "playSound",
                                            "name": "buy.mp3"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "status:money",
                                            "operator": "-=",
                                            "value": "3000"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "flag:skill0_val",
                                            "operator": "+=",
                                            "value": "2000"
                                        },
                                        "\t[系统提示]\\i[skill0]基础效果提升2000点！",
                                        "\t[杜衡,N340]搞定了，这是我最后能为你做的了。\n加油吧，我也很期待上面的风景。",
                                        {
                                            "type": "if",
                                            "condition": "core.hasItem(\"skill0\")",
                                            "true": [
                                                "\t[系统提示]\\i[skill0]\r[yellow]修复\r的效果已达到最大。你可以放心地用掉所有能量了。",
                                                {
                                                    "type": "setValue",
                                                    "name": "item:skill0_all",
                                                    "value": "1"
                                                }
                                            ],
                                            "false": [
                                                "\t[系统提示]\\i[skill0]你没有\r[yellow]修复\r，为什么要在这里花钱？"
                                            ]
                                        }
                                    ],
                                    "no": []
                                }
                            ],
                            "false": [
                                "\t[杜衡,N340]这回我真的没啥可做的了。\n加油吧，我也很期待上面的风景。"
                            ]
                        }
                    ]
                }
            ]
        },
        "4,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "flag:salt_55_1 == 0 || flag:salt_55_2 == 0",
                    "true": [
                        {
                            "type": "choices",
                            "text": "\t[芳芷,hero2]还需要更多的帮助吗？\n可以用\\i[greenKey]绿钥匙来换哦~",
                            "choices": [
                                {
                                    "text": "小芊叶",
                                    "icon": "leaf",
                                    "color": [
                                        67,
                                        236,
                                        44,
                                        1
                                    ],
                                    "need": "item:greenKey > 0",
                                    "condition": "flag:salt_55_1 == 0",
                                    "action": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:salt_55_1",
                                            "value": "1"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "item:greenKey",
                                            "operator": "-=",
                                            "value": "1"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "item:leaf",
                                            "operator": "+=",
                                            "value": "1"
                                        },
                                        "\t[hero]这片叶子……好像很不一般呀。",
                                        "\t[芳芷,hero2]是呀，我能得到它也是机缘巧合。\n有它帮助，你一定能克服困难的。"
                                    ]
                                },
                                {
                                    "text": "大量生命",
                                    "icon": "bigGreenPotion",
                                    "color": [
                                        255,
                                        255,
                                        255,
                                        1
                                    ],
                                    "need": "item:greenKey > 0",
                                    "condition": "flag:salt_55_2 == 0",
                                    "action": [
                                        {
                                            "type": "animate",
                                            "name": "heal2",
                                            "loc": "hero"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "flag:salt_55_2",
                                            "value": "1"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "item:greenKey",
                                            "operator": "-=",
                                            "value": "1"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "status:hp",
                                            "operator": "+=",
                                            "value": "2221000"
                                        },
                                        "\t[系统提示]生命增加222.1万！",
                                        "\t[芳芷,hero2]这下我真的感觉被掏空啦……加油吧。"
                                    ]
                                },
                                {
                                    "text": "不用了",
                                    "color": [
                                        255,
                                        255,
                                        255,
                                        1
                                    ],
                                    "action": []
                                }
                            ]
                        },
                        "\t[芳芷,hero2]加油，你一定行的！"
                    ],
                    "false": [
                        "\t[芳芷,hero2]我已经把能提供的帮助都给你啦。\n加油，你一定行的！"
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "6,3": [
            {
                "type": "setValue",
                "name": "flag:disableFly",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:current_area",
                "value": "7"
            },
            {
                "type": "setVolume",
                "value": 0,
                "time": 2000,
                "async": true
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "setBlock",
                "number": "Nancang",
                "loc": [
                    [
                        6,
                        3
                    ]
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
                "type": "hide",
                "loc": [
                    [
                        5,
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
                        6
                    ]
                ],
                "remove": true
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
                    6,
                    2
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
                "type": "sleep",
                "time": 1000
            },
            "\t[安苍,Nancang]呵，不得不服老了，是我败了。\n你有这样的实力，也许真的能有一点点机会，见到\r[red]那位大人\r……",
            "\t[hero]你也很强……不仅身躯经过了大幅的机械改装，还掌控有一些魔法力量。\n所以2221到底有什么特别之处，能让你奉若神明？",
            "\t[安苍,Nancang]哼，既然能随手就将我们收进这塔内，若是它想，毁灭我们肯定也轻而易举。\n但它没有这样做，生活在塔内的我们时时刻刻都在蒙受它的恩泽。",
            "\t[安苍,Nancang]你们觉得这里是监狱，我却认为这里是天堂。\n那位大人亲自指派我为辉煌圣殿的总管，我们能通过自己的努力，把这里建设成心目中最理想的新家园。",
            {
                "type": "setBlock",
                "number": "N415",
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
            "\t[茉莉,Nmoli]\b[down,6,6]呀，看来我来晚了。",
            "\t[安苍,Nancang]茉莉？你也是来反对我的吧？",
            "\t[茉莉,Nmoli]\b[down,6,6]我们还不想在这里养老。\n人各有志，既然你打输了就不要阻拦我们了。",
            "\t[安苍,Nancang]……哼，那就放你们继续前进，反正通往更高处的传送门也是那位大人打开的，你们逃不出它的掌心的。\n我还有事在身，告辞！",
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
                "name": "yongchang",
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
                "type": "moveHero",
                "steps": [
                    "down:1"
                ]
            },
            {
                "type": "sleep",
                "time": 500
            },
            "\t[hero]\b[down,6,5]看来，距离解开谜底只有一步之遥了。\n话说，上面到底是什么？",
            "\t[茉莉,Nmoli]\b[down,6,6]不知道，那老头一直守着这传送门不让人上去，你是第一个打败他的。",
            "\t[芳芷,hero2]\b[down,6,4]说来也怪，2221既然留了这传送门没关，肯定是希望谁用上它。\n不过这个传送门似乎十分不稳定，恐怕只能有一个人通过……",
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": "hero"
            },
            "\t[茉莉,Nmoli]\b[down,6,6]确实是这样，虽然我很想上去看看，不过这个机会只能留给现在战斗力最强的你。",
            "\t[茉莉,Nmoli]\b[down,6,6]我在你身上留个印记，这样等你到达\r[yellow]稳定的位置\r之后，我们花一些时间就能新开辟一个传送门，连通这里和你的位置。\n只是，在那之前，后面的路只能由你独行了。",
            "\t[茉莉,Nmoli]\b[down,6,6]另外，我把工具人叫来了，他应该很快就会到，希望他能在你上去之前帮上点忙。\n这里没我事了，我先溜啦~",
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
                "name": "yongchang",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[hero]\b[down,6,5]又这么自顾自地走了……",
            {
                "type": "changePos",
                "direction": "up"
            },
            "\t[芳芷,hero2]\b[down,6,4]看来没办法再跟着你了……不过我还能帮上一点忙。",
            {
                "type": "animate",
                "name": "heal2",
                "loc": "hero"
            },
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "+=",
                "value": "600000"
            },
            "\t[系统提示]获得60万生命。",
            "\t[芳芷,hero2]\b[down,6,4]搞定啦，加油，你一定能活着回来的！",
            "\t[杜衡,N340]喂，你这个flag立的有点大啊。",
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    8,
                    5
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        8,
                        5
                    ]
                ]
            },
            {
                "type": "changePos",
                "direction": "right"
            },
            "\t[杜衡,N340]\b[down,8,5]呼，还是赶上了。\n想不到你真的走到了这一步。",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[杜衡,N340]\b[down,8,5]现在的你可以说是从这里往下最强的存在了。但是，你还有两个缺陷。",
            {
                "type": "animate",
                "name": "E_question",
                "loc": "hero"
            },
            "\t[杜衡,N340]\b[down,8,5]其一，是你所用的装备太差了。不过这个我帮不上忙。",
            "\t[杜衡,N340]\b[down,8,5]其二，你对能量的掌控效率还可以提升。\n考虑到你如今的强度，我可以大胆地运用最为激进的手段了……",
            {
                "type": "animate",
                "name": "E_love",
                "loc": "hero"
            },
            "\t[hero]\b[down,hero]（在出发前做好准备吧。\n2221……还有我那个疑似失踪的创造者，会在塔顶出现吗……）",
            {
                "type": "unfollow",
                "name": "hero2.png"
            },
            {
                "type": "show",
                "loc": [
                    [
                        4,
                        5
                    ]
                ]
            },
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
                "name": "area6.mp3"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143, 24,323,333,322,143, 89,143,322,333,323, 24,143],
    [143,143,143,143, 85,143, 85,143, 85,143,143,143,143],
    [143,322,323,141,  0,  0,447,  0,  0,141,322,323,143],
    [143,280, 22,141,  0,428,  0,432,  0,141, 22,280,143],
    [143,242,331,141,338,  0,  0,  0,383,141,331,243,143],
    [143, 82,143,141,  0,442,  0,446,  0,141,143, 82,143],
    [143,331,323,141,  0,  0,  0,  0,  0,141,322,331,143],
    [143,243,280,141,141,141,126,141,141,141,280,242,143],
    [143, 82,143,143,322,141, 83,141,323,143,143, 82,143],
    [143,331,322,143,245,  0,331,  0,245,143,323,331,143],
    [143, 22,242, 82,331,  0, 88,  0,331, 82,243, 22,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143]
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
    "cannotMoveIn": {},
    "canFlyFrom": true
}