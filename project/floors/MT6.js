main.floors.MT6=
{
    "floorId": "MT6",
    "title": "主塔 6 层",
    "name": "主塔-6",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.setBgLight([\n\t[10, 6, 150],\n\t[4, 5, 150],\n\t[5, 9, 150]\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "8,5": [
            {
                "type": "playSound",
                "name": "hint.mp3"
            },
            "\t[复读机]\b[up,null]\r[yellow]初级巫师\r\\i[brownWizard]对现在的你是不可战胜的，不过你只要靠近，它就会尝试后退。\n\r[yellow]试着好好利用这个特性吧。\r",
            {
                "type": "hide"
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,11": {
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  1, 22, 27, 31,  1,  0,209, 21,  1, 31,  1],
    [  1,  0,  1,  0,206,  0,  1, 31,  1,  0,  1,  0,  1],
    [  1,217,  1,  1, 81,  1,  1, 81,  1, 31,203, 28,  1],
    [  1,  0,  0, 31,  0,  0,202,  0,  1,  1,  1,  1,  1],
    [  1,  1, 81,  1,  1,  1,  0, 21,  0,205, 21,  0,  1],
    [  1, 21,209, 21, 31,  1,  1,  1,205,  1,  1, 81,  1],
    [  1,  1,  1, 81,  1,  1, 32,  1,  0, 31,  0, 31,  1],
    [  1, 31, 31, 31, 82, 32, 34,  1, 81,  1, 82,219,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,209,  1, 81,  0,  1],
    [  1, 27,  0,  1,  0,203, 81, 21,  0,  1,  0,  0,  1],
    [  1,  0, 22,210, 31,  0,  1,  0, 21,  1, 28, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgm": "area1.mp3",
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,103,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,103,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,103,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "color": [
        0,
        0,
        0,
        0.5
    ],
    "hard1_enemy_ratio": 90,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}