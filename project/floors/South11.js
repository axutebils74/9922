main.floors.South11=
{
    "floorId": "South11",
    "title": "停风林深处",
    "name": "停风林深处",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": true,
    "images": [],
    "ratio": 50,
    "defaultGround": "grass",
    "bgm": "area8.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "steps": [
                "up"
            ]
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[晴芸,hero3]就是这里啦！",
        "\t[hero]感觉这所谓的宝藏，位置似乎不太隐蔽……应该有其他参赛选手来过了。",
        "\t[晴芸,hero3]没关系呀！别人是否获得宝藏，对你是没有影响的。",
        "\t[晴芸,hero3]我所说的“宝藏”，其实就是主办方设下的“考验”。\n前面的石碑会把你送到一个独立的空间，只要你能通过考验，就可以获得奖励。",
        "\t[hero]……既然是考验，我是不是应该多做些准备再去，以确保能通过？",
        "\t[晴芸,hero3]不用，考验一般都不难。而且主办方为了尽可能考察受试者的潜力而非战斗力或者财力，在考验中\r[yellow]禁止使用空间外的道具，并会使用独立的生命和能力值\r。\n简单来讲，就是一个独立的副本。",
        "\t[hero]好，我明白了。既然这样，就应该尽早通过考验、获取奖励，才能方便我探索其他的区域。",
        "\t[hero]（准备好了就上吧。）"
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "flag:dungeon1_finish == 1",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.hideBgFgMap(\"bg2\", [6, 7]);\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:dungeon1_finish",
                    "value": "2"
                },
                {
                    "type": "jump",
                    "from": [
                        6,
                        10
                    ],
                    "dxy": [
                        0,
                        0
                    ],
                    "time": 300,
                    "keep": true
                },
                "\t[晴芸,hero3]怎么样，很简单吧？",
                "\t[hero]确实不难，只是通过的奖励……",
                "\t[晴芸,hero3]一般通过考验的同时奖励就会发放到你身上，而且听说每个人获得的奖励都不一样呢！",
                "\t[hero]嗯……我获得的总共是：\n50万生命，100能量，2500基础攻击和防御，2黄宝石。",
                {
                    "type": "turnBlock",
                    "direction": "up",
                    "loc": [
                        [
                            5,
                            10
                        ]
                    ]
                },
                "\t[参赛者,rogue]你也只拿到这么点奖励吗？\n哼，原本看到奖励这么少还以为是自己运气不好，现在看来这个试炼的奖励也就这样了。",
                "\t[参赛者,rogue]算了，我还是赶快前往\r[yellow]花月道\r吧，那里的试炼想必奖励会高级一些。",
                {
                    "type": "hide",
                    "loc": [
                        [
                            5,
                            10
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "animate",
                    "name": "zone",
                    "loc": [
                        5,
                        10
                    ]
                },
                {
                    "type": "animate",
                    "name": "E_dots",
                    "loc": "hero"
                },
                "\t[hero]原来这个智械大叔也是参赛者吗，我还以为他是守卫什么的……",
                "\t[晴芸,hero3]一个石碑要什么守卫呀，何况现在监控技术这么发达……",
                {
                    "type": "animate",
                    "name": "E_unhappy",
                    "loc": "hero",
                    "async": true
                },
                "\t[hero]哎，没办法，谁让他和村庄守卫长得一样……",
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[hero]对了，他刚才说他要去花月道，花月道的位置是在……",
                "\t[晴芸,hero3]在咱们刚才到达过的村庄东部，其中挑战的难度适合大多数参赛者，是主要的比赛场地。\n不过姐姐现在的实力似乎还不够呢……",
                "\t[hero]应该有难度相对低一些的区域吧？",
                {
                    "type": "jump",
                    "from": [
                        6,
                        10
                    ],
                    "dxy": [
                        0,
                        0
                    ],
                    "time": 300,
                    "keep": true,
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "E_love",
                    "loc": [
                        6,
                        10
                    ],
                    "async": true
                },
                "\t[晴芸,hero3]那是当然！这里的西南方向有一个区域，挺适合你的。\n出发啦！",
                {
                    "type": "waitAsync",
                    "excludeAnimates": true
                },
                {
                    "type": "move",
                    "loc": [
                        6,
                        10
                    ],
                    "time": 100,
                    "steps": [
                        "up:2"
                    ]
                },
                {
                    "type": "follow",
                    "name": "hero3.png"
                },
                {
                    "type": "moveHero",
                    "time": 100,
                    "steps": [
                        "down:2"
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        1
                    ],
                    "floorId": "South12"
                },
                "\t[系统提示]通往截浪滩的道路已经开启。"
            ],
            "false": []
        }
    ],
    "parallelDo": "",
    "events": {
        "6,6": [
            {
                "type": "if",
                "condition": "(!switch:A)",
                "true": [
                    {
                        "type": "confirm",
                        "text": "准备好接受考验了吗？",
                        "yes": [
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "playSound",
                                "name": "mteleport.wav"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.clearMap(\"bg2\");\n}"
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "Dungeon1",
                                "loc": [
                                    6,
                                    12
                                ],
                                "direction": "up",
                                "time": 1000
                            }
                        ],
                        "no": []
                    }
                ],
                "false": [
                    "石碑再无反应。"
                ]
            }
        ],
        "6,9": [
            {
                "type": "if",
                "condition": "(!flag:dungeon1_finish)",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.status.hero.loc.direction == \"up\"",
                        "true": [
                            "\t[晴芸,hero3]我不能跟着姐姐进入考验空间，一定要加油呀！",
                            {
                                "type": "setBlock",
                                "number": "hero3_up",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ]
                                ]
                            },
                            {
                                "type": "unfollow",
                                "name": "hero3.png"
                            },
                            {
                                "type": "moveHero",
                                "steps": [
                                    "up"
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "move",
                                "loc": [
                                    6,
                                    10
                                ],
                                "time": 100,
                                "steps": [
                                    "up"
                                ]
                            },
                            {
                                "type": "follow",
                                "name": "hero3.png"
                            },
                            {
                                "type": "moveHero",
                                "steps": [
                                    "down"
                                ]
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "hide",
                        "remove": true
                    }
                ]
            }
        ],
        "5,10": [
            "\t[铁甲大叔？,rogue]你是来参加试炼的？还等什么，快进去吧。",
            {
                "type": "turnBlock",
                "direction": "down",
                "loc": [
                    [
                        5,
                        10
                    ]
                ]
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "South1",
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
    [149,149,149,149, 21,149, 21,149, 21,149,149,149,149],
    [149,  0,  0,149, 22, 84, 22, 84, 22,149,  0,  0,149],
    [149,  0,  0,149, 21,149, 21,149, 21,149,  0,  0,149],
    [149,  0,  0,149,149,149, 84,149,149,149,  0,  0,149],
    [149,50073,50074,149,  0,  0,  0,  0,  0,149,50073,50074,149],
    [149,  0,  0,149,  0,40120,40121,40122,  0,149,  0,  0,149],
    [149,  0,  0,149,  0,40128,40129,40130,  0,149,  0,  0,149],
    [149,  0,  0,149,  0,  0,  0,  0,  0,149,  0,  0,149],
    [149,  0,  0,149, 21,  0,  0,  0, 21,149,  0,  0,149],
    [149,50073,50074,149,149,149,  0,149,149,149,50073,50074,149],
    [149,334,334,149,  0,393,  0,  0,  0,149,334,334,149],
    [149,334, 81, 82,  0,  0,  0,  0,  0, 82, 81,334,149],
    [149,149,149,149,149,149, 93,149,149,149,149,149,149]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,50013,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,50013,  0,  0,  0,50013,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,147,147,147,147,147,  0,  0,  0,  0],
    [  0,  0,  0,  0,147,147,147,147,147,  0,  0,  0,  0],
    [  0,  0,  0,  0,147,147,147,147,147,  0,  0,  0,  0],
    [  0,  0,  0,  0,147,147,147,147,147,  0,  0,  0,  0],
    [  0,  0,  0,  0,147,147,147,147,147,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,50023,  0,  0,  0,50023,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [50040,50041,50042,50043,  0,  0,  0,  0,  0,50040,50041,50042,50043],
    [50048,50049,50050,50051,  0,  0,  0,  0,  0,50048,50049,50050,50051],
    [50056,50057,50058,50059,  0,  0,  0,  0,  0,50056,50057,50058,50059],
    [50064,50065,50066,50067,  0,  0,  0,  0,  0,50064,50065,50066,50067],
    [  0,  0,  0,  0,  0,40112,40113,40114,  0,  0,  0,  0,  0],
    [50040,50041,50042,50043,  0,  0,  0,  0,  0,50040,50041,50042,50043],
    [50048,50049,50050,50051,  0,  0,  0,  0,  0,50048,50049,50050,50051],
    [50056,50057,50058,50059,  0,  0,  0,  0,  0,50056,50057,50058,50059],
    [50064,50065,50066,50067,  0,  0,  0,  0,  0,50064,50065,50066,50067],
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
    [  0,  0,  0,  0,  0,  0,495,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": false
}