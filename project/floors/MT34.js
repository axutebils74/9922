main.floors.MT34=
{
    "floorId": "MT34",
    "title": "主塔 34 层",
    "name": "孤狼战场-34",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area5.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 10,
    "defaultGround": "ground",
    "bgm": "area5.mp3",
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "boss5.mp3"
        },
        {
            "type": "loadBgm",
            "name": "story.mp3"
        },
        {
            "type": "loadBgm",
            "name": "tenshi.mp3"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,3": [
            "\t[系统提示]需要清理前面所有敌人。正在检测中……",
            {
                "type": "function",
                "function": "function(){\ncore.plugin.checkEnemy(\"MT21\",\"MT34\");\n}"
            },
            {
                "type": "if",
                "condition": "(flag:remainEnemyCount>0)",
                "true": [
                    "共有${flag:remainEnemyCount}个敌人未清除。",
                    "剩余enemy:${flag:remainEnemyInfo}"
                ],
                "false": [
                    "检测通过！",
                    "\\i[I_wait]\r[yellow]原地等待\r暂时没有用处了，失去此技能。",
                    {
                        "type": "setValue",
                        "name": "item:I_wait",
                        "value": "0"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:current_area",
                        "value": "0"
                    },
                    {
                        "type": "hide",
                        "remove": true,
                        "time": 0
                    },
                    {
                        "type": "moveHero",
                        "time": 300,
                        "steps": [
                            "right:1"
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    {
                        "type": "changePos",
                        "direction": "left"
                    },
                    "\t[芳芷,hero2]上面应该就要面对孤勒了。\n要我在这里等着吗……好吧，随你。",
                    {
                        "type": "unfollow",
                        "name": "hero2.png"
                    },
                    {
                        "type": "setBlock",
                        "number": "hero2",
                        "loc": [
                            [
                                5,
                                3
                            ]
                        ]
                    },
                    {
                        "type": "turnBlock",
                        "direction": "up",
                        "loc": [
                            [
                                5,
                                3
                            ]
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "hand",
                        "loc": [
                            5,
                            2
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                5,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "move",
                        "loc": [
                            5,
                            3
                        ],
                        "time": 300,
                        "keep": true,
                        "steps": [
                            "up:1"
                        ]
                    },
                    {
                        "type": "turnBlock",
                        "direction": "down",
                        "loc": [
                            [
                                5,
                                2
                            ]
                        ]
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
                    {
                        "type": "changePos",
                        "direction": "down"
                    },
                    "\t[hero]（冲冲冲，上上上！）"
                ]
            },
            {
                "type": "function",
                "function": "function(){\ncore.removeFlag(\"remainEnemyInfo\");\ncore.removeFlag(\"remainEnemyCount\");\n}"
            }
        ],
        "6,4": [
            {
                "type": "changeFloor",
                "floorId": ":next",
                "loc": [
                    6,
                    8
                ],
                "direction": "up"
            }
        ],
        "5,2": [
            "\t[芳芷,hero2]加油，我在这里等着。"
        ]
    },
    "changeFloor": {
        "6,9": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [142,142,142,142,142,142,142,142,142,142,142,142,142],
    [142,142,142,142,142,142,142,142,142,142,142,142,142],
    [142,142,142,142,142,142,142,142,142,142,142,142,142],
    [142,142,142,232, 33, 83,126,142, 33,232,142,142,142],
    [142,142,142,382,142,141, 89,141,142,382,142,142,142],
    [142,142,142, 82,227,141,141,141,227, 82,142,142,142],
    [142,142,142,142, 27,142,227,142, 27,142,142,142,142],
    [142,142,142,227,382,227,382,227,382,227,142,142,142],
    [142,142,142,142, 27,142, 81,142, 27,142,142,142,142],
    [142,142,142, 33,227,142, 88,142,227, 33,142,142,142],
    [142,142,142,142,142,142,142,142,142,142,142,142,142],
    [142,142,142,142,142,142,142,142,142,142,142,142,142],
    [142,142,142,142,142,142,142,142,142,142,142,142,142]
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