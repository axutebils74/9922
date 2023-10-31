main.floors.MT53=
{
    "floorId": "MT53",
    "title": "主塔 53 层",
    "name": "辉煌圣殿-53",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area6.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 10,
    "defaultGround": "ground3",
    "bgm": "area6.mp3",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "down"
        },
        "\t[侍卫总领,E436]\b[up,6,11]我已经听说你的事迹了，能够从底层一步一步地杀上来，走到这里，的确是天纵之才。",
        "\t[hero]\b[down,hero]我的天，总算有谁主动跟我交流了。\n你不会也要跟我打架吧？",
        "\t[侍卫总领,E436]\b[up,6,11]这些都是上面的命令。我等只有遵从。\n我也不会劝你收手，尽管用战斗让我们服从！",
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[hero]\b[down,hero]这层的敌人在他的协助下都变得好强……",
        "\t[芳芷,hero2]\b[down,hero]也许可以考虑使用那个商人卖的药水？"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,11": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[侍卫总领,E436]杀！",
                {
                    "type": "battle",
                    "loc": [
                        6,
                        11
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        2,
                        9
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        9
                    ]
                },
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[hero]所以打到现在也没明白为什么要战斗……",
                "\t[芳芷,hero2]往好了想，我们也快到达圣殿顶部了，真相大白的感觉，真令人期待啊。",
                {
                    "type": "animate",
                    "name": "E_unhappy",
                    "loc": "hero"
                },
                "\t[hero]期待，吗……"
            ]
        }
    },
    "changeFloor": {
        "1,4": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT53_6_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT53_6_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT53_6_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT53_6_10",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,10": {
            "0": {
                "condition": "flag:door_MT53_6_10==4",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "map": [
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,322,242, 82,  0,323, 22,143,243,280,331, 87,143],
    [143,280,323,143,214,  0,331,143, 82,143,143,143,143],
    [143,143,143,143, 81,143,143,143,  0,143,331,323,143],
    [143, 88,  0,249,  0,  0,  0,220,  0, 81,249, 22,143],
    [143,143,143,143,143,143, 82,143,143,143,143,143,143],
    [143,  0,331,  0, 22,214,  0,214, 22,  0,331,  0,143],
    [143,220,143,249,143,143, 83,143,143,249,143,220,143],
    [143,  0, 68,  0,143,242,  0,242,143,  0, 68,  0,143],
    [143,143, 85,143,143,  0,331,  0,143,143, 85,143,143],
    [143, 53,331, 53,143,243, 85,243,143, 53,331, 53,143],
    [143,323, 23,322,143,143,436,143,143,322, 23,323,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143]
],
    "bgmap": [

],
    "fgmap": [

],
    "hard1_enemy_ratio": 75,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}