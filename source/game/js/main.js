Bmob.initialize("001e1f44748bc68b93e1872bdf1750cc", "1164553d68b767c5de72a5042c3c7bc9");
var GameScore = Bmob.Object.extend("ScoreRecord");
var localScore = 0;
window.onresize = function () {

    if ($("#ranking").css("display") === "block") {
        showRank();
    }
    if ($("#inputId").css("display") === "block") {
        showCommitScore();
    }
}

function showCommitScore() {
    var inputId = $("#inputId")
    var canvasWidth = $("#canvas").width();
    var canvasHeight = $("#canvas").height();
    var scaleX = canvasWidth / 450;
    var scaleY = canvasHeight / 700;
    inputId.css('width', canvasWidth);
    inputId.css('height', 135 * scaleY + "px");
    inputId.css('margin-top', -210 * scaleY + "px");
    inputId.css('margin-left', -canvasWidth / 2 + "px");
    inputId.css('line-height', 34 * scaleY + "px");
    inputId.show();
};

function showRank() {
    var rankingMask = $("#ranking");

    var ranks = $(".Rank");
    var ranksScore = $(".RankScore");
    var myRank = $("#myRank");

    var canvasWidth = $("#canvas").width();
    var canvasHeight = $("#canvas").height();

    var scaleX = canvasWidth / 450;
    var scaleY = canvasHeight / 700;
    var marginTop = 255 * scaleY;
    rankingMask.css('width', canvasWidth);
    rankingMask.css('height', canvasHeight);
    rankingMask.css('margin-top', -marginTop + "px");
    rankingMask.css('margin-left', -canvasWidth / 2 + "px");
    rankingMask.css('line-height', 60 * scaleY + "px");

    var kkRankName = $("#kkRankName");
    kkRankName.css('margin-left', 182 * scaleX + "px");
    kkRankName.css('width', canvasWidth - 182 * scaleX + "px");
    kkRankName.css('height', 60 * scaleY + "px");
    var kkRankScore = $("#kkRankScore");
    kkRankScore.css('margin-right', 60 * scaleX);

    var maxWidth = 150 * scaleX;
    ranks.css('margin-left', 130 * scaleX + "px");
    ranks.css('width', canvasWidth - 130 * scaleX);
    ranks.css('height', 60 * scaleY + "px");
    ranksScore.css('margin-right', 90 * scaleX);


    myRank.css('margin-top', 36 * scaleY + "px");
    myRank.css('width', canvasWidth);
    myRank.css('height', 60 * scaleY + "px");

    rankingMask.show();
    if (localName === undefined) {
        $(ranks.eq(7)).text("无");
    } else {
        if (localName === "9510171017") {
            $(ranks.eq(7)).text("冯款款");
        } else {
            $(ranks.eq(7)).text(localName.substring(0, 7));
        }
        $(ranksScore.eq(7)).text(localScore);
    }

    var query = new Bmob.Query(GameScore);
    query.descending("score");
    query.limit(7);
    query.find({
        success: function (results) {

            // 循环处理查询到的数据
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                var userName = object.get("userName");
                if (userName === "9510171017") {
                    userName = "冯款款";
                }
                $(ranks.eq(i)).text(i + 1 + " " + userName.substring(0, 7));
                $(ranksScore.eq(i)).text(object.get("score"));
            }
        },
        error: function (error) {

        }
    });
    var query2 = new Bmob.Query(GameScore);
    query2.descending("score");
    query2.equalTo("userName", "9510171017");
    query2.first({
        success: function (object) {
            if (object) {
                kkRankScore.text(object.get("score"))
            }
        },
        error: function (error) {

        }
    });
}

function hideRank() {
    $("#ranking").hide();
}

function hideInputId() {
    $("#inputId").hide();
}

var localName;

function commitInputName() {
    localName = $("#inputName").val();
    if (localName === undefined || localName === "") {
        return
    }
    var gameScore = new GameScore();
    gameScore.set("score", localScore);
    gameScore.set("userName", localName + "");
    gameScore.save(null, {
        success: function (object) {
        },
        error: function (model, error) {
            console.log(error)
        }
    });
    // $.ajax({
    //     type: "POST",
    //     url: "/ranks",
    //     data: {
    //         name: localName,
    //         score: localScore
    //     },
    //     success: function (result) {
    //         console.log(result)
    //     },
    //     error: function (msg) {
    //         console.log(msg)
    //     }
    // });
    hideInputId();
}

function launchFullscreen(element) {
    element.style.backgroundImage = "url('images/bg.jpg')"
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}


function goHome() {

}

function clickMore() {
    // try {
    //     parent.moregame();
    // } catch (e) {
    // }
    // showRank()
}

function dp_share() {

}

function dp_Ranking() {

}

function showAd() {
}

function hideAd() {
}

function onInputName(score) {
    console.log("打印分数" + score)
    localScore = score;
    initCommitScore();
}

function dp_submitScore(score) {

}

function updateShare(bestScore) {
    var shareTitle = "";
    switch (true) {
        case bestScore > 20000:
            shareTitle = "我跑了" + bestScore + "米，跑到人生巅峰，已载入史册！";
            break;
        case bestScore > 10000:
            shareTitle = "我跑了" + bestScore + "米，跑出了自己的风格！";
            break;
        case bestScore > 5000:
            shareTitle = "我跑了" + bestScore + "米，请问终点在哪里？";
            break;
        case bestScore > 0:
            shareTitle = "我跑了" + bestScore + "米，手一抖就撞墙了！不要问我头疼不疼！";
            break;
        default:
            shareTitle = "没事儿我就出来跑一跑，求个偶遇，缘分这种事谁说得清呢？";
    }
    return shareTitle;
}