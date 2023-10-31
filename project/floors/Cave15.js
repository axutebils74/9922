main.floors.Cave15=
{
    "floorId": "Cave15",
    "title": "特训营-15",
    "name": "特训营-15",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "ground7",
    "bgm": "area12.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": [
            "\t[系统提示]需要清理前面所有敌人。正在检测中……",
            {
                "type": "function",
                "function": "function(){\ncore.plugin.checkEnemy(\"Cave15\", \"Cave1\");\n}"
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
        "6,0": [
            {
                "type": "loadBgm",
                "name": "secret.mp3"
            },
            {
                "type": "loadBgm",
                "name": "story2.mp3"
            },
            {
                "type": "loadBgm",
                "name": "story.mp3"
            },
            {
                "type": "loadBgm",
                "name": "boss5.mp3"
            },
            "\t[芳芷,hero2]就是这里了，前面应该就能见到古亦大人——以及那个闯入者。",
            "\t[2221,N600]等一下！",
            {
                "type": "moveHero",
                "steps": [
                    "down"
                ]
            },
            {
                "type": "animate",
                "name": "E_question",
                "loc": "hero"
            },
            "\t[2221,N600]前面有好可怕的气息……我……能不能不要进去……",
            "\t[hero]有吗，我怎么一点害怕的感觉都没有。",
            "\t[晴芸,hero3]（你什么时候有过害怕的感觉吗……）",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[2221,N600]那个气息……注意到我们了！啊啊啊啊！",
            {
                "type": "unfollow",
                "name": "22212.png"
            },
            {
                "type": "setBlock",
                "number": "N600",
                "loc": [
                    [
                        6,
                        2
                    ]
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    2
                ],
                "time": 50,
                "steps": [
                    "down",
                    "down",
                    "down",
                    "down",
                    "down",
                    "down",
                    "down",
                    "down",
                    "down"
                ]
            },
            {
                "type": "function",
                "function": "function(){\ncore.status.hero.atk -= 15000;\ncore.status.hero.def -= 15000;\ncore.status.hero.mdef -= 15000;\ncore.updateStatusBar();\n}"
            },
            "\t[系统提示]2221离队，扣除之前获得的能力。",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[hero]到底怎么回事啊……你们感觉到害怕了吗？",
            "\t[芳芷,hero2]没有。",
            "\t[晴芸,hero3]没有。",
            "\t[hero]那么，要进去了。",
            {
                "type": "moveHero",
                "steps": [
                    "up"
                ]
            },
            {
                "type": "setValue",
                "name": "flag:lightRadius",
                "value": "100"
            },
            {
                "type": "setValue",
                "name": "flag:disableFly",
                "value": "1"
            },
            {
                "type": "playSound",
                "name": "mteleport.wav"
            },
            {
                "type": "setCurtain",
                "color": [
                    255,
                    255,
                    255,
                    1
                ],
                "time": 800,
                "keep": true
            },
            {
                "type": "setCurtain",
                "time": 200
            },
            {
                "type": "changeFloor",
                "floorId": "Cave16",
                "loc": [
                    6,
                    12
                ],
                "time": 1000
            }
        ]
    },
    "changeFloor": {
        "6,11": {
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
    [145,145,145,145,145,145, 89,145,145,145,145,145,145],
    [145,566,330,145,332,145,126,145,145,334,334,334,145],
    [145,145, 82,145, 81,145, 83,145,145,145, 82,145,145],
    [145,330,566, 81,331,145, 82,145,331, 81,334, 81,145],
    [145, 82,145,145, 81,145, 83,145, 81,145,145,334,145],
    [145,566,330,145,332,145, 82,145,332,145,334, 81,145],
    [145,145, 82,145,145,145, 83,145,145,145, 81,145,145],
    [145, 21,  0, 81,  0,327,  0,328,  0, 81,  0, 21,145],
    [145,  0,589,  0,  0,  0,590,  0,  0,  0,589,  0,145],
    [145, 82,145,145,576,145,  0,145,576,145,145, 82,145],
    [145,  0,331,578,  0,145,  0,145,  0,578,331,  0,145],
    [145,577,  0,328,570,145, 87,145,570,327,  0,577,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "underGround": true,
    "upFloor": [
        6,
        11
    ],
    "hard1_enemy_ratio": 80,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}