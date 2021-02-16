let arBlocks = $('.block').toArray();
$(".block-title").click((e) => {
    let bt, p = $(e.target).parent().toArray()[0];
    arBlocks.forEach(el => {
        if (el == p) {
            $(e.target).toggleClass('show');
            $(e.target).find('.angle-down').toggleClass('show');
            $(p).find('.block-content').toggle(300);
        } else {
            bt = $($(el).find('.block-title')[0]);
            if (bt.hasClass('show')) {
                bt.removeClass('show');
                bt.find('.angle-down').removeClass('show');
                $(el).find('.block-content').toggle(300);
            }
        }
    });
});
