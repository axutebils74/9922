main.floors.MT22=
{
    "floorId": "MT22",
    "title": "主塔 22 层",
    "name": "孤狼战场-22",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area5.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 10,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "moveHero",
            "steps": [
                "up:1"
            ]
        },
        "\t[重甲战士,soldier]\b[up,7,8]有入侵者，杀！",
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[芳芷,hero2]好强……",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[芳芷,hero2]不，我不是说这种杀戮的氛围很强，而是说他们的战斗力。",
        {
            "type": "animate",
            "name": "E_question",
            "loc": "hero"
        },
        "\t[芳芷,hero2]不光是单体战斗力强，而且还擅长联合作战。\n相比之下圣匙帮那些人连散兵游勇都算不上。",
        "\t[芳芷,hero2]总之一定要谨慎应对。",
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[芳芷,hero2]再给你一点提示吧，如果你需要的话就看看。信息已经传输给你了。",
        {
            "type": "setValue",
            "name": "item:I420",
            "value": "1"
        },
        "\t[芳芷,hero2]另外，面对某些敌人的时候，你可能用得上\\i[I_wait]原地等待。",
        {
            "type": "setValue",
            "name": "item:I_wait",
            "value": "1"
        },
        "\t[hero]（准备前进吧。）",
        {
            "type": "if",
            "condition": "flag:hard == 1",
            "true": [
                {
                    "type": "choices",
                    "text": "\t[系统提示]简化难度下，从这里开始，怪物攻防是普通难度的75%。",
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
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [142,142,142,142,142,142,142,142,142,142,142,142,142],
    [142, 87,  0, 32,354,334,142, 28,334,369,334, 27,142],
    [142,142,142,142,142,  0,142,  0, 32, 81, 32,  0,142],
    [142, 27, 29, 28,142, 21,142,355,142, 81,142,355,142],
    [142, 21, 32, 21, 82,  0,142,  0, 32, 81, 32,  0,142],
    [142,  0,380,  0,142, 32,142, 27,375, 21,375, 28,142],
    [142,142, 81,142,142,  0,142,142,142,226,142,142,142],
    [142,225,  0, 31,142, 27,  0,226,  0,  0, 81, 34,142],
    [142, 27,142,379,142,354,  0,225,142,142,142, 81,142],
    [142,226, 81, 32,225,  0, 81,  0,225,  0, 29,226,142],
    [142, 28,142,379,142, 27,  0, 28,142,376,142,142,142],
    [142,225,  0, 31,142, 32, 88, 32,142, 27, 28, 34,142],
    [142,142,142,142,142,142,142,142,142,142,142,142,142]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "area5.mp3",
    "hard1_enemy_ratio": 75,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}