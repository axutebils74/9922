main.floors.MT11=
{
    "floorId": "MT11",
    "title": "主塔 11 层",
    "name": "主塔-11",
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
            "type": "setValue",
            "name": "flag:mana_item",
            "value": "15"
        },
        {
            "type": "setValue",
            "name": "flag:getManaHint",
            "value": "1"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "moveHero",
            "time": 200,
            "steps": [
                "down:1"
            ]
        },
        {
            "type": "turnBlock",
            "direction": "left",
            "loc": [
                [
                    7,
                    2
                ]
            ]
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": [
                7,
                2
            ],
            "async": true
        },
        {
            "type": "jump",
            "from": [
                7,
                2
            ],
            "to": [
                7,
                2
            ],
            "time": 300,
            "keep": true
        },
        "\t[???,hero2]呀，你，你……",
        {
            "type": "changePos",
            "direction": "right"
        },
        {
            "type": "animate",
            "name": "E_question",
            "loc": "hero"
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": [
                7,
                2
            ]
        },
        "\t[芳芷,hero2]咳嗯，抱歉，自我介绍一下，我叫芳芷。",
        {
            "type": "animate",
            "name": "E_love",
            "loc": "hero"
        },
        "\t[芳芷,hero2]你没法说话？……",
        "芳芷掏出了一个奇怪的装置。",
        "\t[芳芷,hero2]试着将你的意念传入其中。",
        "\t[hero]（这是什么东西？）",
        "\t[芳芷,hero2]好，果然成功了！",
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[芳芷,hero2]没什么神奇的，就是个解码器而已。",
        "\t[芳芷,hero2]实际上你已经完全具备正常的表达能力了，不过输出的所有信息都是抽象的，所以一般人是无法理解的。",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[芳芷,hero2]简单来讲这就是个翻译器啦。把你的意念翻译成人类能懂的语言。",
        "\t[hero]（很高兴能与人交流，非常感谢你。）",
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[芳芷,hero2]你是要去什么地方吗？",
        "\t[hero]（我要去塔顶。）",
        "\t[芳芷,hero2]塔顶？为什么要去那里？",
        "\t[hero]（根据复读机的留言，我的创造者在塔顶，我的任务是找到他。）",
        {
            "type": "sleep",
            "time": 500
        },
        "芳芷的表情不自然地抽动了一下，不过很快恢复了正常。",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[芳芷,hero2]……听起来挺有趣的，反正我也没地方去，就跟着你走了，你不会介意吧？",
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]（不会。）",
        "\t[芳芷,hero2]好，那么就这样决定了！",
        {
            "type": "waitAsync"
        },
        {
            "type": "move",
            "loc": [
                7,
                2
            ],
            "time": 200,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "follow",
            "name": "hero2.png"
        },
        {
            "type": "if",
            "condition": "(flag:hard==1)",
            "true": [
                {
                    "type": "choices",
                    "text": "\t[系统提示]简化难度下，此区域怪物攻防是普通难度的85%。",
                    "choices": [
                        {
                            "text": "我知道了",
                            "action": []
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "10,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,323,237,  0,208,  0, 88,  0, 20,322, 87, 32, 20],
    [ 20,  0, 20, 32, 20, 21,  0,336,  0, 82,212,  0, 20],
    [ 20, 32, 20,  0, 20, 20, 81, 20, 20,  0, 81, 20, 20],
    [ 20, 20, 20,208, 20,  0, 68,  0, 20,  0, 32,  0, 20],
    [ 20,322,204,322,212, 32,  0, 31,  0,204,  0,323, 20],
    [ 20, 20, 20, 81, 20, 81, 20,237, 20,  0, 21,  0, 20],
    [ 20, 31, 20, 32, 20, 32,  0, 32, 20, 20,237, 20, 20],
    [ 20, 32, 81, 31, 20, 20,204, 20, 20, 32,  0,215, 20],
    [ 20, 20, 20, 20, 20,208,  0,334, 81,  0, 81,322, 20],
    [ 20, 21,  0,212, 81, 21, 20, 20, 20,204, 20,  0, 20],
    [ 20,334, 68,  0, 20,323, 20, 32,322, 21, 20, 32, 20],
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