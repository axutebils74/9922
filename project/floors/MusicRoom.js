main.floors.MusicRoom=
{
    "floorId": "MusicRoom",
    "title": "MusicRoom",
    "name": "MusicRoom",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "color": null,
    "firstArrive": [
        "\t[？？,hero2]\b[down,6,6]哈喽！这里是不属于游戏主线的空间。\n你可以在这里听本塔的主要bgm，并了解作者的一些想法。\n也可以直接到下面进行章节选择。"
    ],
    "eachArrive": [
        {
            "type": "setVolume",
            "value": 90,
            "time": 0
        },
        {
            "type": "pauseBgm"
        }
    ],
    "parallelDo": "if (core.getFlag(\"musicRoom_parallel\", null)) {\n\tif (core.getFlag(\"musicRoom_parallel\") == 1) {\n\t\t// 辣鸡作者：这个脚本是小艾写的，出自于《梦》，这里只不过是把竖向移动改成了横向移动\n\t\tvar lastTime = core.getFlag('lastWeatherTime', 0);\n\t\t// 每多少毫秒重绘一次；天气效果默认都是30\n\t\tif (timestamp - lastTime > 60) {\n\t\t\tvar lastOffsetX = core.getFlag('lastOffsetX', 0); // 上次的offset\n\t\t\tvar image = core.material.images.images['area7_2.jpg']; // 获得图片，这里写图片名\n\t\t\tvar width = image.width,\n\t\t\t\theight = image.height; // 获得宽高\n\t\t\t// 绘制下一次，参见drawImage的API：http://www.w3school.com.cn/tags/canvas_drawimage.asp\n\t\t\tif (lastOffsetX + 416 > width) { // 需要首尾相接\n\t\t\t\t// 尾部\n\t\t\t\tcore.canvas.bg.drawImage(image, lastOffsetX, 0, width - lastOffsetX, height, 0, 0, width - lastOffsetX, height);\n\t\t\t\t// 首部\n\t\t\t\tcore.canvas.bg.drawImage(image, 0, 0, lastOffsetX + 416 - width, height, width - lastOffsetX, 0, lastOffsetX + 416 - width, height);\n\t\t\t} else { // 不需要，直接绘制\n\t\t\t\tcore.canvas.bg.drawImage(image, lastOffsetX, 0, width, 416, 0, 0, width, 416);\n\t\t\t}\n\t\t\t// 移动图片\n\t\t\tlastOffsetX += 1; // 这里是每次移动的像素\n\t\t\tif (lastOffsetX > 416) lastOffsetX -= width;\n\t\t\tcore.setFlag('lastOffsetX', lastOffsetX);\n\t\t\tcore.setFlag('lastWeatherTime', timestamp); // 记录时间\n\t\t}\n\t} else if (core.getFlag(\"musicRoom_parallel\") == 2) {\n\t\tvar lastTime = core.getFlag('lastTime', 0);\n\n\t\tif (timestamp - lastTime > 60) {\n\t\t\tvar image = core.material.images.images['area16.jpg'];\n\t\t\tvar width = 416,\n\t\t\t\theight = 416;\n\n\t\t\tcore.canvas.bg.translate(width / 2, height / 2);\n\t\t\tcore.canvas.bg.rotate(Math.PI / 180 / 6);\n\t\t\tcore.canvas.bg.translate(-width / 2, -height / 2);\n\t\t\tcore.canvas.bg.drawImage(image, -296, -88);\n\n\t\t\tcore.setFlag('lastTime', timestamp);\n\n\t\t\tvar rotateTime = core.getFlag('rotateTime', 0);\n\t\t\trotateTime += 1;\n\t\t\tif (rotateTime >= 6 * 180) {\n\t\t\t\trotateTime -= 6 * 180;\n\t\t\t}\n\t\t\tcore.setFlag('rotateTime', rotateTime);\n\t\t}\n\t}\n}",
    "events": {
        "6,6": [
            {
                "type": "choices",
                "text": "\t[？？,hero2]提醒一下，听bgm可能会被剧透哦！\n另外，听bgm的同时房间的布景会发生变化~",
                "choices": [
                    {
                        "text": "可以给我一本怪物手册吗？",
                        "condition": "item:book == 0",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "item:book",
                                "value": "1"
                            },
                            {
                                "type": "turnBlock",
                                "direction": "down",
                                "loc": [
                                    [
                                        6,
                                        6
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "text": "你到底是谁？",
                        "action": [
                            "\t[？？,hero2]我？我在这里只是个吉祥物。\n这里的我和主线剧情没有任何关联。",
                            {
                                "type": "turnBlock",
                                "direction": "down",
                                "loc": [
                                    [
                                        6,
                                        6
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "text": "我能回去吗？",
                        "action": [
                            "\t[？？,hero2]回到第一章？从这里是回不去的，你可以按R从头回放录像，然后立即取消。",
                            {
                                "type": "turnBlock",
                                "direction": "down",
                                "loc": [
                                    [
                                        6,
                                        6
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "text": "我明白了",
                        "action": [
                            {
                                "type": "turnBlock",
                                "direction": "down",
                                "loc": [
                                    [
                                        6,
                                        6
                                    ]
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,11": [
            {
                "type": "choices",
                "text": "\t[终端,X30023]你要做什么？",
                "choices": [
                    {
                        "text": "取消",
                        "action": []
                    },
                    {
                        "text": "跳到第三章",
                        "color": [
                            255,
                            203,
                            0,
                            1
                        ],
                        "action": [
                            {
                                "type": "playBgm",
                                "name": "area8.mp3"
                            },
                            {
                                "type": "insert",
                                "name": "第二章结束"
                            }
                        ]
                    },
                    {
                        "text": "跳到第四章-前篇",
                        "color": [
                            255,
                            0,
                            247,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "name": "第三章结束"
                            }
                        ]
                    },
                    {
                        "text": "跳到第四章-后篇",
                        "color": [
                            255,
                            0,
                            139,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "name": "第四章前结束"
                            }
                        ]
                    }
                ]
            }
        ],
        "2,2": [
            {
                "type": "choices",
                "text": "\t[终端,X30023]选择第一章的主要BGM：",
                "choices": [
                    {
                        "text": "Mad Monster Mansion",
                        "action": [
                            {
                                "type": "playBgm",
                                "name": "area1.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "yellowWall",
                                    "ground"
                                ]
                            },
                            "冒险总是从史莱姆、小蝙蝠和骷髅开始。\n特意选了这样一个有一些戏谑感的音乐。\n作者想过只做一个10层小水塔的，如果把现在的简化难度删掉，并且强制留绿，就是了。\n如果再卡掉1黄可能会更好一些？"
                        ]
                    },
                    {
                        "text": "Feast of Spring",
                        "action": [
                            {
                                "type": "playBgm",
                                "name": "area2.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile",
                                    "grass"
                                ]
                            },
                            "轻快的过渡区域。\n血蓝之间的转换是大多数技能塔的本质。相比于玩家，造塔者在这方面有着信息不对称的优势：\n1. 摆很多很多蓝块，并且心里想好一个转换比——比如，我认为每次技能应该换300血。\n2. 拆塔，所有能换300血以上的地方开技能，否则不开。\n3. 打完之后把多余的蓝块删掉，卡血。\n好了，玩家可能会SL/暴毙好几次才能找到这个转换比。\n堪称魔塔界的乘法与因式分解。"
                        ]
                    },
                    {
                        "text": "TokyoVania (Nitro Remix)",
                        "action": [
                            {
                                "type": "playBgm",
                                "name": "area3.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "whiteWall2",
                                    "ground2"
                                ]
                            },
                            "地下层也是不少经典风格塔必备的。\n从这里开始作者逐渐放飞自我。完全把钥匙当光环怪来用了。\n摆光环怪是很方便造塔者偷懒的一种方法。某个地方的怪物强度不够，又不想找新怪物的素材？那就在墙里关几个红钥匙吧（"
                        ]
                    },
                    {
                        "text": "X Ray Dog - String Tek",
                        "action": [
                            {
                                "type": "playBgm",
                                "name": "area4.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "blueWall2",
                                    "ground2"
                                ]
                            },
                            "浅层地下的进一步扩展。钥匙在本区域完全成了一种负面道具。\n整个区域的思路卡点只有一个——测试员最开始卡关的时候，我果断地问了一个问题：\n你是不是提前把不挡路的那只爆匙怪打了？"
                        ]
                    },
                    {
                        "text": "星の器 ～ Casket of Star",
                        "action": [
                            {
                                "type": "playBgm",
                                "name": "boss4.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "blueWall2",
                                    "ground2"
                                ]
                            },
                            "第一章的 boss 战。\n作者开始暴露自己是车万众的事实——至少曾经是。\n作者设计多次战斗的 boss 战时，会尽可能避免让玩家只是一次又一次地撞上去。\n不知道有多少人被 boss “聪明”的战斗方式初见杀了。"
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    }
                ]
            }
        ],
        "4,2": [
            {
                "type": "choices",
                "text": "\t[终端,X30023]选择第二章的主要BGM：",
                "choices": [
                    {
                        "text": "澤野弘之 - DRAGON RISES",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 330;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "area5.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile5",
                                    "ground"
                                ]
                            },
                            "真正的战斗逐渐开始。\n一不小心就引入了太多元素——追击、支援、暴戾、远程支援，以至于不得不让绿姐姐给个提示手册。\n再也不需要-0.1伤害的激光了。"
                        ]
                    },
                    {
                        "text": "Demetori - 今宵は飄逸なエゴイスト",
                        "action": [
                            {
                                "type": "playBgm",
                                "name": "area6.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile6",
                                    "ground3"
                                ]
                            },
                            "一个很长的 bgm，配上一个很长的区域。\n作者一般不会把一个区域做成这么长的，因为没有新元素的话到后面作者就会感到乏味，想必玩家体验也不会太好。\n但是，说实话，看到 h5 上那些高人气的超高层塔，作者也忍不住想水水层数——毕竟我引入了这么多花里胡哨的特技，层数多一些也无可厚非吧。\n总之还是不可避免地受到别人的影响了。作者重新找回自信、坚持自我，是后来的事情了。"
                        ]
                    },
                    {
                        "text": "福廣秀一朗 - 未来日記-ELECTRO VERSION-",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 400;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "area7.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile7",
                                    "autotile8",
                                    1
                                ]
                            },
                            "现代感、行进感，以及一丝淡淡的忧伤。\n作者最喜欢的 bgm 之一，作为第二章的压轴曲目。\n没有太多花里胡哨的特技，做到这里作者也耐不住寂寞，忍不住想加快脚步尽快发塔了。\n总之这个区域比较水，不过由于钥匙换血/计分的机制，还是有一些抠抠空间的。"
                        ]
                    },
                    {
                        "text": "削除 - Magical Musical Master",
                        "action": [
                            {
                                "type": "playBgm",
                                "name": "boss7_2.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile7",
                                    "autotile8",
                                    1
                                ]
                            },
                            "？？？！的 boss 战。\n这个 boss 战就花了我2星期，后来修录像 bug 又断断续续地修了2个月。以后再也不搞这种玩意了，太阴间了。"
                        ]
                    },
                    {
                        "text": "超凡boss？",
                        "action": [
                            {
                                "type": "playBgm",
                                "name": "boss5.mp3",
                                "keep": true
                            },
                            "来自《艾尔之光》。\n不多说了，《永不复还》yyds。"
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    }
                ]
            }
        ],
        "6,2": [
            {
                "type": "choices",
                "text": "\t[终端,X30023]选择第三章的区域BGM：",
                "choices": [
                    {
                        "text": "OYRH,THT - 烟花",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 330;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "area8.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile12",
                                    "grass"
                                ]
                            },
                            "停风林。\n平面塔。活泼的粉发少女。神秘徽章的逐步解锁。全新的开始。"
                        ]
                    },
                    {
                        "text": "TAMUSIC - 仲間を求めて",
                        "action": [
                            {
                                "type": "playBgm",
                                "name": "area9.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile13",
                                    "sand"
                                ]
                            },
                            "截浪滩。\n全塔比较罕见的节奏较为平缓的曲子。天赋树出现了分歧，到这里作者要一个人测两条线。\n总体的设计思路是，分别给两条线设计各自的爹怪和弟弟怪，然后通过调整各种怪的数量来平衡两条线的难度。\n“丢你莱姆”这个技能，说起来还是源于《一夜登天！》的红海区，以及h5样板特色的机关门。它与轻风的联动，构成了整个第三章游戏性的很大一部分——这在下一个区域体现得尤为明显。"
                        ]
                    },
                    {
                        "text": "Kirara Magic - 花月",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 450;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "area10.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile11",
                                    "grass"
                                ]
                            },
                            "花月道。\n天赋树进一步出现了分歧，从这里开始作者要一个人测三条线。我太难了！\n总体的设计思路是，不卡血，路线暂时不平衡也不要紧，之后再卡。\n虽然是这样想的，还是尽量在这个区域内控制了不同路线的成绩差异。"
                        ]
                    },
                    {
                        "text": "Kirara Magic - Chrono",
                        "action": [
                            {
                                "type": "playBgm",
                                "name": "area11.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile",
                                    "grass"
                                ]
                            },
                            "裕麓山。\n引入了三级天赋之后，就可以仅凭三级天赋的强度来平衡各路线的难度了——尤其是攻防线。\n由于二级天赋互相冲突，攻防线注定是小怪耗血最多的一条线。只能指望三级天赋让它翻身了。\n改数值、回放录像、改数值、回放录像……"
                        ]
                    },
                    {
                        "text": "Ramin Djawadi - Pacific Rim",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 340;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "area12.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile8",
                                    "ground7"
                                ]
                            },
                            "特训营。\n一下子就有了机械感和科幻感。\n区域流程相对比较长，好在 bgm 也比较耐听，不易产生疲劳。\n此区域的设计一定程度上受到了《炒鸡蛋魔塔》v7.0逍遥界的影响。"
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    }
                ]
            }
        ],
        "8,2": [
            {
                "type": "choices",
                "text": "\t[终端,X30023]选择第三章的另一些BGM：",
                "choices": [
                    {
                        "text": "未来古代楽団 - 旅人はワルツを踊る",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 450;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "village.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile",
                                    "grass"
                                ]
                            },
                            "很普通的小村庄。\n相当有 rpg 新手村的感觉。限于作者的水平，新手村非常简陋，能体会到大概的意思就行。"
                        ]
                    },
                    {
                        "text": "阳だまりにて和む猫",
                        "action": [
                            {
                                "type": "playBgm",
                                "name": "dungeon2.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile17",
                                    "T506"
                                ]
                            },
                            "试炼2，出自《空之轨迹》。\n最开始决定做副本，是因为作者受到了《时盘乐园》的影响。但是，做了一个副本之后，作者就发现自己真的没有做单层的天赋，所以第二个副本是留到整个第三章最后才制作完成的。\n并且第二个副本的成绩被光速爆破，简直太惨了。"
                        ]
                    },
                    {
                        "text": "Yoohsic Roomz - Eutopia",
                        "action": [
                            {
                                "type": "playBgm",
                                "name": "story2.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile13",
                                    "sand"
                                ]
                            },
                            "幻境回忆。\n每个数字都是有特别含义的，熟悉 h5 的玩家肯定光是看到1188这样的数字就能想到对应的人。"
                        ]
                    },
                    {
                        "text": "少年王的秘闻？",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 480;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "secret.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile12",
                                    "soil"
                                ]
                            },
                            "来自《艾尔之光》。\n不说了，《永不复还》yyds。\n随着音乐的响起，惊人的秘密被逐步揭开……"
                        ]
                    },
                    {
                        "text": "Atrocious Raid",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 365;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "boss2221.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile12",
                                    "soil"
                                ]
                            },
                            "2 2 2 1的boss战。\n吹爆 Falcom 的轨迹系列配乐——主要指系列的早期作品。有不少其他塔都用到了这一系列的配乐，比如《宿命的终曲》《数码世界》等等，我每次听到都会忍不住跟着抖腿。\n这次的 boss 战制作只用了半天——还不到第三章整个制作时间的2.221%。",
                            "这里出现了被标注为\r[yellow]法则\r的怪物特技。\n在我的想法中，红海技能分为两类：\n1. 与主角自身数值相关的，比如百分比吸血、夹击；\n2. 异常状态，比如毒衰。\n血海是红海的拓展。在《一夜登天！》中，第一类红海技能被拓展为“将生命值变为1”，而第二类红海技能被拓展为“魔化”——或者本作的“鸽化”，也就是变身类的技能。",
                            "换个角度想，主角没变身的时候等于中了衰弱，偶尔才能开变身暂时做正常人。这跟毒衰是相通的。\n毒衰：主角大部分时候是哥哥，少数时候是弟弟\n——游戏体验\r[yellow]极差\r。\n变身：主角大部分时候是弟弟，少数时候是爷爷\n——游戏体验……\r[yellow]好像还行\r。\n朝 三 暮 四。",
                            "显然，“重生”这种特技已经超越了上述的红海和血海的范畴。\n受到《重生塔》的影响，这个特技被归类在血海之上——也就是“法则”了。"
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    }
                ]
            }
        ],
        "2,11": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [
                    "终端再无响应。",
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "choices",
                "text": "\t[终端,X30023]你可以在这里进入挑战模式。",
                "choices": [
                    {
                        "text": "挑战模式简介",
                        "action": [
                            "\t[终端]挑战模式就是只挑战第三章的\r[yellow]两个单层小塔\r。\n单独计榜，每层通过时重置所有数值。\n计分方式是每层通过时的剩余血量之和。",
                            "\t[终端]说是挑战，其实非常简单，容错巨大，思路错误也能过（因为发布之前作者和测试员的思路都错了\n即使打max也不算难。"
                        ]
                    },
                    {
                        "text": "开始挑战！",
                        "color": [
                            255,
                            203,
                            0,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:hard == 1",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "switch:A",
                                        "value": "1"
                                    },
                                    "\t[终端]简化难度你挑战什么，爬！",
                                    {
                                        "type": "setBlock",
                                        "number": "X30022",
                                        "loc": [
                                            [
                                                2,
                                                11
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "exit"
                                    }
                                ]
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.getItem(\"skill3\");\ncore.getItem(\"I420\");\ncore.getItem(\"I437\");\ncore.getItem(\"I62\");\ncore.setItem(\"book\", 1);\ncore.setFlag(\"getMana\", 1);\ncore.setFlag(\"current_area\", -1);\n}"
                            },
                            {
                                "type": "playSound",
                                "name": "mteleport.wav"
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "Ch_D1",
                                "loc": [
                                    6,
                                    12
                                ],
                                "direction": "up",
                                "time": 1000
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": []
                    }
                ]
            }
        ],
        "10,2": [
            {
                "type": "choices",
                "text": "\t[终端,X30023]选择第四章前半部分的BGM：",
                "choices": [
                    {
                        "text": "void - Harbinger",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 330;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "area13.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile20",
                                    "T641"
                                ]
                            },
                            "通幽径。\n夜幕降临，背叛之夜的故事终于拉开帷幕。\n对于作者来说，清除了第三章的所有技能，并引入新的主角技能\r[aqua]后抛\r，这又是一个全新的开始。\n顺便一提，Harbinger 的意思是预兆者，通常是带来坏消息的。"
                        ]
                    },
                    {
                        "text": "Falcom - Get Over The Barrier!",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 460;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "area14.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "T670",
                                    "autotile22"
                                ]
                            },
                            "格沃堡下层。\n第四章整体的制作思路相比第三章有一些变化，可以看到主角自身的天赋树简化了不少，而怪物特技开始整活了。\n关于世界观的设定也逐步展开。不论是剧情还是游戏性的方面，信息密度都比较高，正好需要慢节奏的 BGM 相配合。",
                            "说起怪物特技，除去玩梗和致敬用的某些特技之外，作者从制作第一个区域开始时就一直在思考，到底怎样能把主角的\r[aqua]后抛\r搞出花样。\n在制作这个区域的时候终于恍然大悟，由于\r[aqua]后抛\r本身是个近距离影响的技能（不同于第三章的“推”），需要搭配远距离作用的怪物特技，才能盘活全图的布局。\n\r[yellow]援护\r这个怪物特技来自于《剑神宝藏》，有一些修改以便于使拥有它的敌人更好地与其他怪物互动。"
                        ]
                    },
                    {
                        "text": "Falcom - Unfathomed Force",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 450;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "area15.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile25",
                                    "ground6"
                                ]
                            },
                            "格沃堡中层。\n与阴暗的下层形成鲜明反差。开始接触格沃堡的中坚力量，敌人的特技比起之前更加丰富，也更加考验玩家的技巧。\n而至尊之录的故事，还未真正开始。",
                            "在这个区域主角获得了把黄门丢到身后的能力，这个能力最初是第四章刚开始制作时，内测群头脑风暴的产物。真正做出来之后发现“抛门”严重限制了黄门的摆放位置，而且为了让它与其他机制产生联动，又引入了\r[yellow]阳炎冲击\r这个特技，然后又发现最好能让血瓶也可以被抛。\n本区域的\r[yellow]移形换位\r来自《炒鸡蛋魔塔》，有一点修改以便于与某些其他元素互动。"
                        ]
                    },
                    {
                        "text": "Two Steps From Hell - Jump!",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 420;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "area16.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "star",
                                    "autotile8",
                                    2
                                ]
                            },
                            "格沃堡上层。\n与作者的前作《一夜登天！》的最后一个区域有一定相似之处。\n作为第四章前篇的收尾区域，思考难度并不大，爽就完事了。",
                            "这个区域的某些特技来自于塔圈目前公认的顶尖作品《永不复还》。\n同时也有某些特技带着鲜明的作者的个人特色。\n各种传奇奥义、血海奥义、蓝海技能的前缀，也许并无实际的意义，重要的是看着够帅。"
                        ]
                    },
                    {
                        "text": "Wisp X - Cosmic Fate",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 420;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "boss16.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile7",
                                    "autotile8",
                                    1
                                ]
                            },
                            "第四章 boss 战。\n按照惯例，章节以“期末考试”收尾，将之前出现过的各种特技都揉了进来。\n音乐充斥着轻松感，战斗本身也像玩闹一样。既然能走到这里了，想必 boss 也构不成多大威胁了吧。"
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    }
                ]
            }
        ],
        "2,4": [
            {
                "type": "choices",
                "text": "\t[终端,X30023]选择第四章后半部分前几个区域的BGM：",
                "choices": [
                    {
                        "text": "Delos - Silent Void",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 460;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "area17.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile26",
                                    "sand"
                                ]
                            },
                            "荒烟村。\n与第四章前篇类似，试图在一开篇就塑造出黑暗与不详的氛围。\n虽然最后都会变成无脑龙傲天爽塔，谁拦路就让谁去世，一定是这样的，嗯。"
                        ]
                    },
                    {
                        "text": "澤野弘之 - BaNG!!",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 450;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "area18.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile30",
                                    "T770"
                                ]
                            },
                            "拓岩镇。\n通过无脑膜人来融入集体，通过打压异己来获取优越感。在盲目的狂热情绪背后，到底谁才是真正的受益者？"
                        ]
                    },
                    {
                        "text": "Big Giant Circles - The Peyton Conspiracy",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 280;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "area19.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile31",
                                    "T817"
                                ]
                            },
                            "摩宇城下城区。\n作者首次在《宿命的终曲——最后的勇者》的“灰烬火神山”区域听到这首曲子的时候并没有特别的感觉。\n后来在试图找 cyberpunk 风格的音乐时又遇到了它……太好听了8~\n虽然我并不是很懂 cyberpunk，也许摩宇城有点 cyber，但一点都不 punk\n总之我的感觉是现代、迷醉、宏伟，多种感觉融合在一起，一起组成了一个生产力完全解放、却在发展上陷入停滞的大都市。"
                        ]
                    },
                    {
                        "text": "梅本竜 - 真理之要塞上层（误）",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 380;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "area19_2.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile31",
                                    "T916"
                                ]
                            },
                            "摩宇城上城区。\n其实是从《永不复还》里直接拿来的曲子，原曲似乎是个STG的五面道中曲。\n每次听到都会想到真理之要塞上层。就连敌人的攻防平均值都跟要塞上层的怪物差不多。\n第九章，我的第九章，呜呜呜~"
                        ]
                    },
                    {
                        "text": "川井宪次 - 死之花火",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 380;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "area19_3.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile32",
                                    "T817"
                                ]
                            },
                            "摩极大厦。\n突然而至的紧迫感和使命感。\n一切很快就要结束了！……大概吧……"
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "choices",
                "text": "\t[终端,X30023]选择第四章后半部分的过场BGM：",
                "choices": [
                    {
                        "text": "Really Slow Motion - Cutter Up",
                        "action": [
                            {
                                "type": "playBgm",
                                "name": "CutterUp.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile20",
                                    "T641"
                                ]
                            },
                            "秉凌被暗杀之后，在 U 的领导之下，械灵势力不仅没有解体，甚至变得更加团结了。\n第零公民的大多数成员并不在意，仅有一人组织起除灵者，要将秉凌最后的遗产彻底抹杀。"
                        ]
                    },
                    {
                        "text": "Blue Stahli - Overklock",
                        "action": [
                            {
                                "type": "playBgm",
                                "name": "boss17.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile26",
                                    "sand"
                                ]
                            },
                            "第零公民——无常。\n据说他平日为人友善，博闻强识，凭借自己的能力一步步从底层爬到了第零公民的位置。对权力和政治不感兴趣,在第零公民中处于底层。\n患有间歇性的精神病，发病之时深受折磨。再加上他自幼缺爱，从未有过真正的、能够谈心的朋友。"
                        ]
                    },
                    {
                        "text": "Eternal Melody - Nemesis",
                        "action": [
                            {
                                "type": "playBgm",
                                "name": "boss18.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile30",
                                    "T770"
                                ]
                            },
                            "第零公民——秩见。\n对戾气有一种特别的偏执，容不得任何戾气的存在。\n但他对戾气的定义十分奇怪，在他看来，人为了信仰而打得头破血流是高尚的，抱怨鸡毛蒜皮的小事是卑劣的。"
                        ]
                    },
                    {
                        "text": "Atrocious Raid（变调）",
                        "action": [
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
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile34",
                                    "T754"
                                ]
                            },
                            "第零公民——？？？！\n信息未知。只知道跟2221没有关系。",
                            "样板最近支持的“设置背景音乐播放速度”是个很 coooool 的功能，同一首曲子变个调就成了另外一种完全不同的感觉。\n但是想用好这个功能并不容易，更多的情况下一旦变调就变得很难听。"
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    }
                ]
            }
        ],
        "4,4": [
            {
                "type": "choices",
                "text": "\t[终端,X30023]选择第四章后半部分后几个区域的BGM：",
                "choices": [
                    {
                        "text": "Big Giant Circles - LAX",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 500;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "area20.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "A861",
                                    "T754"
                                ]
                            },
                            "柏兰大道。辣鸡作者做到这里也确实开始摆烂了。\n烂活。做什么都烂。反正就是很烂。测试员都这么说。感觉叫火兰大道也行。我玉玉了。"
                        ]
                    },
                    {
                        "text": "Michael Azusa - 如夢",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 400;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "area21.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile34",
                                    "T754"
                                ]
                            },
                            "千虹广场。\n本来是为了跟前一区域的“百蓝”对应，然而辣鸡作者看着自己起的这个名字，忍不住在这个区域摆了一堆红门。\n同时前一个区域的蓝门并没有很多。"
                        ]
                    },
                    {
                        "text": "久石譲 - 太阳照常升起",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.animateSpeed = 500;\n}"
                            },
                            {
                                "type": "playBgm",
                                "name": "sunrise.mp3",
                                "keep": true
                            },
                            {
                                "type": "insert",
                                "name": "MusicRoom场景",
                                "args": [
                                    "autotile11",
                                    "grass"
                                ]
                            },
                            "原本做到这里的计划是，最后再做个纯水区，然后完结。\n但是做水区也想放飞自我整点新机制，然后感觉要写不少脚本，就先摸了。\n说不定此去一摸，便是经年。"
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,30023,  0,30023,  0,30023,  0,30023,  0,30023,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,30023,  0,30023,  0,30023,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,336,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,30023,  0,  0,  0,30023,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

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