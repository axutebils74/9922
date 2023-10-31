main.floors.Ch4_115=
{
    "floorId": "Ch4_115",
    "title": "柏兰大道-3",
    "name": "柏兰大道-3",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "T916",
    "bgm": "area20.mp3",
    "color": [
        255,
        0,
        0,
        0.1
    ],
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,3": [
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": "hero"
            },
            "\t[hero]咦，是你。\n我还以为你彻底摸了呢。",
            "\t[福平,N786]咳咳，推翻第零公民这么重大的事情，我怎么可能真的摸了……这毕竟曾经是我唯一的目标。",
            "\t[福平,N786]但我确实没想到事情会发展到这一步……现在情况很不妙，福博那家伙真是个疯子，赶快撤吧。",
            "\t[hero]所以现在到底是什么情况？刚才在摩极大厦顶部，福博说要解除什么封印，那这些变异的机器人和人类又是怎么回事？",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": [
                    3,
                    3
                ]
            },
            "\t[福平,N786]这还要说起五年前那次实验，我当时只知道实验对象是两位第零公民，但没有了解细节。\n万万没想到，这次实验竟然涉及到来自玉梅天的、足以污染现实的危险力量。",
            "\t[福平,N786]这几年来，那两位虽然被封印了，但它们的力量仍然在潜移默化地影响着摩宇城。这种力量来自外界的高等规则，一切智慧生物，不论是机器人还是人类，都会遭受侵蚀。",
            "\t[福平,N786]被侵蚀后，轻者性格变得喜怒无常、喜欢蔑视他人，重者就会像你之前看到的那样……变成力量强大但没有理智的怪物。\n而就在刚才，由于封印松动，这种影响迎来了一波爆发，无数轻症瞬间转为重症，于是就出现了你现在看到的景象。",
            "\t[福平,N786]说起来我在被踢出摩宇城之前也曾遭受过一年的污染，好在程度很轻，以我的力量还能压制住。\n晴芸她怎么样？",
            "\t[hero]她情况不太妙……首先需要赶快离开这里。\n你刚才说你有办法撤离？",
            "\t[福平,N786]嗯，我知道这附近有一条秘密通道，只要自由落体114米就可以直接到达下城区，以你我的身体强度应该都还能承受……",
            {
                "type": "animate",
                "name": "E_unhappy",
                "loc": "hero"
            },
            "\t[hero]这不行啊，晴芸刚才还被炸伤了，她现在的状态肯定承受不住……",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": [
                    3,
                    3
                ]
            },
            "\t[福平,N786]原来情况是这样吗……很遗憾，我也帮不了她。",
            "\t[hero]那你自己撤吧，我一定要为她杀出一条安全的道路。",
            "\t[福平,N786]……我相信你的判断，保重。",
            {
                "type": "openDoor",
                "loc": [
                    3,
                    2
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        3
                    ]
                ],
                "remove": true
            },
            {
                "type": "animate",
                "name": "light2",
                "loc": [
                    3,
                    3
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "0,3": {
            "floorId": "Ch4_114",
            "loc": [
                12,
                9
            ]
        },
        "12,6": {
            "floorId": "Ch4_116",
            "loc": [
                0,
                2
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
    [150318,569, 21, 21, 21,568,150318,150464,666,334,567, 21,  0],
    [150318, 22,334,567,334, 23,150318,  0,150464,150464,877,  0,567],
    [150318,150318,150318, 85,150318,150318, 22, 81, 21,874,  0,861,847],
    [  0,  0,  0,787,  0,874,  0,334,  0,861,566,  0, 22],
    [150318,861,861,  0, 21,861,566,  0,874, 81,  0, 82,150318],
    [664,861,567,878,  0, 82,  0, 81,  0,861,861, 83,150318],
    [847,861,861,  0, 81,861,874,  0, 21,880,665,874,  0],
    [  0,567,847,  0,665,861,  0,567,  0,861,861,861,150318],
    [ 21,873,566,  0, 82,  0,861,  0, 81,  0,861,334,150318],
    [150468,  0,  0,878,  0,861, 81,878,  0,878,861,  0,566],
    [334,150468,150469,  0,150469, 21,  0,  0,879,  0,876,334,150469],
    [ 81,664,  0,879,  0,150468,664,150468,  0,150469, 21,877,664],
    [150468,150468,567,150468, 21,665,150468,334,874,566,150468,150468,334]
],
    "bgmap": [
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145]
],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 92,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 94],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "hard1_enemy_ratio": 95,
    "downFloor": [
        0,
        3
    ],
    "upFloor": [
        12,
        6
    ]
}