$(function(){
    $('.header-slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-header-btn slick-header-prev">​<img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-header-btn slick-header-next">​<img src="images/arrow-next.svg" alt=""></button>',
        arrows: true,
        fade: true,
        autoplay: 3000,
        dots: true
    });
    $('.eliquid-slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-eliquid-btn slick-eliquid-prev">​<img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-eliquid-btn slick-eliquid-next">​<img src="images/arrow-next.svg" alt=""></button>',
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        // autoplay: 3000,
        speed: 300,
        infinite: true,
        adaptiveWidth: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows:false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.header-btn').on('click',function(){
        $('.menu').addClass('active');
    });
    $('.eliquid-btn').on('click',function(){
        $('.menu').addClass('active');
    });
    $('.close-btn').on('click',function(){
        $('.menu').removeClass('active');
    })
});