const coverUrl = "img/FXF48logo.png";


const playerlist = [
    {
        name: '演员',
        artist: "小朋友初一 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/01%E3%80%8A%E6%BC%94%E5%91%98%E3%80%8B.m4a'
    },
    {
        name: '双生花',
        artist: "阿七 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/02%E3%80%8A%E5%8F%8C%E7%94%9F%E8%8A%B1%E3%80%8B.mp3'
    },
    {
        name: '繁华落尽',
        artist: "是你的小白丶 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/03%E3%80%8A%E7%B9%81%E5%8D%8E%E8%90%BD%E5%B0%BD%E3%80%8B.m4a'
    }, {
        name: '至此流落天涯',
        artist: "浪里白嫖 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/04%E3%80%8A%E8%87%B3%E6%AD%A4%E6%B5%81%E5%B9%B4%E5%A4%A9%E6%B6%AF%E3%80%8B.m4a'
    }, {
        name: '南山南',
        artist: "凉城旧梦 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/05%E3%80%8A%E5%8D%97%E5%B1%B1%E5%8D%97%E3%80%8B.m4a'
    }, {
        name: '新航路',
        artist: "向阳花开的地方 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/06%E3%80%8A%E6%96%B0%E8%88%AA%E8%B7%AF%E3%80%8B.m4a'
    }, {
        name: '美しき者',
        artist: "阿钰 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/07%E3%80%8A%E7%BE%8E%E3%81%97%E3%81%8D%E8%80%85%E3%80%8B.m4a'
    }, {
        name: 'When we are to you',
        artist: "阿七米德 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/08%E3%80%8AWhen%20we%20are%20to%20you%E3%80%8B.mp3'
    }, {
        name: '南山南',
        artist: "北婶 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/09%E3%80%8A%E5%8D%97%E5%B1%B1%E5%8D%97%E3%80%8B.mp3'
    },
    {
        name: '直到那一天',
        artist: "筱筱的sleep 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/10%E3%80%8A%E7%9B%B4%E5%88%B0%E9%82%A3%E4%B8%80%E5%A4%A9%E3%80%8B.m4a'
    },
    {
        name: '寒夜',
        artist: "寒江 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/11%E3%80%8A%E5%AF%92%E5%A4%9C%E3%80%8B.mp3'
    },
    {
        name: '蠢蠢',
        artist: "Demi 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/12%E3%80%8A%E8%A0%A2%E8%A0%A2%E3%80%8B.mp3'
    },
    {
        name: '消愁',
        artist: "凉城旧梦 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/13%E3%80%8A%E6%B6%88%E6%84%81%E3%80%8B.m4a'
    },
    {
        name: '几分之几',
        artist: "小饭 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/14%E3%80%8A%E5%87%A0%E5%88%86%E4%B9%8B%E5%87%A0%E3%80%8B.m4a'
    }, {
        name: '钢铁之翼',
        artist: "夕枫晚照 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/15%E3%80%8A%E9%92%A2%E9%93%81%E4%B9%8B%E7%BF%BC%E3%80%8B.m4a'
    }, {
        name: '两只老虎',
        artist: "阿哲 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/16%E3%80%8A%E4%B8%A4%E5%8F%AA%E8%80%81%E8%99%8E%E3%80%8B.m4a'
    }, {
        name: '胡事托',
        artist: "阿七米德 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/17%E3%80%8A%E8%83%A1%E4%BA%8B%E6%89%98%E3%80%8B.mp3'
    }, {
        name: '斑马斑马',
        artist: "正义的坑坑哒 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/18%E3%80%8A%E6%96%91%E9%A9%AC%E6%96%91%E9%A9%AC%E3%80%8B.m4a'
    }, {
        name: '降落伞',
        artist: "筱筱的sleep 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/19%E3%80%8A%E9%99%8D%E8%90%BD%E4%BC%9E%E3%80%8B.m4a'
    }, {
        name: '采茶纪',
        artist: "南铉Nexo 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/20%E3%80%8A%E9%87%87%E8%8C%B6%E7%BA%AA%E3%80%8B.m4a'
    },
    {
        name: '石中花',
        artist: "夕枫晚照 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/21%E3%80%8A%E7%9F%B3%E4%B8%AD%E8%8A%B1%E3%80%8B.m4a'
    },
    {
        name: '等你下课',
        artist: "A-LAer 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/22%E3%80%8A%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%E3%80%8B.m4a'
    }, {
        name: '霜雪千年',
        artist: "向阳花开的地方 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/23%E3%80%8A%E9%9C%9C%E9%9B%AA%E5%8D%83%E5%B9%B4%E3%80%8B.mp3'
    },
    {
        name: '水星记',
        artist: "触手天国 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/24%E3%80%8A%E6%B0%B4%E6%98%9F%E8%AE%B0%E3%80%8B.m4a'
    },
    {
        name: '修炼爱情',
        artist: "橘子 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/25%E3%80%8A%E4%BF%AE%E7%82%BC%E7%88%B1%E6%83%85%E3%80%8B.mp3'
    }, {
        name: '美杜莎的温柔',
        artist: "筱筱的sleep 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/26%E3%80%8A%E7%BE%8E%E6%9D%9C%E8%8E%8E%E7%9A%84%E6%B8%A9%E6%9F%94%E3%80%8B.m4a'
    }, {
        name: '我和我的祖国',
        artist: "触角天国 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/27%E3%80%8A%E6%88%91%E5%92%8C%E6%88%91%E7%9A%84%E7%A5%96%E5%9B%BD%E3%80%8B.m4a'
    }, {
        name: '富士山下',
        artist: "阿钰 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/28%E3%80%8A%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B%E3%80%8B.m4a'
    }, {
        name: '夜车',
        artist: "阿贝 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/29%E3%80%8A%E5%A4%9C%E8%BD%A6%E3%80%8B.mp3'
    }, {
        name: '神魂颠倒',
        artist: "北婶 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/30%E3%80%8A%E7%A5%9E%E9%AD%82%E9%A2%A0%E5%80%92%E3%80%8B.m4a'
    }, {
        name: '寄明月',
        artist: "辰书 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/31%E3%80%8A%E5%AF%84%E6%98%8E%E6%9C%88%E3%80%8B.mp3'
    },
    {
        name: 'girl crush',
        artist: "Odelay 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/32%E3%80%8Agirl%20crush%E3%80%8B.mp3'
    },
    {
        name: '牵丝戏',
        artist: "浪浪 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/33%E3%80%8A%E7%89%B5%E4%B8%9D%E6%88%8F%E3%80%8B.mp3'
    },
    {
        name: '说散就散',
        artist: "滕王阁主 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/34%E3%80%8A%E8%AF%B4%E6%95%A3%E5%B0%B1%E6%95%A3%E3%80%8B.m4a'
    }, {
        name: '小毛驴',
        artist: "寒江 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/35%E3%80%8A%E5%B0%8F%E6%AF%9B%E9%A9%B4%E3%80%8B.mp3'
    }, {
        name: '挪威的森林',
        artist: " DiDi 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/36%E3%80%8A%E6%8C%AA%E5%A8%81%E7%9A%84%E6%A3%AE%E6%9E%97%E3%80%8B.m4'
    }, {
        name: '逍遥叹',
        artist: " MZ 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/37%E3%80%8A%E9%80%8D%E9%81%A5%E5%8F%B9%E3%80%8B.m4a'
    }, {
        name: '爱与希望',
        artist: "光转琉璃 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/038%E3%80%8A%E7%88%B1%E4%B8%8E%E5%B8%8C%E6%9C%9B%E3%80%8B.m4a'
    }, {
        name: '女の子のスカートが突然めくれたりしないかなあ',
        artist: "13 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/039%E3%80%8A%E5%A5%B3%E3%81%AE%E5%AD%90%E3%81%AE%E3%82%B9%E3%82%AB%E3%83%BC%E3%83%88%E3%81%8C%E7%AA%81%E7%84%B6%E3%82%81%E3%81%8F%E3%82%8C%E3%81%9F%E3%82%8A%E3%81%97%E3%81%AA%E3%81%84%E3%81%8B%E3%81%AA%E3%81%82%E3%80%8B.m4a'
    }, {
        name: '体面',
        artist: "滕王阁主 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/040%E3%80%8A%E4%BD%93%E9%9D%A2%E3%80%8B.m4a'
    },
    {
        name: '樱花草',
        artist: "浪浪 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/041%E3%80%8A%E6%A8%B1%E8%8A%B1%E8%8D%89%E3%80%8B.mp3'
    },
    {
        name: '青春不败',
        artist: "Odelay 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/042%E3%80%8A%E9%9D%92%E6%98%A5%E4%B8%8D%E8%B4%A5%E3%80%8B.mp3'
    },
    {
        name: 'Ice Queen',
        artist: "阿钰 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/043%E3%80%8AICE%20QUEEN%E3%80%8B.mp3'
    },
    {
        name: '漂洋过海来看你',
        artist: "光转琉璃 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/044%E3%80%8A%E6%BC%82%E6%B4%8B%E8%BF%87%E6%B5%B7%E6%9D%A5%E7%9C%8B%E4%BD%A0%E3%80%8B.m4a'
    },
    {
        name: '有何不可',
        artist: "DiDi 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/045%E3%80%8A%E6%9C%89%E4%BD%95%E4%B8%8D%E5%8F%AF%E3%80%8B.m4a'
    }, {
        name: '左脸颊',
        artist: "世界第一帅娃 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/046%E3%80%8A%E5%B7%A6%E8%84%B8%E9%A2%8A%E3%80%8B.m4a'
    }, {
        name: 'GEEDの証',
        artist: "年糕 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/047%E3%80%8AGEED%E3%81%AE%E8%A8%BC%E3%80%8B.m4a'
    }, {
        name: '成都',
        artist: "浪浪 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/048%E3%80%8A%E6%88%90%E9%83%BD%E3%80%8B.mp3'
    }, {
        name: '安静',
        artist: "小朋友初一 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/049%E3%80%8A%E5%AE%89%E9%9D%99%E3%80%8B.m4a'
    }, {
        name: '虫之诗',
        artist: "Odelay 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/050%E3%80%8A%E8%99%AB%E4%B9%8B%E8%AF%97%E3%80%8B.mp3'
    },
    {
        name: '欠一个拥抱',
        artist: "A-LAer 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/051%E3%80%8A%E6%AC%A0%E4%B8%80%E4%B8%AA%E6%8B%A5%E6%8A%B1%E3%80%8B.m4a'
    },
    {
        name: '糖',
        artist: "13 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/052%E3%80%8A%E7%B3%96%E3%80%8B.mp3'
    },
    {
        name: '时光正好',
        artist: "xky_ike 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/053%E3%80%8A%E6%97%B6%E5%85%89%E6%AD%A3%E5%A5%BD%E3%80%8B.m4a'
    },
    {
        name: '一人我饮酒醉',
        artist: "日益沉迷fxf 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/054%E3%80%8A%E4%B8%80%E4%BA%BA%E6%88%91%E9%A5%AE%E9%85%92%E9%86%89%E3%80%8B.m4a'
    },
    {
        name: '成长的路口',
        artist: "大象鼻子 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/055%E3%80%8A%E6%88%90%E9%95%BF%E7%9A%84%E8%B7%AF%E5%8F%A3%E3%80%8B.m4a'
    }, {
        name: '人质',
        artist: "初一 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/056%E3%80%8A%E4%BA%BA%E8%B4%A8%E3%80%8B.m4a'
    }, {
        name: '黑天鹅',
        artist: "玖恩 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/057%E3%80%8A%E9%BB%91%E5%A4%A9%E9%B9%85%E3%80%8B.m4a'
    }, {
        name: '红昭愿',
        artist: "南铉Nexo 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/058%E3%80%8A%E7%BA%A2%E6%98%AD%E6%84%BF%E3%80%8B.m4a'
    }, {
        name: '小手拉大手',
        artist: "Yuki 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/059%E3%80%8A%E5%B0%8F%E6%89%8B%E6%8B%89%E5%A4%A7%E6%89%8B%E3%80%8B.m4a'
    }, {
        name: '掉了',
        artist: "MZ 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/060%E3%80%8A%E6%8E%89%E4%BA%86%E3%80%8B.m4a'
    },
    {
        name: '夜蝶',
        artist: "大A&13 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/061%E3%80%8A%E5%A4%9C%E8%9D%B6%E3%80%8B.m4a'
    },
    {
        name: '新贵妃醉酒',
        artist: "光转琉璃 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/062%E3%80%8A%E6%96%B0%E8%B4%B5%E5%A6%83%E9%86%89%E9%85%92%E3%80%8B.mp3'
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
