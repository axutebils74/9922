main.floors.West9=
{
    "floorId": "West9",
    "title": "截浪滩-9",
    "name": "截浪滩-9",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "T506",
    "bgm": "area9.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "flag:dungeon2_finish == 1",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\ncore.hideBgFgMap(\"bg2\", [6, 5]);\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:dungeon2_finish",
                    "value": "2"
                },
                {
                    "type": "animate",
                    "name": "E_love",
                    "loc": [
                        6,
                        6
                    ]
                },
                "\t[晴芸,hero3]怎么样，这次是什么奖励？",
                "\t[hero]一个技能。",
                "\t[晴芸,hero3]奖励，就，一个技能？\n那肯定是什么神技！",
                "\t[hero]不好说，总之先去试试看。",
                "\t[晴芸,hero3]出发啦！",
                {
                    "type": "move",
                    "loc": [
                        6,
                        6
                    ],
                    "time": 100,
                    "steps": [
                        "up:1"
                    ]
                },
                {
                    "type": "follow",
                    "name": "hero3.png"
                },
                "\t[系统提示]现在你可以放置\\i[skill4]魔力莱姆，削弱附近敌人的生命、攻击和防御。\n它的光环是不可叠加的，这意味着当地图中存在其他光环时，魔力莱姆的同类效果会失效。\n比如地图上有其他防御光环，则魔力莱姆减防御无效，但它仍然能够减少敌人生命和攻击。"
            ]
        }
    ],
    "parallelDo": "",
    "events": {
        "6,4": [
            {
                "type": "if",
                "condition": "(!switch:A)",
                "true": [
                    {
                        "type": "confirm",
                        "text": "准备好接受考验了吗？",
                        "yes": [
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "unfollow",
                                "name": "hero3.png"
                            },
                            {
                                "type": "setBlock",
                                "number": "hero3_up",
                                "loc": [
                                    [
                                        6,
                                        6
                                    ]
                                ]
                            },
                            {
                                "type": "playSound",
                                "name": "mteleport.wav"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.clearMap(\"bg2\");\n}"
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "Dungeon2",
                                "loc": [
                                    6,
                                    12
                                ],
                                "direction": "up",
                                "time": 1000
                            }
                        ],
                        "no": []
                    }
                ],
                "false": [
                    "石碑再无反应。"
                ]
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "West8",
            "loc": [
                8,
                3
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [70044,70049,70049,70049,70049,70049,70049,70049,70049,70049,70049,70049,70043],
    [70042,70057,70057,70057,70057,70057,70057,70057,70057,70057,70057,70057,70040],
    [70042,70065,70065,70065,70065,40112,40113,40114,70065,70065,70065,70065,70040],
    [70042, 22,  0,157,157,40120,40121,40122,157,157,  0, 22,70040],
    [70042,  0, 21,157,157,40128,40129,40130,157,157, 21,  0,70040],
    [70042,322,510,157,157,157, 68,157,157,157,510,322,70040],
    [70042,70014, 81,157,157,157, 83,157,157,157, 81,70014,70040],
    [70042, 30,  0,322,509, 82,  0, 82,509,322,  0, 30,70040],
    [70042,70014, 81,157, 81,157, 22,157, 81,157, 81,70014,70040],
    [70042,323,507,157,479,157,  0,157,479,157,507,323,70040],
    [70042,  0, 21,157,323,157,512,157,323,157, 21,  0,70040],
    [70042,157,157,157, 32,157,  0,157, 32,157,157,157,70040],
    [70036,70033,70033,70033,70033,70034,  0,70032,70033,70033,70033,70033,70035]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,70065,70065,70065,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0, 93,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,495,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "flyPoint": [
        6,
        12
    ],
    "hard1_enemy_ratio": 80,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}