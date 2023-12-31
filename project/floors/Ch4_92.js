main.floors.Ch4_92=
{
    "floorId": "Ch4_92",
    "title": "览伟桥-6",
    "name": "览伟桥-6",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "area19.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 50,
    "defaultGround": "T817",
    "bgm": "area19.mp3",
    "color": null,
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "boss2.mp3"
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[铁焚,E843]\b[down,6,3]你们来到这里的速度比我预想的还快……\n不过别以为我跟孤鸣那个废物一样！我的状态回复得差不多了，就凭你们两个，休想过我这关！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "Ch4_91",
            "loc": [
                6,
                0
            ]
        },
        "6,0": {
            "floorId": "Ch4_92_2",
            "loc": [
                6,
                12
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,3": [
            {
                "type": "setBlock",
                "number": "E818",
                "loc": [
                    [
                        6,
                        3
                    ]
                ]
            },
            "\t[铁焚,E843]\b[down,6,3]可恶，怎么变强了这么多……\n你们给我等着，这事还没完！",
            {
                "type": "animate",
                "name": "dark",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        3
                    ]
                ],
                "remove": true
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    2
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    2
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    2
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    10
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    10
                ]
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_92_6_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_Ch4_92_6_7",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,7": {
            "0": {
                "condition": "flag:door_Ch4_92_6_7==2",
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
                        "name": "flag:door_Ch4_92_6_7",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 17, 17, 17, 17,197,197,  0,197,197, 17, 17, 17, 17],
    [197,567,566,567,197, 21, 22, 21,197,567,566,567,197],
    [197,822,662,660, 85,334, 85,334, 85,660,661,823,197],
    [197,197,197,197,197,197,843,197,197,197,197,197,197],
    [197,566,333, 81,197,197, 83,197,197, 81,333,566,197],
    [197,197,197,566,197,  0,808,  0,197,566,197,197,197],
    [568,332, 82,333, 81,820,566,820, 81,333, 82,332,568],
    [197,197,197,197,197,197, 85,197,197,197,197,197,197],
    [197,333,  0,660,197,815,661,815,197,660,  0,333,197],
    [197,197,197,815,197,197, 81,197,197,815,197,197,197],
    [566,819, 81,  0, 85,808,  0,808, 85,  0, 81,819,566],
    [  0,661,197,566,197,  0,  0,  0,197,566,197,662,  0],
    [ 17, 17, 17, 17, 17,197,  0,197, 17, 17, 17, 17, 17]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,318,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,318,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0, 91,  0,  0,  0,  0,  0,  0],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [318,318,318,318,318,318,318,318,318,318,318,318,318],
    [  0,  0,  0,  0,  0,  0, 93,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "upFloor": [
        6,
        0
    ],
    "downFloor": [
        6,
        12
    ],
    "hard1_enemy_ratio": 95
}