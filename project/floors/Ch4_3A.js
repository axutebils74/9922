main.floors.Ch4_3A=
{
    "floorId": "Ch4_3A",
    "title": "凌天大殿-10",
    "name": "凌天大殿-10",
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
        "7,12": {
            "floorId": "Ch4_39",
            "loc": [
                7,
                0
            ]
        },
        "5,0": {
            "floorId": "Ch4_3B",
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
    [  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4,  4],
    [  4,652,  0,  4,332,653,  4,  4,698, 81,588,  4,  4],
    [  4,332,714,  0,717,  0,  4,652,  0,  4,  0,653,  4],
    [  4,  4,  0, 21,  0,  4,  4,  0,334,  4,334,  0,  4],
    [  4,  0,332,  0,334,  0,  4,332,716,654,716,332,  4],
    [  4, 81,  4,  4,  4, 81,  4,  4,  4, 82,  4,  4,  4],
    [  4,333,  4,  0,333,  0, 22,  0,  0,699,  0,  4,  4],
    [  4,  4,  4, 81,  4,  4,  4,334, 30,  0,331,  0,  4],
    [  4,657,715,  0,  4,656,  4,715, 81,  4,  4, 81,  4],
    [  4,333,  4,  0,705,332,  4,  0,  0,  4,330,334,  4],
    [  4,  4,  4,698,  4,334,  4,332,  4,  4,  4, 81,  4],
    [  4,333, 81,  0,  4,588, 82,  0,  4,333, 81,333,  4],
    [  4,  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0, 91,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0, 93,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "downFloor": [
        7,
        12
    ],
    "upFloor": [
        5,
        0
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}