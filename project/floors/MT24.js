main.floors.MT24=
{
    "floorId": "MT24",
    "title": "主塔 24 层",
    "name": "孤狼战场-24",
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
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "2,1": [
            {
                "type": "if",
                "condition": "flag:autoGetItem",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.loadEquip(\"sword3\");\n}"
                    },
                    "\t[系统提示]已自动穿上刚拾取的装备。"
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [142,142,142,142,142,142,142,142,142,142,142,142,142],
    [142, 34, 39, 34, 82,  0,334,  0,355, 32,  0, 32,142],
    [142,375, 31,226,142, 21,  0, 21,142,369, 27,  0,142],
    [142,142, 81,142,142,142, 81,142,142,142,142,380,142],
    [142,  0, 27,  0,379,  0, 32,354,  0,379, 21, 29,142],
    [142, 31,  0, 31,142, 27,  0,142, 32,142, 28, 32,142],
    [142,142, 81,142,142,142,354,142,142,142, 81,142,142],
    [142,  0, 28,  0, 31, 81, 31,142, 28,376, 34,232,142],
    [142,226,142,142,  0,142,  0,142,  0,334,  0, 21,142],
    [142, 21,  0,142,379,142,379,142,354,226, 27,  0,142],
    [142,142,225,142,  0, 28,  0,142, 82,142,142,142,142],
    [142, 88,  0, 81, 31,142, 31,375,334,  0, 32, 87,142],
    [142,142,142,142,142,142,142,142,142,142,142,142,142]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "area5.mp3",
    "hard1_enemy_ratio": 75,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}