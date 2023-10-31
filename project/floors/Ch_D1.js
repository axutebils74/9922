main.floors.Ch_D1=
{
    "floorId": "Ch_D1",
    "title": "试炼1",
    "name": "试炼1",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 5,
    "defaultGround": "grass",
    "bgm": "dungeon1.mp3",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:mana_item",
            "value": "100"
        },
        {
            "type": "setValue",
            "name": "flag:mdef_ratio",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "status:hp",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "status:atk",
            "value": "80"
        },
        {
            "type": "setValue",
            "name": "status:def",
            "value": "50"
        },
        {
            "type": "setValue",
            "name": "status:mdef",
            "value": "0"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "afterBattle": {
        "6,0": [
            "\t[系统提示]检测到当前剩余\r[yellow]${status:hp}\r生命。\n已转化为等量分数。",
            {
                "type": "setValue",
                "name": "item:DScore",
                "value": "status:hp"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.resetHeroStatus();\n}"
            },
            {
                "type": "playSound",
                "name": "mteleport.wav"
            },
            {
                "type": "changeFloor",
                "floorId": "Ch_D2",
                "loc": [
                    6,
                    12
                ],
                "direction": "up",
                "time": 1000
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [ 27,  0,149,149,149,149,504,149,149,149,149,149, 32],
    [  0,497, 29,  0,334,149,149,149, 28,  0, 31,149, 27],
    [ 32,  0,149,  0,500, 81, 81, 81,  0,497, 81, 32,502],
    [149,149,149, 31,149, 31,149, 31,149, 31,  0,498, 28],
    [ 28,149,149,503,149,149,149,149,149,  0,  0,  0, 82],
    [ 47,502,  0, 32,501,498,  0, 21,149, 28,502,501, 27],
    [ 27,149,502,  0, 27, 81,497,500, 28,149,  0,149, 47],
    [ 82,149,  0,149,149,149,  0,149, 32,149,  0,149, 81],
    [ 21, 27,497, 28,149,334,  0,149,149,  0,334,500, 31],
    [149,149,  0,498,  0,  0,496,  0,  0,498,  0,149, 28],
    [ 28,501,  0,149,149, 33,149,334,149,  0,149,149,149],
    [ 31,149,503, 27,149,  0, 47,  0,149,501, 29,503, 27],
    [ 29,149, 32,  0, 81, 21,  0, 22, 81, 21,  0,149, 32]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}