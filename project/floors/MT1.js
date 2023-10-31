main.floors.MT1=
{
    "floorId": "MT1",
    "title": "主塔 1 层",
    "name": "主塔-1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "autoText",
            "text": "第一章\n古塔探秘",
            "time": 2000
        },
        {
            "type": "if",
            "condition": "flag:hard==1",
            "true": [
                {
                    "type": "choices",
                    "text": "\t[系统提示]简化难度下，此区域怪物攻防是普通难度的90%。\n另外，送你3把黄钥匙\\i[yellowKey]。",
                    "choices": [
                        {
                            "text": "我知道了",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "item:yellowKey",
                                    "operator": "+=",
                                    "value": "3"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.setBgLight([\n\t[5, 10, 150],\n\t[7, 10, 150],\n\t[9, 3, 150]\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "10,11": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [
                    {
                        "type": "confirm",
                        "text": "确认要给他5把蓝钥匙吗？",
                        "yes": [
                            {
                                "type": "if",
                                "condition": "(core.itemCount('blueKey') < 5)",
                                "true": [
                                    "\t[奇怪的人,thief]你钥匙不够啊。",
                                    {
                                        "type": "animate",
                                        "name": "E_unhappy",
                                        "loc": "hero"
                                    },
                                    {
                                        "type": "exit"
                                    }
                                ]
                            },
                            {
                                "type": "setValue",
                                "name": "item:blueKey",
                                "operator": "-=",
                                "value": "5"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:1Fmission",
                                "value": "1"
                            },
                            "\t[奇怪的人,thief]……有点能耐，竟然真的找来了5把蓝钥匙。",
                            {
                                "type": "animate",
                                "name": "E_love",
                                "loc": "hero"
                            },
                            "\t[奇怪的人,thief]那么就谢谢你了，再见。",
                            {
                                "type": "animate",
                                "name": "E_dots",
                                "loc": "hero"
                            },
                            {
                                "type": "playSound",
                                "name": "jump.mp3"
                            },
                            {
                                "type": "jumpHero",
                                "time": 300
                            },
                            {
                                "type": "playSound",
                                "name": "jump.mp3"
                            },
                            {
                                "type": "jumpHero",
                                "time": 300
                            },
                            "\t[奇怪的人,thief]……",
                            {
                                "type": "playSound",
                                "name": "jump.mp3"
                            },
                            {
                                "type": "jumpHero",
                                "time": 300
                            },
                            {
                                "type": "playSound",
                                "name": "jump.mp3"
                            },
                            {
                                "type": "jumpHero",
                                "time": 300
                            },
                            "\t[奇怪的人,thief]我从来没说过要给你报酬吧？没有吧？",
                            {
                                "type": "animate",
                                "name": "E_angry",
                                "loc": "hero",
                                "async": true
                            },
                            {
                                "type": "playSound",
                                "name": "jump.mp3"
                            },
                            {
                                "type": "jumpHero",
                                "time": 200
                            },
                            {
                                "type": "playSound",
                                "name": "jump.mp3"
                            },
                            {
                                "type": "jumpHero",
                                "time": 200
                            },
                            {
                                "type": "playSound",
                                "name": "jump.mp3"
                            },
                            {
                                "type": "jumpHero",
                                "time": 200
                            },
                            "\t[奇怪的人,thief]……哈哈哈哈，看你这又着急又摆不出表情的样子，哈哈……",
                            "\t[奇怪的人,thief]算了，本大爷心情好，就给你点东西作为奖励吧。",
                            {
                                "type": "setValue",
                                "name": "item:greenKey",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "animate",
                                "name": "E_question",
                                "loc": "hero"
                            },
                            "\t[奇怪的人,thief]这绿钥匙可是极其稀有的，据说已经绝版了，怎么样，我够意思吧？",
                            {
                                "type": "animate",
                                "name": "E_sweat",
                                "loc": "hero"
                            },
                            "\t[奇怪的人,thief]……怎么，嫌不够？我把这绿钥匙给你我已经亏爆了好吗！",
                            {
                                "type": "animate",
                                "name": "E_unhappy",
                                "loc": "hero"
                            },
                            "\t[奇怪的人,thief]不信？算了，你爱信不信，我要是想走你以为你能拦得住我？",
                            "\t[奇怪的人,thief]再见，不服来楼上找我。",
                            {
                                "type": "jump",
                                "from": [
                                    10,
                                    11
                                ],
                                "to": [
                                    10,
                                    9
                                ],
                                "time": 50,
                                "keep": true
                            },
                            {
                                "type": "changePos",
                                "direction": "up"
                            },
                            {
                                "type": "move",
                                "loc": [
                                    10,
                                    9
                                ],
                                "time": 50,
                                "steps": [
                                    "up",
                                    "left",
                                    "left",
                                    "left",
                                    "left",
                                    "left",
                                    "up",
                                    "up",
                                    "up",
                                    "up",
                                    "up",
                                    "up",
                                    "up",
                                    "left",
                                    "left",
                                    "left",
                                    "left"
                                ]
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "no": []
                    }
                ],
                "false": [
                    "\t[奇怪的人,thief]嘿，哪里来的小姑娘，这里可不是你应该呆的地方。",
                    {
                        "type": "animate",
                        "name": "E_question",
                        "loc": "hero"
                    },
                    "\t[奇怪的人,thief]……",
                    "\t[奇怪的人,thief]我艹，原来是机器人，这年头怎么什么东西都能娘化，还这么逼真，差点把老子骗了。",
                    {
                        "type": "animate",
                        "name": "E_sweat",
                        "loc": "hero"
                    },
                    "\t[奇怪的人,thief]这样的话，我倒是有个事情委托你去做。",
                    {
                        "type": "animate",
                        "name": "E_question",
                        "loc": "hero"
                    },
                    "\t[奇怪的人,thief]给我5把蓝钥匙。对，5把。",
                    {
                        "type": "animate",
                        "name": "E_unhappy",
                        "loc": "hero"
                    },
                    "\t[奇怪的人,thief]你怎么搞来我就不管了，赶快的，我可不会一直在这等着。",
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "true"
                    },
                    {
                        "type": "if",
                        "condition": "(!flag:arrived_9F)",
                        "true": [
                            "\t[系统提示]如果你发现自己过早地与这个NPC对话而后悔了，可以读取自动存档（快捷键A）。"
                        ]
                    }
                ]
            }
        ],
        "6,11": [
            {
                "type": "playSound",
                "name": "hint.mp3"
            },
            {
                "type": "if",
                "condition": "flag:hard == 1",
                "true": [
                    "\t[复读机]在你正式开始探索之前，需要我复读一遍基本的战斗规则吗？",
                    {
                        "type": "confirm",
                        "text": "是否需要复读一遍战斗规则？",
                        "yes": [
                            "\t[复读机]听好了，我只复读一遍。",
                            "\t[复读机]每当你与一只怪物战斗时，战斗以回合制的方式进行。你首先攻击怪物一次，然后怪物攻击你一次，直到一方生命为0。\n每次攻击的伤害是攻击方的\r[orange]攻击力\r减去对方的\r[aqua]防御力\r。",
                            "\t[复读机]\b[down,null]例如，现在你有8攻击5防御，你前方不远处的\\i[greenSlime]\r[yellow]小莱姆\r拥有100生命16攻击0防御。\n所以你每次攻击对它造成8-0=\r[yellow]8\r伤害，小莱姆每次攻击对你造成16-5=\r[yellow]11\r伤害。",
                            "\t[复读机]\b[down,null]你需要100/8向上取整共13次攻击才能击败它。由于你首先攻击，所以整个战斗过程中会被它攻击12次，战斗总伤害是11*12=\r[yellow]132\r。",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[复读机]\\i[redGem]红宝石可以提升你的攻击力，\\i[blueGem]蓝宝石可以提升你的防御力。\n\\i[greenGem]绿宝石可以提升你的护盾，每场战斗都会为你抵挡固定的伤害。\n如果你不是很明白，只需要记住，请优先尝试获取\r[yellow]宝石\r。\n以上便是战斗规则的基本内容。"
                        ],
                        "no": []
                    }
                ]
            },
            "\t[复读机]一把钥匙\\i[redKey]只能开一扇对应颜色的门\\i[redDoor]。有些门不是必开的，但开启能让你的探索更加顺利，其中利弊还请自己权衡。",
            "\t[复读机]\b[down,11,5]比如，看到上面那个蓝门\\i[blueDoor]了吗，收益特别大，赶快去开！\n之后我就不会再给你提示了。",
            {
                "type": "hide"
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0,  0,202,  0,  1,  0,205, 29, 32,  0,  1],
    [  1,  1,  1,  1,  1,  0,  1, 81,  1,  1,  1, 81,  1],
    [  1,  0, 27,  0,  1, 31,  1,  0, 21,  1, 27,210,  1],
    [  1, 22,  0,210, 81,  0,  1,205, 31,  1, 28, 21,  1],
    [  1,  0, 28,  0,  1, 21,  1, 81,  1,  1,  1, 82,  1],
    [  1,  1,  1,  1,  1,  0,  1,  0, 31,  0, 21,  0,  1],
    [  1,  0, 31,  0,  1,201,  1,  1,  1,  1,  1,202,  1],
    [  1, 31,  0,201, 81,  0, 73,  0, 81,  0, 31,  0,  1],
    [  1,  1, 81,  1,  1, 32,  0, 32,  1,  1, 81,  1,  1],
    [  1,  0,202,  0,  1,  1, 83,  1,  1,  0,  0,  0,  1],
    [  1, 21, 27, 31,  1,  0,  0,  0,  1,  0,123,  0,  1],
    [  1,  1,  1,  1,  1,  0, 88,  0,  1,  1,  1,  1,  1]
],
    "bgm": "area1.mp3",
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,103,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,103,  0,103,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "color": [
        0,
        0,
        0,
        0.5
    ],
    "hard1_enemy_ratio": 90,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}