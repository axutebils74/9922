main.floors.MT8=
{
    "floorId": "MT8",
    "title": "主塔 8 层",
    "name": "主塔-8",
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
            "function": "function(){\ncore.plugin.setBgLight([\n\t[4, 8, 150],\n\t[5, 2, 150],\n\t[7, 10, 150]\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,1": {
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
    [  1, 88,  0, 31, 82, 82, 87,  0,  1, 27, 22,  0,  1],
    [  1,  0, 21,  0,  1,  1,  0,  0,  1,  0,  0,206,  1],
    [  1,  1,  1, 81,  1,  1, 81, 82,  1,  1,  1, 81,  1],
    [  1,  0,  0,168,219,  0,  0,  1, 28, 21, 21,  0,  1],
    [  1, 81,  1,  1, 27,  1, 81,  1, 31,  0,210,  0,  1],
    [  1,217, 21,  1, 28,  1,  0,  1,  1,  1, 81,  1,  1],
    [  1, 21,205,  1, 32,  1,202,  1,  0, 28,  0, 31,  1],
    [  1,  1, 81,  1,  1,  1,  0, 81,206,  1,  1, 81,  1],
    [  1,217,  0,  0,  0, 31,  0,  1,  0,  1,  0,210,  1],
    [  1, 21,  1,  1,201,  1,219,  1,  1,  1, 21,  0,  1],
    [  1,  0, 21,  1, 31, 29, 21, 27, 31,  1, 27, 21,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgm": "area1.mp3",
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,103,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,103,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,103,  0,  0,  0,  0,  0],
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