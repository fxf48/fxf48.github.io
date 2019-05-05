let timer = null;
const tipsList = [
    "就差一点点了呢",
    "并没有提示按钮",
    "神秘链接了解一下？",
    "神圣的F2连…",
    "加速卡，咻"
];

function LinkGame(x, y, gameContainer) {
    this.x = x;//列数
    this.y = y;//行数
    this.blockWidth = 80;
    this.blockHeight = 80;
    this.gameContainer = gameContainer;//jQuery对象
    this.gameContainer.empty();
    let game = this;
    this.timeWatcher = new TimeWatcher(document.getElementById("myProgress"), 100, function () {
        game.gameContainer.hide();
        let index = parseInt(Math.random() * tipsList.length);
        $("#tips").text(tipsList[index]);
        $(".game-over").show();
    });

    this.arrmap = [];//二维数组
    this.init();
    this.gamecontrol();
    if (this.timeWatcher != null) {
        this.timeWatcher.restart();
    }
}

LinkGame.prototype.restart = function () {
    this.gameContainer.empty();
    this.init();
    this.gamecontrol();
    if (this.timeWatcher != null) {
        this.timeWatcher.restart();
    }
};
LinkGame.prototype.isEnd = function () {
    for (let i = 0; i < this.y; i++) {
        for (let j = 0; j < this.x; j++) {
            let index = this.arrmap[i + 1][j + 1];
            if (index !== 0) {
                return false;
            }
        }
    }
    return true;
}
LinkGame.prototype.init = function () {//游戏初始化，生成游戏画布》游戏数据》渲染游戏DOM
    this.gameContainer.css({width: this.x * this.blockWidth, height: this.y * this.blockHeight});
    this.arrmap = this.makeData();
    this.render();
};
LinkGame.prototype.makeData = function () {
    let arrmap = [];
    // 生成虚拟二维数组（比实际数组大一圈，方便连线计算）,并初始值均为0
    for (let i = 0; i < this.y + 2; i++) {
        arrmap[i] = [];
        for (let j = 0; j < this.x + 2; j++) {
            arrmap[i][j] = 0;
        }
    }
    let fullsize = this.x * this.y;// 24 - 32 之间
    let arrorder = [];//生成乱序数组
    let arrtemp = [];//顺序数组（临时使用）
    for (let h = 0; h < fullsize; h++) {
        arrtemp[h] = h;
    }
    for (var g = 0; g < fullsize; g++) {
        //从顺序数组中随机位置拿一个数，最后生成乱序数组
        var temp = Math.floor(Math.random() * arrtemp.length);
        arrorder.push(arrtemp.splice(temp, 1)[0])
    }
    var arrbase = [];// 生成基础数据一维数组
    var z = 2;
    var max = 10;
    for (var m = 0; m < z; m++) {
        for (var n = 0; n < max; n++)
            arrbase[n + m * max] = n + 1;
    }
    //根据此顺序将基础数组添加到地图数组
    for (var o = 0; o < arrbase.length; o++) {
        arrmap[Math.floor(arrorder[o] / this.x) + 1][(arrorder[o] % this.x + 1)] = arrbase[o]
    }
    console.log("基础数据：" + arrbase + "\n位置乱序：" + arrorder)
    return arrmap;
};
LinkGame.prototype.render = function () {
    for (let i = 0; i < this.y; i++) {
        for (let j = 0; j < this.x; j++) {
            let index = this.arrmap[i + 1][j + 1];
            let child = $("<div></div>");
            child.addClass("cell");
            child.addClass("list" + index);
            this.gameContainer.append(child)
        }
    }
    this.gameContainer.append("<div class='cell line'></div><div class='cell line'></div><div class='cell line'></div>")
};
LinkGame.prototype.gamecontrol = function () {
    var game = this;
    game.curr = null;
    game.gameContainer.find(".cell").bind("click", function () {
        if (game.curr == null) {//没有选中项的情况
            $(this).addClass("active");
            game.curr = $(this);
        } else if (game.curr.index() === $(this).index()) {//再次点击 取消
            $(this).removeClass("active");
            game.curr = null;
        } else {//验证是否可以连接
            if (game.getconnect(game.curr, $(this))) {//若能连接
                game.curr.removeAttr("class").addClass("cell list0").unbind("click");
                $(this).removeAttr("class").addClass("cell list0").unbind("click");
                game.curr = null;
                if (game.isEnd()) {
                    game.gameContainer.hide();
                    $("#tips").text("干得漂亮");
                    $(".game-over").show();
                } else {
                    if (game.timeWatcher != null) {
                        game.timeWatcher.restart()
                    }
                }

            } else {//不能连接
                $(this).addClass("active").siblings().removeClass("active");
                game.curr = $(this);
            }
        }
    });
    game.gameContainer.find(".list0").unbind("click");//为空项的取消绑定
};

LinkGame.prototype.getconnect = function (a, b) {
    var that = this;
    var isopen = false;
    var ai = parseInt(a.index() / that.x) + 1;//因为虚拟地图比实际大一圈，所以都+1
    var aj = a.index() % that.x + 1;
    var bi = parseInt(b.index() / that.x) + 1;
    var bj = b.index() % that.x + 1;
    console.log("当前对比(" + ai + "," + aj + ")和(" + bi + "," + bj + ")");
    if (that.arrmap[ai][aj] !== that.arrmap[bi][bj]) {
        console.log("两次选择内容不同，不可消除");
        return false;
    } else {
        //判断是否同行或同列
        if (ai === bi) {//同行
            if (that.isopen_h(that.arrmap, ai, aj, bj)) {//直线可连接
                that.arrmap[ai][aj] = 0;
                that.arrmap[bi][bj] = 0;
                that.drawline_h(ai, aj, bj, 0);
                return true;
            } else {//三线可连接
                for (var i = 0; i < that.y + 2; i++) {
                    if (that.isopen_h(that.arrmap, i, aj, bj) && that.isopen_v(that.arrmap, aj, ai, i) && that.isopen_v(that.arrmap, bj, bi, i) && that.arrmap[i][aj] === 0 && that.arrmap[i][bj] === 0) {
                        console.log("同行三线第" + i + "行形成通路");
                        that.drawline_h(i, aj, bj, 0);
                        that.drawline_v(aj, ai, i, 1);
                        that.drawline_v(bj, bi, i, 2);
                        that.arrmap[ai][aj] = 0;
                        that.arrmap[bi][bj] = 0;
                        isopen = true;
                        break;
                    }
                }
                return isopen;
            }
        } else if (aj === bj) {//同列
            if (that.isopen_v(that.arrmap, aj, ai, bi)) {//直线可连接
                that.arrmap[ai][aj] = 0;
                that.arrmap[bi][bj] = 0;
                that.drawline_v(aj, ai, bi, 0);
                return true;
            } else {//三线可连接
                for (var j = 0; j < that.x + 2; j++) {
                    if (that.isopen_v(that.arrmap, j, ai, bi) && that.isopen_h(that.arrmap, ai, aj, j) && that.isopen_h(that.arrmap, bi, bj, j) && that.arrmap[ai][j] === 0 && that.arrmap[bi][j] === 0) {
                        console.log("同列三线第" + j + "列形成通路");
                        that.drawline_v(j, ai, bi, 0);
                        that.drawline_h(ai, aj, j, 1);
                        that.drawline_h(bi, bj, j, 2);
                        that.arrmap[ai][aj] = 0;
                        that.arrmap[bi][bj] = 0;
                        isopen = true;
                        break;
                    }
                }
                return isopen;
            }
        } else {//不同行同列
            //两条线可连
            if (that.arrmap[ai][bj] === 0 && that.isopen_h(that.arrmap, ai, aj, bj) && that.isopen_v(that.arrmap, bj, ai, bi)) {
                console.log("不同行同列与（" + ai + "," + bj + ")点两线通路");
                that.drawline_h(ai, aj, bj, 0);
                that.drawline_v(bj, ai, bi, 1);
                that.arrmap[ai][aj] = 0;
                that.arrmap[bi][bj] = 0;
                return true;
            } else if (that.arrmap[bi][aj] === 0 && that.isopen_v(that.arrmap, aj, ai, bi) && that.isopen_h(that.arrmap, bi, aj, bj)) {
                console.log("不同行同列与（" + bi + "," + aj + ")点两线通路");
                that.drawline_v(aj, ai, bi, 0);
                that.drawline_h(bi, aj, bj, 1);
                that.arrmap[ai][aj] = 0;
                that.arrmap[bi][bj] = 0;
                return true;
            } else {//三条线可连
                for (var i = 0; i < that.y + 2; i++) {
                    if (that.isopen_h(that.arrmap, i, aj, bj) && that.isopen_v(that.arrmap, aj, ai, i) && that.isopen_v(that.arrmap, bj, bi, i) && that.arrmap[i][aj] === 0 && that.arrmap[i][bj] === 0) {
                        console.log("不同行三线第" + i + "行形成通路");
                        that.drawline_h(i, aj, bj, 0);
                        that.drawline_v(aj, ai, i, 1);
                        that.drawline_v(bj, bi, i, 2);
                        that.arrmap[ai][aj] = 0;
                        that.arrmap[bi][bj] = 0;
                        isopen = true;
                        break;
                    }
                }
                if (isopen) {
                    return isopen;
                } else {
                    for (var j = 0; j < that.x + 2; j++) {
                        if (that.isopen_v(that.arrmap, j, ai, bi) && that.isopen_h(that.arrmap, ai, aj, j) && that.isopen_h(that.arrmap, bi, bj, j) && that.arrmap[ai][j] === 0 && that.arrmap[bi][j] === 0) {
                            console.log("不同列三线第" + j + "列形成通路");
                            that.drawline_v(j, ai, bi, 0);
                            that.drawline_h(ai, aj, j, 1);
                            that.drawline_h(bi, bj, j, 2);
                            that.arrmap[ai][aj] = 0;
                            that.arrmap[bi][bj] = 0;
                            isopen = true;
                            break;
                        }
                    }
                    return isopen;
                }


            }


        }

    }
};

LinkGame.prototype.isopen_h = function (arr, i, aj, bj) { //验证同行两点之间是否通畅
    var a = true;
    if (Math.abs(aj - bj) != 1) {//不相邻，相邻直接通过，aj=bj的情况前面已经排除
        for (var k = 1; k < Math.abs(aj - bj); k++) {
            var jj = aj > bj ? bj + k : aj + k;
            if (arr[i][jj] != 0) {
                a = false;
                console.log("横向坐标阻塞" + i + "," + jj);
                break;
            }
        }
    }
    return a;
};
LinkGame.prototype.isopen_v = function (arr, j, ai, bi) { //验证同列两点之间是否通畅
    var a = true;
    if (Math.abs(ai - bi) != 1) {//不相邻，相邻直接通过，ai=bi的情况前面已经排除
        for (var k = 1; k < Math.abs(ai - bi); k++) {
            var ii = ai > bi ? bi + k : ai + k;
            if (arr[ii][j] != 0) {
                a = false;
                console.log("纵向坐标阻塞" + ii + "," + j);
                break;
            }
        }
    }
    return a;
};

LinkGame.prototype.drawline_h = function (i, aj, bj, n) { //画连接线
    var s = aj > bj ? bj : aj;
    $(".game .line").eq(n).css({
        top: 49 + this.blockHeight * [i - 1],
        left: 49 + this.blockWidth * [s - 1],
        width: Math.abs(aj - bj) * this.blockWidth,
        height: 2
    });
    setTimeout(function () {
        $(".game .line").eq(n).css({top: 0, left: 0, width: 0, height: 0})
    }, 50)
};
LinkGame.prototype.drawline_v = function (j, ai, bi, n) {//画连接线
    var s = ai > bi ? bi : ai;
    $(".game .line").eq(n).css({
        top: 49 + this.blockHeight * [s - 1],
        left: 49 + this.blockWidth * [j - 1],
        width: 2,
        height: Math.abs(ai - bi) * this.blockHeight
    });
    setTimeout(function () {
        $(".game .line").eq(n).css({top: 0, left: 0, width: 0, height: 0})
    }, 50)
};

function TimeWatcher(progressContainer, countDownTime, event) {
    this.myProgress = progressContainer;
    this.countDownTime = countDownTime;
    this.event = event;
    this.curCnt = countDownTime;
}

TimeWatcher.prototype.restart = function () {
    this.curCnt = this.countDownTime;
    this.myProgress.setAttribute("value", this.curCnt * 100 / this.countDownTime);
    if (timer != null) {
        clearInterval(timer);
    }
    let watcher = this;
    timer = setInterval(function () {
        if (watcher.curCnt <= 0) {
            clearInterval(timer);
            watcher.event();
        }
        watcher.myProgress.setAttribute("value", watcher.curCnt * 100 / watcher.countDownTime);
        watcher.curCnt--;
    }, 100);
};

TimeWatcher.prototype.stop = function () {
    if (timer != null) {
        clearInterval(timer);
    }
};


let game = new LinkGame(4, 6, $(".game"));

var selector = $("#config_select");
selector.change(function () {
    var text = selector.val().split("x");
    var v = text[0];
    var h = text[1];
    game = new LinkGame(v, h, $(".game"))
});

function restart() {
    $(".game").show();
    $(".game-over").hide();
    game.restart();
}



