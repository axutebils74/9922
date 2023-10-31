main.floors.Ch4_112=
{
    "floorId": "Ch4_112",
    "title": "柏兰西路",
    "name": "柏兰西路",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "T916",
    "bgm": "area20.mp3",
    "firstArrive": [
        {
            "type": "function",
            "function": "function(){\nfor (var i = 0; i < 13; ++i) {\n\tfor (var j = 0; j < 13; ++j) {\n\t\tcore.removeBlock(i, j, \"Ch4_111\");\n\t}\n}\n}"
        },
        {
            "type": "setValue",
            "name": "item:IxlO",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:IxlP",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:IxlQ",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:IxlR",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:IxlS",
            "value": "0"
        },
        {
            "type": "setCurtain",
            "color": [
                255,
                0,
                0,
                0.1
            ],
            "time": 0
        },
        {
            "type": "function",
            "function": "function(){\ncore.setFlag(\"__visited__\", { Ch4_112: true });\ncore.values.animateSpeed = 500;\ncore.drawHero();\ncore.setFlag(\"zone_animate\", \"fire\");\n}"
        },
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        {
            "type": "if",
            "condition": "core.hasItem(\"greenBomb\")",
            "true": [
                "\t[hero]\b[down,hero]好可怕的爆炸，就连之前的\\i[greenBomb]至宝炸弹都被摧毁了，还好突然出现了一股传送的力量……",
                {
                    "type": "setValue",
                    "name": "item:greenBomb",
                    "value": "0"
                }
            ],
            "false": [
                "\t[hero]\b[down,hero]好可怕的爆炸，还好突然出现了一股传送的力量……"
            ]
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero",
            "async": true
        },
        {
            "type": "moveHero",
            "time": 100,
            "steps": [
                "right:1"
            ]
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        "\t[hero]\b[down,hero]晴芸！",
        "\t[晴芸]\b[down,1,5]姐姐，我……没事……",
        {
            "type": "animate",
            "name": "E_angry",
            "loc": "hero",
            "async": true
        },
        "\t[hero]\b[down,hero]你明明被炸伤了！",
        "\t[晴芸]\b[down,1,5]我是说……别管我……",
        "\t[hero]\b[down,hero]？？？别开玩笑了，我这就去给你找血瓶喝。",
        "\t[晴芸]\b[down,1,5]不……那个对我没用……你自己留着……",
        "\t[hero]\b[down,hero]？？？",
        "\t[晴芸]\b[down,1,5]这点外伤只是小问题，但是……头好痛……",
        "\t[晴芸]\b[down,1,5]是……“那个”的……污染……爆发了……",
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]\b[down,hero]……可恶，我早该意识到的。\n那场实验失败是五年前发生的，而你离开摩宇城是上一次望梅界大魔王换届之前，也就是两年前。\n那我该做什么？",
        "\t[晴芸]\b[down,1,5]这里很安全……让我躺在这……",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[晴芸]\b[down,1,5]赶快……我的意识要撑不住了……\n去把那些……被福博解封的怪物……都……干掉……",
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]\b[down,hero]有道理。\n坚持住，我这就把拦路的怪物清理干净，然后送你去安全的地方，给你找最好的医生！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,5": {
            "trigger": null,
            "enable": false,
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
                    "condition": "flag:afterBoss",
                    "true": [
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
                                    "type": "setVolume",
                                    "value": 0,
                                    "time": 2000,
                                    "async": true
                                },
                                "\t[hero]\b[down,hero]我回来啦！道路已经打通了，我这就带你离开这里。",
                                {
                                    "type": "sleep",
                                    "time": 500
                                },
                                {
                                    "type": "animate",
                                    "name": "E_dots",
                                    "loc": "hero"
                                },
                                "\t[hero]\b[down,hero]不对……这是……",
                                "\b[down,null]少女已经出现部分魔化的症状，畸形发黑的右手握着钥匙精准地刺入了心脏。\n到底是她自身的意识想要阻止自己变成怪物，还是发狂之后将恶意全部倾泻给了自身，已经无从得知。",
                                {
                                    "type": "sleep",
                                    "time": 500
                                },
                                "\t[hero]\b[down,hero]终究，还是晚了一步吗……",
                                {
                                    "type": "setValue",
                                    "name": "flag:alone",
                                    "value": "1"
                                },
                                {
                                    "type": "function",
                                    "function": "function(){\ncore.setWeather(\"rain\", 1);\ncore.setFlag(\"__weather__\", [\"rain\", 1]);\n}"
                                },
                                {
                                    "type": "waitAsync"
                                },
                                {
                                    "type": "playBgm",
                                    "name": "area21.mp3",
                                    "keep": true
                                },
                                {
                                    "type": "setVolume",
                                    "value": 90,
                                    "time": 0
                                },
                                {
                                    "type": "sleep",
                                    "time": 500
                                },
                                "\t[hero]\b[down,hero]好不容易，得到了强大的力量……\n好不容易，一起走到了这里……\n可是……可是……就晚了一点点……",
                                "\t[hero]\b[down,hero]为什么……为什么为什么为什么为什么！"
                            ],
                            "false": [
                                {
                                    "type": "if",
                                    "condition": "(flag:mourn<2)",
                                    "true": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:mourn",
                                            "operator": "+=",
                                            "value": "1"
                                        },
                                        "\t[hero]\b[down,hero]……"
                                    ],
                                    "false": [
                                        {
                                            "type": "if",
                                            "condition": "(flag:mourn ==2)",
                                            "true": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:mourn",
                                                    "operator": "+=",
                                                    "value": "1"
                                                },
                                                "\t[hero]\b[down,hero]不能再看了……要疯掉了……",
                                                {
                                                    "type": "setBlock",
                                                    "number": "X150464",
                                                    "loc": [
                                                        [
                                                            1,
                                                            5
                                                        ]
                                                    ],
                                                    "time": 500,
                                                    "async": true
                                                },
                                                {
                                                    "type": "hide",
                                                    "loc": [
                                                        [
                                                            2,
                                                            5
                                                        ]
                                                    ],
                                                    "remove": true,
                                                    "time": 500
                                                },
                                                {
                                                    "type": "waitAsync"
                                                },
                                                "\t[hero]\b[down,hero]对不起……"
                                            ],
                                            "false": [
                                                "\t[hero]\b[down,hero]对不起……"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "false": [
                        {
                            "type": "if",
                            "condition": "(core.getTalentLv3(3)==100)",
                            "true": [
                                {
                                    "type": "if",
                                    "condition": "(!switch:B)",
                                    "true": [
                                        {
                                            "type": "setValue",
                                            "name": "switch:B",
                                            "value": "1"
                                        },
                                        "\t[晴芸]\b[down,1,5]姐姐……我……",
                                        "\t[晴芸]\b[down,1,5]我看到……光……了……好亮……好美……",
                                        {
                                            "type": "sleep",
                                            "time": 300
                                        },
                                        {
                                            "type": "changePos",
                                            "direction": "down"
                                        },
                                        {
                                            "type": "sleep",
                                            "time": 500
                                        },
                                        {
                                            "type": "changePos",
                                            "direction": "left"
                                        },
                                        {
                                            "type": "sleep",
                                            "time": 500
                                        },
                                        {
                                            "type": "changePos",
                                            "direction": "right"
                                        },
                                        {
                                            "type": "sleep",
                                            "time": 500
                                        },
                                        {
                                            "type": "animate",
                                            "name": "E_question",
                                            "loc": "hero"
                                        },
                                        "\t[hero]\b[down,hero]什么光？在哪？",
                                        {
                                            "type": "if",
                                            "condition": "(core.getHeroLoc('x')==1)",
                                            "true": [
                                                {
                                                    "type": "changePos",
                                                    "direction": "up"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "sleep",
                                            "time": 500
                                        },
                                        "\t[hero]\b[down,hero]也许是出现幻觉了吧……看来她的情况不太妙。\n道路还没打通，必须抓紧时间了！"
                                    ],
                                    "false": [
                                        "\t[hero]\b[down,hero]已经晕过去了……在这干看着无济于事，我现在能做的只有尽快打通道路。"
                                    ]
                                }
                            ],
                            "false": [
                                "\t[hero]\b[down,hero]已经晕过去了……在这干看着无济于事，我现在能做的只有尽快打通道路。"
                            ]
                        }
                    ]
                }
            ]
        },
        "2,5": {
            "trigger": null,
            "enable": false,
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
            "data": []
        }
    },
    "changeFloor": {
        "12,6": {
            "floorId": "Ch4_113",
            "loc": [
                0,
                3
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [150240,150296,150297,150298,150299,150300,150301, 22,386, 22,150468,150468,150468],
    [150248,150304,150305,150306,150307,150308,150309, 83,150469, 84, 84,334,150468],
    [881,150658,150658, 22,702, 22,702, 22,702,  0,150468,852,150468],
    [ 82,150666,150666,150464,150464,150464,150464,150464,150464,  0, 83,334,861],
    [881,150464,150464,567,569,150464,567,566,150464,334,861,861,861],
    [ 82,151018,151019, 82,150464,150464,150464, 81,150464,  0,  0,861,861],
    [  0,  0,  0,  0,  0,334,  0,851,  0,  0,881,  0,  0],
    [ 81,  0,150464, 81,150464,150464,150464, 82,150464,  0,  0,861,861],
    [334,150464,150464,566,567,150464,569,567,150464,334,861,861,861],
    [ 81,150658,150658,150464,150464,150464,150464,150464,150464,  0, 83,881,861],
    [334,150666,150666,386, 82,386, 82,386, 82,  0,150469,881,150469],
    [150386,150256,150257,150258,150259,150260,150261,150469,150469, 84, 84,881,150468],
    [150394,150264,150265,150266,150267,150268,150269, 23, 84, 23,150468,150468,150468]
],
    "bgmap": [
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,150650,150650,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,150650,150650,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,150464,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 94],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "color": [
        255,
        0,
        0,
        0.1
    ],
    "hard1_enemy_ratio": 95,
    "upFloor": [
        12,
        6
    ],
    "downFloor": [
        1,
        6
    ]
}