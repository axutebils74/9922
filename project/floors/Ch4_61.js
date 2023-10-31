main.floors.Ch4_61=
{
    "floorId": "Ch4_61",
    "title": "拓岩镇-1",
    "name": "拓岩镇-1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "T770",
    "bgm": "area18.mp3",
    "color": [
        0,
        0,
        0,
        0.4
    ],
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 150,
            "steps": [
                "right:1"
            ]
        },
        "\t[hero]走了这么远总算看到人了。\n等等，这是……",
        {
            "type": "animate",
            "name": "hand",
            "loc": [
                4,
                7
            ]
        },
        {
            "type": "animate",
            "name": "hand",
            "loc": [
                4,
                7
            ]
        },
        {
            "type": "animate",
            "name": "skill10",
            "loc": [
                4,
                7
            ]
        },
        {
            "type": "playBgm",
            "name": "boss10.mp3",
            "keep": true
        },
        "\t[虎魔甲士,E771]\b[down,3,6]最后再给你一次机会，你说不说！",
        "\t[五等公民,N691]\b[down,4,7]我就是饿死，死外边，从楼顶跳下去，也绝对不说！",
        "\t[虎魔剑士,E772]\b[down,3,8]冥顽不灵，既然你想死，就成全你！",
        "\t[hero]\b[down,hero]且慢！",
        {
            "type": "animate",
            "name": "E_question",
            "loc": [
                3,
                8
            ]
        },
        "\t[虎魔剑士,E772]\b[down,3,8]嗯？你是何人？",
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": [
                3,
                6
            ]
        },
        "\t[虎魔甲士,E771]\b[down,3,6]这，这两个人，是上等人！",
        "\t[虎魔剑士,E772]\b[down,3,8]上等人？来这？肯定不怀好意。",
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]\b[down,1,7]你好，我们来给这里的最高管理者送一封信。",
        "\t[虎魔剑士,E772]\b[down,3,8]我早就说上等人都是些自大的家伙，刚来就想见\r[yellow]洛渔神\r一面，简直狂得没边了。",
        "\t[hero]\b[down,1,7]啊不是，我们要找的人不叫什么\r[yellow]洛渔\r，而是\r[yellow]秩见\r。",
        "\t[虎魔甲士,E771]\b[down,3,6]没听说过，你是来找茬的吧？",
        "\t[虎魔剑士,E772]\b[down,3,8]正好，老子早看这些上等人不顺眼了，以\r[yellow]洛渔神\r之名，杀！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "4,7": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag(\"tmpz\", 0);\nfor (var i = 0; i <= 4; ++i) {\n\tfor (var j = 5; j <= 9; ++j) {\n\t\tif (core.plugin.isEnemy(i, j)) {\n\t\t\tcore.setFlag(\"tmpz\", 1);\n\t\t}\n\t}\n}\n}"
            },
            {
                "type": "if",
                "condition": "flag:tmpz != 0",
                "true": [
                    "\t[虎魔甲士,E771]\b[down,null]嗯？你把我们当空气？",
                    {
                        "type": "function",
                        "function": "function(){\nfor (var i = 0; i <= 4; ++i) {\n\tfor (var j = 5; j <= 9; ++j) {\n\t\tif (core.plugin.isEnemy(i, j)) {\n\t\t\tcore.battle(core.getBlockId(i, j), i, j);\n\t\t}\n\t}\n}\n}"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "setValue",
                        "name": "flag:tmpz",
                        "value": "0"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:tmpz == 0)",
                "true": [
                    {
                        "type": "pauseBgm"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.removeFlag(\"tmpz\");\n}"
                    },
                    "\t[五等公民,N691]\b[down,null]谢，谢谢你们……",
                    "\t[hero]\b[down,null]不用谢。",
                    "\t[晴芸,hero3]\b[down,null]我们初来乍到，请问刚才那两个人是？",
                    "\t[五等公民,N691]\b[down,null]是\r[yellow]虎魔帮\r的人，我不愿加入他们，就被他们视为异端。",
                    "\t[hero]\b[down,null]虎魔帮？",
                    "\t[五等公民,N691]\b[down,null]虎魔帮是这里最大的帮派，最大的特点就是整天把他们那什么\r[yellow]洛渔神\r挂在嘴边，加入虎魔帮之后必须每天膜拜“洛渔神”114次，否则便是背叛帮派，该当死罪。",
                    "\t[五等公民,N691]\b[down,null]虽然不得不承认，他们开始膜洛渔神之后，的确是受到了一种神秘力量的加持，身体素质远远超出我这种普通人——\n但是要我跟他们一样整天洛渔神洛渔神的，我实在无法接受！感觉智商受到了侮辱！",
                    "\t[晴芸,hero3]\b[down,null]唔……好吧。",
                    "\t[五等公民,N691]\b[down,null]今夜他们好像在搞什么大动作，挨家挨户查水表，我只是不想跟着喊他们那蠢b口号，就差点被他们打死。\n我先找个地方躲起来，你们也要小心，他们不会善罢甘休的。",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                4,
                                7
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "animate",
                        "name": "zone",
                        "loc": [
                            4,
                            7
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    },
                    "\t[晴芸,hero3]\b[down,null]……刚来就惹上麻烦了。",
                    "\t[hero]\b[down,null]既然他们想打架，那就满足他们！",
                    {
                        "type": "playBgm",
                        "name": "area18.mp3"
                    }
                ]
            }
        ],
        "6,7": [
            {
                "type": "changePos",
                "direction": "down"
            },
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": "hero"
            },
            "\t[hero]\b[down,null]这个机器人……",
            "\t[晴芸,hero3]\b[down,null]你也发现了吗？这个机器人携带着能够炸开门的炸弹，可以好好利用。",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "1,9": [
            {
                "type": "choices",
                "text": "\t[神像,moneyShop]如果你咸过绿钥匙，或者你持有\\i[I_superGreenKey]万能绿钥匙，我就送你一个非常强大的道具！\n并且如果你的【毁灭重拳】或【裂地重拳】不足3级，我可以免费把它们直接升到3级。",
                "choices": [
                    {
                        "text": "没错，我满足条件！",
                        "color": [
                            0,
                            255,
                            5,
                            1
                        ],
                        "condition": "item:greenKey<99",
                        "action": [
                            {
                                "type": "playSound",
                                "name": "buy.mp3"
                            },
                            {
                                "type": "function",
                                "function": "function(){\nif (core.getTalentLv3(1) == 1) {\n\tcore.setFlag(\"skill10_use_time\", 641);\n\tcore.plugin._tryUpgrade3(1);\n}\nif (core.getTalentLv3(1) == 2) {\n\tcore.setFlag(\"skill10_hit_enemy\", 641);\n\tcore.plugin._tryUpgrade3(1);\n\tcore.plugin._tryUpgrade3(1);\n}\nif (core.getTalentLv3(2) == 1) {\n\tcore.setFlag(\"skill12_use_time\", 641)\n\tcore.plugin._tryUpgrade3(2);\n}\nif (core.getTalentLv3(2) == 2) {\n\tcore.setFlag(\"skill12_hit_num\", 641)\n\tcore.plugin._tryUpgrade3(2);\n}\n}"
                            },
                            {
                                "type": "setValue",
                                "name": "item:greenBomb",
                                "value": "1"
                            },
                            "\t[神像,moneyShop]任务完成。\n顺便，你已经满足【毁灭重拳】升到4级的条件，我也帮你升级了。\n告辞。",
                            {
                                "type": "hide",
                                "remove": true
                            },
                            {
                                "type": "animate",
                                "name": "explosion_small"
                            },
                            {
                                "type": "animate",
                                "name": "E_unhappy",
                                "loc": "hero",
                                "async": true
                            }
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    },
                    {
                        "text": "我是全绿战神，你给我爬",
                        "color": [
                            255,
                            215,
                            0,
                            1
                        ],
                        "condition": "item:greenKey==99",
                        "action": [
                            "\t[神像,moneyShop]不好意思，打扰了。",
                            {
                                "type": "hide",
                                "remove": true
                            },
                            {
                                "type": "animate",
                                "name": "explosion_small"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "8,0": {
            "floorId": "Ch4_62",
            "loc": [
                6,
                12
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "10,9": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_61_11_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "12,9": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_61_11_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,10": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_61_11_11",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "11,11": {
            "0": {
                "condition": "flag:door_Ch4_61_11_11==3",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_Ch4_61_11_11",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [150253,150254,150255,150177,150194,150195,150196,150178,  0,150128,150129,150130,150131],
    [150185,150185,150185,150185,150202,150203,150204,150186,  0,150136,150137,150138,150139],
    [150233,662, 21,150013,569,150013, 22,  0,330,772, 21,702, 22],
    [150241,386, 22,150013, 81,150013,  0,656,  0,180,334,180,702],
    [150013, 84,150013,150013, 84,150013,334,  0, 21,180, 81,180, 22],
    [  0,  0,  0,  0,  0,150013,180, 83,180,180, 21,180,180],
    [  0,  0,  0,771,  0,150013, 21,  0,334,180,  0,180,180],
    [  0,  0,  0,  0,691, 85,  0, 22,  0,773,656,  0, 22],
    [  0,  0,  0,772,  0,150013,334,  0, 21,180,180, 82,180],
    [  7,131,  8,  0,  0,150013,150013,779,180,180,784, 23,784],
    [150013,150013,150013, 84,150013,150013,331,  0, 21,180,332,784,331],
    [150014,150014,332,662,568,150013,  0,657,  0,180,180, 85,180],
    [150022,150022,150013,150013,150013,150013, 21,  0,334, 84,661,658,664]
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [150015,150015,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0, 91,  0,  0,  0,  0],
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "downFloor": [
        0,
        7
    ],
    "upFloor": [
        8,
        0
    ],
    "hard1_enemy_ratio": 95
}