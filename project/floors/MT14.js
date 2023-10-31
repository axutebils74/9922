main.floors.MT14=
{
    "floorId": "MT14",
    "title": "主塔 14 层",
    "name": "主塔-14",
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
            "type": "changePos",
            "direction": "down"
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        {
            "type": "move",
            "loc": [
                9,
                10
            ],
            "time": 200,
            "keep": true,
            "steps": [
                "down:1"
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
                9,
                11
            ],
            "to": [
                5,
                8
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "changePos",
            "direction": "left"
        },
        {
            "type": "playSound",
            "name": "pickKey.wav"
        },
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "jump",
            "from": [
                5,
                8
            ],
            "to": [
                6,
                6
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "playSound",
            "name": "pickKey.wav"
        },
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "jump",
            "from": [
                6,
                6
            ],
            "to": [
                4,
                3
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "playSound",
            "name": "pickKey.wav"
        },
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "jump",
            "from": [
                4,
                3
            ],
            "to": [
                2,
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
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "jump",
            "from": [
                2,
                1
            ],
            "to": [
                1,
                8
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
            "type": "move",
            "loc": [
                1,
                8
            ],
            "time": 200,
            "steps": [
                "up:2"
            ]
        },
        {
            "type": "sleep",
            "time": 200
        },
        {
            "type": "animate",
            "name": "E_angry",
            "loc": "hero",
            "async": true
        },
        {
            "type": "jumpHero",
            "time": 200
        },
        {
            "type": "jumpHero",
            "time": 200
        },
        "\t[芳芷,hero2]看来情况不妙，照这样下去就是把商人那的钥匙买完也不够用啊……",
        "\t[芳芷,hero2]说起他的身份，我倒是略有了解。像这种专门捡钥匙，别的东西都视而不见的人，只有一种可能性……",
        "\t[芳芷,hero2]这人肯定是\r[yellow]圣匙帮\r的成员。\n这是一帮居住在塔底的怪人，视匙如命，专门到各处收集钥匙。",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[芳芷,hero2]你说你去过塔底，没见过他们？不会吧……",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[芳芷,hero2]哦我说的塔底是\r[yellow]地下层\r。圣匙帮的成员平日里都在昏暗的地下与匙为伴，听说他们可以从钥匙中获取日常生活所需的能量，有些人还在修炼一种功法，能借助钥匙增强自己的战斗力。",
        "\t[芳芷,hero2]哎呀扯远了。总之如果这人是圣匙帮的成员，那想从他手里要回钥匙的可能性就接近0了。",
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        {
            "type": "waitAsync"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,6": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,6": {
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
    [ 20,  0, 21,207,  0,212,  0, 81,208,  0, 20, 32, 20],
    [ 20,323,  0, 20, 20, 20, 32, 20,  0,322, 20,  0, 20],
    [ 20,  0, 31,238, 21, 20,  0, 20, 32,  0,212,  0, 20],
    [ 20, 32,  0, 20,  0,238,  0, 20, 20, 20, 20, 31, 20],
    [ 20, 20, 20, 20, 20, 20, 81, 20, 31, 68, 20,  0, 20],
    [ 20, 87, 20,  0,237,  0, 21, 81,229, 31, 82, 88, 20],
    [ 20,  0, 20,323, 20, 20, 81, 20, 31,322, 20,  0, 20],
    [ 20, 21, 20,  0, 20, 21,  0, 20, 20, 20, 20, 81, 20],
    [ 20,  0, 81, 31, 20,  0, 31, 20,322,334, 20,237, 20],
    [ 20,238, 20, 20, 20,334,  0,238,  0,123,207,  0, 20],
    [ 20,  0, 32,  0,215,  0, 20, 20, 31, 21, 20, 68, 20],
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