var plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1 = 
{
    "init": function () {

	// 可以写一些直接执行的代码
	// 在这里写的代码将会在【资源加载前】被执行，此时图片等资源尚未被加载。
	// 请勿在这里对包括bgm，图片等资源进行操作。


	this._afterLoadResources = function () {
		// 本函数将在所有资源加载完毕后，游戏开启前被执行
		// 可以在这个函数里面对资源进行一些操作，比如切分图片等。

		// 这是一个将assets.png拆分成若干个32x32像素的小图片并保存的样例。
		// var arr = core.splitImage("assets.png", 32, 32);
		// for (var i = 0; i < arr.length; i++) {
		//     core.material.images.images["asset"+i+".png"] = arr[i];
		// }

		this.initSpriteFlasher();
	};

	// 可以在任何地方（如afterXXX或自定义脚本事件）调用函数，方法为 core.plugin.xxx();
	// 从V2.6开始，插件中用this.XXX方式定义的函数也会被转发到core中，详见文档-脚本-函数的转发。


	// 下面主要是一些工具类函数
	this.canBreakList = ['yellowKey', 'blueKey', 'redKey', 'yellowKey3', 'blueKey3', 'redKey3', 'yellowDoor', 'blueDoor', 'redDoor', 'yellowDoor2', 'blueDoor2', 'redPotion', 'bluePotion', 'yellowPotion', 'greenPotion', 'manaItem', 'bigManaitem', 'bigRedPotion', 'bigBluePotion', 'bigYellowPotion', 'bigGreenPotion', 'hugeRedPotion', 'hugeBluePotion', 'hugeYellowPotion', 'hugeGreenPotion', 'giantRedPotion', 'giantBluePotion', 'giantYellowPotion', 'giantGreenPotion', 'redRHeart', 'blueRHeart', 'yellowRHeart', 'greenRHeart'];

	this.shouldHighlightMoney = function () {
		if (core.plugin.isShopVisited("shop1") && core.status.hero.money >= 25) return true;
		if (core.plugin.isShopVisited("B4FShop") && core.status.hero.money >= 50 + 5 * core.getFlag("shop2", 0)) return true;
		if (core.plugin.isShopVisited("B12FShop") && core.status.hero.money >= 400) return true;
		if (core.plugin.isShopVisited("20FShop") && core.status.hero.money >= 500) return true;
		if (core.plugin.isShopVisited("20FShop_easy") && core.status.hero.money >= 1000) return true;
		if (core.plugin.isShopVisited("36FShop") && core.status.hero.money >= 1500) return true;
		if (core.plugin.isShopVisited("57FShop") && core.status.hero.money >= 3000) return true;
		if (core.hasItem("talentTree")) {
			var result = false;
			var func1 = function (cur) {
				switch (core.getTalentLv(cur)) {
				case 0:
					if (core.status.hero.money >= 30) return true;
					break;
				case 1:
					if (core.status.hero.money >= 60) return true;
					break;
				case 3:
					if (core.status.hero.money >= 300) return true;
					break;
				}
				return false;
			}
			result |= func1(0);
			result |= func1(1);
			result |= func1(2);
			if (core.getTalentLv(3) == 0 && core.status.hero.money >= 1) return true;
			var func2 = function (cur, prequisite) {
				switch (core.getTalentLv(cur)) {
				case 0:
					return core.plugin.getTalentLv(prequisite) >= 5 && core.status.hero.money >= 300 && core.itemCount("yellowGem") >= 3;
				case 2:
					return core.status.hero.money >= 1000;
				}
				return false;
			}
			result |= func2(4, 0);
			result |= func2(5, 0);
			result |= func2(6, 1);
			result |= func2(7, 1);
			result |= func2(8, 2);
			result |= func2(9, 2);
			switch (core.getTalentLv(10)) {
			case 0:
				var enabled = core.getTalentLv(4) == 3 && core.getTalentLv(5) == 3 && core.getTalentLv(6) == 3 && core.getTalentLv(7) == 3 &&
					core.itemCount("yellowGem") >= 10 && core.status.hero.money >= 2500;
				result |= enabled;
				break;
			case 1:
				result |= core.status.hero.money >= 7500;
				break;
			}
			switch (core.getTalentLv(11)) {
			case 0:
				var enabled = core.getTalentLv(4) == 3 && core.getTalentLv(5) == 3 && core.getTalentLv(8) == 3 && core.getTalentLv(9) == 3 &&
					core.itemCount("yellowGem") >= 10 && core.status.hero.money >= 2500;
				result |= enabled;
				break;
			case 1:
				result |= core.status.hero.money >= 7500;
				break;
			}
			switch (core.getTalentLv(12)) {
			case 0:
				var enabled = core.getTalentLv(6) == 3 && core.getTalentLv(7) == 3 && core.getTalentLv(8) == 3 && core.getTalentLv(9) == 3 &&
					core.itemCount("yellowGem") >= 10 && core.status.hero.money >= 2500;
				result |= enabled;
				break;
			case 1:
				result |= core.status.hero.money >= 7500;
				break;
			}
			return result;
		}
		if (core.hasItem("talentTree2")) {
			var result = false;
			result |= core.plugin.canUpgradeTalent2(1);
			result |= core.plugin.canUpgradeTalent2(2);
			result |= core.plugin.canUpgradeTalent2(3);
			result |= core.plugin.canUpgradeTalent2(6);
			result |= core.plugin.canUpgradeTalent2(7);
			return result;
		}
		if (core.hasItem("talentTree3")) {
			switch (core.getTalentLv3(4)) {
			case 0:
				if (core.status.hero.money >= 2000) return true;
				break;
			case 1:
				if (core.status.hero.money >= 8000) return true;
				break;
			case 2:
				if (core.status.hero.money >= 20000) return true;
				break;
			case 3:
				if (core.status.hero.money >= 64100) return true;
				break;
			}
			switch (core.getTalentLv3(5)) {
			case 0:
				if (core.status.hero.money >= 4000) return true;
				break;
			case 1:
				if (core.status.hero.money >= 20000) return true;
				break;
			case 2:
				if (core.status.hero.money >= 40000) return true;
				break;
			}
			switch (core.getTalentLv3(6)) {
			case 0:
				if (core.status.hero.money >= 4500) return true;
				break;
			case 1:
				if (core.status.hero.money >= 22500) return true;
				break;
			case 2:
				if (core.status.hero.money >= 45000) return true;
				break;
			}
			if (core.getTalentLv3(0) == 0 && core.status.hero.money >= 100) return true;
			if (core.getTalentLv3(1) == 0 && core.status.hero.money >= 300) return true;
			if (core.getTalentLv3(2) == 0 && core.status.hero.money >= 2000) return true;
			return false;
		}
		return false;
	}

	this.decSpecialDoorCount = function (x, y, floorId) {
		floorId = floorId || core.status.floorId;
		var id = core.maps.getFgNumber(x, y, floorId) - 1;
		if (id >= 864 & id < 872) { // Number 1 - 8
			core.setBgFgBlock("fg", id, x, y, floorId);
		} else if (id == 863) { // Number0
			core.hideBgFgMap("fg", [x, y], floorId);
			core.drawMap();
			core.updateWeather();
		}
	}

	this.getReverseDirection = function (dir) {
		switch (dir) {
		case 'left':
			return 'right';
		case 'right':
			return 'left';
		case 'up':
			return 'down';
		case 'down':
			return 'up';
		}
		console.log("Unexpected dir:", dir);
		return 'unknown';
	}

	this.isEnemy = function (x, y, floorId, decludeFriend) {
		decludeFriend = true; // 总是不包含友军
		var res = core.getBlockCls(x, y, floorId) == "enemys" || core.getBlockCls(x, y, floorId) == "enemy48";
		var id = core.getBlockId(x, y, floorId);
		if (decludeFriend && id) res &= !core.hasSpecial(id, 87);
		return res;
	}

	this.hasTitle = function (targetX, targetY, level) {
		var mon_id = core.getBlockId(targetX, targetY);
		var enemy = core.material.enemys[mon_id];
		var noTitle = true;
		if (enemy) {
			noTitle = (enemy.title == null || enemy.title == "普通");
			if (level >= 1) {
				noTitle |= (enemy.title == "喽啰");
			}
			if (level >= 2) {
				noTitle |= (enemy.title == "精英");
			}
		}
		return !noTitle;
	}

	this.updateWeather = function (floorId) {
		floorId = floorId || core.status.floorId;
		// 更改天气
		var weather = core.getFlag('__weather__', null);
		if (!weather && core.status.maps[floorId] && core.status.maps[floorId].weather)
			weather = core.status.maps[floorId].weather;
		if (weather)
			core.setWeather(weather[0], weather[1]);
		else core.setWeather();
	}

	// 和公共事件“退出隐身”+参数0 作用相同，但不属于事件，在脚本中总会立即执行
	this.exit_invisible = function () {
		if (core.getFlag("invisible", 0) != 1) return;
		core.setFlag("invisible", 0);
		core.setFlag("no_zone", 0);
		core.setFlag("no_laser", 0);
		core.setFlag("no_snipe", 0);
		core.setFlag("no_betweenAttack", 0);
		core.setFlag("no_repulse", 0);
		core.setFlag("no_ambush", 0);
		core.setOpacity('hero', 1);
		core.drawHeroAnimate("yongchang");
	}

	// 提升能力增幅百分比
	this.addValpp = function (name, value) {
		var temp;
		if (name == 'atk') {
			temp = core.getFlag("__atk_buff__", 1);
			temp = (temp * 100 + value) / 100;
			core.setFlag("__atk_buff__", temp);
			core.addFlag("heart_atk_pp", value);
		} else if (name == 'def') {
			temp = core.getFlag("__def_buff__", 1);
			temp = (temp * 100 + value) / 100;
			core.setFlag("__def_buff__", temp);
			core.addFlag("heart_def_pp", value);
		} else if (name == 'mdef') {
			temp = core.getFlag("__mdef_buff__", 1);
			temp = (temp * 100 + value) / 100;
			core.setFlag("__mdef_buff__", temp);
			core.addFlag("heart_mdef_pp", value);
		}
	}

	// 用于进出副本
	this.saveHeroStatus = function () {
		core.setFlag("saved_hp", core.status.hero.hp);
		core.setFlag("saved_mana", core.status.hero.mana);
		core.setFlag("saved_atk", core.status.hero.atk);
		core.setFlag("saved_def", core.status.hero.def);
		core.setFlag("saved_mdef", core.status.hero.mdef);
		core.setFlag("saved_atk_buff", core.getFlag("__atk_buff__", 1));
		core.setFlag("saved_def_buff", core.getFlag("__def_buff__", 1));
		core.setFlag("saved_mdef_buff", core.getFlag("__mdef_buff__", 1));
		core.setFlag("saved_yellowKey", core.itemCount("yellowKey"));
		core.setFlag("saved_blueKey", core.itemCount("blueKey"));
		core.setFlag("saved_redKey", core.itemCount("redKey"));
		core.setFlag("saved_mana_regen", core.getFlag("mana_regen", 0));
		core.setFlag("saved_I62_extra_mana_regen", core.getFlag("I62_extra_mana_regen", 0));
		core.setFlag("saved_mana_item", core.getFlag("mana_item", 50));
		core.setFlag("saved_mdef_ratio", core.getFlag("mdef_ratio", 1));
		core.setFlag("saved_yellowGem", core.itemCount("yellowGem"));
		core.setFlag("saved_potion_extra_ratio", core.getFlag('potion_extra_ratio', 1));
		core.setFlag("saved_skill3_cost", core.getFlag('skill3_cost', 50));
	}
	this.loadHeroStatus = function () {
		core.status.hero.hp = core.getFlag("saved_hp", 1);
		core.status.hero.mana = core.getFlag("saved_mana", 0);
		core.status.hero.atk = core.getFlag("saved_atk", 0);
		core.status.hero.def = core.getFlag("saved_def", 0);
		core.status.hero.mdef = core.getFlag("saved_mdef", 0);
		core.setFlag("__atk_buff__", core.getFlag("saved_atk_buff", 1));
		core.setFlag("__def_buff__", core.getFlag("saved_def_buff", 1));
		core.setFlag("__mdef_buff__", core.getFlag("saved_mdef_buff", 1));
		core.setItem("yellowKey", core.getFlag("saved_yellowKey", 0));
		core.setItem("blueKey", core.getFlag("saved_blueKey", 0));
		core.setItem("redKey", core.getFlag("saved_redKey", 0));
		core.setFlag("mana_regen", core.getFlag("saved_mana_regen", 0));
		core.setFlag("I62_extra_mana_regen", core.getFlag("saved_I62_extra_mana_regen", 0));
		core.setFlag("mana_item", core.getFlag("saved_mana_item", 50));
		core.setFlag("mdef_ratio", core.getFlag("saved_mdef_ratio", 1));
		core.setItem("yellowGem", core.getFlag("saved_yellowGem", 0));
		core.setItem("I319", 1);
		core.setItem("I392", 1);
		core.setItem("talentTree", 1);
		core.setFlag("talentTree_unlocked", true);
		core.setFlag("potion_extra_ratio", core.getFlag('saved_potion_extra_ratio', 1));
		core.setFlag("current_chapter", 3);
		core.setItem("pickaxe", 0);
		core.setFlag("skill3_cost", core.getFlag('saved_skill3_cost', 50));
	}
	this.resetHeroStatus = function () {
		core.status.hero.hp = 1;
		core.status.hero.mana = 0;
		core.setFlag("__atk_buff__", 1);
		core.setFlag("__def_buff__", 1);
		core.setFlag("__mdef_buff__", 1);
		core.setItem("yellowKey", 0);
		core.setItem("blueKey", 0);
		core.setItem("redKey", 0);
		core.setFlag("mana_regen", 0);
		core.setFlag("I62_extra_mana_regen", 0);
		core.setFlag("mana_item", 50);
		core.setFlag("mdef_ratio", 1);
		core.setItem("yellowGem", 0);
		core.setItem("I319", 0); // 匙之道
		core.setItem("I392", 0); // 机器之心
		core.setItem("talentTree", 0);
		core.setFlag("talentTree_unlocked", false);
		core.setFlag("potion_extra_ratio", 1);
		core.setFlag("current_chapter", -1);
		core.setItem("pickaxe", 0);
		core.setFlag("skill3_cost", 50);
	}

},
    "drawLight": function () {
	// 绘制灯光/漆黑层效果。调用方式 core.plugin.drawLight(...)
	// 【参数说明】
	// name：必填，要绘制到的画布名；可以是一个系统画布，或者是个自定义画布；如果不存在则创建
	// color：可选，只能是一个0~1之间的数，为不透明度的值。不填则默认为0.9。
	// lights：可选，一个数组，定义了每个独立的灯光。
	//        其中每一项是三元组 [x,y,r] x和y分别为该灯光的横纵坐标，r为该灯光的半径。
	// lightDec：可选，0到1之间，光从多少百分比才开始衰减（在此范围内保持全亮），不设置默认为0。
	//        比如lightDec为0.5代表，每个灯光部分内圈50%的范围全亮，50%以后才开始快速衰减。
	// 【调用样例】
	// core.plugin.drawLight('curtain'); // 在curtain层绘制全图不透明度0.9，等价于更改画面色调为[0,0,0,0.9]。
	// core.plugin.drawLight('ui', 0.95, [[25,11,46]]); // 在ui层绘制全图不透明度0.95，其中在(25,11)点存在一个半径为46的灯光效果。
	// core.plugin.drawLight('test', 0.2, [[25,11,46,0.1]]); // 创建一个test图层，不透明度0.2，其中在(25,11)点存在一个半径为46的灯光效果，灯光中心不透明度0.1。
	// core.plugin.drawLight('test2', 0.9, [[25,11,46],[105,121,88],[301,221,106]]); // 创建test2图层，且存在三个灯光效果，分别是中心(25,11)半径46，中心(105,121)半径88，中心(301,221)半径106。
	// core.plugin.drawLight('xxx', 0.3, [[25,11,46],[105,121,88,0.2]], 0.4); // 存在两个灯光效果，它们在内圈40%范围内保持全亮，40%后才开始衰减。
	this.drawLight = function (name, color, lights, lightDec, rgbcolor) {
		// 清空色调层；也可以修改成其它层比如animate/weather层，或者用自己创建的canvas
		var ctx = core.getContextByName(name);
		if (ctx == null) {
			if (typeof name == 'string')
				ctx = core.createCanvas(name, 0, 0, core.__PIXELS__, core.__PIXELS__, 98);
			else return;
		}

		ctx.mozImageSmoothingEnabled = false;
		ctx.webkitImageSmoothingEnabled = false;
		ctx.msImageSmoothingEnabled = false;
		ctx.imageSmoothingEnabled = false;

		core.clearMap(name);
		// 绘制色调层，默认不透明度
		if (color == null) color = 0.9;
		if (rgbcolor == null) rgbcolor = [0, 0, 0];
		ctx.fillStyle = "rgba(" + rgbcolor[0] + "," + rgbcolor[1] + "," + rgbcolor[2] + "," + color + ")";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		lightDec = core.clamp(lightDec, 0, 1);

		// 绘制每个灯光效果
		lights.forEach(function (light) {
			// 坐标，半径，中心不透明度
			var x = light[0],
				y = light[1],
				r = light[2];
			// 计算衰减距离
			var decDistance = parseInt(r * lightDec);
			// 正方形区域的直径和左上角坐标
			ctx.globalCompositeOperation = 'destination-out';
			var grd = ctx.createRadialGradient(x, y, decDistance, x, y, r);
			grd.addColorStop(0, "rgba(0,0,0,1)");
			grd.addColorStop(1, "rgba(0,0,0,0)");
			ctx.beginPath();
			ctx.fillStyle = grd;
			ctx.arc(x, y, r, 0, 2 * Math.PI);
			ctx.fill();
			// 可以让灯光看起来暖和一些
			if (core.getFlag("fire_light_a", 0) > 0) {
				ctx.globalCompositeOperation = 'source-over';
				grd = ctx.createRadialGradient(x, y, decDistance, x, y, r);
				grd.addColorStop(0, "rgba(255,160,24," + core.getFlag("fire_light_a", 0.16) + ")");
				grd.addColorStop(1, "rgba(0,0,0,0)");
				ctx.beginPath();
				ctx.fillStyle = grd;
				ctx.arc(x, y, r, 0, 2 * Math.PI);
				ctx.fill();
			}
		});
		// 可以在任何地方（如afterXXX或自定义脚本事件）调用函数，方法为  core.plugin.xxx();
	}
},
    "shop": function () {
	// 【全局商店】相关的功能
	// 
	// 打开一个全局商店
	// shopId：要打开的商店id；noRoute：是否不计入录像
	this.openShop = function (shopId, noRoute) {
		var shop = core.status.shops[shopId];
		// Step 1: 检查能否打开此商店
		if (!this.canOpenShop(shopId)) {
			core.drawTip("该商店尚未开启");
			return false;
		}

		// Step 2: （如有必要）记录打开商店的脚本事件
		if (!noRoute) {
			core.status.route.push("shop:" + shopId);
		}

		// Step 3: 检查道具商店 or 公共事件
		if (shop.item) {
			if (core.openItemShop) {
				core.openItemShop(shopId);
			} else {
				core.playSound('操作失败');
				core.insertAction("道具商店插件不存在！请检查是否存在该插件！");
			}
			return;
		}
		if (shop.commonEvent) {
			core.insertCommonEvent(shop.commonEvent, shop.args);
			return;
		}

		// Step 4: 执行标准公共商店    
		core.insertAction(this._convertShop(shop));
		return true;
	}

	////// 将一个全局商店转变成可预览的公共事件 //////
	this._convertShop = function (shop) {
		return [
			{ "type": "function", "function": "function() {core.setFlag('@temp@shop', true);}" },
			{
				"type": "while",
				"condition": "true",
				"data": [
					// 检测能否访问该商店
					{
						"type": "if",
						"condition": "core.isShopVisited('" + shop.id + "')",
						"true": [
							// 可以访问，直接插入执行效果
							{ "type": "function", "function": "function() { core.plugin._convertShop_replaceChoices('" + shop.id + "', false) }" },
						],
						"false": [
							// 不能访问的情况下：检测能否预览
							{
								"type": "if",
								"condition": shop.disablePreview,
								"true": [
									// 不可预览，提示并退出
									{ "type": "playSound", "name": "操作失败" },
									"当前无法访问该商店！",
									{ "type": "break" },
								],
								"false": [
									// 可以预览：将商店全部内容进行替换
									{ "type": "tip", "text": "当前处于预览模式，不可购买" },
									{ "type": "function", "function": "function() { core.plugin._convertShop_replaceChoices('" + shop.id + "', true) }" },
								]
							}
						]
					}
				]
			},
			{ "type": "function", "function": "function() {core.removeFlag('@temp@shop');}" }
		];
	}

	this._convertShop_replaceChoices = function (shopId, previewMode) {
		var shop = core.status.shops[shopId];
		var choices = (shop.choices || []).filter(function (choice) {
			if (choice.condition == null || choice.condition == '') return true;
			try { return core.calValue(choice.condition); } catch (e) { return true; }
		}).map(function (choice) {
			var ableToBuy = core.calValue(choice.need);
			return {
				"text": choice.text,
				"icon": choice.icon,
				"color": ableToBuy && !previewMode ? choice.color : [153, 153, 153, 1],
				"action": ableToBuy && !previewMode ? [{ "type": "playSound", "name": "确定" }].concat(choice.action) : [
					{ "type": "playSound", "name": "操作失败" },
					{ "type": "tip", "text": previewMode ? "预览模式下不可购买" : "购买条件不足" }
				]
			};
		}).concat({ "text": "离开", "action": [{ "type": "playSound", "name": "取消" }, { "type": "break" }] });
		core.insertAction({ "type": "choices", "text": shop.text, "choices": choices });
	}

	/// 是否访问过某个快捷商店
	this.isShopVisited = function (id) {
		if (!core.hasFlag("__shops__")) core.setFlag("__shops__", {});
		var shops = core.getFlag("__shops__");
		if (!shops[id]) shops[id] = {};
		return shops[id].visited;
	}

	/// 当前应当显示的快捷商店列表
	this.listShopIds = function () {
		return Object.keys(core.status.shops).filter(function (id) {
			return core.isShopVisited(id) || !core.status.shops[id].mustEnable;
		});
	}

	/// 是否能够打开某个商店
	this.canOpenShop = function (id) {
		if (this.isShopVisited(id)) return true;
		var shop = core.status.shops[id];
		if (shop.item || shop.commonEvent || shop.mustEnable) return false;
		return true;
	}

	/// 启用或禁用某个快捷商店
	this.setShopVisited = function (id, visited) {
		if (!core.hasFlag("__shops__")) core.setFlag("__shops__", {});
		var shops = core.getFlag("__shops__");
		if (!shops[id]) shops[id] = {};
		if (visited) shops[id].visited = true;
		else delete shops[id].visited;
	}

	/// 能否使用快捷商店
	this.canUseQuickShop = function (id) {
		// 如果返回一个字符串，表示不能，字符串为不能使用的提示
		// 返回null代表可以使用

		// 检查当前楼层的canUseQuickShop选项是否为false
		if (core.status.thisMap.canUseQuickShop === false)
			return '当前楼层不能使用快捷商店。';
		return null;
	}

	/// 允许商店X键退出
	core.registerAction('keyUp', 'shops', function (keycode) {
		if (!core.status.lockControl || !core.hasFlag("@temp@shop") || core.status.event.id != 'action') return false;
		if (core.status.event.data.type != 'choices') return false;
		var data = core.status.event.data.current;
		var choices = data.choices;
		var topIndex = core.actions._getChoicesTopIndex(choices.length);
		if (keycode == 88 || keycode == 27) { // X, ESC
			core.actions._clickAction(core.actions.HSIZE, topIndex + choices.length - 1);
			return true;
		}
		if (keycode == 13 || keycode == 32) return true;
		return false;
	}, 60);


	/// 允许长按空格或回车连续执行操作
	core.registerAction('keyDown', 'shops', function (keycode) {
		if (!core.status.lockControl || !core.hasFlag("@temp@shop") || core.status.event.id != 'action') return false;
		if (core.status.event.data.type != 'choices') return false;
		var data = core.status.event.data.current;
		var choices = data.choices;
		var topIndex = core.actions._getChoicesTopIndex(choices.length);
		if (keycode == 13 || keycode == 32) { // Space, Enter
			core.actions._clickAction(core.actions.HSIZE, topIndex + core.status.event.selection);
			return true;
		}
		return false;
	}, 60);

	// 允许长按屏幕连续执行操作
	core.registerAction('longClick', 'shops', function (x, y, px, py) {
		if (!core.status.lockControl || !core.hasFlag("@temp@shop") || core.status.event.id != 'action') return false;
		if (core.status.event.data.type != 'choices') return false;
		var data = core.status.event.data.current;
		var choices = data.choices;
		var topIndex = core.actions._getChoicesTopIndex(choices.length);
		if (x >= core.actions.CHOICES_LEFT && x <= core.actions.CHOICES_RIGHT && y >= topIndex && y < topIndex + choices.length) {
			core.actions._clickAction(x, y);
			return true;
		}
		return false;
	}, 60);
},
    "removeMap": function () {
	// 高层塔砍层插件，删除后不会存入存档，不可浏览地图也不可飞到。
	// 推荐用法：
	// 对于超高层或分区域塔，当在1区时将2区以后的地图删除；1区结束时恢复2区，进二区时删除1区地图，以此类推
	// 这样可以大幅减少存档空间，以及加快存读档速度

	// 删除楼层
	// core.removeMaps("MT1", "MT300") 删除MT1~MT300之间的全部层
	// core.removeMaps("MT10") 只删除MT10层
	this.removeMaps = function (fromId, toId) {
		toId = toId || fromId;
		var fromIndex = core.floorIds.indexOf(fromId),
			toIndex = core.floorIds.indexOf(toId);
		if (toIndex < 0) toIndex = core.floorIds.length - 1;
		flags.__visited__ = flags.__visited__ || {};
		flags.__removed__ = flags.__removed__ || [];
		flags.__disabled__ = flags.__disabled__ || {};
		flags.__leaveLoc__ = flags.__leaveLoc__ || {};
		for (var i = fromIndex; i <= toIndex; ++i) {
			var floorId = core.floorIds[i];
			if (core.status.maps[floorId].deleted) continue;
			delete flags.__visited__[floorId];
			flags.__removed__.push(floorId);
			delete flags.__disabled__[floorId];
			delete flags.__leaveLoc__[floorId];
			(core.status.autoEvents || []).forEach(function (event) {
				if (event.floorId == floorId && event.currentFloor) {
					core.autoEventExecuting(event.symbol, false);
					core.autoEventExecuted(event.symbol, false);
				}
			});
			core.status.maps[floorId].deleted = true;
			core.status.maps[floorId].canFlyTo = false;
			core.status.maps[floorId].canFlyFrom = false;
			core.status.maps[floorId].cannotViewMap = true;
		}
	}

	// 恢复楼层
	// core.resumeMaps("MT1", "MT300") 恢复MT1~MT300之间的全部层
	// core.resumeMaps("MT10") 只恢复MT10层
	this.resumeMaps = function (fromId, toId) {
		toId = toId || fromId;
		var fromIndex = core.floorIds.indexOf(fromId),
			toIndex = core.floorIds.indexOf(toId);
		if (toIndex < 0) toIndex = core.floorIds.length - 1;
		flags.__removed__ = flags.__removed__ || [];
		for (var i = fromIndex; i <= toIndex; ++i) {
			var floorId = core.floorIds[i];
			if (!core.status.maps[floorId].deleted) continue;
			flags.__removed__ = flags.__removed__.filter(function (f) { return f != floorId; });
			core.status.maps[floorId] = core.loadFloor(floorId);
		}
	}

	// 分区砍层相关
	var inAnyPartition = function (floorId) {
		var inPartition = false;
		(core.floorPartitions || []).forEach(function (floor) {
			var fromIndex = core.floorIds.indexOf(floor[0]);
			var toIndex = core.floorIds.indexOf(floor[1]);
			var index = core.floorIds.indexOf(floorId);
			if (fromIndex < 0 || index < 0) return;
			if (toIndex < 0) toIndex = core.floorIds.length - 1;
			if (index >= fromIndex && index <= toIndex) inPartition = true;
		});
		return inPartition;
	}

	// 分区砍层
	this.autoRemoveMaps = function (floorId) {
		if (floorId == "MusicRoom") {
			core.resumeMaps(core.floorIds[0], core.floorIds[core.floorIds.length - 1]);
			return;
		}
		if (main.mode != 'play' || !inAnyPartition(floorId)) return;
		// 根据分区信息自动砍层与恢复
		var no_remove = false;
		(core.floorPartitions || []).forEach(function (floor) {
			if (no_remove) return;
			var fromIndex = core.floorIds.indexOf(floor[0]);
			var toIndex = core.floorIds.indexOf(floor[1]);
			var index = core.floorIds.indexOf(floorId);
			if (fromIndex < 0 || index < 0) return;
			if (toIndex < 0) toIndex = core.floorIds.length - 1;
			if (index >= fromIndex && index <= toIndex) {
				core.resumeMaps(core.floorIds[fromIndex], core.floorIds[toIndex]);
				no_remove = true; // 不删除之后的地图
			} else {
				core.removeMaps(core.floorIds[fromIndex], core.floorIds[toIndex]);
			}
		});
	}
},
    "fiveLayers": function () {
	// 是否启用五图层（增加背景2层和前景2层） 将__enable置为true即会启用；启用后请保存后刷新编辑器
	// 背景层2将会覆盖背景层 被事件层覆盖 前景层2将会覆盖前景层
	// 另外 请注意加入两个新图层 会让大地图的性能降低一些
	// 插件作者：ad
	var __enable = true;
	if (!__enable) return;

	// 创建新图层
	function createCanvas(name, zIndex) {
		if (!name) return;
		var canvas = document.createElement('canvas');
		canvas.id = name;
		canvas.className = 'gameCanvas';
		canvas.width = canvas.height = core.__PIXELS__;
		// 编辑器模式下设置zIndex会导致加入的图层覆盖优先级过高
		if (main.mode != "editor") canvas.style.zIndex = zIndex || 0;
		// 将图层插入进游戏内容
		document.getElementById('gameDraw').appendChild(canvas);
		var ctx = canvas.getContext('2d');
		core.canvas[name] = ctx;
		return canvas;
	}

	var bg2Canvas = createCanvas('bg2', 20);
	var fg2Canvas = createCanvas('fg2', 63);
	// 大地图适配
	core.bigmap.canvas = ["bg2", "fg2", "bg", "event", "event2", "fg", "damage"];
	core.initStatus.bg2maps = {};
	core.initStatus.fg2maps = {};

	if (main.mode == 'editor') {
		/*插入编辑器的图层 不做此步新增图层无法在编辑器显示*/
		// 编辑器图层覆盖优先级 eui > efg > fg(前景层) > event2(48*32图块的事件层) > event(事件层) > bg(背景层)
		// 背景层2(bg2) 插入事件层(event)之前(即bg与event之间)
		document.getElementById('mapEdit').insertBefore(bg2Canvas, document.getElementById('event'));
		// 前景层2(fg2) 插入编辑器前景(efg)之前(即fg之后)
		document.getElementById('mapEdit').insertBefore(fg2Canvas, document.getElementById('ebm'));
		// 原本有三个图层 从4开始添加
		var num = 4;
		// 新增图层存入editor.dom中
		editor.dom.bg2c = core.canvas.bg2.canvas;
		editor.dom.bg2Ctx = core.canvas.bg2;
		editor.dom.fg2c = core.canvas.fg2.canvas;
		editor.dom.fg2Ctx = core.canvas.fg2;
		editor.dom.maps.push('bg2map', 'fg2map');
		editor.dom.canvas.push('bg2', 'fg2');

		// 创建编辑器上的按钮
		var createCanvasBtn = function (name) {
			// 电脑端创建按钮
			var input = document.createElement('input');
			// layerMod4/layerMod5
			var id = 'layerMod' + num++;
			// bg2map/fg2map
			var value = name + 'map';
			input.type = 'radio';
			input.name = 'layerMod';
			input.id = id;
			input.value = value;
			editor.dom[id] = input;
			input.onchange = function () {
				editor.uifunctions.setLayerMod(value);
			}
			return input;
		};

		var createCanvasBtn_mobile = function (name) {
			// 手机端往选择列表中添加子选项
			var input = document.createElement('option');
			var id = 'layerMod' + num++;
			var value = name + 'map';
			input.name = 'layerMod';
			input.value = value;
			editor.dom[id] = input;
			return input;
		};
		if (!editor.isMobile) {
			var input = createCanvasBtn('bg2');
			var input2 = createCanvasBtn('fg2');
			// 获取事件层及其父节点
			var child = document.getElementById('layerMod'),
				parent = child.parentNode;
			// 背景层2插入事件层前
			parent.insertBefore(input, child);
			// 不能直接更改背景层2的innerText 所以创建文本节点
			var txt = document.createTextNode('背景层2');
			// 插入事件层前(即新插入的背景层2前)
			parent.insertBefore(txt, child);
			// 向最后插入前景层2(即插入前景层后)
			parent.appendChild(input2);
			var txt2 = document.createTextNode('前景层2');
			parent.appendChild(txt2);
		} else {
			var input = createCanvasBtn_mobile('bg2');
			var input2 = createCanvasBtn_mobile('fg2');
			// 手机端因为是选项 所以可以直接改innerText
			input.innerText = '背景层2';
			input2.innerText = '前景层2';
			var parent = document.getElementById('layerMod');
			parent.insertBefore(input, parent.children[1]);
			parent.appendChild(input2);
		}
	}
	core.maps._loadFloor_doNotCopy = function () {
		return [
			"firstArrive", "eachArrive", "blocks", "parallelDo", "map", "bgmap", "fgmap", "bg2map", "fg2map",
			"events", "changeFloor", "beforeBattle", "afterBattle", "afterGetItem", "afterOpenDoor",
			"cannotMove", "cannotMoveIn"
		];
	}
	////// 绘制背景和前景层 //////
	core.maps._drawBg_draw = function (floorId, toDrawCtx, cacheCtx, config) {
		config.ctx = cacheCtx;
		core.maps._drawBg_drawBackground(floorId, config);
		// ------ 调整这两行的顺序来控制是先绘制贴图还是先绘制背景图块；后绘制的覆盖先绘制的。
		core.maps._drawFloorImages(floorId, config.ctx, 'bg', null, null, config.onMap);
		core.maps._drawBgFgMap(floorId, 'bg', config);
		if (config.onMap) {
			core.drawImage(toDrawCtx, cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
			core.clearMap('bg2');
			core.clearMap(cacheCtx);
		}
		core.maps._drawBgFgMap(floorId, 'bg2', config);
		if (config.onMap) core.drawImage('bg2', cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
		config.ctx = toDrawCtx;
	}
	core.maps._drawFg_draw = function (floorId, toDrawCtx, cacheCtx, config) {
		config.ctx = cacheCtx;
		// ------ 调整这两行的顺序来控制是先绘制贴图还是先绘制前景图块；后绘制的覆盖先绘制的。
		core.maps._drawFloorImages(floorId, config.ctx, 'fg', null, null, config.onMap);
		core.maps._drawBgFgMap(floorId, 'fg', config);
		if (config.onMap) {
			core.drawImage(toDrawCtx, cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
			core.clearMap('fg2');
			core.clearMap(cacheCtx);
		}
		core.maps._drawBgFgMap(floorId, 'fg2', config);
		if (config.onMap) core.drawImage('fg2', cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
		config.ctx = toDrawCtx;
	}
	////// 移动判定 //////
	core.maps._generateMovableArray_arrays = function (floorId) {
		return {
			bgArray: this.getBgMapArray(floorId),
			fgArray: this.getFgMapArray(floorId),
			eventArray: this.getMapArray(floorId),
			bg2Array: this._getBgFgMapArray('bg2', floorId),
			fg2Array: this._getBgFgMapArray('fg2', floorId)
		};
	}
},
    "itemShop": function () {
	// 道具商店相关的插件
	// 可在全塔属性-全局商店中使用「道具商店」事件块进行编辑（如果找不到可以在入口方块中找）

	var shopId = null; // 当前商店ID
	var type = 0; // 当前正在选中的类型，0买入1卖出
	var selectItem = 0; // 当前正在选中的道具
	var selectCount = 0; // 当前已经选中的数量
	var page = 0;
	var totalPage = 0;
	var totalMoney = 0;
	var list = [];
	var shopInfo = null; // 商店信息
	var choices = []; // 商店选项
	var use = 'money';
	var useText = '金币';

	var bigFont = core.ui._buildFont(20, false),
		middleFont = core.ui._buildFont(18, false);

	this._drawItemShop = function () {
		// 绘制道具商店

		// Step 1: 背景和固定的几个文字
		core.ui._createUIEvent();
		core.clearMap('uievent');
		core.ui.clearUIEventSelector();
		core.setTextAlign('uievent', 'left');
		core.setTextBaseline('uievent', 'top');
		core.fillRect('uievent', 0, 0, 416, 416, 'black');
		core.drawWindowSkin('winskin.png', 'uievent', 0, 0, 416, 56);
		core.drawWindowSkin('winskin.png', 'uievent', 0, 56, 312, 56);
		core.drawWindowSkin('winskin.png', 'uievent', 0, 112, 312, 304);
		core.drawWindowSkin('winskin.png', 'uievent', 312, 56, 104, 56);
		core.drawWindowSkin('winskin.png', 'uievent', 312, 112, 104, 304);
		core.setFillStyle('uievent', 'white');
		core.setStrokeStyle('uievent', 'white');
		core.fillText("uievent", "购买", 32, 74, 'white', bigFont);
		core.fillText("uievent", "卖出", 132, 74);
		core.fillText("uievent", "离开", 232, 74);
		core.fillText("uievent", "当前" + useText, 324, 66, null, middleFont);
		core.setTextAlign("uievent", "right");
		core.fillText("uievent", core.formatBigNumber(core.status.hero[use]), 405, 89);
		core.setTextAlign("uievent", "left");
		core.ui.drawUIEventSelector(1, "winskin.png", 22 + 100 * type, 66, 60, 33);
		if (selectItem != null) {
			core.setTextAlign('uievent', 'center');
			core.fillText("uievent", type == 0 ? "买入个数" : "卖出个数", 364, 320, null, bigFont);
			core.fillText("uievent", "<   " + selectCount + "   >", 364, 350);
			core.fillText("uievent", "确定", 364, 380);
		}

		// Step 2：获得列表并展示
		list = choices.filter(function (one) {
			if (one.condition != null && one.condition != '') {
				try { if (!core.calValue(one.condition)) return false; } catch (e) {
					console.log("触发未知的商店bug: ", e);
					alert("触发未知的商店bug，请联系作者并附上下列信息: ", e);
				}
			}
			return (type == 0 && one.money != null) || (type == 1 && one.sell != null);
		});
		var per_page = 6;
		totalPage = Math.ceil(list.length / per_page);
		page = Math.floor((selectItem || 0) / per_page) + 1;

		// 绘制分页
		if (totalPage > 1) {
			var half = 156;
			core.setTextAlign('uievent', 'center');
			core.fillText('uievent', page + " / " + totalPage, half, 388, null, middleFont);
			if (page > 1) core.fillText('uievent', '上一页', half - 80, 388);
			if (page < totalPage) core.fillText('uievent', '下一页', half + 80, 388);
		}
		core.setTextAlign('uievent', 'left');

		// 绘制每一项
		var start = (page - 1) * per_page;
		for (var i = 0; i < per_page; ++i) {
			var curr = start + i;
			if (curr >= list.length) break;
			var item = list[curr];
			core.drawIcon('uievent', item.id, 10, 125 + i * 40);
			core.setTextAlign('uievent', 'left');
			core.fillText('uievent', core.material.items[item.id].name, 50, 132 + i * 40, null, bigFont);
			core.setTextAlign('uievent', 'right');
			core.fillText('uievent', (type == 0 ? core.calValue(item.money) : core.calValue(item.sell)) + useText + "/个", 300, 133 + i * 40, null, middleFont);
			core.setTextAlign("uievent", "left");
			if (curr == selectItem) {
				// 绘制描述，文字自动放缩
				var text = core.material.items[item.id].text || "该道具暂无描述";
				try { text = core.replaceText(text); } catch (e) {
					console.log("触发未知的商店bug: ", e);
					alert("触发未知的商店bug，请联系作者并附上下列信息: ", e);
				}
				for (var fontSize = 20; fontSize >= 8; fontSize -= 2) {
					var config = { left: 10, fontSize: fontSize, maxWidth: 403 };
					var height = core.getTextContentHeight(text, config);
					if (height <= 50) {
						config.top = (56 - height) / 2;
						core.drawTextContent("uievent", text, config);
						break;
					}
				}
				core.ui.drawUIEventSelector(2, "winskin.png", 8, 120 + i * 40, 295, 40);
				if (type == 0 && item.number != null) {
					core.fillText("uievent", "存货", 324, 132, null, bigFont);
					core.setTextAlign("uievent", "right");
					core.fillText("uievent", item.number, 406, 132, null, null, 40);
				} else if (type == 1) {
					core.fillText("uievent", "数量", 324, 132, null, bigFont);
					core.setTextAlign("uievent", "right");
					core.fillText("uievent", core.itemCount(item.id), 406, 132, null, null, 40);
				}
				core.setTextAlign("uievent", "left");
				core.fillText("uievent", "预计" + useText, 324, 250);
				core.setTextAlign("uievent", "right");
				totalMoney = selectCount * (type == 0 ? core.calValue(item.money) : core.calValue(item.sell));
				core.fillText("uievent", core.formatBigNumber(totalMoney), 405, 280);

				core.setTextAlign("uievent", "left");
				core.fillText("uievent", type == 0 ? "已购次数" : "已卖次数", 324, 170);
				core.setTextAlign("uievent", "right");
				core.fillText("uievent", (type == 0 ? item.money_count : item.sell_count) || 0, 405, 200);
			}
		}

		core.setTextAlign('uievent', 'left');
		core.setTextBaseline('uievent', 'alphabetic');
	}

	var _add = function (item, delta) {
		if (item == null) return;
		selectCount = core.clamp(
			selectCount + delta, 0,
			Math.min(type == 0 ? Math.floor(core.status.hero[use] / core.calValue(item.money)) : core.itemCount(item.id),
				type == 0 && item.number != null ? item.number : Number.MAX_SAFE_INTEGER)
		);
	}

	var _confirm = function (item) {
		if (item == null || selectCount == 0) return;
		if (type == 0) {
			core.status.hero[use] -= totalMoney;
			core.getItem(item.id, selectCount);
			core.stopSound();
			core.playSound('确定');
			if (item.number != null) item.number -= selectCount;
			item.money_count = (item.money_count || 0) + selectCount;
		} else {
			core.status.hero[use] += totalMoney;
			core.removeItem(item.id, selectCount);
			core.playSound('确定');
			core.drawTip("成功卖出" + selectCount + "个" + core.material.items[item.id].name, item.id);
			if (item.number != null) item.number += selectCount;
			item.sell_count = (item.sell_count || 0) + selectCount;
		}
		selectCount = 0;
	}

	this._performItemShopKeyBoard = function (keycode) {
		var item = list[selectItem] || null;
		// 键盘操作
		switch (keycode) {
		case 38: // up
			if (selectItem == null) break;
			if (selectItem == 0) selectItem = null;
			else selectItem--;
			selectCount = 0;
			break;
		case 37: // left
			if (selectItem == null) {
				if (type > 0) type--;
				break;
			}
			_add(item, -1);
			break;
		case 39: // right
			if (selectItem == null) {
				if (type < 2) type++;
				break;
			}
			_add(item, 1);
			break;
		case 40: // down
			if (selectItem == null) {
				if (list.length > 0) selectItem = 0;
				break;
			}
			if (list.length == 0) break;
			selectItem = Math.min(selectItem + 1, list.length - 1);
			selectCount = 0;
			break;
		case 13:
		case 32: // Enter/Space
			if (selectItem == null) {
				if (type == 2)
					core.insertAction({ "type": "break" });
				else if (list.length > 0)
					selectItem = 0;
				break;
			}
			_confirm(item);
			break;
		case 27: // ESC
			if (selectItem == null) {
				core.insertAction({ "type": "break" });
				break;
			}
			selectItem = null;
			break;
		}
	}

	this._performItemShopClick = function (px, py) {
		var item = list[selectItem] || null;
		// 鼠标操作
		if (px >= 22 && px <= 82 && py >= 71 && py <= 102) {
			// 买
			if (type != 0) {
				type = 0;
				selectItem = null;
				selectCount = 0;
			}
			return;
		}
		if (px >= 122 && px <= 182 && py >= 71 && py <= 102) {
			// 卖
			if (type != 1) {
				type = 1;
				selectItem = null;
				selectCount = 0;
			}
			return;
		}
		if (px >= 222 && px <= 282 && py >= 71 && py <= 102) // 离开
			return core.insertAction({ "type": "break" });
		// < >
		if (px >= 318 && px <= 341 && py >= 348 && py <= 376)
			return _add(item, -1);
		if (px >= 388 && px <= 416 && py >= 348 && py <= 376)
			return _add(item, 1);
		// 确定
		if (px >= 341 && px <= 387 && py >= 380 && py <= 407)
			return _confirm(item);

		// 上一页/下一页
		if (px >= 45 && px <= 105 && py >= 388) {
			if (page > 1) {
				selectItem -= 6;
				selectCount = 0;
			}
			return;
		}
		if (px >= 208 && px <= 268 && py >= 388) {
			if (page < totalPage) {
				selectItem = Math.min(selectItem + 6, list.length - 1);
				selectCount = 0;
			}
			return;
		}

		// 实际区域
		if (px >= 9 && px <= 300 && py >= 120 && py < 360) {
			if (list.length == 0) return;
			var index = parseInt((py - 120) / 40);
			var newItem = 6 * (page - 1) + index;
			if (newItem >= list.length) newItem = list.length - 1;
			if (newItem != selectItem) {
				selectItem = newItem;
				selectCount = 0;
			}
			return;
		}
	}

	this._performItemShopAction = function () {
		if (flags.type == 0) return this._performItemShopKeyBoard(flags.keycode);
		else return this._performItemShopClick(flags.px, flags.py);
	}

	this.openItemShop = function (itemShopId) {
		shopId = itemShopId;
		type = 0;
		page = 0;
		selectItem = null;
		selectCount = 0;
		core.isShopVisited(itemShopId);
		shopInfo = flags.__shops__[shopId];
		if (shopInfo.choices == null) shopInfo.choices = core.clone(core.status.shops[shopId].choices);
		choices = shopInfo.choices;
		use = core.status.shops[shopId].use;
		if (use != 'exp') use = 'money';
		useText = use == 'money' ? '金币' : '经验';

		core.insertAction([{
				"type": "while",
				"condition": "true",
				"data": [
					{ "type": "function", "function": "function () { core.plugin._drawItemShop(); }" },
					{ "type": "wait" },
					{ "type": "function", "function": "function() { core.plugin._performItemShopAction(); }" }
				]
			},
			{
				"type": "function",
				"function": "function () { core.deleteCanvas('uievent'); core.ui.clearUIEventSelector(); }"
			}
		]);
	}

},
    "enemyLevel": function () {
	// 此插件将提供怪物手册中的怪物境界显示
	// 使用此插件需要先给每个怪物定义境界，方法如下：
	// 点击怪物的【配置表格】，找到“【怪物】相关的表格配置”，然后在【名称】仿照增加境界定义：
	/*
	 "level": {
	 	"_leaf": true,
	 	"_type": "textarea",
	 	"_string": true,
	 	"_data": "境界"
	 },
	 */
	// 然后保存刷新，可以看到怪物的属性定义中出现了【境界】。再开启本插件即可。

	// 是否开启本插件，默认禁用；将此改成 true 将启用本插件。
	var __enable = false;
	if (!__enable) return;

	// 这里定义每个境界的显示颜色；可以写'red', '#RRGGBB' 或者[r,g,b,a]四元数组
	var levelToColors = {
		"萌新一阶": "red",
		"萌新二阶": "#FF0000",
		"萌新三阶": [255, 0, 0, 1],
	};

	// 复写 _drawBook_drawName
	var originDrawBook = core.ui._drawBook_drawName;
	core.ui._drawBook_drawName = function (index, enemy, top, left, width) {
		// 如果没有境界，则直接调用原始代码绘制
		if (!enemy.level) return originDrawBook.call(core.ui, index, enemy, top, left, width);
		// 存在境界，则额外进行绘制
		core.setTextAlign('ui', 'center');
		if (enemy.specialText.length == 0) {
			core.fillText('ui', enemy.name, left + width / 2,
				top + 27, '#DDDDDD', this._buildFont(17, true));
			core.fillText('ui', enemy.level, left + width / 2,
				top + 51, core.arrayToRGBA(levelToColors[enemy.level] || '#DDDDDD'), this._buildFont(14, true));
		} else {
			core.fillText('ui', enemy.name, left + width / 2,
				top + 20, '#DDDDDD', this._buildFont(17, true), width);
			switch (enemy.specialText.length) {
			case 1:
				core.fillText('ui', enemy.specialText[0], left + width / 2,
					top + 38, core.arrayToRGBA((enemy.specialColor || [])[0] || '#FF6A6A'),
					this._buildFont(14, true), width);
				break;
			case 2:
				// Step 1: 计算字体
				var text = enemy.specialText[0] + "  " + enemy.specialText[1];
				core.setFontForMaxWidth('ui', text, width, this._buildFont(14, true));
				// Step 2: 计算总宽度
				var totalWidth = core.calWidth('ui', text);
				var leftWidth = core.calWidth('ui', enemy.specialText[0]);
				var rightWidth = core.calWidth('ui', enemy.specialText[1]);
				// Step 3: 绘制
				core.fillText('ui', enemy.specialText[0], left + (width + leftWidth - totalWidth) / 2,
					top + 38, core.arrayToRGBA((enemy.specialColor || [])[0] || '#FF6A6A'));
				core.fillText('ui', enemy.specialText[1], left + (width + totalWidth - rightWidth) / 2,
					top + 38, core.arrayToRGBA((enemy.specialColor || [])[1] || '#FF6A6A'));
				break;
			default:
				core.fillText('ui', '多属性...', left + width / 2,
					top + 38, '#FF6A6A', this._buildFont(14, true), width);
			}
			core.fillText('ui', enemy.level, left + width / 2,
				top + 56, core.arrayToRGBA(levelToColors[enemy.level] || '#DDDDDD'), this._buildFont(14, true));
		}
	}

	// 也可以复写其他的属性颜色如怪物攻防等，具体参见下面的例子的注释部分
	core.ui._drawBook_drawRow1 = function (index, enemy, top, left, width, position) {
		// 绘制第一行
		core.setTextAlign('ui', 'left');
		var b13 = this._buildFont(13, true),
			f13 = this._buildFont(13, false);
		var col1 = left,
			col2 = left + width * 9 / 25,
			col3 = left + width * 17 / 25;
		core.fillText('ui', '生命', col1, position, '#DDDDDD', f13);
		core.fillText('ui', core.formatBigNumber(enemy.hp || 0), col1 + 30, position, /*'red' */ null, b13);
		core.fillText('ui', '攻击', col2, position, null, f13);
		core.fillText('ui', core.formatBigNumber(enemy.atk || 0), col2 + 30, position, /* '#FF0000' */ null, b13);
		core.fillText('ui', '防御', col3, position, null, f13);
		core.fillText('ui', core.formatBigNumber(enemy.def || 0), col3 + 30, position, /* [255, 0, 0, 1] */ null, b13);
	}


},
    "dynamicHp": function () {
	// 此插件允许人物血量动态进行变化
	// 原作：Fux2（老黄鸡）

	// 是否开启本插件，默认禁用；将此改成 true 将启用本插件。
	var __enable = false;
	if (!__enable) return;

	var speed = 0.05; // 动态血量变化速度，越大越快。

	var _currentHp = null;
	var _lastStatus = null;
	var _check = function () {
		if (_lastStatus != core.status.hero) {
			_lastStatus = core.status.hero;
			_currentHp = core.status.hero.hp;
		}
	}

	core.registerAnimationFrame('dynamicHp', true, function () {
		_check();
		if (core.status.hero.hp != _currentHp) {
			var dis = (_currentHp - core.status.hero.hp) * speed;
			if (Math.abs(dis) < 2) {
				_currentHp = core.status.hero.hp;
			} else {
				_currentHp -= dis;
			}
			core.setStatusBarInnerHTML('hp', _currentHp);
		}
	});
},
    "multiHeros": function () {
	// 多角色插件
	// Step 1: 启用本插件
	// Step 2: 定义每个新的角色各项初始数据（参见下方注释）
	// Step 3: 在游戏中的任何地方都可以调用 `core.changeHero()` 进行切换；也可以 `core.changeHero(1)` 来切换到某个具体的角色上

	// 是否开启本插件，默认禁用；将此改成 true 将启用本插件。
	var __enable = false;
	if (!__enable) return;

	// 在这里定义全部的新角色属性
	// 请注意，在这里定义的内容不会多角色共用，在切换时会进行恢复。
	// 你也可以自行新增或删除，比如不共用金币则可以加上"money"的初始化，不共用道具则可以加上"items"的初始化，
	// 多角色共用hp的话则删除hp，等等。总之，不共用的属性都在这里进行定义就好。
	var hero1 = {
		"floorId": "MT0", // 该角色初始楼层ID；如果共用楼层可以注释此项
		"image": "brave.png", // 角色的行走图名称；此项必填不然会报错
		"name": "1号角色",
		"lv": 1,
		"hp": 10000, // 如果HP共用可注释此项
		"atk": 1000,
		"def": 1000,
		"mdef": 0,
		// "money": 0, // 如果要不共用金币则取消此项注释
		// "exp": 0, // 如果要不共用经验则取消此项注释
		"loc": { "x": 0, "y": 0, "direction": "up" }, // 该角色初始位置；如果共用位置可注释此项
		"items": {
			"tools": {}, // 如果共用消耗道具（含钥匙）则可注释此项
			// "constants": {}, // 如果不共用永久道具（如手册）可取消注释此项
			"equips": {}, // 如果共用在背包的装备可注释此项
		},
		"equipment": [], // 如果共用装备可注释此项；此项和上面的「共用在背包的装备」需要拥有相同状态，不然可能出现问题
	};
	// 也可以类似新增其他角色
	// 新增的角色，各项属性共用与不共用的选择必须和上面完全相同，否则可能出现问题。
	// var hero2 = { ...

	var heroCount = 2; // 包含默认角色在内总共多少个角色，该值需手动修改。

	this.initHeros = function () {
		core.setFlag("hero1", core.clone(hero1)); // 将属性值存到变量中
		// core.setFlag("hero2", core.clone(hero2)); // 更多的角色也存入变量中；每个定义的角色都需要新增一行

		// 检测是否存在装备
		if (hero1.equipment) {
			if (!hero1.items || !hero1.items.equips) {
				alert('多角色插件的equipment和道具中的equips必须拥有相同状态！');
			}
			// 存99号套装为全空
			var saveEquips = core.getFlag("saveEquips", []);
			saveEquips[99] = [];
			core.setFlag("saveEquips", saveEquips);
		} else {
			if (hero1.items && hero1.items.equips) {
				alert('多角色插件的equipment和道具中的equips必须拥有相同状态！');
			}
		}
	}

	// 在游戏开始注入initHeros
	var _startGame_setHard = core.events._startGame_setHard;
	core.events._startGame_setHard = function () {
		_startGame_setHard.call(core.events);
		core.initHeros();
	}

	// 切换角色
	// 可以使用 core.changeHero() 来切换到下一个角色
	// 也可以 core.changeHero(1) 来切换到某个角色（默认角色为0）
	this.changeHero = function (toHeroId) {
		var currHeroId = core.getFlag("heroId", 0); // 获得当前角色ID
		if (toHeroId == null) {
			toHeroId = (currHeroId + 1) % heroCount;
		}
		if (currHeroId == toHeroId) return;

		var saveList = Object.keys(hero1);

		// 保存当前内容
		var toSave = {};
		// 暂时干掉 drawTip 和 音效，避免切装时的提示
		var _drawTip = core.ui.drawTip;
		core.ui.drawTip = function () {};
		var _playSound = core.control.playSound;
		core.control.playSound = function () {}
		// 优先判定装备
		if (hero1.equipment) {
			core.items.quickSaveEquip(100 + currHeroId);
			core.items.quickLoadEquip(99);
		}

		saveList.forEach(function (name) {
			if (name == 'floorId') toSave[name] = core.status.floorId; // 楼层单独设置
			else if (name == 'items') {
				toSave.items = core.clone(core.status.hero.items);
				Object.keys(toSave.items).forEach(function (one) {
					if (!hero1.items[one]) delete toSave.items[one];
				});
			} else toSave[name] = core.clone(core.status.hero[name]); // 使用core.clone()来创建新对象
		});

		core.setFlag("hero" + currHeroId, toSave); // 将当前角色信息进行保存
		var data = core.getFlag("hero" + toHeroId); // 获得要切换的角色保存内容

		// 设置角色的属性值
		saveList.forEach(function (name) {
			if (name == "floorId");
			else if (name == "items") {
				Object.keys(core.status.hero.items).forEach(function (one) {
					if (data.items[one]) core.status.hero.items[one] = core.clone(data.items[one]);
				});
			} else {
				core.status.hero[name] = core.clone(data[name]);
			}
		});
		// 最后装上装备
		if (hero1.equipment) {
			core.items.quickLoadEquip(100 + toHeroId);
		}

		core.ui.drawTip = _drawTip;
		core.control.playSound = _playSound;

		// 插入事件：改变角色行走图并进行楼层切换
		var toFloorId = data.floorId || core.status.floorId;
		var toLoc = data.loc || core.status.hero.loc;
		core.insertAction([
			{ "type": "setHeroIcon", "name": data.image || "hero.png" }, // 改变行走图
			// 同层则用changePos，不同层则用changeFloor；这是为了避免共用楼层造成触发eachArrive
			toFloorId != core.status.floorId ? {
				"type": "changeFloor",
				"floorId": toFloorId,
				"loc": [toLoc.x, toLoc.y],
				"direction": toLoc.direction,
				"time": 0 // 可以在这里设置切换时间
			} : { "type": "changePos", "loc": [toLoc.x, toLoc.y], "direction": toLoc.direction }
			// 你还可以在这里执行其他事件，比如增加或取消跟随效果
		]);
		core.setFlag("heroId", toHeroId); // 保存切换到的角色ID
	}
},
    "custom": function () {
	////// 怪物手册属性显示界面时的点击操作 //////
	core.actions._clickBookDetail = function () {
		core.clearMap('data');
		core.playSound('确定'); // 改了这里的音效
		core.status.event.id = 'book';
	}

	////// 点击快捷商店按钮时的打开操作 //////
	core.events.openQuickShop = function (fromUserAction) {
		if (core.isReplaying()) return;

		// 天赋树
		if (core.hasItem("talentTree")) {
			// 防止诸如在打开商店以后再次打开商店的行为
			if (core.status.event.id != null) return;
			core.useItem("talentTree");
			return;
		} else if (core.hasItem("talentTree2")) {
			if (core.status.event.id != null) return;
			if (core.getFlag("Ch4_quickshop", 0) == 1) {
				core.openShop("Chap4Shop4", false);
			} else {
				core.useItem("talentTree2");
			}
			return;
		} else if (core.hasItem("talentTree3")) {
			if (core.status.event.id != null) return;
			core.useItem("talentTree3");
			return;
		}
		if (Object.keys(core.status.shops).length == 0) {
			core.playSound('操作失败');
			core.drawTip("目前没有快捷商店！");
			return;
		}

		// --- 如果只有一个商店，则直接打开之
		if (Object.keys(core.status.shops).length == 1) {
			var shopId = Object.keys(core.status.shops)[0];
			if (core.status.event.id != null) return;
			if (!core.canOpenShop(shopId)) {
				core.playSound('操作失败');
				core.drawTip("当前无法打开快捷商店！");
				return;
			}
			var message = core.canUseQuickShop(shopId);
			if (message != null) {
				core.playSound('操作失败');
				core.drawTip(message);
				return;
			}
			core.openShop(shopId, false);
			return;
		}

		if (!this._checkStatus('selectShop', fromUserAction)) return;
		core.ui._drawQuickShop();
	}

	// 反伤等怪物属性导致伤害随角色攻击力增长不单调时，二分临界可能会炸
	core.enemys._nextCriticals_useBinarySearch = function (enemy, info, number, x, y, floorId) {
		var hit_percentage = 100;
		if (this.hasSpecial(enemy.special, 29)) {
			hit_percentage = 100 - enemy.value29;
		}
		var mon_hp = info.mon_hp,
			hero_atk = core.status.hero.atk,
			mon_def = info.mon_def + (info.spe46_buff || 0) * 100 / hit_percentage,
			pre = info.damage;
		var list = [];
		var start_atk = core.getRealStatus('atk');
		if (info.__over__) {
			start_atk = mon_def + 1;
			list.push([info.__overAtk__, -info.damage]);
		}
		var calNext = function (currAtk, maxAtk) {
			var start = Math.floor(currAtk),
				end = Math.floor(maxAtk);
			if (start > end) return null;

			while (start < end) {
				var mid = Math.floor((start + end) / 2);
				if (mid - start > end - mid) mid--;
				var nextInfo = core.enemys.getDamageInfo(enemy, { "atk": Math.ceil(mid / core.getBuff('atk')) }, x, y, floorId);
				if (nextInfo == null || (typeof nextInfo == 'number')) return null;
				if (pre > nextInfo.damage) end = mid;
				else start = mid + 1;
			}
			var nextInfo = core.enemys.getDamageInfo(enemy, { "atk": Math.ceil(start / core.getBuff('atk')) }, x, y, floorId);
			return nextInfo == null || (typeof nextInfo == 'number') || nextInfo.damage >= pre ? null : [start, nextInfo.damage];
		}
		var currAtk = start_atk;
		while (true) {
			var next = calNext(currAtk + 1, mon_hp + mon_def);
			if (next == null) break;
			currAtk = next[0];
			pre = next[1];
			list.push([Math.ceil(currAtk / core.getBuff('atk')) - hero_atk, info.damage - pre]);
			if (pre <= 0 && !core.flags.enableNegativeDamage) break;
			if (list.length >= number) break;
		}
		if (list.length == 0) list.push([0, 0]);
		return list;
	}

	core.enemys._nextCriticals_useTurn = function (enemy, info, number, x, y, floorId) {
		var mon_hp = info.mon_hp,
			hero_atk = core.status.hero.atk,
			mon_def = info.mon_def,
			turn = info.turn;
		if (turn >= 1e6 || this.hasSpecial(enemy.special, 29)) { // 100w回合以上强制二分计算临界
			return this._nextCriticals_useBinarySearch(enemy, info, number, x, y, floorId);
		}
		var hit_percentage = 100; // 命中率
		if (this.hasSpecial(enemy.special, 29)) {
			hit_percentage = 100 - enemy.value29;
			mon_def += (info.spe46_buff || 0) * 100 / hit_percentage; // 将生命变化根据闪避率转化为等效的防御
		}
		var list = [],
			pre = null;
		var start_atk = hero_atk;
		if (info.__over__) {
			start_atk = mon_def + 1;
			list.push([info.__overAtk__, -info.damage]);
		}
		var dmg_lower_bound = 0;
		if (core.hasEquip("sword6")) dmg_lower_bound -= mon_hp * 0.1;
		var talent12_lv = core.getTalentLv(12);
		if (talent12_lv > 0) {
			dmg_lower_bound -= core.getRealStatusOrDefault(null, "def") * (10 + 10 * talent12_lv) * 0.1;
		}
		for (var t = turn - 1; t >= 1; t--) {
			var dmg_ratio = 1;
			if (core.hasEquip("sword5")) {
				dmg_ratio = 1.25;
			}
			if (this.hasSpecial(enemy.special, 1) && enemy.value28 < 0) { // 正确显示【迟钝】属性怪物的临界
				mon_hp += (-enemy.value28) * (core.getRealStatus('atk') - mon_def) * dmg_ratio;
				t -= enemy.value28;
			}
			var nextAtk = Math.ceil(mon_hp / t / dmg_ratio) + mon_def;
			if (this.hasSpecial(enemy.special, 29)) { // 正确显示【闪避】属性怪物的临界，这里随便一改就OK了，我tm怎么上次就没想到呢
				nextAtk = Math.ceil(mon_hp / t / dmg_ratio * 100 / (100 - enemy.value29)) + mon_def;
			}
			if (this.hasSpecial(enemy.special, 43) && t <= 10) { // 刚毅护盾
				break;
			}
			// 怪物回血
			nextAtk += (info.spe46_buff || 0);
			if (this.hasSpecial(enemy.special, 60)) { // 挫锐
				nextAtk = nextAtk * 100 / (100 - enemy.value60);
			}
			// 装备提升比例的计算临界
			nextAtk = Math.ceil(nextAtk / core.getBuff('atk'));
			if (nextAtk <= start_atk) break;
			if (nextAtk != pre) {
				var nextInfo = this.getDamageInfo(enemy, { "atk": nextAtk }, x, y, floorId);
				if (nextInfo == null || (typeof nextInfo == 'number')) break;
				list.push([nextAtk - hero_atk, Math.floor(info.damage - nextInfo.damage)]);
				if (nextInfo.damage <= dmg_lower_bound && !core.flags.enableNegativeDamage) break;
				pre = nextAtk;
			}
			if (list.length >= number)
				break;
		}
		if (list.length == 0) list.push([0, 0]);
		return list;
	}

	////// 接下来N个临界值和临界减伤计算 //////
	core.enemys.nextCriticals = function (enemy, number, x, y, floorId) {
		if (core.getFlag("rage_stack", 0) != 0) { // 暴戾/沉醉 时不计算临界
			return [
				[0, 0]
			];
		}

		if (typeof enemy == 'string') enemy = core.material.enemys[enemy];
		number = number || 1;

		var specialCriticals = this._nextCriticals_special(enemy, number, x, y, floorId);
		if (specialCriticals != null) return specialCriticals;

		var info = this.getDamageInfo(enemy, null, x, y, floorId);
		if (info == null) {
			var enemyInfo = this.getEnemyInfo(enemy, null, x, y, floorId);
			if (enemyInfo.def == null || enemyInfo.def + (enemyInfo.spe46_buff || 0) < core.getRealStatus('atk')) return [];
			// 再次尝试获得破防后伤害
			var need_atk;
			if (this.hasSpecial(enemy.special, 60)) { // 挫锐
				need_atk = (enemyInfo.def + (enemyInfo.spe46_buff || 0)) * 100 / (100 - enemy.value60);
			} else {
				need_atk = enemyInfo.def + (enemyInfo.spe46_buff || 0);
			}
			need_atk = Math.ceil(need_atk / core.getBuff('atk')) + 1;
			info = this.getDamageInfo(enemy, { atk: need_atk }, x, y, floorId);
			if (info == null || info.mon_def != enemyInfo.def) return [];
			info.__over__ = true;
			info.__overAtk__ = need_atk - core.status.hero.atk;
		}

		if (typeof info == 'number') return [
			[0, 0]
		];
		if (info.damage <= 0 && !core.flags.enableNegativeDamage) {
			return [
				[info.__overAtk__ || 0, 0]
			];
		}

		var dmg_lower_bound = 0;
		if (core.hasEquip("sword6")) dmg_lower_bound -= info.mon_hp * 0.08;
		if (core.getTalentLv(12) > 0) dmg_lower_bound -= core.status.hero.def * 20 * 0.1 * core.getTalentLv(12);
		if (typeof info == 'number' || (info.damage <= dmg_lower_bound && !core.flags.enableNegativeDamage)) {
			return [
				[0, 0]
			];
		}

		if (core.flags.useLoop) {
			if (core.status.hero.atk <= (main.criticalUseLoop || 1)) {
				return this._nextCriticals_useLoop(enemy, info, number, x, y, floorId);
			} else {
				return this._nextCriticals_useBinarySearch(enemy, info, number, x, y, floorId);
			}
		} else {
			return this._nextCriticals_useTurn(enemy, info, number, x, y, floorId);
		}
	}

	core.enemys._nextCriticals_special = function (enemy, number, x, y, floorId) {
		if (this.hasSpecial(enemy.special, 10) || this.hasSpecial(enemy.special, 3))
			return []; // 模仿or坚固临界
		if (this.hasSpecial(enemy.special, 63) && core.status.hero.hp <= enemy.hp) return []; // 残暴斩杀
		return null;
	}

	core.maps._automaticRoute_deepAdd = function (x, y, blocks) {
		// 判定每个可通行点的损耗值，越高越应该绕路
		var deepAdd = 1;
		var block = blocks[x + "," + y];
		if (block && !block.disable) {
			var id = block.event.id;
			// 绕过钥匙
			if (core.getFlag('keysAreBad', 0) > 0) {
				if (id == "yellowKey") deepAdd += 50;
				if (id == "blueKey") deepAdd += 150;
				if (id == "redKey") deepAdd += 500;
			}
			// 绕过亮灯
			if (id == "light") deepAdd += 100;
			// 绕过路障
			if (id.endsWith("Net") && !core.hasFlag(id.substring(0, id.length - 3))) deepAdd += 100;
			// 绕过血瓶和绿宝石
			if (core.hasFlag('__potionNoRouting__') && (id.endsWith("Potion") || id == 'greenGem')) deepAdd += 100;
			// 绕过传送点
			// if (block.block.event.trigger == 'changeFloor') deepAdd+=10;
		}
		// 绕过存在伤害的地方
		deepAdd += (core.status.checkBlock.damage[x + "," + y] || 0) * 100;
		// 绕过捕捉
		if (core.status.checkBlock.ambush[x + "," + y]) deepAdd += 1000;
		return deepAdd;
	}

},
    "moreLight": function () {
	var moveShadowCnt = 0;
	var img_no = 1;
	// 跟随主角移动的灯光 & 移动残影特效
	// 注意移动残影占用了图片编号 26-80
	core.control._drawHero_draw = function (direction, x, y, status, offset, frame) {
		var bgLight = core.getFlag('bgLight', []);
		var current_floor = core.floors[core.status.floorId];
		var lightRadius = core.getFlag('lightRadius', 0);
		var darkRatio;
		if (current_floor.color)
			darkRatio = core.floors[core.status.floorId].color[3]; // 从当前楼层的属性中获取黑暗度
		else
			darkRatio = 0; // 否则视为不具有黑暗度
		var heroLight = core.getFlag('heroLight', 0);
		if (!heroLight)
			darkRatio = 0; // 关闭灯光效果
		var count = 0;
		offset = offset || { x: 0, y: 0, offset: 0, px: 0, py: 0 };
		this._drawHero_getDrawObjs(direction, x, y, status, offset).forEach(function (block) {
			core.drawImage('hero', block.img, (block.heroIcon[block.status] + (frame || 0)) % 4 * block.width,
				block.heroIcon.loc * block.height, block.width, block.height,
				block.posx + (32 - block.width) / 2, block.posy + 32 - block.height, block.width, block.height);
			if (darkRatio != 0) { // 决定画灯光效果
				core.canvas.curtain.globalAlpha = 1;
				bgLight.push([block.posx + 16, block.posy + 32 - block.height + 16, lightRadius]);
				count += 1;
			}

			if (core.getFlag("moveShadow", 0) == 1) {
				// 残影生成间隔
				var period = core.getFlag("moveShadow_period", 5);
				moveShadowCnt++;
				if (moveShadowCnt % period == 0) {
					core.hideImage(25 + img_no, 0);
					core.showImage(25 + img_no, block.img, [(block.heroIcon[block.status] + (frame || 0)) % 4 * block.width,
							block.heroIcon.loc * block.height, block.width, block.height
						],
						[block.posx + (32 - block.width) / 2, block.posy + 32 - block.height, block.width, block.height], 0.5, 0);
					// 残影残留时间
					core.hideImage(25 + img_no, 250);
					img_no++;
				}
				moveShadowCnt %= 120;
				if (img_no > 55) img_no -= 55; // range in [1, 55]
			}
		});
		if (darkRatio != 0) {
			core.plugin.drawLight("curtain", darkRatio, bgLight, 0, current_floor.color);
			for (var i = 0; i < count; ++i) {
				bgLight.pop();
			}
		}
	};

	// 设置背景灯光，一般在楼层属性的eachArrive调用
	// 需要修改changingFloor，使得每次切换楼层时自动清空背景灯光、应用此处设置的黑暗度
	// 另外我还修改了afterChangeFloor，使得读档后也会从eachArrive中读取楼层的灯光信息
	this.setBgLight = function (lightList) {
		var res_list = [];
		if (!lightList) {
			core.setFlag('bgLight', []);
			return;
		}
		for (var i in lightList) {
			var pix_x = 32 * lightList[i][0] + 16;
			var pix_y = 32 * lightList[i][1] + 16;
			var radius = lightList[i][2];
			res_list.push([pix_x, pix_y, radius]);
		}
		core.setFlag('bgLight', res_list);
		core.drawMap();
		core.plugin.updateWeather();
	};
},
    "bookColor": function () {
	var titleToColors = {
		"喽啰": "#63FF63",
		"精英": "#406CC8",
		"领主": "#A063C0",
		"二等公民": "#A063C0",
		"BOSS": "#FF0000",
		"T-proto": "#FF00CC",
		"人造神明": "#FF00CC",
		"高级统领": "#FF00CC",
		"大魔王": "#FF00CC",
		"灾厄使者": "#FF7800",
		"械灵之王": "#FF7800",
		"第零公民": "#FF7800",
	};

	var origin_func = core.ui._drawBook_drawName;
	core.ui._drawBook_drawName = function (index, enemy, top, left, width) {
		if (!enemy.title || enemy.title == "普通") {
			return origin_func.call(this, index, enemy, top, left, width);
		}
		// 绘制第零列（名称和特殊属性）
		// 添加称号在这里绘制
		core.setTextAlign('ui', 'center');
		if (enemy.specialText.length == 0) {
			core.fillText('ui', enemy.name, left + width / 2,
				top + 27, '#DDDDDD', this._buildFont(17, true), width);
			core.fillText('ui', enemy.title, left + width / 2,
				top + 51, core.arrayToRGBA(titleToColors[enemy.title] || '#DDDDDD'), this._buildFont(14, true, false, "幼圆"));
		} else {
			core.fillText('ui', enemy.name, left + width / 2,
				top + 20, '#DDDDDD', this._buildFont(17, true), width);
			switch (enemy.specialText.length) {
			case 1:
				core.fillText('ui', enemy.specialText[0], left + width / 2,
					top + 38, core.arrayToRGBA((enemy.specialColor || [])[0] || '#FF6A6A'),
					this._buildFont(15, true), width);
				break;
			case 2:
				// Step 1: 计算字体
				var text = enemy.specialText[0] + "  " + enemy.specialText[1];
				core.setFontForMaxWidth('ui', text, width, this._buildFont(15, true));
				// Step 2: 计算总宽度
				var totalWidth = core.calWidth('ui', text);
				var leftWidth = core.calWidth('ui', enemy.specialText[0]);
				var rightWidth = core.calWidth('ui', enemy.specialText[1]);
				// Step 3: 绘制
				core.fillText('ui', enemy.specialText[0], left + (width + leftWidth - totalWidth) / 2,
					top + 38, core.arrayToRGBA((enemy.specialColor || [])[0] || '#FF6A6A'));
				core.fillText('ui', enemy.specialText[1], left + (width + totalWidth - rightWidth) / 2,
					top + 38, core.arrayToRGBA((enemy.specialColor || [])[1] || '#FF6A6A'));
				break;
			default:
				core.fillText('ui', '多属性...', left + width / 2,
					top + 38, '#FF6A6A', this._buildFont(15, true), width);
			}
			core.fillText('ui', enemy.title, left + width / 2,
				top + 56, core.arrayToRGBA(titleToColors[enemy.title] || '#DDDDDD'), this._buildFont(14, true, false, "幼圆"));
		}
	}

	// 怪物手册文字颜色
	core.ui._drawBook_drawRow1 = function (index, enemy, top, left, width, position) {
		// 绘制第一行
		core.setTextAlign('ui', 'left');
		var b13 = this._buildFont(13, true),
			f13 = this._buildFont(13, false);
		var col1 = left,
			col2 = left + width * 9 / 25,
			col3 = left + width * 17 / 25;
		core.fillText('ui', '生命', col1, position, '#00FF00', f13);
		core.fillText('ui', core.formatBigNumber(enemy.hp || 0), col1 + 30, position, null, b13);
		core.fillText('ui', '攻', col2, position, '#FF5555', f13);
		core.fillText('ui', core.formatBigNumber(enemy.atk || 0), col2 + 15, position, null, b13);
		core.fillText('ui', '防', col3, position, '#45D1E0', f13);
		core.fillText('ui', core.formatBigNumber(enemy.def || 0), col3 + 15, position, null, b13);
	};

	core.ui._drawBook_drawRow3 = function (index, enemy, top, left, width, position) {
		// 绘制第三行，获取回合数
		var floorId = core.floorIds[(core.status.event.ui || {}).index] || core.status.floorId;
		var locx = null,
			locy = null;
		if (enemy.locs) {
			locx = enemy.locs[0][0];
			locy = enemy.locs[0][1];
		}
		var damageInfo = core.getDamageInfo(enemy.id, null, locx, locy, floorId);
		var turn = (damageInfo || {}).turn || 0;
		if (turn)
			turn = core.formatBigNumber(turn);
		else
			turn = '???';

		core.setTextAlign('ui', 'left');
		var b13 = this._buildFont(13, true),
			f13 = this._buildFont(13, false);
		var col1 = left,
			col2 = left + width * 9 / 25,
			col3 = left + width * 17 / 25;
		core.fillText('ui', '临界', col1, position, '#DDDDDD', f13);
		core.fillText('ui', core.formatBigNumber(enemy.critical || 0), col1 + 30, position, null, b13);
		core.fillText('ui', '减伤', col2, position, null, f13);
		core.fillText('ui', core.formatBigNumber(enemy.criticalDamage || 0), col2 + 26, position, null, b13);
		core.fillText('ui', '回合', col3, position, null, f13);
		core.fillText('ui', turn, col3 + 30, position, null, b13);
	};

	core.ui._drawBookDetail_turnAndCriticals = function (enemy, floorId, texts) {
		if (core.getFlag("70F_boss_phase", 0) == 1 || core.getFlag("Chap3_boss", 0) == 1) return;
		if (core.getFlag("A21boss", 0) == 1) return;
		var locx = null,
			locy = null;
		if (enemy.locs) {
			locx = enemy.locs[0][0];
			locy = enemy.locs[0][1];
		}
		// 临界表
		var num = 8;
		var criticals = core.enemys.nextCriticals(enemy.id, num, locx, locy, floorId).map(function (v) {
			return core.formatBigNumber(v[0]) + ":" + core.formatBigNumber(v[1]);
		});
		while (criticals[0] == '0:0') criticals.shift();
		texts.push("\r[#FF6A6A]\\d临界表：\\d\r[]" + JSON.stringify(criticals));
	};
	core.ui._drawBookDetail_origin = function (enemy, texts) {
		if (core.getFlag("A21boss", 0) == 1) return; // 只改了这里
		// 怪物数值和原始值不一样时，在详细信息页显示原始数值
		var originEnemy = core.enemys._getCurrentEnemys_getEnemy(enemy.id);
		var content = [];
		if (enemy.locs != null && enemy.locs.length >= 0) {
			texts.push("\r[#FF6A6A]\\d怪物坐标：\\d\r[]" + JSON.stringify(enemy.locs));
		}
		["hp", "atk", "def", "point", "money", "exp"].forEach(function (one) {
			if (enemy[one] == null || originEnemy[one] == null) return;
			if (enemy[one] != originEnemy[one]) {
				content.push(core.getStatusLabel(one) + " " + originEnemy[one]);
			}
		});
		if (content.length > 0) {
			texts.push("\r[#FF6A6A]\\d原始数值：\\d\r[]" + content.join("；"));
		}
	}
},
    "overwrite": function () {
	// 复写，但对原函数改动很小
	// 如果样板大改，要特别注意这里的复写是否需要更新

	////// 楼层切换 //////
	var origin_func_changeFloor = core.events.changeFloor;
	core.events.changeFloor = function (floorId, stair, heroLoc, time, callback) {
		// 有临时护盾时，离开楼层时自动拾取
		var fromLoad = core.hasFlag('__fromLoad__'); // 是否是读档造成的切换
		if (core.getFlag("temp_mdef_pp", 0) > 0) {
			if (!fromLoad) {
				core.plugin.addTempMdefpp(-core.getFlag("temp_mdef_pp", 0));
				core.plugin.autoGetItem();
				//core.plugin.autoBattle();
			}
		}
		origin_func_changeFloor.call(this, floorId, stair, heroLoc, time, callback);
	}

	// 隐身怪半透明
	core.maps.initBlock = function (x, y, id, addInfo, eventFloor) {
		var disable = null;
		var opacity = null;
		var filter = null;
		if (eventFloor != null) {
			disable = this.isMapBlockDisabled(eventFloor.floorId, x, y);
			opacity = this._getBlockOpacityFromFlag(eventFloor.floorId, x, y);
			filter = this._getBlockFilterFromFlag(eventFloor.floorId, x, y);
		}
		var block = { 'x': x, 'y': y, 'id': id };
		if (disable != null) block.disable = disable;
		if (opacity != null) block.opacity = opacity;
		if (filter != null) block.filter = filter;

		if (id == 17) block.event = { "cls": "terrains", "id": "airwall", "cannotIn": ["up", "down", "left", "right"] };
		else if (id in this.blocksInfo) block.event = JSON.parse(JSON.stringify(this.blocksInfo[id]));
		else if (core.icons.getTilesetOffset(id)) block.event = { "cls": "tileset", "id": "X" + id };
		else block.event = { 'cls': 'terrains', 'id': 'none', 'noPass': false };

		if (block.event.noPass == null) {
			if (block.event.canPass == null) {
				block.event.noPass = block.event.cls != 'items';
			} else {
				block.event.noPass = !block.event.canPass;
			}
		}
		delete block.event.canPass;

		// 增加怪物的faceIds
		if (block.event.cls.indexOf("enemy") == 0) {
			var enemy = core.material.enemys[block.event.id];
			if (enemy && enemy.faceIds) {
				block.event.faceIds = enemy.faceIds;
			}
		}
		// 隐身
		var enemy = core.material.enemys[block.event.id];
		if (enemy && core.hasSpecial(enemy.special, 71)) {
			block.opacity = 0.5;
		}

		if (addInfo) this._addInfo(block);
		if (eventFloor) {
			this._addEvent(block, x, y, (eventFloor.events || {})[x + "," + y]);
			var changeFloor = (eventFloor.changeFloor || {})[x + "," + y];
			if (changeFloor) this._addEvent(block, x, y, { "trigger": "changeFloor", "data": changeFloor });
		}
		if (main.mode == 'editor') delete block.disable;
		return block;
	}

	// 支持关闭天气
	core.control.setWeather = function (type, level) {
		if (core.getFlag("no_weather", false)) type = null;
		// 非雨雪
		if (type == null || !this.weathers[type]) {
			core.deleteCanvas('weather')
			core.animateFrame.weather.type = null;
			core.animateFrame.weather.nodes = [];
			return;
		}
		if (level == null) level = core.animateFrame.weather.level;
		level = core.clamp(parseInt(level) || 5, 1, 10);
		// 当前天气：则忽略
		if (type == core.animateFrame.weather.type && level == core.animateFrame.weather.level) return;

		// 计算当前的宽高
		core.createCanvas('weather', 0, 0, core.__PIXELS__, core.__PIXELS__, 80);
		core.setOpacity('weather', 1.0);
		core.animateFrame.weather.type = type;
		core.animateFrame.weather.level = level;
		core.animateFrame.weather.nodes = [];
		try {
			core.doFunc(this.weathers[type].initFunc, this, level);
		} catch (e) {
			main.log(e);
			main.log("ERROR in weather[" + type + "]：已自动注销该项。");
			core.unregisterWeather(type);
		}
	}

	utils.prototype.formatBigNumber = function (x, digits) {
		if (digits === true) digits = 5; // 兼容旧版onMap参数
		if (!digits || digits < 5) digits = 6; // 连同负号、小数点和后缀字母在内的总位数，至少需为5，默认为6
		x = Math.trunc(parseFloat(x)); // 尝试识别为小数，然后向0取整
		if (x == null || !Number.isFinite(x)) return '???'; // 无法识别的数或正负无穷大，显示'???'
		var units = [ // 单位及其后缀字母，可自定义，如改成千进制下的K、M、G、T、P
			{ "val": 1e4, "suffix": "w" },
			{ "val": 1e8, "suffix": "e" },
			{ "val": 1e12, "suffix": "z" },
			{ "val": 1e16, "suffix": "j" },
			{ "val": 1e20, "suffix": "g" },
		];
		if (Math.abs(x) > 1e20 * Math.pow(10, digits - 2))
			return x.toExponential(0); // 绝对值过大以致于失去精度的数，直接使用科学记数法，系数只保留整数
		var sign = x < 0 ? '-' : '';
		// 只改了这里
		//if (sign) --digits; // 符号位单独处理，负号要占一位
		x = Math.abs(x);

		if (x < Math.pow(10, digits)) return sign + x;

		for (var i = 0; i < units.length; ++i) {
			var each = units[i];
			var u = (x / each.val).toFixed(digits).substring(0, digits);
			if (u.indexOf('.') < 0) continue;
			u = u.substring(0, u[u.length - 2] == '.' ? u.length - 2 : u.length - 1);
			return sign + u + each.suffix;
		}
		return sign + x.toExponential(0);
	}

	// 定点怪显相关
	enemys.prototype._getCurrentEnemys_addEnemy = function (enemyId, enemys, used, x, y, floorId) {
		var enemy = this._getCurrentEnemys_getEnemy(enemyId);
		if (enemy == null) return;

		var id = enemy.id;

		var enemyInfo = this.getEnemyInfo(enemy, null, null, null, floorId);
		var locEnemyInfo = this.getEnemyInfo(enemy, null, x, y, floorId);

		// ***只改了这里，把自定义的光环加进来***
		if (!core.flags.enableEnemyPoint ||
			(locEnemyInfo.atk == enemyInfo.atk && locEnemyInfo.def == enemyInfo.def && locEnemyInfo.hp == enemyInfo.hp &&
				locEnemyInfo.spe28_buff == 0 && locEnemyInfo.spe32_buff == 0 && locEnemyInfo.spe39_buff == 0 && locEnemyInfo.spe46_buff == 0 && locEnemyInfo.spe65_buff == 0)) {
			x = null;
			y = null;
		} else {
			// 检查enemys里面是否使用了存在的内容
			for (var i = 0; i < enemys.length; ++i) {
				var one = enemys[i];
				if (id == one.id && one.locs != null &&
					locEnemyInfo.atk == one.atk && locEnemyInfo.def == one.def && locEnemyInfo.hp == one.hp &&
					locEnemyInfo.spe28_buff == one.spe28_buff && locEnemyInfo.spe32_buff == one.spe32_buff && locEnemyInfo.spe39_buff == one.spe39_buff && locEnemyInfo.spe46_buff == one.spe46_buff && locEnemyInfo.spe65_buff == one.spe65_buff) {
					one.locs.push([x, y]);
					return;
				}
			}
			enemyInfo = locEnemyInfo;
		}
		var id = enemy.id + ":" + x + ":" + y;
		if (used[id]) return;
		used[id] = true;

		var specialText = core.enemys.getSpecialText(enemy);
		var specialColor = core.enemys.getSpecialColor(enemy);

		var critical = this.nextCriticals(enemy, 1, x, y, floorId);
		if (critical.length > 0) critical = critical[0];

		var e = core.clone(enemy);
		for (var v in enemyInfo) {
			e[v] = enemyInfo[v];
		}
		if (x != null && y != null) {
			e.locs = [
				[x, y]
			];
		}
		e.name = core.getEnemyValue(enemy, 'name', x, y, floorId);
		e.specialText = specialText;
		e.specialColor = specialColor;
		e.damage = this.getDamage(enemy, x, y, floorId);
		e.critical = critical[0];
		e.criticalDamage = critical[1];
		e.defDamage = this._getCurrentEnemys_addEnemy_defDamage(enemy, x, y, floorId);
		enemys.push(e);
	}

	// 万能绿钥匙
	events.prototype._openDoor_check = function (block, x, y, needKey) {
		var clearAndReturn = function () {
			core.clearContinueAutomaticRoute();
			return false;
		}

		if (block == null || block.event == null) return clearAndReturn();
		var id = block.event.id;

		// 是否存在门或暗墙
		if (core.material.icons.animates[id] == null && core.material.icons.npc48[id] == null) {
			return clearAndReturn();
		}

		if (id == 'steelDoor' && core.flags.steelDoorWithoutKey)
			needKey = false;
		// 只改了这里
		if ((id == 'greenDoor' || id == 'greenDoor2') && core.hasItem("I_superGreenKey"))
			needKey = false;
		var doorInfo = block.event.doorInfo;
		if (doorInfo == null) return clearAndReturn();
		// Check all keys
		var keyInfo = doorInfo.keys || {};
		if (needKey) {
			for (var keyName in keyInfo) {
				var keyValue = keyInfo[keyName];
				if (keyName.endsWith(':o')) keyName = keyName.substring(0, keyName.length - 2);

				// --- 如果是一个不存在的道具，则直接认为无法开启
				if (!core.material.items[keyName]) {
					core.stopSound();
					core.playSound('操作失败');
					core.drawTip("无法开启此门");
					return clearAndReturn();
				}
				if (core.itemCount(keyName) < keyValue) {
					core.stopSound();
					core.playSound('操作失败');
					core.drawTip("你的" + ((core.material.items[keyName] || {}).name || "钥匙") + "不足！", null, true);
					return false;
				}
			}
			if (!core.status.event.id) core.autosave(true);
			for (var keyName in keyInfo) {
				if (!keyName.endsWith(':o')) core.removeItem(keyName, keyInfo[keyName]);
			}
		}
		core.playSound(doorInfo.openSound);
		return true;
	}

	//////// 战斗 //////
	core.events.battle = function (id, x, y, force, callback) {
		core.saveAndStopAutomaticRoute();
		id = id || core.getBlockId(x, y);
		if (!id) return core.clearContinueAutomaticRoute(callback);
		// 非强制战斗
		if (!core.enemys.canBattle(id, x, y) && !force && !core.status.event.id) {
			core.stopSound();
			core.playSound('操作失败');
			core.drawTip("你打不过此怪物！", id);
			return core.clearContinueAutomaticRoute(callback);
		}
		// 目前在刚刚退出隐身的一瞬间（并且与隐身怪强制战斗前），或者自动清怪时，会禁止自动存档
		var need_save = !core.status.event.id && !core.getFlag("disable_autosave", 0) && !core.getFlag("disable_autosave2", 0);
		var enemy = core.material.enemys[id];
		var special = enemy.special;
		if (core.enemys.hasSpecial(special, 71) && core.getFlag("invisible", false)) { // 穿隐身怪不存档
			need_save = false;
		}
		// 自动存档
		if (need_save) core.autosave(true);
		// 战前事件
		if (!this.beforeBattle(id, x, y))
			return core.clearContinueAutomaticRoute(callback);
		// 战后事件
		this.afterBattle(id, x, y);
		core.setFlag("disable_autosave", 0);
		if (callback) callback();
	}


	////// 某个点是否不可通行 //////
	core.maps.noPass = function (x, y, floorId) {
		var block = core.getBlock(x, y, floorId);
		if (block == null) return false;
		var id = block.event.id,
			enemy = core.material.enemys[id];
		// 隐身状态下可穿越隐身敌人
		if (enemy && core.hasSpecial(enemy.special, 71) && core.getFlag("invisible", 0) == 1) {
			return false;
		}
		return block.event.noPass;
	}

	core.control._moveAction_moving = function (callback) {
		core.setHeroMoveInterval(function () {
			core.setHeroLoc('x', core.nextX(), true);
			core.setHeroLoc('y', core.nextY(), true);

			var direction = core.getHeroLoc('direction');
			// 改了这里，用于第三章攻盾线鸽化的方向判定
			// 这里很坑，因为 _moveAction_popAutomaticRoute 会把主角的朝向设为下一步的方向
			// 所以在后面的 moveOneStep 里面，调用 getHeroLoc 获取到的是下一步的方向
			// 因此在这里用 flag 记录这一步的方向，供 moveOneStep 使用
			core.setFlag("last_moved_direction", direction);
			core.control._moveAction_popAutomaticRoute();
			core.status.route.push(direction);

			core.moveOneStep();
			core.checkRouteFolding();
			if (callback) callback();
		});
	}
	core.control._moveAction_popAutomaticRoute = function () {
		var automaticRoute = core.status.automaticRoute;
		// 检查自动寻路是否被弹出
		if (automaticRoute.autoHeroMove) {
			automaticRoute.movedStep++;
			automaticRoute.lastDirection = core.getHeroLoc('direction');
			if (automaticRoute.destStep == automaticRoute.movedStep) {
				if (automaticRoute.autoStep == automaticRoute.autoStepRoutes.length) {
					core.clearContinueAutomaticRoute();
					core.stopAutomaticRoute();
				} else {
					automaticRoute.movedStep = 0;
					automaticRoute.destStep = automaticRoute.autoStepRoutes[automaticRoute.autoStep].step;
					// 改了这里，为了禁止特殊战使用自动寻路行动后立即转身
					if (core.getFlag("70F_boss_phase", 0) != 1) {
						core.setHeroLoc('direction', automaticRoute.autoStepRoutes[automaticRoute.autoStep].direction);
					}
					core.status.automaticRoute.autoStep++;
				}
			}
		}
	}

	// 下面几个 setBlock 只改了可通过 setBlock_disable_refresh 配置是否立即重绘
	// 在大量setBlock时（比如本塔的musicRoom），暂时禁止重绘可大幅提升效率
	////// 改变图块 //////
	core.maps.setBlock = function (number, x, y, floorId) {
		floorId = floorId || core.status.floorId;
		if (!floorId || number == null || x == null || y == null) return;
		if (x < 0 || x >= core.floors[floorId].width || y < 0 || y >= core.floors[floorId].height) return;
		if (typeof number == 'string') {
			if (/^\d+$/.test(number)) number = parseInt(number);
			else number = core.getNumberById(number);
		}

		var block = this.initBlock(x, y, number, true, core.floors[floorId]);
		if (block.id == 0 && !block.event.trigger) {
			// 转变图块为0且该点无事件，视为删除
			core.removeBlock(x, y, floorId);
			return;
		}
		var originBlock = core.getBlock(x, y, floorId, true);
		var originEvent = originBlock == null ? null : originBlock.event;
		if (originBlock == null) {
			core.status.maps[floorId].blocks.push(block);
			if (core.status.mapBlockObjs[floorId])
				core.status.mapBlockObjs[floorId][block.x + "," + block.y] = block;
			core.setMapBlockDisabled(floorId, block.x, block.y, false);
			delete block.disable;
		} else {
			originBlock.id = number;
			originBlock.event = block.event;
			block = originBlock;
		}
		this._updateMapArray(floorId, x, y);
		if (floorId == core.status.floorId && !core.getFlag("setBlock_disable_refresh", false)) {
			// 有任何一个是autotile直接重绘地图
			if ((originEvent != null && originEvent.cls == 'autotile') || block.event.cls == 'autotile') {
				core.redrawMap();
			} else {
				if (originEvent != null) {
					this._removeBlockFromMap(floorId, { x: x, y: y, event: originEvent });
				}
				if (!block.disable) {
					core.drawBlock(block);
					core.addGlobalAnimate(block);
					core.updateStatusBar();
				}
			}
		}
	}
	////// 改变前景背景的图块 //////
	core.maps.setBgFgBlock = function (name, number, x, y, floorId) {
		floorId = floorId || core.status.floorId;
		if (!floorId || number == null || x == null || y == null) return;
		if (x < 0 || x >= core.floors[floorId].width || y < 0 || y >= core.floors[floorId].height) return;
		if (!name || (!name.startsWith('bg') && !name.startsWith('fg'))) return;

		if (typeof number == 'string') {
			if (/^\d+$/.test(number)) number = parseInt(number);
			else number = core.getNumberById(number);
		}

		var values = core.getFlag('__' + name + 'v__', {});
		values[floorId] = (values[floorId] || []).filter(function (one) { return one[0] != x || one[1] != y });
		values[floorId].push([x, y, number]);
		core.setFlag('__' + name + 'v__', values);

		core.status[name + "maps"][floorId] = null;

		if (floorId == core.status.floorId && !core.getFlag("setBlock_disable_refresh", false)) {
			core.clearMap(name);
			if (name.startsWith('bg')) core.drawBg(floorId);
			else core.drawFg(floorId);
		}
	}
	////// 设置前景/背景地图的显示状态，由 hideBgFgMap 触发 //////
	maps.prototype._triggerBgFgMap = function (type, name, loc, floorId, callback) {
		if (type != 'show') type = 'hide';
		if (!name || (!name.startsWith('bg') && !name.startsWith('fg'))) return;
		if (typeof loc[0] == 'number' && typeof loc[1] == 'number')
			loc = [loc];
		floorId = floorId || core.status.floorId;
		if (!floorId) return;

		if (loc.length == 0) return;
		var disabled = core.getFlag('__' + name + 'd__', {});
		disabled[floorId] = disabled[floorId] || [];
		loc.forEach(function (t) {
			if (type == 'hide') {
				disabled[floorId].push([t[0], t[1]]);
			} else {
				disabled[floorId] = disabled[floorId].filter(function (one) { return one[0] != t[0] || one[1] != t[1] });
			}
		})
		core.setFlag('__' + name + 'd__', disabled);

		core.status[name + "maps"][floorId] = null;

		if (floorId == core.status.floorId && !core.getFlag("setBlock_disable_refresh", false)) {
			core.drawMap(); // redrawMap 不会在清除 block 之后刷新显示，我觉得不好用
		}
		if (callback) callback();
	}

	// ctrl跳过动画
	this.my_keyDownCtrl = function () {
		if (core.status.event.id == 'action' && core.status.event.data.type == 'animate') {
			var obj = core.status.animateObjs[0];
			if (obj) {
				core.maps.stopAnimate(obj.id, true);
			}
			return true;
		}
		return core.actions._sys_keyDownCtrl();
	};
	core.registerAction('keyDownCtrl', '_sys_keyDownCtrl', this.my_keyDownCtrl, 0);

	// 长按跳过动画
	this.my_longClick_lockControl = function () {
		if (core.status.event.id == 'action' && core.status.event.data.type == 'animate') {
			var obj = core.status.animateObjs[0];
			if (obj) {
				core.maps.stopAnimate(obj.id, true);
			}
			return true;
		}
		return core.actions._sys_longClick_lockControl();
	}
	core.registerAction('longClick', '_sys_longClick_lockControl', this.my_longClick_lockControl, 50);


	////// 获得某个物品 //////
	var origin_func_getItem = core.events.getItem;
	core.events.getItem = function (id, num, x, y, isGentleClick, callback) {
		// 只改了这里
		if (core.getFlag("keysAreBad", 0) > 0 && isGentleClick) {
			if (id == 'yellowKey' || id == 'blueKey' || id == 'redKey' ||
				id == 'yellowKey3' || id == 'blueKey3' || id == 'redKey3') {
				core.autosave(true);
			}
		}
		origin_func_getItem.call(this, id, num, x, y, isGentleClick, callback);
	}

	var origin_func = core.events._changeFloor_beforeChange;
	core.events._changeFloor_beforeChange = function (info, callback) {
		if (core.getFlag("disable_changefloor_sound", 0) == 0) { core.playSound('floor.mp3'); }
		origin_func.call(this, info, callback);
	}

	core.control._updateStatusBar_setToolboxIcon = function () {
		if (core.isReplaying()) {
			core.statusBar.image.book.src = core.status.replay.pausing ? core.statusBar.icons.play.src : core.statusBar.icons.pause.src;
			core.statusBar.image.book.style.opacity = 1;
			core.statusBar.image.fly.src = core.statusBar.icons.stop.src;
			core.statusBar.image.fly.style.opacity = 1;
			core.statusBar.image.toolbox.src = core.statusBar.icons.rewind.src;
			core.statusBar.image.keyboard.src = core.statusBar.icons.book.src;
			core.statusBar.image.shop.src = core.statusBar.icons.floor.src;
			core.statusBar.image.save.src = core.statusBar.icons.speedDown.src;
			core.statusBar.image.save.style.opacity = 1;
			core.statusBar.image.load.src = core.statusBar.icons.speedUp.src;
			core.statusBar.image.settings.src = core.statusBar.icons.save.src;
		} else {
			core.statusBar.image.book.src = core.statusBar.icons.book.src;
			core.statusBar.image.book.style.opacity = core.hasItem('book') ? 1 : 0.3;
			if (!core.flags.equipboxButton) {
				core.statusBar.image.fly.src = core.statusBar.icons.fly.src;
				// 改了这里
				core.statusBar.image.fly.style.opacity = 1;
				if (!core.canUseItem("fly")) {
					core.statusBar.image.fly.style.opacity = 0.3;
				}
				if (!core.hasItem("fly")) {
					core.statusBar.image.fly.style.opacity = 0;
				}
			} else {
				core.statusBar.image.fly.src = core.statusBar.icons.equipbox.src;
				core.statusBar.image.fly.style.opacity = 1;
			}
			core.statusBar.image.toolbox.src = core.statusBar.icons.toolbox.src;
			core.statusBar.image.keyboard.src = core.statusBar.icons.keyboard.src;
			// 改了这里
			if (core.hasItem("talentTree") && core.getFlag("talentTree_unlocked", false)) {
				core.statusBar.image.shop.src = core.statusBar.icons.talentTree.src;
			} else if (core.hasItem("talentTree2") && core.getFlag("Ch4_quickshop", 0) == 0) {
				core.statusBar.image.shop.src = core.statusBar.icons.talentTree2.src;
			} else if (core.hasItem("talentTree3")) {
				core.statusBar.image.shop.src = core.statusBar.icons.talentTree3.src;
			} else {
				core.statusBar.image.shop.src = core.statusBar.icons.shop.src;
			}
			core.statusBar.image.save.src = core.statusBar.icons.save.src;
			core.statusBar.image.save.style.opacity = core.hasFlag('__forbidSave__') ? 0.3 : 1;
			core.statusBar.image.load.src = core.statusBar.icons.load.src;
			core.statusBar.image.settings.src = core.statusBar.icons.settings.src;
		}
	}

	// 特殊战自动存档
	var origin_func_moveHero = core.control.moveHero;
	core.control.moveHero = function (direction, callback) {
		// 如果正在移动，直接return
		if (core.status.heroMoving != 0) return;
		// 在主角移动之前自动存档
		if (!core.isReplaying() && core.getFlag("70F_boss_phase", 0) == 1)
			core.autosave(false);

		origin_func_moveHero.call(this, direction, callback);
	}

	// 可以通过设置 flag:drawStat_start 控制数据统计从哪层开始计算
	// （这玩意除了我的某个测试员真的还有人看吗？）
	var origin_func_drawStatistics = core.ui._drawStatistics;
	core.ui._drawStatistics = function () {
		var startId = core.getFlag("drawStat_start", "undef");
		if (startId != "undef") {
			var index = core.floorIds.indexOf(startId);
			if (index != -1) {
				origin_func_drawStatistics.call(this, core.floorIds.slice(index));
				return;
			}
		}
		origin_func_drawStatistics.call(this);
	}

	core.ui._drawStatistics_buildObj = function () {
		// 数据统计要统计如下方面：
		// 1. 当前全塔剩余下的怪物数量，总金币数，总经验数，总加点数
		// 2. 当前全塔剩余的黄蓝红铁门数量，和对应的钥匙数量
		// 3. 当前全塔剩余的三种宝石数量，血瓶数量，装备数量；总共增加的攻防生命值
		// 4. 当前层的上述信息
		// 5. 当前已走的步数；瞬间移动的步数，瞬间移动的次数（和少走的步数）；游戏时长
		// 6. 当前已恢复的生命值；当前总伤害、战斗伤害、阻激夹域血网伤害、中毒伤害。
		var ori = this.uidata.drawStatistics();
		var ids = ori.filter(function (e) {
			return e.endsWith("Door") || core.material.items[e];
		});
		var cnt = {},
			cls = {},
			ext = {};
		ids.forEach(function (e) {
			if (e.endsWith("Door")) cls[e] = "doors";
			else if (e.endsWith("Key3")) cls[e] = "tools"; // 只改了这里，把钥匙串放在钥匙里面
			else cls[e] = core.material.items[e].cls;
			cnt[e] = 0;
		})
		var order = ["doors", "items", "tools", "constants", "equips"];
		ids.sort(function (a, b) {
			var c1 = order.indexOf(cls[a]),
				c2 = order.indexOf(cls[b]);
			if (c1 == c2) return ori.indexOf(a) - ori.indexOf(b);
			return c1 - c2;
		});
		var obj = {
			'monster': {
				'count': 0,
				'money': 0,
				'exp': 0,
				'point': 0,
			},
			'count': cnt,
			'add': {
				'hp': 0,
				'atk': 0,
				'def': 0,
				'mdef': 0
			}
		};
		return { ids: ids, cls: cls, ext: ext, total: core.clone(obj), current: core.clone(obj), marked: core.clone(obj) };
	}
},
    "checkEnemy": function () {
	// 漏怪检测
	// 调用样例：core.plugin.checkEnemy("MT641","MT6700417");
	// 会检查这两个楼层中间的所有楼层
	this.checkEnemy = function (fromId, toId) {
		var remainEnemyInfo = [];
		var cnt = 0;
		var fromIndex = core.floorIds.indexOf(fromId),
			toIndex = core.floorIds.indexOf(toId);
		if (toIndex < 0) toIndex = core.floorIds.length - 1;
		for (var i = fromIndex; i <= toIndex; ++i) {
			var floorId = core.floorIds[i];
			if (floorId.startsWith("Dungeon")) continue; // 副本不计入漏怪检测
			if (core.enemys.getCurrentEnemys(floorId).length > 0) {
				// 遍历每个图块
				core.status.maps[floorId].blocks.forEach(function (block) {
					if (core.isset(block.event) && !block.disable) {
						// 获得该图块的ID
						var id = block.event.id,
							enemy = core.material.enemys[id];
						// 检查是怪物，且非友军
						if (core.isset(enemy) && !core.hasSpecial(id, 87)) {
							cnt++;
							if (enemy.name in remainEnemyInfo)
								remainEnemyInfo[enemy.name]++;
							else
								remainEnemyInfo[enemy.name] = 1;
						}
					}
				});
			}
		}
		core.setFlag("remainEnemyInfo", this.printEnemyInfo(remainEnemyInfo));
		core.setFlag("remainEnemyCount", cnt);
	};

	this.printEnemyInfo = function (info) {
		var print = "";
		for (var x in info) {
			var y = info[x];
			print += "\n" + x + " * " + y;
		}
		return print;
	};

	this.checkKey = function (fromId, toId) {
		var fromIndex = core.floorIds.indexOf(fromId),
			toIndex = core.floorIds.indexOf(toId);
		var key_id_list = ["yellowKey", "blueKey", "redKey", "yellowKey3", "blueKey3", "redKey3"];
		var ret = true;
		if (toIndex < 0) toIndex = core.floorIds.length - 1;
		for (var i = fromIndex; i <= toIndex; ++i) {
			var floorId = core.floorIds[i];
			var useless = core.enemys.getCurrentEnemys(floorId); // 如果不调用 getCurrentEnemys，下面的 blocks 可能为空
			// 遍历每个图块
			core.status.maps[floorId].blocks.forEach(function (block) {
				if (core.isset(block.event) && !block.disable) {
					// 获得该图块的ID
					var id = block.event.id;
					// 检查是不是钥匙
					if (key_id_list.indexOf(id) != -1) {
						ret = false;
					}
				}
			});
		}
		return ret;
	}

	this.checkGem = function (fromId, toId) {
		var fromIndex = core.floorIds.indexOf(fromId),
			toIndex = core.floorIds.indexOf(toId);
		var ret = true;
		if (toIndex < 0) toIndex = core.floorIds.length - 1;
		for (var i = fromIndex; i <= toIndex; ++i) {
			var floorId = core.floorIds[i];
			var useless = core.enemys.getCurrentEnemys(floorId); // 如果不调用 getCurrentEnemys，下面的 blocks 可能为空
			// 遍历每个图块
			core.status.maps[floorId].blocks.forEach(function (block) {
				if (core.isset(block.event) && !block.disable) {
					// 获得该图块的ID
					var id = block.event.id;
					// 检查是不是宝石
					if (id.indexOf("redGem") != -1 || id.indexOf("blueGem") != -1 || id.indexOf("greenGem") != -1) {
						ret = false;
					}
				}
			});
		}
		return ret;
	}
},
    "itemCategory2": function () {
	// 来自于光之塔，接了v2.8样板之后不用这个了

	// 是否开启本插件，默认禁用；将此改成 true 将启用本插件。
	var __enable = false;
	if (!__enable) return;

	// 在这里定义所有的道具分类类型，一行一个
	var categories = [
		"消耗道具",
		"主动技能",
		"永久道具",
	];
	// 当前选中的道具类别
	var currentCategory = null;

	core.ui._drawToolbox_getInfo = function (index) {
		// 设定eventdata
		if (!core.status.event.data || core.status.event.data.toolsPage == null)
			core.status.event.data = { "toolsPage": 1, "activeSkillPage": 1, "constantsPage": 1, "selectId": null }
		// 获取物品列表
		var tools = core.getToolboxItems('消耗道具'),
			active_skills = core.getToolboxItems('主动技能'),
			constants = core.getToolboxItems('永久道具');
		// 处理页数
		var toolsPage = core.status.event.data.toolsPage;
		var activeSkillPage = core.status.event.data.activeSkillPage;
		var constantsPage = core.status.event.data.constantsPage;
		var toolsTotalPage = Math.ceil(tools.length / this.LAST);
		var activeTotalPage = Math.ceil(active_skills.length / this.LAST);
		var constantsTotalPage = Math.ceil(constants.length / this.LAST);
		// 处理index
		if (index == null) {
			if (tools.length > 0) index = 0;
			else if (active_skills.length > 0) index = this.LAST;
			else if (constants.length > 0) index = 2 * this.LAST;
			else index = 0;
		}
		core.status.event.selection = index;
		// 确认选择对象
		var select, selectId;
		if (index < this.LAST) {
			select = index + (toolsPage - 1) * this.LAST;
			if (select >= tools.length) select = Math.max(0, tools.length - 1);
			selectId = tools[select];
		} else if (index < 2 * this.LAST) {
			select = index % this.LAST + (activeSkillPage - 1) * this.LAST;
			if (select >= active_skills.length) select = Math.max(0, active_skills.length - 1);
			selectId = active_skills[select];
		} else {
			select = index % this.LAST + (constantsPage - 1) * this.LAST;
			if (select >= constants.length) select = Math.max(0, constants.length - 1);
			selectId = constants[select];
		}
		if (!core.hasItem(selectId)) selectId = null;
		core.status.event.data.selectId = selectId;
		return {
			index: index,
			tools: tools,
			active_skills: active_skills,
			constants: constants,
			toolsPage: toolsPage,
			activeSkillPage: activeSkillPage,
			constantsPage: constantsPage,
			toolsTotalPage: toolsTotalPage,
			activeTotalPage: activeTotalPage,
			constantsTotalPage: constantsTotalPage,
			selectId: selectId
		};
	}
	// 重写 core.ui._drawToolbox 以绘制分类类别
	var _drawToolbox = core.ui._drawToolbox;
	core.ui._drawToolbox = function (index) {
		var info = this._drawToolbox_getInfo(index);
		this._drawToolbox_drawBackground();

		// 绘制线
		core.setAlpha('ui', 1);
		core.setStrokeStyle('ui', '#DDDDDD');
		core.canvas.ui.lineWidth = 2;
		core.canvas.ui.strokeWidth = 2;
		core.setTextAlign('ui', 'right');
		var line1 = this.PIXEL - 306;
		this._drawToolbox_drawLine(line1, "消耗道具");
		var line2 = this.PIXEL - 180;
		this._drawToolbox_drawLine(line2, "主动技能");
		var line3 = this.PIXEL - 116;
		this._drawToolbox_drawLine(line3, "永久道具");

		this._drawToolbox_drawDescription(info, line1);

		this._drawToolbox_drawContent(info, line1, info.tools, info.toolsPage, true);
		this.drawPagination(info.toolsPage, info.toolsTotalPage, this.LAST - 5);
		this._drawToolbox_drawContent(info, line2, info.active_skills, info.activeSkillPage);
		this.drawPagination(info.activeSkillPage, info.activeTotalPage);
		this._drawToolbox_drawContent(info, line3, info.constants, info.constantsPage);
		this.drawPagination(info.constantsPage, info.constantsTotalPage);

		core.setTextAlign('ui', 'center');
		core.fillText('ui', '[装备栏]', this.PIXEL - 46, 25, '#DDDDDD', this._buildFont(15, true));
		core.fillText('ui', '返回游戏', this.PIXEL - 46, this.PIXEL - 13);
	}

	// 获得所有应该在道具栏显示的某个类型道具
	core.ui.getToolboxItems = function (category) {
		var cls, filter_by_category = true;
		if (category == "被动技能") {
			category = "永久道具";
		}
		if (category == "消耗道具") {
			cls = "tools";
		} else if (category == "主动技能" || category == "被动技能" || category == "永久道具") {
			cls = "constants";
		} else {
			cls = category;
			filter_by_category = false;
		}
		return Object.keys(core.status.hero.items[cls] || {})
			.filter(function (id) {
				if (category == "永久道具") {
					return !core.material.items[id].hideInToolbox &&
						(!filter_by_category || core.material.items[id].category == "永久道具" || core.material.items[id].category == "被动技能");
				} else {
					return !core.material.items[id].hideInToolbox &&
						(!filter_by_category || core.material.items[id].category == category);
				}
			}).sort();
	}

	////// 工具栏界面时的点击操作 //////
	core.actions._clickToolbox = function (x, y) {
		// 装备栏
		if (x >= this.LAST - 2 && y == 0) {
			core.ui.closePanel();
			if (core.isReplaying())
				core.control._replay_equipbox();
			else
				core.openEquipbox();
			return;
		}
		if (x >= this.LAST - 2 && y == this.LAST) {
			core.ui.closePanel();
			return;
		}

		var index = parseInt(x / 2);
		if (y <= this.LAST - 8 && y >= this.LAST - 9) index += 0;
		else if (y <= this.LAST - 6 && y >= this.LAST - 7) index += this.LAST / 2;
		else if (y == this.LAST - 4) index += 1 * this.LAST;
		else if (y == this.LAST - 2) index += 2 * this.LAST;
		else if (y <= this.LAST && y >= this.LAST - 1) index += 2.5 * this.LAST;
		else index = -1;
		if (index >= 0)
			this._clickToolboxIndex(index);
	};

	////// 选择工具栏界面中某个Index后的操作 //////
	core.actions._clickToolboxIndex = function (index) {
		if (index < 0) {
			this._clickToolboxIndex(index + 3 * this.LAST);
			return;
		} else if (index >= 3 * this.LAST) {
			this._clickToolboxIndex(index - 3 * this.LAST);
			return;
		}
		var tools = core.getToolboxItems('tools'),
			active_skills = core.getToolboxItems('主动技能'),
			constants = core.getToolboxItems('永久道具');

		var items = null;
		var select;
		if (index < this.LAST) {
			select = index + this.LAST * (core.status.event.data.toolsPage - 1);
			items = tools;
		} else if (index < 2 * this.LAST) {
			select = index % this.LAST + this.LAST * (core.status.event.data.activeSkillPage - 1);
			items = active_skills;
		} else {
			select = index % this.LAST + this.LAST * (core.status.event.data.constantsPage - 1);
			items = constants;
		}
		if (items == null) return;
		if (select >= items.length) return;
		var itemId = items[select];
		if (itemId == core.status.event.data.selectId) {
			if (core.isReplaying()) return;
			core.events.tryUseItem(itemId);
		} else {
			core.ui._drawToolbox(index);
		}
	}

	////// 工具栏界面时，按下某个键的操作 //////
	core.actions._keyDownToolbox = function (keycode) {
		if (core.status.event.data == null) return;

		var index = core.status.event.selection;
		var targetIndex = [];
		var midIndex = [];
		var one_line = this.LAST / 2; // 一行显示6个物品
		if (keycode == 37) { // left
			core.playSound('光标移动');
			targetIndex = core.arithProg(index + 1, 3 * this.LAST - 1, 1);
		}
		if (keycode == 38) { // up
			core.playSound('光标移动');
			midIndex = core.arithProg(index - index % one_line, index % one_line + 1, 1);
			for (var i = 0; i < 5; i++) { // 5 = 3 * 2 - 1（3种物品，每种每页显示2行，减去自身）
				for (var j in midIndex) {
					midIndex[j] += one_line;
				}
				targetIndex = targetIndex.concat(midIndex);
			}
		}
		if (keycode == 39) { // right
			core.playSound('光标移动');
			targetIndex = core.arithProg(index - 1, 3 * this.LAST - 1, -1);
		}
		if (keycode == 40) { // down
			core.playSound('光标移动');
			midIndex = core.arithProg(index - index % one_line, index % one_line + 1, 1);
			for (var i = 0; i < 5; i++) {
				for (var j in midIndex) {
					midIndex[j] -= one_line;
				}
				targetIndex = targetIndex.concat(midIndex);
			}
		}
		for (var i in targetIndex) this._clickToolboxIndex(targetIndex[i]);
	};
	// 生成长度为n的数组，元素依次是a, a+d, a+2d, ...
	this.arithProg = function (a, n, d) {
		if (n <= 1) return [a];
		else return [a].concat(this.arithProg(a + d, n - 1, d));
	}
},
    "70Fboss": function () {
	// 角色每移动一步
	this.SpecialHeroMove = function () {
		core.addFlag("70F_p1_turn", 1);

		var nowx = core.getHeroLoc('x'),
			nowy = core.getHeroLoc('y');

		var blocks = core.getMapBlocksObj(core.status.floorId);
		var actions = [];
		var dir;
		var from_loc = [],
			to_loc = [],
			dir_arr = [], // 将每个炸弹移动前后的位置和移动方向存放起来，依次进行移动
			explode_loc = []; // 如果有2个炸弹将要移动到相同位置，则此位置会爆炸
		for (var loc in blocks) {
			var block = blocks[loc],
				x = block.x,
				y = block.y,
				id = block.event.id,
				enemy = core.material.enemys[id];
			if (block.disable) continue;

			if (enemy && core.hasSpecial(enemy.special, 58)) { // 追踪
				var nextx = x,
					nexty = y;
				var dx = nowx - x;
				var dy = nowy - y; // 角色位置 - 炸弹位置
				// 首先确定移动位置
				if (Math.abs(dx) > Math.abs(dy)) {
					// 横向移动
					if (dx < 0) {
						nextx--;
						dir = "left";
					} else {
						nextx++;
						dir = "right";
					}
					if (nextx == 6 && nexty == 6) { // 绕开中心
						if (dy < 0) {
							nextx = x;
							nexty = y - 1;
							dir = "up";
						} else {
							nextx = x;
							nexty = y + 1;
							dir = "down";
						}
					}
				} else {
					// 纵向移动
					if (dy < 0) {
						nexty--;
						dir = "up";
					} else {
						nexty++;
						dir = "down";
					}
					if (nextx == 6 && nexty == 6) { // 绕开中心
						if (dx < 0) {
							nextx = x - 1;
							nexty = y;
							dir = "left";
						} else {
							nextx = x + 1;
							nexty = y;
							dir = "right";
						}
					}
				}
				if (nextx == nowx && nexty == nowy) { // 强制战斗
					actions.push({
						"type": "function",
						"function": "function() { " +
							"core.battle('E363', " + x + "," + y + ", true, core.doAction); " +
							"}",
						"async": true
					});
				} else {
					if (to_loc.find(function (to) {
							return to[0] == nextx && to[1] == nexty;
						})) { // 若要到达的位置已经被占用
						if (!explode_loc.find(function (loc) {
								return loc[0] == nextx && loc[1] == nexty;
							})) { // unique 存放要爆炸的位置
							explode_loc.push([nextx, nexty]);
						}
					}
					from_loc.push([x, y]);
					to_loc.push([nextx, nexty]);
					dir_arr.push(dir);
				}
			}
		}
		actions.push({ "type": "waitAsync" });
		// 实际执行所有爆弹的移动
		for (var index in from_loc) {
			var x = from_loc[index][0],
				y = from_loc[index][1];
			var nextx = to_loc[index][0],
				nexty = to_loc[index][1];
			var dir = dir_arr[index];
			if (!core.getBlock(nextx, nexty) || !core.getBlock(nextx, nexty).event) {
				// 正常移动
				actions.push({ "type": "function", "function": "function(){core.plugin.MoveBomb(" + x + "," + y + ",\"" + dir + "\", true);}" });
			} else if (core.getBlockId(nextx, nexty) == "lavaNet") {
				// 移动后爆炸，先记录下位置
				actions.push({ "type": "function", "function": "function(){core.plugin.MoveBomb(" + x + "," + y + ",\"" + dir + "\", false);}" });
				if (!explode_loc.find(function (loc) {
						return loc[0] == nextx && loc[1] == nexty;
					})) { // unique 存放要爆炸的位置
					explode_loc.push([nextx, nexty]);
				}
			}
		}
		actions.push({ "type": "waitAsync" });
		// 实际执行所有爆炸
		explode_loc.forEach(function (info) {
			for (var index in to_loc) {
				if (to_loc[index][0] == info[0] && to_loc[index][1] == info[1]) {
					// 我偷懒了，把炸弹伤害写死在这里了
					actions.push({
						"type": "function",
						"function": "function(){core.plugin.BombExplode(" + info[0] + "," + info[1] + ", 1222223);}"
					});
				}
			}
		});
		actions.push({ "type": "waitAsync" });
		actions.push({
			"type": "function",
			"function": "function(){core.plugin.BossSkill();}"
		}, { "type": "waitAsync" }, { "type": "insert", "name": "70Fboss_round" }, { "type": "waitAsync" }, { "type": "function", "function": "function(){core.plugin.SpecialWinLose();}" });
		core.insertAction(actions);
	}

	this.MoveBomb = function (x, y, dir, keep) {
		if (core.getBlockCls(x, y) == "enemys") {
			core.moveBlock(x, y, [dir], 300, keep);
		}
	}

	this.BombExplode = function (x, y, damage) {
		core.drawAnimate("fire2", x, y);
		core.removeBlock(x, y);
		for (var i = x - 1; i <= x + 1; ++i) {
			for (var j = y - 1; j <= y + 1; ++j) {
				if (!core.getBlock(i, j)) {
					core.setBlock("lavaNet", i, j);
				} else if (core.getBlockCls(i, j) == "enemys") {
					var enemy = core.material.enemys[core.getBlockId(i, j)];
					if (core.hasSpecial(enemy.special, 57)) {
						core.plugin.BombExplode(i, j, enemy.damage);
					}
				}
			}
		}
		if (core.getFlag("70F_boss_phase", 0) == 1 && x >= 5 && x <= 7 && y >= 5 && y <= 7) {
			core.addFlag("70F_damage", damage);
			core.plugin.popSkillDamage(damage, 6, 6, "#FFFFFF");
		}
		var hero_x = core.status.hero.loc.x;
		var hero_y = core.status.hero.loc.y;
		if (x >= hero_x - 1 && x <= hero_x + 1 && y >= hero_y - 1 && y <= hero_y + 1) {
			core.status.hero.hp -= damage; // 直接伤害
			core.plugin.popSkillDamage(damage, hero_x, hero_y);
		}
	}

	// 实际触发2技能和3技能
	this.BossSkill = function () {
		if (core.getFlag("70Fboss_skill2_ready", 0) > 0) {
			core.addFlag("70Fboss_skill2_ready", -1);
			if (core.getFlag("70Fboss_skill2_ready", 0) <= 1) {
				this.FireSlash();
			}
		}
		if (core.getFlag("70Fboss_skill3_ready", 0) > 0) {
			core.addFlag("70Fboss_skill3_ready", -1);
			if (core.getFlag("70Fboss_skill3_ready", 0) == 0) {
				this.IceMissile();
			}
		}
	}

	this.IceMissile = function () {
		core.hideImage(2, 0);
		var x = core.getFlag("70Fboss_skill3_loc_x", 641);
		var y = core.getFlag("70Fboss_skill3_loc_y", 641);
		var l = 1;

		function Process(x, y) {
			core.drawAnimate("ice2", x, y);
			if (x == core.status.hero.loc.x && y == core.status.hero.loc.y) {
				var damage = core.status.hero.hp * 0.05 + 1000000;
				damage = Math.floor(damage);
				core.status.hero.hp -= damage; // 直接伤害
				core.plugin.popSkillDamage(damage, x, y);
			}
			if (core.getBlockCls(x, y) == "enemys") {
				var enemy = core.material.enemys[core.getBlockId(x, y)];
				if (core.hasSpecial(enemy.special, 57)) {
					core.plugin.BombExplode(x, y, enemy.damage);
				}
			}
		}

		function RemoveLava(x, y) {
			if (core.getBlockId(x, y) == "lavaNet") {
				core.removeBlock(x, y);
			}
		}

		if (!core.isReplaying()) {
			var animateTime = 200;
			core.showImage(3, 'iceMissileDown.png', [0, 0, 32, 96], [x * 32, y * 32 - 256, 32, 96], 1, 0);
			core.moveImage(3, [x * 32, y * 32 - 64], 1, null, animateTime);

			setTimeout(function () {
				core.hideImage(3, 0);
				core.playSound("VX_Crash.ogg");
				for (var dx = x - 2; dx <= x + 2; ++dx) {
					for (var dy = y - 2; dy <= y + 2; ++dy) {
						Process(dx, dy);
					}
				}
			}, animateTime);
			setTimeout(function () {
				for (var dx = x - 2; dx <= x + 2; ++dx) {
					for (var dy = y - 2; dy <= y + 2; ++dy) {
						RemoveLava(dx, dy);
					}
				}
			}, animateTime + 100);
		} else {
			for (var dx = x - 2; dx <= x + 2; ++dx) {
				for (var dy = y - 2; dy <= y + 2; ++dy) {
					Process(dx, dy);
				}
			}
			for (var dx = x - 2; dx <= x + 2; ++dx) {
				for (var dy = y - 2; dy <= y + 2; ++dy) {
					RemoveLava(dx, dy);
				}
			}
		}
	}

	this.FireSlash = function () {
		core.hideImage(1, 0);
		var x = core.getFlag("70Fboss_skill2_loc_x", 641);
		var y = core.getFlag("70Fboss_skill2_loc_y", 641);
		var l = 1;

		function Process(x, y) {
			if (x == core.status.hero.loc.x && y == core.status.hero.loc.y) {
				var damage = core.status.hero.hp * 0.1 + 2000000;
				damage = Math.floor(damage);
				core.status.hero.hp -= damage; // 直接伤害
				core.plugin.popSkillDamage(damage, x, y);
			}
			if (!core.getBlock(x, y)) {
				core.setBlock("lavaNet", x, y);
			} else if (core.getBlockCls(x, y) == "enemys") {
				var enemy = core.material.enemys[core.getBlockId(x, y)];
				if (core.hasSpecial(enemy.special, 57)) {
					core.plugin.BombExplode(x, y, enemy.damage);
				}
			}
		}
		if (core.getFlag("70Fboss_skill2_dir", 0) % 2 == 0) { // 竖向
			if (!core.isReplaying()) {
				var interval = setInterval(function () {
					l += 1;
					if (l < 11) {
						core.drawAnimate("fire2", l, y);
						Process(l, y);
						core.playSound('smallExplosion.mp3');
					} else { clearInterval(interval) }
				}, 20);
			} else {
				l += 1;
				while (l < 11) {
					Process(l, y);
					l += 1;
				}
			}
		} else { // 横向
			if (!core.isReplaying()) {
				var interval = setInterval(function () {
					l += 1;
					if (l < 11) {
						core.drawAnimate("fire2", x, l);
						Process(x, l);
						core.playSound('smallExplosion.mp3');
					} else { clearInterval(interval) }
				}, 20);
			} else {
				l += 1;
				while (l < 11) {
					Process(x, l);
					l += 1;
				}
			}
		}
		core.addFlag("70Fboss_skill2_dir", 1);
	}

	// 判定战斗是否结束
	this.SpecialWinLose = function () {
		if (core.getHeroLoc('x') < 2 || core.getHeroLoc('x') > 10 ||
			core.getHeroLoc('y') < 2 || core.getHeroLoc('y') > 10) {
			core.setFlag("70F_boss_phase", 2221);
			core.lose("飞行");
		}
		if (core.status.hero.hp <= 0) {
			core.setFlag("70F_boss_phase", 2221);
			core.lose();
		}

		var boss_full_hp = 12222221;
		var cur_damage = core.getFlag("70F_damage", 0); // 对 boss 造成的伤害
		var boss_hp = boss_full_hp - cur_damage;
		if (boss_hp <= 0) {
			core.addFlag("70F_boss_phase", 1);
			core.trigger(0, 0);
		}
	}
},
    "popSkillDamage": function () {
	this.popSkillDamage = function (damage, nx, ny, color) {
		if (core.isReplaying() || core.getFlag("__statistics__", false)) return;
		if (!color) color = "#FF6666";
		//if (core.getFlag("popSkillDamage", 0) == 0) return;
		var type = core.getFlag("popSkillDamageK", 0);
		core.addFlag("popSkillDamageK", 1);
		if (core.getFlag("popSkillDamageK", 0) >= 2221) {
			core.setFlag("popSkillDamageK", 0);
		}
		core.createCanvas("skillDamage" + type, 0, 0, 480, 480, 150);
		var text;
		if (damage == 0) {
			text = "免疫";
		} else {
			text = core.formatBigNumber(damage);
		}
		core.fillBoldText("skillDamage" + type, text, (nx - core.bigmap.posX) * 32, (ny - core.bigmap.posY) * 32, color, "#000000", "18px Verdana");
		var cnt = 0;
		var ran = Math.random() - 0.5;
		var ySpeed = -1 + (Math.random() - 0.5) / 2;
		var x = 0;
		var y = 0;
		var interval = setInterval(function () {
			cnt += 1;
			ySpeed += 0.015;
			y += ySpeed;
			x += ran / 2;
			if (cnt < 150) {
				core.relocateCanvas("skillDamage" + type, x, y);
				core.setOpacity("skillDamage" + type, 3 - cnt * 0.02);
			} else {
				clearInterval(interval);
				core.ui.deleteCanvas("skillDamage" + type);
			}
		}, 5);
	}
},
    "DANGER": function () {
	// 从混沌一抄过来的，我也看不懂，随便瞎改了改，总之 LHJNB
	this.prepareForWarning = function (cx, cy) {
		this._centerX = cx;
		this._centerY = cy;

		this._sprTopBoard = { 'name': 'topBoard', 'x': -32, 'y': -128, 'w': 465, 'h': 128, 'z': 120 };
		this._sprBotBoard = { 'name': 'botBoard', 'x': -32, 'y': 416, 'w': 465, 'h': 128, 'z': 120 };
		this._sprWar1 = { 'name': 'war1', 'x': 416, 'y': 162, 'w': 294, 'h': 93, 'z': 120 };
		this._sprWar2 = { 'name': 'war2', 'x': 710, 'y': 162, 'w': 294, 'h': 93, 'z': 120 };
		this._sprWar3 = { 'name': 'war3', 'x': 1004, 'y': 162, 'w': 294, 'h': 93, 'z': 120 };

		this._sprites = [
			this._sprTopBoard, this._sprBotBoard, this._sprWar1, this._sprWar2, this._sprWar3
		];
		this._warningSprs = [
			this._sprWar1, this._sprWar2, this._sprWar3
		]
		this._sprites.forEach(function (spr) {
			core.createCanvas(spr.name, spr.x, spr.y, spr.w, spr.h, spr.z);
		});
		this._warningCanvas = [
			core.ui.getContextByName('war1').canvas, core.ui.getContextByName('war2').canvas, core.ui.getContextByName('war3').canvas
		]
		core.createCanvas('viewport', 0, 0, 416, 416, 115);
		this._bgCanvas = core.ui.getContextByName('viewport');
		this._bgCanvas.mozImageSmoothingEnabled = false;
		this._bgCanvas.webkitImageSmoothingEnabled = false;
		this._bgCanvas.msImageSmoothingEnabled = false;
		this._bgCanvas.imageSmoothingEnabled = false;
		this._bgCanvas.scale(1, 1);
		var top = core.ui.getContextByName('topBoard');
		var bot = core.ui.getContextByName('botBoard');
		top.beginPath();
		bot.beginPath();
		top.moveTo(0, 110);
		bot.moveTo(0, 17);
		for (var i = 0; i < 29; i++) {
			top.lineTo(i * 16 + 8, 126);
			top.lineTo(i * 16 + 16, 110);
			bot.lineTo(i * 16 + 8, 1);
			bot.lineTo(i * 16 + 16, 17);
		}
		top.lineTo(464, 0);
		top.lineTo(0, 0);
		bot.lineTo(464, 127);
		bot.lineTo(0, 127);
		top.closePath();
		bot.closePath();
		top.fillStyle = '#000';
		bot.fillStyle = '#000';
		top.fill();
		bot.fill();
		var img = core.material.images.images['warning.png'];
		for (var i = 0; i < 3; i++) {
			var ctx = core.ui.getContextByName(this._sprites[i + 2].name);
			ctx.drawImage(img, 0, 0);
		}
		this._timer = 0;
		this._isWarning = true;
		this._vdisX = 208 - (cx * 32 + 16);
		this._vdisY = 208 - (cy * 32 + 4);
		this._boardSpeed = 4;
		this._warningSpeed = 4;
		this._opacity = 1;
		this._opacityDec = true;
		this._scale = 1;
		core.playSound("se_alert.wav");
	};

	this.isWarning = function () {
		return !!this._isWarning;
	};

	this.drawAllCanvas = function (dx, dy) {
		this._bgCanvas.drawImage(core.canvas.bg.canvas, dx, dy);
		this._bgCanvas.drawImage(core.canvas.bg2.canvas, dx, dy); // 5图层
		this._bgCanvas.drawImage(core.canvas.fg.canvas, dx, dy);
		this._bgCanvas.drawImage(core.canvas.fg2.canvas, dx, dy); // 5图层
		this._bgCanvas.drawImage(core.canvas.event.canvas, dx, dy);
		this._bgCanvas.drawImage(core.canvas.hero.canvas, dx, dy);
		this._bgCanvas.drawImage(core.canvas.event2.canvas, dx, dy);
		this._bgCanvas.restore();
	}

	this.drawWarningImage = function (keep) {
		if (this._opacityDec) {
			this._opacity -= 0.05;
			if (this._opacity <= 0.5) {
				this._opacity = 0.5;
				this._opacityDec = !this._opacityDec;
			}
		} else {
			this._opacity += 0.05;
			if (this._opacity >= 1) {
				this._opacity = 1;
				this._opacityDec = !this._opacityDec;
			}
		}
		for (var i = 0; i < 3; i++) {
			var spr = this._warningSprs[i];
			if (keep) {
				spr.x -= this._warningSpeed;
				if (spr.x <= -294) spr.x = 588;
			} else {
				spr.x -= this._warningSpeed * 3;
			}
			this._warningCanvas[i].style.opacity = this._opacity;
		}
	}

	this.updateWarning = function () {
		if (this._timer < 200) {
			if (this._timer < 50) { // 进入
				this._scale *= 1.015;
				var vmp = (416 - 416 / this._scale) / 2;
				this._bgCanvas.clearRect(0, 0, 416, 416);
				this._bgCanvas.save();
				this._bgCanvas.scale(this._scale, this._scale);
				var dx = Math.ceil(this._vdisX * this._timer / 50 - vmp);
				var dy = Math.ceil(this._vdisY * this._timer / 50 - vmp);
				this.drawAllCanvas(dx, dy);
			} else {
				this._scale *= 1.002;
				var vmp = (416 - 416 / this._scale) / 2;
				this._bgCanvas.clearRect(0, 0, 416, 416);
				this._bgCanvas.save();
				this._bgCanvas.scale(this._scale, this._scale);
				var dx = Math.ceil(this._vdisX - vmp);
				var dy = Math.ceil(this._vdisY - vmp);
				this.drawAllCanvas(dx, dy);
			}
			if (this._timer < 140) {
				this._sprTopBoard.y += this._boardSpeed;
				if (this._sprTopBoard.y > 0) this._sprTopBoard.y = 0;
				this._sprBotBoard.y -= this._boardSpeed;
				if (this._sprBotBoard.y < 298) this._sprBotBoard.y = 298;
			}
			this._sprTopBoard.x += this._boardSpeed;
			if (this._sprTopBoard.x >= -16) this._sprTopBoard.x = -32;
			this._sprBotBoard.x += this._boardSpeed;
			if (this._sprBotBoard.x >= -16) this._sprBotBoard.x = -32;
			this.drawWarningImage(true);
		} else if (this._timer < 310) {
			if (this._timer < 250) { // 退出
				var timer = 250 - this._timer;
				if (this._scale > 1) {
					this._scale /= 1.021;
				}
				if (this._scale < 1) {
					this._scale = 1;
				}
				var vmp = (416 - 416 / this._scale) / 2;
				this._bgCanvas.clearRect(0, 0, 416, 416);
				this._bgCanvas.save();
				this._bgCanvas.scale(this._scale, this._scale);
				var dx = Math.ceil(this._vdisX * timer / 50 - vmp);
				var dy = Math.ceil(this._vdisY * timer / 50 - vmp);
				this.drawAllCanvas(dx, dy);
			} else if (this._timer == 250) {
				this._scale = 1;
				this._bgCanvas.clearRect(0, 0, 416, 416);
			}
			this._sprTopBoard.y -= this._boardSpeed;
			this._sprTopBoard.x += this._boardSpeed;
			if (this._sprTopBoard.x >= -16) this._sprTopBoard.x = -32;
			this._sprBotBoard.y += this._boardSpeed;
			this._sprBotBoard.x += this._boardSpeed;
			if (this._sprBotBoard.x >= -16) this._sprBotBoard.x = -32;
			this.drawWarningImage(false);
		}

		this._sprites.forEach(function (spr) {
			core.relocateCanvas(spr.name, spr.x, spr.y);
		});

		if (this._timer > 310) {
			this._isWarning = false;
		}
		this._timer++;
	};

	this.endWarning = function () {
		this._sprites.forEach(function (spr) {
			core.deleteCanvas(spr.name);
		});
		core.deleteCanvas('viewport');
		delete this._boardSpeed;
		delete this._warningSpeed;
		delete this._centerX;
		delete this._centerY;
		delete this._sprTopBoard;
		delete this._sprBotBoard;
		delete this._sprWar1;
		delete this._sprWar2;
		delete this._sprWar3;
		delete this._bgCanvas;
		delete this._sprites;
		delete this._timer;
		delete this._isWarning;
		delete this._vdisX;
		delete this._vdisY;
		delete this._warningSprs;
		delete this._warningCanvas;
		delete this._opacityDec;
		delete this._opacity;
	};
},
    "spriteFlasher": function () {
	// 消散特效，修改自《混沌幻想（二）》，LHJ，yyds
	// 此插件提供了 flashHide 函数，它创建 Sprite_Flasher 对象之后，由 heroMoving 调用其 update 方法
	// 在混沌二的工程中，flashHide 是在 hero 画布上绘制的
	// 这里改为在 fg2 画布上绘制，因为这里没有自绘 hero 的逻辑，如果也使用 hero 画布，会无法正常显示主角
	// 尽管如此，这里还是保留了 updateHeroDrawMain 这个函数名，也保留了它在 heroMoving 中调用的逻辑
	// 另外，原版 flashHide 有 removeBlock 的副作用，这里注释掉了，使得它变成纯粹的绘制函数
	// 使用此插件需要在 init插件的 _afterLoadResources 中初始化

	// 简单概括就是，辣鸡作者根本不知道 how it works

	// 这里也整合了V2.7.3样板的四帧行走插件
	["up", "down", "left", "right"].forEach(function (one) {
		// 指定中间帧动画
		core.material.icons.hero[one].midFoot = 2;
	});
	this.my_animationFrame_heroMoving = function (timestamp) {
		core.plugin.updateHeroDrawMain();
		if (core.status.heroMoving <= 0) return;
		if (timestamp - core.animateFrame.moveTime > core.values.moveSpeed) {
			core.animateFrame.leftLeg++;
			core.animateFrame.moveTime = timestamp;
		}
		core.drawHero(['stop', 'leftFoot', 'midFoot', 'rightFoot'][core.animateFrame.leftLeg % 4], 4 * core.status.heroMoving);
	}
	core.registerAnimationFrame("heroMoving", true, "my_animationFrame_heroMoving");

	this.initSpriteFlasher = function () {
		this._baseViewport = core.ui.getContextByName('fg2'); // 除非你像LHJ一样NB，否则不要用这个画布做其他的事情
		this._rootSprite = new FakeSprite();
	}

	function Rectangle(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;

		this.set = function (zx, zy, zw, zh) {
			this.x = zx;
			this.y = zy;
			this.w = zw;
			this.h = zh;
		}
	}

	function FakeSprite() {
		this.initialize.apply(this, arguments);
	}

	FakeSprite.prototype.initialize = function () {
		this._bitmap = null;
		this.opacity = 1.0;
		this.x = 0;
		this.y = 0;
		this.rect = new Rectangle(0, 0, 0, 0);
		this.visible = true;
		this.angel = 0;
		this.parent = null;
		this.scale = 1;
		this._children = [];
		this._locked = false;
	};

	FakeSprite.prototype.setLock = function (flag) {
		this._locked = flag;
	};

	FakeSprite.prototype.render = function (viewport, ox, oy) {
		var baseX = this.x + ox;
		var baseY = this.y + oy;
		if (this.bitmap && this.visible) {
			viewport.globalAlpha = this.opacity;
			if (this.angel) {
				viewport.save();
				viewport.rotate(this.angel * Math.PI / 180);
			}
			if (this.scale == 1) {
				viewport.drawImage(this.bitmap, this.rect.x, this.rect.y, this.rect.w, this.rect.h, baseX, baseY, this.rect.w, this.rect.h);
			} else {
				viewport.drawImage(this.bitmap, this.rect.x, this.rect.y, this.rect.w, this.rect.h, baseX, baseY, this.rect.w * this.scale, this.rect.h * this.scale);
			}
			if (this.angel) {
				viewport.restore();
			}
		}
		if (this.visible) {
			this._children.forEach(function (spr) {
				spr.render(viewport, baseX, baseY);
			});
		}
	};

	FakeSprite.prototype.canvasToLocalX = function (x) {
		var node = this;
		while (node) {
			x -= node.x;
			node = node.parent;
		}
		return x;
	};

	FakeSprite.prototype.canvasToLocalY = function (y) {
		var node = this;
		while (node) {
			y -= node.y;
			node = node.parent;
		}
		return y;
	};

	FakeSprite.prototype.isPosOver = function (x, y) {
		if (this._locked) return false;
		var x = this.canvasToLocalX(x);
		var y = this.canvasToLocalY(y);
		return x >= 0 && y >= 0 && x < this.rect.w && y < this.rect.h;
	};

	FakeSprite.prototype.addChild = function (spr) {
		this._children.push(spr);
		spr.parent = this;
	};

	FakeSprite.prototype.addChildAt = function (spr, index) {
		this._children.splice(index, 0, spr);
		spr.parent = this;
	};

	FakeSprite.prototype.removeChild = function (spr) {
		var index = this._children.indexOf(spr);
		if (index >= 0) {
			this._children.splice(index, 1);
		}
	};

	FakeSprite.prototype.clearChild = function () {
		this._children = [];
	};

	FakeSprite.prototype.setChilds = function (childs) {
		this._children = childs;
		this._children.forEach(function (spr) {
			spr.parent = this;
		}, this);
	};

	FakeSprite.prototype.update = function () {
		this._children.forEach(function (spr) {
			spr.update();
		})
	};

	FakeSprite.prototype.onBitmapLoaded = function () {};

	Object.defineProperties(FakeSprite.prototype, {
		bitmap: {
			set: function (v) {
				if (this._bitmap == v) return;
				this.rect.x = 0;
				this.rect.y = 0;
				if (v) {
					this.rect.w = v.width;
					this.rect.h = v.height;
				} else {
					this.rect.w = 0;
					this.rect.h = 0;
				}
				this._bitmap = v;
				this.onBitmapLoaded();
			},
			get: function () {
				return this._bitmap;
			}
		}
	});
	// End FakeSprite

	function Sprite_Flasher() {
		this.initialize.apply(this, arguments);
	}

	Sprite_Flasher.prototype = Object.create(FakeSprite.prototype);
	Sprite_Flasher.prototype.constructor = Sprite_Flasher;

	Sprite_Flasher.prototype.initialize = function (bmp, x, y, srcX, srcY, srcW, srcH) {
		FakeSprite.prototype.initialize.call(this);
		this._srcBitmap = document.createElement('canvas');
		this._srcBitmap.width = srcW;
		this._srcBitmap.height = srcH;
		this._canvas = document.createElement('canvas');
		this._canvas.width = 2;
		this._canvas.height = 2;
		this._context = this._canvas.getContext('2d');
		this.bitmap = this._canvas;
		// 这里其实咕了，大地图下消散特效会跟着主角走，不符合预期
		// 至于这 +1 是怎么回事辣鸡作者根本不知道
		if (core.bigmap.width > 13 || core.bigmap.height > 13) {
			this.x = (x - core.bigmap.posX + 1) * 32 - (srcW - 32) / 2;
			this.y = (y - core.bigmap.posY + 1) * 32 - (srcH - 32);
		} else {
			this.x = x * 32 - (srcW - 32) / 2;
			this.y = y * 32 - (srcH - 32);
		}
		this._timer = 0;
		this.createParticle(bmp, srcX, srcY, srcW, srcH);
	};

	Sprite_Flasher.prototype.createParticle = function (bitmap, srcX, srcY, srcW, srcH) {
		var ctx = this._srcBitmap.getContext('2d');
		ctx.drawImage(bitmap, srcX, srcY, srcW, srcH, 0, 0, srcW, srcH);
		var data = ctx.getImageData(0, 0, srcW, srcH).data;
		var len = data.length;
		var step = 2; // 为1时绘制全部，设为2减少一半颗粒，缓解卡顿问题
		for (var i = 0; i < len; i += 8 * step) {
			var index = Math.floor(i / 4);
			if (Math.floor(index / srcW) % 2 == 0) {
				if (data[i + 3] > 0) {
					var px = index % srcW;
					var py = Math.floor(index / srcW);
					var color = '#' + data[i].toString(16) + data[i + 1].toString(16) + data[i + 2].toString(16);
					var spr = new Sprite_FlashParticle(px, py, color);
					this.addChild(spr);
				}
			}
		}
	};

	Sprite_Flasher.prototype.updateEffect = function () {
		this._timer++;
		if (this._timer >= 60) {
			this.parent.removeChild(this);
		}
	};

	Sprite_Flasher.prototype.update = function () {
		FakeSprite.prototype.update.call(this);
		this.updateEffect();
	};
	// End Sprite_Flasher

	function Sprite_FlashParticle() {
		this.initialize.apply(this, arguments);
	}

	Sprite_FlashParticle.prototype = Object.create(FakeSprite.prototype);
	Sprite_FlashParticle.prototype.constructor = Sprite_FlashParticle;

	Sprite_FlashParticle.prototype.initialize = function (x, y, colorString) {
		FakeSprite.prototype.initialize.call(this);
		this._canvas = document.createElement('canvas');
		this._canvas.width = 3;
		this._canvas.height = 3;
		this._context = this._canvas.getContext('2d');
		this.bitmap = this._canvas;
		this._context.fillStyle = colorString;
		this._context.fillRect(0, 0, 3, 3);
		this.x = x;
		this.y = y;
		this.vx = -0.5 + Math.random();
		this.vy = -0.5 + Math.random();
		this.dx = x;
		this.dy = y;
		this._timer = 0;
	};

	Sprite_FlashParticle.prototype.updateEffect = function () {
		this._timer++;
		if (this._timer < 60) {
			this.opacity = (60 - this._timer) / 60;
			this.dx += this.vx;
			this.dy += this.vy;
			if (this._timer % 5 == 0) {
				this.vx += -0.1 + Math.random() * 0.2;
			}
			this.x = Math.round(this.dx);
			this.y = Math.round(this.dy);
		} else {
			this.visible = false;
		}
	};

	Sprite_FlashParticle.prototype.update = function () {
		this.updateEffect();
	};

	Sprite_FlashParticle.prototype.render = function (viewport, ox, oy) {
		var baseX = this.x + ox;
		var baseY = this.y + oy;
		if (this.bitmap && this.visible) {
			viewport.globalAlpha = this.opacity;
			viewport.drawImage(this.bitmap, baseX, baseY);
		}
	};
	// End Sprite_FlashParticle

	// 特效入口函数
	this.flashHide = function (x, y) {
		if (core.isReplaying() || core.getFlag("no_flashHide", 0) == 1) {
			//core.removeBlock(x, y);
			return;
		}
		if (core.bigmap.width > 13 || core.bigmap.height > 13) { // 大地图直接咕了
			return;
		}
		var block = core.getBlock(x, y);
		if (block) {
			var type = block.event.cls;
			var srcX = 0;
			var srcY = core.icons.icons[type][block.event.id] * block.event.height;
			var bmp = core.material.images[type];
			var spr = new Sprite_Flasher(bmp, block.x, block.y, srcX, srcY, 32, block.event.height);
			this._rootSprite.addChild(spr);
			//core.removeBlock(x, y);
			//core.drawMap();
		}
	}

	this.updateHeroDrawMain = function () {
		this._rootSprite.update();
		this._baseViewport.canvas.width = this._baseViewport.canvas.width; // 这行代码已经超出了我的理解范围，事实就是如果删掉它，会出现奇怪的现象
		this._rootSprite.render(this._baseViewport, 0, 0);
	}

	this.clearSpriteFlasher = function () {
		this._rootSprite.clearChild();
	}
},
    "talentTree": function () {
	// 天赋树界面来自《异星》，有修改（由于升级条件繁杂所以修改时参考了无敌的混沌二，LHJNB）
	// 《异星》真的很好玩，毒星NB！

	var talentTree = [{
		"name": "攻击强化",
		"images": ["talent0.png", 64, 30],
		"description": function (lv) {
			var val = [0, 500, 1000, 1500, 2000, 3000][lv];
			return "增加" + val + "点基础攻击";
		},
		"cost": function (lv) {
			var cost = [30, 60, -1, 300][lv];
			var enabled = core.status.hero.money >= cost;
			if (lv < 2 || lv == 3) {
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗" + cost + "金币\r";
			} else if (lv == 2) {
				enabled = core.getFlag("talent0_up2", 0) >= 50;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需打败50只怪物(" + core.getFlag("talent0_up2", 0) + "/50)\r";
			} else if (lv == 4) {
				var disabled = core.getTalentLv(1) >= 5 && core.getTalentLv(2) >= 5;
				enabled = core.itemCount("yellowGem") >= 5 && !disabled;
				return (disabled ? "\r[red]" : (enabled ? "\r[green]" : "\r[yellow]")) + "提升需防御和护盾强化之一未达到5级，并消耗5颗黄宝石(" + core.itemCount("yellowGem") + "/5)\r";
			}
			return "已达到满级。";
		},
		"upgrade": function (lv) {
			var cost = [30, 60, -1, 300][lv];
			var enabled = core.status.hero.money >= cost;
			if ((lv < 2 || lv == 3) && enabled) {
				core.addFlag("talent0_lv", 1);
				core.status.hero.atk += 500;
				core.status.hero.money -= cost;
				return true;
			}
			enabled = core.getFlag("talent0_up2", 0) >= 50;
			if (lv == 2 && enabled) {
				core.addFlag("talent0_lv", 1);
				core.status.hero.atk += 500;
				if (core.getFlag("autoUpgradeTalent", 0) > 0) {
					core.insertAction("\t[系统提示]【攻击强化】已提升至\r[yellow]3\r级。");
				}
				return true;
			}
			enabled = core.itemCount("yellowGem") >= 5 && (core.getTalentLv(1) < 5 || core.getTalentLv(2) < 5);
			if (lv == 4 && enabled) {
				core.addFlag("talent0_lv", 1);
				core.status.hero.atk += 1000;
				core.getItem("yellowGem", -5);
				if (core.getFlag("talent3_spe4", "disabled") == "disabled") {
					core.setFlag("talent3_spe4", "atk");
				} else {
					core.setFlag("talent3_spe7", "atk");
				}
				core.drawHeroAnimate("yongchang");
				if (core.getFlag("autoUpgradeTalent", 0) > 0 && (core.getTalentLv(3) == 4 || core.getTalentLv(3) == 7)) core.plugin._tryUpgrade(3);
				return true;
			}
			return false;
		},
		"maxlv": 5
	}, {
		"name": "防御强化",
		"images": ["talent1.png", 144, 30],
		"description": function (lv) {
			var val = [0, 500, 1000, 1500, 2000, 3000][lv];
			return "增加" + val + "点基础防御";
		},
		"cost": function (lv) {
			var cost = [30, 60, -1, 300][lv];
			var enabled = core.status.hero.money >= cost;
			if (lv < 2 || lv == 3) {
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗" + cost + "金币\r";
			} else if (lv == 2) {
				enabled = core.getFlag("talent1_up2", 0) >= 50;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需打败50只怪物(" + core.getFlag("talent1_up2", 0) + "/50)\r";
			} else if (lv == 4) {
				var disabled = core.getTalentLv(0) >= 5 && core.getTalentLv(2) >= 5;
				enabled = core.itemCount("yellowGem") >= 5 && !disabled;
				return (disabled ? "\r[red]" : (enabled ? "\r[green]" : "\r[yellow]")) + "提升需攻击和护盾强化之一未达到5级，并消耗5颗黄宝石(" + core.itemCount("yellowGem") + "/5)\r";
			}
			return "已达到满级。";
		},
		"upgrade": function (lv) {
			var cost = [30, 60, -1, 300][lv];
			var enabled = core.status.hero.money >= cost;
			if ((lv < 2 || lv == 3) && enabled) {
				core.addFlag("talent1_lv", 1);
				core.status.hero.def += 500;
				core.status.hero.money -= cost;
				return true;
			}
			enabled = core.getFlag("talent1_up2", 0) >= 50;
			if (lv == 2 && enabled) {
				core.addFlag("talent1_lv", 1);
				core.status.hero.def += 500;
				if (core.getFlag("autoUpgradeTalent", 0) > 0) {
					core.insertAction("\t[系统提示]【防御强化】已提升至\r[yellow]3\r级。");
				}
				return true;
			}
			enabled = core.itemCount("yellowGem") >= 5 && (core.getTalentLv(0) < 5 || core.getTalentLv(2) < 5);
			if (lv == 4 && enabled) {
				core.addFlag("talent1_lv", 1);
				core.status.hero.def += 1000;
				core.getItem("yellowGem", -5);
				if (core.getFlag("talent3_spe4", "disabled") == "disabled") {
					core.setFlag("talent3_spe4", "def");
				} else {
					core.setFlag("talent3_spe7", "def");
				}
				core.drawHeroAnimate("yongchang");
				if (core.getFlag("autoUpgradeTalent", 0) > 0 && (core.getTalentLv(3) == 4 || core.getTalentLv(3) == 7)) core.plugin._tryUpgrade(3);
				return true;
			}
			return false;
		},
		"maxlv": 5
	}, {
		"name": "护盾强化",
		"images": ["talent2.png", 224, 30],
		"description": function (lv) {
			var val = [0, 2500, 5000, 7500, 10000, 15000][lv];
			return "增加" + val + "点基础护盾";
		},
		"cost": function (lv) {
			var cost = [30, 60, -1, 300][lv];
			var enabled = core.status.hero.money >= cost;
			if (lv < 2 || lv == 3) {
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗" + cost + "金币\r";
			} else if (lv == 2) {
				enabled = core.getFlag("talent2_up2", 0) >= 50;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需打败50只怪物(" + core.getFlag("talent2_up2", 0) + "/50)\r";
			} else if (lv == 4) {
				var disabled = core.getTalentLv(0) >= 5 && core.getTalentLv(1) >= 5;
				enabled = core.itemCount("yellowGem") >= 5 && !disabled;
				return (disabled ? "\r[red]" : (enabled ? "\r[green]" : "\r[yellow]")) + "提升需攻击和防御强化之一未达到5级，并消耗5颗黄宝石(" + core.itemCount("yellowGem") + "/5)\r";
			}
			return "已达到满级。";
		},
		"upgrade": function (lv) {
			var cost = [30, 60, -1, 300][lv];
			var enabled = core.status.hero.money >= cost;
			if ((lv < 2 || lv == 3) && enabled) {
				core.addFlag("talent2_lv", 1);
				core.status.hero.mdef += 2500;
				core.status.hero.money -= cost;
				return true;
			}
			enabled = core.getFlag("talent2_up2", 0) >= 50;
			if (lv == 2 && enabled) {
				core.addFlag("talent2_lv", 1);
				core.status.hero.mdef += 2500;
				if (core.getFlag("autoUpgradeTalent", 0) > 0) {
					core.insertAction("\t[系统提示]【护盾强化】已提升至\r[yellow]3\r级。");
				}
				return true;
			}
			enabled = core.itemCount("yellowGem") >= 5 && (core.getTalentLv(0) < 5 || core.getTalentLv(1) < 5);
			if (lv == 4 && enabled) {
				core.addFlag("talent2_lv", 1);
				core.status.hero.mdef += 5000;
				core.getItem("yellowGem", -5);
				if (core.getFlag("talent3_spe4", "disabled") == "disabled") {
					core.setFlag("talent3_spe4", "mdef");
				} else {
					core.setFlag("talent3_spe7", "mdef");
				}
				core.drawHeroAnimate("yongchang");
				if (core.getFlag("autoUpgradeTalent", 0) > 0 && (core.getTalentLv(3) == 4 || core.getTalentLv(3) == 7)) core.plugin._tryUpgrade(3);
				return true;
			}
			return false;
		},
		"maxlv": 5
	}, {
		"name": "神秘力量",
		"images": ["talent3.png", 304, 30],
		"description": function (lv) {
			var description = [
				"无效果。",
				"获得技能【轻风】：将面前的敌人往后推一格，消耗50能量。对拥有特殊头衔的敌人无效。",
				"强化【能量回复】：战斗后回复能量+1。",
				"攻击、防御、护盾提升30%",
				"强化【能量回复】：战斗后回复能量+1。能量块回复效果增加10点",
				"在攻击、防御、护盾三项强化中，最先到达5级的属性提升100%",
				"强化【轻风】：能量消耗减少为40点，并且推动距离变为无限。",
				"强化【能量回复】：进行一次总伤害不大于0的战斗后，回复10能量。",
				"在攻击、防御、护盾三项强化中，第二个到达5级的属性提升100%",
				"强化【轻风】：面前为空地时会推动自己，路径上不会触发地图事件。"
			];
			return description[lv];
		},
		"cost": function (lv) {
			var enabled = core.status.hero.money >= 1;
			if (lv == 0) {
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗1金币\r";
			} else if (lv == 1) {
				enabled = core.getFlag("talent3_up1", 0) >= 5;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需打败" + "5只怪物(" + core.getFlag("talent3_up1", 0) + "/5)\r";
			} else if (lv == 2) {
				enabled = core.getFlag("talent3_up2_spe", 0) >= 10;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需进行10次总伤害不大于0的战斗(" + core.getFlag("talent3_up2_spe", 0) + "/10)\r";
			} else if (lv == 3) {
				enabled = core.getFlag("talent3_up3_spe", 0) >= 20;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需开启20个黄门(" + core.getFlag("talent3_up3_spe", 0) + "/20)\r";
			} else if (lv == 4) {
				enabled = core.getFlag("talent3_spe4", "disabled") != "disabled";
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需攻击/防御/护盾强化中任意一项达到5级\r";
			} else if (lv == 5) {
				enabled = core.getFlag("talent3_up5_spe", 0) >= 20;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需使用20次【轻风】(" + core.getFlag("talent3_up5_spe", 0) + "/20)\r";
			} else if (lv == 6) {
				enabled = core.getFlag("talent3_up6_spe", 0) >= 50;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需进行50次总伤害不大于0的战斗(" + core.getFlag("talent3_up6_spe", 0) + "/50)\r";
			} else if (lv == 7) {
				enabled = core.getFlag("talent3_spe7", "disabled") != "disabled";
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需攻击/防御/护盾强化中任意两项达到5级\r";
			} else if (lv == 8) {
				if (flags.hard == 1) {
					enabled = core.getFlag("talent3_up8_spe", 0) >= 35;
					return (enabled ? "\r[green]" : "\r[yellow]") + "提升需使用35次【轻风】(" + core.getFlag("talent3_up8_spe", 0) + "/35)\r";
				}
				enabled = core.getFlag("talent3_up8_spe", 0) >= 50;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需使用50次【轻风】(" + core.getFlag("talent3_up8_spe", 0) + "/50)\r";
			}
			return "已达到满级";
		},
		"upgrade": function (lv) {
			var enabled = core.status.hero.money >= 1;
			if (lv == 0 && enabled) {
				core.status.hero.money -= 1;
				core.addFlag("talent3_lv", 1);
				core.getItem("skill3", 1);
				core.setFlag("skill3_cost", 50);
				return true;
			}
			if (lv == 1) {
				enabled = core.getFlag("talent3_up1", 0) >= 5;
				if (enabled) {
					core.addFlag("talent3_lv", 1);
					core.addFlag("mana_regen", 1);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【神秘力量】已提升至\r[yellow]2\r级。\n效果：战斗后回复能量+1。");
					}
					return true;
				}
			} else if (lv == 2) {
				enabled = core.getFlag("talent3_up2_spe", 0) >= 10;
				if (enabled) {
					core.addFlag("talent3_lv", 1);
					core.plugin.addValpp('atk', 30);
					core.plugin.addValpp('def', 30);
					core.plugin.addValpp('mdef', 30);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【神秘力量】已提升至\r[yellow]3\r级。\n效果：攻击、防御、护盾提升30%");
					}
					return true;
				}
			} else if (lv == 3) {
				enabled = core.getFlag("talent3_up3_spe", 0) >= 20;
				if (enabled) {
					core.addFlag("mana_regen", 1);
					core.addFlag("mana_item", 10);
					core.plugin.clearItemDetailCache("manaItem");
					core.plugin.clearItemDetailCache("bigManaitem");
					core.addFlag("talent3_lv", 1);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【神秘力量】已提升至\r[yellow]4\r级。\n效果：战斗后回复能量+1。能量块回复效果增加10点");
						core.plugin._tryUpgrade(3);
					}
					return true;
				}
			} else if (lv == 4) {
				enabled = core.getFlag("talent3_spe4", "disabled") != "disabled";
				if (enabled) {
					core.addFlag("talent3_lv", 1);
					core.addValpp(core.getFlag("talent3_spe4"), 100);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【神秘力量】已提升至\r[yellow]5\r级。\n效果：在攻击、防御、护盾三项强化中，最先到达5级的属性提升100%");
					}
					return true;
				}
			} else if (lv == 5) {
				enabled = core.getFlag("talent3_up5_spe", 0) >= 20;
				if (enabled) {
					core.addFlag("talent3_lv", 1);
					core.setFlag("skill3_cost", 40);
					core.setFlag("skill3_range", 2221);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【神秘力量】已提升至\r[yellow]6\r级。\n效果：【轻风】能量消耗减少为40点，并且推动距离变为无限。");
					}
					return true;
				}
			} else if (lv == 6) {
				enabled = core.getFlag("talent3_up6_spe", 0) >= 50;
				if (enabled) {
					core.setFlag("I62_extra_description", "，若战斗总伤害不大于0，额外回复10点能量");
					core.setFlag("I62_extra_mana_regen", 10);
					core.addFlag("talent3_lv", 1);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【神秘力量】已提升至\r[yellow]7\r级。\n效果：进行一次总伤害不大于0的战斗后，回复10能量。");
						core.plugin._tryUpgrade(3);
					}
					return true;
				}
			} else if (lv == 7) {
				enabled = core.getFlag("talent3_spe7", "disabled") != "disabled";
				if (enabled) {
					core.addFlag("talent3_lv", 1);
					core.addValpp(core.getFlag("talent3_spe7"), 100);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【神秘力量】已提升至\r[yellow]8\r级。\n效果：在攻击、防御、护盾三项强化中，第二个到达5级的属性提升100%");
					}
					return true;
				}
			} else if (lv == 8) {
				enabled = core.getFlag("talent3_up8_spe", 0) >= 50;
				if (flags.hard == 1) enabled = core.getFlag("talent3_up8_spe", 0) >= 35;
				if (enabled) {
					core.addFlag("talent3_lv", 1);
					core.setFlag("skill3_push_self", 1);
					core.setFlag("skill3_extra_description", "面前为空地时会推动自己。");
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【神秘力量】已提升至\r[yellow]9\r级。\n效果：面前为空地时使用【轻风】会推动自己，路径上不会触发地图事件。");
					}
					return true;
				}
			}
			return false;
		},
		"reading": "提供各种永久类的增益，有着奇特的作用",
		"maxlv": 9
	}, {
		"name": "先手突袭",
		"images": ["talent4.png", 44, 110],
		"description": function (lv) {
			var description = [
				"首次攻击时额外附加0次攻击",
				"首次攻击时额外附加1次攻击",
				"首次攻击时额外附加2次攻击",
				"首次攻击时额外附加3次攻击"
			];
			return description[lv];
		},
		"cost": function (lv) {
			var enabled = core.plugin.getTalentLv(0) >= 5 && core.status.hero.money >= 300 && core.itemCount("yellowGem") >= 3;
			if (lv == 0) {
				var disabled = core.getTalentLv(1) >= 5 && core.getTalentLv(2) >= 5;
				if (disabled) return "\r[red]提升需攻击强化达到5级，并消耗300金币和3黄宝石\r";
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需攻击强化达到5级，并消耗300金币和3黄宝石\r";
			} else if (lv == 1) {
				enabled = core.getFlag("talent4_up1", 0) >= 50;
				return "提升需打败" + (enabled ? "\r[green]" : "\r[yellow]") + "50只怪物(" + core.getFlag("talent4_up1", 0) + "/50)\r";
			} else if (lv == 2) {
				enabled = core.status.hero.money >= 1000;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗1000金币\r";
			}
			return "已达到满级";
		},
		"upgrade": function (lv) {
			var enabled = core.plugin.getTalentLv(0) >= 5 && core.status.hero.money >= 300 && core.itemCount("yellowGem") >= 3;
			if (lv == 0 && enabled) {
				core.status.hero.money -= 300;
				core.getItem("yellowGem", -3);
				core.addFlag("talent4_lv", 1);
				return true;
			} else if (lv == 1) {
				enabled = core.getFlag("talent4_up1", 0) >= 50;
				if (enabled) {
					core.addFlag("talent4_lv", 1);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【先手突袭】已提升至\r[yellow]2\r级。\n效果：首次攻击时额外附加2次攻击");
					}
					return true;
				}
			} else if (lv == 2) {
				enabled = core.status.hero.money >= 1000;
				if (enabled) {
					core.status.hero.money -= 1000;
					core.addFlag("talent4_lv", 1);
					return true;
				}
			}
			return false;
		},
		"maxlv": 3,
		"reading": "用狂风骤雨般的攻击快速击败对手"
	}, {
		"name": "穿甲攻击",
		"images": ["talent5.png", 84, 110],
		"description": function (lv) {
			var description = [
				"无视对方0%防御力",
				"无视对方10%防御力",
				"无视对方20%防御力",
				"无视对方30%防御力"
			];
			return description[lv];
		},
		"cost": function (lv) {
			var enabled = core.plugin.getTalentLv(0) >= 5 && core.status.hero.money >= 300 && core.itemCount("yellowGem") >= 3;
			if (lv == 0) {
				var disabled = core.getTalentLv(1) >= 5 && core.getTalentLv(2) >= 5;
				if (disabled) return "\r[red]提升需攻击强化达到5级，并消耗300金币和3黄宝石\r";
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需攻击强化达到5级，并消耗300金币和3黄宝石\r";
			} else if (lv == 1) {
				enabled = core.getFlag("talent5_up1", 0) >= 50;
				return "提升需打败" + (enabled ? "\r[green]" : "\r[yellow]") + "50只怪物(" + core.getFlag("talent5_up1", 0) + "/50)\r";
			} else if (lv == 2) {
				enabled = core.status.hero.money >= 1000;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗1000金币\r";
			}
			return "已达到满级";
		},
		"upgrade": function (lv) {
			var enabled = core.plugin.getTalentLv(0) >= 5 && core.status.hero.money >= 300 && core.itemCount("yellowGem") >= 3;
			if (lv == 0 && enabled) {
				core.status.hero.money -= 300;
				core.getItem("yellowGem", -3);
				core.addFlag("talent5_lv", 1);
				return true;
			} else if (lv == 1) {
				enabled = core.getFlag("talent5_up1", 0) >= 50;
				if (enabled) {
					core.addFlag("talent5_lv", 1);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【穿甲攻击】已提升至\r[yellow]2\r级。\n效果：无视对方20%防御力");
					}
					return true;
				}
			} else if (lv == 2) {
				enabled = core.status.hero.money >= 1000;
				if (enabled) {
					core.status.hero.money -= 1000;
					core.addFlag("talent5_lv", 1);
					return true;
				}
			}
			return false;
		},
		"maxlv": 3,
		"reading": "专门打击对手弱点"
	}, {
		"name": "越战越强",
		"images": ["talent6.png", 124, 110],
		"description": function (lv) {
			var description = [
				"战斗中，每回合提升0%减伤，最多提升0%。",
				"战斗中，每回合提升1%减伤，最多提升30%。",
				"战斗中，每回合提升2%减伤，最多提升40%。",
				"战斗中，每回合提升3%减伤，最多提升50%。"
			];
			return description[lv];
		},
		"cost": function (lv) {
			var enabled = core.plugin.getTalentLv(1) >= 5 && core.status.hero.money >= 300 && core.itemCount("yellowGem") >= 3;
			if (lv == 0) {
				var disabled = core.getTalentLv(0) >= 5 && core.getTalentLv(2) >= 5;
				if (disabled) return "\r[red]提升需防御强化达到5级，并消耗300金币和3黄宝石\r";
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需防御强化达到5级，并消耗300金币和3黄宝石\r";
			} else if (lv == 1) {
				enabled = core.getFlag("talent6_up1", 0) >= 50;
				return "提升需打败" + (enabled ? "\r[green]" : "\r[yellow]") + "50只怪物(" + core.getFlag("talent6_up1", 0) + "/50)\r";
			} else if (lv == 2) {
				enabled = core.status.hero.money >= 1000;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗1000金币\r";
			}
			return "已达到满级";
		},
		"upgrade": function (lv) {
			var enabled = core.plugin.getTalentLv(1) >= 5 && core.status.hero.money >= 300 && core.itemCount("yellowGem") >= 3;
			if (lv == 0 && enabled) {
				core.status.hero.money -= 300;
				core.getItem("yellowGem", -3);
				core.addFlag("talent6_lv", 1);
				return true;
			} else if (lv == 1) {
				enabled = core.getFlag("talent6_up1", 0) >= 50;
				if (enabled) {
					core.addFlag("talent6_lv", 1);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【越战越强】已提升至\r[yellow]2\r级。\n效果：战斗中，每回合提升2%减伤，最多提升40%。");
					}
					return true;
				}
			} else if (lv == 2) {
				enabled = core.status.hero.money >= 1000;
				if (enabled) {
					core.status.hero.money -= 1000;
					core.addFlag("talent6_lv", 1);
					return true;
				}
			}
			return false;
		},
		"maxlv": 3,
		"reading": "越打越硬。注：减伤计算早于护盾"
	}, {
		"name": "化防为盾",
		"images": ["talent7.png", 164, 110],
		"description": function (lv) {
			var description = [
				"战斗中，每回合获得相当于0%防御力的护盾。",
				"战斗中，每回合获得相当于2%防御力的护盾。",
				"战斗中，每回合获得相当于4%防御力的护盾。",
				"战斗中，每回合获得相当于6%防御力的护盾。"
			];
			return description[lv];
		},
		"cost": function (lv) {
			var enabled = core.plugin.getTalentLv(1) >= 5 && core.status.hero.money >= 300 && core.itemCount("yellowGem") >= 3;
			if (lv == 0) {
				var disabled = core.getTalentLv(0) >= 5 && core.getTalentLv(2) >= 5;
				if (disabled) return "\r[red]提升需防御强化达到5级，并消耗300金币和3黄宝石\r";
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需防御强化达到5级，并消耗300金币和3黄宝石\r";
			} else if (lv == 1) {
				enabled = core.getFlag("talent7_up1", 0) >= 50;
				return "提升需打败" + (enabled ? "\r[green]" : "\r[yellow]") + "50只怪物(" + core.getFlag("talent7_up1", 0) + "/50)\r";
			} else if (lv == 2) {
				enabled = core.status.hero.money >= 1000;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗1000金币\r";
			}
			return "已达到满级";
		},
		"upgrade": function (lv) {
			var enabled = core.plugin.getTalentLv(1) >= 5 && core.status.hero.money >= 300 && core.itemCount("yellowGem") >= 3;
			if (lv == 0 && enabled) {
				core.status.hero.money -= 300;
				core.getItem("yellowGem", -3);
				core.addFlag("talent7_lv", 1);
				return true;
			} else if (lv == 1) {
				enabled = core.getFlag("talent7_up1", 0) >= 50;
				if (enabled) {
					core.addFlag("talent7_lv", 1);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【化防为盾】已提升至\r[yellow]2\r级。\n效果：战斗中，每回合获得相当于4%防御力的护盾。");
					}
					return true;
				}
			} else if (lv == 2) {
				enabled = core.status.hero.money >= 1000;
				if (enabled) {
					core.status.hero.money -= 1000;
					core.addFlag("talent7_lv", 1);
					return true;
				}
			}
			return false;
		},
		"maxlv": 3,
		"reading": "真空把的克星。"
	}, {
		"name": "强化护盾",
		"images": ["talent8.png", 204, 110],
		"description": function (lv) {
			var description = [
				"每点护盾额外抵挡0点伤害",
				"每点护盾额外抵挡0.4点伤害",
				"每点护盾额外抵挡0.7点伤害",
				"每点护盾额外抵挡1点伤害"
			];
			return description[lv];
		},
		"cost": function (lv) {
			var enabled = core.plugin.getTalentLv(2) >= 5 && core.status.hero.money >= 300 && core.itemCount("yellowGem") >= 3;
			if (lv == 0) {
				var disabled = core.getTalentLv(0) >= 5 && core.getTalentLv(1) >= 5;
				if (disabled) return "\r[red]提升需护盾强化达到5级，并消耗300金币和3黄宝石\r";
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需护盾强化达到5级，并消耗300金币和3黄宝石\r";
			} else if (lv == 1) {
				enabled = core.getFlag("talent8_up1", 0) >= 50;
				return "提升需打败" + (enabled ? "\r[green]" : "\r[yellow]") + "50只怪物(" + core.getFlag("talent8_up1", 0) + "/50)\r";
			} else if (lv == 2) {
				enabled = core.status.hero.money >= 1000;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗1000金币\r";
			}
			return "已达到满级";
		},
		"upgrade": function (lv) {
			var enabled = core.plugin.getTalentLv(2) >= 5 && core.status.hero.money >= 300 && core.itemCount("yellowGem") >= 3;
			var mdef_ratio_10 = core.getFlag("mdef_ratio", 1) * 10;
			if (lv == 0 && enabled) {
				core.status.hero.money -= 300;
				core.getItem("yellowGem", -3);
				core.addFlag("talent8_lv", 1);
				core.setFlag("mdef_ratio", (mdef_ratio_10 + 4) / 10);
				return true;
			} else if (lv == 1) {
				enabled = core.getFlag("talent8_up1", 0) >= 50;
				if (enabled) {
					core.addFlag("talent8_lv", 1);
					core.setFlag("mdef_ratio", (mdef_ratio_10 + 3) / 10);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【强化护盾】已提升至\r[yellow]2\r级。\n效果：每点护盾额外抵挡0.7点伤害");
					}
					return true;
				}
			} else if (lv == 2) {
				enabled = core.status.hero.money >= 1000;
				if (enabled) {
					core.status.hero.money -= 1000;
					core.addFlag("talent8_lv", 1);
					core.setFlag("mdef_ratio", (mdef_ratio_10 + 3) / 10);
					return true;
				}
			}
			return false;
		},
		"maxlv": 3,
		"reading": "你害怕净化是因为你护盾不够高"
	}, {
		"name": "自闭防守",
		"images": ["talent9.png", 244, 110],
		"description": function (lv) {
			var description = [
				"减免0%自身首次攻击前受到的战斗伤害；受到的地图伤害减少0%护盾值。",
				"减免30%自身首次攻击前受到的战斗伤害；受到的地图伤害减少1/3护盾值。",
				"减免40%自身首次攻击前受到的战斗伤害；受到的地图伤害减少2/3护盾值。",
				"减免50%自身首次攻击前受到的战斗伤害；受到的地图伤害减少1倍护盾值。"
			];
			return description[lv];
		},
		"cost": function (lv) {
			var enabled = core.plugin.getTalentLv(2) >= 5 && core.status.hero.money >= 300 && core.itemCount("yellowGem") >= 3;
			if (lv == 0) {
				var disabled = core.getTalentLv(0) >= 5 && core.getTalentLv(1) >= 5;
				if (disabled) return "\r[red]提升需护盾强化达到5级，并消耗300金币和3黄宝石\r";
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需护盾强化达到5级，并消耗300金币和3黄宝石\r";
			} else if (lv == 1) {
				enabled = core.getFlag("talent9_up1", 0) >= 50;
				return "提升需打败" + (enabled ? "\r[green]" : "\r[yellow]") + "50只怪物(" + core.getFlag("talent9_up1", 0) + "/50)\r";
			} else if (lv == 2) {
				enabled = core.status.hero.money >= 1000;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗1000金币\r";
			}
			return "已达到满级";
		},
		"upgrade": function (lv) {
			var enabled = core.plugin.getTalentLv(2) >= 5 && core.status.hero.money >= 300 && core.itemCount("yellowGem") >= 3;
			if (lv == 0 && enabled) {
				core.status.hero.money -= 300;
				core.getItem("yellowGem", -3);
				core.addFlag("talent9_lv", 1);
				return true;
			} else if (lv == 1) {
				enabled = core.getFlag("talent9_up1", 0) >= 50;
				if (enabled) {
					core.addFlag("talent9_lv", 1);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【自闭防守】已提升至\r[yellow]2\r级。\n效果：减免40%自身首次攻击前受到的战斗伤害；受到的地图伤害减少2/3护盾值。");
					}
					return true;
				}
			} else if (lv == 2) {
				enabled = core.status.hero.money >= 1000;
				if (enabled) {
					core.status.hero.money -= 1000;
					core.addFlag("talent9_lv", 1);
					return true;
				}
			}
			return false;
		},
		"maxlv": 3,
		"reading": "在展开进攻前抵挡全方位的伤害"
	}, {
		"name": "旅行者",
		"images": ["talent10.png", 64, 190],
		"description": function (lv) {
			var description = [
				"未解锁",
				"增加2000基础攻击和防御，拾取的血瓶效果增加20%",
				"增加4000基础攻击和防御，拾取的血瓶效果增加40%"
			];
			return description[lv];
		},
		"cost": function (lv) {
			var enabled = core.getTalentLv(4) == 3 && core.getTalentLv(5) == 3 && core.getTalentLv(6) == 3 && core.getTalentLv(7) == 3 &&
				core.itemCount("yellowGem") >= 10 && core.status.hero.money >= 2500;
			var disabled = core.getTalentLv(2) == 5;
			if (lv == 0) {
				return (disabled ? "\r[red]" : "") + "需前置天赋全满\r，消耗" + (enabled ? "\r[green]" : "\r[yellow]") + "10黄宝石和2500金币\r";
			} else if (lv == 1) {
				enabled = core.status.hero.money >= 7500;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗7500金币\r";
			} else if (lv == 114514) {
				enabled = false;
				return "需累计拾取" + (enabled ? "\r[green]" : "\r[yellow]") + "114514个血瓶(" + core.getFlag("talent10_up2_spe", 0) + "/114514)\r";
			}
			return "已达到满级";
		},
		"upgrade": function (lv) {
			var enabled = core.getTalentLv(4) == 3 && core.getTalentLv(5) == 3 && core.getTalentLv(6) == 3 && core.getTalentLv(7) == 3 &&
				core.itemCount("yellowGem") >= 10 && core.status.hero.money >= 2500;
			if (lv == 0 && enabled) {
				core.getItem("yellowGem", -10);
				core.status.hero.money -= 2500;
				core.addFlag("talent10_lv", 1);
				core.addFlag("potion_extra_ratio", 2);
				core.setFlag("itemDetailCache", {});
				core.status.hero.atk += 2000;
				core.status.hero.def += 2000;
				return true;
			} else if (lv == 1) {
				enabled = core.status.hero.money >= 7500;
				if (enabled) {
					core.status.hero.money -= 7500;
					core.addFlag("talent10_lv", 1);
					core.addFlag("potion_extra_ratio", 2);
					core.setFlag("itemDetailCache", {});
					core.status.hero.atk += 2000;
					core.status.hero.def += 2000;
					return true;
				}
			} else if (core.getFlag("talent10_up2_spe", 0) >= 114514) {
				core.addFlag("talent10_lv", 1);
				core.addFlag("potion_extra_ratio", 1);
				core.status.hero.atk += 2000;
				core.status.hero.def += 2000;
				return true;
			}
			return false;
		},
		"maxlv": 2,
		"reading": "经典而朴素的体验"
	}, {
		"name": "探险者",
		"images": ["talent11.png", 144, 190],
		"description": function (lv) {
			var description = [
				"未解锁",
				"增加2000基础攻击和护盾，首次攻击时造成50%攻击和护盾能力之和的技能伤害",
				"增加4000基础攻击和护盾，首次攻击时造成100%攻击和护盾能力之和的技能伤害"
			];
			return description[lv];
		},
		"cost": function (lv) {
			var enabled = core.getTalentLv(4) == 3 && core.getTalentLv(5) == 3 && core.getTalentLv(8) == 3 && core.getTalentLv(9) == 3 &&
				core.itemCount("yellowGem") >= 10 && core.status.hero.money >= 2500;
			var disabled = core.getTalentLv(1) == 5;
			if (lv == 0) {
				return (disabled ? "\r[red]" : "") + "需前置天赋全满\r，消耗" + (enabled ? "\r[green]" : "\r[yellow]") + "10黄宝石和2500金币\r";
			} else if (lv == 1) {
				enabled = core.status.hero.money >= 7500;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗7500金币\r";
			} else if (lv == 114514) {
				enabled = false;
				return "需进行" + (enabled ? "\r[green]" : "\r[yellow]") + "114514次回合数不大于5的战斗(" + core.getFlag("talent11_up2_spe", 0) + "/114514)\r";
			}
			return "已达到满级";
		},
		"upgrade": function (lv) {
			var enabled = core.getTalentLv(4) == 3 && core.getTalentLv(5) == 3 && core.getTalentLv(8) == 3 && core.getTalentLv(9) == 3 &&
				core.itemCount("yellowGem") >= 10 && core.status.hero.money >= 2500;
			if (lv == 0 && enabled) {
				core.getItem("yellowGem", -10);
				core.status.hero.money -= 2500;
				core.addFlag("talent11_lv", 1);
				core.status.hero.atk += 2000;
				core.status.hero.mdef += 2000;
				return true;
			} else if (lv == 1) {
				enabled = core.status.hero.money >= 7500;
				if (enabled) {
					core.status.hero.money -= 7500;
					core.addFlag("talent11_lv", 1);
					core.status.hero.atk += 2000;
					core.status.hero.mdef += 2000;
					return true;
				}
			} else if (core.getFlag("talent11_up2_spe", 0) >= 114514) {
				core.addFlag("talent11_lv", 1);
				core.status.hero.atk += 2000;
				core.status.hero.mdef += 2000;
				return true;
			}
			return false;
		},
		"maxlv": 2,
		"reading": "再也不怕被先攻怪打护盾影响伤害值了"
	}, {
		"name": "开拓者",
		"images": ["talent12.png", 224, 190],
		"description": function (lv) {
			var description = [
				"未解锁",
				"增加2000基础防御和护盾，每5回合恢复10%防御值的生命，最多回复20次。",
				"增加4000基础防御和护盾，每5回合恢复10%防御值的生命，最多回复30次。"
			];
			return description[lv];
		},
		"cost": function (lv) {
			var enabled = core.getTalentLv(6) == 3 && core.getTalentLv(7) == 3 && core.getTalentLv(8) == 3 && core.getTalentLv(9) == 3 &&
				core.itemCount("yellowGem") >= 10 && core.status.hero.money >= 2500;
			var disabled = core.getTalentLv(0) == 5;
			if (lv == 0) {
				return (disabled ? "\r[red]" : "") + "需前置天赋全满\r，消耗" + (enabled ? "\r[green]" : "\r[yellow]") + "10黄宝石和2500金币\r";
			} else if (lv == 1) {
				enabled = core.status.hero.money >= 7500;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗7500金币\r";
			} else if (lv == 114514) {
				enabled = false;
				return "需累计触发本技能" + (enabled ? "\r[green]" : "\r[yellow]") + "114514次(" + core.getFlag("talent12_up2_spe", 0) + "/114514)\r";
			}
			return "已达到满级";
		},
		"upgrade": function (lv) {
			var enabled = core.getTalentLv(6) == 3 && core.getTalentLv(7) == 3 && core.getTalentLv(8) == 3 && core.getTalentLv(9) == 3 &&
				core.itemCount("yellowGem") >= 10 && core.status.hero.money >= 2500;
			if (lv == 0 && enabled) {
				core.getItem("yellowGem", -10);
				core.status.hero.money -= 2500;
				core.addFlag("talent12_lv", 1);
				core.status.hero.def += 2000;
				core.status.hero.mdef += 2000;
				return true;
			} else if (lv == 1) {
				enabled = core.status.hero.money >= 7500;
				if (enabled) {
					core.status.hero.money -= 7500;
					core.addFlag("talent12_lv", 1);
					core.status.hero.def += 2000;
					core.status.hero.mdef += 2000;
					return true;
				}
			} else if (core.getFlag("talent12_up2_spe", 0) >= 114514) {
				core.addFlag("talent12_lv", 1);
				core.addFlag("talent12_lv", 1);
				core.status.hero.def += 2000;
				core.status.hero.mdef += 2000;
				return true;
			}
			return false;
		},
		"maxlv": 2,
		"reading": "改版的真空把"
	}, {
		"name": "鸽化",
		"images": ["talent13.png", 304, 190],
		"description": function (lv) {
			var description = [
				"未解锁。",
				"暂时进入鸽化形态，冷却若干次战斗。"
			];
			if (core.getTalentLv(10) > 0) {
				description[1] = "基础攻防提升10000，捡到的血瓶总效果变为3倍，无视地图伤害，但行走第x步时消耗2x能量，可主动取消。冷却10次战斗。";
			} else if (core.getTalentLv(11) > 0) {
				description[1] = "暂时获得5000攻击和25000护盾，在战斗中造成伤害的10%回复自身生命，但只能往同一个方向移动，否则在移动后效果消失。效果期间无法使用楼层传送器。消耗60能量，冷却8次战斗（使用后立即开始计算）。";
			} else if (core.getTalentLv(12) > 0) {
				description[1] = "暂时获得5000防御，每点护盾额外抵挡0.4点伤害，并在战斗后将护盾按吸收伤害的点数转化为生命值，但战斗的总伤害不能低于-3倍护盾值；第x次战斗后消耗20x点能量，可主动取消。冷却10次战斗。";
			}
			return description[lv];
		},
		"cost": function (lv) {
			var enabled = core.getFlag("talent13_enabled", false);
			if (lv == 0) {
				return "提升需消耗" + (enabled ? "\r[green]" : "\r[yellow]") + "？？？\r";
			}
			return "已达到满级";
		},
		"upgrade": function (lv) {
			var enabled = core.getFlag("talent13_enabled", false);
			if (enabled) {
				if (core.getTalentLv(10) > 0) {
					core.setFlag("skill5_description", "基础攻防提升10000，捡到的血瓶总效果变为3倍，无视地图伤害，但行走第x步时消耗2x能量，可主动取消。");
				} else if (core.getTalentLv(11) > 0) {
					core.setFlag("skill5_description", "暂时获得5000攻击和25000护盾，在战斗中造成伤害的10%回复自身生命，但只能往同一个方向移动，否则在移动后效果消失。效果期间无法使用楼层传送器。消耗60能量。");
				} else if (core.getTalentLv(12) > 0) {
					core.setFlag("skill5_description", "暂时获得5000防御，每点护盾额外抵挡0.4点伤害，并在战斗后将护盾按吸收伤害的点数转化为生命值，但战斗的总伤害不能低于-3倍护盾值；第x次战斗后消耗20x点能量，可主动取消。");
				}
				core.getItem("skill5");
				core.addFlag("talent13_lv", 1);
				return true;
			}
			return false;
		},
		"reading": "鸽者，诡道也。故鸽而示之不鸽，饼而示之非饼。",
		"maxlv": 1
	}];

	// 技能之间的连线
	var edges = [
		[0, 4],
		[0, 5],
		[1, 6],
		[1, 7],
		[2, 8],
		[2, 9]
	];
	var edges2 = [
		[4, 5, 10],
		[6, 7, 10],
		[4, 5, 11],
		[8, 9, 11],
		[6, 7, 12],
		[8, 9, 12]
	];

	// 技能的前置技能。若没有，则填-1
	// 不参与实际升级逻辑的判断，仅供上下箭头移动使用
	var fathers = [-1, -1, -1, -1, 0, 0, 1, 1, 2, 2, 5, 7, 9, 3];
	var sons = [4, 6, 8, 13, 10, 10, 11, 11, 12, 12, -1, -1, -1, -1];

	var current, old_current;
	var content = "";

	this.getTalentLv = function (cur) {
		if (!core.hasItem("talentTree")) return 0;
		return core.getFlag("talent" + cur + "_lv", 0);
	}
	this.getTalentDescription = function (cur) {
		var curObj = talentTree[cur];
		var lv = this.getTalentLv(cur);
		var str = curObj.description(lv) + "\n";
		if (lv < curObj.maxlv) {
			str += "\r[yellow]下一级\r：" + curObj.cost(lv) + "\n\r[gray]" + curObj.description(lv + 1) + "\r\n";
			str += "下一级的升级条件：" + curObj.cost(lv + 1) + "\n";
		}
		if (curObj.reading) {
			str += "\\c[14]" + curObj.reading + "\\c\n";
		}
		return str;
	}
	// 此处假定图片的长宽均为32. 如果不是，请修改此处的32，以及下文的所有32和16（此为长/宽的一半）。
	this._inRect = function (px, py, rx, ry) {
		return (px >= rx) && (px <= rx + 32) && (py >= ry) && (py <= ry + 32);
	};

	this._drawEdge = function (x1, y1, x2, y2, color) {
		if (y1 < y2)
			core.drawLine("uievent", x1, y1 + 32, x2, y2, color);
		else
			core.drawLine("uievent", x1, y1, x2, y2 + 32, color);
	};

	this._tryUpgrade = function (pos) {
		var curObj = talentTree[pos];
		var lv = this.getTalentLv(pos);
		// 检查前置条件
		if (lv == curObj.maxlv) {
			if (!core.isReplaying()) core.playSound('操作失败');
			core.insertAction({ "type": "tip", "text": "已升至最高等级，不可再升级！" });
			return;
		}
		if (!curObj.upgrade(lv)) {
			if (!core.isReplaying()) core.playSound('操作失败');
			core.insertAction({ "type": "tip", "text": "升级条件不足！" });
			return;
		}
		core.playSound('确定');
		core.insertAction({ "type": "tip", "text": "升级成功！" });

		content = this.getTalentDescription(pos);
		core.updateStatusBar();
	};

	this._drawSkillTree = function () {
		core.deleteCanvas('uievent');
		core.ui._createUIEvent();
		core.clearMap('uievent');
		core.ui._uievent_drawBackground({ background: [0, 0, 0, 0.85], x: 0, y: 0, width: 416, height: 416 });
		var getEdgeColor = function (id) {
			var done_color = "#63FF63";
			var active_color = "white";
			switch (id) {
			case 0:
				if (core.getTalentLv(4) == 3) return done_color;
				if (core.getTalentLv(0) == 5) return active_color;
				break;
			case 1:
				if (core.getTalentLv(5) == 3) return done_color;
				if (core.getTalentLv(0) == 5) return active_color;
				break;
			case 2:
				if (core.getTalentLv(6) == 3) return done_color;
				if (core.getTalentLv(1) == 5) return active_color;
				break;
			case 3:
				if (core.getTalentLv(7) == 3) return done_color;
				if (core.getTalentLv(1) == 5) return active_color;
				break;
			case 4:
				if (core.getTalentLv(8) == 3) return done_color;
				if (core.getTalentLv(2) == 5) return active_color;
				break;
			case 5:
				if (core.getTalentLv(9) == 3) return done_color;
				if (core.getTalentLv(2) == 5) return active_color;
				break;
			case 6:
				if (core.getTalentLv(10) == 2) return done_color;
				if (core.getTalentLv(4) == 3 && core.getTalentLv(5) == 3) return active_color;
				break;
			case 8:
				if (core.getTalentLv(11) == 2) return done_color;
				if (core.getTalentLv(4) == 3 && core.getTalentLv(5) == 3) return active_color;
				break;
			case 7:
				if (core.getTalentLv(10) == 2) return done_color;
				if (core.getTalentLv(6) == 3 && core.getTalentLv(7) == 3) return active_color;
				break;
			case 10:
				if (core.getTalentLv(12) == 2) return done_color;
				if (core.getTalentLv(6) == 3 && core.getTalentLv(7) == 3) return active_color;
				break;
			case 9:
				if (core.getTalentLv(11) == 2) return done_color;
				if (core.getTalentLv(8) == 3 && core.getTalentLv(9) == 3) return active_color;
				break;
			case 11:
				if (core.getTalentLv(12) == 2) return done_color;
				if (core.getTalentLv(8) == 3 && core.getTalentLv(9) == 3) return active_color;
				break;
			}
			return "gray";
		}
		for (var i in edges) {
			this._drawEdge(talentTree[edges[i][0]].images[1] + 16, talentTree[edges[i][0]].images[2],
				talentTree[edges[i][1]].images[1] + 16, talentTree[edges[i][1]].images[2], getEdgeColor(Number(i)));
		}
		for (var i in edges2) {
			this._drawEdge((talentTree[edges2[i][0]].images[1] + talentTree[edges2[i][1]].images[1]) / 2 + 16, talentTree[edges2[i][0]].images[2],
				talentTree[edges2[i][2]].images[1] + 16, talentTree[edges2[i][2]].images[2], getEdgeColor(Number(i) + 6));
		}
		for (var i in talentTree) {
			core.drawImage("uievent", talentTree[i].images[0], talentTree[i].images[1], talentTree[i].images[2]);
			var x = talentTree[i].images[1],
				y = talentTree[i].images[2];
			if (i == current) {
				var thick = 2;
				core.ui.strokeRoundRect("uievent", x - thick, y - thick, 32 + 2 * thick, 32 + 2 * thick, thick, '#FFFF00', thick);
			}
			if (core.getTalentLv(i) < talentTree[i].maxlv) {
				var color = '#FFFFFF';
				if (talentTree[i].cost(core.getTalentLv(i)).indexOf("green") > 0) {
					color = '#00FF00';
				}
				if (talentTree[i].cost(core.getTalentLv(i)).indexOf("red") > 0) {
					color = '#FF0000';
				}
				core.ui.fillText("uievent", "(" + core.getTalentLv(i) + "/" + talentTree[i].maxlv + ")", x, y + 48, color, "15px Georgia");
			}
		}
		var curObj = talentTree[current];
		var lv = this.getTalentLv(current);
		core.ui._uievent_drawTextContent({ text: "\r[yellow]【" + curObj.name + "】(" + lv + "/" + curObj.maxlv + ")\r", left: 10, top: 245, maxWidth: 396, align: "center" });
		core.ui._uievent_drawTextContent({ text: content, left: 10, top: 265, maxWidth: 396, align: "center" });
		core.ui._uievent_drawTextContent({ text: "离开", left: 368, top: 388, bold: true, fontSize: 20 });
	};

	this._clickedSkill = function (px, py) {
		for (var i in talentTree) {
			if (this._inRect(px, py, talentTree[i].images[1], talentTree[i].images[2])) {
				old_current = current;
				current = Number(i);
				content = this.getTalentDescription(current);
				if (old_current == current)
					this._tryUpgrade(i);
			}
		}
		if (px >= 368 && py >= 388) { // 离开
			core.setFlag("talentTree_isOpen", false);
			if (!core.isReplaying()) core.playSound('取消');
			core.setFlag("talentTree_last_current", current);
			return core.insertAction({ "type": "break" });
		}
	};

	this._keySkill = function (key) {
		var i = 0;
		switch (key) {
		case 88:
		case 89:
		case 27: //esc/y/x
			core.setFlag("talentTree_isOpen", false);
			if (!core.isReplaying()) core.playSound('取消');
			core.setFlag("talentTree_last_current", current);
			core.insertAction({ "type": "break" });
			break;
		case 38: //up
			if (!core.isReplaying()) core.playSound('光标移动');
			if (fathers[current] != -1) {
				old_current = current;
				current = fathers[current];
			}
			content = this.getTalentDescription(current);
			break;
		case 40: //down
			if (!core.isReplaying()) core.playSound('光标移动');
			if (sons[current] != -1) {
				old_current = current;
				current = sons[current];
			}
			content = this.getTalentDescription(current);
			break;
		case 37: //left
			if (!core.isReplaying()) core.playSound('光标移动');
			old_current = current;
			current -= 1;
			if (current < 0) current += 14;
			content = this.getTalentDescription(current);
			break;
		case 39: // right
			if (!core.isReplaying()) core.playSound('光标移动');
			old_current = current;
			current += 1;
			if (current >= 14) current -= 14;
			content = this.getTalentDescription(current);
			break;
		case 13:
		case 32: //enter/space
			this._tryUpgrade(current);
		}
	};

	this._activateSkill = function () {
		if (flags.type == 0)
			this._keySkill(flags.keycode);
		else
			this._clickedSkill(flags.px, flags.py);
	};

	this.openSkillTree = function () {
		// 清除主角转身的 timeout 事件
		// 如果没有这行，_setAutomaticRoute_isTurning 里面的 setTimeout 会导致转身发生在打开天赋树之后，进而炸录像
		clearTimeout(core.timeout.turnHeroTimeout);
		core.timeout.turnHeroTimeout = null;

		core.playSound("打开界面");
		core.setFlag("talentTree_isOpen", true);
		current = Number(core.getFlag("talentTree_last_current", 0));
		old_current = -1;
		content = this.getTalentDescription(current);
		core.insertAction([{
				"type": "while",
				"condition": "true",
				"data": [
					{ "type": "function", "function": "function () { core.plugin._drawSkillTree(); }" },
					{ "type": "wait" },
					{ "type": "function", "function": "function() { core.plugin._activateSkill(); }" }
				]
			},
			{
				"type": "function",
				"function": "function () { " +
					"core.deleteCanvas('uievent');" +
					"core.clearUI(); " +
					"core.clearMap('uievent');" +
					"}"
			}
		]);
	};
},
    "talentTree2": function () {
	// 这里的代码和第三章的天赋树有大量重复，但我懒得重构代码了，咕了
	var talentTree2 = [{
		"name": "后抛",
		"images": ["talentT2_0.png", 64, 30],
		"description": function (lv) {
			return "获得技能【后抛】：将面前的怪物抛到身后！背后是空地才能使用，消耗50能量。对拥有特殊头衔的对手无效。";
		},
		"cost": function (lv) {
			return "已达到满级。";
		},
		"upgrade": function (lv) {
			return false;
		},
		"canUpgrade": function (lv) {
			return false;
		},
		"reading": "胆小者和莽夫都喜欢",
		"maxlv": 1
	}, {
		"name": "气旋",
		"images": ["talentT2_1.png", 144, 30],
		"description": function (lv) {
			if (lv == 0) return "未解锁";
			var rounds = [0, 0, 1][lv];
			return "身后非空地时也可以使用【后抛】！你会与对手战斗，使对方的先攻类效果失效，且对方被额外先攻" + rounds + "次";
		},
		"cost": function (lv) {
			var cost = [1500, 4000][lv];
			var enabled = core.status.hero.money >= cost;
			if (lv < 2) {
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗" + cost + "金币\r";
			}
			return "已达到满级。";
		},
		"upgrade": function (lv) {
			var cost = [1500, 4000][lv];
			var rounds = [0, 0, 1][lv + 1];
			var enabled = core.status.hero.money >= cost;
			if (lv < 2 && enabled) {
				core.addFlag("talent2_1_lv", 1);
				core.status.hero.money -= cost;
				core.setFlag("skill6_battle_round", rounds);
				if (lv == 0) { core.setFlag("skill6_extra_description", "背后不是空地则强制战斗。"); } else { core.setFlag("skill6_extra_description", "背后不是空地则强制战斗，且对手被额外先攻" + rounds + "次。"); }
				return true;
			}
			return false;
		},
		"canUpgrade": function (lv) {
			if (lv >= 2) return false;
			var cost = [1500, 4000][lv];
			return core.status.hero.money >= cost;
		},
		"reading": "抛来抛去头好晕~",
		"maxlv": 2
	}, {
		"name": "跳跃",
		"images": ["talentT2_2.png", 224, 30],
		"description": function (lv) {
			if (lv == 0) return "未解锁";
			return "获得技能【跳跃】：跳向面前2格的空地，消耗200能量。能跃过空地、敌人或物品，不能跃过障碍物。";
		},
		"cost": function (lv) {
			var cost = 6000;
			var enabled = core.status.hero.money >= cost && core.getTalentLv2(1) >= 2;
			if (lv < 1) {
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需气旋达到2级，并消耗" + cost + "金币\r";
			}
			return "已达到满级。";
		},
		"upgrade": function (lv) {
			var cost = 6000;
			var enabled = core.status.hero.money >= cost && core.getTalentLv2(1) >= 2;
			if (lv == 0 && enabled) {
				core.status.hero.money -= cost;
				core.getItem("skill8", 1);
				core.setFlag("skill8_extra_description", "能跃过空地、敌人或物品，不能跃过障碍物。");
				core.addFlag("talent2_2_lv", 1);
				return true;
			}
			return false;
		},
		"canUpgrade": function (lv) {
			if (lv >= 1) return false;
			return core.status.hero.money >= 6000 && core.getTalentLv2(1) >= 2;
		},
		"reading": "跳来跳去头好晕~",
		"maxlv": 1
	}, {
		"name": "大跳",
		"images": ["talentT2_3.png", 304, 30],
		"description": function (lv) {
			if (lv == 0) return "未解锁";
			return "【跳跃】可以越过墙或门！";
		},
		"cost": function (lv) {
			var enabled = core.status.hero.money >= 10000 && core.itemCount("yellowGem") >= 10;
			if (lv < 1) return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗10000金币和10黄宝石\r";
			return "已达到满级";
		},
		"upgrade": function (lv) {
			var enabled = core.status.hero.money >= 10000 && core.itemCount("yellowGem") >= 10;
			if (lv < 1 && enabled) {
				core.status.hero.money -= 10000;
				core.getItem("yellowGem", -10);
				core.addFlag("talent2_3_lv", 1);
				core.setFlag("skill8_extra_description", "可以跃过墙或门。");
				return true;
			}
			return false;
		},
		"canUpgrade": function (lv) {
			if (lv >= 1) return false;
			return core.status.hero.money >= 10000 && core.itemCount("yellowGem") >= 10;
		},
		"reading": "如入无人之境",
		"maxlv": 1
	}, {
		"name": "潜行",
		"images": ["talentT2_4.png", 64, 110],
		"description": function (lv) {
			if (lv == 0) return "未解锁";
			return "获得技能【潜行】：进入隐身状态，无视地图伤害，直到发起战斗或主动退出。消耗100能量。";
		},
		"cost": function (lv) {
			if (lv == 1) return "已达到满级。";
			var enabled = core.itemCount("yellowGem") >= 2;
			return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗2颗黄宝石(" + core.itemCount("yellowGem") + "/2)\r";
		},
		"upgrade": function (lv) {
			if (lv == 1) return false;
			var enabled = core.itemCount("yellowGem") >= 2;
			if (enabled) {
				core.getItem("yellowGem", -2);
				core.addFlag("talent2_4_lv", 1);
				core.setFlag("skill7_cost", 100);
				core.setFlag("skill7_cancel_return_cost", 0);
				core.getItem("skill7", 1);
				return true;
			}
			return false;
		},
		"canUpgrade": function (lv) {
			if (lv >= 1) return false;
			return core.itemCount("yellowGem") >= 2;
		},
		"reading": "进行移动前就退出隐身会返还全部消耗的能量。",
		"maxlv": 1
	}, {
		"name": "偷袭",
		"images": ["talentT2_5.png", 144, 110],
		"description": function (lv) {
			if (lv == 0) return "未解锁";
			if (lv == 1) return "在隐身状态下发起战斗时，在战斗中降低敌人100000点防御。";
			return "【潜行】消耗能量提升25点；通过总伤害不大于0的战斗、或移动后主动取消退出隐身时，返还50点能量。在隐身状态下发起战斗时，在战斗中降低敌人200000点防御。";
		},
		"cost": function (lv) {
			var cost = [4, 6][lv];
			var enabled = core.itemCount("yellowGem") >= cost;
			if (lv < 2) {
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗" + cost + "黄宝石(" + core.itemCount("yellowGem") + "/" + cost + ")\r";
			}
			return "已达到满级。";
		},
		"upgrade": function (lv) {
			var cost = [4, 6][lv];
			var enabled = core.itemCount("yellowGem") >= cost;
			if (enabled) {
				if (lv == 0) {
					core.getItem("yellowGem", -cost);
					core.addFlag("talent2_5_lv", 1);
					return true;
				} else if (lv == 1) {
					core.getItem("yellowGem", -cost);
					core.addFlag("talent2_5_lv", 1);
					core.setFlag("skill7_cost", 125);
					core.setFlag("skill7_cancel_return_cost", 50);
					if (core.getFlag("invisible", 0) && !core.getFlag("invisible_moved", 1)) {
						core.setFlag("invisible_moved", 2221);
					}
					return true;
				}
			}
			return false;
		},
		"canUpgrade": function (lv) {
			if (lv >= 2) return false;
			var cost = [4, 6][lv];
			return core.itemCount("yellowGem") >= cost;
		},
		"reading": "为什么隐身发起突袭还是会被对手先攻？\n因为对手实际上是完全闪避了前几回合的攻击。（强行解释，太屑了",
		"maxlv": 2
	}, {
		"name": "搬箱子",
		"images": ["talentT2_6.png", 224, 110],
		"description": function (lv) {
			if (lv == 0) return "未解锁";
			return "面前是黄门或物品时也可以使用【后抛】！";
		},
		"cost": function (lv) {
			var enabled = core.status.hero.money >= 7000 && core.itemCount("yellowGem") >= 5 && core.getTalentLv2(1) >= 2;
			if (lv < 1) {
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需气旋达到2级，并消耗7000金币和5黄宝石\r";
			}
			return "已达到满级。";
		},
		"upgrade": function (lv) {
			var enabled = core.status.hero.money >= 7000 && core.itemCount("yellowGem") >= 5 && core.getTalentLv2(1) >= 2;
			if (lv == 0 && enabled) {
				core.addFlag("talent2_6_lv", 1);
				core.status.hero.money -= 7000;
				core.getItem("yellowGem", -5);
				return true;
			}
			return false;
		},
		"canUpgrade": function (lv) {
			if (lv >= 1) return false;
			return core.status.hero.money >= 7000 && core.itemCount("yellowGem") >= 5 && core.getTalentLv2(1) >= 2;
		},
		"reading": "想要撬动黄门，或者使血瓶被抛起后不会摔碎，需要非常巧妙地控制魔法力量",
		"maxlv": 1
	}, {
		"name": "破竹之势",
		"images": ["talentT2_7.png", 304, 110],
		"description": function (lv) {
			if (lv == 0) return "未解锁";
			return "强化【跳跃】：使用跳跃后获得75%最终战斗减伤，持续到改变移动方向为止。";
		},
		"cost": function (lv) {
			var enabled = core.status.hero.money >= 10000 && core.itemCount("yellowGem") >= 10 && core.getTalentLv2(3) == 1;
			if (lv < 1) return (enabled ? "\r[green]" : "\r[yellow]") + "提升需解锁前置天赋，并消耗10000金币和10黄宝石\r";
			return "已达到满级";
		},
		"upgrade": function (lv) {
			var enabled = core.status.hero.money >= 10000 && core.itemCount("yellowGem") >= 10 && core.getTalentLv2(3) == 1;
			if (lv == 0 && enabled) {
				core.addFlag("talent2_7_lv", 1);
				core.status.hero.money -= 10000;
				core.getItem("yellowGem", -10);
				return true;
			}
			return false;
		},
		"canUpgrade": function (lv) {
			if (lv >= 1) return false;
			return core.status.hero.money >= 10000 && core.itemCount("yellowGem") >= 10 && core.getTalentLv2(3) == 1;
		},
		"reading": "一夜暴毙:rework",
		"maxlv": 1
	}];

	// 技能之间的连线
	var edges = [
		[0, 1],
		[1, 2],
		[2, 3],
		[4, 5]
	];
	var edges2 = [
		[1, 6],
		[3, 7]
	];

	// 技能的前置技能。若没有，则填-1
	// 不参与实际升级逻辑的判断，仅供上下箭头移动使用
	var fathers = [-1, -1, -1, -1, 0, 1, 2, 3];
	var sons = [4, 5, 6, 7, -1, -1, -1, -1];

	var current, old_current;
	var content = "";

	this.getTalentLv2 = function (cur) {
		if (!core.hasItem("talentTree2")) return 0;
		return core.getFlag("talent2_" + cur + "_lv", 0);
	}
	this.getTalentDescription2 = function (cur) {
		var curObj = talentTree2[cur];
		var lv = this.getTalentLv2(cur);
		var str = curObj.description(lv) + "\n";
		if (lv < curObj.maxlv) {
			str += "\r[yellow]下一级\r：" + curObj.cost(lv) + "\n\r[gray]" + curObj.description(lv + 1) + "\r\n";
			str += "下一级的升级条件：" + curObj.cost(lv + 1) + "\n";
		}
		if (curObj.reading) {
			str += "\\c[14]" + curObj.reading + "\\c\n";
		}
		return str;
	}
	this.canUpgradeTalent2 = function (index) {
		var lv = this.getTalentLv2(index);
		return talentTree2[index].canUpgrade(lv);
	}

	this._tryUpgrade2 = function (pos) {
		var curObj = talentTree2[pos];
		var lv = this.getTalentLv2(pos);
		// 检查前置条件
		if (lv == curObj.maxlv) {
			if (!core.isReplaying()) core.playSound('操作失败');
			core.insertAction({ "type": "tip", "text": "已升至最高等级，不可再升级！" });
			return;
		}
		if (!curObj.upgrade(lv)) {
			if (!core.isReplaying()) core.playSound('操作失败');
			core.insertAction({ "type": "tip", "text": "升级条件不足！" });
			return;
		}
		core.playSound('确定');
		core.insertAction({ "type": "tip", "text": "升级成功！" });

		content = this.getTalentDescription2(pos);
		core.updateStatusBar();
	};

	this._drawSkillTree2 = function () {
		core.deleteCanvas('uievent');
		core.ui._createUIEvent();
		core.clearMap('uievent');
		core.ui._uievent_drawBackground({ background: [0, 0, 0, 0.85], x: 0, y: 0, width: 416, height: 416 });
		var getEdgeColor = function (id) {
			var active_color = "#63FF63";
			switch (id) {
			case 0:
				return active_color;
			case 1:
				if (core.getTalentLv2(1) == 2) return active_color;
				break;
			case 2:
				if (core.getTalentLv2(2) == 1) return active_color;
				break;
			case 3:
				if (core.getTalentLv2(4) == 1) return active_color;
				break;
			case 4:
				if (core.getTalentLv2(1) == 2) return active_color;
				break;
			case 5:
				if (core.getTalentLv2(3) == 1) return active_color;
				break;
			}
			return "gray";
		}
		var talentTree = talentTree2;
		for (var i in edges) {
			this._drawEdge(talentTree[edges[i][0]].images[1] + 32, talentTree[edges[i][0]].images[2] + 16,
				talentTree[edges[i][1]].images[1], talentTree[edges[i][1]].images[2] - 16, getEdgeColor(Number(i)));
		}
		for (var i in edges2) {
			this._drawEdge(talentTree[edges2[i][0]].images[1] + 16, talentTree[edges2[i][0]].images[2],
				talentTree[edges2[i][1]].images[1] + 16, talentTree[edges2[i][1]].images[2], getEdgeColor(Number(i) + 4));
		}
		for (var i in talentTree) {
			core.drawImage("uievent", talentTree[i].images[0], talentTree[i].images[1], talentTree[i].images[2]);
			var x = talentTree[i].images[1],
				y = talentTree[i].images[2];
			if (i == current) {
				var thick = 2;
				core.ui.strokeRoundRect("uievent", x - thick, y - thick, 32 + 2 * thick, 32 + 2 * thick, thick, '#FFFF00', thick);
			}
			if (core.getTalentLv2(i) < talentTree[i].maxlv) {
				var color = '#FFFFFF';
				if (talentTree[i].cost(core.getTalentLv2(i)).indexOf("green") > 0) {
					color = '#00FF00';
				}
				if (talentTree[i].cost(core.getTalentLv2(i)).indexOf("red") > 0) {
					color = '#FF0000';
				}
				core.ui.fillText("uievent", "(" + core.getTalentLv2(i) + "/" + talentTree[i].maxlv + ")", x, y + 48, color, "15px Georgia");
			}
		}
		var curObj = talentTree[current];
		var lv = this.getTalentLv2(current);
		core.ui._uievent_drawTextContent({ text: "\r[yellow]【" + curObj.name + "】(" + lv + "/" + curObj.maxlv + ")\r", left: 10, top: 175, maxWidth: 396, align: "center" });
		core.ui._uievent_drawTextContent({ text: content, left: 10, top: 195, maxWidth: 396, align: "center" });
		core.ui._uievent_drawTextContent({ text: "离开", left: 368, top: 388, bold: true, fontSize: 20 });
	};

	this._clickedSkill2 = function (px, py) {
		for (var i in talentTree2) {
			if (this._inRect(px, py, talentTree2[i].images[1], talentTree2[i].images[2])) {
				old_current = current;
				current = Number(i);
				if (!core.isReplaying()) core.playSound('光标移动');
				content = this.getTalentDescription2(current);
				if (old_current == current)
					this._tryUpgrade2(i);
			}
		}
		if (px >= 368 && py >= 388) { // 离开
			core.setFlag("talentTree_isOpen", false);
			if (!core.isReplaying()) core.playSound('取消');
			core.setFlag("talentTree_last_current", current);
			return core.insertAction({ "type": "break" });
		}
	};

	this._keySkill2 = function (key) {
		var talent_num = 8;
		var i = 0;
		switch (key) {
		case 88:
		case 89:
		case 27: //esc/y/x
			core.setFlag("talentTree_isOpen", false);
			if (!core.isReplaying()) core.playSound('取消');
			core.setFlag("talentTree_last_current", current);
			core.insertAction({ "type": "break" });
			break;
		case 38: //up
			if (!core.isReplaying()) core.playSound('光标移动');
			if (fathers[current] != -1) {
				old_current = current;
				current = fathers[current];
			}
			content = this.getTalentDescription2(current);
			break;
		case 40: //down
			if (!core.isReplaying()) core.playSound('光标移动');
			if (sons[current] != -1) {
				old_current = current;
				current = sons[current];
			}
			content = this.getTalentDescription2(current);
			break;
		case 37: //left
			if (!core.isReplaying()) core.playSound('光标移动');
			old_current = current;
			current -= 1;
			if (current < 0) current += talent_num;
			content = this.getTalentDescription2(current);
			break;
		case 39: // right
			if (!core.isReplaying()) core.playSound('光标移动');
			old_current = current;
			current += 1;
			if (current >= talent_num) current -= talent_num;
			content = this.getTalentDescription2(current);
			break;
		case 13:
		case 32: //enter/space
			this._tryUpgrade2(current);
		}
	};

	this._activateSkill2 = function () {
		if (flags.type == 0)
			this._keySkill2(flags.keycode);
		else
			this._clickedSkill2(flags.px, flags.py);
	};

	this.openSkillTree2 = function () {
		// 清除主角转身的 timeout 事件
		// 如果没有这行，_setAutomaticRoute_isTurning 里面的 setTimeout 会导致转身发生在打开天赋树之后，进而炸录像
		clearTimeout(core.timeout.turnHeroTimeout);
		core.timeout.turnHeroTimeout = null;

		core.playSound("打开界面");
		core.setFlag("talentTree_isOpen", true);
		current = Number(core.getFlag("talentTree_last_current", 0));
		old_current = -1;
		content = this.getTalentDescription2(current);
		core.insertAction([{
				"type": "while",
				"condition": "true",
				"data": [
					{ "type": "function", "function": "function () { core.plugin._drawSkillTree2(); }" },
					{ "type": "wait" },
					{ "type": "function", "function": "function() { core.plugin._activateSkill2(); }" }
				]
			},
			{
				"type": "function",
				"function": "function () { " +
					"core.deleteCanvas('uievent');" +
					"core.clearUI(); " +
					"core.clearMap('uievent');" +
					"}"
			}
		]);
	};
},
    "checkBlock": function () {
	// 所有跟 checkBlock 相关的复写
	// 花里胡哨的东西太多啦！

	// 能否瞬移
	core.maps._canMoveDirectly_checkGlobal = function () {
		// 检查全塔是否禁止瞬间移动
		if (!core.flags.enableMoveDirectly) return false;
		// 检查该楼层是否不可瞬间移动
		if (core.status.thisMap.cannotMoveDirectly) return false;
		// flag:cannotMoveDirectly为true：不能
		if (core.hasFlag('cannotMoveDirectly')) return false;
		// 有熔火 debuff 不能瞬移
		if (core.getFlag('spe92_debuff', 0) > 0) return false;

		return true;
	}

	var origin_func_checkNextPoint = core.maps._canMoveDirectly_checkNextPoint;
	core.maps._canMoveDirectly_checkNextPoint = function (blocksObj, x, y) {
		var index = x + "," + y;
		if (core.status.checkBlock.visible[index]) return false;
		// 是否存在钥匙类伤害
		if (core.status.checkBlock.lose_key[index]) return false;
		// 是否存在封印类伤害
		if (core.status.checkBlock.seal_hp[index]) return false;
		// 是否会触发援护或游击等怪物跳跃
		if (core.status.checkBlock.spe_69[index]) return false;
		// 是否会触发守护等怪物换位
		if (core.status.checkBlock.spe_72[index]) return false;
		// 是否会触发追猎
		if (core.status.checkBlock.chase[index]) return false;
		// 是否会触发追击在 origin 里判定
		return origin_func_checkNextPoint.call(this, blocksObj, x, y);
	};

	// 追猎
	// chase = [(src_x, src_y, mon_id, dir), ...]
	this._checkBlock_chase = function (chase) {
		if (!chase || chase.length == 0) return;
		var actions = [];
		chase.forEach(function (t) {
			// 再次检查怪物是否有追猎，可能已经被换位换走
			if (!core.hasSpecial(core.getBlockId(t[0], t[1]), 81)) return;
			var hero_x = core.status.hero.loc.x,
				hero_y = core.status.hero.loc.y;
			var mon_x = t[0],
				mon_y = t[1];
			var should_battle = false; // 移动后与主角相邻
			var no_move = false; // 移动前已经与主角相邻
			var reverse_dir;
			switch (t[3]) {
			case "right":
				mon_x += 1;
				reverse_dir = "left";
				if (hero_x == mon_x + 1 && hero_y == mon_y) should_battle = true;
				break;
			case "left":
				mon_x -= 1;
				reverse_dir = "right";
				if (hero_x == mon_x - 1 && hero_y == mon_y) should_battle = true;
				break;
			case "up":
				mon_y -= 1;
				reverse_dir = "down";
				if (hero_x == mon_x && hero_y == mon_y - 1) should_battle = true;
				break;
			case "down":
				reverse_dir = "up";
				mon_y += 1;
				if (hero_x == mon_x && hero_y == mon_y + 1) should_battle = true;
				break;
			}
			if (mon_x == hero_x && mon_y == hero_y) {
				no_move = true;
				mon_x = t[0];
				mon_y = t[1];
			}
			if (!no_move) {
				// 交换位置
				actions.push({
					"type": "if",
					"condition": "!core.getBlock(" + mon_x + "," + mon_y + ") || core.getBlockCls(" + mon_x + "," + mon_y + ") == \"items\"",
					"true": [
						{ "type": "move", "loc": [t[0], t[1]], "steps": [t[3]], "time": 150, "keep": true, "async": true },
						{ "type": "move", "loc": [mon_x, mon_y], "steps": [reverse_dir], "time": 150, "keep": true },
						// 这里是个坑，如果怪物跟物品交换位置，可能是由于 async 同时移动的原因，怪物属性不会正确地跟着移动，所以这里手动移动一下
						// 如果前方是空地，那么这个操作是多余的，不过没有副作用，因为这个函数不会让不存在的属性覆盖掉已存在的属性
						{ "type": "function", "function": "function(){\ncore.moveEnemyOnPoint(" + t[0] + "," + t[1] + "," + mon_x + "," + mon_y + ");\n}" },
						{ "type": "waitAsync", "excludeAnimates": true }
					]
				});
			}
			if (should_battle || no_move) { // 强制战斗
				// 这里的 if 是因为如果存在捕捉+追猎，捕捉战斗后怪物已经消失，要防止追猎再战斗一次
				actions.push({
					"type": "if",
					"condition": "core.getBlockId(" + mon_x + ", " + mon_y + ") ==\'" + t[2] + "\'",
					"true": [{
						"type": "function",
						"function": "function() { " +
							"core.battle('" + t[2] + "', " + mon_x + "," + mon_y + ", true, core.doAction); " +
							"}",
						"async": true
					}, ]
				});
			}
		});
		actions.push({ "type": "waitAsync", "excludeAnimates": true });
		core.insertAction(actions);
	}

	// 游击跳跃 & 援护跳跃
	// spe_69_locs = 援护infos = [[跳跃者1原x,y，目标地点x,y], [跳跃者2...]]
	// spe_69_locs 由 updateCheckBlock 生成，顺序不固定，当多个怪物需要跳跃到同一个位置时，这里统一按照“跳跃者位于左上”优先
	this._checkBlock_spe_69 = function (spe_69_locs) {
		var actions = [];
		var final_jumps = {}; // key = 目标地点x,y，value = spe_69_locs
		for (var i in spe_69_locs) {
			var quad = spe_69_locs[i];
			var target_loc = [quad[2], quad[3]];
			if (final_jumps[target_loc]) {
				if (final_jumps[target_loc][0] * 100 + final_jumps[target_loc][1] < quad[0] * 100 + quad[1])
					continue;
			}
			final_jumps[target_loc] = quad;
		}
		for (var i in final_jumps) {
			var quad = final_jumps[i];
			var target_loc = [quad[2], quad[3]];
			actions.push({ "type": "playSound", "name": "jump.mp3" }, {
				"type": "if",
				"condition": "!core.getBlock(" + quad[2] + "," + quad[3] + ")",
				"true": [
					{ "type": "jump", "from": [quad[0], quad[1]], "to": target_loc, "time": 300, "keep": true, "async": false }
				]
			});
		}
		if (actions.length > 0) core.insertAction(actions);
	}

	// 移形换位
	this._checkBlock_spe_72 = function (spe_72_locs) {
		// spe_72_locs 是一个 array，每个元素长度为4，分别代表怪物源x、y坐标和被交换的怪物的x、y坐标
		var actions = [];
		for (var i in spe_72_locs) {
			var quad = spe_72_locs[i];
			var src_loc = [quad[0], quad[1]];
			var target_loc = [quad[2], quad[3]];
			var src_enemy_id = core.getBlockId(quad[0], quad[1]);
			var dst_enemy_id = core.getBlockId(quad[2], quad[3]);
			core.moveEnemyOnPoint(quad[2], quad[3], 114, 514);
			core.moveEnemyOnPoint(quad[0], quad[1], quad[2], quad[3]);
			core.moveEnemyOnPoint(114, 514, quad[0], quad[1]);
			core.setBlock(src_enemy_id, quad[2], quad[3]);
			core.setBlock(dst_enemy_id, quad[0], quad[1]);
			actions.push({ "type": "animate", "name": "yongchang", "loc": target_loc, "async": true });
		}
		if (actions.length > 0) core.insertAction(actions);
	}

	////// 捕捉 //////
	core.control._checkBlock_ambush = function (ambush) {
		if (!ambush || ambush.length == 0) return false;
		// 捕捉效果
		var actions = [];
		//ambush.forEach(function (t) {
		//    actions.push({"type": "move", "loc": [t[0],t[1]], "steps": [t[3]], "time": 250, "keep": false, "async":true});
		//});
		//actions.push({"type": "waitAsync"});
		// 强制战斗
		ambush.forEach(function (t) {
			actions.push({
				"type": "function",
				"function": "function() { " +
					"core.battle('" + t[2] + "', " + t[0] + "," + t[1] + ", true, core.doAction); " +
					"}",
				"async": true
			});
		});
		core.insertAction(actions);
		return true;
	}

	////// 追击逻辑写在了阻击里面 //////
	// repulse = [(src_x, src_y, mon_id, dir), ...]
	core.control._checkBlock_repulse = function (repulse) {
		if (!repulse || repulse.length == 0) return;
		var actions = [];
		var occupied_loc = []; // 已经被其他追击/阻击占据的位置，不让走
		repulse.forEach(function (t) {
			var hero_x = core.status.hero.loc.x,
				hero_y = core.status.hero.loc.y;
			var nextx = t[0],
				nexty = t[1];
			var should_battle = false;
			switch (t[3]) {
			case "right":
				nextx += 1;
				if (nextx == hero_x && nexty == hero_y) should_battle = true;
				break;
			case "left":
				nextx -= 1;
				if (nextx == hero_x && nexty == hero_y) should_battle = true;
				break;
			case "up":
				nexty -= 1;
				if (nextx == hero_x && nexty == hero_y) should_battle = true;
				break;
			case "down":
				nexty += 1;
				if (nextx == hero_x && nexty == hero_y) should_battle = true;
				break;
			}
			if (should_battle) { // 追击强制战斗
				actions.push({
					"type": "function",
					"function": "function() { " +
						"core.battle('" + t[2] + "', " + t[0] + "," + t[1] + ", true, core.doAction); " +
						"}",
					"async": true
				});
			} else {
				if (occupied_loc.indexOf(nextx + "," + nexty) == -1) { // 未被占据的格子才可以走上去
					occupied_loc.push(nextx + "," + nexty);
					actions.push({
						"type": "if",
						"condition": "!core.getBlock(" + nextx + "," + nexty + ") && core.getBlockId(" + t[0] + "," + t[1] + ") ==\"" + t[2] + "\"",
						"true": [
							{ "type": "move", "loc": [t[0], t[1]], "steps": [t[3]], "time": 150, "keep": true, "async": true }
						]
					});
				}
			}
		});
		actions.push({ "type": "waitAsync", "excludeAnimates": true });
		core.insertAction(actions);
	}


	////// 检查并执行领域、夹击、阻击事件，增加钥匙类伤害、生命封印和反隐 //////
	core.control.checkBlock = function () {
		var need_updateStatusBar = false;
		var x = core.getHeroLoc('x'),
			y = core.getHeroLoc('y'),
			loc = x + "," + y;
		var visible = core.status.checkBlock.visible ? core.status.checkBlock.visible[loc] : false;
		if (visible) {
			core.plugin.exit_invisible();
			need_updateStatusBar = true;
			core.setFlag("disable_autosave", 1);
			core.updateCheckBlock();
		}
		var lose_key = core.status.checkBlock.lose_key[loc];
		if (lose_key) {
			if (core.itemCount('yellowKey') >= lose_key) {
				core.getItem('yellowKey', -lose_key);
				core.drawTip("失去" + lose_key + "把黄钥匙");
				core.drawHeroAnimate('hand');
			} else {
				core.status.hero.hp = 0;
				core.drawHeroAnimate('explosion_small');
			}
			if (core.status.hero.hp <= 0) {
				core.status.hero.hp = 0;
				core.updateStatusBar();
				core.events.lose();
				return;
			} else {
				need_updateStatusBar = true;
			}
		}
		// 钥匙类伤害 结束
		var seal_hp = core.status.checkBlock.seal_hp[loc];
		if (seal_hp) {
			core.addFlag("spe62_seal_hp", seal_hp);
			core.status.hero.hp -= seal_hp;
			need_updateStatusBar = true;
			core.drawHeroAnimate("seal");
		}
		var damage = core.status.checkBlock.damage[loc];
		if (damage && core.getTalentLv3(7) >= 6 && core.getFlag("temp_mdef_pp") > 0) {
			damage = 0;
			core.drawHeroAnimate("def_buff");
		}
		if (damage) {
			core.status.hero.hp -= damage;
			var text = (Object.keys(core.status.checkBlock.type[loc] || {}).join("，")) || "伤害";
			core.drawTip("受到" + text + damage + "点");
			if (text.indexOf("射击伤害") != -1 || text.indexOf("游猎伤害") != -1) {
				core.drawHeroAnimate(core.getFlag("snipe_animate", "snipe"));
				core.plugin.popSkillDamage(damage, x, y);
			} else if (text == "血网伤害") {
				core.drawHeroAnimate("fire");
				core.plugin.popSkillDamage(damage, x, y);
			} else {
				if (damage >= 99 * core.status.hero.hp) { // 伤害大于剩余生命值的99倍
					core.drawHeroAnimate("explosion");
				} else {
					core.drawHeroAnimate(core.getFlag("zone_animate", "zone"));
				}
				core.plugin.popSkillDamage(damage, x, y);
			}
			this._checkBlock_disableQuickShop();
			core.status.hero.statistics.extraDamage += damage;
			if (core.status.hero.hp <= 0) {
				core.status.hero.hp = 0;
				core.updateStatusBar();
				core.events.lose();
				return;
			}
			need_updateStatusBar = true;
		}
		var before = core.getFlag("spe92_debuff", 0);
		if (core.status.checkBlock.spe_92[loc]) {
			core.addFlag("spe92_debuff", 1);
		} else {
			core.setFlag("spe92_debuff", 0);
		}
		if (core.getFlag("spe92_debuff", 0) != before) {
			need_updateStatusBar = true;
		}
		if (need_updateStatusBar) core.updateStatusBar();
		// NOTE: 这里的顺序很重要，后插入先执行。换位没有使用事件流所以优先级最高，在 updateCheckBlock 里就进行了判定，防止捕捉怪被换位。
		// 捕捉的逻辑优先级最高，即捕捉怪不会因阻击而后退。虽然战斗后仍会执行阻击等移动行为，但因为已经是空格子所以没有影响。
		core.plugin._checkBlock_spe_72(core.status.checkBlock.spe_72[loc]);
		this._checkBlock_repulse(core.status.checkBlock.repulse[loc]);
		core.plugin._checkBlock_spe_69(core.status.checkBlock.spe_69[loc]);
		core.plugin._checkBlock_chase(core.status.checkBlock.chase[loc]);
		this._checkBlock_ambush(core.status.checkBlock.ambush[loc]);
	}


	// 在地图上显示各种伤害
	core.control._updateDamage_extraDamage = function (floorId, onMap) {
		core.status.damage.extraData = [];
		if (!core.flags.displayExtraDamage) return;

		var width = core.floors[floorId].width,
			height = core.floors[floorId].height;
		var startX = onMap && core.bigmap.v2 ? Math.max(0, core.bigmap.posX - core.bigmap.extend) : 0;
		var endX = onMap && core.bigmap.v2 ? Math.min(width, core.bigmap.posX + core.__SIZE__ + core.bigmap.extend + 1) : width;
		var startY = onMap && core.bigmap.v2 ? Math.max(0, core.bigmap.posY - core.bigmap.extend) : 0;
		var endY = onMap && core.bigmap.v2 ? Math.min(height, core.bigmap.posY + core.__SIZE__ + core.bigmap.extend + 1) : height;

		for (var x = startX; x < endX; x++) {
			for (var y = startY; y < endY; y++) {
				var damage = core.status.checkBlock.damage[x + "," + y] || 0;
				var lose_key = core.status.checkBlock.lose_key[x + "," + y] || 0;
				var seal_hp = core.status.checkBlock.seal_hp[x + "," + y] || 0;
				var visible = core.status.checkBlock.visible[x + "," + y] || 0;
				var ambush = core.status.checkBlock.ambush[x + "," + y] || 0;
				var spe_69 = core.status.checkBlock.spe_69[x + "," + y] || 0;
				var spe_72 = core.status.checkBlock.spe_72[x + "," + y] || 0;
				var dead_word = '卒';
				if (visible) {
					core.status.damage.extraData.push({ text: '目', px: 32 * x + 16, py: 32 * (y + 1) - 14, color: '#ffaa33' });
				}
				if (lose_key) {
					if (core.itemCount("yellowKey") > 0) {
						core.status.damage.extraData.push({ text: '匙', px: 32 * x + 16, py: 32 * (y + 1) - 14, color: '#ffaa33' });
					} else {
						core.status.damage.extraData.push({ text: dead_word, px: 32 * x + 16, py: 32 * (y + 1) - 14, color: '#ffaa33' });
					}
				} else if (seal_hp > 0) {
					if (damage == 0) core.status.damage.extraData.push({ text: '封', px: 32 * x + 16, py: 32 * (y + 1) - 14, color: '#ffaa33' });
					else core.status.damage.extraData.push({ text: dead_word, px: 32 * x + 16, py: 32 * (y + 1) - 14, color: '#ffaa33' });
				} else if (ambush) { // 检查捕捉
					if (core.status.checkBlock.ambush[x + "," + y]) {
						core.status.damage.extraData.push({ text: '!', px: 32 * x + 16, py: 32 * (y + 1) - 14, color: '#ffaa33' });
					}
				} else if (spe_69 || spe_72) {
					core.status.damage.extraData.push({ text: '@', px: 32 * x + 16, py: 32 * (y + 1) - 14, color: '#ffaa33' });
				} else if (damage > 0) { // 该点伤害
					var color = '#ffaa33';
					if (core.plugin.getTalentLv3(7) >= 6 && (core.getFlag("temp_mdef_pp", 0) / core.getFlag("skill11_add", 0) * 100 > core.getFlag("skill11_decay_pp", 0) || core.getFlag("skill11_feat1", false))) {
						color = '#777777';
					}
					if (damage >= core.status.hero.hp) {
						core.status.damage.extraData.push({ text: dead_word, px: 32 * x + 16, py: 32 * (y + 1) - 14, color: color });
					} else {
						damage = core.formatBigNumber(damage, true);
						core.status.damage.extraData.push({ text: damage, px: 32 * x + 16, py: 32 * (y + 1) - 14, color: color });
					}
				}
			}
		}
	}
},
    "Chap4_2Skills": function () {
	// 第四章后篇技能
	// 有部分函数只在样板基础上进行了细微的修改
	// 总体来讲主动技能参考了样板中心对称飞的实现，进入确认界面的时候还没有实际使用技能
	// *没有*针对大地图进行修改

	this.willNotBlockSkill12 = function (x, y) {
		return core.getBlockId(x, y) == null || core.plugin.isEnemy(x, y) || core.getBlockCls(x, y) == "items";
	}

	// 增加 value% 基础护盾值的临时护盾
	this.addTempMdefpp = function (value) {
		if (!core.hasItem("skill11")) return;
		var cur = core.getFlag("temp_mdef_pp", 0);
		var upper_bound = core.getFlag("skill11_upbound", 0) * core.getFlag("skill11_add", 100); // 临时护盾上限比例
		var delta = 0; // 实际的变化值
		if (value > 0) {
			delta = Math.min(value, upper_bound - cur);
		} else {
			delta = Math.max(value, -cur);
		}
		core.addFlag("temp_mdef_pp", delta);
		var temp = core.getFlag("__mdef_buff__", 1);
		temp = (Math.fround(temp * 1000) + delta * 10) / 100 / 10;
		core.setFlag("__mdef_buff__", temp);
		if (!core.getFlag("__statistics__")) {
			if (core.getFlag("temp_mdef_pp") > 0) {
				core.setHeroIcon("hero_rage2.png");
			} else {
				core.setHeroIcon("hero.png");
			}
		}
	}

	core.plugin.doSkill10 = function () {
		var range = 1,
			cnt = 0,
			locs = [];
		var curX = core.status.hero.loc.x,
			curY = core.status.hero.loc.y;
		var tmp_mdef = core.getFlag("temp_mdef_pp", 0) * core.status.hero.mdef / 100;
		for (var i = curX - range; i <= curX + range; ++i) {
			for (var j = curY - range; j <= curY + range; ++j) {
				var cls = core.getBlockCls(i, j);
				if (core.plugin.isEnemy(i, j)) {
					locs.push([i, j]);
					cnt += 1;
				} else if (cls == "items") {
					var id = core.getBlockId(i, j);
					if (false) { // TODO
						core.removeBlock(i, j);
					}
				}
			}
		}
		var spe74_dmg = 0;
		if (core.getFlag("temp_mdef_pp", 0) > 0 && core.getFlag("skill10_basedmg", 0) > 0 && cnt > 0) {
			spe74_dmg = Math.floor((core.getFlag("skill10_basedmg") + core.getFlag("skill10_mdefdmgratio", 0) * tmp_mdef) / cnt);
		}
		for (var z in locs) {
			if (spe74_dmg > 0) {
				core.events.setEnemyOnPointAdd(locs[z][0], locs[z][1], core.status.floorId, "hp", spe74_dmg, "-=");
			}
			core.setEnemyOnPoint(locs[z][0], locs[z][1], core.status.floorId, "def", core.getFlag("skill10_ddef"), "-=");
		}
		var decay = -core.getFlag("skill11_add") * core.getFlag("skill11_decay_pp") / 100;
		//if (core.getTalentLv3(1) >= 3) decay *= 0.5;
		core.plugin.addTempMdefpp(decay);
	}

	/* begin skill12 */
	core.registerReplayAction('skill12dir', function (action) {
		// 参数action为此时录像播放时执行到的项目。
		if (action.indexOf('skill12dir:') !== 0) return false;
		// 二次检查
		if (!core.plugin.canUseSkill12()) {
			core.control._replay_error(action);
			return true;
		}
		var dir = action.substring(11);
		// 由于录像播放中存在二次记录，还需要将action写入到当前播放过程中的录像中。
		// 这样录像播放完毕后再次直接重头播放不会出现问题。
		core.status.route.push(action);
		// 执行
		core.setFlag("temp_skill12_dir", dir);
		// 继续播放录像。
		core.replay();
		// 返回true表示我们已经成功处理了此录像行为。
		return true;
	});

	core.plugin.canUseSkill12 = function () {
		var nx = core.nextX(2),
			ny = core.nextY(2);
		var canjump = nx >= 0 && nx < core.bigmap.width && ny >= 0 && ny < core.bigmap.height && core.getBlockId(nx, ny) == null;
		var reason = "落脚点不是空地！";

		if (core.plugin.getTalentLv3(2) <= 5) {
			var block_class = core.getBlockCls(core.nextX(1), core.nextY(1));
			if (core.getBlockId(core.nextX(1), core.nextY(1)) != null && block_class != "enemys" && block_class != "enemy48" && block_class != "items") {
				canjump = false;
				reason = "只能跃过敌人或物品上方！";
			}
		}
		var cost = core.getFlag("skill12_cost") + core.getTalentLv3(3);
		if (canjump) {
			if (core.status.hero.mana < cost) {
				core.drawTip("能量不足。");
				if (!core.isReplaying()) core.playSound("057-Wrong01.ogg");
			} else {
				return true;
			}
		} else {
			core.drawTip(reason);
			if (!core.isReplaying()) core.playSound("057-Wrong01.ogg");
		}
		return false;
	}

	core.ui._drawSkill12 = function () {
		if (!core.plugin.canUseSkill12()) return;
		// 清除主角转身的 timeout 事件
		clearTimeout(core.timeout.turnHeroTimeout);
		core.timeout.turnHeroTimeout = null;
		core.lockControl();
		core.status.event.id = 'skill12';
		this.clearUI();
		// 绘制逻辑
		if (!core.isReplaying()) {
			core.drawTip("选择跳跃后的攻击方向，点击中间或按 X/空格/esc 取消");
			core.playSound("confirm.mp3");
		}
		core.setFlag("stopBlinking", 0);
		core.setFlag("doSkill12", 0);
		core.setFlag("previewSkill12", 1);
		core.updateDamage();
		core.updateStatusBar();
		var i = 0;
		var ctx;
		if (!core.dymCanvas.animate2) { ctx = core.createCanvas("animate2", 0, 0, 416, 416, 71); } else { ctx = core.dymCanvas.animate2; }
		var blink = setInterval(function () {
			var hx = 32 * core.nextX(2) + 16,
				hy = 32 * core.nextY(2) + 16;
			if (!core.getFlag("stopBlinking", 0)) {
				core.canvas.hero.canvas.style.filter = ("brightness(" + (1 + 0.5 * (Math.sin(0.5 * i))) + ")");
				++i;
				core.clearMap(ctx);
				var color = 'rgba(99,147,255,0.5)';
				core.fillArc(ctx, core.nextX(2) * 32 + 16, core.nextY(2) * 32, 96, 0.3 * Math.PI, 0.7 * Math.PI, color); // down
				core.fillArc(ctx, core.nextX(2) * 32 + 16, core.nextY(2) * 32 + 32, 96, 1.3 * Math.PI, 1.7 * Math.PI, color); // up
				core.fillArc(ctx, core.nextX(2) * 32, core.nextY(2) * 32 + 16, 96, 1.8 * Math.PI, 2.2 * Math.PI, color); // right
				core.fillArc(ctx, core.nextX(2) * 32 + 32, core.nextY(2) * 32 + 16, 96, 0.8 * Math.PI, 1.2 * Math.PI, color); // left
				color = '#ffbb00';
				core.fillArc(ctx, hx, hy - 48 - 8 * Math.sin(0.2 * i), 24, 0.4 * Math.PI, 0.6 * Math.PI, color);
				core.dymCanvas.animate2.stroke();
				core.fillArc(ctx, hx, hy + 48 + 8 * Math.sin(0.2 * i), 24, 1.4 * Math.PI, 1.6 * Math.PI, color);
				core.dymCanvas.animate2.stroke();
				core.fillArc(ctx, hx - 48 - 8 * Math.sin(0.2 * i), hy, 24, 1.9 * Math.PI, 2.1 * Math.PI, color);
				core.dymCanvas.animate2.stroke();
				core.fillArc(ctx, hx + 48 + 8 * Math.sin(0.2 * i), hy, 24, 0.9 * Math.PI, 1.1 * Math.PI, color);
				core.dymCanvas.animate2.stroke();
				core.fillRect(ctx, core.nextX(2) * 32, core.nextY(2) * 32, 32, 32, 'rgba(255,0,0,1)');
			} else {
				core.canvas.hero.canvas.style.filter = ("brightness(1)");
				clearInterval(blink);
				core.clearMap('animate2');
			}
		}, 33);
		core.status.event.data = { "centerX": core.nextX(2), "centerY": core.nextY(2) };
	}

	core.actions._clickSkill12 = function (x, y) {
		var centX = core.status.event.data.centerX,
			centY = core.status.event.data.centerY;
		var dir = "init";
		if (x == centX && y == centY) { // cancel
			core.setFlag("stopBlinking", 1);
			core.setFlag("doSkill12", 0);
			core.setFlag("previewSkill12", 0);
			core.ui.closePanel();
			core.updateStatusBar();
			return;
		} else if ((x == centX - 2 && y >= centY - 1 && y <= centY + 1) || (x == centX - 1 && y == centY)) {
			dir = "left";
		} else if ((y == centY - 2 && x >= centX - 1 && x <= centX + 1) || (y == centY - 1 && x == centX)) {
			dir = "up";
		} else if ((x == centX + 2 && y >= centY - 1 && y <= centY + 1) || (x == centX + 1 && y == centY)) {
			dir = "right";
		} else if ((y == centY + 2 && x >= centX - 1 && x <= centX + 1) || (y == centY + 1 && x == centX)) {
			dir = "down";
		}
		if (dir != "init") {
			core.setFlag("stopBlinking", 1);
			core.setFlag("doSkill12", 0);
			core.setFlag("previewSkill12", 0);
			core.ui.closePanel();
			core.autosave();
			core.setFlag("temp_skill12_dir", dir);
			core.status.route.push("skill12dir:" + dir);
			core.setFlag("previewSkill12", 1);
			core.useItem("skill12");
		}
	}
	core.actions._keyUpSkill12 = function (keycode) {
		var dir = "init";
		if (keycode == 88 || keycode == 27 || keycode == 32) { // cancel
			core.setFlag("stopBlinking", 1);
			core.setFlag("doSkill12", 0);
			core.setFlag("previewSkill12", 0);
			core.ui.closePanel();
			core.updateStatusBar();
			return;
		} else if (keycode == 37) {
			dir = "left";
		} else if (keycode == 38) {
			dir = "up";
		} else if (keycode == 39) {
			dir = "right";
		} else if (keycode == 40) {
			dir = "down";
		}
		if (dir != "init") {
			core.setFlag("stopBlinking", 1);
			core.setFlag("doSkill12", 0);
			core.setFlag("previewSkill12", 0);
			core.ui.closePanel();
			core.autosave();
			core.setFlag("temp_skill12_dir", dir);
			core.status.route.push("skill12dir:" + dir);
			core.setFlag("previewSkill12", 1);
			core.useItem("skill12");
		}
	}
	/* end skill12 */

	/* begin skill13 */
	core.registerReplayAction('skill13i', function (action) {
		// 参数action为此时录像播放时执行到的项目。
		if (action.indexOf('skill13i:') !== 0) return false;
		// 二次检查
		if (core.status.hero.mana < core.getFlag("skill13_cost")) {
			core.control._replay_error(action);
			return true;
		}
		var index = parseInt(action.substring(9));
		if (index != 0 && index != 1) return false;
		// 由于录像播放中存在二次记录，还需要将action写入到当前播放过程中的录像中。
		// 这样录像播放完毕后再次直接重头播放不会出现问题。
		core.status.route.push(action);
		// 执行
		core.setFlag("temp_skill13_i", index);
		if (index == 0) {
			core.setFlag("temp_skill13_x", core.bigmap.width - 1 - core.getHeroLoc('x'));
			core.setFlag("temp_skill13_y", core.bigmap.height - 1 - core.getHeroLoc('y'));
		} else {
			core.setFlag("temp_skill13_x", core.getHeroLoc('x'));
			core.setFlag("temp_skill13_y", core.getHeroLoc('y'));
		}
		// 继续播放录像。
		core.replay();
		// 返回true表示我们已经成功处理了此录像行为。
		return true;
	});

	////// 绘制毁天灭地
	core.ui._drawSkill13 = function () {
		if (core.status.hero.mana < core.getFlag("skill13_cost")) {
			core.drawTip("能量不足。");
			if (!core.isReplaying()) core.playSound("057-Wrong01.ogg");
			return;
		}
		// 清除主角转身的 timeout 事件
		clearTimeout(core.timeout.turnHeroTimeout);
		core.timeout.turnHeroTimeout = null;
		core.lockControl();
		core.status.event.id = 'skill13';

		// 设置 mydata
		core.status.event.mydata = {};
		var add_one = function () {
			var toX = core.getFlag("temp_skill13_x"),
				toY = core.getFlag("temp_skill13_y");
			var pos = toX + "," + toY;
			// 绘制的缩略图在整张地图的起始坐标，对于小地图来说总是 0
			var offsetX = core.clamp(toX - core.__HALF_SIZE__, 0, core.bigmap.width - core.__SIZE__),
				offsetY = core.clamp(toY - core.__HALF_SIZE__, 0, core.bigmap.height - core.__SIZE__);
			core.status.event.mydata[pos] = { "x": toX, "y": toY, "posX": toX - offsetX, "posY": toY - offsetY };
		}
		core.setFlag("temp_skill13_x", core.bigmap.width - 1 - core.getHeroLoc('x'));
		core.setFlag("temp_skill13_y", core.bigmap.height - 1 - core.getHeroLoc('y'));
		add_one();
		if (!(core.getHeroLoc('x') == core.bigmap.width - 1 - core.getHeroLoc('x') && core.getHeroLoc('y') == core.bigmap.height - 1 - core.getHeroLoc('y'))) {
			core.setFlag("temp_skill13_x", core.getHeroLoc('x'));
			core.setFlag("temp_skill13_y", core.getHeroLoc('y'));
			add_one();
		}

		this.clearUI();
		// 绘制逻辑
		if (!core.isReplaying()) {
			core.playSound('打开界面');
			core.drawTip("确认" + core.material.items.skill13.name + "的落点");
		}
		core.setFlag("stopBlinking", 0);
		core.setFlag("previewSkill13", 1);
		core.setFlag("temp_skill13_i", 0); // 0 是中心对称位置，1 是原地
		core.setFlag("temp_skill13_x", core.bigmap.width - 1 - core.getHeroLoc('x'));
		core.setFlag("temp_skill13_y", core.bigmap.height - 1 - core.getHeroLoc('y'));
		core.updateDamage();
		core.updateStatusBar();
		var i = 0;
		var ctx;
		if (!core.dymCanvas.animate2) { ctx = core.createCanvas("animate2", 0, 0, 416, 416, 71); } else { ctx = core.dymCanvas.animate2; }
		var blink = setInterval(function () {
			if (!core.getFlag("stopBlinking", 0)) {
				var locs = Object.keys(core.status.event.mydata);
				++i;
				core.clearMap(ctx);
				for (var index in locs) {
					var toX = core.status.event.mydata[locs[index]].posX,
						toY = core.status.event.mydata[locs[index]].posY;
					var pos = toX + "," + toY;
					// 绘制的缩略图在整张地图的起始坐标，对于小地图来说总是 0
					var offsetX = core.clamp(toX - core.__HALF_SIZE__, 0, core.bigmap.width - core.__SIZE__),
						offsetY = core.clamp(toY - core.__HALF_SIZE__, 0, core.bigmap.height - core.__SIZE__);
					var color = 'rgba(99,147,255,0.5)';
					core.fillArc(ctx, (toX - offsetX) * 32 + 16, (toY - offsetY) * 32 + 16, 80, 0, 2 * Math.PI, color);
					core.fillArc(ctx, (toX - offsetX) * 32 + 16, (toY - offsetY) * 32 + 16, 20, 0, 2 * Math.PI, color);
					core.status.event.mydata[pos] = { "x": toX, "y": toY, "posX": toX - offsetX, "posY": toY - offsetY };
					if (index == core.getFlag("temp_skill13_i", 0)) {
						core.canvas.hero.canvas.style.filter = ("brightness(" + (1 + 0.5 * (Math.sin(0.5 * i))) + ")");
						var offset = 0;
						color = '#ff0000';
						if (core.getBlockId(toX, toY) == null || core.plugin.isEnemy(toX, toY) || core.getBlockCls(toX, toY) == "items") { // 可以使用
							color = '#ffbb00';
							offset = -8 * Math.sin(0.2 * i);
						}
						core.fillArc(ctx, (toX - offsetX) * 32 + 16, (toY - offsetY) * 32 + offset, 24, 1.4 * Math.PI, 1.6 * Math.PI, color);
						core.dymCanvas.animate2.stroke();
						core.fillArc(ctx, (toX - offsetX) * 32 + 16, (toY + offsetY) * 32 + 32 - offset, 24, 0.4 * Math.PI, 0.6 * Math.PI, color);
						core.dymCanvas.animate2.stroke();
						core.fillArc(ctx, (toX + offsetX) * 32 + 32 - offset, (toY - offsetY) * 32 + 16, 24, 1.9 * Math.PI, 2.1 * Math.PI, color);
						core.dymCanvas.animate2.stroke();
						core.fillArc(ctx, (toX + offsetX) * 32 + offset, (toY + offsetY) * 32 + 16, 24, 0.9 * Math.PI, 1.1 * Math.PI, color);
						core.dymCanvas.animate2.stroke();
					}
				}
			} else {
				core.canvas.hero.canvas.style.filter = ("brightness(1)");
				clearInterval(blink);
				core.clearMap(ctx);
			}
		}, 33);
		return;
	}
	////// 点击毁天灭地时
	core.actions._clickSkill13 = function (x, y) {
		var pos = x + "," + y;
		if (pos in core.status.event.mydata) {
			core.status.event.data = core.status.event.mydata[pos];
			var posX = core.status.event.data.posX,
				posY = core.status.event.data.posY;
			if (posX == core.getHeroLoc('x') && posY == core.getHeroLoc('y')) {
				core.setFlag("temp_skill13_i", 1);
			} else {
				core.setFlag("temp_skill13_i", 0);
			}
			core.setFlag("temp_skill13_x", posX);
			core.setFlag("temp_skill13_y", posY);
			core.setFlag("previewSkill13", 0);
			core.setFlag("stopBlinking", 1);
			core.ui.closePanel();
			if (core.canUseItem('skill13')) {
				core.autosave();
				core.status.route.push("skill13i:" + core.getFlag("temp_skill13_i", 0));
				core.setFlag("previewSkill13", 1);
				core.useItem('skill13');
			} else { // 取消
				core.drawTip('无法使用' + core.material.items.skill13.name + '落到那个位置');
			}
		} else { // 取消
			core.setFlag("previewSkill13", 0);
			core.setFlag("stopBlinking", 1);
			core.ui.closePanel();
		}
	}
	core.actions._keyUpSkill13 = function (keycode) {
		var locs = Object.keys(core.status.event.mydata);
		var index = core.getFlag("temp_skill13_i", 0);
		core.status.event.data = core.status.event.mydata[locs[index]];
		if (keycode == 37 || keycode == 38 || keycode == 39 || keycode == 40) { // 移动光标
			index = (index + 1) % locs.length;
			core.setFlag("temp_skill13_i", index);
			core.status.event.data = core.status.event.mydata[locs[index]];
			var posX = core.status.event.data.posX,
				posY = core.status.event.data.posY;
			core.setFlag("temp_skill13_x", posX);
			core.setFlag("temp_skill13_y", posY);
			core.updateDamage();
			return;
		}
		if (keycode == 51 || keycode == 13 || keycode == 32 || keycode == 67) { // 确认
			var posX = core.status.event.data.posX,
				posY = core.status.event.data.posY;
			core.setFlag("temp_skill13_x", posX);
			core.setFlag("temp_skill13_y", posY);
			core.setFlag("previewSkill13", 0);
			core.setFlag("stopBlinking", 1);
			core.ui.closePanel();
			if (core.canUseItem('skill13')) {
				core.autosave();
				core.status.route.push("skill13i:" + core.getFlag("temp_skill13_i", 0));
				core.setFlag("previewSkill13", 1);
				core.useItem('skill13');
			} else { // 取消
				core.drawTip('无法使用' + core.material.items.skill13.name + '落到那个位置');
			}
		} else { // 取消
			core.setFlag("previewSkill13", 0);
			core.setFlag("stopBlinking", 1);
			core.ui.closePanel();
		}
	}

	core.registerAction('keyUp', 'my_sys_keyUp_skill13', function (keyCode, altKey) {
		if (!core.status.lockControl) return false;

		switch (core.status.event.id) {
		case "skill12":
			this._keyUpSkill12(keyCode);
			return true;
		case 'skill13':
			this._keyUpSkill13(keyCode);
			return true;
		}
		return false;
	}, 51);

	core.registerAction('onclick', 'my_sys_onclick_skill13', function (x, y, px, py) {
		if (!core.status.lockControl) return false;
		switch (core.status.event.id) {
		case 'skill12':
			this._clickSkill12(x, y, px, py);
			return true;
		case 'skill13':
			this._clickSkill13(x, y, px, py);
			return true;
		}
		return false;
	}, 51);
	/* end skill13 */

	////// 尝试使用道具 //////
	var origin_func = core.events.tryUseItem;
	core.events.tryUseItem = function (itemId) {
		if (itemId == 'skill12') {
			core.ui.closePanel();
			return core.ui._drawSkill12();
		}
		if (itemId == 'skill13') {
			core.ui.closePanel();
			return core.ui._drawSkill13();
		}
		origin_func.call(this, itemId);
	}
},
    "talentTree3": function () {
	// 这里的代码和第三章的天赋树有大量重复，但我懒得重构代码了，咕了
	var talentTree3 = [{
		"name": "最佳防守",
		"images": ["talentT3_0.png", 64, 30],
		"description": function (lv) {
			var description = [
				"未解锁。",
				"被动技能【最佳防守】：每次战斗后获得1层临时护盾，每移动一格失去1层临时护盾。每层提供50%基础值的护盾。最多拥有2层。",
				"临时护盾叠加层数上限提升至3层，并且移动造成的衰减效果降低20%",
				"临时护盾叠加层数上限提升至4层，并且移动造成的衰减效果降低35%",
				"移动造成的临时护盾衰减效果降低50%"
			];
			return description[lv];
		},
		"cost": function (lv) {
			var cost = [100, 5, 15, 30][lv];
			var enabled = core.status.hero.money >= cost;
			switch (lv) {
			case 0:
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需消耗" + cost + "金币\r";
			case 1:
				var cur = core.getTalentLv3(3);
				enabled = cur >= cost;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需【至尊飞升】达到" + cost + "级(" + cur + "/" + cost + ")\r";
			case 2:
				var cur = core.getTalentLv3(3);
				enabled = cur >= cost;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需【至尊飞升】达到" + cost + "级(" + cur + "/" + cost + ")\r";
			case 3:
				var cur = core.getTalentLv3(3);
				enabled = cur >= cost;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需【至尊飞升】达到" + cost + "级(" + cur + "/" + cost + ")\r";
			}
			return "已达到满级。";
		},
		"upgrade": function (lv) {
			var cost = [100, 5, 15, 30][lv];
			var enabled;
			switch (lv) {
			case 0:
				enabled = core.status.hero.money >= cost;
				if (enabled) {
					core.addFlag("talent3_0_lv", 1);
					core.status.hero.money -= cost;
					core.setFlag("skill11_upbound", 2);
					core.setFlag("skill11_add", 50);
					core.setFlag("skill11_decay_pp", 100);
					if (core.getFlag("autoGetItem", 0) > 0) {
						core.insertAction("\t[系统提示]拥有临时护盾时不会触发自动拾取。");
					} else {
						core.insertAction("\t[系统提示]你可以在道具栏“系统设置”中打开自动拾取，但拥有临时护盾时不会触发自动拾取。");
					}
					core.getItem("skill11");
					return true;
				}
				break;
			case 1:
				enabled = core.getTalentLv3(3) >= cost;
				if (enabled) {
					core.addFlag("talent3_0_lv", 1);
					core.addFlag("skill11_upbound", 1);
					core.setFlag("skill11_decay_pp", 80);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【最佳防守】已提升至\r[yellow]2\r级。\n效果：临时护盾叠加层数上限提升至3层，并且移动造成的衰减效果降低20%");
					}
					return true;
				}
				break;
			case 2:
				enabled = core.getTalentLv3(3) >= cost;
				if (enabled) {
					core.addFlag("talent3_0_lv", 1);
					core.addFlag("skill11_upbound", 1);
					core.setFlag("skill11_decay_pp", 65);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【最佳防守】已提升至\r[yellow]3\r级。\n效果：临时护盾叠加层数上限提升至4层，并且移动造成的衰减效果降低35%");
					}
					return true;
				}
				break;
			case 3:
				enabled = core.getTalentLv3(3) >= cost;
				if (enabled) {
					core.addFlag("talent3_0_lv", 1);
					core.setFlag("skill11_decay_pp", 50);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【最佳防守】已提升至\r[yellow]4\r级。\n效果：移动造成的临时护盾衰减效果降低50%");
					}
					return true;
				}
				break;
			default:
				break;
			}
			return false;
		},
		"reading": "补充说明：转换地图前会失去所有临时护盾（包括使用楼层传送器传送到同一层）。有临时护盾时不会触发自动拾取/清怪。",
		"maxlv": 4
	}, {
		"name": "毁灭重拳",
		"images": ["talentT3_1.png", 144, 30],
		"description": function (lv) {
			var description = [
				"未解锁。",
				// "主动技能【毁灭重拳】：向前冲刺最多2格，拾取沿途的物品；降低3*3范围内所有敌人10w点防御，不可叠加；如果拥有临时护盾，还会使敌人分摊（200w+临时护盾数值）点伤害，之后临时护盾衰减1步。消耗125能量。",
				"主动技能【毁灭重拳】：向前冲刺并降低敌人的防御，如果击中敌人时拥有临时护盾，还会造成伤害。",
				"冲刺距离从2格提升至4格，并且如果没有击中敌人，返还25能量。",
				"冲刺距离从4格提升至6格，并且如果没有击中敌人，返还50能量。",
				"【毁灭重拳】临时护盾爆炸的伤害提升至(400w+1.5*临时护盾数值)点。",
				"【毁灭重拳】临时护盾爆炸的伤害提升至(600w+2*临时护盾数值)点。",
				"冲刺距离从6格提升至2221格，并且临时护盾爆炸会破坏范围内的非绿色门。"
			];
			return description[lv];
		},
		"cost": function (lv) {
			var cost = [300, 10, 50, 25, 60][lv];
			var enabled;
			var used_time = core.getFlag("skill10_use_time", 0);
			switch (lv) {
			case 0:
				enabled = core.getTalentLv3(0) > 0 && core.status.hero.money >= cost;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需解锁【最佳防守】并消耗" + cost + "金币\r";
			case 1:
				enabled = used_time >= cost;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需使用" + cost + "次本技能(" + used_time + "/" + cost + ")\r";
			case 2:
				used_time = core.getFlag("skill10_hit_enemy", 0);
				enabled = used_time >= cost;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需使用本技能击中" + cost + "个敌人(" + used_time + "/" + cost + ")\r";
			case 3:
				enabled = core.getTalentLv3(3) >= cost;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需【至尊飞升】达到" + cost + "级\r";
			case 4:
				enabled = core.getTalentLv3(3) >= cost && core.getTalentLv3(5) >= 3;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需【重拳强化】达到3级，且【至尊飞升】达到" + cost + "级\r";
			}
			return "已达到满级。";
		},
		"upgrade": function (lv) {
			var cost = [300, 10, 50, 25, 60][lv];
			var enabled;
			switch (lv) {
			case 0:
				enabled = core.getTalentLv3(0) > 0 && core.status.hero.money >= cost;
				if (enabled) {
					core.addFlag("talent3_1_lv", 1);
					core.status.hero.money -= cost;
					core.setFlag("skill10_desc3", "");
					core.setFlag("skill10_range", 2);
					core.setFlag("skill10_ddef", 100000);
					core.setFlag("skill10_basedmg", 0);
					core.setFlag("skill10_cost", 125);
					core.setFlag("skill10_use_time", 0);
					core.setFlag("skill10_hit_enemy", 0);
					core.setFlag("skill10_basedmg", 2000000);
					core.setFlag("skill10_mdefdmgratio", 1);
					core.setFlag("skill10_desc2", "如果有临时护盾，会令敌人分摊(200w+临时护盾数值)点伤害");
					core.getItem("skill10");
					return true;
				}
				break;
			case 1:
				enabled = core.getFlag("skill10_use_time", 0) >= cost;
				if (enabled) {
					core.addFlag("talent3_1_lv", 1);
					core.setFlag("skill10_desc3", "如果没有击中敌人，返还25能量。");
					core.setFlag("skill10_range", 4);
					core.setFlag("skill10_use_time", 0);
					core.setFlag("skill10_hit_enemy", 0);
					core.setFlag("skill10_ret_mana", 25);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【毁灭重拳】已提升至\r[yellow]2\r级。\n效果：冲刺距离从2格提升至4格，并且如果没有击中敌人，返还25能量。");
					}
					return true;
				}
				break;
			case 2:
				enabled = core.getFlag("skill10_hit_enemy", 0) >= cost;
				if (enabled) {
					core.addFlag("talent3_1_lv", 1);
					core.setFlag("skill10_desc3", "如果没有击中敌人，返还50能量。");
					core.setFlag("skill10_range", 6);
					core.setFlag("skill10_use_time", 0);
					core.setFlag("skill10_hit_enemy", 0);
					core.setFlag("skill10_ret_mana", 50);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【毁灭重拳】已提升至\r[yellow]3\r级。\n效果：冲刺距离从4格提升至6格，并且如果没有击中敌人，返还50能量。");
					}
					return true;
				}
				break;
			case 3:
				enabled = core.getTalentLv3(3) >= cost;
				if (enabled) {
					core.addFlag("talent3_1_lv", 1);
					core.setFlag("skill10_basedmg", 4000000);
					core.setFlag("skill10_mdefdmgratio", 1.5);
					core.setFlag("skill10_desc2", "如果有临时护盾，会令敌人分摊(400w+1.5*临时护盾数值)点伤害");
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【毁灭重拳】已提升至\r[yellow]4\r级。\n效果：【毁灭重拳】临时护盾爆炸的伤害提升至(400w+1.5*临时护盾数值)点。");
					}
					return true;
				}
				break;
			case 4:
				enabled = core.getTalentLv3(3) >= cost && core.getTalentLv3(5) >= 3;
				if (enabled) {
					core.addFlag("talent3_1_lv", 1);
					core.setFlag("skill10_basedmg", 6000000);
					core.setFlag("skill10_mdefdmgratio", 2);
					core.setFlag("skill10_desc2", "如果有临时护盾，会令敌人分摊(600w+2*临时护盾数值)点伤害");
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【毁灭重拳】已提升至\r[yellow]5\r级。\n效果：【毁灭重拳】临时护盾爆炸的伤害提升至(600w+2*临时护盾数值)点。");
					}
					return true;
				}
				break;
			default:
				return false;
			}
			return false;
		},
		"reading": "补充说明：冲刺路径上不会受到地图伤害影响。\n使用此技能的快捷键是1。",
		"maxlv": 5
	}, {
		"name": "裂地重拳",
		"images": ["talentT3_2.png", 224, 30],
		"description": function (lv) {
			var description = [
				"未解锁。",
				// "主动技能【裂地重拳】：跳向面前2格的空地，落地后打击面前2排3格，触发第一排、将第二排拉向自身；减少被击中的敌人100000点攻击，不可叠加；如果拥有临时护盾，每击中一个敌人还会回复临时护盾数值50%的生命。消耗200能量。起跳时只能跃过敌人或物品上方，不能跨越障碍物。",
				"主动技能【裂地重拳】：向前跳跃并降低敌人的攻击，如果击中敌人时拥有临时护盾，还会回复生命。",
				"【裂地重拳】每击中一个敌人便返还25点能量",
				"【裂地重拳】每击中一个敌人便返还50点能量，并且拉动效果能够对[喽啰]级别敌人生效。",
				"使用【裂地重拳】与敌人战斗结束时，回复等同于临时护盾数值100%的生命。",
				"【裂地重拳】每击中一个敌人便返还75点能量，并且拉动效果能够对[精英]级别敌人生效。",
				"【裂地重拳】每击中一个敌人便获得一层临时护盾（在强制战斗开始前）。"
			];
			return description[lv];
		},
		"cost": function (lv) {
			var cost = [2000, 10, 30, 55, 90][lv];
			var enabled;
			var used_time = core.getFlag("skill12_use_time", 0);
			switch (lv) {
			case 0:
				enabled = core.getTalentLv3(0) > 0 && core.status.hero.money >= cost;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需解锁【最佳防守】并消耗" + cost + "金币\r";
			case 1:
				enabled = used_time >= cost;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需使用" + cost + "次本技能(" + used_time + "/" + cost + ")\r";
			case 2:
				used_time = core.getFlag("skill12_hit_num", 0);
				enabled = used_time >= cost;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需使用本技能击中过" + cost + "个敌人(" + used_time + "/" + cost + ")\r";
			case 3:
			case 4:
				enabled = core.getTalentLv3(3) >= cost;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需【至尊飞升】达到" + cost + "级\r";
			}
			return "已达到满级。";
		},
		"upgrade": function (lv) {
			var cost = [2000, 10, 30, 55, 90][lv];
			var enabled;
			switch (lv) {
			case 0:
				enabled = core.getTalentLv3(0) > 0 && core.status.hero.money >= cost;
				if (enabled) {
					core.status.hero.money -= cost;
					core.addFlag("talent3_2_lv", 1);
					core.setFlag("skill12_datk", 100000);
					core.setFlag("skill12_cost", 200);
					core.setFlag("skill12_hit_ret", 0);
					core.setFlag("skill12_drain_ratio", 50);
					core.setFlag("skill12_desc1", "每击中一个敌人回复临时护盾数值50%的生命。");
					core.getItem("skill12", 1);
					core.setFlag("skill12_use_time", 0);
					core.setFlag("skill12_hit_num", 0);
					return true;
				}
				break;
			case 1:
				enabled = core.getFlag("skill12_use_time", 0) >= cost;
				if (enabled) {
					core.addFlag("talent3_2_lv", 1);
					core.setFlag("skill12_use_time", 0);
					core.setFlag("skill12_hit_num", 0);
					core.setFlag("skill12_hit_ret", 25);
					core.setFlag("skill12_desc1", "每击中一个敌人获得25能量，并回复临时护盾数值50%的生命。");
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【裂地重拳】已提升至\r[yellow]2\r级。\n效果：【裂地重拳】每击中一个敌人便返还25点能量");
					}
					return true;
				}
				break;
			case 2:
				enabled = core.getFlag("skill12_hit_num", 0) >= cost;
				if (enabled) {
					core.addFlag("talent3_2_lv", 1);
					core.setFlag("skill12_use_time", 0);
					core.setFlag("skill12_hit_num", 0);
					core.setFlag("skill12_hit_ret", 50);
					core.setFlag("skill12_desc1", "每击中一个敌人获得50能量，并回复临时护盾数值50%的生命。");
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【裂地重拳】已提升至\r[yellow]3\r级。\n效果：【裂地重拳】每击中一个敌人便返还50点能量");
					}
					return true;
				}
				break;
			case 3:
				enabled = core.getTalentLv3(3) >= cost;
				if (enabled) {
					core.addFlag("talent3_2_lv", 1);
					core.setFlag("skill12_drain_ratio", 100)
					core.setFlag("skill12_desc1", "每击中一个敌人获得50能量，并回复临时护盾数值100%的生命。");
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【裂地重拳】已提升至\r[yellow]4\r级。\n效果：使用【裂地重拳】与敌人战斗结束时，回复等同于临时护盾数值100%的生命。");
					}
					return true;
				}
				break;
			case 4:
				enabled = core.getTalentLv3(3) >= cost;
				if (enabled) {
					core.addFlag("talent3_2_lv", 1);
					core.setFlag("skill12_hit_ret", 75);
					core.setFlag("skill12_desc1", "每击中一个敌人获得75能量，并回复临时护盾数值100%的生命。");
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【裂地重拳】已提升至\r[yellow]5\r级。\n效果：【裂地重拳】每击中一个敌人便返还75点能量，并且拉动效果能够对[精英]级别敌人生效。");
					}
					return true;
				}
				break;
			}
			return false;
		},
		"reading": "补充说明：1.此技能会“触发”面前一排：如果是物品则立即拾取，如果是敌人则立即战斗。2.如果第一排某列有障碍物，则技能无法影响到第二排对应列的物体。3.触发顺序是左上优先。\n使用此技能的快捷键是2。",
		"maxlv": 5
	}, {
		"name": "至尊飞升",
		"images": ["talentT3_3.png", 304, 30],
		"description": function (lv) {
			return "每击杀10个敌人提升一级，攻击、防御、护盾永久+10%，但使用技能时也额外消耗1点能量。";
		},
		"cost": function (lv) {
			var enabled = false;
			var cur, need;
			if (lv < 100) {
				need = 10;
				cur = core.getFlag("talentT3_3_upX", 0);
				enabled = cur >= need;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需击杀" + need + "个敌人(" + cur + "/" + need + ")\r";
			}
			return "已达到满级。";
		},
		"upgrade": function (lv) {
			var enabled = false;
			var cur, need;
			if (lv < 100) {
				need = 10;
				cur = core.getFlag("talentT3_3_upX", 0);
				enabled = cur >= need;
				if (enabled) {
					core.addFlag("talent3_3_lv", 1);
					core.addFlag("talentT3_3_upX", -10);
					core.plugin.addValpp("atk", 10);
					core.plugin.addValpp("def", 10);
					core.plugin.addValpp("mdef", 10);
					core.drawHeroAnimate("rage_buff");
					if (lv == 9 || lv == 24 || lv == 39 || lv == 54 || lv == 69 || lv == 84 || lv == 99) core.plugin._tryUpgrade3(7);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						if (lv == 4 || lv == 14 || lv == 29) core.plugin._tryUpgrade3(0);
						if (lv == 24) core.plugin._tryUpgrade3(1);
						if (lv == 59 && core.getTalentLv3(5) == 3) core.plugin._tryUpgrade3(1);
						if (lv == 54 || lv == 89) core.plugin._tryUpgrade3(2);
					}
					return true;
				}
			}
			return false;
		},
		"reading": "此天赋会在满足条件时自动升级。\n不经历冲突，怎能不断进化",
		"maxlv": 100
	}, {
		"name": "强化防守",
		"images": ["talent7.png", 64, 110],
		"description": function (lv) {
			var description = [
				"未解锁。每层临时护盾的效果为基础护盾的50%。",
				"每层临时护盾的效果增加至基础护盾的100%。基础护盾永久提升30000点。",
				"每层临时护盾的效果增加至基础护盾的150%。基础护盾额外提升50000点（共80000点）。",
				"每层临时护盾的效果增加至基础护盾的220%。基础护盾额外提升70000点（共150000点）。",
				"压缩临时护盾，使其叠加层数上限减少至3层，但每层效果增加至基础护盾的300%。基础护盾额外提升90000点（共240000点）。"
			];
			return description[lv];
		},
		"cost": function (lv) {
			var cost = [2000, 8000, 20000, 64100][lv];
			var cost2 = [1, 2, 3, 4][lv];
			var enabled = core.status.hero.money >= cost && core.getTalentLv3(0) >= cost2;
			if (lv < 4) {
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需【最佳防守】达到" + cost2 + "级，并消耗" + cost + "金币\r";
			}
			return "已达到满级";
		},
		"upgrade": function (lv) {
			var cost = [2000, 8000, 20000, 64100][lv];
			var cost2 = [1, 2, 3, 4][lv];
			var enabled = core.status.hero.money >= cost && core.getTalentLv3(0) >= cost2;
			if (enabled) {
				switch (lv) {
				case 0:
					core.status.hero.money -= cost;
					core.status.hero.mdef += 30000;
					var before = core.getFlag("skill11_add", 0);
					var stack = core.getFlag("temp_mdef_pp", 0) / before;
					core.setFlag("skill11_add", 100);
					core.addTempMdefpp(stack * (core.getFlag("skill11_add") - before));
					core.addFlag("talent3_4_lv", 1);
					return true;
				case 1:
					core.status.hero.money -= cost;
					core.status.hero.mdef += 50000;
					var before = core.getFlag("skill11_add", 0);
					var stack = core.getFlag("temp_mdef_pp", 0) / before;
					core.setFlag("skill11_add", 150);
					core.addTempMdefpp(stack * (core.getFlag("skill11_add") - before));
					core.addFlag("talent3_4_lv", 1);
					return true;
				case 2:
					core.status.hero.money -= cost;
					core.status.hero.mdef += 70000;
					var before = core.getFlag("skill11_add", 0);
					var stack = core.getFlag("temp_mdef_pp", 0) / before;
					core.setFlag("skill11_add", 220);
					core.addTempMdefpp(stack * (core.getFlag("skill11_add") - before));
					core.addFlag("talent3_4_lv", 1);
					return true;
				case 3:
					core.status.hero.money -= cost;
					core.status.hero.mdef += 90000;
					var before = core.getFlag("skill11_add", 0);
					var stack = core.getFlag("temp_mdef_pp", 0) / before;
					core.setFlag("skill11_add", 300);
					core.addFlag("skill11_upbound", -1);
					core.addTempMdefpp(stack * (core.getFlag("skill11_add") - before));
					core.addFlag("talent3_4_lv", 1);
					return true;
				}
			}
			return false;
		},
		"maxlv": 4,
		"reading": "在连续的战斗中变得更加强大"
	}, {
		"name": "重拳强化",
		"images": ["talent5.png", 144, 110],
		"description": function (lv) {
			var description = [
				"未解锁。【毁灭重拳】降低敌人100000点防御，不可叠加。",
				"【毁灭重拳】降低防御的效果提升至250000点。",
				"【毁灭重拳】降低防御的效果提升至500000点。",
				"【毁灭重拳】降低防御的效果提升至1000000点。"
			];
			return description[lv];
		},
		"cost": function (lv) {
			var cost = [4000, 20000, 40000][lv];
			var cost2 = [2, 3, 4][lv];
			var enabled = core.status.hero.money >= cost && core.getTalentLv3(1) >= cost2;
			if (lv < 3) {
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需【毁灭重拳】达到" + cost2 + "级，并消耗" + cost + "金币\r";
			}
			return "已达到满级";
		},
		"upgrade": function (lv) {
			var cost = [4000, 20000, 40000][lv];
			var cost2 = [2, 3, 4][lv];
			var enabled = core.status.hero.money >= cost && core.getTalentLv3(1) >= cost2;
			if (enabled) {
				switch (lv) {
				case 0:
					core.status.hero.money -= cost;
					core.setFlag("skill10_ddef", 250000);
					core.addFlag("talent3_5_lv", 1);
					return true;
				case 1:
					core.status.hero.money -= cost;
					core.setFlag("skill10_ddef", 500000);
					core.addFlag("talent3_5_lv", 1);
					return true;
				case 2:
					core.status.hero.money -= cost;
					core.setFlag("skill10_ddef", 1000000);
					core.addFlag("talent3_5_lv", 1);
					return true;
				}
			}
			return false;
		},
		"maxlv": 3
	}, {
		"name": "震撼大地",
		"images": ["talentT3_6.png", 224, 110],
		"description": function (lv) {
			var description = [
				"未解锁。【裂地重拳】降低敌人100000点攻击，不可叠加。",
				"【裂地重拳】降低攻击的效果增加至250000点。",
				"【裂地重拳】降低攻击的效果增加至500000点。",
				"【裂地重拳】降低攻击的效果增加至1000000点。"
			];
			return description[lv];
		},
		"cost": function (lv) {
			var cost = [4500, 22500, 45000][lv];
			var cost2 = [2, 3, 4][lv];
			var enabled = core.status.hero.money >= cost && core.getTalentLv3(2) >= cost2;
			if (lv < 3) {
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需【裂地重拳】达到" + cost2 + "级，并消耗" + cost + "金币\r";
			}
			return "已达到满级";
		},
		"upgrade": function (lv) {
			var cost = [4500, 22500, 45000][lv];
			var cost2 = [2, 3, 4][lv];
			var enabled = core.status.hero.money >= cost && core.getTalentLv3(2) >= cost2;
			if (enabled) {
				switch (lv) {
				case 0:
					core.status.hero.money -= cost;
					core.setFlag("skill12_datk", 250000);
					core.addFlag("talent3_6_lv", 1);
					return true;
				case 1:
					core.status.hero.money -= cost;
					core.setFlag("skill12_datk", 500000);
					core.addFlag("talent3_6_lv", 1);
					return true;
				case 2:
					core.status.hero.money -= cost;
					core.setFlag("skill12_datk", 1000000);
					core.addFlag("talent3_6_lv", 1);
					return true;
				}
			}
			return false;
		},
		"maxlv": 3
	}, {
		"name": "能量强化",
		"images": ["talent3.png", 304, 110],
		"description": function (lv) {
			var description = [
				"每场战斗后回复5点能量，如果战斗总伤害不大于0则额外回复10点。拾取能量块回复150能量。",
				"每场战斗后回复能量增加至10点，战斗总伤害不大于0时的额外能量回复从10点增加至20点。",
				"拾取能量块时回复能量从150点提升至175点。",
				"每场战斗后回复能量增加至15点，战斗总伤害不大于0时的额外能量回复从20点增加至30点。",
				"拾取能量块时回复能量从175点提升至200点。",
				"每次战斗后移动的第一步不再会使临时护盾衰减。",
				"移动后如果拥有临时护盾，免疫地图伤害。",
				"解锁全部力量，成就真正的至尊强者！基础攻防永久提升50000点，并获得终极技能。"
			];
			return description[lv];
		},
		"cost": function (lv) {
			var enabled = false;
			var cur;
			var need = [10, 25, 40, 55, 70, 85, 100];
			switch (lv) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
				enabled = core.getTalentLv3(3) >= need[lv];
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需【至尊飞升】达到" + need[lv] + "级\r";
			case 114:
				need = 50;
				cur = core.getFlag("talentT3_7_upn", 0);
				enabled = cur >= need;
				return (enabled ? "\r[green]" : "\r[yellow]") + "提升需在拥有临时护盾的情况下战斗" + need + "次(" + cur + "/" + need + ")\r";
			}
			return "已达到满级。";
		},
		"upgrade": function (lv) {
			var need = [10, 25, 40, 55, 70, 85, 100];
			var enabled = core.getTalentLv3(3) >= need[lv];
			var cur;
			switch (lv) {
			case 0:
				if (enabled) {
					core.addFlag("talent3_7_lv", 1);
					core.setFlag("mana_regen", 10);
					core.setFlag("I62_extra_mana_regen", 20);
					core.setFlag("I62_extra_description", '。若战斗总伤害不大于0，额外回复20点能量');
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【能量强化】已提升至\r[yellow]1\r级。\n效果：每场战斗后回复能量增加至10点，战斗总伤害不大于0时的额外能量回复从10点增加至20点。");
					}
					return true;
				}
				break;
			case 1:
				if (enabled) {
					core.addFlag("talent3_7_lv", 1);
					core.setFlag("mana_item", 175);
					core.plugin.clearItemDetailCache("manaItem");
					core.plugin.clearItemDetailCache("bigManaitem");
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【能量强化】已提升至\r[yellow]2\r级。\n效果：拾取能量块时回复能量从150点提升至175点。");
					}
					return true;
				}
				break;
			case 2:
				if (enabled) {
					core.addFlag("talent3_7_lv", 1);
					core.setFlag("mana_regen", 15);
					core.setFlag("I62_extra_mana_regen", 30);
					core.setFlag("I62_extra_description", '。若战斗总伤害不大于0，额外回复30点能量');
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【能量强化】已提升至\r[yellow]3\r级。\n效果：每场战斗后回复能量增加至15点，战斗总伤害不大于0时的额外能量回复从20点增加至30点。");
					}
					return true;
				}
				break;
			case 3:
				if (enabled) {
					core.addFlag("talent3_7_lv", 1);
					core.setFlag("mana_item", 200);
					core.plugin.clearItemDetailCache("manaItem");
					core.plugin.clearItemDetailCache("bigManaitem");
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【能量强化】已提升至\r[yellow]4\r级。\n效果：拾取能量块时回复能量从175点提升至200点。");
					}
					return true;
				}
				break;
			case 4:
				if (enabled) {
					core.addFlag("talent3_7_lv", 1);
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【能量强化】已提升至\r[yellow]5\r级。\n效果：每次战斗后移动的第一步不再会使临时护盾衰减。");
					}
					return true;
				}
				break;
			case 5:
				if (enabled) {
					core.addFlag("talent3_7_lv", 1);
					core.setFlag("skill11_desc", "移动后如果拥有临时护盾，免疫地图伤害。");
					if (core.getFlag("autoUpgradeTalent", 0) > 0) {
						core.insertAction("\t[系统提示]【能量强化】已提升至\r[yellow]6\r级。\n效果：移动后如果拥有临时护盾，免疫地图伤害。");
					}
					return true;
				}
				break;
			case 6:
				if (enabled) {
					core.insertCommonEvent("100级");
					return true;
				}
				break;
			case 114:
				need = 50;
				cur = core.getFlag("talentT3_7_upn", 0);
				enabled = cur >= need;
				if (enabled) {
					core.addFlag("talent3_7_lv", 1);
					return true;
				}
				break;
			}
			return false;
		},
		"maxlv": 7,
		"reading": "此天赋会在满足条件时自动升级。"
	}];

	// 技能之间的连线
	// 技能之间的连线
	var edges = [
		[0, 4],
		[1, 5],
		[2, 6]
	];
	var edges2 = [];

	// 技能的前置技能。若没有，则填-1
	// 不参与实际升级逻辑的判断，仅供上下箭头移动使用
	var fathers = [-1, -1, -1, -1, 0, 1, 2, 3];
	var sons = [4, 5, 6, 7, -1, -1, -1, -1];

	var current, old_current;
	var content = "";

	this.getTalentLv3 = function (cur) {
		if (!core.hasItem("talentTree3")) return 0;
		return core.getFlag("talent3_" + cur + "_lv", 0);
	}
	this.getTalentDescription3 = function (cur) {
		var curObj = talentTree3[cur];
		var lv = this.getTalentLv3(cur);
		var str = curObj.description(lv) + "\n";
		if (lv < curObj.maxlv) {
			str += "\r[yellow]下一级\r：" + curObj.cost(lv) + "\n\r[gray]" + curObj.description(lv + 1) + "\r\n";
			str += "下次升级条件：" + curObj.cost(lv + 1) + "\n";
		}
		if (curObj.reading) {
			str += "\\c[14]" + curObj.reading + "\\c\n";
		}
		return str;
	}

	this._tryUpgrade3 = function (pos, noTip) {
		var curObj = talentTree3[pos];
		var lv = this.getTalentLv3(pos);
		// 检查前置条件
		if (lv == curObj.maxlv) {
			if (!noTip) {
				if (!core.isReplaying()) core.playSound('操作失败');
				core.insertAction({ "type": "tip", "text": "已升至最高等级，不可再升级！" });
			}
			return;
		}
		if (!curObj.upgrade(lv)) {
			if (!noTip) {
				if (!core.isReplaying()) core.playSound('操作失败');
				core.insertAction({ "type": "tip", "text": "升级条件不足！" });
			}
			return;
		}
		core.playSound('确定');
		core.insertAction({ "type": "tip", "text": "升级成功！" });

		content = this.getTalentDescription3(pos);
		core.updateStatusBar();
	};

	this._drawSkillTree3 = function () {
		core.deleteCanvas('uievent');
		core.ui._createUIEvent();
		core.clearMap('uievent');
		core.ui._uievent_drawBackground({ background: [0, 0, 0, 0.85], x: 0, y: 0, width: 416, height: 416 });
		var getEdgeColor = function (id) {
			var active_color = "#63FF63";
			switch (id) {
			case 0:
				if (core.getTalentLv3(0) >= 1) return active_color;
				break;
			case 1:
				if (core.getTalentLv3(1) >= 1) return active_color;
				break;
			case 2:
				if (core.getTalentLv3(2) >= 1) return active_color;
				break;
			}
			return "gray";
		}
		var talentTree = talentTree3;
		for (var i in edges) {
			this._drawEdge(talentTree[edges[i][0]].images[1] + 16, talentTree[edges[i][0]].images[2],
				talentTree[edges[i][1]].images[1] + 16, talentTree[edges[i][1]].images[2], getEdgeColor(Number(i)));
		}
		for (var i in edges2) {
			this._drawEdge(talentTree[edges2[i][0]].images[1] + 16, talentTree[edges2[i][0]].images[2],
				talentTree[edges2[i][1]].images[1] + 16, talentTree[edges2[i][1]].images[2], getEdgeColor(Number(i) + 4));
		}
		for (var i in talentTree) {
			core.drawImage("uievent", talentTree[i].images[0], talentTree[i].images[1], talentTree[i].images[2]);
			var x = talentTree[i].images[1],
				y = talentTree[i].images[2];
			if (i == current) {
				var thick = 2;
				core.ui.strokeRoundRect("uievent", x - thick, y - thick, 32 + 2 * thick, 32 + 2 * thick, thick, '#FFFF00', thick);
			}
			if (core.getTalentLv3(i) < talentTree[i].maxlv) {
				var color = '#FFFFFF';
				if (talentTree[i].cost(core.getTalentLv3(i)).indexOf("green") > 0) {
					color = '#00FF00';
				}
				if (talentTree[i].cost(core.getTalentLv3(i)).indexOf("red") > 0) {
					color = '#FF0000';
				}
				core.ui.fillText("uievent", "(" + core.getTalentLv3(i) + "/" + talentTree[i].maxlv + ")", x, y + 48, color, "15px Georgia");
			}
		}
		var curObj = talentTree[current];
		var lv = this.getTalentLv3(current);
		core.ui._uievent_drawTextContent({ text: "\r[yellow]【" + curObj.name + "】(" + lv + "/" + curObj.maxlv + ")\r", left: 10, top: 175, maxWidth: 396, align: "center" });
		core.ui._uievent_drawTextContent({ text: content, left: 10, top: 195, maxWidth: 396, align: "center" });
		core.ui._uievent_drawTextContent({ text: "离开", left: 368, top: 388, bold: true, fontSize: 20 });
	};

	this._clickedSkill3 = function (px, py) {
		for (var i in talentTree3) {
			if (this._inRect(px, py, talentTree3[i].images[1], talentTree3[i].images[2])) {
				old_current = current;
				current = Number(i);
				if (!core.isReplaying()) core.playSound('光标移动');
				content = this.getTalentDescription3(current);
				if (old_current == current)
					this._tryUpgrade3(i);
			}
		}
		if (px >= 368 && py >= 388) { // 离开
			core.setFlag("talentTree_isOpen", false);
			if (!core.isReplaying()) core.playSound('取消');
			core.setFlag("talentTree_last_current", current);
			return core.insertAction({ "type": "break" });
		}
	};

	this._keySkill3 = function (key) {
		var talent_num = 8;
		var i = 0;
		switch (key) {
		case 88:
		case 89:
		case 27: //esc/y/x
			core.setFlag("talentTree_isOpen", false);
			if (!core.isReplaying()) core.playSound('取消');
			core.setFlag("talentTree_last_current", current);
			core.insertAction({ "type": "break" });
			break;
		case 38: //up
			if (!core.isReplaying()) core.playSound('光标移动');
			if (fathers[current] != -1) {
				old_current = current;
				current = fathers[current];
			}
			content = this.getTalentDescription3(current);
			break;
		case 40: //down
			if (!core.isReplaying()) core.playSound('光标移动');
			if (sons[current] != -1) {
				old_current = current;
				current = sons[current];
			}
			content = this.getTalentDescription3(current);
			break;
		case 37: //left
			if (!core.isReplaying()) core.playSound('光标移动');
			old_current = current;
			current -= 1;
			if (current < 0) current += talent_num;
			content = this.getTalentDescription3(current);
			break;
		case 39: // right
			if (!core.isReplaying()) core.playSound('光标移动');
			old_current = current;
			current += 1;
			if (current >= talent_num) current -= talent_num;
			content = this.getTalentDescription3(current);
			break;
		case 13:
		case 32: //enter/space
			this._tryUpgrade3(current);
		}
	};

	this._activateSkill3 = function () {
		if (flags.type == 0)
			this._keySkill3(flags.keycode);
		else
			this._clickedSkill3(flags.px, flags.py);
	};

	this.openSkillTree3 = function () {
		// 清除主角转身的 timeout 事件
		// 如果没有这行，_setAutomaticRoute_isTurning 里面的 setTimeout 会导致转身发生在打开天赋树之后，进而炸录像
		clearTimeout(core.timeout.turnHeroTimeout);
		core.timeout.turnHeroTimeout = null;

		core.playSound("打开界面");
		core.setFlag("talentTree_isOpen", true);
		current = Number(core.getFlag("talentTree_last_current", 0));
		old_current = -1;
		content = this.getTalentDescription3(current);
		core.insertAction([{
				"type": "while",
				"condition": "true",
				"data": [
					{ "type": "function", "function": "function () { core.plugin._drawSkillTree3(); }" },
					{ "type": "wait" },
					{ "type": "function", "function": "function() { core.plugin._activateSkill3(); }" }
				]
			},
			{
				"type": "function",
				"function": "function () { " +
					"core.deleteCanvas('uievent');" +
					"core.clearUI(); " +
					"core.clearMap('uievent');" +
					"}"
			}
		]);
	};
},
    "displayDamage": function () {
	core.control._updateDamage_damage = function (floorId, onMap) {
		core.status.damage.data = [];
		if (!core.flags.displayEnemyDamage && !core.flags.displayExtraDamage) return;

		core.extractBlocks(floorId);
		core.status.maps[floorId].blocks.forEach(function (block) {
			var x = block.x,
				y = block.y;

			// v2优化，只绘制范围内的部分
			if (onMap && core.bigmap.v2) {
				if (x < core.bigmap.posX - core.bigmap.extend || x > core.bigmap.posX + core.__SIZE__ + core.bigmap.extend ||
					y < core.bigmap.posY - core.bigmap.extend || y > core.bigmap.posY + core.__SIZE__ + core.bigmap.extend) {
					return;
				}
			}

			if (!block.disable && block.event.cls.indexOf('enemy') == 0 && block.event.displayDamage !== false) {
				if (core.flags.displayEnemyDamage) {
					var damageString = core.enemys.getDamageString(block.event.id, x, y, floorId);
					core.status.damage.data.push({ text: damageString.damage, px: 32 * x + 1, py: 32 * (y + 1) - 1, color: damageString.color });
				}
				if (core.flags.displayCritical) {
					var critical = core.enemys.nextCriticals(block.event.id, 1, x, y, floorId);
					critical = core.formatBigNumber((critical[0] || [])[0], true);
					if (critical == '???') critical = '?';
					core.status.damage.data.push({ text: critical, px: 32 * x + 1, py: 32 * (y + 1) - 11, color: '#FFFFFF' });
					// 显血
					var info = core.events.getEnemyOnPoint(x, y, floorId);
					var enemy = core.material.enemys[block.event.id];
					if (info.hp && info.hp != enemy.hp) {
						if (core.getFlag("MonHPMode", 0) == 0) { // remain hp percent
							var percent = Math.floor(info.hp * 100 / enemy.hp);
							core.status.damage.data.push({ text: percent + "%", px: 32 * x + 11, py: 32 * (y + 1) - 21, color: '#aa0088' });
						} else { // remain hp value
							core.status.damage.data.push({ text: core.formatBigNumber(info.hp), px: 32 * x + 1, py: 32 * (y + 1) - 21, color: '#aa0088' });
						}
					}
				}
			}
		});
	}

	core.enemys.getDamageString = function (enemy, x, y, floorId) {
		if (typeof enemy == 'string') enemy = core.material.enemys[enemy];
		var damage = this.getDamage(enemy, x, y, floorId);

		var color = '#000000';

		if (damage == null) {
			damage = "???";
			color = '#FF2222';
		} else {
			if (damage <= 0) color = '#11FF11';
			else if (damage < core.status.hero.hp / 3) color = '#FFFFFF';
			else if (damage < core.status.hero.hp * 2 / 3) color = '#FFFF00';
			else if (damage < core.status.hero.hp) color = '#FF9933';
			else color = '#FF2222';

			damage = core.formatBigNumber(damage, true);
			if (core.enemys.hasSpecial(enemy, 19))
				damage += "+";
			if (core.enemys.hasSpecial(enemy, 21))
				damage += "-";
			if (core.enemys.hasSpecial(enemy, 11) && !core.hasItem("I_noVampire"))
				damage += "^";
			if (core.enemys.hasSpecial(enemy, 25) || core.enemys.hasSpecial(enemy, 28) || core.enemys.hasSpecial(enemy, 39) || core.enemys.hasSpecial(enemy, 65))
				damage += "*";
		}
		var info = core.events.getEnemyOnPoint(x, y, floorId);
		if (info.atk && info.atk != enemy.atk) {
			damage += "A";
		}
		if (info.def && info.def != enemy.def) {
			damage += "D";
		}

		return {
			"damage": damage,
			"color": color
		};
	}
},
    "autoGetItem": function () {
	// NOTE：开启自动拾取时不能忽略连续瞬移！如，第一次瞬移拾取物品，第二次瞬移到某物品后面，忽略第一次会导致录像炸裂
	core.control.my_replayAction_moveDirectly = function (action) {
		if (action.indexOf("move:") != 0) return false;
		// 忽略连续的瞬移事件；如果大地图某一边超过计算范围则不合并
		// 改了这里
		if (!core.getFlag("autoGetItem") && !core.hasFlag('poison') && core.status.thisMap.width < 2 * core.bigmap.extend + core.__SIZE__ &&
			core.status.thisMap.height < 2 * core.bigmap.extend + core.__SIZE__) {
			while (core.status.replay.toReplay.length > 0 &&
				core.status.replay.toReplay[0].indexOf('move:') == 0) {
				core.status.route.push(action);
				action = core.status.replay.toReplay.shift();
			}
		}

		var pos = action.substring(5).split(":");
		var x = parseInt(pos[0]),
			y = parseInt(pos[1]);
		var nowx = core.getHeroLoc('x'),
			nowy = core.getHeroLoc('y');
		var ignoreSteps = core.canMoveDirectly(x, y);
		if (!core.moveDirectly(x, y, ignoreSteps)) return false;
		if (core.status.replay.speed == 24) {
			core.replay();
			return true;
		}

		core.ui.drawArrow('ui', 32 * nowx + 16 - core.bigmap.offsetX, 32 * nowy + 16 - core.bigmap.offsetY,
			32 * x + 16 - core.bigmap.offsetX, 32 * y + 16 - core.bigmap.offsetY, '#FF0000', 3);
		var timeout = this.__replay_getTimeout();
		if (ignoreSteps < 10) timeout = timeout * ignoreSteps / 10;
		setTimeout(function () {
			core.clearMap('ui');
			core.replay();
		}, timeout);
		return true;
	}
	core.registerReplayAction("moveDirectly", core.control.my_replayAction_moveDirectly);

	// 从第九大陆抄的，有改动。不适合直接抄
	function bfsFlood(sx, sy, blockfn) {
		var canMoveArray = core.generateMovableArray();
		var blocksObj = core.getMapBlocksObj();
		var bgMap = core.getBgMapArray();

		var visited = [],
			queue = [];
		visited[sx + "," + sy] = 0;
		queue.push(sx + "," + sy);

		while (queue.length > 0) {
			var now = queue.shift().split(","),
				x = ~~now[0],
				y = ~~now[1];
			for (var direction in core.utils.scan) {
				if (!core.inArray(canMoveArray[x][y], direction)) continue;
				var nx = x + core.utils.scan[direction].x,
					ny = y + core.utils.scan[direction].y,
					nindex = nx + "," + ny;
				if (visited[nindex]) continue;
				if (core.onSki(bgMap[ny][nx])) continue;
				if (blockfn && !blockfn(blocksObj, nx, ny)) continue;
				visited[nindex] = visited[now] + 1;
				queue.push(nindex);
			}
		}
	}

	function attractAnimate() {
		var name = 'attractAnimate';
		var isPlaying = false;
		this.nodes = [];

		this.add = function (id, x, y, callback) {
			this.nodes.push({ id: id, x: x - core.bigmap.posX * 32, y: y - core.bigmap.posY * 32, callback: callback });
		}
		this.start = function () {
			if (isPlaying) return;
			isPlaying = true;
			core.registerAnimationFrame(name, true, this.update);
			if (!core.dymCanvas[name]) {
				this.ctx = core.createCanvas(name, 0, 0, core.__PIXELS__, core.__PIXELS__, 120);
			} else {
				this.ctx = core.dymCanvas[name];
			}
		}
		this.remove = function () {
			core.unregisterAnimationFrame(name);
			core.clearMap(name);
			isPlaying = false;
		}
		this.clear = function () {
			this.nodes = [];
			this.remove();
		}
		var lastTime = -1;
		var self = this;
		this.update = function (timeStamp) {
			if (lastTime < 0) lastTime = timeStamp;
			if (timeStamp - lastTime < 20) return;
			lastTime = timeStamp;
			core.clearMap(name);
			var cx = core.status.heroCenter.px - 16 - core.bigmap.posX * 32,
				cy = core.status.heroCenter.py - 16 - core.bigmap.posY * 32;
			var thr = 3; // 缓动比例倒数 越大移动越慢
			self.nodes.forEach(function (n) {
				var dx = cx - n.x,
					dy = cy - n.y;
				if (Math.abs(dx) <= thr && Math.abs(dy) <= thr) {
					n.dead = true;
				} else {
					n.x += ~~(dx / thr);
					n.y += ~~(dy / thr);
				}
				core.drawIcon(name, n.id, n.x, n.y, 32, 32);
			});
			self.nodes = self.nodes.filter(function (n) {
				if (n.dead && n.callback) {
					n.callback();
				}
				return !n.dead;
			});
			if (self.nodes.length == 0)
				self.remove();
		}
	}

	var animateHwnd = new attractAnimate();

	this.stopAttractAnimate = function () {
		animateHwnd.clear();
	}

	this.autoGetItem = function () {
		if (core.getFlag("autoGetItem", 0) == 0) return;
		if (core.getFlag("temp_mdef_pp", 0) > 0) return;
		var canGetItems = {};
		var index_list = []; // 保序，虽然这个塔里面物品的拾取顺序没有什么影响
		var canPickFunc = function (block, idx) {
			var blkid = block ? block.event.id : "";
			var nopick = core.getFlag("keysAreBad", 0) && block && !block.disable && (blkid == "yellowKey" || blkid == "blueKey" || blkid == "redKey" || blkid == "yellowKey3" || blkid == "blueKey3" || blkid == "redKey3");
			nopick |= core.status.checkBlock.no_autopick[idx];
			if (["superPotion_s", "redRHeart", "blueRHeart", "yellowRHeart", "greenRHeart"].indexOf(blkid) != -1) nopick = true;
			return block && !block.disable && block.event.cls == 'items' && !core.isMapBlockDisabled(core.status.floorId, block.x, block.y) &&
				block.event.trigger == 'getItem' && !nopick;
		}
		// 将可自动拾取的物品记录在 canGetItems 内，返回值代表 (x, y) 格是否需要继续向邻居格搜索
		var blockfn = function (blockMap, x, y) {
			var idx = x + ',' + y;
			if (idx in canGetItems) return false;
			var blk = blockMap[idx];
			if (canPickFunc(blk, idx)) {
				canGetItems[idx] = { x: x, y: y, id: blk.event.id };
				index_list.push(idx);
				return !core.status.checkBlock.damage[idx] && !core.status.checkBlock.repulse[idx] && !core.status.checkBlock.ambush[idx] && !core.status.checkBlock.chase[idx] && !core.status.checkBlock.visible[idx] && !core.status.checkBlock.lose_key[idx] && !core.status.checkBlock.seal_hp[idx] && !core.status.checkBlock.spe_69[idx] && !core.status.checkBlock.spe_72[idx];
			}
			return core.maps._canMoveDirectly_checkNextPoint(blockMap, x, y);
		};
		if (!core.status.floorId || !core.status.checkBlock.damage || core.status.event.id == 'action' || core.status.lockControl) return;
		// 身處地圖傷害時只能自動拾取身邊的
		var near_only = false;
		var loc_x = core.status.hero.loc.x,
			loc_y = core.status.hero.loc.y,
			loc_idx = loc_x + "," + loc_y;
		if (Object.keys(core.status.checkBlock.damage).indexOf(loc_idx) != -1) near_only = true;
		if (Object.keys(core.status.checkBlock.repulse).indexOf(loc_idx) != -1) near_only = true;
		if (Object.keys(core.status.checkBlock.ambush).indexOf(loc_idx) != -1) near_only = true;
		if (Object.keys(core.status.checkBlock.chase).indexOf(loc_idx) != -1) near_only = true;
		if (Object.keys(core.status.checkBlock.visible).indexOf(loc_idx) != -1) near_only = true;
		if (Object.keys(core.status.checkBlock.lose_key).indexOf(loc_idx) != -1) near_only = true;
		if (Object.keys(core.status.checkBlock.seal_hp).indexOf(loc_idx) != -1) near_only = true;
		if (Object.keys(core.status.checkBlock.spe_69).indexOf(loc_idx) != -1) near_only = true;
		if (Object.keys(core.status.checkBlock.spe_72).indexOf(loc_idx) != -1) near_only = true;

		if (near_only) {
			for (var direction in core.utils.scan) {
				var nx = loc_x + core.utils.scan[direction].x,
					ny = loc_y + core.utils.scan[direction].y,
					nindex = nx + "," + ny;
				var blk = core.getMapBlocksObj()[nindex];
				if (canPickFunc(blk, nindex)) {
					canGetItems[nindex] = { x: nx, y: ny, id: blk.event.id };
					index_list.push(nindex);
				}
			}
		} else {
			bfsFlood(core.getHeroLoc('x'), core.getHeroLoc('y'), blockfn);
		}
		for (var i = 0; i < index_list.length; ++i) {
			var k = index_list[i];
			var x = canGetItems[k].x,
				y = canGetItems[k].y,
				id = canGetItems[k].id;
			core.trigger(x, y);
			//core.getItem(id, null, x, y);
			if (!core.isReplaying()) animateHwnd.add(id, x * 32, y * 32);
		}
		if (!core.isReplaying()) animateHwnd.start();
	}

	this.addAutoGetItemAnimate = function (id, x, y) {
		if (core.isReplaying()) return;
		animateHwnd.add(id, x * 32, y * 32);
	}
	this.startAutoGetItemAnimate = function () {
		if (core.isReplaying()) return;
		animateHwnd.start();
	}
},
    "enemyOnPoint": function () {
	// 单点敌人属性相关
	// 设置某个点上的怪物属性，变化可叠加
	core.events.setEnemyOnPointAdd = function (x, y, floorId, name, value, operator, prefix, norefresh) {
		floorId = floorId || core.status.floorId;
		var block = core.getBlock(x, y, floorId);
		if (block == null) return;
		if (block.event.cls.indexOf('enemy') != 0) return;
		var enemy = core.material.enemys[block.event.id];
		if (enemy == null) return;
		if (name == "hp") {
			var immune = false;
			if (block.event.id == "E888" && core.getFlag("A21boss_1p", 0) >= 4) immune = true; // Ocast 免疫伤害
			if (core.hasSpecial(enemy.special, 20)) immune = true; // 无敌
			if (immune) {
				core.plugin.popSkillDamage(0, x, y, "#eeee28");
				return;
			}
			if (operator == "-=") {
				core.plugin.popSkillDamage(value, x, y, "#eeee28");
				// 在生命光环影响下，实际对怪物原始生命值造成的伤害
				var hp_buff = core.getEnemyInfo(enemy, null, x, y, null).hp_buff || 0;
				var multiplier = 100 / (100 + hp_buff);
				value *= multiplier;
				value = Math.floor(value);
				value = Math.max(value, 0);
			}
		}
		if (typeof value === 'string' && name == 'name') value = value.replaceAll(/\r/g, '\\r');
		value = this._updateValueByOperator(core.calValue(value, prefix), core.getEnemyValue(enemy, name, x, y, floorId), operator);
		flags.enemyOnPoint = flags.enemyOnPoint || {};
		flags.enemyOnPoint[floorId] = flags.enemyOnPoint[floorId] || {};
		flags.enemyOnPoint[floorId][x + "," + y] = flags.enemyOnPoint[floorId][x + "," + y] || {};
		flags.enemyOnPoint[floorId][x + "," + y][name] = value;
		if (name == "hp" && core.getEnemyInfo(enemy, null, x, y, floorId).hp <= 0 && floorId == core.status.floorId) {
			if (core.hasSpecial(block.event.id, 87)) {
				// 辣鸡作者已经禁用了友军伤害，这个成就是无法完成的
				core.insertAction({
					"type": "choices",
					"text": "\t[系统提示]恭喜获得成就【\r[yellow]痛击我的队友\r】：使用毁灭重拳的护盾爆炸使一名友军生命值降低至0%！\n没有奖励。",
					"choices": [{
						"text": "？？？",
						"action": [

						]
					}, ]
				});
			}
			core.battle(block.event.id, x, y);
		}
		if (!norefresh) core.updateStatusBar();
	}
	////// 设置某个点上的怪物属性，不可叠加 //////
	core.events.setEnemyOnPoint = function (x, y, floorId, name, value, operator, prefix, norefresh) {
		floorId = floorId || core.status.floorId;
		var block = core.getBlock(x, y, floorId);
		if (block == null) return;
		if (block.event.cls.indexOf('enemy') != 0) return;
		var enemy = core.material.enemys[block.event.id];
		if (enemy == null) return;
		if (typeof value === 'string' && name == 'name') value = value.replaceAll(/\r/g, '\\r');

		var cur_value = core.getEnemyValue(enemy, name, x, y, floorId);
		var init_value = enemy[name];
		// 改了这里，一方面是令效果不叠加，另一方面是令较弱的效果不覆盖较强的效果
		// 强弱取决于变化的绝对值
		value = this._updateValueByOperator(core.calValue(value, prefix), enemy[name], operator);
		var should_update = false;
		if (cur_value == init_value) {
			should_update = true;
		} else if (Math.abs(cur_value - init_value) < Math.abs(value - init_value)) {
			should_update = true;
		}
		if (!should_update) return;

		flags.enemyOnPoint = flags.enemyOnPoint || {};
		flags.enemyOnPoint[floorId] = flags.enemyOnPoint[floorId] || {};
		flags.enemyOnPoint[floorId][x + "," + y] = flags.enemyOnPoint[floorId][x + "," + y] || {};
		flags.enemyOnPoint[floorId][x + "," + y][name] = value;
		if (!norefresh) core.updateStatusBar();
	}

	core.events.getEnemyOnPoint = function (x, y, floorId) {
		floorId = floorId || core.status.floorId;
		var block = core.getBlock(x, y, floorId);
		if (block == null) return {};
		if (block.event.cls.indexOf('enemy') != 0) return {};
		var enemy = core.material.enemys[block.event.id];
		if (enemy == null) return {};
		flags.enemyOnPoint = flags.enemyOnPoint || {};
		flags.enemyOnPoint[floorId] = flags.enemyOnPoint[floorId] || {};
		return flags.enemyOnPoint[floorId][x + "," + y] || {};
	}

	this.calcBoss17Info = function (delta) {
		// hard code，实现有点粗暴
		var enemy = core.material.enemys.E767;
		// 先计算出技能导致的boss能力下降数值
		var old_info = null;
		var ptemp = flags.enemyOnPoint.Ch4_5F;
		if (ptemp) {
			old_info = ptemp["6,3"];
		}
		var dhp = 0,
			datk = 0,
			ddef = 0;
		if (old_info && old_info.hp) {
			dhp = enemy.hp - old_info.hp;
		}
		if (old_info && old_info.atk) {
			datk = enemy.atk - old_info.atk;
		}
		if (old_info && old_info.def) {
			ddef = enemy.def - old_info.def;
		}
		var ratio = Math.pow(0.93, delta);
		core.events.setEnemy("E767", "hp", Math.ceil(ratio * enemy.hp));
		core.events.setEnemy("E767", "atk", Math.ceil(ratio * enemy.atk));
		core.events.setEnemy("E767", "def", Math.ceil(ratio * enemy.def));
		core.events.resetEnemyOnPoint(6, 3, "Ch4_5F");
		if (dhp > 0) {
			core.events.setEnemyOnPoint(6, 3, "Ch4_5F", "hp", dhp, "-=", "", true);
		}
		if (datk > 0) {
			core.events.setEnemyOnPoint(6, 3, "Ch4_5F", "atk", datk, "-=", "", true);
		}
		if (ddef > 0) {
			core.events.setEnemyOnPoint(6, 3, "Ch4_5F", "def", ddef, "-=", "", true);
		}
		core.updateStatusBar();
	}

	this.updateBoss21Info = function (p) {
		// swicth (p) { case 1: 重置 Ocast; case 2: 削弱 Ocast; case 3: 重置 Opollux; case 4: 削弱 Opollux;};
		if (p <= 2) {
			var datk, ddef;
			var debuff_atk = 250000,
				debuff_def = 500000;
			var i = core.getFlag("A21boss_1p");
			var hp = [400000000, 500000000, 600000000, 800000000, 1000000000][i];
			var atk = [25500000, 27000000, 28500000, 31000000, 34000000][i];
			var def = [22500000, 23500000, 25000000, 27500000, 30000000][i];
			if (p == 1) {
				core.setFlag("A21boss_1p_debuff", 0);
				core.events.resetEnemyOnPoint(4, 6, "Ch4_130");
				core.events.setEnemy("E888", "hp", hp);
			} else {
				atk -= core.getFlag("A21boss_1p_debuff") * debuff_atk;
				def -= core.getFlag("A21boss_1p_debuff") * debuff_def;
				var old_info = null;
				var p130 = flags.enemyOnPoint.Ch4_130;
				if (p130) {
					old_info = p130["4,6"];
				}
				if (old_info && old_info.atk) {
					datk = atk - old_info.atk;
				}
				if (old_info && old_info.def) {
					ddef = def - old_info.def;
				}

				core.addFlag("A21boss_1p_debuff", 1);
				core.insertCommonEvent("Ch4_2BossDraw");
				atk -= debuff_atk;
				def -= debuff_def;
			}
			core.events.setEnemy("E888", "atk", atk);
			core.events.setEnemy("E888", "def", def);
			if (datk > 0) {
				core.events.setEnemyOnPoint(4, 6, "Ch4_130", "atk", datk, "-=", "", true);
			}
			if (ddef > 0) {
				core.events.setEnemyOnPoint(4, 6, "Ch4_130", "def", ddef, "-=", "", true);
			}
		} else {
			var datk, ddef;
			var debuff_atk = 500000,
				debuff_def = 250000;
			var i = core.getFlag("A21boss_2p");
			var hp = [360000000, 395000000, 430000000, 465000000, 500000000][i];
			var atk = [35000000, 37500000, 40000000, 42500000, 45000000][i];
			var def = [16000000, 17000000, 18000000, 19000000, 20000000][i];
			if (p == 3) {
				core.setFlag("A21boss_2p_debuff", 0);
				core.events.resetEnemyOnPoint(8, 6, "Ch4_130");
				core.events.setEnemy("E889", "hp", hp);
			} else {
				atk -= core.getFlag("A21boss_2p_debuff") * debuff_atk;
				def -= core.getFlag("A21boss_2p_debuff") * debuff_def;
				var old_info = null;
				var p130 = flags.enemyOnPoint.Ch4_130;
				if (p130) {
					old_info = p130["8,6"];
				}
				if (old_info && old_info.atk) {
					datk = atk - old_info.atk;
				}
				if (old_info && old_info.def) {
					ddef = def - old_info.def;
				}

				core.addFlag("A21boss_2p_debuff", 1);
				core.insertCommonEvent("Ch4_2BossDraw");
				atk -= debuff_atk;
				def -= debuff_def;
			}
			core.events.setEnemy("E889", "atk", atk);
			core.events.setEnemy("E889", "def", def);
			if (datk > 0) {
				core.events.setEnemyOnPoint(8, 6, "Ch4_130", "atk", datk, "-=", "", true);
			}
			if (ddef > 0) {
				core.events.setEnemyOnPoint(8, 6, "Ch4_130", "def", ddef, "-=", "", true);
			}
		}
		core.updateStatusBar();
	}
},
    "itemDetail": function () {
	/* 宝石血瓶左下角显示数值，有修改
	 * 需要将 变量：itemDetail改为true才可生效
	 * 注意：这里的属性必须是core.status.hero里面的，flag无法显示
	 * 如有bug在大群或造塔群@古祠
	 */
	core.control.updateDamage = function (floorId, ctx) {
		floorId = floorId || core.status.floorId;
		if (!floorId || core.status.gameOver || main.mode != 'play') return;
		var onMap = ctx == null;

		// 没有怪物手册
		if (!core.hasItem('book')) return;
		core.status.damage.posX = core.bigmap.posX;
		core.status.damage.posY = core.bigmap.posY;
		if (!onMap) {
			var width = core.floors[floorId].width,
				height = core.floors[floorId].height;
			// 地图过大的缩略图不绘制显伤
			if (width * height > core.bigmap.threshold) return;
		}
		this._updateDamage_damage(floorId, onMap);
		this._updateDamage_extraDamage(floorId, onMap);
		core.getItemDetail(floorId); // 宝石血瓶详细信息
		this.drawDamage(ctx);
	};
	// 绘制地图显示
	control.prototype._drawDamage_draw = function (ctx, onMap) {
		if (!core.hasItem('book')) return;
		// *** 下一句话可以更改你想要的显示字体
		core.setFont(ctx, "bold 11px Arial");
		// ***
		core.setTextAlign(ctx, 'left');
		core.status.damage.data.forEach(function (one) {
			var px = one.px,
				py = one.py;
			if (onMap && core.bigmap.v2) {
				px -= core.bigmap.posX * 32;
				py -= core.bigmap.posY * 32;
				if (px < -32 * 2 || px > core.__PIXELS__ + 32 || py < -32 || py > core.__PIXELS__ + 32)
					return;
			}
			core.fillBoldText(ctx, one.text, px, py, one.color);
		});
		core.setTextAlign(ctx, 'center');
		core.status.damage.extraData.forEach(function (one) {
			var px = one.px,
				py = one.py;
			if (onMap && core.bigmap.v2) {
				px -= core.bigmap.posX * 32;
				py -= core.bigmap.posY * 32;
				if (px < -32 || px > core.__PIXELS__ + 32 || py < -32 || py > core.__PIXELS__ + 32)
					return;
			}
			core.fillBoldText(ctx, one.text, px, py, one.color);
		});
	};
	////// 更改地图画布的尺寸 //////
	maps.prototype.resizeMap = function (floorId) {
		floorId = floorId || core.status.floorId;
		if (!floorId) return;
		core.bigmap.width = core.floors[floorId].width;
		core.bigmap.height = core.floors[floorId].height;
		core.bigmap.posX = core.bigmap.posY = 0;
		// *** 下一句话可以更改超大地图的定义，core.bigmap.threshold为1024，这里/4 说明地图面积超过256即为超大地图，使用v2优化
		core.bigmap.v2 = core.bigmap.width * core.bigmap.height > core.bigmap.threshold / 4;
		// ***
		var width = core.bigmap.v2 ? core.__PIXELS__ + 64 : core.bigmap.width * 32;
		var height = core.bigmap.v2 ? core.__PIXELS__ + 64 : core.bigmap.height * 32;

		core.bigmap.canvas.forEach(function (cn) {
			if (core.domStyle.hdCanvas.indexOf(cn) >= 0)
				core.maps._setHDCanvasSize(core.canvas[cn], width, height);
			else {
				core.canvas[cn].canvas.width = width;
				core.canvas[cn].canvas.height = height;
			}
			core.canvas[cn].canvas.style.width = width * core.domStyle.scale + "px";
			core.canvas[cn].canvas.style.height = height * core.domStyle.scale + "px";
			core.canvas[cn].translate(core.bigmap.v2 ? 32 : 0, core.bigmap.v2 ? 32 : 0);
			if (main.mode === 'editor' && editor.isMobile) {
				core.canvas[cn].canvas.style.width = width / core.__PIXELS__ * 96 + "vw";
				core.canvas[cn].canvas.style.height = height / core.__PIXELS__ * 96 + "vw";
			}
		});
	};

	this.clearItemDetailCache = function (key) {
		var cache = core.getFlag("itemDetailCache", {});
		cache[key] = {};
		core.setFlag("itemDetailCache", cache);
	}
	this.clearItemDetailCacheAll = function () {
		core.removeFlag("itemDetailCache");
		core.updateDamage();
	}
	// 获取宝石信息 并绘制
	this.getItemDetail = function (floorId) {
		// core.clone 会耗费很多时间，这里加个缓存提升性能
		// 缺点也很明显，需要自己处理好什么时候应该清除缓存更新显示数据
		var cache = core.getFlag("itemDetailCache", {});
		floorId = floorId || core.status.thisMap.floorId;
		core.status.maps[floorId].blocks.forEach(function (block) {
			var x = block.x,
				y = block.y;
			// v2优化，只绘制范围内的部分
			if (core.bigmap.v2) {
				if (x < core.bigmap.posX - core.bigmap.extend || x > core.bigmap.posX + core.__SIZE__ + core.bigmap.extend ||
					y < core.bigmap.posY - core.bigmap.extend || y > core.bigmap.posY + core.__SIZE__ + core.bigmap.extend) {
					return;
				}
			}
			if (block.event.cls == "items") {
				var id = block.event.id;
				var whitelist = ["redRHeart", "blueRHeart", "yellowRHeart", "greenRHeart"];
				if (whitelist.indexOf(id) == -1 && !core.getFlag("itemDetail")) return;

				var diff = cache[id];
				var nocachelist = ["superPotion_s", "redRHeart", "blueRHeart", "yellowRHeart", "greenRHeart"];
				if (nocachelist.indexOf(id) != -1) diff = {};
				if (!diff || core.same(diff, {})) {
					// 跟数据统计原理一样 执行效果 前后比较
					var before = core.clone(core.status.hero);
					core.setFlag("__statistics__", true);
					try {
						eval(core.material.items[id].itemEffect);
					} catch (error) {}
					diff = core.compareObject(before, core.status.hero);
					cache[id] = diff;
					core.status.hero = before;
					window.hero = core.status.hero;
					window.flags = core.status.hero.flags;
				} else {
					diff = cache[id];
				}
				core.drawItemDetail(diff, block.x, block.y, floorId, id);
			}
		});
		core.setFlag("itemDetailCache", cache);
	};
	// 比较两个对象之间每一项的数值差异（弱等于）返回数值差异
	this.compareObject = function (a, b) {
		a = a || {};
		b = b || {};
		var diff = {}; // 差异
		for (var name in a) {
			if (a[name] != b[name]) { // a != b
				try {
					diff[name] = b[name] - (a[name] || 0);
				} catch (error) {}
				if (isNaN(diff[name])) delete diff[name];
				if (diff[name] == 0) delete diff[name];
			}
		}
		return diff;
	};
	// 绘制
	this.drawItemDetail = function (diff, x, y, floorId, id) {
		if (core.same(diff, {}) || !diff) return;
		var px = 32 * x + 2,
			py = 32 * y + 30;
		var content = "";
		// 获得数据和颜色
		var i = 0;
		for (var name in diff) {
			var color = "#ffffff";
			var damage = -diff[name];
			content = core.formatBigNumber(diff[name], true);
			// *** 这里可以改不同属性对应的颜色
			switch (name) {
			case 'atk':
				color = "#FF7A7A";
				break;
			case 'def':
				color = "#00E6F1";
				break;
			case 'mdef':
				color = "#6EFF83";
				break;
			case 'hp':
				color = "#A4FF00";
				if (damage > 0) {
					if (damage < core.status.hero.hp / 3) color = '#FFFFFF';
					else if (damage < core.status.hero.hp * 2 / 3) color = '#FFFF00';
					else if (damage < core.status.hero.hp) color = '#FF9933';
					else color = '#FF2222';
					content = core.formatBigNumber(damage, true);
				}
				break;
			case 'hpmax':
				color = "#F9FF00";
				break;
			case 'mana':
				color = "#008CFF";
				break;
			}
			// 绘制
			core.status.damage.data.push({ text: content, px: px, py: py - 10 * i, color: color });
			i++;
		}
	}
},
    "autoBattle": function () {
	// 从第九大陆抄的，有改动。不适合直接抄
	var enable = true;
	if (!enable) return;

	function bfsFlood(sx, sy, blockfn) {
		var canMoveArray = core.generateMovableArray();
		var blocksObj = core.getMapBlocksObj();
		var bgMap = core.getBgMapArray();

		var visited = [],
			queue = [];
		visited[sx + "," + sy] = 0;
		queue.push(sx + "," + sy);

		while (queue.length > 0) {
			var now = queue.shift().split(","),
				x = ~~now[0],
				y = ~~now[1];
			for (var direction in core.utils.scan) {
				if (!core.inArray(canMoveArray[x][y], direction)) continue;
				var nx = x + core.utils.scan[direction].x,
					ny = y + core.utils.scan[direction].y,
					nindex = nx + "," + ny;
				if (visited[nindex]) continue;
				if (core.onSki(bgMap[ny][nx])) continue;
				if (blockfn && !blockfn(blocksObj, nx, ny)) continue;
				visited[nindex] = visited[now] + 1;
				queue.push(nindex);
			}
		}
	}

	this.autoBattle = function () {
		if (core.getFlag("autoBattle", 0) == 0) return;
		if (core.getFlag("used_potion", 0) > 0) return;
		if (core.getFlag("70F_boss_phase", 0) == 1) return;
		if (core.getFlag("spe62_seal_hp", 0) > 0) return; // 防止封印状态下自动清夹击后面的怪
		if (core.getFlag("skill5_is_on", 0)) return;
		if (core.getFlag("invisible", 0)) return;
		if (core.hasItem("skill11")) return;
		var canBattleEnemys = {};
		var index_list = []; // 保序
		var canBattleFunc = function (block, idx, x, y) {
			var blkid = block ? block.event.id : "";
			var result = block && !block.disable && core.plugin.isEnemy(x, y) && !core.isMapBlockDisabled(core.status.floorId, block.x, block.y) &&
				block.event.trigger == 'battle';
			if (!result) return false;
			var enemy = core.material.enemys[blkid];
			if (core.status.checkBlock.no_autobattle[idx]) return false;
			if (core.getDamage(blkid, x, y) == null || core.getDamage(blkid, x, y) > 0) return false;
			// 爆匙 & 阻匙
			if (core.enemys.hasSpecial(blkid, 36) || core.enemys.hasSpecial(blkid, 103)) return false;
			// 反光环
			if (core.enemys.hasSpecial(blkid, 25) && (enemy.atkValue < 0 || enemy.defValue < 0 || enemy.hpValue < 0)) return false;
			if (core.enemys.hasSpecial(blkid, 28) && (enemy.value28 < 0)) return false;
			// 暴戾
			if (core.enemys.hasSpecial(blkid, 40) && core.getFlag("rage_stack", 0) >= 90) return false;
			// 沉醉
			if (core.enemys.hasSpecial(blkid, 47) && core.getFlag("rage_stack", 0) <= -90) return false;
			// 清洁 & 极奢
			if (core.enemys.hasSpecial(blkid, 49) || core.enemys.hasSpecial(blkid, 50)) return false;
			// buff
			if (core.enemys.hasSpecial(blkid, 52) || core.enemys.hasSpecial(blkid, 53) || core.enemys.hasSpecial(blkid, 54)) return false;
			// 命源封印
			if (core.enemys.hasSpecial(blkid, 62)) return false;
			// 轻风
			if (core.enemys.hasSpecial(blkid, 73)) return false;
			// 完全毁灭 & 阳炎冲击 & 定时炸弹 & 火焰喷射
			if (core.enemys.hasSpecial(blkid, 64) || core.enemys.hasSpecial(blkid, 74) ||
				core.enemys.hasSpecial(blkid, 83) || core.enemys.hasSpecial(blkid, 86)) return false;
			// 激爆 & 闭门
			if (core.enemys.hasSpecial(blkid, 75) || core.enemys.hasSpecial(blkid, 78)) return false;
			return true;
		}
		var blockfn = function (blockMap, x, y) {
			var idx = x + ',' + y;
			if (idx in canBattleEnemys) return false;
			var blk = blockMap[idx];

			if (canBattleFunc(blk, idx, x, y)) {
				canBattleEnemys[idx] = { x: x, y: y, id: blk.event.id };
				index_list.push(idx);
				return !core.status.checkBlock.damage[idx] && !core.status.checkBlock.repulse[idx] && !core.status.checkBlock.ambush[idx] && !core.status.checkBlock.chase[idx] && !core.status.checkBlock.visible[idx] && !core.status.checkBlock.lose_key[idx] && !core.status.checkBlock.seal_hp[idx] && !core.status.checkBlock.spe_69[idx] && !core.status.checkBlock.spe_72[idx];
			}
			return core.maps._canMoveDirectly_checkNextPoint(blockMap, x, y);
		};
		if (!core.status.floorId || !core.status.checkBlock.damage || core.status.event.id == 'action' || core.status.lockControl) return;
		// 身處地圖傷害時只能自動处理身邊的
		var near_only = false;
		var loc_x = core.status.hero.loc.x,
			loc_y = core.status.hero.loc.y,
			loc_idx = loc_x + "," + loc_y;
		if (Object.keys(core.status.checkBlock.damage).indexOf(loc_idx) != -1) near_only = true;
		if (Object.keys(core.status.checkBlock.repulse).indexOf(loc_idx) != -1) near_only = true;
		if (Object.keys(core.status.checkBlock.ambush).indexOf(loc_idx) != -1) near_only = true;
		if (Object.keys(core.status.checkBlock.chase).indexOf(loc_idx) != -1) near_only = true;
		if (Object.keys(core.status.checkBlock.visible).indexOf(loc_idx) != -1) near_only = true;
		if (Object.keys(core.status.checkBlock.lose_key).indexOf(loc_idx) != -1) near_only = true;
		if (Object.keys(core.status.checkBlock.seal_hp).indexOf(loc_idx) != -1) near_only = true;
		if (Object.keys(core.status.checkBlock.spe_69).indexOf(loc_idx) != -1) near_only = true;
		if (Object.keys(core.status.checkBlock.spe_72).indexOf(loc_idx) != -1) near_only = true;

		if (near_only) {
			for (var direction in core.utils.scan) {
				var nx = loc_x + core.utils.scan[direction].x,
					ny = loc_y + core.utils.scan[direction].y,
					nindex = nx + "," + ny;
				var blk = core.getMapBlocksObj()[nindex];
				if (canBattleFunc(blk, nindex, nx, ny)) {
					canBattleEnemys[nindex] = { x: nx, y: ny, id: blk.event.id };
					index_list.push(nindex);
				}
			}
		} else {
			bfsFlood(core.getHeroLoc('x'), core.getHeroLoc('y'), blockfn);
		}
		//var actions = [];
		core.setFlag("disable_autosave2", 1);
		//actions.push({ "type": "setValue", "name": "flag:disable_autosave2", "value": "1" });
		for (var i = 0; i < index_list.length; ++i) {
			var k = index_list[i];
			var x = canBattleEnemys[k].x,
				y = canBattleEnemys[k].y,
				id = canBattleEnemys[k].id;
			if (core.getDamage(id, x, y) <= 0) { // double check，比如打了某只暴戾之后本来0伤的怪突然非0了
				core.battle(id, x, y);
			}
			//actions.push({ "type": "battle", "loc": [x, y] });
		}
		//actions.push({ "type": "setValue", "name": "flag:disable_autosave2", "value": "0" });
		core.setFlag("disable_autosave2", 0);
		//core.insertAction(actions);
	}
},
    "bugfix": function () {
	// 强制 noCache
	// 有的时候会出现打完机关门边的怪，但机关门上面的数字不消失的情况。也可能跟 redrawMap 没有及时更新某些变量有关。
	core.maps._getBgFgNumber = function (name, x, y, floorId) {
		if (x == null) x = core.getHeroLoc('x');
		if (y == null) y = core.getHeroLoc('y');
		return this._getBgFgMapArray(name, floorId, true)[y][x];
	}

	////// 是否应当存在事件时虚化前景层 //////
	// 修改：当位置上是空气墙或 terrains 时不虚化前景
	core.maps._drawBlockInfo_shouldBlurFg = function (x, y) {
		if (main.mode == 'play' && !core.flags.blurFg) return false;
		var block = this.getBlock(x, y);
		if (block == null || block.id == 0 || block.id == 17) return false;
		if (block.event.cls == 'autotile' || block.event.cls == 'tileset' || block.event.cls == 'terrains') return block.event.script || block.event.event;
		return true;
	}

	// 存档名格式解析
	core.control._getSaveIndexes_getIndex = function (indexes, name) {
		var e = new RegExp('^' + core.firstData.name + "_(save\\d+|autoSave)$").exec(name);
		if (e) {
			if (e[1] == 'autoSave') indexes[0] = true;
			else indexes[parseInt(e[1].substring(4))] = true;
			return;
		}
		// 移动端文件名称
		e = new RegExp("^(save\\d+|autoSave)$").exec(name);
		if (e) {
			if (e[1] == 'autoSave') indexes[0] = true;
			else indexes[parseInt(e[1].substring(4))] = true;
		}
	}

	// 大地图背景图，样板的该函数有个小 bug，把某个 posY 写成 posX 了
	maps.prototype._drawFloorImage = function (ctx, name, one, image, currStatus, onMap) {
		var height = image.height;
		var imageName = one.name + (one.reverse || '');
		var width = parseInt((one.w == null ? image.width : one.w) / (one.frame || 1));
		var height = one.h == null ? image.height : one.h;
		var sx = (one.sx || 0) + (currStatus || 0) % (one.frame || 1) * width;
		var sy = one.sy || 0;
		var x = one.x || 0,
			y = one.y || 0;
		if (onMap && core.bigmap.v2) {
			if (x > 32 * core.bigmap.posX + core.__PIXELS__ + 32 || x + width < 32 * core.bigmap.posX - 32 ||
				y > 32 * core.bigmap.posY + core.__PIXELS__ + 32 || y + height < 32 * core.bigmap.posY - 32) {
				return;
			}
			x -= 32 * core.bigmap.posX;
			y -= 32 * core.bigmap.posY;
		}

		if (one.canvas != 'auto' && one.canvas != name) return;
		if (one.canvas != 'auto') {
			if (currStatus != null) core.clearMap(ctx, x, y, width, height);
			core.drawImage(ctx, imageName, sx, sy, width, height, x, y, width, height);
		} else {
			if (name == 'bg') {
				if (currStatus != null) core.clearMap(ctx, x, y + height - 32, width, 32);
				core.drawImage(ctx, imageName, sx, sy + height - 32, width, 32, x, y + height - 32, width, 32);
			} else if (name == 'fg') {
				if (currStatus != null) core.clearMap(ctx, x, y, width, height - 32);
				core.drawImage(ctx, imageName, sx, sy, width, height - 32, x, y, width, height - 32);
			}
		}
	}

	// redrawMap 在破墙破掉 autotile 之后不会刷新某些变量
	core.maps._removeBlockFromMap = function (floorId, block) {
		if (floorId != core.status.floorId) return;
		var filter = block.filter || {};
		if (block.event.cls == 'autotile' || filter.blur > 0 || filter.shadow > 0) {
			core.drawMap();
		} else {
			var x = block.x,
				y = block.y;
			var px = 32 * x - core.bigmap.posX * 32;
			var py = 32 * y - core.bigmap.posY * 32;
			core.removeGlobalAnimate(x, y);
			core.clearMap('event', px, py, 32, 32);
			var height = block.event.height || 32;
			if (height > 32) core.clearMap('event2', px, py + 32 - height, 32, height - 32);
			// 删除大怪物
			core.deleteCanvas("_bigImage_header_" + x + "_" + y);
			core.deleteCanvas("_bigImage_body_" + x + "_" + y);
			core.updateStatusBar();
		}
	}
}
}