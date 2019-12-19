const coverUrl = "img/FXF48logo.png";
const top10list = [
    {
        name: '时光正好',
        artist: "xky_ike 完整版",
        url: 'music/053.m4a'
    }, {
        name: '夜车',
        artist: "阿贝 完整版",
        url: 'music/29.mp3'
    }, {
        name: '蠢蠢',
        artist: "Demi 完整版",
        url: 'music/12.mp3'
    }, {
        name: '直到那一天',
        artist: "筱筱的sleep 完整版",
        url: 'music/10.m4a'
    }, {
        name: '爱与希望',
        artist: "光转琉璃 完整版",
        url: 'music/038.m4a'
    }, {
        name: '繁华落尽',
        artist: "是你的小白丶 完整版",
        url: 'music/03.m4a'
    }, {
        name: '胡事托',
        artist: "阿七米德 完整版",
        url: 'music/17.mp3'
    }, {
        name: '降落伞',
        artist: "筱筱的sleep 完整版",
        url: 'music/19.m4a'
    }, {
        name: 'Ice Queen',
        artist: "阿钰 完整版",
        url: 'music/043.mp3'
    }, {
        name: '美杜莎的温柔',
        artist: "筱筱的sleep 完整版",
        url: 'music/26.m4a'
    }, {
        name: '梦与星光的海上（非参赛作品）',
        artist: "冯·小奶音·晓·攻气十足·菲",
        url: ' music/solocut.mp3'
    }


];

for (var i = 0; i < top10list.length; i++) {
    if (top10list[i].cover === undefined) {
        top10list[i].cover = coverUrl;
    }
    var ap1 = new APlayer({
        container: document.getElementById('aplayer' + (i + 1)),
        preload: 'none',
        audio: top10list[i]
    });
}


const playerlist = [
    {
        name: '演员',
        artist: "小朋友初一 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/b38917ea402acd5e8027fdbb6b7038c5.m4a'
    },
    {
        name: '双生花',
        artist: "阿七 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/3c38d841409dade38059fdda56578a03.mp3'
    },
    {
        name: '繁华落尽',
        artist: "是你的小白丶 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/f354eebe409df6748068c6af8d4e1026.m4a'
    }, {
        name: '至此流落天涯',
        artist: "浪里白嫖 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/bc10b09d40ef5fee800477903464cc83.m4a'
    }, {
        name: '南山南',
        artist: "凉城旧梦 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/8bde5926409cecff8046a2192063303c.m4a'
    }, {
        name: '新航路',
        artist: "向阳花开的地方 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/850c6abd40885f0380aa8c05b584baba.m4a'
    }, {
        name: '美しき者',
        artist: "阿钰 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/1e27ef6340dd1773804e4ef1252a04f2.m4a'
    }, {
        name: 'When we are to you',
        artist: "阿七米德 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/5657787240b533228026aaf2f8a930e1.mp3'
    }, {
        name: '南山南',
        artist: "北婶 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/04fdc31940ca7f5180187815d2840ca5.mp3'
    },
    {
        name: '直到那一天',
        artist: "筱筱的sleep 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/e874670d40f8d39880e870cd79364430.m4a'
    },
    {
        name: '寒夜',
        artist: "寒江 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/9b6d5abd40a5894880b56d1ea2fa4f78.mp3'
    },
    {
        name: '蠢蠢',
        artist: "Demi 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/748a275540ba128e80219caa5aed29bf.mp3'
    },
    {
        name: '消愁',
        artist: "凉城旧梦 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/9b3f276b409cad7780f047bf0bbc0fb2.m4a'
    },
    {
        name: '几分之几',
        artist: "小饭 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/12b55b99402167788076c71f720fb354.m4a'
    }, {
        name: '钢铁之翼',
        artist: "夕枫晚照 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/b843e53240a1672980ef988116c27ef1.m4a'
    }, {
        name: '两只老虎',
        artist: "阿哲 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/b981bce940303bcb802e864de52e8919.m4a'
    }, {
        name: '胡事托',
        artist: "阿七米德 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/2bce38e740a8ebeb807e219220d84d9f.mp3'
    }, {
        name: '斑马斑马',
        artist: "正义的坑坑哒 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/dc8266394093fbc580cb3d91bd9b72ed.m4a'
    }, {
        name: '降落伞',
        artist: "筱筱的sleep 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/3b0fcd4540cd2bc58070a7a1c3947f42.m4a'
    }, {
        name: '采茶纪',
        artist: "南铉Nexo 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/c40f43a0408eb48c80f307d3fc68e8c5.m4a'
    },
    {
        name: '石中花',
        artist: "夕枫晚照 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/a538eec340c33bb380b5ebea1ff81c79.m4a'
    },
    {
        name: '等你下课',
        artist: "A-LAer 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/f902affa40d22a33809572ddcfaa3fb9.m4a'
    }, {
        name: '霜雪千年',
        artist: "向阳花开的地方 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/334641fe4087ffc98069b8aa0be89852.mp3'
    },
    {
        name: '水星记',
        artist: "触手天国 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/3c6c352d404b60ee800cb876e8859bd9.m4a'
    },
    {
        name: '修炼爱情',
        artist: "橘子 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/4d21781c40e7ebe680daee27156aaa80.mp3'
    }, {
        name: '美杜莎的温柔',
        artist: "筱筱的sleep 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/6a232d9d40a58d328051734bfc51de72.m4a'
    }, {
        name: '我和我的祖国',
        artist: "触角天国 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/a6a8228040bab3e48071ea2e0e02e816.m4a'
    }, {
        name: '富士山下',
        artist: "阿钰 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/6b7fc8f240d8091680d9285e62245148.m4a'
    }, {
        name: '夜车',
        artist: "阿贝 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/12482e8040f559f48096752748530b2a.mp3'
    }, {
        name: '神魂颠倒',
        artist: "北婶 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/13152f0040a7597280a49019e687ebf0.m4a'
    }, {
        name: '寄明月',
        artist: "辰书 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/fb446aab40504abf80f4fab8f71f528e.mp3'
    },
    {
        name: 'girl crush',
        artist: "Odelay 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/17dc279640871f9780b942a01fa96829.mp3'
    },
    {
        name: '牵丝戏',
        artist: "浪浪 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/375dccbb406651ff80ce956b61b8895d.mp3'
    },
    {
        name: '说散就散',
        artist: "滕王阁主 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/1908e5f940b53f0a80fb5dfaa98f8726.m4a'
    }, {
        name: '小毛驴',
        artist: "寒江 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/b31f6fda40a677ad8052685ec8de7e68.mp3'
    }, {
        name: '挪威的森林',
        artist: " DiDi 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/fe3d02fb4085559c800ae74093d2072b.m4a'
    }, {
        name: '逍遥叹',
        artist: " MZ 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/7802bc30406a97ce80f55ee4d70de6bb.m4a'
    }, {
        name: '爱与希望',
        artist: "光转琉璃 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/b0c9a23a407ee49480010f2d9e2883c0.m4a'
    }, {
        name: '女の子のスカートが突然めくれたりしないかなあ',
        artist: "13 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/5536e20d40a4602380aaf88ee7379a3a.m4a'
    }, {
        name: '体面',
        artist: "滕王阁主 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/ce169546401c30f580a78b0fe85e2774.m4a'
    },
    {
        name: '樱花草',
        artist: "浪浪 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/5f7f782c40c23312803a3445fac5b5ac.mp3'
    },
    {
        name: '青春不败',
        artist: "Odelay 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/5b0773bf405692a480539cefc4f0cba9.mp3'
    },
    {
        name: 'Ice Queen',
        artist: "阿钰 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/de5de0a140bda07a804f243331eca3e9.mp3'
    },
    {
        name: '漂洋过海来看你',
        artist: "光转琉璃 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/c7b267784050e71b80aa6abea430f33c.m4a'
    },
    {
        name: '有何不可',
        artist: "DiDi 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/2924795840a84bfe80fb175453ff4d53.m4a'
    }, {
        name: '左脸颊',
        artist: "世界第一帅娃 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/fed6cecf402cedd38072032f6c6b55a7.m4a'
    }, {
        name: 'GEEDの証',
        artist: "年糕 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/a58d9e84408d22f68041b88f722561cc.m4a'
    }, {
        name: '成都',
        artist: "浪浪 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/8724bb0640f55203800fd0e73cee56cc.mp3'
    }, {
        name: '安静',
        artist: "小朋友初一 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/50e20bf940043c3a806a310474eeafba.m4a'
    }, {
        name: '虫之诗',
        artist: "Odelay 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/8aa6850c405aff54800489426324f0d5.mp3'
    },
    {
        name: '欠一个拥抱',
        artist: "A-LAer 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/1d6d18184063f516808e318acd1c2a99.m4a'
    },
    {
        name: '糖',
        artist: "13 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/437239e940d9339680890a41699372f1.mp3'
    },
    {
        name: '时光正好',
        artist: "xky_ike 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/1a10f00e40421ce2806cf8405fccae04.m4a'
    },
    {
        name: '一人我饮酒醉',
        artist: "日益沉迷fxf 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/a1754f0b40e1d08b80057fd53044aee4.m4a'
    },
    {
        name: '成长的路口',
        artist: "大象鼻子 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/92d68163404b07ab80007733841d4971.m4a'
    }, {
        name: '人质',
        artist: "初一 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/94f2fba44018104a801a6fc886260dd3.m4a'
    }, {
        name: '黑天鹅',
        artist: "玖恩 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/10f8431240975b1c8076ebc769f1258e.m4a'
    }, {
        name: '红昭愿',
        artist: "南铉Nexo 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/9cf123584002da8b804d15db6bb0d373.m4a'
    }, {
        name: '小手拉大手',
        artist: "Yuki 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/6f49df8d40251b2b8079a99cff4f7c68.m4a'
    }, {
        name: '掉了',
        artist: "MZ 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/1831cb6840e5debb8050798f7a5144f4.m4a'
    },
    {
        name: '夜蝶',
        artist: "大A&13 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/3394ffc8405a619780ee3c4e982f4da3.m4a'
    },
    {
        name: '新贵妃醉酒',
        artist: "光转琉璃 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/cc47200140a8f2d9801b6415af1359cf.mp3'
    }
];

for (var i = 0; i < playerlist.length; i++) {
    if (playerlist[i].cover === undefined) {
        playerlist[i].cover = coverUrl;
    }
}
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: false,
    listMaxHeight: '120px',
    audio: playerlist
});
