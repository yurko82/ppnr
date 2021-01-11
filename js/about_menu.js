$('.about_side_menu .about_side_menu-select>span').text($('.about_side_menu .about_side_menu-submenu li.active').text());
$('.about_side_menu ul.active').click(()=>openSideMenu(false));
$(document).click((e)=>{ 
    if (!$(e.target).parents('.about_side_menu').length) return;
    if (!$(e.target).parents('.about_side_menu-submenu').length && !$(e.target).hasClass('about_side_menu-submenu')
        && !$(e.target).hasClass('about_side_menu-select') && !$(e.target).parents('.about_side_menu-select').length
        && !$(e.target).parents('.about_side_menu-submenu2').length && !$(e.target).hasClass('about_side_menu-submenu2')) 
            openSideMenu(false); 
});

function openSideMenu(open=true){
    if ($(window).width() > 768) return;
    if (open) {
        $('.about_side_menu > ul').addClass('open');
        $('.about_side_menu-select').addClass('hidden');
        if (!activeSubmenu) openSideSubMenu(); 
    } else {
        $('.about_side_menu > ul').removeClass('open');
        $('.about_side_menu-select').removeClass('hidden');
    }
}

let activeSubmenu, submenu=$('.about_side_menu li.about_side_menu-submenu').toArray();
function openSideSubMenu(el) {
    if ($(window).width() > 768) return;
    if (el) {
        if (!activeSubmenu || el!=activeSubmenu) {
            $(activeSubmenu).addClass('not-open-ul');
            $(activeSubmenu).find('h3 > i').removeClass('show');
            $(el).removeClass('not-open-ul');
            $(el).find('h3 > i').addClass('show');
            activeSubmenu=el;
        } else {
            $(activeSubmenu).addClass('not-open-ul');
            $(activeSubmenu).find('h3 > i').removeClass('show');
            activeSubmenu=null;
        }
    } else {
        submenu.forEach(e=>{ 
            if ($(e).find('li.active').length) {
                activeSubmenu=e; 
                $(activeSubmenu).removeClass('not-open-ul');
                $(activeSubmenu).find('h3 > i').addClass('show');
            } else {
                $(e).addClass('not-open-ul');
                $(e).find('h3 > i').removeClass('show');
            }
        });
    }
}
$(window).resize(function() {
    if ($(window).width() > 768) {
        submenu.forEach(el=>{ $(el).removeClass('not-open-ul'); });
        activeSubmenu=null;
    } else {
        if (!activeSubmenu) openSideMenu(false);
    }
});

$('.about_side_menu li.about_side_menu-submenu2 > a').click((e)=>{
    let p=$(e.target).parent();
    $(p).find('ul').first().toggleClass('hidden');
    $(p).find('i').first().toggleClass('show');
    e.preventDefault();
    e.stopPropagation();
});

