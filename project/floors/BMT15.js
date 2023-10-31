main.floors.BMT15=
{
    "floorId": "BMT15",
    "title": "地下 15 层",
    "name": "地下-15",
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
            "function": "function(){\ncore.plugin.setBgLight([\n\t[2, 2, 180],\n\t[10, 2, 180],\n\t[3, 5, 180],\n\t[9, 5, 180],\n\t[3, 9, 180],\n\t[9, 9, 180],\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:door_BMT15_6_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:door_BMT15_6_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,7": [
            {
                "type": "setValue",
                "name": "flag:door_BMT15_6_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_BMT15_6_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:door_BMT15_6_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_BMT15_6_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,7": [
            {
                "type": "setValue",
                "name": "flag:door_BMT15_6_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:door_BMT15_6_10",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,10": {
            "0": {
                "condition": "flag:door_BMT15_6_10==8",
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
    [311, 87,  0, 33,  0,353,394,353,  0, 33,  0,368,311],
    [311,  0,311,311,272,  0,  0,  0,272,311,311,  0,311],
    [311,328,311, 22,330,311,330,311,330, 22,311,327,311],
    [311,  0,272,330,311,311,  0,311,311,330,272,  0,311],
    [311,353,  0,311,311,  0,254,  0,311,311,  0,353,311],
    [311,334,311,311,  0,241, 21,241,  0,311,311,334,311],
    [311,  0,311, 22,251, 21, 22, 21,251, 22,311,  0,311],
    [311,277,311,311,  0,241, 21,241,  0,311,311,277,311],
    [311, 33,  0,311,311,  0,254,  0,311,311,  0, 33,311],
    [311,  0,268, 33,311,311, 85,311,311, 33,268,  0,311],
    [311, 22,327, 22, 32,311, 88,311, 32, 22,328, 22,311],
    [311,311,311,311,311,311,311,311,311,311,311,311,311]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,103,  0,  0,  0,  0,  0,  0,  0,103,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,103,  0,  0,  0,  0,  0,103,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,103,  0,  0,  0,  0,  0,103,  0,  0,  0],
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