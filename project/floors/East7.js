main.floors.East7=
{
    "floorId": "East7",
    "title": "花月道-7",
    "name": "花月道-7",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "grass",
    "bgm": "area10.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.values.animateSpeed = 450;\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "6,9": [
            {
                "type": "setVolume",
                "value": 0,
                "time": 2000
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "setVolume",
                "value": 90,
                "time": 10
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            {
                "type": "changePos",
                "direction": "down"
            },
            "\t[hero]\b[up,6,9]又是它们……",
            "\t[晴芸,hero3]这些家伙又出现了，想必是已经得到格杀许可了。\n怎么办，现在掉头就跑吧？",
            "\t[hero]\b[up,6,9]不用，你躲远点，我自己来处理他们。",
            {
                "type": "unfollow",
                "name": "hero3.png"
            },
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
            "\t[晴芸,hero3]……好，姐姐要小心呀。",
            {
                "type": "move",
                "loc": [
                    6,
                    10
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "down"
                ]
            },
            {
                "type": "turnBlock",
                "direction": "up",
                "loc": [
                    [
                        6,
                        11
                    ]
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    10
                ]
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            {
                "type": "playBgm",
                "name": "boss10.mp3",
                "keep": true
            },
            "\t[除灵者Ⅱ型,N515]\b[down,6,6]算你识相，没拉着那个小姑娘送死。",
            "\t[hero]你们确定送死的是我？",
            "\t[除灵者Ⅱ型,N515]\b[down,6,6]你的成长速度的确很惊人，单打独斗我们已经不是你的对手，不过我们最大的武器从来都不是个体实力，而是——团结！",
            "\t[除灵者Ⅱ型,N515]\b[down,6,6]绝对的服从和执行力，这才是我们除灵者最大的优势！",
            "\t[hero]那么，就来试试吧。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "0,11": {
            "floorId": "East4",
            "loc": [
                12,
                11
            ]
        },
        "11,12": {
            "floorId": "East6",
            "loc": [
                11,
                0
            ]
        },
        "6,0": {
            "floorId": "East8",
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
                "condition": "flag:last_battle_enemyId != \"E538\"",
                "true": [
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "jumpHero",
                "loc": [
                    6,
                    7
                ],
                "time": 300
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    10
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    4
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    3
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    3
                ]
            },
            "\t[hero]\b[down,hero]就这？",
            {
                "type": "playSound",
                "name": "jump.mp3"
            },
            {
                "type": "jump",
                "from": [
                    6,
                    11
                ],
                "dxy": [
                    0,
                    -2
                ],
                "time": 500,
                "keep": true
            },
            {
                "type": "move",
                "loc": [
                    6,
                    9
                ],
                "time": 100,
                "keep": true,
                "steps": [
                    "up:1"
                ]
            },
            "\t[晴芸,hero3]\b[down,6,8]哇，姐姐太厉害啦！",
            "\t[hero]\b[down,hero]哼，轻轻松松。",
            "\t[晴芸,hero3]\b[down,6,8]不过，他们应该早就把关于姐姐的信息散布出去了，所以……",
            "\t[除灵者Ⅳ型,E537]\b[down,6,3]所以你还是必死无疑。",
            {
                "type": "playBgm",
                "name": "boss10.mp3",
                "keep": true
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            {
                "type": "setBlock",
                "number": "E537",
                "loc": [
                    [
                        6,
                        4
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": "E537",
                "loc": [
                    [
                        6,
                        10
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    10
                ]
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "callBook"
            },
            "\t[hero]\b[down,hero]……",
            "\t[除灵者Ⅳ型,E537]\b[down,6,3]束手就擒吧，像我们这种型号的除灵者还有几十台在附近。",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            {
                "type": "changePos",
                "direction": "down"
            },
            "\t[hero]\b[down,hero]晴芸，你自己回去吧，他们的敌意不针对你，只要你不妨碍他们应该就没事。",
            "\t[晴芸,hero3]\b[down,6,8]啊，这……我不可能抛弃姐姐的……",
            "\t[hero]\b[down,hero]你快走，免得被误伤。我自己突围，未必没有一线生机。",
            "\t[除灵者Ⅳ型,E537]\b[down,6,4]那边的人类小姑娘，最后一次警告，你再不让开，我们将会连你一起击毙。",
            "\t[hero]\b[down,hero]听到没有？快走！",
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": [
                    6,
                    8
                ]
            },
            "\t[晴芸,hero3]\b[down,6,8]……没有必要。",
            "\t[hero]\b[down,hero]你什么意思？……",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        4
                    ]
                ],
                "remove": true
            },
            {
                "type": "animate",
                "name": "crossattack",
                "loc": [
                    6,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": "N522",
                "loc": [
                    [
                        6,
                        5
                    ]
                ],
                "time": 1000
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": "hero"
            },
            "\t[hero]\b[down,hero]是你！你是……",
            "\t[除灵者Ⅳ型,E537]\b[up,6,10]我草……一招秒杀？",
            "\t[？？,N522]\b[down,6,5]那边的家伙听着，回去告诉你们的老大，我不允许你们动她。",
            "\t[除灵者Ⅳ型,E537]\b[up,6,10]哼，真以为我怕了你不成？要不是我们除灵者的高级战力暂时腾不出手，也轮不到你嚣张。",
            "\t[？？,N522]\b[down,6,5]哦，让我猜猜你们的高级战力在做什么。\n围剿“\r[red]幽\r”，对吧？",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": [
                    6,
                    10
                ]
            },
            "\t[hero]（除灵者竟然在围剿上届获得冠军的那个械灵！）",
            "\t[？？,N522]\b[down,6,5]你们一定是以为自己胜券在握了。但是很可惜，就算要摧毁那些高级型号，对我来讲也只是稍微多费点功夫而已。",
            {
                "type": "animate",
                "name": "E_embarrass",
                "loc": [
                    6,
                    10
                ],
                "async": true
            },
            "\t[除灵者Ⅳ型,E537]\b[up,6,10]（……从她刚才一招秒杀的情况来看，这很有可能是真的……）",
            {
                "type": "waitAsync"
            },
            "\t[？？,N522]\b[down,6,5]最后警告一次，不要无端地给自己树敌。\n滚。",
            "\t[除灵者Ⅳ型,E537]\b[up,6,10]啊……这……我这就滚……",
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    10
                ]
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
                "type": "setVolume",
                "value": 0,
                "time": 1000
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[hero]\b[down,hero]这是你第二次救场了。你到底有什么意图，直说吧。",
            {
                "type": "turnBlock",
                "direction": "up",
                "loc": [
                    [
                        6,
                        5
                    ]
                ]
            },
            "\t[？？,N522]\b[down,6,5]只是凑巧路过而已。\n我的意图，你会明白的，但不是现在。",
            {
                "type": "animate",
                "name": "E_unhappy",
                "loc": "hero"
            },
            "\t[？？,N522]\b[down,6,5]除灵者短时间内不会来找你的麻烦了。你要抓紧时间变强，才能保护好自己和身边的人。\n我还有事要处理，告辞。",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        5
                    ]
                ],
                "remove": true
            },
            {
                "type": "animate",
                "name": "light2",
                "loc": [
                    6,
                    5
                ]
            },
            "\t[晴芸,hero3]\b[down,6,8]直觉告诉我，这女人和你之间有着特殊的联系。",
            "\t[hero]\b[down,hero]（这……不对劲，我对于这个世界来讲是天外来客，怎么会与别人有关联……）",
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "changePos",
                "direction": "down"
            },
            "\t[hero]\b[down,null]对了，刚才我让你自己跑，你说“没有必要”是什么意思？",
            {
                "type": "move",
                "loc": [
                    6,
                    8
                ],
                "time": 500,
                "keep": true,
                "async": true,
                "steps": [
                    "backward:1"
                ]
            },
            "\t[晴芸,hero3]\b[down,null]啊，这……",
            {
                "type": "waitAsync"
            },
            {
                "type": "sleep",
                "time": 1000
            },
            {
                "type": "animate",
                "name": "E_love",
                "loc": [
                    6,
                    9
                ],
                "async": true
            },
            {
                "type": "jump",
                "from": [
                    6,
                    9
                ],
                "dxy": [
                    0,
                    0
                ],
                "time": 300,
                "keep": true
            },
            "\t[晴芸,hero3]\b[down,null]当然是因为我感觉到有人要来救场吖！",
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "E_sweat",
                "loc": "hero",
                "async": true
            },
            "\t[hero]\b[down,null]啊这，是这样吗，哈哈……",
            {
                "type": "waitAsync"
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            {
                "type": "sleep",
                "time": 500
            },
            "\t[hero]\b[down,null]（这女孩也不对劲……刚才她说这句话的时候，眼神还有面部表达出的那种情感，绝对不是知道援兵将要到来的轻松感。\n那更像是……一种\r[red]失落\r。）",
            "\t[hero]\b[down,null]（所以，为什么她不跑……总感觉她有什么不寻常的地方……）",
            {
                "type": "move",
                "loc": [
                    6,
                    9
                ],
                "time": 300,
                "keep": true,
                "steps": [
                    "up:1"
                ]
            },
            "\t[晴芸,hero3]\b[down,null]对了，咱现在能不能算是被那个紫发女人罩着了？",
            "\t[hero]\b[down,null]我才不相信她会关注我们的安危，她肯定忙她自己的事情去了。",
            "\t[hero]\b[down,null]我和除灵者之间的关系没有缓和的可能性了。既然这样，我可以放心在需要的时候对它们进行偷袭……",
            {
                "type": "animate",
                "name": "E_love",
                "loc": [
                    6,
                    8
                ],
                "async": true
            },
            "\t[晴芸,hero3]\b[down,null]没错，先下手为强！冲吖！",
            {
                "type": "waitAsync"
            },
            {
                "type": "move",
                "loc": [
                    6,
                    8
                ],
                "time": 100,
                "steps": [
                    "up:1"
                ]
            },
            {
                "type": "follow",
                "name": "hero3.png"
            },
            {
                "type": "playBgm",
                "name": "area10.mp3"
            },
            {
                "type": "setVolume",
                "value": 90,
                "time": 0
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,4": {
            "1": null
        },
        "4,3": {
            "1": null
        },
        "8,3": {
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [50031,50031,50031,50031,50031,50031, 91,50031,50031,50031,50031,50031,50031],
    [334,332, 21,325,148,322,  0,323,148,324, 21,332,334],
    [148,148,148,331,148,  0, 68,  0,148,331,148,148,148],
    [325,  0,148,324, 85,323,  0,322, 85,325,148,  0,324],
    [331,542,148,148,148,148, 85,148,148,148,148,542,331],
    [148, 81,148,148,  0,  0,  0,  0,  0,148,148, 81,148],
    [324,330,148,  0,535,  0,538,  0,535,  0,148,330,325],
    [529,  0,148,  0,  0,535,  0,535,  0,  0,148,  0,529],
    [ 81,148,148,  0,  0,  0,  0,  0,  0,  0,148,148, 81],
    [334,  0,148,148,  0,  0,  0,  0,  0,148,148,  0,334],
    [148,483,148,148,148,148, 83,148,148,148,148,483,149],
    [ 92,  0,480,  0,148, 68,  0, 68,148, 21,  0,  0,149],
    [148,148,  0, 21,541,  0, 33,  0,541,  0,50012, 93,149]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,147,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,50001,  0,  0,  0,  0,  0,  0,  0,  0,  0,50001,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,50001,  0,  0,  0,  0,  0,  0,  0,  0,  0,50002,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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
    "hard1_enemy_ratio": 80,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "weather": [
        "sun",
        5
    ]
}