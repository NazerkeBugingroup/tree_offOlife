$(document).ready(function(){
    $(".ic-menu").click(function(){
        $(".header").animate({
            width: "toggle"
        });
    });
    // $(".btn-brons").click(function(){
    //     $(".box-bron").show("slide", { direction: "left" }, 1000);
    // });
    // $(".close-btn").click(function(){
    //     $(".box-bron").slideToggle("hide", "1000")
    // });
    var boxWidth = $(".box-bron").width();
    $(".btn-brons").click(function(){
        $(".box-bron").animate({
            width: boxWidth
        });
        $(".box-bron").css("display", "block")
    });
    $(".close-btn").click(function(){
        $(".box-bron").animate({
            width: 0
        });
    });

});
$('.slid-review').slick({
    arrows: true,
    autoplay:true,
    speed: 1200
});