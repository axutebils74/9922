main.floors.Ch4_21=
{
    "floorId": "Ch4_21",
    "title": "圣洁教堂-1",
    "name": "圣洁教堂-1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [
        {
            "name": "area7_2.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0,
            "h": 96
        }
    ],
    "ratio": 50,
    "defaultGround": "airwall",
    "bgm": "area15.mp3",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:mana_item",
            "value": "125"
        },
        {
            "type": "function",
            "function": "function(){\ncore.values.animateSpeed = 450;\ncore.setFlag(\"__visited__\", { Ch4_21: true });\n}"
        },
        "\t[hero]好亮……",
        "\t[晴芸,hero3]这就是格沃堡的中层区域吗，果真跟下层区域完全不同。\n灯火通明、富丽堂皇，兼具现代和古典的风格……",
        "\t[神圣战士,E687]\b[down,7,6]她们来了！\n奉\r[yellow]至尊之神\r的旨意，以\r[yellow]至尊之神\r的力量！揍她们！",
        {
            "type": "animate",
            "name": "E_sweat",
            "loc": "hero"
        },
        "\t[hero]但是这遍地的强敌也太棘手了……\n虽然好像也逐渐习惯这种感觉了。",
        "\t[晴芸,hero3]注意观察敌人的特性，尽量绕开强大的对手吧。",
        "\t[系统提示]从本区域开始，能量块的回复量提升至\r[yellow]125\r点。"
    ],
    "eachArrive": [],
    "parallelDo": "// 辣鸡作者：这个脚本是小艾写的，出自于《梦》，这里只不过是把竖向移动改成了横向移动\nvar lastTime = core.getFlag('lastWeatherTime', 0);\n// 每多少毫秒重绘一次；天气效果默认都是30\nif (timestamp - lastTime > 60) {\n\tcore.clearMap('weather'); // 清空天气层\n\tvar lastOffsetX = core.getFlag('lastOffsetX', 0); // 上次的offset\n\tvar image = core.material.images.images['area7_2.jpg']; // 获得图片，这里写图片名\n\tvar width = image.width,\n\t\theight = 4 * 32; // 获得宽高\n\t// 绘制下一次，参见drawImage的API：http://www.w3school.com.cn/tags/canvas_drawimage.asp\n\tif (lastOffsetX + 416 > width) { // 需要首尾相接\n\t\t// 尾部\n\t\tcore.canvas.bg.drawImage(image, lastOffsetX, 0, width - lastOffsetX, height, 0, 0, width - lastOffsetX, height);\n\t\t// 首部\n\t\tcore.canvas.bg.drawImage(image, 0, 0, lastOffsetX + 416 - width, height, width - lastOffsetX, 0, lastOffsetX + 416 - width, height);\n\t} else { // 不需要，直接绘制\n\t\tcore.canvas.bg.drawImage(image, lastOffsetX, 0, width, height, 0, 0, width, height);\n\t}\n\t// 移动图片\n\tlastOffsetX += 1; // 这里是每次移动的像素\n\tif (lastOffsetX > 416) lastOffsetX -= width;\n\tcore.setFlag('lastOffsetX', lastOffsetX);\n\tcore.setFlag('lastWeatherTime', timestamp); // 记录时间\n}",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "Ch4_22",
            "loc": [
                6,
                0
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [120262,120263,120285,120286,120285,120285,120286,120285,120286,120285,120286,120261,120262],
    [120270,120271,120293,120294,120293,120293,120294,120293,120294,120293,120294,120269,120270],
    [120278,120279,120301,120302,120301,120301,120302,120301,120302,120301,120302,120277,120278],
    [175,657, 22,656, 84,  0,  0,  0,175,652,  0,654,175],
    [175,334,654,331,175,  0,  0,  0,175,334,644,334,175],
    [175, 82,175,175,175,587,175,687,175,175, 82,175,175],
    [175,  0,701,689,  0,330, 81,330,  0,  0,331,  0,175],
    [175,175,175,175, 81,175,677,175, 81,175,175,653,175],
    [175,657,  0,175,686,175, 22,175,330,175, 21,  0,175],
    [175,331,654,684, 21, 84,  0, 84,332,175, 81,175,175],
    [175,656,  0,332,  0,175,687,175,175,332,587, 22,175],
    [175,175,175,175,175,175,  0,175,175,175,175,175,175]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [315,315,315,315,315,315,315,315,315,315,315,315,315],
    [315,315,315,315,315,315,315,315,315,315,315,315,315],
    [315,315,315,315,315,315,315,315,315,315,315,315,315],
    [315,315,315,315,315,315,315,315,315,315,315,315,315],
    [315,315,315,315,315,315,315,315,315,315,315,315,315],
    [315,315,315,315,315,315,315,315,315,315,315,315,315],
    [315,315,315,315,315,315,315,315,315,315,315,315,315],
    [315,315,315,315,315,315,315,315,315,315,315,315,315],
    [315,315,315,315,315,315,315,315,315,315,315,315,315]
],
    "fgmap": [

],
    "bg2map": [
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
    [  0,  0,  0,  0,  0,  0, 93,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "upFloor": [
        6,
        12
    ],
    "downFloor": [
        6,
        4
    ],
    "hard1_enemy_ratio": 95,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}