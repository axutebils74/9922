main.floors.BMT3=
{
    "floorId": "BMT3",
    "title": "地下 3 层",
    "name": "地下-3",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
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
            "type": "setValue",
            "name": "flag:redKey_price",
            "value": "250"
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.setBgLight([\n\t[0, 2, 150],\n\t[4, 2, 150],\n\t[8, 2, 150],\n\t[10, 3, 150],\n\t[3, 5, 150],\n\t[8, 5, 150],\n\t[3, 7, 150],\n\t[8, 7, 150],\n\t[3, 9, 150],\n\t[8, 10, 150],\n\t[12, 10, 150]\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "10,11": [
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
                    "\t[粉色神像,expShop]不限量收购钥匙！",
                    "\t[芳芷,hero2]这个大家伙倒是挺符合圣匙帮的风格，他们库存的很多钥匙都是收购过来的。",
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    "\t[hero]（这些钥匙能放心卖给它吗，我自己还怕不够用呢……）",
                    "\t[芳芷,hero2]圣匙帮的地盘上钥匙应该还是挺充足的，就连红钥匙都不罕见，适当卖一些应该没关系。\n我的建议是，\r[yellow]红钥匙保持身上有一把就可以了\r，黄蓝钥匙出售价格不高，不要卖太多。",
                    {
                        "type": "if",
                        "condition": "(!flag:arrived_B4FShop)",
                        "true": [
                            "\t[芳芷,hero2]而且现在的当务之急还是找到能花钱的地方……先往下继续探索看看吧。"
                        ]
                    },
                    {
                        "type": "openShop",
                        "id": "B3FShop"
                    }
                ]
            },
            {
                "type": "openShop",
                "id": "B3FShop",
                "open": true
            }
        ]
    },
    "changeFloor": {
        "11,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,6": {
            "floorId": "BMT4",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:door_BMT3_10_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,8": [
            {
                "type": "setValue",
                "name": "flag:door_BMT3_10_9",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,9": {
            "0": {
                "condition": "flag:door_BMT3_10_9==2",
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
    [310,310,310,310,310,310,310,310,310,310,310,310,310],
    [310, 32,324, 22,310, 22,325, 32,310,  0,  0, 87,310],
    [310,  0,224,  0,310,  0,224,  0,310,248,310,310,310],
    [310,310, 81,310,310,310, 81,310,310,326,310,334,310],
    [310, 22,  0,253, 81, 21, 21,235,310, 33,  0, 81,310],
    [310,310,310,310,310,310,310, 81,310,310, 81,310,310],
    [310, 88,224,271,360, 33, 81,325,  0,248,  0, 32,310],
    [310,310,310,310,310,310,310, 81,310,310, 81,310,310],
    [310, 22,253,310,  0, 21,235,  0,310,271,  0,271,310],
    [310,310, 81,310, 81,310,310, 32,310,310, 85,310,310],
    [310, 21,  0,310,224, 32,310, 82,310,324, 21,325,310],
    [310, 32,360, 81,  0, 21,310,386,310,  9,130, 10,310],
    [310,310,310,310,310,310,310,310,310,310,310,310,310]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [103,  0,  0,  0,103,  0,  0,  0,103,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,103,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,103,  0,  0,  0,  0,103,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,103,  0,  0,  0,  0,103,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,103,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,103,  0,  0,  0,103],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "hard1_enemy_ratio": 85,
    "underGround": true,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}