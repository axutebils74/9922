main.floors.Dungeon1=
{
    "floorId": "Dungeon1",
    "title": "试炼1",
    "name": "试炼1",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 5,
    "defaultGround": "grass",
    "bgm": "dungeon1.mp3",
    "firstArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.saveHeroStatus();\ncore.plugin.resetHeroStatus();\n}"
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
        "\t[幻境守护者,E504]\b[down,6,0]欢迎来到\r[yellow]力量试炼\r。规则很简单，只要你能打败我，就算通过。",
        "\t[hero]（听起来似乎不难，好好利用地上的这些道具吧。）",
        "\t[系统提示]在副本中，\r[yellow]所有\r状态和道具都是独立的，不受副本外的影响，也无法带到副本外。\n天赋树也暂时禁用，这意味着你不能用副本内的怪物刷杀敌数。",
        "\t[系统提示]注意，在该副本中，你失去了大部分的被动技能，能量块的回复量也固定为100点，但你的护盾倍数仍然是2（1点护盾挡2点伤害）。\n此外，由于轻风\\i[skill3]占据了快捷键1，因此破墙镐\\i[pickaxe]的快捷键是2。你也可以点击状态栏来使用它。",
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
                    "text": "\t[系统提示]你可以消耗一把绿钥匙，增加1000生命值。",
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
                                    "value": "1000"
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
                "number": "man",
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
            "\t[老头,man]恭喜，你的力量得到了认可。\n经历了刚才的战斗，你有什么感受吗？",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[老头,man]没有什么特别的感受的话，随便吐槽什么东西也可以。",
            {
                "type": "if",
                "condition": "core.getBlockId(6,9) != 'E496' && core.getFlag(\"dungeon1_hit_slime\", 0) == 0",
                "true": [
                    "\t[hero]刚才那样的小莱姆还有吗，我想随身带着，遇到强敌就丢出去。",
                    "\t[老头,man]哈哈哈哈……很可惜，这个不能给你。\n不过，你的关注点很不错。",
                    "\t[老头,man]刚才的小莱姆，虽然自身战斗力约等于0，但由于其天赋异禀，能够起到独一无二的作用。\n你能够不被其表面的战斗力所迷惑，这便是你能通过考验的原因。",
                    "\t[老头,man]希望你以后，也能一直记得关注那些表面弱小的生命。"
                ],
                "false": [
                    "\t[hero]那个小莱姆放在那有什么特殊的含义吗？",
                    "\t[老头,man]不错……原来你还是注意到它了。",
                    "\t[老头,man]刚才的小莱姆，虽然自身战斗力约等于0，但由于其天赋异禀，能够起到独一无二的作用。\n虽然你没有在刚才的考验中善加利用它，不过你的力量很强，也算是通过考验了。",
                    "\t[老头,man]希望你以后，也能一直记得关注那些表面弱小的生命。"
                ]
            },
            {
                "type": "setValue",
                "name": "flag:dungeon1_finish",
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
                "type": "setValue",
                "name": "item:yellowGem",
                "operator": "+=",
                "value": "2"
            },
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "+=",
                "value": "500000"
            },
            {
                "type": "setValue",
                "name": "status:mana",
                "operator": "+=",
                "value": "100"
            },
            {
                "type": "setValue",
                "name": "status:atk",
                "operator": "+=",
                "value": "2500"
            },
            {
                "type": "setValue",
                "name": "status:def",
                "operator": "+=",
                "value": "2500"
            },
            {
                "type": "changeFloor",
                "floorId": "South11",
                "loc": [
                    6,
                    8
                ],
                "direction": "down",
                "time": 1000
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:dungeon1_hit_slime",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [ 27,  0,149,149,149,149,504,149,149,149,149,149, 32],
    [  0,497, 29,  0,334,149,149,149, 28,  0, 31,149, 27],
    [ 32,  0,149,  0,500, 81, 81, 81,  0,497, 81, 32,502],
    [149,149,149, 31,149, 31,149, 31,149, 31,  0,498, 28],
    [ 28,149,149,503,149,149,149,149,149,  0,  0,  0, 82],
    [ 47,502,  0, 32,501,498,  0, 21,149, 28,502,501, 27],
    [ 27,149,502,  0, 27, 81,497,500, 28,149,  0,149, 47],
    [ 82,149,  0,149,149,149,  0,149, 32,149,  0,149, 81],
    [ 21, 27,497, 28,149,334,  0,149,149,  0,334,500, 31],
    [149,149,  0,498,  0,  0,496,  0,  0,498,  0,149, 28],
    [ 28,501,  0,149,149, 33,149,334,149,  0,149,149,149],
    [ 31,149,503, 27,149,  0, 47,  0,149,501, 29,503, 27],
    [ 29,149, 32,  0, 81, 21,  0, 22, 81, 21,  0,149, 32]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "hard1_enemy_ratio": 90,
    "beforeBattle": {},
    "cannotMoveIn": {}
}