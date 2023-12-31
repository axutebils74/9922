main.floors.Ch4_86=
{
    "floorId": "Ch4_86",
    "title": "华炳街-6",
    "name": "华炳街-6",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "T817",
    "bgm": "area19.mp3",
    "color": [
        0,
        0,
        0,
        0.2
    ],
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,8": [
            "\t[hero]\b[down,null]总算追上主力部队了……等等，这是？",
            {
                "type": "function",
                "function": "function(){\ncore.hideBgFgMap(\"bg2\", [6, 8]);\n}"
            },
            "\t[铁焚,E818]\b[down,6,2]我刚才看到你们要找的人往那边逃跑了，你们现在回头去追，很快就能追上。",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[铁焚,E818]\b[down,6,2]你这样看着我干嘛？他逃到你后面了，快去追啊！",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[铁焚,E818]\b[down,6,2]追！追啊！你tmd，为什么不追！",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[铁焚,E818]\b[down,6,2]……既然大家都知道了，这戏我就不演了。",
            "\t[铁焚,E818]\b[down,6,2]我就是大名鼎鼎的摩宇防卫军和第零近卫队双料高级统领，\r[orange]铁焚\r！\n现在速速退去，我还能饶你一命！",
            "\t[2 2 2 1,N2221]\b[down,6,5]本来我是不屑于对无关人士出手的。\n不过既然你自称是狱贤的什么铁粉，那还是去死吧。",
            {
                "type": "move",
                "loc": [
                    6,
                    5
                ],
                "time": 50,
                "keep": true,
                "steps": [
                    "up:2"
                ]
            },
            {
                "type": "setBlock",
                "number": "E818",
                "loc": [
                    [
                        6,
                        2
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "morphattack",
                "loc": [
                    6,
                    2
                ]
            },
            "\t[铁焚,E818]\b[down,6,2]！！……好强的力量，刚正面我竟不是对手。\n不过……",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        3
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        4
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        9,
                        4
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        6
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        6
                    ]
                ],
                "remove": true
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    6,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    3,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    9,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    4,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    8,
                    6
                ]
            },
            "\t[铁焚,E818]\b[down,6,2]……我的任务只是拖延时间而已。等增援到来，你们都得死！",
            "\t[晴芸,hero3]\b[up,hero]糟了，是传送阵法！2221和它手下的除零者恐怕已经被完全打散了。\n哎，看来是不能划水了……",
            "\t[晴芸,hero3]\b[up,hero]不过那家伙也进入了虚弱状态，短时间内是不可能准备好第二个传送阵法了。",
            "\t[hero]\b[up,hero]明白，对付这种家伙不需要讲武德。",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,7": [
            "\t[系统提示]\b[down,null]在摩宇城内出现的械灵精华可能有以下4种：\n\\i[IxlO]O型：摧毁自身为中心\r[yellow]3*3\r范围的非绿色门或补给品\n\\i[IxlP]P型：摧毁与自身\r[yellow]同行列\r的非绿色门或补给品\n\\i[IxlQ]Q型：在面前“\r[yellow]闭门\r”\n\\i[IxlR]R型：降低同楼层敌人\r[yellow]10%\r攻\r[yellow]5%\r防"
        ],
        "8,3": [
            "被防卫军摧毁的除零者。"
        ],
        "9,3": [
            "被防卫军摧毁的除零者。"
        ],
        "4,5": [
            "被防卫军摧毁的除零者。"
        ],
        "3,5": [
            "被防卫军摧毁的除零者。"
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "Ch4_85",
            "loc": [
                6,
                0
            ]
        }
    },
    "beforeBattle": {
        "6,2": [
            "\t[铁焚,E818]\b[down,6,2]嗯？哪来的智械和小姑娘，这里不是你们该来的地方。"
        ]
    },
    "afterBattle": {
        "6,2": [
            {
                "type": "setBlock",
                "number": "E818",
                "loc": [
                    [
                        6,
                        2
                    ]
                ]
            },
            "\t[铁焚,E818]\b[down,6,2]可恶，真没想到你们两个小姑娘，看似柔弱，竟然是反叛军的高级特工！\n奶奶滴，跟我玩阴的是吧！本大爷现在状态不好，你们给我等着！",
            {
                "type": "moveHero",
                "async": true,
                "steps": [
                    "backward:2"
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "remove": true
            },
            {
                "type": "animate",
                "name": "dark",
                "loc": [
                    6,
                    2
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    2
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    5,
                    3
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    7,
                    3
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    8
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    8
                ]
            },
            "\t[hero]\b[down,hero]……结果路还被他堵得更死了。",
            "\t[晴芸,hero3]\b[down,hero]看来不能走这边了……\n去\r[yellow]望梅界\r！就是我们刚刚走过的地方。",
            {
                "type": "waitAsync",
                "excludeAnimates": true
            }
        ]
    },
    "afterGetItem": {
        "9,8": [
            "\t[晴芸,hero3]\b[down,null]咦，械灵的力量精华……\n这应该算是某种支援物资吧。正如那个小天使所说，械灵能够依靠它们的特技发挥特殊的作用。",
            "\t[hero]\b[down,null]可是我完全不会用……你知道怎么用这玩意吗？",
            "\t[晴芸,hero3]\b[down,null]放心吧，这个不难，交给我就好。",
            "\t[系统提示]\b[down,null]在道具栏使用，就可以让晴芸激发械灵精华的力量。"
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [197,197,197,197,197,197,  0,197,197,197,197,197,197],
    [197,160932,160933,160576,160577,197, 85,197,160576,160577,160932,160933,197],
    [197,160940,160941,160768,160770,197,843,197,160768,160770,160940,160941,197],
    [197,160948,160949,  0,  0,  0,  0,  0,151042,151043,160948,160949,197],
    [  0,160778,160778,769,  0,  0,  0,  0,  0,768,160778,160778,  0],
    [  0,160786,160786,151056,151057,  0,845,  0,  0,  0,160786,160786,  0],
    [197,197,197,197,768,  0,  0,  0,769,197,197,197,197],
    [197, 22,567,197,197,  0,  0,129,197,197,566, 23,197],
    [197,666,660,824, 85,  0,  0,  0, 85,822,661,664,197],
    [197,197,197,197,197,197, 81,197,197,197,197,197,197],
    [197,197,197,197,197,332,  0,333,197,197,197,197,197],
    [197,822, 84, 23, 84,  0,660,  0, 84, 23, 84,824,197],
    [197,197,197,197,197,197,  0,197,197,197,197,197,197]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,151034,151035,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,151048,151049,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,168,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0, 93,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "flyPoint": [
        6,
        12
    ],
    "hard1_enemy_ratio": 95
}