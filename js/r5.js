(function() {

    let toTop=0, up=0;
    $(window).resize(function() {
        let _w = window.innerWidth;
        if (_w>=1000) toTop=190;
        else if (_w>768) toTop=210;
        else toTop=258;
        up=0;
        $(window).triggerHandler('scroll');
    });

    $(window).on("scroll", function() {
        if ($(window).scrollTop()>=toTop){
            if (up==1) return;
            $('.container_r5 .big_text_cont').removeClass('big_text_cont-fixed');
            up=1;
        } else{
            if (up==2) return;
            $('.container_r5 .big_text_cont').addClass('big_text_cont-fixed');
            up=2;
        }
    });

    $(window).triggerHandler('resize');
})();