// about_leaders.html, about_leader.html

function viewLeaders() {
    let leader = document.querySelector(".leaders");
    leader.classList.toggle('allView');
}
if ($(window).width() < 768) {
    window.onload = openActiveMenu

    function openSubmenu() {
        document.querySelector(".about_side_menu ul").classList.toggle('open')
    }

    function openActiveMenu() {
        let activeLI = document.querySelector(".about_side_menu-submenu ul li.active")
        if (activeLI) {
            console.log(activeLI)
            activeLI.parentNode.style.display = "block"
        }
        document.querySelector(".about_side_menu-current").innerText = activeLI.innerText
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
    menuUl.forEach(allLi => { allLi.classList.add("btn-d") });

}