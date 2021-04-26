$(function () {
    $(window).scroll(function () {
        let header = $(".header-top");

        if ($(window).scrollTop() > header.outerHeight()) {
            header.addClass("bg-white");
        } else {
            if ($(window).outerWidth() > 768) {
                header.removeClass("bg-white");
            }
        }
    });
});
