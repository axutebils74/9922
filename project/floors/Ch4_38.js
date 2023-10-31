main.floors.Ch4_38=
{
    "floorId": "Ch4_38",
    "title": "凌天大殿-8",
    "name": "凌天大殿-8",
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
            "type": "sleep",
            "time": 500
        },
        "\t[烈焰战车,E711]\b[down,6,6]天火一击的威能，你承受不起！",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[hero]\b[down,null]这是从哪里穿越过来的中二台词……",
        "\t[晴芸,hero3]\b[down,null]这家伙造成的伤害很难抵抗，尽早把它收拾了吧。"
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\nvar rotateTime = core.getFlag('rotateTime', 0);\nvar image = core.material.images.images['area16.jpg'];\nvar width = 416,\n\theight = 416;\ncore.canvas.bg.translate(width / 2, height / 2);\ncore.canvas.bg.rotate(rotateTime * Math.PI / 180 / 6);\ncore.canvas.bg.translate(-width / 2, -height / 2);\ncore.canvas.bg.drawImage(image, -296, -88);\n}"
        }
    ],
    "parallelDo": "var lastTime = core.getFlag('lastTime', 0);\n\nif (timestamp - lastTime > 60) {\n\tvar image = core.material.images.images['area16.jpg'];\n\tvar width = 416,\n\t\theight = 416;\n\n\tcore.canvas.bg.translate(width / 2, height / 2);\n\tcore.canvas.bg.rotate(Math.PI / 180 / 6);\n\tcore.canvas.bg.translate(-width / 2, -height / 2);\n\tcore.canvas.bg.drawImage(image, -296, -88);\n\n\tcore.setFlag('lastTime', timestamp);\n\n\tvar rotateTime = core.getFlag('rotateTime', 0);\n\trotateTime += 1;\n\tif (rotateTime >= 6 * 180) {\n\t\trotateTime -= 6 * 180;\n\t}\n\tcore.setFlag('rotateTime', rotateTime);\n}",
    "events": {},
    "changeFloor": {
        "6,0": {
            "floorId": "Ch4_39",
            "loc": [
                5,
                12
            ]
        },
        "6,12": {
            "floorId": "Ch4_37",
            "loc": [
                6,
                0
            ]
        }
    },
    "afterBattle": {
        "6,6": [
            {
                "type": "if",
                "condition": "flag:last_battle_enemyId != \"E711\"",
                "true": [
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    5,
                    2
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    2
                ]
            },
            "\t[hero]\b[down,hero]……还行，我还能顶住。",
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "insert",
                "name": "zzzl3"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,660,566,660,334,  4,333,  4,334,661,566,661,  4],
    [  4, 22,661, 21, 53, 85,662, 85, 53, 21,660, 22,  4],
    [  4,  4,  4,  4,  4,  4, 85,  4,  4,  4,  4,  4,  4],
    [  4,333,330,  4,  0,  0,654,  0,  0,  4,330,333,  4],
    [  4, 81,  4,  4,  0,  0,  0,  0,  0,  4,  4, 81,  4],
    [  4,332, 81,  4,652,  0,711,  0,653,  4, 81,332,  4],
    [  4,  4,333,  4,  0,  0,  0,  0,  0,  4,333,  4,  4],
    [  4,334, 81,  4,  0,  0, 21,  0,  0,  4, 81,334,  4],
    [  4, 81,  4,  4,  4,  4, 82,  4,  4,  4,  4, 81,  4],
    [  4,  0,333,700,  0, 81,  0, 81,  0,700,333,  0,  4],
    [  4,333,  0,  4,334,707,  0,707,334,  4,  0,333,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4]
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
    [  0,  0,  0,  0,  0,  0, 93,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "upFloor": [
        6,
        0
    ],
    "downFloor": [
        6,
        12
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}