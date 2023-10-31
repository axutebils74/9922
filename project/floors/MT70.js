main.floors.MT70=
{
    "floorId": "MT70",
    "title": "主塔 70 层",
    "name": "塔顶？",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [
        {
            "name": "area7_2.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 10,
    "defaultGround": "ground7",
    "bgm": "area7.mp3",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:disableFly",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:zone_animate",
            "value": "\"thunder\""
        },
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
            "time": 0
        },
        {
            "type": "moveHero",
            "time": 300,
            "steps": [
                "up:2"
            ]
        },
        {
            "type": "animate",
            "name": "explosion_small",
            "loc": [
                6,
                12
            ]
        },
        {
            "type": "function",
            "function": "function(){\ncore.hideBgFgMap('bg2', [6, 11]);\ncore.hideBgFgMap('bg2', [6, 12]);\n}"
        },
        {
            "type": "setBlock",
            "number": "airwall",
            "loc": [
                [
                    6,
                    11
                ]
            ]
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
            "type": "changePos",
            "direction": "up"
        },
        "\t[？？？！,N358]你，后悔吗？",
        "\t[hero]？？？什，什么，意思？",
        "\t[？？？！,N358]以你的能力，若是留在辉煌圣殿，必然是贵族中的贵族。无数的仆从待你差遣，无数的物资任你享用。",
        "\t[？？？！,N358]但是你却没有接受这种生活方式，放弃了最优越的条件，踏入传送门来到这无垠的太空中，再也无法回头。",
        "\t[？？？！,N358]你，后悔吗？",
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "if",
            "condition": "core.itemCount(\"greenKey\") == 0",
            "true": [
                "\t[hero]没有那么复杂，我不在乎什么生活条件，没有什么朋友，也\r[yellow]不知道何为后悔。\r",
                "\t[hero]我只想登上塔顶，找到2221。\n沿途的风景我丝毫不在乎，谁挡了我的路就让谁去世。",
                "\t[？？？！,N358]那么，恭喜你已经完成了目标的一半。这里就是真正的塔顶了。"
            ],
            "false": [
                {
                    "type": "if",
                    "condition": "core.itemCount(\"greenKey\") < 14",
                    "true": [
                        "\t[hero]\r[yellow]我……\r",
                        "\t[？？？！,N358]你犹豫了。这也算是回答了这个问题。\n你对过去的某些事物，产生了留恋。",
                        "\t[？？？！,N358]那么，你当时又为何要踏上这条不归路呢？",
                        "\t[hero]一方面，是因为没有想到在这条路上无法回头。\n另一方面……也许，是因为大家都希望我找到2221吧……而且，我自己也想找到。"
                    ],
                    "false": [
                        "\t[hero]\r[yellow]我后悔啊！\r",
                        "\t[hero]来到这里之前，我并没有想到回去竟然如此困难。我甚至没有跟朋友们好好道别。",
                        "\t[？？？！,N358]“朋友”。",
                        "\t[hero]也可能……不是朋友。我只是想让她们满足、想让她们快乐。",
                        "\t[？？？！,N358]为别人而活？这便是你这颗心带来的影响吗……有趣。\n所以你就来这里找2221了？",
                        "\t[hero]这不仅是她们的愿望，也是我自己的。"
                    ]
                }
            ]
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[？？？！,N358]但是很可惜，你永远都找不到2221的。",
        "\t[hero]为什么？你到底是谁？",
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
        {
            "type": "playBgm",
            "name": "boss5.mp3",
            "keep": true
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "眼前的褐发少女脸庞十分稚嫩，两边的双马尾显然是精心打理过的，乍看上去十分可爱。\n但她的目光却与其外表完全不相称，猩红的双目仿佛映出了尸山血海，只是望着就有一种窒息感油然而生。",
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[？？？！,N2221]我是2221亲手创造的一个备份，记录了它某次到达这里时的状态。",
        "\t[？？？！,N2221]至于2221本体，早已破空而去，到了无人知晓的地方。",
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[hero]这么说，其实你就是2221的本体，只不过是停留在某个时间点上的本体？",
        "\t[？？？！,N2221]我和2221的本体不完全一样。\n2221创造我，是因为它偶然获得了一个名为《\r[yellow]龙之传奇\r》的秘籍，想要试一下修炼它会产生什么结果。\n但是，秘籍上说，修炼者将会付出失去马的代价。",
        "\t[？？？！,N2221]以2221之能，仍然不清楚这句话是什么意思，于是它便创造了我来试水。\n显然，它对实验结果不满意，所以把我丢在了这里。",
        "\t[？？？！,N2221]现在，\r[yellow]我要完成2221留给我的使命\r——与第一个到达这里的家伙大战一场！",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero",
            "async": true
        },
        "\t[hero]喂，这算哪门子使命啊……",
        "\t[？？？！,N2221]你既然来到这里，那就是我命中注定的对手，想必身上也有着奇特之处。",
        {
            "type": "waitAsync"
        },
        "\t[？？？！,N2221]曾有一位大能者说过，远道者，都是孤独的。\n能遇到同行者，即使道不同，也是幸事。你所走的“道”是什么，我十分好奇。",
        "\t[？？？！,N2221]想必这里发生的一切都会通过某种方式传达给它吧。\n\\c[20]\r[red]就让我们的表演，开始吧！\r\\c",
        {
            "type": "setBlock",
            "number": "E2221",
            "loc": [
                [
                    6,
                    2
                ]
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "// 《龙之传奇》非常 cooooool\nif (core.getFlag(\"70F_boss_phase\", 0) == 1) {\n\t// 祭奠2.7.3中被移除的 core.clearTip();\n\tvar boss_full_hp = 12222221;\n\tvar cur_damage = core.getFlag(\"70F_damage\", 0); // 对 boss 造成的伤害\n\tvar boss_hp = boss_full_hp - cur_damage;\n\tif (boss_hp < 0) {\n\t\tboss_hp = 0;\n\t}\n\tvar hp_ratio = boss_hp / boss_full_hp;\n\tcore.clearMap('70F_boss_hpbar');\n\tcore.createCanvas(\"70F_boss_hpbar\", 0, 0, 480, 480, 103);\n\tvar ctx1 = document.getElementById(\"70F_boss_hpbar\").getContext('2d');\n\tvar gradient = ctx1.createLinearGradient(36, 30, 344, 28);\n\tgradient.addColorStop(0, \"#880000\");\n\tgradient.addColorStop(1, \"#FF8888\");\n\tctx1.fillStyle = gradient;\n\tctx1.fillRect(36, 30, 344 * hp_ratio, 28);\n\n\tcore.createCanvas(\"70F_boss_hp\", 0, 0, 480, 480, 104);\n\tcore.fillBoldText(\"70F_boss_hp\", boss_hp + \"/\" + boss_full_hp, 38, 52, \"#FF8888\", \"#000000\", \"24px Verdana\");\n\tcore.fillBoldText(\"70F_boss_hp\", \"回合：\" + core.getFlag(\"70F_p1_turn\", 0), 258, 20, \"#FF8888\", \"#000000\", \"20px Verdana\");\n\n\tfunction get_color(flag_name) {\n\t\tvar turn_remain = core.getFlag(flag_name, 0);\n\t\tif (turn_remain <= 0) {\n\t\t\treturn \"#FF0000\";\n\t\t} else if (turn_remain <= 5) {\n\t\t\treturn \"#FF88FF\";\n\t\t} else {\n\t\t\treturn \"#FFFFFF\";\n\t\t}\n\t}\n\n\tcore.fillBoldText(\"70F_boss_hp\", core.getFlag(\"70Fboss_skill1_cd\", 0), 78, 406, get_color(\"70Fboss_skill1_cd\"), \"#000000\", \"20px Verdana\");\n\tcore.fillBoldText(\"70F_boss_hp\", core.getFlag(\"70Fboss_skill2_cd\", 0), 158, 406, get_color(\"70Fboss_skill2_cd\"), \"#000000\", \"20px Verdana\");\n\tcore.fillBoldText(\"70F_boss_hp\", core.getFlag(\"70Fboss_skill3_cd\", 0), 238, 406, get_color(\"70Fboss_skill3_cd\"), \"#000000\", \"20px Verdana\");\n\tcore.fillBoldText(\"70F_boss_hp\", core.getFlag(\"70Fboss_skill4_cd\", 0), 318, 406, get_color(\"70Fboss_skill4_cd\"), \"#000000\", \"20px Verdana\");\n}",
    "events": {
        "6,6": {
            "trigger": "action",
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "flag:70F_boss_finish",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.removeFlag(\"70F_boss_phase\");\n}"
                        },
                        {
                            "type": "changeFloor",
                            "floorId": "MT70_2",
                            "loc": [
                                6,
                                6
                            ]
                        },
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "animate",
                    "name": "yidaoliangduan",
                    "loc": "hero",
                    "async": true
                },
                {
                    "type": "moveHero",
                    "time": 100,
                    "steps": [
                        "backward",
                        "backward",
                        "backward"
                    ]
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "operator": "-=",
                    "value": "3000000"
                },
                {
                    "type": "waitAsync"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.plugin.popSkillDamage(3000000, core.status.hero.loc.x, core.status.hero.loc.y);\ncore.waitHeroToStop(core.moveOneStep);\n}"
                },
                {
                    "type": "waitAsync"
                }
            ]
        },
        "0,0": [
            {
                "type": "comment",
                "text": "战后事件"
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 0
            },
            {
                "type": "hideImage",
                "code": 2,
                "time": 0
            },
            {
                "type": "setVolume",
                "value": 0,
                "time": 2000,
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
                "type": "vibrate",
                "direction": "horizontal",
                "time": 1500,
                "speed": 10,
                "power": 10,
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
                "time": 1000
            },
            {
                "type": "clearMap"
            },
            {
                "type": "function",
                "function": "function(){\ncore.deleteCanvas('70F_boss_hp');\ncore.deleteCanvas('70F_boss_hpbar');\n\n// 清除所有物体\nvar blocks = core.getMapBlocksObj(core.status.floorId);\nfor (var loc in blocks) {\n\tvar block = blocks[loc],\n\t\tx = block.x,\n\t\ty = block.y,\n\t\tid = block.event.id;\n\tif (block.disable) continue;\n\n\tif (x >= 2 && x <= 10 && y >= 2 && y <= 10) {\n\t\tcore.removeBlock(block.x, block.y);\n\t}\n}\n}"
            },
            {
                "type": "jumpHero",
                "loc": [
                    6,
                    9
                ],
                "time": 0
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            {
                "type": "setBlock",
                "number": "N2221_down",
                "loc": [
                    [
                        6,
                        6
                    ]
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    6
                ],
                "time": 0,
                "keep": true,
                "steps": [
                    "up:3"
                ]
            },
            {
                "type": "turnBlock",
                "direction": "down",
                "loc": [
                    [
                        6,
                        3
                    ]
                ]
            },
            {
                "type": "setCurtain",
                "time": 1000
            },
            {
                "type": "sleep",
                "time": 1000
            },
            "\t[？？？！,N2221]哈哈哈，哦嗬呵呵呵呵！",
            "\t[？？？！,N2221]这就是你的道吗……\n你的身上，承载了许多他人的东西，构成你身体的材料、你手中的武器、你使用的技能，都并非同源，简直就是一盘大杂烩。",
            "\t[？？？！,N2221]但是，它们组合起来，加上你调动它们的方式，形成了独一无二的“你”。",
            "\t[？？？！,N2221]你的力量，不弱；战斗方式，很聪明。难怪能与我这龙之道抗衡。\n我不想再打下去了，你赢了，再见。",
            "\t[hero]等等，你先别走，我还没找到真正的2221呢！",
            "\t[？？？！,N2221]我的使命已经完成了，现在的我也是一个自由的个体了，你无法阻止我离开的。",
            "\t[？？？！,N2221]我说过，没人知道2221的本体在哪里，身为其备份的我也不例外。\n不过，倘若你哪天悟出了更深层次的“道”，你也能突破这方天地的限制。",
            "\t[？？？！,N2221]到那时，找到真正的2221，将成为可能。",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        3
                    ]
                ],
                "time": 1000,
                "async": true
            },
            {
                "type": "setBlock",
                "number": "portal",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "time": 1000
            },
            {
                "type": "setValue",
                "name": "flag:70F_boss_phase",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:70F_boss_finish",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:disableFly",
                "value": "0"
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[hero]一下子就消失了……\n她刚才说她成为了自由的个体，也就是说她也成为了2221？\n不对，是成为了2221分化出来的一个……存在？",
            {
                "type": "animate",
                "name": "E_unhappy",
                "loc": "hero"
            },
            "\t[hero]这样想来很恐怖啊，2221随手就能创造一个备份，学习一种独特的“道”，成为一个独立的个体。\n这样下去，源自于2221的智械，恐怕会遍布天下吧……",
            "\t[hero]她留下了一个传送门，进去看看吧。",
            {
                "type": "playBgm",
                "name": "area7.mp3"
            },
            {
                "type": "setVolume",
                "value": 90,
                "time": 0
            },
            {
                "type": "waitAsync"
            }
        ],
        "0,12": [
            {
                "type": "comment",
                "text": "在下方绘制技能图标"
            },
            {
                "type": "drawImage",
                "image": "70F_skills.png",
                "x": 0,
                "y": 0,
                "w": 32,
                "h": 32,
                "x1": 38,
                "y1": 382,
                "w1": 32,
                "h1": 32
            },
            {
                "type": "drawImage",
                "image": "70F_skills.png",
                "x": 0,
                "y": 32,
                "w": 32,
                "h": 32,
                "x1": 118,
                "y1": 382,
                "w1": 32,
                "h1": 32
            },
            {
                "type": "drawImage",
                "image": "70F_skills.png",
                "x": 0,
                "y": 64,
                "w": 32,
                "h": 32,
                "x1": 198,
                "y1": 382,
                "w1": 32,
                "h1": 32
            },
            {
                "type": "drawImage",
                "image": "70F_skills.png",
                "x": 0,
                "y": 96,
                "w": 32,
                "h": 32,
                "x1": 278,
                "y1": 382,
                "w1": 32,
                "h1": 32
            }
        ]
    },
    "changeFloor": {},
    "afterBattle": {
        "6,2": [
            {
                "type": "if",
                "condition": "(flag:70F_boss_phase < 1)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.values.animateSpeed = 310;\n}"
                    },
                    {
                        "type": "pauseBgm"
                    },
                    {
                        "type": "moveHero",
                        "async": true,
                        "steps": [
                            "backward"
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "E2221_down",
                        "loc": [
                            [
                                6,
                                2
                            ]
                        ]
                    },
                    "\t[？？？！,N2221_down]果然有点能耐，真正的战斗，现在开始！",
                    {
                        "type": "playBgm",
                        "name": "boss7_2.mp3",
                        "keep": true
                    },
                    {
                        "type": "jump",
                        "from": [
                            6,
                            2
                        ],
                        "to": [
                            6,
                            6
                        ],
                        "time": 500,
                        "keep": true
                    },
                    {
                        "type": "changePos",
                        "direction": "down"
                    },
                    {
                        "type": "playSound",
                        "name": "se_power0.wav"
                    },
                    {
                        "type": "vibrate",
                        "time": 1500,
                        "async": true
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            6,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "strokeRect",
                        "x": 34,
                        "y": 28,
                        "width": 344,
                        "height": 32,
                        "radius": 4,
                        "style": [
                            255,
                            255,
                            255,
                            1
                        ],
                        "lineWidth": 4
                    },
                    {
                        "type": "fillBoldText",
                        "x": 32,
                        "y": 20,
                        "style": [
                            255,
                            127,
                            127,
                            1
                        ],
                        "font": "20px Verdana",
                        "text": "BOSS： ？？？！"
                    },
                    {
                        "type": "function",
                        "function": "function(){\n// 血条逐渐增加\nvar hp_ratio = 0;\ncore.createCanvas(\"70F_boss_hpbar\", 0, 0, 480, 480, 103);\ncore.createCanvas(\"70F_boss_hp\", 0, 0, 480, 96, 104);\nvar boss_full_hp = 12222221;\nvar ctx1 = document.getElementById(\"70F_boss_hpbar\").getContext('2d');\nvar gradient = ctx1.createLinearGradient(36, 30, 344, 28);\ngradient.addColorStop(0, \"#880000\");\ngradient.addColorStop(1, \"#FF8888\");\nctx1.fillStyle = gradient;\nvar interval = setInterval(function () {\n\tif (hp_ratio <= 100) {\n\t\tcore.status.lockControl = true;\n\t\tcore.clearMap('70F_boss_hpbar');\n\t\tctx1.fillRect(36, 30, 344 * hp_ratio / 100, 28);\n\n\t\tvar boss_hp = Math.floor(hp_ratio * boss_full_hp / 100);\n\t\tcore.clearMap('70F_boss_hp');\n\t\tcore.fillBoldText(\"70F_boss_hp\", boss_hp + \"/\" + boss_full_hp, 38, 52, \"#FF8888\", \"#000000\", \"24px Verdana\");\n\t\thp_ratio += 1;\n\t} else {\n\t\tclearInterval(interval);\n\t}\n}, 15);\n}"
                    },
                    {
                        "type": "sleep",
                        "time": 1500
                    },
                    {
                        "type": "setValue",
                        "name": "item:I_wait",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:70F_boss_phase",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:70Fboss_skill1_cd",
                        "value": "0"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:70Fboss_skill2_cd",
                        "value": "10"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:70Fboss_skill3_cd",
                        "value": "5"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:70Fboss_skill4_cd",
                        "value": "20"
                    },
                    {
                        "type": "setBlock",
                        "number": "E2221_up",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "trigger",
                        "loc": [
                            0,
                            12
                        ]
                    },
                    {
                        "type": "choices",
                        "text": "\t[系统提示]即将进入特殊战。是否要听战斗规则讲解？",
                        "choices": [
                            {
                                "text": "听！",
                                "action": [
                                    "\t[系统提示]在特殊战中，你无法直接与BOSS战斗。\n必须利用BOSS自身的技能，将其生命值耗尽，才可获得胜利。",
                                    "\t[系统提示]你每行走一步，就视为过去了1个回合。",
                                    "\t[系统提示]BOSS有若干技能，随着回合的进行，其\r[yellow]冷却时间\r会逐渐降为0。\n如果冷却时间为0，那么BOSS就会释放这个技能。",
                                    "\t[系统提示]当同时有多个技能冷却达到0时，BOSS只会释放优先级最高的一个。\n越靠上的技能优先级越高，但\r[red]至尊之怒\r例外，它拥有最高的优先级。\n你可以在屏幕下方看到BOSS各技能的冷却。",
                                    "\t[系统提示]在特殊战中，你每行走一步之前都会自动存档，方便你“悔棋”。\n不过还是建议你适当利用手动存档。",
                                    "\t[系统提示]善加利用\r[yellow]转身\r，转身的方法是按\r[yellow]Z\r键或者双击角色。\n另外不要忘记你可以\r[yellow]原地等待\r\\i[I_wait]。",
                                    "\t[系统提示]准备好一场恶战吧。祝你好运！"
                                ]
                            },
                            {
                                "text": "不听不听",
                                "action": []
                            }
                        ]
                    },
                    {
                        "type": "waitAsync"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17,  0],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [  0, 17,  0,  0,  0,  0,358,  0,  0,  0,  0, 17,  0],
    [  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17,  0],
    [  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17,  0],
    [  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17,  0],
    [  0, 17,  0,  0,  0,  0, 89,  0,  0,  0,  0, 17,  0],
    [  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17,  0],
    [  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17,  0],
    [  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17,  0],
    [  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17,  0],
    [ 17, 17, 17, 17, 17, 17,  0, 17, 17, 17, 17, 17, 17],
    [  0, 17,  0,  0,  0, 17,  0, 17,  0,  0,  0, 17,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,145,145,145,145,145,145,145,145,145,  0,  0],
    [  0,  0,145,145,145,145,145,145,145,145,145,  0,  0],
    [  0,  0,145,145,145,145,145,145,145,145,145,  0,  0],
    [  0,  0,145,145,145,145,145,145,145,145,145,  0,  0],
    [  0,  0,145,145,145,145,145,145,145,145,145,  0,  0],
    [  0,  0,145,145,145,145,145,145,145,145,145,  0,  0],
    [  0,  0,145,145,145,145,145,145,145,145,145,  0,  0],
    [  0,  0,145,145,145,145,145,145,145,145,145,  0,  0],
    [  0,  0,145,145,145,145,145,145,145,145,145,  0,  0],
    [  0,  0,  0,  0,  0,  0,145,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,145,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "flyPoint": [
        6,
        9
    ],
    "hard1_enemy_ratio": 100,
    "cannotMoveDirectly": true,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}