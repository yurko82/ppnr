let arRegion = [
    '../images/region/region_1.jpg', '../images/region/region_2.jpg', '../images/region/region_3.jpg', '../images/region/region_4.jpg', '../images/region/region_5.jpg'
];
let arRegionPreview = [
    '../images/region/region_1-preview.jpg', '../images/region/region_2-preview.jpg', '../images/region/region_3-preview.jpg', '../images/region/region_4-preview.jpg', '../images/region/region_5-preview.jpg'
];
let textsRegion = [
    'Загальний вигляд', 'Головний вхід', 'Зона очікування та відпочинку', 'Номер напівлюкс', 'Номер напівлюкс'
];
let lightboxRegion = new RnppLightbox('photo-gallery-region', arRegionPreview, arRegion, textsRegion);