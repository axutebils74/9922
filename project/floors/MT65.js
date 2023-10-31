main.floors.MT65=
{
    "floorId": "MT65",
    "title": "主塔 65 层",
    "name": "未来走廊-65",
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
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
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
        "6,3": [
            {
                "type": "if",
                "condition": "flag:autoGetItem",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.loadEquip(\"shield4\");\n}"
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
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144,349,348,333,144,  0, 87,  0,144,333,457,349,144],
    [144,144, 81,144,144,333,  0,333,144,144, 81,144,144],
    [144,332, 21,144,326,  0, 42,  0,326,144, 21,332,144],
    [144,457,325,144,  0,333,  0,333,  0,144,324,348,144],
    [144, 82,144,144,144,455,457,455,144,144,144, 82,144],
    [144, 22,331,334,144,144, 82,144,144,334,331, 22,144],
    [144,144,144,455,456, 81,  0, 81,456,455,144,144,144],
    [144,331,144,144,144,144,345,144,144,144,144,331,144],
    [144,324,144,325,144, 21,  0, 21,144,  0,458,324,144],
    [144,458,144,457,144,  0,334,  0,144,331,144,144,144],
    [144,  0,331,  0,519, 21, 88, 21,519,  0,457,325,144],
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