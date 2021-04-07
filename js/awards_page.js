// about_awards.html
$(document).ready(function() {

    $(".awards li").hover(function() {
        let liId = $(this).attr('id');
        console.log(liId);
        $(".awards__view img").attr('src', '../images/award/' + liId + '.jpg');
    });

});