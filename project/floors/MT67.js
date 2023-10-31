main.floors.MT67=
{
    "floorId": "MT67",
    "title": "主塔 67 层",
    "name": "未来走廊-67",
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
            "type": "setValue",
            "name": "flag:arrived_67F",
            "value": "1"
        },
        {
            "type": "if",
            "condition": "flag:saltfish_67 == 1",
            "true": [
                {
                    "type": "sleep",
                    "time": 500
                },
                {
                    "type": "animate",
                    "name": "E_love",
                    "loc": "hero"
                },
                "\t[hero]绕上来了……\n接下来可以利用\r[yellow]楼层传送器\r绕开强敌了。"
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,7": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,3": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "12,7": {
            "floorId": "MT6X",
            "loc": [
                0,
                18
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
    [144,324,349,144,325,334,331,144,324,331,144,332,144],
    [144,332,462,144,  0,144,144,144,451,462,144,  0,144],
    [144,457,144,144,451,144, 87,144, 81,144,144,325,144],
    [144,  0,459, 81,  0,144,452,144,  0, 81,348,  0,144],
    [144,331, 21,144,  0, 21,  0, 81,  0,144, 21,332,144],
    [144,144,144,144,331,144,144,144,326,144,144,144,144],
    [144, 88,  0,  0,  0,144,331,  0,  0,451,331,  0, 94],
    [144,144, 81,144,457,144,144,519,144,144,144,144,144],
    [144,  0,519,144,  0,  0,331,  0, 81,325,144,333,144],
    [144,334,324,144,331,144,144,144,144,331,144,324,144],
    [144,331, 21,144,  0,451, 21,  0,455,  0, 81,452,144],
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