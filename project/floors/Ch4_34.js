main.floors.Ch4_34=
{
    "floorId": "Ch4_34",
    "title": "凌天大殿-4",
    "name": "凌天大殿-4",
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
        "\t[天启战儡,E706]\b[down,6,6]你们就是被至尊大人选中的人吗？\n看上去弱不禁风的，跟我刚正面就是自寻死路。",
        "\t[天启战儡,E706]\b[down,6,6]你们最好还是绕开我，先到后面的区域欺负那些弱者吧！\n早就听说你们擅长一些花里胡哨的躲来躲去的技巧，我倒要见识一下你们怎么处理两边这一串门，哈哈哈哈！",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[晴芸,hero3]\b[down,null]嗯……我记得之前的牌子上写的，游猎的移动方向优先级是\r[yellow]上左下右\r，\n也就是说，周围都是空地的情况下，它是不会往右走的……"
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
        "6,12": {
            "floorId": "Ch4_33",
            "loc": [
                5,
                0
            ]
        },
        "6,0": {
            "floorId": "Ch4_35",
            "loc": [
                6,
                12
            ]
        }
    },
    "afterBattle": {
        "6,6": [
            {
                "type": "if",
                "condition": "flag:last_battle_enemyId != \"E706\"",
                "true": [
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "setBlock",
                "number": "E706",
                "loc": [
                    [
                        6,
                        6
                    ]
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
                    8,
                    1
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    11,
                    4
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    10,
                    8
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    2,
                    8
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    1,
                    4
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    1
                ]
            },
            "\t[天启战儡,E706]\b[down,6,6]……\n你们，竟然，这么强……",
            "\t[天启战儡,E706]\b[down,6,6]不过，在战场上，再强的个体，也比不过众志成城的集体。\n你们可要好好活下去啊。",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "remove": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[hero]\b[down,null]完全没明白它为什么要对我们说这些。\n这算什么，给我们立flag吗？",
            "\t[晴芸,hero3]\b[down,null]……",
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
    [  4,333,331,334, 85,660, 82,661, 85,334,331,333,  4],
    [  4, 21,658, 82, 82, 82,333, 82, 82, 82,658, 21,  4],
    [  4,657, 82,  4,  4,  4, 85,  4,  4,  4, 82,656,  4],
    [  4, 85, 81,  4,712,  0,  0,  0,561,  4, 81, 85,  4],
    [  4,332, 82,  4,  0,  0,  0,  0,  0,  4, 82,332,  4],
    [  4,656,657,  4,  0,  0,706,  0,  0,  4,657,656,  4],
    [  4, 82, 21,  4,  0,  0,  0,  0,  0,  4, 21, 82,  4],
    [  4, 81, 85,  4,561,  0,  0,  0,712,  4, 85, 81,  4],
    [  4, 82,653,  4,  4,  4, 82,  4,  4,  4,652, 82,  4],
    [  4,  0, 21,707,  0,  0, 22,  0,  0,707, 21,  0,  4],
    [  4,699,  0,334, 81,332,  0,332, 81,334,  0,699,  4],
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