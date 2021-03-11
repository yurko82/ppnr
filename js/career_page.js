let arProf = [
    '../images/career/prof/prof_project_1.jpg', '../images/career/prof/prof_project_2.jpg', '../images/career/prof/prof_project_3.jpg',
    '../images/career/prof/prof_project_4.jpg', '../images/career/prof/prof_project_5.jpg', '../images/career/prof/prof_project_6.jpg',
    '../images/career/prof/prof_project_7.jpg'
];
let arProfPreview = [
    '../images/career/prof/prof_project_1_preview.jpg', '../images/career/prof/prof_project_2_preview.jpg', '../images/career/prof/prof_project_3_preview.jpg',
    '../images/career/prof/prof_project_4_preview.jpg', '../images/career/prof/prof_project_5_preview.jpg', '../images/career/prof/prof_project_6_preview.jpg',
    '../images/career/prof/prof_project_7_preview.jpg'
];
let arZvo = [
    '../images/career/zvo/zvo_1.jpg', '../images/career/zvo/zvo_2.jpg', '../images/career/zvo/zvo_3.jpg',
    '../images/career/zvo/zvo_4.jpg'
];
let arZvoPreview = [
    '../images/career/zvo/zvo_1_preview.jpg', '../images/career/zvo/zvo_2_preview.jpg', '../images/career/zvo/zvo_3_preview.jpg',
    '../images/career/zvo/zvo_4_preview.jpg'
];

let textsZvo = ['Загальний вигляд ПТУ ВП РАЕС', 'Кабінет енергетичних дисциплін', 'Слюсарна майстерня', 'Майстерня зварювання', 'Деревообробна майстерня',
    'Бібліотека', 'Кабінет загальноосвітніх дисциплін', 'Кабінет спецтехнологій зварників', 'Спортзал'
];
let textsProf = ['Загальний вигляд ПТУ ВП РАЕС', 'Кабінет енергетичних дисциплін', 'Слюсарна майстерня', 'Майстерня зварювання', 'Деревообробна майстерня',
    'Бібліотека', 'Кабінет загальноосвітніх дисциплін', 'Кабінет спецтехнологій зварників', 'Спортзал'
];

let lightbox1 = new RnppLightbox('photo-gallery-prof', arProfPreview, arProf, textsProf);
let lightbox2 = new RnppLightbox('photo-gallery-zvo', arZvoPreview, arZvo, textsZvo);