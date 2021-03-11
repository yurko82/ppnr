let arNtc = [
    '../images/employee/ntc/ntc_1.jpg', '../images/employee/ntc/ntc_2.jpg', '../images/employee/ntc/ntc_3.jpg',
    '../images/employee/ntc/ntc_4.jpg', '../images/employee/ntc/ntc_5.jpg', '../images/employee/ntc/ntc_6.jpg',
    '../images/employee/ntc/ntc_7.jpg', '../images/employee/ntc/ntc_8.jpg', '../images/employee/ntc/ntc_9.jpg',
    '../images/employee/ntc/ntc_10.jpg', '../images/employee/ntc/ntc_11.jpg', '../images/employee/ntc/ntc_12.jpg',
    '../images/employee/ntc/ntc_13.jpg'
];
let arNtcPreview = [
    '../images/employee/ntc/ntc_1_preview.jpg', '../images/employee/ntc/ntc_2_preview.jpg', '../images/employee/ntc/ntc_3_preview.jpg',
    '../images/employee/ntc/ntc_4_preview.jpg', '../images/employee/ntc/ntc_5_preview.jpg', '../images/employee/ntc/ntc_6_preview.jpg',
    '../images/employee/ntc/ntc_7_preview.jpg', '../images/employee/ntc/ntc_8_preview.jpg', '../images/employee/ntc/ntc_9_preview.jpg',
    '../images/employee/ntc/ntc_10_preview.jpg', '../images/employee/ntc/ntc_11_preview.jpg', '../images/employee/ntc/ntc_12_preview.jpg',
    '../images/employee/ntc/ntc_13_preview.jpg'
];
let arRoc = [
    '../images/employee/roc/roc_1.jpg', '../images/employee/roc/roc_2.jpg', '../images/employee/roc/roc_3.jpg',
    '../images/employee/roc/roc_4.jpg', '../images/employee/roc/roc_5.jpg', '../images/employee/roc/roc_6.jpg',
    '../images/employee/roc/roc_7.jpg', '../images/employee/roc/roc_8.jpg', '../images/employee/roc/roc_9.jpg'
];
let arRocPreview = [
    '../images/employee/roc/roc_1_preview.jpg', '../images/employee/roc/roc_2_preview.jpg', '../images/employee/roc/roc_3_preview.jpg',
    '../images/employee/roc/roc_4_preview.jpg', '../images/employee/roc/roc_5_preview.jpg', '../images/employee/roc/roc_6_preview.jpg',
    '../images/employee/roc/roc_7_preview.jpg', '../images/employee/roc/roc_8_preview.jpg', '../images/employee/roc/roc_9_preview.jpg'
];
let arSp = [
    '../images/employee/sp/sp_1.jpg', '../images/employee/sp/sp_2.jpg', '../images/employee/sp/sp_3.jpg',
    '../images/employee/sp/sp_4.jpg', '../images/employee/sp/sp_5.jpg', '../images/employee/sp/sp_6.jpg'
];
let arSpPreview = [
    '../images/employee/sp/sp_1_preview.jpg', '../images/employee/sp/sp_2_preview.jpg', '../images/employee/sp/sp_3_preview.jpg',
    '../images/employee/sp/sp_4_preview.jpg', '../images/employee/sp/sp_5_preview.jpg', '../images/employee/sp/sp_6_preview.jpg'
];

let textsNtc = ['Загальний вигляд ПТУ ВП РАЕС', 'Кабінет енергетичних дисциплін', 'Слюсарна майстерня', 'Майстерня зварювання', 'Деревообробна майстерня',
    'Бібліотека', 'Кабінет загальноосвітніх дисциплін', 'Кабінет спецтехнологій зварників', 'Спортзал'
];
let textsRoc = ['Загальний вигляд ПТУ ВП РАЕС', 'Кабінет енергетичних дисциплін', 'Слюсарна майстерня', 'Майстерня зварювання', 'Деревообробна майстерня',
    'Бібліотека', 'Кабінет загальноосвітніх дисциплін', 'Кабінет спецтехнологій зварників', 'Спортзал'
];
let textsSp = ['Загальний вигляд ПТУ ВП РАЕС', 'Кабінет енергетичних дисциплін', 'Слюсарна майстерня', 'Майстерня зварювання', 'Деревообробна майстерня',
    'Бібліотека', 'Кабінет загальноосвітніх дисциплін', 'Кабінет спецтехнологій зварників', 'Спортзал'
];

let lightbox1 = new RnppLightbox('photo-gallery-ntc', arNtcPreview, arNtc, textsNtc);
let lightbox2 = new RnppLightbox('photo-gallery-roc', arRocPreview, arRoc, textsRoc);
let lightbox3 = new RnppLightbox('photo-gallery-sp', arSpPreview, arSp, textsSp);