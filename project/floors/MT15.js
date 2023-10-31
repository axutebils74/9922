main.floors.MT15=
{
    "floorId": "MT15",
    "title": "主塔 15 层",
    "name": "主塔-15",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "area2.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,6": [
            "\t[奇怪的人,Thief]\b[down,7,6]呼……累死俺了，先喘口气……",
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": [
                    7,
                    6
                ]
            },
            "\t[奇怪的人,Thief]\b[down,7,6]咦，这怎么突然冒出两个美少女……",
            "\t[芳芷,hero2]\b[down,5,6]（怎样，要怎么跟他说？）",
            {
                "type": "changePos",
                "direction": "left"
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            {
                "type": "changePos",
                "direction": "right"
            },
            "\t[芳芷,hero2]\b[down,5,6]你好，我们有件事想拜托你……",
            "\t[奇怪的人,Thief]\b[down,7,6]哈哈，什么事情，尽管说，很高兴能为两位美女帮上忙……",
            "\t[芳芷,hero2]\b[down,5,6]我们想要你手里的钥匙。",
            "\t[奇怪的人,Thief]\b[down,7,6]不行！别的都行，就是钥匙不行。",
            "\t[芳芷,hero2]\b[down,5,6]（可怜状）真的、一定不行吗~？",
            "\t[奇怪的人,Thief]\b[down,7,6]一定不行。钥匙就是我的命根子，想拿我钥匙还不如杀了我。",
            "\t[hero]\b[down,5,6]（……果然还是来硬的吧。）",
            {
                "type": "moveHero",
                "steps": [
                    "right"
                ]
            },
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    7,
                    6
                ]
            },
            "\t[奇怪的人,Thief]\b[down,7,6]哇这位美女你怎么见面就打我啊！什么仇什么怨！",
            {
                "type": "animate",
                "name": "E_angry",
                "loc": [
                    6,
                    6
                ]
            },
            "\t[hero]\b[down,5,6]（指了指怪人身上的钥匙）",
            "\t[奇怪的人,Thief]\b[down,7,6]你想要我身上的钥匙？再怎么想要也不能明抢吧？",
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    7,
                    6
                ]
            },
            "\t[奇怪的人,Thief]\b[down,7,6]停停停！你冷静一下！",
            {
                "type": "animate",
                "name": "E_angry",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "battle",
                "loc": [
                    7,
                    6
                ]
            },
            {
                "type": "setBlock",
                "number": "thief",
                "loc": [
                    [
                        7,
                        6
                    ]
                ]
            },
            {
                "type": "sleep",
                "time": 500
            },
            "\t[奇怪的人,Thief]\b[down,7,6]……",
            "\t[奇怪的人,Thief]\b[down,7,6]哼，老子现在状态不好，不跟你玩了，溜了。",
            {
                "type": "playSound",
                "name": "jump.mp3"
            },
            {
                "type": "jump",
                "from": [
                    7,
                    6
                ],
                "to": [
                    11,
                    11
                ],
                "time": 500
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "animate",
                "name": "E_unhappy",
                "loc": [
                    6,
                    6
                ]
            },
            "\t[芳芷,hero2]\b[down,5,6]果然还是没能要回来钥匙……诶他怎么留下一把银剑，看来还是有收获的啊。",
            "\t[hero]\b[down,5,6]（果然有收获，继续追追追，打打打！）",
            "\t[芳芷,hero2]\b[down,5,6]喂！这样真的好吗！",
            {
                "type": "setValue",
                "name": "flag:15Fboss",
                "value": "1"
            },
            {
                "type": "disableShop",
                "id": "13FShop"
            },
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        6
                    ]
                ],
                "floorId": "MT0",
                "remove": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        8,
                        6
                    ]
                ],
                "floorId": "MT0"
            },
            {
                "type": "setBlock",
                "number": "I320",
                "loc": [
                    [
                        3,
                        10
                    ]
                ],
                "floorId": "MT13"
            },
            {
                "type": "setBlock",
                "number": "trader",
                "loc": [
                    [
                        8,
                        6
                    ]
                ],
                "floorId": "MT0"
            },
            {
                "type": "setValue",
                "name": "flag:yellowKey_storage",
                "operator": "+=",
                "value": "40"
            },
            {
                "type": "setValue",
                "name": "flag:blueKey_storage",
                "operator": "+=",
                "value": "9"
            },
            {
                "type": "setValue",
                "name": "flag:redKey_storage",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:redKey_price",
                "value": "500"
            }
        ],
        "2,6": [
            "\t[芳芷,hero2]咦，那家伙停下不动了。看来跳来跳去还是耗了他不少体力的。",
            "\t[芳芷,hero2]好机会，快上！",
            {
                "type": "animate",
                "name": "E_sweat",
                "loc": "hero"
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "1,6": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "8,6": [
            {
                "type": "if",
                "condition": "flag:autoGetItem",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.loadEquip(\"sword2\");\n}"
                    },
                    "\t[系统提示]已自动穿上刚拾取的装备。"
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,  0, 32, 81,230, 68, 20, 22, 31,231,322,207, 20],
    [ 20,322,207, 20, 22,  0, 20, 20, 20, 20, 20, 81, 20],
    [ 20, 20, 81, 20,  0, 21, 20, 32,323,230, 20, 32, 20],
    [ 20, 31,  0, 20, 20, 20, 20, 20, 20, 81, 20, 21, 20],
    [ 20, 20,238,  0, 20,  0,334,  0, 20,  0, 82,207, 20],
    [ 20, 88,  0,  0, 83,  0,  0,239, 37,  0, 20, 68, 20],
    [ 20, 20,238,  0, 20,  0,334,  0, 20,230, 20, 20, 20],
    [ 20, 31,  0, 20, 20, 20, 20, 20, 20,  0, 20, 32, 20],
    [ 20, 20, 81, 20,  0, 21, 20,230, 81,334,238,  0, 20],
    [ 20,323,215, 20, 22,  0, 20,322, 20, 81, 20, 81, 20],
    [ 20,  0, 32, 81,230, 68, 20, 32, 20,334, 20, 87, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "hard1_enemy_ratio": 85,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true,
    "weather": [
        "sun",
        5
    ]
}