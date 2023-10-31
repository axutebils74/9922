main.floors.MT16=
{
    "floorId": "MT16",
    "title": "主塔 16 层",
    "name": "主塔-16",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "area2.mp3",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[hero]（当初在我看来十分强大的\r[yellow]初级巫师\r，不知不觉间已经完全无法对我造成威胁了……\n完全就是\r[yellow]送钱\r的呀！）"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,3": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [151,151,151,151,151,151,151,151,151,151,151,151,151],
    [151, 31,322, 20, 68, 20,323, 20,322, 20,323, 31,151],
    [151,230,  0, 20,  0,231, 31,231,  0, 20,  0,230,151],
    [151, 81, 20, 20,207, 20, 87, 20,207, 20, 20, 81,151],
    [151, 31,  0,323,  0, 20, 81, 20,  0, 31,234, 32,151],
    [151,234, 20, 20,  0,238,  0,238,334,  0, 20, 68,151],
    [151,  0, 31, 20, 20, 20, 81, 20, 20, 20, 20, 32,151],
    [151, 20,230,  0, 20,  0,240,  0, 32, 31, 20, 82,151],
    [151, 20, 81,238, 32,  0, 20, 81, 20, 20, 20, 32,151],
    [151,  0,229, 20, 20,231, 20,  0,  0,  0,219,  0,151],
    [151, 31,  0, 20,  0, 31, 20,208, 20, 20, 81,  0,151],
    [151,  0,322, 20, 32,  0,240,323, 81,334, 20, 88,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151]
],
    "bgmap": [

],
    "fgmap": [

],
    "hard1_enemy_ratio": 85,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true,
    "weather": [
        "sun",
        5
    ]
}