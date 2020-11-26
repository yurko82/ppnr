(function() {
// about_leaders.html, about_leader.html


})();


function viewLeaders() {
    let leader = document.querySelector(".leaders");
    leader.classList.toggle('allView');
}
if ($(window).width() < 768) {
    function closeAboutMenu() {
        document.querySelectorAll(".allabout__menu-submenu ul").forEach(allUl => { allUl.style.display = "none" });
    }
    closeAboutMenu();

    function viewLeader(e) {
        closeAboutMenu();
        ulDisplay = e.lastElementChild;
        if (ulDisplay.style.display == "none")
            ulDisplay.style.display = 'block';
        else ulDisplay.style.display = 'none';
    }
}
