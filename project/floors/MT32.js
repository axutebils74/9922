main.floors.MT32=
{
    "floorId": "MT32",
    "title": "主塔 32 层",
    "name": "孤狼战场-32",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area5.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 10,
    "defaultGround": "ground",
    "bgm": "area5.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,2": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT31_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT31_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT31_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT31_6_4",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,4": {
            "0": {
                "condition": "flag:door_MT31_6_4==4",
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
    [142,142,142,142,142,142,142,142,142,142,142,142,142],
    [142,369, 23,369,142, 21, 33, 21,142,369, 23,369,142],
    [142,227,270,227,142, 33, 87, 33,142,227,270,227,142],
    [142,142, 82,142,142, 21, 33, 21,142,142, 82,142,142],
    [142,142, 82,142,142,142, 85,142,142,142, 82,142,142],
    [142, 34,378,232,142,382,330,382,142,232,378, 34,142],
    [142, 81,142,142,142, 27, 22, 27,142,142,142, 81,142],
    [142,227, 34,378,142,382,330,382,142,378, 34,227,142],
    [142,142, 81,142,142,142, 83,142,142,142, 81,142,142],
    [142,382, 28, 33,270,  0,331,  0,270, 33, 28,382,142],
    [142, 21,142, 81,142,142,  0,142,142, 81,142, 21,142],
    [142, 27,378, 34,274,142, 88,142,274, 34,378, 27,142],
    [142,142,142,142,142,142,142,142,142,142,142,142,142]
],
    "bgmap": [

],
    "fgmap": [

],
    "hard1_enemy_ratio": 75,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}