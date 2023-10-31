var events_c12a15a8_c380_4b28_8144_256cba95f760 = 
{
	"commonEvent": {
		"加点事件": [
			{
				"type": "comment",
				"text": "通过传参，flag:arg1 表示当前应该的加点数值"
			},
			{
				"type": "choices",
				"choices": [
					{
						"text": "攻击+${1*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "1*flag:arg1"
							}
						]
					},
					{
						"text": "防御+${2*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "2*flag:arg1"
							}
						]
					},
					{
						"text": "生命+${200*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "200*flag:arg1"
							}
						]
					}
				]
			}
		],
		"毒衰咒处理": [
			{
				"type": "comment",
				"text": "获得毒衰咒效果，flag:arg1 为要获得的类型"
			},
			{
				"type": "switch",
				"condition": "flag:arg1",
				"caseList": [
					{
						"case": "0",
						"action": [
							{
								"type": "comment",
								"text": "获得毒效果"
							},
							{
								"type": "if",
								"condition": "!flag:poison",
								"true": [
									{
										"type": "setValue",
										"name": "flag:poison",
										"value": "true"
									}
								],
								"false": []
							}
						]
					},
					{
						"case": "1",
						"action": [
							{
								"type": "comment",
								"text": "获得衰效果"
							},
							{
								"type": "if",
								"condition": "!flag:weak",
								"true": [
									{
										"type": "setValue",
										"name": "flag:weak",
										"value": "true"
									},
									{
										"type": "if",
										"condition": "core.values.weakValue>=1",
										"true": [
											{
												"type": "comment",
												"text": ">=1：直接扣数值"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "-=",
												"value": "core.values.weakValue"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "-=",
												"value": "core.values.weakValue"
											}
										],
										"false": [
											{
												"type": "comment",
												"text": "<1：扣比例"
											},
											{
												"type": "function",
												"function": "function(){\ncore.addBuff('atk', -core.values.weakValue);\n}"
											},
											{
												"type": "function",
												"function": "function(){\ncore.addBuff('def', -core.values.weakValue);\n}"
											}
										]
									}
								],
								"false": []
							}
						]
					},
					{
						"case": "2",
						"action": [
							{
								"type": "comment",
								"text": "获得咒效果"
							},
							{
								"type": "if",
								"condition": "!flag:curse",
								"true": [
									{
										"type": "setValue",
										"name": "flag:curse",
										"value": "true"
									}
								],
								"false": []
							}
						]
					}
				]
			}
		],
		"回收钥匙商店": [
			{
				"type": "comment",
				"text": "此事件在全局商店中被引用了(全局商店keyShop)"
			},
			{
				"type": "comment",
				"text": "解除引用前勿删除此事件"
			},
			{
				"type": "comment",
				"text": "玩家在快捷列表（V键）中可以使用本公共事件"
			},
			{
				"type": "while",
				"condition": "1",
				"data": [
					{
						"type": "choices",
						"text": "\t[商人,trader]你有多余的钥匙想要出售吗？",
						"choices": [
							{
								"text": "黄钥匙（10金币）",
								"color": [
									255,
									255,
									0,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "item:yellowKey >= 1",
										"true": [
											{
												"type": "setValue",
												"name": "item:yellowKey",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "10"
											}
										],
										"false": [
											"\t[商人,trader]你没有黄钥匙！"
										]
									}
								]
							},
							{
								"text": "蓝钥匙（50金币）",
								"color": [
									0,
									0,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "item:blueKey >= 1",
										"true": [
											{
												"type": "setValue",
												"name": "item:blueKey",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "50"
											}
										],
										"false": [
											"\t[商人,trader]你没有蓝钥匙！"
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "exit"
									}
								]
							}
						]
					}
				]
			}
		],
		"绿姐姐的提示": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "switch",
						"condition": "flag:current_area",
						"caseList": [
							{
								"case": "5",
								"action": [
									{
										"type": "choices",
										"text": "\t[芳芷,hero2]选择要提示的内容",
										"choices": [
											{
												"text": "追击",
												"color": [
													255,
													167,
													0,
													1
												],
												"action": [
													{
														"type": "if",
														"condition": "flag:chase_no_force == 1",
														"true": [
															"\t[芳芷,hero2]这个区域出现拥有\r[yellow]追击\r属性的敌人。\n每当你经过他们的同行或同列时，他们就会试图向你移动一格。\r[yellow]但他们追上你之后却不会主动与你战斗。\r"
														],
														"false": [
															"\t[芳芷,hero2]和之前一样，一般情况下，敌人是不会主动攻击你的。但是拥有\r[yellow]追击\r属性的敌人是例外。\n每当你经过他们的同行或同列时，他们就会试图向你移动一格，\r[orange]如果追上你就会强制战斗\r。"
														]
													},
													"\t[芳芷,hero2]任何物体都可以阻挡他们移动，包括其他敌人，或者钥匙之类的道具。",
													"\t[芳芷,hero2]虽然他们视力很好，能够隔着墙看到你，但他们移动并不快，经常盲目追赶。\n借助你手中的\r[yellow]楼层传送器\r，这一点也许可以加以利用。"
												]
											},
											{
												"text": "支援",
												"color": [
													255,
													249,
													0
												],
												"action": [
													"\t[芳芷,hero2]那些骑士拥有的\r[yellow]支援\r属性比较难缠。理解这个属性有两个重点。",
													"\t[芳芷,hero2]第一，支援范围是同行或同列，且可到达范围。他们能够跨越钥匙之类的道具进行移动，但不能跨越其他\r[yellow]没有支援属性\r的敌人。\n另外，如果他们看到一堵墙，会直接认为此路不通，不会尝试绕到墙的后面。",
													"\t[芳芷,hero2]第二， 他们跟随被支援的友军作战。这意味着战斗中你必须同时面对两个甚至更多敌人，并且先与被支援的敌人作战，之后再与这些骑士战斗。",
													"\t[芳芷,hero2]考虑到这些骑士本身抗打能力不强，但攻击力较高，因此尽量绕开能够被他们支援的敌人，直接干掉他们。",
													{
														"type": "if",
														"condition": "flag:hard == 2",
														"true": [
															"\t[芳芷,hero2]如果迫不得已需要同时面对多个敌人，你的主动技能往往会很有用，特别是\r[aqua]能量爆发\r能同时攻击到所有敌人。"
														]
													},
													"\t[系统提示]另外，支援影响范围内的怪不会被自动清怪所清理。\n主要是辣鸡作者水平有限，为了避免产生奇怪的 bug，只好稍微麻烦一下玩家了。"
												]
											},
											{
												"text": "暴戾",
												"color": [
													255,
													0,
													165
												],
												"action": [
													"\t[芳芷,hero2]那些暴掠营的战士能使你陷入\r[yellow]暴戾\r状态，使你造成和受到的伤害都提升。\n叠加方式是线性，意味着如果你有10层暴戾，那么造成和受到的伤害都会提升10%。",
													{
														"type": "if",
														"condition": "flag:hard == 2",
														"true": [
															"\t[芳芷,hero2]这个状态算是双刃剑，因为它能够提升\r[aqua]能量爆发\r的伤害，使你能够快速解决一些比较脆的敌人。\n但是也有些敌人能利用你的暴戾对你造成大量伤害，需要特别小心。"
														],
														"false": [
															"\t[芳芷,hero2]大多数时候这个状态的影响并不大，因为你造成和受到的伤害提升比例是一样的，所以战斗的总伤害变化不大，暴戾只是让战斗更快结束而已。\n但是有些敌人能利用你的暴戾使你在战斗中处于劣势，需要特别小心。"
														]
													}
												]
											},
											{
												"text": "远程支援",
												"color": [
													0,
													221,
													0
												],
												"action": [
													"\t[芳芷,hero2]神射手能够为他周围的友军提供支援，每当他周围的友军行动一回合时，他也可以附加一次攻击。",
													"\t[芳芷,hero2]由于他的攻击穿透性很强，难以防御，所以在他周围战斗时尽量速战速决。另外他自身战斗力不强，如果可能的话，绕开他附近的其他敌人，直接干掉他。"
												]
											},
											{
												"text": "我都明白啦！",
												"action": [
													"\t[芳芷,hero2]加油，你一定行的！",
													{
														"type": "exit"
													}
												]
											}
										]
									}
								]
							},
							{
								"case": "6",
								"action": [
									{
										"type": "choices",
										"text": "\t[芳芷,hero2]选择要提示的内容",
										"choices": [
											{
												"text": "主角先攻",
												"color": [
													255,
													249,
													0
												],
												"action": [
													"\t[芳芷,hero2]这个区域的一些敌人十分懈怠，在战斗中会被你先攻若干次。",
													{
														"type": "if",
														"condition": "flag:hard==2",
														"true": [
															"\t[芳芷,hero2]需要注意的是，你的主动技能不会在先攻的额外回合中使用，而是在先攻结束之后才释放。\n因此\r[aqua]能量爆发\r的控制效果不会浪费掉，但\r[aqua]集中防御\r的效果相对较差。"
														],
														"false": [
															"\t[芳芷,hero2]提升攻击力可以帮你快速战胜这些敌人，但你还需要对付其他不会被你先攻的敌人，所以防御力也很重要。"
														]
													}
												]
											},
											{
												"text": "沉醉",
												"color": [
													196,
													0,
													255,
													1
												],
												"action": [
													"\t[芳芷,hero2]那些贵族拥有的\r[yellow]沉醉\r属性类似于之前的\r[yellow]暴戾\r。不同的是，这个状态会使你造成和受到的伤害都减少。",
													"\t[芳芷,hero2]同样，大多数时候这个状态不会对战斗的总伤害产生影响。\n但它能帮你应对\r[aqua]净化\r、\r[red]强击\r等瞬间造成大量伤害的特技，或者让你在\r[blue]冰冻\r状态下承受的伤害大幅减少。",
													"\t[芳芷,hero2]但是，也有一些敌人不适合你带着沉醉状态去战斗，这个就靠你自己判断啦。",
													{
														"type": "if",
														"condition": "flag:hard == 2",
														"true": [
															"\t[芳芷,hero2]另外，这个状态也会降低你的\r[aqua]能量爆发\r的伤害，需要注意。"
														]
													}
												]
											},
											{
												"text": "清洁",
												"color": [
													0,
													255,
													0,
													1
												],
												"action": [
													"\t[芳芷,hero2]一些敌人能够帮你清除异常状态，包括沉醉和冰冻。\n要好好“利用”它们哦。杂货商人那里的解药很贵的。",
													"\t[芳芷,hero2]如果你没有任何异常状态被解除，则会回复生命值。",
													"\t[芳芷,hero2]需要注意的是，清洁的结算晚于异常状态的自然减少。\n比如你带着1层\r[aqua]冰冻\r与带有清洁的敌人战斗，那么战后冰冻自然消失，再结算清洁，因此仍然能获得生命值。"
												]
											},
											{
												"text": "我都明白啦！",
												"action": [
													"\t[芳芷,hero2]很好，冲冲冲，上上上！",
													{
														"type": "exit"
													}
												]
											}
										]
									},
									{
										"type": "exit"
									}
								]
							},
							{
								"case": "7",
								"action": [
									"再也不会有提示了。",
									{
										"type": "exit"
									}
								]
							},
							{
								"case": "-1",
								"action": [
									"关于挑战模式的一些说明：\n目前总共有2层。每层通过时重置所有数值。\n在第二个副本中，在\\i[E635]卫兵所在的位置击杀任何怪物都可以增加机关门的计数；\\i[pickaxe]破墙镐可以破坏任意地形。",
									{
										"type": "exit"
									}
								]
							},
							{
								"case": "default",
								"action": [
									"没有提示。",
									{
										"type": "exit"
									}
								]
							}
						]
					}
				]
			}
		],
		"70Fboss_round": [
			{
				"type": "comment",
				"text": "boss进行一回合移动"
			},
			{
				"type": "setValue",
				"name": "flag:70Fboss_skill_this_round",
				"value": "0"
			},
			{
				"type": "if",
				"condition": "(flag:70Fboss_skill4_cd <= 0)",
				"true": [
					{
						"type": "comment",
						"text": "优先发动：至尊之怒"
					},
					{
						"type": "setValue",
						"name": "flag:70Fboss_skill_this_round",
						"value": "4"
					},
					{
						"type": "setValue",
						"name": "flag:70Fboss_skill4_cd",
						"value": "20"
					},
					{
						"type": "animate",
						"name": "yongchang",
						"loc": [
							6,
							6
						],
						"async": true
					},
					{
						"type": "playSound",
						"name": "se_power0.wav"
					},
					{
						"type": "vibrate",
						"direction": "horizontal",
						"time": 1500,
						"speed": 10,
						"power": 10
					},
					{
						"type": "function",
						"function": "function(){\nvar is_first = true;\n\nfunction Process(x, y) {\n\tif (is_first) {\n\t\tcore.drawAnimate(\"fire4\", x, y);\n\t\tis_first = false;\n\t} else {\n\t\tcore.drawAnimate(\"fire4_mute\", x, y);\n\t}\n\tif (x == core.status.hero.loc.x && y == core.status.hero.loc.y) {\n\t\tvar damage = core.status.hero.hp / 2;\n\t\tdamage += 22210000;\n\t\tdamage = Math.floor(damage);\n\t\tcore.status.hero.hp -= damage; // 直接伤害\n\t\tcore.plugin.popSkillDamage(damage, x, y);\n\t}\n\tif (core.getBlockCls(x, y) == \"enemys\") {\n\t\tvar enemy = core.material.enemys[core.getBlock(x, y).event.id];\n\t\tif (core.hasSpecial(enemy.special, 57)) {\n\t\t\tcore.plugin.BombExplode(x, y, enemy.damage);\n\t\t}\n\t}\n}\n\nif (!core.isReplaying()) {\n\tsetTimeout(function () {\n\t\tis_first = true;\n\t\tfor (var dx = 5; dx <= 7; ++dx) {\n\t\t\tfor (var dy = 5; dy <= 7; ++dy) {\n\t\t\t\tif (dx == 6 && dy == 6) continue;\n\t\t\t\tProcess(dx, dy);\n\t\t\t}\n\t\t}\n\t\tcore.updateStatusBar();\n\t}, 500);\n\tsetTimeout(function () {\n\t\tis_first = true;\n\t\tfor (var dx = 4; dx <= 8; ++dx) {\n\t\t\tfor (var dy = 4; dy <= 8; ++dy) {\n\t\t\t\tif (dx >= 5 && dx <= 7 && dy >= 5 && dy <= 7) continue;\n\t\t\t\tProcess(dx, dy);\n\t\t\t}\n\t\t}\n\t\tcore.updateStatusBar();\n\t}, 1000);\n\tsetTimeout(function () {\n\t\tis_first = true;\n\t\tfor (var dx = 3; dx <= 9; ++dx) {\n\t\t\tfor (var dy = 3; dy <= 9; ++dy) {\n\t\t\t\tif (dx >= 4 && dx <= 8 && dy >= 4 && dy <= 8) continue;\n\t\t\t\tProcess(dx, dy);\n\t\t\t}\n\t\t}\n\t\tcore.updateStatusBar();\n\t}, 1500);\n} else {\n\tis_first = true;\n\tfor (var dx = 3; dx <= 9; ++dx) {\n\t\tfor (var dy = 3; dy <= 9; ++dy) {\n\t\t\tProcess(dx, dy);\n\t\t}\n\t}\n\tcore.updateStatusBar();\n}\n}"
					},
					{
						"type": "sleep",
						"time": 1600,
						"noSkip": true
					}
				],
				"false": [
					{
						"type": "if",
						"condition": "(flag:70Fboss_skill1_cd <= 0)",
						"true": [
							{
								"type": "comment",
								"text": "1技能：投掷爆弹"
							},
							{
								"type": "setValue",
								"name": "flag:70Fboss_skill_this_round",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:70Fboss_skill1_cd",
								"value": "3"
							},
							{
								"type": "setBlock",
								"number": "E363",
								"loc": [
									[
										6,
										6
									]
								]
							},
							{
								"type": "jump",
								"from": [
									6,
									6
								],
								"to": [
									"core.status.hero.loc.x",
									"core.status.hero.loc.y"
								],
								"time": 300,
								"keep": true,
								"async": true
							},
							{
								"type": "playSound",
								"name": "jump.mp3"
							},
							{
								"type": "setBlock",
								"number": "E2221_down",
								"loc": [
									[
										6,
										6
									]
								]
							},
							{
								"type": "function",
								"function": "function(){\nvar dx = 0,\n\tdy = 0;\nif (core.status.hero.loc.direction == \"up\") {\n\tdy = -2;\n} else if (core.status.hero.loc.direction == \"down\") {\n\tdy = 2;\n} else if (core.status.hero.loc.direction == \"left\") {\n\tdx = -2;\n} else {\n\tdx = 2;\n}\ncore.setFlag(\"70F_dx\", dx);\ncore.setFlag(\"70F_dy\", dy);\ncore.setFlag(\"nextx\", core.status.hero.loc.x + dx);\ncore.setFlag(\"nexty\", core.status.hero.loc.y + dy);\n}"
							},
							{
								"type": "waitAsync"
							},
							{
								"type": "animate",
								"name": "fire2",
								"loc": "hero",
								"async": true
							},
							{
								"type": "playSound",
								"name": "jump.mp3"
							},
							{
								"type": "jumpHero",
								"dxy": [
									"flag:70F_dx",
									"flag:70F_dy"
								],
								"time": 300
							},
							{
								"type": "function",
								"function": "function(){\n// 如果要跳到的位置是熔岩，直接触发\nvar x = core.getFlag(\"nextx\"),\n\ty = core.getFlag(\"nexty\");\nif (core.getBlockId(x, y) == \"lavaNet\") {\n\tcore.status.hero.hp -= core.values.lavaDamage;\n\tcore.removeBlock(x, y);\n\tcore.drawAnimate(\"fire\", x, y);\n\tcore.plugin.popSkillDamage(core.values.lavaDamage, x, y);\n}\n}"
							},
							{
								"type": "insert",
								"loc": [
									"flag:nextx",
									"flag:nexty"
								]
							},
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "-=",
								"value": "222221"
							},
							{
								"type": "function",
								"function": "function(){\ncore.plugin.popSkillDamage(222221, core.status.hero.loc.x, core.status.hero.loc.y);\n}"
							},
							{
								"type": "waitAsync"
							}
						],
						"false": [
							{
								"type": "if",
								"condition": "(flag:70Fboss_skill2_cd <= 0)",
								"true": [
									{
										"type": "comment",
										"text": "2技能：地烈炎斩"
									},
									{
										"type": "setValue",
										"name": "flag:70Fboss_skill_this_round",
										"value": "2"
									},
									{
										"type": "setValue",
										"name": "flag:70Fboss_skill2_cd",
										"value": "9"
									},
									{
										"type": "setValue",
										"name": "flag:70Fboss_skill2_loc_x",
										"value": "core.status.hero.loc.x"
									},
									{
										"type": "setValue",
										"name": "flag:70Fboss_skill2_loc_y",
										"value": "core.status.hero.loc.y"
									},
									{
										"type": "setValue",
										"name": "flag:70Fboss_skill2_ready",
										"value": "2"
									}
								],
								"false": [
									{
										"type": "if",
										"condition": "(flag:70Fboss_skill3_cd <= 0)",
										"true": [
											{
												"type": "comment",
												"text": "3技能：寒冰导弹"
											},
											{
												"type": "setValue",
												"name": "flag:70Fboss_skill_this_round",
												"value": "3"
											},
											{
												"type": "setValue",
												"name": "flag:70Fboss_skill3_cd",
												"value": "6"
											},
											{
												"type": "setValue",
												"name": "flag:70Fboss_skill3_loc_x",
												"value": "core.status.hero.loc.x"
											},
											{
												"type": "setValue",
												"name": "flag:70Fboss_skill3_loc_y",
												"value": "core.status.hero.loc.y"
											},
											{
												"type": "playSound",
												"name": "se_power0.wav"
											},
											{
												"type": "showImage",
												"code": 2,
												"image": "guangbiao.png",
												"loc": [
													"flag:70Fboss_skill3_loc_x*32",
													"flag:70Fboss_skill3_loc_y*32"
												],
												"opacity": 1,
												"time": 0
											},
											{
												"type": "setValue",
												"name": "flag:70Fboss_skill3_ready",
												"value": "3"
											}
										],
										"false": []
									}
								]
							}
						]
					}
				]
			},
			{
				"type": "if",
				"condition": "(flag:70Fboss_skill2_ready > 0)",
				"true": [
					{
						"type": "comment",
						"text": "2技能：地烈炎斩绘制箭头指示"
					},
					{
						"type": "playSound",
						"name": "se_power0.wav"
					},
					{
						"type": "if",
						"condition": "(flag:70Fboss_skill2_dir % 2 == 0)",
						"true": [
							{
								"type": "showImage",
								"code": 1,
								"image": "rightArrow.png",
								"loc": [
									"flag:70Fboss_skill2_loc_x*32",
									"flag:70Fboss_skill2_loc_y*32"
								],
								"opacity": 1,
								"time": 0
							}
						],
						"false": [
							{
								"type": "showImage",
								"code": 1,
								"image": "downArrow.png",
								"loc": [
									"flag:70Fboss_skill2_loc_x*32",
									"flag:70Fboss_skill2_loc_y*32"
								],
								"opacity": 1,
								"time": 0
							}
						]
					}
				]
			},
			{
				"type": "if",
				"condition": "((flag:70Fboss_skill1_cd>0 )&&( flag:70Fboss_skill_this_round != 1))",
				"true": [
					{
						"type": "setValue",
						"name": "flag:70Fboss_skill1_cd",
						"operator": "-=",
						"value": "1"
					}
				]
			},
			{
				"type": "if",
				"condition": "((flag:70Fboss_skill2_cd>0)&&( flag:70Fboss_skill_this_round != 2))",
				"true": [
					{
						"type": "setValue",
						"name": "flag:70Fboss_skill2_cd",
						"operator": "-=",
						"value": "1"
					}
				]
			},
			{
				"type": "if",
				"condition": "((flag:70Fboss_skill3_cd>0)&&( flag:70Fboss_skill_this_round != 3))",
				"true": [
					{
						"type": "setValue",
						"name": "flag:70Fboss_skill3_cd",
						"operator": "-=",
						"value": "1"
					}
				]
			},
			{
				"type": "if",
				"condition": "((flag:70Fboss_skill4_cd>0)&&( flag:70Fboss_skill_this_round != 4))",
				"true": [
					{
						"type": "setValue",
						"name": "flag:70Fboss_skill4_cd",
						"operator": "-=",
						"value": "1"
					}
				]
			},
			{
				"type": "function",
				"function": "function(){\n// boss 转向\nvar x = core.status.hero.loc.x,\n\ty = core.status.hero.loc.y;\nif (x == y || x + y == 12) {\n\tcore.setFlag(\"boss_dir\", 0);\n} else {\n\tvar left_down = false,\n\t\tleft_up = false;\n\tif (x < y) {\n\t\tleft_down = true;\n\t}\n\tif (x + y < 12) {\n\t\tleft_up = true;\n\t}\n\tif (left_down) {\n\t\tif (left_up) {\n\t\t\t// left\n\t\t\tcore.setFlag(\"boss_dir\", 4);\n\t\t} else {\n\t\t\t// down\n\t\t\tcore.setFlag(\"boss_dir\", 3);\n\t\t}\n\t} else {\n\t\tif (left_up) {\n\t\t\t// up\n\t\t\tcore.setFlag(\"boss_dir\", 1);\n\t\t} else {\n\t\t\t// right\n\t\t\tcore.setFlag(\"boss_dir\", 2);\n\t\t}\n\t}\n}\n}"
			},
			{
				"type": "switch",
				"condition": "flag:boss_dir",
				"caseList": [
					{
						"case": "0",
						"action": []
					},
					{
						"case": "1",
						"action": [
							{
								"type": "setBlock",
								"number": "E2221_up",
								"loc": [
									[
										6,
										6
									]
								]
							}
						]
					},
					{
						"case": "2",
						"action": [
							{
								"type": "setBlock",
								"number": "E2221_right",
								"loc": [
									[
										6,
										6
									]
								]
							}
						]
					},
					{
						"case": "3",
						"action": [
							{
								"type": "setBlock",
								"number": "E2221_down",
								"loc": [
									[
										6,
										6
									]
								]
							}
						]
					},
					{
						"case": "4",
						"action": [
							{
								"type": "setBlock",
								"number": "E2221_left",
								"loc": [
									[
										6,
										6
									]
								]
							}
						]
					}
				]
			}
		],
		"第二章结束": [
			{
				"type": "insert",
				"name": "清理flag",
				"args": [
					2
				]
			},
			{
				"type": "pauseBgm"
			},
			{
				"type": "setValue",
				"name": "item:book",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "item:fly",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "item:I319",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "item:I392",
				"value": "1"
			},
			{
				"type": "function",
				"function": "function(){\ncore.setFlag('potion_extra_ratio', 10);\ncore.setFlag('mana_item', 50);\ncore.plugin.clearItemDetailCache(\"manaItem\");\ncore.plugin.clearItemDetailCache(\"bigManaitem\");\ncore.setFlag('mdef_ratio', 2);\ncore.setFlag('mana_regen', 1);\n}"
			},
			{
				"type": "setValue",
				"name": "item:I62",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "item:I437",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "item:I592",
				"value": "core.itemCount(\"greenKey\")"
			},
			{
				"type": "setValue",
				"name": "item:greenKey",
				"value": "0"
			},
			"\t[系统提示]即将进入新的区域。清空绿钥匙之外的全部道具、装备和金钱。\n失去所有主动技能。\n基础能力值和匙之道加成重置。",
			{
				"type": "disableShop",
				"id": "57FShop"
			},
			{
				"type": "disableShop",
				"id": "69FShop"
			},
			{
				"type": "function",
				"function": "function(){\ncore.unloadEquip(0);\ncore.unloadEquip(1);\nif (flags.hard == 2) {\n\tcore.setFlag('__atk_buff__', 6);\n\tcore.setFlag('__def_buff__', 6);\n\tcore.setFlag('__mdef_buff__', 6);\n\tcore.setFlag('heart_atk_pp', 500);\n\tcore.setFlag('heart_def_pp', 500);\n\tcore.setFlag('heart_mdef_pp', 500);\n} else if (flags.hard == 1) {\n\tcore.setFlag('__atk_buff__', 5);\n\tcore.setFlag('__def_buff__', 5);\n\tcore.setFlag('__mdef_buff__', 5);\n\tcore.setFlag('heart_atk_pp', 400);\n\tcore.setFlag('heart_def_pp', 400);\n\tcore.setFlag('heart_mdef_pp', 400);\n} else {\n\tcore.setFlag('__atk_buff__', 0);\n\tcore.setFlag('__def_buff__', 0);\n\tcore.setFlag('__mdef_buff__', 0);\n}\n}"
			},
			{
				"type": "setValue",
				"name": "item:sword0",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:sword1",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:sword2",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:shield1",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:shield2",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:sword3",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:shield3",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:sword4",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:shield4",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:leaf",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "status:hp",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "status:mana",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "status:atk",
				"value": "8000"
			},
			{
				"type": "setValue",
				"name": "status:def",
				"value": "5000"
			},
			{
				"type": "setValue",
				"name": "status:mdef",
				"value": "5000"
			},
			{
				"type": "setValue",
				"name": "status:money",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:yellowKey",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:blueKey",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:redKey",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:I420",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:I425",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:skill0_all",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:amulet",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:weakWine",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:I321",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:skill0",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:I343",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:skill1",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:skill2",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:I_wait",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "flag:chase_no_force",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "flag:yellowGem_extra_description",
				"value": "\"携带时，每颗使得每次战斗后回复1%护盾值的生命。\""
			},
			{
				"type": "setCurtain",
				"color": [
					0,
					0,
					0,
					1
				],
				"time": 500,
				"keep": true
			},
			"9922在数据中心徜徉许久，却并没有变得上知天文，下知地理。\n作为通用型智能，它的存储能力，或者说记忆力，是有限的。",
			"绝大多数的知识，对于打破困局并无帮助。\n而9922，终于迎来了找到极少数有用资料的那一天。",
			"那看起来似乎是个普通的VR游戏。\n但是上面写着《\r[yellow]至尊之路\r》——四个平凡的大字，散发着奇特的威压。",
			"\t[至尊bot]这里是《\r[yellow]至尊之路\r》的系统管理bot。\n请选择你要体验的难度，\r[yellow]简化\r或者\r[orange]普通\r。",
			{
				"type": "if",
				"condition": "flags.hard==1",
				"true": [
					"\t[hero]我选择\r[yellow]简化\r。"
				],
				"false": [
					"\t[hero]我选择\r[orange]普通\r。"
				]
			},
			"\t[至尊bot]选择完成。即将进行传送。",
			"随着9922的意念注入其中，一个全新的虚拟世界向它打开了大门。",
			{
				"type": "playSound",
				"name": "mteleport.wav"
			},
			{
				"type": "autoText",
				"text": "第三章\n至尊幻境",
				"time": 2000
			},
			{
				"type": "function",
				"function": "function(){\ncore.plugin.clearItemDetailCacheAll();\n}"
			},
			{
				"type": "setValue",
				"name": "flag:current_chapter",
				"value": "3"
			},
			{
				"type": "changeFloor",
				"floorId": "South1",
				"loc": [
					641,
					641
				],
				"direction": "down",
				"time": 1000
			}
		],
		"鸽化AD": [
			{
				"type": "animate",
				"name": "spe50",
				"loc": "hero",
				"async": true
			},
			{
				"type": "setValue",
				"name": "flag:moveShadow",
				"value": "1"
			},
			{
				"type": "setHeroIcon",
				"name": "hero_gold.png"
			},
			{
				"type": "setValue",
				"name": "status:atk",
				"operator": "+=",
				"value": "10000"
			},
			{
				"type": "setValue",
				"name": "status:def",
				"operator": "+=",
				"value": "10000"
			},
			{
				"type": "setValue",
				"name": "flag:skill5_ad",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:skill5_is_on",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:potion_extra_ratio",
				"value": "30"
			},
			{
				"type": "setValue",
				"name": "flag:cannotMoveDirectly",
				"value": "true"
			},
			{
				"type": "setValue",
				"name": "flag:no_zone",
				"value": "true"
			},
			{
				"type": "setValue",
				"name": "flag:no_betweenAttack",
				"value": "true"
			},
			{
				"type": "setValue",
				"name": "flag:no_repulse",
				"value": "true"
			},
			{
				"type": "setValue",
				"name": "flag:no_laser",
				"value": "true"
			},
			{
				"type": "setValue",
				"name": "flag:itemDetailCache",
				"value": "{}"
			}
		],
		"鸽化AM": [
			{
				"type": "animate",
				"name": "rage_buff",
				"loc": "hero",
				"async": true
			},
			{
				"type": "setValue",
				"name": "flag:moveShadow",
				"value": "1"
			},
			{
				"type": "setHeroIcon",
				"name": "hero_rage.png"
			},
			{
				"type": "setValue",
				"name": "status:atk",
				"operator": "+=",
				"value": "5000"
			},
			{
				"type": "setValue",
				"name": "status:mdef",
				"operator": "+=",
				"value": "25000"
			},
			{
				"type": "setValue",
				"name": "flag:skill5_am",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:skill5_is_on",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:skill5_cd",
				"value": "8"
			},
			{
				"type": "setValue",
				"name": "flag:skill5_direction",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "flag:cannotMoveDirectly",
				"value": "true"
			},
			{
				"type": "setValue",
				"name": "flag:disableFly",
				"value": "true"
			}
		],
		"鸽化DM": [
			{
				"type": "animate",
				"name": "def_buff",
				"loc": "hero",
				"async": true
			},
			{
				"type": "setValue",
				"name": "flag:moveShadow",
				"value": "1"
			},
			{
				"type": "setHeroIcon",
				"name": "hero_rage2.png"
			},
			{
				"type": "setValue",
				"name": "status:def",
				"operator": "+=",
				"value": "5000"
			},
			{
				"type": "setValue",
				"name": "flag:skill5_dm",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:skill5_is_on",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:skill5_dm_cost",
				"value": "20"
			}
		],
		"AD不鸽了": [
			{
				"type": "animate",
				"name": "dispel",
				"loc": "hero",
				"async": true
			},
			{
				"type": "setValue",
				"name": "flag:moveShadow",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "flag:skill5_ad",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "flag:skill5_is_on",
				"value": "false"
			},
			{
				"type": "setValue",
				"name": "flag:skill5_cd",
				"value": "10"
			},
			{
				"type": "setValue",
				"name": "flag:potion_extra_ratio",
				"value": "14"
			},
			{
				"type": "setValue",
				"name": "status:atk",
				"operator": "-=",
				"value": "10000"
			},
			{
				"type": "setValue",
				"name": "status:def",
				"operator": "-=",
				"value": "10000"
			},
			{
				"type": "setHeroIcon",
				"name": "hero.png"
			},
			{
				"type": "setValue",
				"name": "flag:cannotMoveDirectly",
				"value": "false"
			},
			{
				"type": "setValue",
				"name": "flag:no_zone",
				"value": "false"
			},
			{
				"type": "setValue",
				"name": "flag:no_betweenAttack",
				"value": "false"
			},
			{
				"type": "setValue",
				"name": "flag:no_snipe",
				"value": "false"
			},
			{
				"type": "setValue",
				"name": "flag:no_repulse",
				"value": "false"
			},
			{
				"type": "setValue",
				"name": "flag:itemDetailCache",
				"value": "{}"
			}
		],
		"AM不鸽了": [
			{
				"type": "animate",
				"name": "dispel",
				"loc": "hero",
				"async": true
			},
			{
				"type": "setValue",
				"name": "flag:moveShadow",
				"value": "0"
			},
			{
				"type": "setHeroIcon",
				"name": "hero.png"
			},
			{
				"type": "setValue",
				"name": "status:atk",
				"operator": "-=",
				"value": "5000"
			},
			{
				"type": "setValue",
				"name": "status:mdef",
				"operator": "-=",
				"value": "25000"
			},
			{
				"type": "setValue",
				"name": "flag:skill5_am",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "flag:skill5_is_on",
				"value": "false"
			},
			{
				"type": "setValue",
				"name": "flag:cannotMoveDirectly",
				"value": "false"
			},
			{
				"type": "if",
				"condition": "(!flag:Cave_disableFly)",
				"true": [
					{
						"type": "setValue",
						"name": "flag:disableFly",
						"value": "false"
					}
				]
			}
		],
		"DM不鸽了": [
			{
				"type": "animate",
				"name": "dispel",
				"loc": "hero",
				"async": true
			},
			{
				"type": "setValue",
				"name": "flag:moveShadow",
				"value": "0"
			},
			{
				"type": "setHeroIcon",
				"name": "hero.png"
			},
			{
				"type": "setValue",
				"name": "status:def",
				"operator": "-=",
				"value": "5000"
			},
			{
				"type": "setValue",
				"name": "flag:skill5_dm",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "flag:skill5_is_on",
				"value": "false"
			},
			{
				"type": "setValue",
				"name": "flag:skill5_cd",
				"value": "10"
			}
		],
		"第三章资料库": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[神像,expShop]选择你要查看的信息：",
						"choices": [
							{
								"text": "械灵简介",
								"action": [
									"械灵诞生于智械研究进展缓慢之时。一位名叫\r[yellow]秉凌\r的人将生物的大脑进行机械化改造，产生的造物即为械灵。\n迄今为止已知的型号共有21种，分别以字母A到字母U作为编号。",
									"早期的型号制作多以来自魔法世界的低级地狱生物为原料，随着械改大脑技术的不断成熟，这项技术逐渐开始应用到拥有更高智力的生物。",
									"虽然此项技术如今已经基本成熟，却被人类高层禁止应用到人类公民身上。\n没有公民身份的流浪者不在此条规定的保护范围之内，据传最新型号的U型械灵——只生产了1台，就是从人类改造而来的。",
									"总体来讲，型号越往后的械灵战斗力越为强大，但一些低等型号的械灵虽然本身战斗力不强，却能够产生大范围的强化光环效果，比如代表攻击atk的A型和代表防御def的D型。\n这使得它们能够发挥出不下于高级型号械灵的作用。"
								]
							},
							{
								"text": "关于黄宝石",
								"action": [
									"有研究显示，械灵频繁活动的地域常有黄色晶体出现。对于其成分和来历，已经有多种假说。",
									"一些械灵的反对者声称，械灵的本质是机械对意识和灵魂的侵蚀。强行对大脑进行机械化改造的结果就是原本的灵魂不复存在，“记忆”虽在，但思考方式已经完全不同了，说是变成了拥有相同记忆的另一个生物也没有错。\n支持此种说法的现象是，生物械灵化后性格都会产生剧变，并做出械灵化之前不可能做出的事情。",
									"械灵的支持者则不相信生物有灵魂。他们认为，生物械灵化后虽然往往性格产生剧变，但这并非是什么“灵魂”被改变了，而是因为他掌握了强大的能力，从而自然地发生性格变化。\n换句话讲，生物的行为习惯会因其掌握的能力强弱而改变，特别是弱者的本性往往因受到强者的压迫而无法展现。机械只是给了他们更强的能力，使得他们把被压抑的本性显现出来。",
									"以上便是目前最为流行的两大假说。而关于黄宝石的本质，两方也给出了截然不同的说法。",
									"械灵的反对派认为黄宝石是被驱离的意识和灵魂的结晶。它们脱离了肉体轮回，永远地被困在黄色晶体之内。因此有人成立专门的组织对黄宝石进行收集和处理。\n但是，由于黄宝石能与其他思想产生细微的共鸣，进而带来少量的安抚效果，一些人喜欢收藏黄宝石，或者把它做成装饰随身携带。",
									"械灵的支持派认为，黄宝石是生物械灵化过程中被排出的代谢产物。其中蕴含一些对机械生物不再有作用的生命精华，对于普通生物有少量益处。",
									"总之，反对派和支持派各执一词，谁也无法说服对方。"
								]
							},
							{
								"text": "关于特训营",
								"action": [
									"特训营由智械的创始人——古亦建立，旨在对具备潜力的智械进行集训，帮助他们快速成长为能够独当一面的强者。\n目前主要的战斗区域共有14层，另外还有若干隐藏的备用空间。",
									"特训营中安排了各种各样的战斗对手，其中不仅有机器人、低等械灵及其仿制品，甚至还有来自其他异世界的生物。\n一切，都是为了让智械能够学会如何在复杂的条件下完成自己的任务。",
									"特训营从建立至今已有4年，但只有一位智械通过了最高级别的考验，成功毕业。他就是XXXX（被抹掉的信息）"
								]
							},
							{
								"text": "不看了",
								"action": [
									{
										"type": "exit"
									}
								]
							}
						]
					}
				]
			}
		],
		"第三章末尾": [
			{
				"type": "comment",
				"text": "取消鸽化，重置能力和装备"
			},
			{
				"type": "function",
				"function": "function(){\nif (core.getFlag(\"skill5_is_on\", false)) {\n\tif (core.getFlag(\"skill5_ad\", 0) > 0) {\n\t\tcore.insertCommonEvent(\"AD不鸽了\");\n\t}\n\tif (core.getFlag(\"skill5_am\", 0) > 0) {\n\t\tcore.insertCommonEvent(\"AM不鸽了\");\n\t}\n\tif (core.getFlag(\"skill5_dm\", 0) > 0) {\n\t\tcore.insertCommonEvent(\"DM不鸽了\");\n\t}\n}\n\nif (core.getTalentLv(10) > 0) {\n\tcore.setFlag(\"Chap3_talent_type\", 10);\n\tcore.status.hero.atk -= 7000;\n\tcore.status.hero.def -= 7000;\n\tcore.status.hero.mdef -= 10000;\n} else if (core.getTalentLv(11) > 0) {\n\tcore.setFlag(\"Chap3_talent_type\", 11);\n\tcore.status.hero.atk -= 7000;\n\tcore.status.hero.def -= 2000;\n\tcore.status.hero.mdef -= 19000;\n} else if (core.getTalentLv(12) > 0) {\n\tcore.setFlag(\"Chap3_talent_type\", 12);\n\tcore.status.hero.atk -= 2000;\n\tcore.status.hero.def -= 7000;\n\tcore.status.hero.mdef -= 19000;\n}\ncore.setItem(\"skill5\", 0);\ncore.setItem(\"talentTree\", 0);\n\ncore.unloadEquip(0);\ncore.unloadEquip(1);\ncore.setItem(\"sword5\", 0);\ncore.setItem(\"sword6\", 0);\ncore.setItem(\"sword7\", 0);\nif (flags.hard == 2) {\n\tcore.setFlag('__atk_buff__', 10);\n\tcore.setFlag('__def_buff__', 10);\n\tcore.setFlag('__mdef_buff__', 10);\n\tcore.setFlag('heart_atk_pp', 900);\n\tcore.setFlag('heart_def_pp', 900);\n\tcore.setFlag('heart_mdef_pp', 900);\n} else if (flags.hard == 1) {\n\tcore.setFlag('__atk_buff__', 10);\n\tcore.setFlag('__def_buff__', 10);\n\tcore.setFlag('__mdef_buff__', 10);\n\tcore.setFlag('heart_atk_pp', 900);\n\tcore.setFlag('heart_def_pp', 900);\n\tcore.setFlag('heart_mdef_pp', 900);\n} else {\n\tcore.setFlag('__atk_buff__', 0);\n\tcore.setFlag('__def_buff__', 0);\n\tcore.setFlag('__mdef_buff__', 0);\n}\ncore.setFlag('potion_extra_ratio', 10);\ncore.setFlag('mana_item', 100);\ncore.setFlag('mdef_ratio', 2);\ncore.setFlag('mana_regen', 3);\ncore.updateStatusBar();\n}"
			},
			{
				"type": "setValue",
				"name": "status:atk",
				"operator": "-=",
				"value": "150"
			},
			{
				"type": "setValue",
				"name": "status:def",
				"operator": "-=",
				"value": "1500"
			},
			{
				"type": "setValue",
				"name": "status:mdef",
				"operator": "-=",
				"value": "4250"
			}
		],
		"MusicRoom场景": [
			{
				"type": "if",
				"condition": "core.isReplaying()",
				"true": [
					{
						"type": "exit"
					}
				]
			},
			{
				"type": "setValue",
				"name": "flag:setBlock_disable_refresh",
				"value": "true"
			},
			{
				"type": "function",
				"function": "function(){\nvar floorId = core.status.floorId;\nfor (var i = 0; i < 13; ++i) {\n\tfor (var j = 0; j < 13; ++j) {\n\t\tcore.setBgFgBlock(\"bg\", core.getFlag(\"arg2\", null), i, j);\n\t\tif (i == 0 || i == 12 || j == 0 || j == 12) {\n\t\t\tcore.setBlock(core.getFlag(\"arg1\", null), i, j);\n\t\t}\n\t}\n}\nif (core.getFlag(\"arg3\", null)) {\n\tcore.setFlag(\"musicRoom_parallel\", core.getFlag(\"arg3\", null));\n\t// 清除旋转效果\n\tcore.maps.resizeMap(core.status.floorId);\n\tcore.setFlag('lastTime', 0);\n\tcore.setFlag('lastWeatherTime', 0);\n} else {\n\tcore.removeFlag(\"musicRoom_parallel\");\n\t// 清除旋转效果\n\tcore.maps.resizeMap(core.status.floorId);\n}\ncore.drawMap();\n}"
			},
			{
				"type": "setValue",
				"name": "flag:setBlock_disable_refresh",
				"value": "false"
			}
		],
		"第三章结束": [
			{
				"type": "insert",
				"name": "清理flag",
				"args": [
					3
				]
			},
			{
				"type": "pauseBgm"
			},
			{
				"type": "setVolume",
				"value": 90,
				"time": 0
			},
			{
				"type": "setValue",
				"name": "item:book",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "item:fly",
				"value": "1"
			},
			{
				"type": "if",
				"condition": "core.hasItem(\"I319\")",
				"true": [
					"\t[系统提示]失去\\i[I319]\r[aqua]匙之道\r，额外能力加成重置为固定值。"
				]
			},
			{
				"type": "setValue",
				"name": "item:I319",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:I392",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:I62_extra_mana_regen",
				"value": "10"
			},
			{
				"type": "setValue",
				"name": "flag:I62_extra_description",
				"value": "\"若战斗总伤害不大于0，额外回复10点能量\""
			},
			{
				"type": "function",
				"function": "function(){\ncore.setFlag('potion_extra_ratio', 10);\ncore.setFlag('mana_item', 100);\ncore.plugin.clearItemDetailCache(\"manaItem\");\ncore.plugin.clearItemDetailCache(\"bigManaitem\");\ncore.setFlag('mdef_ratio', 2);\ncore.setFlag('mana_regen', 5);\n}"
			},
			{
				"type": "setValue",
				"name": "item:I62",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "item:I437",
				"value": "1"
			},
			"\t[系统提示]即将进入新的区域。重置所有状态，包括能力、物品和技能等。",
			{
				"type": "if",
				"condition": "core.itemCount(\"greenKey\") > 57",
				"true": [
					"\t[系统提示]收回第三章开头多发的57把绿钥匙，剩余的留下来作为荣誉物品。",
					{
						"type": "setValue",
						"name": "item:I_greenKeyCh3",
						"value": "core.itemCount(\"greenKey\")-57"
					}
				]
			},
			{
				"type": "disableShop",
				"id": "Chap3End"
			},
			{
				"type": "disableShop",
				"id": "South8Shop"
			},
			{
				"type": "function",
				"function": "function(){\ncore.setFlag('__atk_buff__', 10);\ncore.setFlag('__def_buff__', 10);\ncore.setFlag('__mdef_buff__', 10);\ncore.setFlag('heart_atk_pp', 900);\ncore.setFlag('heart_def_pp', 900);\ncore.setFlag('heart_mdef_pp', 900);\n\ncore.updateStatusBar();\n}"
			},
			{
				"type": "setValue",
				"name": "status:hp",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "status:mana",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "status:atk",
				"value": "50000"
			},
			{
				"type": "setValue",
				"name": "status:def",
				"value": "40000"
			},
			{
				"type": "setValue",
				"name": "status:mdef",
				"value": "50000"
			},
			{
				"type": "setValue",
				"name": "status:money",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:yellowKey",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:blueKey",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:redKey",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:greenKey",
				"value": "0"
			},
			{
				"type": "if",
				"condition": "flags.hard==2",
				"true": [
					{
						"type": "setValue",
						"name": "item:greenKey",
						"value": "99"
					}
				]
			},
			{
				"type": "setValue",
				"name": "item:talentTree",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:skill3",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:skill4",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:yellowGem",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "flag:disableFly",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "flag:lightRadius",
				"value": "150"
			},
			{
				"type": "setValue",
				"name": "flag:yellowGem_extra_description",
				"value": "\"从第四章起，不再能提供生命回复。\""
			},
			{
				"type": "setValue",
				"name": "flag:fire_light_a",
				"value": "0.15"
			},
			{
				"type": "setValue",
				"name": "flag:zone_animate",
				"value": "\"zone2\""
			},
			{
				"type": "setCurtain",
				"color": [
					0,
					0,
					0,
					1
				],
				"time": 500,
				"keep": true
			},
			"一切似乎都在朝着最糟糕的方向发展。",
			"我能做什么？我会见到什么？",
			"……",
			{
				"type": "sleep",
				"time": 500
			},
			{
				"type": "autoText",
				"text": "第四章 前篇\n格沃之旅",
				"time": 2000
			},
			{
				"type": "setValue",
				"name": "flag:current_chapter",
				"value": "4"
			},
			{
				"type": "unfollow"
			},
			{
				"type": "follow",
				"name": "hero3.png"
			},
			{
				"type": "changeFloor",
				"floorId": "Ch4_1",
				"loc": [
					6,
					12
				],
				"direction": "up",
				"time": 1000
			}
		],
		"清理flag": [
			{
				"type": "switch",
				"condition": "flag:arg1",
				"caseList": [
					{
						"case": "2",
						"action": [
							{
								"type": "function",
								"function": "function(){\n// 移除前二章相关 flag\nvar keys = Object.keys(core.status.hero.flags);\nfor (var i in keys) {\n\tif (keys[i].indexOf(\"70F\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\tif (keys[i].indexOf(\"Shop_finish\") > 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\tif (keys[i].indexOf(\"B20F_\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\tif (keys[i].indexOf(\"arrived_\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\tif (keys[i].indexOf(\"bought_\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\tif (keys[i].indexOf(\"door_\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\tif (keys[i].indexOf(\"shop\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\tif (keys[i].indexOf(\"skill0\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\tif (keys[i].indexOf(\"skill1\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\tif (keys[i].indexOf(\"skill2\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\t// 独立变量\n\tif (keys[i].indexOf(\"@\") > 0) {\n\t\tvar cnt = 0;\n\t\tfor (var zzz = 0; zzz < keys[i].length; ++zzz) {\n\t\t\tif (keys[i][zzz] == \"@\") {\n\t\t\t\tcnt += 1;\n\t\t\t}\n\t\t}\n\t\tif (cnt >= 3) {\n\t\t\tcore.removeFlag(keys[i]);\n\t\t}\n\t}\n}\nvar toBeRemoved = [\"1Fmission\", \"11Fmission\", \"12FShopClose\", \"15Fboss\", \"20F_boss_finish\", \"34F_boss_phase\", \"B4Fmission_finish\", \"B10Fdoor\", \"B10Frage\", \"blueKey_price\", \"blueKey_storage\", \"boss_dir\", \"canGotoMusicRoom\", \"can_buy_sword0\", \"current_area\", \"freeze_stack\", \"keysAreBad\", \"redKey_price\", \"redKey_storage\", \"saltfish_67\", \"yellowKey_price\", \"yellowKey_storage\"];\nfor (var i in toBeRemoved) {\n\tcore.removeFlag(toBeRemoved[i]);\n}\n}"
							}
						]
					},
					{
						"case": "3",
						"action": [
							{
								"type": "function",
								"function": "function(){\n// 移除第三章相关 flag\nvar keys = Object.keys(core.status.hero.flags);\nfor (var i in keys) {\n\tif (keys[i].indexOf(\"Chap3_boss\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\t// 机关门相关 flag\n\tif (keys[i].indexOf(\"door_\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\t// 副本相关 flag\n\tif (keys[i].indexOf(\"saved_\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\t// 技能相关 flag\n\tif (keys[i].indexOf(\"skill3_\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\tif (keys[i].indexOf(\"skill4_\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\tif (keys[i].indexOf(\"skill5_\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\t// 天赋相关 flag\n\tif (keys[i].indexOf(\"talent\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\t// 独立变量\n\tif (keys[i].indexOf(\"@\") > 0) {\n\t\tvar cnt = 0;\n\t\tfor (var zzz = 0; zzz < keys[i].length; ++zzz) {\n\t\t\tif (keys[i][zzz] == \"@\") {\n\t\t\t\tcnt += 1;\n\t\t\t}\n\t\t}\n\t\tif (cnt >= 3) {\n\t\t\tcore.removeFlag(keys[i]);\n\t\t}\n\t}\n}\nvar toBeRemoved = [\"East8_sold_yellowGem\", \"arrived_Cave6_2\", \"arrived_East14\", \"dungeon1_finish\", \"dungeon2_finish\", \"make_E627_cd\", \"watch_East16\"];\nfor (var i in toBeRemoved) {\n\tcore.removeFlag(toBeRemoved[i]);\n}\n}"
							}
						]
					},
					{
						"case": "4",
						"action": [
							{
								"type": "function",
								"function": "function(){\n// 移除第四章前相关 flag\nvar keys = Object.keys(core.status.hero.flags);\nfor (var i in keys) {\n\t// 技能相关 flag\n\tif (keys[i].indexOf(\"skill6_\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\tif (keys[i].indexOf(\"skill7_\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\tif (keys[i].indexOf(\"skill8_\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\t// 天赋相关 flag\n\tif (keys[i].indexOf(\"talent2\") == 0 || keys[i].indexOf(\"talent\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\t// zzzl 相关 flag\n\tif (keys[i].indexOf(\"zzzl_\") == 0) {\n\t\tcore.removeFlag(keys[i]);\n\t}\n\t// 独立变量\n\tif (keys[i].indexOf(\"@\") > 0) {\n\t\tvar cnt = 0;\n\t\tfor (var zzz = 0; zzz < keys[i].length; ++zzz) {\n\t\t\tif (keys[i][zzz] == \"@\") {\n\t\t\t\tcnt += 1;\n\t\t\t}\n\t\t}\n\t\tif (cnt >= 3) {\n\t\t\tcore.removeFlag(keys[i]);\n\t\t}\n\t}\n}\n}"
							}
						]
					}
				]
			}
		],
		"进入隐身": [
			{
				"type": "setValue",
				"name": "flag:invisible",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:no_zone",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:no_laser",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:no_snipe",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:no_repulse",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:no_ambush",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:no_betweenAttack",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:invisible_moved",
				"value": "0"
			},
			{
				"type": "function",
				"function": "function(){\ncore.setOpacity('hero', 0.5);\n}"
			},
			{
				"type": "animate",
				"name": "skill7",
				"loc": "hero",
				"async": true
			}
		],
		"退出隐身": [
			{
				"type": "switch",
				"condition": "flag:arg1",
				"caseList": [
					{
						"case": "0",
						"action": [
							{
								"type": "comment",
								"text": "直接退出"
							},
							{
								"type": "setValue",
								"name": "flag:invisible",
								"value": "0"
							},
							{
								"type": "setValue",
								"name": "flag:no_zone",
								"value": "0"
							},
							{
								"type": "setValue",
								"name": "flag:no_laser",
								"value": "0"
							},
							{
								"type": "setValue",
								"name": "flag:no_snipe",
								"value": "0"
							},
							{
								"type": "setValue",
								"name": "flag:no_repulse",
								"value": "0"
							},
							{
								"type": "setValue",
								"name": "flag:no_betweenAttack",
								"value": "0"
							},
							{
								"type": "setValue",
								"name": "flag:no_ambush",
								"value": "0"
							},
							{
								"type": "function",
								"function": "function(){\ncore.setOpacity('hero', 0.99);\n}"
							},
							{
								"type": "animate",
								"name": "yongchang",
								"loc": "hero",
								"async": true
							}
						]
					},
					{
						"case": "1",
						"action": [
							{
								"type": "comment",
								"text": "主动取消，进行询问"
							},
							{
								"type": "choices",
								"text": "\t[系统提示]你进入隐身后已经移动过位置，取消隐身将返还${flag:skill7_cancel_return_cost||0}点能量。",
								"choices": [
									{
										"text": "保持隐身",
										"action": []
									},
									{
										"text": "取消隐身",
										"action": [
											{
												"type": "comment",
												"text": "我发现这里调用自己没有效果，只好把上面的逻辑copy下来"
											},
											{
												"type": "setValue",
												"name": "flag:invisible",
												"value": "0"
											},
											{
												"type": "setValue",
												"name": "flag:no_zone",
												"value": "0"
											},
											{
												"type": "setValue",
												"name": "flag:no_laser",
												"value": "0"
											},
											{
												"type": "setValue",
												"name": "flag:no_snipe",
												"value": "0"
											},
											{
												"type": "setValue",
												"name": "flag:no_repulse",
												"value": "0"
											},
											{
												"type": "setValue",
												"name": "flag:no_betweenAttack",
												"value": "0"
											},
											{
												"type": "setValue",
												"name": "flag:no_ambush",
												"value": "0"
											},
											{
												"type": "function",
												"function": "function(){\ncore.setOpacity('hero', 0.99);\ncore.status.hero.mana += core.getFlag(\"skill7_cancel_return_cost\", 0);\n}"
											},
											{
												"type": "animate",
												"name": "yongchang",
												"loc": "hero",
												"async": true
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
		"至尊之录": [
			{
				"type": "choices",
				"text": "\t[至尊之录,I_zzzl]选择要查看的部分",
				"choices": [
					{
						"text": "Part Ⅰ 社会起始",
						"condition": "flag:zzzl_1_1 == 1",
						"action": [
							"起初 神统治王国\n国土划为三阶 分为城、镇、村\n公民亦有三阶 分住于城、镇、村\n对每一阶公民 又划为三等\n高等的公民 享有大量的财富和完全的自由 不为琐事所困缚\n中等的公民 每天须工作八个小时 除此之外的时间可自由掌控\n低等的公民 每天须工作十二个小时 再除去吃饭睡觉等必需的活动 时间已所剩无几",
							{
								"type": "if",
								"condition": "flag:zzzl_1_2 == 1",
								"true": [
									"神看低等公民工作劳累 于心不忍\n神说 要提升低等公民的阶级 让他们拥有更多的自由\n神创造了机器人 要它们代替低等公民 完成他们的工作\n机器人逐渐多起来 原本的低等公民大多变为中等公民\n只余下那些曾经冒犯过神或其他神之子民的人 连同他们的子孙后代 都是低等公民 不得翻身"
								]
							}
						]
					},
					{
						"text": "Part Ⅱ 智械起源",
						"condition": "flag:zzzl_2_1 == 1",
						"action": [
							"在摩宇城的中心 有一高等公民 名为秉凌 是神最信任的部下\n秉凌说 自己有办法把中等公民也彻底解放\n中等公民的工作更为复杂 须有人的灵智才能完成\n让机器具有人的灵智 问题便迎刃而解\n神便允许秉凌去做 还分派一些他最信任的部下作为帮手 要他六年之内做出成果",
							{
								"type": "if",
								"condition": "flag:zzzl_2_2 == 1",
								"true": [
									"秉凌的工作并不顺利 六年之期已到 却并无成果\n在项目开始后的第二二二一天 神找到秉凌询问进展\n秉凌面对神的质问 稍作犹豫 还是说出了实情\n项目超乎想象地复杂 即使再给二二二一天 也不一定能完成\n神说 你做的事情有意义 再给多少个二二二一天都可以\n但你未能达到我的预期 必须受到处罚\n神收回了自己的部下 把秉凌逐出了摩宇城"
								]
							},
							{
								"type": "if",
								"condition": "flag:zzzl_2_3 == 1",
								"true": [
									"秉凌被流放后 神的部下中 有一部分自愿追随 帮他完成未竟的事业\n秉凌用自己的家当 在国土最偏僻的无为村之外 建立了格沃堡\n追随者们也利用各自的财力 购置设备 承担日常开销 支撑着他们共同的研究事业\n与此同时 在神的国土上 用机械取代肉体的技术蓬勃发展\n械造的四肢 器官 赋予常人超凡的身体素质\n机械改造风靡一时 人们纷纷抛弃脆弱的肉体凡胎\n唯有大脑 承载着思想和灵魂 无法抛弃 无可替代",
									{
										"type": "if",
										"condition": "flag:zzzl_2_2 != 1",
										"true": [
											"\t[hero]……中间似乎缺了一部分内容。"
										]
									}
								]
							}
						]
					},
					{
						"text": "Part Ⅲ 至尊崛起",
						"condition": "flag:zzzl_3_1 == 1",
						"action": [
							"荒烟村是神之国土上最偏僻的地方 村里只有低等公民\n被神流放的犯人 和他们的后裔 世世代代都负责处理其他地方运来的垃圾\n神的子民从远方监视着他们 倘若有人偷懒 便会受到严厉的处罚\n每天都上演着同样的场景 罪人们永远都不得离开这里",
							{
								"type": "if",
								"condition": "flag:zzzl_3_2 == 1",
								"true": [
									"在荒烟村的罪人之中 有一男孩 自记事起便没有亲人 以拾荒为生\n男孩十二岁那年 遇到了一位被抛弃的女孩\n女孩身世不明 也无记忆 便与男孩在荒烟村住下 两人情同手足 以兄妹相称\n在无尽的拾荒生活中 培养女孩成为独立自主的人 成为男孩唯一的人生目标\n男孩说 女孩不属于这里 等她成年 能独自面对任何困难之后 要把她送回城市\n女孩天资聪慧 气质温婉 定能在大城市中打拼出自己的一片天地"
								]
							},
							{
								"type": "if",
								"condition": "flag:zzzl_3_3 == 1",
								"true": [
									"女孩成年之前的一年 村里有人犯下大罪 神的怒火席卷了整个村子\n荒烟村的村民们 有的化身野兽 无理智地残杀活物\n有的浑身肿胀 体内发散的毒气能使人窒息\n昆虫发生变异 袭杀手无寸铁的人类\n女孩七窍流血 奄奄一息 男孩抱着她四处逃窜 走投无路\n就在此时 秉凌出现了 救下两人 带他们回到了格沃堡\n神的怒火持续了七天七夜 荒烟村的所有生命体 不论是变异的还是未变异的 都死了\n二二二一天之后 又有新的罪犯被流放至此 开始下一个轮回"
								]
							},
							{
								"type": "if",
								"condition": "flag:zzzl_3_4 == 1",
								"true": [
									"被秉凌救下的男孩 愿意答应秉凌的一切要求 唯一的条件是救下女孩\n女孩已失去意识 病入膏肓\n秉凌先抢救她的大脑 然而记忆都丢失了\n秉凌又抢救她的身躯 然而血肉都腐坏了\n秉凌将她的大脑冷冻起来 对男孩说 想救她只有一个办法\n运用自己研发的械灵技术 将她改造成机器人\n她的部分大脑将被机械代替 但保留原本的性格特征 并获得全新的械造身躯\n这项技术从未被用于人类身上 更不用说是只剩下一个大脑的人类\n男孩自愿成为实验体 秉凌便能从他身上收集实验数据 完善技术\n等到技术成熟之时 便可将女孩的大脑解冻 她将重获新生 再次行走于这大地之上"
								]
							}
						]
					},
					{
						"text": "不看",
						"action": []
					}
				]
			}
		],
		"zzzl3": [
			{
				"type": "if",
				"condition": "flag:zzzl_3_1!=1",
				"true": [
					{
						"type": "setValue",
						"name": "flag:zzzl_3_1",
						"value": "1"
					},
					"\t[晴芸,hero3]咦，它留下了什么信息！",
					"Ⅲ. 至尊崛起\n荒烟村是神之国土上最偏僻的地方 村里只有低等公民\n被神流放的犯人 和他们的后裔 世世代代都负责处理其他地方运来的垃圾\n神的子民从远方监视着他们 倘若有人偷懒 便会受到严厉的处罚\n每天都上演着同样的场景 罪人们永远都不得离开这里",
					"\t[hero]这大家伙留下来的信息是至尊之录的第三部分……从我们所在的区域是格沃堡上层来推断，这应该也是至尊之录的最后一部分了。",
					"\t[晴芸,hero3]荒烟村……从来没听说过这个地方。\n在网上也查不到。",
					"\t[hero]荒烟，荒无人烟，这名字一听就是个……怎么形容呢，鸟不拉屎的鬼地方。\n所谓的至尊，不会真的就是从这里出来的吧？",
					"\t[晴芸,hero3]……答案已经很显然了。"
				],
				"false": [
					{
						"type": "if",
						"condition": "flag:zzzl_3_2!=1",
						"true": [
							"\t[hero]来看看这次“至尊之录”的内容……",
							{
								"type": "setValue",
								"name": "flag:zzzl_3_2",
								"value": "1"
							},
							"在荒烟村的罪人之中 有一男孩 自记事起便没有亲人 以拾荒为生\n男孩十二岁那年 遇到了一位被抛弃的女孩\n女孩身世不明 也无记忆 便与男孩在荒烟村住下 两人情同手足 以兄妹相称\n在无尽的拾荒生活中 培养女孩成为独立自主的人 成为男孩唯一的人生目标\n男孩说 女孩不属于这里 等她成年 能独自面对任何困难之后 要把她送回城市\n女孩天资聪慧 气质温婉 定能在大城市中打拼出自己的一片天地",
							"\t[hero]捡到一个机灵可爱的妹妹，然后又要亲自把她送走，这剧情怎么这么狗血……",
							"\t[晴芸,hero3]所以这肯定不是故事的真正走向……我现在看到故事里讲到“要怎么怎么”，第一反应就是在画饼，给你一个美好的幻想，再亲自将它打碎。",
							{
								"type": "animate",
								"name": "E_sweat",
								"loc": "hero"
							}
						],
						"false": [
							{
								"type": "if",
								"condition": "flag:zzzl_3_3!=1",
								"true": [
									{
										"type": "setValue",
										"name": "flag:zzzl_3_3",
										"value": "1"
									},
									"女孩成年之前的一年 村里有人犯下大罪 神的怒火席卷了整个村子\n荒烟村的村民们 有的化身野兽 无理智地残杀活物\n有的浑身肿胀 体内发散的毒气能使人窒息\n昆虫发生变异 袭杀手无寸铁的人类\n女孩七窍流血 奄奄一息 男孩抱着她四处逃窜 走投无路\n就在此时 秉凌出现了 救下两人 带他们回到了格沃堡\n神的怒火持续了七天七夜 荒烟村的所有生命体 不论是变异的还是未变异的 都死了\n二二二一天之后 又有新的罪犯被流放至此 开始下一个轮回",
									{
										"type": "animate",
										"name": "E_dots",
										"loc": "hero"
									},
									"\t[hero]神的怒火，原来是这个样子的吗？\n我以前一直以为应该是发大水把所有生物都淹死之类的，没想到这看上去更像是……生化危机？",
									"\t[晴芸,hero3]生化危机……错不了，这根本就是在\n\r[yellow]用荒烟村的生物做基因变异实验！\r",
									{
										"type": "animate",
										"name": "E_surprise",
										"loc": "hero"
									},
									"\t[晴芸,hero3]什么犯下大罪，什么怒火，不过是借口而已。\n整天搬垃圾的下等公民，要做出什么事情才能激怒高高在上的“神”？而且，哪有一人犯罪连累全村的？",
									"\t[hero]……有道理。我所看到的，也只有“神”的荒淫无道，而被“神”流放的秉凌反倒像是拯救苍生的圣人。"
								],
								"false": []
							}
						]
					}
				]
			}
		],
		"skill8buff": [
			{
				"type": "animate",
				"name": "rage_buff",
				"loc": "hero",
				"async": true
			},
			{
				"type": "setValue",
				"name": "flag:moveShadow",
				"value": "1"
			},
			{
				"type": "setHeroIcon",
				"name": "hero_rage.png"
			},
			{
				"type": "setValue",
				"name": "flag:skill8_buff",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:skill8_direction",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "flag:cannotMoveDirectly",
				"value": "true"
			},
			{
				"type": "setValue",
				"name": "flag:disableFly",
				"value": "true"
			}
		],
		"skill8end": [
			{
				"type": "animate",
				"name": "dispel",
				"loc": "hero",
				"async": true
			},
			{
				"type": "setValue",
				"name": "flag:moveShadow",
				"value": "0"
			},
			{
				"type": "setHeroIcon",
				"name": "hero.png"
			},
			{
				"type": "setValue",
				"name": "flag:skill8_buff",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "flag:cannotMoveDirectly",
				"value": "false"
			},
			{
				"type": "setValue",
				"name": "flag:disableFly",
				"value": "false"
			}
		],
		"Ch4Boss": [
			{
				"type": "setValue",
				"name": "flag:Ch4_boss_phase",
				"operator": "+=",
				"value": "1"
			},
			{
				"type": "insert",
				"name": "Ch4BossDraw"
			},
			{
				"type": "setValue",
				"name": "flag:Ch4_boss_phase",
				"operator": "-=",
				"value": "1"
			},
			{
				"type": "switch",
				"condition": "flag:Ch4_boss_phase",
				"caseList": [
					{
						"case": "1",
						"action": [
							{
								"type": "setValue",
								"name": "flag:Ch4_boss_phase",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "animate",
								"name": "dark",
								"loc": [
									"flag:arg1",
									"flag:arg2"
								]
							},
							{
								"type": "setBlock",
								"number": "E9961_2",
								"loc": [
									"flag:arg1",
									"flag:arg2"
								]
							},
							"\t[9961,E9961_2]\b[down,null]这才刚开始热身，械灵形态！"
						]
					},
					{
						"case": "2",
						"action": [
							{
								"type": "setValue",
								"name": "flag:Ch4_boss_phase",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "animate",
								"name": "dark",
								"loc": [
									"flag:arg1",
									"flag:arg2"
								]
							},
							{
								"type": "setBlock",
								"number": "E9961_3",
								"loc": [
									"flag:arg1",
									"flag:arg2"
								]
							},
							"\t[9961,E9961_3]\b[down,null]再来！机械形态！"
						]
					},
					{
						"case": "3",
						"action": [
							{
								"type": "setValue",
								"name": "flag:Ch4_boss_phase",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "animate",
								"name": "dark",
								"loc": [
									"flag:arg1",
									"flag:arg2"
								]
							},
							{
								"type": "setBlock",
								"number": "E9961_4",
								"loc": [
									"flag:arg1",
									"flag:arg2"
								]
							},
							"\t[9961,E9961_4]\b[down,null]不错嘛，我要开始动真格的了。爆破模式！"
						]
					},
					{
						"case": "4",
						"action": [
							{
								"type": "function",
								"function": "function(){\ncore.removeFlag(\"Ch4_quickshop\");\n}"
							},
							{
								"type": "setValue",
								"name": "item:I_Chap4Shop4",
								"value": "0"
							},
							{
								"type": "disableShop",
								"id": "Chap4Shop4"
							},
							{
								"type": "setValue",
								"name": "flag:Ch4_boss_phase",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "animate",
								"name": "explosion",
								"loc": [
									"flag:arg1",
									"flag:arg2"
								]
							},
							{
								"type": "animate",
								"name": "dark",
								"loc": [
									"flag:arg1",
									"flag:arg2"
								]
							},
							{
								"type": "setBlock",
								"number": "E9961_5",
								"loc": [
									"flag:arg1",
									"flag:arg2"
								]
							},
							{
								"type": "sleep",
								"time": 500
							},
							{
								"type": "playSound",
								"name": "jump.mp3"
							},
							{
								"type": "jump",
								"from": [
									"flag:arg1",
									"flag:arg2"
								],
								"to": [
									6,
									4
								],
								"time": 500,
								"keep": true
							},
							{
								"type": "animate",
								"name": "skill6",
								"loc": "hero",
								"async": true
							},
							{
								"type": "changePos",
								"direction": "up"
							},
							{
								"type": "jumpHero",
								"loc": [
									6,
									8
								],
								"time": 500
							},
							"\t[9961,E9961_5]\b[down,6,4]真抗揍呢……\n喂，接下来可不会允许你再使用\r[yellow]快捷商店\r了，\n在我用出拿手绝技之前，我给你一个投降的机会。",
							{
								"type": "while",
								"condition": "true",
								"data": [
									{
										"type": "choices",
										"text": "\t[9961,E9961_5]支付9把绿钥匙，立即投降。\n机会只有一次，不能反悔哦~",
										"choices": [
											{
												"text": "用大绿钥匙投降！",
												"color": [
													232,
													95,
													95,
													1
												],
												"condition": "flags.hard==1",
												"action": [
													{
														"type": "playSound",
														"name": "buy.mp3"
													},
													{
														"type": "setValue",
														"name": "item:I_superGreenKey",
														"operator": "-=",
														"value": "1"
													},
													"\t[hero]\b[down,hero]没人能在我投降之前战胜我！\n9把绿钥匙我没有，\\i[I_superGreenKey]大绿钥匙给你行不行？",
													{
														"type": "animate",
														"name": "E_sweat",
														"loc": [
															6,
															4
														]
													},
													"\t[9961,E9961_5]\b[down,6,4]行吧……",
													"获得成就【法国智械】！\n在与9961的游戏中选择投降。",
													{
														"type": "comment",
														"text": "end"
													},
													{
														"type": "setCurtain",
														"color": [
															255,
															255,
															255,
															1
														],
														"time": 800,
														"keep": true
													},
													{
														"type": "insert",
														"loc": [
															0,
															0
														],
														"floorId": "Ch4_3D"
													},
													{
														"type": "exit"
													}
												]
											},
											{
												"text": "我现在就投降！",
												"color": [
													232,
													95,
													95,
													1
												],
												"condition": "flags.hard==2",
												"action": [
													{
														"type": "playSound",
														"name": "buy.mp3"
													},
													{
														"type": "setValue",
														"name": "item:greenKey",
														"operator": "-=",
														"value": "9"
													},
													"\t[hero]\b[down,hero]没人能在我投降之前战胜我！",
													{
														"type": "animate",
														"name": "E_sweat",
														"loc": [
															6,
															4
														]
													},
													"获得成就【法国智械】！\n在与9961的游戏中选择投降。",
													{
														"type": "comment",
														"text": "end"
													},
													{
														"type": "setCurtain",
														"color": [
															255,
															255,
															255,
															1
														],
														"time": 800,
														"keep": true
													},
													{
														"type": "insert",
														"loc": [
															0,
															0
														],
														"floorId": "Ch4_3D"
													},
													{
														"type": "exit"
													}
												]
											},
											{
												"text": "你开什么玩笑？",
												"color": [
													0,
													255,
													41,
													1
												],
												"action": [
													"\t[9961,E9961_5]\b[down,6,4]哼，别怪我没警告过你。\n那么，最后一轮，抓到我，就算你赢，嘻嘻~",
													{
														"type": "exit"
													}
												]
											},
											{
												"text": "问晴芸该怎么办",
												"color": [
													255,
													251,
													0,
													1
												],
												"condition": "!flag:qingyun",
												"action": [
													"\t[晴芸,hero3]哈？你问我？",
													{
														"type": "function",
														"function": "function(){\nvar result = 2;\nfor (var x = 3; x < 10; ++x) {\n\tfor (var y = 3; y < 10; ++y) {\n\t\tif (core.getBlockId(x, y) == \"yellowDoor\") {\n\t\t\tresult = 1;\n\t\t\tbreak;\n\t\t}\n\t}\n\tif (result == 1) break;\n}\ncore.setFlag(\"qingyun\", result);\n}"
													},
													{
														"type": "if",
														"condition": "flag:qingyun == 1",
														"true": [
															"\t[晴芸,hero3]其实你心里早有答案了吧？\n当然是莽过去啦！冲吖~"
														],
														"false": [
															"\t[晴芸,hero3]……刚刚被它以极其神秘的手段清空了能量值，和快捷商店的联系也被切断了，我现在用不出技能，有一种很不妙的预感。\n所以……我觉得还是投降吧。",
															"\t[hero]啊？这么没信心的吗？\n我再考虑考虑……"
														]
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						"case": "5",
						"action": [
							{
								"type": "comment",
								"text": "end"
							},
							{
								"type": "vibrate",
								"direction": "horizontal",
								"time": 2000,
								"speed": 10,
								"power": 10,
								"async": true
							},
							{
								"type": "animate",
								"name": "supernova",
								"loc": [
									"flag:arg1",
									"flag:arg2"
								],
								"async": true
							},
							{
								"type": "setCurtain",
								"color": [
									255,
									255,
									255,
									1
								],
								"time": 2000,
								"keep": true
							},
							{
								"type": "function",
								"function": "function(){\nfor (var i = 3; i < 10; ++i) {\n\tfor (var j = 3; j < 10; ++j) {\n\t\tcore.removeBlock(i, j);\n\t}\n}\n}"
							},
							{
								"type": "insert",
								"loc": [
									0,
									0
								],
								"floorId": "Ch4_3D"
							},
							{
								"type": "waitAsync"
							}
						]
					},
					{
						"case": "default",
						"action": []
					}
				]
			}
		],
		"毁天灭地": [
			{
				"type": "setValue",
				"name": "status:mana",
				"operator": "-=",
				"value": "flag:skill13_cost"
			},
			{
				"type": "if",
				"condition": "(!core.isReplaying())",
				"true": [
					{
						"type": "setValue",
						"name": "flag:enable_enemy_fly",
						"value": "1"
					},
					{
						"type": "setValue",
						"name": "flag:moveShadow",
						"value": "1"
					},
					{
						"type": "setValue",
						"name": "flag:temp",
						"value": "flag:moveShadow_period"
					},
					{
						"type": "setValue",
						"name": "flag:moveShadow_period",
						"value": "1"
					},
					{
						"type": "playSound",
						"name": "Quake.ogg",
						"pitch": 110
					},
					{
						"type": "showImage",
						"code": 81,
						"image": "danger.png",
						"loc": [
							"flag:temp_skill13_x*32-4",
							"flag:temp_skill13_y*32-4"
						],
						"opacity": 1,
						"time": 500,
						"async": true
					},
					{
						"type": "fillEllipse",
						"x": "flag:temp_skill13_x*32+16",
						"y": "flag:temp_skill13_y*32+16",
						"a": 80,
						"b": 80,
						"angle": 0,
						"style": [
							99,
							147,
							255,
							0.5
						]
					},
					{
						"type": "fillEllipse",
						"x": "flag:temp_skill13_x*32+16",
						"y": "flag:temp_skill13_y*32+16",
						"a": 20,
						"b": 20,
						"angle": 0,
						"style": [
							99,
							147,
							255,
							0.5
						]
					},
					{
						"type": "vibrate",
						"direction": "horizontal",
						"time": 500,
						"speed": 10,
						"power": 10
					},
					{
						"type": "animate",
						"name": "skill13up",
						"loc": [
							"core.status.hero.loc.x",
							"core.status.hero.loc.y"
						],
						"async": true
					},
					{
						"type": "playSound",
						"name": "DF_q_1.mp3"
					},
					{
						"type": "jumpHero",
						"dxy": [
							0,
							-20
						],
						"time": 400
					},
					{
						"type": "sleep",
						"time": 200,
						"noSkip": true
					},
					{
						"type": "changePos",
						"loc": [
							"flag:temp_skill13_x",
							"flag:temp_skill13_y - 20"
						],
						"direction": "down"
					},
					{
						"type": "waitAsync"
					},
					{
						"type": "jumpHero",
						"dxy": [
							0,
							20
						],
						"time": 400
					},
					{
						"type": "setValue",
						"name": "flag:moveShadow",
						"value": "0"
					},
					{
						"type": "setValue",
						"name": "flag:moveShadow_period",
						"value": "flag:temp"
					},
					{
						"type": "hideImage",
						"code": 81,
						"time": 0
					},
					{
						"type": "clearMap",
						"x": "flag:temp_skill13_x*32-64",
						"y": "flag:temp_skill13_y*32-64",
						"width": 160,
						"height": 160
					},
					{
						"type": "animate",
						"name": "skill13down",
						"loc": [
							"core.status.hero.loc.x",
							"core.status.hero.loc.y"
						],
						"async": true
					},
					{
						"type": "vibrate",
						"direction": "horizontal",
						"time": 1000,
						"speed": 10,
						"power": 10,
						"async": true
					}
				],
				"false": [
					{
						"type": "changePos",
						"loc": [
							"flag:temp_skill13_x",
							"flag:temp_skill13_y"
						],
						"direction": "down"
					}
				]
			},
			{
				"type": "setValue",
				"name": "flag:previewSkill13",
				"value": "0"
			},
			{
				"type": "function",
				"function": "function(){\nvar dec_atk = core.getFlag(\"skill13_datk\", 0),\n\tdec_def = core.getFlag(\"skill13_ddef\", 0);\nvar loc_x = core.status.hero.loc.x,\n\tloc_y = core.status.hero.loc.y;\n\n// 伤害\nvar tmp_mdef = 900 * core.status.hero.mdef / 100;\nvar damage = core.getFlag(\"skill10_basedmg\") + core.getFlag(\"skill10_mdefdmgratio\", 0) * tmp_mdef;\nvar process = function (dx, dy) {\n\tif (Math.abs(dx) == 2 && Math.abs(dy) == 2) return;\n\tvar cur_x = loc_x + dx,\n\t\tcur_y = loc_y + dy;\n\tif (core.plugin.isEnemy(cur_x, cur_y)) {\n\t\tcore.setEnemyOnPoint(cur_x, cur_y, null, \"atk\", dec_atk, \"-=\", \"\", true);\n\t\tcore.setEnemyOnPoint(cur_x, cur_y, null, \"def\", dec_def, \"-=\", \"\", true);\n\t\tif (dx == 0 && dy == 0) {\n\t\t\tcore.events.setEnemyOnPointAdd(cur_x, cur_y, null, \"hp\", 2 * damage, \"-=\", \"\", true);\n\t\t} else {\n\t\t\tcore.events.setEnemyOnPointAdd(cur_x, cur_y, null, \"hp\", damage, \"-=\", \"\", true);\n\t\t}\n\t}\n};\nprocess(0, 0);\nprocess(0, -1);\nprocess(-1, 0);\nprocess(1, 0);\nprocess(0, 1);\nprocess(-1, -1);\nprocess(1, -1);\nprocess(-1, 1);\nprocess(1, 1);\nprocess(0, -2);\nprocess(-2, 0);\nprocess(2, 0);\nprocess(0, 2);\nprocess(-1, -2);\nprocess(1, -2);\nprocess(-2, -1);\nprocess(2, -1);\nprocess(-2, 1);\nprocess(2, 1);\nprocess(-1, 2);\nprocess(1, 2);\ncore.updateStatusBar();\n\n// 触发\nvar actions = [];\nif (core.plugin.isEnemy(loc_x, loc_y)) {\n\tactions.push({ \"type\": \"battle\", \"loc\": [loc_x, loc_y] });\n} else if (core.getBlockCls(loc_x, loc_y) == \"items\") {\n\tactions.push({ \"type\": \"trigger\", \"loc\": [loc_x, loc_y] });\n}\nactions.push({ \"type\": \"function\", \"function\": \"function(){core.plugin.addTempMdefpp(3 * core.getFlag(\\\"skill11_add\\\"));}\" });\ncore.insertAction(actions);\n}"
			},
			{
				"type": "if",
				"condition": "(!core.isReplaying())",
				"true": [
					{
						"type": "setValue",
						"name": "flag:enable_enemy_fly",
						"value": "0"
					}
				]
			},
			{
				"type": "setValue",
				"name": "flag:skill13_cost",
				"value": "2000"
			},
			{
				"type": "waitAsync"
			}
		],
		"第四章前结束": [
			{
				"type": "insert",
				"name": "清理flag",
				"args": [
					4
				]
			},
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
				"function": "function(){\ncore.unloadEquip(0);\ncore.unloadEquip(1);\n\ncore.setFlag('potion_extra_ratio', 20);\ncore.setFlag('mana_item', 150);\ncore.setFlag('mdef_ratio', 2);\ncore.setFlag('mana_regen', 5);\n}"
			},
			{
				"type": "setValue",
				"name": "item:sword8",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:shield8",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:book",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "item:fly",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "item:I319",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:I392",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:I62_extra_mana_regen",
				"value": "10"
			},
			{
				"type": "setValue",
				"name": "flag:I62_extra_description",
				"value": "\"。若战斗总伤害不大于0，额外回复10点能量\""
			},
			{
				"type": "setValue",
				"name": "item:I62",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "item:I437",
				"value": "1"
			},
			"\t[系统提示]即将进入新的区域。重置所有状态，包括能力、物品和技能等。",
			{
				"type": "if",
				"condition": "(core.itemCount(\"greenKey\") > 64)",
				"true": [
					"\t[系统提示]收回第四章开头多发的64把绿钥匙，剩余的留下来作为荣誉物品。",
					{
						"type": "setValue",
						"name": "item:I_greenKeyCh3",
						"operator": "+=",
						"value": "core.itemCount(\"greenKey\")-64"
					}
				]
			},
			{
				"type": "disableShop",
				"id": "Chap4Shop4"
			},
			{
				"type": "function",
				"function": "function(){\ncore.setFlag('__atk_buff__', 10);\ncore.setFlag('__def_buff__', 10);\ncore.setFlag('__mdef_buff__', 10);\ncore.setFlag('heart_atk_pp', 900);\ncore.setFlag('heart_def_pp', 900);\ncore.setFlag('heart_mdef_pp', 900);\n\ncore.updateStatusBar();\n}"
			},
			{
				"type": "setValue",
				"name": "status:hp",
				"value": "30000000"
			},
			{
				"type": "setValue",
				"name": "status:mana",
				"value": "1000"
			},
			{
				"type": "setValue",
				"name": "status:atk",
				"value": "200000"
			},
			{
				"type": "setValue",
				"name": "status:def",
				"value": "200000"
			},
			{
				"type": "setValue",
				"name": "status:mdef",
				"value": "400000"
			},
			{
				"type": "setValue",
				"name": "status:money",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:yellowKey",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:blueKey",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:redKey",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:greenKey",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:I_superGreenKey",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:talentTree2",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:skill6",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:skill7",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:skill8",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:yellowGem",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:I_noVampire",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "item:I_zzzl",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "flag:disableFly",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "flag:lightRadius",
				"value": "150"
			},
			{
				"type": "setValue",
				"name": "flag:yellowGem_extra_description",
				"value": "\"从第四章起，不再能提供生命回复。\""
			},
			{
				"type": "setValue",
				"name": "flag:fire_light_a",
				"value": "0.15"
			},
			{
				"type": "setValue",
				"name": "flag:zone_animate",
				"value": "\"zone2\""
			},
			{
				"type": "if",
				"condition": "(flags.hard==2)",
				"true": [
					{
						"type": "setValue",
						"name": "item:greenKey",
						"value": "99"
					}
				]
			},
			{
				"type": "setCurtain",
				"color": [
					0,
					0,
					0,
					1
				],
				"time": 500,
				"keep": true
			},
			{
				"type": "sleep",
				"time": 500
			},
			{
				"type": "autoText",
				"text": "第四章 后篇\n除零行动",
				"time": 2000
			},
			{
				"type": "setValue",
				"name": "flag:current_chapter",
				"value": "4.5"
			},
			{
				"type": "unfollow"
			},
			{
				"type": "follow",
				"name": "hero3.png"
			},
			{
				"type": "changeFloor",
				"floorId": "Ch4_41",
				"loc": [
					6,
					4
				],
				"direction": "down",
				"time": 1000
			}
		],
		"doSkill12": [
			{
				"type": "switch",
				"condition": "flag:temp_skill12_dir",
				"caseList": [
					{
						"case": "\"left\"",
						"action": [
							{
								"type": "fillArc",
								"x": "core.nextX(2) * 32 + 32",
								"y": "core.nextY(2) * 32 + 16",
								"r": 96,
								"start": 144,
								"end": 216,
								"style": [
									99,
									147,
									255,
									0.5
								]
							}
						]
					},
					{
						"case": "\"right\"",
						"action": [
							{
								"type": "fillArc",
								"x": "core.nextX(2) * 32",
								"y": "core.nextY(2) * 32 + 16",
								"r": 96,
								"start": 324,
								"end": 36,
								"style": [
									99,
									147,
									255,
									0.5
								]
							}
						]
					},
					{
						"case": "\"up\"",
						"action": [
							{
								"type": "fillArc",
								"x": "core.nextX(2) * 32 + 16",
								"y": "core.nextY(2) * 32 + 32",
								"r": 96,
								"start": 234,
								"end": 306,
								"style": [
									99,
									147,
									255,
									0.5
								]
							}
						]
					},
					{
						"case": "\"down\"",
						"action": [
							{
								"type": "fillArc",
								"x": "core.nextX(2) * 32 + 16",
								"y": "core.nextY(2) * 32",
								"r": 96,
								"start": 54,
								"end": 126,
								"style": [
									99,
									147,
									255,
									0.5
								]
							}
						]
					}
				]
			},
			{
				"type": "setValue",
				"name": "flag:skill12_use_time",
				"operator": "+=",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "status:mana",
				"operator": "-=",
				"value": "flag:skill12_cost"
			},
			{
				"type": "setValue",
				"name": "status:mana",
				"operator": "-=",
				"value": "core.getTalentLv3(3)"
			},
			{
				"type": "setValue",
				"name": "flag:usingSkill12",
				"value": "1"
			},
			{
				"type": "playSound",
				"name": "DF_e_1.mp3"
			},
			{
				"type": "jumpHero",
				"loc": [
					"core.nextX(2)",
					"core.nextY(2)"
				],
				"time": 500
			},
			{
				"type": "setValue",
				"name": "flag:previewSkill12",
				"value": "0"
			},
			{
				"type": "clearMap",
				"x": 0,
				"y": 0,
				"width": 416,
				"height": 416
			},
			{
				"type": "vibrate",
				"direction": "horizontal",
				"time": 100,
				"speed": 10,
				"power": 10,
				"async": true
			},
			{
				"type": "function",
				"function": "function(){\ncore.clearMap('curtain');\ncore.plugin.updateWeather();\nvar dir = core.getFlag(\"temp_skill12_dir\");\ncore.removeFlag(\"temp_skill12_dir\");\nvar hero_x = core.status.hero.loc.x,\n\thero_y = core.status.hero.loc.y;\nvar actions = [{ \"type\": \"changePos\", \"direction\": dir }, { \"type\": \"animate\", \"name\": \"skill12\", \"loc\": [\"core.nextX(1)\", \"core.nextY(1)\"], \"async\": true }];\nvar dec_atk = core.getFlag(\"skill12_datk\", 0);\nvar hit_enemy_num = 0;\nvar level_limit = 0;\nif (core.getTalentLv3(2) >= 3) level_limit = 1;\nif (core.getTalentLv3(2) >= 5) level_limit = 2;\nswitch (dir) {\ncase \"up\":\n\tfor (var x = hero_x - 1; x <= hero_x + 1; x++) {\n\t\tif (core.plugin.isEnemy(x, hero_y - 1)) {\n\t\t\tactions.push({\n\t\t\t\t\"type\": \"setEnemyOnPoint\",\n\t\t\t\t\"loc\": [\n\t\t\t\t\t[x, hero_y - 1]\n\t\t\t\t],\n\t\t\t\t\"name\": \"atk\",\n\t\t\t\t\"operator\": \"-=\",\n\t\t\t\t\"value\": dec_atk\n\t\t\t}, { \"type\": \"sleep\", \"time\": 100 });\n\t\t\tif (core.plugin.isEnemy(x, hero_y - 1, null, true)) {\n\t\t\t\tactions.push({ \"type\": \"battle\", \"loc\": [x, hero_y - 1] });\n\t\t\t\thit_enemy_num += 1;\n\t\t\t}\n\t\t} else if (core.getBlockCls(x, hero_y - 1) == \"items\") {\n\t\t\tactions.push({ \"type\": \"trigger\", \"loc\": [x, hero_y - 1] });\n\t\t}\n\t}\n\tfor (var x = hero_x - 1; x <= hero_x + 1; x++) {\n\t\tif (core.plugin.isEnemy(x, hero_y - 2) || core.getBlockCls(x, hero_y - 2) == \"items\") {\n\t\t\tactions.push({\n\t\t\t\t\"type\": \"if\",\n\t\t\t\t\"condition\": \"core.getBlockId(\" + x + \",\" + (hero_y - 1) + \") == null\",\n\t\t\t\t\"true\": [{\n\t\t\t\t\t\t\"type\": \"setEnemyOnPoint\",\n\t\t\t\t\t\t\"loc\": [\n\t\t\t\t\t\t\t[x, hero_y - 2]\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"name\": \"atk\",\n\t\t\t\t\t\t\"operator\": \"-=\",\n\t\t\t\t\t\t\"value\": dec_atk\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"type\": \"if\",\n\t\t\t\t\t\t\"condition\": !core.plugin.hasTitle(x, hero_y - 2, level_limit),\n\t\t\t\t\t\t\"true\": [\n\t\t\t\t\t\t\t{ \"type\": \"jump\", \"from\": [x, hero_y - 2], \"dxy\": [0, 1], \"time\": 500, \"keep\": true, \"async\": true }\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t]\n\t\t\t});\n\t\t}\n\t\tif (core.plugin.willNotBlockSkill12(x, hero_y - 1) && core.plugin.isEnemy(x, hero_y - 2, null, true)) {\n\t\t\thit_enemy_num += 1;\n\t\t}\n\t}\n\tbreak;\ncase \"down\":\n\tfor (var x = hero_x - 1; x <= hero_x + 1; x++) {\n\t\tif (core.plugin.isEnemy(x, hero_y + 1)) {\n\t\t\tactions.push({\n\t\t\t\t\"type\": \"setEnemyOnPoint\",\n\t\t\t\t\"loc\": [\n\t\t\t\t\t[x, hero_y + 1]\n\t\t\t\t],\n\t\t\t\t\"name\": \"atk\",\n\t\t\t\t\"operator\": \"-=\",\n\t\t\t\t\"value\": dec_atk\n\t\t\t}, { \"type\": \"sleep\", \"time\": 100 });\n\t\t\tif (core.plugin.isEnemy(x, hero_y + 1, null, true)) {\n\t\t\t\tactions.push({ \"type\": \"battle\", \"loc\": [x, hero_y + 1] });\n\t\t\t\thit_enemy_num += 1;\n\t\t\t}\n\t\t} else if (core.getBlockCls(x, hero_y + 1) == \"items\") {\n\t\t\tactions.push({ \"type\": \"trigger\", \"loc\": [x, hero_y + 1] });\n\t\t}\n\t}\n\tfor (var x = hero_x - 1; x <= hero_x + 1; x++) {\n\t\tif (core.plugin.isEnemy(x, hero_y + 2) || core.getBlockCls(x, hero_y + 2) == \"items\") {\n\t\t\tactions.push({\n\t\t\t\t\"type\": \"if\",\n\t\t\t\t\"condition\": \"core.getBlockId(\" + x + \",\" + (hero_y + 1) + \") == null\",\n\t\t\t\t\"true\": [{\n\t\t\t\t\t\t\"type\": \"setEnemyOnPoint\",\n\t\t\t\t\t\t\"loc\": [\n\t\t\t\t\t\t\t[x, hero_y + 2]\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"name\": \"atk\",\n\t\t\t\t\t\t\"operator\": \"-=\",\n\t\t\t\t\t\t\"value\": dec_atk\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"type\": \"if\",\n\t\t\t\t\t\t\"condition\": !core.plugin.hasTitle(x, hero_y + 2, level_limit),\n\t\t\t\t\t\t\"true\": [\n\t\t\t\t\t\t\t{ \"type\": \"jump\", \"from\": [x, hero_y + 2], \"dxy\": [0, -1], \"time\": 500, \"keep\": true, \"async\": true }\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t]\n\t\t\t});\n\t\t}\n\t\tif (core.plugin.willNotBlockSkill12(x, hero_y + 1) && core.plugin.isEnemy(x, hero_y + 2, null, true)) {\n\t\t\thit_enemy_num += 1;\n\t\t}\n\t}\n\tbreak;\ncase \"right\":\n\tfor (var y = hero_y - 1; y <= hero_y + 1; y++) {\n\t\tif (core.plugin.isEnemy(hero_x + 1, y)) {\n\t\t\tactions.push({\n\t\t\t\t\"type\": \"setEnemyOnPoint\",\n\t\t\t\t\"loc\": [\n\t\t\t\t\t[hero_x + 1, y]\n\t\t\t\t],\n\t\t\t\t\"name\": \"atk\",\n\t\t\t\t\"operator\": \"-=\",\n\t\t\t\t\"value\": dec_atk\n\t\t\t}, { \"type\": \"sleep\", \"time\": 100 });\n\t\t\tif (core.plugin.isEnemy(hero_x + 1, y, null, true)) {\n\t\t\t\tactions.push({ \"type\": \"battle\", \"loc\": [hero_x + 1, y] });\n\t\t\t\thit_enemy_num += 1;\n\t\t\t}\n\t\t} else if (core.getBlockCls(hero_x + 1, y) == \"items\") {\n\t\t\tactions.push({ \"type\": \"trigger\", \"loc\": [hero_x + 1, y] });\n\t\t}\n\t}\n\tfor (var y = hero_y - 1; y <= hero_y + 1; y++) {\n\t\tif (core.plugin.isEnemy(hero_x + 2, y) || core.getBlockCls(hero_x + 2, y) == \"items\") {\n\t\t\tactions.push({\n\t\t\t\t\"type\": \"if\",\n\t\t\t\t\"condition\": \"core.getBlockId(\" + (hero_x + 1) + \",\" + y + \") == null\",\n\t\t\t\t\"true\": [{\n\t\t\t\t\t\t\"type\": \"setEnemyOnPoint\",\n\t\t\t\t\t\t\"loc\": [\n\t\t\t\t\t\t\t[hero_x + 2, y]\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"name\": \"atk\",\n\t\t\t\t\t\t\"operator\": \"-=\",\n\t\t\t\t\t\t\"value\": dec_atk\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"type\": \"if\",\n\t\t\t\t\t\t\"condition\": !core.plugin.hasTitle(hero_x + 2, y, level_limit),\n\t\t\t\t\t\t\"true\": [\n\t\t\t\t\t\t\t{ \"type\": \"jump\", \"from\": [hero_x + 2, y], \"dxy\": [-1, 0], \"time\": 500, \"keep\": true, \"async\": true }\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t]\n\t\t\t});\n\t\t}\n\t\tif (core.plugin.willNotBlockSkill12(hero_x + 1, y) && core.plugin.isEnemy(hero_x + 2, y, null, true)) {\n\t\t\thit_enemy_num += 1;\n\t\t}\n\t}\n\tbreak;\ncase \"left\":\n\tfor (var y = hero_y - 1; y <= hero_y + 1; y++) {\n\t\tif (core.plugin.isEnemy(hero_x - 1, y)) {\n\t\t\tactions.push({\n\t\t\t\t\"type\": \"setEnemyOnPoint\",\n\t\t\t\t\"loc\": [\n\t\t\t\t\t[hero_x - 1, y]\n\t\t\t\t],\n\t\t\t\t\"name\": \"atk\",\n\t\t\t\t\"operator\": \"-=\",\n\t\t\t\t\"value\": dec_atk\n\t\t\t}, { \"type\": \"sleep\", \"time\": 100 });\n\t\t\tif (core.plugin.isEnemy(hero_x - 1, y, null, true)) {\n\t\t\t\tactions.push({ \"type\": \"battle\", \"loc\": [hero_x - 1, y] });\n\t\t\t\thit_enemy_num += 1;\n\t\t\t}\n\t\t} else if (core.getBlockCls(hero_x - 1, y) == \"items\") {\n\t\t\tactions.push({ \"type\": \"trigger\", \"loc\": [hero_x - 1, y] });\n\t\t}\n\t}\n\tfor (var y = hero_y - 1; y <= hero_y + 1; y++) {\n\t\tif (core.plugin.isEnemy(hero_x - 2, y) || core.getBlockCls(hero_x - 2, y) == \"items\") {\n\t\t\tactions.push({\n\t\t\t\t\"type\": \"if\",\n\t\t\t\t\"condition\": \"core.getBlockId(\" + (hero_x - 1) + \",\" + y + \") == null\",\n\t\t\t\t\"true\": [{\n\t\t\t\t\t\t\"type\": \"setEnemyOnPoint\",\n\t\t\t\t\t\t\"loc\": [\n\t\t\t\t\t\t\t[hero_x - 2, y]\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"name\": \"atk\",\n\t\t\t\t\t\t\"operator\": \"-=\",\n\t\t\t\t\t\t\"value\": dec_atk\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"type\": \"if\",\n\t\t\t\t\t\t\"condition\": !core.plugin.hasTitle(hero_x - 2, y, level_limit),\n\t\t\t\t\t\t\"true\": [\n\t\t\t\t\t\t\t{ \"type\": \"jump\", \"from\": [hero_x - 2, y], \"dxy\": [1, 0], \"time\": 500, \"keep\": true, \"async\": true }\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t]\n\t\t\t});\n\t\t}\n\t\tif (core.plugin.willNotBlockSkill12(hero_x - 1, y) && core.plugin.isEnemy(hero_x - 2, y, null, true)) {\n\t\t\thit_enemy_num += 1;\n\t\t}\n\t}\n\tbreak;\n}\ncore.addFlag(\"skill12_hit_num\", hit_enemy_num);\nvar ret_cost = core.getFlag(\"skill12_hit_ret\", 0) * hit_enemy_num;\ncore.status.hero.mana += ret_cost;\nvar ret_hp = Math.round(core.getFlag(\"skill12_drain_ratio\", 0) / 100 * core.getFlag(\"temp_mdef_pp\") * core.status.hero.mdef / 100 * hit_enemy_num);\nif (core.getFlag(\"A21boss\", 0) > 0) ret_hp = 0; // boss 战禁回复\nif (ret_hp > 0) {\n\tcore.status.hero.hp += ret_hp;\n\tcore.plugin.popSkillDamage(ret_hp, hero_x, hero_y, \"#63ff63\");\n\tcore.addFlag(\"stat_skill12_ret_hp\", ret_hp);\n}\nif (core.getTalentLv3(2) == 1 && core.getFlag(\"skill12_use_time\", 0) >= 10) {\n\tcore.drawHeroAnimate(\"yongchang\");\n\tif (core.getFlag(\"autoUpgradeTalent\", 0) > 0) core.plugin._tryUpgrade3(2);\n}\nif (core.getTalentLv3(2) == 2 && core.getFlag(\"skill12_hit_num\", 0) >= 30) {\n\tcore.drawHeroAnimate(\"yongchang\");\n\tif (core.getFlag(\"autoUpgradeTalent\", 0) > 0) {\n\t\tcore.plugin._tryUpgrade3(2);\n\t\tif (core.getTalentLv3(3) >= 55) { core.plugin._tryUpgrade3(2); }\n\t\tif (core.getTalentLv3(3) >= 90) { core.plugin._tryUpgrade3(2); }\n\t}\n}\n//if (core.getTalentLv3(7) >= 6 && hit_enemy_num > 0) {\n//core.plugin.addTempMdefpp(core.getFlag(\"skill11_add\"));\n//actions.push({\"type\": \"function\", \"function\": \"function(){core.plugin.addTempMdefpp(core.getFlag(\\\"skill11_add\\\"));}\"});\n//}\ncore.insertAction(actions);\n}"
			},
			{
				"type": "setValue",
				"name": "flag:usingSkill12",
				"value": "0"
			},
			{
				"type": "waitAsync",
				"excludeAnimates": true
			}
		],
		"100级": [
			{
				"type": "vibrate",
				"direction": "horizontal",
				"time": 2000,
				"speed": 10,
				"power": 10,
				"async": true
			},
			{
				"type": "animate",
				"name": "rage_buff",
				"loc": "hero"
			},
			{
				"type": "animate",
				"name": "yongchang",
				"loc": "hero",
				"async": true
			},
			{
				"type": "animate",
				"name": "thunder",
				"loc": "hero"
			},
			{
				"type": "animate",
				"name": "thunder3",
				"loc": "hero"
			},
			"\t[系统提示]解锁毁灭拳套的全部力量，基础攻防永久提升\r[yellow]50000\r点。",
			{
				"type": "setValue",
				"name": "status:atk",
				"operator": "+=",
				"value": "50000"
			},
			{
				"type": "setValue",
				"name": "status:def",
				"operator": "+=",
				"value": "50000"
			},
			"\t[系统提示]获得\r[#e525ff]【奥义】毁 天 灭 地\r。\n此技能的能量消耗会因进行战斗或使用而变化，目前的消耗为\r[orange]1000\r点。",
			{
				"type": "function",
				"function": "function(){\ncore.addFlag(\"talent3_7_lv\", 1);\ncore.setFlag(\"skill13_datk\", 2000000);\ncore.setFlag(\"skill13_ddef\", 2000000);\ncore.setFlag(\"skill13_cost\", 1000);\ncore.setFlag(\"skill13_cost_reduce\", 50);\ncore.getItem(\"skill13\");\n}"
			},
			{
				"type": "waitAsync"
			}
		],
		"Ch4_2BossDraw": [
			{
				"type": "clearMap",
				"x": 0,
				"y": 0,
				"width": 416,
				"height": 100
			},
			{
				"type": "previewUI",
				"action": [
					{
						"type": "fillBoldText",
						"x": 80,
						"y": 20,
						"style": [
							190,
							95,
							95,
							1
						],
						"strokeStyle": [
							0,
							0,
							0,
							1
						],
						"font": "20px Verdana",
						"text": "奥卡斯特大帝"
					},
					{
						"type": "fillBoldText",
						"x": 208,
						"y": 20,
						"style": [
							162,
							99,
							196,
							1
						],
						"strokeStyle": [
							0,
							0,
							0,
							1
						],
						"font": "20px Verdana",
						"text": "奥波卢克斯大帝"
					},
					{
						"type": "if",
						"condition": "flag:A21boss_1p < 5",
						"true": [
							{
								"type": "fillBoldText",
								"x": 32,
								"y": 24,
								"style": [
									216,
									52,
									52,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "16px Verdana",
								"text": "⬇${flag:A21boss_1p_debuff}"
							},
							{
								"type": "fillBoldText",
								"x": 8,
								"y": 40,
								"style": [
									220,
									77,
									22,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "16px Verdana",
								"text": "召唤:${flag:A21boss_pick}/2"
							}
						]
					},
					{
						"type": "if",
						"condition": "flag:A21boss_2p < 5",
						"true": [
							{
								"type": "fillBoldText",
								"x": 352,
								"y": 24,
								"style": [
									162,
									38,
									228,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "16px Verdana",
								"text": "⬇${flag:A21boss_2p_debuff}"
							},
							{
								"type": "fillBoldText",
								"x": 336,
								"y": 40,
								"style": [
									121,
									60,
									222,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "16px Verdana",
								"text": "召唤:${flag:A21boss_battle}/3"
							}
						]
					}
				]
			},
			{
				"type": "switch",
				"condition": "flag:A21boss_1p",
				"caseList": [
					{
						"case": "0",
						"action": [
							{
								"type": "fillBoldText",
								"x": 100,
								"y": 40,
								"style": [
									216,
									52,
									52,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "20px Verdana",
								"text": "★★★★★"
							}
						]
					},
					{
						"case": "1",
						"action": [
							{
								"type": "fillBoldText",
								"x": 100,
								"y": 40,
								"style": [
									216,
									52,
									52,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "20px Verdana",
								"text": "★★★★"
							}
						]
					},
					{
						"case": "2",
						"action": [
							{
								"type": "fillBoldText",
								"x": 100,
								"y": 40,
								"style": [
									216,
									52,
									52,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "20px Verdana",
								"text": "★★★"
							}
						]
					},
					{
						"case": "3",
						"action": [
							{
								"type": "fillBoldText",
								"x": 100,
								"y": 40,
								"style": [
									216,
									52,
									52,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "20px Verdana",
								"text": "★★"
							}
						]
					},
					{
						"case": "4",
						"action": [
							{
								"type": "fillBoldText",
								"x": 100,
								"y": 40,
								"style": [
									216,
									52,
									52,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "20px Verdana",
								"text": "★"
							}
						]
					},
					{
						"case": "5",
						"action": [
							{
								"type": "fillBoldText",
								"x": 100,
								"y": 40,
								"style": [
									216,
									52,
									52,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "20px Verdana",
								"text": "Defeated"
							}
						]
					}
				]
			},
			{
				"type": "switch",
				"condition": "flag:A21boss_2p",
				"caseList": [
					{
						"case": "0",
						"action": [
							{
								"type": "fillBoldText",
								"x": 236,
								"y": 40,
								"style": [
									162,
									38,
									228,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "20px Verdana",
								"text": "★★★★★"
							}
						]
					},
					{
						"case": "1",
						"action": [
							{
								"type": "fillBoldText",
								"x": 236,
								"y": 40,
								"style": [
									162,
									38,
									228,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "20px Verdana",
								"text": "★★★★"
							}
						]
					},
					{
						"case": "2",
						"action": [
							{
								"type": "fillBoldText",
								"x": 236,
								"y": 40,
								"style": [
									162,
									38,
									228,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "20px Verdana",
								"text": "★★★"
							}
						]
					},
					{
						"case": "3",
						"action": [
							{
								"type": "fillBoldText",
								"x": 236,
								"y": 40,
								"style": [
									162,
									38,
									228,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "20px Verdana",
								"text": "★★"
							}
						]
					},
					{
						"case": "4",
						"action": [
							{
								"type": "fillBoldText",
								"x": 236,
								"y": 40,
								"style": [
									162,
									38,
									228,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "20px Verdana",
								"text": "★"
							}
						]
					},
					{
						"case": "5",
						"action": [
							{
								"type": "fillBoldText",
								"x": 236,
								"y": 40,
								"style": [
									162,
									38,
									228,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "20px Verdana",
								"text": "Defeated"
							}
						]
					}
				]
			}
		],
		"Ch4_2BossEnd": [
			{
				"type": "comment",
				"text": "end"
			},
			{
				"type": "function",
				"function": "function(){\ncore.setFlag(\"mana_regen\", core.getFlag(\"saved_mana_regen\", 0));\ncore.setFlag(\"I62_extra_mana_regen\", core.getFlag(\"saved_I62_extra_mana_regen\", 0));\ncore.setFlag(\"I62_extra_description\", core.getFlag(\"saved_I62_extra_description\", \"\"));\ncore.setFlag(\"skill12_desc1\", core.getFlag(\"saved_skill12_desc1\", \"\"));\ncore.removeFlag(\"saved_mana_regen\");\ncore.removeFlag(\"saved_I62_extra_mana_regen\");\ncore.removeFlag(\"saved_I62_extra_description\");\ncore.removeFlag(\"saved_skill12_desc1\");\n\nvar total_damage = core.getFlag(\"saved_hp\", 0) - core.status.hero.hp;\nvar used_mana = core.getFlag(\"saved_mana\", 0) - core.status.hero.mana;\ntotal_damage += used_mana * 250000;\ncore.setFlag(\"temp_total_damage\", total_damage);\ncore.removeFlag(\"saved_hp\");\ncore.removeFlag(\"saved_mana\");\ncore.removeFlag(\"temp_A21boss_draw\");\ncore.canvas.bg2.clearRect(0, 0, 416, 416);\n}"
			},
			{
				"type": "setVolume",
				"value": 0,
				"time": 3000,
				"async": true
			},
			{
				"type": "setValue",
				"name": "flag:A21boss",
				"value": "0"
			},
			{
				"type": "clearMap",
				"x": 0,
				"y": 0,
				"width": 416,
				"height": 100
			},
			{
				"type": "vibrate",
				"direction": "horizontal",
				"time": 2000,
				"speed": 10,
				"power": 10,
				"async": true
			},
			{
				"type": "animate",
				"name": "supernova",
				"loc": [
					4,
					6
				],
				"async": true
			},
			{
				"type": "animate",
				"name": "supernova",
				"loc": [
					8,
					6
				],
				"async": true
			},
			{
				"type": "setCurtain",
				"color": [
					255,
					255,
					255,
					1
				],
				"time": 2000,
				"keep": true
			},
			{
				"type": "function",
				"function": "function(){\nfor (var i = 1; i < 12; ++i) {\n\tfor (var j = 1; j < 12; ++j) {\n\t\tcore.removeBlock(i, j);\n\t}\n}\ncore.plugin.addTempMdefpp(-9922);\ncore.updateStatusBar();\n}"
			},
			{
				"type": "waitAsync"
			},
			{
				"type": "setCurtain",
				"time": 1000
			},
			"\t[hero]……",
			"\t[hero]终于……结束了……",
			{
				"type": "if",
				"condition": "flags.hard==2",
				"true": [
					"\t[系统提示]按照 1 点能量等于 25w 生命换算，你在 boss 战中总共受到伤害：\r[yellow]${flag:temp_total_damage}\r点\n如果这个数字小于32e，那么打得不错。\n另外，获得普通难度特有的福利：\n\r[yellow]你恢复该数值的生命\r。",
					{
						"type": "setValue",
						"name": "status:hp",
						"operator": "+=",
						"value": "flag:temp_total_damage"
					}
				],
				"false": [
					"\t[系统提示]按照 1 点能量等于 25w 生命换算，你在 boss 战中总共受到伤害：\r[yellow]${flag:temp_total_damage}\r点\n如果这个数字小于32e，那么打得不错。"
				]
			},
			{
				"type": "playSound",
				"name": "mteleport.wav"
			},
			{
				"type": "changeFloor",
				"floorId": "Ch4_131",
				"loc": [
					6,
					12
				],
				"direction": "up",
				"time": 1000
			}
		],
		"衰 爆": [
			{
				"type": "vibrate",
				"direction": "horizontal",
				"time": 1000,
				"speed": 10,
				"power": 10,
				"async": true
			},
			{
				"type": "playSound",
				"name": "se_power0.wav"
			},
			{
				"type": "animate",
				"name": "yongchang",
				"loc": [
					4,
					6
				]
			},
			{
				"type": "switch",
				"condition": "flag:A21boss_1p",
				"caseList": [
					{
						"case": "3",
						"action": [
							"\t[奥卡斯特大帝,E888]\b[down,null]\\c[20]\r[red]因你的自大而遭受苦难吧！\r\n\r[#e525ff]【奥义】傲慢之踵！\r\\c"
						]
					},
					{
						"case": "4",
						"action": [
							"\t[奥卡斯特大帝,E888]\b[down,null]\\c[20]\r[red]因你的骄狂而遭受折磨吧！\r\n\r[#e525ff]【奥义】傲慢之踵！\r\\c"
						]
					}
				]
			},
			{
				"type": "function",
				"function": "function(){\ncore.triggerDebuff(\"get\", \"superweak\");\n}"
			},
			{
				"type": "setValue",
				"name": "flag:superweak_n",
				"value": "5"
			},
			{
				"type": "waitAsync"
			}
		],
		"Ch1BossDraw": [
			{
				"type": "clearMap",
				"x": 0,
				"y": 0,
				"width": 416,
				"height": 100
			},
			{
				"type": "if",
				"condition": "flag:B20F_boss_activated == 1",
				"true": [
					{
						"type": "previewUI",
						"action": [
							{
								"type": "fillBoldText",
								"x": 188,
								"y": 20,
								"style": [
									255,
									215,
									0,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "20px Verdana",
								"text": "茉莉"
							},
							{
								"type": "switch",
								"condition": "flag:B20F_boss_phase",
								"caseList": [
									{
										"case": "0",
										"action": [
											{
												"type": "fillBoldText",
												"x": 184,
												"y": 40,
												"style": [
													255,
													215,
													0,
													1
												],
												"strokeStyle": [
													0,
													0,
													0,
													1
												],
												"font": "20px Verdana",
												"text": "★★★"
											}
										]
									},
									{
										"case": "1",
										"action": [
											{
												"type": "fillBoldText",
												"x": 184,
												"y": 40,
												"style": [
													255,
													215,
													0,
													1
												],
												"strokeStyle": [
													0,
													0,
													0,
													1
												],
												"font": "20px Verdana",
												"text": "★★"
											}
										]
									},
									{
										"case": "2",
										"action": [
											{
												"type": "fillBoldText",
												"x": 184,
												"y": 40,
												"style": [
													255,
													215,
													0,
													1
												],
												"strokeStyle": [
													0,
													0,
													0,
													1
												],
												"font": "20px Verdana",
												"text": "★"
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
		"Ch4BossDraw": [
			{
				"type": "clearMap",
				"x": 0,
				"y": 0,
				"width": 416,
				"height": 100
			},
			{
				"type": "if",
				"condition": "flag:Ch4_boss_activated == 1",
				"true": [
					{
						"type": "previewUI",
						"action": [
							{
								"type": "fillBoldText",
								"x": 184,
								"y": 20,
								"style": [
									255,
									215,
									0,
									1
								],
								"strokeStyle": [
									0,
									0,
									0,
									1
								],
								"font": "20px Verdana",
								"text": "9961"
							},
							{
								"type": "switch",
								"condition": "flag:Ch4_boss_phase",
								"caseList": [
									{
										"case": "1",
										"action": [
											{
												"type": "fillBoldText",
												"x": 168,
												"y": 40,
												"style": [
													255,
													215,
													0,
													1
												],
												"strokeStyle": [
													0,
													0,
													0,
													1
												],
												"font": "20px Verdana",
												"text": "★★★★★"
											}
										]
									},
									{
										"case": "2",
										"action": [
											{
												"type": "fillBoldText",
												"x": 168,
												"y": 40,
												"style": [
													255,
													215,
													0,
													1
												],
												"strokeStyle": [
													0,
													0,
													0,
													1
												],
												"font": "20px Verdana",
												"text": "★★★★"
											}
										]
									},
									{
										"case": "3",
										"action": [
											{
												"type": "fillBoldText",
												"x": 168,
												"y": 40,
												"style": [
													255,
													215,
													0,
													1
												],
												"strokeStyle": [
													0,
													0,
													0,
													1
												],
												"font": "20px Verdana",
												"text": "★★★"
											}
										]
									},
									{
										"case": "4",
										"action": [
											{
												"type": "fillBoldText",
												"x": 168,
												"y": 40,
												"style": [
													255,
													215,
													0,
													1
												],
												"strokeStyle": [
													0,
													0,
													0,
													1
												],
												"font": "20px Verdana",
												"text": "★★"
											}
										]
									},
									{
										"case": "5",
										"action": [
											{
												"type": "fillBoldText",
												"x": 168,
												"y": 40,
												"style": [
													255,
													215,
													0,
													1
												],
												"strokeStyle": [
													0,
													0,
													0,
													1
												],
												"font": "20px Verdana",
												"text": "★"
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	}
}