"use strict";
exports.__esModule = true;
exports.NavModule = void 0;
var NavModule = {
    init: function () {
        this.bindingEventHandle();
    },
    bindingEventHandle: function () {
        if (this.isMain) {
            $(window).on("scroll", function () {
                var scrollTop = Number($(window).scrollTop());
                console.log("scrollTop : " + scrollTop);
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
        if (isActive) {
            //흰배경
            $("#HeaderLogo").attr("src", "./asset/images/logo.png");
            $("#header").addClass("on");
        }
        else {
            //투명배경
            $("#HeaderLogo").attr("src", "./asset/images/logo-w.png");
            $("#header").removeClass("on");
        }
    }
};
exports.NavModule = NavModule;
