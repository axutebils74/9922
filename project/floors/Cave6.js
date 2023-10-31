main.floors.Cave6=
{
    "floorId": "Cave6",
    "title": "特训营-6",
    "name": "特训营-6",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "ground7",
    "bgm": "area12.mp3",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "right"
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[hero]咦，这层看起来不太一般啊。",
        "\t[芳芷,hero2]这里，是……\n进去看看准没错。",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[hero]但是这入口处有铁门挡路，这一路的怪物又强的要命……",
        "\t[hero]不过也别无他法，到现在已经没有退路了，只能继续往下寻找铁门钥匙。"
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(flag:arrived_Cave6_2 == 1)",
            "true": [
                {
                    "type": "sleep",
                    "time": 500
                },
                {
                    "type": "setValue",
                    "name": "flag:arrived_Cave6_2",
                    "value": "2"
                },
                "\t[hero]有2221帮忙，感觉轻松多了，不过如果现在要抗衡那些较强的怪物还是有点棘手。\n而且……\\i[fly]传送器无法使用，还是太麻烦了……",
                "\t[2221,N600]限制传送器使用的节点应该就在接近底部的楼层，将其摧毁就可以了。",
                "\t[芳芷,hero2]而且下面楼层的奖励也会更加丰厚，总之尽可能先往下去摧毁节点吧。\n凭借刚刚解锁的\\i[skill5]\r[yellow]鸽化\r能力，一些比较棘手的敌人也能处理了。",
                {
                    "type": "if",
                    "condition": "(!core.hasItem(\"redKey\"))",
                    "true": [
                        "\t[芳芷,hero2]不过，在下去之前，我建议你先回楼上获取\\i[redKey]红钥匙。\n拿到钥匙之后就直奔底层去摧毁节点，之后就可以使用\\i[fly]传送器啦！"
                    ]
                },
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[hero]（嗯……这\r[yellow]鸽化\r的确十分强大，不过有着某种限制使得它不能被连续使用。\n尽量能用就用，多多压榨它的价值吧。）"
            ]
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,11": {
            "floorId": "Cave7",
            "loc": [
                1,
                11
            ]
        },
        "12,6": {
            "floorId": "Cave6_2",
            "loc": [
                6,
                12
            ],
            "direction": "up"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145, 87,145,331, 82,331,333, 84, 22,386, 84,566,145],
    [145,334, 81,330,145,145,145,145,145,145,566,332,145],
    [145,  0,145,145,145,  0, 81,330, 81,145,145,145,145],
    [145,589,145,330,  0,589,334, 81,331, 82,145,145,145],
    [145,  0,145,  0,589,  0, 81,330, 81,330, 82,145,145],
    [145,333, 83, 86,  0,589,334, 81,331, 82, 83, 83, 89],
    [145,  0,145,  0,589,  0, 81,330, 81,330, 82,145,145],
    [145,589,145,330,  0,589,334, 81,331, 82,145,145,145],
    [145,  0,145,145,145,  0, 81,330, 81,145,145,145,145],
    [145,334, 81,330,145,145,145,145,145,145,566,332,145],
    [145, 88,145,331, 82,331,333, 84, 22,386, 84,566,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "hard1_enemy_ratio": 80,
    "underGround": true,
    "upFloor": [
        1,
        1
    ],
    "downFloor": [
        1,
        11
    ],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}