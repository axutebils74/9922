main.floors.Ch4_129_2=
{
    "floorId": "Ch4_129_2",
    "title": "数据中心",
    "name": "数据中心",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "area7_2.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 10,
    "defaultGround": "ground8",
    "bgm": "area7.mp3",
    "firstArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.setFlag(\"__visited__\", { Ch4_129_2: true });\n}"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "left"
        },
        {
            "type": "sleep",
            "time": 300
        },
        {
            "type": "changePos",
            "direction": "right"
        },
        {
            "type": "sleep",
            "time": 300
        },
        {
            "type": "changePos",
            "direction": "down"
        },
        {
            "type": "sleep",
            "time": 300
        },
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[hero]\b[down,null]又回到这来了……\n而且，原本这里有个连接未来走廊的传送门，现在也没了……",
        {
            "type": "moveHero",
            "steps": [
                "up:1"
            ]
        },
        "\t[hero]\b[down,null]被困在这里了吗……\n我明明仍然掌握着毁灭拳套的力量，还能够释放奥义，但是竟然还是没有离开这里的能力。\n难道，我对力量的掌控真的不够？或者说，这里其实不是真正的数据中心，我仍然没有离开幻境？",
        "\t[hero]\b[down,null]看来，只有选择\r[orange]正常难度\r的《至尊之路》并通关了。\n千虹广场的星空深处，到底是什么……"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,3": [
            {
                "type": "choices",
                "text": "\t[系统提示]简化难度第四章-后篇结束，可以在这里提交成绩。",
                "choices": [
                    {
                        "text": "提交成绩",
                        "color": [
                            255,
                            215,
                            0,
                            1
                        ],
                        "action": [
                            {
                                "type": "win",
                                "reason": "Chap.4.2-千虹之谜"
                            }
                        ]
                    },
                    {
                        "text": "等等……",
                        "action": [
                            "\t[来自真现实的信息]你只有回到游戏主界面才能选择\r[yellow]正常难度\r了。\n进入游戏后不要捡怪物手册，直接\r[aqua]连续撞击上方的机关门\r，就可以选择章节，甚至可以直接从《\r[yellow]至尊之路\r》的后半段开始游戏。",
                            "\t[来自真现实的信息]简化难度下的故事线到此就结束了。\n当然，这并不是9922的终点。它也许有的时候傻傻的，但它一定能达成期盼的目标。",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "if",
                                "condition": "flag:hard1_score >= 621126",
                                "true": [
                                    "\t[来自真现实的信息]不过，你打得相当不错，普通难度不咸绿对你来讲也是随手乱杀吧？\n我知道你只是来这里交成绩的。"
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "flag:hard1_score >= 600000",
                                        "true": [
                                            "\t[来自真现实的信息]不过，你打得还算不差，刚才只要选择“继续游戏”就可以进入很水很简单的最终战，并走完本章的全部剧情流程。\n我相信你只是来这里交成绩的吧？"
                                        ],
                                        "false": [
                                            "\t[来自真现实的信息]另外，简化难度也是可以进入本章的最终战的，条件是见到神像时拥有至少\r[yellow]60\r把红钥匙。\n提示：摩宇城内有很多挡在必经之路的红门，不过有不少可以用械灵处理掉。"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17,30027,  0,  0,30025,  0,30033,  0,30025,  0,  0,30027, 17],
    [ 17,  0,  0,  0,30031,  0,  0,  0,30031,  0,  0,  0, 17],
    [ 17,30006,30007,  0,  0,  0,30023,  0,  0,  0,30002,30003, 17],
    [ 17,30012,30013,  0,  0,  0, 91,  0,  0,  0,30008,30009, 17],
    [ 17,30018,30019,  0,  0,  0,  0,  0,  0,  0,30018,30019, 17],
    [ 17,30033,  0,  0,30026,  0,  0,  0,30026,  0,  0,30033, 17],
    [ 17,  0,  0,  0,30032,  0,  0,  0,30032,  0,  0,  0, 17],
    [ 17,30014,30015,  0,  0,  0,30022,  0,  0,  0,30004,30005, 17],
    [ 17,30020,30021,  0,  0,  0,30028,  0,  0,  0,30010,30011, 17],
    [ 17,30018,30019,  0,30024,  0,  0,  0,30024,  0,30018,30019, 17],
    [ 17,30027,  0,  0,30030,  0,30033,  0,30030,  0,  0,30027, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17]
],
    "hard1_enemy_ratio": 75,
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,30000,30001,  0,  0,  0,  0,  0,  0,  0,30000,30001,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,30000,30001,  0,  0,  0,  0,  0,  0,  0,30000,30001,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,318,318,318,318,318,318,318,318,318,318,318,  0],
    [  0,318,318,318,318,318,318,318,318,318,318,318,  0],
    [  0,318,318,318,318,318,318,318,318,318,318,318,  0],
    [  0,318,318,318,318,318,318,318,318,318,318,318,  0],
    [  0,318,318,318,318,318,318,318,318,318,318,318,  0],
    [  0,318,318,318,318,318,318,318,318,318,318,318,  0],
    [  0,318,318,318,318,318,318,318,318,318,318,318,  0],
    [  0,318,318,318,318,318,318,318,318,318,318,318,  0],
    [  0,318,318,318,318,318,318,318,318,318,318,318,  0],
    [  0,318,318,318,318,318,318,318,318,318,318,318,  0],
    [  0,318,318,318,318,318,318,318,318,318,318,318,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

]
}