main.floors.East12=
{
    "floorId": "East12",
    "title": "花月道-12",
    "name": "花月道-12",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "grass",
    "bgm": "area10.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(!flag:arrived_East14)",
            "true": [
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[芳芷？,hero2]\b[down,1,6]嗯……这样应该就行了……",
                {
                    "type": "move",
                    "loc": [
                        1,
                        6
                    ],
                    "time": 300,
                    "steps": [
                        "left"
                    ]
                },
                {
                    "type": "animate",
                    "name": "heal",
                    "loc": [
                        11,
                        6
                    ],
                    "async": true
                },
                {
                    "type": "setBlock",
                    "number": "N337",
                    "loc": [
                        [
                            11,
                            6
                        ]
                    ]
                },
                {
                    "type": "waitAsync"
                },
                "\t[芳芷？,hero2]\b[down,11,6]这些除灵者怎么回事，我一定要当面问清楚。",
                {
                    "type": "move",
                    "loc": [
                        11,
                        6
                    ],
                    "time": 100,
                    "steps": [
                        "down",
                        "down",
                        "down",
                        "down",
                        "down",
                        "right"
                    ]
                },
                {
                    "type": "sleep",
                    "time": 500
                },
                {
                    "type": "moveHero",
                    "time": 100,
                    "steps": [
                        "down"
                    ]
                },
                {
                    "type": "animate",
                    "name": "E_dots",
                    "loc": "hero"
                },
                "\t[hero]\b[down,hero]刚才好像……",
                "\t[晴芸,hero3]\b[down,hero]咦，那里有短距离的传送阵！这样就能绕过这些除灵者设立的大阵了。",
                "\t[hero]\b[down,hero]我是说，刚才好像有个熟悉的人影……",
                "\t[晴芸,hero3]\b[down,hero]就是刚刚摆下这个传送阵的人吧，好像在哪见过……",
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[晴芸,hero3]\b[down,hero]对了，就是之前在村庄里宣布规则的，应该是比赛主办方的人员。\n看来这些拦路的除灵者对比赛造成了阻碍，所以才要提供传送阵绕开它们吧。",
                "\t[hero]\b[down,hero]（看她好像挺着急的样子……也许是来解决除灵者的问题？）"
            ]
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.values.animateSpeed = 450;\n}"
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,0": {
            "floorId": "East9",
            "loc": [
                11,
                12
            ]
        },
        "12,11": {
            "floorId": "East13",
            "loc": [
                0,
                11
            ]
        },
        "0,6": {
            "floorId": "East12",
            "loc": [
                12,
                6
            ]
        },
        "12,6": {
            "floorId": "East12",
            "loc": [
                0,
                6
            ]
        }
    },
    "afterBattle": {
        "9,3": [
            {
                "type": "setValue",
                "name": "flag:door_East12_7_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,3": [
            {
                "type": "setValue",
                "name": "flag:door_East12_4_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,9": [
            {
                "type": "setValue",
                "name": "flag:door_East12_5_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,9": [
            {
                "type": "setValue",
                "name": "flag:door_East12_8_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,6": [
            {
                "type": "openDoor",
                "loc": [
                    6,
                    11
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    1,
                    8
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    1
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    11,
                    4
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,4": {
            "0": {
                "condition": "flag:door_East12_7_4==1",
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
                        "name": "flag:door_East12_7_4",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "4,5": {
            "0": {
                "condition": "flag:door_East12_4_5==1",
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
                        "name": "flag:door_East12_4_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "5,8": {
            "0": {
                "condition": "flag:door_East12_5_8==1",
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
                        "name": "flag:door_East12_5_8",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "8,7": {
            "0": {
                "condition": "flag:door_East12_8_7==1",
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
                        "name": "flag:door_East12_8_7",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "map": [
    [149, 91,148,148,148,148,148,148,148,148,148,148,148],
    [149,  0,474,  0,334,  0, 85,535,324,325, 21, 68,148],
    [149,330,148,148,148,529,148,148,148,148,148,331,148],
    [149,  0,148,536,  0,  0,330,  0,  0,536,148,535,148],
    [149,542,148,  0,148,148,148, 85,148,  0,148, 85,148],
    [149,  0,148,  0, 85,535,330,535,148,  0,485,  0,148],
    [ 89,337,148,330,148,330,538,330,148,330,148,  0, 89],
    [149,  0,485,  0,148,535,330,535, 85,  0,148,  0,148],
    [149, 85,148,  0,148, 85,148,148,148,  0,148,542,148],
    [149,535,148,536,  0,  0,330,  0,  0,536,148,  0,148],
    [149,331,148,148,148,148,148,529,148,148,148,330,148],
    [149, 68, 21,325,324,535, 85,  0,334,  0,474,  0, 94],
    [149,149,149,149,149,149,149,149,149,149,149,149,149]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,80001,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,146,146,146,  0,  0,  0,80001,  0],
    [  0,  0,  0,  0,  0,146,146,146,  0,  0,  0,  0,  0],
    [  0,80001,  0,  0,  0,146,146,146,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,80002,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "hard1_enemy_ratio": 80,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "weather": [
        "sun",
        5
    ]
}