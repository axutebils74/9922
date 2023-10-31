main.floors.East11=
{
    "floorId": "East11",
    "title": "花月道-11",
    "name": "花月道-11",
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
        "0,2": {
            "floorId": "East10",
            "loc": [
                12,
                2
            ]
        },
        "11,12": {
            "floorId": "East14",
            "loc": [
                1,
                0
            ]
        }
    },
    "afterBattle": {
        "1,7": [
            {
                "type": "setValue",
                "name": "flag:door_East11_2_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(2,9);\n}"
            }
        ],
        "2,8": [
            {
                "type": "setValue",
                "name": "flag:door_East11_2_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(2,9);\n}"
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:door_East11_2_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(2,9);\n}"
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_East11_6_9",
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
                "name": "flag:door_East11_6_9",
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
                "name": "flag:door_East11_6_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,9);\n}"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,9": {
            "0": {
                "condition": "flag:door_East11_2_9==3",
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
                        "name": "flag:door_East11_2_9",
                        "value": "null"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.hideBgFgMap(\"bg2\", [\n\t[3, 7],\n\t[1, 7],\n\t[2, 8]\n]);\n\n}"
                    }
                ]
            },
            "1": null
        },
        "6,9": {
            "0": {
                "condition": "flag:door_East11_6_9==3",
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
                        "name": "flag:door_East11_6_9",
                        "value": "null"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.hideBgFgMap(\"bg2\", [\n\t[7, 7],\n\t[5, 7],\n\t[6, 8]\n]);\n\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [149,149,149,149,149,149,149,149,149,149,149,149,149],
    [149,330,  0,149,324,334,149,  0,330,149, 33, 33,149],
    [ 92,  0,  0, 81,533,  0, 81,474, 21,149, 81,151,151],
    [148, 21,542,149,331, 21,149,  0, 81, 33, 33,151,151],
    [148,148,  0,149,149,149,149,  0,149,149, 81,  0,149],
    [148,  0,  0,532,  0,330,  0,334,  0,330,  0,530,149],
    [148,148, 81,148,148,148, 81,148,148,532,50012, 81,149],
    [148,533,  0,533,148,533,  0,533,148,  0,331,  0,149],
    [148, 21,532, 21,148, 21,532, 21,148, 21,148,  0,149],
    [148,148, 85,148,148,148, 85,148,148,148,148,542,330],
    [148,324,  0,325,148,325,  0,324,148,330, 82,  0,149],
    [148,331,490, 30, 82, 30,526,331, 82,334,148,  0,149],
    [148,148,148,148,148,148,148,148,148,148,148, 93,149]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,50001,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,50001,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,50002,  0,  0,  0,50001,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70003],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,866,  0,  0,  0,866,  0,  0,  0,  0,  0,  0],
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
    [  0,168,  0,168,  0,168,  0,168,  0,  0,  0,  0,  0],
    [  0,  0,168,  0,  0,  0,168,  0,  0,  0,  0,  0,  0],
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