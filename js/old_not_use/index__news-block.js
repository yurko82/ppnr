(function() {

    let isNewsIntersect = false, isNewsAutoAnimate = false, isAnimate = false;
    let _screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    function initNewsSlide(el) {
        el.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            speed: 1000,
            adaptiveHeight:true,
            useTransform: false,
            arrows: false,
            responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    speed: 500
                }
            }, {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 300
                }
            }]
        });
    };

    function startNewsAutoSlide() {
        if (isNewsAutoAnimate || !isNewsIntersect || _screenWidth<1000) return;
        setTimeout(() => { 
            if (isNewsIntersect && _screenWidth>=1000) {
                isNewsAutoAnimate = true;
                $('.slide1').slick('slickNext');
            }
        }, 3000);
    }
    $('.slide1').on('afterChange', function(_event, _currentSlide) {
        if (isAnimate) isAnimate=false;
        else 
            if (_screenWidth>=1000 && isNewsIntersect) $('.slide2').slick('slickNext');
            else isNewsAutoAnimate=false;
    })
    $('.slide2').on('afterChange', function(_event, _currentSlide) {
        if (_screenWidth>=1000 && isNewsIntersect) $('.slide3').slick('slickNext');
        else isNewsAutoAnimate=false;
    })
    $('.slide3').on('afterChange', function(_event, _currentSlide) {
        isNewsAutoAnimate = false;
        startNewsAutoSlide();
    });

    initNewsSlide($('.slide1')); 
    initNewsSlide($('.slide2'));
    initNewsSlide($('.slide3'));

    new IntersectionObserver((ent) => {
        if (ent[0].isIntersecting) {
            isNewsIntersect = true;
            startNewsAutoSlide();
        } else isNewsIntersect = false;
    }, { threshold: [0] }).observe(document.querySelector(".news__slider"));

    window.addEventListener('resize', ()=>{
        let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (w>=1000 && _screenWidth<1000) {
            _screenWidth=w;
            startNewsAutoSlide();
        } else _screenWidth=w;
    });
    
    $('.news .btn-arrow-container').find('.btn-arrow-left').click(()=>{
        if (isNewsAutoAnimate || isAnimate) {
            console.log('left:: isNewAutoAnimate: ' + isNewsAutoAnimate + ';   isAnimate: ' + isAnimate);
            return;
        }
        isAnimate=true;
        $('.slide1').slick('slickPrev');
    });
    $('.news .btn-arrow-container').find('.btn-arrow-right').click(()=>{
        if (isNewsAutoAnimate || isAnimate) {
            console.log('right:: isNewAutoAnimate: ' + isNewsAutoAnimate + ';   isAnimate: ' + isAnimate);
            return;
        }
        isAnimate=true;
        $('.slide1').slick('slickNext');
    });

})();