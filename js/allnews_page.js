(function() {

   
    $('.news-type').on('click', function() {
        if ($(this).children('i').hasClass("icon-news-th")) {
            $(this).children('i').removeClass("icon-news-th").addClass("icon-news-bars");
            $('.news__block, .allnews__block').toggleClass("gallery");
        } else if ($(this).children('i').hasClass("icon-news-bars")) {
            $(this).children('i').removeClass("icon-news-bars").addClass("icon-news-th-list");
            $('.news__block, .allnews__block').toggleClass("gallery");
            $('.news__block-img').css("display", "none");
        } else {
            $(this).children('i').removeClass("icon-news-th-list").addClass("icon-news-th");
            $('.news__block-img').css("display", "block");
        }
    });

    function activateTypeNews(icon){ 
        console.log(icon);
        $('ul.allnews__head-btn i.active').removeClass('icon-news_full icon-announcement_full icon-newspaper_full icon-video_full active');
        $('ul.allnews__head-btn i.icon-'+icon).addClass('active icon-'+icon+'_full');
     }
    $('ul.allnews__head-btn li:not(.news-type) i').click((e)=>{ 
        activateTypeNews(e.target.classList[0].replace('icon-','')); 
    });
    let url = window.location.href.split('?');
    switch (url[1]) {
        case 'news': activateTypeNews('news'); break;
        case 'announcements': activateTypeNews('announcement'); break;
        case 'newspapers': activateTypeNews('newspaper'); break;
        case 'videos': activateTypeNews('video'); break;
        default: break;
    } 

})();

function shownews(n){ window.location.href = window.location.href.replace(/allnews\.html\?.*/, 'news.html?n='+n); }
