main.floors.BMT4_3=
{
    "floorId": "BMT4_3",
    "title": "藏宝地？",
    "name": "藏宝地？",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground2",
    "bgm": "area3.mp3",
    "color": [
        0,
        0,
        0,
        0.9
    ],
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "moveHero",
            "steps": [
                "right"
            ]
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[芳芷,hero2]这里面都是什么奇葩怪物……",
        "\t[芳芷,hero2]注意观察它们的特技，小心应对。",
        {
            "type": "if",
            "condition": "(flag:hard == 1)",
            "true": [
                "\t[系统提示]简化难度下，该层怪物攻防为正常难度下的20%。"
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "12,6": [
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
                        "type": "setValue",
                        "name": "flag:B4Fmission_finish",
                        "value": "1"
                    },
                    "一个木箱子，上面积了厚厚的一层灰。",
                    {
                        "type": "setBlock",
                        "number": "N408",
                        "loc": [
                            [
                                12,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "044-Chest01.ogg"
                    },
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    "\t[芳芷,hero2]这里面都什么乱七八糟的……",
                    "\t[hero]（……有一把绿钥匙！）",
                    {
                        "type": "setValue",
                        "name": "item:greenKey",
                        "operator": "+=",
                        "value": "1"
                    },
                    "\t[芳芷,hero2]还有这本书，好像有点意思……《论如何成为管理者》，我看看……",
                    "\t[芳芷,hero2]整本书都只有\r[yellow]LHJNB\r这5个字母，啥意思呀……",
                    {
                        "type": "animate",
                        "name": "E_unhappy",
                        "loc": "hero"
                    },
                    "\t[芳芷,hero2]能看出来这些东西曾经是某个人的东西，不知道为什么会留在这里……",
                    "\t[hero]（看来没什么有用的东西了，走吧。）"
                ],
                "false": [
                    "装满了乱七八糟的东西的箱子。"
                ]
            }
        ]
    },
    "changeFloor": {
        "0,6": {
            "floorId": "BMT4_2",
            "loc": [
                11,
                5
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [310,310,310,310,310,310,310,310,310,310,310,310,310],
    [310,310,244,  0,  0, 81,  0,  0,  0,  0,  0,310,310],
    [310,310,  0, 81,  0,265,  0,  0,310,310,  0,310,310],
    [310,310,  0,  0,  0,310,310, 82,310,266,  0,310,310],
    [310,310,  0,  0,  0,310,  0,  0,  0,  0,  0,310,310],
    [310,310,310, 81,250,310, 81,310,310,310,310,310,310],
    [ 89,  0,  0,  0,  0,310, 82,250,244,266,244,250,406],
    [310,310,310, 81,250,310, 81,310,310,310,310,310,310],
    [310,310,  0,  0,  0,310,  0,  0,  0,  0,  0,310,310],
    [310,310,  0,  0,  0,310,310, 82,310,266,  0,310,310],
    [310,310,  0, 81,  0,265,  0,  0,310,310,  0,310,310],
    [310,310,244,  0,  0, 81,  0,  0,  0,  0,  0,310,310],
    [310,310,310,310,310,310,310,310,310,310,310,310,310]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": false,
    "hard1_enemy_ratio": 20,
    "underGround": true,
    "bg2map": [

],
    "fg2map": [

]
}