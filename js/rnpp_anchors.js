
(function() {
    let toTop=120 + 60;
    let items=[];
    let activeItem, w=0;
    let isAnimate=false;

    function _init(){
        if (!items.length) {
            let menus=$('.side_menu .side_menu-item').toArray().filter(el=> el.dataset.anchor);
            menus.forEach(el=>{
                let ob={};
                ob.anchor = el.dataset.anchor;
                ob.menu_el = el;
                ob.item_el = $('#'+ob.anchor)[0];
                items.push(ob);
            });
        }

        items.forEach(r=>{
            $(r.menu_el).click(()=>{
                _activateItem(r);
                if (!r.top) r.top = $(r.item_el).offset().top;
                isAnimate=true;
                $('html').animate({ 'scrollTop': r.top - toTop }, 1000, 'swing',()=>isAnimate=false);
            });
        });

        $(window).on("scroll",()=>_checkScroll());
        $(window).on('resize',()=>_checkResize());
    }

    function _items_toTop(){
        items.forEach(r=>{
            r.top = $(r.item_el).offset().top;
        });
    }

    function _checkResize(){
        let _w = $(window).width();
        if (_w >= 768) {
            if (w<768) {
                items.length=0;
                _init();
            }
            w=_w;
            _items_toTop();
            _checkScroll();
        }
    }
    function _checkScroll(){
        if (isAnimate) return;
        let t = $(window).scrollTop() - 120;
        for (let i=0;i<items.length;i++){
            if (items[i].top > t){
                _activateItem(items[i]);
                break;
            }
        }
    }

    function _activateItem(item){
        items.forEach(m=>m.menu_el.classList.remove('active'));
        item.menu_el.classList.add('active');
        activeItem=item;
    }

    _checkResize();





})();