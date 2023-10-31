main.floors.Cave1=
{
    "floorId": "Cave1",
    "title": "特训营-1",
    "name": "特训营-1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 50,
    "defaultGround": "soil",
    "bgm": null,
    "firstArrive": [
        {
            "type": "pauseBgm"
        },
        {
            "type": "setValue",
            "name": "flag:zone_animate",
            "value": "\"zone2\""
        },
        {
            "type": "function",
            "function": "function(){\ncore.plugin.removeMaps(\"South1\", \"North11\");\ncore.setFlag(\"__visited__\", { Cave1: true });\ncore.values.animateSpeed = 340;\ncore.setFlag(\"mana_item\", 100);\ncore.plugin.clearItemDetailCache(\"manaItem\");\ncore.plugin.clearItemDetailCache(\"bigManaitem\");\ncore.setFlag(\"skill4_result\", \"E599\");\ncore.setFlag('disableFly', 1);\n}"
        },
        {
            "type": "moveHero",
            "time": 300,
            "steps": [
                "up:3"
            ]
        },
        {
            "type": "playSound",
            "name": "Quake.ogg"
        },
        {
            "type": "vibrate",
            "direction": "horizontal",
            "time": 3000,
            "speed": 10,
            "power": 10,
            "async": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "function",
            "function": "function(){\nfor (var i = 5; i <= 7; ++i) {\n\tfor (var j = 11; j <= 12; ++j) {\n\t\tcore.setBgFgBlock(\"bg\", \"soil\", i, j);\n\t}\n}\n}"
        },
        {
            "type": "show",
            "loc": [
                [
                    6,
                    12
                ]
            ]
        },
        {
            "type": "animate",
            "name": "E_surprise",
            "loc": "hero",
            "async": true
        },
        {
            "type": "moveHero",
            "time": 100,
            "steps": [
                "down:2"
            ]
        },
        "\t[hero]入口被封死了！",
        {
            "type": "waitAsync"
        },
        "\t[芳芷,hero2]不出所料。倒不如说，在最高级别警戒之下，我们还能就这样直接走进来才奇怪。",
        "\t[晴芸,hero3]我觉得，可能是背后有什么人在操控吧。",
        {
            "type": "moveHero",
            "time": 300,
            "steps": [
                "up:2"
            ]
        },
        "\t[hero]话说回来，这里的环境和外面好像不太一样……有一种被监视和压迫的感觉。",
        "\t[芳芷,hero2]是禁魔力场。你之前经常使用的\r[yellow]魔法莱姆\r，恐怕要失去削弱敌人的作用了。\n另外你手里的\\i[fly]传送器也已失去作用。",
        {
            "type": "animate",
            "name": "E_unhappy",
            "loc": "hero"
        },
        "\t[hero]那可真是个坏消息……",
        "\t[芳芷,hero2]不过好消息是，这里的能量块纯度更高，能够给你补充更多能量。",
        "\t[hero]能量再多又如何，我需要一个办法把它高效地利用起来……\n等等……",
        "神秘徽章最后的能力名为\r[yellow]鸽化\r。根据已知的信息，它应该能够暂时把能量转化为战斗力，就像刚才击败看门的大家伙时那样。",
        "\t[hero]（不过到底该怎么解锁它……哎……）"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,2": [
            {
                "type": "if",
                "condition": "(!switch:A)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    },
                    {
                        "type": "animate",
                        "name": "E_surprise",
                        "loc": "hero"
                    },
                    "\t[hero]\b[this,hero]这是个什么东西？好像是某个高级型号的除灵者？",
                    "\t[芳芷,hero2]\b[this,hero]差不多，不过是隶属于训练营的，说是打工人更准确一些。\n从体型上也可以看出来，它的体型比高级除灵者要小许多。",
                    "\t[晴芸,hero3]\b[this,hero]它的头不见了呀！",
                    {
                        "type": "animate",
                        "name": "E_sweat",
                        "loc": "hero"
                    },
                    "\t[hero]\b[this,hero]为什么感觉你举重若轻地说出了什么不得了的事情……",
                    "\t[晴芸,hero3]\b[this,hero]切口十分光滑，并且切口的角度前低后高，以此推测，凶手的身高应该跟你差不多，然后走到它面前……",
                    "\t[晴芸,hero3]\b[this,hero]一挥手，就把这家伙秒杀了。",
                    "\t[芳芷,hero2]\b[this,hero]看来出手者实力相当恐怖啊，除去刚才在山下的高级除灵者和械灵“幽”，还有谁这么厉害？",
                    {
                        "type": "animate",
                        "name": "E_unhappy",
                        "loc": "hero"
                    },
                    "\t[hero]\b[this,hero]等等，你怎么知道是一招秒杀的？",
                    "\t[晴芸,hero3]\b[this,hero]因为这家伙浑身上下没有任何战斗留下的痕迹，除了头不见了之外就跟新的一样。",
                    {
                        "type": "animate",
                        "name": "E_dots",
                        "loc": "hero"
                    },
                    "\t[芳芷,hero2]\b[this,hero]这下恐怕真的糟了……虽然不知道凶手是谁，又是如何绕过前面守门的打工人的，但其实力绝非你能抗衡。",
                    "\t[芳芷,hero2]\b[this,hero]所以，咱们先想想怎么出去……",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "animate",
                        "name": "E_love",
                        "loc": "hero"
                    },
                    "\t[hero]\b[this,hero]不用。我知道出手者是谁。",
                    "\t[晴芸,hero3]\b[this,hero]难道姐姐认为是……",
                    "\t[芳芷,hero2]\b[this,hero]你认识他？是个什么样的存在？",
                    "\t[hero]\b[this,hero]只是猜测……而且我和她并不熟悉。\n不过我相信她对我不会有恶意。",
                    "\t[hero]\b[this,hero]出发吧，我恰好有很多事情想问她。"
                ],
                "false": [
                    "\t[hero]\b[this,hero]……一个头部已经失踪的机器人。"
                ]
            }
        ],
        "6,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,0": [
            {
                "type": "if",
                "condition": "(!switch:A)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    },
                    {
                        "type": "animate",
                        "name": "E_question",
                        "loc": "hero"
                    },
                    "\t[hero]咦，这个拉杆是干啥用的？",
                    "\t[芳芷,hero2]你可以拉一下试试，放心，不会有奇怪的事情发生的。",
                    {
                        "type": "setBlock",
                        "number": "N598",
                        "loc": [
                            [
                                5,
                                0
                            ]
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "Elevator.ogg"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.setFlag(\"lightRadius\", 6410);\ncore.drawMap();\n}"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "animate",
                        "name": "E_sweat",
                        "loc": "hero"
                    },
                    "\t[hero]原来是照明开关……"
                ],
                "false": [
                    "\t[hero]……还是不要再动它了。"
                ]
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [90042,90097,90097,90097,90066,597, 88,90096,90097,90097,90097,90097,90040],
    [90042, 23, 84,567, 84,  0,  0,  0, 84,567, 84, 52,90040],
    [90042,90007,90007,90007,90007,  0,596,  0,90007,90007,90007,90007,90040],
    [90042,334, 81,334, 81,  0,  0,  0, 81,334, 81,334,90040],
    [90042,90007,90007,90007,90007,  0,333,  0,90007,90007,90007,90007,90040],
    [90042,331,332,331, 82,334,  0,334, 82,330,333,330,90040],
    [90042,90007,90007,90007,90007,  0,388,  0,90007,90007,90007,90007,90040],
    [90042,330,333,330, 82,386,  0,386, 82,331,332,331,90040],
    [90042,90007,90007,90007,90007,  0,333,  0,90007,90007,90007,90007,90040],
    [90042,334, 81,334, 81,334,  0,334, 81,334, 81,334,90040],
    [90042,90007,90007,90007,90007,  0,  0,  0,90007,90007,90007,90007,90040],
    [90042, 51, 84,567, 84,  0,  0,  0, 84,567, 84, 23,90040],
    [  0,90033,90033,90033,90033,90007,90007,90007,90033,90033,90033,90033,  0]
],
    "bgmap": [
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
    [  0,  0,  0,  0,  0,90165,90166,90167,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,90173,90174,90175,  0,  0,  0,  0,  0]
],
    "fgmap": [
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [90036,  0,  0,  0,  0,90033,90083,90033,  0,  0,  0,  0,90035]
],
    "bg2map": [

],
    "fg2map": [

],
    "hard1_enemy_ratio": 80,
    "color": [
        0,
        0,
        0,
        0.95
    ],
    "underGround": true,
    "downFloor": [
        6,
        0
    ],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}