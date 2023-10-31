main.floors.Ch4_35=
{
    "floorId": "Ch4_35",
    "title": "凌天大殿-5",
    "name": "凌天大殿-5",
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
    "events": {
        "5,11": [
            "\t[系统提示]\r[yellow]闭门\r可以秒杀精英阶位的敌人，也就是本区除了小boss之外的所有敌人。并且你可以获得被门夹死的敌人身上的金币。\n它也可以摧毁物品或非绿色的门。不能摧毁墙体。"
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "Ch4_34",
            "loc": [
                6,
                0
            ]
        },
        "0,6": {
            "floorId": "Ch4_36",
            "loc": [
                12,
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
    [  4,654,  0,708, 81,  0,  4, 82, 81,567, 22,566,  4],
    [  4,332,333,  4,  4,332,  4, 81,  4,656, 21,657,  4],
    [  4,  4,  4,  4, 30,  0, 81,  0,  4,  4,563,  4,  4],
    [  4,332,653,709,  0,334,  4,334,  4,334,  0,332,  4],
    [  4,  4,  4,588, 82,  0,700,  0, 81,707,652,  0,  4],
    [  0,709,  4,  4,  0,333,  4,332,  4,332,  0, 21,  4],
    [  4,  0, 81,  4,  4,  4,  4,707,  4,  4,  4,  4,  4],
    [  4,700,  0, 21,  0,698,  0,  0, 82,334,566,334,  4],
    [  4,  4,  4,  4,  4,  4, 22,  4,  4,  4,  4,  4,  4],
    [  4, 22, 21, 84,566, 84,  0, 84,566, 84, 21, 22,  4],
    [  4, 21, 22,  4,568,129,  0,  4,568,  4, 22, 21,  4],
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
    [ 92,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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
        0,
        6
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}