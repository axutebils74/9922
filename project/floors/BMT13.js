main.floors.BMT13=
{
    "floorId": "BMT13",
    "title": "地下 13 层",
    "name": "地下-13",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground2",
    "bgm": "area4.mp3",
    "color": [
        0,
        0,
        0,
        0.9
    ],
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.setBgLight([\n\t[2, 3, 180],\n\t[6, 3, 180],\n\t[9, 3, 180],\n\t[3, 9, 180],\n\t[5, 9, 180],\n\t[9, 7, 180],\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "10,7": [
            {
                "type": "if",
                "condition": "(!switch:A)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    },
                    "\t[冰冻人,frozenman]我……我要被冻死了……",
                    {
                        "type": "animate",
                        "name": "E_surprise",
                        "loc": "hero"
                    },
                    "\t[芳芷,hero2]啥情况，你身上叠了多少层冰冻啊，人都蓝了。",
                    "\t[冰冻人,frozenman]谔谔……啊啊啊啊……",
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    "\t[芳芷,hero2]看这严重程度，恐怕不是一两瓶解冻药水能解决的……"
                ]
            },
            {
                "type": "confirm",
                "text": "一次性给他灌下5瓶解冻药水，也许会有点用。",
                "yes": [
                    {
                        "type": "if",
                        "condition": "(core.itemCount(\"I321\") >= 5)",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "item:I321",
                                "operator": "-=",
                                "value": "5"
                            },
                            {
                                "type": "playSound",
                                "name": "pickPotion2.wav"
                            },
                            {
                                "type": "sleep",
                                "time": 200
                            },
                            {
                                "type": "playSound",
                                "name": "pickPotion2.wav"
                            },
                            {
                                "type": "sleep",
                                "time": 200
                            },
                            {
                                "type": "playSound",
                                "name": "pickPotion2.wav"
                            },
                            {
                                "type": "sleep",
                                "time": 200
                            },
                            {
                                "type": "playSound",
                                "name": "pickPotion2.wav"
                            },
                            {
                                "type": "sleep",
                                "time": 200
                            },
                            {
                                "type": "playSound",
                                "name": "pickPotion2.wav"
                            },
                            {
                                "type": "animate",
                                "name": "dispel",
                                "loc": [
                                    10,
                                    7
                                ]
                            },
                            {
                                "type": "sleep",
                                "time": 1000
                            },
                            {
                                "type": "setBlock",
                                "number": "unfrozenman",
                                "loc": [
                                    [
                                        10,
                                        7
                                    ]
                                ]
                            },
                            {
                                "type": "sleep",
                                "time": 1000
                            },
                            "\t[持盾战士,unfrozenman]\b[down,10,7]谔谔……总算缓过来了……谢谢你们……",
                            {
                                "type": "animate",
                                "name": "E_dots",
                                "loc": "hero"
                            },
                            "\t[持盾战士,unfrozenman]\b[down,10,7]我本是来清理这些冒着寒气的蝙蝠和石头的，仗着自己防御力强连续打了太多怪物，体内积累的寒气产生了质变，令我动弹不得。",
                            "\t[持盾战士,unfrozenman]\b[down,10,7]此次我真的是大意了，多谢二位相救。按照我圣匙帮感谢外人的传统，这绿钥匙就送你们了。",
                            {
                                "type": "setValue",
                                "name": "item:greenKey",
                                "operator": "+=",
                                "value": "1"
                            },
                            "\t[hero]\b[up,hero]（虽说圣匙帮成员惜匙如命，不过绿钥匙似乎是个例外……）",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[芳芷,hero2]\b[up,hero]等一下，我有个问题。你知道这些冒着寒气的生物是哪来的吗？",
                            "\t[持盾战士,unfrozenman]\b[down,10,7]哦，这个，我们来的时候就发现它们住在这里了。现在它们是我们练习战斗技巧的对手，二位是外人，可能不知道，我圣匙帮十分重视抗冻能力。",
                            {
                                "type": "animate",
                                "name": "E_surprise",
                                "loc": "hero"
                            },
                            "\t[持盾战士,unfrozenman]\b[down,10,7]现在还只是在打寒蝙蝠，据说以后还会有寒骷髅、寒兽人之类的。",
                            "\t[芳芷,hero2]\b[up,hero]是你们的老大安排的？",
                            "\t[持盾战士,unfrozenman]\b[down,10,7]没错，虽然我从来没见过老大……只听说老大对钥匙之力的掌控极其强大，平常人拼命修炼也只能掌握一种圣匙战技，但老大却掌握了不止一种战技。",
                            "\t[持盾战士,unfrozenman]\b[down,10,7]我这是道听途说，具体情况我也不清楚。",
                            "\t[hero]\b[up,hero]（这老大，听上去很厉害的样子）",
                            "\t[持盾战士,unfrozenman]\b[down,10,7]二位没有其他事情的话，我们有缘再会。",
                            {
                                "type": "animate",
                                "name": "zone",
                                "loc": [
                                    10,
                                    7
                                ],
                                "async": true
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        10,
                                        7
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[芳芷,hero2]\b[up,hero]训练抗冻能力……这是个什么操作……\n可能是在这塔里真的闲得没事干了吧……",
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            "\t[hero]（解冻药水不够……）"
                        ]
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "11,6": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:door_BMT13_4_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_BMT13_4_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:door_BMT13_4_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_BMT13_4_9",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "4,9": {
            "0": {
                "condition": "flag:door_BMT13_4_9==4",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "map": [
    [311,311,311,311,311,311,311,311,311,311,311,311,311],
    [311,328,  0,327,311, 33,  0, 33,  0, 21,  0, 88,311],
    [311,  0, 22,  0, 21,218,386,  0,327,311,329,  0,311],
    [311, 21,311,272,311,311,311,218,311,311,311,386,311],
    [311,  0,311,  0, 33,  0,272,  0, 21,311,334,  0,311],
    [311,330,251,328,  0, 21,311, 33,  0,251,  0,  0,311],
    [311,  0,311,311,321,311,311,  0,327,311,330, 87,311],
    [311,334,311,272,  0,272,311,  0,311,311,124,394,311],
    [311,254,311,251,  0,251,311,254,311,311,311,  0,311],
    [311,328,311,311, 85,311,311,327,311,394,330,277,311],
    [311, 22,311,  0, 23,  0,311,386,311, 21,311,311,311],
    [311,330,311,330,401,330,311,330,311, 21, 21, 82,311],
    [311,311,311,311,311,311,311,311,311,311,311,311,311]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,103,  0,  0,  0,103,  0,  0,103,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,103,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,103,  0,103,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "underGround": true,
    "hard1_enemy_ratio": 80,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}