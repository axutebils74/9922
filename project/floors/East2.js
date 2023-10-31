main.floors.East2=
{
    "floorId": "East2",
    "title": "花月道-2",
    "name": "花月道-2",
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
    "firstArrive": [
        {
            "type": "moveHero",
            "steps": [
                "right"
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]那边有械灵……看来附近没有除灵者。",
        "\t[晴芸,hero3]这里很可能是被除灵者或者参赛者们扫荡过了，不然这种低等械灵的数量应该远不止此。\n继续深入，我们早晚能碰到他们。",
        "\t[晴芸,hero3]如果我们找到其他参赛者聚集的地方，也许还能用金钱进行一些交易。",
        "\t[hero]（也许可以开始考虑留钱了？）"
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.values.animateSpeed = 450;\n}"
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,1": {
            "floorId": "East1",
            "loc": [
                12,
                11
            ]
        },
        "12,10": {
            "floorId": "East5",
            "loc": [
                0,
                10
            ]
        },
        "11,0": {
            "floorId": "East3",
            "loc": [
                11,
                12
            ]
        }
    },
    "afterBattle": {
        "3,9": [
            {
                "type": "setValue",
                "name": "flag:door_East2_4_11",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(4,11);\n}"
            }
        ],
        "4,10": [
            {
                "type": "setValue",
                "name": "flag:door_East2_4_11",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(4,11);\n}"
            }
        ],
        "5,9": [
            {
                "type": "setValue",
                "name": "flag:door_East2_4_11",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(4,11);\n}"
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:door_East2_4_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(4,8);\n}"
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_East2_4_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(4,8);\n}"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "4,11": {
            "0": {
                "condition": "flag:door_East2_4_11==3",
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
                        "name": "flag:door_East2_4_11",
                        "value": "null"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.hideBgFgMap(\"bg2\", [\n\t[3, 9],\n\t[5, 9],\n\t[4, 10]\n]);\n\n}"
                    }
                ]
            },
            "1": null
        },
        "4,8": {
            "0": {
                "condition": "flag:door_East2_4_8==2",
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
                        "name": "flag:door_East2_4_8",
                        "value": "null"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.hideBgFgMap(\"bg2\", [\n\t[3, 7],\n\t[5, 7]\n]);\n\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [148,  0, 81,330, 81,330, 81, 33, 21,148,148, 91,148],
    [ 92,  0,148,148,148,148,148, 82,539,  0,148,  0,322],
    [148,539,148,334,148, 21,148, 34,148, 33,148,524,148],
    [148,  0,148,330,488,  0,148,331,148,  0,472,  0,334],
    [148,  0,148,334,148,330,148,148,148,524,50012,330,148],
    [  0,480,148,148,148,  0,472,  0, 21,  0, 81,  0,148],
    [330,  0,334,  0,  0,  0,148,148,148,148,148,480, 68],
    [  0,323,  0,480,  0,483,  0,148,  0, 21,  0,  0,148],
    [149, 81,148,148, 85,148,148,148, 81,148,540,  0,148],
    [ 33,483,148,483,  0,488,148, 33,472,148,  0,148,148],
    [322,  0,148,  0,472,  0,148,323,  0,148,330,  0, 94],
    [149,149,149,149, 85,149,149,149,149,149, 84,149,149],
    [149, 21,330,324,326,325,330, 22,149, 21, 22, 21,149]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,50001,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50002,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,50001,  0,  0,  0,  0,  0,  0,50001,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,865,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,866,  0,  0,  0,  0,  0,  0,  0,  0],
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
    [  0,  0,  0,168,  0,168,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,168,  0,168,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,168,  0,  0,  0,  0,  0,  0,  0,  0],
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