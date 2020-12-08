(function() {

    // try disable double-tap zoomnig in mobile safari
    if (window.navigator.userAgent.indexOf("Safari") > -1 && window.navigator.userAgent.indexOf("Chrome") == -1) {
        let doubleTapTime = 0;
        document.addEventListener('touchstart', function(e) {
            let now = +(new Date());
            if (doubleTapTime + 500 > now) e.preventDefault();
            doubleTapTime = now;
        })
    }

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

    // mobile side menu (header)
    $('.navbar-toggler').click(function() {
        $(this).toggleClass("active");
        if ($(this).attr("data-show") == "false") {
            $(this).attr("data-show", "true");
            if ($(window).width() < 768) $('.navbar-collapse').css({ 'transform': 'translateX(-12px)' });
            else $('.navbar-collapse').css({ 'transform': 'translateX(-20px)' });
            $(".body__overlay").css({ 'left': '0', 'opacity': '0.7' });
            document.body.style.overflow = 'hidden';
        } else {
            $(this).attr("data-show", "false");
            $('.navbar-collapse').css({ 'transform': 'translateX(-310px)' });
            $(".body__overlay").css({ 'opacity': '0' });
            setTimeout(function() { $(".body__overlay").css({ 'left': '-110vw' }); }, 300);
            document.body.style.overflow = '';
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
                document.body.style.overflow = '';
            }
        } else document.body.style.overflow = '';
    };
    $(document).scroll(menuClosed).mouseup(menuClosed);

    // header menu icons
    $('i.icon-search').click(function() {
        if ($(window).width() > 999) {
            $(this).toggleClass("icon-close");
            $('.navbar__form').toggleClass("active");
        }
    });
    ['facebook', 'youtube', 'twitter', 'instagram', 'telegram'].forEach((n) => $('i.icon-' + n).hover(
        function() { $(this).addClass('icon-' + n + '_full'); },
        function() { $(this).removeClass('icon-' + n + '_full'); }));

    //scroll page - menu
    $(window).on("scroll", function() {
        if ($(window).width() > 999) {
            if ($(window).scrollTop() > 90) $('.header').addClass('scroll_page');
            else $('.header').removeClass('scroll_page');
        }
    });

    //btn up -> move page UP
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

    //change language in header menu
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
            ' || screen- w:' + window.screen.width + ', h:' + window.screen.height + ' v: 12234');
    });

    //audit support WEBP browser
    var WebP = new Image();
    WebP.onload = WebP.onerror = function() {
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


})();

//about submenu start
if ($(window).width() < 768) {
    window.onload = openActiveMenu

    function openSubmenu(e) {
        document.querySelector(".about_side_menu ul").classList.toggle('open')
        e.style.display = "none"
    }

    function openActiveMenu() {

        let activeLI = document.querySelector(".about_side_menu-submenu ul li.active")
        if (activeLI) {
            activeLI.parentNode.style.display = "block"

        }
        document.querySelector(".about_side_menu-select").innerText = activeLI.innerText
        let titleActiveLi = activeLI.closest(".about_side_menu-submenu").firstChild.nextSibling.innerText
        document.querySelector(".about_side_menu-current").innerText = titleActiveLi + " > " + activeLI.innerText
    }

    function closeAboutMenu() {
        let submenuUl = document.querySelectorAll(".about_side_menu-submenu ul")
        submenuUl.forEach(allUl => { allUl.style.display = "none" });

    }
    closeAboutMenu();

    function viewLeader(e) {
        closeAboutMenu();
        ulDisplay = e.lastElementChild;
        if (ulDisplay.style.display == "none")
            ulDisplay.style.display = 'block';
        else ulDisplay.style.display = 'none';
    }
    let menuUl = document.querySelectorAll(".about_side_menu-submenu h3")
    menuUl.forEach(allLi => { allLi.classList.add("btn-d") });

}
//about submenu end