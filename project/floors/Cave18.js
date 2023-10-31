main.floors.Cave18=
{
    "floorId": "Cave18",
    "title": "幻境",
    "name": "幻境",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "grass",
    "bgm": "story2.mp3",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[古亦,N605]\b[down,null]这里是第一届激励大赛的决赛现场。\n对战双方分别是——械灵“幽”和智械1188。",
        "\t[1188,N622]\b[this,8,6]你就是近两年崛起的新一代械灵吗，比起其他型号强了好几个档次，简直堪称恐怖。",
        "\t[幽,Nxl_U]\b[this,4,6]你也不愧是老一代智械中的传奇人物，竟然能与我战斗到这一步，最强智械的称号果真不是浪得虚名。\n我还有最后一招，只要你接下来，我就认输！",
        "\t[幽,Nxl_U]\b[this,4,6]\r[red]\\c[24]至 尊 之 界！\\c\r",
        {
            "type": "animate",
            "name": "thunder4",
            "loc": [
                6,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "zone2",
            "loc": [
                4,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "zone2",
            "loc": [
                8,
                6
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    6
                ],
                [
                    8,
                    6
                ]
            ],
            "time": 1000
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[主持人,N410]\b[this,4,1]一道晴空霹雳过后，两名选手都消失了！他们到底去哪了？",
        "\t[？？,Nancang]\b[this,8,1]是空间魔法。他们现在正处在另一片空间。",
        "\t[主持人,N410]\b[this,4,1]幽竟然用出了空间魔法！简直不可思议！",
        "\t[？？,Nancang]\b[this,8,1]能掌控这等高阶魔法，这就是械灵之王的真正实力吗……",
        {
            "type": "waitAsync"
        },
        {
            "type": "animate",
            "name": "spe62",
            "loc": [
                8,
                6
            ],
            "async": true
        },
        {
            "type": "show",
            "loc": [
                [
                    8,
                    6
                ]
            ],
            "time": 500
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[主持人,N410]\b[this,4,1]首先从空间中出来的是1188！难道说……",
        {
            "type": "animate",
            "name": "dispel",
            "loc": [
                4,
                6
            ],
            "async": true
        },
        {
            "type": "show",
            "loc": [
                [
                    4,
                    6
                ]
            ],
            "time": 500
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": [
                8,
                6
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                2,
                6
            ]
        },
        {
            "type": "openDoor",
            "loc": [
                10,
                6
            ]
        },
        "\t[1188,N622]\b[this,8,6]我，败了……",
        {
            "type": "waitAsync"
        },
        "\t[幽,Nxl_U]\b[this,4,6]哈哈哈哈，哈哈哈哈哈哈！",
        "\t[主持人,N410]\b[this,4,1]难以置信！1188直接认输了！\n那么，本次比赛最终的胜者就是——械灵，幽！",
        {
            "type": "playSound",
            "name": "059-Applause01.ogg"
        },
        {
            "type": "turnBlock",
            "direction": "right",
            "loc": [
                [
                    8,
                    6
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                8,
                6
            ],
            "time": 50,
            "keep": true,
            "steps": [
                "right:2"
            ]
        },
        {
            "type": "animate",
            "name": "hand",
            "loc": [
                11,
                6
            ],
            "async": true
        },
        {
            "type": "move",
            "loc": [
                11,
                6
            ],
            "time": 50,
            "keep": true,
            "async": true,
            "steps": [
                "down:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                10,
                6
            ],
            "time": 50,
            "steps": [
                "right:3"
            ]
        },
        {
            "type": "move",
            "loc": [
                11,
                7
            ],
            "time": 200,
            "keep": true,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "turnBlock",
            "direction": "right",
            "loc": [
                [
                    11,
                    6
                ]
            ]
        },
        "\t[2221,N600]\b[this,11,6]1188！喂！",
        {
            "type": "waitAsync"
        },
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": [
                11,
                6
            ]
        },
        "\t[2221,N600]\b[this,11,6]不，这不可能！无敌的1188怎么会输！",
        "\t[1185,N610]\b[this,12,7]他面对的，可是有史以来最强的械灵啊。",
        "\t[1857,N618]\b[this,12,9]是啊，我都替他觉得太难了。",
        "\t[2221,N600]\b[this,11,6]那他为什么直接自己跑了……他肯定很沮丧吧……不想见人……",
        "\t[2221,N600]\b[this,11,6]不行，这件事不能就这么过去了！",
        {
            "type": "turnBlock",
            "direction": "left",
            "loc": [
                [
                    11,
                    6
                ]
            ]
        },
        {
            "type": "jump",
            "from": [
                11,
                6
            ],
            "to": [
                8,
                6
            ],
            "time": 500,
            "keep": true
        },
        "\t[2221,N600]\b[this,8,6]喂，你一定是在那什么至尊之界里作弊了！不然你根本不可能赢！",
        "\t[芳芷,hero2]\b[this,6,1]2221！你……",
        {
            "type": "move",
            "loc": [
                4,
                6
            ],
            "time": 200,
            "keep": true,
            "steps": [
                "right:1"
            ]
        },
        "\t[幽,Nxl_U]\b[this,5,6]无妨，我不介意再施展一次刚才的魔法，把她带到至尊之界里示范一下我是如何光明正大地取胜的。\n只怕她没这个胆量。",
        {
            "type": "move",
            "loc": [
                8,
                6
            ],
            "time": 200,
            "keep": true,
            "steps": [
                "left:1"
            ]
        },
        "\t[2221,N600]\b[this,7,6]我才不怕！来啊！",
        {
            "type": "turnBlock",
            "direction": "up",
            "loc": [
                [
                    5,
                    6
                ]
            ]
        },
        "\t[幽,Nxl_U]\b[this,5,6]如何，我是否可以把她带入至尊之界？",
        "\t[芳芷,hero2]\b[this,6,1]既然当事双方都同意，我也没理由反对。",
        {
            "type": "turnBlock",
            "direction": "right",
            "loc": [
                [
                    5,
                    6
                ]
            ]
        },
        "\t[幽,Nxl_U]\b[this,5,6]哼哼，那么，给我看好了。",
        {
            "type": "animate",
            "name": "thunder4",
            "loc": [
                6,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "zone2",
            "loc": [
                5,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "zone2",
            "loc": [
                7,
                6
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    6
                ],
                [
                    5,
                    6
                ]
            ],
            "remove": true,
            "time": 300
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "playSound",
            "name": "mteleport.wav"
        },
        {
            "type": "changeFloor",
            "floorId": "Cave19",
            "loc": [
                7,
                9
            ],
            "direction": "up",
            "time": 800
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
    [  0,  0,560,  0,  0,  0,605,  0,  0,  0,560,  0,  0],
    [561,  0,  0,  0,410,121,336,140,447,  0,  0,  0,549],
    [  0,  0,50031,50031,50031,50031,50031,50031,50031,50031,50031,  0,  0],
    [  0,524,50031,  0,  0,  0,  0,  0,  0,  0,50031,  0,395],
    [525,532,50031,  0,  0,  0,  0,  0,  0,  0,50031,395,  0],
    [533,534,50031,  0,  0,  0,  0,  0,  0,  0,50031,  0,615],
    [525,557, 85,  0,574,  0,  0,  0,623,  0, 85,601,  0],
    [533,534,50031,  0,  0,  0,  0,  0,  0,  0,50031,  0,611],
    [525,532,50031,  0,  0,  0,  0,  0,  0,  0,50031,395,  0],
    [  0,524,50031,  0,  0,  0,  0,  0,  0,  0,50031,  0,619],
    [  0,  0,50031,50031,50031,50031,50031,50031,50031,50031,50031,  0,  0],
    [549,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,561],
    [  0,  0,560,  0,  0,523,605,  0,  0,  0,560,  0,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,147,147,147,147,147,147,147,  0,  0,  0],
    [  0,  0,  0,147,147,147,147,147,147,147,  0,  0,  0],
    [  0,  0,  0,147,147,147,147,147,147,147,  0,  0,  0],
    [  0,  0,  0,147,147,147,147,147,147,147,  0,  0,  0],
    [  0,  0,  0,147,147,147,147,147,147,147,  0,  0,  0],
    [  0,  0,  0,147,147,147,147,147,147,147,  0,  0,  0],
    [  0,  0,  0,147,147,147,147,147,147,147,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {}
}