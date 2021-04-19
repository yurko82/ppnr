// about_awards.html
$(document).ready(function() {
    $(".awards li").click(function() {
        if ($(window).width()<1000) return;
        let liId = $(this).attr('id');
        $(".awards__view img").attr('src', '../images/award/' + liId + '.jpg');
    });
});

let arNtc = [
    '../images/award/award_1.jpg', '../images/award/award_2.jpg', '../images/award/award_3.jpg',
    '../images/award/award_4.jpg', '../images/award/award_5.jpg', '../images/award/award_6.jpg',
    '../images/award/award_7.jpg', '../images/award/award_8.jpg',
    '../images/award/award_10.jpg', '../images/award/award_11.jpg', '../images/award/award_12.jpg',
    '../images/award/award_13.jpg', '../images/award/award_14.jpg', '../images/award/award_15.jpg'
];
let textsNtc = ['Загальний вигляд ПТУ ВП РАЕС', 'Кабінет енергетичних дисциплін', 'Слюсарна майстерня', 'Майстерня зварювання', 'Деревообробна майстерня',
    'Бібліотека', 'Кабінет загальноосвітніх дисциплін', 'Кабінет спецтехнологій зварників', 'Спортзал'
];
let lightboxAwards = new RnppLightbox('photo-gallery-awards', arNtc, arNtc, textsNtc);