main.floors.MT26=
{
    "floorId": "MT26",
    "title": "主塔 26 层",
    "name": "孤狼战场-26",
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
    "events": {
        "10,5": [
            {
                "type": "changePos",
                "direction": "up"
            },
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": "hero"
            },
            "\t[hero]（地上的这个花形图案……好像在哪见过。）",
            "\t[芳芷,hero2]为了不让这些斗士乱追么……有趣。",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[黄金斗士,E376]吾等镇守在此，尔等休想前进一步！",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "9,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "3,5": [
            {
                "type": "if",
                "condition": "flag:autoGetItem",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.loadEquip(\"shield3\");\n}"
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
    [142, 32,  0, 32, 81,  0,354,  0,142, 87,331,334,142],
    [142,  0, 21,376,142, 32,142, 29,142,227, 82,227,142],
    [142, 28,  0, 27, 82,  0,142,  0,142,369,376,369,142],
    [142,369,142,142,142, 28,142, 32,142,142,168,142,142],
    [142,  0,142, 40,142,  0, 81,  0,380, 32,  0, 27,142],
    [142, 32,  0,376,142,225,142,142,142,142,142,142,142],
    [142,142, 81,142,142, 32,369, 22,142, 32, 27, 32,142],
    [142,  0, 27,  0,226,  0, 27,  0,142,376, 22,376,142],
    [142,225,142,142,142,142,354,142,142,142, 81,142,142],
    [142,  0, 21, 31,142, 21,  0, 21,142,375,226, 21,142],
    [142, 88,  0, 21,225,  0, 28,  0, 81, 31, 27, 32,142],
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