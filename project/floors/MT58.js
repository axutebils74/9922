main.floors.MT58=
{
    "floorId": "MT58",
    "title": "主塔 58 层",
    "name": "未来走廊-58",
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
            "floorId": ":next",
            "stair": "downFloor"
        },
        "0,6": {
            "floorId": "MT5X",
            "loc": [
                19,
                30
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
    [144,  0,331,324,  0,144,331,326,144,  0,325,454,144],
    [144, 81,144,144,454,144, 21,331,144,331,144,347,144],
    [144,332,334,144, 81,144,450,144,144, 81,144,  0,144],
    [144,334,332,144,  0, 21,  0,331,448,  0,144,332,144],
    [144,450,144,144,454,144,144,144,144,334,448,  0,144],
    [ 92,  0,344,331,  0, 82,454,453, 81,  0,144,144,144],
    [144,144,144,  0,324,144,331,325,144,450,144,325,144],
    [144,332,144,448,144,144,450,144,144,  0, 81,346,144],
    [144,450, 81,  0,332,  0,331,346,  0,332,144,331,144],
    [144,331,144,144, 82,144,344,144, 81,144,144,144,144],
    [144, 21,344, 21,324,144, 87,144,450,324,334,331,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "downFloor": null,
    "upFloor": null,
    "flyPoint": [
        6,
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