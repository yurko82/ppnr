(function() {

    let isWebP=false, picW=0, container=$('section.head-slider .head-slider__items'),s;
    let data=[{
        photoJPG: {"600":["images/bg/600/_1"], "1000":["images/bg/1000/_1"], "1920":["images/bg/_1"]},
        photoWEBP:{"600":["images/bg/600/_1"], "1000":["images/bg/1000/_1"], "1920":["images/bg/_1"]},
        title:"Чиста<br>енергія"
    },{
        photoJPG: {"600":["images/bg/600/_2"], "1000":["images/bg/1000/_2"], "1920":["images/bg/_2"]},
        photoWEBP:{"600":["images/bg/600/_2"], "1000":["images/bg/1000/_2"], "1920":["images/bg/_2"]},
        title:"Пріоритет &#8212;<br>безпека"
    },{
        photoJPG: {"600":["images/bg/600/_3"], "1000":["images/bg/1000/_3"], "1920":["images/bg/_3"]},
        photoWEBP:{"600":["images/bg/600/_3"], "1000":["images/bg/1000/_3"], "1920":["images/bg/_3"]},
        title:"Команда<br>професіоналів"
    },{
        photoJPG: {"600":["images/bg/600/_4"], "1000":["images/bg/1000/_4"], "1920":["images/bg/_4"]},
        photoWEBP:{"600":["images/bg/600/_4"], "1000":["images/bg/1000/_4"], "1920":["images/bg/_4"]},
        title:"Доступна<br>енергія"
    },{
        photoJPG: {"600":["images/bg/600/_5"], "1000":["images/bg/1000/_5"], "1920":["images/bg/_5"]},
        photoWEBP:{"600":["images/bg/600/_5"], "1000":["images/bg/1000/_5"], "1920":["images/bg/_5"]},
        title:"Розвиток<br>регіону"
    },{
        photoJPG: {"600":["images/bg/600/_6"], "1000":["images/bg/1000/_6"], "1920":["images/bg/_6"]},
        photoWEBP:{"600":["images/bg/600/_6"], "1000":["images/bg/1000/_6"], "1920":["images/bg/_6"]},
        title:"Можливості<br>успішної кар’єри"
    },{
        photoJPG: {"600":["images/bg/600/_7"], "1000":["images/bg/1000/_7"], "1920":["images/bg/_7"]},
        photoWEBP:{"600":["images/bg/600/_7"], "1000":["images/bg/1000/_7"], "1920":["images/bg/_7"]},
        title:"Вдосконалення<br>виробництва"
    },{
        photoJPG: {"600":["images/bg/600/_8"], "1000":["images/bg/1000/_8"], "1920":["images/bg/_8"]},
        photoWEBP:{"600":["images/bg/600/_8"], "1000":["images/bg/1000/_8"], "1920":["images/bg/_8"]},
        title:"Турбота<br>про майбутнє"
    }];

    function _checkScreenW(){
        let w = picW, 
            screenW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (screenW<=600) picW=600;
        else if (screenW<=1000) picW=1000;
        else picW=1920;
        if (w==0 || picW!=w) _update();
    }

    function _update(){
        if (s) $('.head-slider__items').slick('unslick');
        let i,html='',ar=data.slice();
        ar.sort(()=>.5-Math.random());
        if (ar.length>4) ar.length=4;
        for (i=0;i<ar.length;i++){
            html+=_createItem(ar[i]);
        }
        container.html(html);

        s=$('.head-slider__items').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 3000,
            dots: true,
            arrows: false,
            fade: true,
            pauseOnHover: false
        });
    }

    function _createItem(obj){
        // <span class="blackItalic yellow">
        let html=`<div class=" head-slider__item " style=" background-image: url(${isWebP ? obj.photoWEBP[picW]+'.webp' : obj.photoJPG[picW]+'.jpg'});">
            <div class="head-slider__text"><span class="text-shadow">${obj.title}</span></div>
            <div class="head-slider__overlay"></div>  </div>`;
        return html;
    }

    // document.addEventListener('DOMContentLoaded',()=>{
        let WebP = new Image();
        WebP.onload = WebP.onerror = ()=> {
            isWebP = (WebP.height === 2);
            window.addEventListener('resize', _checkScreenW);
            _checkScreenW();
        }
        WebP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    // });
    
})();