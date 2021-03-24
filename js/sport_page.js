let arSc = [
    '../images/sport/sc/sc_1.jpg', '../images/sport/sc/sc_2.jpg', '../images/sport/sc/sc_3.jpg',
    '../images/sport/sc/sc_4.jpg', '../images/sport/sc/sc_5.jpg', '../images/sport/sc/sc_6.jpg',
    '../images/sport/sc/sc_7.jpg', '../images/sport/sc/sc_8.jpg', '../images/sport/sc/sc_9.jpg',
    '../images/sport/sc/sc_10.jpg', '../images/sport/sc/sc_11.jpg', '../images/sport/sc/sc_12.jpg',
    '../images/sport/sc/sc_13.jpg'
];
let arScPreview = [
    '../images/sport/sc/sc_1_preview.jpg', '../images/sport/sc/sc_2_preview.jpg', '../images/sport/sc/sc_3_preview.jpg',
    '../images/sport/sc/sc_4_preview.jpg', '../images/sport/sc/sc_5_preview.jpg', '../images/sport/sc/sc_6_preview.jpg',
    '../images/sport/sc/sc_7_preview.jpg', '../images/sport/sc/sc_8_preview.jpg', '../images/sport/sc/sc_9_preview.jpg',
    '../images/sport/sc/sc_10_preview.jpg', '../images/sport/sc/sc_11_preview.jpg', '../images/sport/sc/sc_12_preview.jpg',
    '../images/sport/sc/sc_13_preview.jpg', '../images/sport/sc/sc_14_preview.jpg', '../images/sport/sc/sc_15_preview.jpg'
];
let arSz = [
    '../images/sport/sz/sz_1.jpg', '../images/sport/sz/sz_2.jpg', '../images/sport/sz/sz_3.jpg',
    '../images/sport/sz/sz_4.jpg', '../images/sport/sz/sz_5.jpg', '../images/sport/sz/sz_6.jpg',
    '../images/sport/sz/sz_7.jpg', '../images/sport/sz/sz_8.jpg', '../images/sport/sz/sz_9.jpg',
    '../images/sport/sz/sz_10.jpg', '../images/sport/sz/sz_11.jpg', '../images/sport/sz/sz_12.jpg',
    '../images/sport/sz/sz_13.jpg', '../images/sport/sz/sz_14.jpg'
];
let arSzPreview = [
    '../images/sport/sz/sz_1_preview.jpg', '../images/sport/sz/sz_2_preview.jpg', '../images/sport/sz/sz_3_preview.jpg',
    '../images/sport/sz/sz_4_preview.jpg', '../images/sport/sz/sz_5_preview.jpg', '../images/sport/sz/sz_6_preview.jpg',
    '../images/sport/sz/sz_7_preview.jpg', '../images/sport/sz/sz_8_preview.jpg', '../images/sport/sz/sz_9_preview.jpg',
    '../images/sport/sz/sz_10_preview.jpg', '../images/sport/sz/sz_11_preview.jpg', '../images/sport/sz/sz_12_preview.jpg',
    '../images/sport/sz/sz_13_preview.jpg', '../images/sport/sz/sz_14_preview.jpg'
];

let arSp = [
    '../images/sport/sp/sp_1.jpg', '../images/sport/sp/sp_2.jpg', '../images/sport/sp/sp_3.jpg',
    '../images/sport/sp/sp_4.jpg', '../images/sport/sp/sp_5.jpg', '../images/sport/sp/sp_6.jpg',
    '../images/sport/sp/sp_7.jpg', '../images/sport/sp/sp_8.jpg', '../images/sport/sp/sp_9.jpg',
    '../images/sport/sp/sp_10.jpg', '../images/sport/sp/sp_11.jpg', '../images/sport/sp/sp_12.jpg',
    '../images/sport/sp/sp_13.jpg', '../images/sport/sp/sp_14.jpg'
];
let arSpPreview = [
    '../images/sport/sp/sp_1_preview.jpg', '../images/sport/sp/sp_2_preview.jpg', '../images/sport/sp/sp_3_preview.jpg',
    '../images/sport/sp/sp_4_preview.jpg', '../images/sport/sp/sp_5_preview.jpg', '../images/sport/sp/sp_6_preview.jpg',
    '../images/sport/sp/sp_7_preview.jpg', '../images/sport/sp/sp_8_preview.jpg', '../images/sport/sp/sp_9_preview.jpg',
    '../images/sport/sp/sp_10_preview.jpg', '../images/sport/sp/sp_11_preview.jpg', '../images/sport/sp/sp_12_preview.jpg',
    '../images/sport/sp/sp_13_preview.jpg', '../images/sport/sp/sp_14_preview.jpg'
];

let textsSc = ['Загальний вигляд ПТУ ВП РАЕС', 'Кабінет енергетичних дисциплін', 'Слюсарна майстерня', 'Майстерня зварювання', 'Деревообробна майстерня',
    'Бібліотека', 'Кабінет загальноосвітніх дисциплін', 'Кабінет спецтехнологій зварників', 'Спортзал'
];
let textsSz = ['Загальний вигляд ПТУ ВП РАЕС', 'Кабінет енергетичних дисциплін', 'Слюсарна майстерня', 'Майстерня зварювання', 'Деревообробна майстерня',
    'Бібліотека', 'Кабінет загальноосвітніх дисциплін', 'Кабінет спецтехнологій зварників', 'Спортзал'
];
let textsSp = ['Загальний вигляд ПТУ ВП РАЕС', 'Кабінет енергетичних дисциплін', 'Слюсарна майстерня', 'Майстерня зварювання', 'Деревообробна майстерня',
    'Бібліотека', 'Кабінет загальноосвітніх дисциплін', 'Кабінет спецтехнологій зварників', 'Спортзал'
];

let lightboxSc = new RnppLightbox('photo-gallery-sc', arScPreview, arSc, textsSc);
let lightboxSz = new RnppLightbox('photo-gallery-sz', arSzPreview, arSz, textsSz);
let lightboxSp = new RnppLightbox('photo-gallery-sp', arSpPreview, arSp, textsSp);