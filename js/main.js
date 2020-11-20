(function() {

    AOS.init({
        offset: 30,
        duration: 800,
        once: true
    });

    //low vision
    let lowVision = 0;
    $('i.icon-eye').click(function() {
        if (lowVision == 0) {
            $('section, footer, .logo, .btn_up').css('filter', 'grayscale(100%)');
            $('.header').addClass('lowvision');
            lowVision = 1;
            $(this).addClass('icon-eye_full');
        } else {
            $('section, footer, .logo, .btn_up').css('filter', 'none');
            $('.header').removeClass('lowvision');
            lowVision = 0;
            $(this).removeClass('icon-eye_full');
        }
    });

    // for header main menu
    $('header .navbar-nav li').hover((e) => {
        if (window.innerWidth >= 1000) $(e.currentTarget).addClass('on-hover');
    }, (e) => {
        $(e.currentTarget).removeClass('on-hover');
    });

    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (window.innerWidth < 1000) {
            if ($(this).next().hasClass('show')) {
                $(this).removeClass('show');
            } else {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
                $(this).addClass('show');
            }
            let $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');
            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
                $('.dropdown-submenu .show, .dropdown-menu a.dropdown-toggle').removeClass("show");
            });
        }
        return false;
    });

    window.addEventListener("resize", () => {
        checkMenuItemDropright();
    });

    function checkMenuItemDropright() {
        if (window.innerWidth >= 1000) $('header .navbar-collapse li.dropdown:not(.nav-item)').addClass("dropright");
        else $('header .navbar-collapse li.dropdown:not(.nav-item)').removeClass("dropright");
    }
    checkMenuItemDropright();

    //random slide on home screen
    let $divs = $('.head-slider__items>div'),
        arr = [];
    $divs.each(function() { arr.push($(this).detach()); });
    arr.sort(function(a, b) { return 0.5 - Math.random(); });
    for (let index in arr) {
        if (index < 4) $('.head-slider__items').append(arr[index]); //-slides count
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

    // //slick slider for widget
    $('#slick-slide-control10').focus();
    $('.widget__slider').slick({
        speed: 500,
        dots: true,
        arrows: false,
        fade: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false,
                swipe: false
            }
        }]
    });

    //tabs for widget
    $('.widget .slick-dots li  button').click(function() {
        let $bgColor = $(this).css("background-color");
        $('.widget').css({ 'background-color': $bgColor, 'transform': 'translateX(0px)' });
    });

    $(document).mouseup(function(e) {
        if ($(window).width() > 767) {
            let div = $(".widget");
            if (!div.is(e.target) && div.has(e.target).length == 0)
                div.css('transform', 'translateX(328px)');
        }
    });


    // mobile menu
    $('.navbar-toggler').click(function() {
        $(this).toggleClass("active");
        if ($(this).attr("data-show") == "false") {
            $(this).attr("data-show", "true");
            if ($(window).width() < 768) $('.navbar-collapse').css({ 'transform': 'translateX(-12px)' });
            else $('.navbar-collapse').css({ 'transform': 'translateX(-20px)' });
            $(".body__overlay").css({ 'left': '0', 'opacity': '0.7' });
            // document.body.style.position = 'fixed';
            // document.body.style.top = `-${window.scrollY}px`;
            document.body.style.overflow='hidden';
        } else {
            $(this).attr("data-show", "false");
            $('.navbar-collapse').css({ 'transform': 'translateX(-310px)' });
            $(".body__overlay").css({ 'opacity': '0' });
            setTimeout(function() { $(".body__overlay").css({ 'left': '-110vw' }); }, 300);
            document.body.style.overflow='';
        }
    });
    let menuClosed = function(e) {
        if ($(window).width() < 1000) {
            let div = $(".navbar-collapse, .navbar-toggler");
            if (!div.is(e.target) && div.has(e.target).length == 0 && $('.navbar-toggler').attr("data-show") == "true") {
                $(".navbar-collapse").css('transform', 'translateX(-310px)');
                $(".body__overlay").css({ 'opacity': '0' });
                $('.navbar-toggler').toggleClass("active").attr("data-show", "false");
                setTimeout(function() { $(".body__overlay").css({ 'left': '-110vw' }); }, 300);
                // let scrollY = document.body.style.top;
                // document.body.style.position = '';
                // document.body.style.top = '';
                // window.scrollTo(0, parseInt(scrollY || '0') * -1);
                document.body.style.overflow='';
            }
        } else document.body.style.overflow='';
    };
    $(document).scroll(menuClosed).mouseup(menuClosed);

    if ($(window).width() > 999) {
        $('i.icon-search').click(function() {
            $(this).toggleClass("icon-close");
            $('.navbar__form').toggleClass("active");
        });
        ['facebook', 'youtube', 'twitter', 'instagram', 'telegram'].forEach((n) => $('i.icon-' + n).hover(
            function() { $(this).addClass('icon-' + n + '_full'); },
            function() { $(this).removeClass('icon-' + n + '_full'); }));
    }

    //scroll page - menu
    $(window).on("scroll", function() {
        if ($(window).width() > 999) {
            if ($(window).scrollTop() > 90) $('.header').addClass('scroll_page');
            else $('.header').removeClass('scroll_page');
        }
    });

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
        if ($(window).scrollTop() > 300)
            $('.btn_up').addClass('active');
        else $('.btn_up').removeClass('active');
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
    setTimeout(vhSlideDebug, 50);

    //audit support WEBP browser
    var WebP = new Image();
    WebP.onload = WebP.onerror = function() {
        // console.log(WebP.height); // =2
        if (WebP.height != 2) {
            let webps = $("*[style*='webp']");
            for (let webp of webps) {
                let webpBgImg = webp.style.backgroundImage;
                let webpRep = webpBgImg.replace(/webp/, 'jpg');
                webp.style.backgroundImage = webpRep;
            }
        }
    };
    WebP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

    //adaptive bg slider img
    function adpSliderBg(width) {
        let sliderImgs = $('.head-slider__item');
        for (let sliderImg of sliderImgs) {
            let sldBgImg = sliderImg.style.backgroundImage;
            let slBGRep = sldBgImg.replace(/bg\//, 'bg/' + width + '/');
            sliderImg.style.backgroundImage = slBGRep;
        }
    }
    if ($(window).width() < 600) {
        adpSliderBg(600)
    } else if ($(window).width() < 1000) {
        adpSliderBg(1000)
    }


})();


// for about_leaders.html page
function viewLeaders() {
    let leader = document.querySelector(".leaders");
    leader.classList.toggle('allView');
}
if ($(window).width() < 768) {
    function closeAboutMenu() {
        document.querySelectorAll(".allabout__menu-submenu ul").forEach(allUl => { allUl.style.display = "none" });
    }
    closeAboutMenu();

    function viewLeader(e) {
        closeAboutMenu();
        ulDisplay = e.lastElementChild;
        if (ulDisplay.style.display == "none")
            ulDisplay.style.display = 'block';
        else ulDisplay.style.display = 'none';
    }
}