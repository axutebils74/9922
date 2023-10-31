main.floors.MT12=
{
    "floorId": "MT12",
    "title": "主塔 12 层",
    "name": "主塔-12",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "area2.mp3",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:skill0_ratio_increase_pp",
            "value": "2"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "moveHero",
            "time": 200,
            "steps": [
                "down:1"
            ]
        },
        {
            "type": "sleep",
            "time": 200
        },
        "\t[芳芷,hero2]咦，那边有个人。",
        {
            "type": "changePos",
            "direction": "left"
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        {
            "type": "move",
            "loc": [
                5,
                4
            ],
            "time": 200,
            "keep": true,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "playSound",
            "name": "pickKey.wav"
        },
        {
            "type": "sleep",
            "time": 200
        },
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "jump",
            "from": [
                5,
                3
            ],
            "to": [
                5,
                6
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "move",
            "loc": [
                5,
                6
            ],
            "time": 200,
            "keep": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "playSound",
            "name": "pickKey.wav"
        },
        {
            "type": "sleep",
            "time": 200
        },
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "jump",
            "from": [
                4,
                6
            ],
            "to": [
                7,
                8
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "changePos",
            "direction": "down"
        },
        {
            "type": "move",
            "loc": [
                7,
                8
            ],
            "time": 200,
            "keep": true,
            "steps": [
                "down:1"
            ]
        },
        {
            "type": "playSound",
            "name": "pickKey.wav"
        },
        {
            "type": "sleep",
            "time": 200
        },
        {
            "type": "move",
            "loc": [
                7,
                9
            ],
            "time": 200,
            "keep": true,
            "steps": [
                "down:2",
                "left:2"
            ]
        },
        {
            "type": "playSound",
            "name": "pickKey.wav"
        },
        {
            "type": "sleep",
            "time": 200
        },
        {
            "type": "move",
            "loc": [
                5,
                11
            ],
            "time": 200,
            "steps": [
                "left:2"
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[芳芷,hero2]呀，钥匙都被他捡走了！快追上去问问是怎么回事！",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,4": [
            {
                "type": "if",
                "condition": "flag:12FShopClose",
                "true": [
                    "神像眼中的红光已经彻底灭了，再无任何反应。",
                    {
                        "type": "exit"
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
                    "\t[神像,moneyShop]给我钱，我可以增强你的力量。",
                    {
                        "type": "setValue",
                        "name": "flag:skill0_val",
                        "value": "200"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:skill0_cost",
                        "value": "10"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:skill0_ratio",
                        "value": "100"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:skill1_ratio",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:skill1_cost",
                        "value": "10"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.setFlag(\"skill1_extra_text\", \"\");\n}"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:skill2_charge",
                        "value": "3"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:skill2_val",
                        "value": "25"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:skill2_cost",
                        "value": "10"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:hard == 1)",
                "true": [
                    {
                        "type": "openShop",
                        "id": "12FShop_easy",
                        "open": true
                    }
                ],
                "false": [
                    {
                        "type": "openShop",
                        "id": "12FShop",
                        "open": true
                    }
                ]
            }
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "(!switch:A)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    },
                    "\t[恶臭青年,youngMan]我需要魔法……我还需要钱……谔谔啊啊啊啊啊！",
                    "\t[芳芷,hero2]可是，刚才你面前不就有一个能量块吗？",
                    "\t[恶臭青年,youngMan]我没办法吸取其中的能量……这位蓝发小姐姐有办法吸取的话，喂给我吧……",
                    "\t[芳芷,hero2]……我要吐了，快走。",
                    {
                        "type": "animate",
                        "name": "E_sweat",
                        "loc": "hero"
                    }
                ]
            },
            {
                "type": "confirm",
                "text": "要给他灌输114能量并给他514金币吗？",
                "yes": [
                    {
                        "type": "if",
                        "condition": "(status:mana <114)",
                        "true": [
                            "能量不足！",
                            {
                                "type": "exit"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "(status:money<514)",
                        "true": [
                            "金币不足！",
                            {
                                "type": "exit"
                            }
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "status:mana",
                        "operator": "-=",
                        "value": "114"
                    },
                    {
                        "type": "setValue",
                        "name": "status:money",
                        "operator": "-=",
                        "value": "514"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:11Fmission",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "(!core.isReplaying())",
                        "true": [
                            {
                                "type": "playSound",
                                "name": "ha.mp3"
                            }
                        ]
                    },
                    "\t[恶臭青年,youngMan]这！这……哼，哼哼，谔啊啊啊啊啊啊啊，啊啊啊啊啊啊啊啊啊！",
                    {
                        "type": "animate",
                        "name": "fire2",
                        "loc": [
                            11,
                            1
                        ],
                        "async": true
                    },
                    {
                        "type": "hide",
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "animate",
                        "name": "E_sweat",
                        "loc": "hero"
                    },
                    "\t[芳芷,hero2]……真想不明白你为什么要帮他。算了，你的决定我不干涉。\n咦，他好像留下了什么东西……",
                    {
                        "type": "setValue",
                        "name": "item:greenKey",
                        "operator": "+=",
                        "value": "1"
                    },
                    "\t[芳芷,hero2]一把绿钥匙。没有散发出他身上那种恶臭的气息，不像是他身上掉下来的东西。\n奇怪，难道说……",
                    {
                        "type": "waitAsync"
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "10,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "3,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,  0,237,323, 31, 20, 32,  0, 20,  0, 88,128, 20],
    [ 20, 21, 20, 68,  0, 82,  0,322,208, 31,  0,334, 20],
    [ 20,  0, 20, 20, 20, 21, 20, 81, 20, 20, 81, 20, 20],
    [ 20,322,212, 81, 32,123,212,  0, 20,  7,131,  8, 20],
    [ 20, 20, 20, 20, 81, 20, 20,208, 20, 20, 20, 20, 20],
    [ 20,  0,323, 81, 21,  0,237,  0, 20, 31,237,323, 20],
    [ 20,204, 20, 20, 20, 20, 20,334, 20,322, 20,  0, 20],
    [ 20,  0, 20, 31, 31, 31, 20,  0, 81,208, 20, 21, 20],
    [ 20,322, 20,334, 31,334, 20, 21, 20, 20, 20, 20, 20],
    [ 20,  0, 20, 20, 82, 20, 20,  0, 20,  0,322,  0, 20],
    [ 20, 32, 20, 87,  0, 21,  0, 31, 81,229, 20, 31, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "hard1_enemy_ratio": 85,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true,
    "weather": [
        "sun",
        5
    ]
}