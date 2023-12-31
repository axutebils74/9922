main.floors.South5=
{
    "floorId": "South5",
    "title": "停风林-5",
    "name": "停风林-5",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "grass",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,8": [
            {
                "type": "changePos",
                "direction": "up"
            },
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": "hero"
            },
            "\t[晴芸,hero3]呀，快看，那边有钱！冲冲冲！",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "0,8": {
            "floorId": "South4",
            "loc": [
                12,
                4
            ]
        },
        "6,12": {
            "floorId": "South6",
            "loc": [
                6,
                0
            ]
        }
    },
    "afterBattle": {
        "5,10": [
            {
                "type": "setValue",
                "name": "flag:door_South5_6_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,10": [
            {
                "type": "setValue",
                "name": "flag:door_South5_6_11",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,11": {
            "0": {
                "condition": "flag:door_South5_6_11==2",
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
    [149,149,50073,50074,149,149, 63,149,149,50073,50074,149,149],
    [149, 32,  0, 29,149,334,  0,334,149, 29,  0, 32,149],
    [149,  0,435,  0,149, 21,399, 21,149,  0,435,  0,149],
    [149,149, 81,149,149,149, 81,149,149,149, 81,149,149],
    [149, 21,445, 31,  0, 31,  0, 31,  0,429,  0, 28,149],
    [149,  0,149,444,149,149,149, 81,149, 27, 32, 81, 27],
    [149,445,149,334,  0, 21, 81, 34,149,149, 81,50007,  0],
    [149,  0,149,  0,149,  0,50004,  0,434,  0, 31,  0,399],
    [ 92,  0, 81, 21,149,429,  0,429,149, 32,  0,149,  0],
    [149,435,149, 81,149,149, 82,149,149,149, 81,149, 21],
    [149, 27,149, 32,149,429, 34,429,149, 28,435,149,  0],
    [149, 32,435, 28,149, 21, 85, 21,149, 21,  0,149,334],
    [149,149,149,149,149,149, 93,149,149,149,149,149,149]
],
    "bgm": "area8.mp3",
    "bgmap": [
    [  0,50072,  0,  0,50075,  0,  0,  0,50072,  0,  0,50075,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,50001,  0,  0,  0,  0,  0,  0,  0,  0,  0,50001,  0],
    [  0,  0,  0,  0,  0,  0,146,  0,  0,  0,  0,  0,  0],
    [  0,146,146,146,146,146,146,50013,  0,  0,  0,  0,  0],
    [  0,146,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,146,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,146,  0,50021,  0,  0,  0,  0,  0,50021,  0,  0,  0],
    [146,146,  0,  0,  0,  0,50013,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,50001,  0,  0,  0,  0,  0,  0,  0,  0,50002,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "upFloor": [
        6,
        12
    ],
    "downFloor": [
        0,
        8
    ],
    "hard1_enemy_ratio": 80,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}