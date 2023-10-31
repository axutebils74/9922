main.floors.MT13=
{
    "floorId": "MT13",
    "title": "主塔 13 层",
    "name": "主塔-13",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "area2.mp3",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "moveHero",
            "time": 300,
            "steps": [
                "right:1"
            ]
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        {
            "type": "move",
            "loc": [
                7,
                11
            ],
            "time": 200,
            "keep": true,
            "steps": [
                "right:1"
            ]
        },
        {
            "type": "playSound",
            "name": "pickKey.wav"
        },
        {
            "type": "sleep",
            "time": 200
        },
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "jump",
            "from": [
                8,
                11
            ],
            "to": [
                7,
                2
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        {
            "type": "playSound",
            "name": "pickKey.wav"
        },
        {
            "type": "sleep",
            "time": 200
        },
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "jump",
            "from": [
                7,
                2
            ],
            "to": [
                10,
                1
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "playSound",
            "name": "pickKey.wav"
        },
        {
            "type": "sleep",
            "time": 200
        },
        {
            "type": "jump",
            "from": [
                10,
                1
            ],
            "to": [
                10,
                6
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "move",
            "loc": [
                10,
                6
            ],
            "time": 200,
            "steps": [
                "right:1"
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[商人,trader]两位姑娘，想不想买钥匙啊？",
        {
            "type": "animate",
            "name": "E_love",
            "loc": "hero"
        },
        "\t[芳芷,hero2]哼，这怪人把钥匙都捡走，你倒是爽了，你不会是和他一伙的吧？",
        "\t[商人,trader]这位姑娘怎么能这样恶意揣测俺呢，俺是真的想帮你们，价格就收点辛苦费而已，你们肯定付得起。\n不信来看看嘛，俺坑你们干啥嘛。",
        {
            "type": "moveHero",
            "time": 300,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        "\t[hero]（好好好，买买买！）",
        {
            "type": "animate",
            "name": "E_sweat",
            "loc": [
                4,
                11
            ]
        },
        {
            "type": "setValue",
            "name": "switch:A",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:yellowKey_storage",
            "value": "10"
        },
        {
            "type": "setValue",
            "name": "flag:yellowKey_price",
            "value": "25"
        },
        {
            "type": "setValue",
            "name": "flag:blueKey_storage",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:blueKey_price",
            "value": "80"
        },
        {
            "type": "openShop",
            "id": "13FShop"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "3,10": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "flag:15Fboss",
                    "true": [
                        "一张纸条。上面潦草地写着：\n\r[yellow]0F\r",
                        {
                            "type": "hide",
                            "remove": true
                        }
                    ],
                    "false": [
                        {
                            "type": "if",
                            "condition": "((flag:yellowKey_storage <= 0 )&&( flag:blueKey_storage <= 0))",
                            "true": [
                                "\t[商人,trader]俺手头的库存都被你买完啦。俺得再搞点货……"
                            ],
                            "false": [
                                {
                                    "type": "openShop",
                                    "id": "13FShop",
                                    "open": true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "3,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,6": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,322, 31, 20, 21, 21, 20, 31, 82,238, 21, 23, 20],
    [ 20,215,  0, 20,  0,204, 20, 21, 20, 20, 20, 82, 20],
    [ 20, 81, 20, 20, 20, 81, 20,323, 81,231, 31,322, 20],
    [ 20,334,  0,208,  0, 31, 20,237, 20, 20, 20, 32, 20],
    [ 20, 81, 20, 20, 20, 20, 20,  0,204,  0, 20, 82, 20],
    [ 20, 31,  0, 68,  0,237, 20, 32, 20,  0,  0, 87, 20],
    [ 20, 20, 20, 20, 20, 81, 20,322, 20,237, 20, 20, 20],
    [ 20, 31,323,  0,212,  0, 20, 20, 20,  0, 20, 31, 20],
    [ 20, 81, 20, 20, 20,208, 20, 31, 20, 31, 20,  0, 20],
    [ 20, 31, 20,122,  0,  0, 81,  0, 20,  0, 20,323, 20],
    [ 20, 32, 20, 88,  0, 31, 20,123, 21,  0, 81,212, 20],
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