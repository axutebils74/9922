main.floors.South3=
{
    "floorId": "South3",
    "title": "停风林-3",
    "name": "停风林-3",
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
    "events": {},
    "changeFloor": {
        "1,12": {
            "floorId": "South4",
            "loc": [
                1,
                0
            ]
        },
        "1,0": {
            "floorId": "South2",
            "loc": [
                11,
                12
            ]
        }
    },
    "afterBattle": {
        "3,5": [
            {
                "type": "setValue",
                "name": "flag:door_South3_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:door_South3_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:door_South3_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_South3_6_6",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,6": {
            "0": {
                "condition": "flag:door_South3_6_6==4",
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
                        "name": "flag:door_South3_6_6",
                        "value": "null"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [149, 91,149,149,149,149,149,149,149,149,149,149,149],
    [149, 32,149, 34,471, 81, 29,149, 31,443, 28,  0, 32],
    [149,  0, 84,  0, 21,149,  0,486,  0,149,149,149,149],
    [149,444,149, 63,  0,149, 32,149, 21,  0, 31,465,149],
    [149,  0,149,149,149,149,149,149,149,149,149, 81,149],
    [149,334,149,444,  0,444,149, 21, 22,149, 31, 31,149],
    [149,  0,400,  0,  0,  0, 85,444, 21, 82,400,400,322],
    [149, 27,149,444,  0,444,149, 21, 22,149, 31, 31,149],
    [149,  0,149,149,149,149,149,149,149,149,149, 81,149],
    [149,444,149, 63,  0,149, 32,149, 21,  0, 31,465,149],
    [149,  0, 84,  0, 21,149,  0,486,  0,149,149,149,149],
    [149, 32,149, 34,481, 81, 29,149, 31,443, 27,  0, 32],
    [149, 93,149,149,149,149,149,149,149,149,149,149,149]
],
    "bgm": "area8.mp3",
    "bgmap": [
    [  0,147,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,147,  0,  0,  0,  0,  0,  0,  0,  0,  0,50013,  0],
    [  0,147,  0,  0,  0,  0,  0,  0,50001,  0,  0,  0,  0],
    [  0,147,  0,  0,50010,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,147,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,147,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,147,  0,  0,50002,  0,  0,  0,50001,  0,  0,  0,  0],
    [  0,147,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,147,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,147,  0,  0,50010,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,147,  0,  0,  0,  0,  0,  0,50001,  0,  0,  0,  0],
    [  0,147,  0,  0,  0,  0,  0,  0,  0,  0,  0,50013,  0],
    [  0,147,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "upFloor": [
        1,
        12
    ],
    "downFloor": [
        1,
        0
    ],
    "hard1_enemy_ratio": 80,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}