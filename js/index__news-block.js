(function() {

    let isNewsIntersect = false, isNewsAnimate = false;
    let _screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    function initNewsSlide(el) {
        el.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            speed: _screenWidth >= 1000 ? 2000 : 500,
            adaptiveHeight:true,
            useTransform: false,
            arrows: false,
            responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    };

    function startNewsSlide() {
        if (isNewsAnimate || !isNewsIntersect || _screenWidth<1000) return;
        setTimeout(() => { 
            if (isNewsIntersect && _screenWidth>=1000) {
                isNewsAnimate = true;
                $('.slide1').slick('slickNext');
            }
        }, 3000);
    }
    $('.slide1').on('afterChange', function(_event, _currentSlide) {
        if (_screenWidth>=1000 && isNewsIntersect) $('.slide2').slick('slickNext');
        else isNewsAnimate=false;
    })
    $('.slide2').on('afterChange', function(_event, _currentSlide) {
        if (_screenWidth>=1000 && isNewsIntersect) $('.slide3').slick('slickNext');
        else isNewsAnimate=false;
    })
    $('.slide3').on('afterChange', function(_event, _currentSlide) {
        isNewsAnimate = false;
        startNewsSlide();
    });

    initNewsSlide($('.slide1')); 
    initNewsSlide($('.slide2'));
    initNewsSlide($('.slide3'));

    new IntersectionObserver((ent) => {
        if (ent[0].isIntersecting) {
            isNewsIntersect = true;
            startNewsSlide();
        } else isNewsIntersect = false;
    }, { threshold: [0] }).observe(document.querySelector(".news__slider"));

    window.addEventListener('resize', ()=>{
        let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (w>=1000 && _screenWidth<1000) {
            _screenWidth=w;
            startNewsSlide();
        } else _screenWidth=w;
    });
    
    $('.news .btn-arrow-container').find('.btn-arrow-left').click(()=>{
        $('.slide1').slick('slickPrev');
    });
    $('.news .btn-arrow-container').find('.btn-arrow-right').click(()=>{
        $('.slide1').slick('slickNext');
    });

})();