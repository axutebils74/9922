main.floors.Ch4_3D=
{
    "floorId": "Ch4_3D",
    "title": "格沃之巅",
    "name": "格沃之巅",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [
        {
            "name": "area7_2.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 50,
    "defaultGround": "ground7",
    "bgm": "area16.mp3",
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "secret.mp3"
        },
        {
            "type": "setValue",
            "name": "flag:disableFly",
            "value": "1"
        },
        {
            "type": "setVolume",
            "value": 0,
            "time": 2000,
            "async": true
        },
        {
            "type": "moveHero",
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]\b[down,null]这似曾相识的场景……\n不过这次对方看起来人畜无害的样子，是不是不用打了？",
        "\t[晴芸,hero3]\b[down,null]（周围连个出口都没，你觉得可能吗？）",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[？？！,E9961_1]\b[down,6,4]呜喵~人家在这里被关了好久，总算有人来陪我玩了~",
        "\t[hero]\b[down,null]抱歉，请问你是……？",
        "\t[9961,E9961_1]\b[down,6,4]9961，是械灵哦~",
        "\t[hero]\b[down,null]你叫9961？听起来更像是智械的编号……",
        "\t[9961,E9961_1]\b[down,6,4]我是械灵，也是智械，也可以是很多很多东西~",
        "\t[hero]\b[down,null]（？？？）",
        "\t[9961,E9961_1]\b[down,6,4]因为人家是T型械灵的原型机，最擅长变成各种各样的生物啦~",
        "\t[hero]\b[down,null]（糟了，听起来不怎么好对付的样子……）",
        {
            "type": "waitAsync"
        },
        {
            "type": "setVolume",
            "value": 90,
            "time": 0
        },
        {
            "type": "setValue",
            "name": "flag:Ch4_boss_activated",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:Ch4_boss_phase",
            "value": "1"
        },
        {
            "type": "insert",
            "name": "Ch4BossDraw"
        },
        {
            "type": "playBgm",
            "name": "boss16.mp3",
            "keep": true
        },
        "\t[9961,E9961_1]\b[down,6,4]来陪我玩吧，打败我\r[yellow]5次\r就让你离开这里。\n在那之前是不会放你走的哦~",
        "\t[hero]\b[down,null]……这里的平台这么小，我怕掉下去，太危险了，要不咱别打了？",
        "\t[9961,E9961_1]\b[down,6,4]不用担心，周围都是空气墙，想掉也掉不下去的哦~\n来好好玩一玩吧~",
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]\b[down,null]（只能强上了，晴芸，准备好。）",
        "\t[晴芸,hero3]\b[down,null]（嗯，不用担心我。）",
        "\t[系统提示]本章最终的战斗即将开始。\n请注意观察对手的特技变化，认真思考对策。\n如果你身上还有较多钥匙，别忘记你可以使用快捷商店。\n最后，请做好读档重来的准备_(:з”∠)_",
        {
            "type": "waitAsync"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "0,0": [
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
                "type": "function",
                "function": "function(){\ncore.removeFlag(\"Ch4_boss_activated\");\ncore.removeFlag(\"Ch4_boss_phase\");\ncore.removeFlag(\"Ch4_quickshop\");\n}"
            },
            {
                "type": "insert",
                "name": "Ch4BossDraw"
            },
            {
                "type": "setValue",
                "name": "item:I_Chap4Shop4",
                "value": "0"
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "changePos",
                "loc": [
                    5,
                    8
                ],
                "direction": "right"
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
            {
                "type": "setBlock",
                "number": "E9961_1",
                "loc": [
                    [
                        6,
                        4
                    ]
                ]
            },
            {
                "type": "sleep",
                "time": 1000
            },
            {
                "type": "setCurtain",
                "time": 1000
            },
            {
                "type": "if",
                "condition": "core.hasItem(\"I_superGreenKey\")",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[系统提示]恭喜获得成就【简化而不简单】！\n带着\\i[I_superGreenKey]大绿钥匙完成与9961的战斗。\n作为奖励，帮你把大绿钥匙换成9亿血，用于计分。\n想必普通难度对你来讲也完全不在话下了吧。",
                        "choices": [
                            {
                                "text": "？？？",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "item:I_superGreenKey",
                                        "value": "0"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:hp",
                                        "operator": "+=",
                                        "value": "900000000"
                                    },
                                    {
                                        "type": "animate",
                                        "name": "heal2",
                                        "loc": "hero"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "pickPotion2.wav"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            "\t[9961,E9961_1]\b[down,6,4]不打了不打了。\n本来还想多玩一会的，但是快到午夜了，“幽”恐怕要等不及了吧。\n下次有机会一定要陪我多玩会哦~",
            "\t[hero]\b[down,null]（这家伙，本身战斗力就已经十分恐怖了，还能够变成各种形态，集各种技能于一身，着实难缠……）",
            "\t[晴芸,hero3]\b[down,null]（能变换各种形态和技能就已经很不可思议了，更可怕的是它刚才用来清空我们能量的那招……\n这种力量，完全超出了理解范围。）",
            "\t[hero]\b[down,null]（这种违背常识的技能，之前在“幽”那里也见到过，就是那个无限重生的能力……\n这，就是\r[yellow]法则之力\r吗……）",
            "\t[9961,E9961_1]\b[down,6,4]准备好，我要开始传送了。",
            {
                "type": "playSound",
                "name": "mteleport.wav"
            },
            {
                "type": "changeFloor",
                "floorId": "Ch4_40",
                "loc": [
                    6,
                    5
                ],
                "direction": "down",
                "time": 1000
            }
        ]
    },
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17,  0,  0,  0,  0,  0,  0,  0, 17, 17, 17],
    [ 17, 17, 17,  0, 83,  0,718,  0, 83,  0, 17, 17, 17],
    [ 17, 17, 17,  0,  0,  0,  0,  0,  0,  0, 17, 17, 17],
    [ 17, 17, 17,  0,  0,  0,  0,  0,  0,  0, 17, 17, 17],
    [ 17, 17, 17,  0,  0,  0,  0,  0,  0,  0, 17, 17, 17],
    [ 17, 17, 17,  0, 83,  0,  0,  0, 83,  0, 17, 17, 17],
    [ 17, 17, 17,  0,  0,  0,  0,  0,  0,  0, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,145,145,145,145,145,145,145,  0,  0,  0],
    [  0,  0,  0,145,145,145,145,145,145,145,  0,  0,  0],
    [  0,  0,  0,145,145,145,145,145,145,145,  0,  0,  0],
    [  0,  0,  0,145,145,145,145,145,145,145,  0,  0,  0],
    [  0,  0,  0,145,145,145,145,145,145,145,  0,  0,  0],
    [  0,  0,  0,145,145,145,145,145,145,145,  0,  0,  0],
    [  0,  0,  0,145,145,145,145,145,145,145,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "flyPoint": [
        6,
        8
    ],
    "hard1_enemy_ratio": 100,
    "beforeBattle": {},
    "cannotMoveIn": {}
}