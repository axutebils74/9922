main.floors.MT54=
{
    "floorId": "MT54",
    "title": "主塔 54 层",
    "name": "辉煌圣殿-54",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area6.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 10,
    "defaultGround": "ground3",
    "bgm": "area6.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,1": {
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
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143, 21, 81,331,  0,220,  0,245, 22,245,  0, 88,143],
    [143,  0,143,143,143,143, 53,143,143,143,143,143,143],
    [143,330,214,  0,323, 81,  0, 81,331,143,322,280,143],
    [143,  0,143,331,280,143,242,143,  0,214,330,  0,143],
    [143,220,143,143,143,143,  0,143,143,143,143,366,143],
    [143,322,331,  0,243,  0,331,  0,243,  0,331,323,143],
    [143,143,143,143,143,143, 82,143,143,143,143,143,143],
    [143,  0,331,  0,242, 82,280, 82,242,  0,331,  0,143],
    [143,242,143,143, 81,143, 68,143, 81,143,143,242,143],
    [143,322,143,323,243,143,330,143,243,322,143,323,143],
    [143,331,143,331, 22,143, 87,143, 22,331,143,331,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143]
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