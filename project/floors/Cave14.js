main.floors.Cave14=
{
    "floorId": "Cave14",
    "title": "特训营-14",
    "name": "特训营-14",
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
            "type": "moveHero",
            "steps": [
                "down"
            ]
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[hero]节点！就是它了！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "6,9": [
            {
                "type": "function",
                "function": "function(){\ncore.removeFlag(\"Cave_disableFly\");\n}"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "if",
                "condition": "(!flag:skill5_am)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:disableFly",
                        "value": "0"
                    },
                    "\t[hero]可以了，\\i[fly]传送器可以用了！\n不过，\\i[skill4]魔力莱姆的效果还没有恢复……"
                ],
                "false": [
                    "\t[hero]可以了，\\i[fly]传送器可以用了——等\\i[skill5]鸽化效果结束之后。\n不过，\\i[skill4]魔力莱姆的效果还没有恢复……"
                ]
            },
            "\t[芳芷,hero2]整个禁魔力场并非只由这一个节点维持，而且其他节点不像它这样暴露在外面。\n所以暂时不要指望莱姆了，尽可能利用好其他的技能吧。",
            {
                "type": "animate",
                "name": "E_unhappy",
                "loc": "hero"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,327, 82,331,  0,145, 87,145,  0, 22, 82,327,145],
    [145,145,145, 81, 21,145,  0,145,331,  0,145,145,145],
    [145,328, 82,  0,  0,145,589,145,  0,334, 82,328,145],
    [145,145,145, 81,590,145,  0,145,579, 81,145,145,145],
    [145,327, 82,  0, 21, 81,332, 81, 21,  0, 82,327,145],
    [145,145,145,589,  0,583,  0,583,  0,589,145,145,145],
    [145,328, 82,  0, 21,145,582,145, 21,  0, 82,328,145],
    [145,145,145, 81,579,145,326,145,590, 81,145,145,145],
    [145,327, 82,  0,331,145,626,145,  0,  0, 82,327,145],
    [145,145,145, 22,  0,145,329,145, 21, 81,145,145,145],
    [145,328, 82,  0,334,145, 88,145,  0,334, 82,328,145],
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
    "underGround": true,
    "upFloor": [
        6,
        1
    ],
    "hard1_enemy_ratio": 80,
    "downFloor": [
        6,
        11
    ],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}