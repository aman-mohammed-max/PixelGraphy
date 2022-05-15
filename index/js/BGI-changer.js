 (function () {
            var imageNo = Math.floor((Math.random() * 6) + 1);
            $(".bgauto").attr("src", "/index/background-img/bannerimage-" + imageNo + ".jpg");
        })