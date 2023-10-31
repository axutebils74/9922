main.floors.Cave8=
{
    "floorId": "Cave8",
    "title": "特训营-8",
    "name": "特训营-8",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "ground7",
    "bgm": "area12.mp3",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "moveHero",
            "steps": [
                "right"
            ]
        },
        "\t[hero]不行了，真的要顶不住了……这敌人的实力也太离谱了……",
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[晴芸,hero3]快看，铁门钥匙！",
        "\t[hero]有了它应该就能进入那个在一堆门后面的传送阵了。\n……不过在那之前我还需要能回得去。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,10": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145, 87,  0,145,334,145,332,327,145,329,576, 25,145],
    [145,145,331, 82, 81,145,  0, 22, 82, 81,145, 83,145],
    [145,  0,557,145,  0,145,583,145, 81,  0,  0,334,145],
    [145,334,  0,145,  0, 82,  0,589,  0,  0,581,145,145],
    [145,  0,145,145,593,145,583,145,  0, 81,  0,331,145],
    [145,579,  0,  0,  0,576, 21,  0,334,  0,145,  0,145],
    [145, 21,332,145,593,145,145,145,557,145,145,580,145],
    [145,145, 82,145, 21, 81,  0,330,  0,585, 21,  0,145],
    [145,324,570,145,  0,145,145, 81,145,145,145,328,145],
    [145, 88,332,576,331,145, 21,  0, 81,577, 81,  0,145],
    [145,325,586,145,  0,594,  0,334,145,327,145,331,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "hard1_enemy_ratio": 80,
    "underGround": true,
    "upFloor": [
        1,
        1
    ],
    "downFloor": [
        1,
        10
    ],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}