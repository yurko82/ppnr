let arURLs = [
    'https://www.rnpp.rv.ua/assets/images/ptu/p01.jpg',
    'https://www.rnpp.rv.ua/assets/images/ptu/p02.jpg',
    'https://www.rnpp.rv.ua/assets/images/ptu/p03.jpg',
    'https://www.rnpp.rv.ua/assets/images/ptu/p04.jpg',
    'https://www.rnpp.rv.ua/assets/images/ptu/p05.jpg',
    'https://www.rnpp.rv.ua/assets/images/ptu/p06.jpg',
    'https://www.rnpp.rv.ua/assets/images/ptu/p07.jpg',
    'https://www.rnpp.rv.ua/assets/images/ptu/p08.jpg',
    'https://www.rnpp.rv.ua/assets/images/ptu/p09.jpg'
];
let texts = ['Загальний вигляд ПТУ ВП РАЕС', 'Кабінет енергетичних дисциплін', 'Слюсарна майстерня', 'Майстерня зварювання', 'Деревообробна майстерня',
    'Бібліотека', 'Кабінет загальноосвітніх дисциплін', 'Кабінет спецтехнологій зварників', 'Спортзал'
];
let lightbox = new RnppLightbox('photo-gallery', arURLs, arURLs, texts);