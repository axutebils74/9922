main.floors.MT4=
{
    "floorId": "MT4",
    "title": "主塔 4 层",
    "name": "主塔-4",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "if",
            "condition": "flag:hard == 1",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:shop1_1",
                    "value": "5"
                },
                {
                    "type": "setValue",
                    "name": "flag:shop1_2",
                    "value": "5"
                }
            ],
            "false": [
                {
                    "type": "setValue",
                    "name": "flag:shop1_1",
                    "value": "6"
                },
                {
                    "type": "setValue",
                    "name": "flag:shop1_2",
                    "value": "6"
                }
            ]
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.setBgLight([\n\t[5, 4, 150],\n\t[7, 4, 150],\n\t[6, 10, 150]\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "6,5": [
            {
                "type": "if",
                "condition": "(!switch:A)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    },
                    {
                        "type": "animate",
                        "name": "E_question",
                        "loc": "hero"
                    },
                    "\t[神像,moneyShop]给我钱，我可以增强你的力量。",
                    "\t[复读机]这是个自动售货机。造型有些古典，据说是设计者的癖好。",
                    "\t[复读机]别犹豫，买买买！",
                    {
                        "type": "animate",
                        "name": "E_sweat",
                        "loc": "hero"
                    },
                    {
                        "type": "openShop",
                        "id": "shop1"
                    },
                    {
                        "type": "if",
                        "condition": "core.platform.isPC",
                        "true": [
                            "\t[系统提示]快捷商店已开启，按V打开。"
                        ],
                        "false": [
                            "\t[系统提示]快捷商店已开启，可在下方菜单栏点击商店图标打开。"
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "((flag:shop1_1 == 0 )&&( flag:shop1_2 == 0))",
                "true": [
                    "神像眼中的红光已经彻底灭了，再无任何反应。",
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "openShop",
                "id": "shop1",
                "open": true
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,11": {
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 31,  0, 81,  0, 31,  0, 28,  0,205,  0, 31,  1],
    [  1,  0, 21,  1,  1,  1, 81,  1,  1,  1, 21,  0,  1],
    [  1,201,  1,  1,  0, 27,217, 21,  0,  1,  1, 81,  1],
    [  1, 31,  0,  1, 81,  1,  1,  1,203,  1,  0, 28,  1],
    [  1,  1, 81,  1, 21,  7,131,  8,  0,  1,205,  1,  1],
    [  1,  0, 21,  1,  0,205,  0,217, 29,  1,  0, 21,  1],
    [  1,202,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1],
    [  1, 21,  1,  0, 31,  0,202,  0, 31,  0,  1, 31,  1],
    [  1,  0, 81, 21,  0, 21,  1, 31,  0, 31, 81,  0,  1],
    [  1,  1,  1,  1,203,  1,  1,  1, 81,  1,  1,  1,  1],
    [  1, 87,  0, 31,  0,  0,209,  0,  0, 31,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgm": "area1.mp3",
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,103,  0,103,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,103,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "color": [
        0,
        0,
        0,
        0.5
    ],
    "hard1_enemy_ratio": 90,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}