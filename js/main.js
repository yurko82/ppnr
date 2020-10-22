(function() {

    AOS.init({
        offset: 30,
        duration: 800,
        once: true
    });
    //low vision
    var lowVision = 0;
    $('i.icon-eye').click(function() {
        if (lowVision === 0) {
            $('body').css('filter', 'grayscale(100%)').addClass('lowvision');
            lowVision = 1;
            $(this).addClass('icon-eye_full');
        } else {
            $('body').css('filter', 'none').removeClass('lowvision');
            lowVision = 0;
            $(this).removeClass('icon-eye_full');
        }
    });

    //hover for menu items
    $('header .nav-item').hover((e) => {
        $(e.currentTarget).addClass('on-hover');
    }, (e) => {
        $(e.currentTarget).removeClass('on-hover');
    });

    //random slid on home screen
    var $divs = $('.head-slider__items>div');
    var arr = [];
    $divs.each(function() {
        arr.push($(this).detach());
    });
    arr.sort(function(a, b) {
        return 0.5 - Math.random();
    });
    for (var index in arr) {
        if (index < 4) { //-кількість слайдів
            $('.head-slider__items').append(arr[index]);
        }
    }

    //slick slider for home screen
    $('.head-slider__items').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 3000,
        dots: true,
        arrows: false,
        fade: true,
        pauseOnHover: false
    });

    // //slick slider for widget  // bla-bla
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

    // use only on index page
    // $('.people__items').slick({
    //     prevArrow: '<button class="prev btn-d"><i class="fas fa-chevron-left"></i></button>',
    //     nextArrow: '<button class="next btn-d"><i class="fas fa-chevron-right"></i></button>',
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     speed: 1000,
    //     arrows: true,
    //     vertical: false,

    //     responsive: [{
    //         breakpoint: 4000,
    //         settings: "unslick"
    //     }, {
    //         breakpoint: 1000,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             arrows: true,
    //         }
    //     }, {
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             arrows: true,
    //         }
    //     }]
    // });



    //tabs for widget
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
                div.css('transform', 'translateX(328px)'); // скрываем его
            }
        });
    }

    // mobile menu
    $('.navbar-toggler').click(function() {
        $(this).toggleClass("active");
        if ($(this).attr("data-show") === "false") {
            $(this).attr("data-show", "true");
            $('.navbar-collapse').css({
                'transform': 'translateX(-20px)',
            });

            $(".body__overlay").css({ 'left': '0', 'opacity': '0.7' });
        } else {
            $(this).attr("data-show", "false");
            $('.navbar-collapse').css({
                'transform': 'translateX(-310px)',
            });
            $(".body__overlay").css({ 'opacity': '0' });
            setTimeout(function() { $(".body__overlay").css({ 'left': '-110vw' }); }, 1000);
        }
    })
    if ($(window).width() < 1000) {
        $(document).mouseup(function(e) { // событие клика по веб-документу
            var div = $(".navbar-collapse"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                &&
                div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.css('transform', 'translateX(-310px)'); // скрываем его
                $(".body__overlay").css({ 'opacity': '0' });

            }
        });
    };


    if ($(window).width() > 999) {
        $('i.icon-search').click(function() {
            $(this).toggleClass("icon-close");
            $('.navbar__form').toggleClass("active");
        });
        ['facebook', 'youtube', 'twitter', 'instagram', 'telegram'].forEach((n) => $('i.icon-' + n).hover(
            function() { $(this).addClass('icon-' + n + '_full'); },
            function() { $(this).removeClass('icon-' + n + '_full'); }));

        //scroll page - menu
        $(window).on("scroll", function() {
            if ($(window).scrollTop() > 90)
                $('.header').addClass('scroll_page');
            else
                $('.header').removeClass('scroll_page');
        });
    };

    // use only on allnews.html
    $('.news-type').on('click', function() {
        if ($(this).children('i').hasClass("fa-th")) {
            $(this).children('i').removeClass("fa-th").addClass("fa-bars");
            $('.news__block, .allnews__block').toggleClass("gallery");
        } else if ($(this).children('i').hasClass("fa-bars")) {
            $(this).children('i').removeClass("fa-bars").addClass("fa-th-list");
            $('.news__block, .allnews__block').toggleClass("gallery");
            $('.news__block-img').css("display", "none");
        } else {
            $(this).children('i').removeClass("fa-th-list").addClass("fa-th");
            $('.news__block-img').css("display", "block");
        }
    });

    // use only on allnews.html
    function checkNewsType() {
        let url = window.location.href.split('?');
        if (url[1]) console.log('news type: ' + url[1]); // use this for news filter
    }
    checkNewsType();

    //btn up
    $('body').append('<button class="btn_up"><span class="icon-right-arrow btn_up__angle-top"></span></button>');
    $('.btn_up').click(function() {
        $('body').animate({ 'scrollTop': 0 }, 1000);
        $('html').animate({ 'scrollTop': 0 }, 1000);
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('.btn_up').addClass('active');
        } else {
            $('.btn_up').removeClass('active');
        }
    });

    //lang at header
    let currentLang = "UA";
    $('.lang__block .lang_UA').click(() => changeLanguage('UA'));
    $('.lang__block .lang_RU').click(() => changeLanguage('RU'));
    $('.lang__block .lang_EN').click(() => changeLanguage('EN'));

    function changeLanguage(l) {
        switch (currentLang) {
            case "UA":
                $('.lang__block .lang_UA').removeClass('active');
                break;
            case "RU":
                $('.lang__block .lang_RU').removeClass('active');
                break;
            case "EN":
                $('.lang__block .lang_EN').removeClass('active');
                break;
        }
        currentLang = l;
        switch (currentLang) {
            case "UA":
                $('.lang__block .lang_UA').addClass('active');
                $('.lang__block span.text').text('Укр');
                break;
            case "RU":
                $('.lang__block .lang_RU').addClass('active');
                $('.lang__block span.text').text('Рус');
                break;
            case "EN":
                $('.lang__block .lang_EN').addClass('active');
                $('.lang__block span.text').text('Eng');
                break;
        }
        $('.lang').removeClass('slideDown');
        $('.lang__drop').removeClass('open');
    }
    $('.lang').on('click', function(e) {
        e.preventDefault();
        if (!$(this).hasClass('slideDown')) {
            $(this).addClass('slideDown');
            $(this).closest('.lang__block').find('.lang__drop').addClass('open');
        } else {
            $(this).removeClass('slideDown');
            $(this).closest('.lang__block').find('.lang__drop').removeClass('open');
        }
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".lang__block").length) {
            $('.lang').removeClass('slideDown');
            $('.lang__drop').removeClass('open');
        }
        e.stopPropagation();
    });
    $('footer img.footer__logo-raes').dblclick((e) => { // temp for testing
        e.stopPropagation();
        alert('browser viewport- w:' + $(window).width() + ', h:' + $(window).height() +
            ' || html document- w:' + $(document).width() + ', h:' + $(document).height() +
            ' || screen- w:' + window.screen.width + ', h:' + window.screen.height);
    });

    //news-slider on news.html page
    $('.news__img-slider').slick({
        prevArrow: '<button class="prev btn-d"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="next btn-d"><i class="fas fa-chevron-right"></i></button>',
        speed: 1000,
        arrows: true,
        fade: true,
        dots: true
            // dotsClass: 'customPaging',
            // customPaging: function(slider, i){
            //     console.log(slider);
            //     return (i + 1) +'/' +slider.slideCount;
            // }    
    });

    //fix index head-slider
    function vhSlideDebug() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setTimeout(vhSlideDebug, 50)

    //audit support WEBP browser
    var WebP = new Image();
    WebP.onload = WebP.onerror = function() {
        console.log(WebP.height) // =2
        if (WebP.height != 2) {
            let webps = $("*[style*='webp']")
            for (let webp of webps) {
                let webpBgImg = webp.style.backgroundImage
                let webpRep = webpBgImg.replace(/webp/, 'jpg')
                webp.style.backgroundImage = webpRep
            }
        }
    };
    WebP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

})();