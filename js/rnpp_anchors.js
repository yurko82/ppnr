
(function() {
    let toTop=120 + 60;
    let items=[];

    function _init(){
        if (!items.length) {
            let menus=$('.side_menu .side_menu-item').toArray().filter(el=> el.dataset.anchor);
            menus.forEach(el=>{
                let ob={};
                ob.anchor = el.dataset.anchor;
                ob.menu_el = el;
                ob.item_el = $('#'+ob.anchor)[0];
            });
        }

        items.forEach(r=>{
            $(r.menu_el).click(()=>{
                items.forEach(m=>m.menu_el.classList.remove('active'));
                r.menu_el.classList.add('active');
                let top = r.item_el.offset().top;
                $('html').animate({ 'scrollTop': top - toTop }, 1000);
            });
        });

        // $(window).on("scroll", function() {
        //     if ($(window).width() > 999) {
        //         if ($(window).scrollTop() > 90) $('.header').addClass('scroll_page');
        //         else $('.header').removeClass('scroll_page');
        //     }
        // });
    }

    _init();







})();