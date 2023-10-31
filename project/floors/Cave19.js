main.floors.Cave19=
{
    "floorId": "Cave19",
    "title": "幻境",
    "name": "幻境",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "ground7",
    "bgm": "story2.mp3",
    "firstArrive": [
        "\t[1185,N610]\b[down,7,4]这下怎么办？1188在比赛过后就失踪了，我们这一代最有潜力的2221从至尊之界里出来之后也变得如此颓废。",
        "\t[2274,N614]\b[down,5,4]肯定都是那至尊之界搞的鬼！里面到底有什么啊？",
        "\t[1185,N610]\b[down,7,4]就是，我们怎么问2221都不肯说，现在她干脆把自己关小黑屋里不见人了，这就是传说中的精神失常吗？",
        {
            "type": "show",
            "loc": [
                [
                    6,
                    1
                ]
            ]
        },
        {
            "type": "animate",
            "name": "heal",
            "loc": [
                6,
                1
            ]
        },
        "\t[古亦,N605]\b[down,6,1]安静。",
        {
            "type": "turnBlock",
            "direction": "up",
            "loc": [
                [
                    5,
                    4
                ]
            ]
        },
        {
            "type": "turnBlock",
            "direction": "up",
            "loc": [
                [
                    7,
                    4
                ]
            ]
        },
        "\t[2274,N614]\b[down,5,4]古亦大人！",
        "\t[古亦,N605]\b[down,6,1]人类高层已经成立了针对幽的调查组，但是没发现至尊之界内有任何异常，顶多只能算是战斗环境对幽稍微有利的一个小空间而已，并不违规。",
        "\t[古亦,N605]\b[down,6,1]我们不知道幽是否真实还原了决赛当天的至尊之界的情况。见证了决赛当天情况的只有2221，但是她不说，我们的调查也无法进行下去了。",
        "\t[1857,N618]\b[down,6,5]那咋办啊，我们太难了。",
        "\t[古亦,N605]\b[down,6,1]1188确实失去联系了，不过说不定他哪天还会回来。\n何况，1188的精神并没有离我们而去，很快会有和1188一样优秀的智械站出来，2221也一定能够再次振作起来。",
        "\t[1185,N610]\b[down,7,4]难道说，我们又要迎接新型号了？",
        "\t[古亦,N605]\b[down,6,1]没错，我希望她能完成那些1188未能完成的事情，所以她的\r[yellow]编号和1188的每一位都是互补的\r……",
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    4
                ],
                [
                    6,
                    5
                ],
                [
                    7,
                    4
                ],
                [
                    6,
                    1
                ]
            ],
            "remove": true,
            "time": 1000
        },
        "\t[古亦,N605]\b[up,6,8]就是你，\r[yellow]9922\r。",
        {
            "type": "turnBlock",
            "direction": "right",
            "loc": [
                [
                    5,
                    9
                ]
            ]
        },
        {
            "type": "changePos",
            "direction": "left"
        },
        {
            "type": "animate",
            "name": "E_dots",
            "loc": "hero"
        },
        "\t[古亦,N605]\b[up,6,8]不过，刚才这一幕就发生在不久之前，这个时候的你，理应还处于自我训练的休眠阶段。",
        "\t[？？,N522]\b[up,6,8]那么，就当她是提前完成了自我训练任务吧。\n所以她为什么和我长得这么像？",
        "\t[古亦,N605]\b[up,6,8]……这个告诉你也无妨。\n我知道你的身世，也知道你很厉害，所以我设计她的外表的时候，是模仿你来做的。",
        "\t[hero]\b[up,6,8]所以……你希望我接替的人就是1188了，那皇极徽章到底是什么？",
        "\t[古亦,N605]\b[up,6,8]这不是属于这个世界的东西。",
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero"
        },
        "\t[古亦,N605]\b[up,6,8]我们曾耗费大量人力对其进行研究，最终得出的结论是，这很可能是某个高等文明的遗产。",
        "\t[古亦,N605]\b[up,6,8]这是我们能分析出的全部了，因为绝大部分信息转译出来之后听起来就像……鸽子的叫声。",
        "\t[hero]\b[up,6,8]它最终的能力名为“鸽化”！这样看来，这个文明说不定与我们这里的鸽子有什么特别的关系。\n那些信息是鸽子语吗？",
        "\t[古亦,N605]\b[up,6,8]不，肯定不是。因为那些信息的结构是完全相同的，不可能承载任何信息量，所以——\n应该是未初始化的数据段，也就是说，没有编写过的地方，翻译出来就是“咕咕咕”。",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[古亦,N605]\b[up,6,8]扯远了，总之1188正是在偶然得到这个徽章之后才变得NB的。没有皇极徽章的时候，1188只是个普通的智械而已。",
        "\t[古亦,N605]\b[up,6,8]幽击败1188之后，皇极徽章就跟着1188一起失踪了，想不到现在它竟然出现在了你的身上。",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": [
                5,
                9
            ]
        },
        "\t[？？,N522]\b[up,6,8]就这吗？有点失望……\n到头来我还是没有得到自己想要的信息。",
        "\t[古亦,N605]\b[up,6,8]听着，如果你相信我，不要再去寻找你的身世了。\n世界上有许多更有意思的事情，以你的能力，未来成就必定不凡，不要被这件微不足道的小事所困扰。",
        "\t[？？,N522]\b[up,6,8]……好吧。",
        {
            "type": "setValue",
            "name": "flag:Cave19_finish",
            "value": "1"
        },
        {
            "type": "playSound",
            "name": "mteleport.wav"
        },
        {
            "type": "setBlock",
            "number": "Nxl_U",
            "loc": [
                [
                    6,
                    2
                ]
            ],
            "floorId": "Cave16",
            "time": 0
        },
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    4
                ]
            ],
            "floorId": "Cave16",
            "remove": true
        },
        {
            "type": "setBlock",
            "number": "N521",
            "loc": [
                [
                    5,
                    4
                ]
            ],
            "floorId": "Cave16",
            "time": 0
        },
        {
            "type": "changeFloor",
            "floorId": "Cave16",
            "loc": [
                7,
                4
            ],
            "direction": "up",
            "time": 800
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        }
    },
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [145,145,145,145,145,145, 89,145,145,145,145,145,145],
    [145,145,145,145,145,145,605,145,145,145,145,145,145],
    [145,145,30026,  0,  0,  0,  0,  0,  0,  0,30026,145,145],
    [145,145,30032,  0,  0,  0,  0,  0,  0,  0,30032,145,145],
    [145,145,  0,  0,  0,616,  0,611,  0,  0,  0,145,145],
    [145,145,  0,  0,  0,  0,621,  0,  0,  0,  0,145,145],
    [145,145,30027,  0,  0,  0,  0,  0,  0,  0,30027,145,145],
    [145,145,  0,  0,  0,  0,  0,  0,  0,  0,  0,145,145],
    [145,145,30006,30007,  0,  0,605,  0,  0,30002,30003,145,145],
    [145,145,30012,30013,  0,523,  0,  0,  0,30008,30009,145,145],
    [145,145,30018,30019,  0,  0,  0,  0,  0,30018,30019,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145]
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,30000,30001,  0,  0,  0,  0,  0,30000,30001,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {}
}