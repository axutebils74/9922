main.floors.Ch4_130=
{
    "floorId": "Ch4_130",
    "title": "千虹之暗",
    "name": "千虹之暗",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
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
    "weather": [
        "rain",
        1
    ],
    "firstArrive": [
        {
            "type": "pauseBgm"
        },
        {
            "type": "loadBgm",
            "name": "sunrise.mp3"
        },
        {
            "type": "function",
            "function": "function(){\ncore.values.animateSpeed = 385;\n}"
        },
        {
            "type": "jumpHero",
            "dxy": [
                0,
                10
            ],
            "time": 500
        },
        {
            "type": "playSound",
            "name": "037-Switch06.ogg"
        },
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]\b[down,null]这，几乎凝聚成实质的压迫感……感觉能量的运转都变得滞涩了。",
        "\t[？？,E888]\b[down,null]我感觉到，封印的力量减弱了许多……",
        "\t[？！,E889]\b[down,null]终于可以离开这里了吗，我真是太兴奋了！",
        "\t[？？,E888]\b[down,null]解开封印者，做的不错。报上名来，我会让你死个痛快。",
        "\t[hero]\b[down,null]……你提供的奖励还真是“诱人”。",
        "\t[？？,E888]\b[down,null]不然呢？你还想要什么，小小的智械？",
        "\t[？！,E889]\b[down,null]我们在这片小小的黑暗空间里度过了好几年的光阴，这种经历非常愉快！\n作为报答，等我出去以后，我一定要把所有还活着的人都揪出来，把他们全都变成\r[yellow]大可爱\r！",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[？？,E888]\b[down,null]我们，本来是天赋最好的第零公民，在至尊之路的探索进度远超其他人。",
        "\t[？？,E888]\b[down,null]在研究智能机械的技术方面也曾立下大功，你能站在这里，有我们一份功劳。",
        "\t[？！,E889]\b[down,null]所以，你就奉上你的性命来感谢我们吧！",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]\b[down,null]果然，能说话不等于能沟通。\n不过，我到这里本来就是为了与二位死战的。你们这样不讲道理，正合我意。",
        {
            "type": "waitAsync"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playBgm",
            "name": "boss2221.mp3",
            "keep": true
        },
        {
            "type": "setBgmSpeed",
            "value": 95,
            "pitch": true
        },
        "\t[？？,E888]\b[down,null]可悲又渺小的凡俗生物啊",
        "\t[？！,E889]\b[down,null]你将为你的忤逆付出代价",
        "\t[？？,E888]\b[down,null]在我们赐予你永恒的解脱之前",
        "\t[？！,E889]\b[down,null]我将大发慈悲地宣告我们的名号",
        "\t[？？,E888]\b[down,null]在外界 我们是微不足道的历史尘埃",
        "\t[？！,E889]\b[down,null]在此界 我们是翻云覆雨的无上神皇",
        "\t[奥卡斯特大帝,E888]\b[down,null]我乃\r[orange]奥卡斯特\r",
        "\t[奥波卢克斯大帝,E889]\b[down,null]吾名\r[orange]奥波卢克斯\r",
        {
            "type": "playSound",
            "name": "se_power0.wav"
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
            ],
            "async": true
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
            "type": "setValue",
            "name": "flag:A21boss",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:A21boss_pick",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:A21boss_battle",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:A21boss_1p",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:A21boss_2p",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:A21boss_1p_debuff",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:A21boss_2p_debuff",
            "value": "0"
        },
        {
            "type": "setText",
            "align": "center"
        },
        {
            "type": "autoText",
            "text": "\t[奥卡斯特&奥波卢克斯]\\c[24]我们是\r[red]傲狂双帝！\r\\c",
            "time": 2000
        },
        {
            "type": "setText",
            "align": "left"
        },
        {
            "type": "waitAsync"
        },
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
            "type": "function",
            "function": "function(){\ncore.setBlock(\"redRHeart\", 6, 5);\ncore.drawAnimate(\"dark\", 6, 5);\ncore.setBlock(\"E21Add1\", 6, 7);\ncore.drawAnimate(\"fire3\", 6, 7);\n}"
        },
        {
            "type": "insert",
            "name": "Ch4_2BossDraw"
        },
        {
            "type": "function",
            "function": "function(){\ncore.setFlag(\"saved_mana_regen\", core.getFlag(\"mana_regen\", 0));\ncore.setFlag(\"saved_I62_extra_mana_regen\", core.getFlag(\"I62_extra_mana_regen\", 0));\ncore.setFlag(\"saved_I62_extra_description\", core.getFlag(\"I62_extra_description\", \"\"));\ncore.setFlag(\"saved_skill12_desc1\", core.getFlag(\"skill12_desc1\"));\ncore.setFlag(\"mana_regen\", 0);\ncore.setFlag(\"I62_extra_mana_regen\", 0);\ncore.setFlag(\"I62_extra_description\", \"\");\ncore.setFlag(\"skill12_desc1\", \"每击中一个敌人获得75能量。\");\n\ncore.setFlag(\"saved_hp\", core.status.hero.hp);\ncore.setFlag(\"saved_mana\", core.status.hero.mana);\n}"
        },
        {
            "type": "if",
            "condition": "flags.hard == 2",
            "true": [
                {
                    "type": "choices",
                    "text": "\t[系统提示]在这场战斗中，你无法回复生命，战后能量回复也暂时失效了。\n倾尽全力消灭面前的敌人吧。\n（普通难度下，本场战斗不影响最终的得分）",
                    "choices": [
                        {
                            "text": "此刻，唯有死战！",
                            "color": [
                                213,
                                0,
                                0,
                                1
                            ],
                            "action": []
                        }
                    ]
                }
            ],
            "false": [
                {
                    "type": "choices",
                    "text": "\t[系统提示]在这场战斗中，你无法回复生命，战后能量回复也暂时失效了。\n倾尽全力消灭面前的敌人吧。",
                    "choices": [
                        {
                            "text": "此刻，唯有死战！",
                            "color": [
                                213,
                                0,
                                0,
                                1
                            ],
                            "action": []
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "var lastTime = core.getFlag('lastWeatherTime', 0);\n// 每多少毫秒重绘一次；天气效果默认都是30\nif (timestamp - lastTime > 60) {\n\tvar lastOffsetY = core.getFlag('lastOffsetY', 0); // 上次的offset\n\tvar image = core.material.images.images['area21.jpg']; // 获得图片，这里写图片名\n\tvar width = image.width,\n\t\theight = image.height; // 获得宽高\n\n\t// 绘制下一次，参见drawImage的API：http://www.w3school.com.cn/tags/canvas_drawimage.asp\n\tif (lastOffsetY + 416 > height) { // 需要首尾相接\n\t\t// 尾部\n\t\tcore.canvas.bg.drawImage(image, 0, lastOffsetY, width, height - lastOffsetY, 0, 0, width, height - lastOffsetY);\n\t\t// 首部\n\t\tcore.canvas.bg.drawImage(image, 0, 0, width, lastOffsetY + 416 - height, 0, height - lastOffsetY, width, lastOffsetY + 416 - height);\n\t} else { // 不需要，直接绘制\n\t\tcore.canvas.bg.drawImage(image, 0, lastOffsetY, 416, 416, 0, 0, 416, 416);\n\t}\n\t// 移动图片\n\tlastOffsetY -= 1; // 这里是每次移动的像素\n\tif (lastOffsetY < 0) lastOffsetY += height;\n\tif (lastOffsetY > height) lastOffsetY -= height;\n\tcore.setFlag('lastOffsetY', lastOffsetY);\n\tcore.setFlag('lastWeatherTime', timestamp); // 记录时间\n\n\tif (core.getFlag(\"A21boss\", 0) > 0 &&\n\t\t(core.getFlag(\"A21boss_1p\", 0) >= 3 || core.getFlag(\"A21boss_2p\", 0) >= 3)) {\n\t\tvar image2 = core.material.images.images['Cthulhu.jpg'];\n\t\tcore.canvas.bg2.globalAlpha = 0.4 - Math.cos(core.getFlag(\"temp_A21boss_draw\", 0) / 20) * 0.3;\n\t\tcore.canvas.bg2.clearRect(0, 0, 416, 416);\n\t\tcore.canvas.bg2.drawImage(image2, 0, 0, 416, 416, 0, 0, 416, 416);\n\t\tcore.addFlag(\"temp_A21boss_draw\", 1);\n\t}\n}",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {
        "8,6": [
            {
                "type": "comment",
                "text": "我做了这个才知道 core.battle 不会触发战前事件，只会触发战前脚本"
            },
            {
                "type": "comment",
                "text": "别问，问就是 feature"
            },
            {
                "type": "if",
                "condition": "flag:A21boss_2p >= 3",
                "true": [
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 1000,
                        "speed": 10,
                        "power": 10,
                        "async": true
                    },
                    {
                        "type": "playSound",
                        "name": "se_power0.wav"
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            8,
                            6
                        ]
                    },
                    "\t[奥波卢克斯大帝,E889]\b[down,null]\\c[20]\r[silver]我来把你变得更可爱！\r\n\r[#e525ff]【奥义】合成大可爱！\r\\c",
                    {
                        "type": "animate",
                        "name": "thunder4",
                        "loc": "hero",
                        "async": true
                    },
                    {
                        "type": "waitAsync",
                        "excludeAnimates": true
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.setFlag(\"specialRHeart_val\", 0);\nvar to_remove_list = [];\nvar floorId = core.status.floorId;\ncore.status.maps[floorId].blocks.forEach(function (block) {\n\tif (core.getBlockCls(block.x, block.y) == \"items\" && block.event.id.indexOf(\"RHeart\") != -1) {\n\t\tswitch (block.event.id) { // 偷懒了，hard code\n\t\tcase \"redRHeart\":\n\t\t\tcore.addFlag(\"specialRHeart_val\", 50000000);\n\t\t\tbreak;\n\t\tcase \"blueRHeart\":\n\t\t\tcore.addFlag(\"specialRHeart_val\", 125000000);\n\t\t\tbreak;\n\t\tcase \"yellowRHeart\":\n\t\t\tcore.addFlag(\"specialRHeart_val\", 250000000);\n\t\t\tbreak;\n\t\tcase \"greenRHeart\":\n\t\t\tcore.addFlag(\"specialRHeart_val\", 400000000);\n\t\t\tbreak;\n\t\t}\n\t\t// 在 forEach 内部调用 removeBlock 会修改遍历对象，导致 forEach 遍历漏掉元素\n\t\t// 所以这里只是记录要删除的坐标，等遍历结束再删\n\t\tto_remove_list.push([block.x, block.y]);\n\t\tcore.plugin.addAutoGetItemAnimate(block.event.id, block.x, block.y);\n\t}\n});\nfor (var i in to_remove_list) {\n\tcore.removeBlock(to_remove_list[i][0], to_remove_list[i][1]);\n}\ncore.setBlock(\"specialRHeart\", core.status.hero.loc.x, core.status.hero.loc.y);\ncore.plugin.startAutoGetItemAnimate();\n}"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.getItem(\"specialRHeart\", 1, core.status.hero.loc.x, core.status.hero.loc.y);\n}"
                    },
                    {
                        "type": "animate",
                        "name": "dark3",
                        "loc": "hero"
                    }
                ]
            }
        ]
    },
    "afterBattle": {
        "8,6": [
            {
                "type": "setBlock",
                "number": "E889",
                "loc": [
                    [
                        8,
                        6
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "dark3",
                "loc": [
                    8,
                    6
                ],
                "async": true
            },
            {
                "type": "setValue",
                "name": "flag:A21boss_2p",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.updateBoss21Info(3);\n}"
            },
            {
                "type": "insert",
                "name": "Ch4_2BossDraw"
            },
            {
                "type": "switch",
                "condition": "flag:A21boss_2p",
                "caseList": [
                    {
                        "case": "1",
                        "action": [
                            "\t[奥波卢克斯大帝,E889]\b[down,null]\\c[20]\r[silver]你不该存在于世！\r\\c"
                        ]
                    },
                    {
                        "case": "2",
                        "action": [
                            "\t[奥波卢克斯大帝,E889]\b[down,null]\\c[20]\r[silver]你没有存在价值！\r\\c"
                        ]
                    },
                    {
                        "case": "3",
                        "action": [
                            {
                                "type": "playSound",
                                "name": "079-Monster01.ogg"
                            },
                            "\t[奥波卢克斯大帝,E889]\b[down,null]\\c[20]\r[silver]你不配被我正视！\r\\c"
                        ]
                    },
                    {
                        "case": "4",
                        "action": [
                            {
                                "type": "playSound",
                                "name": "079-Monster01.ogg"
                            }
                        ]
                    },
                    {
                        "case": "5",
                        "action": [
                            {
                                "type": "setBlock",
                                "number": "E906",
                                "loc": [
                                    [
                                        8,
                                        6
                                    ]
                                ]
                            },
                            {
                                "type": "if",
                                "condition": "flag:A21boss_1p == 5",
                                "true": [
                                    {
                                        "type": "animate",
                                        "name": "explosion_small",
                                        "loc": [
                                            4,
                                            6
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "animate",
                                        "name": "explosion_small",
                                        "loc": [
                                            8,
                                            6
                                        ]
                                    },
                                    "\t[奥波卢克斯大帝,E906]\b[down,null]你，你竟然……",
                                    {
                                        "type": "insert",
                                        "name": "Ch4_2BossEnd"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "animate",
                                        "name": "explosion_small",
                                        "loc": [
                                            8,
                                            6
                                        ]
                                    },
                                    "\t[奥波卢克斯大帝,E906]\b[down,null]你休想令大帝屈服！"
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,6": [
            {
                "type": "setBlock",
                "number": "E888",
                "loc": [
                    [
                        4,
                        6
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "fire",
                "loc": [
                    4,
                    6
                ],
                "async": true
            },
            {
                "type": "setValue",
                "name": "flag:A21boss_1p",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.updateBoss21Info(1);\n}"
            },
            {
                "type": "insert",
                "name": "Ch4_2BossDraw"
            },
            {
                "type": "switch",
                "condition": "flag:A21boss_1p",
                "caseList": [
                    {
                        "case": "1",
                        "action": [
                            "\t[奥卡斯特大帝,E888]\b[down,null]\\c[20]\r[red]你毫无自知之明！\r\\c"
                        ]
                    },
                    {
                        "case": "2",
                        "action": [
                            "\t[奥卡斯特大帝,E888]\b[down,null]\\c[20]\r[red]你不够谦卑！\r\\c"
                        ]
                    },
                    {
                        "case": "3",
                        "action": [
                            {
                                "type": "playSound",
                                "name": "079-Monster01.ogg"
                            }
                        ]
                    },
                    {
                        "case": "4",
                        "action": [
                            {
                                "type": "playSound",
                                "name": "079-Monster01.ogg"
                            }
                        ]
                    },
                    {
                        "case": "5",
                        "action": [
                            {
                                "type": "setBlock",
                                "number": "E905",
                                "loc": [
                                    [
                                        4,
                                        6
                                    ]
                                ]
                            },
                            {
                                "type": "if",
                                "condition": "flag:A21boss_2p == 5",
                                "true": [
                                    {
                                        "type": "animate",
                                        "name": "explosion_small",
                                        "loc": [
                                            4,
                                            6
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "animate",
                                        "name": "explosion_small",
                                        "loc": [
                                            8,
                                            6
                                        ]
                                    },
                                    "\t[奥卡斯特大帝,E905]\b[down,null]这，这不可能……",
                                    {
                                        "type": "insert",
                                        "name": "Ch4_2BossEnd"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "animate",
                                        "name": "explosion_small",
                                        "loc": [
                                            4,
                                            6
                                        ]
                                    },
                                    "\t[奥卡斯特大帝,E905]\b[down,null]大帝永不言败！"
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [200,200,200,200,200,200,200,200,200,200,200,200,200],
    [200,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,200],
    [200,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,200],
    [200,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,200],
    [200,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,200],
    [200,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,200],
    [200,  0,  0,  0,888,  0,  0,  0,889,  0,  0,  0,200],
    [200,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,200],
    [200,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,200],
    [200,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,200],
    [200,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,200],
    [200,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,200],
    [200,200,200,200,200,200,200,200,200,200,200,200,200]
],
    "hard1_enemy_ratio": 100,
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}