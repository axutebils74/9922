main.floors.Cave6_2=
{
    "floorId": "Cave6_2",
    "title": "至尊小屋",
    "name": "至尊小屋",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "ground7",
    "bgm": "area12.mp3",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:arrived_Cave6_2",
            "value": "1"
        },
        {
            "type": "comment",
            "text": "这个flag用于防止鸽化解除时解锁楼层传送器"
        },
        {
            "type": "setValue",
            "name": "flag:Cave_disableFly",
            "value": "1"
        },
        {
            "type": "setVolume",
            "value": 0,
            "time": 2000,
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
        "\t[hero]\b[this,hero]总算解决前面那一堆门了，看看这里有什么好东西……",
        {
            "type": "moveHero",
            "time": 300,
            "steps": [
                "up:2"
            ]
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        {
            "type": "moveHero",
            "steps": [
                "up:3"
            ]
        },
        "\t[hero]\b[this,hero]你是！2221！",
        {
            "type": "turnBlock",
            "direction": "down",
            "loc": [
                [
                    6,
                    2
                ]
            ]
        },
        {
            "type": "jump",
            "from": [
                6,
                2
            ],
            "dxy": [
                0,
                0
            ],
            "time": 300,
            "keep": true
        },
        "\t[2221,N600]\b[this,6,2]哇啊啊啊，你，你是谁！你怎么知道我的！",
        "\t[hero]\b[this,hero]当然是因为我见过你的复制体，从长相到装束都一模一……等等……",
        {
            "type": "animate",
            "name": "E_embarrass",
            "loc": [
                6,
                2
            ],
            "async": true
        },
        "\t[2221,N600]\b[this,6,2]你，你在说什么！什么复制体？",
        "\t[芳芷,hero2]\b[this,hero]制作复制体的技术是被严令禁止使用的，你在哪见过她的复制体？",
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero",
            "async": true
        },
        "\t[hero]\b[this,hero]啊这……\n（不对，我肯定不能说是在这个世界外面见到的……）",
        "\t[hero]\b[this,hero]没有，我是说，我见过她本人……",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": [
                6,
                2
            ],
            "async": true
        },
        "\t[2221,N600]\b[this,6,2]是吗……不过我不记得你……",
        "\t[hero]\b[this,hero]（她的长相和装束的确和塔顶那个人一样，除了眼睛。\n塔顶那家伙的猩红眼眸，绝对不是一个普通女孩——或者形象是普通女孩的智械能拥有的。）",
        "\t[芳芷,hero2]\b[this,hero]言归正传，你知道这里发生了什么吗？刚才是不是有谁闯进来了？",
        {
            "type": "move",
            "loc": [
                6,
                2
            ],
            "time": 200,
            "keep": true,
            "steps": [
                "down:1"
            ]
        },
        "\t[2221,N600]\b[this,6,3]是的，我一直在这里，然后感觉到有一种夹杂着一丝熟悉感的陌生气息从上面闯了进来，路过外面，直奔最底层去了。",
        "\t[晴芸,hero3]\b[this,hero]这么说，你没看到她的样貌了。\n你刚才说，有一丝熟悉感？",
        "\t[2221,N600]\b[this,6,3]嗯，我好像在哪感受过，但是……我想不起来了。",
        "\t[芳芷,hero2]\b[this,hero]应该是因为\r[yellow]记忆封印\r的原因。你不用强迫自己回忆了，这件事交给我们吧。",
        "\t[hero]\b[this,hero]记忆封印？",
        "\t[芳芷,hero2]\b[this,hero]嗯，以前发生过一些事情……还是让她忘掉比较好。",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[hero]\b[this,hero]好吧，既然这样，从她身上应该也得不到什么有用的信息了……继续出发吧。",
        {
            "type": "moveHero",
            "async": true,
            "steps": [
                "down:1"
            ]
        },
        "\t[2221,N600]\b[this,6,3]等等，让我跟你们一起吧。",
        {
            "type": "waitAsync"
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]\b[this,hero]我觉得你还是留在这里比较安全。",
        "\t[2221,N600]\b[this,6,3]哼，别强撑了。就你这点实力，出去白给吗？",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[2221,N600]\b[this,6,3]而且，实不相瞒，在你的身上我也感觉到一丝熟悉的气息。",
        "\t[hero]\b[this,hero]？？？！\n喂，你不会是说我和那个闯入者的气息一样吧？",
        {
            "type": "move",
            "loc": [
                6,
                3
            ],
            "time": 200,
            "keep": true,
            "steps": [
                "down:1"
            ]
        },
        "\t[2221,N600]\b[this,6,4]不是。这是来自另一个物体的气息，而且我记得它的名字——\n\r[yellow]皇极徽章\r，绝对错不了的，就在你体内。",
        {
            "type": "moveHero",
            "async": true,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[hero]\b[this,hero]你，你知道这个徽章的来历？",
        {
            "type": "waitAsync"
        },
        "\t[2221,N600]\b[this,6,4]不……不记得了。但我从它上面感受到了温暖和安心感，也许我以前和它有过什么关联吧。",
        "\t[2221,N600]\b[this,6,4]你身上的徽章并不完整。我这里恰好有徽章的一个碎片，拼上去试试。",
        {
            "type": "animate",
            "name": "light2",
            "loc": "hero"
        },
        {
            "type": "function",
            "function": "function(){\ncore.setFlag(\"talent13_enabled\", true);\ncore.plugin._tryUpgrade(13);\n}"
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[hero]\b[this,hero]竟然真的成功了！你到底是何方神圣，这也太强了吧？",
        "\t[2221,N600]\b[this,6,4]我……我只是很普通的智械而已。\n所以，现在我可不可以加入你们的队伍？",
        "\t[hero]\b[this,hero]当然欢迎！",
        {
            "type": "animate",
            "name": "E_love",
            "loc": [
                6,
                4
            ],
            "async": true
        },
        "\t[2221,N600]\b[this,6,4]好耶！一起出发吧！",
        {
            "type": "move",
            "loc": [
                6,
                4
            ],
            "time": 100,
            "steps": [
                "down:2"
            ]
        },
        {
            "type": "follow",
            "name": "22212.png"
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "function",
            "function": "function(){\ncore.status.hero.atk += 15000;\ncore.status.hero.def += 15000;\ncore.status.hero.mdef += 15000;\n}"
        },
        "2221加入了队伍，全属性暂时提升15000点！",
        "\t[hero]\b[this,hero]我正愁外面的怪物太棘手呢，你能帮忙的话可真是雪中送炭了。",
        "\t[2221,N600]\b[this,hero]一起并肩战斗吧！好开心！",
        {
            "type": "animate",
            "name": "E_sweat",
            "loc": "hero",
            "async": true
        },
        "\t[hero]\b[this,hero]（她是不是突然兴奋过头了……）",
        "\t[芳芷,hero2]\b[this,hero]（好久没见到她这么有活力的样子了……即使封印了以前的大部分记忆，也始终无法抹去皇极徽章对她的影响吗……）",
        {
            "type": "waitAsync"
        },
        {
            "type": "resumeBgm"
        },
        {
            "type": "setVolume",
            "value": 90,
            "time": 0
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": [
            "屏幕上什么都没有。",
            {
                "type": "if",
                "condition": "!switch:A",
                "true": [
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    },
                    {
                        "type": "animate",
                        "name": "E_question",
                        "loc": "hero"
                    },
                    "\t[hero]咦，你刚才到底在看什么？",
                    "\t[2221,N600]没……没什么。\n我之前在这里一直在冥想……想一些事情。",
                    "\t[hero]（……还是不要多问了。）"
                ]
            }
        ],
        "3,2": [
            {
                "type": "while",
                "condition": "true",
                "data": [
                    {
                        "type": "choices",
                        "text": "\t[魔法神像,moneyShop]你可以在这里兑换钥匙！",
                        "choices": [
                            {
                                "text": "3黄钥匙换1蓝钥匙",
                                "color": [
                                    250,
                                    247,
                                    71,
                                    1
                                ],
                                "need": "core.itemCount(\"yellowKey\") >= 3",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "item:yellowKey",
                                        "operator": "-=",
                                        "value": "3"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:blueKey",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "1蓝钥匙换3黄钥匙",
                                "color": [
                                    119,
                                    119,
                                    255,
                                    1
                                ],
                                "need": "core.itemCount(\"blueKey\") >= 1",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "item:blueKey",
                                        "operator": "-=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:yellowKey",
                                        "operator": "+=",
                                        "value": "3"
                                    }
                                ]
                            },
                            {
                                "text": "不换！",
                                "color": [
                                    255,
                                    255,
                                    255,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "break",
                                        "n": 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
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
                        "type": "animate",
                        "name": "E_surprise",
                        "loc": "hero"
                    },
                    "\t[hero]哇，这个商店这么好！",
                    "\t[2221,N600]？\n这不是很普通的商店吗？",
                    "\t[hero]3黄和1蓝随便互换啊！这拿到外面去肯定会大受欢迎的！",
                    "\t[晴芸,hero3]但是拿不到外面去，对吧？",
                    "\t[2221,N600]拿到外面去？干啥用？",
                    "\t[芳芷,hero2]（小声）她在这里宅了很久了，外面现在是什么情况她根本不清楚。",
                    {
                        "type": "animate",
                        "name": "E_sweat",
                        "loc": "hero"
                    },
                    "\t[hero]……没事，当我没说。"
                ]
            }
        ],
        "9,2": [
            {
                "type": "choices",
                "text": "\t[神像,expShop]需要什么帮助？",
                "choices": [
                    {
                        "text": "查阅资料",
                        "action": [
                            {
                                "type": "insert",
                                "name": "第三章资料库"
                            }
                        ]
                    },
                    {
                        "text": "神秘力量",
                        "icon": "I62",
                        "color": [
                            179,
                            0,
                            255,
                            1
                        ],
                        "condition": "core.plugin.getTalentLv(3) == 8",
                        "action": [
                            "\t[系统提示]你到这里还没有刷够50次轻风，肯定已经咸爆了吧？",
                            "\t[系统提示]既然你已经咸了这么多，肯定不在乎再多咸一些。\n我直接帮你把轻风的使用次数改成50了，免费的，够亲民吧？",
                            {
                                "type": "playSound",
                                "name": "item.mp3"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.setFlag(\"talent3_up8_spe\", 50);\n}"
                            },
                            "\t[系统提示]搞定了，快点满\\i[I62]神秘力量吧。记得多使用\\i[skill3]轻风哦！"
                        ]
                    },
                    {
                        "text": "没什么",
                        "action": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "Cave6",
            "loc": [
                12,
                6
            ],
            "direction": "left"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,30023,145,145,145,145,145,145],
    [145,145,  7,131,  8,  0,603,  0,  9,130, 10,145,145],
    [145,145,  0,  0,  0,  0,  0,  0,  0,  0,  0,145,145],
    [145,145,  0,  0,  0,  0,  0,  0,  0,  0,  0,145,145],
    [145,145,30025,  0,  0,334,  0,334,  0,  0,30025,145,145],
    [145,145,30031,  0,30027,  0,  0,  0,30027,  0,30031,145,145],
    [145,145,  0,  0,  0,334,  0,334,  0,  0,  0,145,145],
    [145,145,30006,30007,30033,  0,  0,  0,30033,30006,30007,145,145],
    [145,145,30012,30013,  0,  0,  0,  0,  0,30012,30013,145,145],
    [145,145,30018,30019,  0,  0,  0,  0,  0,30018,30019,145,145],
    [145,145,145,145,145,145,  0,145,145,145,145,145,145],
    [145,145,145,145,145,145, 89,145,145,145,145,145,145]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,30000,30001,  0,  0,  0,  0,  0,30000,30001,  0,  0],
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
    "color": null,
    "beforeBattle": {},
    "cannotMoveIn": {}
}