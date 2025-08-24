$(function(){
	//dom 로드 후 실행
	NavModule.init();
});


var NavModule = {
    init: function () {
        this.bindingEventHandle();
    },
    bindingEventHandle: function () {
        if (this.isMain()) {
            $(window).on("scroll", function () {
                let scrollTop = Number($(window).scrollTop());
                if (scrollTop <= 0) {
                    NavModule.activeHeaderStyle(false);
                } else {
                    NavModule.activeHeaderStyle(true);
                }
            });
        } else {
            this.activeHeaderStyle(true);
        }
    },
    isMain: function () {
        const path = window.location.pathname;
        if (path == "/" || Number(path.indexOf("index")) > -1) {
            return true;
        }
        return false;
    },
    activeHeaderStyle: function (isActive) {
        if (isActive) {
            //흰배경
            $("#HeaderLogo").attr("src", "./asset/images/logo.png");
            $("#header").addClass("on");
        } else {
            //투명배경
            $("#HeaderLogo").attr("src", "./asset/images/logo-w.png");
            $("#header").removeClass("on");
        }
    },
};

function GoToTop(){
    $("html").animate({scrollTop: 0}, 500);    
}
function ShowTopBtn(scrollTop){
    if(scrollTop >= 200){
        $("#BtnTop").fadeIn();
    }else{
        $("#BtnTop").fadeOut();

    }

}