main.floors.MT69=
{
    "floorId": "MT69",
    "title": "主塔 69 层",
    "name": "未来走廊-69",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area7_2.jpg",
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
            "type": "loadBgm",
            "name": "boss7_2.mp3"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,1": [
            {
                "type": "openShop",
                "id": "69FShop",
                "open": true
            }
        ]
    },
    "changeFloor": {
        "2,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "12,6": {
            "floorId": "MT6X",
            "loc": [
                0,
                6
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144,  0, 88,144,324,333,144,349,144,  9,130, 10,144],
    [144,  0,144,144,457,  0,144,324,144,144, 83,144,144],
    [144,  0, 21,  0,  0,144,144,452, 81,331,  0, 81,144],
    [144,144,144,144,519,144,325,460,144,  0,144,455,144],
    [144,348, 81, 81,  0,144,144,144,144,519,144,  0,144],
    [144,324,144,144,331,  0,452,  0,331,  0,331,452, 94],
    [144,  0,349,144,144,334,144, 81,144,144,144,  0,144],
    [144, 21,455,452, 81,  0,144,332,332,144,462,455,144],
    [144,  0,333,144,144,348,144,144,144,144,144,144,144],
    [144,144,144,144,332,  0,144,334,333,144,461,349,144],
    [144,333,326,452,  0,324,457,  0,  0,452,  0,325,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        2,
        1
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