$(function() {

    var overlay = 0;
    $('.fa-telegram-plane').click(function() {
        if (overlay === 0) {
            $('.overlay').css('display', 'none');
            overlay = 1;
        } else {
            $('.overlay').css('display', 'block');
            overlay = 0;
        }
    });


    var lowVision = 0;
    $('.fa-low-vision').click(function() {
        if (lowVision === 0) {
            $('body').css('filter', 'grayscale(100%)').addClass('lowvision');
            lowVision = 1;
        } else {
            $('body').css('filter', 'none').removeClass('lowvision');
            lowVision = 0;
        }
    });

    $('.dropdown-menu a.dropdown-toggle').on('click', function() {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show').css({ 'left': '99%', 'top': '0' });

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function() {
            $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
    });

    $('.head-slider__items').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 3000,
        dots: true,
        arrows: false,
        fade: true,
        pauseOnHover: false,

    });

    $('.widget__slider').slick({
        prevArrow: '<button class="prev btn-h"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="next btn-h"><i class="fas fa-chevron-right"></i></button>',
        speed: 1000,
        dots: true,
        arrows: false,
        fade: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: false,
                arrows: true
            }
        }]

    });



    function startSlide(el) {

        el.slick({
            prevArrow: '<button class="prev btn-d"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button class="next btn-d"><i class="fas fa-chevron-right"></i></button>',
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            speed: 4000,
            arrows: false,
            pauseOnHover: false,
            responsive: [{
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                    }
                }
            ]


        });

    };
    startSlide($('.slide1'));
    startSlide($('.slide2'));
    startSlide($('.slide3'));
    $('.slide1').slick('slickNext');
    $('.slide1').on('afterChange', function(event, currentSlide) {
        if (currentSlide = 2) {
            ($('.slide2').slick('slickNext'));
        }
    })
    $('.slide2').on('afterChange', function(event, currentSlide) {
        if (currentSlide = 2) {
            ($('.slide3').slick('slickNext'));
        }
    })
    $('.slide3').on('afterChange', function(event, currentSlide) {
        if (currentSlide = 2) {
            ($('.slide1').slick('slickNext'));
        }
    });

    $('.people__items').slick({
        prevArrow: '<button class="prev btn-d"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="next btn-d"><i class="fas fa-chevron-right"></i></button>',
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 1000,
        arrows: true,
        vertical: false,

        responsive: [{
                breakpoint: 4000,
                settings: "unslick"
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]

    });

    AOS.init({
        duration: 1200,
    });

    // Scrollax
    $.Scrollax();

    //widget 
    $('.widget .slick-dots li  button').click(function() {
        var $bgColor = $(this).css("background-color");
        $('.widget').css({
            'background-color': $bgColor,
            'transform': 'translateX(0px)',
        });
    })
    if ($(window).width() > 767) {
        $(document).mouseup(function(e) { // событие клика по веб-документу
            var div = $(".widget"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                &&
                div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.css('transform', 'translateX(300px)'); // скрываем его
            }
        });
    }

    // menu
    $('.navbar-toggler').click(function() {
        if ($(this).attr("data-show") === "false") {
            $(this).attr("data-show", "true");
            $('.navbar-collapse').css({
                'transform': 'translateX(-20px)',
            });
        } else {
            $(this).attr("data-show", "false");
            $('.navbar-collapse').css({
                'transform': 'translateX(-310px)',
            });
        }

    })
    if ($(window).width() < 1000) {
        $(document).mouseup(function(e) { // событие клика по веб-документу
            var div = $(".navbar-collapse"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                &&
                div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.css('transform', 'translateX(-310px)'); // скрываем его
            }
        });
    };


    if ($(window).width() > 999) {
        $('i.fas.fa-search').click(function() {
            $(this).toggleClass("fa-window-close");
            $('.navbar__form').toggleClass("active");
        });
    };

     $('i.fas.fa-th-list').click(function() {
            $('.news__block, .allnews__block').toggleClass("gallery");
        });


});