main.floors.MT10=
{
    "floorId": "MT10",
    "title": "主塔 10 层",
    "name": "主塔-10",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "area2.mp3"
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.setBgLight([\n\t[5, 9, 150],\n\t[7, 9, 150]\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "6,5": [
            {
                "type": "openDoor",
                "loc": [
                    4,
                    5
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    5
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    6
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
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 500
        }
    },
    "afterBattle": {
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,2": [
            {
                "type": "if",
                "condition": "((flag:hard == 2 )&&( item:greenKey > 0))",
                "true": [
                    "\t[系统提示]你在正常难度下到达这里时拥有绿钥匙。作为奖励，你可以立即提交成绩。",
                    {
                        "type": "confirm",
                        "text": "是否立即提交成绩？",
                        "yes": [
                            {
                                "type": "win",
                                "reason": "Chap.1-10层小水塔"
                            }
                        ],
                        "no": []
                    }
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    1
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    1
                ]
            },
            {
                "type": "if",
                "condition": "(!flag:1Fmission)",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                11
                            ]
                        ],
                        "floorId": "MT1",
                        "remove": true
                    }
                ]
            },
            {
                "type": "playSound",
                "name": "hint.mp3"
            },
            {
                "type": "sleep",
                "time": 1000
            },
            "\t[复读机]干得不错。我只负责前10层的指导，我的任务已经完成了。更大的挑战在楼上等着你，加油！"
        ]
    },
    "afterGetItem": {
        "11,2": [
            {
                "type": "if",
                "condition": "flag:hard == 1",
                "true": [
                    "\t[系统提示]\\i[fly]楼层传送器可以让你快速到达你曾经去过的楼层。\n它的快捷键是\r[yellow]G\r。"
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {
        "6,6": {
            "0": {
                "condition": "flag:door_MT10_6_6==2",
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
        },
        "6,4": {
            "0": {
                "condition": "flag:door_MT10_6_4==8",
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
        },
        "6,3": {
            "0": {
                "condition": "flag:door_MT10_6_3==8",
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1, 27, 27, 85, 34, 87, 34, 85, 28, 28,  1,  1],
    [  1, 22, 21, 27,  1, 29,211, 29,  1, 28, 21, 46,  1],
    [  1,  1,  1,  1,  1,  1, 85,  1,  1,  1,  1,  1,  1],
    [  1,210,209,209,  1,  1, 85,  1,  1,209,209,210,  1],
    [  1,209,  0,209, 85,  0,  0,  0, 85,209,  0,209,  1],
    [  1,210,209,209,  1,  1, 85,  1,  1,209,209,210,  1],
    [  1,  1,  1,  1,  1,221,  0,221,  1,  1,  1,  1,  1],
    [  1,  1, 32,  1,  1,  0,  0,  0,  1,  1, 32,  1,  1],
    [  1, 32, 32, 32,  1,  1, 83,  1,  1, 32, 32, 32,  1],
    [  1,  1, 82,  1,  1, 31,  0, 31,  1,  1, 82,  1,  1],
    [  1,  1, 31, 32, 81,  0, 88,  0, 81, 32, 31,  1,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgm": "area1.mp3",
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,103,  0,103,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "color": [
        0,
        0,
        0,
        0.5
    ],
    "hard1_enemy_ratio": 90,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}