main.floors.Ch4_2=
{
    "floorId": "Ch4_2",
    "title": "通幽径-2",
    "name": "通幽径-2",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "T641",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.setBgLight([\n\t[2, 3, 100],\n\t[4, 7, 100],\n\t[10, 9, 100]\n]);\n}"
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,12": {
            "floorId": "Ch4_1",
            "loc": [
                1,
                0
            ]
        },
        "11,0": {
            "floorId": "Ch4_3",
            "loc": [
                11,
                12
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "10,7": [
            {
                "type": "function",
                "function": "function(){\ncore.loadEquip(\"sword8\");\n}"
            },
            "\t[系统提示]已自动装备拾取的武器。"
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [160,159,159,159,159,159,159,159,159,159,159, 91,159],
    [160,330, 22,159,334,159,334,  0,331,159,330,  0,159],
    [160,545,  0,159, 21,159,327,648,328,159,584, 21,159],
    [159, 81,669,159,651,159,159, 81,159,159, 81,159,159],
    [159,330,547, 81,  0,  0,330,  0,  0, 21,  0,  0,159],
    [159, 21,  0,159, 81,159,  0,159,159,159,159,159,159],
    [159,159,159,159,334,159,  0,543,159, 21,331, 21,159],
    [159,  0,330,159,669,159, 82,  0,651,330,655,330,159],
    [159,334,  0,547, 21,545,  0, 21,159, 21,331, 21,159],
    [159,  0,331,159, 84,159,334,584,159,159,669,159,159],
    [159,  0,159,159,333,159,159,  0,159,331, 81,330,159],
    [159,  0,159,334,566,334,159,329, 81,330,159,331,160],
    [159, 93,159,159,159,159,159,159,159,159,159,159,160]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,171,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,171,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,171,171,171,171,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,171,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,668,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,668,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,668,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "area13.mp3",
    "color": [
        0,
        0,
        0,
        0.6
    ],
    "downFloor": [
        1,
        12
    ],
    "upFloor": [
        11,
        0
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}