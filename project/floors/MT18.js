main.floors.MT18=
{
    "floorId": "MT18",
    "title": "主塔 18 层",
    "name": "主塔-18",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "area2.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,8": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "6,4": [
            {
                "type": "if",
                "condition": "flag:autoGetItem",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.loadEquip(\"shield2\");\n}"
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
    [151,151,151,151,151,151,151,151,151,151,151,151,151],
    [151,151, 20,231, 20,  0, 87,  0, 20,  0,322,151,151],
    [151, 31, 20,  0, 81,230,323,207, 81, 31,  0,240,151],
    [151,  0,234,323,  0, 20, 20, 20,334, 20,233, 81,151],
    [151,322, 20, 81, 20, 20, 38, 20, 20, 20,  0,  0,151],
    [151,  0,207, 32, 82,231,234,231, 20, 20, 20, 31,151],
    [151,229, 20, 20, 20, 20,234, 20, 20,  0, 81,  0,151],
    [151,  0, 31,  0, 20, 31,  0,334, 20,323, 20,233,151],
    [151, 81, 20,230, 20,  0, 88,  0, 20,  0, 20, 31,151],
    [151, 31, 20, 21, 20,334,  0, 31, 20,207, 20,  0,151],
    [151,323,233,  0, 20, 20, 81, 20, 20,  0,233,322,151],
    [151,151,  0, 31,207, 32,233, 68,230,334,  0,151,151],
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