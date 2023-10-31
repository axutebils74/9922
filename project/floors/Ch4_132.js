main.floors.Ch4_132=
{
    "floorId": "Ch4_132",
    "title": "玉梅天-1",
    "name": "玉梅天-1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "area22.png",
            "canvas": "bg",
            "x": 0,
            "y": 0,
            "w": 416,
            "h": 416
        }
    ],
    "ratio": 50,
    "defaultGround": "ground8",
    "bgm": "Phoebus.mp3",
    "weather": null,
    "firstArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.setFlag(\"__visited__\", { Ch4_132: true });\ncore.values.animateSpeed = 330;\n}"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,312,312,312,  0,  0,  0,312,312,312,  0,  0],
    [  0,  0,  0,  0,312,  0,  0,  0,  0,  0,312,  0,  0],
    [  0,  0,312,312,312,  0,  0,  0,312,312,312,  0,  0],
    [  0,  0,312,  0,  0,  0,  0,  0,312,  0,  0,  0,  0],
    [  0,  0,312,312,312,  0,  0,  0,312,312,312,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,312,312,312,  0,  0,  0,  0,312,  0,  0,  0],
    [  0,  0,  0,  0,312,  0,  0,  0,312,312,  0,  0,  0],
    [  0,  0,312,312,312,  0,  0,  0,  0,312,  0,  0,  0],
    [  0,  0,312,  0,  0,  0,  0,  0,  0,312,  0,  0,  0],
    [  0,  0,312,312,312,  0,  0,  0,312,312,312,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "hard1_enemy_ratio": 95,
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}