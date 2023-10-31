main.floors.East13=
{
    "floorId": "East13",
    "title": "花月道-13",
    "name": "花月道-13",
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
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.values.animateSpeed = 450;\n}"
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,11": {
            "floorId": "East12",
            "loc": [
                12,
                11
            ]
        },
        "11,0": {
            "floorId": "East14",
            "loc": [
                1,
                12
            ]
        },
        "1,12": {
            "floorId": "East13",
            "loc": [
                12,
                1
            ]
        },
        "12,1": {
            "floorId": "East13",
            "loc": [
                1,
                12
            ]
        }
    },
    "afterBattle": {
        "4,4": [
            {
                "type": "setValue",
                "name": "flag:door_East13_6_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,7);\n}"
            }
        ],
        "8,4": [
            {
                "type": "setValue",
                "name": "flag:door_East13_6_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,7);\n}"
            }
        ],
        "4,8": [
            {
                "type": "setValue",
                "name": "flag:door_East13_6_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,7);\n}"
            }
        ],
        "8,8": [
            {
                "type": "setValue",
                "name": "flag:door_East13_6_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,7);\n}"
            }
        ],
        "6,6": [
            {
                "type": "openDoor",
                "loc": [
                    8,
                    0
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    12,
                    4
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    12
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    0,
                    8
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    3
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    9
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    2
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    5,
                    10
                ]
            }
        ],
        "10,10": [
            {
                "type": "setValue",
                "name": "flag:door_East13_9_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(9,8);\n}"
            }
        ],
        "2,2": [
            {
                "type": "setValue",
                "name": "flag:door_East13_3_4",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(3,4);\n}"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,7": {
            "0": {
                "condition": "flag:door_East13_6_7==4",
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
                        "name": "flag:door_East13_6_7",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "9,8": {
            "0": {
                "condition": "flag:door_East13_9_8==1",
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
                        "name": "flag:door_East13_9_8",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "3,4": {
            "0": {
                "condition": "flag:door_East13_3_4==1",
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
                        "name": "flag:door_East13_3_4",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "map": [
    [151,151,151,148,330, 21, 21,324, 85,  0,148, 91,149],
    [151,151,151,148,148,148,148,148,148,  0,148,  0, 89],
    [148,148,536, 21,  0,536,  0, 85,  0,330,  0,331,149],
    [148,148,330,148,148,148,148,148, 85,  0,  0,  0,  0],
    [331,148,  0, 85,538,  0,330,  0,538,148, 81,148, 85],
    [ 22,148,536,148,  0,148,148,148,  0,148,  0,148,325],
    [334,148,  0,148,330,148,537,148,330,148,  0,148,334],
    [325,148,  0,148,  0,148, 85,148,  0,148,536,148, 68],
    [ 85,148, 81,148,538,  0,330,  0,538, 85,  0,148,331],
    [  0,  0,  0,  0, 85,148,148,148,148,148,330,148,148],
    [148,148,  0,330,  0, 85,  0,536,  0, 21,536,148,148],
    [ 92,  0,331,  0,148,148,148,148,148,148,151,151,151],
    [149, 89,149,  0, 85,324, 21, 21,330,148,151,151,151]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,50001,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,146,146,146,146,146,  0,  0,  0,  0],
    [  0,  0,  0,  0,146,  0,  0,  0,146,  0,  0,  0,  0],
    [  0,  0,50002,  0,146,  0,146,  0,146,  0,50001,  0,  0],
    [  0,  0,  0,  0,146,  0,146,  0,146,  0,  0,  0,  0],
    [  0,  0,  0,  0,146,146,146,146,146,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,50001,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,70004,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,864,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,867,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,864,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70012,  0]
],
    "bg2map": [

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