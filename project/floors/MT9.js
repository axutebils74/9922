main.floors.MT9=
{
    "floorId": "MT9",
    "title": "主塔 9 层",
    "name": "主塔-9",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:arrived_9F",
            "value": "1"
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.setBgLight([\n\t[6, 3, 150],\n\t[4, 5, 150],\n\t[8, 5, 150]\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,1": {
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,205,  0,  0, 88,  0,  0,205,  0,  0,  1],
    [  1, 81,  1,  1,  1, 31,  0, 31,  1,  1,  1,217,  1],
    [  1, 31,  1, 21,  1,  1,  1,  1,  1, 31,  1,  0,  1],
    [  1,  0,  1,  0,  1, 28, 29, 28,  1, 31, 81, 21,  1],
    [  1, 21,206, 31,  1, 27,201, 27,  1, 31,  1,  0,  1],
    [  1,  1,  1, 81,  1,  1, 81,  1,  1,  1,  1, 27,  1],
    [  1, 31,  0,203,  0, 81,  0,  0,  0,  0, 81,  0,  1],
    [  1,  0, 21,  0,  0,  1,219,  1,  0, 21,  1,209,  1],
    [  1,  1,  1,  1,209,  1,  0, 81,203,  1,  1,  0,  1],
    [  1, 23,  0,  1, 21,  1,  0,  1,  0,221,  0,  0,  1],
    [  1,  0,221, 82,  0,  1, 87, 82, 31,  1,  0, 21,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgm": "area1.mp3",
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,103,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,103,  0,  0,  0,103,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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