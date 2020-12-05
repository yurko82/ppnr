// about_leaders.html, about_leader.html

function viewLeaders() {
    let leader = document.querySelector(".leaders");
    leader.classList.toggle('allView');
}
if ($(window).width() < 768) {
    window.onload = openActiveMenu

    function openActiveMenu() {
        let activeLI = document.querySelector(".about_side_menu-submenu ul li.active")
        if (activeLI) {
            console.log(activeLI)
            activeLI.parentNode.style.display = "block"
        }
    }

    function closeAboutMenu() {
        let submenuUl = document.querySelectorAll(".about_side_menu-submenu ul")
        submenuUl.forEach(allUl => { allUl.style.display = "none" });

    }
    closeAboutMenu();

    function viewLeader(e) {
        closeAboutMenu();
        ulDisplay = e.lastElementChild;
        if (ulDisplay.style.display == "none")
            ulDisplay.style.display = 'block';
        else ulDisplay.style.display = 'none';
    }
    let menuUl = document.querySelectorAll(".about_side_menu-submenu h3")
    console.log(menuUl)
    menuUl.forEach(allLi => { allLi.classList.add("btn-d") });
}