main.floors.Ch4_23=
{
    "floorId": "Ch4_23",
    "title": "圣洁教堂-3",
    "name": "圣洁教堂-3",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "ground6",
    "bgm": "area15.mp3",
    "firstArrive": null,
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,2": [
            "\t[系统提示]虽然你可能已经知道，不过这里还是再次提醒：\n如果你没有打开“定点怪显”，那么受到\r[yellow]局部光环\r影响的怪物，手册详情显示的伤害和实际伤害（怪物脚底下的）不符。\n因为手册显示某一类怪物伤害时，不知道怪物的位置，所以只能计算全局的光环。"
        ],
        "9,1": [
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[hero]那边出口附近的一堆敌人好像非常不好对付……",
            "\t[晴芸,hero3]嗯，需要仔细观察一下……",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "9,0": {
            "floorId": "Ch4_22",
            "loc": [
                6,
                12
            ]
        },
        "2,12": {
            "floorId": "Ch4_24",
            "loc": [
                6,
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
    [175,175,175,175,175,175,175,175,175,  0,175,175,175],
    [175, 22,567, 84,  0, 81,674,  0, 30,  0, 81,332,175],
    [175,175,175,175, 22,175,175, 21,175,129,548,175,175],
    [175,334,654,548,  0,  0,544,  0,175, 21,  0, 21,175],
    [175,175, 81,175,175,334,175,175,175,587,175,175,175],
    [175, 22,  0,331,544,  0,  0,587,  0,653,682,  0,175],
    [175,175,  0,175,175, 81,175, 82,175, 81,175, 81,175],
    [175,652,  0,674,175, 21,175,332,682,  0,175,674,175],
    [175,  0, 21,  0,677,331,175,677,175,175,175,334,175],
    [175,175, 81,175,175,175,175,331,  0,175, 21,652,175],
    [175, 22,682, 22, 82, 82,175,175,653,175,175,175,175],
    [175,684,677,684,175,566, 82, 82,  0, 84,567, 22,175],
    [175,175,  0,175,175,175,175,175,175,175,175,175,175]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0, 91,  0,  0,  0],
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
    [  0,  0, 93,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "upFloor": [
        2,
        12
    ],
    "downFloor": [
        9,
        0
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}