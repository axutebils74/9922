main.floors.North3=
{
    "floorId": "North3",
    "title": "裕麓山-3",
    "name": "裕麓山-3",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "grass",
    "bgm": "area11.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,10": {
            "floorId": "North2",
            "loc": [
                12,
                2
            ]
        }
    },
    "afterBattle": {
        "8,6": [
            {
                "type": "setValue",
                "name": "flag:door_North3_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_North3_9_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(9, 7);\ncore.plugin.decSpecialDoorCount(7, 5);\n}"
            }
        ],
        "8,8": [
            {
                "type": "setValue",
                "name": "flag:door_North3_9_7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(9, 7);\n}"
            }
        ],
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:door_North3_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(7,5);\n}"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "9,7": {
            "0": {
                "condition": "flag:door_North3_9_7==2",
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
                        "name": "flag:door_North3_9_7",
                        "value": "null"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.hideBgFgMap(\"bg2\", [\n\t[8, 8]\n]);\nif (core.getBlockId(7, 5) != \"specialDoor\") {\n\tcore.hideBgFgMap(\"bg2\", [\n\t\t[8, 6]\n\t]);\n}\n\n}"
                    }
                ]
            },
            "1": null
        },
        "7,5": {
            "0": {
                "condition": "flag:door_North3_7_5==2",
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
                        "name": "flag:door_North3_7_5",
                        "value": "null"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.hideBgFgMap(\"bg2\", [\n\t[6, 6]\n]);\nif (core.getBlockId(9, 7) != \"specialDoor\") {\n\tcore.hideBgFgMap(\"bg2\", [\n\t\t[8, 6]\n\t]);\n}\n\n}"
                    }
                ]
            },
            "1": null
        },
        "6,9": {
            "0": null,
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [  0, 17, 17, 17, 17, 17, 17, 17,158,158, 17, 17, 17],
    [  0, 17,331,  0,50012,330,  0,151,151,151,151,  0, 53],
    [  0, 17,  0,325,555,  0,324,151,151,151,151,325,  0],
    [  0, 17,80049, 82, 20, 20,553,151,151,151,151, 81, 21],
    [  0, 17,  0,330,  0, 20,  0,324,  0, 81,543,  0,  0],
    [  0, 17,  0,80007,  0, 20, 20, 85,50007,50007,50007,50007,50007],
    [  0, 17,533,80015,  0, 20,547,  0,547,50007,556,324,334],
    [  0, 17, 30, 81,  0,326,  0,50012,  0, 85,  0,332, 53],
    [  0, 17, 20, 20,  0, 20, 81,  0,528,50007,556,325,334],
    [ 17, 17,330, 20,534, 20, 20, 21,50007,50007,50007,50007,50007],
    [ 92,  0, 81,  0,  0,528,  0,  0,334,50012, 81,324,  0],
    [  0,555,  0, 21,80005,80006,564,325,  0, 81,545,  0,332],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17]
],
    "bgmap": [
    [  0,80050,80073,80073,80073,80073,80073,80073,80073,80073,80073,80073,80073],
    [  0,80050,  0,50001,  0,  0,  0,  0,  0,  0,  0,50001,80050],
    [  0,80050,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80050],
    [80057,80058,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80050],
    [80065,80066,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80050],
    [80065,80066,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80050],
    [80060,80066,  0,  0,50001,  0,  0,  0,  0,  0,  0,  0,80050],
    [80065,80066,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80050],
    [80065,80066,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80050],
    [80073,80074,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80050],
    [  0,  0,  0,  0,  0,  0,  0,50002,  0,  0,  0,  0,80050],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80050],
    [80057,80057,80057,80057,80057,80057,80057,80057,80057,80057,80057,80057,80058]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,865,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,865,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,168,  0,168,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,168,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "hard1_enemy_ratio": 80,
    "beforeBattle": {},
    "cannotMoveIn": {}
}