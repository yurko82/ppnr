(function() {
    //allnews.html, news.html

    $('.article__img-slider').slick({
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



})();