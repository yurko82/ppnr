let _v = (function(){
    let _queue=[];
    let versionJS = {
        'main':5,
        'index_page':4,
        'index__head-slider-block':3,
        'index__info-block':3,
        'index__news-block':3,
        'leaders_page':5,
        'news_page':4,
        'about_menu':3,
        'about_more_page':2,
        'article_page':2,
        'history_additional':2,
        'rnpp_lightbox':2,
        'rnpp_touches':2,
        'text_blocks':2,
        'about_activity_page':2,
        'allnews':2,
        'awards_page':2,
        'career_page':2,
        'culture_page':2,
        'employee_page':2,
        'leaders_page':2,
        'new_page_single':2,
        'r5':2,
        'region_page':2,
        'rest_page':2,
        'rnpp_anchors':2,
        'rnpp_content_hidder':2,
        'rnpp_infographics':2,
        'sport_page':2,
        'study_page':2
    };

    let versionCSS = {
        'rnpp-icons':4,
        'page_index':9,
        'page_news':9,
        'page_allnews':9,
        'page_about':9,
        'page_about_history':10,
        'page_about_leader':9,
        'common':4
    }

    let getJSversion=function(filename){ return versionJS[filename]||''; }
    let getCSSversion=function(filename){ return versionCSS[filename]||''; }

    let addFile = function(src,head=0){
        let [filename,ext] = src.split('/').pop().split('.');
        _queue.push({head:head, src:src, filename:filename, ext:ext, count:0});
        if (_queue.length==1) _loadQueue();
    };

    let _loadQueue=function(){
        if (!_queue.length) return;
        let s, file;
        file = _queue[0];
        if (file.ext=='js') {
            s = document.createElement('script');
            s.setAttribute('src',file.src+'?v='+getJSversion(file.filename));
        } else if (file.ext=='scss' || file.ext=='css'){
            s = document.createElement('link');
            s.setAttribute('rel',"stylesheet");
            s.setAttribute('href',file.src+'?v='+getCSSversion(file.filename));
        } else console.error('_version:: Unsupported extension: '+file.ext);
        s.onload = () => {
            _queue.shift();
            _loadQueue();
        }
        s.onerror = () => {
            console.error("_version:: Error loading: " + file.src); 
            if (_queue[0].count<1) _queue[0].count++;
            else _queue.shift(); 
            _loadQueue();
          };
        file.head ? document.head.appendChild(s) : document.body.appendChild(s);
    };

    return {
        js: getJSversion,
        css: getCSSversion,
        add: addFile
    }

})();