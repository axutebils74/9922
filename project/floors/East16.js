main.floors.East16=
{
    "floorId": "East16",
    "title": "花月道尽头",
    "name": "花月道尽头",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "grass",
    "bgm": "area10.mp3",
    "firstArrive": [
        {
            "type": "playBgm",
            "name": "boss11.mp3"
        },
        {
            "type": "setVolume",
            "value": 90,
            "time": 0
        },
        "\t[hero]\b[down,1,0]（这，这下面是花月道尽头的试炼入口！）",
        {
            "type": "callBook"
        },
        "\t[hero]\b[down,1,0]（好厉害……好多没见过的高级型号，随便拎出一个实力恐怕都不亚于刚才那个打工人，更不用说这么多聚集在一起……）",
        "\t[除灵者首领,E562]\b[this,6,10]械灵“幽”，今日你必死无疑。",
        "\t[除灵者首领,E562]\b[this,6,10]我们早就在此布下\r[yellow]禁魔大阵\r，你别想用什么“至尊之界”之类的花招了。\n如何，你还有什么遗言？",
        "\t[幽,Nxl_U]\b[this,6,6]……",
        "\t[除灵者首领,E562]\b[this,6,10]……",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[除灵者首领,E562]\b[this,6,10]想拖时间？动手！",
        {
            "type": "pauseBgm"
        },
        {
            "type": "function",
            "function": "function(){\nif (!core.isReplaying()) {\n\tvar curX = 8;\n\tvar interval = setInterval(function () {\n\t\tif (curX > 0) {\n\t\t\tcore.drawAnimate(\"fire2\", 6, 6);\n\t\t\tcore.playSound('smallExplosion.mp3');\n\t\t\tcurX -= 1;\n\t\t} else { clearInterval(interval) }\n\t}, 200);\n\tvar curY = 8;\n\tvar interval2 = setInterval(function () {\n\t\tif (curY > 0) {\n\t\t\tcore.drawAnimate(\"snipe\", 6, 6);\n\t\t\tcore.playSound('smallExplosion.mp3');\n\t\t\tcurY -= 1;\n\t\t} else { clearInterval(interval2) }\n\t}, 200);\n}\n}"
        },
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "vibrate",
            "direction": "horizontal",
            "time": 2000,
            "speed": 10,
            "power": 10,
            "async": true
        },
        {
            "type": "animate",
            "name": "supernova",
            "loc": [
                6,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "explosion",
            "loc": [
                6,
                6
            ],
            "async": true
        },
        {
            "type": "setCurtain",
            "color": [
                255,
                255,
                255,
                1
            ],
            "time": 2000,
            "keep": true
        },
        {
            "type": "function",
            "function": "function(){\nfor (var i = 5; i <= 7; ++i) {\n\tfor (var j = 3; j <= 5; ++j) {\n\t\tcore.removeBlock(i, j);\n\t}\n}\n\nfor (var i = 1; i <= 11; ++i) {\n\tfor (var j = 1; j <= 11; ++j) {\n\t\tcore.setBgFgBlock(\"bg\", \"autotile10\", i, j);\n\t}\n}\n}"
        },
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    3,
                    3
                ],
                [
                    9,
                    3
                ],
                [
                    2,
                    6
                ],
                [
                    6,
                    6
                ],
                [
                    10,
                    6
                ],
                [
                    3,
                    9
                ],
                [
                    9,
                    9
                ],
                [
                    4,
                    11
                ],
                [
                    8,
                    11
                ]
            ],
            "remove": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "setCurtain",
            "time": 2000
        },
        "\t[除灵者首领,E562]\b[this,6,10]咳咳……这家伙竟然自爆了……死到临头还妄想和我们同归于尽……",
        "\t[除灵者首领,E562]\b[this,6,10]虽然代价有点大，不过我总算完成了最重要的任务……\n只要干掉最强的械灵，其余的弱者都不足为惧了……",
        "\t[幽,Nxl_U]\b[this,6,9]是吗？",
        {
            "type": "setBlock",
            "number": "Nxl_U",
            "loc": [
                [
                    6,
                    9
                ]
            ]
        },
        {
            "type": "animate",
            "name": "yongchang",
            "loc": [
                6,
                9
            ]
        },
        {
            "type": "playBgm",
            "name": "boss5.mp3",
            "keep": true
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": [
                6,
                10
            ]
        },
        "\t[除灵者首领,E562]\b[this,6,10]你！你！这怎么可能！",
        "\t[幽,Nxl_U]\b[this,6,9]集结除灵者绝大部分的高级战力，对一个伪装成我的样子的自行定时炸弹穷追不舍，说出去怕是会笑死人吧？ ",
        "\t[除灵者首领,E562]\b[this,6,10]什么？ ",
        "\t[幽,Nxl_U]\b[this,6,9]你们的禁魔大阵的确很有用，不仅能禁用魔法、大蝠削弱敌人战斗力，还能隔绝指挥信号，功效完全不亚于我的“至尊之界”。\n可惜，我早已设定好了它的行动路线以及爆炸时间，全程不需要我进行任何操控。",
        "\t[除灵者首领,E562]\b[this,6,10]这……这不可能！为什么那个定时炸弹长得和你一样？！",
        "\t[幽,Nxl_U]\b[this,6,9]哈哈哈，说的好像换个皮很困难似的。\n本来呢，我觉得能骗多少人是多少，我怎么都不亏，但是没想到你们这么配合。",
        "\t[幽,Nxl_U]\b[this,6,9]作为回报，我一定会好好替你照顾还没被炸死的除灵者的……",
        {
            "type": "animate",
            "name": "yidaoliangduan",
            "loc": [
                6,
                10
            ]
        },
        "\t[除灵者首领,E562]\b[this,6,10]谔谔，啊啊啊啊啊啊啊！",
        {
            "type": "function",
            "function": "function(){\ncore.flashHide(6, 10);\n}"
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    10
                ]
            ],
            "remove": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[幽,Nxl_U]\b[this,6,9]哼哼……计划马上就要成功了，接下来只要……",
        {
            "type": "move",
            "loc": [
                6,
                9
            ],
            "time": 250,
            "steps": [
                "down:2",
                "left:6"
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[晴芸,hero3]\b[down,1,0]我的天……这下除灵者的高级战力恐怕是元气大伤了。",
        "\t[芳芷,hero2]\b[down,1,0]出大事了……除灵者的指挥权限就在首领手中，现在指挥权限被幽得到了……",
        {
            "type": "setValue",
            "name": "flag:watch_East16",
            "value": "1"
        },
        {
            "type": "changeFloor",
            "floorId": "North11",
            "loc": [
                10,
                9
            ],
            "direction": "down"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [149,149,149,149,149,149,149,149,149,149,149,149,149],
    [149,  0,  0,  0,563,  0,  0,  0,561,  0,  0,  0,149],
    [149,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,149],
    [149,  0,  0,560,  0,40115,40116,40117,  0,563,  0,  0,149],
    [149,  0,  0,  0,  0,40123,40124,40125,  0,  0,  0,  0,149],
    [149,  0,  0,  0,  0,40131,40132,40133,  0,  0,  0,  0,149],
    [149,  0,561,  0,  0,  0,572,  0,  0,  0,561,  0,149],
    [149,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,149],
    [149,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,149],
    [149,  0,  0,563,  0,  0,  0,  0,  0,560,  0,  0,149],
    [149,  0,  0,  0,  0,  0,562,  0,  0,  0,  0,  0,149],
    [ 92,  0,  0,  0,561,  0,  0,  0,563,  0,  0,  0,149],
    [149,149,149,149,149,149,149,149,149,149,149,149,149]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "hard1_enemy_ratio": 100,
    "beforeBattle": {},
    "cannotMoveIn": {}
}