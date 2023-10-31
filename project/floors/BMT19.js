main.floors.BMT19=
{
    "floorId": "BMT19",
    "title": "地下 19 层",
    "name": "地下-19",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground2",
    "bgm": "area4.mp3",
    "color": [
        0,
        0,
        0,
        0.9
    ],
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.setBgLight([\n\t[3, 4, 180],\n\t[9, 4, 180],\n\t[3, 9, 180],\n\t[9, 9, 180],\n\t[11, 9, 180],\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_BMT19_10_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:door_BMT19_10_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:door_BMT19_10_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,8": [
            {
                "type": "setValue",
                "name": "flag:door_BMT19_10_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:door_BMT19_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,5": [
            {
                "type": "setValue",
                "name": "flag:door_BMT19_10_6",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,9": {
            "0": {
                "condition": "flag:door_BMT19_10_9==4",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            }
        },
        "10,6": {
            "0": {
                "condition": "flag:door_BMT19_10_6==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "map": [
    [311,311,311,311,311,311,311,311,311,311,311,311,311],
    [311,  0,327,  0,353,  0, 87,  0,251,327,  0, 23,311],
    [311, 23,311,311,311,  0,330,  0,311,311,311,353,311],
    [311,  0,330,368,  0, 22,  0, 22,368,330,  0,328,311],
    [311,254,311,311,251,311,311,254,311,311, 22,311,311],
    [311,  0,311, 23,  0,353,  0, 22,311,268,  0,268,311],
    [311,327,311,  0,328,311,272,311,311,311, 85,311,311],
    [311,  0,251, 22,311,311,394, 23,311,254,  0,254,311],
    [311,223,311,  0,254, 22,  0,330,311,251,  0,251,311],
    [311, 23,311,311,311,311,223,311,311,311, 85,311,311],
    [311,  0,251,  0,311, 22,  0,328,311, 22, 23,388,311],
    [311,327, 23,334,272,  0, 88,  0,311,330,397,330,311],
    [311,311,311,311,311,311,311,311,311,311,311,311,311]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,103,  0,  0,  0,  0,  0,103,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,103,  0,  0,  0,  0,  0,103,  0,103,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "underGround": true,
    "hard1_enemy_ratio": 80,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}