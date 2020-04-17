$(document).ready(function() {

    $(".menu-call").on("click", function(){
        $(".mob-menu").addClass("mob-menu-active");
    });
    
    $(".close").on("click", function(){
        $(".mob-menu").removeClass("mob-menu-active");
    });

    $('div.tabs__caption').on('click', 'p:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
    $('.review-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    });

});
