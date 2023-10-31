var functions_d6ad677b_427a_4623_b50f_a445a3b0ef8a = 
{
    "events": {
        "resetGame": function (hero, hard, floorId, maps, values) {
	// 重置整个游戏；此函数将在游戏开始时，或者每次读档时最先被调用
	// hero：勇士信息；hard：难度；floorId：当前楼层ID；maps：地图信息；values：全局数值信息

	// 清除游戏数据
	// 这一步会清空状态栏和全部画布内容，并删除所有动态创建的画布
	core.clearStatus();
	// 恢复隐身设置的透明度
	core.setOpacity('hero', 1);
	// 初始化status
	core.status = core.clone(core.initStatus, function (name) {
		return name != 'hero' && name != 'maps';
	});
	core.control._bindRoutePush();
	core.status.played = true;
	// 初始化人物，图标，统计信息
	core.status.hero = core.clone(hero);
	window.hero = core.status.hero;
	window.flags = core.status.hero.flags;
	core.events.setHeroIcon(core.status.hero.image, true);
	core.control._initStatistics(core.animateFrame.totalTime);
	core.status.hero.statistics.totalTime = core.animateFrame.totalTime =
		Math.max(core.status.hero.statistics.totalTime, core.animateFrame.totalTime);
	core.status.hero.statistics.start = null;
	// 初始难度
	core.status.hard = hard || "";
	// 初始化地图
	core.status.floorId = floorId;
	core.status.maps = maps;
	core.maps._resetFloorImages();
	// 初始化怪物和道具
	core.material.enemys = core.enemys.getEnemys();
	core.material.items = core.items.getItems();
	// 初始化全局数值和全局开关
	core.values = core.clone(core.data.values);
	for (var key in values || {})
		core.values[key] = values[key];
	core.flags = core.clone(core.data.flags);
	var globalFlags = core.getFlag("globalFlags", {});
	for (var key in globalFlags)
		core.flags[key] = globalFlags[key];
	core._init_sys_flags();
	// 初始化界面，状态栏等
	core.resize();
	// 状态栏是否显示
	if (core.hasFlag('hideStatusBar'))
		core.hideStatusBar(core.hasFlag('showToolbox'));
	else
		core.showStatusBar();
	// 隐藏右下角的音乐按钮
	core.dom.musicBtn.style.display = 'none';
	core.dom.enlargeBtn.style.display = 'none';
},
        "win": function (reason, norank, noexit) {
	// 游戏获胜事件
	// 请注意，成绩统计时是按照hp进行上传并排名

	var str = "正在统计分数……\n";
	if (reason == "Chap.1-10层小水塔") {
		str += "计分方式：生命 + 500*黄钥匙数";
		core.status.hero.hp += 500 * core.itemCount('yellowKey');
	} else if (reason == "Chap.1-通过第20层") {
		str += "计分方式：生命 + 100*金币 + 100w*绿钥匙";
		core.status.hero.hp += 100 * core.status.hero.money;
		core.status.hero.hp += 1000000 * core.itemCount("greenKey");
	} else if (reason == "Chap.2-迈向未来") {
		str += "检测到收集了所有绿钥匙。\n计分方式：生命值";
	} else if (reason == "Chap.2-奋起直追") {
		str += "检测到收集了一部分绿钥匙。\n计分方式：生命值的开方 + 100w*绿钥匙";
		core.status.hero.hp = Math.sqrt(core.status.hero.hp);
		core.status.hero.hp += 1000000 * core.itemCount("greenKey");
	} else if (reason == "Chap.3-旅行" || reason == "Chap.3-探险" || reason == "Chap.3-开拓") {
		str += "检测到没有咸过绿钥匙。计分方式：生命值";
	} else if (reason == "Chap.3-咸鱼") {
		str += "检测到你咸过绿钥匙。计分方式：剩余的绿钥匙";
		core.status.hero.hp = core.itemCount("greenKey");
	} else if (reason == "试炼挑战-2") {
		str += "计分方式：每层通过时的血量和"
		core.status.hero.hp = core.itemCount("DScore");
	} else if (reason == "Chap.4.1-格沃之行") {
		str += "计分方式：生命值 + 500w*黄钥匙 + 1500w*蓝钥匙";
		core.status.hero.hp += 5000000 * core.itemCount("yellowKey");
		core.status.hero.hp += 15000000 * core.itemCount("blueKey");
	} else if (reason == "Chap.4.1-格沃之王") {
		str += "计分方式：生命值 + 500w*黄钥匙 + 1500w*蓝钥匙 + 1e*绿钥匙";
		core.status.hero.hp += 5000000 * core.itemCount("yellowKey");
		core.status.hero.hp += 15000000 * core.itemCount("blueKey");
		core.status.hero.hp += 100000000 * core.itemCount("greenKey");
	} else if (reason == "Chap.4.2-千虹之谜") {
		str += "计分方式：1w*红钥匙 + 黄极石数量（与千虹广场的神像对话时）";
		core.status.hero.hp = core.getFlag("hard1_score", -1);
	} else if (reason == "Chap.4.2-摩宇城的曙光") {
		str += "计分方式：生命值 + 25w * 能量值";
		core.status.hero.hp += 250000 * core.status.hero.mana;
		core.status.hero.mana = 0;
	} else if (reason == "Chap.4.2-摩宇城的救赎") {
		str += "计分方式：100e * 绿钥匙 + 生命值 + 25w * 能量值";
		core.status.hero.hp += 10000000000 * core.itemCount("greenKey");
		core.status.hero.hp += 250000 * core.status.hero.mana;
		core.status.hero.mana = 0;
	} else {
		reason = "LHJNB!";
		core.status.hero.hp = 1188;
	}
	// 如果不退出，则临时存储数据
	if (noexit) {
		core.status.extraEvent = core.clone(core.status.event);
	}

	// 游戏获胜事件 
	core.ui.closePanel();
	var replaying = core.isReplaying();
	if (replaying) core.stopReplay();
	core.waitHeroToStop(function () {
		if (!noexit) {
			core.clearMap('all'); // 清空全地图
			core.deleteAllCanvas(); // 删除所有创建的画布
			core.dom.gif2.innerHTML = "";
		}
		reason = core.replaceText(reason);
		core.drawText([
			str,
			"\t[" + (reason || "恭喜通关") + "]你的分数是${status:hp}。"
		], function () {
			core.events.gameOver(reason || '', replaying, norank);
		})
	});
},
        "lose": function (reason) {
	// 游戏失败事件
	core.ui.closePanel();
	var replaying = core.isReplaying();
	core.stopReplay();
	core.waitHeroToStop(function () {
		var text = "\t[" + (reason || "结局1：暴毙") + "]你暴毙了。\n如题。";
		if (reason == "疯狂") {
			text = "\t[结局2：疯狂]主角积攒的暴戾层数过高，彻底疯了。";
		} else if (reason == "迷失") {
			text = "\t[结局3：迷失]主角积攒的沉醉层数过高，彻底迷失了自我。";
		} else if (reason == "飞行") {
			text = "\t[结局4：飞行]主角尝试飞行。";
			core.playSound("011-System11.ogg");
		} else {
			core.drawHeroAnimate("fire2");
			core.clearMap('hero');
		}
		core.drawText([
			text
		], function () {
			core.events.gameOver(null, replaying);
		});
	})
},
        "changingFloor": function (floorId, heroLoc) {
	// 正在切换楼层过程中执行的操作；此函数的执行时间是“屏幕完全变黑“的那一刻
	// floorId为要切换到的楼层ID；heroLoc表示勇士切换到的位置 

	core.plugin.setBgLight([]); // 配合背景灯光使用

	// ---------- 此时还没有进行切换，当前floorId还是原来的 ---------- //
	var currentId = core.status.floorId || null; // 获得当前的floorId，可能为null
	var fromLoad = core.hasFlag('__fromLoad__'); // 是否是读档造成的切换
	var isFlying = core.hasFlag('__isFlying__'); // 是否是楼传造成的切换
	// 记录 leaveLoc，我不开平面楼传，直接不记录了
	if (core.flags.flyRecordPosition) {
		if (!fromLoad && !(isFlying && currentId == floorId)) {
			if (!core.hasFlag("__leaveLoc__")) core.setFlag("__leaveLoc__", {});
			if (currentId != null) core.getFlag("__leaveLoc__")[currentId] = core.clone(core.status.hero.loc);
		}
	}
	// 刷新物品显伤
	if (core.floors[currentId] && core.floors[floorId] && core.floors[currentId].ratio != core.floors[floorId].ratio) {
		core.plugin.clearItemDetailCacheAll();
	}

	// 可以对currentId进行判定，比如删除某些自定义图层等
	// if (currentId == 'MT0') {
	//     core.deleteAllCanvas();
	// }

	// 根据分区信息自动砍层与恢复
	if (core.autoRemoveMaps) core.autoRemoveMaps(floorId);

	// 重置画布尺寸
	core.maps.resizeMap(floorId);
	// 设置勇士的位置
	heroLoc.direction = core.turnDirection(heroLoc.direction);
	core.status.hero.loc = heroLoc;
	// 检查重生怪并重置
	if (!fromLoad) {
		core.extractBlocks(floorId);
		core.status.maps[floorId].blocks.forEach(function (block) {
			if (block.disable && core.enemys.hasSpecial(block.event.id, 23)) {
				block.disable = false;
				core.setMapBlockDisabled(floorId, block.x, block.y, false);
				core.maps._updateMapArray(floorId, block.x, block.y);
			}
		});
		core.control.gatherFollowers();
	}

	// ---------- 重绘新地图；这一步将会设置core.status.floorId ---------- //
	core.drawMap(floorId);

	// 切换楼层BGM
	if (core.status.maps[floorId].bgm) {
		var bgm = core.status.maps[floorId].bgm;
		if (bgm instanceof Array) bgm = bgm[Math.floor(Math.random() * bgm.length)]; // 多个bgm则随机播放一个
		if (!core.hasFlag("__bgm__")) core.playBgm(bgm);
	} else {
		if (floorId == "Ch4_92_2") { // 特判
			if (core.getFlag("Ch4_92_2_entered", 0) == 1) {
				core.playBgm("area19_2.mp3");
			}
		} else {
			// 切换到无 bgm 的图时暂停播放
			if (!core.hasFlag("__bgm__")) core.pauseBgm();
		}
	}
	// 更改画面色调
	var color = core.getFlag('__color__', null);
	if (!color && core.status.maps[floorId].color)
		color = core.status.maps[floorId].color;
	core.clearMap('curtain');
	core.clearMap('event_big');
	core.status.curtainColor = color;
	if (color) core.fillRect('curtain', 0, 0, core.__PIXELS__, core.__PIXELS__, core.arrayToRGBA(color));

	core.drawMap(); // 配合背景灯光使用
	// 更改天气
	var weather = core.getFlag('__weather__', null);
	if (!weather && core.status.maps[floorId].weather)
		weather = core.status.maps[floorId].weather;
	if (weather)
		core.setWeather(weather[0], weather[1]);
	else core.setWeather();

	// ...可以新增一些其他内容，比如创建个画布在右上角显示什么内容等等

},
        "afterChangeFloor": function (floorId) {
	// 转换楼层结束的事件；此函数会在整个楼层切换完全结束后再执行
	// floorId是切换到的楼层

	// 如果是读档，则进行检查（是否需要恢复事件）
	if (core.hasFlag('__fromLoad__')) {
		core.setFlag("__curtain__", null);
		core.insertAction(core.floors[floorId].eachArrive); // 读取楼层的灯光信息
		core.events.recoverEvents(core.getFlag("__events__"));
		core.removeFlag("__events__");
		// 绘制特殊战 boss 血条
		if (core.getFlag("70F_boss_phase", 0) == 1) {
			core.insertAction([{ "type": "strokeRect", "x": 34, "y": 28, "width": 344, "height": 32, "radius": 4, "style": [255, 255, 255, 1], "lineWidth": 4 },
				{ "type": "fillBoldText", "x": 32, "y": 20, "style": [255, 127, 127, 1], "font": "20px Verdana", "text": "BOSS： ？？？！" }
			]);
		}
	} else {
		// 首次抵达楼层时执行的事件
		if (!core.hasVisitedFloor(floorId)) {
			core.insertAction(core.floors[floorId].firstArrive);
			core.visitFloor(floorId);
		}

		core.setFlag("__curtain__", null);
		// 每次抵达楼层执行的事件（后插入，先执行）
		core.insertAction(core.floors[floorId].eachArrive);
		if (core.getFlag("temp_mdef_pp", 0) > 0) {
			core.plugin.addTempMdefpp(-core.getFlag("temp_mdef_pp", 0));
		}
		core.plugin.autoGetItem();
		core.plugin.autoBattle();
	}
	// 停止正在播放的动画
	for (var i in core.status.animateObjs) {
		var obj = core.status.animateObjs[i];
		if (obj) {
			core.maps.stopAnimate(obj.id, true);
		}
	}
	core.plugin.stopAttractAnimate();
	core.plugin.clearSpriteFlasher();
},
        "flyTo": function (toId, callback) {
	// 楼层传送器的使用，从当前楼层飞往toId
	// 如果不能飞行请返回false

	var fromId = core.status.floorId;

	// 检查能否飞行
	if (!core.status.maps[fromId].canFlyFrom || !core.status.maps[toId].canFlyTo || !core.hasVisitedFloor(toId)) {
		core.playSound('操作失败');
		core.drawTip("无法飞往" + core.status.maps[toId].title + "！");
		return false;
	}

	// 平面塔模式
	var stair = null,
		loc = null;
	if (core.flags.flyRecordPosition) {
		loc = core.getFlag("__leaveLoc__", {})[toId] || null;
	}
	if (core.status.maps[toId].flyPoint != null && core.status.maps[toId].flyPoint.length == 2) {
		loc = { x: core.status.maps[toId].flyPoint[0], y: core.status.maps[toId].flyPoint[1] };
	}
	if (loc == null) {
		// 获得两个楼层的索引，以决定是上楼梯还是下楼梯
		var fromIndex = core.floorIds.indexOf(fromId),
			toIndex = core.floorIds.indexOf(toId);
		var stair = fromIndex <= toIndex ? "downFloor" : "upFloor";
		// 地下层：同层传送至上楼梯
		if (fromIndex == toIndex && core.status.maps[fromId].underGround) stair = "upFloor";
	}

	// 记录录像
	core.status.route.push("fly:" + toId);
	// 传送
	core.ui.closePanel();
	core.setFlag('__isFlying__', true);
	core.changeFloor(toId, stair, loc, null, function () {
		core.removeFlag("__isFlying__");
		if (callback) callback();
	});

	return true;
},
        "beforeBattle": function (enemyId, x, y) {
	// 战斗前触发的事件，可以加上一些战前特效（详见下面支援的例子）
	// 此函数在“检测能否战斗和自动存档”【之后】执行。如果需要更早的战前事件，请在插件中覆重写 core.events.doSystemEvent 函数。
	// 返回true则将继续战斗，返回false将不再战斗。

	var enemy = core.material.enemys[enemyId];
	var special = enemy.special;
	if (core.enemys.hasSpecial(special, 71) && core.getFlag("invisible", false) && core.getFlag("skill6_battle", 0) == 0) {
		return false;
	}
	if (core.enemys.hasSpecial(special, 87)) {
		core.drawAnimate("yongchang", x, y);
		core.hideBlock(x, y);
		return false;
	}
	// ------ 支援技能 ------ //
	if (x != null && y != null) {
		var index = x + "," + y,
			cache = core.status.checkBlock.cache[index] || {},
			guards = cache.guards || [],
			spe32 = cache.spe32_buff || 0;
		if (spe32 > 0) {
			core.setFlag("animate_spe32", 1);
		}
		// 如果存在支援怪
		if (guards.length > 0) {
			// 记录flag，当前要参与支援的怪物
			core.setFlag("__guards__" + x + "_" + y, guards);
			var actions = [{ "type": "playSound", "name": "jump.mp3" }];
			// 增加支援的特效动画（图块跳跃）
			guards.forEach(function (g) {
				core.push(actions, { "type": "jump", "from": [g[0], g[1]], "to": [x, y], "time": 300, "keep": false, "async": true });
				// 执行上述操作后支援怪的光环效果会立即失效，所以在这里用flag暂存一下。战后清除。
				var enemy = core.material.enemys[g[2]];
				if (core.enemys.hasSpecial(enemy.special, 25)) { // 塔里没有加血光环+支援，偷懒不写了。光环范围判定也摸了。
					core.addFlag("guard_buff_cache_atk", enemy.atkValue || 0);
					core.addFlag("guard_buff_cache_def", enemy.defValue || 0);
				}
			});
			core.push(actions, [
				{ "type": "waitAsync" }, // 等待所有异步事件执行完毕
				{ "type": "trigger", "loc": [x, y] } // 重要！重新触发本点事件（即重新触发战斗）
			]);
			core.insertAction(actions);
			return false;
		}
	}

	// 如果当前魔法不足，关闭技能
	var skill = core.getFlag('skill', 0);
	if (skill == 1 && core.status.hero.mana < core.getFlag("skill1_cost", 10)) { // 技能1：护盾爆发
		core.setFlag('skill', 0);
	} else if (skill == 2 && core.status.hero.mana < core.getFlag("skill2_cost", 10)) { // 技能2：集中防御
		core.setFlag('skill', 0);
	}

	if (core.enemys.hasSpecial(special, 56)) {
		// 药水效果消失
		if (core.getFlag("used_potion", 0) > 0) {
			core.setFlag("used_potion", 0);
			core.status.hero.atk -= core.getFlag("potion_atk", 0);
			core.status.hero.def -= core.getFlag("potion_def", 0);
			core.status.hero.mdef -= core.getFlag("potion_mdef", 0);
			core.setFlag("potion_atk", 0);
			core.setFlag("potion_def", 0);
			core.setFlag("potion_mdef", 0);
		}
	}
	return true;
},
        "afterBattle": function (enemyId, x, y) {
	// 战斗结束后触发的事件

	// 记录本次战斗的敌人ID，用于避免特殊的战后事件被魔力莱姆触发
	core.setFlag("last_battle_enemyId", enemyId);
	var enemy = core.material.enemys[enemyId];
	var special = enemy.special;

	/*********** 播放战斗音效和动画 ***********/
	// 技能动画
	function drawEnemyAnimate(enemy_animate, ex, ey, hero_animate) {
		var final_x = ex != null ? ex : core.getHeroLoc('x');
		var final_y = ey != null ? ey : core.getHeroLoc('y');
		core.drawAnimate(hero_animate, final_x, final_y);
		if (enemy_animate != null) {
			core.drawHeroAnimate(enemy_animate);
		}
	}
	var enemy_animate = null;
	// 冰冻
	if (core.enemys.hasSpecial(special, 35)) {
		enemy_animate = "ice";
	}
	// 暴戾 / 疯狂
	if (core.enemys.hasSpecial(special, 40)) {
		enemy_animate = "rage_buff";
	}
	if (core.enemys.hasSpecial(special, 44)) {
		enemy_animate = "rage_disp";
	}
	if (core.enemys.hasSpecial(special, 47)) {
		enemy_animate = "anti_rage";
	}
	// 清洁
	if (core.enemys.hasSpecial(special, 49)) {
		enemy_animate = "dispel";
	}
	// 极奢
	if (core.enemys.hasSpecial(special, 50)) {
		enemy_animate = "spe50";
	}
	if (enemyId == "Emoli2") {
		enemy_animate = "fire";
	}
	// 爆匙
	if (core.enemys.hasSpecial(special, 36) && (core.hasItem("yellowKey") || core.hasItem("blueKey") || core.hasItem("redKey"))) {
		enemy_animate = "explosion";
	}
	// 亡命
	if (core.enemys.hasSpecial(special, 22) || core.getFlag("animate_spe32", 0) == 1) {
		enemy_animate = "explosion_small";
		core.setFlag("animate_spe32", 0);
	}
	// 7区的三种buff
	if (core.enemys.hasSpecial(special, 52)) {
		enemy_animate = "rage_buff";
	}
	if (core.enemys.hasSpecial(special, 53)) {
		enemy_animate = "def_buff";
	}
	if (core.enemys.hasSpecial(special, 54)) {
		enemy_animate = "mdef_buff";
	}
	// 中子束
	if (core.enemys.hasSpecial(special, 55)) {
		enemy_animate = "thunder3";
	}
	// 驱散
	if (core.enemys.hasSpecial(special, 56)) {
		enemy_animate = "dispel";
	}
	// 烧蓝
	if (core.enemys.hasSpecial(special, 38)) {
		enemy_animate = "electronic";
	}
	// 命源封印
	if (core.enemys.hasSpecial(special, 62)) {
		enemy_animate = "seal";
	}
	// 残暴斩杀
	if (core.enemys.hasSpecial(special, 63)) {
		enemy_animate = "slash";
	}
	// 誓仇
	if (core.enemys.hasSpecial(special, 84)) {
		enemy_animate = "fire3";
	}
	// 电磁脉冲
	if (core.enemys.hasSpecial(special, 88)) {
		enemy_animate = "electronic";
	}
	if (enemyId == "E2221") {
		enemy_animate = "crossattack";
	}
	var hero_animate;
	// 检测当前开启的技能类型
	var skill = core.getFlag('skill', 0);
	if (skill == 1) { // 技能1：护盾爆发
		hero_animate = "skill1";
	} else if (skill == 2) { // 技能2：集中防御
		hero_animate = "skill2";
	} else if (core.hasItem("talentTree3")) {
		hero_animate = "skill10";
	} else { // 无技能
		var equipAnimate = 'hand',
			equipId = (core.status.hero.equipment || [])[0];
		if (equipId && (core.material.items[equipId].equip || {}).animate)
			equipAnimate = core.material.items[equipId].equip.animate;
		// 检查equipAnimate是否存在SE，如果不存在则使用默认音效
		if (!(core.material.animates[equipAnimate] || {}).se)
			core.playSound('attack.mp3');
		hero_animate = equipAnimate;
	}
	drawEnemyAnimate(enemy_animate, x, y, hero_animate);
	/*********** 结束（播放战斗音效和动画） ***********/

	var damage = core.enemys.getDamage(enemyId, x, y);
	if (damage == null) damage = core.status.hero.hp + 1;
	var last_dmg = damage;
	var last_turn = core.enemys.getDamageInfo(enemy, null, x, y) ? core.enemys.getDamageInfo(enemy, null, x, y).turn : 1;

	// 扣减体力值
	core.status.hero.hp -= damage;

	// 记录
	core.status.hero.statistics.battleDamage += damage;
	core.status.hero.statistics.battle++;

	if (core.status.hero.hp <= 0) {
		core.status.hero.hp = 0;
		core.updateStatusBar();
		core.events.lose('战斗失败');
		return;
	}

	// 删除该块
	var guards = []; // 支援
	if (x != null && y != null) {
		guards = core.getFlag("__guards__" + x + "_" + y, []);
		core.removeFlag("__guards__" + x + "_" + y);
	}
	// 草飞
	// waitAsync 会等待怪落地，可能影响流畅性
	if (core.getFlag("enable_enemy_fly", 0) == 1) {
		var tmp_point = core.events.getEnemyOnPoint(x, y);
		if (!core.isReplaying() && !core.plugin.hasTitle(x, y) && Object.keys(tmp_point).length > 0) {
			var offsetX = 0,
				offsetY = 0,
				range = 8;
			if (x > core.status.hero.loc.x) {
				offsetX = 1;
			} else if (x < core.status.hero.loc.x) {
				offsetX = -1;
			}
			if (y > core.status.hero.loc.y) {
				offsetY = 1;
			} else if (y < core.status.hero.loc.y) {
				offsetY = -1;
			}
			core.jumpBlock(x, y, x + (Math.random() - 0.5 + offsetX) * range, y + (Math.random() - 0.5 + offsetY) * range, 500, false);
		}
	}
	// 防止阻击怪走上该格也受到影响
	core.events.resetEnemyOnPoint(x, y);

	// 获得金币和经验
	var money = guards.reduce(function (curr, g) {
		return curr + core.material.enemys[g[2]].money;
	}, enemy.money);
	if (core.hasItem('coin')) money *= 2;
	if (core.hasFlag('curse')) money = 0;
	core.status.hero.money += money;
	core.status.hero.statistics.money += money;

	var exp = guards.reduce(function (curr, g) {
		return curr + core.material.enemys[g[2]].exp;
	}, enemy.exp);
	if (core.hasFlag('curse')) exp = 0;
	core.status.hero.exp += exp;
	core.status.hero.statistics.exp += exp;

	var hint = "打败 " + enemy.name;
	if (core.flags.statusBarItems.indexOf('enableMoney') >= 0) hint += "，金币+" + money;
	if (core.flags.statusBarItems.indexOf('enableExp') >= 0) hint += "，经验+" + exp;
	core.drawTip(hint, enemy.id);

	// 事件的处理
	var todo = [];

	// 极奢
	if (core.enemys.hasSpecial(special, 50) && core.getFlag("rage_stack", 0) < 0) {
		core.addFlag('rage_stack', core.getFlag("rage_stack", 0));
	}
	// 中毒
	if (core.enemys.hasSpecial(special, 12)) {
		core.triggerDebuff('get', 'poison');
	}
	// 衰弱
	if (core.enemys.hasSpecial(special, 13)) {
		core.triggerDebuff('get', 'weak');
	}
	// 诅咒
	if (core.enemys.hasSpecial(special, 14)) {
		core.triggerDebuff('get', 'curse');
	}
	// 冰冻
	if (core.getFlag('freeze_stack', 0)) { // 自然减少
		core.addFlag('freeze_stack', -1);
	}
	if (core.enemys.hasSpecial(special, 35)) {
		core.addFlag('freeze_stack', enemy.value35);
	}
	// 疯狂 & 暴戾
	if (core.enemys.hasSpecial(special, 44)) {
		core.setFlag('rage_stack', Math.ceil(core.getFlag("rage_stack", 0) / 2));
	}
	if (core.getFlag("rage_stack", 0) > 0) {
		core.addFlag('rage_stack', -1);
		if (core.getFlag("hard") == 1 && core.getFlag("rage_stack", 0) > 0) { // 简化难度下额外减少1层
			core.addFlag('rage_stack', -1);
		}
	}
	if (core.enemys.hasSpecial(special, 40)) {
		core.addFlag('rage_stack', enemy.value40);
	}
	if (core.getFlag("rage_stack", 0) > 99) {
		core.lose("疯狂");
	} else if (core.getFlag("rage_stack", 0) >= 80) {
		var rand = core.rand(4);
		switch (rand) {
		case 0:
			core.insertAction("\t[hero]（杀戮，杀戮！）");
			break;
		case 1:
			core.insertAction("\t[hero]（来狠狠地伤害我，然后我也会狠狠地伤害你！来互相伤害吧！）");
			break;
		case 2:
			core.insertAction("\t[hero]（全都去死吧！）");
			break;
		case 3:
			core.insertAction("\t[hero]（不堪一击的废物！）");
			break;
		}
	}
	// 沉醉
	if (core.getFlag("rage_stack", 0) < 0) {
		core.addFlag('rage_stack', 1);
	}
	if (core.enemys.hasSpecial(special, 47)) {
		core.addFlag('rage_stack', -enemy.value40);
	}
	if (core.getFlag("rage_stack", 0) < -99) {
		core.insertAction(["\t[芳芷,hero2]呀，你身上的沉醉层数太多了！这下你“无敌”了。",
			"\t[hero]（好像，陷入了绝境……等等，我记得杂货商人那里有解药。）"
		]);
	}
	// 誓仇
	if (core.getFlag('spe84_n', 0) > 0) { // 自然减少
		core.addFlag('spe84_n', -1);
	}
	if (core.enemys.hasSpecial(special, 84) && !(core.hasItem("I_cat") || core.hasEquip("I_cat"))) {
		core.addFlag('spe84_n', enemy.n);
		core.setFlag('spe84_dmg', enemy.damage2);
	}
	// 清洁
	if (core.enemys.hasSpecial(special, 49)) {
		if (core.getFlag("rage_stack", 0) != 0 || core.getFlag("freeze_stack", 0) > 0) {
			core.setFlag('rage_stack', 0);
			core.setFlag('freeze_stack', 0);
		} else if (core.getFlag("spe84_n", 0) > 0) {
			core.setFlag('spe84_n', 0);
		} else {
			core.status.hero.hp += enemy.value35;
		}
	}
	if (!core.getFlag("skill5_is_on", false) && !core.getFlag("skill8_buff", false)) {
		if (core.getFlag("rage_stack", 0) < -20) {
			core.setHeroIcon("hero_rage2.png");
		} else if (core.getFlag("rage_stack", 0) > 20) {
			core.setHeroIcon("hero_rage.png");
		} else {
			core.setHeroIcon("hero.png");
		}
	}
	// 仇恨属性
	if (core.enemys.hasSpecial(special, 17)) {
		core.setFlag('hatred', Math.floor(core.getFlag('hatred', 0) / 2));
	}
	// 自爆
	if (core.enemys.hasSpecial(special, 19)) {
		core.status.hero.statistics.battleDamage += core.status.hero.hp - 1;
		core.status.hero.hp = 1;
	}
	// 退化
	if (core.enemys.hasSpecial(special, 21)) {
		core.status.hero.atk -= (enemy.atkValue || 0);
		core.status.hero.def -= (enemy.defValue || 0);
		if (core.status.hero.atk < 0) core.status.hero.atk = 0;
		if (core.status.hero.def < 0) core.status.hero.def = 0;
	}
	// 命源干扰
	if (core.hasSpecial(special, 114)) {
		core.status.hero.hp += core.status.hero.mana * 30000;
		core.status.hero.mana = 0;
	}
	var can_break_list = core.plugin.canBreakList;
	// 完全毁灭
	if (core.enemys.hasSpecial(special, 64)) {
		core.drawAnimate("fire2", x, y);
		var range = enemy.range;
		for (var i = x - range; i <= x + range; ++i) {
			for (var j = y - range; j <= y + range; ++j) {
				var id = core.getBlockId(i, j);
				if (can_break_list.includes(id)) {
					//core.plugin.flashHide(i, j);
					core.drawAnimate("fire4_mute", i, j);
					core.removeBlock(i, j);
				}
			}
		}
		core.plugin.popSkillDamage(enemy.damage, core.status.hero.loc.x, core.status.hero.loc.y);
		core.status.hero.hp -= enemy.damage;
	}
	// 阳炎冲击
	if (core.enemys.hasSpecial(special, 74)) {
		core.drawAnimate("fire2", x, y);
		var range = enemy.range;
		var cnt = 1;
		for (var i = x - range; i <= x + range; ++i) {
			for (var j = y - range; j <= y + range; ++j) {
				var id = core.getBlockId(i, j);
				if (can_break_list.includes(id)) {
					//core.plugin.flashHide(i, j);
					core.drawAnimate("fire4_mute", i, j);
					core.removeBlock(i, j);
					cnt += 1;
				}
			}
		}
		var spe74_dmg = Math.floor(enemy.damage / cnt);
		core.plugin.popSkillDamage(spe74_dmg, core.status.hero.loc.x, core.status.hero.loc.y);
		core.status.hero.hp -= spe74_dmg;
	}
	var floorId = core.status.floorId;
	var width = core.floors[floorId].width,
		height = core.floors[floorId].height;
	// 激爆
	if (core.enemys.hasSpecial(special, 75)) {
		core.drawAnimate("darkexplode", x, y);
		var cnt = 1;
		for (var i = 0; i < width; ++i) {
			if (i == x) continue;
			core.drawAnimate("darkexplode_mute", i, y);
			var id = core.getBlockId(i, y);
			if (can_break_list.includes(id)) {
				//core.plugin.flashHide(i, y);
				core.removeBlock(i, y);
				cnt += 1;
			}
		}
		for (var j = 0; j < height; ++j) {
			if (j == y) continue;
			core.drawAnimate("darkexplode_mute", x, j);
			var id = core.getBlockId(x, j);
			if (can_break_list.includes(id)) {
				//core.plugin.flashHide(x, j);
				core.removeBlock(x, j);
				cnt += 1;
			}
		}
		core.plugin.popSkillDamage(enemy.damage, core.status.hero.loc.x, core.status.hero.loc.y);
		core.status.hero.hp -= enemy.damage;
	}
	// 分裂
	if (core.hasSpecial(special, 116)) {
		for (var dir in core.utils.scan) {
			var nx = x + core.utils.scan[dir].x,
				ny = y + core.utils.scan[dir].y,
				currloc = nx + "," + ny;
			if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
			if (nx == core.getHeroLoc('x') && ny == core.getHeroLoc('y')) continue;
			if (core.getBlock(nx, ny, floorId) == null) {
				core.drawAnimate("fire3", nx, ny);
				core.setBlock("E874", nx, ny);
			}
		}
	}
	if (core.status.hero.hp <= 0) {
		core.events.lose('战斗失败');
		return;
	}
	// 命源封印
	if (core.getFlag("spe62_seal_hp", 0) > 0 && core.status.hero.hp > 0) {
		core.status.hero.hp += core.getFlag("spe62_seal_hp", 0);
		core.drawHeroAnimate("spe62");
		core.setFlag("spe62_seal_hp", 0);
	}
	if (core.enemys.hasSpecial(special, 62)) {
		core.setFlag("spe62_seal_hp", core.status.hero.hp - 1);
		core.status.hero.hp = 1;
	}
	// 轻风
	if (core.enemys.hasSpecial(special, 73)) {
		var steps = [];
		for (var i = -1; i > -641; --i) {
			if (core.nextX(i) >= 0 && core.nextY(i) >= 0 && core.nextX(i) < core.bigmap.width && core.nextY(i) < core.bigmap.height &&
				core.getBlock(core.nextX(i), core.nextY(i)) == null) {
				steps.push("backward");
			} else {
				break;
			}
		}
		var actions = [{ "type": "animate", "name": "skill3", "loc": "hero", "async": true }];
		if (steps.length) {
			actions.push({ "type": "moveHero", "steps": steps });
		}
		core.insertAction(actions);
	}
	// 闭门
	var spe78_enemy = 0;
	if (core.enemys.hasSpecial(special, 78)) {
		var toX = 2 * core.getHeroLoc('x') - x,
			toY = 2 * core.getHeroLoc('y') - y; // 有捕捉光环的情况下，发生战斗时角色不一定面对怪物
		var set = false;
		var add_money = 0;
		if (toX >= 0 && toY >= 0 && toX < core.bigmap.width && toY < core.bigmap.height) {
			var target_id = core.getBlockId(toX, toY);
			if (target_id == null) set = true;
			else if (core.getBlockCls(toX, toY) == "enemys" || core.getBlockCls(toX, toY) == "enemy48") {
				var enemy = core.material.enemys[target_id];
				set = enemy.title == null || enemy.title == "普通" || enemy.title == "喽啰" || enemy.title == "精英";
				add_money = enemy.money;
			} else if (can_break_list.includes(target_id)) {
				set = true;
			}
		}
		if (set) {
			core.removeBlock(toX, toY);
			core.drawAnimate("fire2", toX, toY);
			if (add_money > 0) {
				core.status.hero.money += add_money;
				core.drawTip("从被门夹死的敌人身上获得" + add_money + "金币");
				if (core.hasItem("talentTree3")) {
					spe78_enemy = 1;
				}
				core.updateStatusBar();
			}
			core.insertAction({ "type": "closeDoor", "id": "yellowDoor", "loc": [toX, toY] });
		}
	}
	// 定时炸弹
	if (core.enemys.hasSpecial(special, 83)) {
		core.setFlag("spe83_step", 1);
		core.setFlag("spe83_range", enemy.range);
		core.setFlag("spe83_dmg", enemy.damage);
		core.setFlag("cannotMoveDirectly", 1);
	}
	// 激励
	if (core.enemys.hasSpecial(special, 95)) {
		var range = enemy.range;
		for (var i = x - range; i <= x + range; ++i) {
			for (var j = y - range; j <= y + range; ++j) {
				if (core.plugin.isEnemy(i, j)) {
					if (enemy.atkValue) {
						if (enemy.atkValue >= 0) {
							core.setEnemyOnPoint(i, j, null, "atk", enemy.atkValue, "+=");
						} else {
							core.setEnemyOnPoint(i, j, null, "atk", -enemy.atkValue, "-=");
						}
					}
					if (enemy.defValue) {
						if (enemy.defValue >= 0) {
							core.setEnemyOnPoint(i, j, null, "def", enemy.defValue, "+=");
						} else {
							core.setEnemyOnPoint(i, j, null, "def", -enemy.defValue, "-=");
						}
					}
					if (enemy.hpValue) {
						if (enemy.hpValue >= 0) {
							core.events.setEnemyOnPointAdd(i, j, null, "hp", enemy.hpValue, "+=");
						} else {
							core.events.setEnemyOnPointAdd(i, j, null, "hp", -enemy.hpValue, "-=");
						}
					}
					core.drawAnimate("rage_buff", i, j);
				}
			}
		}
	}
	// 强夺
	if (core.enemys.hasSpecial(special, 96)) {
		var range = enemy.range;
		for (var i = x - range; i <= x + range; ++i) {
			for (var j = y - range; j <= y + range; ++j) {
				if (core.getBlockCls(i, j) == "items") {
					var id = core.getBlockId(i, j);
					core.plugin.addAutoGetItemAnimate(id, i, j);
					core.getItem(id, 1, i, j);
				}
			}
		}
		core.plugin.startAutoGetItemAnimate();
	}
	// 增加仇恨值
	core.setFlag('hatred', core.getFlag('hatred', 0) + core.values.hatred);

	if (core.getFlag("skill5_cd", 0) > 0) {
		core.addFlag("skill5_cd", -1);
	}
	// 鸽化
	if (core.getFlag("skill5_dm", 0) == 1) {
		core.status.hero.mana -= core.getFlag("skill5_dm_cost", 0);
		core.plugin.popSkillDamage(core.getFlag("skill5_dm_cost", 0), core.status.hero.loc.x, core.status.hero.loc.y, "#FFFFFF");
		core.addFlag("skill5_dm_cost", 20);
		if (core.status.hero.mana <= 0) {
			core.insertCommonEvent("DM不鸽了");
		}
	}

	// 清除支援怪缓存光环
	core.setFlag("guard_buff_cache_atk", 0);
	core.setFlag("guard_buff_cache_def", 0);
	// 战后的技能处理，比如扣除魔力值
	if (core.flags.statusBarItems.indexOf('enableSkill') >= 0) {
		// 检测当前开启的技能类型
		var skill = core.getFlag('skill', 0);
		var cost = 0;
		if (skill == 1) { // 技能1：护盾爆发
			cost = core.getFlag('skill1_cost', 10);
		} else if (skill == 2) { // 技能2：集中防御
			cost = core.getFlag('skill2_cost', 10);
		}
		core.status.hero.mana -= cost;
		// 关闭技能
		core.setFlag('skill', 0);
		core.setFlag('skillName', '无');
	}

	function clearBuff() {
		// 药水效果消失
		core.setFlag("used_potion", 0);
		core.status.hero.atk -= core.getFlag("potion_atk", 0);
		core.status.hero.def -= core.getFlag("potion_def", 0);
		core.status.hero.mdef -= core.getFlag("potion_mdef", 0);
		core.setFlag("potion_atk", 0);
		core.setFlag("potion_def", 0);
		core.setFlag("potion_mdef", 0);
	}
	// 药水效果减少（used_potion 实际上是效果剩余战斗数）
	if (core.getFlag("used_potion", 0) > 0) {
		core.addFlag("used_potion", -1);
		if (core.getFlag("used_potion", 0) == 0) {
			clearBuff();
		}
	}
	// 7区的三种 buff，和6区的药水共用一套 flag，且彼此之间不能共存
	if (core.enemys.hasSpecial(special, 52)) {
		clearBuff();
		core.setFlag("used_potion", 3);
		core.addFlag("potion_atk", enemy.value52);
		core.status.hero.atk += enemy.value52;
	} else if (core.enemys.hasSpecial(special, 53)) {
		clearBuff();
		core.setFlag("used_potion", 3);
		core.addFlag("potion_def", enemy.value53);
		core.status.hero.def += enemy.value53;
	} else if (core.enemys.hasSpecial(special, 54)) {
		clearBuff();
		core.setFlag("used_potion", 3);
		core.addFlag("potion_mdef", enemy.value54);
		core.status.hero.mdef += enemy.value54;
	}

	// 如果有加点
	var point = guards.reduce(function (curr, g) {
		return curr + core.material.enemys[g[2]].point;
	}, enemy.point) || 0;
	if (core.flags.enableAddPoint && point > 0) {
		core.push(todo, [{ "type": "insert", "name": "加点事件", "args": [point] }]);
	}

	// 如果该点存在事件 -- V2.5.4 以后阻击怪也可以有战后事件了
	if (core.status.floorId != null) {
		core.push(todo, core.floors[core.status.floorId].afterBattle[x + "," + y]);
	}

	// 爆匙
	if (core.enemys.hasSpecial(special, 36)) {
		core.setItem("yellowKey", 0);
		core.setItem("blueKey", 0);
		core.setItem("redKey", 0);
	}
	// 法力燃烧
	if (core.hasSpecial(special, 38)) {
		core.status.hero.mana = Math.max(0, core.status.hero.mana - enemy.value38_1);
	}
	// 自然回蓝
	core.status.hero.mana += core.getFlag("mana_regen", 0);
	if (core.hasEquip("leaf")) {
		core.status.hero.mana += 1;
	}
	var extra_mana_regen = core.getFlag("I62_extra_mana_regen", 0);
	var extra_animate = false;
	if (last_dmg <= 0 && extra_mana_regen > 0) {
		core.status.hero.mana += extra_mana_regen;
		extra_animate = true;
	}
	if (extra_animate) core.drawHeroAnimate("heal");
	// 黄宝石回复
	if (core.getFlag("current_chapter", 3) == 3) {
		core.status.hero.hp += core.getRealStatus("mdef") * 0.01 * core.itemCount("yellowGem");
	}
	// 第四章后天赋树相关
	if (core.hasItem("talentTree3")) {
		if (flags.hard == 1 && last_dmg <= 0 && core.getFlag("A21boss", 0) == 0) {
			core.getItem("I_hj");
			if (enemyId == "E802") { // A18boss
				core.getItem("I_hj", 10);
			}
		}
		if (core.getTalentLv3(3) >= 70) {
			core.setFlag("skill11_feat1", true); // 下一步临时护盾不衰减
		}
		if (core.hasItem("skill13") && core.getFlag("skill13_cost") > 0) {
			core.addFlag("skill13_cost", -core.getFlag("skill13_cost_reduce", 50));
			if (core.getFlag("skill13_cost") < 0) {
				core.setFlag("skill13_cost", 0);
			}
		}
		// 杀敌类升级条件
		var show_hint = false;
		// 至尊飞升
		if (core.getTalentLv3(3) < 100) {
			core.addFlag("talentT3_3_upX", 1 + spe78_enemy);
			core.plugin._tryUpgrade3(3, true); // 也包含依赖至尊飞升的其他升级
		}
		if (core.getTalentLv3(0) == 1 && core.getTalentLv3(3) >= 5) {
			show_hint = true;
		}
		if (core.getTalentLv3(0) == 2 && core.getTalentLv3(3) >= 15) {
			show_hint = true;
		}
		if (core.getTalentLv3(0) == 3 && core.getTalentLv3(3) >= 30) {
			show_hint = true;
		}
		if (core.getTalentLv3(1) == 4 && core.getTalentLv3(3) >= 60 && core.getTalentLv3(5) == 3) {
			show_hint = true;
		}
		if (core.getTalentLv3(2) == 4 && core.getTalentLv3(3) >= 90) {
			show_hint = true;
		}
		if (show_hint) {
			core.drawHeroAnimate("yongchang");
		}
	}
	if (core.hasItem("skill11")) {
		core.plugin.addTempMdefpp(core.getFlag("skill11_add"));
		if (core.enemys.hasSpecial(special, 88)) {
			// 临时护盾消失
			core.plugin.addTempMdefpp(-9922);
		}
		if (core.enemys.hasSpecial(special, 90)) {
			core.plugin.addTempMdefpp(2 * core.getFlag("skill11_add"));
		}
	}
	// 第三章天赋树相关
	if (core.hasItem("talentTree") && core.getFlag("talentTree_unlocked", false)) {
		// 所有杀敌类升级条件
		var show_hint = false;
		var required = [
			[-1, -1, 50],
			[-1, -1, 50],
			[-1, -1, 50],
			[-1, 5],
			[-1, 50],
			[-1, 50],
			[-1, 50],
			[-1, 50],
			[-1, 50],
			[-1, 50],
		];
		for (var i = 0; i < 14; ++i) {
			var lv = core.plugin.getTalentLv(i);
			var flag_name = "talent" + i + "_up" + lv;
			core.addFlag(flag_name, 1);
			if (required[i] && required[i][lv] > 0 && core.getFlag(flag_name, 0) >= required[i][lv]) {
				show_hint = true;
				if (core.getFlag("autoUpgradeTalent", 0) > 0) core.plugin._tryUpgrade(i);
			}
		}
		if (last_dmg <= 0) {
			if (core.plugin.getTalentLv(3) == 2) {
				core.addFlag("talent3_up2_spe", 1);
				if (core.getFlag("talent3_up2_spe", 0) >= 10) {
					show_hint = true;
					if (core.getFlag("autoUpgradeTalent", 0) > 0) core.plugin._tryUpgrade(3);
				}
			}
			if (core.plugin.getTalentLv(3) == 6) {
				core.addFlag("talent3_up6_spe", 1);
				if (core.getFlag("talent3_up6_spe", 0) >= 50) {
					show_hint = true;
					if (core.getFlag("autoUpgradeTalent", 0) > 0) core.plugin._tryUpgrade(3);
				}
			}
		}
		if (show_hint) {
			core.drawHeroAnimate("yongchang");
		}
	}
	// 后抛战斗效果消失
	if (core.getFlag("skill6_battle", 0) == 1) core.setFlag("skill6_battle", 0);
	// 失去隐身
	if (core.getFlag("invisible", 0) == 1) {
		if (last_dmg <= 0 && core.getTalentLv2(5) >= 2) {
			core.status.hero.mana += 50;
			core.drawHeroAnimate("heal2");
		}
		core.plugin.exit_invisible();
	}
	if (core.status.floorId == "Ch4_32" && enemyId == "E699" && x == 10) {
		core.insertAction({
			"type": "choices",
			"text": "\t[系统提示]获得成就【阴间大师】！\n竟然能想到把游猎拉到这里引爆，想必你早已精通各种屑塔的阴间套路了。\n口头奖励一下，你很强。",
			"choices": [{
				"text": "？？？",
				"action": [

				]
			}, ]
		});
	}

	// 如果事件不为空，将其插入
	if (todo.length > 0) core.insertAction(todo, x, y);
	// 消散特效
	core.plugin.flashHide(x, y);
	//if (!core.isReplaying()) core.updateWeather();
	// 因为removeBlock和hideBlock都会刷新状态栏，因此移动到这里并保证刷新只执行一次，以提升效率
	if (core.getBlock(x, y) != null) {
		// 检查是否是重生怪物；如果是则仅隐藏不删除
		if (core.hasSpecial(enemy.special, 23)) {
			core.hideBlock(x, y);
		} else {
			core.removeBlock(x, y);
		}
	} else {
		core.updateStatusBar();
	}

	// 火焰喷射
	// 一定要放在 hideBlock 后面，否则多只喷火怪互相炸的时候，一只怪物可能会因为生命值小于0而连续触发多次战斗
	if (core.enemys.hasSpecial(special, 86)) {
		var floorId = core.status.floorId;
		var width = core.floors[floorId].width,
			height = core.floors[floorId].height;
		var animate_name = "fire";
		for (var i = -1; true; --i) {
			var tmpx = core.nextX(i),
				tmpy = core.nextY(i);
			if (tmpx < 0 || tmpy < 0 || tmpx >= width || tmpy >= height) break;
			var id = core.getBlockId(tmpx, tmpy);
			core.drawAnimate(animate_name, tmpx, tmpy);
			animate_name = "fire_mute";
			if (can_break_list.includes(id)) {
				//core.plugin.flashHide(tmpx, tmpy);
				core.removeBlock(tmpx, tmpy);
			}
			if (core.getFlag("A21boss", 0) > 0 && id && id.indexOf("RHeart") != -1) {
				core.plugin.updateBoss21Info(4);
			}
			if (!core.plugin.isEnemy(tmpx, tmpy)) {
				if (!core.canMoveHero(tmpx, tmpy, core.plugin.getReverseDirection(core.status.hero.loc.direction)) || core.noPass(tmpx, tmpy)) {
					break;
				}
			} else { // is Enemy
				var target_enemy = core.material.enemys[core.getBlockId(tmpx, tmpy)];
				if (core.enemys.hasSpecial(target_enemy.special, 121)) { // 火焰护盾
				} else {
					core.events.setEnemyOnPointAdd(tmpx, tmpy, null, "hp", enemy.damage2, "-=");
				}
			}
		}
	}
	// 大爆炸
	if (core.enemys.hasSpecial(special, 57)) {
		core.plugin.BombExplode(x, y, enemy.damage);
	}
	// 重生
	if (core.enemys.hasSpecial(special, 110)) {
		var scan = {
			'up': { 'x': 0, 'y': -1 },
			'left': { 'x': -1, 'y': 0 },
			'down': { 'x': 0, 'y': 1 },
			'right': { 'x': 1, 'y': 0 }
		};
		var toX = core.getHeroLoc('x') - scan[core.getHeroLoc('direction')].x;
		var toY = core.getHeroLoc('y') - scan[core.getHeroLoc('direction')].y;
		var set = false;

		if (toX >= 0 && toY >= 0 && toX < core.bigmap.width && toY < core.bigmap.height) {
			if (core.getBlockId(toX, toY) == null) set = true;
			else if (core.getBlockCls(toX, toY) == "enemys" || core.getBlockCls(toX, toY) == "enemy48") {
				var mon_id = core.getBlockId(toX, toY);
				var enemy = core.material.enemys[mon_id];
				set = enemy.title == null || enemy.title == "普通";
			}
		}
		if (set) {
			core.setBlock("E628", toX, toY);
		}
	}
	// 第四章后 boss 战
	if (core.getFlag("A21boss", 0) == 1) {
		core.addFlag("A21boss_battle", 1);
		if (enemyId == "E888" && core.getFlag("A21boss_1p", 0) >= 2 && core.getFlag("A21boss_1p", 0) < 4) {
			core.insertCommonEvent("衰 爆", null, null, null, null, true);
		}
		var firesound = false;
		var darksound = false;
		var proc_fn = function (i, j, type) {
			var toX = core.getHeroLoc('x') + i;
			var toY = core.getHeroLoc('y') + j;
			var set = false;
			if (toX >= 0 && toX <= 12 && toY >= 0 && toY <= 12) {
				if (core.getBlockId(toX, toY) == null) set = true;
				else if (core.getBlockCls(toX, toY) == "items" && type == 2) { // Opollux summon
					set = true;
				}
				/* 召唤覆盖普通敌人
				else if (core.getBlockCls(toX, toY) == "enemys" || core.getBlockCls(toX, toY) == "enemy48") {
					var mon_id = core.getBlockId(toX, toY);
					var enemy = core.material.enemys[mon_id];
					set = enemy.title == null || enemy.title == "普通";
				}*/
			}
			if (set) {
				if (type == 1) { // 小怪
					core.setBlock("E21Add1", toX, toY);
					core.drawAnimate("fire3_mute", toX, toY);
					firesound = true;
				} else { // 可爱元素
					var prev_id = core.getBlockId(toX, toY);
					if (!prev_id) prev_id = "empty";
					var ids_list = ["empty", "redRHeart", "blueRHeart", "yellowRHeart", "greenRHeart"];
					var i = ids_list.indexOf(prev_id);
					if (i == 0 || core.getFlag("A21boss_2p", 0) >= 2) {
						if (i <= 3) {
							core.setBlock(ids_list[i + 1], toX, toY);
							core.drawAnimate("dark_mute", toX, toY);
							darksound = true;
						}
					}
				}
			}
		};

		if (enemyId == "E21Add1" && core.getFlag("A21boss_1p", 0) < 5) {
			core.plugin.updateBoss21Info(2);
		}
		if (enemyId == "E888" && core.getFlag("A21boss_1p", 0) < 4) {
			var r = 0;
			while (r < 11) {
				r += 1;
				proc_fn(-r, -r, 1);
				proc_fn(-r, r, 1);
				proc_fn(r, -r, 1);
				proc_fn(r, r, 1);
			}
		}
		if (enemyId == "E889" && core.getFlag("A21boss_2p", 0) < 4) {
			var r = 0;
			while (r < 11) {
				r += 2;
				proc_fn(-r, 0, 2);
				proc_fn(r, 0, 2);
				proc_fn(0, -r, 2);
				proc_fn(0, r, 2);
			}
		}
		if (core.getFlag("A21boss_battle") == 3 && core.getFlag("A21boss_2p", 0) < 5) {
			core.setFlag("A21boss_battle", 0);
			proc_fn(-1, -1, 2);
			proc_fn(-1, 1, 2);
			proc_fn(1, -1, 2);
			proc_fn(1, 1, 2);
		}
		if (!core.isReplaying()) {
			if (firesound) {
				core.playSound("118-Fire02.ogg");
			}
			if (darksound) {
				core.playSound("139-Darkness02.ogg");
			}
		}
	}
	// 第四章前 boss 战
	if (core.getFlag("Ch4_boss_phase", 0) > 0) {
		core.insertCommonEvent("Ch4Boss", [x, y]);
	}
	// 第三章 boss 战
	if (core.getFlag("Chap3_boss", 0) == 1) {
		if (core.getFlag("Chap3_boss_phase", 0) == 0) {
			core.addFlag("make_E627_cd", 1);
			if (core.getFlag("make_E627_cd", 0) == 3) {
				core.setFlag("make_E627_cd", 0);
				// 制作爆弹
				for (var i = -1; i <= 1; i += 2) {
					for (var j = -1; j <= 1; j += 2) {
						var toX = core.getHeroLoc('x') + i;
						var toY = core.getHeroLoc('y') + j;
						var set = false;
						if (toX >= 0 && toX <= 12 && toY >= 0 && toY <= 12) {
							if (core.getBlockId(toX, toY) == null) set = true;
							else if (core.getBlockCls(toX, toY) == "enemys" || core.getBlockCls(toX, toY) == "enemy48") {
								var mon_id = core.getBlockId(toX, toY);
								var enemy = core.material.enemys[mon_id];
								set = enemy.title == null || enemy.title == "普通";
							}
						}
						if (set) {
							core.setBlock("E627", toX, toY);
							core.drawAnimate("yongchang", toX, toY);
						}
					}
				}
			}
		} else {
			var is_first = true;
			for (var i = 0; i < 13; ++i) {
				for (var j = 0; j < 13; ++j) {
					if (core.getBlockId(i, j) == "E627") {
						if (is_first) {
							core.drawAnimate("fire", i, j);
							is_first = false;
						} else {
							core.drawAnimate("fire_mute", i, j);
						}
						if (Math.abs(core.getHeroLoc('x') - i) <= 1 && Math.abs(core.getHeroLoc('y') - j) <= 1) {
							core.status.hero.hp -= 2221222;
							core.plugin.popSkillDamage(2221222, i, j);
							if (core.status.hero.hp <= 0) {
								core.lose();
							}
						}
					}
				}
			}
		}
		var bomb_count = 0;
		for (var i = 0; i < 13; ++i) {
			for (var j = 0; j < 13; ++j) {
				if (core.getBlockId(i, j) == "E627" || core.getBlockId(i, j) == "E628") {
					bomb_count += 1;
				}
			}
		}
		core.setFlag("Chap3_boss_bomb_count", bomb_count);
		if (bomb_count >= 21 && core.getFlag("Chap3_boss_phase", 0) == 0) {
			core.setFlag("Chap3_boss_phase", 1);
			core.playSound("se_power0.wav");
			core.drawAnimate("yongchang", 6, 6);
			core.lockControl();
			core.vibrate("horizontal", 2000, 10, 10, function () {
				var damage = 0;
				for (var i = 0; i < 13; ++i) {
					for (var j = 0; j < 13; ++j) {
						if (core.getBlockId(i, j) == "E627") {
							damage += 999891;
							core.drawAnimate("fire_mute", i, j);
						} else if (core.getBlockId(i, j) == "E628") {
							core.drawAnimate("fire_mute", i, j);
							core.setBlock("E627", i, j);
						}
					}
				}
				core.status.hero.hp -= damage;
				core.updateStatusBar();
				core.plugin.popSkillDamage(damage, core.getHeroLoc('x'), core.getHeroLoc('y'));
				core.drawAnimate("thunder3", core.getHeroLoc('x'), core.getHeroLoc('y'));
				core.unlockControl();
			});
		}
	}
	core.updateStatusBar();

	// 如果已有事件正在处理中
	if (core.status.event.id == null)
		core.continueAutomaticRoute();
	else
		core.clearContinueAutomaticRoute();

},
        "afterOpenDoor": function (doorId, x, y) {
	// 开一个门后触发的事件
	if (core.hasItem('I319')) {
		var add = 0;
		if (doorId == "yellowDoor") {
			add = 1;
		} else if (doorId == "blueDoor") {
			add = 3;
		} else if (doorId == "redDoor") {
			add = 10;
		}
		if (add > 0) {
			core.addValpp('atk', add);
			core.addValpp('def', add);
			core.addValpp('mdef', add);
		}
		core.updateStatusBar();
	}
	if (core.plugin.getTalentLv(3) == 3 && doorId == "yellowDoor") {
		core.addFlag("talent3_up3_spe", 1);
		if (core.getFlag("talent3_up3_spe", 0) >= 20) {
			core.drawHeroAnimate("yongchang");
			if (core.getFlag("autoUpgradeTalent", 0) > 0) core.plugin._tryUpgrade(3);
		}
	}
	var todo = [];
	// 检查该点的开门后事件
	if (core.status.floorId) {
		core.push(todo, core.floors[core.status.floorId].afterOpenDoor[x + "," + y]);
	}
	// 检查批量开门事件
	var door = core.getBlockById(doorId);
	if (door && door.event.doorInfo) {
		core.push(todo, door.event.doorInfo.afterOpenDoor);
	}

	if (todo.length > 0) core.insertAction(todo, x, y);

	if (core.status.event.id == null)
		core.continueAutomaticRoute();
	else
		core.clearContinueAutomaticRoute();

	core.plugin.autoGetItem();
	core.plugin.autoBattle();
	/*
	var todo = [];
	// 检查该点的获得开门后事件。
	if (core.status.floorId == null) return;
	var event = core.floors[core.status.floorId].afterOpenDoor[x + "," + y];
	if (event) core.unshift(todo, event);

	if (todo.length > 0) core.insertAction(todo, x, y);

	if (core.status.event.id == null)
		core.continueAutomaticRoute();
	else
		core.clearContinueAutomaticRoute();*/
},
        "afterGetItem": function (itemId, x, y, isGentleClick) {
	// 获得一个道具后触发的事件
	// itemId：获得的道具ID；x和y是该道具所在的坐标
	// isGentleClick：是否是轻按触发的
	if (itemId == 'redGem' || itemId == 'blueGem' || itemId == 'greenGem' || itemId == 'yellowGem' ||
		itemId == 'redGem2' || itemId == 'blueGem2' || itemId == 'greenGem2' || itemId == 'yellowGem2' ||
		itemId == 'redGem3' || itemId == 'blueGem3' || itemId == 'greenGem3' || itemId == 'yellowGem3' ||
		itemId == 'redGem4' || itemId == 'blueGem4' || itemId == 'greenGem4' || itemId == 'yellowGem4' ||
		itemId == 'redGem5' || itemId == 'blueGem5' || itemId == 'greenGem5' || itemId == 'yellowGem5' ||
		itemId == 'redGem6' || itemId == 'blueGem6' || itemId == 'greenGem6' || itemId == 'yellowGem6' ||
		itemId == 'redGem7' || itemId == 'blueGem7' || itemId == 'greenGem7' || itemId == 'yellowGem7' ||
		itemId == 'redGem8' || itemId == 'blueGem8' || itemId == 'greenGem8' || itemId == 'yellowGem8' ||
		itemId == 'redGem9' || itemId == 'blueGem9' || itemId == 'greenGem9' || itemId == 'yellowGem9' ||
		itemId == 'blackGem') {
		core.playSound('pickGem.wav');
	} else if (itemId == 'yellowKey' || itemId == 'blueKey' || itemId == 'redKey' || itemId == 'greenKey' ||
		itemId == 'yellowKey3' || itemId == 'blueKey3' || itemId == 'redKey3') {
		core.playSound('pickKey.wav');
	} else if (itemId == 'redPotion' || itemId == 'bluePotion' || itemId == 'yellowPotion' || itemId == 'greenPotion' ||
		itemId == 'manaItem' || itemId == 'bigManaitem' || itemId == 'bigRedPotion' || itemId == 'bigBluePotion' || itemId == 'bigYellowPotion' || itemId == 'bigGreenPotion' ||
		itemId == 'hugeRedPotion' || itemId == 'hugeBluePotion' || itemId == 'hugeYellowPotion' || itemId == 'hugeGreenPotion' ||
		itemId == 'giantRedPotion' || itemId == 'giantBluePotion' || itemId == 'giantYellowPotion' || itemId == 'giantGreenPotion') {
		core.playSound('pickPotion.wav');
		if (core.getTalentLv(10) == 1) {
			core.addFlag("talent10_up2_spe", 1);
		}
	} else if (itemId == 'superPotion' || itemId == 'superPotion_s') {
		core.playSound('pickPotion2.wav');
	} else if (["redRHeart", "blueRHeart", "yellowRHeart", "greenRHeart"].indexOf(itemId) != -1) {
		core.drawHeroAnimate("dark2");
	} else {
		core.playSound('item.mp3');
	}

	if (core.getFlag("A21boss", 0) == 1) {
		var firesound = false;
		if (core.getFlag("A21boss_1p", 0) < 5) {
			core.addFlag("A21boss_pick", 1);
			// 召唤傲慢之魂
			var proc_fn = function (i, j) {
				var toX = core.getHeroLoc('x') + i;
				var toY = core.getHeroLoc('y') + j;
				var set = false;
				if (toX >= 0 && toX <= 12 && toY >= 0 && toY <= 12) {
					if (core.getBlockId(toX, toY) == null) set = true;
				}
				if (set) {
					core.setBlock("E21Add1", toX, toY);
					core.drawAnimate("fire3_mute", toX, toY);
					firesound = true;
				}
			};
			if (core.getFlag("A21boss_pick") == 2) {
				core.setFlag("A21boss_pick", 0);
				proc_fn(-1, -1);
				proc_fn(-1, 1);
				proc_fn(1, -1);
				proc_fn(1, 1);
				if (core.getFlag("A21boss_1p", 0) >= 2) {
					proc_fn(-2, -2);
					proc_fn(-2, 2);
					proc_fn(2, -2);
					proc_fn(2, 2);
					proc_fn(-2, 0);
					proc_fn(2, 0);
					proc_fn(0, -2);
					proc_fn(0, 2);
				}
			}
		}
		if (!core.isReplaying() && firesound) {
			core.playSound("118-Fire02.ogg");
		}

		var boss2p = core.getFlag("A21boss_2p", 0);
		if (boss2p < 5) {
			core.plugin.updateBoss21Info(4);
			/* 拾取元素后造成伤害
			if (boss2p >= 1) {
				var range = 1;
				if (boss2p >= 3) {
					range = 2;
				}
				var damage = 50000000;
				for (var i = -range; i <= range; ++i) {
					for (var j = -range; j <= range; ++j) {
						// deal damage
						var cur_x = x + i,
							cur_y = y + j;
						if (core.plugin.isEnemy(cur_x, cur_y)) {
							if (core.getBlockId(cur_x, cur_y) == "E889") {} else if (core.getBlockId(cur_x, cur_y) == "E888" && core.getFlag("A21boss_1p", 0) >= 4) {} else {
								core.events.setEnemyOnPointAdd(cur_x, cur_y, null, "hp", damage, "-=");
							}
						}
					}
				}
				core.status.hero.hp -= damage;
				core.plugin.popSkillDamage(damage, core.status.hero.loc.x, core.status.hero.loc.y);
				if (core.status.hero.hp <= 0) core.lose();
			}*/
		}
		core.insertCommonEvent("Ch4_2BossDraw");
	} // end Chap4_2 boss

	// 第二个商店买完东西之后自动关闭
	// 这个实现有点丑陋，但是我实在不知道怎么让道具商店购买物品后触发事件流（/敲打
	if (itemId == "skill1" || itemId == "skill2") {
		if (core.hasItem("skill1") && core.hasItem("skill2")) {
			core.setShopVisited("12FShop", false);
			core.setFlag("12FShopClose", true);
			core.setBlock(132, 10, 4, "MT12");
		}
	}
	if ((itemId == "I343" && core.getFlag("skill0_buff_used", 0) == 3) ||
		(core.getFlag("skill0_buff_used", 0) == 3 && core.hasItem("I343"))) {
		core.setShopVisited("12FShop_easy", false);
		core.setFlag("12FShopClose", true);
		core.setBlock(132, 10, 4, "MT12");
	}
	// 首次获得能量
	if (itemId == 'manaItem' && core.getFlag("getManaHint", 0) == 1) {
		core.setFlag("getManaHint", 0);
		if (core.getFlag('hard') == 1)
			core.insertAction("\t[芳芷,hero2]是能量块，应该有什么办法能利用它。");
		else
			core.insertAction("\t[芳芷,hero2]是能量块，应该有什么办法把它释放出去作为你的战斗手段。");
	}
	// 首次获得黑宝石
	if (core.getFlag("current_chapter", 0) == 1 && itemId == 'blackGem' && !core.getFlag("getBlackGem", 0)) {
		core.setFlag("getBlackGem", 1);
		core.insertAction("\t[芳芷,hero2]黑宝石，似乎和机器之心的材料很相似，能够让它给你带来更大的增幅。");
	}

	var todo = [];
	// 检查该点的获得道具后事件。
	if (core.status.floorId == null) return;
	var event = core.floors[core.status.floorId].afterGetItem[x + "," + y];
	if (event && (event instanceof Array || !isGentleClick || !event.disableOnGentleClick)) {
		core.unshift(todo, event);
	}

	if (todo.length > 0) core.insertAction(todo, x, y);
},
        "afterPushBox": function () {
	// 推箱子后的事件
	if (core.searchBlock('box').length == 0) {
		// 可以通过if语句来进行开门操作
		/*
		if (core.status.floorId=='xxx') { // 在某个楼层
			core.insertAction([ // 插入一条事件
				{"type": "openDoor", "loc": [x,y]} // 开门
			])
		}
		*/
	}
}
    },
    "enemys": {
        "getSpecials": function () {
	// 获得怪物的特殊属性，每一行定义一个特殊属性。
	// 分为五项，第一项为该特殊属性的数字，第二项为特殊属性的名字，第三项为特殊属性的描述
	// 第四项为该特殊属性的颜色，可以写十六进制 #RRGGBB 或者 [r,g,b,a] 四元数组
	// 第五项为该特殊属性的标记；目前 1 代表是地图类技能（需要进行遍历全图）
	// 名字和描述可以直接写字符串，也可以写个function将怪物传进去
	return [
		[1, function (enemy) {
			if (!enemy.value28 || enemy.value28 == 1)
				return "先攻";
			if (enemy.value28 < 0) return "迟钝";
			return "抢攻";
		}, function (enemy) {
			if (enemy.value28 < 0)
				return "战斗前被额外攻击\r[yellow]" + -enemy.value28 + "\r回合";
			return "战斗前额外攻击\r[yellow]" + (enemy.value28 || 1) + "\r回合";
		}, "#ffcc33"],
		[2, "魔攻", "战斗中，无视角色防御", "#bbb0ff"],
		[3, "坚固", "防御不小于对方攻击-1，并免疫技能伤害", "#c0b088"],
		[4, "2连击", "每回合攻击\r[yellow]2\r次", "#ffee77"],
		[5, "3连击", "每回合攻击\r[yellow]3\r次", "#ffee77"],
		[6, function (enemy) { return (enemy.n || '') + "连击"; }, function (enemy) { return "每回合攻击\r[yellow]" + (enemy.n || 4) + "\r次"; }, "#ffee77"],
		[7, "破甲", function (enemy) { return "强力的攻击粉碎敌人的护甲\n首次攻击时，附加对方防御的\r[yellow]" + Math.floor(100 * (enemy.defValue || core.values.breakArmor || 0)) + "%\r作为伤害"; }, "#b30000"],
		[8, "反伤", function (enemy) { return "来犯之敌，自讨苦吃。\n角色攻击时，攻击力的\r[yellow]" + Math.floor(enemy.atkValue || core.values.counterAttack || 0) + "%\r也会伤害自身。此伤害无视防御。"; }, "#ffaa44"],
		[9, "净化", function (enemy) { return "\r[\#e525ff]【红海技能】\r战斗前，附加对方护盾的\r[yellow]" + (enemy.n || core.values.purify) + "\r倍作为伤害"; }, "#80eed6"],
		[10, "模仿", "攻防与角色攻防相等", "#b0c0dd"],
		[11, "吸血", function (enemy) {
			var str = "\r[\#e525ff]【红海技能】\r战斗前，首先吸取对方的" + Math.floor(100 * enemy.value || 0) + "%生命（约" + Math.floor((enemy.value || 0) * core.getStatus('hp')) + "点）作为伤害" + (enemy.add ? "，并把伤害数值加到自身生命上" : "");
			if (core.hasItem("I_noVampire")) str += "\r[yellow]（对你无效）\r";
			return str;
		}, "#ff00d2"],
		[12, "中毒", "战斗后，角色陷入中毒状态，每一步损失生命" + core.values.poisonDamage + "点", "#99ee88"],
		[13, "衰弱", "战斗后，角色陷入衰弱状态，攻防暂时下降" + (core.values.weakValue >= 1 ? core.values.weakValue + "点" : parseInt(core.values.weakValue * 100) + "%"), "#f0bbcc"],
		[14, "诅咒", "战斗后，角色陷入诅咒状态，战斗无法获得金币和经验", "#bbeef0"],
		[15, "领域", function (enemy) { return "角色经过周围\r[yellow]" + (enemy.zoneSquare ? "方形" : "十字") + "\r范围内\r[yellow]" + (enemy.range || 1) + "\r格时受到\r[yellow]" + core.formatBigNumber(enemy.value || 0) + "\r点伤害"; }, "#c677dd"],
		[16, function (enemy) {
			if (enemy.damage2 > 0) return "夹伤";
			if (enemy.value >= 100) return "夹 毙";
			if (enemy.value > 99) return "夹爆";
			return "夹击";
		}, function (enemy) {
			if (enemy.damage2 > 0) return "经过两个相同的怪物中间，角色受到\r[yellow]" + core.formatBigNumber(enemy.damage2) + "\r点伤害";
			if (enemy.value > 99) return "\r[\#e525ff]【血海奥义】\r经过两个相同的怪物中间，角色受到当前生命值\r[yellow]" + enemy.value + "%\r的伤害";
			return "\r[\#e525ff]【红海技能】\r经过两个相同的怪物中间，角色受到当前生命值\r[yellow]" + enemy.value + "%\r的伤害";
		}, "#bb99ee"],
		[17, "仇恨", "战斗前，附加之前积累的仇恨值作为伤害；战斗后，释放一半的仇恨值。（每杀死一个怪物获得" + (core.values.hatred || 0) + "点仇恨值）", "#b0b666"],
		[18, function (enemy) {
			if (!enemy.value || enemy.value == 0) return "后退";
			return "阻击";
		}, function (enemy) {
			if (!enemy.value || enemy.value == 0) return "角色经过身边时，后退一格";
			return "角色经过身边时造成\r[yellow]" + core.formatBigNumber(enemy.value || 0) + "\r点伤害，并后退一格";
		}, "#8888e6"],
		[19, "自爆", "战斗后角色的生命值变成1", "#ff6666"],
		[20, "无敌", function (enemy) {
			if (enemy.id == "E905" || enemy.id == "E906") return "\r[\#ffee28]【超凡法则】\r已经完全失去战斗力，但由于另一位大帝的存在，免疫所有伤害。";
			return "\r[\#ffee28]【至尊法则】超越常人认知的守御之力\r\n免疫所有伤害";
		}, "#aaaaaa"],
		[21, "退化", function (enemy) { return "战斗后角色永久下降" + (enemy.atkValue || 0) + "点攻击和" + (enemy.defValue || 0) + "点防御"; }, "#ff0000"],
		[22, "亡命", function (enemy) { return "以拼命态势死战到底。\n战斗前，造成\r[yellow]" + (enemy.damage || 0) + "\r点固定伤害。"; }, "#ff9977"],
		[23, "重生", "被击败后，角色转换楼层则怪物将再次出现", "#a0e0ff"],
		[24, "射击", function (enemy) { return "角色经过同行或同列可见范围时，造成\r[yellow]" + core.formatBigNumber(enemy.snipe_damage) + "\r点伤害，可被防御减免。"; }, "#dda0dd"],
		[25, function (enemy) {
			if (enemy.auraName) return enemy.auraName;
			if (enemy.hpValue && enemy.atkValue && enemy.defValue) return "魔力光环";
			if (enemy.hpValue) {
				if (enemy.hpValue > 0) return "活力光环";
				return "懒散光环";
			}
			if (enemy.atkValue) {
				if (enemy.atkValue > 0) return "狂暴光环";
				return "静谧光环";
			}
			if (enemy.defValue) {
				if (enemy.defValue > 0) return "坚毅光环";
				return "软弱光环";
			}
			return "光环";
		}, function (enemy) {
			var str;
			if (!enemy.range) {
				str = "同楼层所有敌人";
			} else {
				str = "周围" + (enemy.zoneSquare ? "方形" : "十字") + "范围内\r[yellow]" + (enemy.range || 1) + "\r格的敌人";
			}
			if (enemy.hpValue) {
				if (enemy.hpValue > 0) str += "生命提升\r[yellow]" + enemy.hpValue + "%\r，";
				else str += "生命降低\r[yellow]" + (-enemy.hpValue) + "%\r，";
			}
			if (enemy.atkValue) {
				if (enemy.atkValue > 0) str += "攻击提升\r[yellow]" + enemy.atkValue + "%\r，";
				else str += "攻击降低\r[yellow]" + (-enemy.atkValue) + "%\r，";
			}
			if (enemy.defValue) {
				if (enemy.defValue > 0) str += "防御提升\r[yellow]" + enemy.defValue + "%\r，";
				else str += "防御降低\r[yellow]" + (-enemy.defValue) + "%\r，";
			}
			str += (enemy.add ? "线性叠加" : "不可叠加");
			return str;
		}, "#e6e099", 1],
		[26, "支援", "同行或同列可到达范围内敌人受到攻击时将上前支援，跟随敌人战斗。", "#77c0b6", 1],
		[27, "捕捉", "角色走到周围十字时会强制进行战斗。", "#c0ddbb"],
		[28, function (enemy) {
			if (enemy.value28 > 0) return "迅捷光环";
			return "怠惰光环";
		}, function (enemy) {
			var str;
			if (!enemy.range) {
				str = "同楼层所有敌人";
			} else {
				str = "周围" + (enemy.zoneSquare ? "方形" : "十字") + "范围内\r[yellow]" + (enemy.range || 1) + "\r格的敌人";
			}
			if (enemy.value28 > 0) {
				str += "获得额外\r[yellow]" + (enemy.value28 || 0) + "\r回合先攻，";
			} else {
				str += "被额外先攻\r[yellow]" + (-enemy.value28 || 0) + "\r回合，";
			}
			str += (enemy.add ? "可叠加" : "不可叠加");
			return str;
		}, "#00dd00", 1],
		[29, "闪避", function (enemy) { return "受到的普通攻击伤害降低\r[yellow]" + (enemy.value29 || 0) + "%\r。"; }, "#c3c3c3"],
		[30, "匙之力", function (enemy) {
			var str = "\r[\#e525ff]【圣匙战技】从附近散落的钥匙上汲取力量，强化自身\r\n";
			if (enemy.range) str += "周围" + (enemy.zoneSquare ? "方形" : "十字") + "范围内\r[yellow]" + enemy.range + "\r格，每存在一把黄钥匙，";
			else str += "同楼层每存在一把黄钥匙，";
			if (enemy.value) str += "生命增加\r[yellow]" + enemy.value + "\r点，";
			if (enemy.atkValue) str += "攻击增加\r[yellow]" + enemy.atkValue + "\r点，";
			if (enemy.defValue) str += "防御增加\r[yellow]" + enemy.defValue + "\r点，";
			str += "线性叠加。1把蓝钥匙=3把黄钥匙，1把红钥匙=10把黄钥匙。";
			if (!enemy.range) str += "（加成已显示在手册中）";
			return str;
		}, "#A0A000", 1],
		[31, "穿刺", function (enemy) { return "自身的攻击无视角色\r[yellow]" + (enemy.value31 || 0) + "%\r的防御力。"; }],
		[32, "亡命光环", function (enemy) {
			var str = "血战到底！\n";
			if (!enemy.range) {
				str += "同楼层所有敌人";
			} else {
				str += "周围" + (enemy.zoneSquare ? "方形" : "十字") + "范围内\r[yellow]" + (enemy.range || 1) + "\r格的敌人";
			}
			str += "阵亡时造成额外\r[yellow]" + (enemy.value32 || 0) + "\r点伤害，可叠加";
			return str;
		}, "#fff900", 1],
		[33, "绝缘", function (enemy) { if (core.getFlag("hard") == 1 && core.getFlag("current_chapter", 0) < 3) { return "此技能在简化难度下无效！"; } return "免疫技能伤害。"; }, "#ddd900"],
		[34, "追击", function (enemy) {
			var str = "站住别动！\n角色经过怪物同行或同列时，会尝试朝角色移动一格。";
			if (core.getFlag("chase_no_force", 0) == 1)
				return str;
			return str + "\r[orange]若移动前与角色相邻，则强制战斗。\r";
		}],
		[35, "冰冻", function (enemy) { return "战斗结束后，角色获得\r[yellow]" + (enemy.value35 || 0) + "\r层冰冻状态，每层使得角色战斗开始时被先攻1回合。每次战斗结束时减少1层该状态。"; }, "#747dff"],
		[36, "爆匙", "\r[\#e525ff]【圣匙战技】引动钥匙之力，毁灭敌人\r\n战斗开始时，令角色身上所有钥匙爆炸，每把爆炸的黄钥匙使角色被先攻1回合，蓝钥匙3回合，红钥匙10回合，可叠加。", "#ff0000"],
		[37, "匙之意", function (enemy) {
			var str = "\r[\#e525ff]【圣匙战技】十分精通钥匙之道，能从对方身上的钥匙获取力量\r\n角色身上每存在一把黄钥匙，";
			if (enemy.value) str += "生命增加\r[yellow]" + enemy.value + "\r点，";
			if (enemy.atkValue) str += "攻击增加\r[yellow]" + enemy.atkValue + "\r点，";
			if (enemy.defValue) str += "防御增加\r[yellow]" + enemy.defValue + "\r点，";
			str += "可叠加。1把蓝钥匙=3把黄钥匙，1把红钥匙=10把黄钥匙。（加成已显示在手册中）";
			return str;
		}, "#CCCC00", 1],
		[38, "法力燃烧", function (enemy) {
			var str = "燃烧对方\r[yellow]" + (enemy.value38_1 || 0) + "\r点能量，并造成不足部分\r[yellow]" + core.formatBigNumber(enemy.value38_2 || 0) + "\r倍的伤害。";
			if (core.getFlag("current_chapter", 0) < 3) str += "晚于角色技能发动。";
			return str;
		}, "#c677dd"],
		[39, "远程支援", function (enemy) {
			var str;
			if (!enemy.range) {
				str = "同楼层所有其他敌人";
			} else {
				str = "周围" + (enemy.zoneSquare ? "方形" : "十字") + "范围内\r[yellow]" + (enemy.range || 1) + "\r格的其他敌人";
			}
			return str + "与角色战斗时，每回合附加一次攻击。";
		}, "#409056", 1],
		[40, "暴戾", function (enemy) {
			var str = "逐渐疯狂的心。\n战斗结束后，角色获得\r[yellow]" + enemy.value40 + "\r层暴戾状态，每层使得造成和受到的伤害均提升1%，线性叠加。每次战斗结束时减少";
			if (core.getFlag("hard") == 2) {
				return str + "\r[orange]一\r层。";
			} else {
				return str + "\r[orange]两\r层。";
			}
		}, "#ff00a5"],
		[41, "反击", "睚眦之怨，无不报复\n每次即将受到攻击时都会立刻攻击敌人1次", "#a04056"],
		[42, "仿攻", "攻击力若低于角色，则变为与角色相同", "#ff00d2"],
		[43, "刚毅护盾", "每次受到的伤害不大于最大生命值的10%。", "#fff900"],
		[44, "疯狂", function (enemy) {
			if (core.getFlag("hard", 0) == 1)
				return "杀戮，杀戮！\n战斗开始时，角色每有1层暴戾就\r[yellow]攻击空气\r1回合，战斗结束时暴戾层数减半。";
			return "杀戮，杀戮！\n战斗开始时，角色每有1层暴戾就\r[orange]自残\r1回合，战斗结束时暴戾层数减半。";
		}, "#ff00a5"],
		[45, "强击", function (enemy) { return "拥有惊人爆发力的一击\n在进行首次攻击的回合，攻击力提升\r[yellow]" + (enemy.value45 || 0) + "\r倍。" }, "#b30000"],
		[46, function (enemy) {
			if (enemy.value46 < 0) return "枯萎之源";
			return "生生不息";
		}, function (enemy) {
			var str;
			if (!enemy.range) {
				str = "同楼层所有敌人";
			} else {
				str = "周围" + (enemy.zoneSquare ? "方形" : "十字") + "范围内\r[yellow]" + (enemy.range || 1) + "\r格的敌人";
			}
			if (enemy.value46 > 0) {
				str += "每次受到攻击时回复\r[yellow]" + core.formatBigNumber(enemy.value46 || 0) + "\r点生命，";
			} else {
				str += "每次受到攻击时失去\r[yellow]" + core.formatBigNumber(-enemy.value46 || 0) + "\r点生命，";
			}
			str += (enemy.add ? "可叠加" : "不可叠加");
			return str;
		}, "#00dd00", 1],
		[47, "沉醉", function (enemy) { return "感官在奢华的生活中逐渐钝化\n战斗结束后，角色获得\r[yellow]" + enemy.value40 + "\r层沉醉状态，每层使得造成和受到的伤害均减少1%，线性叠加。每次战斗结束时减少一层。"; }, "#b400ff"],
		[48, function (enemy) {
			if (enemy.atkValue > 0) {
				if (enemy.add) return "颐指气使";
				return "傲慢之心";
			}
			return "协同之力";
		}, function (enemy) {
			var str;
			if (enemy.atkValue > 0) {
				str = "傲慢者不屑于与任何人为伍。\n";
				if (enemy.range) {
					str += "周围\r[yellow]" + (enemy.zoneSquare ? "方形" : "十字") + "\r范围内\r[yellow]" + enemy.range + "\r格，";
				} else {
					str += "同楼层";
				}
				if (enemy.add) {
					str += "每存在一个自身之外的友方单位，自身";
				} else {
					str += "如果存在友方单位，自身";
				}
				if (enemy.atkValue > 0) str += "攻击下降\r[yellow]" + core.formatBigNumber(enemy.atkValue || 0) + "\r点，";
				if (enemy.defValue > 0) str += "防御下降\r[yellow]" + core.formatBigNumber(enemy.defValue || 0) + "\r点，";
				if (enemy.hpValue > 0) str += "生命下降\r[yellow]" + core.formatBigNumber(enemy.hpValue || 0) + "\r点，";
				if (enemy.add) {
					str += "可叠加。";
				} else {
					str += "不可叠加。";
				}
				return str;
			}
			str = "从附近的友方单位获取力量和勇气\n";
			if (enemy.range) {
				str += "周围\r[yellow]" + (enemy.zoneSquare ? "方形" : "十字") + "\r范围内\r[yellow]" + enemy.range + "\r格，";
			} else {
				str += "同楼层";
			}
			if (enemy.add) {
				str += "每存在一个自身之外的友方单位，自身";
			} else {
				str += "如果存在友方单位，自身";
			}
			if (enemy.atkValue < 0) str += "攻击提升\r[yellow]" + core.formatBigNumber(-enemy.atkValue || 0) + "\r点，";
			if (enemy.defValue < 0) str += "防御提升\r[yellow]" + core.formatBigNumber(-enemy.defValue || 0) + "\r点，";
			if (enemy.hpValue < 0) str += "生命提升\r[yellow]" + core.formatBigNumber(-enemy.hpValue || 0) + "\r点，";
			if (enemy.add) {
				str += "可叠加。";
			} else {
				str += "不可叠加。";
			}
			return str;
		}, "#ffb040", 1],
		[49, "清洁", function (enemy) { return "使人焕然一新的治愈之力\n战斗后，角色清除所有负面状态。若清除前无负面状态，则恢复\r[yellow]" + core.formatBigNumber(enemy.value35 || 0) + "\r点生命值。"; }, "#00ff00"],
		[50, "极奢", "令人不能自拔的泡沫……\n战斗后，沉醉状态层数加倍。", "#ffff00"],
		[51, "凋零之歌", function (enemy) { return "挽留不住的美好年华……\n战斗中，角色每回合失去\r[yellow]" + core.formatBigNumber(enemy.value46 || 0) + "\r点护盾，若无护盾则失去生命。"; }, "#bd26ce"],
		[52, "狂暴之力", function (enemy) { return "战斗后，角色基础攻击暂时提升\r[yellow]" + core.formatBigNumber(enemy.value52 || 0) + "\r点，持续3场战斗。不可叠加，不可与其他提升共存。"; }, "#dd0000"],
		[53, "坚韧之力", function (enemy) { return "战斗后，角色基础防御暂时提升\r[yellow]" + core.formatBigNumber(enemy.value53 || 0) + "\r点，持续3场战斗。不可叠加，不可与其他提升共存。"; }, "#0088ff"],
		[54, "护盾之力", function (enemy) { return "战斗后，角色基础护盾暂时提升\r[yellow]" + core.formatBigNumber(enemy.value54 || 0) + "\r点，持续3场战斗。不可叠加，不可与其他提升共存。"; }, "#00dd00"],
		[55, "中子束", "\r[\#e525ff]【星际战技】\r每回合普攻2次，魔攻1次。", "#ff0000"],
		[56, "驱散", "战斗前，清除角色身上的有益状态。", "#00d2d4"],
		[57, "大爆炸", function (enemy) { return "碰到任何物体时爆炸，对周围一圈的所有单位造成\r[yellow]" + enemy.damage + "\r点不可被抵挡的伤害，并留下一滩熔岩。"; }, "#ff0000"],
		[58, "追踪", "角色每移动一步，就会尝试朝角色移动一步。若移动前相邻则强制战斗。", "#dd4444"],
		[59, "穿透", "战斗中，无视角色护盾", "#00d2d4"],
		[60, "挫锐", function (enemy) { return "战斗中，角色攻击力减少\r[yellow]" + (enemy.value60 || 0) + "%\r。" }, "#c0b088"],
		[61, function (enemy) {
			if (enemy.atkValue > 0 || enemy.defValue > 0 || enemy.hpValue > 0) { return "协同作战"; } else return "反向协同";
		}, function (enemy) {
			var str;
			if (enemy.atkValue > 0 || enemy.defValue > 0 || enemy.hpValue > 0) {
				str = "United, we are strong!\n周围\r[yellow]" + (enemy.zoneSquare ? "方形" : "十字") + "\r范围内\r[yellow]" + (enemy.range || 1) + "\r格，每存在一个自身之外的拥有本属性的友方单位，自身";
			} else {
				str = "Together, we are five!\n周围\r[yellow]" + (enemy.zoneSquare ? "方形" : "十字") + "\r范围内\r[yellow]" + (enemy.range || 1) + "\r格，每存在一个自身之外的拥有本属性的友方单位，自身";
			}
			if (enemy.atkValue > 0) str += "攻击提升\r[yellow]" + core.formatBigNumber(enemy.atkValue || 0) + "\r点，";
			if (enemy.defValue > 0) str += "防御提升\r[yellow]" + core.formatBigNumber(enemy.defValue || 0) + "\r点，";
			if (enemy.hpValue > 0) str += "生命提升\r[yellow]" + core.formatBigNumber(enemy.hpValue || 0) + "\r点，";
			if (enemy.atkValue < 0) str += "攻击降低\r[yellow]" + core.formatBigNumber(-enemy.atkValue) + "\r点，";
			if (enemy.defValue < 0) str += "防御降低\r[yellow]" + core.formatBigNumber(-enemy.defValue) + "\r点，";
			if (enemy.hpValue < 0) str += "生命降低\r[yellow]" + core.formatBigNumber(-enemy.hpValue) + "\r点，";
			str += "可叠加。";
			return str;
		}, "#ffb040", 1],
		[62, "命源封印", "\r[\#e525ff]【残缺奥义】似乎是某个血海奥义的劣化版\r\n战斗后主角生命值降为1，下次战斗后返还因此减少的生命值。", "#ff8860"],
		[63, "残暴斩杀", "\r[\#e525ff]【魔方战技】来自魔方世界的强悍技能\r\n战斗开始时，若角色生命值不大于怪物生命，则直接\r[orange]暴毙\r", "#ff0000"],
		[64, "完全毁灭", function (enemy) { return "\r[\#e525ff]【重要】\r战斗结束时产生大爆炸，摧毁周围方形范围内\r[yellow]" + (enemy.range || 1) + "\r格的补给品、非绿色的门和钥匙，并对角色造成\r[yellow]" + core.formatBigNumber(enemy.damage || 0) + "\r点伤害"; }, "#ff60dd"],
		[65, "腐蚀光环", function (enemy) {
			var str;
			if (!enemy.range) {
				str = "同楼层发生战斗时";
			} else {
				str = "周围" + (enemy.zoneSquare ? "方形" : "十字") + "范围内\r[yellow]" + (enemy.range || 1) + "\r格发生战斗时";
			}
			str += "角色每点护盾抵挡伤害量降低\r[yellow]" + (enemy.value65 || 0) + "\r点，可叠加。";
			return str;
		}, "#12a012", 1],
		[66, "破军", function (enemy) { return "\r[\#e525ff]【阴间刀法】若敢来犯，必叫你大败而归！\r\n角色经过周围\r[yellow]" + (enemy.zoneSquare ? "方形" : "十字") + "\r范围内\r[yellow]" + (enemy.range || 1) + "\r格时生命降为1，被扣除的生命在下次战斗后返还。"; }, "#ff8860", 1],
		[67, "真视", function (enemy) { return "角色经过周围\r[yellow]" + (enemy.zoneSquare ? "方形" : "十字") + "\r范围内\r[yellow]" + (enemy.range || 1) + "\r格时，立即退出隐身状态。"; }, "#80eed6", 1],
		[68, "空间力场", "角色在本层不能使用\\i[fly]楼层传送器。", "#ff00d2"],
		[69, "援护", "\r[\#e525ff]【盾神战技】当角色靠近友军时挺身而出\r\n角色与该敌人的友军相距2格时，如果该敌人、友军和角色依次位于同一条线，且中间没有障碍物，\r[yellow]跳到角色和友军中间\r。", "#77c0b6", 1],
		[70, "窥血为攻", "\r[\#e525ff]【魔方战技】汝之生命，吾之利刃\r\n战斗开始时，自身攻击力变为角色当前生命值的10%，向下取整。", "#ff0000"],
		[71, "虚化", "角色处于隐身状态时可以穿过此敌人，未处于隐身状态下靠近时强制战斗。", "#c3c3c3"],
		[72, "移形换位", "\r[\#e525ff]【传奇奥义】为复仇而生的技能，却往往被用来保护队友\r\n同行列的友军被角色接近后，若自身与友军中间没有门，与友军互换位置。", "#30dddd"],
		[73, "轻风", "战斗后，角色被推开，期间无视地图事件。", "#bbeef0"],
		[74, "阳炎冲击", function (enemy) { return "\r[\#e525ff]【传奇奥义】哈雷克之火葬魔咒\r\n战斗结束时以自身为中心产生烈焰，使周围方形范围内\r[yellow]" + (enemy.range || 1) + "\r格的补给品、门、钥匙、以及角色，共同分摊\r[yellow]" + core.formatBigNumber(enemy.damage || 0) + "\r点伤害。"; }, "#ff60dd"],
		[75, "激爆", function (enemy) { return "\r[\#e525ff]【血海奥义】\r战斗后，摧毁同行列的补给品和非绿色的门，并对角色造成\r[yellow]" + core.formatBigNumber(enemy.damage || 0) + "\r点伤害"; }, "#ff0000"],
		[76, "命令光环", function (enemy) {
			var str;
			if (!enemy.range) {
				str = "同楼层所有敌人";
			} else {
				str = "周围" + (enemy.zoneSquare ? "方形" : "十字") + "范围内\r[yellow]" + (enemy.range || 1) + "\r格的敌人";
			}
			str += "在被角色靠近时主动发起战斗。";
			return str;
		}, "#ffee28", 1],
		[77, "游猎", function (enemy) { return "\r[\#00a0ff]【蓝海战技】源自一座永不崩陨的圣城\r\n角色经过同行列可见范围时发起射击，造成\r[yellow]" + core.formatBigNumber(enemy.snipe_damage) + "\r点伤害，可被防御抵挡。如果角色经过相邻行列可见范围，则尝试移动一格后进行射击。"; }, "#6006c3", 1],
		[78, "闭门", "\r[\#00a0ff]【蓝海技能】似乎是某种法则的劣化版\r\n战斗后，在以角色为中心的对称位置关上一扇\\i[yellowDoor]黄门。如果此位置是物品、非绿色门或不超过精英阶的敌人，会先将其摧毁。", "#aabb20"],
		[79, "游击", function (enemy) { return "\r[\#00a0ff]【游击战法】敌进我退，敌驻我扰，敌退我追\r\n角色移动到同行列3格以内时，造成\r[yellow]" + core.formatBigNumber(enemy.value || 0) + "\r点伤害，并尝试与角色保持2格距离。"; }, "#8888e6"],
		[80, "残虐", function (enemy) { return "战斗中对手没有护盾时，受到额外\r[yellow]" + (enemy.value52 || 0) + "%\r伤害。" }, "#ff9b9b"],
		[81, "追猎", "角色经过此敌人同行或同列时，它会尝试向角色移动一格（不会被物品阻挡，但会被其他敌人或障碍物阻挡）。\r[orange]若移动前或移动后与角色相邻，则强制战斗。\r", "#ff00d2"],
		[82, "刮骨", function (enemy) { return "\r[\#ccaa22]【黄海战技】\r战斗开始时，若角色没有临时护盾，该怪物本场战斗普通攻击造成的伤害提升\r[yellow]" + (enemy.value53 || 0) + "%\r。" }, "#ccaa22"],
		[83, "定时炸弹", function (enemy) { return "\r[\#e525ff]【重要】\r战斗结束时在角色身上留下定时炸弹，角色移动\r[yellow]1\r步后爆炸，摧毁周围方形范围内\r[yellow]" + (enemy.range || 1) + "\r格的补给品、非绿色的门和钥匙，并对角色造成\r[yellow]" + core.formatBigNumber(enemy.damage || 0) + "\r点伤害。身上有炸弹时无法使用\\i[fly]传送器。"; }, "#ff60dd"],
		[84, "誓仇", function (enemy) { return "\r[\#e525ff]【虎魔战技】赐强者以勇气，予弱者以愚蠢\r\n战斗后给角色附加\r[yellow]" + enemy.n + "\r层标记，拥有标记时靠近敌人会\r[orange]强制战斗\r，并且角色每回合受攻击时额外承受\r[yellow]" + core.formatBigNumber(enemy.damage2) + "\r点伤害。每次战斗后减少一层标记。"; }, "#aabb20"],
		[85, "门之力", function (enemy) {
			var str = "\r[\#e525ff]【黑屋战神】从附近的门中汲取力量，强化自身\r\n";
			if (enemy.range) str += "周围" + (enemy.zoneSquare ? "方形" : "十字") + "范围内\r[yellow]" + enemy.range + "\r格，每存在一个黄门，";
			else str += "同楼层每存在一个黄门，";
			if (enemy.hpValue) str += "生命增加\r[yellow]" + core.formatBigNumber(enemy.hpValue) + "\r点，";
			if (enemy.atkValue) str += "攻击增加\r[yellow]" + core.formatBigNumber(enemy.atkValue) + "\r点，";
			if (enemy.defValue) str += "防御增加\r[yellow]" + core.formatBigNumber(enemy.defValue) + "\r点，";
			str += "线性叠加。1蓝门=3黄门，1红门=10黄门。";
			if (!enemy.range) str += "（加成已显示在手册中）";
			return str;
		}, "#a0a000", 1],
		[86, "火焰喷射", function (enemy) { return "\r[\#e525ff]【重要】\r战斗后，角色向身后发射一道火焰，火焰碰到障碍后停止，摧毁路径上的所有非绿色门和补给品，并对途经的敌人造成\r[yellow]" + core.formatBigNumber(enemy.damage2) + "\r点伤害。"; }, "#dd4444"],
		[87, "友军", "这是你的友军。可与其交互以令其撤退。", "#00ff00"],
		[88, "电磁脉冲", "战斗结束后，清空角色的临时护盾。", "#c677dd"],
		[89, "吸噬", function (enemy) { return "战斗中，当角色没有护盾时，敌人造成伤害的\r[yellow]" + enemy.value89 + "%\r会回复其生命。"; }, "#ff6666"],
		[90, "能量之源", "战斗结束后，角色额外获得\r[yellow]2\r层临时护盾。", "#1b00ff"],
		[91, "避战", function (enemy) { return "角色经过身边时造成\r[yellow]" + core.formatBigNumber(enemy.damage2 || 0) + "\r点伤害，并向另外三个方向中可移动距离最远的方向移动一格。距离相同时，优先后退，然后是顺时针的下一个方向。" }, "#fbff00"],
		[92, "熔火", function (enemy) { return "角色经过周围\r[yellow]" + (enemy.zoneSquare ? "方形" : "十字") + "\r范围内\r[yellow]" + (enemy.range || 1) + "\r格时受到\r[yellow]" + (enemy.damage2 || 0) + "\r点伤害，并且使下次熔火伤害增加\r[orange]50%\r，乘法叠加；离开熔火范围后清除伤害加成。"; }, "#dd4444"],
		[93, function (enemy) {
			if (enemy.damage2 < 100) { return "吸域"; }
			return "域 毙";
		}, function (enemy) { return "\r[\#e525ff]【血海奥义】\r角色经过周围\r[yellow]" + (enemy.zoneSquare ? "方形" : "十字") + "\r范围内\r[yellow]" + (enemy.range || 1) + "\r格时受到当前生命值\r[yellow]" + (enemy.damage2 || 0) + "%\r伤害"; }, "#ff00d2"],
		[94, function (enemy) {
			if (enemy.damage2 < 100) { return "吸阻"; }
			return "阻 毙";
		}, function (enemy) { return "\r[\#e525ff]【血海奥义】\r角色经过身边时造成当前生命值\r[yellow]" + (enemy.damage2 || 0) + "%\r伤害，并后退一格"; }, "#ff00d2"],
		[95, "激励", function (enemy) {
			var str = "战斗后，使\r[yellow]" + (enemy.zoneSquare ? "方形" : "十字") + "\r范围内\r[yellow]" + (enemy.range || 1) + "\r格的其他敌人";
			if (enemy.hpValue) str += "生命增加\r[yellow]" + enemy.hpValue + "\r点，";
			if (enemy.atkValue) {
				if (enemy.atkValue >= 0) {
					str += "攻击增加\r[yellow]" + core.formatBigNumber(enemy.atkValue) + "\r点，";
				} else {
					str += "攻击减少\r[yellow]" + core.formatBigNumber(-enemy.atkValue) + "\r点，";
				}
			}
			if (enemy.defValue) {
				if (enemy.defValue >= 0) {
					str += "防御增加\r[yellow]" + core.formatBigNumber(enemy.defValue) + "\r点，";
				} else {
					str += "防御减少\r[yellow]" + core.formatBigNumber(-enemy.defValue) + "\r点，";
				}
			}
			str += "不与同类效果叠加。";
			return str;
		}, "#ffee28"],
		[96, "强夺", function (enemy) {
			return "战斗后，角色立即拾取敌人" + "\r[yellow]" + (enemy.zoneSquare ? "方形" : "十字") + "\r范围内\r[yellow]" + (enemy.range || 1) + "\r格的所有物品";
		}, "#b400ff"],
		[101, "夹匙", "经过两个相同的怪物中间，角色失去1把黄钥匙，若没有钥匙可失去则直接\r[orange]暴毙\r", "#ff00d2"],
		[102, "域匙", function (enemy) {
			return "经过周围\r[yellow]" + (enemy.zoneSquare ? "方形" : "十字") + "\r范围内\r[yellow]" + (enemy.range || 1) + "\r格时角色失去1把黄钥匙，若没有钥匙可失去则直接\r[orange]暴毙\r";
		}, "#ff00d2"],
		[103, "阻匙", function (enemy) {
			return "角色经过身边时失去1把黄钥匙，同时怪物后退一格。若没有钥匙可失去则直接\r[orange]暴毙\r";
		}, "#ff00d2"],
		[104, "无敌", "\r[\#ffee28]【至尊法则】\r免疫除\\i[E363]\r[orange]至尊爆弹\r之外的所有伤害。若角色主动触碰，会被击退3格，受到\r[yellow]300万\r伤害，并眩晕1回合。", "#fbff00"],
		[105, "投掷爆弹", "\r[\#e525ff]【重要】\r向角色投掷\\i[E363]\r[orange]至尊爆弹\r，将角色向前击飞2格并造成\r[yellow]222221\r伤害。", "#e525ff"],
		[106, "地烈炎斩", "锁定角色当前位置，在接下来的2回合分别打击其所在行/列，造成\r[yellow]当前生命值10%+200万\r伤害，并留下熔岩。", "#dd4444"],
		[107, "寒冰导弹", "锁定角色当前位置，3回合后造成5*5的范围打击，造成\r[yellow]当前生命值5%+100万\r伤害、清除范围内的熔岩。", "#747dff"],
		[108, "至尊之怒", "\r[\#ff0000]【危】\r在自身为中心7*7范围内实行毁灭性打击，造成\r[yellow]当前生命值50%+2221万\r伤害。", "#ff0000"],
		[109, "禁魔力场", "在本区域禁用\\i[fly]传送器", "#1b00ff"],
		[110, "重生", "\r[\#ffee28]【至尊法则】重生之塔，流传千古\r\n战斗后，在角色身后生成\\i[E628]休眠态的爆弹。若角色背后是难以被破坏的物体，则不会生成。", "#ffee28"],
		[111, "至尊之力", "\r[\#ffee28]【至尊法则】至尊之影，永世不灭\r\n战斗后，激活场上所有的\\i[E628]休眠态爆弹；若场上存在爆弹或技能\r[#e585ea]爆弹囚牢\r未失效，则自身立即重生。", "#ffee28"],
		[112, "爆弹囚牢", function (enemy) {
			if (core.getFlag("Chap3_boss_phase", 0) == 0)
				return "角色每进行3次战斗，便在角色斜向1格的4个位置生成\\i[E627]激活态爆弹。当场上爆弹总数达到\r[yellow]21\r个时，令每个\\i[E627]激活态爆弹对角色造成\r[yellow]999891\r伤害，激活所有\\i[E628]休眠态爆弹，失去此技能并开启技能\r[red][烈焰审判]\r。";
			return "此技能已失效。";
		}, "#e585ea"],
		[113, "烈焰审判", function (enemy) {
			if (core.getFlag("Chap3_boss_phase", 0) > 0)
				return "角色每次战斗后，所有\\i[E627]激活态爆弹都会立即向周围方形1格喷射火焰，造成\r[yellow]2221222\r伤害。";
			return "\r[yellow]此技能未开启\r。开启后效果：角色每次战斗后，所有\\i[E627]激活态爆弹都会立即向周围方形1格喷射火焰，造成\r[yellow]2221222\r伤害。";
		}, "#dd4444"],
		[114, "命源干涉", "\r[\#ffee28]【超凡法则】以神秘的法则之力直接篡改对方的命源\r\n战斗结束前，将对方的能量值清空，并令其回复损失能量值\r[yellow]30000\r倍的生命。", "#ffee28"],
		[115, "无法侦测", "暂时还无法看穿对方的底细……", "#aaaaaa"],
		[116, "分裂", "死亡后在周围的空地生成\\i[E874]沸物。", "#b0b666"],
		[117, "傲世之主", "\r[\#FF7800]【扭曲现实】\r角色每拾取2个物品，便在角色斜向1格的4个位置进行一次\r[yellow]召唤\r：如果是空地，生成\\i[E21Add1]傲慢之魂。傲慢之魂被摧毁时自身失去\r[yellow]250000\r点攻和\r[yellow]500000\r防。", "#dd0000"],
		[118, "狂妄之主", "\r[\#FF7800]【污染现实】\r角色每进行3次战斗，便在角色斜向1格的4个位置进行一次\r[yellow]召唤\r：如果是空地，生成\\i[redRHeart]红色可爱元素。可爱元素被拾取或摧毁时自身失去\r[yellow]500000\r攻和\r[yellow]250000\r防。", "#b030ff"],
		[119, "永恒蔑视", function (enemy) {
			var str = "\r[\#FF7800]【大帝之力】\r每次被击败后立即重生，攻防复原并获得额外的能力。最多重生\r[yellow]4\r次。";
			var skills = ["重生后在角色斜向的所有位置发动召唤", "每拾取2个物品，也会对斜向2格、同行列2格的位置发动召唤", "重生后发动\r[\#e525ff]【奥义】傲慢之踵\r：对角色施加恶毒的诅咒，使其攻防降低至\r[orange]1\r；强制与身边的敌人战斗；移动后炸毁方形\r[yellow]1\r格范围内的物品，如果没有炸毁任何物品则承受\r[yellow]2.5e\r点伤害；持续\r[orange]5\r步。", "获得被动\r[\#ffee28]【法则】狂傲护体\r：免疫非战斗伤害"];
			for (var i = 0; i < 4; ++i) {
				str += "\n";
				if (i < core.getFlag("A21boss_1p")) { str += "\r[lime]✔\r"; } else { str += "❌"; }
				str += skills[i];
			}
			return str;
		}, "#ff6666"],
		[120, "无尽恶意", function (enemy) {
			var str = "\r[\#FF7800]【大帝之力】\r每次被击败后立即重生，攻防复原并获得额外的能力。最多重生\r[yellow]4\r次。";
			var skills = ["重生后在角色同行列、距离为偶数的位置发动召唤", "召唤对可爱元素存在的位置生效，使其升级", "获得\r[\#e525ff]【奥义】合成大可爱\r：角色与自身进行战斗前，如果自身生命值大于0，将场上的所有可爱元素合成为\\i[specialRHeart]大可爱元素，效果累加，然后强制令角色将其拾取。", "获得被动\r[\#ffee28]【法则】暗隐邪护\r：免疫战斗伤害"];
			for (var i = 0; i < 4; ++i) {
				str += "\n";
				if (i < core.getFlag("A21boss_2p")) { str += "\r[lime]✔\r"; } else { str += "❌"; }
				str += skills[i];
			}
			return str;
		}, "#c677dd"],
		[121, "防火护盾", "免疫\r[orange]火焰喷射\r的伤害。", "#99aa44"],
	];
},
        "getEnemyInfo": function (cur_enemy, hero, x, y, floorId) {
	// 获得某个怪物变化后的数据；该函数将被伤害计算和怪物手册使用
	// 例如：坚固、模仿、仿攻等等
	// 
	// 参数说明：
	// cur_enemy：该怪物信息
	// hero_hp,hero_atk,hero_def,hero_mdef：勇士的生命攻防护盾数据
	// x,y：该怪物的坐标（查看手册和强制战斗时为undefined）
	// floorId：该怪物所在的楼层
	// 后面三个参数主要是可以在光环等效果上可以适用（也可以按需制作部分范围光环效果）
	floorId = floorId || core.status.floorId;

	var hero_hp = core.getRealStatusOrDefault(hero, 'hp'),
		hero_atk = core.getRealStatusOrDefault(hero, 'atk'),
		hero_def = core.getRealStatusOrDefault(hero, 'def'),
		hero_mdef = core.getRealStatusOrDefault(hero, 'mdef');

	var mon_hp = core.getEnemyValue(cur_enemy, 'hp', x, y, floorId),
		mon_atk = core.getEnemyValue(cur_enemy, 'atk', x, y, floorId),
		mon_def = core.getEnemyValue(cur_enemy, 'def', x, y, floorId),
		mon_special = core.getEnemyValue(cur_enemy, 'special', x, y, floorId);
	var mon_money = core.getEnemyValue(cur_enemy, 'money', x, y, floorId),
		mon_exp = core.getEnemyValue(cur_enemy, 'exp', x, y, floorId),
		mon_point = core.getEnemyValue(cur_enemy, 'point', x, y, floorId);
	var is_friend = core.hasSpecial(mon_special, 87);

	if (!is_friend) {
		if (core.getFlag("previewSkill12", 0) == 1) {
			var point_atk = core.events.getEnemyOnPoint(x, y).atk;
			var init_atk = core.material.enemys[cur_enemy.id].atk;
			if (Math.abs(point_atk - init_atk) > core.getFlag("skill12_datk")) {
				mon_atk = point_atk;
			} else {
				mon_atk = core.material.enemys[cur_enemy.id].atk - core.getFlag("skill12_datk", 0);
			}
		}
		if (core.getFlag("previewSkill13", 0) == 1) {
			var dx = Math.abs(x - core.getFlag("temp_skill13_x")),
				dy = Math.abs(y - core.getFlag("temp_skill13_y"));
			var in_range = dx <= 2 && dy <= 2;
			if (dx == 2 && dy == 2) in_range = false;
			if (in_range) {
				var point_atk = core.events.getEnemyOnPoint(x, y).atk;
				var init_atk = core.material.enemys[cur_enemy.id].atk;
				if (Math.abs(point_atk - init_atk) > core.getFlag("skill13_datk")) {
					mon_atk = point_atk;
				} else {
					mon_atk = core.material.enemys[cur_enemy.id].atk - core.getFlag("skill13_datk", 0);
				}

				var point_def = core.events.getEnemyOnPoint(x, y).def;
				var init_def = core.material.enemys[cur_enemy.id].def;
				if (Math.abs(point_def - init_def) > core.getFlag("skill13_ddef")) {
					mon_def = point_def;
				} else {
					mon_def = core.material.enemys[cur_enemy.id].def - core.getFlag("skill13_ddef", 0);
				}

				var tmp_mdef = 900 * core.status.hero.mdef / 100;
				var damage = core.getFlag("skill10_basedmg") + core.getFlag("skill10_mdefdmgratio", 0) * tmp_mdef;
				if (core.getFlag("A21boss", 0) > 0 && (cur_enemy.id == "E888" || cur_enemy.id == "E905") && core.getFlag("A21boss_1p", 0) >= 4) damage = 0; // Ocast 免疫伤害
				if (core.getFlag("A21boss", 0) > 0 && cur_enemy.id == "E906" && core.getFlag("A21boss_2p", 0) >= 5) damage = 0; // Opollux 免疫伤害
				mon_hp -= damage;
				if (dx == 0 && dy == 0) mon_hp -= damage;
			}
		}
	}
	if (core.getFlag('hard', 0) == 1 && !is_friend && !core.hasSpecial(cur_enemy.id, 115)) {
		mon_atk = mon_atk * (core.floors[floorId].hard1_enemy_ratio || 100) / 100;
		mon_def = mon_def * (core.floors[floorId].hard1_enemy_ratio || 100) / 100;
		if (core.getFlag("current_chapter", 0) == 3) {
			mon_hp = mon_hp * (core.floors[floorId].hard1_enemy_ratio || 100) / 100;
		}
	}

	// 匙之意
	if (core.hasSpecial(mon_special, 37)) {
		var count = core.itemCount("yellowKey") + core.itemCount("blueKey") * 3 + core.itemCount("redKey") * 10;
		mon_hp += (cur_enemy.value || 0) * count;
		mon_atk += (cur_enemy.atkValue || 0) * count;
		mon_def += (cur_enemy.defValue || 0) * count;
	}
	// 模仿
	if (core.hasSpecial(mon_special, 10)) {
		mon_atk = hero_atk;
		mon_def = hero_def;
	}
	// 仿攻
	if (core.hasSpecial(mon_special, 42) && mon_atk < hero_atk) {
		mon_atk = hero_atk;
	}

	var guards = [];
	var spe28_buff = 0,
		spe32_buff = 0,
		spe39_buff = 0,
		spe39_count = 0,
		spe46_buff = 0,
		spe65_buff = 0;

	// 光环和支援检查
	if (!core.status.checkBlock) core.status.checkBlock = {};

	// 此初始值仅在与支援怪战斗前的一瞬间生效
	var atk_buff = core.getFlag("guard_buff_cache_atk", 0),
		def_buff = core.getFlag("guard_buff_cache_def", 0),
		hp_buff = 0;
	var default_unadd_value = -22222221;
	var unadd_hp_buff = default_unadd_value,
		unadd_atk_buff = default_unadd_value,
		unadd_def_buff = default_unadd_value;
	if (core.status.checkBlock.needCache) {
		// 从V2.5.4开始，对光环效果增加缓存，以解决多次重复计算的问题，从而大幅提升运行效率。
		var cnt = 0,
			cnt28 = 0,
			cnt48 = 0,
			hp_extra = 0,
			atk_extra = 0,
			def_extra = 0;
		// 检查光环和支援的缓存
		var index = x != null && y != null ? (x + "," + y) : "floor";
		if (!core.status.checkBlock.cache) core.status.checkBlock.cache = {};
		var cache = core.status.checkBlock.cache[index];
		if (!cache || index == "floor") {
			// 没有该点的缓存，则遍历每个图块
			core.extractBlocks(floorId);
			core.status.maps[floorId].blocks.forEach(function (block) {
				if (!block.disable) {
					// 获得该图块的ID
					var id = block.event.id,
						item = core.material.items[id],
						enemy = core.material.enemys[id];
					// 检查【光环】技能，数字25
					if (!is_friend && enemy && core.hasSpecial(enemy.special, 25)) {
						// 检查是否是范围光环
						var inRange = enemy.range == null;
						if (enemy.range != null && x != null && y != null) {
							var dx = Math.abs(block.x - x),
								dy = Math.abs(block.y - y);
							// 检查十字和九宫格光环
							if (dx + dy <= enemy.range) inRange = true;
							if (enemy.zoneSquare && dx <= enemy.range && dy <= enemy.range) inRange = true;
						}
						if (inRange) {
							if (enemy.add) { // 检查是否可叠加
								hp_buff += enemy.hpValue || 0;
								atk_buff += enemy.atkValue || 0;
								def_buff += enemy.defValue || 0;
								cnt++;
							} else {
								unadd_hp_buff = Math.max(unadd_hp_buff, enemy.hpValue || 0);
								unadd_atk_buff = Math.max(unadd_atk_buff, enemy.atkValue || 0);
								unadd_def_buff = Math.max(unadd_def_buff, enemy.defValue || 0);
							}
						}
					}
					// 检查【支援】技能，数字26
					if (!is_friend && enemy && core.hasSpecial(enemy.special, 26) &&
						// 检查支援条件，坐标存在，处于十字范围，且不能是自己
						x != null && y != null && ((x == block.x) || (y == block.y)) && !(x == block.x && y == block.y)) {
						var flag_push = true;
						// 检查支援条件，中间必须可通行。带有支援属性的怪物视为可通行。空气墙视为可通行。
						if (x == block.x) {
							var min_y = Math.min(y, block.y);
							var max_y = Math.max(y, block.y);
							for (var i = min_y + 1; i < max_y; ++i) {
								if (core.getBlock(x, i, floorId) != null && core.getBlock(x, i, floorId).event.noPass) {
									if (core.getBlock(x, i, floorId).event.cls != "enemys") {
										if (core.getBlock(x, i, floorId).event.id == "airwall") {
											continue;
										}
										flag_push = false;
										break;
									}
									var special = core.enemys.enemys[core.getBlock(x, i, floorId).event.id].special;
									if (special && core.hasSpecial(special, 26)) {} else {
										flag_push = false;
										break;
									}
								}
							}
						} else { // if (y == block.y) {
							var min_x = Math.min(x, block.x);
							var max_x = Math.max(x, block.x);
							for (var i = min_x + 1; i < max_x; ++i) {
								if (core.getBlock(i, y, floorId) != null && core.getBlock(i, y, floorId).event.noPass) {
									if (core.getBlock(i, y, floorId).event.cls != "enemys") {
										if (core.getBlock(i, y, floorId).event.id == "airwall") {
											continue;
										}
										flag_push = false;
										break;
									}
									var special = core.enemys.enemys[core.getBlock(i, y, floorId).event.id].special;
									if (special && core.hasSpecial(special, 26)) {} else {
										flag_push = false;
										break;
									}
								}
							}
						}
						// 记录怪物的x,y，ID
						if (flag_push) guards.push([block.x, block.y, id]);
					}

					// 如果有其他类型光环怪物在这里仿照添加检查
					// 注：新增新的类光环属性（需要遍历全图的）需要在特殊属性定义那里的第五项写1，参见光环和支援的特殊属性定义。

					// 检查【迅捷光环】技能，数字28
					if (!is_friend && enemy && core.hasSpecial(enemy.special, 28)) {
						// 检查是否是范围光环
						var inRange = enemy.range == null;
						if (enemy.range != null && x != null && y != null) {
							var dx = Math.abs(block.x - x),
								dy = Math.abs(block.y - y);
							// 检查十字和九宫格光环
							if (dx + dy <= enemy.range) inRange = true;
							if (enemy.zoneSquare && dx <= enemy.range && dy <= enemy.range) inRange = true;
						} // 检查是否可叠加
						if (inRange && (enemy.add || cnt28 == 0)) {
							spe28_buff += enemy.value28;
							cnt28++;
						}
					}

					// 检查【亡命光环】技能
					if (!is_friend && enemy && core.hasSpecial(enemy.special, 32)) {
						// 检查是否是范围光环
						var inRange = enemy.range == null;
						if (enemy.range != null && x != null && y != null) {
							var dx = Math.abs(block.x - x),
								dy = Math.abs(block.y - y);
							// 检查十字和九宫格光环
							if (dx + dy <= enemy.range) inRange = true;
							if (enemy.zoneSquare && dx <= enemy.range && dy <= enemy.range) inRange = true;
						}
						if (inRange) { // 一定可叠加
							spe32_buff += enemy.value32 || 0;
						}
					}

					// 检查【匙之力】技能
					if (!is_friend && core.hasSpecial(cur_enemy.special, 30) && item &&
						(id == "yellowKey" || id == "blueKey" || id == "redKey" || id == "yellowKey3" || id == "blueKey3" || id == "redKey3")) {
						// 检查是否是范围光环
						var inRange = cur_enemy.range == null;
						if (cur_enemy.range != null && x != null && y != null) {
							var dx = Math.abs(block.x - x),
								dy = Math.abs(block.y - y);
							// 检查十字和九宫格光环
							if (dx + dy <= cur_enemy.range) inRange = true;
							if (cur_enemy.zoneSquare && dx <= cur_enemy.range && dy <= cur_enemy.range) inRange = true;
						}
						var temp_cnt = 1;
						if (id == "blueKey") temp_cnt = 3;
						if (id == "redKey") temp_cnt = 10;
						if (id == "yellowKey3") temp_cnt = 3;
						if (id == "blueKey3") temp_cnt = 9;
						if (id == "redKey3") temp_cnt = 30;
						if (inRange) { // 一定可叠加
							hp_extra += temp_cnt * (cur_enemy.value || 0);
							atk_extra += temp_cnt * (cur_enemy.atkValue || 0);
							def_extra += temp_cnt * (cur_enemy.defValue || 0);
						}
					}

					// 检查【门之力】技能
					if (!is_friend && core.hasSpecial(cur_enemy.special, 85) &&
						(id == "yellowDoor" || id == "blueDoor" || id == "redDoor")) {
						// 检查是否是范围光环
						var inRange = cur_enemy.range == null;
						if (cur_enemy.range != null && x != null && y != null) {
							var dx = Math.abs(block.x - x),
								dy = Math.abs(block.y - y);
							// 检查十字和九宫格光环
							if (dx + dy <= cur_enemy.range) inRange = true;
							if (cur_enemy.zoneSquare && dx <= cur_enemy.range && dy <= cur_enemy.range) inRange = true;
						}
						var temp_cnt = 1;
						if (id == "blueDoor") temp_cnt = 3;
						if (id == "redDoor") temp_cnt = 10;
						if (inRange) { // 一定可叠加
							hp_extra += temp_cnt * (cur_enemy.hpValue || 0);
							atk_extra += temp_cnt * (cur_enemy.atkValue || 0);
							def_extra += temp_cnt * (cur_enemy.defValue || 0);
						}
					}

					// 检查【生命之源】技能
					if (!is_friend && enemy && core.hasSpecial(enemy.special, 46)) {
						// 检查是否是范围光环
						var inRange = enemy.range == null;
						if (enemy.range != null && x != null && y != null) {
							var dx = Math.abs(block.x - x),
								dy = Math.abs(block.y - y);
							// 检查十字和九宫格光环
							if (dx + dy <= enemy.range) inRange = true;
							if (enemy.zoneSquare && dx <= enemy.range && dy <= enemy.range) inRange = true;
						}
						if (inRange) { // 一定可叠加
							spe46_buff += enemy.value46 || 0;
						}
					}

					// 检查【颐指气使】技能
					if (!is_friend && core.hasSpecial(cur_enemy.special, 48) && enemy) {
						// 检查是否是范围光环
						var inRange = cur_enemy.range == null;
						var dx = Math.abs(block.x - x),
							dy = Math.abs(block.y - y);
						if (cur_enemy.range != null && x != null && y != null) {
							// 检查十字和九宫格光环
							if (dx + dy <= cur_enemy.range) inRange = true;
							if (cur_enemy.zoneSquare && dx <= cur_enemy.range && dy <= cur_enemy.range) inRange = true;
						}
						if (dx == 0 && dy == 0) inRange = false; // 不能是自己
						// 检查是否可叠加
						if (inRange && (cur_enemy.add || cnt48 == 0)) {
							atk_extra -= (cur_enemy.atkValue || 0);
							def_extra -= (cur_enemy.defValue || 0);
							hp_extra -= (cur_enemy.hpValue || 0);
							cnt48++;
						}
					}
					// 检查【协同作战】技能
					if (!is_friend && core.hasSpecial(cur_enemy.special, 61) && enemy) {
						// 检查是否是范围光环
						var inRange = cur_enemy.range == null;
						var dx = Math.abs(block.x - x),
							dy = Math.abs(block.y - y);
						if (cur_enemy.range != null && x != null && y != null) {
							// 检查十字和九宫格光环
							if (dx + dy <= cur_enemy.range) inRange = true;
							if (cur_enemy.zoneSquare && dx <= cur_enemy.range && dy <= cur_enemy.range) inRange = true;
						}
						if (dx == 0 && dy == 0) inRange = false; // 不能是自己
						if (!core.hasSpecial(enemy.special, 61)) inRange = false; // 必须也拥有该技能
						if (inRange) { // 一定可叠加
							atk_extra += (cur_enemy.atkValue || 0);
							def_extra += (cur_enemy.defValue || 0);
							hp_extra += (cur_enemy.hpValue || 0);
						}
					}
					// 检查【腐蚀光环】技能
					if (!is_friend && enemy && core.hasSpecial(enemy.special, 65)) {
						// 检查是否是范围光环
						var inRange = enemy.range == null;
						if (enemy.range != null && x != null && y != null) {
							var dx = Math.abs(block.x - x),
								dy = Math.abs(block.y - y);
							// 检查十字和九宫格光环
							if (dx + dy <= enemy.range) inRange = true;
							if (enemy.zoneSquare && dx <= enemy.range && dy <= enemy.range) inRange = true;
						}
						if (inRange) { // 一定可叠加
							spe65_buff += (enemy.value65 || 0);
						}
					}
				}
			});

			// 第二次遍历，此时已经有每个block怪物获得的光环buff数值
			core.status.maps[floorId].blocks.forEach(function (block) {
				if (!block.disable) {
					// 获得该图块的ID
					var id = block.event.id,
						item = core.material.items[id],
						enemy = core.material.enemys[id];

					// 检查【远程支援】技能
					if (!is_friend && enemy && core.hasSpecial(enemy.special, 39) && !(x == block.x && y == block.y)) {
						// 检查是否是范围光环
						var inRange = enemy.range == null;
						if (enemy.range != null && x != null && y != null) {
							var dx = Math.abs(block.x - x),
								dy = Math.abs(block.y - y);
							// 检查十字和九宫格光环
							if (dx + dy <= enemy.range) inRange = true;
							if (enemy.zoneSquare && dx <= enemy.range && dy <= enemy.range) inRange = true;
						}
						if (inRange) { // 一定可叠加
							var hard_ratio = 1;
							if (flags.hard == 1) { hard_ratio = (core.floors[floorId].hard1_enemy_ratio || 100) / 100; }
							spe39_buff += (enemy.atk * hard_ratio * (1 + atk_buff / 100)) || 0;
							var def_count = 1;
							if (core.hasSpecial(enemy.special, 31)) { // 穿刺
								def_count = (def_count * 100 - enemy.value31) / 100;
							}
							if (core.hasSpecial(enemy.special, 2)) { // 魔攻
								def_count = 0;
							}
							spe39_count += def_count;
						}
					}
				}
			});

			if (unadd_hp_buff == default_unadd_value) unadd_hp_buff = 0;
			if (unadd_atk_buff == default_unadd_value) unadd_atk_buff = 0;
			if (unadd_def_buff == default_unadd_value) unadd_def_buff = 0;
			// 仅当不存在可叠加光环时，使用不可叠加光环的数值
			hp_buff = hp_buff == 0 ? unadd_hp_buff : hp_buff;
			atk_buff = atk_buff == 0 ? unadd_atk_buff : atk_buff;
			def_buff = def_buff == 0 ? unadd_def_buff : def_buff;
			core.status.checkBlock.cache[index] = {
				"hp_buff": hp_buff,
				"atk_buff": atk_buff,
				"def_buff": def_buff,
				"guards": guards,
				"spe28_buff": spe28_buff,
				"spe32_buff": spe32_buff,
				"spe39_buff": spe39_buff,
				"spe39_count": spe39_count,
				"spe46_buff": spe46_buff,
				"spe65_buff": spe65_buff,
				"hp_extra": hp_extra,
				"atk_extra": atk_extra,
				"def_extra": def_extra
			};
		} else {
			// 直接使用缓存数据
			hp_buff = cache.hp_buff;
			atk_buff = cache.atk_buff;
			def_buff = cache.def_buff;
			guards = cache.guards;
			spe28_buff = cache.spe28_buff;
			spe32_buff = cache.spe32_buff;
			spe39_buff = cache.spe39_buff;
			spe39_count = cache.spe39_count;
			spe46_buff = cache.spe46_buff;
			spe65_buff = cache.spe65_buff;
			hp_extra = cache.hp_extra;
			atk_extra = cache.atk_extra;
			def_extra = cache.def_extra;
		}

		// 增加结算
		mon_hp += hp_extra;
		mon_atk += atk_extra;
		mon_def += def_extra;
		mon_hp *= (100 + hp_buff) / 100;
	}
	mon_atk *= (100 + atk_buff) / 100;
	mon_def *= (100 + def_buff) / 100;

	// 窥 血 为 攻 y y d s
	if (core.hasSpecial(mon_special, 70)) {
		mon_atk = hero_hp * 0.1;
	}
	// 坚固晚于影响防御的光环
	if (core.hasSpecial(mon_special, 3) && mon_def < hero_atk - 1) {
		mon_def = hero_atk - 1;
	}
	// 破隐战斗
	if (core.getTalentLv2(5) > 0 && core.getFlag("invisible", 0) == 1) {
		var decrease_def = [0, 100000, 200000];
		mon_def -= decrease_def[core.getTalentLv2(5)];
	}
	return {
		"hp": Math.floor(mon_hp),
		"atk": Math.floor(mon_atk),
		"def": Math.floor(mon_def),
		"money": Math.floor(mon_money),
		"exp": Math.floor(mon_exp),
		"point": Math.floor(mon_point),
		"special": mon_special,
		"guards": guards, // 返回支援情况
		"spe28_buff": spe28_buff,
		"spe32_buff": spe32_buff,
		"spe39_buff": spe39_buff,
		"spe39_count": spe39_count,
		"spe46_buff": spe46_buff,
		"spe65_buff": spe65_buff,
		"hp_buff": hp_buff // 用于伤害值计算
	};
},
        "getDamageInfo": function (enemy, hero, x, y, floorId) {
	// 获得战斗伤害信息（实际伤害计算函数）
	// 
	// 参数说明：
	// enemy：该怪物信息
	// hero：勇士的当前数据；如果对应项不存在则会从core.status.hero中取。
	// x,y：该怪物的坐标（查看手册和强制战斗时为undefined）
	// floorId：该怪物所在的楼层
	// 后面三个参数主要是可以在光环等效果上可以适用

	// ******** Part1: 获取双方能力 ********
	floorId = floorId || core.status.floorId;

	var hero_hp = core.getRealStatusOrDefault(hero, 'hp'),
		hero_atk = core.getRealStatusOrDefault(hero, 'atk'),
		hero_def = core.getRealStatusOrDefault(hero, 'def'),
		hero_mdef = core.getRealStatusOrDefault(hero, 'mdef'),
		hero_base_atk = core.getStatus('atk'),
		hero_base_def = core.getStatus('def'),
		actual_hero_def = hero_def;

	// 勇士的负属性都按0计算
	hero_hp = Math.max(0, hero_hp);
	hero_atk = Math.max(0, hero_atk);
	hero_def = Math.max(0, hero_def);
	hero_mdef = Math.max(0, hero_mdef);

	// 怪物的各项数据
	// 对坚固模仿等处理扔到了脚本编辑-getEnemyInfo之中
	var enemyInfo = core.enemys.getEnemyInfo(enemy, hero, x, y, floorId);
	var mon_hp = enemyInfo.hp,
		mon_atk = enemyInfo.atk,
		mon_def = enemyInfo.def,
		mon_special = enemyInfo.special,
		mon_spe28_buff = enemyInfo.spe28_buff, // 迅捷光环先攻次数
		mon_spe39_buff = enemyInfo.spe39_buff, // 远程支援的总攻击力
		mon_spe39_count = enemyInfo.spe39_count, // 远程支援的攻击次数
		mon_spe46_buff = enemyInfo.spe46_buff, // 生命之源
		mon_spe65_buff = enemyInfo.spe65_buff; // 腐蚀光环

	if (core.getFlag("A21boss", 0) == 1) {
		if (core.getFlag("A21boss_1p", 0) >= 5 && enemy.id == "E888") {
			return null;
		}
		if (core.getFlag("A21boss_2p", 0) >= 5 && enemy.id == "E889") {
			return null;
		}
	}
	// 如果是无敌属性，且勇士未持有十字架
	if (core.hasSpecial(mon_special, 20) && !core.hasItem("cross"))
		return null; // 不可战斗

	if (mon_hp <= 0) { // immediate dead
		var damage = 0;
		/*
		// 裂地重拳回复
		if (core.getFlag("previewSkill12", 0) > 0 || core.getFlag("usingSkill12", 0) > 0) {
			var val = core.getFlag("temp_mdef_pp") * core.status.hero.mdef / 100;
			if (core.getTalentLv3(2) == 4) {
				damage -= val / 2;
			} else if (core.getTalentLv3(2) == 5) {
				damage -= val;
			}
		}*/
		return {
			"mon_hp": 0,
			"mon_atk": Math.floor(mon_atk),
			"mon_def": Math.floor(mon_def),
			"init_damage": 0,
			"per_damage": 0,
			"hero_per_damage": 9922,
			"turn": 1,
			"damage": damage,
			"spe46_buff": 0
		};
	}

	if (core.getFlag("A21boss", 0) == 1) {
		if (core.getFlag("A21boss_1p", 0) >= 5 && enemy.id == "E888") {
			return null;
		}
		if (core.getFlag("A21boss_2p", 0) >= 4 && enemy.id == "E889") {
			return null;
		}
	}
	// 残暴斩杀
	if (core.hasSpecial(mon_special, 63) && hero_hp <= mon_hp) {
		return null;
	}
	var equip_vampire = 0; // 装备吸血
	var skill1_stun = 0;
	var skill2_extra_def = 0;

	if (core.getFlag('skill', 0) == 1) {
		skill1_stun = core.getFlag("skill1_stun", 0);
	}

	// 集中防御
	if (core.getFlag('skill', 0) == 2) {
		skill2_extra_def = (hero_base_def * core.getFlag("skill2_val") / 100);
		actual_hero_def += skill2_extra_def;
	}
	// 暴戾 / 沉醉
	var rage_multiplier = 1 + core.getFlag("rage_stack", 0) * 0.01;

	// ******** Part2: 获得每回合伤害 ********
	// 穿刺
	if (core.hasSpecial(mon_special, 31)) actual_hero_def = actual_hero_def * (100 - enemy.value31) / 100;
	// 挫锐
	if (core.hasSpecial(mon_special, 60)) hero_atk = hero_atk * (100 - enemy.value60) / 100;
	// 每回合怪物对勇士造成的战斗伤害
	var per_damage = mon_atk - actual_hero_def;
	// 魔攻：战斗伤害就是怪物攻击力
	if (core.hasSpecial(mon_special, 2)) per_damage = mon_atk;
	// 战斗伤害不能为负值
	if (per_damage < 0) per_damage = 0;

	// 2连击 & 3连击 & N连击
	var mon_atk_multiplier = 1;
	if (core.hasSpecial(mon_special, 4)) mon_atk_multiplier = 2;
	if (core.hasSpecial(mon_special, 5)) mon_atk_multiplier = 3;
	if (core.hasSpecial(mon_special, 6)) mon_atk_multiplier = (enemy.n || 4);
	// 刮骨
	if (core.hasSpecial(mon_special, 82) && core.getFlag("temp_mdef_pp", 0) == 0) {
		mon_atk_multiplier = (100 + enemy.value53) / 100;
	}
	// 中子束：2次普攻，1次魔攻
	if (core.hasSpecial(mon_special, 55)) {
		mon_atk_multiplier = 2;
	}
	per_damage *= mon_atk_multiplier;
	if (core.hasSpecial(mon_special, 55)) {
		per_damage += mon_atk;
	}

	// 远程支援
	var per_damage_remote = Math.max(0, mon_spe39_buff - actual_hero_def * mon_spe39_count);
	per_damage += per_damage_remote;

	per_damage *= rage_multiplier;
	// 凋零之歌
	if (core.hasSpecial(mon_special, 51)) {
		per_damage += enemy.value46;
	}
	// 集火标记
	if (core.getFlag("spe84_n", 0) > 0) {
		per_damage += core.getFlag("spe84_dmg"); // * core.getFlag("spe84_n");
	}

	// 每回合的反伤；按照勇士的攻击次数来计算回合
	var counterDamage = 0;
	if (core.hasSpecial(mon_special, 8))
		counterDamage += Math.floor((enemy.atkValue || core.values.counterAttack) * hero_atk / 100);
	// 反击，由于主角攻速总是1，反击约等于多一次连击，区别在于主角蓄力时不会被反击
	if (core.hasSpecial(mon_special, 41)) {
		counterDamage += mon_atk - actual_hero_def;
	}
	counterDamage *= rage_multiplier;
	mon_def *= (1 - 0.1 * core.plugin.getTalentLv(5)); // 主角穿刺天赋
	// 勇士每回合对怪物造成的伤害
	var hero_per_damage = Math.max(hero_atk - mon_def, 0);
	// 闪避
	if (core.hasSpecial(mon_special, 29))
		hero_per_damage *= ((100 - enemy.value29) / 100);
	hero_per_damage *= rage_multiplier;
	if (core.hasEquip("sword5")) {
		hero_per_damage *= 1.25;
	}
	// 刚毅护盾
	if (core.hasSpecial(mon_special, 43)) {
		hero_per_damage = Math.min(mon_hp * 0.1, hero_per_damage);
	}
	// 生命之源
	hero_per_damage -= (mon_spe46_buff || 0);

	// ******** Part3: 战前造成的额外伤害（可被护盾抵消） ********
	var init_damage = 0;
	// 吸血
	if (core.hasSpecial(mon_special, 11)) {
		var vampire_damage = hero_hp * enemy.value;
		// 如果有神圣盾免疫吸血等可以在这里写
		// 也可以用hasItem和hasEquip来判定装备
		if (core.hasItem('I_noVampire')) vampire_damage = 0;
		vampire_damage = Math.floor(vampire_damage) || 0;
		// 加到自身
		if (enemy.add) // 如果加到自身
			mon_hp += vampire_damage;
		init_damage += vampire_damage;
	}
	// 各种先攻
	var spe1_round = 0; // 被先攻的回合数
	if (core.hasSpecial(mon_special, 1)) spe1_round += (enemy.value28 || 1);
	if (mon_spe28_buff != 0) spe1_round += mon_spe28_buff;
	if (core.getFlag("freeze_stack", 0) > 0) spe1_round += core.getFlag("freeze_stack", 0);
	if (core.getFlag("skill6_battle", 0) > 0) { // 后抛
		if (spe1_round > 0) spe1_round = 0; // 不会被先攻
		spe1_round -= core.getFlag("skill6_battle_round", 0); // 使敌人额外被先攻
	}
	// 爆匙
	if (core.hasSpecial(mon_special, 36)) {
		spe1_round += core.itemCount("yellowKey");
		spe1_round += core.itemCount("blueKey") * 3;
		spe1_round += core.itemCount("redKey") * 10;
	}
	// 疯狂，此处不计算2技能防御
	var mad_turn = 0;
	if (core.hasSpecial(mon_special, 44) && core.getFlag("rage_stack", 0) > 0) {
		mad_turn = core.getFlag("rage_stack", 0);
		spe1_round += mad_turn;
		if (core.getFlag("hard") == 2) { // 普通难度自残伤害
			init_damage += mad_turn * (Math.max(0, (hero_atk - hero_def)));
		}
	}
	// 支援传过来的自残回合数，这里只计算支援怪因此额外攻击回合的伤害，不再重复计算自残伤害。防御按照未经技能加成的数值计算。
	if (hero && hero.hasOwnProperty('mad_turn') && hero.mad_turn > 0) {
		init_damage += hero.mad_turn * Math.max(0, mon_atk - hero_def);
	}
	if (spe1_round >= 0) {
		init_damage += spe1_round * per_damage;
	}
	// 净化
	if (core.hasSpecial(mon_special, 9))
		init_damage += Math.floor((enemy.n || core.values.purify) * hero_mdef);
	init_damage *= rage_multiplier;
	// 天赋9
	if (core.plugin.getTalentLv(9) > 0) {
		init_damage *= (0.8 - 0.1 * core.plugin.getTalentLv(9));
	}

	// ******** Part4: 计算最终战斗伤害 ********
	var mdef_ratio = core.getFlag("mdef_ratio", 1);
	mdef_ratio -= mon_spe65_buff;
	if (core.getFlag("skill5_dm", 0) > 0 && core.getFlag("skill5_is_on", false)) mdef_ratio += 0.4;
	if (core.hasEquip("sword7")) mdef_ratio += 0.35;
	// 护盾爆发
	var skill1_damage = 0;
	if (core.getFlag('skill', 0) == 1) {
		skill1_damage = Math.max((hero_mdef * mdef_ratio - init_damage) / mdef_ratio, 0) * core.getFlag("skill1_ratio", 1);
	}
	if (core.plugin.getTalentLv(11) > 0) {
		skill1_damage += (hero_atk + hero_mdef) * 0.5 * core.plugin.getTalentLv(11);
	}
	skill1_damage *= rage_multiplier;
	// 优先使用支援传过来的伤害，且支援传过来的伤害不能再次被暴戾加成
	if (hero && hero.hasOwnProperty('skill1_damage') && hero.skill1_damage > 0) {
		skill1_damage = hero.skill1_damage;
	}
	// 刚毅护盾
	if (core.hasSpecial(mon_special, 43)) {
		mon_hp -= Math.min(mon_hp * 0.1, skill1_damage);
	} else if (!core.hasSpecial(mon_special, 3) && !core.hasSpecial(mon_special, 33)) {
		mon_hp -= skill1_damage;
	}
	var mon_hp_after_skill = mon_hp; // 记录敌人被技能伤害后的剩余血量
	// 怪物被先攻
	var hero_attack_first_round = 0;
	if (spe1_round < 0) {
		hero_attack_first_round += -spe1_round;
	}
	hero_attack_first_round += core.plugin.getTalentLv(4);
	mon_hp -= hero_attack_first_round * hero_per_damage; // 主角先攻天赋

	// 如果没有破防且怪物未被技能秒杀，则不可战斗
	if (hero_per_damage <= 0 && mon_hp > 0) return null;

	// 勇士的攻击回合数；为怪物生命除以每回合伤害向上取整
	var turn = Math.max(Math.ceil(mon_hp / hero_per_damage), 1);
	if (mon_hp <= 0) {
		turn = 1;
		per_damage = 0; // 支援怪被技能秒杀后无法造成伤害
	}
	// 吸噬，与rm版略微不同。目前仅保证怪物无其他特殊属性时伤害计算正确
	// 就只是重新算一下 turn
	if (core.hasSpecial(mon_special, 89) && per_damage > 0) {
		var p1_turn = Math.ceil(hero_mdef * mdef_ratio / per_damage);
		if (p1_turn < turn - 1) {
			var p2_mon_hp = mon_hp - p1_turn * hero_per_damage;
			var p2_hero_per_damage = hero_per_damage - Math.max(per_damage * 0.01 * enemy.value89, 0);
			if (p2_hero_per_damage <= 0) return null;
			var p2_turn = Math.ceil(p2_mon_hp / p2_hero_per_damage);
			turn = p1_turn + p2_turn;
		}
	}

	// ------ 支援 ----- //
	// 这个递归最好想明白为什么，flag:extra_turn是怎么用的
	var guards = core.getFlag("__guards__" + x + "_" + y, enemyInfo.guards);
	var guard_before_current_enemy = false; // ------ 支援怪是先打(true)还是后打(false)？
	if (mon_hp >= 0) turn += core.getFlag("__extraTurn__", 0);
	if (guards.length > 0) {
		if (!guard_before_current_enemy) { // --- 先打当前怪物，记录当前回合数
			core.setFlag("__extraTurn__", turn);
		}
		// 获得那些怪物组成小队战斗
		for (var i = 0; i < guards.length; i++) {
			var gx = guards[i][0],
				gy = guards[i][1],
				gid = guards[i][2];
			// 递归计算支援怪伤害信息，这里不传x,y保证不会重复调用
			// 这里的mdef传0，因为护盾应该只会被计算一次。atk和def传buff或技能加成前的数值。
			var info = core.enemys.getDamageInfo(core.material.enemys[gid], {
				hp: hero_hp,
				atk: hero_base_atk,
				def: hero_base_def,
				mdef: 0,
				skill1_damage: skill1_damage,
				mad_turn: mad_turn
			});
			if (info == null) { // 小队中任何一个怪物不可战斗，直接返回null
				return null;
			}
			// 已经进行的回合数
			core.setFlag("__extraTurn__", info.turn);
			init_damage += info.damage;
		}
		if (guard_before_current_enemy) { // --- 先打支援怪物，增加当前回合数
			turn += core.getFlag("__extraTurn__", 0);
		}
	}
	core.removeFlag("__extraTurn__");
	// ------ 支援END ------ //

	// 最终伤害：初始伤害 + 怪物对勇士造成的伤害 + 反击伤害，其中远程伤害不能被1技能减少
	var not_init_damage = (turn - 1 - skill1_stun) * per_damage + turn * counterDamage + skill1_stun * per_damage_remote;
	// 天赋6减伤
	if (core.getTalentLv(6) > 0) {
		var increase_turns = [0, 29, 19, 15];
		var increase_turn = increase_turns[core.getTalentLv(6)]; // 减伤达到上限之前所在的回合数
		var start_i = 1; // 减伤第一次发挥作用时的减伤层数
		if (spe1_round < 0) { // 怪物被先攻的时候主角叠了若干层减伤
			increase_turn += spe1_round;
			start_i = -spe1_round;
		}
		var avg_deduct = 0.01 * core.getTalentLv(6) * (start_i + start_i + increase_turn - 1) / 2; // 减伤未达到上限时的平均减伤幅度
		if (increase_turn <= 0) { // 怪物首次攻击时减伤已经叠满
			not_init_damage *= (0.8 - 0.1 * core.getTalentLv(6));
		} else if (turn - 1 <= increase_turn) { // 本次战斗减伤一直在递增，未达到上限
			avg_deduct = 0.01 * core.getTalentLv(6) * (start_i + turn - 1) / 2; // 减伤未达到上限时的平均减伤幅度
			not_init_damage *= (1 - avg_deduct);
		} else {
			var dmg1 = not_init_damage * increase_turn / (turn - 1);
			var dmg2 = not_init_damage - dmg1;
			not_init_damage = dmg1 * (1 - avg_deduct) + dmg2 * (0.8 - 0.1 * core.getTalentLv(6));
		}
	}
	var damage = init_damage + not_init_damage;
	// 破甲和强击
	if (core.hasSpecial(mon_special, 7) && (turn - skill1_stun > 1 || spe1_round > 0))
		damage += Math.floor((enemy.defValue || core.values.breakArmor) * hero_def) * rage_multiplier;
	if (core.hasSpecial(mon_special, 45) && (turn - skill1_stun > 1 || spe1_round > 0))
		damage += (mon_atk * (1 + enemy.value45) - actual_hero_def - Math.max(0, mon_atk - actual_hero_def)) * rage_multiplier * mon_atk_multiplier; // 第一回合承受的实际伤害，减去之前计算的伤害
	// skill2 伤害补正
	if (core.getFlag('skill', 0) == 2) {
		var per_damage_fix = skill2_extra_def - Math.max(0, actual_hero_def - mon_atk); // 少了这些额外防御，每次攻击将多承受的伤害
		per_damage_fix = Math.max(0, per_damage_fix);
		damage += (per_damage + per_damage_fix * mon_atk_multiplier * rage_multiplier) * core.getFlag("skill2_charge", 3); // 蓄力期间被额外攻击的回合数
		damage += spe1_round * per_damage_fix * mon_atk_multiplier * rage_multiplier; // 被先攻的回合中本不应有额外防御
	}
	var extra_damage = 0; // 最后结算固伤类伤害
	// 法力燃烧，发动时机晚于角色技能
	if (core.hasSpecial(mon_special, 38)) {
		var cur_mana = core.status.hero.mana;
		if (core.getFlag('skill', 0) == 1) {
			cur_mana -= core.getFlag("skill1_cost", 10);
		} else if (core.getFlag('skill', 0) == 2) {
			cur_mana -= core.getFlag("skill2_cost", 10);
		}
		extra_damage += Math.max(0, enemy.value38_1 - cur_mana) * enemy.value38_2;
	}

	if (core.hasSpecial(mon_special, 22)) { // 亡命
		extra_damage += enemy.damage || 0;
	}
	extra_damage += enemyInfo.spe32_buff || 0; // 亡命光环
	if (core.hasSpecial(mon_special, 17)) { // 仇恨
		extra_damage += core.getFlag('hatred', 0);
	}
	extra_damage *= rage_multiplier;
	// 天赋9
	if (core.plugin.getTalentLv(9) > 0) {
		extra_damage *= (0.8 - 0.1 * core.plugin.getTalentLv(9));
	}
	damage += extra_damage;
	// 天赋7加护盾
	hero_mdef += (turn - 1) * hero_def * 0.02 * core.plugin.getTalentLv(7);
	// 再扣去护盾
	if (!core.hasSpecial(mon_special, 59)) { // 没有穿透
		damage -= hero_mdef * mdef_ratio;
	}
	if (core.hasSpecial(mon_special, 80)) { // 对非护盾造成额外伤害
		damage *= (100 + enemy.value52) / 100;
	}

	var dm_talent13 = core.getFlag("skill5_dm", 0) > 0 && core.getFlag("skill5_is_on", false);
	if (!dm_talent13) {
		// 护盾不允许负伤
		damage = Math.max(0, damage);
	}
	// 吸血
	if (core.hasEquip("sword6")) {
		if (hero_attack_first_round + turn > 10) {
			damage -= 0.1 * 10 * hero_per_damage;
		} else {
			damage -= 0.1 * mon_hp_after_skill;
		}
	}
	if (core.getFlag("skill5_am", 0) == 1) { // 技能伤害可以吸血
		damage -= 0.1 * enemyInfo.hp;
	}
	/*
	// 裂地重拳回复
	if (core.getFlag("previewSkill12", 0) > 0 || core.getFlag("usingSkill12", 0) > 0) {
		var val = core.getFlag("temp_mdef_pp") * core.status.hero.mdef / 100;
		if (core.getTalentLv3(2) == 4) {
			damage -= val / 2;
		} else if (core.getTalentLv3(2) == 5) {
			damage -= val;
		}
	}*/
	// 回血
	if (core.plugin.getTalentLv(12) > 0) {
		var temp = Math.floor(turn / 5); // 触发次数
		var max = 10 + 10 * core.plugin.getTalentLv(12);
		if (temp > max) temp = max;
		damage -= temp * hero_def * 0.1;
	}
	if (dm_talent13) { // DM鸽化
		damage = Math.max(-3 * core.getRealStatusOrDefault(null, "mdef"), damage);
	}

	// 最终减伤
	if (core.getFlag("skill8_buff", 0) > 0) {
		damage /= 4;
	}

	return {
		"mon_hp": Math.floor(mon_hp),
		"mon_atk": Math.floor(mon_atk),
		"mon_def": Math.floor(mon_def),
		"init_damage": Math.floor(init_damage),
		"per_damage": Math.floor(per_damage),
		"hero_per_damage": Math.floor(hero_per_damage),
		"turn": Math.floor(turn),
		"damage": Math.floor(damage),
		"spe46_buff": Math.floor(mon_spe46_buff)
	};
}
    },
    "actions": {
        "onKeyUp": function (keyCode, altKey) {
	// 键盘按键处理，可以在这里自定义快捷键列表
	// keyCode：当前按键的keyCode（每个键的keyCode自行百度）
	// altKey：Alt键是否被按下，为true代表同时按下了Alt键
	// 可以在这里任意增加或编辑每个按键的行为

	// 如果处于正在行走状态，则不处理
	if (core.isMoving())
		return;

	// Alt+0~9，快捷换上套装
	if (altKey && keyCode >= 48 && keyCode <= 57) {
		core.items.quickLoadEquip(keyCode - 48);
		return;
	}

	// 根据keyCode值来执行对应操作
	switch (keyCode) {
	case 27: // ESC：打开菜单栏
		core.openSettings(true);
		break;
	case 88: // X：使用怪物手册
		core.openBook(true);
		break;
	case 71: // G：使用楼传器
		core.useFly(true);
		break;
	case 65: // A：读取自动存档（回退）
		core.doSL("autoSave", "load");
		break;
	case 87: // W：撤销回退
		core.doSL("autoSave", "reload");
		break;
	case 83: // S：存档
		core.save(true);
		break;
	case 68: // D：读档
		core.load(true);
		break;
	case 69: // E：打开光标
		core.ui.drawCursor();
		break;
	case 84: // T：打开道具栏
		core.openToolbox(true);
		break;
	case 81: // Q：打开装备栏
		core.openEquipbox(true);
		break;
	case 90: // Z：转向
		core.turnHero();
		break;
	case 86: // V：打开快捷商店列表
		core.openQuickShop(true);
		break;
	case 32: // SPACE：轻按
		core.getNextItem();
		break;
	case 82: // R：回放录像
		core.actions._clickSyncSave_replay();
		break;
	case 33:
	case 34: // PgUp/PgDn：浏览地图
		core.ui._drawViewMaps();
		break;
	case 66: // B：打开数据统计
		core.ui._drawStatistics();
		break;
	case 72: // H：打开帮助页面
		core.ui.drawHelp();
		break;
	case 77: // M：打开存档笔记
		core.actions._clickNotes_show();
		break;
	case 78: // N：重新开始
		core.confirmRestart();
		break;
	case 79: // O：查看工程
		core.actions._clickGameInfo_openProject();
		break;
	case 80: // P：游戏主页
		core.actions._clickGameInfo_openComments();
		break;
	case 49: // 快捷键1
		if (core.canUseItem('skill1')) {
			core.useItem('skill1');
		} else if (core.canUseItem('skill0')) {
			core.useItem('skill0');
		} else if (core.canUseItem('skill3')) {
			core.useItem('skill3');
		} else if (core.canUseItem('skill6')) {
			core.useItem('skill6');
		} else if (core.canUseItem('skill10')) {
			core.useItem('skill10');
		}
		break;
	case 50: // 快捷键2
		if (core.canUseItem('skill2')) {
			core.useItem('skill2');
		} else if (core.canUseItem('pickaxe')) {
			core.useItem('pickaxe');
		} else if (core.canUseItem("skill4")) {
			core.useItem('skill4');
		} else if (core.canUseItem("skill7")) {
			core.useItem('skill7');
		} else if (core.canUseItem('skill12')) {
			core.events.tryUseItem('skill12');
		}
		break;
	case 51: // 快捷键3
		if (core.canUseItem('I_wait')) {
			core.useItem('I_wait'); // 将使用过程而非按键计入录像，反正物品属性决定了它不绘制道具栏
		} else if (core.canUseItem("skill5")) {
			core.useItem("skill5");
		} else if (core.canUseItem("skill8")) {
			core.useItem("skill8");
		} else if (core.hasItem('skill13')) {
			core.events.tryUseItem('skill13');
		}
		break;
	case 52: // 快捷键4：破冰/冰冻/地震/上下楼器/... 其他道具依次判断
		{
			if (core.canUseItem("I_energyOrb")) {
				core.useItem("I_energyOrb");
				break;
			}
			if (core.canUseItem("greenBomb")) {
				core.useItem("greenBomb");
				break;
			}
			var list = ["icePickaxe", "freezeBadge", "earthquake", "upFly", "downFly", "jumpShoes", "lifeWand", "poisonWine", "weakWine", "curseWine", "superWine"];
			for (var i = 0; i < list.length; i++) {
				var itemId = list[i];
				if (core.canUseItem(itemId)) {
					core.status.route.push("key:52");
					core.useItem(itemId, true);
					break;
				}
			}
		}
		break;
	case 53: // 5：读取自动存档（回退），方便手机版操作
		core.doSL("autoSave", "load");
		break;
	case 54: // 6：撤销回退，方便手机版操作
		core.doSL("autoSave", "reload");
		break;
	case 55: // 快捷键7：绑定为轻按，方便手机版操作
		core.getNextItem();
		break;
	case 118: // F7：开启debug模式
		core.debug();
		break;
		// 在这里可以任意新增或编辑已有的快捷键内容
		/*
		case 0: // 使用该按键的keyCode
			// 还可以再判定altKey是否被按下，即 if (altKey) { ...

			// ... 在这里写你要执行脚本
			// **强烈建议所有新增的自定义快捷键均能给个对应的道具可点击，以方便手机端的行为**
			if (core.hasItem('...')) {
				core.status.route.push("key:0");
				core.useItem('...', true); // 增加true代表该使用道具不计入录像
			}

			break;
		*/
	}

},
        "onStatusBarClick": function (px, py) {
	// 点击状态栏时触发的事件，仅在自绘状态栏开启时生效
	// px和py为点击的像素坐标
	// 
	// 横屏模式下状态栏的画布大小是 129*416
	// 竖屏模式下状态栏的画布大小是 416*(32*rows+9) 其中rows为状态栏行数，即全塔属性中statusCanvasRowsOnMobile值
	// 可以使用 core.domStyle.isVertical 来判定当前是否是竖屏模式

	// 如果正在执行事件，则忽略
	if (core.status.lockControl) return;
	// 如果当前正在行走，则忽略；也可以使用 core.waitHeroToStop(callback) 来停止行走再回调执行脚本
	if (core.isMoving()) return;

	// 判定px和py来执行自己的脚本内容.... 注意横竖屏
	// 这里是直接打出点击坐标的例子。
	console.log("onStatusBarClick:", px, py);
	if (core.domStyle.isVertical) {
		if (px >= 6 && px <= 38 && py >= 72 && py <= 104) {
			if (core.hasItem('skill1')) {
				core.useItem('skill1');
			} else if (core.hasItem('skill0')) {
				core.useItem('skill0');
			} else if (core.hasItem('skill3')) {
				core.useItem('skill3');
			} else if (core.hasItem('skill6')) {
				core.useItem('skill6');
			} else if (core.hasItem('skill10')) {
				core.useItem('skill10');
			}
		}
		if (px >= 46 && px <= 78 && py >= 72 && py <= 104) {
			if (core.hasItem('skill2')) {
				core.useItem('skill2');
			} else if (core.hasItem('skill4')) {
				core.useItem("skill4");
			} else if (core.hasItem('skill7')) {
				core.useItem("skill7");
			} else if (core.hasItem('skill12')) {
				core.ui._drawSkill12();
			}
		}
		if (px >= 86 && px <= 118 && py >= 72 && py <= 104) {
			if (core.hasItem("I_wait")) {
				core.useItem('I_wait');
			} else if (core.hasItem("skill5")) {
				core.useItem("skill5");
			} else if (core.hasItem("skill8")) {
				core.useItem("skill8");
			} else if (core.hasItem('skill13')) {
				core.ui._drawSkill13();
			}
		}
		if (px >= 126 && px <= 158 && py >= 72 && py <= 104) {
			if (core.hasItem("pickaxe")) {
				core.useItem("pickaxe");
			}
		}
		if (px >= 146 && px <= 178 && py >= 72 && py <= 104) {
			if (core.hasItem("I_energyOrb")) {
				core.useItem("I_energyOrb");
			} else if (core.hasItem("greenBomb")) {
				core.useItem("greenBomb");
			}
		}
	} else { // 横屏
		if (px >= 6 && px <= 38 && py >= 210 && py <= 242) {
			if (core.hasItem('skill1')) {
				core.useItem('skill1');
			} else if (core.hasItem('skill0')) {
				core.useItem('skill0');
			} else if (core.hasItem('skill3')) {
				core.useItem('skill3');
			} else if (core.hasItem('skill6')) {
				core.useItem('skill6');
			} else if (core.hasItem('skill10')) {
				core.useItem('skill10');
			}
		}
		if (px >= 46 && px <= 78 && py >= 210 && py <= 242) {
			if (core.hasItem('skill2')) {
				core.useItem('skill2');
			} else if (core.hasItem('skill4')) {
				core.useItem("skill4");
			} else if (core.hasItem('skill7')) {
				core.useItem("skill7");
			} else if (core.hasItem('skill12')) {
				core.ui._drawSkill12();
			}
		}
		if (px >= 86 && px <= 118 && py >= 210 && py <= 242) {
			if (core.hasItem("I_wait")) {
				core.useItem('I_wait');
			} else if (core.hasItem("skill5")) {
				core.useItem("skill5");
			} else if (core.hasItem("skill8")) {
				core.useItem("skill8");
			} else if (core.hasItem('skill13')) {
				core.ui._drawSkill13();
			}
		}
		if (px >= 6 && px <= 38 && py >= 250 && py <= 282) {
			if (core.hasItem("pickaxe")) {
				core.useItem("pickaxe");
			} else if (core.hasItem("I_energyOrb")) {
				core.useItem("I_energyOrb");
			}
		}
		if (px >= 86 && px <= 118 && py >= 250 && py <= 282) {
			if (core.hasItem("greenBomb")) {
				core.useItem("greenBomb");
			}
		}
	}
}
    },
    "control": {
        "saveData": function () {
	// 存档操作，此函数应该返回“具体要存档的内容”

	// 差异化存储values
	var values = {};
	for (var key in core.values) {
		if (!core.same(core.values[key], core.data.values[key]))
			values[key] = core.clone(core.values[key]);
	}

	// 可能带中文的 flag
	var flag_list = ["skill1_extra_text", "I62_extra_description", "skill12_desc1"];

	// 要存档的内容
	var data = {
		'floorId': core.status.floorId,
		'hero': core.clone(core.status.hero),
		'hard': core.status.hard,
		'maps': core.maps.saveMap(),
		'route': core.encodeRoute(core.status.route),
		'values': values,
		'version': core.firstData.version,
		'guid': core.getGuid(),
		"time": new Date().getTime(),
		"bgmSpeed": core.musicStatus.bgmSpeed
	};

	return data;
},
        "getStatusLabel": function (name) {
	// 返回某个状态英文名的对应中文标签，如atk -> 攻击，def -> 防御等。
	// 请注意此项仅影响 libs/ 下的内容（如绘制怪物手册、数据统计等）
	// 自行定义的（比如获得道具效果）中用到的“攻击+3”等需要自己去对应地方修改

	return {
		name: "名称",
		lv: "等级",
		hpmax: "生命上限",
		hp: "生命",
		manamax: "魔力上限",
		mana: "魔力",
		atk: "攻击",
		def: "防御",
		mdef: "护盾",
		money: "金币",
		exp: "经验",
		point: "加点",
		steps: "步数",
	} [name] || name;
},
        "loadData": function (data, callback) {
	// 读档操作；从存储中读取了内容后的行为

	// 重置游戏和路线
	core.resetGame(data.hero, data.hard, data.floorId, core.maps.loadMap(data.maps, null, data.hero.flags), data.values);
	core.status.route = core.decodeRoute(data.route);
	core.control._bindRoutePush();
	// 文字属性，全局属性
	core.status.textAttribute = core.getFlag('textAttribute', core.status.textAttribute);
	var toAttribute = core.getFlag('globalAttribute', core.status.globalAttribute);
	if (!core.same(toAttribute, core.status.globalAttribute)) {
		core.status.globalAttribute = toAttribute;
		core.resize();
	}
	// 重置音量
	core.events.setVolume(core.getFlag("__volume__", 1), 0);
	// 加载勇士图标
	var icon = core.status.hero.image;
	icon = core.getMappedName(icon);
	if (core.material.images.images[icon]) {
		core.material.images.hero = core.material.images.images[icon];
		core.material.icons.hero.width = core.material.images.images[icon].width / 4;
		core.material.icons.hero.height = core.material.images.images[icon].height / 4;
	}
	core.setFlag('__fromLoad__', true);

	// 给7区地图parallelDo用的
	core.setFlag('lastWeatherTime', 0);
	// 四章最后一区旋转背景图片
	core.setFlag('lastTime', 0);
	// 清除草飞效果
	core.events.stopAsync();

	if (core.getFlag("invisible", 0) == 1) {
		core.setOpacity('hero', 0.5);
	} else {
		core.setOpacity('hero', 0.99);
	}

	// 切换到对应的楼层
	core.changeFloor(data.floorId, null, data.hero.loc, 0, function () {
		// TODO：可以在这里设置读档后播放BGM
		if (core.hasFlag("__bgm__")) { // 持续播放
			core.playBgm(core.getFlag("__bgm__"));
		}
		core.setBgmSpeed(data.bgmSpeed || 100, true);

		core.removeFlag('__fromLoad__');

		// Boss战 绘制图片
		if (core.getFlag("B20F_boss_activated", 0) == 1) {
			core.insertCommonEvent("Ch1BossDraw");
		}
		if (core.getFlag("Ch4_boss_activated", 0) == 1) {
			core.insertCommonEvent("Ch4BossDraw");
		}
		if (core.getFlag("A21boss", 0) == 1) {
			core.insertCommonEvent("Ch4_2BossDraw");
		}
		if (core.getFlag("70F_boss_phase", 0) == 1) {
			core.trigger(0, 12);
			if (core.getFlag("70Fboss_skill2_ready", 0) > 0) {
				if (core.getFlag("70Fboss_skill2_dir", 0) % 2 != 0) {
					core.insertAction({ "type": "showImage", "code": 1, "image": "downArrow.png", "loc": ["flag:70Fboss_skill2_loc_x*32", "flag:70Fboss_skill2_loc_y*32"], "opacity": 1, "time": 0 });
				} else {
					core.insertAction({ "type": "showImage", "code": 1, "image": "rightArrow.png", "loc": ["flag:70Fboss_skill2_loc_x*32", "flag:70Fboss_skill2_loc_y*32"], "opacity": 1, "time": 0 });
				}
			}
			if (core.getFlag("70Fboss_skill3_ready", 0) > 0) {
				core.insertAction({ "type": "showImage", "code": 2, "image": "guangbiao.png", "loc": ["flag:70Fboss_skill3_loc_x*32", "flag:70Fboss_skill3_loc_y*32"], "opacity": 1, "time": 0 });
			}
		}

		if (callback) callback();
	});

},
        "triggerDebuff": function (action, type) {
	// 毒衰咒效果的获得与解除
	// action：获得还是解除；'get'表示获得，'remove'表示解除
	// type：一个数组表示获得了哪些毒衰咒效果；poison, weak，curse
	if (!(type instanceof Array)) type = [type];

	if (action == 'get') {
		if (core.inArray(type, 'poison') && !core.hasFlag("poison")) {
			// 获得毒效果
			core.setFlag('poison', true);
		}
		if (core.inArray(type, 'weak') && !core.hasFlag('weak')) {
			// 获得衰效果
			core.setFlag('weak', true);
			if (core.values.weakValue >= 1) {
				// >=1，直接扣数值
				core.addStatus('atk', -core.values.weakValue);
				core.addStatus('def', -core.values.weakValue);
			} else {
				// <1，扣比例
				core.addBuff('atk', -core.values.weakValue);
				core.addBuff('def', -core.values.weakValue);
			}
		}
		if (core.inArray(type, 'curse') && !core.hasFlag('curse')) {
			// 获得咒效果
			core.setFlag('curse', true);
		}
		if (core.inArray(type, 'superweak') && !core.hasFlag('superweak')) {
			// 衰 爆
			core.setFlag('superweak', true);
			core.drawHeroAnimate("seal");
			core.drawHeroAnimate("thunder3");
			core.setFlag("cannotMoveDirectly", true);
			core.setFlag("saved_atk", core.status.hero.atk);
			core.setFlag("saved_def", core.status.hero.def);
			core.setFlag("saved_atk_buff", core.getFlag("__atk_buff__", 1));
			core.setFlag("saved_def_buff", core.getFlag("__def_buff__", 1));
			core.setFlag("__atk_buff__", 1);
			core.setFlag("__def_buff__", 1);
			core.status.hero.atk = 1;
			core.status.hero.def = 1;
		}
	} else if (action == 'remove') {
		if (core.inArray(type, "poison") && core.hasFlag("poison")) {
			// 移除毒效果
			core.setFlag("poison", false);
		}
		if (core.inArray(type, "weak") && core.hasFlag("weak")) {
			// 移除衰效果
			core.setFlag("weak", false);
			if (core.values.weakValue >= 1) {
				// >=1，直接扣数值
				core.addStatus('atk', core.values.weakValue);
				core.addStatus('def', core.values.weakValue);
			} else {
				// <1，扣比例
				core.addBuff('atk', core.values.weakValue);
				core.addBuff('def', core.values.weakValue);
			}
		}
		if (core.inArray(type, "curse") && core.hasFlag("curse")) {
			// 移除咒效果
			core.setFlag("curse", false);
		}
		if (core.inArray(type, 'superweak') && core.hasFlag('superweak')) {
			// 衰 爆
			core.setFlag('superweak', false);
			core.drawHeroAnimate("dispel");
			core.setFlag("cannotMoveDirectly", false);
			core.status.hero.atk = core.getFlag("saved_atk", 0);
			core.status.hero.def = core.getFlag("saved_def", 0);
			core.setFlag("__atk_buff__", core.getFlag("saved_atk_buff", 1));
			core.setFlag("__def_buff__", core.getFlag("saved_def_buff", 1));
			core.updateStatusBar();
		}
	}
},
        "updateStatusBar": function () {
	// 更新状态栏

	if (core.getFlag("no_updateStatusBar", 0) == 1) return;
	// 检查等级
	core.events.checkLvUp();

	// 检查HP上限
	if (core.flags.statusBarItems.indexOf('enableHPMax') >= 0) {
		core.setStatus('hp', Math.min(core.getStatus('hpmax'), core.getStatus('hp')));
	}

	// 设置楼层名
	if (core.status.floorId) {
		core.setStatusBarInnerHTML('floor', core.status.maps[core.status.floorId].name);
	}

	// 设置勇士名字和图标
	core.setStatusBarInnerHTML('name', core.getStatus('name'));
	// 设置等级名称
	core.setStatusBarInnerHTML('lv', core.getLvName());

	// 设置生命上限、生命值、攻防护盾金币和经验值
	var statusList = ['hpmax', 'hp', 'mana', 'atk', 'def', 'mdef', 'money', 'exp'];
	statusList.forEach(function (item) {
		// 向下取整
		core.status.hero[item] = Math.floor(core.status.hero[item]);
		// 大数据格式化
		core.setStatusBarInnerHTML(item, core.getRealStatus(item));
	});

	// 设置魔力值; status:manamax 只有在非负时才生效。
	if (core.status.hero.manamax != null && core.getRealStatus('manamax') >= 0) {
		core.status.hero.mana = Math.min(core.status.hero.mana, core.getRealStatus('manamax'));
		core.setStatusBarInnerHTML('mana', core.status.hero.mana + "/" + core.getRealStatus('manamax'));
	} else {
		core.setStatusBarInnerHTML("mana", core.status.hero.mana);
	}
	// 设置技能栏
	// 可以用flag:skill表示当前开启的技能类型，flag:skillName显示技能名；详见文档-个性化-技能塔的支持
	core.setStatusBarInnerHTML('skill', core.getFlag('skillName', '无'));

	// 可以在这里添加自己额外的状态栏信息，比如想攻击显示 +0.5 可以这么写：
	// if (core.hasFlag('halfAtk')) core.setStatusBarInnerHTML('atk', core.statusBar.atk.innerText + "+0.5");

	// 如果是自定义添加的状态栏，也需要在这里进行设置显示的数值

	// 进阶
	if (core.flags.statusBarItems.indexOf('enableLevelUp') >= 0 && core.status.hero.lv < core.firstData.levelUp.length) {
		var need = core.calValue(core.firstData.levelUp[core.status.hero.lv].need);
		if (core.flags.statusBarItems.indexOf('levelUpLeftMode') >= 0)
			core.setStatusBarInnerHTML('up', core.formatBigNumber(need - core.getStatus('exp')) || "");
		else
			core.setStatusBarInnerHTML('up', core.formatBigNumber(need) || "");
	} else core.setStatusBarInnerHTML('up', "");

	// 钥匙
	var keys = ['yellowKey', 'blueKey', 'redKey', 'greenKey'];
	keys.forEach(function (key) {
		core.setStatusBarInnerHTML(key, core.setTwoDigits(core.itemCount(key)));
	});
	if (core.hasItem("I_superGreenKey")) {
		core.setStatusBarInnerHTML("greenKey", "∞");
	}
	// 毒衰咒
	core.setStatusBarInnerHTML('poison', core.hasFlag('poison') ? "毒" : "");
	core.setStatusBarInnerHTML('weak', core.hasFlag('weak') ? "衰" : "");
	// core.setStatusBarInnerHTML('curse', core.hasFlag('curse') ? "咒" : "");
	core.setStatusBarInnerHTML('curse', core.getFlag('freeze_stack', 0) > 0 ? "冰 " + core.getFlag('freeze_stack', 0) : "");
	if (core.getFlag('spe62_seal_hp', 0) > 0) {
		core.setStatusBarInnerHTML('curse', "封 " + core.getFlag('spe62_seal_hp', 0));
	}
	// 破炸飞
	core.setStatusBarInnerHTML('pickaxe', "破" + core.itemCount('pickaxe'));
	core.setStatusBarInnerHTML('bomb', "炸" + core.itemCount('bomb'));
	core.setStatusBarInnerHTML('fly', "飞" + core.itemCount('centerFly'));

	// 难度
	if (core.statusBar.hard.innerText != core.status.hard) {
		core.statusBar.hard.innerText = core.status.hard;
		main.levelChoose.forEach(function (one) {
			if (one.name == core.status.hard) {
				core.statusBar.hard.style.color = core.arrayToRGBA(one.color || [255, 0, 0, 1]);
			}
		});
	}
	// 自定义状态栏绘制
	core.drawStatusBar();

	// 更新阻激夹域的伤害值
	core.updateCheckBlock();
	// 更新全地图显伤
	core.updateDamage();
},
        "updateCheckBlock": function (floorId) {
	// 领域、夹击、阻击等的伤害值计算
	floorId = floorId || core.status.floorId;
	if (!floorId || !core.status.maps) return;

	var width = core.floors[floorId].width,
		height = core.floors[floorId].height;
	var blocks = core.getMapBlocksObj(floorId);

	var damage = {}, // 每个点的伤害值
		type = {}, // 每个点的伤害类型
		repulse = {}, // 每个点的阻击怪信息
		ambush = {}, // 每个点的捕捉信息
		lose_key = {}, // 每个点的失去钥匙信息
		seal_hp = {}, // 每个点的封印生命信息
		visible = {}, // 反隐
		spe_69 = {}, // 援护或游击的跳跃
		spe_72 = {},
		spe_72_occupied = {}, // 守护
		chase = {}, // 追猎
		no_autopick = {}, // 不自动拾取
		spe_92 = {}, // 熔火
		no_autobattle = {}; // 不自动清怪
	var betweenAttackLocs = {}; // 所有可能的夹击点
	var spe_76_locs = []; // 捕捉光环影响的点
	var needCache = false;
	var canGoDeadZone = core.flags.canGoDeadZone;
	var hero = core.status.hero;
	core.flags.canGoDeadZone = true;

	function addZoneDamage(cur_damage, extra_damage) {
		var extra = Math.max(extra_damage, 0) || 0;
		extra -= core.plugin.getTalentLv(9) * core.getRealStatus("mdef") / 3; // 主角抗地图伤害天赋
		extra = Math.floor(Math.max(0, extra));
		return (cur_damage || 0) + extra;
	}

	function isDoor(id) {
		var res = id == "yellowDoor" || id == "blueDoor" || id == "redDoor" || id == "greenDoor" || id == "specialDoor";
		res |= id == "yellowDoor2" || id == "blueDoor2" || id == "redDoor2" || id == "greenDoor2";
		return res;
	}

	// 检查支援怪是否可通过某格。带有支援属性的怪物视为可通行。空气墙视为可通行。
	function guardCanPass(x, y, floorId) {
		if (core.getBlock(x, y, floorId) != null && core.getBlock(x, y, floorId).event.noPass) {
			if (!core.plugin.isEnemy(x, y, floorId)) {
				if (core.getBlock(x, y, floorId).event.id == "airwall") { return true; } else {
					return false;
				}
			}
			var special = core.enemys.enemys[core.getBlock(x, y, floorId).event.id].special;
			if (special && core.hasSpecial(special, 26)) {} else {
				return false;
			}
		}
		return true;
	}
	// 检测怪物是否能被换位
	// 带有捕捉类特性的怪物不能被换
	function locEnemyCanSwap(x, y, floorId) {
		if (core.getBlockCls(x, y, floorId) != "enemys" && core.getBlockCls(x, y, floorId) != "enemy48") return false;
		var tmp_enemy = core.material.enemys[core.getBlock(x, y, floorId).event.id];
		var loc = x + "," + y;
		return !(core.enemys.hasSpecial(tmp_enemy, 27) || core.enemys.hasSpecial(tmp_enemy, 71) || core.getFlag("spe84_n", 0) > 0 || (spe_76_locs.indexOf(loc) != -1));
	}

	function willBlockView(x, y, floorId) {
		if (core.getBlock(x, y, floorId) != null && core.getBlock(x, y, floorId).event.noPass) {
			if (!(core.getBlockId(x, y, floorId) == "airwall" || core.getBlockCls(x, y, floorId) == "items" ||
					core.getBlockCls(x, y, floorId) == "enemys" || core.getBlockCls(x, y, floorId) == "enemy48")) {
				return true;
			}
		}
		return false;
	}

	// 先遍历一遍，记录捕捉光环影响的位置
	for (var loc in blocks) {
		var block = blocks[loc],
			x = block.x,
			y = block.y,
			id = block.event.id,
			enemy = core.material.enemys[id];
		if (block.disable) continue;
		if (enemy && core.hasSpecial(enemy.special, 76)) {
			// 领域范围，默认为1
			var range = enemy.range || 1;
			// 是否是九宫格领域
			var zoneSquare = false;
			if (enemy.zoneSquare != null) zoneSquare = enemy.zoneSquare;
			// 在范围内进行搜索，增加领域伤害值
			for (var dx = -range; dx <= range; dx++) {
				for (var dy = -range; dy <= range; dy++) {
					var nx = x + dx,
						ny = y + dy,
						currloc = nx + "," + ny;
					if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
					// 如果是十字领域，则还需要满足 |dx|+|dy|<=range
					if (!zoneSquare && Math.abs(dx) + Math.abs(dy) > range) continue;
					spe_76_locs.push(currloc);
				}
			}
		}
	}
	// 计算血网和领域、阻击、激光的伤害，计算捕捉信息
	// 对于多个怪物援护同一位置等情况，这里有个坑，blocks 是 object，遍历不保序。需要自己保证固定的优先顺序。
	// “单位置多援护”在 checkBlock 里处理，“单位置多守护”直接在这里处理。
	for (var loc in blocks) {
		var block = blocks[loc],
			x = block.x,
			y = block.y,
			id = block.event.id,
			enemy = core.material.enemys[id];
		if (block.disable) continue;

		type[loc] = type[loc] || {};

		// 血网
		// 如需调用当前楼层的ratio可使用  core.status.maps[floorId].ratio
		if (id == 'lavaNet') {
			damage[loc] = (damage[loc] || 0) + core.values.lavaDamage;
			type[loc]["血网伤害"] = true;
		}

		// 领域
		// 如果要防止领域伤害，可以直接简单的将 flag:no_zone 设为true
		if (enemy && core.hasSpecial(enemy.special, 15) && !core.hasFlag('no_zone')) {
			// 领域范围，默认为1
			var range = enemy.range || 1;
			// 是否是九宫格领域
			var zoneSquare = false;
			if (enemy.zoneSquare != null) zoneSquare = enemy.zoneSquare;
			// 在范围内进行搜索，增加领域伤害值
			for (var dx = -range; dx <= range; dx++) {
				for (var dy = -range; dy <= range; dy++) {
					if (dx == 0 && dy == 0) continue;
					var nx = x + dx,
						ny = y + dy,
						currloc = nx + "," + ny;
					if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
					// 如果是十字领域，则还需要满足 |dx|+|dy|<=range
					if (!zoneSquare && Math.abs(dx) + Math.abs(dy) > range) continue;
					damage[currloc] = addZoneDamage(damage[currloc], enemy.value);
					type[currloc] = type[currloc] || {};
					type[currloc]["领域伤害"] = true;
				}
			}
		}
		// 熔火领域
		if (enemy && core.hasSpecial(enemy.special, 92) && !core.hasFlag('no_zone')) {
			// 领域范围，默认为1
			var range = enemy.range || 1;
			// 是否是九宫格领域
			var zoneSquare = false;
			if (enemy.zoneSquare != null) zoneSquare = enemy.zoneSquare;
			// 在范围内进行搜索，增加领域伤害值
			for (var dx = -range; dx <= range; dx++) {
				for (var dy = -range; dy <= range; dy++) {
					if (dx == 0 && dy == 0) continue;
					var nx = x + dx,
						ny = y + dy,
						currloc = nx + "," + ny;
					if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
					// 如果是十字领域，则还需要满足 |dx|+|dy|<=range
					if (!zoneSquare && Math.abs(dx) + Math.abs(dy) > range) continue;
					var final_damage = enemy.damage2;
					for (var i = 0; i < core.getFlag("spe92_debuff", 0); ++i) {
						final_damage *= 1.5;
					}
					damage[currloc] = addZoneDamage(damage[currloc], final_damage);
					spe_92[currloc] = true;
					type[currloc] = type[currloc] || {};
					type[currloc]["熔火伤害"] = true;
				}
			}
		}
		// 百分比领域
		if (enemy && core.hasSpecial(enemy.special, 93) && !core.hasFlag('no_zone')) {
			// 领域范围，默认为1
			var range = enemy.range || 1;
			// 是否是九宫格领域
			var zoneSquare = false;
			if (enemy.zoneSquare != null) zoneSquare = enemy.zoneSquare;
			// 在范围内进行搜索，增加领域伤害值
			for (var dx = -range; dx <= range; dx++) {
				for (var dy = -range; dy <= range; dy++) {
					if (dx == 0 && dy == 0) continue;
					var nx = x + dx,
						ny = y + dy,
						currloc = nx + "," + ny;
					if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
					// 如果是十字领域，则还需要满足 |dx|+|dy|<=range
					if (!zoneSquare && Math.abs(dx) + Math.abs(dy) > range) continue;
					damage[currloc] = addZoneDamage(damage[currloc], enemy.damage2 * core.status.hero.hp / 100);
					type[currloc] = type[currloc] || {};
					type[currloc]["领域伤害"] = true;
				}
			}
		}

		// 游击
		if (enemy && core.hasSpecial(enemy.special, 79) && !core.hasFlag('no_zone')) {
			// 领域部分
			var zone_dxy = [
				[0, -2],
				[0, 2],
				[-2, 0],
				[2, 0]
			];
			for (var i in zone_dxy) {
				var nx = x + zone_dxy[i][0],
					ny = y + zone_dxy[i][1],
					currloc = nx + "," + ny;
				if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
				damage[currloc] = addZoneDamage(damage[currloc], enemy.value);
				type[currloc] = type[currloc] || {};
				type[currloc]["游击伤害"] = true;
			}
			// 阻击部分
			for (var dir in core.utils.scan) {
				var nx = x + core.utils.scan[dir].x,
					ny = y + core.utils.scan[dir].y,
					currloc = nx + "," + ny;
				if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
				damage[currloc] = addZoneDamage(damage[currloc], enemy.value);
				type[currloc] = type[currloc] || {};
				type[currloc]["游击伤害"] = true;

				var rdir = core.turnDirection(":back", dir);
				// 检查下一个点是否存在事件（从而判定是否移动）
				var rnx = x + core.utils.scan[rdir].x,
					rny = y + core.utils.scan[rdir].y;
				if (core.canMoveHero(x, y, rdir, floorId) && core.getBlock(rnx, rny, floorId) == null) {
					repulse[currloc] = (repulse[currloc] || []).concat([
						[x, y, id, rdir]
					]);
				} else {
					// 跳跃部分：无法后退时尝试跳到角色后面2格
					var jump_x = x + 3 * core.utils.scan[dir].x,
						jump_y = y + 3 * core.utils.scan[dir].y;
					if (jump_x < 0 || jump_x >= width || jump_y < 0 || jump_y >= height) continue;
					if (core.getBlock(jump_x, jump_y, floorId) == null) {
						if (!spe_69[currloc]) spe_69[currloc] = [];
						spe_69[currloc].push([x, y, jump_x, jump_y]);
					}
				}
			}
			// 追击部分
			for (var dir in core.utils.scan) {
				var nx = x + 3 * core.utils.scan[dir].x,
					ny = y + 3 * core.utils.scan[dir].y,
					currloc = nx + "," + ny;
				if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
				damage[currloc] = addZoneDamage(damage[currloc], enemy.value);
				type[currloc] = type[currloc] || {};
				type[currloc]["游击伤害"] = true;

				// 检查下一个点是否存在事件（从而判定是否移动）
				var rnx = x + core.utils.scan[dir].x,
					rny = y + core.utils.scan[dir].y;
				if (core.canMoveHero(x, y, dir, floorId) && core.getBlock(rnx, rny, floorId) == null) {
					repulse[currloc] = (repulse[currloc] || []).concat([
						[x, y, id, dir]
					]);
				}
			}
		}

		// 阻击
		// 如果要防止阻击伤害，可以直接简单的将 flag:no_repulse 设为true
		if (enemy && core.hasSpecial(enemy.special, 18) && !core.hasFlag('no_repulse')) {
			for (var dir in core.utils.scan) {
				var nx = x + core.utils.scan[dir].x,
					ny = y + core.utils.scan[dir].y,
					currloc = nx + "," + ny;
				if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
				damage[currloc] = addZoneDamage(damage[currloc], enemy.value);
				type[currloc] = type[currloc] || {};
				type[currloc]["阻击伤害"] = true;

				var rdir = core.turnDirection(":back", dir);
				// 检查下一个点是否存在事件（从而判定是否移动）
				var rnx = x + core.utils.scan[rdir].x,
					rny = y + core.utils.scan[rdir].y;
				if (core.canMoveHero(x, y, rdir, floorId) && core.getBlock(rnx, rny, floorId) == null) {
					repulse[currloc] = (repulse[currloc] || []).concat([
						[x, y, id, rdir]
					]);
					no_autopick[currloc] = true;
				}
			}
		}
		// 百分比阻击
		if (enemy && core.hasSpecial(enemy.special, 94) && !core.hasFlag('no_repulse')) {
			for (var dir in core.utils.scan) {
				var nx = x + core.utils.scan[dir].x,
					ny = y + core.utils.scan[dir].y,
					currloc = nx + "," + ny;
				if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
				damage[currloc] = addZoneDamage(damage[currloc], enemy.damage2 * core.status.hero.hp / 100);
				type[currloc] = type[currloc] || {};
				type[currloc]["阻击伤害"] = true;

				var rdir = core.turnDirection(":back", dir);
				// 检查下一个点是否存在事件（从而判定是否移动）
				var rnx = x + core.utils.scan[rdir].x,
					rny = y + core.utils.scan[rdir].y;
				if (core.canMoveHero(x, y, rdir, floorId) && core.getBlock(rnx, rny, floorId) == null) {
					repulse[currloc] = (repulse[currloc] || []).concat([
						[x, y, id, rdir]
					]);
					no_autopick[currloc] = true;
				}
			}
		}

		// 游猎
		// 由于会导致怪物移动，写到阻击里面
		if (enemy && core.hasSpecial(enemy.special, 77) && !core.hasFlag('no_repulse')) {
			var self_occupied = {};
			for (var dir in core.utils.scan) {
				var zx = x + core.utils.scan[dir].x,
					zy = y + core.utils.scan[dir].y,
					currloc = zx + "," + zy;
				if (zx < 0 || zx >= width || zy < 0 || zy >= height) continue;

				// 检查下一个点是否存在事件（从而判定是否能移动）
				if (core.canMoveHero(x, y, dir, floorId) && core.getBlock(zx, zy, floorId) == null) {
					// 能移动，此时所在的同行列具有射击效果
					// 下面这一长串和射击的代码基本相同，但需要注意移动方向和射击方向总是垂直
					if (dir == "up" || dir == "down") {
						for (var nx = zx - 1; nx >= 0; --nx) {
							var currloc = nx + "," + zy;
							if (willBlockView(nx, zy, floorId)) {
								break;
							}
							type[currloc] = type[currloc] || {};
							if (!self_occupied[currloc]) {
								self_occupied[currloc] = true;
								damage[currloc] = addZoneDamage(damage[currloc], enemy.snipe_damage - core.getRealStatusOrDefault(hero, "def"));
								type[currloc]["游猎伤害"] = true;
								repulse[currloc] = (repulse[currloc] || []).concat([
									[x, y, id, dir]
								]);
							}
						}
						for (var nx = zx + 1; nx < width; ++nx) {
							var currloc = nx + "," + zy;
							if (willBlockView(nx, zy, floorId)) {
								break;
							}
							type[currloc] = type[currloc] || {};
							if (!self_occupied[currloc]) {
								self_occupied[currloc] = true;
								damage[currloc] = addZoneDamage(damage[currloc], enemy.snipe_damage - core.getRealStatusOrDefault(hero, "def"));
								type[currloc]["游猎伤害"] = true;
								repulse[currloc] = (repulse[currloc] || []).concat([
									[x, y, id, dir]
								]);
							}
						}
					} else if (dir == "left" || dir == "right") {
						for (var ny = zy - 1; ny >= 0; --ny) {
							var currloc = zx + "," + ny;
							if (willBlockView(zx, ny, floorId)) {
								break;
							}
							type[currloc] = type[currloc] || {};
							if (!self_occupied[currloc]) {
								self_occupied[currloc] = true;
								damage[currloc] = addZoneDamage(damage[currloc], enemy.snipe_damage - core.getRealStatusOrDefault(hero, "def"));
								type[currloc]["游猎伤害"] = true;
								repulse[currloc] = (repulse[currloc] || []).concat([
									[x, y, id, dir]
								]);
							}
						}
						for (var ny = zy + 1; ny < height; ++ny) {
							var currloc = zx + "," + ny;
							if (willBlockView(zx, ny, floorId)) {
								break;
							}
							type[currloc] = type[currloc] || {};
							if (!self_occupied[currloc]) {
								self_occupied[currloc] = true;
								damage[currloc] = addZoneDamage(damage[currloc], enemy.snipe_damage - core.getRealStatusOrDefault(hero, "def"));
								type[currloc]["游猎伤害"] = true;
								repulse[currloc] = (repulse[currloc] || []).concat([
									[x, y, id, dir]
								]);
							}
						}
					}
				}
				// 挡住游击的物品
				if (core.canMoveHero(x, y, dir, floorId)) {
					no_autopick[zx + "," + zy] = true;
				}
			}
		}

		// 避战
		// 由于会导致怪物移动，写到阻击里面
		if (enemy && core.hasSpecial(enemy.special, 91) && !core.hasFlag('no_repulse')) {
			for (var dir in core.utils.scan) {
				var nx = x + core.utils.scan[dir].x,
					ny = y + core.utils.scan[dir].y,
					currloc = nx + "," + ny;
				if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
				damage[currloc] = addZoneDamage(damage[currloc], enemy.value);
				type[currloc] = type[currloc] || {};
				type[currloc]["阻击伤害"] = true;

				// 其他三个方向
				var dirs = [core.turnDirection(":back", dir), core.turnDirection(":left", dir), core.turnDirection(":right", dir)];
				var move_dir, max_distance = 0;
				for (var index in dirs) {
					var cur_distance = 0;
					var cur_dir = dirs[index];
					var cur_x = x,
						cur_y = y;
					var next_x = x + core.utils.scan[cur_dir].x,
						next_y = y + core.utils.scan[cur_dir].y;
					while (core.canMoveHero(cur_x, cur_y, cur_dir, floorId) && core.getBlock(next_x, next_y, floorId) == null) {
						cur_distance += 1;
						cur_x = next_x;
						cur_y = next_y;
						next_x = cur_x + core.utils.scan[cur_dir].x;
						next_y = cur_y + core.utils.scan[cur_dir].y;
					}
					if (cur_distance > max_distance) {
						max_distance = cur_distance;
						move_dir = cur_dir;
					}
				}
				if (max_distance > 0) {
					repulse[currloc] = (repulse[currloc] || []).concat([
						[x, y, id, move_dir]
					]);
				}
			}
		}

		// 激光
		// 如果要防止激光伤害，可以直接简单的将 flag:no_laser 设为true
		// 检查条件，中间必须可通行。敌人、物品和空气墙视为可通行。
		if (enemy && (core.hasSpecial(enemy.special, 24) || core.hasSpecial(enemy.special, 77)) && !core.hasFlag("no_laser")) {
			for (var nx = x - 1; nx >= 0; --nx) {
				var currloc = nx + "," + y;
				if (willBlockView(nx, y, floorId)) {
					break;
				}
				damage[currloc] = addZoneDamage(damage[currloc], enemy.snipe_damage - core.getRealStatusOrDefault(hero, "def"));
				type[currloc] = type[currloc] || {};
				type[currloc]["射击伤害"] = true;
			}
			for (var nx = x + 1; nx < width; ++nx) {
				var currloc = nx + "," + y;
				if (willBlockView(nx, y, floorId)) {
					break;
				}
				damage[currloc] = addZoneDamage(damage[currloc], enemy.snipe_damage - core.getRealStatusOrDefault(hero, "def"));
				type[currloc] = type[currloc] || {};
				type[currloc]["射击伤害"] = true;
			}
			for (var ny = y - 1; ny >= 0; --ny) {
				var currloc = x + "," + ny;
				if (willBlockView(x, ny, floorId)) {
					break;
				}
				damage[currloc] = addZoneDamage(damage[currloc], enemy.snipe_damage - core.getRealStatusOrDefault(hero, "def"));
				type[currloc] = type[currloc] || {};
				type[currloc]["射击伤害"] = true;
			}
			for (var ny = y + 1; ny < height; ++ny) {
				var currloc = x + "," + ny;
				if (willBlockView(x, ny, floorId)) {
					break;
				}
				damage[currloc] = addZoneDamage(damage[currloc], enemy.snipe_damage - core.getRealStatusOrDefault(hero, "def"));
				type[currloc] = type[currloc] || {};
				type[currloc]["射击伤害"] = true;
			}
		}

		// 支援
		// 由于目前支援战斗的 feature，与被支援怪战斗前会取消战斗、插入支援动画、再进行战斗
		// 我偷懒干脆不让被支援的怪物可以被自动清怪了，免得引发奇怪的 bug
		// 支援这个特技对造塔者非常不友好，战斗伤害计算也特别麻烦，能不用就别用
		if (enemy && core.hasSpecial(enemy.special, 26)) {
			for (var nx = x - 1; nx >= 0; nx--) {
				if (core.plugin.isEnemy(nx, y, floorId)) {
					var currloc = nx + "," + y;
					no_autobattle[currloc] = true;
				}
				if (!guardCanPass(nx, y, floorId)) {
					break;
				}
			}
			for (var nx = x + 1; nx < width; nx++) {
				if (core.plugin.isEnemy(nx, y, floorId)) {
					var currloc = nx + "," + y;
					no_autobattle[currloc] = true;
				}
				if (!guardCanPass(nx, y, floorId)) {
					break;
				}
			}
			for (var ny = y - 1; ny >= 0; ny--) {
				if (core.plugin.isEnemy(x, ny, floorId)) {
					var currloc = x + "," + ny;
					no_autobattle[currloc] = true;
				}
				if (!guardCanPass(x, ny, floorId)) {
					break;
				}
			}
			for (var ny = y + 1; ny < height; ny++) {
				if (core.plugin.isEnemy(x, ny, floorId)) {
					var currloc = x + "," + ny;
					no_autobattle[currloc] = true;
				}
				if (!guardCanPass(x, ny, floorId)) {
					break;
				}
			}
		}
		// 追击
		if (enemy && core.hasSpecial(enemy.special, 34) && !core.getFlag("invisible", 0)) {
			no_autobattle[x + "," + y] = true;
			for (var nx = 0; nx < width; nx++) {
				var currloc = nx + "," + y;
				if (nx != x) {
					var dir;
					if (nx < x) {
						if (core.getFlag("chase_no_force", 0) == 1 && x - nx == 1) continue;
						dir = "left";
					} else {
						if (core.getFlag("chase_no_force", 0) == 1 && nx - x == 1) continue;
						dir = "right";
					}
					if (x - nx == 1 || nx - x == 1) no_autopick[currloc] = true;
					// 检查下一个点是否存在事件（从而判定是否移动）
					var rnx = x + core.utils.scan[dir].x;
					var rny = y + core.utils.scan[dir].y;
					if (rnx >= 0 && rnx < width && rny >= 0 && rny < height && core.getBlock(rnx, rny, floorId) == null) {
						repulse[currloc] = (repulse[currloc] || []).concat([
							[x, y, id, dir]
						]);
						no_autopick[currloc] = true;
					}
				}
			}
			for (var ny = 0; ny < height; ny++) {
				var currloc = x + "," + ny;
				if (ny != y) {
					var dir;
					if (ny < y) {
						if (core.getFlag("chase_no_force", 0) == 1 && y - ny == 1) continue;
						dir = "up";
					} else {
						if (core.getFlag("chase_no_force", 0) == 1 && ny - y == 1) continue;
						dir = "down";
					}
					if (y - ny == 1 || ny - y == 1) no_autopick[currloc] = true;
					//检查下一个点是否存在事件（从而判定是否移动）
					rnx = x + core.utils.scan[dir].x;
					rny = y + core.utils.scan[dir].y;
					if (rnx >= 0 && rnx < width && rny >= 0 && rny < height && core.getBlock(rnx, rny, floorId) == null) {
						repulse[currloc] = (repulse[currloc] || []).concat([
							[x, y, id, dir]
						]);
						no_autopick[currloc] = true;
					}
				}
			}
		}
		// 追猎。与追击不同，中间的障碍物会阻挡视线（空气墙、物品和其他敌人不会阻挡）。
		if (enemy && core.hasSpecial(enemy.special, 81) && !core.getFlag("invisible", 0)) {
			var rnx, rny, dir, currloc;
			for (var nx = x + 1; nx < width; nx++) {
				currloc = nx + "," + y;
				if (willBlockView(nx, y, floorId)) {
					break;
				}
				dir = "right";
				// 检查下一个点是否存在事件（从而判定是否移动）
				rnx = x + core.utils.scan[dir].x;
				rny = y + core.utils.scan[dir].y;
				if (rnx >= 0 && rnx < width && rny >= 0 && rny < height &&
					(core.getBlock(rnx, rny, floorId) == null || core.getBlockCls(rnx, rny, floorId) == "items")) {
					chase[currloc] = (chase[currloc] || []).concat([
						[x, y, id, dir]
					]);
				}
				// 如果追猎怪被物品卡住无法移动，则卡住它的物品不能被自动拾取
				//if (rnx >= 0 && rnx < width && rny >= 0 && rny < height && nx == x + 1) {
				//	no_autopick[currloc] = true;
				//}
			}
			for (var nx = x - 1; nx >= 0; nx--) {
				currloc = nx + "," + y;
				if (willBlockView(nx, y, floorId)) {
					break;
				}
				dir = "left";
				// 检查下一个点是否存在事件（从而判定是否移动）
				rnx = x + core.utils.scan[dir].x;
				rny = y + core.utils.scan[dir].y;
				if (rnx >= 0 && rnx < width && rny >= 0 && rny < height &&
					(core.getBlock(rnx, rny, floorId) == null || core.getBlockCls(rnx, rny, floorId) == "items")) {
					chase[currloc] = (chase[currloc] || []).concat([
						[x, y, id, dir]
					]);
				}
			}
			for (var ny = y + 1; ny < height; ny++) {
				currloc = x + "," + ny;
				if (willBlockView(x, ny, floorId)) {
					break;
				}
				dir = "down";
				// 检查下一个点是否存在事件（从而判定是否移动）
				rnx = x + core.utils.scan[dir].x;
				rny = y + core.utils.scan[dir].y;
				if (rnx >= 0 && rnx < width && rny >= 0 && rny < height &&
					(core.getBlock(rnx, rny, floorId) == null || core.getBlockCls(rnx, rny, floorId) == "items")) {
					chase[currloc] = (chase[currloc] || []).concat([
						[x, y, id, dir]
					]);
				}
			}
			for (var ny = y - 1; ny >= 0; ny--) {
				currloc = x + "," + ny;
				if (willBlockView(x, ny, floorId)) {
					break;
				}
				dir = "up";
				// 检查下一个点是否存在事件（从而判定是否移动）
				rnx = x + core.utils.scan[dir].x;
				rny = y + core.utils.scan[dir].y;
				if (rnx >= 0 && rnx < width && rny >= 0 && rny < height &&
					(core.getBlock(rnx, rny, floorId) == null || core.getBlockCls(rnx, rny, floorId) == "items")) {
					chase[currloc] = (chase[currloc] || []).concat([
						[x, y, id, dir]
					]);
				}
			}
		}

		// 捕捉
		// 如果要防止捕捉效果，可以直接简单的将 flag:no_ambush 设为true
		if (enemy && !core.hasFlag("no_ambush") &&
			(core.enemys.hasSpecial(enemy.special, 27) || spe_76_locs.indexOf(loc) != -1 ||
				(core.enemys.hasSpecial(enemy.special, 71) && !core.getFlag("invisible", 0)) ||
				core.getFlag("spe84_n", 0) > 0 || core.getFlag("superweak_n", 0) > 0)
		) {
			// 给周围格子加上【捕捉】记号
			for (var dir in core.utils.scan) {
				var nx = x + core.utils.scan[dir].x,
					ny = y + core.utils.scan[dir].y,
					currloc = nx + "," + ny;
				if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
				ambush[currloc] = (ambush[currloc] || []).concat([
					[x, y, id, dir]
				]);
			}
		}

		// 夹击；在这里提前计算所有可能的夹击点，具体计算逻辑在下面
		// 如果要防止夹击伤害，可以简单的将 flag:no_betweenAttack 设为true
		if (enemy && !core.hasFlag('no_betweenAttack') &&
			(core.enemys.hasSpecial(enemy.special, 16) || core.enemys.hasSpecial(enemy.special, 101))) {
			for (var dir in core.utils.scan) {
				var nx = x + core.utils.scan[dir].x,
					ny = y + core.utils.scan[dir].y,
					currloc = nx + "," + ny;
				if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
				betweenAttackLocs[currloc] = true;
			}
		}

		// 域匙
		if (enemy && core.hasSpecial(enemy.special, 102) && !core.hasFlag('no_zone')) {
			// 领域范围，默认为1
			var range = enemy.range || 1;
			// 是否是九宫格领域
			var zoneSquare = false;
			if (enemy.zoneSquare != null) zoneSquare = enemy.zoneSquare;
			// 在范围内进行搜索，增加领域伤害值
			for (var dx = -range; dx <= range; dx++) {
				for (var dy = -range; dy <= range; dy++) {
					if (dx == 0 && dy == 0) continue;
					var nx = x + dx,
						ny = y + dy,
						currloc = nx + "," + ny;
					if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
					// 如果是十字领域，则还需要满足 |dx|+|dy|<=range
					if (!zoneSquare && Math.abs(dx) + Math.abs(dy) > range) continue;
					lose_key[currloc] = (lose_key[currloc] || 0) + 1;
				}
			}
		}

		// 阻匙
		if (enemy && core.hasSpecial(enemy.special, 103) && !core.hasFlag('no_repulse')) {
			for (var dir in core.utils.scan) {
				var nx = x + core.utils.scan[dir].x,
					ny = y + core.utils.scan[dir].y,
					currloc = nx + "," + ny;
				if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
				lose_key[currloc] = (lose_key[currloc] || 0) + 1;

				var rdir = core.turnDirection(":back", dir);
				// 检查下一个点是否存在事件（从而判定是否移动）
				var rnx = x + core.utils.scan[rdir].x,
					rny = y + core.utils.scan[rdir].y;
				if (core.canMoveHero(x, y, rdir, floorId) && core.getBlock(rnx, rny, floorId) == null) {
					repulse[currloc] = (repulse[currloc] || []).concat([
						[x, y, id, rdir]
					]);
				}
			}
		}

		// 破军
		if (enemy && core.hasSpecial(enemy.special, 66) && !core.hasFlag('no_zone')) {
			// 领域范围，默认为1
			var range = enemy.range || 1;
			// 是否是九宫格领域
			var zoneSquare = false;
			if (enemy.zoneSquare != null) zoneSquare = enemy.zoneSquare;
			// 在范围内进行搜索，增加领域伤害值
			for (var dx = -range; dx <= range; dx++) {
				for (var dy = -range; dy <= range; dy++) {
					if (dx == 0 && dy == 0) continue;
					var nx = x + dx,
						ny = y + dy,
						currloc = nx + "," + ny;
					if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
					// 如果是十字领域，则还需要满足 |dx|+|dy|<=range
					if (!zoneSquare && Math.abs(dx) + Math.abs(dy) > range) continue;
					seal_hp[currloc] = core.status.hero.hp - 1;
				}
			}
		}

		// 目力
		if (enemy && core.hasSpecial(enemy.special, 67) && core.getFlag("invisible", 0) == 1) {
			// 领域范围，默认为1
			var range = enemy.range || 1;
			// 是否是九宫格领域
			var zoneSquare = false;
			if (enemy.zoneSquare != null) zoneSquare = enemy.zoneSquare;
			// 在范围内进行搜索，增加领域伤害值
			for (var dx = -range; dx <= range; dx++) {
				for (var dy = -range; dy <= range; dy++) {
					if (dx == 0 && dy == 0) continue;
					var nx = x + dx,
						ny = y + dy,
						currloc = nx + "," + ny;
					if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
					// 如果是十字领域，则还需要满足 |dx|+|dy|<=range
					if (!zoneSquare && Math.abs(dx) + Math.abs(dy) > range) continue;
					visible[currloc] = 1;
				}
			}
		}

		// 援护。首先以自身为起点寻找其他怪物，再检查怪物后方是否为空地。
		// 检查条件，中间必须可通行。敌人、物品和空气墙视为可通行。
		// spe_69 = {触发援护的位置: [援护info1，援护info2，...]}
		// 援护info = [跳跃者原x,y，目标地点x,y]，checkBlock 时判断目标地点冲突的情况
		if (enemy && core.hasSpecial(enemy.special, 69) && !core.getFlag("invisible", 0)) {
			for (var nx = x - 1; nx >= 2; --nx) {
				var currloc = nx + "," + y;
				if (willBlockView(nx, y, floorId)) {
					break;
				}
				if (core.plugin.isEnemy(nx, y, floorId)) {
					no_autopick[nx - 1 + "," + y] = true;
					if (core.getBlock(nx - 1, y, floorId) == null) {
						var target_loc = (nx - 2) + "," + y;
						if (!spe_69[target_loc]) spe_69[target_loc] = [];
						spe_69[target_loc].push([x, y, nx - 1, y]);
					}
				}
			}
			for (var nx = x + 1; nx < width - 2; ++nx) {
				var currloc = nx + "," + y;
				if (willBlockView(nx, y, floorId)) {
					break;
				}
				if (core.plugin.isEnemy(nx, y, floorId)) {
					no_autopick[nx + 1 + "," + y] = true;
					if (core.getBlock(nx + 1, y, floorId) == null) {
						var target_loc = (nx + 2) + "," + y;
						if (!spe_69[target_loc]) spe_69[target_loc] = [];
						spe_69[target_loc].push([x, y, nx + 1, y]);
					}
				}
			}
			for (var ny = y - 1; ny >= 2; --ny) {
				var currloc = x + "," + ny;
				if (willBlockView(x, ny, floorId)) {
					break;
				}
				if (core.plugin.isEnemy(x, ny, floorId)) {
					no_autopick[x + "," + (ny - 1)] = true;
					if (core.getBlock(x, ny - 1, floorId) == null) {
						var target_loc = x + "," + (ny - 2);
						if (!spe_69[target_loc]) spe_69[target_loc] = [];
						spe_69[target_loc].push([x, y, x, ny - 1]);
					}
				}
			}
			for (var ny = y + 1; ny < height - 2; ++ny) {
				var currloc = x + "," + ny;
				if (willBlockView(x, ny, floorId)) {
					break;
				}
				if (core.plugin.isEnemy(x, ny, floorId)) {
					no_autopick[x + "," + (ny + 1)] = true;
					if (core.getBlock(x, ny + 1, floorId) == null) {
						var target_loc = x + "," + (ny + 2);
						if (!spe_69[target_loc]) spe_69[target_loc] = [];
						spe_69[target_loc].push([x, y, x, ny + 1]);
					}
				}
			}
		}

		// 守护
		// 带有捕捉或隐身属性的怪物不会被守护，每只怪只能被守护一次，同位置多守护，则左上优先换位
		// spe_72_occupied = {被守护的怪物的位置: [守护者x,y，被守护者x,y]}
		// spe_72 = {触发守护的位置（被守护怪物的四周）: 守护info（[守护者x,y，被守护者x,y]）}
		if (enemy && core.hasSpecial(enemy.special, 72) && !core.getFlag("invisible", 0)) {
			for (var nx = x - 1; nx >= 0; --nx) {
				var currloc = nx + "," + y; // 被守护者
				var tmp_id = core.getBlockId(nx, y, floorId);
				if (isDoor(tmp_id)) break;
				if (nx != x && core.plugin.isEnemy(nx, y, floorId) && locEnemyCanSwap(nx, y, floorId)) {
					if (spe_72_occupied[currloc]) {
						if (100 * spe_72_occupied[currloc][0] + spe_72_occupied[currloc][1] < 100 * x + y) {
							continue;
						}
					}
					spe_72_occupied[currloc] = [x, y, nx, y];
				}
			}
			for (var nx = x + 1; nx < width; ++nx) {
				var currloc = nx + "," + y;
				var tmp_id = core.getBlockId(nx, y, floorId);
				if (isDoor(tmp_id)) break;
				if (nx != x && core.plugin.isEnemy(nx, y, floorId) && !spe_72_occupied[currloc] && locEnemyCanSwap(nx, y, floorId)) {
					if (spe_72_occupied[currloc]) {
						if (100 * spe_72_occupied[currloc][0] + spe_72_occupied[currloc][1] < 100 * x + y) {
							continue;
						}
					}
					spe_72_occupied[currloc] = [x, y, nx, y];
				}
			}
			for (var ny = y - 1; ny >= 0; --ny) {
				var currloc = x + "," + ny;
				var tmp_id = core.getBlockId(x, ny, floorId);
				if (isDoor(tmp_id)) break;
				if (ny != y && core.plugin.isEnemy(x, ny, floorId) && !spe_72_occupied[currloc] && locEnemyCanSwap(x, ny, floorId)) {
					if (spe_72_occupied[currloc]) {
						if (100 * spe_72_occupied[currloc][0] + spe_72_occupied[currloc][1] < 100 * x + y) {
							continue;
						}
					}
					spe_72_occupied[currloc] = [x, y, x, ny];
				}
			}
			for (var ny = y + 1; ny < height; ++ny) {
				var currloc = x + "," + ny;
				var tmp_id = core.getBlockId(x, ny, floorId);
				if (isDoor(tmp_id)) break;
				if (ny != y && core.plugin.isEnemy(x, ny, floorId) && !spe_72_occupied[currloc] && locEnemyCanSwap(x, ny, floorId)) {
					if (spe_72_occupied[currloc]) {
						if (100 * spe_72_occupied[currloc][0] + spe_72_occupied[currloc][1] < 100 * x + y) {
							continue;
						}
					}
					spe_72_occupied[currloc] = [x, y, x, ny];
				}
			}
		}

		// 检查地图范围类技能
		var specialFlag = core.getSpecialFlag(enemy);
		if (specialFlag & 1) needCache = true;
		if (core.status.event.id == 'viewMaps') needCache = true;
		if ((core.status.event.id == 'book' || core.status.event.id == 'book-detail') && core.status.event.ui) needCache = true;
	}

	// 守护的最终处理，从左上到右下依次触发
	for (var i = 0; i < width; ++i) {
		for (var j = 0; j < height; ++j) {
			var currloc = i + "," + j;
			if (currloc in spe_72_occupied) {
				var nx = spe_72_occupied[currloc][2],
					ny = spe_72_occupied[currloc][3];
				var dx_arr = [-1, 0, 0, 1],
					dy_arr = [0, -1, 1, 0];
				for (var zzz = 0; zzz < 4; zzz += 1) {
					var dx = dx_arr[zzz],
						dy = dy_arr[zzz];
					var tmp_loc = (nx + dx) + "," + (ny + dy);
					if (!spe_72[tmp_loc]) spe_72[tmp_loc] = [];
					spe_72[tmp_loc].push(spe_72_occupied[currloc]);
				}
			}
		}
	}

	// 对每个可能的夹击点计算夹击伤害
	for (var loc in betweenAttackLocs) {
		var xy = loc.split(","),
			x = parseInt(xy[0]),
			y = parseInt(xy[1]);
		// 夹击怪物的ID
		var enemyId1 = null,
			enemyId2 = null;
		var bt_type = 0; // 夹击类型
		// 检查左右夹击
		var leftBlock = blocks[(x - 1) + "," + y],
			rightBlock = blocks[(x + 1) + "," + y];
		if (leftBlock && !leftBlock.disable && rightBlock && !rightBlock.disable && leftBlock.id == rightBlock.id) {
			if (core.hasSpecial(leftBlock.event.id, 16)) {
				enemyId1 = leftBlock.event.id;
				bt_type = 1;
			}
			if (core.hasSpecial(leftBlock.event.id, 101)) {
				enemyId1 = leftBlock.event.id;
				bt_type = 2;
			}
		}
		// 检查上下夹击
		var topBlock = blocks[x + "," + (y - 1)],
			bottomBlock = blocks[x + "," + (y + 1)];
		if (topBlock && !topBlock.disable && bottomBlock && !bottomBlock.disable && topBlock.id == bottomBlock.id) {
			if (core.hasSpecial(topBlock.event.id, 16)) {
				enemyId2 = topBlock.event.id;
				bt_type = 1;
			}
			if (core.hasSpecial(topBlock.event.id, 101)) {
				enemyId2 = topBlock.event.id;
				bt_type = 2;
			}
		}

		if (enemyId1 != null || enemyId2 != null) {
			if (bt_type == 1) {
				var leftHp = core.status.hero.hp - (damage[loc] || 0); // 计算其他类型地图伤害后
				if (leftHp > 1) {
					// 夹击伤害值
					var value = 0;
					if (enemyId1 != null) { // 固伤型
						value = core.material.enemys[enemyId1].damage2 || 0;
					} else {
						value = core.material.enemys[enemyId2].damage2 || 0;
					}
					if (value == 0) { // 比例型
						var dmg_ratio = 0;
						if (enemyId1 != null) {
							dmg_ratio = core.material.enemys[enemyId1].value;
						} else {
							dmg_ratio = core.material.enemys[enemyId2].value;
						}
						value = Math.floor(leftHp * dmg_ratio / 100);
					}
					// 是否不超过怪物伤害值
					if (core.flags.betweenAttackMax) {
						var enemyDamage1 = core.getDamage(enemyId1, x, y, floorId);
						if (enemyDamage1 != null && enemyDamage1 < value)
							value = enemyDamage1;
						var enemyDamage2 = core.getDamage(enemyId2, x, y, floorId);
						if (enemyDamage2 != null && enemyDamage2 < value)
							value = enemyDamage2;
					}
					if (value > 0) {
						damage[loc] = addZoneDamage(damage[loc], value);
						type[loc] = type[loc] || {};
						type[loc]["夹击伤害"] = true;
					}
				}
			} else if (bt_type == 2) { // 夹匙
				lose_key[loc] = (lose_key[loc] || 0) + 1;
			}
		}
	}

	core.flags.canGoDeadZone = canGoDeadZone;
	core.status.checkBlock = {
		damage: damage,
		type: type,
		repulse: repulse,
		ambush: ambush,
		lose_key: lose_key,
		seal_hp: seal_hp,
		visible: visible,
		spe_69: spe_69,
		spe_72: spe_72,
		spe_92: spe_92,
		chase: chase,
		no_autopick: no_autopick,
		no_autobattle: no_autobattle,
		needCache: needCache,
		cache: {} // clear cache
	};
},
        "moveOneStep": function (callback) {
	// 勇士每走一步后执行的操作。callback为行走完毕后的回调
	// 这个函数执行在“刚走完”的时候，即还没有检查该点的事件和领域伤害等。
	// 请注意：瞬间移动不会执行该函数。如果要控制能否瞬间移动有三种方法：
	// 1. 将全塔属性中的cannotMoveDirectly这个开关勾上，即可在全塔中全程禁止使用瞬移。
	// 2, 将楼层属性中的cannotMoveDirectly这个开关勾上，即禁止在该层楼使用瞬移。
	// 3. 将flag:cannotMoveDirectly置为true，即可使用flag控制在某段剧情范围内禁止瞬移。

	// 增加步数
	core.status.hero.steps++;
	// 更新跟随者状态，并绘制
	core.updateFollowers();
	core.drawHero();
	// 检查中毒状态的扣血和死亡
	if (core.hasFlag('poison')) {
		core.status.hero.statistics.poisonDamage += core.values.poisonDamage;
		core.status.hero.hp -= core.values.poisonDamage;
		if (core.status.hero.hp <= 0) {
			core.status.hero.hp = 0;
			core.updateStatusBar();
			core.events.lose();
			return;
		} else {
			core.updateStatusBar();
		}
	}
	var nowx = core.getHeroLoc('x'),
		nowy = core.getHeroLoc('y');
	if (core.hasFlag('superweak')) {
		// deal damage
		var can_break_list = core.plugin.canBreakList;
		var range = 1,
			damage = 250000000;
		var cnt = 1;
		core.drawAnimate("fire2", nowx, nowy);
		for (var i = nowx - range; i <= nowx + range; ++i) {
			for (var j = nowy - range; j <= nowy + range; ++j) {
				if (i == nowx && j == nowy) continue; // 不炸自己所在的位置
				var id = core.getBlockId(i, j);
				if (can_break_list.includes(id)) {
					core.removeBlock(i, j);
					if (core.getFlag("A21boss", 0) > 0 && id.indexOf("RHeart") != -1) {
						core.plugin.updateBoss21Info(4);
					}
					cnt += 1;
				}
			}
		}
		if (cnt == 1) {
			core.plugin.popSkillDamage(damage, nowx, nowy);
			core.status.hero.hp -= damage;
			core.updateStatusBar();
			if (core.status.hero.hp <= 0) {
				core.events.lose('战斗失败');
				return;
			}
		}
	}
	if (core.getFlag("skill5_ad", 0) > 0) {
		core.status.hero.mana -= 2 * core.getFlag("skill5_ad", 0);
		core.plugin.popSkillDamage(2 * core.getFlag("skill5_ad", 0), core.status.hero.loc.x, core.status.hero.loc.y, "#FFFFFF");
		core.addFlag("skill5_ad", 1);
		core.updateStatusBar();
		if (core.status.hero.mana <= 0) {
			core.insertCommonEvent("AD不鸽了");
		}
	}
	if (core.getFlag("skill5_am", 0) > 0) {
		if (core.getFlag("skill5_direction", 0) == 0) {
			core.setFlag("skill5_direction", core.getFlag("last_moved_direction", 0));
		} else if (core.getFlag("skill5_direction") != core.getFlag("last_moved_direction", 2221)) {
			core.insertCommonEvent("AM不鸽了");
		}
	}
	if (core.getFlag("skill8_buff", 0) > 0) {
		if (core.getFlag("skill8_direction", 0) == 0) {
			core.setFlag("skill8_direction", core.getFlag("last_moved_direction", 0));
		} else if (core.getFlag("skill8_direction") != core.getFlag("last_moved_direction", 2221)) {
			core.setFlag("skill8_buff", 0); // 立即清除状态，因为插入的事件流会在（捕捉等导致的）战斗后执行
			core.insertCommonEvent("skill8end");
		}
	}

	// 从v2.7开始，每一步行走不会再刷新状态栏。
	// 如果有特殊要求（如每走一步都加buff之类），可手动取消注释下面这一句：
	// core.updateStatusBar(true);

	// 检查自动事件
	core.checkAutoEvents();

	// ------ 检查目标点事件 ------ //
	// 无事件的道具（如血瓶）需要优先于阻激夹域判定
	var block = core.getBlock(nowx, nowy);
	var hasTrigger = false;
	if (block != null && block.event.trigger == 'getItem' &&
		!core.floors[core.status.floorId].afterGetItem[nowx + "," + nowy]) {
		hasTrigger = true;
		core.trigger(nowx, nowy, callback);
	}
	// 临时护盾衰减
	if (core.getFlag("skill11_feat1", false)) {
		core.setFlag("skill11_feat1", false);
		core.updateStatusBar();
	} else if (core.hasItem("skill11") && core.getFlag("temp_mdef_pp", 0) > 0) {
		core.plugin.addTempMdefpp(-core.getFlag("skill11_add") * core.getFlag("skill11_decay_pp") / 100);
		if (core.getFlag("temp_mdef_pp", 0) == 0 && core.getFlag("autoGetItem", 0) > 0) {
			core.plugin.autoGetItem();
		}
		core.updateStatusBar();
	}
	// 衰 爆，先插入后执行
	/*
	if (core.hasFlag("superweak")) {
		core.addFlag("superweak_n", -1);
		if (core.getFlag("superweak_n") == 0) {
			core.triggerDebuff("remove", "superweak");
		}
		core.updateStatusBar();
	}*/
	if (core.hasFlag("superweak")) {
		core.insertAction({ "type": "function", "function": "function(){\nif (core.hasFlag(\"superweak\")) {\n\tcore.addFlag(\"superweak_n\", -1);\n\tif (core.getFlag(\"superweak_n\") == 0) {\n\t\tcore.triggerDebuff(\"remove\", \"superweak\");\n\t}\n\tcore.updateStatusBar();\n}\n}" });
	}

	// 执行目标点的阻激夹域事件
	core.checkBlock();

	// 执行目标点的script和事件
	if (!hasTrigger) {
		core.trigger(nowx, nowy, callback);
	}

	// 检查该点是否是滑冰
	if (core.onSki()) {
		// 延迟到事件最后执行，因为这之前可能有阻激夹域动画
		core.insertAction({ "type": "moveAction" }, null, null, null, true);
	}

	if (core.getBlockId(nowx, nowy) == "lavaNet") {
		core.removeBlock(nowx, nowy);
	}
	if (core.getFlag("spe83_step", 0) > 0) {
		core.addFlag("spe83_step", -1);
		if (core.getFlag("spe83_step") == 0) {
			var range = core.getFlag("spe83_range"),
				damage = core.getFlag("spe83_dmg");
			var can_break_list = core.plugin.canBreakList;
			core.drawAnimate("fire2", nowx, nowy);
			for (var i = nowx - range; i <= nowx + range; ++i) {
				for (var j = nowy - range; j <= nowy + range; ++j) {
					var id = core.getBlockId(i, j);
					if (can_break_list.includes(id)) {
						core.removeBlock(i, j);
					}
				}
			}
			core.plugin.popSkillDamage(damage, nowx, nowy);
			core.status.hero.hp -= damage;
			core.removeFlag("cannotMoveDirectly");
			core.updateStatusBar();
			if (core.status.hero.hp <= 0) {
				core.events.lose('战斗失败');
				return;
			}
		}
	}
	// ------ 检查目标点事件 END ------ //
	core.plugin.autoGetItem();
	core.plugin.autoBattle();

	if (core.getFlag("70F_boss_phase", 0) == 1) {
		core.lockControl();
		// 强行终止行走
		// 这里有个坑，自动寻路的时候每行走一步，主角会立即向下一步的移动方向转身，所以 stopAutomaticRoute 会炸录像（游戏里主角转身了，回放的时候不转身）
		// 我复写了 _moveAction_popAutomaticRoute，阻止主角的转身行为，才解决了这个问题
		// 总之脚本中直接调用 stopAutomaticRoute 需要特别小心
		core.stopAutomaticRoute();
		core.plugin.SpecialHeroMove();
	}
	if (core.getFlag("invisible_moved", 1) != 1) {
		core.setFlag("invisible_moved", 1);
	}
},
        "moveDirectly": function (x, y, ignoreSteps) {
	// 瞬间移动；x,y为要瞬间移动的点；ignoreSteps为减少的步数，可能之前已经被计算过
	// 返回true代表成功瞬移，false代表没有成功瞬移

	// 判定能否瞬移到该点
	if (ignoreSteps == null) ignoreSteps = core.canMoveDirectly(x, y);
	if (ignoreSteps >= 0) {
		if (core.getFlag("invisible_moved", 1) != 1) {
			core.setFlag("invisible_moved", 1);
		}
		// 临时护盾衰减
		if (core.hasItem("skill11")) {
			var decaySteps = ignoreSteps;
			if (core.getFlag("skill11_feat1")) {
				core.setFlag("skill11_feat1", false);
				decaySteps--;
			}
			core.plugin.addTempMdefpp(-core.getFlag("skill11_add") * core.getFlag("skill11_decay_pp") / 100 * decaySteps);
			core.updateStatusBar();
		}
		// 中毒也允许瞬移
		if (core.hasFlag('poison')) {
			var damage = ignoreSteps * core.values.poisonDamage;
			if (damage >= core.status.hero.hp) return false;
			core.status.hero.statistics.poisonDamage += damage;
			core.status.hero.hp -= damage;
		}

		core.clearMap('hero');
		// 获得勇士最后的朝向
		var lastDirection = core.status.route[core.status.route.length - 1];
		if (['left', 'right', 'up', 'down'].indexOf(lastDirection) >= 0)
			core.setHeroLoc('direction', lastDirection);
		// 设置坐标，并绘制
		core.control._moveDirectyFollowers(x, y);
		core.status.hero.loc.x = x;
		core.status.hero.loc.y = y;
		core.drawHero();
		// 记录录像
		core.status.route.push("move:" + x + ":" + y);
		// 统计信息
		core.status.hero.statistics.moveDirectly++;
		core.status.hero.statistics.ignoreSteps += ignoreSteps;
		if (core.hasFlag('poison')) {
			core.updateStatusBar();
		}
		core.checkRouteFolding();

		core.plugin.autoGetItem();
		core.plugin.autoBattle();
		return true;
	}
	return false;
},
        "parallelDo": function (timestamp) {
	// 并行事件处理，可以在这里写任何需要并行处理的脚本或事件
	// 该函数将被系统反复执行，每次执行间隔视浏览器或设备性能而定，一般约为16.6ms一次
	// 参数timestamp为“从游戏资源加载完毕到当前函数执行时”的时间差，以毫秒为单位

	// 检查当前是否处于游戏开始状态
	if (!core.isPlaying()) return;

	// 执行当前楼层的并行事件处理
	if (core.status.floorId) {
		try {
			eval(core.floors[core.status.floorId].parallelDo);
			var p1 = ["MT56", "MT57", "MT58", "MT59", "MT60", "MT61", "MT62"];
			if (p1.indexOf(core.status.floorId) != -1) {
				var lastTime = core.getFlag('lastWeatherTime', 0);
				// 每多少毫秒重绘一次；天气效果默认都是30
				if (timestamp - lastTime > 60) {
					var lastOffsetX = core.getFlag('lastOffsetX', 0); // 上次的offset
					var image = core.material.images.images['area7.jpg']; // 获得图片，这里写图片名
					var width = image.width,
						height = image.height; // 获得宽高
					// 绘制下一次，参见drawImage的API：http://www.w3school.com.cn/tags/canvas_drawimage.asp
					if (lastOffsetX + 416 > width) { // 需要首尾相接
						// 尾部
						core.canvas.bg.drawImage(image, lastOffsetX, 0, width - lastOffsetX, height, 0, 0, width - lastOffsetX, height);
						// 首部
						core.canvas.bg.drawImage(image, 0, 0, lastOffsetX + 416 - width, height, width - lastOffsetX, 0, lastOffsetX + 416 - width, height);
					} else { // 不需要，直接绘制
						core.canvas.bg.drawImage(image, lastOffsetX, 0, width, 416, 0, 0, width, 416);
					}
					// 移动图片
					lastOffsetX -= 1; // 这里是每次移动的像素
					if (lastOffsetX < 0) lastOffsetX += width;
					core.setFlag('lastOffsetX', lastOffsetX);
					core.setFlag('lastWeatherTime', timestamp); // 记录时间
				}
			}
			var p2 = ["MT63", "MT64", "MT65", "MT66", "MT67", "MT68", "MT69", "MT70", "MT70_2", "Ch4_3D", "Ch4_40", "Ch4_129_2"];
			if (p2.indexOf(core.status.floorId) != -1) {
				var lastTime = core.getFlag('lastWeatherTime', 0);
				// 每多少毫秒重绘一次；天气效果默认都是30
				if (timestamp - lastTime > 60) {
					var lastOffsetX = core.getFlag('lastOffsetX', 0); // 上次的offset
					var image = core.material.images.images['area7_2.jpg']; // 获得图片，这里写图片名
					var width = image.width,
						height = image.height; // 获得宽高
					// 绘制下一次，参见drawImage的API：http://www.w3school.com.cn/tags/canvas_drawimage.asp
					if (lastOffsetX + 416 > width) { // 需要首尾相接
						// 尾部
						core.canvas.bg.drawImage(image, lastOffsetX, 0, width - lastOffsetX, height, 0, 0, width - lastOffsetX, height);
						// 首部
						core.canvas.bg.drawImage(image, 0, 0, lastOffsetX + 416 - width, height, width - lastOffsetX, 0, lastOffsetX + 416 - width, height);
					} else { // 不需要，直接绘制
						core.canvas.bg.drawImage(image, lastOffsetX, 0, width, 416, 0, 0, width, 416);
					}
					// 移动图片
					lastOffsetX += 1; // 这里是每次移动的像素
					if (lastOffsetX > 416) lastOffsetX -= width;
					core.setFlag('lastOffsetX', lastOffsetX);
					core.setFlag('lastWeatherTime', timestamp); // 记录时间
				}
			}
		} catch (e) {
			main.log(e);
		}
	}

	if (!core.isReplaying()) {
		if (core.material.bgms["boss2221.mp3"].currentTime > 167.9) {
			core.material.bgms["boss2221.mp3"].currentTime -= 120;
		}
		if (core.material.bgms["area15.mp3"].currentTime > 176.9) {
			core.material.bgms["area15.mp3"].currentTime -= 141.8;
		}
		if (core.material.bgms["area19.mp3"].currentTime > 194.03) {
			core.material.bgms["area19.mp3"].currentTime -= 182.86;
		}
		if (core.material.bgms["area19_2.mp3"].currentTime > 115.7) {
			core.material.bgms["area19_2.mp3"].currentTime -= 102.33;
		}
	}
}
    },
    "ui": {
        "getToolboxItems": function (cls) {
	// 获得道具栏中当前某类型道具的显示项和显示顺序
	// cls为道具类型，只可能是 tools, constants 和 equips
	// 返回一个数组，代表当前某类型道具的显示内容和顺序
	// 默认按id升序排列，您可以取消下面的注释改为按名称排列

	return Object.keys(core.status.hero.items[cls] || {})
		.filter(function (id) { return !core.material.items[id].hideInToolbox; })
		.sort( /*function (id1, id2) { return core.material.items[id1].name <= core.material.items[id2].name ? -1 : 1 }*/ );
},
        "drawStatusBar": function () {
	// 自定义绘制状态栏，需要开启状态栏canvas化

	// 如果是非状态栏canvas化，直接返回
	if (!core.flags.statusCanvas) return;
	var canvas = core.dom.statusCanvas,
		ctx = core.dom.statusCanvasCtx;
	// 清空状态栏
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// 如果是隐藏状态栏模式，直接返回
	if (!core.domStyle.showStatusBar) return;

	// 作为样板，只绘制楼层、生命、攻击、防御、护盾、金币、钥匙这七个内容
	// 需要其他的请自行进行修改；横竖屏都需要进行适配绘制。
	// （可以使用Chrome浏览器开控制台来模拟手机上的竖屏模式的显示效果，具体方式自行百度）
	// 横屏模式下的画布大小是 129*416
	// 竖屏模式下的画布大小是 416*(32*rows+9) 其中rows为状态栏行数，即全塔属性中statusCanvasRowsOnMobile值
	// 可以使用 core.domStyle.isVertical 来判定当前是否是竖屏模式

	ctx.fillStyle = core.status.globalAttribute.statusBarColor || core.initStatus.globalAttribute.statusBarColor;
	ctx.font = 'italic bold 18px Verdana';

	// 距离左侧边框6像素，上侧边框9像素，行距约为39像素
	var leftOffset = 6,
		topOffset = 9,
		lineHeight = 25;
	if (core.domStyle.isVertical) { // 竖屏模式，行高32像素
		leftOffset = 6;
		topOffset = 6;
		lineHeight = 20;
	}

	var toDraw = ["floor", "hp", "mana", "atk", "def", "mdef", "money"];
	for (var index = 0; index < toDraw.length; index++) {
		// 绘制下一个数据
		var name = toDraw[index];
		// 图片大小25x25
		core.drawImage(ctx, core.statusBar.icons[name], leftOffset, topOffset, 25, 25);
		// 文字内容
		var text = (core.statusBar[name] || {}).innerText || " ";
		// 斜体判定：如果不是纯数字和字母，斜体会非常难看，需要取消
		if (!/^[-a-zA-Z0-9`~!@#$%^&*()_=+\[{\]}\\|;:'",<.>\/?]*$/.test(text))
			ctx.font = 'bold 18px Verdana';
		else
			ctx.font = 'italic bold 18px Verdana';
		// 绘制文字
		ctx.fillStyle = '#FFFFFF';
		core.ui.setFontForMaxWidth(ctx, text, 80, ctx.font); // 宽度自适应
		if (index == 3) { ctx.fillStyle = '#FF5555'; }
		if (index == 4) { ctx.fillStyle = '#45D1E0'; }
		if (index == 5) { // mdef
			if (core.getFlag("temp_mdef_pp", 0) == 0) { ctx.fillStyle = '#00AA00'; } else { ctx.fillStyle = '#00FF00'; }
		}
		if (index == 6) { // money
			if (core.plugin.shouldHighlightMoney()) { ctx.fillStyle = '#FFEE00'; }
		}
		ctx.fillText(text, leftOffset + 36, topOffset + 20);
		if (index == 5 && core.getTalentLv3(0) > 0) {
			ctx.font = 'bold 10px Verdana';
			var stack = core.getFlag("temp_mdef_pp", 0) / core.getFlag("skill11_add", 0);
			if (core.domStyle.isVertical) {
				ctx.font = 'bold 12px Verdana';
				if (stack > 0) {
					ctx.fillText("+" + core.formatBigNumber(core.getFlag("temp_mdef_pp", 0) / 100 * core.status.hero.mdef) + " (" + stack + ")", leftOffset + 40, topOffset + 24 + lineHeight * 0.4);
				} else {
					ctx.fillText(stack, leftOffset + 90, topOffset + 24 + lineHeight * 0.4);
				}
			} else {
				if (stack > 0) {
					ctx.fillText("+" + core.formatBigNumber(core.getFlag("temp_mdef_pp", 0) / 100 * core.status.hero.mdef) + " (" + stack + ")", leftOffset + 40, topOffset + 20 + lineHeight * 0.4);
				} else {
					ctx.fillText(stack, leftOffset + 90, topOffset + 20 + lineHeight * 0.4);
				}
			}
		}
		// 计算下一个绘制的坐标
		if (core.domStyle.isVertical) {
			// 竖屏模式
			if (index % 3 != 2) leftOffset += 131;
			else {
				leftOffset = 6;
				topOffset += lineHeight;
			}
		} else {
			// 横屏模式
			topOffset += lineHeight;
		}
	}
	// 绘制钥匙
	ctx.font = 'italic bold 14px Verdana';
	ctx.fillStyle = '#FFCCAA';
	ctx.fillText(core.statusBar.yellowKey.innerText, leftOffset + 5, topOffset + 20);
	ctx.fillStyle = '#AAAADD';
	ctx.fillText(core.statusBar.blueKey.innerText, leftOffset + 35, topOffset + 20);
	ctx.fillStyle = '#FF8888';
	ctx.fillText(core.statusBar.redKey.innerText, leftOffset + 65, topOffset + 20);
	ctx.fillStyle = '#88FF88';
	ctx.fillText(core.statusBar.greenKey.innerText, leftOffset + 95, topOffset + 20);

	// 可以在状态栏点技能释放，配合点击状态栏使用。龙之传奇NB！
	var images = core.material.images.items;
	ctx.font = 'bold 11px Verdana';
	// 1
	if (core.hasItem('skill0')) {
		ctx.drawImage(images, 0, 32 * 68, 32, 32, 6, topOffset + 25, 32, 32);
		if (core.domStyle.isVertical) {
			ctx.fillStyle = '#0095ff';
			ctx.fillText(core.getFlag("skill0_cost", 0), 36, topOffset + 56);
		} else {
			ctx.fillStyle = '#60a0ff';
			ctx.fillText(core.getFlag("skill0_cost", 0), 36, topOffset + 56);
		}
	} else if (core.hasItem('skill1')) {
		ctx.drawImage(images, 0, 32 * 30, 32, 32, 6, topOffset + 25, 32, 32);
		if (core.domStyle.isVertical) {
			ctx.fillStyle = '#0095ff';
			ctx.fillText(core.getFlag("skill1_cost", 0), 24, topOffset + 56);
		} else {
			ctx.fillStyle = '#60a0ff';
			ctx.fillText(core.getFlag("skill1_cost", 0), 24, topOffset + 66);
		}
	} else if (core.hasItem('skill3')) {
		ctx.drawImage(images, 0, 32 * 90, 32, 32, 6, topOffset + 25, 32, 32);
		if (core.domStyle.isVertical) {
			ctx.fillStyle = '#0095ff';
			ctx.fillText(core.getFlag("skill3_cost", 0), 24, topOffset + 56);
		} else {
			ctx.fillStyle = '#60a0ff';
			ctx.fillText(core.getFlag("skill3_cost", 0), 24, topOffset + 66);
		}
	} else if (core.hasItem('skill6')) {
		ctx.drawImage(images, 0, 32 * 100, 32, 32, 6, topOffset + 25, 32, 32);
		if (core.domStyle.isVertical) {
			ctx.fillStyle = '#0095ff';
			ctx.fillText(core.getFlag("skill6_cost", 0), 24, topOffset + 56);
		} else {
			ctx.fillStyle = '#60a0ff';
			ctx.fillText(core.getFlag("skill6_cost", 0), 24, topOffset + 66);
		}
	} else if (core.hasItem('skill10')) {
		ctx.drawImage(images, 0, 32 * 124, 32, 32, 6, topOffset + 25, 32, 32);
		if (core.domStyle.isVertical) {
			ctx.fillStyle = '#0095ff';
			ctx.fillText(core.getFlag("skill10_cost", 0) + core.getTalentLv3(3), 24, topOffset + 56);
		} else {
			ctx.fillStyle = '#60a0ff';
			ctx.fillText(core.getFlag("skill10_cost", 0) + core.getTalentLv3(3), 24, topOffset + 66);
		}
	}
	// 2
	if (core.hasItem('skill2')) {
		ctx.drawImage(images, 0, 32 * 67, 32, 32, 6 + 40, topOffset + 25, 32, 32);
		if (core.domStyle.isVertical) {
			ctx.fillStyle = '#0095ff';
			ctx.fillText(core.getFlag("skill2_cost", 0), 64, topOffset + 56);
		} else {
			ctx.fillStyle = '#60a0ff';
			ctx.fillText(core.getFlag("skill2_cost", 0), 64, topOffset + 66);
		}
	} else if (core.hasItem('skill4')) {
		ctx.drawImage(images, 0, 32 * 89, 32, 32, 6 + 40, topOffset + 25, 32, 32);
		if (core.domStyle.isVertical) {
			ctx.fillStyle = '#0095ff';
			ctx.fillText(core.getFlag("skill4_cost", 0), 64, topOffset + 56);
		} else {
			ctx.fillStyle = '#60a0ff';
			ctx.fillText(core.getFlag("skill4_cost", 0), 64, topOffset + 66);
		}
	} else if (core.hasItem('skill7')) {
		ctx.drawImage(images, 0, 32 * 112, 32, 32, 6 + 40, topOffset + 25, 32, 32);
		if (core.domStyle.isVertical) {
			ctx.fillStyle = '#0095ff';
			ctx.fillText(core.getFlag("skill7_cost", 0), 64, topOffset + 56);
		} else {
			ctx.fillStyle = '#60a0ff';
			ctx.fillText(core.getFlag("skill7_cost", 0), 64, topOffset + 66);
		}
	} else if (core.hasItem('skill12')) {
		ctx.drawImage(images, 0, 32 * 126, 32, 32, 6 + 40, topOffset + 25, 32, 32);
		if (core.domStyle.isVertical) {
			ctx.fillStyle = '#0095ff';
			ctx.fillText(core.getFlag("skill12_cost", 0) + core.getTalentLv3(3), 64, topOffset + 56);
		} else {
			ctx.fillStyle = '#60a0ff';
			ctx.fillText(core.getFlag("skill12_cost", 0) + core.getTalentLv3(3), 64, topOffset + 66);
		}
	}
	// 3
	if (core.hasItem('skill5')) {
		var max_cd = 8;
		if (core.getTalentLv(10) > 0) max_cd = 10;
		else if (core.getTalentLv(12) > 0) max_cd = 10;
		ctx.globalAlpha = 1 - core.getFlag("skill5_cd", 0) / max_cd * 0.9;
		if (core.getFlag("skill5_cd", 0) > 0) {
			ctx.drawImage(images, 0, 32 * 98, 32, 32, 6 + 80, topOffset + 25, 32, 32);
			ctx.globalAlpha = 1;
			ctx.fillStyle = '#FF6060';
			ctx.fillText(core.getFlag("skill5_cd", 0), 104, topOffset + 54);
		} else {
			ctx.drawImage(images, 0, 32 * 98, 32, 32, 6 + 80, topOffset + 25, 32, 32);
		}
		ctx.globalAlpha = 1;
	} else if (core.hasItem('skill8')) {
		ctx.drawImage(images, 0, 32 * 119, 32, 32, 6 + 80, topOffset + 25, 32, 32);
		if (core.domStyle.isVertical) {
			ctx.fillStyle = '#0095ff';
			ctx.fillText("200", 104, topOffset + 56);
		} else {
			ctx.fillStyle = '#60a0ff';
			ctx.fillText("200", 104, topOffset + 66);
		}
	} else if (core.hasItem("talentTree3")) {
		if (core.getTalentLv3(3) < 100) {
			ctx.drawImage(images, 0, 32 * 123, 32, 32, 6 + 80, topOffset + 25, 32, 32);
			ctx.fillStyle = '#ffd700';
			ctx.fillText(core.getTalentLv3(3) + "." + core.getFlag("talentT3_3_upX", 0), 100, topOffset + 54);
		} else if (core.hasItem('skill13')) {
			ctx.drawImage(images, 0, 32 * 127, 32, 32, 6 + 80, topOffset + 25, 32, 32);
			ctx.font = 'italic bold 12px Verdana';
			ctx.fillStyle = '#ffa000';
			if (core.domStyle.isVertical) {
				ctx.fillText(core.getFlag("skill13_cost", 0), 114, topOffset + 56);
			} else {
				ctx.fillText(core.getFlag("skill13_cost", 0), 94, topOffset + 66);
			}
			ctx.font = 'bold 11px Verdana';
		}
	} else if (core.hasItem('I_wait')) {
		ctx.drawImage(images, 0, 32 * 88, 32, 32, 6 + 80, topOffset + 25, 32, 32);
	}

	if (core.hasItem('pickaxe')) {
		if (core.domStyle.isVertical) {
			ctx.drawImage(images, 0, 32 * 45, 32, 32, 6 + 120, topOffset + 25, 32, 32);
		} else {
			ctx.drawImage(images, 0, 32 * 45, 32, 32, 6, topOffset + 65, 32, 32);
		}
	} else if (core.hasItem('I_energyOrb')) {
		if (core.domStyle.isVertical) {
			ctx.drawImage(images, 0, 32 * 151, 32, 32, 6 + 140, topOffset + 25, 32, 32);
		} else {
			ctx.drawImage(images, 0, 32 * 151, 32, 32, 6, topOffset + 65, 32, 32);
		}
	}
	if (core.hasItem('greenBomb')) {
		ctx.fillStyle = '#ffa000';
		if (core.domStyle.isVertical) {
			ctx.drawImage(images, 0, 32 * 152, 32, 32, 6 + 140, topOffset + 25, 32, 32);
			ctx.fillText(2000, 174, topOffset + 56);
		} else {
			ctx.drawImage(images, 0, 32 * 152, 32, 32, 86, topOffset + 65, 32, 32);
			ctx.fillText(2000, 94, topOffset + 98);
		}
	}
	if (core.hasItem('I_hj')) {
		ctx.fillStyle = '#ffffff';
		if (core.domStyle.isVertical) {
			ctx.drawImage(images, 0, 32 * 153, 32, 32, 6 + 200, topOffset + 25, 32, 32);
			ctx.fillText(core.itemCount("I_hj"), 216, topOffset + 56);
		} else {
			ctx.drawImage(images, 0, 32 * 153, 32, 32, 46, topOffset + 65, 32, 32);
			ctx.fillText(core.itemCount("I_hj"), 54, topOffset + 98);
		}
	}
	var thick = 2;
	if (core.getFlag('skill', 0) == 1) {
		core.ui.strokeRoundRect(ctx, 6 - thick, topOffset + 25 - thick, 32 + 2 * thick, 32 + 2 * thick, thick, '#FFFF00', thick);
	} else if (core.getFlag('skill', 0) == 2) {
		core.ui.strokeRoundRect(ctx, 46 - thick, topOffset + 25 - thick, 32 + 2 * thick, 32 + 2 * thick, thick, '#FFFF00', thick);
	}
	if (core.getFlag("invisible", 0) == 1) {
		core.ui.strokeRoundRect(ctx, 46 - thick, topOffset + 25 - thick, 32 + 2 * thick, 32 + 2 * thick, thick, '#FFFF00', thick);
	}
	if (core.getFlag("skill5_is_on", false)) {
		core.ui.strokeRoundRect(ctx, 86 - thick, topOffset + 25 - thick, 32 + 2 * thick, 32 + 2 * thick, thick, '#FFDD00', thick);
	}
	if (core.getFlag("skill10Moving", 0) == 1) {
		core.ui.strokeRoundRect(ctx, 6 - thick, topOffset + 25 - thick, 32 + 2 * thick, 32 + 2 * thick, thick, '#FFFF00', thick);
	}
	if (core.getFlag("previewSkill12", 0) == 1) {
		core.ui.strokeRoundRect(ctx, 46 - thick, topOffset + 25 - thick, 32 + 2 * thick, 32 + 2 * thick, thick, '#FFFF00', thick);
	}
	if (core.getFlag("previewSkill13", 0) == 1) {
		core.ui.strokeRoundRect(ctx, 86 - thick, topOffset + 25 - thick, 32 + 2 * thick, 32 + 2 * thick, thick, '#FFFF00', thick);
	}

	if (core.domStyle.isVertical) {
		if (core.getFlag("freeze_stack", 0) > 0) {
			ctx.fillStyle = '#80ffff';
			ctx.font = 'bold 18px Verdana';
			ctx.fillText("冰 " + core.getFlag("freeze_stack", 0), 273, topOffset + 40);
		} else if (core.getFlag('spe62_seal_hp', 0) > 0) {
			ctx.fillStyle = '#ff8860';
			ctx.font = 'bold 18px Verdana';
			ctx.fillText("封 " + core.formatBigNumber(core.getFlag("spe62_seal_hp", 0)), 273, topOffset + 40);
		} else if (core.getFlag("spe83_step", 0) > 0) {
			ctx.fillStyle = '#dd0000';
			ctx.font = 'bold 18px Verdana';
			ctx.fillText("炸 " + core.getFlag("spe83_step", 0), 273, topOffset + 40);
		}
		if (core.getFlag("rage_stack", 0) > 0) {
			ctx.fillStyle = '#ff00a5';
			ctx.font = 'bold 18px Verdana';
			ctx.fillText("戾 " + core.getFlag("rage_stack", 0), 337, topOffset + 40);
		} else if (core.getFlag("rage_stack", 0) < 0) {
			ctx.fillStyle = '#b400ff';
			ctx.font = 'bold 18px Verdana';
			ctx.fillText("醉 " + (-core.getFlag("rage_stack", 0)), 337, topOffset + 40);
		} else if (core.getFlag("spe84_n", 0) > 0) {
			ctx.fillStyle = '#ff00a5';
			ctx.font = 'bold 18px Verdana';
			ctx.fillText("誓 " + core.getFlag("spe84_n", 0), 337, topOffset + 40);
		} else if (core.getFlag("spe92_debuff", 0) > 0) {
			ctx.fillStyle = '#dd4444';
			ctx.font = 'bold 18px Verdana';
			ctx.fillText("熔火 " + core.getFlag("spe92_debuff", 0), 337, topOffset + 40);
		} else if (core.getFlag("superweak_n", 0) > 0) {
			ctx.fillStyle = '#FECCD0';
			ctx.font = 'bold 18px Verdana';
			ctx.fillText("傲 " + core.getFlag("superweak_n", 0), 337, topOffset + 40);
		}
		if (core.getFlag("used_potion", 0) > 0) {
			if (core.getFlag("potion_atk", 0) > 0) {
				ctx.fillStyle = '#dd0000';
				ctx.font = 'bold 18px Verdana';
				ctx.fillText("攻 " + (core.getFlag("potion_atk", 0)), 137, topOffset + 40);
			} else if (core.getFlag("potion_def", 0) > 0) {
				ctx.fillStyle = '#0088ff';
				ctx.font = 'bold 18px Verdana';
				ctx.fillText("防 " + (core.getFlag("potion_def", 0)), 137, topOffset + 40);
			} else if (core.getFlag("potion_mdef", 0) > 0) {
				ctx.fillStyle = '#00dd00';
				ctx.font = 'bold 18px Verdana';
				ctx.fillText("盾 " + (core.getFlag("potion_mdef", 0)), 137, topOffset + 40);
			}
			ctx.font = 'bold 14px Verdana';
			ctx.fillText("*" + (core.getFlag("used_potion", 0)), 196, topOffset + 56);
		}
		if (core.getFlag("skill8_buff", 0) > 0) {
			ctx.fillStyle = '#ffee28';
			ctx.font = 'bold 18px Verdana';
			ctx.fillText("75%减伤", 137, topOffset + 40);
		}
	} else {
		if (core.getFlag("freeze_stack", 0) > 0) {
			ctx.fillStyle = '#80ffff';
			ctx.font = 'bold 14px Verdana';
			ctx.fillText("冰 " + core.getFlag("freeze_stack", 0), 6, topOffset + 80);
		} else if (core.getFlag('spe62_seal_hp', 0) > 0) {
			ctx.fillStyle = '#ff8860';
			ctx.font = 'bold 14px Verdana';
			ctx.fillText("封 " + core.formatBigNumber(core.getFlag("spe62_seal_hp", 0)), 6, topOffset + 80);
		} else if (core.getFlag("spe83_step", 0) > 0) {
			ctx.fillStyle = '#dd0000';
			ctx.font = 'bold 14px Verdana';
			ctx.fillText("炸 " + core.getFlag("spe83_step", 0), 6, topOffset + 80);
		}
		if (core.getFlag("rage_stack", 0) > 0) {
			ctx.fillStyle = '#ff00a5';
			ctx.font = 'bold 14px Verdana';
			ctx.fillText("戾 " + core.getFlag("rage_stack", 0), 56, topOffset + 80);
		} else if (core.getFlag("rage_stack", 0) < 0) {
			ctx.fillStyle = '#b400ff';
			ctx.font = 'bold 14px Verdana';
			ctx.fillText("醉 " + (-core.getFlag("rage_stack", 0)), 56, topOffset + 80);
		} else if (core.getFlag("spe84_n", 0) > 0) {
			ctx.fillStyle = '#ff00a5';
			ctx.font = 'bold 14px Verdana';
			ctx.fillText("誓 " + core.getFlag("spe84_n", 0), 56, topOffset + 80);
		} else if (core.getFlag("spe92_debuff", 0) > 0) {
			ctx.fillStyle = '#dd4444';
			ctx.font = 'bold 14px Verdana';
			ctx.fillText("熔火 " + core.getFlag("spe92_debuff", 0), 56, topOffset + 80);
		} else if (core.getFlag("superweak_n", 0) > 0) {
			ctx.fillStyle = '#FECCD0';
			ctx.font = 'bold 18px Verdana';
			ctx.fillText("傲 " + core.getFlag("superweak_n", 0), 56, topOffset + 90);
		}
		if (core.getFlag("used_potion", 0) > 0) {
			if (core.getFlag("potion_atk", 0) > 0) {
				ctx.fillStyle = '#dd0000';
				ctx.font = 'bold 14px Verdana';
				ctx.fillText("攻 " + (core.getFlag("potion_atk", 0)), 56, topOffset + 104);
			} else if (core.getFlag("potion_def", 0) > 0) {
				ctx.fillStyle = '#0088ff';
				ctx.font = 'bold 14px Verdana';
				ctx.fillText("防 " + (core.getFlag("potion_def", 0)), 56, topOffset + 104);
			} else if (core.getFlag("potion_mdef", 0) > 0) {
				ctx.fillStyle = '#00dd00';
				ctx.font = 'bold 14px Verdana';
				ctx.fillText("盾 " + (core.getFlag("potion_mdef", 0)), 56, topOffset + 104);
			}
			ctx.font = 'bold 10px Verdana';
			ctx.fillText("*" + (core.getFlag("used_potion", 0)), 104, topOffset + 114);
		}
		if (core.getFlag("skill8_buff", 0) > 0) {
			ctx.fillStyle = '#ffee28';
			ctx.font = 'bold 18px Verdana';
			ctx.fillText("75%减伤", 6, topOffset + 104);
		}
	}
},
        "drawStatistics": function () {
	// 浏览地图时参与的统计项目

	return [
		'yellowDoor', 'blueDoor', 'redDoor', 'greenDoor',
		'yellowKey', 'blueKey', 'redKey',
		'yellowKey3', 'blueKey3', 'redKey3',
		'redGem', 'blueGem', 'greenGem',
		'redGem2', 'blueGem2', 'greenGem2',
		'redGem3', 'blueGem3', 'greenGem3',
		'redGem4', 'blueGem4', 'greenGem4',
		'redGem5', 'blueGem5', 'greenGem5',
		'redGem6', 'blueGem6', 'greenGem6',
		'redGem7', 'blueGem7', 'greenGem7',
		'redGem8', 'blueGem8', 'greenGem8',
		'redGem9', 'blueGem9', 'greenGem9',
		'redPotion', 'bluePotion', 'yellowPotion', 'greenPotion', 'superPotion',
		'bigRedPotion', 'bigBluePotion', 'bigYellowPotion', 'bigGreenPotion',
		'hugeRedPotion', 'hugeBluePotion', 'hugeYellowPotion', 'hugeGreenPotion',
		'giantRedPotion', 'giantBluePotion', 'giantYellowPotion', 'giantGreenPotion',
		'superPotion_s', 'manaItem', 'bigManaitem',
		'pickaxe', 'bomb', 'centerFly', 'icePickaxe', 'freezeBadge',
		'earthquake', 'upFly', 'downFly', 'jumpShoes', 'lifeWand',
		'poisonWine', 'weakWine', 'I321', 'superWine',
		'sword1', 'sword2', 'sword3', 'sword4', 'sword5',
		'shield1', 'shield2', 'shield3', 'shield4', 'shield5',
		'silverCoin', 'goldCoin'
		// 在这里可以增加新的ID来进行统计个数，只能增加道具ID
	];
},
        "drawAbout": function () {
	// 绘制“关于”界面
	core.ui.closePanel();
	core.lockControl();
	core.status.event.id = 'about';

	var left = 48,
		top = 36,
		right = core.__PIXELS__ - 2 * left,
		bottom = core.__PIXELS__ - 2 * top;

	core.setAlpha('ui', 0.85);
	core.fillRect('ui', left, top, right, bottom, '#000000');
	core.setAlpha('ui', 1);
	core.strokeRect('ui', left - 1, top - 1, right + 1, bottom + 1, '#FFFFFF', 2);

	var text_start = left + 24;

	// 名称
	core.setTextAlign('ui', 'left');
	var globalFont = (core.status.globalAttribute || core.initStatus.globalAttribute).font;
	core.fillText('ui', "咕工智障", text_start, top + 35, "#FFD700", "bold 22px " + globalFont);
	core.fillText('ui', "作者： 如沐东风", text_start, top + 80, "#FFFFFF", "bold 17px " + globalFont);
	core.fillText('ui', "版本： " + main.__VERSION__, text_start, top + 112);
	core.fillText('ui', "基于 HTML5 魔塔样板 v2.7.2 制作", text_start, top + 112 + 32);
	core.fillText('ui', "样板作者： 艾之葵", text_start, top + 112 + 64);
	core.fillText('ui', 'HTML5魔塔交流群：539113091', text_start, top + 112 + 96);
	// TODO: 写自己的“关于”页面，每次增加32像素即可
	core.playSound('打开界面');
}
    }
}