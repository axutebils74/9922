main.floors.East15=
{
    "floorId": "East15",
    "title": "花月道-15",
    "name": "花月道-15",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "grass",
    "bgm": "area10.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,6": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "core.getBlockId(10, 6) == \"E527\"",
                    "true": [
                        {
                            "type": "battle",
                            "loc": [
                                10,
                                6
                            ]
                        },
                        {
                            "type": "exit"
                        }
                    ]
                },
                "\t[除灵者Ⅴ型,E549]谔谔，啊啊啊啊啊啊啊！",
                "\t[hero]看你这无能狂怒的样子，想必在高级除灵者里面也是底层，被打残废了都没人来帮你。",
                "\t[晴芸,hero3]是吖是吖，真是太惨啦~",
                "\t[除灵者Ⅴ型,E549]谔谔，你们赶快滚！"
            ]
        },
        "9,6": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "core.getBlockId(9, 6) != \"E549\"",
                    "true": [
                        {
                            "type": "battle",
                            "loc": [
                                9,
                                6
                            ]
                        },
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "setVolume",
                    "value": 0,
                    "time": 1000
                },
                {
                    "type": "pauseBgm"
                },
                {
                    "type": "setVolume",
                    "value": 90,
                    "time": 0
                },
                "\t[除灵者Ⅴ型,E549]\b[down,9,6]前方闲人勿入。",
                "\t[hero]\b[down,hero]别误会，我只是馋你身后那些宝物。\n我们用一场公平的决斗来决定宝物的归属吧！",
                "\t[除灵者Ⅴ型,E549]\b[down,9,6]等等，你是……那个能吃黄宝石的智械！",
                {
                    "type": "playBgm",
                    "name": "boss10.mp3",
                    "keep": true
                },
                "\t[除灵者Ⅴ型,E549]\b[down,9,6]哈哈，想不到你竟然愚蠢到自投罗网，受死吧！",
                {
                    "type": "battle",
                    "loc": [
                        9,
                        6
                    ]
                },
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        },
        "0,7": [
            {
                "type": "if",
                "condition": "core.getBlockId(7, 6) == \"specialDoor\"",
                "true": [
                    "\t[系统提示]打开前方的机关门还需要在花型图案上击败${4-flag:door_East15_7_6}只怪物。"
                ],
                "false": [
                    "你已经打开前方的机关门。"
                ]
            }
        ]
    },
    "changeFloor": {
        "0,6": {
            "floorId": "East14",
            "loc": [
                12,
                6
            ]
        },
        "6,0": {
            "floorId": "North1",
            "loc": [
                6,
                12
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:door_East15_7_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(7,6);\n}"
            }
        ],
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:door_East15_7_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(7,6);\n}"
            }
        ],
        "9,6": [
            {
                "type": "if",
                "condition": "flag:last_battle_enemyId != \"E549\"",
                "true": [
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "setBlock",
                "number": "N571",
                "loc": [
                    [
                        9,
                        6
                    ]
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    9,
                    5
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    9,
                    7
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    1
                ]
            },
            {
                "type": "move",
                "loc": [
                    9,
                    6
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "right"
                ]
            },
            "\t[hero]\b[down,hero]不愧是高级型号，不过好像也没有很强嘛。",
            "\t[除灵者Ⅴ型,E549]\b[down,10,6]谔谔，我还没完！给我站好别动！",
            {
                "type": "playSound",
                "name": "se_power0.wav"
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    10,
                    6
                ],
                "async": true
            },
            {
                "type": "vibrate",
                "time": 1000
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "moveHero",
                "time": 100,
                "async": true,
                "steps": [
                    "left",
                    "left",
                    "up",
                    "left",
                    "right"
                ]
            },
            {
                "type": "vibrate",
                "time": 1000
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "function",
                "function": "function(){\nif (!core.isReplaying()) {\n\tvar curX = 9;\n\tvar interval = setInterval(function () {\n\t\tif (curX > 0) {\n\t\t\tcore.drawAnimate(\"fire2\", curX, 6);\n\t\t\tcore.playSound('smallExplosion.mp3');\n\t\t\tif (core.getBlockId(curX, 6) != null) {\n\t\t\t\tcore.removeBlock(curX, 6);\n\t\t\t}\n\t\t\tcore.setBgFgBlock(\"bg\", \"autotile10\", curX, 6);\n\t\t\tcurX -= 1;\n\t\t} else { clearInterval(interval) }\n\t}, 80);\n} else {\n\tvar curX = 9;\n\twhile (curX > 0) {\n\t\tif (core.getBlockId(curX, 6) != null) {\n\t\t\tcore.removeBlock(curX, 6);\n\t\t}\n\t\tcore.setBgFgBlock(\"bg\", \"autotile10\", curX, 6);\n\t\tcurX -= 1;\n\t}\n}\n}"
            },
            {
                "type": "sleep",
                "time": 1000
            },
            {
                "type": "animate",
                "name": "E_sweat",
                "loc": [
                    6,
                    5
                ]
            },
            "\t[晴芸,hero3]\b[down,hero]喂，除灵者大哥，你这招威力挺强的，但是前摇是不是太长了点？",
            "\t[除灵者Ⅴ型,E549]\b[down,10,6]少废话，上级已经将你们列入必杀名单了！有不少除灵者被你们偷袭击毁，是可忍孰不可忍？",
            "\t[晴芸,hero3]\b[down,hero]你搞清楚因果好不好，明明是你们先动手的，我们都是正当防卫！",
            "\t[hero]\b[down,hero]无所谓了，这家伙刚才用力过猛，现在已经是强弩之末，没有任何威胁了。",
            "\t[除灵者Ⅴ型,E549]\b[down,10,6]你的挣扎毫无意义！就算你将我摧毁，我们除灵者也一定会获得最终的胜利！",
            "\t[hero]\b[down,hero]算了，就让这家伙在这反省吧。",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[晴芸,hero3]\b[down,hero]（喂，真的就不管它了？）",
            "\t[hero]\b[down,hero]（再往前有更多的高级除灵者，我没必要继续前进了。\n话说，上面那还有一条路……）",
            "\t[晴芸,hero3]\b[down,hero]（嗯，没记错的话，这个除灵者把守的道路是通往这个区域的试炼石碑的，上面是通往下一个区域的道路。）",
            "\t[hero]\b[down,hero]（这么说，“幽”是被围在试炼石碑里面了？）",
            "\t[晴芸,hero3]\b[down,hero]（应该是了。能让上届冠军看中的试炼，想必也不会寻常吧。）",
            "\t[hero]\b[down,hero]（好想看看这个试炼……可惜现在不能过去，只好前往下一个区域了。）",
            {
                "type": "playBgm",
                "name": "area10.mp3"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,6": {
            "0": {
                "condition": "flag:door_East15_7_6==4",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "hide",
                        "remove": true
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_East15_7_6",
                        "value": "null"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.hideBgFgMap(\"bg2\", [\n\t[6, 5],\n\t[6, 7]\n]);\n\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [50022,149,149,149,151,151, 91,149,149,149,149,149,149],
    [50022,334,330,149,151,151, 85,149,332, 30,324,149,149],
    [50022, 21,324,149,535,325,535,149,  0, 21,  0,149,149],
    [50022,50022,537,149,330,538,330,149,332, 21,332,149,149],
    [50022,50022, 81,149,149, 81,149,149,324,  0,324,149,149],
    [50022,  0, 21,  0,535,  0,536,149,149, 85,149,149,149],
    [ 92,  0, 81,334,  0,326,  0, 85,  0,549,  0, 85, 94],
    [129,  0, 21,  0,535,  0,536,149,149, 85,149,149,149],
    [50022,50022, 81,149,149, 81,149,149,325,  0,325,149,149],
    [50022,50022,537,149,330,538,330,149,331, 22,331,149,149],
    [50022, 21,325,149,535,324,535,149,  0,334,  0,149,149],
    [50022,334,330,149,149,149,149,149,331, 30,325,149,149],
    [50022,149,149,149,151,151,151,149,149,149,149,149,149]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,70012,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,867,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,70004,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,168,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,168,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "hard1_enemy_ratio": 80,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "weather": [
        "sun",
        5
    ]
}