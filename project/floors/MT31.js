main.floors.MT31=
{
    "floorId": "MT31",
    "title": "主塔 31 层",
    "name": "孤狼战场-31",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area5.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 10,
    "defaultGround": "ground",
    "color": null,
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,6": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
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
    [142,142,142,142,142,142,142,142,142,142,142,142,142],
    [142,227, 28,382,  0,142,232,142,  0,378, 29,227,142],
    [142, 27, 82,  0, 21,142,278, 81, 34,  0, 82, 27,142],
    [142,378,  0,142, 81,142,142,142,142,142,  0,370,142],
    [142,  0, 34,142,355,  0, 28,  0,355, 81, 21,  0,142],
    [142,142, 81,142, 34,142,142,142, 27,142,142,142,142],
    [142,232,370,142,  0,382, 23,382,  0,142,  0, 88,142],
    [142,142,142,142, 27,142,142,142, 34,142, 81,142,142],
    [142,  0, 21, 81,355,  0, 22,  0,355,142, 34,378,142],
    [142,278,  0,142,142,142,142,142, 81,142,  0,382,142],
    [142, 27, 82,  0, 34, 81,274,142, 21,  0, 82, 28,142],
    [142,227, 29,378,  0,142, 87,142,  0,278, 27,227,142],
    [142,142,142,142,142,142,142,142,142,142,142,142,142]
],
    "bgmap": [

],
    "fgmap": [

],
    "hard1_enemy_ratio": 75,
    "bgm": "area5.mp3",
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}