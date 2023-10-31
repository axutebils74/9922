main.floors.MT0=
{
    "floorId": "MT0",
    "title": "主塔 0 层",
    "name": "塔底",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "defaultGround": "ground",
    "images": [],
    "ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1, 88, 85,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 45,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 21,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 22,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 23,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,320,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 87,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "area1.mp3"
        },
        "\t[???]……",
        {
            "type": "playSound",
            "name": "startup.wav"
        },
        {
            "type": "setValue",
            "name": "flag:lightRadius",
            "value": "100"
        },
        {
            "type": "function",
            "function": "function(){\ncore.drawMap();\n}"
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[???,hero]……",
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "left"
        },
        {
            "type": "sleep",
            "time": 300
        },
        {
            "type": "changePos",
            "direction": "right"
        },
        {
            "type": "sleep",
            "time": 300
        },
        {
            "type": "changePos",
            "direction": "down"
        },
        {
            "type": "sleep",
            "time": 300
        },
        {
            "type": "moveHero",
            "time": 100,
            "steps": [
                "down"
            ]
        },
        {
            "type": "playSound",
            "name": "hint.mp3"
        },
        "\t[复读机]你好，9922号“咕”型机器人。这里是留言输出系统，会将之前所留信息传达给你。\n通俗地讲就是“复读机”。",
        "\t[hero]（……）",
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "jumpHero",
            "time": 300
        },
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "jumpHero",
            "time": 300
        },
        "\t[复读机]不要尝试说话了，你没有安装语言模块，不过你可以用头顶的全息投影仪来表达情感。",
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[复读机]我检测到你使用了全息投影仪。对，就是这样。",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[复读机]你一定会对不能说话不太满意。不过，我这里有个好消息。",
        "\t[复读机]你的身上装有最新版本的\r[yellow]通用全自动学习系统\r。这个系统，从理论上讲，能够让拥有者快速学习一切事物！怎么样，是不是很coooooool？",
        "\t[复读机]现在你处在一座塔的底部，而你的任务，是\n\r[yellow]登上塔顶，找到你的创造者\r。",
        "\t[hero]（登上塔顶，找到我的创造者……）",
        "\t[复读机]当你出现在适当的位置时，我会再次用通信模块向你提供信息，帮助你提升学习速率。前进吧！\nover。"
    ],
    "parallelDo": "",
    "events": {
        "8,6": [
            {
                "type": "if",
                "condition": "flag:20F_boss_finish == 1",
                "true": [
                    {
                        "type": "if",
                        "condition": "(!switch:B)",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "switch:B",
                                "value": "1"
                            },
                            "\t[钥匙商人,trader]\b[down,null]哎呀，两位姑娘要到地下吗？要不要多带点钥匙下去？",
                            "\t[芳芷,hero2]\b[down,null]请问，你之前卖给我们的红钥匙，是从哪进的货？",
                            "\t[钥匙商人,trader]\b[down,null]啊？这……怎么了吗？",
                            "\t[芳芷,hero2]\b[down,null]哼，就因为这把钥匙我们差点被人揍死，都怪你！\n快说钥匙是哪来的！",
                            {
                                "type": "animate",
                                "name": "E_dots",
                                "loc": [
                                    8,
                                    6
                                ]
                            },
                            "\t[钥匙商人,trader]\b[down,null]呃……其实……这钥匙是……\n\r[yellow]捡来的\r。",
                            "\t[hero]\b[down,null]（？？？捡来的你敢卖这么贵？）",
                            "\t[钥匙商人,trader]\b[down,null]俺见识少，没见过红色的钥匙，但物以稀为贵的道理俺还是懂的。",
                            {
                                "type": "animate",
                                "name": "E_unhappy",
                                "loc": "hero"
                            },
                            "\t[芳芷,hero2]\b[down,null]那，这些黄蓝钥匙是哪来的呢？",
                            "\t[钥匙商人,trader]\b[down,null]从地下进的。\n两位姑娘应该也知道，地下是圣匙帮的领地，钥匙特别多，虽然明面上圣匙帮要求钥匙不外传，但总有些贪财之人往外出售一些钥匙。",
                            "\t[芳芷,hero2]\b[down,null]原来圣匙帮也有人抵抗不了钥匙换钱的诱惑吗……\n也对，听说他们是个很松散的组织来着。",
                            "\t[钥匙商人,trader]\b[down,null]然后这次俺进的货特别多，俺都带不上去了，就在上面留了个字条。回来的时候在地上发现的那把红钥匙，寻思没人要了，俺就自己揣着了。",
                            "\t[芳芷,hero2]\b[down,null]好，明白了，谢谢大叔！",
                            {
                                "type": "animate",
                                "name": "E_unhappy",
                                "loc": "hero"
                            },
                            "\t[hero]\b[down,null]（所以这红钥匙到底是怎么回事……）",
                            {
                                "type": "openShop",
                                "id": "13FShop",
                                "open": true
                            }
                        ],
                        "false": [
                            {
                                "type": "openShop",
                                "id": "13FShop",
                                "open": true
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(!switch:A)",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            "\t[钥匙商人,trader]\b[down,null]哎呀，两位美女又来啦。这回我搞到了很多货，而且还搞来一把红钥匙，你们一定会需要的。",
                            {
                                "type": "openShop",
                                "id": "13FShop",
                                "open": true
                            }
                        ],
                        "false": [
                            {
                                "type": "openShop",
                                "id": "13FShop",
                                "open": true
                            }
                        ]
                    }
                ]
            }
        ],
        "5,0": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "confirm",
                    "text": "下去之后就暂时回不来了，确认要下去吗？",
                    "yes": [
                        {
                            "type": "setValue",
                            "name": "flag:__visited__",
                            "value": "null"
                        },
                        {
                            "type": "changeFloor",
                            "floorId": "BMT1",
                            "direction": "down",
                            "time": 500
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    8,
                                    6
                                ]
                            ],
                            "floorId": "MT0",
                            "remove": true
                        },
                        {
                            "type": "disableShop",
                            "id": "12FShop"
                        },
                        {
                            "type": "disableShop",
                            "id": "12FShop_easy"
                        },
                        {
                            "type": "disableShop",
                            "id": "13FShop"
                        },
                        {
                            "type": "setBlock",
                            "number": "closedMoneyShop",
                            "loc": [
                                [
                                    10,
                                    4
                                ]
                            ],
                            "floorId": "MT12"
                        },
                        {
                            "type": "setValue",
                            "name": "flag:12FShopClose",
                            "value": "1"
                        }
                    ],
                    "no": [
                        {
                            "type": "moveHero",
                            "steps": [
                                "backward"
                            ]
                        }
                    ]
                }
            ]
        },
        "6,0": {
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
                {
                    "type": "if",
                    "condition": "flag:B20F_boss_activated>=2",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(!switch:A)",
                            "true": [
                                {
                                    "type": "setValue",
                                    "name": "switch:A",
                                    "value": "1"
                                },
                                "\t[系统提示]你还真是想回去捡钥匙呢。\n但是回不去了。",
                                {
                                    "type": "choices",
                                    "text": "\t[系统提示]获得成就\r[yellow]【恋恋不舍】\r！\n然而并没有什么用处。",
                                    "choices": [
                                        {
                                            "text": "？？？",
                                            "action": []
                                        }
                                    ]
                                }
                            ],
                            "false": [
                                "\t[hero]（看来是回不去了。）"
                            ]
                        }
                    ],
                    "false": [
                        {
                            "type": "if",
                            "condition": "switch:B >= 3 && core.getFlag(\"canGotoMusicRoom\", true)",
                            "true": [
                                {
                                    "type": "playSound",
                                    "name": "mteleport.wav"
                                },
                                {
                                    "type": "changeFloor",
                                    "floorId": "MusicRoom",
                                    "loc": [
                                        6,
                                        8
                                    ],
                                    "direction": "up",
                                    "time": 1000
                                }
                            ],
                            "false": [
                                {
                                    "type": "setValue",
                                    "name": "switch:B",
                                    "operator": "+=",
                                    "value": "1"
                                },
                                "\t[hero]（打不开。）"
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "6,12": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "6,8": [
            "一张沾满灰尘的纸条，上面印着几个字：\n\r[yellow]来上面找我们\r"
        ],
        "6,4": [
            {
                "type": "setValue",
                "name": "flag:canGotoMusicRoom",
                "value": "false"
            },
            {
                "type": "setValue",
                "name": "flag:current_chapter",
                "value": "1"
            }
        ]
    },
    "afterOpenDoor": {},
    "cannotMove": {},
    "bgmap": [

],
    "fgmap": [

],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "color": [
        0,
        0,
        0,
        0.5
    ],
    "eachArrive": [
        {
            "type": "pauseBgm"
        }
    ],
    "underGround": true,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}