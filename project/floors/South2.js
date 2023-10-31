main.floors.South2=
{
    "floorId": "South2",
    "title": "停风林-2",
    "name": "停风林-2",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "grass",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": [
            {
                "type": "changePos",
                "direction": "right"
            },
            {
                "type": "turnBlock",
                "direction": "left",
                "loc": [
                    [
                        7,
                        1
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": [
                    7,
                    1
                ]
            },
            "\t[晴芸,hero3]\b[down,7,1]姐姐帮帮我！",
            "\t[hero]\b[down,6,1]？？？",
            "\t[晴芸,hero3]\b[down,7,1]我，我觉得这片树林挺漂亮的，就进来逛一逛，结果一不小心就被怪物困住回不去了。",
            "\t[hero]\b[down,6,1]可是我也打不过这些怪物……",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": [
                    7,
                    1
                ]
            },
            {
                "type": "playSound",
                "name": "jump.mp3"
            },
            {
                "type": "jump",
                "from": [
                    7,
                    1
                ],
                "to": [
                    7,
                    1
                ],
                "time": 300,
                "keep": true
            },
            "\t[晴芸,hero3]\b[down,7,1]姐姐骗人！你刚才明明捡到了一个强大的宝物，还干掉了一只很强很强的莱姆！",
            "\t[hero]\b[down,6,1]那是附近最弱的怪好不好！",
            {
                "type": "animate",
                "name": "E_love",
                "loc": [
                    7,
                    1
                ],
                "async": true
            },
            "\t[晴芸,hero3]\b[down,7,1]诶嘿，果然你不否认刚才捡到的是好东西！是不是什么传说中的神器呀？",
            {
                "type": "animate",
                "name": "E_sweat",
                "loc": "hero",
                "async": true
            },
            "\t[hero]\b[down,6,1]（上套了……）\n我都不知道怎么用这个东西……",
            {
                "type": "animate",
                "name": "E_unhappy",
                "loc": [
                    7,
                    1
                ],
                "async": true
            },
            "\t[晴芸,hero3]\b[down,7,1]哇，那可不行啊，咱们现在只能指望它帮我们逃出这里了！",
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 500,
                "keep": true
            },
            "（一阵捣鼓后……）",
            {
                "type": "setCurtain",
                "time": 500
            },
            "\t[hero]\b[down,6,1]……还是没反应。",
            "\t[晴芸,hero3]\b[down,7,1]我说，要不，你把它吃掉吧。",
            "\t[hero]\b[down,6,1]？？？",
            "\t[晴芸,hero3]\b[down,7,1]真的。我之前见过这种徽章一样的东西，据说是什么增幅模块，专门给姐姐这样的智械吃的，吃了就会变得很强很强！",
            "\t[hero]\b[down,6,1]好吧，我放到嘴里试试。",
            {
                "type": "setValue",
                "name": "flag:talentTree_unlocked",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:talentTree_description",
                "value": "\"查看徽章内的力量，快捷键V\""
            },
            {
                "type": "animate",
                "name": "electronic",
                "loc": "hero"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "playSound",
                "name": "startup.wav"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": [
                    6,
                    1
                ]
            },
            "\t[hero]\b[down,6,1]你是对的。我能感觉到其中蕴含的力量深不可测，但是……\n这里面大部分的力量处于未解锁的状态。解锁需要……\r[yellow]很多钱\r。",
            "\t[hero]\b[down,6,1]不过，即使只凭借它的一小部分力量，也可以试着走出这里了。你认识路吗？",
            "\t[晴芸,hero3]\b[down,7,1]那当然！出发吧！",
            {
                "type": "move",
                "loc": [
                    7,
                    1
                ],
                "time": 100,
                "steps": [
                    "left:1"
                ]
            },
            {
                "type": "follow",
                "name": "hero3.png"
            },
            "\t[系统提示]天赋树已经开启，打开方式和快捷商店是相同的。",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "10,5": [
            "\t[晴芸,hero3]\b[down,hero]对，就是这个家伙，挡住了回去的路！",
            "\t[hero]\b[down,hero]虽然打不过它，不过我可以试着运用一下那个徽章里面的力量……",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "11,6": [
            "\t[系统提示]每次使用\\i[skill3]轻风都会自动存档。如果你使用完后悔了，可以按\r[yellow]A\r读档，回到使用技能之前。\n本章之后还会获得其他技能，上述操作对它们也是适用的，之后不再提示。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "South1",
            "loc": [
                6,
                12
            ]
        },
        "11,12": {
            "floorId": "South3",
            "loc": [
                1,
                0
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [149,149,149,149,149,149, 91,149,149,149,149,149,149],
    [149, 21,  0, 23,149,  0,  0,374,149,  0, 32,  0, 81],
    [149,  0,471,  0,149, 27,  0, 31,149, 28,149,149, 27],
    [149,149, 82,149,149,149,  0,149,149,445,149,149,  0],
    [149,149,  0,399,  0, 83,  0,  0,334,  0,149,149, 32],
    [149, 32, 81,  0,149,149,149,149,149,  0,  0,429,  0],
    [149, 81,149, 31,149,334,149, 28,149,149,149,  0,149],
    [149,334,149,  0,444,  0, 81,465,  0, 27,149,  0,149],
    [334, 81,149,435,149, 31,149, 32,50012,444,149, 32,149],
    [149,149,149,  0,149,149,149,445, 21,334,149,  0,149],
    [ 28,  0,149, 29,149, 27,149,149,149,149,149, 32,149],
    [  0,443, 81,  0, 81,486,  0, 81, 31, 32,149,  0,149],
    [ 22,  0,149, 31,149, 31,149,149,149,149,149, 93,149]
],
    "bgm": "area8.mp3",
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,147,  0,  0,  0,  0,  0,  0],
    [  0,  0,50011,  0,  0,50023,147,  0,  0,50001,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,147,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,147,  0,  0,  0,  0,  0,50002],
    [  0,  0,  0,  0,  0,  0,147,147,147,147,  0,  0,  0],
    [  0,  0,  0,50001,  0,  0,  0,  0,  0,147,147,147,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,147,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,50021,  0,  0,147,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,147,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,147,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,147,  0],
    [  0,  0,  0,50001,  0,  0,  0,  0,  0,  0,  0,147,  0],
    [  0,50021,  0,  0,  0,  0,  0,  0,  0,  0,  0,147,  0]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "upFloor": [
        11,
        12
    ],
    "downFloor": [
        6,
        0
    ],
    "hard1_enemy_ratio": 80,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}