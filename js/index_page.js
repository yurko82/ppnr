(function() {
// index.html

    AOS.init({
        offset: 30,
        duration: 800,
        once: true
    });

 //fix index head-slider
    function vhSlideDebug() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setTimeout(vhSlideDebug, 50);

    //slick slider for widget
    $('#slick-slide-control10').focus();
    $('.widget__slider').slick({
        speed: 500,
        dots: true,
        arrows: false,
        fade: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                swipe: false
            }
        }]
    });

    //tabs for widget
    $('.widget .slick-dots li  button').click(function() {
        let $bgColor = $(this).css("background-color");
        if ($(window).width() > 767) {
            $('.widget').css({ 'background-color': $bgColor, 'width': '328px' });
        } else {
            $('.widget').css({ 'background-color': $bgColor, 'width': '100%' });
        }
    });
    $(document).mouseup(function(e) {
        if ($(window).width() > 767) {
            let div = $(".widget");
            if (!div.is(e.target) && div.has(e.target).length == 0)
                div.css('width', '0');
        }
    });

})();