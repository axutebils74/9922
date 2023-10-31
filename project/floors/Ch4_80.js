main.floors.Ch4_80=
{
    "floorId": "Ch4_80",
    "title": "下城区入口",
    "name": "下城区入口",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "T817",
    "bgm": "area19.mp3",
    "color": [
        0,
        0,
        0,
        0.2
    ],
    "firstArrive": [
        {
            "type": "follow",
            "name": "hero3.png"
        },
        {
            "type": "function",
            "function": "function(){\ncore.setFlag(\"__visited__\", { Ch4_80: true });\ncore.values.animateSpeed = 380;\n}"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,6": [
            {
                "type": "function",
                "function": "function(){\ncore.hideBgFgMap('bg2', [1, 6]);\n}"
            },
            "\t[械灵-Angel,E862]\b[down,null]这里就是摩宇城下城区的入口。\n主力部队已经攻进去了，沿着这条道路一直前进的话应该就能跟他们会合。\n我先溜啦，祝你们好运~",
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        6
                    ]
                ],
                "remove": true
            },
            {
                "type": "animate",
                "name": "light2",
                "loc": [
                    3,
                    6
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "12,6": {
            "floorId": "Ch4_81",
            "loc": [
                0,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [197,197,197,197,197,197,197,197,197,197,197,197,197],
    [197, 81,334,197,386,197,386, 22,386,197,333,333,197],
    [197,334,197,197, 82,197, 83,197, 84,197,197, 81,197],
    [197, 81,197,  0,  0,197, 22,386, 22,197,333,333,197],
    [197,334, 81,  0,  0,197, 84,197, 83,197, 81,197,197],
    [197,197,197,  0,  0,  0,  0, 21,  0,334,  0,197,197],
    [  0,  0,  0,862,  0,  0, 23,  0, 22,  0,  0, 83,  0],
    [197,197,197,  0,151042,151043,  0,334,  0, 21,  0,197,197],
    [197, 22,702,  0,  0,197, 82,197,197,197, 84,197,197],
    [197,702,197,  0,  0,197,334,334,197,568,881,568,197],
    [197, 22,197,197, 82,197,197,334,197,197, 84,197,197],
    [197,702, 22,197,386,197,334, 81,197,568,881,568,197],
    [197,197,197,197,197,197,197,197,197,197,197,197,197]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,151034,151035,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,168,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 94],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "upFloor": [
        12,
        6
    ],
    "downFloor": [
        4,
        6
    ],
    "hard1_enemy_ratio": 95
}