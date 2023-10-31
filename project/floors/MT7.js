main.floors.MT7=
{
    "floorId": "MT7",
    "title": "主塔 7 层",
    "name": "主塔-7",
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
            "function": "function(){\ncore.plugin.setBgLight([\n\t[2, 9, 150],\n\t[3, 2, 150],\n\t[8, 6, 150]\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "3,5": [
            {
                "type": "playSound",
                "name": "hint.mp3"
            },
            "\t[复读机]\b[down,null]看到巫师\\i[brownWizard]身后的花型图案\\i[flower]了吗，它会阻止巫师后退。\n花形图案没有其他效果，你可以随便踩。",
            {
                "type": "hide"
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0,  1,  0,205, 21, 31,  1, 31,  0, 27,  1],
    [  1, 31,  0,  1, 28,  1,  1,  1,  1,  1,  1,209,  1],
    [  1,  0,168,  1,206,  1,  0,221,  0, 81,203, 21,  1],
    [  1, 81,219,  1, 81,  1, 21,  1, 31,  1,  1,  0,  1],
    [  1,  0,  0,  0,  0,205,  0,  1,  0,  0,  1, 31,  1],
    [  1,  1,  1,205,  1,  1,  1,  1,  1,209,  1,  1,  1],
    [  1, 32, 81,  0, 81,217, 29,  1, 21,  0, 81,  0,  1],
    [  1, 31,  1,  0,  1, 21,209, 81,  0, 31,  1,  0,  1],
    [  1,  1,  1,205,  1,  1,  1,  1,  1,  1,  1,205,  1],
    [  1, 31,  1, 21,  0, 81,205, 21,  1,  0, 21,  0,  1],
    [  1, 32, 81,  0, 31,  1, 21,209, 81, 21,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgm": "area1.mp3",
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,103,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,103,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,103,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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