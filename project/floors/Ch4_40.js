main.floors.Ch4_40=
{
    "floorId": "Ch4_40",
    "title": "格沃之巅",
    "name": "格沃之巅",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "images": [
        {
            "name": "area7_2.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 50,
    "defaultGround": "ground8",
    "firstArrive": [
        {
            "type": "pauseBgm"
        },
        {
            "type": "setVolume",
            "value": 90,
            "time": 0
        },
        {
            "type": "function",
            "function": "function(){\ncore.removeFlag(\"snipe_animate\");\n}"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,8": [
            {
                "type": "choices",
                "text": "\t[系统提示]恭喜通关第四章前半部分！",
                "choices": [
                    {
                        "text": "推动剧情",
                        "color": [
                            255,
                            203,
                            0,
                            1
                        ],
                        "action": [
                            "\t[hero]这里面的信息，是最后的至尊之录。\n我记得上回讲到两人被秉凌救下来着……",
                            {
                                "type": "setVolume",
                                "value": 0,
                                "time": 2000,
                                "async": true
                            },
                            "被秉凌救下的男孩 愿意答应秉凌的一切要求 唯一的条件是救活女孩\n女孩已失去意识 病入膏肓\n秉凌先抢救她的大脑 然而记忆都丢失了\n秉凌又抢救她的身躯 然而血肉都腐坏了\n秉凌将她的大脑冷冻起来 对男孩说 想救她只有一个办法\n运用自己研发的械灵技术 将她改造成机器人\n她的部分大脑将被机械代替 但保留原本的性格特征 并获得全新的械造身躯\n然而这项技术从未被用于人类身上 更不用说是只剩下一个大脑的人类\n男孩便自愿成为实验体 秉凌从他身上收集实验数据 完善技术\n等到技术成熟之时 便可使女孩重获新生 再次行走于这大地之上",
                            {
                                "type": "animate",
                                "name": "E_dots",
                                "loc": "hero"
                            },
                            {
                                "type": "waitAsync"
                            },
                            "\t[hero]等一下，这男孩，莫非就是……",
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ]
                            },
                            {
                                "type": "animate",
                                "name": "skill7",
                                "loc": [
                                    6,
                                    3
                                ],
                                "async": true
                            },
                            {
                                "type": "playBgm",
                                "name": "secret.mp3",
                                "keep": true
                            },
                            {
                                "type": "setVolume",
                                "value": 90,
                                "time": 0
                            },
                            "\t[2 2 2 1,N2221]\b[down,6,3]没错，正是在下……的前世之身。",
                            {
                                "type": "changePos",
                                "direction": "up"
                            },
                            {
                                "type": "moveHero",
                                "steps": [
                                    "forward:1"
                                ]
                            },
                            {
                                "type": "animate",
                                "name": "E_surprise",
                                "loc": "hero"
                            },
                            "\t[hero]幽！这，这至尊之录第三部分讲述的故事，就是关于你的！\n也对，毕竟标题叫“至尊崛起”，而那些械灵都称你为“至尊大人”。",
                            "\t[2 2 2 1,N2221]纠正一下，是关于我和薇的。而且我现在叫2 2 2 1。",
                            {
                                "type": "animate",
                                "name": "E_unhappy",
                                "loc": "hero"
                            },
                            "\t[hero]你对2221这个名字，还真的有很强的执念啊。",
                            "\t[2 2 2 1,N2221]如何，现在你是否真正认识到，那些\r[yellow]第零公民\r们都是些什么样的人了？",
                            "\t[2 2 2 1,N2221]从精神上麻痹平民、形成事实上的奴役，然后用他们做活体丧尸实验；打击异己，流放、甚至暗杀像秉凌这样的有识之士。",
                            "\t[hero]你到底想说什么？",
                            "\t[2 2 2 1,N2221]自从秉凌被暗杀之后，我就一直在准备复仇计划。但是\r[yellow]第零公民\r实在是太强大了，即使是之前的我，也完全无法抗衡。",
                            "\t[2 2 2 1,N2221]还记得除灵者的首领吗？在它落单的情况下，我才能与他正面抗衡；第零公民手下拥有它这样实力的存在还有不少，而任何一位第零公民的战力还要远远在它之上。",
                            "\t[2 2 2 1,N2221]想要抗衡乃至推翻第零公民，唯有借助一种名为\r[yellow]至尊之力\r的力量。\n隐忍多年，如今我终于凑齐了包含至尊之力的所有碎片——其中包括刚刚到手的激励大赛的冠军奖品，以及之前从你身上借用的皇极徽章。",
                            "\t[hero]？？？你不是说之前把它丢到空间乱流里去了吗？",
                            "\t[2 2 2 1,N2221]让你死心，免得你追着我做无用功而已。",
                            {
                                "type": "animate",
                                "name": "E_unhappy",
                                "loc": "hero"
                            },
                            "\t[2 2 2 1,N2221]计划的下一步，便是对第零公民宣战，将这些令人作呕的伪神全数毁灭。\n来吧，加入我，我们一起书写历史。",
                            {
                                "type": "animate",
                                "name": "E_angry",
                                "loc": "hero"
                            },
                            "\t[hero]害死了2221和芳芷，你哪来的脸皮拉拢我？",
                            "\t[2 2 2 1,N2221]哈，哈哈，哈哈哈哈哈哈！\n你怎么产生的我“杀死”了她们这种错觉？我只是先让她们好好休息而已，那个棕头发的对我确实有些怨念，但我还犯不上下重手；至于绿头发那位对我们械灵来说可是纯正的友方单位。",
                            "\t[hero]（？？？是这样吗？）",
                            "\t[2 2 2 1,N2221]你不愿意相信我也无妨，但你拒绝我之前，不先问问晴芸小姐的意见吗？",
                            "\t[hero]晴芸？她肯定更不会同意你，她可是人类，你现在对作为人类统治者的第零公民开战，其实就是对人类开战！\n对吧？",
                            "\t[晴芸,hero3]……",
                            "\t[hero]晴……芸……？",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[晴芸,hero3]其实……我……\n我父母原本是摩宇城的高等公民，后来他们偶然间发现了第零公民即将不做人的秘密，因而惹祸上身，直接被贬为九等公民流放边荒……至今下落不明。",
                            "\t[hero]……",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[晴芸,hero3]他们被流放前，动用最后的关系，把我送到这里。\n一直以来我都在想该怎样救出他们，甚至，如果最坏的情况已经发生，让我通过亲眼所见彻底死心也好……\n但是……推翻第零公民之前，这都是不可能的。",
                            "\t[hero]（我……草……）",
                            "\t[晴芸,hero3]然后我遇到了你。\n不知为何，第一次见到你，我就感觉，只要抱紧你的大腿，就有了达成目标的希望。",
                            {
                                "type": "animate",
                                "name": "E_dots",
                                "loc": "hero"
                            },
                            "\t[2 2 2 1,N2221]也多亏了你，我才能见到晴芸小姐——在你从特训营底部的幻境出来之前。\n借助她带来的情报，我对这些神秘的第零公民有了更进一步的了解。",
                            "\t[hero]（难怪绿姐姐和2221都没了，她却安然无恙……\n这么说来，她从最开始就怂恿我深入格沃堡，还说一点也不危险，原来底气是这么来的！）",
                            "\t[2 2 2 1,N2221]奴役并随意杀害普通人，凌驾于任何规则之上，第零公民已经成为这个世界上最大的毒瘤。\n再加上他们敌视械灵、卑鄙地暗杀了秉凌，于公于私，我都必须将他们彻底消灭。",
                            "\t[2 2 2 1,N2221]如何，你们是否愿意加入我，共同对抗第零公民？",
                            "\t[晴芸,hero3]我愿意！",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[hero]我……同意。",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[2 2 2 1,N2221]很好，从现在起，我们就是战友了。\n我们共同努力，同时掌握了力量、情报和先手权，此战势在必得！",
                            "\t[2 2 2 1,N2221]之前从你这里借来了皇极徽章，虽然不能还你，不过现在我能够把真正的至尊之力加持于你们的身上。",
                            "\t[2 2 2 1,N2221]我知道你可能不愿意完全信任我，所以我也不会过多地限制你的行动。\n无论如何，我们现在有着共同的目的。我掌握的信息比你多很多，所以我建议你听我的——这对我们都有好处。",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[2 2 2 1,N2221]我将作为这场战役的指挥，率领机械大军，包括刚收编的除灵者——现在应该叫\r[yellow]除零者\r，作为明牌展示给对手。\n你们则作为暗牌，在最为关键的节点给予敌人精准而致命的打击。接下来，计划是这样的……",
                            {
                                "type": "setCurtain",
                                "color": [
                                    0,
                                    0,
                                    0,
                                    1
                                ],
                                "time": 2000,
                                "keep": true
                            },
                            "\t[hero]（一下子就成了这家伙的下属，好别扭……\n但是看了看身后双眼发红的晴芸，\n那是悲痛吗，还是仇恨呢……）",
                            "\t[hero]（都不重要了。\n内心里，好像有什么东西被解开了……）",
                            {
                                "type": "insert",
                                "name": "第四章前结束"
                            }
                        ]
                    },
                    {
                        "text": "提交成绩",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(flags.hard == 1)",
                                "true": [
                                    "\t[系统提示]自动将身上的钥匙兑换为血量。\n1黄=500万血，1蓝=3黄。",
                                    {
                                        "type": "win",
                                        "reason": "Chap.4.1-格沃之行"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(flags.hard == 2)",
                                        "true": [
                                            "\t[系统提示]自动将身上的钥匙兑换为血量。\n1黄=500万血，1蓝=3黄，1绿=1亿血。",
                                            {
                                                "type": "win",
                                                "reason": "Chap.4.1-格沃之王"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "win",
                                                "reason": ""
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": []
                    },
                    {
                        "text": "听听作者的废话",
                        "condition": "1188==9922",
                        "action": [
                            "\t[如沐东风,greenMan]恭喜通过第四章前篇！\n怎么样，是不是还是一如既往地亲民？",
                            "\t[如沐东风,greenMan]这次的天赋树比第三章简化了许多，制作重心更多地放在怪物特技的设计上。\n现在有一些蓝海塔设计了许多影响战斗伤害的特技，我这里则尝试多设计一些非战斗的特技，希望让怪物动起来并与地图上的各种元素互动——比如炸门炸钥匙炸血瓶之类的。\n总体上还是重思路轻转换的风格，但是为了不让思路过于直球，还是不得已加入了一些转换。",
                            "\t[如沐东风,greenMan]关于后篇，目前还在构思。目前我还是挺想把后篇做出来的，但是如果前篇从玩家处得到的反响不太理想的话，可能会改变想法。\n哎，做塔做了这么多，也还没有摆脱对玩家反馈的依赖。",
                            "\t[如沐东风,greenMan]总之还是希望你享受了之前的游戏过程！\n到h5网站上给塔的精美程度打5分，偶尔在群里提xuan及chuan一下，就是对我最大的支持了。"
                        ]
                    }
                ]
            }
        ],
        "6,3": {
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
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17,30027,  0,  0,30024,  0,  0,  0,30024,  0,  0,30027, 17],
    [ 17,30000,30001,  0,30030,  0,  0,  0,30030,  0,30000,30001, 17],
    [ 17,30006,30007,  0,  0,  0,359,  0,  0,  0,30002,30003, 17],
    [ 17,30012,30013,  0,  0,  0,  0,  0,  0,  0,30008,30009, 17],
    [ 17,30016,30017,  0,  0,  0,  0,  0,  0,  0,30016,30017, 17],
    [ 17,  0,  0,  0,30026,  0,  0,  0,30026,  0,  0,  0, 17],
    [ 17,30000,30001,  0,30032,  0, 93,  0,30032,  0,30000,30001, 17],
    [ 17,30004,30005,  0,  0,  0,30023,  0,  0,  0,30014,30015, 17],
    [ 17,30010,30011,  0,  0,  0,30028,  0,  0,  0,30020,30021, 17],
    [ 17,30016,30017,  0,30025,  0,  0,  0,30025,  0,30016,30017, 17],
    [ 17,30027,  0,  0,30031,  0,  0,  0,30031,  0,  0,30027, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17]
],
    "bgmap": [

],
    "fgmap": [

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

],
    "bgm": "area16.mp3",
    "beforeBattle": {},
    "cannotMoveIn": {}
}