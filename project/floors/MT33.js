main.floors.MT33=
{
    "floorId": "MT33",
    "title": "主塔 33 层",
    "name": "孤狼战场-33",
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
    "bgm": "area5.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,2": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,9": {
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
    [142,142,142,142,142,142,142,142,142,142,142,142,142],
    [142,142, 21,  0,382,  0, 88,  0,382,  0, 21,142,142],
    [142,142, 27, 33,142, 21, 34, 21,142, 33, 27,142,142],
    [142,142,142,382,142,142,142,142,142,382,142,142,142],
    [142,142,378,  0,378,142, 22,142,378,  0,378,142,142],
    [142,142,  0, 33,  0,142, 22,142,  0, 33,  0,142,142],
    [142,142,232,  0,227, 82,382, 82,227,  0,232,142,142],
    [142,142,142, 81,142,142,142,142,142, 81,142,142,142],
    [142,142,378, 33,274,142, 87,142,274, 33,378,142,142],
    [142,142, 22, 28, 22, 82, 83, 82, 22, 28, 22,142,142],
    [142,142,142,142,142,142,142,142,142,142,142,142,142],
    [142,142,142,142,142,142,142,142,142,142,142,142,142]
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