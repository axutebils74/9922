main.floors.MT64=
{
    "floorId": "MT64",
    "title": "主塔 64 层",
    "name": "未来走廊-64",
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
            "type": "changePos",
            "direction": "down"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]挡住楼梯的敌人好强……\n也许可以从侧面上楼。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "12,6": {
            "floorId": "MT6X",
            "loc": [
                0,
                36
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
    [144, 88,  0,144,331,  0,144,  0,459,333,  0,455,144],
    [144,  0, 21, 81, 81,324,144,  0,144, 21,462,  0,144],
    [144,  0,144,144,144,458,144,331,144,324, 21,345,144],
    [144,345,144,  0, 21,  0,345,  0,144,144,144, 81,144],
    [144,  0, 81,331,  0,331,144,  0,331,345,331,  0,144],
    [144,331,144,144,144,144,144,458,144,144,144,  0, 94],
    [144,  0, 22,144,  0,331,  0,331,  0,144,325,519,144],
    [144,331,  0,458,  0,144, 81,144,  0, 81,  0,331,144],
    [144,144, 81,144,144,144,332,144,144,144, 81,144,144],
    [144,  0,345,  0,144,324,459,455, 82,  0,451,  0,144],
    [144,331, 21,325,144,144, 87,144,144,324, 21,331,144],
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