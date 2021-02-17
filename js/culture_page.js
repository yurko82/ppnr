let arURLs=[
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-19_1.jpg',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-19_DSC_1111.JPG',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-18_kfjgkf.JPG',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-19_DSC_1170.JPG',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-19_DSC_1171.JPG',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-19_DSC_1664.JPG',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-18_DSC_2605.JPG',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-18_DSC_2673.JPG',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-18_DSC_3647.JPG',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-18_DSC_4110.JPG',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-18_DSC_9691.JPG',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-18_DSC_4616.JPG',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-18_DSC_5904.JPG',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-18_DSC_6021.JPG',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-18_DSC_6179-2.jpg',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-18_DSC_6450.JPG',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-18_DSC_7456.JPG',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-18_DSC_6977.JPG',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-18_DSC_9039.JPG',
    'https://www.rnpp.rv.ua/assets/images/palaz/2019-04-25_12-18_DSC_7503-2.jpg'

];
let texts=[];
let lightbox = new RnppLightbox('photo-gallery', arURLs, texts);

function toogleProfList(){
    $('.profession_list').toggle(300);
}
