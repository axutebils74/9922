main.floors.MT38=
{
    "floorId": "MT38",
    "title": "主塔 38 层",
    "name": "辉煌圣殿-38",
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
            "direction": "up"
        },
        "\t[搬运工头,E422]\b[down,6,5]想不到我作为苦力也有假期，放假的感觉真好……\n等假期结束，我一定要继续为圣殿的建设做出贡献！把这里建设成我们新的家园！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,5": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "!switch:A",
                    "true": [
                        {
                            "type": "setValue",
                            "name": "switch:A",
                            "value": "1"
                        },
                        "\t[搬运工头,E422]咦，有外来者！\n休想干扰我们的伟大建设！",
                        {
                            "type": "battle",
                            "loc": [
                                6,
                                5
                            ]
                        },
                        {
                            "type": "openDoor",
                            "loc": [
                                2,
                                3
                            ]
                        },
                        {
                            "type": "openDoor",
                            "loc": [
                                10,
                                3
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 500
                        },
                        "\t[hero]完全无法交流啊……",
                        "\t[芳芷,hero2]可能这种苦力型的机械脑子不太好使吧。",
                        {
                            "type": "animate",
                            "name": "E_unhappy",
                            "loc": "hero"
                        }
                    ],
                    "false": [
                        {
                            "type": "battle",
                            "loc": [
                                6,
                                5
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,6": {
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
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143, 21,330, 21,143, 21,330, 21,143, 21,330, 21,143],
    [143,322, 53,323,143,323,228,322,143,322, 53,323,143],
    [143,143, 85,143,143,143, 81,143,143,143, 85,143,143],
    [143,330,  0,323,247, 81,  0, 81,258, 21,  0,247,143],
    [143,143,143,143,143,143,422,143,257,143,143, 81,143],
    [143, 87,330,276,  0, 83,  0, 82,  0,143,  0,323,143],
    [143,143, 81,143,330,143,143,143, 21,143,276,143,143],
    [143, 68,259,143,  0,247,  0,143,  0,246,  0,  0,143],
    [143,330,258,143, 81,143, 68,143, 81,143,143,259,143],
    [143,143,143,143,247,143,  0,143,247,258,143,323,143],
    [143,330,322,259, 21,143, 88,143,330,322, 81, 22,143],
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