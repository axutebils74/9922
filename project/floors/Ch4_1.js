main.floors.Ch4_1=
{
    "floorId": "Ch4_1",
    "title": "通幽径-1",
    "name": "通幽径-1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "T641",
    "firstArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.removeMaps(\"BMT20\", \"Ch_D2\");\ncore.setFlag(\"__visited__\", { Ch4_1: true });\ncore.values.animateSpeed = 330;\n// 数据统计不再包含前三章\ncore.setFlag(\"drawStat_start\", \"Ch4_1\");\n}"
        },
        {
            "type": "playBgm",
            "name": "area13.mp3"
        },
        {
            "type": "moveHero",
            "time": 300,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "sleep",
            "time": 300
        },
        "\t[hero]赶了这么久的路，终于碰到有点威胁的对手了。我们离格沃堡应该已经不远了。",
        "\t[hero]哎，要不是我被幽搞了一手，失去了很多能力，面前这个敌人我随手就能解决……",
        {
            "type": "changePos",
            "direction": "down"
        },
        "\t[hero]所以，你研究了这么久，搞明白你偷的这个东西怎么用了吗？",
        "\t[晴芸,hero3]我都说了这不是偷，这是抢救！\n至于用法……大概明白了一点吧。",
        "\t[晴芸,hero3]这是本魔法书，它不像皇极徽章那样能够给机械带来增幅，应该是魔法界的人研究出来给人类自保用的。",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero",
            "async": true
        },
        "\t[hero]魔法……界……看来我是用不了这个了。",
        "\t[晴芸,hero3]其实也不是很复杂，恰好我可以使用它，你不会魔法的话让我来就行啦。\n只需给它灌注能量，我就可以用它施放技能。就拿面前的这个家伙试试吧。",
        {
            "type": "setValue",
            "name": "flag:skill6_cost",
            "value": "50"
        },
        {
            "type": "setValue",
            "name": "flag:talent2_0_lv",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "item:talentTree2",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "item:skill6",
            "value": "1"
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        {
            "type": "if",
            "condition": "(flags.hard == 1)",
            "true": [
                "\t[系统提示]检测到当前是简化难度。\n这次的简化难度福利是一个万能绿钥匙，可以无限制地开启绿门！",
                {
                    "type": "setValue",
                    "name": "item:I_superGreenKey",
                    "value": "1"
                },
                {
                    "type": "choices",
                    "text": "\t[系统提示]另外，简化难度下本部分所有敌人的攻防值是正常的95%（最终boss除外）。\n如果你觉得遍地0伤太水了，建议选择普通难度。",
                    "choices": [
                        {
                            "text": "我明白了",
                            "action": []
                        }
                    ]
                }
            ]
        },
        {
            "type": "if",
            "condition": "core.getFlag(\"autoGetItem\",0)==1",
            "true": [
                {
                    "type": "choices",
                    "text": "\t[系统提示]检测到自动拾取已经开启。\n如果想认真拆塔，建议关掉此功能，本章有部分地方留物品在地上不捡会有收益。",
                    "choices": [
                        {
                            "text": "现在关掉",
                            "color": [
                                255,
                                215,
                                0,
                                1
                            ],
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "flag:autoGetItem",
                                    "value": "0"
                                }
                            ]
                        },
                        {
                            "text": "我就随便撞撞",
                            "action": []
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.setBgLight([\n\t[1, 9, 100],\n\t[4, 3, 100],\n\t[8, 5, 100]\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "6,8": [
            "\t[晴芸,hero3]怎么样，这个技能是不是很厉害呀？",
            {
                "type": "changePos",
                "direction": "down"
            },
            "\t[hero]感觉和之前的\\i[skill3]\r[yellow]轻风\r各有千秋，这个技能不需要敌人背后是空地，但是要求自己身后是空地。\n不过这样好像很容易让敌人堵住自己的后路……",
            "\t[晴芸,hero3]确实，不过咱有\\i[fly]传送器呀！\n只要利用好传送器，就不怕堵路啦！",
            "\t[晴芸,hero3]而且，这只是这本书能力的一小部分。只要给它喂一些金币和黄宝石，甚至能解锁更强大的技能！",
            {
                "type": "animate",
                "name": "E_unhappy",
                "loc": "hero",
                "async": true
            },
            "\t[hero]又是……金币……和黄宝石……",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "1,0": {
            "floorId": "Ch4_2",
            "loc": [
                1,
                12
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [159, 91,159,159,159,159,159,159,159,159,328,  0,160],
    [159,  0, 82,386, 82,386,159,  0,334,159,  0,330,160],
    [159,  0,159,159,159,159,159,652,  0,159,327, 81,330],
    [159,331,159,  0,669, 22,159,159,649, 81,648,159,331],
    [159,  0, 81,545,330,  0,159,584,  0,  0,  0,159,159],
    [159,334,159, 21,  0,645,  0,330,669,649, 81,330,159],
    [159,  0,159,159,159,  0,328,  0,159,  0,159,159,333],
    [  0,547,  0,  0,159,159,159,159,159,331,159,159,331],
    [327,159,159,  0,330,  0,  0,159,328,  0,  0,  0, 82],
    [  0,669,159, 84,159,159,545,159,159,159, 81,159,159],
    [330,159,159, 22,159,334,  0, 21,159, 21,651, 21,159],
    [159,159, 22, 21,159,  0,  0,  0,159,329, 22,329,159],
    [159,159,159,159,159,159,  0,159,159,159,159,159,159]
],
    "bgmap": [
    [  0,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,171,171,171,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,171,171,171,171,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,171,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,171,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,171,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,171,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,668,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,668,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,668,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "area13.mp3",
    "color": [
        0,
        0,
        0,
        0.6
    ],
    "weather": null,
    "upFloor": [
        1,
        0
    ],
    "downFloor": [
        6,
        10
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}