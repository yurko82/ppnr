let arURLs = [
    '../images/study/study_1.jpg',
    '../images/study/study_2.jpg',
    '../images/study/study_3.jpg',
    '../images/study/study_4.jpg',
    '../images/study/study_5.jpg',
    '../images/study/study_6.jpg',
    '../images/study/study_7.jpg',
    '../images/study/study_8.jpg'
];
let texts = ['Загальний вигляд ПТУ ВП РАЕС', 'Кабінет енергетичних дисциплін', 'Слюсарна майстерня', 'Майстерня зварювання', 'Деревообробна майстерня',
    'Бібліотека', 'Кабінет загальноосвітніх дисциплін', 'Кабінет спецтехнологій зварників', 'Спортзал'
];
let lightbox = new RnppLightbox('photo-gallery', arURLs, arURLs, texts);