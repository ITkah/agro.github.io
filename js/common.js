$(document).ready(function() {

    $(".menu-call").on("click", function(){
        $(".mob-menu").addClass("mob-menu-active");
    });
    
    $(".close").on("click", function(){
        $(".mob-menu").removeClass("mob-menu-active");
    });
    
    $('.review-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    });

});
