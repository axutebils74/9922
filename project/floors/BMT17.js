main.floors.BMT17=
{
    "floorId": "BMT17",
    "title": "地下 17 层",
    "name": "地下-17",
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
            "function": "function(){\ncore.plugin.setBgLight([\n\t[9, 1, 180],\n\t[9, 3, 180],\n\t[9, 6, 180],\n\t[7, 10, 180],\n\t[4, 10, 180],\n\t[3, 2, 180],\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,6": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "3,9": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "6,1": [
            {
                "type": "setValue",
                "name": "flag:door_BMT17_7_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,3": [
            {
                "type": "setValue",
                "name": "flag:door_BMT17_7_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,1": [
            {
                "type": "setValue",
                "name": "flag:door_BMT17_9_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,3": [
            {
                "type": "setValue",
                "name": "flag:door_BMT17_9_2",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,2": {
            "0": {
                "condition": "flag:door_BMT17_7_2==2",
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
        "9,2": {
            "0": {
                "condition": "flag:door_BMT17_9_2==2",
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
    [311,328,330,311,327,311,268,311,254,311, 21, 33,311],
    [311,353,311,311,  0,330,  0, 85,  0, 85, 23,409,311],
    [311, 33,  0,368,386,311,268,311,254,311, 21, 33,311],
    [311, 21,311,311,353,311,311,311,311,311,311,311,311],
    [311, 33,  0,327,  0,272,  0,328,  0,251,  0,  0,311],
    [311,368,311,311,311,311, 33,311,311,311,  0, 87,311],
    [311,328,311, 22, 22,311,  0,223,330,311,330, 23,311],
    [311,330,311,241,  0,223,  0,311, 23,311,311,353,311],
    [311,251,311, 88,311,311,353,311,241,334,311,  0,311],
    [311,394,311,311,311,327,  0,311,311,311,311,327,311],
    [311,388, 23,329,254,  0,330,272,330, 21,368,  0,311],
    [311,311,311,311,311,311,311,311,311,311,311,311,311]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,103,  0,  0,  0],
    [  0,  0,  0,103,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,103,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,103,  0,  0,  0,  0,  0,  0,103,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,103,  0,  0,103,  0,  0,  0,  0,  0],
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