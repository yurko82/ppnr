$(".block-title").click((e)=>{
    $(e.target).find('.angle-down').toggleClass('show');
    $(e.target).parent().find('.block-content').toggle(500);
});