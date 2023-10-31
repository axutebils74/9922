main.floors.South7=
{
    "floorId": "South7",
    "title": "停风林-7",
    "name": "停风林-7",
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
        "5,2": [
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "animate",
                "name": "E_unhappy",
                "loc": "hero"
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            "\t[hero]……有岔路。",
            "\t[晴芸,hero3]出口在右下方。不过，到左下这条路走走看也不错？",
            {
                "type": "changePos",
                "direction": "down"
            },
            "\t[hero]（前面堵路的怪物越来越强了，她到底是怎么进来的……）",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "5,0": {
            "floorId": "South6",
            "loc": [
                1,
                12
            ]
        },
        "2,12": {
            "floorId": "South8",
            "loc": [
                6,
                0
            ]
        },
        "12,10": {
            "floorId": "South9",
            "loc": [
                0,
                6
            ]
        }
    },
    "afterBattle": {
        "10,9": [
            {
                "type": "setValue",
                "name": "flag:door_South7_11_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,11": [
            {
                "type": "setValue",
                "name": "flag:door_South7_11_10",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "11,10": {
            "0": {
                "condition": "flag:door_South7_11_10==2",
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
    [149,149,149,149,149, 91,149,149,149,149,149,149,149],
    [149,  0, 31, 21,149,  0,149, 27, 31, 81,399,  0,149],
    [149, 28,  0,399, 81,  0, 81,443,  0,149,465, 31,149],
    [149,399,  0,149,149,149,149,149,149,149,  0, 81,149],
    [149, 31, 81,149, 31,  0, 29,  0, 31,149,465, 31,149],
    [149,399,  0,149, 21, 28,  0, 27, 21,149,  0,400,149],
    [149,  0, 27,149, 31,  0,400,  0, 31,149, 28,  0,149],
    [149,465,149,149,149,149, 81,149,149,149, 32, 27,149],
    [149,  0,  0, 32,  0,465,  0, 32,  0,149,149,149,149],
    [149,149, 81,149,149,  0,149,149,443,149,465,  0,149],
    [149, 32,399, 32,149, 28,149,149, 21, 81, 29, 85, 94],
    [149, 21, 27, 21,149, 21, 81,  0, 27,149,465,  0,149],
    [149,149, 93,149,149,149,149,149,149,149,149,149,149]
],
    "bgm": "area8.mp3",
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,50001,  0,  0,  0,  0,  0,  0,  0,  0,  0,50001,  0],
    [  0,  0,  0,  0,  0,50019,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,50010,  0,50010,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60020,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,50001,  0,  0,50021,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,50021,  0,  0,  0,50002,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "downFloor": null,
    "upFloor": null,
    "flyPoint": [
        5,
        0
    ],
    "hard1_enemy_ratio": 80,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}