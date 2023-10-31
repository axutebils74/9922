main.floors.Ch4_32=
{
    "floorId": "Ch4_32",
    "title": "凌天大殿-2",
    "name": "凌天大殿-2",
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
        "6,12": {
            "floorId": "Ch4_31",
            "loc": [
                6,
                0
            ]
        },
        "12,6": {
            "floorId": "Ch4_33",
            "loc": [
                0,
                6
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,330,  4,334, 81,334,  4,  0,699,  4,566,568,  4],
    [  4,334, 81,330,  4,566,  4,  0,331,  4, 84,  4,  4],
    [  4,  4,  4,  4,  4,334,  4, 21,  0, 84,566,568,  4],
    [  4,334, 81,330,  4, 82,  4,  0,332,  4,  4,  4,  4],
    [  4,330,  4,334, 81,333,  4, 81,  0, 82, 81, 82,  4],
    [  4,  4,  4,  4,  4,333,  4,  0,334,  0,561,652,  0],
    [  4,330,  4,331, 81,333,  4, 22,  0, 84,588,654,  4],
    [  4,333, 81,332,  4, 82,  0,  0,331,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,707,  4,  4,  4,567,566,  4],
    [  4, 22, 21, 84,566, 84,  0, 81,332,  4, 84,567,  4],
    [  4, 21, 22,  4,568,  4,  0,  4, 81,330,334,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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
    [  0,  0,  0,  0,  0,  0, 93,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "downFloor": [
        6,
        12
    ],
    "upFloor": [
        12,
        6
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}