main.floors.Ch_D2=
{
    "floorId": "Ch_D2",
    "title": "试炼2",
    "name": "试炼2",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 10,
    "defaultGround": "T506",
    "bgm": "dungeon2.mp3",
    "firstArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.resetHeroStatus();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:saved_skill3_range",
            "value": "flag:skill3_range"
        },
        {
            "type": "setValue",
            "name": "flag:skill3_range",
            "value": "1188"
        },
        {
            "type": "setValue",
            "name": "flag:skill3_cost",
            "value": "50"
        },
        {
            "type": "setValue",
            "name": "flag:mana_item",
            "value": "100"
        },
        {
            "type": "setValue",
            "name": "flag:mdef_ratio",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "status:atk",
            "value": "80"
        },
        {
            "type": "setValue",
            "name": "status:def",
            "value": "50"
        },
        {
            "type": "setValue",
            "name": "status:mdef",
            "value": "0"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "afterBattle": {
        "6,0": [
            {
                "type": "setValue",
                "name": "item:DScore",
                "operator": "+=",
                "value": "status:hp"
            },
            {
                "type": "win",
                "reason": "试炼挑战-2"
            }
        ],
        "4,5": [
            {
                "type": "setValue",
                "name": "flag:door_Ch_D2_6_1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,1);\n}"
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:door_Ch_D2_6_1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,1);\n}"
            }
        ],
        "4,9": [
            {
                "type": "setValue",
                "name": "flag:door_Ch_D2_6_1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,1);\n}"
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:door_Ch_D2_6_1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.plugin.decSpecialDoorCount(6,1);\n}"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,1": {
            "0": {
                "condition": "flag:door_Ch_D2_6_1==4",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_Ch_D2_6_1",
                        "value": "null"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.hideBgFgMap(\"bg2\", [\n\t[4, 5],\n\t[8, 5],\n\t[4, 9],\n\t[8, 9]\n]);\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [157,157,157,157,157,157,637,157,157,157,157,157,157],
    [ 47,  0, 28,157,157,157, 85,157,157,157, 28, 31,90009],
    [  0,  0,633,  0,157,157, 27,157,157,  0,636,90009, 32],
    [ 21,  0,90010,  0,  0, 81,  0, 81,636, 47,  0,90009, 27],
    [90010,90010,  0,631,  0,90010, 31,90009,  0,632,  0,  0,631],
    [632,  0, 29,  0,635,90010,  0,90009,635, 81,634,  0, 31],
    [ 27, 81,  0,634,  0,  0,70009,  0,  0,  0, 82, 29,  0],
    [ 31,90010,  0,90010,  0,90010, 31,90009,90009,90009,  0,632,  0],
    [90010,  0,631,  0, 82,  0,630,  0, 81, 28,  0,90009,90009],
    [ 28,636,  0,  0,635,  0,496,  0,635,  0,  0,630, 31],
    [ 31,90002,90002,334,90002, 22, 82, 21,90002,90002,633,90002,90002],
    [90002,90002,  0,630, 81,  0,334,  0, 81,  0,  0,  0,90002],
    [70029, 32, 27,  0,90002, 33,  0, 47,90002, 29,  0, 21,70029]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,867,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [70021,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70021],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,168,  0,  0,  0,168,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,168,  0,  0,  0,168,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "beforeBattle": {},
    "cannotMoveIn": {}
}