main.floors.MT44=
{
    "floorId": "MT44",
    "title": "主塔 44 层",
    "name": "辉煌圣殿-44",
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
        "\t[领唱者,E431]\b[up,6,11]\r[orange]啊，伟大的2221，永远的神！\r"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,11": {
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
                    "condition": "(!switch:A)",
                    "true": [
                        {
                            "type": "setValue",
                            "name": "switch:A",
                            "value": "1"
                        },
                        "\t[领唱者,E431]啊，伟大的2221，你就是我们心中永远的神！",
                        "\t[hero]？？？",
                        {
                            "type": "battle",
                            "loc": [
                                6,
                                11
                            ]
                        },
                        {
                            "type": "openDoor",
                            "loc": [
                                5,
                                11
                            ]
                        },
                        {
                            "type": "openDoor",
                            "loc": [
                                7,
                                11
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 500
                        },
                        "\t[hero]这种感情应该叫什么，个人崇拜吗？",
                        "\t[芳芷,hero2]多少有点病态，总感觉这个区域的人脑子也有点问题，就像前一个区域那样。"
                    ],
                    "false": [
                        {
                            "type": "battle",
                            "loc": [
                                6,
                                11
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "8,4": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "2,3": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "5,8": [
            {
                "type": "if",
                "condition": "(!flag:MT44_5_8_A)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:MT44_5_8_A",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT44_6_10",
                        "operator": "+=",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:44Fach != 1) && (flag:door_MT44_6_10<4)",
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
                "condition": "(!flag:MT44_7_8_A)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:MT44_7_8_A",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT44_6_10",
                        "operator": "+=",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:44Fach != 1) && (flag:door_MT44_6_10<4)",
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
        "7,9": [
            {
                "type": "if",
                "condition": "(!flag:MT44_7_9_A)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:MT44_7_9_A",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT44_6_10",
                        "operator": "+=",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:44Fach != 1) && (flag:door_MT44_6_10<4)",
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
        "5,9": [
            {
                "type": "if",
                "condition": "(!flag:MT44_5_9_A)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:MT44_5_9_A",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT44_6_10",
                        "operator": "+=",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:44Fach != 1) && (flag:door_MT44_6_10<4)",
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
        "6,10": {
            "0": {
                "condition": "flag:door_MT44_6_10==4",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.removeFlag(\"MT44_5_8_A\");\ncore.removeFlag(\"MT44_7_8_A\");\ncore.removeFlag(\"MT44_5_9_A\");\ncore.removeFlag(\"MT44_7_9_A\");\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,330,  0,323,  0,252,322,143, 21, 22,334,  0,143],
    [143,213,143,143, 81,143, 68, 81,213,322,143,366,143],
    [143,  0, 87,143,334,143,330,143,143,143,143,323,143],
    [143,  0, 21,279,  0,143, 81,143, 88,  0,143,330,143],
    [143,330,143,143,245,143, 82,143,143,330,143,143,143],
    [143,366,143,  0,  0,  0,  0,246,  0,  0, 21,  0,143],
    [143,  0,143, 81,143,143, 83,143,143,143,143,213,143],
    [143,323, 21,330,143,256,  0,256,143,330, 21,322,143],
    [143,143,143,143,143,213,  0,213,143,143,143,143,143],
    [143, 53,331, 53,143,143, 85,143,143, 53,331, 53,143],
    [143,322, 21,330,323, 85,431, 85,323,330, 21,322,143],
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