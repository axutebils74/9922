main.floors.Ch4_8=
{
    "floorId": "Ch4_8",
    "title": "通幽径-8",
    "name": "通幽径-8",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "T641",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.setBgLight([\n\t[2, 3, 100],\n\t[10, 5, 100],\n\t[4, 10, 100]\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "Ch4_7",
            "loc": [
                11,
                0
            ]
        },
        "7,0": {
            "floorId": "Ch4_9",
            "loc": [
                11,
                12
            ]
        }
    },
    "afterBattle": {
        "1,10": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_8_2_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,10": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_8_2_9",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,9": {
            "0": {
                "condition": "flag:door_Ch4_8_2_9==2",
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
                        "name": "flag:door_Ch4_8_2_9",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "map": [
    [159,159,159,159,159,159,159, 91,159,159,159,159,159],
    [159,329,642, 81,330,  0,159,330,  0, 81, 82,332,159],
    [159,643,330,159,  0, 21,651,  0,331,159,330,333,159],
    [159, 81,669,159,159,159,159,645,159,159,159,159,159],
    [159,  0,649,328, 22,330,159,  0,  0, 21,159,  0,159],
    [159,159,159,159,159,159,159,159,330,  0,669,331,159],
    [159,652,  0,330, 82,331, 81,  0,  0,334,159,653,159],
    [159,  0, 23,  0,159,159,159,159,585,159,159,  0,159],
    [159,331,585, 21,159,330,652,585,  0,  0,  0,642,159],
    [159,159, 85,159,159,159,159,159,329,159, 21,159,159],
    [159,642,  0,649,669,330,  0,647,  0,159,  0,159,159],
    [159,  0, 22,  0, 81,  0,  0,159,  0,  0, 81,330,331],
    [159,159,159,159,159,159, 93,159,160,160,160,160,160]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,171,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,171,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,171,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,171,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,171,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,171,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,171,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,668,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,668,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,668,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "area13.mp3",
    "color": [
        0,
        0,
        0,
        0.6
    ],
    "downFloor": [
        6,
        12
    ],
    "upFloor": [
        7,
        0
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}