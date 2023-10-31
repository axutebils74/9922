main.floors.Ch4_11=
{
    "floorId": "Ch4_11",
    "title": "遗落之蔽-1",
    "name": "遗落之蔽-1",
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
            "type": "comment",
            "text": "这里恢复的色调是公共事件“第三章结束”时设置的，由于一区每层都有色调所以不需要恢复"
        },
        {
            "type": "function",
            "function": "function(){\ncore.values.animateSpeed = 460;\ncore.setFlag(\"__visited__\", { Ch4_11: true });\n}"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "moveHero",
            "steps": [
                "up:1"
            ]
        },
        "\t[hero]\b[up,hero]真的就这样进来了……但是接下来该做啥呀？",
        "\t[hero]\b[up,hero]虽然我觉得幽那个家伙肯定在谋划什么不好的事情，但就算来到这里，又能改变什么呢？",
        "\t[晴芸,hero3]\b[up,hero]……",
        "\t[晴芸,hero3]\b[up,hero]既然这样，不如我们就真的把自己当成游客吧。\n城市里的高楼大厦见得多了，看到这种古代风格的建筑内部，还真是有新鲜感呢。",
        "\t[hero]\b[up,hero]城市？那是什么样呢？",
        "\t[晴芸,hero3]\b[up,hero]诶，你不知道吗……也是，你还从来没去过吧。\n反正就是一片死气沉沉，日复一日毫无变化，非常无聊的地方。\n我从城里逃出来就不想再回去了。",
        "\t[hero]\b[up,hero]啊？可是我印象里，城市应该是有很多人聚集活动、非常热闹的地方啊。",
        "\t[晴芸,hero3]\b[up,hero]你这是从哪个不入流的历史课本里看的？那是以前，现在城市里的人一个个都活得跟条咸鱼一样，一点追求都没有，一天天在那混日子，行为重复程度之高连机器人都甘拜下风。",
        "\t[晴芸,hero3]\b[up,hero]他们可不像这片区域的人，有的要给智械创造美好的未来，有的想要让生活水平更进一步，总之多少都有些追求，每天都在向目标前进。这样的生活状态才像个人嘛。",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero",
            "async": true
        },
        "\t[hero]\b[up,hero]是……这样吗……",
        "\t[晴芸,hero3]\b[up,hero]不提那些了，先走好眼前的路吧。\n前面这个家伙的技能好像非常厉害，利用刚才得到的黄宝石解锁新技能解决它吧！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,5": [
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": [
                    5,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": [
                    6,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": [
                    7,
                    2
                ]
            },
            "\t[青铜斗士,E680]\b[down,5,2]是上等人！这里竟然有上等人来了！",
            {
                "type": "animate",
                "name": "E_question",
                "loc": "hero"
            },
            "\t[hero]\b[down,hero]什么上等人……",
            "\t[晴芸,hero3]\b[down,hero]……",
            "\t[青铜斗士,E680]\b[down,7,2]你们竟然不知道？现在的上等人都不知道有我们的存在了吗？",
            "\t[白银斗士,E681]\b[down,6,3]哼，估计是从城里刚来的吧。\n我早就说了，城里那些上等人虽然生活条件好，但信息闭塞得很，对这个世界的认知仅限于他们居住的城市，甚至只有城市内他们生活的一小部分区域。",
            "\t[青铜斗士,E680]\b[down,5,2]老大说得对，上等人就是个子高见识少，虽然生活条件不错，但一辈子都只是井底之蛙罢了。",
            "\t[青铜斗士,E680]\b[down,7,2]我们下等人虽然个子矮，长得也挫，不过以后必定能通过努力奋斗改变命运，拥有光明的未来！",
            "\t[白银斗士,E681]\b[down,6,3]不管她们了，我们继续通过实战磨练自身，争取早日获取“资格”。",
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        2
                    ],
                    [
                        6,
                        3
                    ],
                    [
                        7,
                        2
                    ]
                ],
                "remove": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    5,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    7,
                    2
                ]
            },
            {
                "type": "changePos",
                "direction": "down"
            },
            "\t[hero]\b[down,hero]这又是什么情况……",
            "\t[晴芸,hero3]\b[down,hero]我从城市来到这里有一阵了，对这里还是有一些基本的了解的。\n刚才这些是“下等人”，和“上等人”最大的区别就是……身高。",
            "\t[晴芸,hero3]\b[down,hero]他们原本在人类社会里处于较低阶级，居住地也是和“上等人”分离的。\n后来有一部分对生活条件不满，流亡至此并定居。",
            "\t[hero]\b[down,hero]咦，可是我记得绿姐姐说过机器人的发展带来生产力的变革，每个人都能过上衣食无忧的生活来着……",
            "\t[晴芸,hero3]\b[down,hero]在城市里确实是这样，但不同地区的发展并不均衡。\n而且，我怀疑这种不均衡有一些人为的、刻意的因素……",
            {
                "type": "animate",
                "name": "E_dots",
                "loc": "hero"
            },
            "\t[晴芸,hero3]\b[down,hero]先不提那些了。\n格沃堡的下层，也就是我们现在所处的位置，是给这些流亡的“下等人”和其他生物准备的。\n在这里，他们要通过竞争，证明自身的能力和天赋，这样才能获得械灵化的“资格”。",
            {
                "type": "animate",
                "name": "E_surprise",
                "loc": "hero",
                "async": true
            },
            "\t[hero]\b[down,hero]原来如此，也就是说这里是个养蛊的地方，最强的一批生物才能被械灵接纳。",
            "\t[晴芸,hero3]\b[down,hero]没错，而且他们转化而成的械灵绝对不是之前我们见过的那些名字等于字母加上型号的量产型低等械灵，而是正式属于格沃堡成员的“中产阶级”，实力和地位都会大大提升，所以获得械灵化的资格就是他们毕生的追求。",
            "\t[hero]\b[down,hero]好，这个我熟，所以只要把他们都打倒，我也能获得械灵化资格了……\n等等……我要这个有什么用……",
            "\t[晴芸,hero3]\b[down,hero]哈哈哈，你这机器脑袋……",
            {
                "type": "animate",
                "name": "E_sweat",
                "loc": "hero",
                "async": true
            },
            "\t[hero]\b[down,hero]总之就是在战斗中变得很强，然后就没有解决不了的问题了！\n前进！",
            {
                "type": "changePos",
                "direction": "up"
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "6,10": [
            "\t[系统提示]关于本区\\i[fly]楼层传送器的说明：\n对于拥有不止一个传送点的楼层，传送位置是固定的，一般都在你第一次到达该层的位置。",
            "\t[系统提示]从第四章起，携带\\i[yellowGem]黄宝石不再提供生命回复。"
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "Ch4_12",
            "loc": [
                6,
                12
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
    [ 17,334,110261,334, 81,  0,  0,  0, 81,334,110261,334, 17],
    [ 17, 81,334, 81,110280,690,  0,690,110280, 81,334, 81, 17],
    [ 17,110304,110305,110280,110280,  0,691,  0,110280,110280,110304,110305, 17],
    [ 17,110304,110305,566, 84,  0,  0,  0, 84,566,110305,110304, 17],
    [ 17,332,110280,567,110280,  0,  0,  0,110280,567,110280,332, 17],
    [ 17, 81,110280,110280,110280,110280,679,110280,110280,110280,110280, 81, 17],
    [ 17,332, 81,332, 81,  0,  0,  0, 81,332, 81,332, 17],
    [ 17,110280,110280,110280,110280,  0,  0,  0,110280,110280,110280,110280, 17],
    [ 17, 22, 21, 22, 84,  0,  0,  0, 84, 22, 21, 22, 17],
    [ 17,110260,110280,110280,110280,  0,129,  0,110280,110280,110280,110260, 17],
    [ 17,386, 82,386, 82,  0,  0,  0, 81, 81, 81, 22, 17],
    [ 17, 17, 17, 17, 17,  0,  0,  0, 17, 17, 17, 17, 17]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,172,  0,  0,  0,  0,  0,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,172,172,172,172,172,172,172,172,172,172,172,  0],
    [  0,110417,110417,110417,110417,172,172,172,110417,110417,110417,110417,  0]
],
    "fgmap": [
    [  0,  0,110255,  0,  0,  0,  0,  0,  0,  0,110255,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,110254,  0,  0,  0,  0,  0,  0,  0,  0,  0,110254,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [173,173,173,173,173,173, 91,173,173,173,173,173,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173],
    [173,173,173,173,173,  0,  0,  0,173,173,173,173,173]
],
    "fg2map": [

],
    "color": null,
    "flyPoint": [
        6,
        8
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}