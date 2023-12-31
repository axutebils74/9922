main.floors.BMT11=
{
    "floorId": "BMT11",
    "title": "地下 11 层",
    "name": "地下-11",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground2",
    "bgm": "area4.mp3",
    "color": [
        0,
        0,
        0,
        0.9
    ],
    "firstArrive": [
        {
            "type": "comment",
            "text": "寻路绕钥匙开启，并且空格拾取钥匙后自动存档"
        },
        {
            "type": "setValue",
            "name": "flag:keysAreBad",
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
                "down:2"
            ]
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                10,
                2
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "down"
        },
        "\t[芳芷,hero2]对这种封死后路的情况已经见怪不怪了……",
        "\t[芳芷,hero2]敌人的强度又提升了一个档次……实在是有些奇怪……",
        {
            "type": "animate",
            "name": "E_question",
            "loc": "hero"
        },
        "\t[芳芷,hero2]他们并没有一开始就派出最强大的力量来对付我们，就像是……在引诱我们往下走。",
        "\t[芳芷,hero2]不过事到如今也只有继续走下去了。只要走下去，总会真相大白。",
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[芳芷,hero2]哎呀你是在担心我？想不到你竟然学会关心别人了，真令我感动呢。还是说你害怕了？",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[芳芷,hero2]不至于这么紧张吧，我觉得他们对我们的敌意不怎么大呀……你看他们都没有立即冲上来群殴我们……",
        {
            "type": "animate",
            "name": "E_sweat",
            "loc": "hero"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "down"
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]（……前进吧。）",
        {
            "type": "if",
            "condition": "(flag:hard == 1)",
            "true": [
                {
                    "type": "choices",
                    "text": "\t[系统提示]简化难度下，此区域怪物能力是正常难度的80%。",
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
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.setBgLight([\n\t[3, 2, 180],\n\t[8, 2, 180],\n\t[12, 2, 180],\n\t[1, 9, 180],\n\t[5, 9, 180],\n\t[9, 9, 180],\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "11,4": [
            "\t[系统提示]在本区域，自动寻路会绕过钥匙。\n如果你使用“\r[yellow]轻点\r”获取钥匙，那么在拾取前会进行自动存档。",
            "\t[系统提示]“\r[yellow]轻点\r”的操作方式是，面对物品，按空格 或 双击角色。",
            "\t[系统提示]另外，本区的钥匙均无法被带出此区域。"
        ]
    },
    "changeFloor": {
        "1,6": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "2,6": [
            {
                "type": "sleep",
                "time": 500
            },
            "\t[芳芷,hero2]这就是那家伙说的“极其精通钥匙之力”的存在吗？竟然能直接将钥匙引爆，这是何等强大的手段……",
            "\t[hero]（看来要尽量避免捡钥匙？）",
            "\t[芳芷,hero2]也不一定，这些钥匙留在地上也会极大地增强它附近的敌人……\n捡还是不捡，这是个问题。",
            "\t[芳芷,hero2]另外这个引爆钥匙的家伙攻击力似乎不是特别恐怖，等你防御力足够高之后可以让他帮你清理身上的钥匙。",
            {
                "type": "animate",
                "name": "E_love",
                "loc": "hero"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [311,311,311,311,311,311,311,311,311,311,311,311,311],
    [311,394,  0,311, 33,  0,218, 33,311,334,333,334,311],
    [311, 33, 21,311,  0,328,311,  0,311,394,  0,394,311],
    [311,311,275,311,218,311,311,327,311,327,  0,328,311],
    [311, 33,  0,275,  0, 33,311,  0,311,321,  0,129,311],
    [311,311,311,311, 22,311,311,277,311,311,275,311,311],
    [311, 88,241,  0, 33,  0,218,  0,  0, 33,  0,334,311],
    [311,311,311,311,275,311,311,311,272,311,311, 22,311],
    [311,328,  0, 22,  0,311, 31,311,327,251,  0, 21,311],
    [311,311,275,311,334,311, 21,218, 33,311, 33,334,311],
    [311,334,  0,311,  0,311,  0,277, 21,311,254,311,311],
    [311, 33,  0,277, 33,311,328,311, 31,311, 21,394,311],
    [311,311,311,311,311,311,311,311,311,311,311,311,311]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 87,  0,  0],
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
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,103,  0,  0,  0,  0,103,  0,  0,  0,103],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,103,  0,  0,  0,103,  0,  0,  0,103,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "underGround": true,
    "hard1_enemy_ratio": 80,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}