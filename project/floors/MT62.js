main.floors.MT62=
{
    "floorId": "MT62",
    "title": "主塔 62 层",
    "name": "未来走廊-62",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area7.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 10,
    "defaultGround": "ground7",
    "bgm": "area7.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,0": {
            "floorId": "MT63",
            "stair": "downFloor"
        },
        "0,6": {
            "floorId": "MT5X",
            "loc": [
                19,
                6
            ]
        }
    },
    "afterBattle": {
        "5,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT62_6_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT62_6_1",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,1": {
            "0": {
                "condition": "flag:door_MT62_6_1==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [144,144,144,144,144,144, 87,144,144,144,144,144,144],
    [144,331,453,324,144,454, 85,454,144,331,453,331,144],
    [144,144,144,449,144,449,324,449,144,324,456, 21,144],
    [144,332,144, 81,144,144, 83,144,144,144, 81,144,144],
    [144,456, 82,  0,331, 81,  0,331,144,332,454,326,144],
    [144,  0,144,334,  0,144,450,454,144,  0,449,  0,144],
    [ 92,454,144,  0,454,144,  0,144,144,144, 81,144,144],
    [144,144,144,144,  0,144,334,  0,453,332,  0,347,144],
    [144,  0, 21,  0,453,331,  0,144,144,144,144,  0,144],
    [144,331,144,144, 81,144,  0, 82,  0,462,144,450,144],
    [144,  0,456,  0,454,144,456,144,325,  0,144,454,144],
    [144, 88,144,325,332,144, 22,144,  0,332,456,324,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "hard1_enemy_ratio": 75,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}