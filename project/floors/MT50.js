main.floors.MT50=
{
    "floorId": "MT50",
    "title": "主塔 50 层",
    "name": "辉煌圣殿-50",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area6.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 10,
    "defaultGround": "ground3",
    "bgm": "area6.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,1": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[杂技大师,E433]我会用我的蛇皮走位秀翻你！",
                {
                    "type": "battle",
                    "loc": [
                        2,
                        1
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        3
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        3
                    ]
                },
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[hero]……花里胡哨。"
            ]
        }
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,6": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "1,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT50_2_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT50_2_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT50_2_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT50_2_2",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,2": {
            "0": {
                "condition": "flag:door_MT50_2_2==4",
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
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,331,433,331,143, 53, 23, 53,143,323, 22,323,143],
    [143,143, 85,143,143,330,323,330,143, 22,323, 22,143],
    [143,249,  0,249,143,143, 85,143,143,143, 85,143,143],
    [143,  0, 21,  0,143,  0,331,  0,273, 68,  0,330,143],
    [143,249,  0,249,143,220,143,280,143, 81,143,143,143],
    [143,143, 82,143,143,  0,143,143,143,322,143, 87,143],
    [143,330,  0, 22,249,  0, 81,273, 21,  0,143,  0,143],
    [143,143,143,143,143, 83,143,143,143,143,143,220,143],
    [143,  0,213,  0, 21,  0,323,  0,213,  0,330,  0,143],
    [143,  0,143,143, 81,143,143,143, 81,143,143,366,143],
    [143, 88,143,322,252,330,143,330,366,323,143, 68,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143]
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