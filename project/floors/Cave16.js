main.floors.Cave16=
{
    "floorId": "Cave16",
    "title": "特训营深处",
    "name": "特训营深处",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "soil",
    "bgm": null,
    "firstArrive": [
        {
            "type": "pauseBgm"
        },
        {
            "type": "loadBgm",
            "name": "secret.mp3"
        },
        {
            "type": "loadBgm",
            "name": "story2.mp3"
        },
        {
            "type": "loadBgm",
            "name": "boss5.mp3"
        },
        {
            "type": "loadBgm",
            "name": "boss2221.mp3"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.removeMaps(\"East16\", \"Cave6_2\");\n}"
        },
        {
            "type": "if",
            "condition": "core.hasItem('upFly')",
            "true": [
                {
                    "type": "setValue",
                    "name": "item:upFly",
                    "value": "0"
                },
                {
                    "type": "setValue",
                    "name": "item:greenKey",
                    "operator": "+=",
                    "value": "1"
                },
                "检测到有未使用的\\i[upFly]上楼器。自动兑换为\\i[greenKey]绿钥匙。"
            ]
        },
        {
            "type": "if",
            "condition": "core.hasItem('downFly')",
            "true": [
                {
                    "type": "setValue",
                    "name": "item:downFly",
                    "value": "0"
                },
                {
                    "type": "setValue",
                    "name": "item:greenKey",
                    "operator": "+=",
                    "value": "1"
                },
                "检测到有未使用的\\i[downFly]下楼器。自动兑换为\\i[greenKey]绿钥匙。"
            ]
        }
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(flag:Cave19_finish == 1)",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:Cave19_finish",
                    "value": "2"
                },
                {
                    "type": "setVolume",
                    "value": 0,
                    "time": 2000
                },
                {
                    "type": "sleep",
                    "time": 500
                },
                {
                    "type": "animate",
                    "name": "E_surprise",
                    "loc": "hero",
                    "async": true
                },
                {
                    "type": "moveHero",
                    "steps": [
                        "backward:1"
                    ]
                },
                {
                    "type": "playBgm",
                    "name": "secret.mp3",
                    "keep": true
                },
                {
                    "type": "setVolume",
                    "value": 90,
                    "time": 0
                },
                "\t[hero]\b[this,hero]幽！你怎么突然出现在这里？古亦呢？",
                "\t[幽,Nxl_U]放心，我只是让他暂时休息一阵。\n还有刚才在楼上的棕头发和绿头发的两位，我也顺便完成了。",
                {
                    "type": "vibrate",
                    "direction": "horizontal",
                    "time": 500,
                    "speed": 10,
                    "power": 10,
                    "async": true
                },
                {
                    "type": "playSound",
                    "name": "048-Explosion01.ogg"
                },
                "\t[hero]\b[this,hero]完成了？你什么意思？",
                {
                    "type": "waitAsync"
                },
                "\t[幽,Nxl_U]很抱歉刚才擅自偷窥你们，不过我果然看到了一些有趣的事情。",
                "\t[幽,Nxl_U]原来你到处调查的，就是自己的来历。你直接来问我不就行了。",
                "\t[？？,N522]……你知道？",
                "\t[幽,Nxl_U]作为如今械灵的一把手，我的消息可是很灵通的。听我讲个故事，如何？",
                {
                    "type": "animate",
                    "name": "E_dots",
                    "loc": [
                        5,
                        4
                    ]
                },
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[幽,Nxl_U]械灵制造计划自从启动以来，就一直受到某些人的反对，他们固执地认为，将生物进行机械化改造是对生灵的践踏和亵渎。\n我们械灵一族，生来便要承受这些人的恶意。",
                "\t[幽,Nxl_U]我曾经以为，只要我变得足够强，证明自己的存在价值，就能得到他们的理解。\n而作为最先进的\r[yellow]U型械灵\r，我一定有这个能力。",
                "\t[幽,Nxl_U]但是，虽然我在上届比赛展现出远超普通智械的能力，结果却并不是证明了自己的存在价值，而是承受了更多的猜忌，甚至连一些原本持中立态度的人，也开始将我们视为威胁。\n\r[yellow]我的夺冠直接促成了除灵者这一组织的诞生。\r",
                "\t[幽,Nxl_U]当人类不信任你时，你越是强大，他们越惧怕你，越想除掉你。\n即使，你并没有与人类为敌的想法。",
                "\t[幽,Nxl_U]所以，我的制造者，同时也是所有械灵之祖，\r[yellow]秉凌\r大人，制造出了唯一的一台\r[yellow]V型械灵\r。\n这种型号从各方面看起来都更像是智械而不是械灵，并且秉凌大人特意抹去了有关于“薇”的身世的全部信息——",
                "\t[幽,Nxl_U]因为他希望“薇”能像普通的智械一样生存下去，不必承受那些加在我和秉凌大人身上的恶意。",
                "\t[幽,Nxl_U]秉凌大人要我对此事绝对保密。但他怎么也没想到，“薇”会如此执着于寻找自己的身世，所以——",
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[幽,Nxl_U]\\c[20]这个秘密最终还是由我亲自告诉了她，\r[red]就在刚刚\r。\\c",
                {
                    "type": "sleep",
                    "time": 500
                },
                {
                    "type": "playSound",
                    "name": "048-Explosion01.ogg"
                },
                {
                    "type": "vibrate",
                    "direction": "horizontal",
                    "time": 500,
                    "speed": 10,
                    "power": 10,
                    "async": true
                },
                "\t[薇,N522]你……你有什么证据……",
                {
                    "type": "waitAsync"
                },
                "\t[幽,Nxl_U]你出生不久之后，秉凌大人就被那些卑鄙的小人暗杀了。没错，他们一定是觉得，把秉凌大人杀害，就会击垮我们械灵一族。",
                "\t[幽,Nxl_U]原本知道这些事情的，只有我，秉凌大人，以及他最好的朋友——古亦。",
                "\t[幽,Nxl_U]除去那两个老家伙，这世上再也找不到比我更了解你的人了。\n比如，作为最新型号械灵的你，论潜力甚至比我还要略胜一筹，但唯独有一个弱点——",
                {
                    "type": "move",
                    "loc": [
                        6,
                        2
                    ],
                    "time": 200,
                    "keep": true,
                    "steps": [
                        "left:1",
                        "down:1"
                    ]
                },
                "\t[幽,Nxl_U]秉凌大人特意让你的身体排斥寻常械灵最喜欢的黄宝石，而一旦将黄宝石放到你嘴里，你就会忍不住发出奇怪的声音，就像这样……",
                {
                    "type": "playSound",
                    "name": "item.mp3"
                },
                "幽掏出一块黄宝石，塞到了薇的嘴里。",
                {
                    "type": "animate",
                    "name": "E_embarrass",
                    "loc": [
                        5,
                        4
                    ],
                    "async": true
                },
                "\t[薇,N522]唔，唔唔，嘤嘤嘤嘤，嘤嘤嘤嘤嘤嘤嘤嘤！",
                {
                    "type": "move",
                    "loc": [
                        5,
                        3
                    ],
                    "time": 200,
                    "keep": true,
                    "steps": [
                        "backward:1"
                    ]
                },
                "\t[幽,Nxl_U]看，我说的没错吧。",
                {
                    "type": "sleep",
                    "time": 1000
                },
                "\t[薇,N522]我……我竟然是械灵……",
                {
                    "type": "move",
                    "loc": [
                        5,
                        2
                    ],
                    "time": 200,
                    "keep": true,
                    "steps": [
                        "right:1"
                    ]
                },
                {
                    "type": "turnBlock",
                    "direction": "down",
                    "loc": [
                        [
                            6,
                            2
                        ]
                    ]
                },
                "\t[幽,Nxl_U]没错，而且是绝密的、独一无二的22号械灵。\n秉凌大人被暗杀的那一天，我就下定决心，要把所有械灵和其他被压迫的生物从那些人的恶意中解放出来。\n如今，这个计划只差最后几步了。",
                "\t[幽,Nxl_U]我已经取得了除灵者的控制权限，之后只要夺得本次比赛的冠军，拿到大奖，再需要一点点时间——",
                "\t[幽,Nxl_U]我就可以带领被压迫的械灵和其他生物，打倒我们的敌人，然后\r[yellow]建立由我掌舵的社会秩序。\r",
                {
                    "type": "setVolume",
                    "value": 0,
                    "time": 3000,
                    "async": true
                },
                "\t[幽,Nxl_U]对了，拿到大奖之前我还不想与人类产生正面冲突，而现在大家都以为我跟除灵者首领同归于尽了。",
                "\t[幽,Nxl_U]所以我正好可以换个更方便的身份。\n看好了，接下来，就是见证奇迹的时刻——",
                {
                    "type": "waitAsync"
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        6,
                        2
                    ]
                },
                {
                    "type": "animate",
                    "name": "spe62",
                    "loc": [
                        6,
                        2
                    ],
                    "async": true
                },
                {
                    "type": "sleep",
                    "time": 200
                },
                {
                    "type": "setBlock",
                    "number": "N2221",
                    "loc": [
                        [
                            6,
                            2
                        ]
                    ]
                },
                {
                    "type": "setVolume",
                    "value": 90,
                    "time": 0
                },
                {
                    "type": "playBgm",
                    "name": "boss5.mp3",
                    "keep": true
                },
                {
                    "type": "waitAsync"
                },
                {
                    "type": "if",
                    "condition": "(!core.isReplaying())",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.prepareForWarning(6,2);\n}"
                        },
                        {
                            "type": "while",
                            "condition": "core.plugin.isWarning()",
                            "data": [
                                {
                                    "type": "function",
                                    "function": "function(){\ncore.plugin.updateWarning();\n}"
                                },
                                {
                                    "type": "sleep",
                                    "time": 16,
                                    "noSkip": true
                                }
                            ]
                        },
                        {
                            "type": "function",
                            "function": "function(){\ncore.plugin.endWarning();\n}"
                        }
                    ]
                },
                "\t[2 2 2 1,N2221]\r[red]\\c[24]从现在起，吾名，2 2 2 1。\\c\r",
                "\t[hero]\b[this,hero]（错不了，之前在塔顶看到的猩红眼眸……就是她……现在活着的、真正的2221！）",
                {
                    "type": "move",
                    "loc": [
                        9,
                        6
                    ],
                    "time": 100,
                    "keep": true,
                    "steps": [
                        "up:2",
                        "left:1"
                    ]
                },
                "\t[晴芸,hero3]\b[this,8,4]女……女装大佬？\n而且为什么你的名字能带空格？",
                {
                    "type": "animate",
                    "name": "E_sweat",
                    "loc": "hero",
                    "async": true
                },
                "\t[hero]\b[this,hero]（喂喂……现在是吐槽这个的时候吗……）",
                {
                    "type": "waitAsync"
                },
                "\t[2 2 2 1,N2221]对于全身已经有99.891%机械化的我而言，所谓的性别毫无意义。\n不，应该说，这世上能让我觉得有意义的东西并不多。",
                "\t[2 2 2 1,N2221]我如今仍然在乎的事物，你算一个，22号械灵。",
                "\t[薇,N522]……",
                "\t[2 2 2 1,N2221]你直接去\r[yellow]格沃堡\r吧，我已经安排好人负责招待你了。\n一切交给我就行，我掌控械灵和除灵者，再用现在的身份号召智械发动起义，他们绝无翻盘可能！",
                "\t[2 2 2 1,N2221]虽然我刚才已经说出了你的来历，不过如果你跟随我，这个秘密泄露出去也无所谓了。\n在我构建的新秩序中，械灵和智械都将成为高等种族，不论你选择哪一种身份，都将彻底抛弃悲惨的过去，与我共同拥抱光明的未来。",
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[2 2 2 1,N2221]当然，如果你执意要维护这旧秩序，在这里你只能怀揣着绝不能泄露的秘密，当一个最平凡、最卑微的智械——\n我也不拦着你。",
                {
                    "type": "playSound",
                    "name": "Quake.ogg"
                },
                {
                    "type": "vibrate",
                    "direction": "horizontal",
                    "time": 2000,
                    "speed": 10,
                    "power": 10,
                    "async": true
                },
                "\t[2 2 2 1,N2221]最后提醒一句，1分钟后这里就会变为平地。再见。",
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            12
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "animate",
                    "name": "explosion_small",
                    "loc": [
                        6,
                        12
                    ],
                    "async": true
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
                    "name": "fire",
                    "loc": [
                        6,
                        2
                    ]
                },
                {
                    "type": "waitAsync"
                },
                {
                    "type": "sleep",
                    "time": 500
                },
                {
                    "type": "pauseBgm"
                },
                {
                    "type": "changePos",
                    "direction": "down"
                },
                {
                    "type": "animate",
                    "name": "E_surprise",
                    "loc": "hero"
                },
                {
                    "type": "playBgm",
                    "name": "boss11.mp3",
                    "keep": true
                },
                "\t[hero]\b[this,hero]1分钟！他还把传送门破坏了！\n这下真的完了！",
                "\t[薇,N522]……",
                "\t[晴芸,hero3]\b[this,8,4]喂，薇姐姐，你一定有办法出去的吧？",
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[晴芸,hero3]\b[this,8,4]幽很显然知道你是不会被埋在这里的，不然他刚才岂不是白费口舌？",
                {
                    "type": "turnBlock",
                    "direction": "left",
                    "loc": [
                        [
                            5,
                            4
                        ]
                    ]
                },
                "\t[薇,N522]……抱住我，我带你们出去。",
                "\t[晴芸,hero3]\b[this,8,4]我……我就抱着咕姐姐好了……",
                {
                    "type": "move",
                    "loc": [
                        8,
                        4
                    ],
                    "time": 200,
                    "steps": [
                        "down:1",
                        "left:1"
                    ]
                },
                {
                    "type": "follow",
                    "name": "hero3.png"
                },
                "\t[hero]\b[this,hero]……",
                {
                    "type": "moveHero",
                    "steps": [
                        "up:1",
                        "left:1"
                    ]
                },
                "9922张开双臂准备抱上去的时候，一种强烈的危险感笼罩了它的全身——仿佛立在面前的不是柔软的仿生躯体，而是随时可能爆炸的火药桶。",
                "\t[薇,N522]我已经在尽力控制自己体内的力量了，再迟疑我就自己走了。",
                "\t[晴芸,hero3]\b[this,8,4]嘤嘤嘤……",
                "背后是如同抓住救命稻草一般抱住我的腰的晴芸。",
                "不能辜负她的期望。",
                "在这样的想法之下，9922不再迟疑，狠狠地抱住了薇的腰。",
                {
                    "type": "moveHero",
                    "steps": [
                        "left:1"
                    ]
                },
                {
                    "type": "waitAsync"
                },
                {
                    "type": "playSound",
                    "name": "Quake.ogg"
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
                    "type": "playSound",
                    "name": "mteleport.wav"
                },
                {
                    "type": "changeFloor",
                    "floorId": "Cave20",
                    "loc": [
                        6,
                        9
                    ],
                    "direction": "up",
                    "time": 2000
                },
                {
                    "type": "waitAsync"
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {
        "6,9": [
            {
                "type": "confirm",
                "text": "接下来是一段较长的剧情，是否全部跳过？",
                "yes": [
                    {
                        "type": "unfollow",
                        "name": "hero2.png"
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "Cave20",
                        "loc": [
                            6,
                            9
                        ],
                        "direction": "up",
                        "time": 800
                    },
                    {
                        "type": "exit"
                    }
                ],
                "no": []
            },
            {
                "type": "pauseBgm"
            },
            "\t[？？]来了。",
            {
                "type": "playSound",
                "name": "startup.wav"
            },
            {
                "type": "setValue",
                "name": "flag:lightRadius",
                "value": "6410"
            },
            {
                "type": "function",
                "function": "function(){\ncore.drawMap();\n}"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[hero]\b[down,null]又见面了，我该说什么呢？果然是你？",
            "\t[芳芷,hero2]\b[down,null]古亦大人！",
            "\t[古亦,N605]\b[this,6,1]咳咳，我好得很，不用担心我。\n就是刚才太黑了，我真的好想……哦不，是好害怕她直接过来把我扑倒做什么奇怪的事情。",
            {
                "type": "animate",
                "name": "E_sweat",
                "loc": "hero",
                "async": true
            },
            "\t[hero]\b[down,null]（？？？这画风不对啊？）",
            {
                "type": "waitAsync"
            },
            "\t[芳芷,hero2]\b[down,null]所以这到底是怎么回事？",
            {
                "type": "turnBlock",
                "direction": "down",
                "loc": [
                    [
                        6,
                        5
                    ]
                ]
            },
            "\t[？？,N516]\b[this,6,5]很简单，特训营里面的一切都是我一手造就的。\n我的目的只有一个，那就是——知道我从哪来。",
            "\t[？？,N516]\b[this,6,5]一般的智械身上都会有一些出厂信息，型号、特长、平均使用年限等等。\n但我的身上没有。",
            "\t[？？,N516]\b[this,6,5]我已经暗中调查过许多人了，但仍然没有找到关于我的任何信息，就好像……我的制造者在有意躲避我。",
            "\t[？？,N516]\b[this,6,5]然后我遇到了你。从见到你的第一眼，我就认定我们之间有着特别的联系。\n于是，我打算从调查你的来历开始着手。",
            "\t[hero]\b[down,null]等一下，你为什么认定我们之间有什么特别的关联？我明明……",
            "\t[？？,N516]\b[this,6,5]原因嘛，很简单……",
            "神秘的紫发女子轻轻地把护目镜推到了头顶。",
            {
                "type": "setBlock",
                "number": "N606",
                "loc": [
                    [
                        6,
                        5
                    ]
                ]
            },
            {
                "type": "if",
                "condition": "(!core.isReplaying())",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.plugin.prepareForWarning(6,5);\n}"
                    },
                    {
                        "type": "while",
                        "condition": "core.plugin.isWarning()",
                        "data": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.updateWarning();\n}"
                            },
                            {
                                "type": "sleep",
                                "time": 16,
                                "noSkip": true
                            }
                        ]
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.plugin.endWarning();\n}"
                    }
                ]
            },
            {
                "type": "playBgm",
                "name": "secret.mp3",
                "keep": true
            },
            "\t[hero]\b[down,null]……几乎一模一样的容貌。",
            "\t[晴芸,hero3]\b[down,null]其实仔细看还是有一点不同的呀！而且就算长得完全一样，说不定只是恰好用了同一个模子呢。",
            "\t[？？,N606]\b[this,6,5]没错，用了同一个模子，这就是我想要的信息。",
            "\t[？？,N606]\b[this,6,5]很幸运，关于你的信息并没有完全被抹去，借着9922这个型号名，我最终找到了这里。",
            "\t[古亦,N605]\b[this,6,1]说了多少次了，9922这个型号只是我设想的未完成品，你怎么就是不信呢！",
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
            "\t[？？,N606]\b[this,6,5]是吗，你也说了你以前没见过我。\n那么，现在请你告诉我，为什么你设想的未完成品的面貌，与我一模一样呢？",
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": [
                    6,
                    1
                ]
            },
            "\t[古亦,N605]\b[this,6,1]呵，原来如此，你拉着我在这小黑屋等了这么久，就是为了等她……\n看来还是瞒不过去啊。那么，我实话实说好了。",
            "\t[古亦,N605]\b[this,6,1]我的确知道你的来历。但是，这是绝密信息，我发过誓，绝对不能把这个信息外传。",
            {
                "type": "move",
                "loc": [
                    6,
                    5
                ],
                "time": 50,
                "keep": true,
                "steps": [
                    "up",
                    "up",
                    "up"
                ]
            },
            {
                "type": "playSound",
                "name": "kn_sword.wav"
            },
            {
                "type": "moveHero",
                "time": 100,
                "async": true,
                "steps": [
                    "up",
                    "up"
                ]
            },
            "\t[芳芷,hero2]\b[down,null]等等，你要做什么，有话好说！",
            {
                "type": "waitAsync"
            },
            "\t[古亦,N605]\b[this,6,1]把刀放下，这招对我没用。\n你即使杀我，也得不到你想要的信息，何必这样装腔作势？",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": [
                    6,
                    2
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    2
                ],
                "time": 300,
                "keep": true,
                "steps": [
                    "down",
                    "down"
                ]
            },
            {
                "type": "turnBlock",
                "direction": "down",
                "loc": [
                    [
                        6,
                        4
                    ]
                ]
            },
            "\t[？？,N606]\b[this,6,4]你看，就像这样，这老家伙说什么也不告诉我。\n真相明明就在眼前，但我却无法得到。",
            {
                "type": "setVolume",
                "value": 0,
                "time": 2000
            },
            {
                "type": "turnBlock",
                "direction": "right",
                "loc": [
                    [
                        6,
                        4
                    ]
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    4
                ],
                "time": 300,
                "keep": true,
                "steps": [
                    "backward",
                    "backward"
                ]
            },
            "\t[？？,N606]\b[this,4,4]所以我们换个话题吧。\n看到你设想的未来型号智械站在你面前，你有什么感受？",
            {
                "type": "moveHero",
                "time": 100,
                "steps": [
                    "up"
                ]
            },
            "\t[古亦,N605]\b[this,6,1]……",
            {
                "type": "move",
                "loc": [
                    6,
                    1
                ],
                "time": 300,
                "keep": true,
                "steps": [
                    "down"
                ]
            },
            "\t[古亦,N605]\b[this,6,2]真的是你……而且你还掌握了\r[yellow]皇极徽章\r的力量！\n难道说，你真的成功了……成功地接替了\r[yellow]那个家伙\r……",
            "\t[hero]\b[down,null]你也知道这个徽章的来历？\n那个家伙是谁？",
            "\t[古亦,N605]\b[this,6,2]嗯……就让我用 VR 带你回顾一下过去吧。\n这位紫头发的美女，不介意吧？",
            "\t[？？,N606]\b[this,4,4]我当然要跟你们一起看。以前发生了什么，我也要了解。",
            "\t[芳芷,hero2]\b[down,null]我知道以前发生的事情，就不陪了。\n我有点担心2221，我去找她。",
            "\t[晴芸,hero3]\b[down,null]嗯，那，我就在这里等着。",
            {
                "type": "unfollow",
                "name": "hero2.png"
            },
            {
                "type": "unfollow",
                "name": "hero3.png"
            },
            {
                "type": "show",
                "loc": [
                    [
                        9,
                        6
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "setBlock",
                "number": "hero2",
                "loc": [
                    [
                        6,
                        8
                    ]
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    8
                ],
                "time": 200,
                "steps": [
                    "down",
                    "down",
                    "down",
                    "down"
                ]
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": [
                    6,
                    2
                ]
            },
            "\t[古亦,N605]好，就我们三个，来吧。",
            {
                "type": "playSound",
                "name": "mteleport.wav"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        9
                    ]
                ],
                "remove": true
            },
            {
                "type": "changeFloor",
                "floorId": "Cave17",
                "loc": [
                    7,
                    1
                ],
                "direction": "down",
                "time": 1000
            }
        ],
        "6,12": [
            "\t[hero]现在没必要回去。"
        ],
        "9,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,11": [
            {
                "type": "while",
                "condition": "true",
                "data": [
                    {
                        "type": "choices",
                        "text": "\t[亲民装置,X30023]准备进行本章的最终战吧，建议准备7000w以上的hp。\n如果你的生命值太少，你可以在这里将钥匙兑换为血量。\n最终战过后进行计分时，钥匙将可以兑换到更多血量。",
                        "choices": [
                            {
                                "text": "1黄钥匙换175万血",
                                "color": [
                                    255,
                                    247,
                                    90,
                                    1
                                ],
                                "need": "item:yellowKey>0",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "status:hp>100000000",
                                        "true": [
                                            "\t[亲民装置,X30023]目标生命值过多，兑换失败。",
                                            {
                                                "type": "exit"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "setValue",
                                                "name": "status:hp",
                                                "operator": "+=",
                                                "value": "1750000"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:yellowKey",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "animate",
                                                "name": "heal2",
                                                "loc": "hero",
                                                "async": true
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "1蓝钥匙换3黄钥匙",
                                "color": [
                                    106,
                                    103,
                                    255,
                                    1
                                ],
                                "need": "item:blueKey>0",
                                "condition": "!switch:A",
                                "action": [
                                    {
                                        "type": "playSound",
                                        "name": "pickKey.wav"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:blueKey",
                                        "operator": "-=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:yellowKey",
                                        "operator": "+=",
                                        "value": "3"
                                    }
                                ]
                            },
                            {
                                "text": "取消",
                                "action": [
                                    {
                                        "type": "exit"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [90042,90065,90065,90065,90065,90065,90065,90065,90065,90065,90065,90065,90040],
    [90042,30026,  0,  0,30025,  0,605,  0,30025,  0,  0,30026,90040],
    [90042,30032,  0,  0,30031,  0,  0,  0,30031,  0,  0,30032,90040],
    [90042,  0,30027,  0,  0,  0,  0,  0,  0,  0,30027,  0,90040],
    [90042,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,90040],
    [90042,30004,30005,  0,  0,  0,523,  0,  0,  0,30004,30005,90040],
    [90042,30010,30011,  0,  0,  0,  0,  0,  0,387,30010,30011,90040],
    [90042,30016,30017,  0,  0,  0,  0,  0,  0,  0,30016,30017,90040],
    [90042,  0,30033,  0,  0,  0,  0,  0,  0,  0,30033,  0,90040],
    [90042,  0,  0,  0,  0,90007,  0,90007,  0,  0,  0,  0,90040],
    [90042,30026,  0,  0,90007,  0,  0,  0,90007,  0,  0,30026,90040],
    [90042,30032,  0,  0,90007,30023,  0,  0,90007,  0,  0,30032,90040],
    [90036,90033,90033,90033,90033,90034, 89,90032,90033,90033,90033,90033,90035]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,30000,30001,  0,  0,  0,  0,  0,  0,  0,30000,30001,  0],
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

],
    "fg2map": [

],
    "hard1_enemy_ratio": 80,
    "color": [
        0,
        0,
        0,
        0.99
    ],
    "underGround": false,
    "beforeBattle": {},
    "cannotMoveIn": {}
}