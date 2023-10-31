main.floors.MT59=
{
    "floorId": "MT59",
    "title": "主塔 59 层",
    "name": "未来走廊-59",
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
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "9,3": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "1,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT59_3_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT59_3_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT59_3_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT59_3_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {
        "3,4": [
            {
                "type": "if",
                "condition": "flag:autoGetItem",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.loadEquip(\"sword4\");\n}"
                    },
                    "\t[系统提示]已自动穿上刚拾取的装备。"
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {
        "4,3": {
            "0": {
                "condition": "flag:door_MT59_3_3==4",
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
        },
        "2,3": {
            "0": {
                "condition": "flag:door_MT59_3_3==4",
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
    [144,332, 81,332, 81,332, 81,331, 82,448, 22, 22,144],
    [144,144,144,144,144,144,144, 21,144,144,144,331,144],
    [144,448, 85,460, 85,448,144,334,144, 87,144, 81,144],
    [144,  0,144, 41,144,  0,144,344,144,347,144,346,144],
    [144,331,144,144,144,331,144, 21,347,324,144,325,144],
    [144,448,  0,332,  0,448,144,  0,144,  0,144,331,144],
    [144,144,144, 83,144,144,144,331,144,454,144,144,144],
    [144,  0,325,  0,331,  0,344,  0, 81,326,334,331,144],
    [144, 81,144,144,144,450,144, 81,144,144,144,144,144],
    [144,450, 22,454,144,331,  0, 22, 82,453,331,454,144],
    [144,332,334,324,144,  0, 88,  0,144,324,325,326,144],
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