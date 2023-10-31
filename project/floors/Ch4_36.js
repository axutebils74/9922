main.floors.Ch4_36=
{
    "floorId": "Ch4_36",
    "title": "凌天大殿-6",
    "name": "凌天大殿-6",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area16.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0,
            "sx": 296,
            "sy": 88,
            "w": 416,
            "h": 416
        }
    ],
    "ratio": 50,
    "defaultGround": "ground8",
    "bgm": "area16.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\nvar rotateTime = core.getFlag('rotateTime', 0);\nvar image = core.material.images.images['area16.jpg'];\nvar width = 416,\n\theight = 416;\ncore.canvas.bg.translate(width / 2, height / 2);\ncore.canvas.bg.rotate(rotateTime * Math.PI / 180 / 6);\ncore.canvas.bg.translate(-width / 2, -height / 2);\ncore.canvas.bg.drawImage(image, -296, -88);\n}"
        }
    ],
    "parallelDo": "var lastTime = core.getFlag('lastTime', 0);\n\nif (timestamp - lastTime > 60) {\n\tvar image = core.material.images.images['area16.jpg'];\n\tvar width = 416,\n\t\theight = 416;\n\n\tcore.canvas.bg.translate(width / 2, height / 2);\n\tcore.canvas.bg.rotate(Math.PI / 180 / 6);\n\tcore.canvas.bg.translate(-width / 2, -height / 2);\n\tcore.canvas.bg.drawImage(image, -296, -88);\n\n\tcore.setFlag('lastTime', timestamp);\n\n\tvar rotateTime = core.getFlag('rotateTime', 0);\n\trotateTime += 1;\n\tif (rotateTime >= 6 * 180) {\n\t\trotateTime -= 6 * 180;\n\t}\n\tcore.setFlag('rotateTime', rotateTime);\n}",
    "events": {},
    "changeFloor": {
        "12,6": {
            "floorId": "Ch4_35",
            "loc": [
                0,
                6
            ]
        },
        "6,0": {
            "floorId": "Ch4_37",
            "loc": [
                6,
                12
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,656,658,566,698,  4,334, 82, 81, 82,  4,334,  4],
    [  4,334,561, 22, 30,  4,652,  4,  4,334,  4,566,  4],
    [  4,  4, 81,  4,  4,  4,560,  4,652, 30,  4,334,  4],
    [  4,  0,  0, 81,334,  4,  0,  4,  4,708,  4, 82,  4],
    [  4,332,  0,333,  4,  4, 53,  0, 81, 21,  0,334,  4],
    [  4,  0,700,  0, 81, 22,  0, 21,  4,  0,700,  0,  0],
    [  4,333,  0,332,  4,  0,  4,  4,  4,  4,  0, 21,  4],
    [  4,  4,707,  4,  4,707,  4,588,333,  4,  4,709,  4],
    [  4,332,  0, 21,  4,  0,  4, 82,653,705,654,  0,  4],
    [  4,  0,334,  0, 81,  0, 81,  0,  0,  4,  0,  0,  4],
    [  4, 22,  0,652,  4,333,  0,334,563,652,561,333,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0, 91,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 94],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "upFloor": [
        6,
        0
    ],
    "downFloor": [
        12,
        6
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}