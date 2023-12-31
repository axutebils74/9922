main.floors.Ch4_18=
{
    "floorId": "Ch4_18",
    "title": "遗落之蔽-8",
    "name": "遗落之蔽-8",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "T670",
    "bgm": "area14.mp3",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        "\t[青铜斗士,E680]\b[up,6,10]咦，两个上等人也来参加考验了。\n怎么，你们也想变成械灵？",
        "\t[青铜斗士,E680]\b[up,6,10]我只是来打酱油的，来这里长长见识。\n前方就是考验的主场地，听说这次的考验比以前难一些，所以已经有一些人到两边的空地锻炼自身、为下次考验做准备了。",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    10
                ]
            ],
            "remove": true
        },
        {
            "type": "animate",
            "name": "zone",
            "loc": [
                6,
                10
            ]
        },
        "\t[晴芸,hero3]这些白银斗士和红袍法师已经摆好阵势了，看来想对付他们需要一些技巧了。",
        {
            "type": "animate",
            "name": "E_question",
            "loc": "hero",
            "async": true
        },
        "\t[hero]什么技巧？",
        "\t[晴芸,hero3]比如，利用他们脑子不好使、见到什么都会援护的特性，把他们引出法师的支援范围。",
        "\t[hero]嗯……有道理。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": "Ch4_17",
            "stair": "upFloor"
        },
        "12,7": {
            "floorId": "Ch4_19",
            "loc": [
                0,
                7
            ]
        },
        "6,0": {
            "floorId": "Ch4_1B",
            "loc": [
                6,
                12
            ]
        },
        "0,1": {
            "floorId": "Ch4_1A",
            "loc": [
                12,
                11
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [ 17, 17, 17, 17, 17, 17,  0, 17, 17, 17, 17, 17, 17],
    [  0,  0,330,329, 82, 81,676, 81, 82,328,681,652, 17],
    [ 17,110309,110310,696,110280,110280,681, 21,110280,  0,676, 81, 17],
    [ 17,110317,110318, 21,  0,110280,  0,110280,110280,110280,  0,110280, 17],
    [ 17,334,110280,110280,688,110280,  0,331,110280, 81,330,  0, 17],
    [ 17,567,334, 84,  0,  0, 21,  0,330,  0,110280, 82, 17],
    [ 17,110280,110280,110280,110280,110280, 81,110280,110280,  0,110280, 81, 17],
    [ 17,334,110260,330,328, 81,  0,  0, 81,  0,681,676,  0],
    [ 17,  0,110280,696,110280,110280,672, 21,  0,696,110280,327, 17],
    [ 17,327,  0, 21,  0,673,  0,110280,  0,110280,110280,110280, 17],
    [ 17,110280,646,110232, 81,110232,690,110280,331,110280,  0, 22, 17],
    [ 17,653,  0,110240,334,110240, 88,110280,  0, 82,679, 21, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,172,  0,  0,  0,  0,  0,  0],
    [172,172,172,172,172,172,172,172,172,172,172,172,  0],
    [110417,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,172],
    [  0,172,172,172,172,172,172,172,172,172,172,172,110417],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,110417,110417,110417,110417,110417,110417,110417,110417,110417,110417,110417,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,110254,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [173,173,173,173,173,173, 91,173,173,173,173,173,173],
    [ 92,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 94],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,173,173,173,173,173,173,173,173,173,173,173,173]
],
    "fg2map": [

],
    "flyPoint": [
        6,
        11
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}