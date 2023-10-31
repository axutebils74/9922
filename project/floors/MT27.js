main.floors.MT27=
{
    "floorId": "MT27",
    "title": "主塔 27 层",
    "name": "孤狼战场-27",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area5.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 10,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "if",
            "condition": "flag:hard == 2",
            "true": [
                {
                    "type": "sleep",
                    "time": 500
                },
                {
                    "type": "moveHero",
                    "time": 300,
                    "steps": [
                        "right:1"
                    ]
                },
                {
                    "type": "animate",
                    "name": "E_dots",
                    "loc": [
                        10,
                        2
                    ]
                },
                "\t[芳芷,hero2]嗯？怎么了？",
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[芳芷,hero2]\r[yellow]暴戾\r属性越来越多了，难以处理？\n确实是这样，搭配上\r[yellow]疯狂\r属性更是加倍棘手。",
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[芳芷,hero2]对吧，自残很疼吧……等等，你能感觉到疼？是什么感觉？",
                {
                    "type": "sleep",
                    "time": 500
                },
                {
                    "type": "animate",
                    "name": "E_sweat",
                    "loc": [
                        9,
                        1
                    ],
                    "async": true
                },
                "\t[芳芷,hero2]生命值一下子下降很多的感觉吗……好有道理。",
                "\t[芳芷,hero2]嗯……看来你需要的是一把“特别”的武器。",
                "\t[芳芷,hero2]一种能够控制自身攻击力的武器。回去找杜衡，他可能有办法。",
                {
                    "type": "setValue",
                    "name": "flag:can_buy_sword0",
                    "value": "1"
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,5": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "9,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT26_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT26_6_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,3": {
            "0": {
                "condition": "flag:door_MT26_6_3==2",
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
    [142,142,142,142,142,142,142,142,142,142,142,142,142],
    [142,369,232, 22,142, 21, 34, 21,142, 88,  0,381,142],
    [142, 32,370, 81,142, 27, 21, 29,142,142, 81, 34,142],
    [142,142, 81, 81,142,142, 85,142,142, 34,  0,232,142],
    [142,  0, 33,  0,142,382,  0,382,142,  0,142,142,142],
    [142, 87,  0, 34,380,  0,  0,  0,380, 22,142,376,142],
    [142,142, 82,142,142,142, 34,142,142,  0, 81, 34,142],
    [142, 27,  0, 21,142,355, 21,377,142, 81,142,227,142],
    [142, 82,142,355, 31, 27,369, 28, 32,  0,142, 27,142],
    [142,278,142,142,142,226, 29,227,142,355,142, 34,142],
    [142,278,142, 34,142,142, 33,142,142, 34,142,142,142],
    [142, 23,142, 27,355, 81,  0,355, 34,370, 27, 81,142],
    [142,142,142,142,142,142,142,142,142,142,142,142,142]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "area5.mp3",
    "hard1_enemy_ratio": 75,
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}