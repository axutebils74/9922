main.floors.South4=
{
    "floorId": "South4",
    "title": "停风林-4",
    "name": "停风林-4",
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
        "1,3": [
            {
                "type": "changePos",
                "direction": "right"
            },
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[hero]不对劲……这拦路的怪物反倒越来越强了。",
            "\t[晴芸,hero3]啊，这……我也不知道怎么回事。不过这种程度的怪物，对姐姐来讲都不算什么吧？",
            "\t[hero]要赶快从哪找些钱喂给这个奇怪的徽章才行……不然以我现在的力量，对付它们太费劲了。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "1,0": {
            "floorId": "South3",
            "loc": [
                1,
                12
            ]
        },
        "12,4": {
            "floorId": "South5",
            "loc": [
                0,
                8
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [149, 91,149,149,149,149,149,149,149,149,149,149,149],
    [149,  0,149, 32,444,334,149, 32, 21,435, 21, 32,149],
    [149, 31,149, 81,149, 27,149,445, 27,149, 28,445,149],
    [149,  0,445,  0,149,399,149, 81,149,149,149, 81,149],
    [149,149,  0,  0, 81,  0,  0,  0,  0,399,  0,  0, 94],
    [ 21, 28,50004,  0,149,149,149,149,444,149,149, 27,149],
    [  0,  0, 81,  0,149, 32, 21,149,  0, 31,149,  0,149],
    [ 32,435,149,149,149, 27,399,149,149, 82,  0, 31,149],
    [50012,  0, 81, 21,149,149, 81, 81, 21,445,50004, 81,149],
    [  0,399,  0,444,  0,  0,443,  0,149, 32,399,  0,149],
    [ 31,  0,149,149,149,149,444, 21,149,149,149,429,149],
    [ 28,50004, 27,  0, 32,149, 28,149,149, 27,149,  0,149],
    [  0,434,  0, 29,  0,149,  0, 21,149,435, 81, 22,149]
],
    "bgm": "area8.mp3",
    "bgmap": [
    [  0,147,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,147,  0,  0,  0,50021,  0,  0,50021,  0,50021,  0,  0],
    [  0,147,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,147,147,147,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,147,147,147,147,147,147,147,147,147,147],
    [  0,  0,  0,50001,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,50001,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [50001,  0,  0,  0,  0,50021,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,60020,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,50002,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "upFloor": [
        12,
        4
    ],
    "downFloor": [
        1,
        0
    ],
    "hard1_enemy_ratio": 80,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}