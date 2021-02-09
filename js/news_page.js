(function() {
//allnews.html, news.html

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

    // allnews.html
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

    // allnews.html
    function activateTypeNews(icon){ 
        $('ul.allnews__head-btn li.active').removeClass('active');
        $('ul.allnews__head-btn i.fa-'+icon).parent().addClass('active');
     }
    $('ul.allnews__head-btn li:not(.news-type)').click((e)=>{ 
        activateTypeNews(e.target.classList[1].replace('fa-','')); 
    });
    let url = window.location.href.split('?');
    switch (url[1]) {
        case 'news': activateTypeNews('scroll'); break;
        case 'announcements': activateTypeNews('bookmark'); break;
        case 'newspapers': activateTypeNews('book-open'); break;
        case 'videos': activateTypeNews('video'); break;
        default: break;
    } 

})();

// allnews.html
function shownews(n){ window.location.href = window.location.href.replace(/allnews\.html\?.*/, 'news.html?n='+n); }
