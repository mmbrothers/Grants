$(document).ready(function () {
    var menu = {
        innovativeInvestments: "#innovative-investments-partial",
        cooperation: "#cooperation-partial",
        aboutUs: "#about-us-partial",
        contact: "#contacts-partial"
    }

    $(menu.innovativeInvestments).click(function () {
        scrollTo(menu.innovativeInvestments);
    });

    $(menu.cooperation).click(function () {
        scrollTo(menu.cooperation);
    });

    $(menu.aboutUs).click(function () {
        scrollTo(menu.aboutUs);
    });

    $(menu.contact).click(function () {
        scrollTo(menu.contact);
    });

    function scrollTo(source) {
        var destination = source + "-div";
        $('html, body').animate({
            scrollTop: $(destination).offset().top - 55
        }, 1000);
    }
});