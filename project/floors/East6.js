main.floors.East6=
{
    "floorId": "East6",
    "title": "花月道-6",
    "name": "花月道-6",
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
        "11,0": {
            "floorId": "East7",
            "loc": [
                11,
                12
            ]
        },
        "0,5": {
            "floorId": "East5",
            "loc": [
                12,
                5
            ]
        }
    },
    "afterBattle": {
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_East6_6_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,9);\n}"
            }
        ],
        "7,7": [
            {
                "type": "setValue",
                "name": "flag:door_East6_6_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,9);\n}"
            }
        ],
        "6,8": [
            {
                "type": "setValue",
                "name": "flag:door_East6_6_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,9);\n}"
            }
        ],
        "4,10": [
            {
                "type": "setValue",
                "name": "flag:door_East6_3_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,12": [
            {
                "type": "setValue",
                "name": "flag:door_East6_3_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,10": [
            {
                "type": "setValue",
                "name": "flag:door_East6_9_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,12": [
            {
                "type": "setValue",
                "name": "flag:door_East6_9_11",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,9": {
            "0": {
                "condition": "flag:door_East6_6_9==3",
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
                        "name": "flag:door_East6_6_9",
                        "value": "null"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.hideBgFgMap(\"bg2\", [\n\t[5, 7],\n\t[6, 8],\n\t[7, 7]\n]);\n\n}"
                    }
                ]
            },
            "1": null
        },
        "3,11": {
            "0": {
                "condition": "flag:door_East6_3_11==2",
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
                        "name": "flag:door_East6_3_11",
                        "value": "null"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.hideBgFgMap(\"bg2\", [\n\t[4, 10],\n\t[4, 12]\n]);\n\n}"
                    }
                ]
            },
            "1": null
        },
        "9,11": {
            "0": {
                "condition": "flag:door_East6_9_11==2",
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
                        "name": "flag:door_East6_9_11",
                        "value": "null"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.hideBgFgMap(\"bg2\", [\n\t[8, 10],\n\t[8, 12]\n]);\n\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [148,148,148,148,148,148,148,148,148,148,148, 91,149],
    [148, 21,  0,540,  0,  0, 33,  0,  0,540,  0, 21,149],
    [148,  0,148,148,148,148, 82,148,148,148,148,  0,149],
    [148,539,148,  0,529,330,326,330,529,  0,148,539,149],
    [148,  0,148,324,148,148, 81,148,148,325,148,  0,149],
    [ 92,  0,148,  0,541,  0,334,  0,541,  0,148,  0,149],
    [149,472,148, 33,149,149, 81,149,149, 33,148,472,149],
    [149,330,148,488,149,542,  0,542,149,488,148,330,149],
    [149,  0, 21,  0,149,  0,488,  0,149,  0, 21,  0,149],
    [149,149, 84,149,149,149, 85,149,149,149, 84,149,149],
    [149,331,325,149,529,324,  0,325,529,149,324,331,149],
    [149,324,331, 85,  0,  0,334,  0,  0, 85,331,325,149],
    [149,149,149,149,529,325,488,324,529,149,149,149,149]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,50001,  0,  0,  0,  0,  0,  0,  0,50001,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,50001,  0,  0,  0,  0,  0,  0,  0,  0,  0,50002,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,866,  0,  0,  0,  0,  0,  0],
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
    [  0,  0,  0,  0,  0,168,  0,168,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,168,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,168,  0,  0,  0,168,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,168,  0,  0,  0,168,  0,  0,  0,  0]
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