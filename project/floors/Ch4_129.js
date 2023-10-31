main.floors.Ch4_129=
{
    "floorId": "Ch4_129",
    "title": "千虹广场-9",
    "name": "千虹广场-9",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "area21.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0,
            "w": 416,
            "h": 416
        }
    ],
    "ratio": 50,
    "defaultGround": "T817",
    "bgm": "area21.mp3",
    "color": [
        0,
        0,
        0,
        0.1
    ],
    "firstArrive": [
        {
            "type": "if",
            "condition": "flags.hard==1",
            "true": [
                {
                    "type": "loadBgm",
                    "name": "area7.mp3"
                },
                {
                    "type": "loadBgm",
                    "name": "boss2221.mp3"
                }
            ],
            "false": [
                {
                    "type": "loadBgm",
                    "name": "boss2221.mp3"
                }
            ]
        },
        {
            "type": "move",
            "loc": [
                6,
                8
            ],
            "time": 100,
            "keep": true,
            "async": true,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                6,
                5
            ],
            "time": 100,
            "keep": true,
            "steps": [
                "down:1"
            ]
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "animate",
            "name": "hand",
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "animate",
            "name": "skill10",
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "animate",
            "name": "crossattack",
            "loc": [
                6,
                6
            ],
            "async": true
        },
        {
            "type": "move",
            "loc": [
                6,
                7
            ],
            "time": 100,
            "keep": true,
            "async": true,
            "steps": [
                "backward:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                6,
                6
            ],
            "time": 50,
            "keep": true,
            "async": true,
            "steps": [
                "up:2"
            ]
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[2 2 2 1,N2221]\b[down,null]你好像没有你自称的那么厉害啊。\n而且，我现在有人数优势了。",
        {
            "type": "turnBlock",
            "direction": "left",
            "loc": [
                [
                    6,
                    8
                ]
            ]
        },
        {
            "type": "sleep",
            "time": 300
        },
        "\t[2 2 2 1,N2221]\b[down,null]这一路上也很不容易吧，发表点感想？",
        {
            "type": "moveHero",
            "time": 100,
            "steps": [
                "right:2"
            ]
        },
        "\t[hero]\b[down,null]福博，你该下地狱。",
        {
            "type": "turnBlock",
            "direction": "up",
            "loc": [
                [
                    6,
                    8
                ]
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[福博,E859]\b[down,null]嘿嘿，呵哈哈哈！\n不得不承认你这紫不拉几的玩意确实有点能耐，竟然在如此短的时间内变强了这么多，可谓是令我刮目相看。",
        "\t[福博,E859]\b[down,null]不过也就到此为止了。你们很快就要面对被封印者当中最强大的存在，然后意识到，你们所做的一切努力都是徒劳！",
        "\t[福博,E859]\b[down,null]我觉得现在很适合讲点历史，嘿嘿……你知道吗，我以前曾经是支持械灵技术的——\n直到有一对兄弟在械灵化改造下彻底失控。\n械灵化，在使用机械放大他们的能力的同时，也放大了他们人性中的恶念，把他们变成了无法沟通的怪物。",
        "\t[hero]\b[down,null]我听说过这件事了。他们选择的融合对象是至尊碎片，明明是融合对象过于危险，不是械灵化技术本身的问题。",
        "\t[福博,E859]\b[down,null]现在争论是谁的错还有什么意义吗？\n我们是很\r[orange]善良\r的，即使这样我们也没有将这两人抹杀，而是把他们封印在了摩宇城的地下，说不定有朝一日能把他们变回来。",
        "\t[福博,E859]\b[down,null]给这两人设置的封印有许多重，而主要起作用的那一道最为强大，连我也无法立即解开。\n它的位置，就在我们脚下。",
        "\t[福博,E859]\b[down,null]感谢你刚才与我战斗时所爆发的力量，这最强的封印也已经遭受不可逆的破坏，很快就要完全解开了！",
        "\t[2 2 2 1,N2221]\b[down,null]于是到最后这两人还是成为了你的工具人打手，这就是你所谓的善良？",
        "\t[福博,E859]\b[down,null]桀桀，没有人能阻止这个世界的毁灭！\n2 2 2 1是吧，再来与我大战三百回合！",
        {
            "type": "playSound",
            "name": "se_power0.wav"
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
            "name": "yongchang",
            "loc": [
                6,
                4
            ]
        },
        {
            "type": "sleep",
            "time": 800
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    8
                ]
            ],
            "remove": true
        },
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
            "name": "thunder4",
            "loc": [
                6,
                10
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "blackmagic",
            "loc": [
                6,
                4
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "blackmagic",
            "loc": [
                6,
                8
            ]
        },
        {
            "type": "animate",
            "name": "yidaoliangduan",
            "loc": [
                2,
                10
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "yidaoliangduan",
            "loc": [
                6,
                10
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "yidaoliangduan",
            "loc": [
                10,
                10
            ]
        },
        {
            "type": "setValue",
            "name": "flag:setBlock_disable_refresh",
            "value": "true"
        },
        {
            "type": "function",
            "function": "function(){\nfor (var i = 0; i < 13; ++i) {\n\tfor (var j = 9; j < 13; ++j) {\n\t\tcore.hideBgFgMap(\"bg\", [i, j]);\n\t\tif (j == 9) {\n\t\t\tcore.setBlock(\"airwall\", i, j);\n\t\t} else {\n\t\t\tcore.removeBlock(i, j);\n\t\t}\n\t}\n}\ncore.drawMap();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:setBlock_disable_refresh",
            "value": "false"
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[hero]\b[down,null]这福博竟然还有底牌……不知2221能否收拾掉他，不过这都与我无关了。",
        {
            "type": "moveHero",
            "time": 100,
            "steps": [
                "down:1"
            ]
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]\b[down,null]被扭曲的空间，深不见底的星空，隐隐传来极其强大的气息……\n这种波动，没错，就是“那个”！",
        "\t[hero]\b[down,null]只能依靠自己。\n是时候了结这一切了。"
    ],
    "eachArrive": [],
    "parallelDo": null,
    "events": {
        "6,9": {
            "trigger": "action",
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "choices",
                    "text": "\t[系统提示]下去就回不来了。",
                    "choices": [
                        {
                            "text": "如今，我无人可挡！",
                            "color": [
                                255,
                                215,
                                0,
                                1
                            ],
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "core.getBlockId(6,1)",
                                    "true": [
                                        "\t[hero]……上方的神像。",
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                },
                                {
                                    "type": "playSound",
                                    "name": "jump.mp3"
                                },
                                {
                                    "type": "jumpHero",
                                    "dxy": [
                                        0,
                                        7
                                    ],
                                    "time": 500
                                },
                                {
                                    "type": "playSound",
                                    "name": "mteleport.wav"
                                },
                                {
                                    "type": "changeFloor",
                                    "floorId": "Ch4_130",
                                    "loc": [
                                        6,
                                        -1
                                    ],
                                    "time": 1000
                                }
                            ]
                        },
                        {
                            "text": "再准备一下",
                            "action": []
                        }
                    ]
                }
            ]
        },
        "6,1": [
            {
                "type": "if",
                "condition": "flags.hard == 1",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[系统提示]即将统计成绩，确认要继续吗？",
                        "choices": [
                            {
                                "text": "继续",
                                "color": [
                                    255,
                                    215,
                                    0,
                                    1
                                ],
                                "action": []
                            },
                            {
                                "text": "再准备一下",
                                "action": [
                                    {
                                        "type": "exit"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.setFlag(\"hard1_score\", core.itemCount(\"redKey\") * 10000 + core.itemCount(\"I_hj\"));\n}"
                    },
                    "\t[神像,moneyShop]你来了。恭喜通关，该计算你的得分了。\n1红=10000分，1黄极石=1分，总共\r[yellow]${flag:hard1_score}\r分。",
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    "\t[hero]？？？不会吧，故事还没结束呢，这就没了？",
                    "\t[神像,moneyShop]是的，没了——\r[yellow]在这个难度下\r。\n你所选择的是简化难度的《\r[yellow]至尊之路\r》，你之前所面对的敌人都是弱化版，与这样的敌人战斗并不能将你的战斗技能磨练到真正的极致。因此，我还不能放任你直面那真正的恐怖。",
                    "\t[hero]可是，我觉得我现在状态非常好，哪怕后面的敌人变成正常难度，我也能乱杀它们。",
                    {
                        "type": "if",
                        "condition": "core.itemCount(\"redKey\") >= 60",
                        "true": [
                            "\t[神像,moneyShop]……",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[神像,moneyShop]看在你打得还不错的份上，给你一个机会。\n你可以直接体验正常难度下后面的内容。\n当然，你也可以选择结束本轮游戏，以正常难度从头开始。",
                            {
                                "type": "choices",
                                "text": "\t[神像,moneyShop]做出你的选择。\n结束本轮游戏，立即离开这里。\n或者重置你当前的状态，以\r[aqua]正常难度\r继续游戏。",
                                "choices": [
                                    {
                                        "text": "结束本轮游戏（提交成绩）",
                                        "action": [
                                            "\t[神像,moneyShop]我们下轮游戏再见。",
                                            {
                                                "type": "playSound",
                                                "name": "mteleport.wav"
                                            },
                                            {
                                                "type": "changeFloor",
                                                "floorId": "Ch4_129_2",
                                                "loc": [
                                                    6,
                                                    6
                                                ],
                                                "direction": "down",
                                                "time": 1000
                                            }
                                        ]
                                    },
                                    {
                                        "text": "继续游戏（重置所有状态）",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.status.hero.hp = 5000000000;\ncore.status.hero.mana = 2000;\ncore.setItem(\"yellowKey\", 0);\ncore.setItem(\"blueKey\", 0);\ncore.setItem(\"redKey\", 0);\ncore.updateStatusBar();\n}"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I_hj",
                                                "value": "0"
                                            },
                                            {
                                                "type": "animate",
                                                "name": "yongchang",
                                                "loc": "hero"
                                            },
                                            "\t[神像,moneyShop]状态重置完毕。\n这个给你作为奖励，勇敢地去面对最后的战斗吧，祝你好运……",
                                            {
                                                "type": "setValue",
                                                "name": "item:I_energyOrb",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "downPortal",
                                                "loc": [
                                                    [
                                                        6,
                                                        9
                                                    ]
                                                ]
                                            },
                                            {
                                                "type": "hide",
                                                "loc": [
                                                    [
                                                        6,
                                                        1
                                                    ]
                                                ],
                                                "remove": true
                                            },
                                            {
                                                "type": "animate",
                                                "name": "explosion_small",
                                                "loc": [
                                                    6,
                                                    1
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "false": [
                            "\t[神像,moneyShop]这只不过是咸红过多给你的错觉而已。\n如果你想证明自己的能力，请至少带着\r[yellow]60\r把红钥匙见到我。",
                            "\t[hero]（60把红钥匙，只要稍微细心一点应该就很简单……毕竟敌人都这么弱……）",
                            "\t[神像,moneyShop]而且，你可以无限制地尝试。\n另外，如果你选择的是正常难度，只要见到我就可以获得直面真相的资格。",
                            "\t[hero]这样吗……对了，你到底是谁？",
                            "\t[神像,moneyShop]再见。",
                            "\t[hero]哎等等……",
                            {
                                "type": "setValue",
                                "name": "status:money",
                                "value": "flag:hard1_score"
                            },
                            {
                                "type": "setValue",
                                "name": "item:yellowKey",
                                "value": "0"
                            },
                            {
                                "type": "setValue",
                                "name": "item:blueKey",
                                "value": "0"
                            },
                            {
                                "type": "setValue",
                                "name": "item:redKey",
                                "value": "0"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I_hj",
                                "value": "0"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I_superGreenKey",
                                "value": "0"
                            },
                            {
                                "type": "playSound",
                                "name": "mteleport.wav"
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "Ch4_129_2",
                                "loc": [
                                    6,
                                    6
                                ],
                                "direction": "down",
                                "time": 1000
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "choices",
                        "text": "\t[神像,moneyShop]将剩余的所有钥匙换成生命值。\n1黄=5000w血，1蓝=3黄，1红=9黄。",
                        "choices": [
                            {
                                "text": "现在就换",
                                "color": [
                                    255,
                                    215,
                                    0,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "function",
                                        "function": "function(){\nvar count = core.itemCount(\"yellowKey\") + 3 * core.itemCount(\"blueKey\") + 9 * core.itemCount(\"redKey\");\ncore.status.hero.hp += count * 50000000;\ncore.setItem(\"yellowKey\", 0);\ncore.setItem(\"blueKey\", 0);\ncore.setItem(\"redKey\", 0);\ncore.updateStatusBar();\n}"
                                    },
                                    {
                                        "type": "animate",
                                        "name": "heal2",
                                        "loc": "hero"
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    "\t[神像,moneyShop]转换完毕。\n这个给你作为奖励，勇敢地去面对最后的战斗吧，祝你好运……",
                                    {
                                        "type": "setValue",
                                        "name": "item:I_energyOrb",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "downPortal",
                                        "loc": [
                                            [
                                                6,
                                                9
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "hide",
                                        "loc": [
                                            [
                                                6,
                                                1
                                            ]
                                        ],
                                        "remove": true
                                    },
                                    {
                                        "type": "animate",
                                        "name": "explosion_small",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "暂时不换",
                                "action": []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "Ch4_128",
            "loc": [
                12,
                6
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [200,200,200,200,200,200,200,200,200,200,200,200,200],
    [200, 23,703, 23,200,  7,131,  8,200, 23,703, 23,200],
    [200,200,200,702,200,  0,  0,  0,200,702,200,200,200],
    [200, 23,703,702,702,  0,  0,  0,702,702,702,702,200],
    [200,200,200,200,  0,  0,  0,  0,  0,200,200,702,200],
    [200, 23,703,  0,  0,  0,859,  0,  0,  0,200, 23,200],
    [200,200,200,  0,  0,  0,  0,  0,  0,  0,200,200,200],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,200],
    [200,  0,  0,  0,  0,  0,845,  0,  0,  0,  0,  0,200],
    [200,200,200, 83,200,  0,  0,  0,200, 83,200,200,200],
    [200, 81, 83, 81,200,  0,  0,  0,200, 81, 83, 81,200],
    [200,853,200,853,200,  0,  0,  0,200,853,200,853,200],
    [200,200,200,200,200,200,  0,200,200,200,200,200,200]
],
    "hard1_enemy_ratio": 95,
    "bgmap": [
    [754,754,754,754,754,754,754,754,754,754,754,754,754],
    [754,754,754,754,754,754,754,754,754,754,754,754,754],
    [754,754,754,754,754,754,754,754,754,754,754,754,754],
    [754,754,754,754,754,754,754,754,754,754,754,754,754],
    [754,754,754,754,754,754,754,754,754,754,754,754,754],
    [754,754,754,754,754,754,754,754,754,754,754,754,754],
    [754,754,754,754,754,754,754,754,754,754,754,754,754],
    [754,754,754,754,754,754,754,754,754,754,754,754,754],
    [754,754,754,754,754,754,754,754,754,754,754,754,754],
    [754,754,754,754,754,754,754,754,754,754,754,754,754],
    [754,754,754,754,754,754,754,754,754,754,754,754,754],
    [754,754,754,754,754,754,754,754,754,754,754,754,754],
    [754,754,754,754,754,754,754,754,754,754,754,754,754]
],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 92,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "downFloor": [
        0,
        7
    ],
    "weather": [
        "rain",
        1
    ],
    "flyPoint": [
        0,
        7
    ]
}