$(document).ready(function () {
    var menu = {
        aboutUs: "#about-us-partial",
        cooperation: "#cooperation-partial",
        innovativeInvestments: "#innovative-investments-partial",
        safetyImprovements: "#safety-improvements-partial",
        buildingGrants: "#building-grants-partial",
        villageGrants: "#village-grants-partial",
        monumentGrants: "#monument-grants-partial",
        loans: "#loans-partial",
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