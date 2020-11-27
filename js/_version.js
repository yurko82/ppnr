let _v = (function(){

    let versionJS = {
        'main':3,
        'index_page':3,
        'index__head-slider-block':2,
        'index__info-block':2,
        'index__news-block':2,
        'leaders_page':3,
        'news_page':3
    };

    let versionCSS = {
        'rnpp-icons':3,
        'page_index':7,
        'page_news':7,
        'page_allnews':7,
        'page_about':7,
        'page_about_history':7,
        'page_about_leader':7,
        'common':1
    }

    let getJSversion=function(filename){ return versionJS[filename]||''; }
    let getCSSversion=function(filename){ return versionCSS[filename]||''; }

    let addFile = function(src,head=0){
        let [filename,ext] = src.split('/').pop().split('.'), s;
        if (ext=='js') {
            s = document.createElement('script');
            s.setAttribute('src',src+'?v='+getJSversion(filename));
        } else {
            s = document.createElement('link');
            s.setAttribute('rel',"stylesheet");
            s.setAttribute('href',src+'?v='+getCSSversion(filename));
        }
        head ? document.head.appendChild(s) : document.body.appendChild(s);
    }

    return {
        js: getJSversion,
        css: getCSSversion,
        add: addFile
    }

})();