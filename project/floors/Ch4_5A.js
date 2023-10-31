main.floors.Ch4_5A=
{
    "floorId": "Ch4_5A",
    "title": "荒烟村-10",
    "name": "荒烟村-10",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "sand",
    "bgm": "area17.mp3",
    "color": [
        0,
        0,
        0,
        0.6
    ],
    "weather": [
        "fog",
        3
    ],
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,12": [
            {
                "type": "if",
                "condition": "(flag:E748_done>0)",
                "true": [
                    "\t[hero]这个没有用处了，可以收起来。",
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "async": true
                    },
                    {
                        "type": "hide",
                        "remove": true
                    }
                ],
                "false": [
                    {
                        "type": "choices",
                        "text": "\t[钥匙大炮,N755]消耗一把红钥匙或绿钥匙，炸掉本图上方boss\r[yellow]1500w\r血。最多炸2次。",
                        "choices": [
                            {
                                "text": "用红钥匙炸！",
                                "color": [
                                    255,
                                    0,
                                    7,
                                    1
                                ],
                                "need": "item:redKey>0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "item:redKey",
                                        "operator": "-=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "animate",
                                        "name": "fire2",
                                        "loc": [
                                            6,
                                            2
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:Ch4_5A_used_key",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.events.setEnemyOnPointAdd(6, 2, null, \"hp\", 15000000, \"-=\");\n}"
                                    },
                                    {
                                        "type": "if",
                                        "condition": "(flag:Ch4_5A_used_key >=2)",
                                        "true": [
                                            {
                                                "type": "waitAsync"
                                            },
                                            {
                                                "type": "hide",
                                                "remove": true
                                            },
                                            {
                                                "type": "animate",
                                                "name": "fire2",
                                                "loc": [
                                                    7,
                                                    12
                                                ]
                                            },
                                            "钥匙大炮报废了。"
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "用绿钥匙炸！",
                                "color": [
                                    90,
                                    252,
                                    0,
                                    1
                                ],
                                "need": "item:greenKey>0",
                                "condition": "flags.hard==2",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "item:greenKey",
                                        "operator": "-=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "animate",
                                        "name": "fire2",
                                        "loc": [
                                            6,
                                            2
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:Ch4_5A_used_key",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.events.setEnemyOnPointAdd(6, 2, null, \"hp\", 15000000, \"-=\");\n}"
                                    },
                                    {
                                        "type": "if",
                                        "condition": "(flag:Ch4_5A_used_key >=2)",
                                        "true": [
                                            {
                                                "type": "waitAsync"
                                            },
                                            {
                                                "type": "hide",
                                                "remove": true
                                            },
                                            {
                                                "type": "animate",
                                                "name": "fire2",
                                                "loc": [
                                                    7,
                                                    12
                                                ]
                                            },
                                            "钥匙大炮报废了。"
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "不炸",
                                "action": []
                            }
                        ]
                    }
                ]
            }
        ],
        "6,11": [
            "\t[晴芸,N762]稍等一下，前面那个大家伙很难对付。",
            {
                "type": "changePos",
                "direction": "down"
            },
            {
                "type": "animate",
                "name": "E_question",
                "loc": "hero"
            },
            {
                "type": "animate",
                "name": "fire3",
                "loc": [
                    7,
                    12
                ]
            },
            {
                "type": "setBlock",
                "number": "N755",
                "loc": [
                    [
                        7,
                        12
                    ]
                ]
            },
            "\t[晴芸,N762]这是一个小型的钥匙发射器，能把钥匙砸出去攻击敌人。",
            {
                "type": "animate",
                "name": "E_dots"
            },
            "\t[晴芸,N762]怎么，觉得把钥匙当炮弹很奇怪？\n别小看它啊，看起来最普通的黄钥匙，它可是能打开黄门的魔法道具！",
            {
                "type": "animate",
                "name": "E_unhappy"
            },
            "\t[晴芸,N762]哼，我知道了，你是看不起黄门，对吧？\n那你就大错特错了，黄门看似普通，实际上却蕴含着某种无上法则，我以前看过一个故事，里面即使是四维生物也必须借助黄钥匙才能打开黄门呢。",
            "\t[hero]你哪看的这么奇怪的故事……",
            "\t[晴芸,N762]总之它的威力大不大，试一下就知道。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "Ch4_59",
            "loc": [
                3,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,2": [
            {
                "type": "if",
                "condition": "(flag:last_battle_enemyId !=\"E748\")",
                "true": [
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    10,
                    2
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    9,
                    5
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    3,
                    5
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    2,
                    2
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    1
                ]
            },
            {
                "type": "setValue",
                "name": "flag:E748_done",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [176,176,176,176,179,179, 23,179,179,176,176,176,176],
    [176,656,331,176,  0,179, 85,179,  0,176,330,657,176],
    [176,658, 85,744,330,  0,748,  0,330,744, 85,658,176],
    [176,657,330,176,  0,334,179,334,  0,176,331,656,176],
    [176,176, 82,176,740,179,179,179,734,176, 82,176,176],
    [176,656, 22, 85,  0,743,654,743,  0, 85, 22,657,176],
    [176, 81,176,176,334,176,176,176,334,176,176, 81,176],
    [176,657,745,  0,734,652,658,653,745,  0,741,656,176],
    [176, 21,130032,  0,130029,130030, 81,130029,130030,  0,130032, 21,176],
    [176,652,176,743,  0, 21, 81, 21,  0,743,176,653,176],
    [176,702,176, 81,130029,130030, 81,130029,130030, 81,176, 82,176],
    [176, 22,702,  0,744,  0,  0,  0,744,  0, 82,386,176],
    [176,176,176,176,176,176,  0,176,176,176,176,176,176]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,130005,  0,  0,  0,130005,  0,  0,  0,  0],
    [  0,  0,  0,  0,130020,130021,  0,130022,130023,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,130005,  0,  0,  0,  0,  0,130005,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0, 93,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "flyPoint": [
        6,
        12
    ],
    "hard1_enemy_ratio": 95
}