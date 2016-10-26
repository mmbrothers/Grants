$(document).ready(function () {
    var menu = {
        innovativeInvestments: "#innovative-investments-partial",
        cooperation: "#cooperation-partial",
        aboutUs: "#about-us-partial",
        contact: "#contacts-partial"
    }

    $.each(menu, function(i) {
        $(menu[i]).click(function () {
            scrollTo(menu[i]);
        });
    });

    function scrollTo(source) {
        var destination = source + "-div";
        $('html, body').animate({
            scrollTop: $(destination).offset().top - 55
        }, 1000);
    }
});