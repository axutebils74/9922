main.floors.Ch4_5G=
{
    "floorId": "Ch4_5G",
    "title": "？？？",
    "name": "？？？",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 50,
    "defaultGround": "sand",
    "bgm": null,
    "color": [
        0,
        0,
        0,
        0.6
    ],
    "weather": null,
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "area18.mp3"
        },
        {
            "type": "loadBgm",
            "name": "boss10.mp3"
        },
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero",
            "async": true
        },
        {
            "type": "changePos",
            "direction": "down"
        },
        {
            "type": "jumpHero",
            "dxy": [
                0,
                0
            ],
            "time": 300
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "left"
        },
        {
            "type": "sleep",
            "time": 300
        },
        {
            "type": "changePos",
            "direction": "right"
        },
        {
            "type": "sleep",
            "time": 300
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]\b[down,null]……刚才发生了什么？",
        "\t[2 2 2 1,N2221]\b[down,null]你可算是“醒了”。才这点强度的战斗就过载了。",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[2 2 2 1,N2221]\b[down,null]不过看在任务完成的份上，给你个及格分吧。",
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[2 2 2 1,N2221]\b[down,null]怎么，你真的对刚才发生的事情有兴趣？\n作为首战告捷的庆祝，跟你讲讲倒也无妨。"
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.setBgLight([\n\t[6, 5, 120]\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "6,5": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
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
                    "text": "\t[2 2 2 1,N2221]你想问什么？",
                    "choices": [
                        {
                            "text": "关于无常",
                            "action": [
                                "\t[2 2 2 1,N2221]\b[down,null]他已经交代完所知的一切情报，说完遗言了。\n这人在第零公民中处于底层，知道的不比我多很多。",
                                "\t[2 2 2 1,N2221]\b[down,null]正如你之前所见，荒烟村是一个大型的生化实验场地，每隔一段时间就会有这样一次养蛊活动，最后的幸存者会被带走，大卸八块仔细研究。无常就是这个区域的管理者。",
                                "\t[2 2 2 1,N2221]\b[down,null]说起他进行这种实验的目的，还要先从第零公民的目标说起。\n你觉得，统治者坐稳了江山之后，他们考虑的事情是什么？",
                                {
                                    "type": "animate",
                                    "name": "E_unhappy",
                                    "loc": "hero",
                                    "async": true
                                },
                                "\t[hero]\b[down,null]额……也许，可能，大概……是……享乐？",
                                "\t[2 2 2 1,N2221]\b[down,null]不能否认历史上的确存在过这样的统治者，这类人胸无大志、能力平平，能掌权只是因为投了个好胎。\n还有别的可能性吗？",
                                "\t[hero]\b[down,null]……扩张？",
                                "\t[2 2 2 1,N2221]\b[down,null]正确。但凡是通过自身努力脱颖而出者，都不会轻易满足于现状，那种对强大力量的渴求，是刻在他们骨子里的。",
                                "\t[hero]\b[down,null]可是我记得之前晴芸还抱怨管理者太摸鱼了，也不探索管辖范围外的地区……",
                                "\t[2 2 2 1,N2221]\b[down,null]还有另一种可能，就是他们探索过了，但大片的蛮荒之地上并没有他们感兴趣的东西。",
                                {
                                    "type": "animate",
                                    "name": "E_dots",
                                    "loc": "hero"
                                },
                                "\t[2 2 2 1,N2221]\b[down,null]第零公民感兴趣的是，如何让他们的生命层次、乃至所统领的文明，进化到下一个等级。\n为了达成这一目标，他们制定了多种方案，齐头并进。\n无常所负责的，就是\r[yellow]生物科技\r方向。",
                                "\t[2 2 2 1,N2221]\b[down,null]这种邪恶的实验是他们研究中的一个重要环节。从现在起不复存在了。"
                            ]
                        },
                        {
                            "text": "关于其他第零公民",
                            "action": [
                                "\t[2 2 2 1,N2221]\b[down,null]第零公民实际上是一个很松散的组织，他们分别执掌各自所在区域的权柄，平日里彼此互不相干。\n这意味着当我们对一部分第零公民进攻时，另一部分很可能会袖手旁观。",
                                "\t[2 2 2 1,N2221]\b[down,null]面对“文明发展”这一共同挑战，不同第零公民之间存在很大分歧。\n除去无常的“生物科技”之外，还有“宗教”“机械”“修仙”等方向，都有人在尝试、摸索。",
                                "\t[2 2 2 1,N2221]\b[down,null]之前迫害械灵和智械的，就是一位专攻修仙方向的第零公民，同时也是最大城市“摩宇城”的管理者，名为\r[orange]狱贤\r。\n不过除灵者很明显是机械方向的产物，大概是他和机械方向的负责者进行过合作或者交易。",
                                "\t[hero]\b[down,null]机械方向的第零公民为什么要参与进来？",
                                "\t[2 2 2 1,N2221]\b[down,null]这个问题倒是简单，以前除灵者首领一直在大肆宣扬，械灵和智械这种拥有自主意识的机械是异端，只有完全被人类控制的机械才是好机械。\n这必然也是那位第零公民的想法。",
                                {
                                    "type": "animate",
                                    "name": "E_dots",
                                    "loc": "hero"
                                },
                                "\t[2 2 2 1,N2221]\b[down,null]机械方向的负责者名为\r[orange]福博\r，也是我们此次行动的目标。\n不过关于此人的信息比较少，他似乎不是任何一个地区的管理者，现在去向不明。\n我对于他的去向其实有一点猜想，不过你现在没必要知道。"
                            ]
                        },
                        {
                            "text": "关于你",
                            "action": [
                                "\t[2 2 2 1,N2221]\b[down,null]你问我为什么最后关头才赶到？\n一方面是你们俩能通过小规模传送门快速到达这里，大部队可做不到这样的机动性。\n另一方面嘛——你不会以为除灵者这样的军事单位，在第零公民的地盘上想到哪就到哪吧？",
                                "\t[2 2 2 1,N2221]\b[down,null]简单来讲，我需要演戏，尽量延缓真实意图暴露的时间。\n比如之前你在格沃堡上层打伤的那些高级除灵者，被伪装成是它们在攻占格沃堡的时候受伤的。\n而我在“观众”眼里，是被除灵者追杀的目标。",
                                "\t[2 2 2 1,N2221]\b[down,null]第零公民现在所见的是，除灵者已经将我拿下，任务完成正在返回——这个理由几乎可以让我们在他们的地盘上畅行无阻。",
                                {
                                    "type": "animate",
                                    "name": "E_dots",
                                    "loc": "hero"
                                },
                                "\t[hero]\b[down,null]……还是感觉哪里不对劲。\n你先把我们派到这里的目的是什么？真的只是为了让我练级？",
                                "\t[2 2 2 1,N2221]\b[down,null]没错，我都把毁灭拳套给你了，关键时刻救你一命，刚刚又跟你说了这么多计划，我可是真的把你当盟友的。\n对了，以后请务必称我为2221，我以前的名字已经彻底弃用了。",
                                {
                                    "type": "animate",
                                    "name": "E_unhappy",
                                    "loc": "hero",
                                    "async": true
                                },
                                "\t[hero]\b[down,null]（怎么感觉，我好像很特别一样……\n虽然说某种意义上确实如此。）"
                            ]
                        },
                        {
                            "text": "下一步的计划",
                            "color": [
                                255,
                                215,
                                0,
                                1
                            ],
                            "action": [
                                "\t[2 2 2 1,N2221]\b[down,null]很简单，杀入摩宇城，直奔最重要的目标——修仙方向的\r[orange]狱贤\r，和机械方向的\r[orange]福博\r。\n摩宇城是最大的城市。只要将其拿下，其他第零公民都将失去抵抗的想法。",
                                "\t[2 2 2 1,N2221]\b[down,null]我现在建议你先去看看晴芸——\n这一路上你都没有去真正地了解她吧，一个一等公民家的千金小姐，经历了这些，挺不容易的。"
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "6,12": {
            "floorId": "Ch4_5H",
            "loc": [
                6,
                0
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
    [176,176,  0,176,176,50105,50106,50107,176,176,  0,176,176],
    [176,  0,  0,130017,50112,50113,50114,50115,50116,  0,  0,130016,176],
    [176,130027,  0,  0,50120,50121,50122,50123,50124,130017,  0,130028,176],
    [176,130035,  0,130016,50128,50129,50130,50131,50132,  0,  0,130036,176],
    [176,130032,  0,130032,50136,50137,50138,50139,50140,130032,  0,130032,176],
    [176,  0,769,  0,  0,130026,844,130026,  0,  0,769,  0,176],
    [176,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,176],
    [176,  0,  0,768,  0,  0,  0,  0,  0,768,  0,  0,176],
    [176,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,176],
    [176,130016,  0,  0,  0,  0,  0,  0,  0,  0,130017,  0,176],
    [176,  0,130033,  0,130017,  0,  0,  0,  0,  0,  0,  0,176],
    [176,  0,  0,  0,  0,  0,  0,  0,  0,130033,  0,130016,176],
    [176,176,176,176,176,130036,  0,130035,176,176,176,176,176]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,130025,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,130025,  0,  0,  0],
    [  0,  0,  0,  0,  0,130028,  0,130027,  0,  0,  0,  0,  0],
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0, 93,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "hard1_enemy_ratio": 95
}