main.floors.Ch4_31=
{
    "floorId": "Ch4_31",
    "title": "凌天大殿-1",
    "name": "凌天大殿-1",
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
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:snipe_animate",
            "value": "\"zone2\""
        },
        {
            "type": "function",
            "function": "function(){\ncore.values.animateSpeed = 420;\n\ncore.setFlag(\"__visited__\", { Ch4_31: true });\n}"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[hero]\b[down,null]这些大机器人，是除灵者！",
        "\t[晴芸,hero3]\b[down,null]高级除灵者出现在格沃堡上层区域……\n“幽”果然已经完全掌控了除灵者势力。",
        "\t[？？？]\b[up,null]欢迎来到格沃堡上层区域。\n你们已经被至尊大人选中，共同参与未来的书写，\n闯过面前的阻碍，便能寻得真相。",
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]\b[down,null]……懂了，一路打过去就可以了。\n哦不对，应该喊，冲呀——"
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\nvar rotateTime = core.getFlag('rotateTime', 0);\nvar image = core.material.images.images['area16.jpg'];\nvar width = 416,\n\theight = 416;\ncore.canvas.bg.translate(width / 2, height / 2);\ncore.canvas.bg.rotate(rotateTime * Math.PI / 180 / 6);\ncore.canvas.bg.translate(-width / 2, -height / 2);\ncore.canvas.bg.drawImage(image, -296, -88);\n}"
        }
    ],
    "parallelDo": "var lastTime = core.getFlag('lastTime', 0);\n\nif (timestamp - lastTime > 60) {\n\tvar image = core.material.images.images['area16.jpg'];\n\tvar width = 416,\n\t\theight = 416;\n\n\tcore.canvas.bg.translate(width / 2, height / 2);\n\tcore.canvas.bg.rotate(Math.PI / 180 / 6);\n\tcore.canvas.bg.translate(-width / 2, -height / 2);\n\tcore.canvas.bg.drawImage(image, -296, -88);\n\n\tcore.setFlag('lastTime', timestamp);\n\n\tvar rotateTime = core.getFlag('rotateTime', 0);\n\trotateTime += 1;\n\tif (rotateTime >= 6 * 180) {\n\t\trotateTime -= 6 * 180;\n\t}\n\tcore.setFlag('rotateTime', rotateTime);\n}",
    "events": {
        "6,10": [
            "\t[系统提示]关于游猎：\n可见范围可被门或者墙阻挡，不会被物品或其他敌人阻挡。\n\n移动方向的优先级由 core.utils.scan 决定，依次是\r[yellow]上左下右\r。\n例如，当你位于游猎怪的右下角时，怪物往下走或往右走都可以射你，那么根据上述优先级，它会往下走。"
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "Ch4_32",
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
    [  4,656, 21,657, 84,652,  0,653, 84,656, 21,657,  4],
    [  4,333,  0,333,  4, 82,  4, 82,  4,333,  0,333,  4],
    [  4,657,658,656,  4, 82,  4, 82,  4,657,658,656,  4],
    [  4,  4,560,  4,  4,  0,699,  0,  4,  4,560,  4,  4],
    [  4,657,  0, 22,  4,  0, 30,  0,  4,334,  0,656,  4],
    [  4,  0,332,563, 81,333,  0,333, 81,563,332,  0,  4],
    [  4,656,  0,334,  4,  4,  4,  4,  4, 22,  0,657,  4],
    [  4,  4,561,  4,  4,  4, 82,  4,  4,  4,561,  4,  4],
    [  4,652,654,653,  4,  0,699,  0,  4,652,654,653,  4],
    [  4,332,  0,332,  4,334,129,334,  4,332,  0,332,  4],
    [  4,653,334,652,  4,  0,  0,  0,  4,653,334,652,  4],
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "downFloor": [
        6,
        11
    ],
    "upFloor": [
        6,
        0
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}