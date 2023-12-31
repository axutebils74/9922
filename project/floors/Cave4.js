main.floors.Cave4=
{
    "floorId": "Cave4",
    "title": "特训营-4",
    "name": "特训营-4",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "ground7",
    "bgm": "area12.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "2,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,6": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "2,3": [
            {
                "type": "setValue",
                "name": "flag:door_Cave4_3_2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(3,2);\n}"
            }
        ],
        "4,3": [
            {
                "type": "setValue",
                "name": "flag:door_Cave4_3_2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(3,2);\n}"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "3,2": {
            "0": {
                "condition": "flag:door_Cave4_3_2==2",
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
                        "name": "flag:door_Cave4_3_2",
                        "value": "null"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.hideBgFgMap(\"bg2\", [\n\t[2, 3],\n\t[4, 3]\n]);\n\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,331,327, 22,328,330,145,  0, 81,  0,328,  0,145],
    [145,145,145, 85,145,145,145,594, 81,580, 81,578,145],
    [145,334,595,  0,595,334,145,331,145,334,145,386,145],
    [145,145,145, 21,145,145,145,325,145,324,145,570,145],
    [145,324,581,  0,581,325,145,585,145,589,145,  0,145],
    [145,330,145,  0,145,331,145,  0,326,  0, 84, 88,145],
    [145,145,145, 81,145,145,145, 81,145,557,145, 83,145],
    [145,  0, 21,  0,585,  0,331,  0, 82,  0,  0,332,145],
    [145,579,145, 81,145, 81,145, 81,145, 21,145,145,145],
    [145,334,  0,332,145,334,145,589,334,145, 22,  0,145],
    [145,  0, 87, 81,334, 81,145,  0,331, 81,577,324,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,865,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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
    [  0,  0,168,  0,168,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "hard1_enemy_ratio": 80,
    "underGround": true,
    "upFloor": [
        2,
        11
    ],
    "downFloor": [
        11,
        6
    ],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}