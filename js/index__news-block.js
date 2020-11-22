(function() {
    // isMove -> only for screenW<1000 && move by arrows click
    // isPlay -> only for screenW>=1000 && move by code

    let isNewsIntersect = false, isPlay = false, isMove = false, screenW=0, container=$('section.news .news__slider');
    let data=[{ 
            id:123,
            type:'anons', 
            photo:'images/temp/covid-19.png',
            title:'Епідемічна ситуація на Рівненській АЕС станом на 10 липня',
            date:'10 липня'
        },{ 
            id:214,
            type:'newspaper', 
            photo:'images/temp/2020-03-12_08-41_88360876_2834225239988671_8031683199656525824_o.png',
            title:'На Рівненській АЕС триває технічне обслуговування електротехнічного обладнання',
            date:'15 липня'
        },{ 
            id:673,
            type:'video', 
            photo:'images/temp/2020-07-03_15-43_Blue_and_White3.png',
            title:'Цьогоріч на РАЕС вже працевлаштовано 11 випускників профільних вишів',
            date:'32 серпня'
        },{
            id:987,
            type:'anons', 
            photo:'images/temp/choven.jpg',
            title:'У червні показники якості скидної води залишалися незмінними',
            date:'12 травня'
        },{
            id: 944,
            type:'simplenews', 
            photo:'images/temp/rok-b-o.jpg',
            title:'У червні показники якості скидної води залишалися незмінними',
            date:'01 січня'
        },{
            id:3927,
            type:'important', 
            photo:'images/temp/covid-19.png',
            title:'Епідемічна ситуація на Рівненській АЕС станом на 10 липня',
            date:'25 вересня'
        }];

    function _checkScreenW(){
        let w = screenW;
        screenW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (w==0 || screenW>=1000 && w<1000 || screenW<1000 && w>=1000) _update();
    }

    function _update(){
        if ($('.slide1')) $('.slide1').slick('unslick');
        if ($('.slide2')) $('.slide2').slick('unslick');
        if ($('.slide3')) $('.slide3').slick('unslick');
        isNewsIntersect=false;
        isPlay=false;
        isMove=false;

        let html='';
        if (screenW>=1000){
            html+=_createSlide(1,data.slice(0,2));
            html+=_createSlide(2,data.slice(1,3));
            html+=_createSlide(3,data.slice(2));
        } else html+=_createSlide(1,data.slice());
        container.html(html);

        if (screenW>=100){
            initNewsSlide($('.slide1')); 
            initNewsSlide($('.slide2'));
            initNewsSlide($('.slide3'));
        } else initNewsSlide('.slide1');

        $('.slide1').on('afterChange',()=>{
            if (screenW>=1000) $('.slide2').slick('slickNext');
            else isMove=false;
        })
        if (screenW>=1000){
            $('.slide2').on('afterChange',()=>$('.slide3').slick('slickNext'));
            $('.slide3').on('afterChange',()=>{
                isPlay = false;
                startNewsAutoSlide();
            });

            new IntersectionObserver((ent) => {
                if (ent[0].isIntersecting) {
                    isNewsIntersect = true;
                    startNewsAutoSlide();
                } else isNewsIntersect = false;
            }, { threshold: [0] }).observe(document.querySelector(".news__slider"));

            startNewsAutoSlide();
        }
    }

    function _createSlide(n,ar){
        let i,r,html=`<div class="news__items slide${n}">`;
        for (i=0;i<ar.length;i++){
            r=_getNewsType(ar[i].type);
            html+=`<div class="news__item ${r[0]}" onclick="window.location.href='html/news.html?${ar[i].id}'">
                    <div class="news__item-img" style="background-image: url(${ar[i].photo})"></div>
                    <div class="news__item-title"> <h3>${ar[i].title}</h3> </div>
                    <span class="news__item-date">${ar[i].date}</span>
                    <span class="news__item-type ${r[2]}"><i class="${r[1]}"></i>${r[3]}</span>
                </div>`;
        }
        html+='</div>';
        return html; //<div class="news__item-img"><img src=${ar[i].photo} alt="" /></div>
    }

    function _getNewsType(type){
        let className, icon, bgColor, title;
        switch (type) {
            case 'anons': className='anons'; icon='icon-announcement'; bgColor='bg-green1'; title='Анонс'; break;
            case 'newspaper': className='newspaper'; icon='icon-newspaper'; bgColor='bg-blue4'; title='Газета'; break;
            case 'video': className='video'; icon='icon-video'; bgColor='bg-red1'; title='Відео'; break;
            case 'simplenews': className='simplenews'; icon='icon-news'; bgColor='bg-blue3'; title='Новина'; break;
            case 'important': className='important'; icon='icon-bookmark'; bgColor='bg-red3'; title='Важливо'; break;
        }
        return [className,icon,bgColor,title];
    }

    function initNewsSlide(el) {
        el.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 800,
            adaptiveHeight:true,
            useTransform: false,
            arrows: false,
            autoplay: false,
            responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    speed: 500
                }
            }, {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 300
                }
            }]
        });
    };

    function startNewsAutoSlide() {
        if (isPlay || !isNewsIntersect || screenW<1000) return;
        setTimeout(() => { 
            if (isNewsIntersect && screenW>=1000 && !isPlay) {
                isPlay = true;
                $('.slide1').slick('slickNext');
            }
        }, 3000);
    }

    $('section.news .btn-arrow-container .btn-arrow-left').click(()=>{
        if (isMove) return;
        isMove=true;
        $('.slide1').slick('slickPrev');
    });
    $('section.news .btn-arrow-container .btn-arrow-right').click(()=>{
        if (isMove) return;
        isMove=true;
        $('.slide1').slick('slickNext');
    });

    document.addEventListener( 'DOMContentLoaded', _checkScreenW);
    window.addEventListener('resize', _checkScreenW);
    
})();
