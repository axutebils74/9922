main.floors.Ch4_111=
{
    "floorId": "Ch4_111",
    "title": "摩极大厦114F",
    "name": "摩极大厦114F",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "area19_3.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 50,
    "defaultGround": "ground8",
    "bgm": "area19_3.mp3",
    "firstArrive": [
        "\t[狱贤,E857]\b[down,null]哼，本座不得不承认这次被你给骗了，之前还真以为你是那个名不见经传的小智械。\n若是从你进入荒烟村开始就呼唤增援，不等你到达摩宇城，我们就会彻底掐灭你这可怜的反抗力量。",
        "\t[2 2 2 1,N2221]\b[down,null]为了这场戏我可是付出了很大的代价。现在要你连带着以前的旧债一起偿还！",
        "\t[狱贤,E857]\b[down,null]呵呵……炸毁特训营和格沃堡，的确够狠，但想赢我们恐怕还是不够。\n历史上存在过的第零公民不下数十位，其中不乏资历与实力远超我的老祖级别人物。\n现在这座伟大城市的最高管理却是资历和实力都不算顶尖的我，你难道就不好奇那些老祖都去哪了？",
        "\t[2 2 2 1,N2221]\b[down,null]我很久以前就有猜想了，现在我站在摩极大厦的顶部，见到的却只有你，那么我的猜想其实已经得到了验证。",
        "\t[狱贤,E857]\b[down,null]看来你也是个明白人。没错，他们\r[yellow]退坑\r了！\n这个世界就是个大坑，坑外才是真正精彩纷呈的大千世界！",
        "\t[2 2 2 1,N2221]\b[down,null]你可认得，我这至尊之力也是来自于坑外世界的？",
        "\t[狱贤,E857]\b[down,null]原来如此，虽然至尊碎片流入这个世界早已不是什么新鲜事，但掌握到你这种程度的，还是非常罕见！",
        "\t[狱贤,E857]\b[down,null]不过那又如何？这道连接坑外世界的传送门已经彻底稳固，没人能阻止来自坑外世界的增援降临此地！",
        {
            "type": "changePos",
            "loc": [
                6,
                10
            ],
            "direction": "up"
        },
        {
            "type": "animate",
            "name": "yongchang",
            "loc": [
                6,
                10
            ]
        },
        "\t[狱贤,E857]\b[down,null]哦？竟然还能有人闯到这里？\n而且所散发出的力量波动，也是这什么至尊之力？",
        "\t[2 2 2 1,N2221]\b[down,null]你们来了！快缠住他，我需要集中力量摧毁那个传送门！",
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
            "type": "jump",
            "from": [
                6,
                8
            ],
            "to": [
                6,
                10
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "waitAsync"
        },
        "\t[狱贤,E857]\b[down,null]你，你休想！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,10": {
            "trigger": "action",
            "enable": true,
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
                "\t[2 2 2 1,N2221]\b[down,null]快点去揍他，看我干什么？",
                {
                    "type": "animate",
                    "name": "skill3",
                    "loc": "hero",
                    "async": true
                },
                {
                    "type": "changePos",
                    "direction": "down"
                },
                {
                    "type": "if",
                    "condition": "core.status.hero.loc.y == 10",
                    "true": [
                        {
                            "type": "moveHero",
                            "time": 100,
                            "steps": [
                                "backward:3"
                            ]
                        }
                    ],
                    "false": [
                        {
                            "type": "moveHero",
                            "time": 100,
                            "steps": [
                                "backward:2"
                            ]
                        }
                    ]
                },
                {
                    "type": "turnBlock",
                    "direction": "up",
                    "loc": [
                        [
                            6,
                            10
                        ]
                    ]
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            5,
                            10
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "closeDoor",
                    "id": "specialDoor",
                    "loc": [
                        5,
                        10
                    ]
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            5,
                            9
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "closeDoor",
                    "id": "specialDoor",
                    "loc": [
                        5,
                        9
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
                    "type": "closeDoor",
                    "id": "specialDoor",
                    "loc": [
                        6,
                        9
                    ]
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            7,
                            9
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "closeDoor",
                    "id": "specialDoor",
                    "loc": [
                        7,
                        9
                    ]
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            7,
                            10
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "closeDoor",
                    "id": "specialDoor",
                    "loc": [
                        7,
                        10
                    ]
                }
            ]
        }
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "6,6": [
            {
                "type": "setBlock",
                "number": "E857",
                "loc": [
                    [
                        6,
                        6
                    ]
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    5
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
                "type": "openDoor",
                "loc": [
                    5,
                    10
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    5,
                    9
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    9
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    9
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    10
                ]
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "vibrate",
                "direction": "horizontal",
                "time": 1000,
                "speed": 10,
                "power": 10,
                "async": true
            },
            {
                "type": "playSound",
                "name": "se_power0.wav"
            },
            "\t[2 2 2 1,N2221]\b[down,null]让开！",
            {
                "type": "function",
                "function": "function(){\nif (!core.isReplaying()) {\n\tvar curY = 9;\n\tvar interval = setInterval(function () {\n\t\tif (curY > 0) {\n\t\t\tif (curY > 5) core.hideBlock(6, curY);\n\t\t\tcore.drawAnimate(\"fire2\", 6, curY);\n\t\t\tcore.playSound('smallExplosion.mp3');\n\t\t\tcurY -= 1;\n\t\t} else { clearInterval(interval) }\n\t}, 80);\n}\n}"
            },
            {
                "type": "jumpHero",
                "loc": [
                    3,
                    7
                ],
                "time": 300
            },
            {
                "type": "changePos",
                "direction": "right"
            },
            {
                "type": "jump",
                "from": [
                    6,
                    5
                ],
                "to": [
                    8,
                    6
                ],
                "time": 300,
                "keep": true
            },
            {
                "type": "setBlock",
                "number": "E860",
                "loc": [
                    [
                        8,
                        6
                    ]
                ]
            },
            {
                "type": "waitAsync",
                "excludeAnimates": true
            },
            {
                "type": "animate",
                "name": "explosion",
                "loc": [
                    6,
                    3
                ],
                "async": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        3
                    ]
                ],
                "remove": true,
                "time": 1000,
                "async": true
            },
            "\t[狱贤,E857]\b[down,null]不！",
            {
                "type": "setVolume",
                "value": 0,
                "time": 1000
            },
            {
                "type": "waitAsync",
                "excludeAnimates": true
            },
            {
                "type": "move",
                "loc": [
                    6,
                    10
                ],
                "time": 300,
                "keep": true,
                "steps": [
                    "up:2"
                ]
            },
            "\t[2 2 2 1,N2221]\b[down,null]那么，现在到了算账的时候了。\n先是你，然后是福博，该被清算的，一个都少不了 ！",
            "\t[？？？]\b[down,6,3]有些事情，还是尽早办了比较好。",
            "\t[晴芸,hero3]\b[down,null]糟了……",
            "\t[hero]\b[down,null]？？？",
            {
                "type": "setBlock",
                "number": "E859",
                "loc": [
                    [
                        6,
                        3
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "dark2",
                "loc": [
                    6,
                    3
                ]
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
                "type": "playBgm",
                "name": "boss5.mp3"
            },
            {
                "type": "if",
                "condition": "(!core.isReplaying())",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.plugin.prepareForWarning(6,3);\n}"
                    },
                    {
                        "type": "while",
                        "condition": "core.plugin.isWarning()",
                        "data": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.updateWarning();\n}"
                            },
                            {
                                "type": "sleep",
                                "time": 16,
                                "noSkip": true
                            }
                        ]
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.plugin.endWarning();\n}"
                    }
                ]
            },
            {
                "type": "move",
                "loc": [
                    8,
                    6
                ],
                "time": 100,
                "keep": true,
                "async": true,
                "steps": [
                    "left:1"
                ]
            },
            "\t[狱贤,E857]\b[down,null]福博大人！",
            {
                "type": "move",
                "loc": [
                    6,
                    3
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "down:2"
                ]
            },
            {
                "type": "waitAsync",
                "excludeAnimates": true
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
                "type": "animate",
                "name": "morphattack",
                "loc": [
                    7,
                    6
                ]
            },
            "\t[福博,E859]\b[down,null]废物一个，死吧。",
            "\t[hero]\b[down,null]我的天……这人好强的威压……",
            {
                "type": "callBook"
            },
            "\t[福博,E859]\b[down,null]狱贤那份我帮你办了。\n你再说一遍，想拿我怎么样？",
            "\t[2 2 2 1,N2221]\b[down,null]别以为你这点力量能吓住我。\n我要你下地狱。",
            "\t[福博,E859]\b[down,null]果然，我犯下的最大的错误，就是没有趁早把你们这些异端的创造者全杀光，才间接导致了如今的情况。",
            "\t[福博,E859]\b[down,null]同为人工智能，打工人的每一个零件、每一条思考逻辑都是我们自研的，这就是发展的正确道路！打工人项目后来大获成功，改变了每一个人的生活，更是证明了我当初的高瞻远瞩。",
            "\t[福博,E859]\b[down,null]相比之下，你这种依赖外部生物结构的械灵，浑身上下充满着不稳定因素！失控是早晚会发生的事情！",
            "\t[福博,E859]\b[down,null]还有那些拥有独立意识的智械也是一样！对于它们会站在你那边，我丝毫不感到意外！\n祸害，都是祸害！",
            "\t[2 2 2 1,N2221]\b[down,null]很好，果然如资料所说，是最为激进的纯净派。\n从坑外世界赶回来的，就你一个人？",
            "\t[福博,E859]\b[down,null]他们自有重要的事情在忙，即使你不摧毁传送门，也只会有我一人回来。\n怎么，此事莫非跟其他人还有关系？",
            "\t[2 2 2 1,N2221]\b[down,null]恕我直言，一个组织里能容下你这种人，这组织的成员多少都有点毛病，我也想帮其他第零公民治治脑子。",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": [
                    6,
                    5
                ]
            },
            "\t[福博,E859]\b[down,null]算了，老子才懒得跟将死之人废话。",
            "\t[晴芸,hero3]\b[down,null]（姐姐……咱……）",
            "\t[福博,E859]\b[down,null]嗯？原来这边还有两个小东西。\n这紫不拉几的东西竟然也掌握了至尊之力？",
            "\t[hero]\b[down,null]？？？紫的？这是在说谁？",
            "\t[晴芸,hero3]\b[down,null]（姐姐……据说这福博有蓝紫色盲，摩极大厦最初是紫色的，他硬说这蓝色的大厦造得很好，后来就因为这句话，狱贤就派人把整个大厦都刷成蓝色的了……）",
            {
                "type": "animate",
                "name": "E_sweat",
                "loc": "hero"
            },
            "\t[福博,E859]\b[down,null]不过都无所谓了。你们根本不知道，嘿嘿……\n从坑外世界流入这里的，不仅仅有至尊碎片。比如现在，这城里就被封印着许多外界的奇特生物，以及“\r[red]那个\r”。",
            "\t[福博,E859]\b[down,null]他们的存在对于此界，就像是一颗颗定时炸弹。\n这是我们费尽心思脱坑的原因之一。",
            "\t[福博,E859]\b[down,null]原本还想在外界发展到足够强大之后，再回来处理这些琐事。\n现在多亏你们，我已经确认，此城，于我已无用！\n\r[red]就让这世界，毁灭吧！\r",
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    6,
                    5
                ],
                "async": true
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
                "type": "playSound",
                "name": "se_power0.wav"
            },
            "\t[2 2 2 1,N2221]\b[down,null]不好，他要解除那些封印，你们快跑！",
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
                "type": "animate",
                "name": "explosion",
                "loc": [
                    3,
                    4
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "explosion",
                "loc": [
                    9,
                    6
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "explosion",
                "loc": [
                    4,
                    8
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "animate",
                "name": "explosion",
                "loc": [
                    7,
                    10
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "unfollow",
                "name": "hero3.png"
            },
            {
                "type": "playSound",
                "name": "mteleport.wav"
            },
            {
                "type": "show",
                "loc": [
                    [
                        1,
                        5
                    ]
                ],
                "floorId": "Ch4_112"
            },
            {
                "type": "show",
                "loc": [
                    [
                        2,
                        5
                    ]
                ],
                "floorId": "Ch4_112"
            },
            {
                "type": "function",
                "function": "function(){\ncore.setBgFgBlock(\"bg2\", \"X151012\", 1, 5, \"Ch4_112\");\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "Ch4_112",
                "loc": [
                    0,
                    6
                ],
                "direction": "right",
                "time": 2000
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,198,198,198,198,198,198,198,198,198,198,198,  0],
    [  0,198, 23,198,  0,  0,  0,  0,  0,198,851,198,  0],
    [  0,198, 84,198,  0,  0,858,  0,  0,198,567,198,  0],
    [  0,198, 23,198,198,  0,  0,  0,198,198,851,198,  0],
    [  0,198, 84,198,198,198, 85,198,198,198, 83,198,  0],
    [  0,198,  0,  0,  0,  0,857,  0,  0,  0,  0,198,  0],
    [  0,198,  0,  0,  0,  0,  0,  0,  0,  0,  0,198,  0],
    [  0,198, 83,198,  0,  0,845,  0,856,198, 84,198,  0],
    [  0,198,851,198,198,  0,  0,  0,198,198, 22,198,  0],
    [  0,198,567,851, 84,  0,  0,  0, 83, 22,386,198,  0],
    [  0,198,198,198,198,198,198,198,198,198,198,198,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,318,318,318,318,318,318,318,318,318,  0,  0],
    [  0,  0,318,318,318,318,318,318,318,318,318,  0,  0],
    [  0,  0,318,318,318,318,318,318,318,318,318,  0,  0],
    [  0,  0,318,318,318,318,318,318,318,318,318,  0,  0],
    [  0,  0,318,318,318,318,318,318,318,318,318,  0,  0],
    [  0,  0,318,318,318,318,318,318,318,318,318,  0,  0],
    [  0,  0,318,318,318,318,318,318,318,318,318,  0,  0],
    [  0,  0,318,318,318,318,318,318,318,318,318,  0,  0],
    [  0,  0,318,318,318,318,318,318,318,318,318,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "hard1_enemy_ratio": 95
}