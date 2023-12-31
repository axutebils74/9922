main.floors.Ch4_16=
{
    "floorId": "Ch4_16",
    "title": "遗落之蔽-6",
    "name": "遗落之蔽-6",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "T670",
    "bgm": "area14.mp3",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "moveHero",
            "time": 300,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[白银斗士,E681]哦？是那两个上等人，竟然能闯到这里，果真有点本事。",
        "\t[晴芸,hero3]我还想问你们呢，你们都怎么对付那种K型械灵的？",
        "\t[白银斗士,E681]告诉你也无妨，我们有便携式血瓶，就K型械灵那战斗力，只要它没法一刀劈死对手，就是白给。",
        "\t[hero]（这个办法听起来也不错……要不我买几瓶？）",
        "\t[白银斗士,E681]不过你们这些上等人就别想用了，可不是什么人都有能耐吸收便携血瓶里面的物质的。",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[白银斗士,E681]不废话了，前面就是主要的战斗区域了，在22：21之前到达终点就能获得“资格”了。",
        {
            "type": "show",
            "loc": [
                [
                    6,
                    7
                ]
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    8
                ],
                [
                    6,
                    9
                ],
                [
                    7,
                    8
                ]
            ],
            "remove": true
        },
        {
            "type": "animate",
            "name": "zone",
            "loc": [
                5,
                8
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "zone",
            "loc": [
                6,
                9
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "zone",
            "loc": [
                7,
                8
            ]
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]（我看看……时间好像还挺充足的，不必着急，提升自己的实力最重要。）"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        }
    },
    "changeFloor": {
        "6,11": {
            "floorId": "Ch4_15",
            "loc": [
                6,
                1
            ]
        },
        "6,0": {
            "floorId": "Ch4_17",
            "loc": [
                6,
                12
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "6,7": [
            "\t[hero]咦，一张纸条，不知是谁掉在这的。",
            "《至 尊 之 录》\nⅠ. 社会起始\n起初 神统治王国\n国土划为三阶 分为城、镇、村\n公民亦有三阶 分住于城、镇、村\n对每一阶公民 又划为三等\n高等的公民 享有大量的财富和完全的自由 不为琐事所困缚\n中等的公民 每天须工作八个小时 除此之外的时间可自由掌控\n低等的公民 每天须工作十二个小时 再除去吃饭睡觉等必需的活动 时间已所剩无几",
            {
                "type": "animate",
                "name": "E_unhappy",
                "loc": "hero",
                "async": true
            },
            "\t[hero]这是啥呀……",
            "\t[晴芸,hero3]语言风格透着一种古代神棍的口吻，但这内容……不是空穴来风。",
            "\t[hero]你是说，这里面写的，是真实的？",
            "\t[晴芸,hero3]没错，现在的人类统治者的确是划分了三阶国土、九等公民，对公民的描述也基本准确。\n就是不知这纸条的作者为何要用这种风格书写。",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero",
                "async": true
            },
            "\t[hero]那有点奇怪啊，住在镇里的高等公民，比起城里的低等公民，等级还低一些？",
            "\t[晴芸,hero3]是吖~",
            "\t[hero]然后镇里的高等公民生活富裕，城里的低等公民整天打工？",
            "\t[晴芸,hero3]是吖~",
            "\t[hero]那不是很奇怪吗，为什么会有人在城里每天工作12小时呢，这样的生活真的比得上镇里的高等公民？",
            "\t[晴芸,hero3]因为这些人都有“阶级提升”的梦想啊。\n为了能在城里当上中等甚至高等公民，作为低等公民打工的经历是必不可少的。",
            "\t[hero]“梦想”吗……不是很明白……",
            "\t[晴芸,hero3]哎……我倒是觉得这样的人太少了。\n阶级固化越来越严重，越来越多的人不思进取，曾经有上进心的人在这种大环境之下也逐渐被磨灭斗志，少数意志非常坚定的人也无力改变现实，只能选择出逃……",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[晴芸,hero3]继续前进吧，说不定还能收集到这个故事的后续呢。",
            {
                "type": "setValue",
                "name": "flag:zzzl_1_1",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:I_zzzl",
                "value": "1"
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [174,174,174,174,174,174, 91,174,174,174,174,174,174],
    [174,110396,110396,110396,110396,110396,330,110396,110396,110396,110396,110396,174],
    [174,110438,110405,110439,110438,110405,688,110447,110405,110439,110438,110439,174],
    [174,330,653,683, 81,110261, 21,110261, 21,110280,328,671,174],
    [174,110280,110280,110280, 21,681,  0,676,  0,110280,110280, 81,174],
    [174,330,  0,331,  0,110280,334,110280,330,679,  0,652,174],
    [174,110280,679,110280,110280,110280,  0,110280,110280,110280,683,110280,174],
    [174,331,  0,671,110280,  0,320,  0,110280, 21,  0,696,174],
    [174,  0,688,  0,110280,691,  0,691,110280,  0,110280,  0,174],
    [174,652,  0,329,110280, 21,691, 21,110280,688,  0,328,174],
    [174,110280,110280, 81,110280,  0,  0,  0,110280,  0,329, 81,174],
    [174, 21,327,676,110280,  0, 87,  0,110280,331,110280,332,174],
    [174,174,174,174,174,174,174,174,174,174,174,174,174]
],
    "bgmap": [
    [172,172,172,172,172,172,172,172,172,172,172,172,172],
    [172,172,172,172,172,172,172,172,172,172,172,172,172],
    [172,172,172,172,172,172,172,172,172,172,172,172,172],
    [172,172,172,172,172,172,172,172,172,172,172,172,172],
    [172,172,172,172,172,172,172,172,172,172,172,172,172],
    [172,172,172,172,172,172,172,172,172,172,172,172,172],
    [172,172,172,172,172,172,172,172,172,172,172,172,172],
    [172,172,172,172,172,172,172,172,172,172,172,172,172],
    [172,172,172,172,172,172,172,172,172,172,172,172,172],
    [172,172,172,172,172,172,172,172,172,172,172,172,172],
    [172,172,172,172,172,172,172,172,172,172,172,172,172],
    [172,172,172,172,172,172,172,172,172,172,172,172,172],
    [172,172,172,172,172,172,172,172,172,172,172,172,172]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,110255,  0,110255,  0,  0,  0,  0,  0],
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
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": null,
    "downFloor": [
        6,
        11
    ],
    "upFloor": [
        6,
        0
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}