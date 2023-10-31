main.floors.Ch4_50=
{
    "floorId": "Ch4_50",
    "title": "荒烟村外围",
    "name": "荒烟村外围",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "sand",
    "bgm": null,
    "firstArrive": [
        {
            "type": "playBgm",
            "name": "area17.mp3"
        },
        {
            "type": "pauseBgm"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.removeMaps(\"BMT20\", \"Ch4_40\");\ncore.setFlag(\"__visited__\", { Ch4_50: true });\ncore.values.animateSpeed = 460;\n// 数据统计不再包含前三章\ncore.setFlag(\"drawStat_start\", \"Ch4_50\");\ncore.setFlag(\"moveShadow_period\", 5);\n}"
        },
        {
            "type": "unfollow",
            "name": "hero3.png"
        },
        {
            "type": "follow",
            "name": "hero3_2.png"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,11": [
            "\t[hero]就是这里？这环境真恶劣……",
            "\t[晴芸,N762]毒气。",
            {
                "type": "changePos",
                "direction": "down"
            },
            {
                "type": "animate",
                "name": "E_surprise"
            },
            "\t[hero]啊？",
            "\t[晴芸,N762]对你这种连碳基生命都算不上的家伙当然是无效的。\n我有防毒面罩，虽然戴着像个猪头，但是不得不这样了。",
            "\t[hero]为什么会有毒气？",
            "\t[晴芸,N762]还记得《至尊之录》第三部分的内容吗？",
            "\t[hero]……我以为那是无效信息，看完就忘了。",
            "\t[晴芸,N762]唔……那没事了。",
            "晴芸扶了扶头顶的兔耳朵。",
            "\t[晴芸,N762]远方传来绝望与怨恨的声音……\n准备一场恶战吧。",
            "\t[hero]好，还是打打杀杀更适合我。\n\r[yellow]用这刚获得的至尊之力，扫平一切敌人！\r",
            {
                "type": "setValue",
                "name": "item:talentTree3",
                "value": "1"
            },
            "\t[系统提示]在强大的至尊之力加持之下，血瓶回复量是之前的两倍。\n你可以在物品栏里使用\\i[I_light]大型探照灯，增加灯光范围。",
            {
                "type": "setValue",
                "name": "item:I_light",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.hard == 1",
                "true": [
                    "\t[系统提示]检测到当前是简化难度。\n和第四章前篇一样，这次的简化难度福利仍然是一个万能绿钥匙，可以无限制地开启绿门！",
                    {
                        "type": "setValue",
                        "name": "item:I_superGreenKey",
                        "value": "1"
                    },
                    {
                        "type": "choices",
                        "text": "\t[系统提示]同时，怪物的攻防值是正常难度的95%。\n不过，\r[yellow]简化难度的计分规则发生了变化\r。\n最后的分数=10000*\r[red]红钥匙数\r+\r[orange]完成0伤战斗的次数\r。\n每次你以0伤击败敌人后，就会获得1个特殊的记录道具。你可以随时打开道具栏查看其数目。\n另外，\r[orange]红钥匙数会影响结局\r。",
                        "choices": [
                            {
                                "text": "确定",
                                "action": []
                            }
                        ]
                    }
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "Ch4_51",
            "loc": [
                6,
                12
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,3": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_50_6_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,2": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_50_6_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,3": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_50_6_1",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,7": [
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": [
                    6,
                    6
                ]
            },
            "\t[九等公民,N690]\b[down,6,6]门开了！我要逃出……\n谔……",
            {
                "type": "setBlock",
                "number": "E733",
                "loc": [
                    [
                        6,
                        6
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "blackmagic",
                "loc": [
                    6,
                    6
                ]
            },
            "\t[哀怨白骨,E733]\b[down,null]杀……杀！",
            "\t[hero]\b[down,6,6]？？？",
            {
                "type": "setBlock",
                "number": "E733",
                "loc": [
                    [
                        6,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "E733",
                "loc": [
                    [
                        5,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "E733",
                "loc": [
                    [
                        7,
                        3
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "blackmagic",
                "loc": [
                    6,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "blackmagic",
                "loc": [
                    5,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "blackmagic",
                "loc": [
                    7,
                    3
                ]
            }
        ]
    },
    "autoEvent": {
        "6,1": {
            "0": {
                "condition": "flag:door_Ch4_50_6_1==3",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_Ch4_50_6_1",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [176,176,176,176,176,176,  0,176,176,176,176,176,176],
    [176,332,331,332,176,176, 85,176,176,334,331,334,176],
    [176,331,658,331, 84,  0,690,  0, 84,332,658,332,176],
    [176,332,331,332,176,690,  0,690,176,334,331,334,176],
    [176,176,176,176,176,  0, 22,  0,176,176,176,176,176],
    [177, 21, 22,130035,176,  0,130032,  0,176,130036, 22, 21,177],
    [177, 22, 21, 21, 84,  0,690,  0, 84, 21, 21, 22,177],
    [177,177,177,177,177,177, 83,177,177,177,177,177,177],
    [177, 22,177,177,  0, 21,  0,330,  0,177,177, 22,177],
    [177,702, 22,702,  0,  0, 23,  0,  0,702, 22,702,177],
    [177,177,177,177,177,330,  0, 21,177,177,177,177,177],
    [177,386, 82,386, 82,  0,  0,  0, 82,386, 82,386,177],
    [177,177,177,177,177,130026,  0,130034,177,177,177,177,177]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,130027,  0,  0,  0,  0,  0,130028,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0, 91,  0,  0,  0,  0,  0,  0],
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "canFlyFrom": true,
    "hard1_enemy_ratio": 95,
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
    "flyPoint": null,
    "upFloor": [
        6,
        0
    ],
    "downFloor": [
        6,
        12
    ]
}