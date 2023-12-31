main.floors.Ch4_7A=
{
    "floorId": "Ch4_7A",
    "title": "拓岩高速路",
    "name": "拓岩高速路",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
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
            "type": "if",
            "condition": "core.hasItem(\"sword9\")",
            "true": [
                "\t[系统提示]\\i[sword9]斩魔刀坏掉了。",
                {
                    "type": "setValue",
                    "name": "item:sword9",
                    "value": "0"
                }
            ],
            "false": [
                {
                    "type": "if",
                    "condition": "core.hasEquip('sword9')",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.unloadEquip(0);\n}"
                        },
                        "\t[系统提示]\\i[sword9]斩魔刀坏掉了。",
                        {
                            "type": "setValue",
                            "name": "item:sword9",
                            "value": "0"
                        }
                    ]
                }
            ]
        },
        {
            "type": "if",
            "condition": "core.hasItem(\"I_cat\")",
            "true": [
                "\t[系统提示]\\i[I_cat]玩偶猫坏掉了。",
                {
                    "type": "setValue",
                    "name": "item:I_cat",
                    "value": "0"
                }
            ],
            "false": [
                {
                    "type": "if",
                    "condition": "core.hasEquip('I_cat')",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.unloadEquip(1);\n}"
                        },
                        "\t[系统提示]\\i[I_cat]玩偶猫坏掉了。",
                        {
                            "type": "setValue",
                            "name": "item:I_cat",
                            "value": "0"
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.setBgLight([\n\t[2, 0, 100],\n\t[2, 5, 100],\n\t[10, 0, 100],\n\t[10, 5, 100],\n\t[6, 7, 150],\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "6,0": [
            "牌子上什么都没有。"
        ],
        "6,11": [
            {
                "type": "moveHero",
                "steps": [
                    "up:2"
                ]
            },
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": "hero"
            },
            "\t[械灵-Angel,E704]欢迎回来，怎么样，拓岩镇还不错吧？",
            "\t[hero]客套话就免了。\n让我来这鬼地方早就是计划好的吧？",
            "\t[械灵-Angel,E704]时间紧迫，先上车。",
            "\t[hero]……好。",
            {
                "type": "moveHero",
                "steps": [
                    "left:2",
                    "up:3"
                ]
            },
            {
                "type": "changePos",
                "direction": "right"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "changePos",
                "loc": [
                    114,
                    514
                ]
            },
            {
                "type": "unfollow",
                "name": "hero3.png"
            },
            {
                "type": "setVolume",
                "value": 0,
                "time": 2000
            },
            {
                "type": "changeFloor",
                "floorId": "Ch4_car",
                "loc": [
                    5,
                    6
                ],
                "direction": "right",
                "time": 2000
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [150296,150297,150298,150299,150300,150301,150107,150296,150297,150298,150299,150300,150301],
    [150304,150305,150306,150307,150308,150309,  0,150304,150305,150306,150307,150308,150309],
    [  0,  0,150116,  0,  0,  0,  0,150038,150039,  0,150116,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [150393,150394,  0,  0,  0,150444,150445,150446,150447,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,150452,150453,150454,150455,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,150460,150461,150462,150463,  0,  0,  0,  0],
    [  0,  0,150116,  0,  0,  0,862,  0,  0,  0,150116,  0,150229],
    [150377,150378,  0,  0,  0,  0,  0,  0,  0,150252,  0,  0,150237],
    [150258,150259,150260,150261,  0,  0,  0,  0,  0,150256,150257,150258,150259],
    [150266,150267,150268,150269,  0,  0,  0,  0,  0,150264,150265,150266,150267],
    [150274,150275,150276,150277,  0,  0,  0,150385,150386,150272,150273,150274,150275],
    [150282,150283,150284,150285,151186,151187,  0,150393,150394,150280,150281,150282,150283]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,150100,  0,  0,  0,  0,  0,  0,  0,150100,  0,  0],
    [  0,  0,150108,  0,  0,  0,  0,150030,150031,  0,150108,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [150385,150386,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,150100,  0,  0,  0,  0,  0,  0,  0,150100,  0,  0],
    [  0,  0,150108,  0,  0,  0,  0,  0,  0,  0,150108,  0,  0],
    [150369,150370,  0,  0,  0,  0,  0,  0,  0,150251,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,150115,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [150103,150103,150103,150103,150103,150103,150103,150103,150103,150103,150103,150103,150103],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [150126,150126,150126,150126,150126,150126,150117,150126,150126,150126,150126,150126,150126],
    [  0,  0,  0,  0, 94,  0,150127,  0,  0,  0,  0,  0,  0],
    [150095,150095,150095,150095,150111,  0,150127,  0,150110,150095,150095,150095,150095],
    [  0,  0,  0,  0,150102,  0,150127,  0,150102,  0,  0,  0,  0],
    [  0,  0,  0,  0,150102,  0,150127,  0,150102,  0,  0,  0,  0],
    [  0,  0,  0,  0,150102,  0,150127,  0,150102,  0,  0,  0,  0],
    [  0,  0,  0,  0,150102,  0,150127,  0,150102,  0,  0,  0,  0],
    [  0,  0,  0,  0,150102,  0,150127,  0,150102,  0,  0,  0,  0]
],
    "fg2map": [

],
    "hard1_enemy_ratio": 95
}