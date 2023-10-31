main.floors.MT17=
{
    "floorId": "MT17",
    "title": "主塔 17 层",
    "name": "主塔-17",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "area2.mp3",
    "firstArrive": [
        {
            "type": "changePos",
            "direction": "down"
        },
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[芳芷,hero2]\\i[smallPriest]弟人祭司加上\\i[smallFairy]妖精的组合……相当难对付。这些生物个体都不强，但组合起来爆发出的力量不可小觑。",
        {
            "type": "if",
            "condition": "(flag:hard == 2)",
            "true": [
                "\t[芳芷,hero2]想必你已经发现了，这些妖精快速的攻击能迅速削弱你的护盾，使得\\i[skill1]护盾爆发的威力大幅下降，如果再加上迅捷光环的加持，护盾爆发就完全起不到效果了。"
            ]
        },
        "\t[hero]（要不要直接开蓝门绕过这些妖精？……）"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,3": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,8": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [151,151,151,151,151,151,151,151,151,151,151,151,151],
    [151,151,323,  0, 81, 31, 32, 20, 31, 20, 31,151,151],
    [151, 31,  0,230, 20, 20, 20, 20, 32, 20,233,322,151],
    [151, 20, 20, 81,334, 20, 88, 20, 81, 20, 81, 20,151],
    [151,  0,  0,237,  0,237,  0,237,  0,237,  0,  0,151],
    [151, 31, 20, 20, 20, 20, 82, 20, 20, 20, 20, 31,151],
    [151,  0,  0,234,  0,231,323,231,  0,234,  0,  0,151],
    [151, 81, 20, 20, 31, 20, 20, 20, 31, 20, 20, 20,151],
    [151,234,322, 20,  0, 20, 87, 20,  0,207, 31,  0,151],
    [151, 31, 31, 20,  0,334,  0, 68,  0, 20, 20, 81,151],
    [151, 20, 20, 20,229, 20, 81, 20,229, 20,322,240,151],
    [151,322,236, 81,  0, 68,240,323,  0, 20, 32,  0,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151]
],
    "bgmap": [

],
    "fgmap": [

],
    "hard1_enemy_ratio": 85,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true,
    "weather": [
        "sun",
        5
    ]
}