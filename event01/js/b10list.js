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
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/0969be7a40fb80f98023953cc63d52b9.m4a'
    },
    {
        name: '双生花',
        artist: "阿七 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/0809555c40f5a29c80ca4dc61014ec57.mp3'
    },
    {
        name: '繁华落尽',
        artist: "是你的小白丶 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/a696f5be4046e3c28061acee5def8cd2.m4a'
    }, {
        name: '至此流落天涯',
        artist: "浪里白嫖 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/badcb5a24010ee41802f31754fac42d9.m4a'
    }, {
        name: '南山南',
        artist: "凉城旧梦 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/7ec4e57b40a7c22c80f01ca95c4eedda.m4a'
    }, {
        name: '新航路',
        artist: "向阳花开的地方 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/bbb41ad3400131f880703c27b39b987a.m4a'
    }, {
        name: '美しき者',
        artist: "阿钰 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/d320257c40a766c880c8bb4242e35a55.m4a'
    }, {
        name: 'When we are to you',
        artist: "阿七米德 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/698b54df400c8208802b449446a843d3.mp3'
    }, {
        name: '南山南',
        artist: "北婶 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/0ee3a27340f16582800391d845acb22a.mp3'
    },
    {
        name: '直到那一天',
        artist: "筱筱的sleep 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/3c9c20114015e4d480745ac931f5db28.m4a'
    },
    {
        name: '寒夜',
        artist: "寒江 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/f4c9173440b1779a80ab2e8876ae4a42.mp3'
    },
    {
        name: '蠢蠢',
        artist: "Demi 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/f4e25b9c40dc637b8086c2617c064f89.mp3'
    },
    {
        name: '消愁',
        artist: "凉城旧梦 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/90b6325d40e19a3e80413cc00a588ce3.m4a'
    },
    {
        name: '几分之几',
        artist: "小饭 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/802dda064022fe50803883c9d7987200.m4a'
    }, {
        name: '钢铁之翼',
        artist: "夕枫晚照 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/3078b66040467c218097ff384416e1a2.m4a'
    }, {
        name: '两只老虎',
        artist: "阿哲 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/186ed94840cf97be808a6000e570875c.m4a'
    }, {
        name: '胡事托',
        artist: "阿七米德 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/564026e640f196f28075b1c65837285a.mp3'
    }, {
        name: '斑马斑马',
        artist: "正义的坑坑哒 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/f264fa4940a5d5bb80ce43ff70209e99.m4a'
    }, {
        name: '降落伞',
        artist: "筱筱的sleep 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/a8eb243d4046d49f8078db3e845084f0.m4a'
    }, {
        name: '采茶纪',
        artist: "南铉Nexo 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/3a76682b40b2c43f80a5454728d83b1c.m4a'
    },
    {
        name: '石中花',
        artist: "夕枫晚照 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/1942836340d1b7b0809d41a87e5fa9a0.m4a'
    },
    {
        name: '等你下课',
        artist: "A-LAer 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/a34ac9fc4098e46a80f8048445b57977.m4a'
    }, {
        name: '霜雪千年',
        artist: "向阳花开的地方 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/521cf3a840ab46e880ba7b5c537eacf7.mp3'
    },
    {
        name: '水星记',
        artist: "触手天国 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/5759cfa140f1a2c28026cdd1f9b73520.m4a'
    },
    {
        name: '修炼爱情',
        artist: "橘子 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/870ea4de40a1462480a4fed21c3114aa.mp3'
    }, {
        name: '美杜莎的温柔',
        artist: "筱筱的sleep 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/21f42bcf40363d5480c2f66eb1dc448e.m4a'
    }, {
        name: '我和我的祖国',
        artist: "触角天国 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/59c81e7c4088322580fba9723d22de90.m4a'
    }, {
        name: '富士山下',
        artist: "阿钰 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/220c65f74007428880da5ac2c7a15c47.m4a'
    }, {
        name: '夜车',
        artist: "阿贝 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/0fba03c040840a5d809dead57d3489cb.mp3'
    }, {
        name: '神魂颠倒',
        artist: "北婶 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/a96f1eef406c0f278008ef08f204d298.m4a'
    }, {
        name: '寄明月',
        artist: "辰书 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/9a5c89cc40b4b24b803aefa6a34c9832.mp3'
    },
    {
        name: 'girl crush',
        artist: "Odelay 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/1dde942c408ac85e80a3ccd1862fa579.mp3'
    },
    {
        name: '牵丝戏',
        artist: "浪浪 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/3aa48e90407cdbad80c7a7764cb87557.mp3'
    },
    {
        name: '说散就散',
        artist: "滕王阁主 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/9f1d384040654fc680f1fc012fd3d8ea.m4a'
    }, {
        name: '小毛驴',
        artist: "寒江 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/d664cf9040ac7eff80b09646e9bcffb2.mp3'
    }, {
        name: '挪威的森林',
        artist: " DiDi 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/73fbe87a4025fe66806f87ecfa532d8f.m4a'
    }, {
        name: '逍遥叹',
        artist: " MZ 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/1fc04ae140a397138000bb01537b1b2a.m4a'
    }, {
        name: '爱与希望',
        artist: "光转琉璃 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/94664c164018e42b807294d2407d9a3f.m4a'
    }, {
        name: '女の子のスカートが突然めくれたりしないかなあ',
        artist: "13 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/3813b11d4008dba280a4ac4a04bc6a3b.m4a'
    }, {
        name: '体面',
        artist: "滕王阁主 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/c185c4f8402548b68004bbc38ee9a50b.m4a'
    },
    {
        name: '樱花草',
        artist: "浪浪 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/8fb45b1b403ef18f80ac431234664b53.mp3'
    },
    {
        name: '青春不败',
        artist: "Odelay 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/412bbdd040192ab580894cb17f4e4552.mp3'
    },
    {
        name: 'Ice Queen',
        artist: "阿钰 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/13a75e7d40a8e91280041b48c3060853.mp3'
    },
    {
        name: '漂洋过海来看你',
        artist: "光转琉璃 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/0604b734409ba3628062b767e839528d.m4a'
    },
    {
        name: '有何不可',
        artist: "DiDi 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/1ffd012a40bad0a380421c93edc249d7.m4a'
    }, {
        name: '左脸颊',
        artist: "世界第一帅娃 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/9097a3ec407f60f880b89acd6c715083.m4a'
    }, {
        name: 'GEEDの証',
        artist: "年糕 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/ae820064404037c080524b520662b187.m4a'
    }, {
        name: '成都',
        artist: "浪浪 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/6cfd1d7d40db083580fa7e77df0614a4.mp3'
    }, {
        name: '安静',
        artist: "小朋友初一 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/c7268b514030fc7b80736febfbf028ba.m4a'
    }, {
        name: '虫之诗',
        artist: "Odelay 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/a4e984d1406de74280bf9abcddc0f911.mp3'
    },
    {
        name: '欠一个拥抱',
        artist: "A-LAer 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/eea8716040ec664e80f07ea3868a2478.m4a'
    },
    {
        name: '糖',
        artist: "13 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/359858bd40589388801d8f4d690aac6c.mp3'
    },
    {
        name: '时光正好',
        artist: "xky_ike 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/9ff63d1240a839e98077ca1e921f16ef.m4a'
    },
    {
        name: '一人我饮酒醉',
        artist: "日益沉迷fxf 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/0908a569408b4da0800684174cb22086.m4a'
    },
    {
        name: '成长的路口',
        artist: "大象鼻子 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/374bb6ef406a427980d9202f1028b8c1.m4a'
    }, {
        name: '人质',
        artist: "初一 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/ab46a75e40f47ce9805181a7cfe78e1f.m4a'
    }, {
        name: '黑天鹅',
        artist: "玖恩 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/a18f6661403ca39080e74a562202fa84.m4a'
    }, {
        name: '红昭愿',
        artist: "南铉Nexo 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/b40964a840547f4c8003ee63f36f9ae9.m4a'
    }, {
        name: '小手拉大手',
        artist: "Yuki 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/f33fc5ce40e14816803146428b6189c3.m4a'
    }, {
        name: '掉了',
        artist: "MZ 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/0587b6f440f9a6a6804766fcca64e20e.m4a'
    },
    {
        name: '夜蝶',
        artist: "大A&13 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/30709db14011153b804f3f86a07c1f3d.m4a'
    },
    {
        name: '新贵妃醉酒',
        artist: "光转琉璃 完整版",
        url: 'https://bmob-cdn-7875.bmobpay.com/2019/12/19/86216c3e406ea0da80ae5fb2d90f0f47.mp3'
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
