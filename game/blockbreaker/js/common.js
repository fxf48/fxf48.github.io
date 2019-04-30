/* by：弦云孤赫——David Yang
** github - https://github.com/yangyunhe369
*/
// 封装打印日志方法
const log = console.log.bind(console)
// 生成图片对象方法
const imageFromPath = function (src) {
    let img = new Image();
    img.src = './images/' + src;
    return img
}
// 检测页面不可见时自动暂停游戏方法
const isPageHidden = function (game) {
    let hiddenProperty = 'hidden' in document ? 'hidden' :
        'webkitHidden' in document ? 'webkitHidden' :
            'mozHidden' in document ? 'mozHidden' :
                null
    let visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange')
    // 监听页面是否可见事件
    document.addEventListener(visibilityChangeEvent, function () {
        if (!document[hiddenProperty]) {  // 可见状态
            setTimeout(function () {
                game.state = game.state_RUNNING
            }, 100)
        } else { // 不可见状态
            game.state = game.state_STOP
        }
    })
}
// 图片素材路径
const allImg = {
    background: 'background.png',
    paddle: 'paddle.png',
    ball: 'ball.jpg',
    block1: 'block1.png',
    block2: 'block2.png',
}
const callTextList = [
    "有一些 心里话",
    "想要打给你",
    "冯晓菲",
    "就是你 最可爱的你",
    "喜欢你 喜欢你 就是喜欢你",
    "拳打芭 jo踢袋 款尚不倒闭",
    "有了你 生命里 全都是奇迹",
    "失去你 不再有 灰推GDP",
    "让我们 再继续 玩更多游戏",
    "全宇宙 所有人 我最喜欢你",
    "我",
    "最",
    "喜",
    "欢",
    "你"
];