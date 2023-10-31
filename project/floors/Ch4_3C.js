main.floors.Ch4_3C=
{
    "floorId": "Ch4_3C",
    "title": "凌天大殿-12",
    "name": "凌天大殿-12",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area16.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0,
            "sx": 296,
            "sy": 88,
            "w": 416,
            "h": 416
        }
    ],
    "ratio": 50,
    "defaultGround": "ground8",
    "bgm": "area16.mp3",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]\b[down,null]天啊……这大块头是个什么东西……",
        {
            "type": "vibrate",
            "direction": "horizontal",
            "time": 500,
            "speed": 10,
            "power": 10,
            "async": true
        },
        "\t[筋肉巨人,E713]\b[down,6,7]前面的小不点！来堂堂正正地一战！",
        "\t[晴芸,hero3]\b[down,null]……看起来智力不高的样子，可能是某种基因改造的产物。",
        "\t[hero]\b[down,null]嘴上说着要堂堂正正地一战，周围却带了4个给它加buff的械灵……",
        {
            "type": "loadBgm",
            "name": "boss16.mp3"
        },
        {
            "type": "waitAsync"
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\nvar rotateTime = core.getFlag('rotateTime', 0);\nvar image = core.material.images.images['area16.jpg'];\nvar width = 416,\n\theight = 416;\ncore.canvas.bg.translate(width / 2, height / 2);\ncore.canvas.bg.rotate(rotateTime * Math.PI / 180 / 6);\ncore.canvas.bg.translate(-width / 2, -height / 2);\ncore.canvas.bg.drawImage(image, -296, -88);\n}"
        }
    ],
    "parallelDo": "var lastTime = core.getFlag('lastTime', 0);\n\nif (timestamp - lastTime > 60) {\n\tvar image = core.material.images.images['area16.jpg'];\n\tvar width = 416,\n\t\theight = 416;\n\n\tcore.canvas.bg.translate(width / 2, height / 2);\n\tcore.canvas.bg.rotate(Math.PI / 180 / 6);\n\tcore.canvas.bg.translate(-width / 2, -height / 2);\n\tcore.canvas.bg.drawImage(image, -296, -88);\n\n\tcore.setFlag('lastTime', timestamp);\n\n\tvar rotateTime = core.getFlag('rotateTime', 0);\n\trotateTime += 1;\n\tif (rotateTime >= 6 * 180) {\n\t\trotateTime -= 6 * 180;\n\t}\n\tcore.setFlag('rotateTime', rotateTime);\n}",
    "events": {
        "6,1": [
            "\t[系统提示]需要清理前面所有敌人。正在检测中……",
            {
                "type": "function",
                "function": "function(){\ncore.plugin.checkEnemy(\"Ch4_31\", \"Ch4_3C\");\n}"
            },
            {
                "type": "if",
                "condition": "(flag:remainEnemyCount>0)",
                "true": [
                    "共有${flag:remainEnemyCount}个敌人未清除。",
                    {
                        "type": "if",
                        "condition": "(flag:remainEnemyCount>641)",
                        "true": [
                            "当前剩余敌人较多，请自行检查。"
                        ],
                        "false": [
                            "剩余敌人：${flag:remainEnemyInfo}"
                        ]
                    }
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
        "6,0": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "data": [
                {
                    "type": "choices",
                    "text": "\t[系统提示]进去就无法返回了，请确保你已经做好准备。\n（前方初见杀警告）",
                    "choices": [
                        {
                            "text": "准备好了！",
                            "color": [
                                255,
                                215,
                                0,
                                1
                            ],
                            "action": [
                                {
                                    "type": "playSound",
                                    "name": "mteleport.wav"
                                },
                                {
                                    "type": "if",
                                    "condition": "core.getFlag(\"skill8_buff\", 0) == 1",
                                    "true": [
                                        {
                                            "type": "insert",
                                            "name": "skill8end"
                                        }
                                    ]
                                },
                                {
                                    "type": "changeFloor",
                                    "floorId": "Ch4_3D",
                                    "loc": [
                                        6,
                                        9
                                    ],
                                    "direction": "up",
                                    "time": 2000
                                }
                            ]
                        },
                        {
                            "text": "我再想想",
                            "action": []
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "6,12": {
            "floorId": "Ch4_3B",
            "loc": [
                6,
                0
            ]
        }
    },
    "afterBattle": {
        "6,7": [
            {
                "type": "if",
                "condition": "flag:last_battle_enemyId != \"E713\"",
                "true": [
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "animate",
                "name": "darkexplode",
                "loc": [
                    6,
                    7
                ],
                "async": true
            },
            {
                "type": "vibrate",
                "time": 500
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    5,
                    2
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    2
                ]
            },
            "\t[hero]\b[down,null]还真的挺难对付的……\n看看它留下的信息……",
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "insert",
                "name": "zzzl3"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  4,  4,  4,  4,  4,  4, 89,  4,  4,  4,  4,  4,  4],
    [  4,  4,661, 30,660,  4,126,  4,661, 30,660,  4,  4],
    [  4,662,334,566, 21, 85,567, 85, 21,566,334,662,  4],
    [  4, 30,333,  4,  4,  4, 85,  4,  4,  4,333, 30,  4],
    [  4,660, 21,  4,698,  0,  0,  0,698,  4, 21,661,  4],
    [  4,  4,  4,  4,  0,  0,  0,  0,  0,  4,  4,  4,  4],
    [  4,333,333,  4,  0,  0,  0,  0,  0,  4,333,333,  4],
    [  4,  4, 81,  4,  0,  0,713,  0,  0,  4, 81,  4,  4],
    [  4,333, 81,  4,698,  0,  0,  0,698,  4, 81,333,  4],
    [  4, 81,  4,  4,  4,  4, 82,  4,  4,  4,  4, 81,  4],
    [  4,332,  0, 81,334,716,  0,716,334, 81,  0,332,  4],
    [  4,  4,652,715,654, 81,  0, 81,654,717,653,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0, 93,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "flyPoint": [
        6,
        12
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}