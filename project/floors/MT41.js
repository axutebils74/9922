main.floors.MT41=
{
    "floorId": "MT41",
    "title": "主塔 41 层",
    "name": "辉煌圣殿-41",
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
            "type": "sleep",
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "down"
        },
        "\t[大魔术师,E427]\b[up,6,7]抓紧排练，下次演出一定要让贵族们满意！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,7": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "(!switch:A)",
                    "true": [
                        {
                            "type": "setValue",
                            "name": "switch:A",
                            "value": "1"
                        },
                        "\t[大魔术师,E427]低贱的外来者，这里不是你们该来的地方！",
                        {
                            "type": "battle",
                            "loc": [
                                6,
                                7
                            ]
                        },
                        {
                            "type": "openDoor",
                            "loc": [
                                4,
                                10
                            ]
                        },
                        {
                            "type": "openDoor",
                            "loc": [
                                8,
                                10
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 500
                        },
                        "\t[hero]怎么这些人类也不讲道理啊……",
                        "\t[芳芷,hero2]可能是他们在这里地位不高，平时压力比较大吧……",
                        {
                            "type": "animate",
                            "name": "E_sweat",
                            "loc": "hero"
                        }
                    ],
                    "false": [
                        {
                            "type": "battle",
                            "loc": [
                                6,
                                7
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "5,6": [
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
                        "type": "setValue",
                        "name": "flag:door_MT41_6_9",
                        "operator": "+=",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:44Fach != 1) && (flag:door_MT41_6_9<4)",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:44Fach",
                                "value": "1"
                            },
                            "\t[系统提示]你以为把阻击怪推到这里打掉就能开门了？",
                            "\t[系统提示]恭喜你获得成就\r[yellow]【机关门大师】\r！\n然而并没有什么用处。",
                            "\t[hero]？？？"
                        ]
                    }
                ]
            }
        ],
        "7,6": [
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
                        "type": "setValue",
                        "name": "flag:door_MT41_6_9",
                        "operator": "+=",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:44Fach != 1) && (flag:door_MT41_6_9<4)",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:44Fach",
                                "value": "1"
                            },
                            "\t[系统提示]你以为把阻击怪推到这里打掉就能开门了？",
                            "\t[系统提示]恭喜你获得成就\r[yellow]【机关门大师】\r！\n然而并没有什么用处。",
                            "\t[hero]？？？"
                        ]
                    }
                ]
            }
        ],
        "7,8": [
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
                        "type": "setValue",
                        "name": "flag:door_MT41_6_9",
                        "operator": "+=",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:44Fach != 1) && (flag:door_MT41_6_9<4)",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:44Fach",
                                "value": "1"
                            },
                            "\t[系统提示]你以为把阻击怪推到这里打掉就能开门了？",
                            "\t[系统提示]恭喜你获得成就\r[yellow]【机关门大师】\r！\n然而并没有什么用处。",
                            "\t[hero]？？？"
                        ]
                    }
                ]
            }
        ],
        "5,8": [
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
                        "type": "setValue",
                        "name": "flag:door_MT41_6_9",
                        "operator": "+=",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:44Fach != 1) && (flag:door_MT41_6_9<4)",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:44Fach",
                                "value": "1"
                            },
                            "\t[系统提示]你以为把阻击怪推到这里打掉就能开门了？",
                            "\t[系统提示]恭喜你获得成就\r[yellow]【机关门大师】\r！\n然而并没有什么用处。",
                            "\t[hero]？？？"
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,9": {
            "0": {
                "condition": "flag:door_MT41_6_9==4",
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
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143, 88,  0, 21,143,322, 22,334,143, 21,  0, 87,143],
    [143,  0,  0,246,143,143,213,143,143,246,  0,  0,143],
    [143,247,143,331,  0,143, 82,143,  0,331,143,259,143],
    [143,  0,143,  0,258,  0, 68,  0,258,  0,143,  0,143],
    [143,330,143,259,143,143, 81,143,143,259,143,330,143],
    [143,  0,143,  0,143,257,  0,257,143,  0,143,  0,143],
    [143, 21, 81,322, 81,  0,427,  0, 81,323, 81, 21,143],
    [143,  0,276,  0,143,257,  0,257,143,  0,276,  0,143],
    [143,143,143,143,143,143, 85,143,143,143,143,143,143],
    [143,334,330,334, 85, 21, 22, 21, 85,334,330,334,143],
    [143,322, 53,323,143,330, 53,330,143,323, 53,322,143],
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