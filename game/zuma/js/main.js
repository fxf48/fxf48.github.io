class Zuma {

    constructor(lv, gameContainer, colorList) {
        this.lv = lv;
        this.gameContainer = gameContainer;
        this.timer = null;
        this.colorList = colorList;
        this.init();
    }

    init() {
        this.state = States.START;
        this.ctx = this.gameContainer.getContext("2d");
        this.controller = new GameController(this);
        this.resize();
    }

    resize() {
        this.width = document.body.clientWidth;
        this.height = document.body.clientHeight;

        this.gameContainer.width = this.width;
        this.gameContainer.height = this.height;

        this.game = new Game(this.width, this.height, this.lv, this.colorList, this);
        this.game.draw(this.ctx);
    }

    rotateTo(x, y) {
        this.game.rotateTo(x, y);
    }

    rotateLeft() {
        this.game.rotateLeft();
    }

    rotateRight() {
        this.game.rotateRight();
    }

    start() {
        this.state = States.START;
        this.resize();
        window.cancelAnimationFrame(this.timer);
        this.timer = window.requestAnimationFrame(this.frame.bind(this));
    }

    frame() {
        if (this.state === States.RUNNING
            || this.state === States.START) {
            this.game.check();
            this.game.move();
        }
        this.game.draw(this.ctx);
        this.timer = window.requestAnimationFrame(this.frame.bind(this));
    }

    fire() {
        this.state = States.RUNNING;
        this.game.fire();
    }
}

class Game {
    constructor(cw, ch, lv, colorList, zuma) {
        this.cw = cw;
        this.ch = ch;
        this.lv = lv;
        this.player = new Player(cw, ch);
        this.prepareBall = null;
        this.moveBallList = [];
        this.ballList = [];
        this.colorList = colorList;
        this.zuma = zuma;
        this.ballR = 10;
        this.ballStartX = (cw - 320) / 2;
        this.ballStartY = ch / 2;
        this.frameCnt = 0;
        this.nextType = Math.floor(Math.random() * this.colorList.length);
        this.pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
        this.score = 0;
        const path = "M" + this.ballStartX + " " + this.ballStartY +
            "    A150 150 0 0 1 " + (cw - this.ballStartX) + " " + this.ballStartY +
            "    A125 125 0 0 1 " + (this.ballStartX + 50) + " " + this.ballStartY +
            "    A100 100 0 0 1 " + (cw - this.ballStartX - 50) + " " + this.ballStartY +
            "    A75 75 0 0 1 " + (this.ballStartX + 100) + " " + this.ballStartY;
        this.pathElement.setAttributeNS(null, 'd', path);
    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.cw, this.ch);
        if (this.zuma.state === States.START
            || this.zuma.state === States.RUNNING) {
            this.player.draw(ctx);
            if (this.prepareBall != null) {
                this.prepareBall.draw(ctx, this.colorList);
            }
            for (let i = 0; i < this.moveBallList.length; i++) {
                this.moveBallList[i].draw(ctx, this.colorList)
            }
            for (let i = 0; i < this.ballList.length; i++) {
                this.ballList[i].draw(ctx, this.colorList)
            }
            this.drawNextType(ctx);
        } else if (this.zuma.state === States.UPDATE) {
            this.drawGameUpdate(ctx);
        } else if (this.zuma.state === States.GAMEOVER) {
            this.drawGameOver(ctx);
        }
        this.drawTitle(ctx);
        this.drawScore(ctx);
    }

    drawGameUpdate(ctx) {
        ctx.save();
        ctx.font = '24px sans-serif';
        let text = "恭喜过关 点击开始下一关";
        ctx.fillText(text, (this.cw - ctx.measureText(text).width) / 2, this.ch / 2 - 100);
        ctx.restore();
    }

    drawGameOver(ctx) {
        ctx.save();
        ctx.font = '24px sans-serif';
        let text = "游戏结束 点击重新开始";
        ctx.fillText(text, (this.cw - ctx.measureText(text).width) / 2, this.ch / 2 - 100);
        ctx.restore();
    }

    drawTitle(ctx) {
        ctx.save();
        ctx.font = '14px sans-serif';
        let text = "关卡" + (this.lv + 1);
        ctx.fillText(text, 32, 32);
        ctx.restore();
    }

    drawNextType(ctx) {
        ctx.save();
        ctx.font = '14px sans-serif';
        let text = "下一个";
        ctx.fillText(text, (this.cw - ctx.measureText(text).width) / 2, 32);
        ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.cw / 2, 50, this.ballR, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = this.colorList[this.nextType];
        ctx.fill();
        ctx.restore();
    }

    drawScore(ctx) {
        ctx.save();
        ctx.font = '14px sans-serif';
        let text = "当前积分：" + this.score;
        ctx.fillText(text, this.cw - 32 - ctx.measureText(text).width, 32);
        ctx.restore();
    }

    rotateTo(x, y) {
        this.player.rotateTo(x, y);
        if (this.prepareBall !== null) {
            this.prepareBall = new MoveBall(this.player, this.prepareBall.ball.type, this.ballR);
        }
    }

    rotateLeft() {
        this.player.rotateLeft();
        if (this.prepareBall !== null) {
            this.prepareBall = new MoveBall(this.player, this.prepareBall.ball.type, this.ballR);
        }
    }

    rotateRight() {
        this.player.rotateRight();
        if (this.prepareBall !== null) {
            this.prepareBall = new MoveBall(this.player, this.prepareBall.ball.type, this.ballR);
        }
    }

    fire() {
        if (this.prepareBall != null) {
            this.moveBallList.push(this.prepareBall);
            this.prepareBall = null;
        }
    }

    move() {
        this.frameCnt++;
        if (this.frameCnt > 60) {
            this.frameCnt = 0;
        }
        for (let i = 0; i < this.moveBallList.length; i++) {
            this.moveBallList[i].move()
        }
        if (this.frameCnt === 0) {
            let type = Math.floor(Math.random() * this.colorList.length);
            this.ballList.push(new Ball(this.ballStartX, this.ballStartY, type, this.ballR));
            if (this.prepareBall === null) {
                this.prepareBall = new MoveBall(this.player, this.nextType, this.ballR);
                this.nextType = Math.floor(Math.random() * this.colorList.length);
            }
        }
        let ballListLen = this.ballList.length;
        let v = this.ballR * 2;
        for (let i = 0; i < ballListLen; i++) {
            let len = v * (ballListLen - i) + v * (this.frameCnt) / 60;
            let point = this.pathElement.getPointAtLength(len);
            this.ballList[i].moveTo(point.x, point.y)
        }

    }

    check() {
        //检测射出去的小球
        let nextMoveBallList = [];
        for (let i = 0; i < this.moveBallList.length; i++) {
            let ball = this.moveBallList[i];
            if (ball.ball.x < 0 || ball.ball.x > this.cw
                || ball.ball.y < 0 || ball.ball.y > this.ch) {
                //飞出屏幕
                continue;
            }
            let collision = false;
            let collisionIndex = 0;
            for (let j = 0; j < this.ballList.length; j++) {
                let ballInPath = this.ballList[j];
                let distance = Math.sqrt((ball.ball.x - ballInPath.x) * (ball.ball.x - ballInPath.x) + (ball.ball.y - ballInPath.y) * (ball.ball.y - ballInPath.y));
                if (distance < (ball.ball.r + ballInPath.r)) {
                    this.ballList.splice(j, 0, ball.ball);
                    //打到路径中
                    collision = true;
                    collisionIndex = j;
                    break
                }
            }
            if (collision) {
                //检测路径中的消除
                let cnt = 0;
                //碰撞点向前查
                let startIndex = collisionIndex;
                for (let j = collisionIndex; j >= 0; j--) {
                    if (ball.ball.type === this.ballList[j].type) {
                        startIndex = j;
                        cnt++;
                    } else {
                        break;
                    }
                }
                //碰撞点向后查
                for (let j = collisionIndex + 1; j < this.ballList.length; j++) {
                    if (ball.ball.type === this.ballList[j].type) {
                        cnt++;
                    } else {
                        break;
                    }
                }
                //消除符合条件的并计算积分
                if (cnt > (this.lv + 3)) {
                    this.score += cnt;
                    this.ballList.splice(startIndex, cnt);
                }
                continue
            }
            nextMoveBallList.push(ball);
        }
        this.moveBallList = nextMoveBallList;

        //检测路径是否触底
        let ballListLen = this.ballList.length;
        let v = this.ballR * 2;
        let pahtLen = v * ballListLen;
        if (pahtLen >= this.pathElement.getTotalLength()) {
            this.zuma.state = States.GAMEOVER;
        }
        //检测是否达到积分
        if (this.score >= 50) {
            this.zuma.state = States.UPDATE;
        }
    }
}


class MoveBall {
    constructor(player, type, ballR) {
        this.rad = player.r;
        const v = 8;
        this.vr = v;
        this.r = (player.h + ballR) * 0.5;
        this.centerX = player.centerX;
        this.centerY = player.centerY;
        let x = player.centerX - Math.sin(this.rad) * this.r;
        let y = player.centerY + Math.cos(this.rad) * this.r;
        this.ball = new Ball(x, y, type, ballR);
    }

    draw(ctx, colorList) {
        ctx.save();
        this.ball.draw(ctx, colorList);
        ctx.restore();
    }

    move() {
        this.r += this.vr;
        let x = this.centerX - Math.sin(this.rad) * this.r;
        let y = this.centerY + Math.cos(this.rad) * this.r;
        this.ball.x = x;
        this.ball.y = y;
    }
}

class Ball {
    constructor(x, y, type, r) {
        this.r = r;
        this.x = x;
        this.y = y;
        this.type = type;
    }

    draw(ctx, colorList) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = colorList[this.type];
        ctx.fill();
        ctx.restore();
    }

    moveTo(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Player {
    constructor(cw, ch) {
        this.img = new Image();
        this.img.src = "../linkplay/images/fxf/11.jpg";
        this.w = 80;
        this.h = 80;
        this.r = 0;
        this.x = (cw - this.w) * 0.5;
        this.y = (ch - this.h) * 0.5;
        this.centerX = cw * 0.5;
        this.centerY = ch * 0.5;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.centerX, this.centerY);
        ctx.rotate(this.r);
        ctx.translate(-this.centerX, -this.centerY);
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        ctx.restore();
    }

    rotateTo(x, y) {
        if (y > this.centerY) {
            this.r = Math.atan((x - this.centerX) / (this.centerY - y));
        } else {
            this.r = Math.atan((x - this.centerX) / (this.centerY - y)) + Math.PI;
        }
    }

    rotateLeft() {
        this.r += Math.PI / 45;
    }

    rotateRight() {
        this.r -= Math.PI / 45;
    }
}

const States = {
    START: 1,
    RUNNING: 2,
    STOP: 3,
    GAMEOVER: 4,
    UPDATE: 5
};

class GameController {

    constructor(zuma) {
        let g = this;
        window.onresize = function () {
            zuma.resize();
        };
        let isDrag = false;
        let timerFlag = null;


        let touchStartClientX, touchStartClientY;

        function onTouchStart(event) {
            event.preventDefault();
            touchStartClientX = event.touches[0].clientX;
            touchStartClientY = event.touches[0].clientY;
            timerFlag = setTimeout(function () {
                isDrag = true;
            }, 500)
        }

        function onTouchMove(event) {
            event.preventDefault();
            let touchX = event.changedTouches[0].clientX;
            let touchY = event.changedTouches[0].clientY;
            zuma.rotateTo(touchX, touchY)
        }

        function onTouchEnd(event) {
            event.preventDefault();
            clearTimeout(timerFlag);
            if (isDrag) {
                isDrag = false;
                return;
            }
            g.onClick(zuma);
        }

        zuma.gameContainer.addEventListener("touchend", onTouchEnd);
        zuma.gameContainer.addEventListener("touchstart", onTouchStart);
        zuma.gameContainer.addEventListener("touchmove", onTouchMove);


        window.addEventListener('keydown', function (event) {
            switch (event.keyCode) {
                // 注册空格键发射事件
                case 32 :
                    g.onClick(zuma);
                    break;
                case 37://Left
                    zuma.rotateLeft()
                    break;
                case 39://Right
                    zuma.rotateRight()
                    break;
            }
        });
    }


    onClick(zuma) {
        if (zuma.state === States.GAMEOVER) { // 游戏结束时
            zuma.start(zuma.lv)
        } else if (zuma.state === States.UPDATE) { // 进入下一关
            zuma.start(++zuma.lv)
        } else {
            zuma.fire()
        }
    }
}

var zuma = new Zuma(0, document.getElementById("gameContainer"),
    [
        "#93cbec",
        "#9385bd",
        "#eea002",
        "#b2d717",
    ]);
window.onload = function () {
    zuma.start();
}



