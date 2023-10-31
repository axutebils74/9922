main.floors.Dungeon2=
{
    "floorId": "Dungeon2",
    "title": "试炼2",
    "name": "试炼2",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 10,
    "defaultGround": "T506",
    "bgm": "dungeon2.mp3",
    "firstArrive": [
        {
            "type": "function",
            "function": "function(){\nif (core.getFlag(\"skill3_range\", 0) == 0) {\n\tcore.setFlag(\"skill3_range\", 1);\n}\ncore.plugin.saveHeroStatus();\ncore.plugin.resetHeroStatus();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:saved_skill3_range",
            "value": "flag:skill3_range"
        },
        {
            "type": "setValue",
            "name": "flag:skill3_range",
            "value": "1188"
        },
        {
            "type": "setValue",
            "name": "flag:skill3_cost",
            "value": "50"
        },
        {
            "type": "setValue",
            "name": "flag:mana_item",
            "value": "100"
        },
        {
            "type": "setValue",
            "name": "flag:mdef_ratio",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "status:atk",
            "value": "80"
        },
        {
            "type": "setValue",
            "name": "status:def",
            "value": "50"
        },
        {
            "type": "setValue",
            "name": "status:mdef",
            "value": "0"
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.clearItemDetailCacheAll();\n}"
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]\b[up,hero]（这，怎么感觉这里的某些东西似曾相识……）",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[水魔怪,E637]\b[down,6,0]欢迎来到\r[yellow]水之试炼\r。击败四个\\i[E635]水卫怪就可以打开我面前的机关门。\n击败我就算通过。",
        "\t[hero]\b[up,hero]（这些水卫怪好像很强的样子……\n按照之前的经验，实际上在它们的位置击败任意怪物都可以开门，不过这样做到底赚不赚呢？……）",
        "\t[系统提示]和上一个副本类似，天赋树被暂时禁用，且各种数值已重置为固定值。\n此副本中\\i[skill3]轻风会将敌人推到尽头，而不是只推1格。\n另外，\\i[pickaxe]破墙镐\r[yellow]可以破坏本地图的一切地形\r，包括水坑！（左下角和右下角的装饰物除外）",
        "\t[系统提示]最后，你在与BOSS战斗之前，可以用绿钥匙换血。\nTIP: 这个绿非常容易省。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,0": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "choices",
                    "text": "\t[系统提示]你可以消耗一把绿钥匙，增加2000生命值。",
                    "choices": [
                        {
                            "text": "不咸",
                            "action": []
                        },
                        {
                            "text": "咸！",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "item:greenKey",
                                    "operator": "-=",
                                    "value": "1"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:hp",
                                    "operator": "+=",
                                    "value": "2000"
                                },
                                {
                                    "type": "animate",
                                    "name": "heal2",
                                    "loc": "hero"
                                }
                            ]
                        },
                        {
                            "text": "我不仅要咸，我还要咸2把！",
                            "action": [
                                "\t[系统提示]谔谔，你也太咸了，直接送你11451血。",
                                {
                                    "type": "setValue",
                                    "name": "item:greenKey",
                                    "operator": "-=",
                                    "value": "2"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:hp",
                                    "operator": "+=",
                                    "value": "11451"
                                },
                                {
                                    "type": "animate",
                                    "name": "heal2",
                                    "loc": "hero"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "battle",
                    "loc": [
                        6,
                        0
                    ]
                }
            ]
        }
    },
    "changeFloor": {},
    "afterBattle": {
        "6,0": [
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "setBlock",
                "number": "magician",
                "loc": [
                    [
                        6,
                        0
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "heal",
                "loc": [
                    6,
                    0
                ]
            },
            {
                "type": "sleep",
                "time": 500
            },
            "\t[魔法老头,magician]恭喜，你的力量得到了认可。\n经历了刚才的战斗，你有什么感受吗？",
            {
                "type": "animate",
                "name": "E_love",
                "loc": "hero"
            },
            "\t[hero]有！请告诉我天才莱姆在哪能领取！",
            "\t[魔法老头,magician]这……这可领不到。\n不过，我可以教你一手魔法，让你能够召唤变种的天才莱姆！怎么样？",
            {
                "type": "animate",
                "name": "E_love",
                "loc": "hero"
            },
            "\t[魔法老头,magician]好，那么这技能【丢你莱姆】，就当作你通过考验的奖励了。",
            {
                "type": "setValue",
                "name": "flag:dungeon2_finish",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:skill4_description",
                "value": "\"在面前空地上放置一只魔力莱姆，削弱附近未被其他光环影响的敌人。消耗100能量，快捷键2。\""
            },
            {
                "type": "setValue",
                "name": "flag:skill4_cost",
                "value": "100"
            },
            {
                "type": "setValue",
                "name": "flag:skill3_range",
                "value": "flag:saved_skill3_range"
            },
            {
                "type": "setValue",
                "name": "item:skill4",
                "value": "1"
            },
            {
                "type": "sleep",
                "time": 500
            },
            "\t[hero]非常感谢！",
            "\t[魔法老头,magician]客气，我们有缘再见！",
            {
                "type": "setValue",
                "name": "flag:dungeon2_finish",
                "value": "1"
            },
            {
                "type": "playSound",
                "name": "mteleport.wav"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.loadHeroStatus();\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "West9",
                "loc": [
                    6,
                    5
                ],
                "direction": "down",
                "time": 1000
            }
        ],
        "4,5": [
            {
                "type": "setValue",
                "name": "flag:door_Dungeon2_6_1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,1);\n}"
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:door_Dungeon2_6_1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,1);\n}"
            }
        ],
        "4,9": [
            {
                "type": "setValue",
                "name": "flag:door_Dungeon2_6_1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,1);\n}"
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:door_Dungeon2_6_1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,1);\n}"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,1": {
            "0": {
                "condition": "flag:door_Dungeon2_6_1==4",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_Dungeon2_6_1",
                        "value": "null"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.hideBgFgMap(\"bg2\", [\n\t[4, 5],\n\t[8, 5],\n\t[4, 9],\n\t[8, 9]\n]);\n\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [157,157,157,157,157,157,637,157,157,157,157,157,157],
    [ 47,  0, 28,157,157,157, 85,157,157,157, 28, 31,90009],
    [  0,  0,633,  0,157,157, 27,157,157,  0,636,90009, 32],
    [ 21,  0,90010,  0,  0, 81,  0, 81,636, 47,  0,90009, 27],
    [90010,90010,  0,631,  0,90010, 31,90009,  0,632,  0,  0,631],
    [632,  0, 29,  0,635,90010,  0,90009,635, 81,634,  0, 31],
    [ 27, 81,  0,634,  0,  0,70009,  0,  0,  0, 82, 29,  0],
    [ 31,90010,  0,90010,  0,90010, 31,90009,90009,90009,  0,632,  0],
    [90010,  0,631,  0, 82,  0,630,  0, 81, 28,  0,90009,90009],
    [ 28,636,  0,  0,635,  0,496,  0,635,  0,  0,630, 31],
    [ 31,90002,90002,334,90002, 22, 82, 21,90002,90002,633,90002,90002],
    [90002,90002,  0,630, 81,  0,334,  0, 81,  0,  0,  0,90002],
    [70029, 32, 27,  0,90002, 33,  0, 47,90002, 29,  0, 21,70029]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,867,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [70021,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70021],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,168,  0,  0,  0,168,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,168,  0,  0,  0,168,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "hard1_enemy_ratio": 90,
    "beforeBattle": {},
    "cannotMoveIn": {}
}