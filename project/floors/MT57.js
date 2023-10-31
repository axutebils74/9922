main.floors.MT57=
{
    "floorId": "MT57",
    "title": "主塔 57 层",
    "name": "未来走廊-57",
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
    "firstArrive": [
        {
            "type": "changePos",
            "direction": "up"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[hero]神像……看到它，竟然感到有一丝……亲切？"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": [
            {
                "type": "if",
                "condition": "flag:57FShop_finish == 1",
                "true": [
                    "神像眼中的红光已经彻底灭了，再无任何反应。"
                ],
                "false": [
                    {
                        "type": "openShop",
                        "id": "57FShop",
                        "open": true
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,6": {
            "floorId": "MT5X",
            "loc": [
                19,
                36
            ]
        },
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "9,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT57_10_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT57_10_2",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,2": {
            "0": {
                "condition": "flag:door_MT57_10_2==2",
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
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144,326,  0,332,144,  7,131,  8,144,324,332,325,144],
    [144,  0,453,  0,144,454,454,454,144,144, 85,144,144],
    [144,144, 81,144,144,144, 81,144,144,456,  0,456,144],
    [144,324,  0,344,  0,325,  0,331,144,144,325,144,144],
    [144,144,144,144,347,144,144, 81,144,454,  0,454,144],
    [ 92,326, 81,331,  0,331,144, 81,144,144,144, 82,144],
    [144, 82,144,144,454,144,144,454,344,  0,332,  0,144],
    [144,332,  0,448,  0, 82,  0,331,144,454,144,144,144],
    [144, 82,144,144,  0,144,324,  0,144,  0,324,334,144],
    [144,  0,324,144,344,144,144,453,144,144,144,144,144],
    [144, 88,  0, 81,  0,  0,332,  0, 21,347,325,331,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": null,
    "downFloor": null,
    "flyPoint": [
        1,
        11
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