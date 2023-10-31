main.floors.MT56=
{
    "floorId": "MT56",
    "title": "主塔 56 层",
    "name": "未来走廊-56",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area7.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 10,
    "defaultGround": "ground7",
    "bgm": "area7.mp3",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "jumpHero",
            "time": 300,
            "async": true
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[hero]呀！我这是在太空中吗！",
        "\t[hero]我记得茉莉说要我到达\r[yellow]稳定的位置\r，可是这样的话，我相对茉莉她们的位置是一直在变化的，这样她们不就没办法开传送门了吗……",
        "\t[hero]而且，我，还能回去吗……",
        {
            "type": "waitAsync"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,6": {
            "floorId": "MT5X",
            "loc": [
                19,
                42
            ],
            "direction": "left"
        },
        "2,11": {
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
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144,331,325,454,144,448, 22,331,144,332,324,347,144],
    [144,144,144, 81,144, 81,144,144,144,144,144,347,144],
    [144,331,326,  0,344,  0,  0,332,144,332, 81, 21,144],
    [144,144,144,144,144,144,347,144,144,144,144,454,144],
    [144,  0, 81,450,453, 81,  0,144,332,334,144,  0,144],
    [ 92,  0,144,324,325,144,  0, 81,450,332,144,331,144],
    [144, 82,144,144,144,144,344,144,144,144,144, 81,144],
    [144,331,  0, 21,448,  0,  0, 81,331,  0,347,454,144],
    [144,144, 81,144,144, 81,144,144,144, 81,144, 21,144],
    [144,324,448,331, 81,450,  0,144,454,448,144,325,144],
    [144, 21, 87, 21,144,325,331,144,331,324,144,331,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "flyPoint": [
        2,
        11
    ],
    "bg2map": [

],
    "fg2map": [

],
    "hard1_enemy_ratio": 75,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}