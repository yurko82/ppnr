(function() {

    let arBlocks = $('.allabout__content .block').toArray();
    $(".block-title").click((e)=>{
        let bt, p=$(e.target).parent().toArray()[0];
        arBlocks.forEach(el => {
            if (el==p){
                $(e.target).toggleClass('show');
                $(e.target).find('.angle-down').toggleClass('show');
                $(p).find('.block-content').toggle(300);
            } else {
                bt=$($(el).find('.block-title')[0]);
                if (bt.hasClass('show')){
                    bt.removeClass('show');
                    bt.find('.angle-down').removeClass('show');
                    $(el).find('.block-content').toggle(300);
                }
            }
        });
    });

    let arURLs=[
        'https://www.rnpp.rv.ua/assets/images/czentr/poles/infocentr_2017_1.jpg',
        'https://www.rnpp.rv.ua/assets/images/czentr/poles/infocentr_2017_2.jpg',
        'https://www.rnpp.rv.ua/assets/images/czentr/poles/infocentr_2017_3.jpg',
        'https://www.rnpp.rv.ua/assets/images/czentr/poles/infocentr_2017_4.jpg',
        'https://www.rnpp.rv.ua/assets/images/czentr/poles/infocentr_2017_5.jpg',
        'https://www.rnpp.rv.ua/assets/images/czentr/poles/infocentr_2017_6.jpg',
        'https://www.rnpp.rv.ua/assets/images/czentr/poles/infocentr_2017_7.jpg',
        'https://www.rnpp.rv.ua/assets/images/czentr/poles/infocentr_2017_8.jpg',
        'https://www.rnpp.rv.ua/assets/images/czentr/poles/infocentr_2017_9.jpg',
        'https://www.rnpp.rv.ua/assets/images/czentr/poles/infocentr_2017_10.jpg'
    ];
    let texts=['Опис 1', 'Опис 2', '', 'Опис 4', 'Опис 5', 'Опис 6', 'Опис 7', 'Опис 8', 'Опис 9', 'Опис 10'];
    let lightbox = new RnppLightbox('photo-gallery', arURLs, texts);

})();