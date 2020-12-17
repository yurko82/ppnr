$('.about_side_menu .about_side_menu-select>span').text($('.about_side_menu .about_side_menu-submenu li.active').text());
$('.about_side_menu ul.active').click(()=>openSideMenu(false));
$(document).click((e)=>{ 
    if (!$(e.target).parents('.about_side_menu-submenu').length && !$(e.target).hasClass('about_side_menu-submenu')
        && !$(e.target).hasClass('about_side_menu-select') && !$(e.target).parents('.about_side_menu-select').length) 
        openSideMenu(false); 
});

function openSideMenu(open=true){
    if (open) {
        $('.about_side_menu ul').addClass('open');
        $('.about_side_menu-select').css('display','none');
    } else {
        $('.about_side_menu ul').removeClass('open');
        $('.about_side_menu-select').css('display','flex');
    }
}

function viewLeader(e) {}