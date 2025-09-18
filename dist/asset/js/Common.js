$(function () {
    //dom 로드 후 실행
    NavModule.init();
});
$(window).on("scroll", function (e) {
    var scrollTop = $(window).scrollTop();
    ShowTopBtn(scrollTop);
    if (Number(scrollTop) >= 390) {
        $("#FloatingNav").addClass("fixed");
    }
    else {
        $("#FloatingNav").removeClass("fixed");
    }
});
var NavModule = {
    init: function () {
        this.bindingEventHandle();
    },
    bindingEventHandle: function () {
        if (this.isMain()) {
            $(window).on("scroll", function () {
                var scrollTop = Number($(window).scrollTop());
                if (scrollTop <= 0) {
                    NavModule.activeHeaderStyle(false);
                }
                else {
                    NavModule.activeHeaderStyle(true);
                }
            });
        }
        else {
            this.activeHeaderStyle(true);
        }
    },
    isMain: function () {
        var path = window.location.pathname;
        if (path == "/" || Number(path.indexOf("index")) > -1) {
            return true;
        }
        return false;
    },
    activeHeaderStyle: function (isActive) {
        var src = $("#HeaderLogo").attr("src").toString();
        if (isActive) {
            //흰배경
            var replace = src.replace("logo-w.png", "logo.png");
            $("#HeaderLogo").attr("src", replace);
            //$("#HeaderLogo").attr("src", "./asset/images/logo.png");
            $("#header").addClass("on");
        }
        else {
            //투명배경
            var replace = src.replace("logo.png", "logo-w.png");
            $("#HeaderLogo").attr("src", replace);
            //$("#HeaderLogo").attr("src", "./asset/images/logo-w.png");
            $("#header").removeClass("on");
        }
    }
};
function GoToTop() {
    $("html").animate({ scrollTop: 0 }, 500);
}
function ShowTopBtn(scrollTop) {
    if (scrollTop >= 200) {
        $("#BtnTop").fadeIn();
    }
    else {
        $("#BtnTop").fadeOut();
    }
}
function MobileNav() {
    $("#Btn_M_Nav").toggleClass("on");
    $("#M_Nav").toggleClass("on");
    $("body").toggleClass("scroll-none");
}
