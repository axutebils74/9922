main.floors.Ch4_39=
{
    "floorId": "Ch4_39",
    "title": "凌天大殿-9",
    "name": "凌天大殿-9",
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
        "7,0": {
            "floorId": "Ch4_3A",
            "loc": [
                7,
                12
            ]
        },
        "5,12": {
            "floorId": "Ch4_38",
            "loc": [
                6,
                0
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4],
    [  4,568,  4,332,652,714,  0,  0,  0,715,653,332,  4],
    [  4,333,  4,  4,  4,  4,  0,705,  0,  4,  4,  4,  4],
    [  4,332,  4,333,334,654,588,  0,717,652,334,333,  4],
    [  4, 84,  4,  4,  4,  4,  4, 81,  4,  4,  4,  4,  4],
    [  4,332,  0,334,708,  0,  0,  0, 82,567, 82,567,  4],
    [  4,588,  4,  4,  4,332,  4,  4,  4,  4,  4,  4,  4],
    [  4,653, 30,700, 81,  0,  4,653,333,334,332,652,  4],
    [  4,  4,716,  4,  4,715,  4,  4, 82,  4,  4,563,  4],
    [  4, 22,  0,  0,  0,  0, 81,  0,  0,560, 21,  0,  4],
    [  4,  4,716,  4,  4,  0,  4,  4, 82,  4,  4,563,  4],
    [  4,652,  0, 21,  4,  0,  4,652,332,334,333,653,  4],
    [  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0, 91,  0,  0,  0,  0,  0],
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
    [  0,  0,  0,  0,  0, 93,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "upFloor": [
        7,
        0
    ],
    "downFloor": [
        5,
        12
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}