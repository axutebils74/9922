main.floors.Ch4_30=
{
    "floorId": "Ch4_30",
    "title": "圣洁教堂-中心",
    "name": "圣洁教堂-中心",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area7_2.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0,
            "h": 96
        }
    ],
    "ratio": 50,
    "defaultGround": null,
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "area16.mp3"
        }
    ],
    "eachArrive": [],
    "parallelDo": "var lastTime = core.getFlag('lastWeatherTime', 0);\n// 每多少毫秒重绘一次；天气效果默认都是30\nif (timestamp - lastTime > 60) {\n\tvar lastOffsetX = core.getFlag('lastOffsetX', 0); // 上次的offset\n\tvar image = core.material.images.images['area7_2.jpg']; // 获得图片，这里写图片名\n\tvar width = image.width,\n\t\theight = 3 * 32; // 获得宽高\n\t// 绘制下一次，参见drawImage的API：http://www.w3school.com.cn/tags/canvas_drawimage.asp\n\tif (lastOffsetX + 416 > width) { // 需要首尾相接\n\t\t// 尾部\n\t\tcore.canvas.bg.drawImage(image, lastOffsetX, 0, width - lastOffsetX, height, 0, 0, width - lastOffsetX, height);\n\t\t// 首部\n\t\tcore.canvas.bg.drawImage(image, 0, 0, lastOffsetX + 416 - width, height, width - lastOffsetX, 0, lastOffsetX + 416 - width, height);\n\t} else { // 不需要，直接绘制\n\t\tcore.canvas.bg.drawImage(image, lastOffsetX, 0, width, height, 0, 0, width, height);\n\t}\n\t// 移动图片\n\tlastOffsetX += 1; // 这里是每次移动的像素\n\tif (lastOffsetX > 416) lastOffsetX -= width;\n\tcore.setFlag('lastOffsetX', lastOffsetX);\n\tcore.setFlag('lastWeatherTime', timestamp); // 记录时间\n}",
    "events": {
        "6,10": [
            "\t[系统提示]需要清理前面所有敌人。正在检测中……",
            {
                "type": "function",
                "function": "function(){\ncore.plugin.checkEnemy(\"Ch4_21\", \"Ch4_30\");\n}"
            },
            {
                "type": "if",
                "condition": "(flag:remainEnemyCount>1)",
                "true": [
                    "共有${flag:remainEnemyCount}个敌人未清除。",
                    {
                        "type": "if",
                        "condition": "(flag:remainEnemyCount>641)",
                        "true": [
                            "当前剩余敌人较多，请自行检查。"
                        ],
                        "false": [
                            "剩余敌人：${flag:remainEnemyInfo}"
                        ]
                    }
                ],
                "false": [
                    "检测通过！\n剩余敌人：${flag:remainEnemyInfo}",
                    {
                        "type": "hide"
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\ncore.removeFlag(\"remainEnemyInfo\");\ncore.removeFlag(\"remainEnemyCount\");\n}"
            }
        ],
        "6,7": [
            {
                "type": "if",
                "condition": "(!core.isReplaying())",
                "true": [
                    "\t[械灵-Angel,E704]\b[down,null]欢迎二位，久等了。",
                    "\t[晴芸,hero3]\b[down,null]我还以为这种教堂场景的守关boss会是个满口胡话的老神棍，或者表面高风亮节实则阴险狡诈、掌控黑暗力量的大叔。",
                    "\t[晴芸,hero3]\b[down,null]再不济，也应该是个纯洁善良却因为某种因素不得不与主角为敌的漂亮姐姐吧~",
                    {
                        "type": "setVolume",
                        "value": 0,
                        "time": 4000,
                        "async": true
                    },
                    "\t[械灵-Angel,E704]\b[down,null]然后像我这种长相的敌人就是普通的杂鱼天使，没有名字的那种。\n\n\r[yellow]然而我不是真正的天使，这里也不是真正的教堂。\r",
                    "\t[hero]\b[down,null]哦？",
                    "\t[械灵-Angel,E704]\b[down,null]你们是无神论者吧？\n真正的天使，就和她们的主人“上帝”一样，只存在于人们的想象之中。",
                    "\t[hero]\b[down,null]那这里到底是？……",
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "playBgm",
                        "name": "secret.mp3"
                    },
                    {
                        "type": "setVolume",
                        "value": 90,
                        "time": 0
                    },
                    "\t[械灵-Angel,E704]\b[down,null]但是，“神”在被人类否定之后，又出现在了世上。\n当人类社会中，少数的高等公民能完全操控普通人的命运时……",
                    "\t[械灵-Angel,E704]\b[down,null]一位高等公民只需一句话，就能剥夺一个人的性命，也可以让一个人飞黄腾达。\n一句话，便能将一个村庄夷为平地，也能让高楼大厦在那里拔地而起。\n对于芸芸众生而言，这少数高等公民不就是活生生的“神”吗？",
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    "\t[hero]\b[down,null]听起来只是很有权力的普通人而已。\n而且高等公民真有那么神奇吗？我没去过城里，但我身边就有一位高等公民，你别骗我。",
                    "\t[晴芸,hero3]\b[down,null]……同样是高等公民，他们之间的差距也是很大的。\n我想，你说的应该是极少数的\r[red]那种公民\r？……",
                    "\t[械灵-Angel,E704]\b[down,null]没错，就是突破了自然规则限制、大权在握的那一小部分。\n所谓的突破限制如，打破生老病死的规律，永生不灭。",
                    "\t[hero]\b[down,null]？？？\n这怎么可能，难道说……",
                    "\t[晴芸,hero3]\b[down,null]……就是我之前跟你说过的“机械改造”和“基因编辑”。",
                    "\t[械灵-Angel,E704]\b[down,null]人类因科技而否定了神的存在，却又因科技自己孕育了所谓的“神”。时至今日，\n\r[yellow]不同阶级的人类，已经成为不同的物种了。\r",
                    {
                        "type": "animate",
                        "name": "E_surprise",
                        "loc": "hero",
                        "async": true
                    },
                    "\t[hero]\b[down,null]？？？！\n是了，之前见到的矮矮的“下等人”，从外表上看的确和我们相差很大了。",
                    "\t[械灵-Angel,E704]\b[down,null]不同阶级分化成不同的生物，这种情况的形成是有条件的。\n其一，科技发展程度足够高，为后天改变物种提供理论基础；\n其二，社会资源分配不均衡，极少数人享有绝大多数的财富；\n其三，阶层固化且缺乏管制，高阶层者完全掌握财富和权力。",
                    "\t[械灵-Angel,E704]\b[down,null]现在的人类，可以分为三大种族。\n那些矮个子的“下等人”，像你这样的“上等人”，以及——\n地位远在一等公民之上的、又被称为“神”的\r[yellow]“第零公民”\r。",
                    "\t[械灵-Angel,E704]\b[down,null]总的来讲，下等人和上等人的区别主要在于身高，其他方面差别不大，仍然可以算是同一个物种。\n而“第零公民”凭借着机械改造和基因编辑两大技术，几乎要彻底脱离“人类”这个概念了。",
                    {
                        "type": "waitAsync"
                    }
                ]
            },
            "\t[械灵-Angel,E704]\b[down,null]当统治人类社会的生物不再是人类时，会发生什么呢？",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero",
                "async": true
            },
            {
                "type": "setVolume",
                "value": 0,
                "time": 4000
            },
            "\t[械灵-Angel,E704]\b[down,null]想不出来吗？无妨，我们很快就会亲自见证历史了。\n现在，该回到正题了。",
            {
                "type": "animate",
                "name": "rage_buff",
                "loc": [
                    6,
                    6
                ],
                "async": true
            },
            {
                "type": "playBgm",
                "name": "area15.mp3"
            },
            {
                "type": "setVolume",
                "value": 90,
                "time": 0
            },
            "\t[械灵-Angel,E704]\b[down,null]我的身后就是通往格沃堡上层的入口。\n击败我，继续前进，你们很快就会窥见这世界的真实面目。\n来吧！",
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    9
                ]
            },
            {
                "type": "setValue",
                "name": "flag:disableFly",
                "value": "1"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "6,2": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "data": [
                {
                    "type": "confirm",
                    "text": "上去就无法返回了。",
                    "yes": [
                        {
                            "type": "animate",
                            "name": "E_dots",
                            "loc": "hero"
                        },
                        "\t[hero]\b[down,null]那么，要出发了。\n最后的上层区域，我们来了！",
                        {
                            "type": "playSound",
                            "name": "jump.mp3"
                        },
                        {
                            "type": "animate",
                            "name": "skill6",
                            "loc": "hero",
                            "async": true
                        },
                        {
                            "type": "jumpHero",
                            "dxy": [
                                0,
                                -4
                            ],
                            "time": 500
                        },
                        {
                            "type": "changeFloor",
                            "floorId": "Ch4_31",
                            "loc": [
                                6,
                                11
                            ],
                            "direction": "up",
                            "time": 1000
                        }
                    ],
                    "no": []
                }
            ]
        }
    },
    "changeFloor": {
        "6,12": {
            "floorId": "Ch4_2D",
            "loc": [
                6,
                0
            ]
        }
    },
    "afterBattle": {
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:disableFly",
                "value": "0"
            },
            {
                "type": "setBlock",
                "number": "E704",
                "loc": [
                    [
                        6,
                        6
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "rage_disp",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    9,
                    6
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    10,
                    7
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    9,
                    7
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    7
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    9
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    5,
                    7
                ]
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": [
                    6,
                    6
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    3,
                    7
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    2,
                    7
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    3,
                    6
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    5,
                    3
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    3
                ]
            },
            "\t[械灵-Angel,E704]\b[down,null]果然厉害，不愧是\r[red]那位大人\r看重的存在……",
            "\t[hero]\b[down,null]刚才话题都被你带跑了，所以你这装扮，还有这教堂是怎么回事？",
            "\t[械灵-Angel,E704]\b[down,null]我不知道像你这样的天才智械，还有你身后这位高等公民，是否能理解普通人的想法。",
            "\t[晴芸,hero3]\b[down,null]明知自己只是普通人，是“神”手下的“宠物”，也无力改变现状，知道自己一辈子注定碌碌无为，甚至子孙后代都会如此。",
            "\t[晴芸,hero3]\b[down,null]于是便干脆地“躺平”，沉浸在廉价的精神鸦片中逃避现实。\n这便是我所知的，大多数人的选择。",
            "\t[械灵-Angel,E704]\b[down,null]然后我们提供了另一种选择——投奔一位更好的“神”。\n在这位“神”的统治下，普通人通过努力就会被“神”接纳，成为接近“神”的存在。",
            "\t[械灵-Angel,E704]\b[down,null]既然有了负责接受信仰的“神”，就需要有负责传递神旨的“使者”。\n于是就有了我。",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[hero]\b[down,null]我明白了，我都明白了！\n原来，这才是下层区域进行械灵化选拔的真相。它给了底层人民通过奋斗改变命运的“机会”，和生活的“希望”！",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[晴芸,hero3]\b[down,null]话说回来，像你这样的械灵，到底是什么型号的？\n之前在门口和下层区域末也遇到过像你这样没有标明型号的械灵……",
            "\t[械灵-Angel,E704]\b[down,null]不标明型号的原因是，我们T型——template，可以是任何模样的生物。\n最大的特点就是没有共同特点。",
            "\t[晴芸,hero3]\b[down,null]原来如此……",
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": "hero"
            },
            "\t[hero]\b[down,null]T型！难怪，我之前就隐约感觉，入口处的那家伙其实一拳就能把我放倒……",
            "\t[械灵-Angel,E704]\b[down,null]不必妄自菲薄，你们作为被\r[red]那位大人\r看重的存在，必然有着极为特殊的地方。\n我也很看好你们这对组合。也许我很快就能看到你们大放异彩了。",
            "\t[械灵-Angel,E704]\b[down,null]再见。祝你们的上层之旅一路顺风。",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "remove": true
            },
            {
                "type": "animate",
                "name": "light2",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[晴芸,hero3]\b[down,null]真不简单。现在我觉得教堂最后的boss是个心理成熟、博学多才的萝莉天使也不差。",
            "\t[hero]\b[down,null]仍然，有些难以接受她刚才说的话。\n人类被一群即将不做人的生物统治，这未免也太……危言耸听了。",
            "\t[晴芸,hero3]\b[down,null]并非危言耸听。\n人类社会已经病入膏肓，我在这里则看到了光明的未来……",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[hero]\b[down,null]（有点能理解她为什么从摩宇城跑到这来了……不过她所说的光明的未来，到底是什么？）"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  0,  0, 17,120128, 17,120130, 17,  0,  0,  0,  0],
    [120021,120022,120022,120022,120022,120136, 17,120138,120022,120022,120022,120022,120023],
    [120029,120030,120030,120030,120030,120144,  0,120146,120030,120030,120030,120030,120031],
    [175,  0,175, 30, 53, 85, 85, 85, 53, 30,175,  0,175],
    [175,333,175,175, 30, 53, 22, 53, 30,175,175,333,175],
    [175,657,332,175,175,175,  0,175,175,175,332,656,175],
    [175,331,334, 85,  0,331,704,331,  0, 85,334,331,175],
    [175, 21, 85, 85,656, 85,  0, 85,657, 85, 85, 21,175],
    [175,175,330,652, 21,175,  0,175, 21,653,330,175,175],
    [175,175,175,175,175,175,  0,175,175,175,175,175,175],
    [175,175,175,175,175,175,126,175,175,175,175,175,175],
    [175,566,330,566, 82,  0,  0,  0, 82,566,330,566,175],
    [175,175,175,175,175,175,  0,175,175,175,175,175,175]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [315,315,315,315,315,315,315,315,315,315,315,315,315],
    [315,315,315,315,315,315,315,315,315,315,315,315,315],
    [315,315,315,315,315,315,315,315,315,315,315,315,315],
    [315,315,315,315,315,315,315,315,315,315,315,315,315],
    [315,315,315,315,315,315,315,315,315,315,315,315,315],
    [315,315,315,315,315,315,315,315,315,315,315,315,315],
    [315,315,315,315,315,315,315,315,315,315,315,315,315],
    [315,315,315,315,315,315,315,315,315,315,315,315,315],
    [315,315,315,315,315,315,315,315,315,315,315,315,315],
    [315,315,315,315,315,315,315,315,315,315,315,315,315]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,120129,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,120137,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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
    [  0,  0,  0,  0,  0,  0, 91,  0,  0,  0,  0,  0,  0],
    [120037,120038,120038,120038,120038,120038,120038,120038,120038,120038,120038,120038,120039],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0, 93,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "bgm": "area15.mp3",
    "flyPoint": [
        6,
        12
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}