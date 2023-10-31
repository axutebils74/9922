main.floors.West3=
{
    "floorId": "West3",
    "title": "截浪滩-3",
    "name": "截浪滩-3",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "sand",
    "bgm": "area9.mp3",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "changePos"
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[hero]\b[down,null]咦，那边的机关门附近怎么没有怪物，反倒是地上有两个奇怪的图案。",
        "\t[晴芸,hero3]\b[down,null]这个我知道！\n传统的机关门明明自身已经很严实了，各种蛮力都无法打开，在门外的守护者反倒成了弱点。",
        "\t[晴芸,hero3]\b[down,null]所以，就有了没有守护者的机关门啦！",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[hero]\b[down,null]那，为什么不干脆修个墙……",
        "\t[晴芸,hero3]\b[down,null]既然是门，说明制造者还是希望自己能过去的呀！\n过去的方法，就是依靠那两个图案。只要将特定的魔法力量注入其中，就可以开门了。",
        "\t[hero]\b[down,null]特定的魔法力量……",
        "\t[晴芸,hero3]\b[down,null]对于魔法师而言开这种门是很轻松的。\n不会魔法的人则可以利用别的东西，比如，怪物被击败时散逸的力量，就可以用来开门。",
        "\t[hero]\b[down,null]所以开门的方法是，把怪物被击败时散逸的力量注入到花型图案上……",
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]\b[down,null]……听懂了，把怪物推到花型图案上打掉。",
        "\t[晴芸,hero3]\b[down,null]没错！冲吖！",
        "\t[系统提示]\b[down,null]对于大多数机关门，在其附近的花形图案上击败等量的怪物即可开门，比如本张图右下的门。\n少部分机关门的开门条件不是特别显然，附近会有木牌进行提示。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,7": [
            {
                "type": "if",
                "condition": "core.getBlockId(6, 9) == \"specialDoor\"",
                "true": [
                    "打开此门还需要在花型图案上击败${2-flag:door_West3_6_9}只怪物。"
                ],
                "false": [
                    "你已经打开附近的机关门。"
                ]
            }
        ]
    },
    "changeFloor": {
        "12,4": {
            "floorId": "West2",
            "loc": [
                0,
                4
            ]
        },
        "0,9": {
            "floorId": "West4",
            "loc": [
                12,
                9
            ]
        }
    },
    "afterBattle": {
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_West3_6_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,9);\n}"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_West3_6_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,9);\n}"
            }
        ],
        "10,7": [
            {
                "type": "setValue",
                "name": "flag:door_West3_11_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(11,8);\n}"
            }
        ],
        "12,7": [
            {
                "type": "setValue",
                "name": "flag:door_West3_11_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(11,8);\n}"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,9": {
            "0": {
                "condition": "flag:door_West3_6_9==2",
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
                        "name": "flag:door_West3_6_9",
                        "value": "null"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.hideBgFgMap(\"bg2\", [\n\t[5, 8],\n\t[7, 8]\n]);\n\n}"
                    }
                ]
            },
            "1": null
        },
        "11,8": {
            "0": {
                "condition": "flag:door_West3_11_8==2",
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
                        "name": "flag:door_West3_11_8",
                        "value": "null"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.hideBgFgMap(\"bg2\", [\n\t[10, 7],\n\t[12, 7]\n]);\n\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 32,322,476,  0],
    [ 21,  0,60013, 34,  0,60013, 32,511,334, 81,60023,  0, 94],
    [323,475,60023,  0,475,  0,60023, 81,60023, 81,482,  0,60009],
    [60023, 81,60019,322,60023,334, 81,  0,  0, 21,  0, 34,  0],
    [60019,  0,  0,505,  0,482,129,477,60023,  0,477,  0,477],
    [  0, 34, 81,60023, 34,  0,511,  0,  0, 32,60023, 85,60023],
    [ 92,60023,505,  0,60023,60023, 85,60023,60023,60023, 68,  0, 33],
    [60030,60031,323, 21,60023, 30,490,322,  0,60023,  0,322,  0],
    [60000,60052,60030,60030,60031,  0, 22,  0, 21,60023, 33,  0, 68],
    [60000,60000,60000,60000,60039,334,  0, 34,60024,60025,60025,60025,60025]
],
    "bgmap": [
    [156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,156,156,156,156,156,156,155,155,155,155,155,155],
    [155,155,155,155,155,155,155,155,154,154,154,154,154],
    [154,154,154,154,154,154,154,154,154,150,150,150,150],
    [150,150,150,150,150,150,150,150,150,150,  0,  0,  0],
    [  0,  0,  0,60010,  0,  0,  0,  0,  0,60010,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60020,  0,60020],
    [  0,  0,  0,  0,  0,  0,  0,60010,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,60005,  0,  0,60005,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,865,  0],
    [  0,  0,  0,  0,  0,  0,865,  0,  0,  0,  0,  0,  0],
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,168,  0,168],
    [  0,  0,  0,  0,  0,168,  0,168,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "downFloor": [
        12,
        4
    ],
    "upFloor": [
        0,
        9
    ],
    "hard1_enemy_ratio": 80,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true,
    "weather": [
        "sun",
        5
    ]
}