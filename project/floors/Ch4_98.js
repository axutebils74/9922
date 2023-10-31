main.floors.Ch4_98=
{
    "floorId": "Ch4_98",
    "title": "望梅界-6",
    "name": "望梅界-6",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "area19_2.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 50,
    "defaultGround": "ground5",
    "bgm": "area19_2.mp3",
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "area19_3.mp3"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,5": [
            {
                "type": "function",
                "function": "function(){\ncore.hideBgFgMap(\"bg2\", [6, 5]);\n}"
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": [
                    6,
                    4
                ]
            },
            "\t[晴芸,hero3]\b[down,null]我猜，你站在这里，不是为了欢送我们从前面的出口进入摩极大厦的。\n正好，我有问题想问。",
            "\t[夕月,E828]\b[down,null]不要管什么问题了，现在，快跑吧。\n从摩极大厦顶部涌出的力量越来越强了，现在出现的许多机甲已经让我都觉得很棘手了，再不跑说不定会有什么更恐怖的东西出现。",
            "\t[hero]\b[down,null]事到如今怎么可能收手。\n不管挡在前方的是什么，我都要将其扫平。",
            "\t[夕月,E828]\b[down,null]哎……那么，我必须测试一下你们的实力。\n若是过不了我这关，进去也是白白送死而已。",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "6,1": [
            "\t[系统提示]需要清理前面所有敌人。正在检测中……",
            {
                "type": "function",
                "function": "function(){\ncore.plugin.checkEnemy(\"Ch4_81\", \"Ch4_98\");\n}"
            },
            {
                "type": "if",
                "condition": "(flag:remainEnemyCount>0)",
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
                    "检测通过！\n前方通往摩极大厦，可以随时返回。\n击败顶部 boss 后所有械灵精华失效。",
                    {
                        "type": "hide",
                        "remove": true
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\ncore.removeFlag(\"remainEnemyInfo\");\ncore.removeFlag(\"remainEnemyCount\");\n}"
            }
        ]
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,0": {
            "floorId": "Ch4_105",
            "loc": [
                7,
                11
            ],
            "time": 500
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,4": [
            {
                "type": "setBlock",
                "number": "E828",
                "loc": [
                    [
                        6,
                        4
                    ]
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
                "type": "move",
                "loc": [
                    6,
                    4
                ],
                "time": 500,
                "keep": true,
                "async": true,
                "steps": [
                    "up:1"
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    2,
                    2
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    3,
                    3
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    2
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    2
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    9,
                    3
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    10,
                    2
                ]
            },
            {
                "type": "waitAsync",
                "excludeAnimates": true
            },
            {
                "type": "setVolume",
                "value": 0,
                "time": 1000,
                "async": true
            },
            "\t[夕月,E828]\b[down,null]……",
            "\t[晴芸,hero3]\b[down,null]现在，我可以提问了吗？",
            {
                "type": "waitAsync"
            },
            {
                "type": "playBgm",
                "name": "story.mp3"
            },
            {
                "type": "setVolume",
                "value": 90,
                "time": 0
            },
            "\t[夕月,E828]\b[down,null]我知道你要问什么。\n没错，是的，望梅界的功能，就是让大家逃避现实——也包括避开“那个”的影响。\n对，说的就是那种令人暴躁、激起仇恨的力量。",
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": "hero",
                "async": true
            },
            "\t[晴芸,hero3]\b[down,null]！！！",
            "\t[夕月,E828]\b[down,null]过去的几年里，我眼睁睁地看着摩宇城平民的精神状态越来越颓废，来望梅界逃避现实的人越来越多。在我上任大魔王之后对这种变化更是深有体会。\n有理论提出，这是因为大家被压榨得太狠了，奋斗过度得不到与之相匹配的回报，躺平是回归健康的生活状态。",
            "\t[夕月,E828]\b[down,null]与此同时我也观察到，发生在摩宇城内的争吵越来越多，整体糟糕的社会氛围更使得大家心力俱疲。\n但没有任何理论解释争吵变多的原因。",
            "\t[夕月,E828]\b[down,null]我做过调查，得出的结论是，这并不是因为大家压力比以前大了。许多人说不上自己发起或参与争吵的原因，只是单纯想那样做而已。就像是……所有人的脾气都变差了一样。",
            "\t[夕月,E828]\b[down,null]我将调查结果上报，然而狱贤并不在意。\n他的态度就像是这次面对你们一样，一切交给手下处理，他本人只管做自己的事情。",
            "\t[hero]\b[down,null]看来，“那个”的幕后黑手并不是狱贤。",
            "\t[夕月,E828]\b[down,null]肯定不是他，他本人只对如何飞升感兴趣。\n在那次上报之后，他随手就将更多资料的查看权限给了我，而我也终于从第零公民的历史中找到了一点痕迹。",
            "\t[夕月,E828]\b[down,null]五年前，早在械灵技术遭到全面禁止之前，械灵的创始者秉凌还在摩宇城的时候。\n曾经有两位第零公民自愿成为了一次械灵化实验的对象，用机器替换自己的大脑。",
            "\t[夕月,E828]\b[down,null]不同寻常之处在于，他们试图融合的并不是普通的芯片，而是来自玉梅天的至尊碎片。\n这些至尊碎片内部的原理至今都无人知晓，这种行为即使放到现在也是极其大胆的。",
            "\t[夕月,E828]\b[down,null]而实验结果……\r[yellow]没有记录\r。",
            "\t[晴芸,hero3]\b[down,null]这很显然是故意抹去的！",
            "\t[hero]\b[down,null]看来结果很不妙。\n如果这样的话，后来械灵技术遭到抵制也就很容易理解了。",
            "\t[晴芸,hero3]\b[down,null]这两位第零公民是谁？他们怎么样了？",
            "\t[夕月,E828]\b[down,null]连名字都不知道。他们相关的信息也被抹去了。",
            "\t[hero]\b[down,null]五年前……应该在首次发现至尊碎片之后，也就是说，实验的目的是“成为神”。\n这件事，跟“那个”的关系是？",
            "\t[夕月,E828]\b[down,null]我不知道，我真的不知道。\n可以确定的是，有能力影响摩宇城的第零公民，绝对不止狱贤一位。\n历史上有过很多第零公民都\r[yellow]退隐\r了，但这并不意味着他们真的\r[yellow]离开\r我们了。",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[夕月,E828]\b[down,null]原本，我还可以在望梅界保护大家。不管外面的环境如何恶劣，至少我能确保这个小圈子的纯净。\n但我也知道这种保护无法长久，而且后来又有证据表明，即使望梅界也不能完全隔绝“那个”的影响，只能在一定程度上减轻而已。",
            "\t[晴芸,hero3]\b[down,null]我的天……所以你就不做点什么来改变这一切吗……",
            "\t[夕月,E828]\b[down,null]我无能为力。你也知道，一旦离开这片空间，我就是跟你一样的普通人。\n我能做的只有这些。希望你们能从根源上解决问题。祝你们好运。",
            "\t[晴芸,hero3]\b[down,null]谢谢……也祝你好运。",
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
                "type": "animate",
                "name": "light2",
                "loc": [
                    6,
                    3
                ]
            },
            "\t[hero]\b[down,null]“那个”的力量，原来是那两位第零公民的力量吗……",
            "\t[晴芸,hero3]\b[down,null]整座城市的人都已经被“那个”污染了。\n拯救他们的唯一办法，只有继续前进、扫平一切敌人了。",
            {
                "type": "pauseBgm"
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "playBgm",
                "name": "area19_2.mp3"
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
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 17, 17, 17, 17, 17, 17, 89, 17, 17, 17, 17, 17, 17],
    [334, 17,566, 22, 17, 17,126, 17, 17, 21,567, 17,334],
    [332,333, 85, 23, 85,334,568,334, 85, 23, 85,333,332],
    [ 17,830, 17, 85, 17, 17, 85, 17, 17, 85, 17,831, 17],
    [ 17, 17,567, 21, 82,  0,828,  0, 82, 22,566, 17, 17],
    [ 17, 17, 17,831, 17,  0,  0,  0, 17,830, 17, 17, 17],
    [825, 17, 17, 17, 17, 17, 83, 17, 17, 17, 17, 17,660],
    [ 81, 82, 84, 17, 17, 81, 82, 17,334, 81, 21,849,  0],
    [ 17, 83, 22,665, 17,  0, 17, 17, 17,821,  0, 17,332],
    [ 17, 17,  0,  0,849,  0,  0,  0, 17, 17,836, 17, 17],
    [568, 17, 17, 82, 17,  0,  0,  0,839,661,  0,837,  0],
    [566, 82,568,566, 17,  0, 88,  0, 17, 17,333, 17, 21],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [308,  0,308,308,  0,  0,308,  0,  0,308,308,  0,308],
    [308,308,308,308,308,308,308,308,308,308,308,308,308],
    [  0,308,  0,308,  0,  0,308,  0,  0,308,  0,308,  0],
    [  0,  0,308,308,308,308,308,308,308,308,308,  0,  0],
    [  0,  0,  0,308,  0,308,308,308,  0,308,  0,  0,  0],
    [308,  0,  0,  0,  0,  0,308,  0,  0,  0,  0,  0,308],
    [308,308,308,  0,  0,308,308,  0,308,308,308,308,308],
    [  0,308,308,308,  0,308,  0,  0,  0,308,308,  0,308],
    [  0,  0,308,308,308,308,308,308,  0,  0,308,  0,  0],
    [308,  0,  0,308,  0,308,308,308,308,308,308,308,308],
    [308,308,308,308,  0,308,308,308,  0,  0,308,  0,308],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,168,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "hard1_enemy_ratio": 95
}