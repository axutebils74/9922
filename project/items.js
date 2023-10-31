var items_296f5d02_12fd_4166_a7c1_b5e830c9ee3a = 
{
	"yellowKey": {
		"cls": "tools",
		"name": "黄钥匙",
		"text": "可以打开一扇黄门",
		"hideInToolbox": true,
		"category": "消耗道具"
	},
	"blueKey": {
		"cls": "tools",
		"name": "蓝钥匙",
		"text": "可以打开一扇蓝门",
		"hideInToolbox": true,
		"category": "消耗道具"
	},
	"redKey": {
		"cls": "tools",
		"name": "红钥匙",
		"text": "可以打开一扇红门",
		"hideInToolbox": true,
		"category": "消耗道具"
	},
	"redGem": {
		"cls": "items",
		"name": "红宝石",
		"text": null,
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio}",
		"useItemEffect": null,
		"canUseItemEffect": null
	},
	"blueGem": {
		"cls": "items",
		"name": "蓝宝石",
		"text": null,
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio}",
		"useItemEffect": null,
		"canUseItemEffect": null
	},
	"greenGem": {
		"cls": "items",
		"name": "绿宝石",
		"text": null,
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio}",
		"useItemEffect": null,
		"canUseItemEffect": null
	},
	"yellowGem": {
		"cls": "tools",
		"name": "黄宝石",
		"text": "蕴含极强的力量，但无法被直接吸收。${flag:yellowGem_extra_description||\"\"}",
		"itemEffect": "",
		"itemEffectTip": "",
		"useItemEvent": null,
		"canUseItemEffect": "false",
		"category": "消耗道具"
	},
	"redPotion": {
		"cls": "items",
		"name": "红血瓶",
		"text": null,
		"itemEffect": "core.status.hero.hp += core.values.redPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)",
		"itemEffectTip": "，生命+${core.formatBigNumber(core.values.redPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1))}",
		"useItemEffect": null,
		"canUseItemEffect": "true"
	},
	"bluePotion": {
		"cls": "items",
		"name": "蓝血瓶",
		"text": null,
		"itemEffect": "core.status.hero.hp += core.values.bluePotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)",
		"itemEffectTip": "，生命+${core.formatBigNumber(core.values.bluePotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1))}",
		"useItemEffect": null,
		"canUseItemEffect": "true"
	},
	"yellowPotion": {
		"cls": "items",
		"name": "黄血瓶",
		"text": null,
		"itemEffect": "core.status.hero.hp += core.values.yellowPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)",
		"itemEffectTip": "，生命+${core.formatBigNumber(core.values.yellowPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1))}",
		"useItemEffect": null,
		"canUseItemEffect": "true"
	},
	"greenPotion": {
		"cls": "items",
		"name": "绿血瓶",
		"text": null,
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)",
		"itemEffectTip": "，生命+${core.formatBigNumber(core.values.greenPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1))}",
		"useItemEffect": null,
		"canUseItemEffect": "true"
	},
	"sword0": {
		"cls": "equips",
		"name": "破旧的剑",
		"text": "一把异常难用的剑，用它还不如用拳头，攻击-150",
		"equip": {
			"type": 0,
			"animate": "hand",
			"value": {
				"atk": -150
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.atk += 0",
		"itemEffectTip": "，攻击+0"
	},
	"sword1": {
		"cls": "equips",
		"name": "铁剑",
		"text": "像是从古代穿越过来的武器，攻击+5",
		"equip": {
			"type": 0,
			"animate": "sword1",
			"value": {
				"atk": 5
			}
		},
		"itemEffect": "core.status.hero.atk += 5",
		"itemEffectTip": "，攻击+5"
	},
	"sword2": {
		"cls": "equips",
		"name": "银剑",
		"text": "华丽耐用的银剑，十分适合作为装饰，攻击+20",
		"equip": {
			"type": 0,
			"animate": "sword2",
			"value": {
				"atk": 20
			}
		},
		"itemEffect": "core.status.hero.atk += 20",
		"itemEffectTip": "，攻击+20"
	},
	"sword3": {
		"cls": "equips",
		"name": "平世剑",
		"text": "我们不要歧视，要平视！攻击+100",
		"equip": {
			"type": 0,
			"animate": "sword3",
			"value": {
				"atk": 100
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "，攻击+100"
	},
	"sword4": {
		"cls": "equips",
		"name": "激光剑",
		"text": "能轻易地切开任何金属，攻击+1000",
		"equip": {
			"type": 0,
			"animate": "sword4",
			"value": {
				"atk": 1000
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.atk += 1000",
		"itemEffectTip": "，攻击+1000"
	},
	"sword5": {
		"cls": "equips",
		"name": "注魔之刃",
		"text": "轻便快速的剑，被注入了魔法的力量。攻击+70%，防御-30%，护盾+70%，普通攻击额外造成25%伤害。",
		"equip": {
			"type": 0,
			"animate": "zhanji",
			"value": {},
			"percentage": {
				"mdef": 70,
				"def": -30,
				"atk": 70
			}
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "，攻击+100"
	},
	"shield1": {
		"cls": "equips",
		"name": "铁盾",
		"text": "像是从古代穿越过来的防具，防御+5",
		"equip": {
			"type": 1,
			"value": {
				"def": 5
			}
		},
		"itemEffect": "core.status.hero.def += 5",
		"itemEffectTip": "，防御+5"
	},
	"shield2": {
		"cls": "equips",
		"name": "银盾",
		"text": "华丽耐用的银盾，十分适合作为装饰，防御+20",
		"equip": {
			"type": 1,
			"value": {
				"def": 20
			}
		},
		"itemEffect": "core.status.hero.def += 20",
		"itemEffectTip": "，防御+20"
	},
	"shield3": {
		"cls": "equips",
		"name": "平世盾",
		"text": "传说中的七大名盾之一，防御+100",
		"equip": {
			"type": 1,
			"value": {
				"def": 100
			}
		},
		"itemEffect": "core.status.hero.def += 100",
		"itemEffectTip": "，防御+100"
	},
	"shield4": {
		"cls": "equips",
		"name": "钛金盾",
		"text": "极其坚硬而光滑，能够轻易弹飞寻常的子弹，防御+1000",
		"equip": {
			"type": 1,
			"value": {
				"def": 1000
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.def += 1000",
		"itemEffectTip": "，防御+1000"
	},
	"superPotion": {
		"cls": "items",
		"name": "圣水",
		"itemEffect": "core.status.hero.hp *= 2;\ncore.drawHeroAnimate(\"heal\");",
		"itemEffectTip": "，生命值翻倍",
		"canUseItemEffect": true,
		"useItemEffect": "core.status.hero.hp *= 2;"
	},
	"silverCoin": {
		"cls": "items",
		"name": "银币",
		"itemEffect": "core.status.hero.money += 100",
		"itemEffectTip": "，金币+100"
	},
	"book": {
		"cls": "constants",
		"name": "怪物手册",
		"text": "可以查看当前楼层各怪物属性",
		"hideInToolbox": true,
		"useItemEffect": "core.ui.drawBook(0);",
		"canUseItemEffect": "true"
	},
	"fly": {
		"cls": "constants",
		"name": "楼层传送器",
		"text": "可以自由往来去过的楼层",
		"hideInReplay": true,
		"hideInToolbox": true,
		"useItemEffect": "core.ui.drawFly(core.floorIds.indexOf(core.status.floorId));",
		"canUseItemEffect": "(function () {\n\tif (core.getFlag(\"spe83_step\", 0) > 0) return false; // 定时炸弹\n\tvar blocks = core.getMapBlocksObj(core.status.floorId);\n\tfor (var loc in blocks) {\n\t\tvar block = blocks[loc],\n\t\t\tid = block.event.id,\n\t\t\tenemy = core.material.enemys[id];\n\t\tif (block.disable) continue;\n\t\tif (enemy && core.hasSpecial(enemy.special, 68)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn core.status.maps[core.status.floorId].canFlyFrom && !core.getFlag('disableFly', 0);\n})();"
	},
	"freezeBadge": {
		"cls": "constants",
		"name": "冰冻徽章",
		"text": "可以将面前的熔岩变成平地",
		"useItemEffect": "(function () {\n\tvar success = false;\n\n\tvar snowFourDirections = false; // 是否四方向雪花；如果是将其改成true\n\tif (snowFourDirections) {\n\t\t// 四方向雪花\n\t\tfor (var direction in core.utils.scan) {\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (core.getBlockId(nx, ny) == 'lava') {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\tif (core.getBlockId(core.nextX(), core.nextY()) == 'lava') {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t} else {\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"cross": {
		"cls": "constants",
		"name": "十字架",
		"text": "持有后无视怪物的无敌属性"
	},
	"amulet": {
		"cls": "constants",
		"name": "避战符",
		"text": "不会被拥有追击属性的敌人强制战斗",
		"category": "永久道具",
		"canUseItemEffect": true,
		"useItemEffect": "core.insertAction(\"神奇的护符，能够让拥有\\r[yellow]追击\\r属性的敌人变得宛如智障。\");",
		"hideInReplay": true
	},
	"bigKey": {
		"cls": "tools",
		"name": "大黄门钥匙",
		"text": "可以开启当前层所有黄门",
		"itemEffect": "core.status.hero.items.keys.yellowKey++;core.status.hero.items.keys.blueKey++;core.status.hero.items.keys.redKey++;",
		"itemEffectTip": "，全钥匙+1",
		"useItemEffect": "(function () {\n\tvar actions = core.searchBlock(\"yellowDoor\").map(function (block) {\n\t\treturn { \"type\": \"openDoor\", \"loc\": [block.x, block.y], \"async\": true };\n\t});\n\tactions.push({ \"type\": \"waitAsync\" });\n\tactions.push({ \"type\": \"tip\", \"text\": core.material.items[itemId].name + \"使用成功\" });\n\tcore.insertAction(actions);\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.searchBlock('yellowDoor').length > 0;\n})();"
	},
	"greenKey": {
		"cls": "tools",
		"name": "绿钥匙",
		"text": "这钥匙，绿油油的，看起来好舒服吖",
		"category": "消耗道具",
		"useItemEffect": "core.getItem(\"greenKey\");\ncore.insertAction(\"也许比绿钥匙本身更重要的，是留住它所需的东西。\");",
		"canUseItemEffect": true
	},
	"steelKey": {
		"cls": "tools",
		"name": "铁门钥匙",
		"text": "可以打开一扇铁门",
		"category": "消耗道具"
	},
	"pickaxe": {
		"cls": "tools",
		"name": "破墙镐",
		"text": "破坏面前的不可通行地形，快捷键2",
		"useItemEffect": "(function () {\n\tvar canBreak = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable) return false;\n\t\treturn block.event.canBreak;\n\t};\n\n\tvar success = false;\n\tvar pickaxeFourDirections = false; // 是否四方向破；如果是将其改成true\n\tif (pickaxeFourDirections) {\n\t\t// 四方向破\n\t\tfor (var direction in core.utils.scan) {\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (canBreak(nx, ny)) {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\t// 仅破当前\n\t\tif (canBreak(core.nextX(), core.nextY())) {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('pickaxe.mp3');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t} else {\n\t\t// 无法使用\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true",
		"category": "消耗道具",
		"hideInReplay": true
	},
	"bomb": {
		"cls": "tools",
		"name": "炸弹",
		"text": "可以炸掉勇士面前的怪物",
		"useItemEffect": "(function () {\n\tvar canBomb = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.block.disable || block.block.event.cls.indexOf('enemy') != 0) return false;\n\t\tvar enemy = core.material.enemys[block.block.event.id];\n\t\treturn enemy && !enemy.notBomb;\n\t};\n\n\tvar bombList = []; // 炸掉的怪物坐标列表\n\tvar bombFourDirections = false; // 是否四方向可炸；如果是将其改成true。\n\tif (bombFourDirections) {\n\t\t// 四方向炸\n\t\tfor (var direction in core.utils.scan) {\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (canBomb(nx, ny)) {\n\t\t\t\tbombList.push([nx, ny]);\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t}\n\t\t}\n\t} else {\n\t\t// 仅炸当前\n\t\tif (canBomb(core.nextX(), core.nextY())) {\n\t\t\tbombList.push([core.nextX(), core.nextY()]);\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t}\n\t}\n\n\tif (bombList.length > 0) {\n\t\tcore.playSound('bomb.mp3');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t} else {\n\t\tcore.drawTip('当前无法使用' + core.material.items[itemId].name);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n\n\t// 炸弹后事件\n\t// 这是一个使用炸弹也能开门的例子\n\t/*\n\tif (core.status.floorId=='xxx' && core.terrainExists(x0,y0,'specialDoor') // 某个楼层，该机关门存在\n\t\t&& !core.enemyExists(x1,y1) && !core.enemyExists(x2,y2)) // 且守门的怪物都不存在\n\t{\n\t\tcore.insertAction([ // 插入事件\n\t\t\t{\"type\": \"openDoor\", \"loc\": [x0,y0]} // 开门\n\t\t])\n\t}\n\t*/\n})();",
		"canUseItemEffect": "true"
	},
	"centerFly": {
		"cls": "tools",
		"name": "中心对称飞行器",
		"text": "可以飞向当前楼层中心对称的位置",
		"useItemEffect": "core.playSound('centerFly.mp3');\ncore.clearMap('hero');\ncore.setHeroLoc('x', core.bigmap.width - 1 - core.getHeroLoc('x'));\ncore.setHeroLoc('y', core.bigmap.height - 1 - core.getHeroLoc('y'));\ncore.drawHero();\ncore.drawTip(core.material.items[itemId].name + '使用成功');",
		"canUseItemEffect": "(function () {\n\tvar toX = core.bigmap.width - 1 - core.getHeroLoc('x'),\n\t\ttoY = core.bigmap.height - 1 - core.getHeroLoc('y');\n\tvar id = core.getBlockId(toX, toY);\n\treturn id == null;\n})();"
	},
	"upFly": {
		"cls": "tools",
		"name": "上楼器",
		"text": "可以飞往楼上的下楼梯口——如果存在的话",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) + 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"stair\": \"downFloor\", \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, \"downFloor\", null, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index > 0) {\n\t\tvar toId = core.floorIds[index + 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\t// 设置了下楼梯才能使用\n\t\tif (!core.status.maps[toId].downFloor) {\n\t\t\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n\t\t\treturn false;\n\t\t}\n\t\t// 飞到下楼梯，无需检查下一层同位置是否有东西\n\t\t//var mw = core.floors[toId].width,\n\t\t//\tmh = core.floors[toId].height;\n\t\t//if (toX >= 0 && toX < mw && toY >= 0 && toY < mh && core.getBlock(toX, toY, toId) == null) {\n\t\t//\treturn true;\n\t\t//}\n\t\treturn true;\n\t}\n\treturn false;\n})();",
		"category": "消耗道具"
	},
	"downFly": {
		"cls": "tools",
		"name": "下楼器",
		"text": "可以飞往楼下的上楼梯口——如果存在的话",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) - 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"stair\": \"upFloor\", \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, \"upFloor\", null, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index > 0) {\n\t\tvar toId = core.floorIds[index - 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\t// 设置了上楼梯才能使用\n\t\tif (!core.status.maps[toId].upFloor) {\n\t\t\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n\t\t\treturn false;\n\t\t}\n\t\t// 飞到上楼梯，无需检查下一层同位置是否有东西\n\t\t//var mw = core.floors[toId].width,\n\t\t//\tmh = core.floors[toId].height;\n\t\t//if (toX >= 0 && toX < mw && toY >= 0 && toY < mh && core.getBlock(toX, toY, toId) == null) {\n\t\t//\treturn true;\n\t\t//}\n\t\treturn true;\n\t}\n\treturn false;\n})();",
		"category": "消耗道具"
	},
	"earthquake": {
		"cls": "tools",
		"name": "地震卷轴",
		"text": "可以破坏当前层的所有墙",
		"useItemEffect": "(function () {\n\tvar indexes = [];\n\tfor (var index in core.status.thisMap.blocks) {\n\t\tvar block = core.status.thisMap.blocks[index];\n\t\tif (!block.disable && block.event.canBreak) {\n\t\t\tindexes.push(index);\n\t\t}\n\t}\n\tcore.removeBlockByIndexes(indexes);\n\tcore.drawMap(core.status.floorId, function () {\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t});\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.status.thisMap.blocks.filter(function (block) {\n\t\treturn !block.disable && block.event.canBreak;\n\t}).length > 0;\n})();"
	},
	"poisonWine": {
		"cls": "tools",
		"name": "解毒药水",
		"text": "可以解除中毒状态",
		"useItemEffect": "core.removeFlag('poison');",
		"canUseItemEffect": "core.hasFlag('poison');",
		"category": "消耗道具"
	},
	"weakWine": {
		"cls": "tools",
		"name": "平静药水",
		"text": "可以解除所有暴戾状态，若没有该状态则回复50能量",
		"useItemEffect": "core.playSound(\"pickPotion2.wav\");\ncore.drawHeroAnimate(\"dispel\");\nif (core.getFlag(\"rage_stack\", 0) > 0) {\n\tcore.setFlag(\"rage_stack\", 0);\n} else {\n\tcore.status.hero.mana += 50;\n}\ncore.updateStatusBar();\ncore.setHeroIcon(\"hero.png\");",
		"canUseItemEffect": true,
		"category": "消耗道具"
	},
	"curseWine": {
		"cls": "tools",
		"name": "解咒药水",
		"text": "可以解除诅咒状态",
		"useItemEffect": "core.removeFlag('curse');",
		"canUseItemEffect": "core.hasFlag('curse');",
		"category": "消耗道具"
	},
	"superWine": {
		"cls": "tools",
		"name": "万能药水",
		"text": "可以解除所有不良状态",
		"useItemEffect": "core.removeFlag('poison');\nif (core.hasFlag('weak')) {\n\tcore.removeFlag('weak');\n\tif (core.values.weakValue>=1) { // >=1：直接扣数值\n\t\tcore.status.hero.atk += core.values.weakValue;\n\t\tcore.status.hero.def += core.values.weakValue;\n\t}\n\telse { // <1：扣比例\n\t\tcore.addBuff(\"atk\", core.values.weakValue);\n\t\tcore.addBuff(\"def\", core.values.weakValue);\n\t}\n}\ncore.removeFlag('curse');",
		"canUseItemEffect": "(function() {\n\treturn core.hasFlag('poison') || core.hasFlag('weak') || core.hasFlag('curse');\n})();",
		"category": "消耗道具"
	},
	"hammer": {
		"cls": "tools",
		"name": "圣锤",
		"text": "该道具尚未被定义"
	},
	"jumpShoes": {
		"cls": "tools",
		"name": "跳跃靴",
		"text": "能跳跃到前方两格处",
		"useItemEffect": "core.playSound(\"jump.mp3\"); core.insertAction({ \"type\": \"jumpHero\", \"loc\": [core.nextX(2), core.nextY(2)] });",
		"canUseItemEffect": "(function () {\n\tvar nx = core.nextX(2),\n\t\tny = core.nextY(2);\n\treturn nx >= 0 && nx < core.bigmap.width && ny >= 0 && ny < core.bigmap.height && core.getBlockId(nx, ny) == null;\n})();"
	},
	"skill1": {
		"cls": "constants",
		"name": "【主动】护盾爆发",
		"text": "自身首次攻击前，对全体敌人造成等同于自身${flag:skill1_ratio}倍剩余护盾值的技能伤害${flag:skill1_extra_text}。消耗${flag:skill1_cost}能量。快捷键1。",
		"hideInReplay": true,
		"useItemEffect": "if (core.getFlag('skill', 0) != 1) { // 判断当前是否已经开了此技能\n\tif (core.getStatus('mana') >= core.getFlag('skill1_cost', 10)) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\tcore.setFlag('skill', 1); // 开技能1\n\t\tcore.setFlag('skillName', '护盾爆发'); // 设置技能名\n\t\tif (!core.isReplaying()) core.playSound(\"002-System02.ogg\");\n\t} else {\n\t\tcore.drawTip(\"魔力不足，无法开启技能\");\n\t\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n\t}\n} else { // 关闭技能\n\tcore.setFlag('skill', 0); // 关闭技能状态\n\tcore.setFlag('skillName', '无');\n\tif (!core.isReplaying()) core.playSound(\"008-System08.ogg\");\n}",
		"canUseItemEffect": "true",
		"category": "主动技能"
	},
	"I_light": {
		"cls": "constants",
		"name": "大型探照灯",
		"text": "几乎可以照亮整个楼层，使用切换开关",
		"canUseItemEffect": true,
		"useItemEffect": "if (core.getFlag('lightRadius', 0) < 200) {\n\tcore.setFlag('origin_lightRadius', core.getFlag('lightRadius', 0));\n\tcore.setFlag(\"lightRadius\", 500);\n} else {\n\tcore.setFlag(\"lightRadius\", core.getFlag('origin_lightRadius'));\n}\ncore.playSound('VX_Sword1.ogg');\ncore.drawMap();\ncore.plugin.updateWeather();",
		"category": "永久道具",
		"hideInReplay": true
	},
	"I319": {
		"cls": "constants",
		"name": "匙之道",
		"text": "每开启一个黄门，机器之心对攻防护盾的提升效果永久增加1%。1蓝门=3黄门，1红门=10黄门。",
		"category": "被动技能",
		"canUseItemEffect": true,
		"useItemEffect": "core.insertAction(\"消耗钥匙之后，将其一部分力量彻底吸收至自身，是相当强悍的能力。\\n传说道境之上还有源境，但至今无人能窥得其奥妙。\");",
		"hideInReplay": true
	},
	"I320": {
		"cls": "items",
		"name": "纸条",
		"text": "普通的纸条，上面写了什么东西"
	},
	"I321": {
		"cls": "tools",
		"name": "解冻药水",
		"text": "可以解除所有冻结状态，并回复5000生命和20能量",
		"canUseItemEffect": true,
		"useItemEffect": "core.playSound(\"pickPotion2.wav\");\ncore.drawHeroAnimate(\"dispel\");\nif (core.getFlag(\"freeze_stack\", 0) > 0) {\n\tcore.setFlag(\"freeze_stack\", 0);\n}\ncore.status.hero.hp += 5000;\ncore.status.hero.mana += 20;\ncore.updateStatusBar();",
		"category": "消耗道具"
	},
	"greenGem2": {
		"cls": "items",
		"name": "二阶绿宝石",
		"text": null,
		"useItemEvent": null,
		"canUseItemEffect": null,
		"itemEffect": "core.status.hero.mdef += 2 * core.values.greenGem * core.status.thisMap.ratio",
		"itemEffectTip": "，护盾+${2*core.values.greenGem * core.status.thisMap.ratio}"
	},
	"greenGem3": {
		"cls": "items",
		"name": "三阶绿宝石",
		"itemEffect": "core.status.hero.mdef += 4 * core.values.greenGem * core.status.thisMap.ratio",
		"itemEffectTip": "，护盾+${4*core.values.greenGem * core.status.thisMap.ratio}"
	},
	"greenGem4": {
		"cls": "items",
		"name": "四阶绿宝石",
		"itemEffect": "core.status.hero.mdef += 8 * core.values.greenGem * core.status.thisMap.ratio",
		"itemEffectTip": "，护盾+${8*core.values.greenGem * core.status.thisMap.ratio}"
	},
	"redGem4": {
		"cls": "items",
		"name": "四阶红宝石",
		"itemEffect": "core.status.hero.atk += 8 * core.values.redGem * core.status.thisMap.ratio",
		"itemEffectTip": "，攻击+${8*core.values.redGem * core.status.thisMap.ratio}"
	},
	"redGem3": {
		"cls": "items",
		"name": "三阶红宝石",
		"itemEffect": "core.status.hero.atk += 4 * core.values.redGem * core.status.thisMap.ratio",
		"itemEffectTip": "，攻击+${4*core.values.redGem * core.status.thisMap.ratio}"
	},
	"redGem2": {
		"cls": "items",
		"name": "二阶红宝石",
		"text": null,
		"itemEffect": "core.status.hero.atk += 2 * core.values.redGem * core.status.thisMap.ratio",
		"itemEffectTip": "，攻击+${2*core.values.redGem * core.status.thisMap.ratio}"
	},
	"blueGem2": {
		"cls": "items",
		"name": "二阶蓝宝石",
		"itemEffect": "core.status.hero.def += 2 * core.values.blueGem * core.status.thisMap.ratio",
		"itemEffectTip": "，防御+${2*core.values.blueGem * core.status.thisMap.ratio}"
	},
	"blueGem3": {
		"cls": "items",
		"name": "三阶蓝宝石",
		"itemEffect": "core.status.hero.def += 4 * core.values.blueGem * core.status.thisMap.ratio",
		"itemEffectTip": "，防御+${4*core.values.blueGem * core.status.thisMap.ratio}"
	},
	"blueGem4": {
		"cls": "items",
		"name": "四阶蓝宝石",
		"itemEffect": "core.status.hero.def += 8 * core.values.blueGem * core.status.thisMap.ratio",
		"itemEffectTip": "，防御+${8*core.values.blueGem * core.status.thisMap.ratio}"
	},
	"bigRedPotion": {
		"cls": "items",
		"name": "大红血瓶",
		"itemEffect": "core.status.hero.hp += 10 * core.values.redPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)",
		"itemEffectTip": "，生命+${core.formatBigNumber(10*core.values.redPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1))}"
	},
	"bigBluePotion": {
		"cls": "items",
		"name": "大蓝血瓶",
		"itemEffect": "core.status.hero.hp += 10 * core.values.bluePotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)",
		"itemEffectTip": "，生命+${core.formatBigNumber(10*core.values.bluePotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1))}"
	},
	"bigYellowPotion": {
		"cls": "items",
		"name": "大黄血瓶",
		"itemEffect": "core.status.hero.hp += 10 * core.values.yellowPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)",
		"itemEffectTip": "，生命+${core.formatBigNumber(10*core.values.yellowPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1))}"
	},
	"bigGreenPotion": {
		"cls": "items",
		"name": "大绿血瓶",
		"itemEffect": "core.status.hero.hp += 10 * core.values.greenPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)",
		"itemEffectTip": "，生命+${core.formatBigNumber(10*core.values.greenPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1))}"
	},
	"skill2": {
		"cls": "constants",
		"name": "【主动】集中防御",
		"text": "蓄力${flag:skill2_charge}回合，之后本场战斗中防御提升基础值的${flag:skill2_val}%（${flag:skill2_val*core.getStatus('def')/100}点）。消耗${flag:skill2_cost}能量。快捷键2。",
		"useItemEffect": "if (core.getFlag('skill', 0) != 2) { // 判断当前是否已经开了此技能\n\tif (core.getStatus('mana') >= core.getFlag('skill2_cost', 10)) {\n\t\tcore.setFlag('skill', 2);\n\t\tcore.setFlag('skillName', '集中防御');\n\t\tif (!core.isReplaying()) core.playSound(\"002-System02.ogg\");\n\t} else {\n\t\tcore.drawTip(\"魔力不足，无法开启技能\");\n\t\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n\t}\n} else { // 关闭技能\n\tcore.setFlag('skill', 0); // 关闭技能状态\n\tcore.setFlag('skillName', '无');\n\tif (!core.isReplaying()) core.playSound(\"008-System08.ogg\");\n}",
		"canUseItemEffect": "true",
		"category": "主动技能",
		"hideInReplay": true
	},
	"skill0_buff": {
		"cls": "items",
		"name": "强化修复",
		"itemEffect": "core.addFlag('skill0_val', 100);\ncore.addFlag('skill0_buff_used', 1);",
		"itemEffectTip": "，修复效果增强100点",
		"text": "修复效果增强100点"
	},
	"skill0": {
		"cls": "constants",
		"name": "【主动】修复",
		"text": "消耗${flag:skill0_cost}能量，增加${flag:skill0_val}*${flag:skill0_ratio}%生命（${Math.floor(flag:skill0_val*flag:skill0_ratio/100)}点）。快捷键1。",
		"useItemEffect": "if (core.getStatus('mana') >= core.getFlag('skill0_cost', 10)) {\n\tcore.status.hero.hp += core.getFlag('skill0_val', 200) * core.getFlag(\"skill0_ratio\", 100) / 100;\n\tcore.status.hero.mana -= core.getFlag('skill0_cost', 10);\n\tif (!core.getFlag(\"skill0_no_animate\", 0)) {\n\t\tcore.drawHeroAnimate('heal2');\n\t}\n\tif (core.hasItem(\"I343\")) {\n\t\tcore.addFlag(\"skill0_ratio\", core.getFlag(\"skill0_ratio_increase_pp\", 2));\n\t}\n}",
		"canUseItemEffect": "core.status.hero.mana >= core.getFlag('skill0_cost', 10);",
		"category": "主动技能",
		"hideInReplay": true
	},
	"I343": {
		"cls": "constants",
		"name": "修复增幅",
		"text": "每使用一次修复，效果倍率提升${flag:skill0_ratio_increase_pp||2}%。",
		"equip": null,
		"category": "被动技能",
		"canUseItemEffect": "true",
		"useItemEffect": "core.insertAction(\"越咸越强\");"
	},
	"yellowKey3": {
		"cls": "items",
		"name": "黄钥匙串",
		"itemEffect": "core.addItem('yellowKey', 3);",
		"itemEffectTip": "，3把黄钥匙"
	},
	"blueKey3": {
		"cls": "items",
		"name": "蓝钥匙串",
		"itemEffectTip": "，3把蓝钥匙",
		"itemEffect": "core.addItem('blueKey', 3);"
	},
	"redKey3": {
		"cls": "items",
		"name": "红钥匙串",
		"itemEffectTip": "，3把红钥匙",
		"itemEffect": "core.addItem('redKey', 3);"
	},
	"I392": {
		"cls": "constants",
		"name": "机器之心",
		"equip": null,
		"text": "攻击、防御、护盾分别变为基础值的${flag:heart_atk_pp+100}%，${flag:heart_def_pp+100}%，${flag:heart_mdef_pp+100}%。（使用以查看基础能力值）",
		"useItemEffect": "core.insertAction(\"当前基础能力：\\n攻击：\\r[red]\" + core.getStatus('atk') + \"\\r\\n防御：\\r[aqua]\" + core.getStatus('def') + \"\\r\\n护盾：\\r[lime]\" + core.getStatus('mdef'));",
		"canUseItemEffect": "true",
		"category": "永久道具",
		"hideInReplay": true
	},
	"I397": {
		"cls": "items",
		"name": "活力之核",
		"equip": null,
		"text": "",
		"itemEffect": "core.plugin.addValpp('mdef', 40);",
		"itemEffectTip": "，基础护盾提升40%。"
	},
	"I401": {
		"cls": "items",
		"name": "热情之核",
		"equip": null,
		"text": "",
		"itemEffect": "core.plugin.addValpp('atk', 20);",
		"itemEffectTip": "，基础攻击提升20%。"
	},
	"blackGem": {
		"cls": "items",
		"name": "黑宝石",
		"equip": null,
		"text": "",
		"itemEffect": "core.plugin.addValpp('atk', 2);\ncore.plugin.addValpp('def', 2);\ncore.plugin.addValpp('mdef', 2);",
		"itemEffectTip": "，基础攻防护盾各提升2%"
	},
	"I409": {
		"cls": "items",
		"name": "坚毅之核",
		"itemEffect": "core.plugin.addValpp('def', 20);",
		"itemEffectTip": "，基础防御提升20%。",
		"text": ""
	},
	"I62": {
		"cls": "constants",
		"name": "能量回复",
		"text": "拾取能量块后回复${flag:mana_item||15}点能量。每场战斗后回复${flag:mana_regen}点能量${flag:I62_extra_description || \"\"}",
		"category": "被动技能",
		"canUseItemEffect": true,
		"useItemEffect": "core.insertAction(\"刷蓝再也不用控攻击了。\");",
		"hideInReplay": true
	},
	"I420": {
		"cls": "constants",
		"name": "绿姐姐的提示",
		"canUseItemEffect": true,
		"useItemEffect": "core.insertCommonEvent(\"绿姐姐的提示\");",
		"text": "包含一些关于本区域的提示信息",
		"category": "永久道具"
	},
	"I425": {
		"cls": "tools",
		"name": "急救药水",
		"text": "瓶子看上去十分粗糙，将100能量转换为40000生命",
		"itemEffect": null,
		"useItemEffect": "core.status.hero.mana -= 100;\ncore.status.hero.hp += 40000;\ncore.drawHeroAnimate(\"heal2\");",
		"canUseItemEffect": "core.status.hero.mana >= 100",
		"category": "消耗道具"
	},
	"goldCoin": {
		"cls": "items",
		"name": "金币",
		"text": null,
		"itemEffect": "core.status.hero.money += 500",
		"itemEffectTip": "，金币+500"
	},
	"I437": {
		"cls": "constants",
		"name": "强化护盾",
		"category": "永久道具",
		"text": "每点护盾能够抵挡${flag:mdef_ratio}点伤害（总共抵挡${flag:mdef_ratio*10*core.getRealStatus(\"mdef\")/10}点伤害）",
		"canUseItemEffect": true,
		"useItemEffect": "core.insertAction(\"\\\"你害怕净化，是因为你护盾不够高。\\\"\");",
		"hideInReplay": true
	},
	"I438": {
		"cls": "tools",
		"name": "红葡萄酒",
		"category": "消耗道具",
		"text": "基础攻击提升300点，持续至下一场战斗结束，不可叠加。",
		"canUseItemEffect": "core.getFlag(\"used_potion\", 0) == 0",
		"useItemEffect": "core.setFlag(\"used_potion\", 1);\nvar val = 300;\ncore.setFlag(\"potion_atk\", val);\ncore.status.hero.atk += val;\ncore.updateStatusBar();\ncore.drawHeroAnimate(\"rage_buff\");"
	},
	"I439": {
		"cls": "tools",
		"name": "蓝莓果汁",
		"category": "消耗道具",
		"text": "基础防御提升200点，持续至下一场战斗结束，不可叠加。",
		"canUseItemEffect": "core.getFlag(\"used_potion\", 0) == 0",
		"useItemEffect": "core.setFlag(\"used_potion\", 1);\nvar val = 200;\ncore.setFlag(\"potion_def\", val);\ncore.status.hero.def += val;\ncore.updateStatusBar();\ncore.drawHeroAnimate(\"def_buff\");"
	},
	"I440": {
		"cls": "tools",
		"name": "万能药水",
		"category": "消耗道具",
		"text": "能够解除所有异常状态的神药",
		"canUseItemEffect": "core.getFlag(\"freeze_stack\", 0) > 0 || core.getFlag(\"rage_stack\", 0) != 0",
		"useItemEffect": "core.setFlag(\"freeze_stack\", 0);\ncore.setFlag(\"rage_stack\", 0);\ncore.drawHeroAnimate(\"dispel\");\ncore.updateStatusBar();\ncore.setHeroIcon(\"hero.png\");"
	},
	"I441": {
		"cls": "tools",
		"name": "茉莉清茶",
		"category": "消耗道具",
		"canUseItemEffect": "core.getFlag(\"used_potion\", 0) == 0",
		"useItemEffect": "core.setFlag(\"used_potion\", 1);\nvar val = 1000;\ncore.setFlag(\"potion_mdef\", val);\ncore.status.hero.mdef += val;\ncore.updateStatusBar();\ncore.drawHeroAnimate(\"mdef_buff\");",
		"text": "基础护盾提升1000点，持续至下一场战斗结束，不可叠加。\n瓶子里的东西似乎被人调换过"
	},
	"superPotion_s": {
		"cls": "items",
		"name": "灵水",
		"itemEffect": "core.status.hero.hp *= 1.05;",
		"itemEffectTip": "，生命值增加5%（${core.formatBigNumber(Math.floor(core.status.hero.hp*5/105))}点)"
	},
	"leaf": {
		"cls": "equips",
		"name": "小芊叶",
		"text": "虽然看上去只是一片叶子，但是防御+500，且每场战斗后额外回复1能量",
		"equip": {
			"type": 1,
			"value": {
				"def": 500
			},
			"percentage": {}
		},
		"itemEffect": "console.log(\"烤猫\");",
		"itemEffectTip": "烤猫"
	},
	"skill0_all": {
		"cls": "constants",
		"name": "【主动】一键修复",
		"category": "主动技能",
		"text": "自动不停地释放修复，直到能量耗尽。",
		"canUseItemEffect": "core.status.hero.mana >= core.getFlag('skill0_cost', 10) && core.hasItem(\"skill0\");",
		"useItemEffect": "core.setFlag(\"skill0_no_animate\", 1);\nwhile (core.status.hero.mana >= core.getFlag('skill0_cost', 10)) {\n\tcore.useItem(\"skill0\", true);\n}\ncore.drawHeroAnimate(\"heal2\");\ncore.setFlag(\"skill0_no_animate\", 0);",
		"hideInReplay": true
	},
	"I_wait": {
		"cls": "constants",
		"name": "【主动】原地等待",
		"category": "主动技能",
		"canUseItemEffect": true,
		"text": "原地等待一回合。快捷键3。",
		"useItemEffect": "if (core.getFlag(\"70F_boss_phase\", 0) == 1) {\n\tcore.autosave(false);\n}\ncore.drawHeroAnimate(\"yongchang\");\ncore.moveOneStep();",
		"hideInReplay": true
	},
	"skill3": {
		"cls": "constants",
		"name": "【主动】轻风",
		"category": "主动技能",
		"text": "将面前的敌人向后推动${flag:skill3_range||1}格，消耗${flag:skill3_cost || 50}能量。对拥有特殊头衔的敌人无效。${flag:skill3_extra_description||\"\"}快捷键1。",
		"hideInReplay": true,
		"useItemEffect": "var cost = core.getFlag(\"skill3_cost\", 50);\nif (core.status.hero.mana < cost) {\n\tcore.drawTip(\"能量不足。\");\n\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n} else {\n\tvar nextX = core.nextX();\n\tvar nextY = core.nextY();\n\tvar cls = core.getBlockCls(nextX, nextY);\n\tvar dir = core.status.hero.loc.direction;\n\tvar arrays = core.maps._generateMovableArray_arrays(core.status.floorId);\n\tif (cls != \"enemys\" && cls != \"enemy48\") {\n\t\tif (core.getFlag(\"skill3_push_self\", 0) == 0 || core.getBlockId(core.nextX(), core.nextY()) != null) {\n\t\t\tcore.drawTip(\"没有可推动的物体。\");\n\t\t\tif (!core.isReplaying()) core.playSound(\"002-System02.ogg\");\n\t\t} else { // 推自己\n\t\t\tvar prevX = core.status.hero.loc.x,\n\t\t\t\tprevY = core.status.hero.loc.y;\n\t\t\tvar id = core.getBlockId(core.nextX(), core.nextY());\n\t\t\tvar steps = [];\n\t\t\tvar func1 = function (name) { return arrays[name][prevY][prevX]; };\n\t\t\tvar func2 = function (name) { return arrays[name][nextY][nextX]; };\n\t\t\twhile (id == null && nextX >= 0 && nextY >= 0 && nextX < core.bigmap.width && nextY < core.bigmap.height &&\n\t\t\t\t!core.maps._canMoveHero_checkCannotInOut(Object.keys(arrays).map(func1), \"cannotOut\", dir) &&\n\t\t\t\t!core.maps._canMoveHero_checkCannotInOut(Object.keys(arrays).map(func2), \"cannotIn\", dir)) {\n\t\t\t\tsteps.push(dir);\n\t\t\t\tswitch (dir) {\n\t\t\t\tcase \"up\":\n\t\t\t\t\tprevY = nextY;\n\t\t\t\t\tnextY -= 1;\n\t\t\t\t\tbreak;\n\t\t\t\tcase \"down\":\n\t\t\t\t\tprevY = nextY;\n\t\t\t\t\tnextY += 1;\n\t\t\t\t\tbreak;\n\t\t\t\tcase \"left\":\n\t\t\t\t\tprevX = nextX;\n\t\t\t\t\tnextX -= 1;\n\t\t\t\t\tbreak;\n\t\t\t\tcase \"right\":\n\t\t\t\t\tprevX = nextX;\n\t\t\t\t\tnextX += 1;\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t\tid = core.getBlockId(nextX, nextY);\n\t\t\t}\n\t\t\tif (steps.length == 0) {\n\t\t\t\tcore.drawTip(\"推动距离为0！\");\n\t\t\t\tif (!core.isReplaying()) core.playSound(\"002-System02.ogg\");\n\t\t\t} else {\n\t\t\t\tcore.autosave();\n\t\t\t\tcore.status.hero.mana -= cost;\n\t\t\t\tcore.drawHeroAnimate(\"skill3\");\n\t\t\t\tvar push_time = 70;\n\t\t\t\tif (core.isReplaying()) push_time = 10; // 这玩意好像实际上并没有生效，咕了\n\t\t\t\tcore.insertAction({ \"type\": \"moveHero\", \"time\": push_time, \"steps\": steps });\n\t\t\t}\n\t\t\t// return here\n\t\t}\n\t} else {\n\t\tvar mon_id = core.getBlockId(nextX, nextY);\n\t\tvar enemy = core.material.enemys[mon_id];\n\t\tvar can_push = enemy.title == null || enemy.title == \"普通\";\n\t\tvar actions = [];\n\t\tvar range_remain = core.getFlag(\"skill3_range\", 1);\n\t\tvar dirs = [];\n\t\tswitch (dir) {\n\t\tcase \"up\":\n\t\t\tvar id = core.getBlockId(nextX, nextY - 1);\n\t\t\tif (id == null && can_push) {\n\t\t\t\tvar func1 = function (name) { return arrays[name][nextY][nextX]; };\n\t\t\t\tvar func2 = function (name) { return arrays[name][nextY - 1][nextX]; };\n\t\t\t\twhile (range_remain > 0 && id == null && nextY > 0 &&\n\t\t\t\t\t!core.maps._canMoveHero_checkCannotInOut(Object.keys(arrays).map(func1), \"cannotOut\", dir) &&\n\t\t\t\t\t!core.maps._canMoveHero_checkCannotInOut(Object.keys(arrays).map(func2), \"cannotIn\", dir)) {\n\t\t\t\t\tdirs.push(dir);\n\t\t\t\t\tnextY -= 1;\n\t\t\t\t\trange_remain -= 1;\n\t\t\t\t\tid = core.getBlockId(nextX, nextY - 1);\n\t\t\t\t}\n\t\t\t}\n\t\t\tbreak;\n\t\tcase \"left\":\n\t\t\tvar id = core.getBlockId(nextX - 1, nextY);\n\t\t\tif (id == null && can_push) {\n\t\t\t\tvar func1 = function (name) { return arrays[name][nextY][nextX]; };\n\t\t\t\tvar func2 = function (name) { return arrays[name][nextY][nextX - 1]; };\n\t\t\t\twhile (range_remain > 0 && id == null && nextX > 0 &&\n\t\t\t\t\t!core.maps._canMoveHero_checkCannotInOut(Object.keys(arrays).map(func1), \"cannotOut\", dir) &&\n\t\t\t\t\t!core.maps._canMoveHero_checkCannotInOut(Object.keys(arrays).map(func2), \"cannotIn\", dir)) {\n\t\t\t\t\tdirs.push(dir);\n\t\t\t\t\tnextX -= 1;\n\t\t\t\t\trange_remain -= 1;\n\t\t\t\t\tid = core.getBlockId(nextX - 1, nextY);\n\t\t\t\t}\n\t\t\t}\n\t\t\tbreak;\n\t\tcase \"right\":\n\t\t\tvar id = core.getBlockId(nextX + 1, nextY);\n\t\t\tif (id == null && can_push) {\n\t\t\t\tvar func1 = function (name) { return arrays[name][nextY][nextX]; };\n\t\t\t\tvar func2 = function (name) { return arrays[name][nextY][nextX + 1]; };\n\t\t\t\twhile (range_remain > 0 && id == null && nextX < core.bigmap.width - 1 &&\n\t\t\t\t\t!core.maps._canMoveHero_checkCannotInOut(Object.keys(arrays).map(func1), \"cannotOut\", dir) &&\n\t\t\t\t\t!core.maps._canMoveHero_checkCannotInOut(Object.keys(arrays).map(func2), \"cannotIn\", dir)) {\n\t\t\t\t\tdirs.push(dir);\n\t\t\t\t\tnextX += 1;\n\t\t\t\t\trange_remain -= 1;\n\t\t\t\t\tid = core.getBlockId(nextX + 1, nextY);\n\t\t\t\t}\n\t\t\t}\n\t\t\tbreak;\n\t\tcase \"down\":\n\t\t\tvar id = core.getBlockId(nextX, nextY + 1);\n\t\t\tif (id == null && can_push) {\n\t\t\t\tvar func1 = function (name) { return arrays[name][nextY][nextX]; };\n\t\t\t\tvar func2 = function (name) { return arrays[name][nextY + 1][nextX]; };\n\t\t\t\twhile (range_remain > 0 && id == null && nextY < core.bigmap.height - 1 &&\n\t\t\t\t\t!core.maps._canMoveHero_checkCannotInOut(Object.keys(arrays).map(func1), \"cannotOut\", dir) &&\n\t\t\t\t\t!core.maps._canMoveHero_checkCannotInOut(Object.keys(arrays).map(func2), \"cannotIn\", dir)) {\n\t\t\t\t\tdirs.push(dir);\n\t\t\t\t\tnextY += 1;\n\t\t\t\t\trange_remain -= 1;\n\t\t\t\t\tid = core.getBlockId(nextX, nextY + 1);\n\t\t\t\t}\n\t\t\t}\n\t\t\tbreak;\n\t\t}\n\t\tif (dirs.length == 0) {\n\t\t\tcore.drawTip(\"推不动！\");\n\t\t\tif (!core.isReplaying()) core.playSound(\"002-System02.ogg\");\n\t\t} else {\n\t\t\tvar push_time = 100;\n\t\t\tif (core.isReplaying()) push_time = 10;\n\t\t\tactions.push({ \"type\": \"move\", \"loc\": [core.nextX(), core.nextY()], \"steps\": dirs, \"time\": push_time, \"keep\": true });\n\t\t\tcore.autosave();\n\t\t\tcore.status.hero.mana -= cost;\n\t\t\tif (core.plugin.getTalentLv(3) == 5) {\n\t\t\t\tcore.addFlag(\"talent3_up5_spe\", 1);\n\t\t\t\tif (core.getFlag(\"talent3_up5_spe\", 0) >= 20) {\n\t\t\t\t\tcore.drawHeroAnimate(\"yongchang\");\n\t\t\t\t\tif (core.getFlag(\"autoUpgradeTalent\", 0) > 0) core.plugin._tryUpgrade(3);\n\t\t\t\t}\n\t\t\t} else if (core.plugin.getTalentLv(3) == 8) {\n\t\t\t\tcore.addFlag(\"talent3_up8_spe\", 1);\n\t\t\t\tvar need = 50;\n\t\t\t\tif (flags.hard == 1) need = 35;\n\t\t\t\tif (core.getFlag(\"talent3_up8_spe\", 0) >= need) {\n\t\t\t\t\tcore.drawHeroAnimate(\"yongchang\");\n\t\t\t\t\tif (core.getFlag(\"autoUpgradeTalent\", 0) > 0) core.plugin._tryUpgrade(3);\n\t\t\t\t}\n\t\t\t}\n\t\t\tcore.drawAnimate(\"skill3\", core.nextX(), core.nextY());\n\t\t\tcore.insertAction(actions);\n\t\t}\n\t}\n}",
		"canUseItemEffect": "(function () {\n\treturn true;\n})();"
	},
	"talentTree": {
		"cls": "constants",
		"name": "神秘徽章",
		"useItemEffect": "core.plugin.openSkillTree();",
		"category": "永久道具",
		"canUseItemEffect": "core.getFlag(\"talentTree_unlocked\", false) && !core.getFlag(\"talentTree_isOpen\", false)",
		"text": "${flag:talentTree_description}",
		"hideInReplay": true
	},
	"I_breakDoor": {
		"cls": "constants",
		"name": "砸门",
		"text": "${flag:skill4_description}",
		"useItemEffect": "(function () {\n\tcore.status.hero.mana -= 50;\n\tcore.removeBlock(core.nextX(), core.nextY());\n\tcore.drawAnimate(\"crossattack\", core.nextX(), core.nextY());\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.getBlockId(core.nextX(), core.nextY()) == 'yellowDoor';\n})();",
		"category": "主动技能",
		"hideInToolbox": false,
		"hideInReplay": true
	},
	"skill4": {
		"cls": "constants",
		"name": "【主动】放置莱姆",
		"category": "主动技能",
		"text": "${flag:skill4_description}",
		"useItemEffect": "var cost = core.getFlag(\"skill4_cost\", 100);\nvar nx = core.nextX(1),\n\tny = core.nextY(1);\nvar enabled = nx >= 0 && nx < core.bigmap.width && ny >= 0 && ny < core.bigmap.height &&\n\tcore.getBlockId(nx, ny, null, true) == null;\nif (core.status.hero.mana < cost) {\n\tcore.drawTip(\"能量不足。\");\n\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n} else if (!enabled) {\n\tcore.drawTip(\"面前不是空地，无法使用。\");\n\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n} else {\n\tcore.autosave();\n\tcore.status.hero.mana -= cost;\n\tvar res = core.getFlag(\"skill4_result\", \"E527\");\n\tcore.insertAction({ \"type\": \"setBlock\", \"number\": res, \"loc\": [core.nextX(1), core.nextY(1)] });\n\tcore.drawAnimate(\"yongchang\", core.nextX(1), core.nextY(1));\n}",
		"canUseItemEffect": "true",
		"hideInReplay": true
	},
	"sword6": {
		"cls": "equips",
		"name": "噬魂之锋",
		"text": "据说会逐渐侵蚀使用者的灵魂。攻击+70%，防御+60%，护盾-40%，前10次攻击吸取10%生命。",
		"equip": {
			"type": 0,
			"animate": "jianji2",
			"value": {},
			"percentage": {
				"mdef": -40,
				"def": 60,
				"atk": 70
			}
		},
		"itemEffect": "core.status.hero.def += 0",
		"itemEffectTip": "，防御+0"
	},
	"sword7": {
		"cls": "equips",
		"name": "无锋重剑",
		"equip": {
			"type": 0,
			"animate": "skill2",
			"value": {},
			"percentage": {
				"def": 70,
				"atk": 40
			}
		},
		"text": "像盾牌的重剑。攻击+40%，防御+70%，令每点护盾额外抵挡0.35点伤害。"
	},
	"hugeGreenPotion": {
		"cls": "items",
		"name": "巨绿血瓶",
		"itemEffect": "core.status.hero.hp += 100 * core.values.greenPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)",
		"itemEffectTip": "，生命+${core.formatBigNumber(100*core.values.greenPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1))}"
	},
	"hugeRedPotion": {
		"cls": "items",
		"name": "巨红血瓶",
		"itemEffect": "core.status.hero.hp += 100 * core.values.redPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)",
		"itemEffectTip": "，生命+${core.formatBigNumber(100*core.values.redPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1))}"
	},
	"hugeBluePotion": {
		"cls": "items",
		"name": "巨蓝血瓶",
		"itemEffect": "core.status.hero.hp += 100 * core.values.bluePotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)",
		"itemEffectTip": "，生命+${core.formatBigNumber(100*core.values.bluePotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1))}"
	},
	"hugeYellowPotion": {
		"cls": "items",
		"name": "巨黄血瓶",
		"itemEffect": "core.status.hero.hp += 100 * core.values.yellowPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)",
		"itemEffectTip": "，生命+${core.formatBigNumber(100*core.values.yellowPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1))}"
	},
	"skill5": {
		"cls": "constants",
		"name": "鸽化",
		"canUseItemEffect": "!(core.getFlag(\"skill5_is_on\", false)) || (core.getTalentLv(10) > 0) || (core.getTalentLv(12) > 0)",
		"category": "主动技能",
		"text": "${flag:skill5_description}冷却剩余${flag:skill5_cd}次战斗。",
		"useItemEffect": "if (core.getFlag(\"skill5_cd\", 0) > 0) {\n\tcore.drawTip(\"还需经过\" + core.getFlag(\"skill5_cd\", 0) + \"次战斗才能使用。\");\n\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n} else {\n\tif (core.getTalentLv(10) > 0) { // 攻防\n\t\tif (core.getFlag(\"skill5_is_on\", false)) { // 手动关闭\n\t\t\tcore.autosave();\n\t\t\tcore.insertCommonEvent(\"AD不鸽了\");\n\t\t} else {\n\t\t\tvar cost = 0;\n\t\t\tif (core.status.hero.mana < cost) {\n\t\t\t\tcore.drawTip(\"能量不足。\");\n\t\t\t\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n\t\t\t} else {\n\t\t\t\tcore.autosave();\n\t\t\t\tcore.status.hero.mana -= cost;\n\t\t\t\tcore.insertCommonEvent(\"鸽化AD\");\n\t\t\t}\n\t\t}\n\t} else if (core.getTalentLv(11) > 0) { // 攻盾\n\t\tvar cost = 60;\n\t\tif (core.status.hero.mana < cost) {\n\t\t\tcore.drawTip(\"能量不足。\");\n\t\t\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n\t\t} else {\n\t\t\tcore.autosave();\n\t\t\tcore.status.hero.mana -= cost;\n\t\t\tcore.insertCommonEvent(\"鸽化AM\");\n\t\t}\n\t} else if (core.getTalentLv(12) > 0) { // 防盾\n\t\tif (core.getFlag(\"skill5_is_on\", false)) { // 手动关闭\n\t\t\tcore.autosave();\n\t\t\tcore.insertCommonEvent(\"DM不鸽了\");\n\t\t} else {\n\t\t\tvar cost = 0;\n\t\t\tif (core.status.hero.mana < cost) {\n\t\t\t\tcore.drawTip(\"能量不足。\");\n\t\t\t\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n\t\t\t} else {\n\t\t\t\tcore.autosave();\n\t\t\t\tcore.status.hero.mana -= cost;\n\t\t\t\tcore.insertCommonEvent(\"鸽化DM\");\n\t\t\t}\n\t\t}\n\t}\n}",
		"hideInReplay": true
	},
	"I592": {
		"cls": "tools",
		"name": "珍藏版绿钥匙-2",
		"category": "消耗道具",
		"text": "【荣誉物品】前两章剩余的绿钥匙，与之后的绿钥匙相独立。",
		"canUseItemEffect": "false",
		"hideInReplay": true
	},
	"DScore": {
		"cls": "tools",
		"name": "副本分数",
		"itemEffect": null,
		"itemEffectTip": null,
		"category": "消耗道具",
		"canUseItemEffect": "false",
		"text": "副本挑战模式的分数"
	},
	"skill6": {
		"cls": "constants",
		"name": "【主动】后抛",
		"text": "将面前的敌人扔到自己身后，消耗${flag:skill6_cost}能量。对拥有特殊头衔的敌人无效。${flag:skill6_extra_description||\"\"}快捷键1。",
		"category": "主动技能",
		"hideInReplay": true,
		"canUseItemEffect": "(function () {\n\treturn true;\n})();",
		"useItemEffect": "var cost = core.getFlag(\"skill6_cost\", 641);\nif (core.status.hero.mana < cost) {\n\tcore.drawTip(\"能量不足。\");\n\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n} else {\n\tvar nextX = core.nextX();\n\tvar nextY = core.nextY();\n\tvar cls = core.getBlockCls(nextX, nextY);\n\tvar dir = core.status.hero.loc.direction;\n\tvar arrays = core.maps._generateMovableArray_arrays(core.status.floorId);\n\n\tvar time = 500;\n\tif (core.isReplaying()) time = 10;\n\tvar actions = [];\n\tvar dxy, back_id;\n\tif (cls != \"enemys\" && cls != \"enemy48\") {\n\t\tvar tmp_id = core.getBlockId(nextX, nextY);\n\t\tvar can_throw_id_list = [\"yellowDoor\", \"yellowKey\", \"blueKey\", \"redKey\", \"redPotion\", \"bluePotion\", \"yellowPotion\", \"greenPotion\", \"bigRedPotion\", \"bigBluePotion\", \"bigYellowPotion\", \"bigGreenPotion\", \"manaItem\", \"hugeRedPotion\", \"hugeBluePotion\", \"hugeYellowPotion\", \"hugeGreenPotion\"];\n\t\tif (core.getTalentLv2(6) == 1 && can_throw_id_list.indexOf(tmp_id) >= 0) { // 抛门\n\t\t\tswitch (dir) {\n\t\t\tcase \"up\":\n\t\t\t\tback_id = core.getBlockId(nextX, nextY + 2);\n\t\t\t\tdxy = [0, 2];\n\t\t\t\tbreak;\n\t\t\tcase \"left\":\n\t\t\t\tback_id = core.getBlockId(nextX + 2, nextY);\n\t\t\t\tdxy = [2, 0];\n\t\t\t\tbreak;\n\t\t\tcase \"right\":\n\t\t\t\tback_id = core.getBlockId(nextX - 2, nextY);\n\t\t\t\tdxy = [-2, 0];\n\t\t\t\tbreak;\n\t\t\tcase \"down\":\n\t\t\t\tback_id = core.getBlockId(nextX, nextY - 2);\n\t\t\t\tdxy = [0, -2];\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tvar targetX = nextX + dxy[0];\n\t\t\tvar targetY = nextY + dxy[1];\n\t\t\tvar should_throw = targetX >= 0 && targetX < core.bigmap.width && targetY >= 0 && targetY < core.bigmap.height && back_id == null;\n\t\t\tif (should_throw) {\n\t\t\t\tcore.autosave();\n\t\t\t\tif (core.status.hero.followers.length > 0) {\n\t\t\t\t\tactions.push({ \"type\": \"unfollow\", \"name\": \"hero3.png\" }, { \"type\": \"follow\", \"name\": \"hero3.png\" });\n\t\t\t\t}\n\t\t\t\tactions.push({ \"type\": \"jump\", \"from\": [nextX, nextY], \"dxy\": dxy, \"time\": time, \"keep\": true });\n\t\t\t\tcore.status.hero.mana -= cost;\n\t\t\t\tcore.drawAnimate(\"skill6\", nextX, nextY);\n\t\t\t\tcore.insertAction(actions);\n\t\t\t} else {\n\t\t\t\tcore.drawTip(\"背后不是空地！\");\n\t\t\t\tif (!core.isReplaying()) core.playSound(\"002-System02.ogg\");\n\t\t\t}\n\t\t} else {\n\t\t\tcore.drawTip(\"没有可抛掷的物体。\");\n\t\t\tif (!core.isReplaying()) core.playSound(\"002-System02.ogg\");\n\t\t\t// return here\n\t\t}\n\t} else {\n\t\tvar mon_id = core.getBlockId(nextX, nextY);\n\t\tvar enemy = core.material.enemys[mon_id];\n\t\tvar can_throw = enemy.title == null || enemy.title == \"普通\";\n\t\tswitch (dir) {\n\t\tcase \"up\":\n\t\t\tback_id = core.getBlockId(nextX, nextY + 2);\n\t\t\tdxy = [0, 2];\n\t\t\tbreak;\n\t\tcase \"left\":\n\t\t\tback_id = core.getBlockId(nextX + 2, nextY);\n\t\t\tdxy = [2, 0];\n\t\t\tbreak;\n\t\tcase \"right\":\n\t\t\tback_id = core.getBlockId(nextX - 2, nextY);\n\t\t\tdxy = [-2, 0];\n\t\t\tbreak;\n\t\tcase \"down\":\n\t\t\tback_id = core.getBlockId(nextX, nextY - 2);\n\t\t\tdxy = [0, -2];\n\t\t\tbreak;\n\t\t}\n\t\tvar targetX = nextX + dxy[0];\n\t\tvar targetY = nextY + dxy[1];\n\t\tvar should_throw = targetX >= 0 && targetX < core.bigmap.width && targetY >= 0 && targetY < core.bigmap.height && back_id == null;\n\t\tif (!can_throw) {\n\t\t\tcore.drawTip(\"扔不动！\");\n\t\t\tif (!core.isReplaying()) core.playSound(\"002-System02.ogg\");\n\t\t} else if (should_throw) {\n\t\t\tcore.autosave();\n\t\t\tif (core.status.hero.followers.length > 0) {\n\t\t\t\tactions.push({ \"type\": \"unfollow\", \"name\": \"hero3.png\" }, { \"type\": \"follow\", \"name\": \"hero3.png\" });\n\t\t\t}\n\t\t\tactions.push({ \"type\": \"jump\", \"from\": [nextX, nextY], \"dxy\": dxy, \"time\": time, \"keep\": true });\n\t\t\tcore.status.hero.mana -= cost;\n\t\t\tcore.drawAnimate(\"skill6\", nextX, nextY);\n\t\t\tcore.insertAction(actions);\n\t\t} else if (core.getTalentLv2(1) > 0) { // 气旋\n\t\t\tcore.autosave();\n\t\t\t// 背后不是空地，强制战斗\n\t\t\tcore.setFlag(\"skill6_battle\", 1);\n\t\t\tactions.push({ \"type\": \"jump\", \"from\": [nextX, nextY], \"dxy\": [0, 0], \"time\": time, \"keep\": true }, { \"type\": \"battle\", \"loc\": [nextX, nextY] });\n\t\t\tcore.status.hero.mana -= cost;\n\t\t\tcore.drawAnimate(\"skill6\", nextX, nextY);\n\t\t\tcore.insertAction(actions);\n\t\t} else {\n\t\t\tcore.drawTip(\"背后不是空地！\");\n\t\t\tif (!core.isReplaying()) core.playSound(\"002-System02.ogg\");\n\t\t}\n\t}\n}"
	},
	"redGem5": {
		"cls": "items",
		"name": "五阶红宝石",
		"itemEffect": "core.status.hero.atk += 16 * core.values.redGem * core.status.thisMap.ratio",
		"itemEffectTip": "，攻击+${16*core.values.redGem * core.status.thisMap.ratio}"
	},
	"blueGem5": {
		"cls": "items",
		"name": "五阶蓝宝石",
		"itemEffect": "core.status.hero.def += 16 * core.values.blueGem * core.status.thisMap.ratio",
		"itemEffectTip": "，防御+${16*core.values.blueGem * core.status.thisMap.ratio}"
	},
	"blueGem6": {
		"cls": "items",
		"name": "六阶蓝宝石",
		"itemEffect": "core.status.hero.def += 32 * core.values.blueGem * core.status.thisMap.ratio",
		"itemEffectTip": "，防御+${32*core.values.blueGem * core.status.thisMap.ratio}"
	},
	"blueGem7": {
		"cls": "items",
		"name": "七阶蓝宝石",
		"itemEffect": "core.status.hero.def += 64 * core.values.blueGem * core.status.thisMap.ratio",
		"itemEffectTip": "，防御+${64*core.values.blueGem * core.status.thisMap.ratio}"
	},
	"blueGem8": {
		"cls": "items",
		"name": "八阶蓝宝石",
		"itemEffect": "core.status.hero.def += 128 * core.values.blueGem * core.status.thisMap.ratio",
		"itemEffectTip": "，防御+${128*core.values.blueGem * core.status.thisMap.ratio}"
	},
	"redGem6": {
		"cls": "items",
		"name": "六阶红宝石",
		"itemEffect": "core.status.hero.atk += 32 * core.values.redGem * core.status.thisMap.ratio",
		"itemEffectTip": "，攻击+${32*core.values.redGem * core.status.thisMap.ratio}"
	},
	"redGem7": {
		"cls": "items",
		"name": "七阶红宝石",
		"itemEffect": "core.status.hero.atk += 64 * core.values.redGem * core.status.thisMap.ratio",
		"itemEffectTip": "，攻击+${64 * core.values.redGem * core.status.thisMap.ratio}"
	},
	"redGem8": {
		"cls": "items",
		"name": "八阶红宝石",
		"itemEffect": "core.status.hero.atk += 128 * core.values.redGem * core.status.thisMap.ratio",
		"itemEffectTip": "，攻击+${128*core.values.redGem * core.status.thisMap.ratio}"
	},
	"greenGem5": {
		"cls": "items",
		"name": "五阶绿宝石",
		"itemEffect": "core.status.hero.mdef += 16 * core.values.greenGem * core.status.thisMap.ratio",
		"itemEffectTip": "，护盾+${16*core.values.greenGem * core.status.thisMap.ratio}"
	},
	"greenGem6": {
		"cls": "items",
		"name": "六阶绿宝石",
		"itemEffect": "core.status.hero.mdef += 32 * core.values.greenGem * core.status.thisMap.ratio",
		"itemEffectTip": "，护盾+${32*core.values.greenGem * core.status.thisMap.ratio}"
	},
	"greenGem7": {
		"cls": "items",
		"name": "七阶绿宝石",
		"itemEffect": "core.status.hero.mdef += 64 * core.values.greenGem * core.status.thisMap.ratio",
		"itemEffectTip": "，护盾+${64*core.values.greenGem * core.status.thisMap.ratio}"
	},
	"greenGem8": {
		"cls": "items",
		"name": "八阶绿宝石",
		"itemEffect": "core.status.hero.mdef += 128 * core.values.greenGem * core.status.thisMap.ratio",
		"itemEffectTip": "，护盾+${128*core.values.greenGem * core.status.thisMap.ratio}"
	},
	"sword8": {
		"cls": "equips",
		"name": "神圣剑",
		"equip": {
			"type": 0,
			"animate": "sword8",
			"value": {
				"atk": 6000
			},
			"percentage": {}
		},
		"text": "远古时代的传说级装备，攻击+6000"
	},
	"shield8": {
		"cls": "equips",
		"name": "神圣盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 6000
			},
			"percentage": {}
		},
		"text": "远古时代的传说级装备，防御+6000"
	},
	"skill7": {
		"cls": "constants",
		"name": "【主动】潜行",
		"category": "主动技能",
		"text": "进入隐身状态，不会触发地图伤害，持续到下次进行战斗前。消耗${flag:skill7_cost}能量。主动取消或完成总伤害不大于0的战斗会返还${flag:skill7_cancel_return_cost}点能量。快捷键2。",
		"hideInReplay": true,
		"canUseItemEffect": "(function () {\n\treturn true;\n})();",
		"useItemEffect": "var cost = core.getFlag(\"skill7_cost\", 100);\nif (core.getFlag(\"invisible\", 0) == 0) {\n\tif (core.status.hero.mana < cost) {\n\t\tcore.drawTip(\"能量不足。\");\n\t\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n\t} else {\n\t\tcore.status.hero.mana -= cost;\n\t\tcore.insertCommonEvent(\"进入隐身\");\n\t}\n} else {\n\tif (core.getFlag(\"invisible_moved\") == 2221) {\n\t\tcore.status.hero.mana += cost;\n\t\tcore.insertCommonEvent(\"退出隐身\", [0]);\n\t\tcore.insertAction({\n\t\t\t\"type\": \"choices\",\n\t\t\t\"text\": \"\\t[系统提示]恭喜获得成就【薅羊毛】！这多出来的25能量就作为奖励送给你了。\",\n\t\t\t\"choices\": [{\n\t\t\t\t\"text\": \"？？？！\",\n\t\t\t\t\"action\": []\n\t\t\t}, ]\n\t\t});\n\t} else if (core.getFlag(\"invisible_moved\") == 0) {\n\t\tcore.status.hero.mana += cost;\n\t\tcore.insertCommonEvent(\"退出隐身\", [0]);\n\t} else {\n\t\tcore.insertCommonEvent(\"退出隐身\", [1]);\n\t}\n}"
	},
	"talentTree2": {
		"cls": "constants",
		"name": "魔法书",
		"category": "永久道具",
		"useItemEffect": "core.plugin.openSkillTree2();",
		"canUseItemEffect": "!core.getFlag(\"talentTree_isOpen\", false)",
		"hideInReplay": true,
		"text": "神秘的魔法书，开启第四章前篇的天赋树"
	},
	"I_noVampire": {
		"cls": "constants",
		"name": "仙域甲",
		"category": "永久道具",
		"text": "无视敌人的吸血属性",
		"canUseItemEffect": true,
		"useItemEffect": "core.insertAction(\"为对付吸血属性专门设计的铠甲，但无法应对许多伪吸血属性，比如 窥 血 为 攻。\");"
	},
	"I_zzzl": {
		"cls": "constants",
		"name": "至尊之录",
		"category": "永久道具",
		"canUseItemEffect": true,
		"useItemEffect": "core.insertCommonEvent(\"至尊之录\");",
		"text": "不知是谁写的",
		"hideInReplay": true
	},
	"skill8": {
		"cls": "constants",
		"name": "【主动】跳跃",
		"category": "主动技能",
		"useItemEffect": "var nx = core.nextX(2),\n\tny = core.nextY(2);\nvar canjump = nx >= 0 && nx < core.bigmap.width && ny >= 0 && ny < core.bigmap.height && core.getBlockId(nx, ny) == null;\nvar reason = \"落脚点不是空地！\";\nif (core.plugin.getTalentLv2(3) < 1) {\n\tvar block_class = core.getBlockCls(core.nextX(1), core.nextY(1));\n\tif (core.getBlockId(core.nextX(1), core.nextY(1)) != null && block_class != \"enemys\" && block_class != \"enemy48\" && block_class != \"items\") {\n\t\tcanjump = false;\n\t\treason = \"只能跃过敌人或物品上方！\";\n\t}\n}\nvar cost = 200;\nif (canjump) {\n\tif (core.status.hero.mana < cost) {\n\t\tcore.drawTip(\"能量不足。\");\n\t\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n\t} else {\n\t\tcore.autosave();\n\t\tcore.status.hero.mana -= cost;\n\t\tcore.drawHeroAnimate(\"skill6\");\n\t\tvar actions = [{ \"type\": \"jumpHero\", \"loc\": [nx, ny] }];\n\t\tif (core.getFlag(\"talent2_7_lv\", 0) > 0) {\n\t\t\tactions.push({ \"type\": \"insert\", \"name\": \"skill8buff\" });\n\t\t}\n\t\tcore.insertAction(actions);\n\t}\n} else {\n\tcore.drawTip(reason);\n\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n}",
		"canUseItemEffect": true,
		"hideInReplay": true,
		"text": "跳跃到前方两格的空地，消耗200能量。${flag:skill8_extra_description||\"\"}快捷键3。"
	},
	"I_Chap4Shop4": {
		"cls": "items",
		"name": "快捷商店4",
		"text": "打开第四章的商店，快捷键V",
		"canUseItemEffect": "(function () {\n\treturn true;\n})();",
		"useItemEffect": "core.openShop(\"Chap4Shop4\");",
		"category": "永久道具",
		"hideInReplay": true
	},
	"I_greenKeyCh3": {
		"cls": "tools",
		"name": "珍藏版绿钥匙-3",
		"text": "【荣誉物品】第三章和第四章省下来的绿钥匙，与之后的绿钥匙相独立。",
		"hideInReplay": true,
		"canUseItemEffect": "false",
		"category": "消耗道具",
		"useItemEffect": null
	},
	"I_superGreenKey": {
		"cls": "constants",
		"name": "万能绿钥匙",
		"canUseItemEffect": true,
		"category": "永久道具",
		"text": "能够无限制地开启绿门",
		"useItemEffect": "core.insertAction(\"再也不用纠结要不要开绿门了——虽然，有些人从来都没纠结过。\");"
	},
	"skill9": {
		"cls": "constants",
		"name": "至尊飞升",
		"canUseItemEffect": "true",
		"text": "每次战斗后，攻防盾永久提升1%",
		"category": "被动技能",
		"useItemEffect": "core.insertAction(\"这个技能竟然不是上勾拳？\");",
		"hideInReplay": true
	},
	"skill10": {
		"cls": "constants",
		"name": "【主动】毁灭重拳",
		"canUseItemEffect": "true",
		"category": "主动技能",
		"text": "向前冲刺最多${flag:skill10_range}格，拾取沿途的物品；停止时降低3*3范围内所有敌人${core.formatBigNumber(flag:skill10_ddef)}点防御，不可叠加；${flag:skill10_desc2}，然后临时护盾衰减1步。${flag:skill10_desc3}消耗${flag:skill10_cost+core.getTalentLv3(3)}能量。快捷键1。\\n",
		"hideInReplay": true,
		"useItemEffect": "var cost = core.getFlag(\"skill10_cost\", 0) + core.getTalentLv3(3);\nif (core.status.hero.mana < cost) {\n\tcore.drawTip(\"能量不足。\");\n\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n} else {\n\tvar actions = [],\n\t\tactions2 = [];\n\tvar nextX = core.nextX();\n\tvar nextY = core.nextY();\n\tvar cls = core.getBlockCls(nextX, nextY);\n\tvar dir = core.status.hero.loc.direction;\n\tvar arrays = core.maps._generateMovableArray_arrays(core.status.floorId);\n\tvar range_remain = core.getFlag(\"skill10_range\", 2221);\n\tvar prevX = core.status.hero.loc.x,\n\t\tprevY = core.status.hero.loc.y;\n\tvar autopickitems = true;\n\tif (cls != \"enemys\" && cls != \"enemy48\") { // 推自己\n\t\tvar id = core.getBlockId(nextX, nextY);\n\t\tvar func1 = function (name) { return arrays[name][prevY][prevX]; };\n\t\tvar func2 = function (name) { return arrays[name][nextY][nextX]; };\n\t\twhile (range_remain > 0 && (id == null || (autopickitems && cls == \"items\")) &&\n\t\t\tnextX >= 0 && nextY >= 0 && nextX < core.bigmap.width && nextY < core.bigmap.height &&\n\t\t\t!core.maps._canMoveHero_checkCannotInOut(Object.keys(arrays).map(func1), \"cannotOut\", dir) &&\n\t\t\t!core.maps._canMoveHero_checkCannotInOut(Object.keys(arrays).map(func2), \"cannotIn\", dir)) {\n\t\t\tif (autopickitems && cls == \"items\") {\n\t\t\t\t//actions2.push({ \"type\": \"function\", \"function\": \"function(){core.trigger(\" + nextX + \",\" + nextY + \");}\" });\n\t\t\t\tactions2.push({ \"type\": \"function\", \"function\": \"function(){core.events.getNextItem(true);}\" });\n\t\t\t}\n\t\t\tactions2.push({ \"type\": \"moveHero\", \"time\": 37, \"steps\": [dir] });\n\t\t\trange_remain -= 1;\n\t\t\tswitch (dir) {\n\t\t\tcase \"up\":\n\t\t\t\tprevY = nextY;\n\t\t\t\tnextY -= 1;\n\t\t\t\tbreak;\n\t\t\tcase \"down\":\n\t\t\t\tprevY = nextY;\n\t\t\t\tnextY += 1;\n\t\t\t\tbreak;\n\t\t\tcase \"left\":\n\t\t\t\tprevX = nextX;\n\t\t\t\tnextX -= 1;\n\t\t\t\tbreak;\n\t\t\tcase \"right\":\n\t\t\t\tprevX = nextX;\n\t\t\t\tnextX += 1;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tid = core.getBlockId(nextX, nextY);\n\t\t\tcls = core.getBlockCls(nextX, nextY);\n\t\t}\n\t\tif (actions2.length > 0) {\n\t\t\t// 这里的另一种实现方式是用 moveAction，不同之处在于 moveAction 默认情况下会触发地图伤害\n\t\t\t//actions.push({ \"type\": \"function\", \"function\": \"function(){core.setFlag('originalMovespeed',core.values.moveSpeed); core.values.moveSpeed = 37; }\" });\n\t\t\tactions.push({ \"type\": \"setValue\", \"name\": \"flag:moveShadow\", \"value\": \"1\" }, { \"type\": \"setValue\", \"name\": \"flag:skill10Moving\", \"value\": \"1\" }, { \"type\": \"playSound\", \"name\": \"skill10pre.mp3\" });\n\t\t\tfor (var i in actions2) {\n\t\t\t\tactions.push(actions2[i]);\n\t\t\t}\n\t\t\tactions.push({ \"type\": \"setValue\", \"name\": \"flag:moveShadow\", \"value\": \"0\" }, { \"type\": \"setValue\", \"name\": \"flag:skill10Moving\", \"value\": \"0\" });\n\t\t\t//actions.push({ \"type\": \"function\", \"function\": \"function(){core.values.moveSpeed = core.getFlag('originalMovespeed',100);core.removeFlag('originalMovespeed');}\" });\n\t\t}\n\t}\n\n\tactions.push({ \"type\": \"vibrate\", \"direction\": \"horizontal\", \"time\": 100, \"speed\": 10, \"power\": 10, \"async\": true }, { \"type\": \"animate\", \"name\": \"darkexplode\", \"loc\": \"hero\", \"async\": true });\n\n\t// deal damage\n\tactions.push({ \"type\": \"function\", \"function\": \"function(){\\ncore.plugin.doSkill10();\\n}\" });\n\n\t// 这里逻辑与 doSkill10 重复\n\tvar cnt = 0,\n\t\trange = 1;\n\tfor (var i = prevX - range; i <= prevX + range; ++i) {\n\t\tfor (var j = prevY - range; j <= prevY + range; ++j) {\n\t\t\tif (core.plugin.isEnemy(i, j)) {\n\t\t\t\tcnt += 1;\n\t\t\t}\n\t\t}\n\t}\n\tif (cnt == 0) {\n\t\tcost -= core.getFlag(\"skill10_ret_mana\", 0);\n\t}\n\tcore.autosave();\n\tcore.addFlag(\"skill10_use_time\", 1);\n\tcore.addFlag(\"skill10_hit_enemy\", cnt);\n\tcore.status.hero.mana -= cost;\n\t/*\n\tif (core.getTalentLv3(1) == 1 && core.getFlag(\"skill10_use_time\") >= 10) {\n\t\tcore.drawHeroAnimate(\"yongchang\");\n\t\tif (core.getFlag(\"autoUpgradeTalent\", 0) > 0) core.plugin._tryUpgrade3(1);\n\t} else if (core.getTalentLv3(1) == 2 && core.getFlag(\"skill10_hit_enemy\") >= 50) {\n\t\tcore.drawHeroAnimate(\"yongchang\");\n\t\tif (core.getFlag(\"autoUpgradeTalent\", 0) > 0) {\n\t\t\tcore.plugin._tryUpgrade3(1);\n\t\t\tif (core.getTalentLv3(3) >= 25) { core.plugin._tryUpgrade3(1); }\n\t\t\tif (core.getTalentLv3(3) >= 60) { core.plugin._tryUpgrade3(1); }\n\t\t}\n\t}*/\n\tactions.push({ \"type\": \"function\", \"function\": \"function(){\\nif (core.getTalentLv3(1) == 1 && core.getFlag(\\\"skill10_use_time\\\") >= 10) {\\n\\tcore.drawHeroAnimate(\\\"yongchang\\\");\\n\\tif (core.getFlag(\\\"autoUpgradeTalent\\\", 0) > 0) core.plugin._tryUpgrade3(1);\\n} else if (core.getTalentLv3(1) == 2 && core.getFlag(\\\"skill10_hit_enemy\\\") >= 50) {\\n\\tcore.drawHeroAnimate(\\\"yongchang\\\");\\n\\tif (core.getFlag(\\\"autoUpgradeTalent\\\", 0) > 0) {\\n\\t\\tcore.plugin._tryUpgrade3(1);\\n\\t\\tif (core.getTalentLv3(3) >= 25) { core.plugin._tryUpgrade3(1); }\\n\\t\\tif (core.getTalentLv3(3) >= 60) { core.plugin._tryUpgrade3(1); }\\n\\t}\\n}\\n}\" });\n\tcore.insertAction(actions);\n}"
	},
	"skill11": {
		"cls": "constants",
		"name": "【被动】最佳防守",
		"canUseItemEffect": "true",
		"text": "每次战斗后获得1层临时护盾，每移动一步失去${flag:skill11_decay_pp / 100}层。每层临时护盾提供${flag:skill11_add}%基础护盾值，最多拥有${flag:skill11_upbound}层。当前拥有${flag:temp_mdef_pp||0}%基础值（${flag:temp_mdef_pp*core.status.hero.mdef/100||0}点）临时护盾。转换地图后层数清零。${flag:skill11_desc || \"\"}\\n",
		"hideInReplay": true,
		"category": "被动技能",
		"useItemEffect": "core.insertAction(\"每次战斗后获得\\r[yellow]\" + core.getFlag(\"skill11_add\") + \"%\\r基础护盾值的临时护盾，每移动一步失去\\r[yellow]\" + (core.getFlag(\"skill11_add\") * core.getFlag(\"skill11_decay_pp\") / 100) + \"%\\r护盾；最多拥有\\r[yellow]\" + (core.getFlag(\"skill11_add\") * core.getFlag(\"skill11_upbound\")) + \"%\\r的临时护盾。\\n当前拥有\\r[orange]\" + core.getFlag(\"temp_mdef_pp\") + \"%\\r基础值（\\r[green]\" + core.status.hero.mdef + \"\\r），\\n共\\r[lime]\" + core.getFlag(\"temp_mdef_pp\") * core.status.hero.mdef / 100 + \"\\r点临时护盾。\");"
	},
	"skill12": {
		"cls": "constants",
		"name": "【主动】裂地重拳",
		"canUseItemEffect": "true",
		"category": "主动技能",
		"text": "跳向面前2格，落地后触发面前一排三格的物体，并将面前第二排三格的物体拉向自身；受到此技能作用的敌人降低${core.formatBigNumber(flag:skill12_datk)}点攻击，不可叠加；每击中一个敌人获得${flag:skill12_hit_ret}能量，并回复临时护盾数值${flag:skill12_drain_ratio}%的生命。消耗${flag:skill12_cost + core.getTalentLv3(3)}点能量。快捷键2。\\n",
		"hideInReplay": true,
		"useItemEffect": "core.insertCommonEvent(\"doSkill12\");"
	},
	"skill13": {
		"cls": "constants",
		"name": "【奥义】毁 天 灭 地",
		"canUseItemEffect": "(function () {\n\tvar toX = core.getFlag(\"temp_skill13_x\"),\n\t\ttoY = core.getFlag(\"temp_skill13_y\");\n\tvar id = core.getBlockId(toX, toY);\n\treturn id == null || core.plugin.isEnemy(toX, toY) || core.getBlockCls(toX, toY) == \"items\";\n})();",
		"text": "跳到空中，然后落在原地或者中心对称位置的空地/物品/敌人头上。落地后降低附近敌人${core.formatBigNumber(flag:skill13_datk)}点攻防（不与其他技能效果叠加），并造成满额临时护盾爆炸的范围伤害；对落点处敌人造成的伤害加倍，并且强制与其战斗。之后获得3层临时护盾。每次使用本技能后消耗变为2000能量，每次战斗后消耗降低${flag:skill13_cost_reduce}点，当前消耗为${flag:skill13_cost}点。快捷键3。",
		"category": "主动技能",
		"hideInReplay": true,
		"useItemEffect": "core.insertCommonEvent(\"毁天灭地\");\n/*core.playSound('DF_q_1.mp3');\ncore.playSound('DF_q_2.mp3');\ncore.clearMap('hero');\ncore.setHeroLoc('x', core.bigmap.width - 1 - core.getHeroLoc('x'));\ncore.setHeroLoc('y', core.bigmap.height - 1 - core.getHeroLoc('y'));\ncore.drawHero();\ncore.drawTip(core.material.items[itemId].name + '使用成功');*/"
	},
	"talentTree3": {
		"cls": "constants",
		"name": "毁灭拳套",
		"canUseItemEffect": "!core.getFlag(\"talentTree_isOpen\", false)",
		"category": "永久道具",
		"hideInReplay": true,
		"useItemEffect": "core.plugin.openSkillTree3();",
		"text": "蕴含惊人力量的拳套，开启第四章后篇的天赋树，快捷键V"
	},
	"I_config": {
		"cls": "constants",
		"name": "系统设置",
		"canUseItemEffect": "true",
		"hideInReplay": true,
		"category": "永久道具",
		"useItemEvent": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "if",
						"condition": "flag:config_page == 0",
						"true": [
							{
								"type": "choices",
								"text": "\t[系统设置]",
								"choices": [
									{
										"text": "返回",
										"action": [
											{
												"type": "exit"
											}
										]
									},
									{
										"text": "使用作者推荐的设置",
										"color": [
											255,
											215,
											0,
											1
										],
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.setFlag('autoGetItem', 1);\ncore.setFlag('autoBattle', 1);\ncore.setFlag('itemDetail', 0);\ncore.setFlag('MonHPMode', 0);\ncore.setFlag('autoUpgradeTalent', 1);\ncore.updateDamage();\n}"
											},
											"设置完成！"
										]
									},
									{
										"text": "自动拾取: ${core.getFlag(\"autoGetItem\",0)==1?\"On\":\"Off\"}",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.getFlag('autoGetItem', 0) == 0 ? core.setFlag('autoGetItem', 1) : core.setFlag('autoGetItem', 0);\n}"
											}
										]
									},
									{
										"text": "自动清怪: ${core.getFlag(\"autoBattle\",0)==1?\"On\":\"Off\"}",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.getFlag(\"autoBattle\", 0) == 0 ? core.setFlag('autoBattle', 1) : core.setFlag('autoBattle', 0);\n}"
											}
										]
									},
									{
										"text": "物品显伤: ${core.getFlag(\"itemDetail\",0)==0?\"Off\":\"On\"}",
										"action": [
											{
												"type": "function",
												"function": "function(){\nif (core.getFlag('itemDetail', 0) == 0) {\n\tcore.setFlag('itemDetail', 1);\n} else {\n\tcore.setFlag('itemDetail', 0);\n\tcore.removeFlag(\"itemDetailCache\");\n}\ncore.updateDamage();\n}"
											}
										]
									},
									{
										"text": "怪物显血: ${core.getFlag(\"MonHPMode\",0)==0?\"百分比\":\"数字\"}",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.getFlag('MonHPMode', 0) == 0 ? core.setFlag('MonHPMode', 1) : core.setFlag('MonHPMode', 0);\ncore.updateDamage();\n}"
											}
										]
									},
									{
										"text": "天赋自动升级: ${core.getFlag(\"autoUpgradeTalent\",0)==1?\"On\":\"Off\"}",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.getFlag('autoUpgradeTalent', 0) == 0 ? core.setFlag('autoUpgradeTalent', 1) : core.setFlag('autoUpgradeTalent', 0);\n}"
											}
										]
									},
									{
										"text": "下一页",
										"action": [
											{
												"type": "setValue",
												"name": "flag:config_page",
												"value": "1"
											}
										]
									}
								]
							}
						]
					},
					{
						"type": "if",
						"condition": "flag:config_page == 1",
						"true": [
							{
								"type": "choices",
								"text": "\t[系统设置,I_config]",
								"choices": [
									{
										"text": "返回",
										"action": [
											{
												"type": "setValue",
												"name": "flag:config_page",
												"value": "0"
											},
											{
												"type": "exit"
											}
										]
									},
									{
										"text": "不显示天气: ${core.getFlag(\"no_weather\",0)==0?\"Off\":\"On\"}",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.getFlag('no_weather', 0) == 0 ? core.setFlag('no_weather', 1) : core.setFlag('no_weather', 0);\ncore.updateWeather();\n}"
											}
										]
									},
									{
										"text": "关闭消散特效: ${core.getFlag(\"no_flashHide\",0)==0?\"Off\":\"On\"}",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.getFlag('no_flashHide', 0) == 0 ? core.setFlag('no_flashHide', 1) : core.setFlag('no_flashHide', 0);\n}"
											}
										]
									}
								]
							}
						]
					}
				]
			}
		],
		"text": "可设置自动拾取等功能。部分配置只有在部分章节有用。如果出现卡顿，调整第二页的某些配置可能会有帮助。"
	},
	"goldCoin2": {
		"cls": "items",
		"name": "紫金币",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.money += 1500",
		"itemEffectTip": "，金币+1500"
	},
	"I_cat": {
		"cls": "equips",
		"name": "玩偶猫",
		"canUseItemEffect": "true",
		"text": "猫猫能有什么坏心思呢~\\n获取后免疫“誓仇”，装备时再提升30000点基础防御",
		"category": "永久道具",
		"useItemEvent": null,
		"equip": {
			"type": 1,
			"value": {
				"def": 30000
			},
			"percentage": {}
		}
	},
	"sword9": {
		"cls": "equips",
		"name": "斩魔刀",
		"canUseItemEffect": "true",
		"text": "似乎是世外的观察者都被虎魔帮恶心到了，降下惩戒之力凝聚成这把武器\\n提升16000点基础攻击",
		"equip": {
			"type": 0,
			"value": {
				"atk": 16000
			},
			"percentage": {}
		},
		"category": "永久道具"
	},
	"redGem9": {
		"cls": "items",
		"name": "九阶红宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.atk += 256 * core.values.redGem * core.status.thisMap.ratio",
		"itemEffectTip": "，攻击+${256*core.values.redGem * core.status.thisMap.ratio}"
	},
	"blueGem9": {
		"cls": "items",
		"name": "九阶蓝宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.def += 256 * core.values.blueGem * core.status.thisMap.ratio",
		"itemEffectTip": "，防御+${256*core.values.blueGem * core.status.thisMap.ratio}"
	},
	"greenGem9": {
		"cls": "items",
		"name": "九阶绿宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mdef += 256 * core.values.greenGem * core.status.thisMap.ratio",
		"itemEffectTip": "，护盾+${256*core.values.greenGem * core.status.thisMap.ratio}"
	},
	"giantRedPotion": {
		"cls": "items",
		"name": "巨大红血瓶",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hp += 1000 * core.values.redPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)",
		"itemEffectTip": "，生命+${core.formatBigNumber(1000*core.values.redPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1))}"
	},
	"giantBluePotion": {
		"cls": "items",
		"name": "巨大蓝血瓶",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hp += 1000 * core.values.bluePotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)",
		"itemEffectTip": "，生命+${core.formatBigNumber(1000*core.values.bluePotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1))}"
	},
	"giantYellowPotion": {
		"cls": "items",
		"name": "巨大黄血瓶",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hp += 1000 * core.values.yellowPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)",
		"itemEffectTip": "，生命+${core.formatBigNumber(1000*core.values.yellowPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1))}"
	},
	"giantGreenPotion": {
		"cls": "items",
		"name": "巨大绿血瓶",
		"canUseItemEffect": "true",
		"itemEffectTip": "，生命+${core.formatBigNumber(1000*core.values.greenPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1))}",
		"itemEffect": "core.status.hero.hp += 1000 * core.values.greenPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)"
	},
	"IxlO": {
		"cls": "tools",
		"name": "O型械灵精华",
		"canUseItemEffect": "true",
		"text": "BOOM！使用后摧毁自身为中心3*3范围内的补给品和非绿色门",
		"category": "消耗道具",
		"useItemEffect": "core.autosave();\nvar can_break_list = core.plugin.canBreakList;\nvar x = core.status.hero.loc.x,\n\ty = core.status.hero.loc.y;\ncore.drawAnimate(\"fire2\", x, y);\nvar range = 1;\nfor (var i = x - range; i <= x + range; ++i) {\n\tfor (var j = y - range; j <= y + range; ++j) {\n\t\tvar id = core.getBlockId(i, j);\n\t\tif (can_break_list.includes(id)) {\n\t\t\t//core.plugin.flashHide(i, j);\n\t\t\tcore.removeBlock(i, j);\n\t\t}\n\t}\n}"
	},
	"IxlP": {
		"cls": "tools",
		"name": "P型械灵精华",
		"canUseItemEffect": "true",
		"text": "PONG！使用后摧毁同行列的补给品和非绿色门",
		"category": "消耗道具",
		"useItemEffect": "core.autosave();\nvar can_break_list = core.plugin.canBreakList;\nvar x = core.status.hero.loc.x,\n\ty = core.status.hero.loc.y;\n\nvar floorId = core.status.floorId;\nvar width = core.floors[floorId].width,\n\theight = core.floors[floorId].height;\ncore.drawAnimate(\"darkexplode\", x, y);\nfor (var i = 0; i < width; ++i) {\n\tif (i == x) continue;\n\tcore.drawAnimate(\"darkexplode_mute\", i, y);\n\tvar id = core.getBlockId(i, y);\n\tif (can_break_list.includes(id)) {\n\t\t//core.plugin.flashHide(i, y);\n\t\tcore.removeBlock(i, y);\n\t}\n\tfor (var j = 0; j < height; ++j) {\n\t\tif (j == y) continue;\n\t\tcore.drawAnimate(\"darkexplode_mute\", x, j);\n\t\tvar id = core.getBlockId(x, j);\n\t\tif (can_break_list.includes(id)) {\n\t\t\t//core.plugin.flashHide(x, j);\n\t\t\tcore.removeBlock(x, j);\n\t\t}\n\t}\n}"
	},
	"IxlQ": {
		"cls": "tools",
		"name": "Q型械灵精华",
		"canUseItemEffect": "(function () {\n\tvar can_break_list = core.plugin.canBreakList;\n\tvar toX = core.nextX(1),\n\t\ttoY = core.nextY(1);\n\tvar set = false;\n\tvar add_money = 0;\n\tif (toX >= 0 && toY >= 0 && toX < core.bigmap.width && toY < core.bigmap.height) {\n\t\tvar target_id = core.getBlockId(toX, toY);\n\t\tif (target_id == null) set = true;\n\t\telse if (core.plugin.isEnemy(toX, toY)) {\n\t\t\tvar enemy = core.material.enemys[target_id];\n\t\t\tset = enemy.title == null || enemy.title == \"普通\" || enemy.title == \"喽啰\" || enemy.title == \"精英\";\n\t\t\tif (!set) {\n\t\t\t\tcore.drawTip(\"面前的敌人过于强大。\");\n\t\t\t\tif (!core.isReplaying()) core.playSound(\"操作失败\");\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tadd_money = enemy.money;\n\t\t} else if (can_break_list.includes(target_id)) {\n\t\t\tset = true;\n\t\t} else {\n\t\t\tcore.drawTip(\"无法摧毁面前的物体。\");\n\t\t\tif (!core.isReplaying()) core.playSound(\"操作失败\");\n\t\t}\n\t}\n\treturn set;\n})();",
		"text": "尝试在面前关上一扇黄门。如果面前是补给品、非绿色门或不超过精英阶的敌人，会先将其摧毁。",
		"category": "消耗道具",
		"useItemEffect": "core.autosave();\nvar can_break_list = core.plugin.canBreakList;\nvar toX = core.nextX(1),\n\ttoY = core.nextY(1);\nvar set = false;\nvar add_money = 0;\nif (toX >= 0 && toY >= 0 && toX < core.bigmap.width && toY < core.bigmap.height) {\n\tvar target_id = core.getBlockId(toX, toY);\n\tif (target_id == null) set = true;\n\telse if (core.plugin.isEnemy(toX, toY)) {\n\t\tvar enemy = core.material.enemys[target_id];\n\t\tset = enemy.title == null || enemy.title == \"普通\" || enemy.title == \"喽啰\" || enemy.title == \"精英\";\n\t\tadd_money = enemy.money;\n\t} else if (can_break_list.includes(target_id)) {\n\t\tset = true;\n\t}\n}\nif (set) {\n\tcore.removeBlock(toX, toY);\n\tcore.drawAnimate(\"fire2\", toX, toY);\n\tif (add_money > 0) {\n\t\tcore.status.hero.money += add_money;\n\t\tcore.drawTip(\"从被门夹死的敌人身上获得\" + add_money + \"金币\");\n\t\tif (core.hasItem(\"talentTree3\")) {\n\t\t\tcore.addFlag(\"talentT3_3_upX\", 1);\n\t\t\tcore.plugin._tryUpgrade3(3, true); // 也包含依赖至尊飞升的其他升级\n\t\t}\n\t\tcore.updateStatusBar();\n\t}\n\tcore.insertAction({ \"type\": \"closeDoor\", \"id\": \"yellowDoor\", \"loc\": [toX, toY] });\n}"
	},
	"IxlR": {
		"cls": "tools",
		"name": "R型械灵精华",
		"canUseItemEffect": "(function () {\n\tvar nx = core.nextX(1),\n\t\tny = core.nextY(1);\n\tvar enabled = nx >= 0 && nx < core.bigmap.width && ny >= 0 && ny < core.bigmap.height &&\n\t\tcore.getBlockId(nx, ny, null, true) == null;\n\tif (!enabled) {\n\t\tcore.drawTip(\"面对空地才能使用。\");\n\t\tif (!core.isReplaying()) core.playSound(\"操作失败\");\n\t}\n\treturn enabled;\n})();",
		"text": "在面前放置R型械灵的影像，放出光环降低同楼层所有敌人10%攻击和5%防御。可能发挥巨大的作用！",
		"category": "消耗道具",
		"useItemEffect": "var nx = core.nextX(1),\n\tny = core.nextY(1);\nvar enabled = nx >= 0 && nx < core.bigmap.width && ny >= 0 && ny < core.bigmap.height &&\n\tcore.getBlockId(nx, ny, null, true) == null;\nif (!enabled) {\n\tcore.drawTip(\"面前不是空地，无法使用。\");\n\tcore.getItem(\"I825\");\n\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n} else {\n\tcore.autosave();\n\tcore.insertAction({ \"type\": \"setBlock\", \"number\": \"E855\", \"loc\": [core.nextX(1), core.nextY(1)] });\n\tcore.drawAnimate(\"yongchang\", core.nextX(1), core.nextY(1));\n}"
	},
	"IxlS": {
		"cls": "tools",
		"name": "S型械灵精华",
		"canUseItemEffect": "(function () {\n\tvar nx = core.nextX(1),\n\t\tny = core.nextY(1);\n\tvar enabled = nx >= 0 && nx < core.bigmap.width && ny >= 0 && ny < core.bigmap.height &&\n\t\tcore.getBlockId(nx, ny, null, true) == null;\n\tif (!enabled) {\n\t\tcore.drawTip(\"面对空地才能使用。\");\n\t\tif (!core.isReplaying()) core.playSound(\"操作失败\");\n\t}\n\treturn enabled;\n})();",
		"text": "在面前放置S型械灵的影像，放出光环削弱自身为中心5*5范围内的敌人，使敌人每次被攻击时失去250万生命值。战胜强敌的关键！",
		"category": "消耗道具",
		"useItemEffect": "var nx = core.nextX(1),\n\tny = core.nextY(1);\nvar enabled = nx >= 0 && nx < core.bigmap.width && ny >= 0 && ny < core.bigmap.height &&\n\tcore.getBlockId(nx, ny, null, true) == null;\nif (!enabled) {\n\tcore.drawTip(\"面前不是空地，无法使用。\");\n\tcore.getItem(\"I826\");\n\tif (!core.isReplaying()) core.playSound(\"057-Wrong01.ogg\");\n} else {\n\tcore.autosave();\n\tcore.insertAction({ \"type\": \"setBlock\", \"number\": \"E856\", \"loc\": [core.nextX(1), core.nextY(1)] });\n\tcore.drawAnimate(\"yongchang\", core.nextX(1), core.nextY(1));\n}"
	},
	"bigManaitem": {
		"cls": "items",
		"name": "大能量块",
		"canUseItemEffect": null,
		"itemEffect": "core.status.hero.mana += core.getFlag(\"mana_item\", 15) * 3;",
		"itemEffectTip": "，能量+${flag:mana_item * 3}"
	},
	"manaItem": {
		"cls": "items",
		"name": "能量块",
		"itemEffect": "core.status.hero.mana += core.getFlag(\"mana_item\", 15)",
		"itemEffectTip": "，能量+${flag:mana_item||15}"
	},
	"redRHeart": {
		"cls": "items",
		"name": "红色可爱元素",
		"canUseItemEffect": "true",
		"itemEffect": "var dmg = 500 * core.values.redPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1);\ndmg -= core.getFlag(\"temp_mdef_pp\") * core.status.hero.mdef / 100 * core.getFlag(\"mdef_ratio\", 1);\ndmg = Math.max(dmg, 0);\ncore.plugin.popSkillDamage(dmg, core.status.hero.loc.x, core.status.hero.loc.y);\ncore.status.hero.hp -= dmg;\ncore.plugin.addTempMdefpp(-core.getFlag(\"skill11_add\"));\nif (!core.getFlag(\"__statistics__\") && core.status.hero.hp <= 0) core.lose();",
		"itemEffectTip": "，受到${core.formatBigNumber(Math.max(0, 500*core.values.redPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)))}点伤害"
	},
	"blueRHeart": {
		"cls": "items",
		"name": "蓝色可爱元素",
		"canUseItemEffect": "true",
		"itemEffect": "var dmg = 500 * core.values.bluePotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1);\ndmg -= core.getFlag(\"temp_mdef_pp\") * core.status.hero.mdef / 100 * core.getFlag(\"mdef_ratio\", 1);\ndmg = Math.max(dmg, 0);\ncore.plugin.popSkillDamage(dmg, core.status.hero.loc.x, core.status.hero.loc.y);\ncore.status.hero.hp -= dmg;\ncore.plugin.addTempMdefpp(-core.getFlag(\"skill11_add\"));\nif (!core.getFlag(\"__statistics__\") && core.status.hero.hp <= 0) core.lose();",
		"itemEffectTip": "，受到${core.formatBigNumber(Math.max(0, 500*core.values.bluePotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)))}点伤害"
	},
	"yellowRHeart": {
		"cls": "items",
		"name": "黄色可爱元素",
		"canUseItemEffect": "true",
		"itemEffect": "var dmg = 500 * core.values.yellowPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1);\ndmg -= core.getFlag(\"temp_mdef_pp\") * core.status.hero.mdef / 100 * core.getFlag(\"mdef_ratio\", 1);\ndmg = Math.max(dmg, 0);\ncore.plugin.popSkillDamage(dmg, core.status.hero.loc.x, core.status.hero.loc.y);\ncore.status.hero.hp -= dmg;\ncore.plugin.addTempMdefpp(-core.getFlag(\"skill11_add\"));\nif (!core.getFlag(\"__statistics__\") && core.status.hero.hp <= 0) core.lose();",
		"itemEffectTip": "，受到${core.formatBigNumber(Math.max(0, 500*core.values.yellowPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)))}点伤害"
	},
	"greenRHeart": {
		"cls": "items",
		"name": "绿色可爱元素",
		"canUseItemEffect": "true",
		"itemEffect": "var dmg = 500 * core.values.greenPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1);\ndmg -= core.getFlag(\"temp_mdef_pp\") * core.status.hero.mdef / 100 * core.getFlag(\"mdef_ratio\", 1);\ndmg = Math.max(dmg, 0);\ncore.plugin.popSkillDamage(dmg, core.status.hero.loc.x, core.status.hero.loc.y);\ncore.status.hero.hp -= dmg;\ncore.plugin.addTempMdefpp(-core.getFlag(\"skill11_add\"));\nif (!core.getFlag(\"__statistics__\") && core.status.hero.hp <= 0) core.lose();",
		"itemEffectTip": "，受到${core.formatBigNumber(Math.max(0, 500*core.values.greenPotion * core.status.thisMap.ratio * core.getFlag('potion_extra_ratio', 1)))}点伤害"
	},
	"specialRHeart": {
		"cls": "items",
		"name": "大可爱元素",
		"canUseItemEffect": "true",
		"itemEffect": "var dmg = core.getFlag('specialRHeart_val', 0);\ndmg -= core.getFlag(\"temp_mdef_pp\") * core.status.hero.mdef / 100 * core.getFlag(\"mdef_ratio\", 1);\ndmg = Math.max(dmg, 0);\ncore.plugin.popSkillDamage(dmg, core.status.hero.loc.x, core.status.hero.loc.y);\ncore.status.hero.hp -= dmg;\ncore.plugin.addTempMdefpp(-core.getFlag(\"skill11_add\"));\nif (!core.getFlag(\"__statistics__\") && core.status.hero.hp <= 0) core.lose();",
		"itemEffectTip": "，受到${core.formatBigNumber(Math.max(0, core.getFlag('specialRHeart_val', 0)))}点伤害"
	},
	"I_energyOrb": {
		"cls": "constants",
		"name": "能量宝珠",
		"canUseItemEffect": "(function () {\n\tif (core.status.hero.hp <= 125000000) {\n\t\tcore.drawTip(\"生命不足。\");\n\t\tif (!core.isReplaying()) core.playSound(\"操作失败\");\n\t\treturn false;\n\t}\n\treturn true;\n})();",
		"text": "注入12500w点生命，换取500能量值，不限次数。快捷键4。",
		"useItemEffect": "core.status.hero.hp -= 125000000;\ncore.status.hero.mana += 500;\ncore.drawHeroAnimate(\"electronic\");",
		"hideInReplay": true,
		"category": "永久道具"
	},
	"greenBomb": {
		"cls": "constants",
		"name": "至宝炸弹",
		"canUseItemEffect": "(function () {\n\tif (core.status.hero.mana < 2000) {\n\t\tcore.drawTip(\"能量不足。\");\n\t\tif (!core.isReplaying()) core.playSound(\"操作失败\");\n\t\treturn false;\n\t}\n\tvar toX = core.nextX(1),\n\t\ttoY = core.nextY(1);\n\tvar set = false;\n\tif (toX >= 0 && toY >= 0 && toX < core.bigmap.width && toY < core.bigmap.height) {\n\t\tvar target_id = core.getBlockId(toX, toY);\n\t\tif (core.plugin.isEnemy(toX, toY)) {\n\t\t\tvar enemy = core.material.enemys[target_id];\n\t\t\tset = enemy.title == null || enemy.title == \"普通\" || enemy.title == \"喽啰\" || enemy.title == \"精英\";\n\t\t\tif (!set) {\n\t\t\t\tcore.drawTip(\"面前的敌人过于强大。\");\n\t\t\t\tif (!core.isReplaying()) core.playSound(\"操作失败\");\n\t\t\t}\n\t\t} else {\n\t\t\tcore.drawTip(\"必须面对一个敌人才能使用。\");\n\t\t\tif (!core.isReplaying()) core.playSound(\"操作失败\");\n\t\t}\n\t}\n\treturn set;\n})();",
		"text": "封存了残缺血海奥义的神奇道具。\\n消耗2000点能量，将面前敌人的生命值降为1。使用次数不限，但对阶位超过精英的敌人无效。快捷键4。\\n",
		"hideInReplay": true,
		"category": "永久道具",
		"useItemEffect": "core.autosave();\n\nvar toX = core.nextX(1),\n\ttoY = core.nextY(1);\nif (toX >= 0 && toY >= 0 && toX < core.bigmap.width && toY < core.bigmap.height) {\n\tif (core.plugin.isEnemy(toX, toY)) {\n\t\tcore.status.hero.mana -= 2000;\n\t\tcore.setEnemyOnPoint(toX, toY, null, \"hp\", 1, \"=\");\n\t\tcore.drawAnimate(\"explosion\", toX, toY);\n\t}\n}"
	},
	"I_hj": {
		"cls": "tools",
		"name": "黄极石",
		"canUseItemEffect": "false",
		"text": "记录你完成0伤战斗的次数",
		"category": "消耗道具"
	}
}