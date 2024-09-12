function vPointSite() {
   var c = 0;
    try {
        document.getElementsByClassName("btnNext")[0].click();
        return;
     } catch (e) {
        console.log("btnNext");
    }
    for (i = 0; i < 30; i++) {
        setTimeout((i) => {
            try {
                c++;
                document.getElementsByClassName("btnNext" + c)[0].click()
            } catch (e) {
                console.log("btnNext" + c)
            }
            if (c == 30) {
                var links = document.getElementsByTagName("a");
                for (var i = 0; i < links.length; i++) {
                    if (document.getElementsByTagName("a")[i].text == '\n\t\t\t\t\t\tスタンプページへ\t\t\t\t\t') {
                        document.getElementsByTagName("a")[i].click()
                    }
                }
            }
        }, 200 * i);
    }

    if (isLocation("https://www.trepy.jp/sp/article/page/") ||
        isLocation("https://www.life-n.jp/sp/article/page/") ||
        isLocation("https://point-news.jp/sp/article/page/")
    ) {
        document.getElementsByClassName("btn_area")[0].getElementsByTagName("a")[0].click()
    } else if (isLocation("https://www.trepy.jp/sp/article/page-end") ||
        isLocation("https://www.life-n.jp/sp/article/page-end/") ||
        isLocation("https://point-news.jp/sp/article/page-end/")
    ) {
        window.location = "https://www.trepy.jp/sp/";
    } else if (isLocation("https://www.trepy.jp/sp/")) {
        try {
            document.getElementsByClassName("pon_article_inner")[0].getElementsByTagName("a")[0].click();
        } catch (e) {
           /* vポイント終わり  Android.appDate(2);
            if(document.getElementsByClassName("no_data") != undefined){
               // Android.appDate(2);
            }*/
        }
    }

    if (isLocation("https://t-mall.tsite.jp/entamenews/?scid=top_3sen")) {
        var start = document.getElementsByTagName("img");
        for (var i = 0; i < start.length; i++) {
            if (start[i].title == 'Vポイントエンタメニュース') {
                window.location = start[i].parentNode.parentNode.href;
            }
        }
    }
}


function point() {
　　 if(localStorage.tv_auto_site != 2){
        console.log("vPointSite");
        vPointSite();
    } else if (location.href.startsWith("https://paypay.yahoo.co.jp") || location.href.startsWith("https://www.paypay.ne.jp")) {
        suruga();
    } else if (location.href.startsWith("https://service.smt.docomo.ne.jp/")) {
        plo_d();
    } else if (location.href.startsWith("https://hiroba.dpoint.docomo.ne.jp")) {
        d_point();
    } else if (location.href.startsWith("https://mail.google.com/mail/u/0/?pli=1#label/%E6%A5%BD%E5%A4%A9")) {
        mail();
    } else if (window.location.href.startsWith("https://toku.yahoo.co.jp/")) {
        yahooAction();
    } else if (location.pathname == "/my/my_page.php") {
        try {
            document.getElementsByClassName("notyet")[0].click();
        } catch (e) {
            window.location = "https://toku.yahoo.co.jp/";
        }
    } else if (location.pathname == "/my/my_mail.php") {
        if (document.getElementsByTagName("a")[0].tag != "test") {
            document.getElementsByTagName("a")[0].tag = "test";
            var links = document.getElementsByTagName("a");
            var timeCount = 0;
            for (var i = 0; i < links.length; i++) {
                var link = links[i].href;
                var oldLink = "";
                if (oldLink != link && link.startsWith("https://sp.pointi.jp/al/click_mail_magazine")) {
                    console.log(link);
                    oldLink = link;
                    setTimeout((target) => { window.open(target, 'sample', 'top=100,left=100,width=300,height=400'); }, 2000 * timeCount, link);
                    timeCount++;
                }
            }
            setTimeout(() => { window.location = "https://sp.pointi.jp/my/my_page.php"; }, 2000 * timeCount);
        }
    } else {
        if (location.href == "https://sp.pointi.jp/daily.php") {
            try {
                if (document.getElementsByTagName("a")[0].tag != "test") {
                    document.getElementsByTagName("a")[0].tag = "test";
                    var links = document.getElementsByTagName("a");
                    var timeCount = 0;
                    for (var i = 0; i < links.length; i++) {
                        var link = links[i].href;
                        var oldLink = "";
                        if (oldLink != link && link.startsWith("https://sp.pointi.jp/al/click_incentive.php")) {
                            console.log(link);
                            oldLink = link;
                            setTimeout((target) => { window.open(target, 'sample', 'top=100,left=100,width=300,height=400'); }, 2000 * timeCount, link);
                            timeCount++;
                        }
                    }
                    setTimeout(() => { window.location = "https://sp.pointi.jp/my/my_page.php"; }, 2000 * timeCount);
                }
            } catch (e) { window.location = "https://sp.pointi.jp/my/my_page.php" }
        } else if (location.origin != "https://sp.pointi.jp") {
            window.location = "https://sp.pointi.jp/contents/magazine/bene/";
        } else if(isLocation("https://sp.pointi.jp/contents/magazine/bene/detail.php") || isLocation("https://sp.pointi.jp/contents/magazine/ichioshi/detail.php")){
            var links = document.getElementsByClassName("article_box");
            var blok = false;
            for(var i = 0; links.length > i; i++){
                if(links[i].style.display == "block"){
                    blok = true;
                } else if(blok){
                    links[i-1].getElementsByClassName("go_btn")[0].click();
                    i = 1000;
                }
            }
            if(i< 999){
              if(blok){
                    links[links.length-1].getElementsByClassName("go_btn")[0].click();
              } else {
                  links[0].getElementsByClassName("go_btn")[0].click();
              }
            }
        } else {
            var test = true;
            try { test = document.getElementsByClassName("list_wrap")[0].getElementsByTagName("img")[1].title != "スタンプ" } catch (e) { }
            if (test) {
                try { document.getElementsByClassName("list_wrap").link_list.getElementsByTagName("a")[0].click() } catch (e) { }
                try { document.getElementsByClassName("go_btn mb_20")[0].click() } catch (e) { }
            } else {
                try {
                    if (document.getElementsByClassName("open")[0].nextElementSibling !== null) {
                        document.getElementsByClassName("open")[0].nextElementSibling.click()
                    } else {
                        if (!location.href.startsWith("https://sp.pointi.jp/contents/magazine/ichioshi/")) { window.location = "https://sp.pointi.jp/contents/magazine/ichioshi/" } else { window.location = "https://sp.pointi.jp/daily.php" }
                    }
                } catch (e) {
                    if (!location.href.startsWith("https://sp.pointi.jp/contents/magazine/ichioshi/")) { window.location = "https://sp.pointi.jp/contents/magazine/ichioshi/" } else { window.location = "https://sp.pointi.jp/daily.php" }
                }
            }
        }
    }
}

function yahooAction() {
    if (isLocation("https://toku.yahoo.co.jp/everyday/lot")) {
        /*毎にくじ*/
        document.getElementsByClassName("btnTypeKujiOn")[0].click();
    } else if (isLocation("https://toku.yahoo.co.jp/everyday/lot/done")) {
        /*毎に逐次終わり*/
        window.location = "https://toku.yahoo.co.jp/";

    } else if (isLocation("https://toku.yahoo.co.jp/everykuji/lot")) {
        /*ずばとく*/
        document.getElementsByClassName("btnTypeKujiOn")[0].click();
    } else if (isLocation("https://toku.yahoo.co.jp/everykuji/lot/done")) {
        /*ズバトク終わり*/
        window.location = "https://toku.yahoo.co.jp/";
    } else if (isLocation("https://toku.yahoo.co.jp/scratch/lot")) {
        /*スクラッチ*/
        document.getElementById("groupLabel01").click();
        document.getElementById("lot_done").submit();
    } else if (isLocation("https://toku.yahoo.co.jp/scratch/lot/done")) {
        /*スクラッチ終わり*/
        /*メール一覧画面遷移*/
        window.location = "https://mail.google.com/mail/u/0/?pli=1#label/%E6%A5%BD%E5%A4%A9";
    } else {
        try {
            /*毎にくじ*/
            document.getElementsByClassName("everydaylotBtn")[0].click();
        } catch (e) {
            try {
                /*ずばとく*/
                if (document.getElementsByClassName("PPbonuslotBtn")[0] != undefined) {
                    document.getElementsByClassName("PPbonuslotBtn")[0].click();
                } else {
                    /*スクラッチボタン*/
                    document.getElementsByClassName("scratchlotBtn")[0].click();

                }
            } catch (e) {
                /*メール一覧遷移２*/
                window.location = "https://mail.google.com/mail/u/0/?pli=1#label/%E6%A5%BD%E5%A4%A9";
            }
        }
    }
}

function mail() {
    if (isLocation("https://mail.google.com/mail/u/0/?pli=1#label/%E6%A5%BD%E5%A4%A9")) {
        /*メール一覧画面*/
        var count = 0;
        if (document.getElementsByTagName("a")[0].tag != undefined) {
            count = document.getElementsByTagName("a")[0].tag;
        }
        if (count > 50) {
            /*Dポイント*/
            window.location = "https://hiroba.dpoint.docomo.ne.jp/kuji/daily";
            return;
        }
        if (document.getElementsByClassName("Cp")[0].getElementsByTagName("tr")[count] == undefined) {
            return;
        }

        document.getElementsByClassName("Cp")[0].getElementsByTagName("tr")[count].click();
        document.getElementsByTagName("a")[0].tag = count + 1;
    } else if (window.location.href.startsWith("https://mail.google.com/mail/u/0/?pli=1#label/%E6%A5%BD%E5%A4%A9")) {
        /*詳細画面*/
        try {
            var links = document.getElementsByTagName("a");
            var timeCount = 0;
            for (var i = 0; i < links.length; i++) {
                var link = links[i].href;
                var oldLink = "";
                if (oldLink != link && (link.startsWith("https://r.rakuten.co.jp/") || link.startsWith("https://sp.pointi.jp/al/click_mail_magazine.php"))) {
                    oldLink = link;
                    setTimeout((target) => { window.open(target, 'sample', 'top=100,left=100,width=300,height=400'); }, 3000 * timeCount, link);
                    timeCount++;
                }
                if (timeCount > 3) {
                    break;
                }
            }
            setTimeout(() => { window.location = "https://mail.google.com/mail/u/0/?pli=1#label/%E6%A5%BD%E5%A4%A9"; }, 3000 * timeCount);
        } catch (e) { }
    }
}

function d_point() {
    if (isLocation("https://hiroba.dpoint.docomo.ne.jp/kuji/daily")) {
        document.getElementsByClassName("lottery-daily-input__btn")[0].click();
    } else if (isLocation("https://hiroba.dpoint.docomo.ne.jp/kuji/daily/result")) {
        window.location = "https://hiroba.dpoint.docomo.ne.jp/kuji/garagara/entry";
    } else if (isLocation("https://hiroba.dpoint.docomo.ne.jp/kuji/garagara/entry")) {
        try {
            document.getElementsByClassName("lottery-entry-before__action-btn")[0].click();
        } catch (e) {
            window.location = "https://hiroba.dpoint.docomo.ne.jp/kuji/garagara/play";
        }
    } else if (isLocation("https://hiroba.dpoint.docomo.ne.jp/kuji/garagara/play")) {
        document.play.submit();
    } else {
        /*ドコモホームページへ*/
        window.location = "https://service.smt.docomo.ne.jp/portal/special/collab/auth/topics/src/dmenukuji_01.html";
    }

}


function plo_d() {
    if (isLocation("https://service.smt.docomo.ne.jp/portal/special/collab/auth/topics/src/dmenukuji_01.html") && document.querySelector('[data-portalarea="dmenukuji_todaykuji_001"]').style.display != "none" && document.getElementsByClassName("valid-user d-none")[0].style.display != "none") {
        document.querySelector('[alt="くじスタート"]').click();
    } else {
        /*paypayチャージ*/
        window.location = "https://paypay.yahoo.co.jp/balance";
    }
}

function d() {
    window.location = "https://service.smt.docomo.ne.jp/portal/special/collab/auth/topics/src/dmenukuji_01.html";
}

function suruga() {
    if (location.href.startsWith("https://www.paypay.ne.jp/portal/transaction/topup")) {
        if (document.getElementsByClassName("action")[1] != undefined) {
            document.getElementsByClassName("action")[1].click();
        } else {
            document.querySelector('[autofocus="autofocus"]').value = "10" + ('00' + Math.floor(Math.random() * 99)).slice(-2);
            document.getElementsByClassName("method-info")[0].click();
            document.getElementsByClassName("touch-button contents-area")[3].click();
            /*document.querySelector('[autofocus="autofocus"]')*/
            if (document.getElementsByClassName("title")[0].innerHTML == "スルガ銀行") {
                document.getElementsByClassName("submit-button bottom")[0].click();
            }
        }

    } else {
        if (document.getElementsByClassName("balance__amount")[0].outerHTML.replace(/[^0-9]/g, '') > 100000) {
            return;
        }
        if (location.href.startsWith("https://paypay.yahoo.co.jp/balance")) {
            try {
                if (document.getElementsByClassName("chargeModal__button js-chargeLink")[1] != undefined) {
                    document.getElementsByClassName("chargeModal__button js-chargeLink")[1].click();
                } else {
                    document.getElementsByClassName("chargeModal__button js-chargeLink")[0].click();
                }
            } catch (e) {

            }
            document.getElementsByClassName("balance__button--charge js-webChargeButton")[0].click();
        }
    }
}

function isLocation(location) {
    return window.location.href.startsWith(location);
}

point();
