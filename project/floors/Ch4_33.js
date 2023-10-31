main.floors.Ch4_33=
{
    "floorId": "Ch4_33",
    "title": "凌天大殿-3",
    "name": "凌天大殿-3",
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
        "3,1": [
            {
                "type": "if",
                "condition": "(!switch:A)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:Ch4_quickshop",
                        "value": "1"
                    },
                    "\t[系统提示]开启快捷商店，快捷键V，代替打开天赋树的功能。\n你仍然可以在物品栏里打开天赋树。",
                    {
                        "type": "setValue",
                        "name": "item:I_Chap4Shop4",
                        "value": "1"
                    },
                    "\t[系统提示]在本区最终boss战后计分的时候，1黄钥匙可以换500万生命，1蓝=3黄保持不变。\n点出最终天赋之后\\i[goldCoin]金钱和\\i[yellowGem]黄宝石就没有用处了。"
                ]
            },
            {
                "type": "openShop",
                "id": "Chap4Shop4",
                "open": true
            }
        ]
    },
    "changeFloor": {
        "0,6": {
            "floorId": "Ch4_32",
            "loc": [
                12,
                6
            ]
        },
        "5,0": {
            "floorId": "Ch4_34",
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
    [  4,699,  7,131,  8,332,  4,653, 22,  4,652,332,  4],
    [  4, 81,  0,  0,332,  0,  4,707,332,  4, 22,712,  4],
    [  4,  0, 82,  4, 82,  4,  4, 81,  4,  4,  4, 81,  4],
    [  4, 21,  4,  4,712,  0,  4,  0, 21,  4,333,333,  4],
    [  4,  0,  4,588,  0,334,709,  0,  0,  4,708,  0,  4],
    [  0,334,  4,  0,332,  0,  4,  4, 81,  4, 81,  4,  4],
    [  4,  0,  4, 21,  0,  0,707,  0,334,  0, 30,  0,  4],
    [  4, 82,  4,  4, 82,  4,  4,652,  0,333,  0,699,  4],
    [  4,652,  4,652,334,653,  4,  4, 82,  4,709,  4,  4],
    [  4,332,563,333,  4,  0, 81,588, 81,  4,653,  0,  4],
    [  4,653,  4, 21,  0,332,  4,  0,652,  4,  0,332,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
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
    [ 92,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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
        5,
        0
    ],
    "downFloor": [
        0,
        6
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}