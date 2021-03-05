let _v = (function(){
    let _queue=[];
    let versionJS = {
        'main':4,
        'index_page':3,
        'index__head-slider-block':2,
        'index__info-block':2,
        'index__news-block':2,
        'leaders_page':4,
        'news_page':3,
        'about_menu':2,
        'about_more_page':1,
        'article_page':1,
        'history_additional':1,
        'rnpp_lightbox':2,
        'rnpp_touches':1,
        'text_blocks':1
    };

    let versionCSS = {
        'rnpp-icons':3,
        'page_index':7,
        'page_news':7,
        'page_allnews':7,
        'page_about':8,
        'page_about_history':10,
        'page_about_leader':8,
        'common':3
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