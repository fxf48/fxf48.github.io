const coverUrl = "http://7xp06y.com1.z0.glb.clouddn.com/b10/FXF48logo.png";
const defaultArtist = "匿名 试听版";


var playerlist = [
    {
        name: '演员',
        artist: "匿名 试听版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/01%E6%BC%94%E5%91%98.flac'
    },
    {
        name: '双生花',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/02%E5%8F%8C%E7%94%9F%E8%8A%B1.flac'
    },
    {
        name: '繁华落尽',
        artist: "是你的小白丶 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/03%E3%80%8A%E7%B9%81%E5%8D%8E%E8%90%BD%E5%B0%BD%E3%80%8B.m4a'
    }, {
        name: '至此流落天涯',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/04%E8%87%B3%E6%AD%A4%E6%B5%81%E8%90%BD%E5%A4%A9%E6%B6%AF.flac'
    }, {
        name: '南山南',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/05%E5%8D%97%E5%B1%B1%E5%8D%97.flac'
    }, {
        name: '新航路',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/06%E6%96%B0%E8%88%AA%E8%B7%AF.flac'
    }, {
        name: '美しき者',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/07%E7%BE%8E%E3%81%97%E3%81%8D%E8%80%85.flac'
    }, {
        name: 'When we are to you',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/08When%20we%20are%20to%20you.flac'
    }, {
        name: '南山南',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/09%E5%8D%97%E5%B1%B1%E5%8D%97.flac'
    },
    {
        name: '直到那一天',
        artist: "筱筱的sleep 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/10%E3%80%8A%E7%9B%B4%E5%88%B0%E9%82%A3%E4%B8%80%E5%A4%A9%E3%80%8B.m4a'
    },
    {
        name: '寒夜',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/11%E5%AF%92%E5%A4%9C.flac'
    },
    {
        name: '蠢蠢',
        artist: "Demi 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/12%E3%80%8A%E8%A0%A2%E8%A0%A2%E3%80%8B.mp3'
    },
    {
        name: '消愁',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/13%E6%B6%88%E6%84%81.flac'
    },
    {
        name: '几分之几',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/14%E5%87%A0%E5%88%86%E4%B9%8B%E5%87%A0.flac'
    }, {
        name: '钢铁之翼',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/15%E9%92%A2%E9%93%81%E4%B9%8B%E7%BF%BC.flac'
    }, {
        name: '两只老虎',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/16%E4%B8%A4%E5%8F%AA%E8%80%81%E8%99%8E.flac'
    }, {
        name: '胡事托',
        artist: "阿七米德 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/17%E3%80%8A%E8%83%A1%E4%BA%8B%E6%89%98%E3%80%8B.mp3'
    }, {
        name: '斑马斑马',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/18%E6%96%91%E9%A9%AC%E6%96%91%E9%A9%AC.flac'
    }, {
        name: '降落伞',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/19%E9%99%8D%E8%90%BD%E4%BC%9E.flac'
    }, {
        name: '采茶纪',
        artist: "南铉Nexo 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/20%E3%80%8A%E9%87%87%E8%8C%B6%E7%BA%AA%E3%80%8B.m4a'
    },
    {
        name: '石中花',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/21%E7%9F%B3%E4%B8%AD%E8%8A%B1.flac'
    },
    {
        name: '等你下课',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/22%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE.flac'
    }, {
        name: '霜雪千年',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/23%E9%9C%9C%E9%9B%AA%E5%8D%83%E5%B9%B4.flac'
    },
    {
        name: '水星记',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/24%E6%B0%B4%E6%98%9F%E8%AE%B0.flac'
    },
    {
        name: '修炼爱情',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/25%E4%BF%AE%E7%82%BC%E7%88%B1%E6%83%85.flac'
    }, {
        name: '美杜莎的温柔',
        artist: "筱筱的sleep 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/26%E3%80%8A%E7%BE%8E%E6%9D%9C%E8%8E%8E%E7%9A%84%E6%B8%A9%E6%9F%94%E3%80%8B.m4a'
    }, {
        name: '我和我的祖国',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/27%E6%88%91%E5%92%8C%E6%88%91%E7%9A%84%E7%A5%96%E5%9B%BD.flac'
    }, {
        name: '富士山下',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/28%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B.flac'
    }, {
        name: '夜车',
        artist: "阿贝 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/29%E3%80%8A%E5%A4%9C%E8%BD%A6%E3%80%8B.mp3'
    }, {
        name: '神魂颠倒',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/30%E7%A5%9E%E9%AD%82%E9%A2%A0%E5%80%92.flac'
    }, {
        name: '寄明月',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/31%E5%AF%84%E6%98%8E%E6%9C%88.flac'
    },
    {
        name: 'girl crush',
        artist: "匿名 试听版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/32.mp3'
    },
    {
        name: '牵丝戏',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/33.mp3'
    },
    {
        name: '说散就散',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/34.mp3'
    }, {
        name: '小毛驴',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/35.mp3'
    }, {
        name: '挪威的森林',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/36.mp3'
    }, {
        name: '逍遥叹',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/37.mp3'
    }, {
        name: '爱与希望',
        artist: "光转琉璃 试听版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/38.mp3'
    }, {
        name: '女の子のスカートが突然めくれたりしないかなあ',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/39.mp3'
    }, {
        name: '体面',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/40.mp3'
    },
    {
        name: '樱花草',
        artist: "浪浪 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/041%E3%80%8A%E6%A8%B1%E8%8A%B1%E8%8D%89%E3%80%8B.mp3'
    },
    {
        name: '青春不败',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/42.mp3'
    },
    {
        name: 'Ice Queen',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/43.mp3'
    },
    {
        name: '漂洋过海来看你',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/44.mp3'
    },
    {
        name: '有何不可',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/45.mp3'
    }, {
        name: '左脸颊',
        artist: "世界第一帅娃 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/046%E3%80%8A%E5%B7%A6%E8%84%B8%E9%A2%8A%E3%80%8B.m4a'
    }, {
        name: 'GEEDの証',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/47.mp3'
    }, {
        name: '成都',
        artist: "浪浪 试听版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/48.mp3'
    }, {
        name: '安静',
        artist: "小朋友初一 试听版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/49.mp3'
    }, {
        name: '虫之诗',
        artist: "Odelay 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/050%E3%80%8A%E8%99%AB%E4%B9%8B%E8%AF%97%E3%80%8B.mp3'
    },
    {
        name: '欠一个拥抱',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/51.mp3'
    },
    {
        name: '糖',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/52.mp3'
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
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/55.mp3'
    }, {
        name: '人质',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/56.mp3'
    }, {
        name: '黑天鹅',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/57.mp3'
    }, {
        name: '红昭愿',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/58.mp3'
    }, {
        name: '小手拉大手',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/59.mp3'
    }, {
        name: '掉了',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/60.mp3'
    },
    {
        name: '夜蝶',
        artist: "大A&13 完整版",
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/full/061%E3%80%8A%E5%A4%9C%E8%9D%B6%E3%80%8B.m4a'
    },
    {
        name: '新贵妃醉酒',
        url: 'http://7xp06y.com1.z0.glb.clouddn.com/b10/62.mp3'
    }
];

for (var i = 0; i < playerlist.length; i++) {
    if (playerlist[i].artist === undefined) {
        playerlist[i].artist = defaultArtist;
    }
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

