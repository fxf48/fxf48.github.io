// 游戏主函数
var canvas = document.getElementById("gameContainer");
let width = window.screen.width;
let height = document.body.clientHeight;
if (window.screen.width < 560) {
    document.getElementById("control-tips").style.display = "none"
} else {
    document.getElementById("control-tips").innerText = "移动←→ 暂停P 下一关N 开始space"
    document.getElementById("control-tips").style.display = "block";
    if (width > 1000) {
        width = 1000;
    }
    if (height > 500) {
        height = 500;
    } else {
        height -= 100;
    }
}
canvas.width = width;
canvas.height = height;

let _main = {
    LV: 1,                               // 初始关卡
    MAXLV: 2,                            // 最终关卡
    scene: null,                         // 场景对象
    blockList: null,                     // 所有砖块对象集合
    danmuList: [],                     // 所有砖块对象集合
    ball: null,                          // 小球对象
    paddle: null,                        // 挡板对象
    score: null,                         // 计分板对象
    ball_x: width / 2 - 9,                // 小球默认x轴坐标
    ball_y: height - 68,                         // 小球默认y轴坐标
    paddle_x: width / 2 - 51,            // 挡板默认x轴坐标
    paddle_y: height - 50,                       // 挡板默认y轴坐标
    score_x: 10,                         // 计分板默认x轴坐标
    score_y: 30,                         // 计分板默认y轴坐标
    fps: 60,                             // 游戏运行帧数
    game: null,                          // 游戏主要逻辑对象
    gameContainer: canvas,                // 游戏绘制区域
    start: function () {                 // 游戏启动函数
        let self = this;
        /**
         * 生成场景（根据游戏难度级别不同，生成不同关卡）
         */
        self.scene = new Scene(self);
        // 实例化所有砖块对象集合
        self.blockList = self.scene.initBlockList();
        /**
         * 小球
         */
        self.ball = new Ball(self);
        /**
         * 挡板
         */
        self.paddle = new Paddle(self);
        /**
         * 计分板
         */
        self.score = new Score(self);
        /**
         * 游戏主要逻辑
         */
        self.game = new Game(self);
        /**
         * 游戏初始化
         */
        self.game.init(self)
    }
};
_main.start();
