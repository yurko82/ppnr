(function() {

    let data = [{
        type:"baner",
        title:"Covid-19",
        priority:2,
        bg:"images/img/info/1_bg.jpg",
        pics:{"1280":'images/img/info/1_1240.jpg', "1000":'images/img/info/1_1000.jpg', "650":'images/img/info/1_650.jpg'},
        url:"html/some_page1.html",
        use:true
    },{
        type:"baner",
        title:"Реактор 5",
        priority:4,
        bg:"images/img/info/2_bg.jpg",
        pics:{"1280":'images/img/info/2_1240.jpg', "1000":'images/img/info/2_1000.jpg', "650":'images/img/info/2_650.jpg'},
        url:"html/some_page2.html",
        use:true
    },{
        type:"data",
        title:"Показники",
        priority:3,
        bg:"images/img/info/3_bg.jpg",
        url:"html/some_page3.html",
        use:true
    }];
    let currentInfoNumber=0, _screenWidth=0, arrayInfo=data.filter(x=>x.use).sort((a,b)=>a.priority>b.priority ? 1: -1);

    function _checkScreenWidth(){
        let t, w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (w>1000) t=1280;
        else if (w>700) t=1000;
        else t=650;
        if (t!=_screenWidth){
            _screenWidth=t;
            _updateInfoBlock();
        }
    }
    function _updateInfoBlock(){
        if (!arrayInfo.length) {
            $('section.info').html('').css('height','0');
            return;
        }
        let i,html='';
        html+='<div class="info__parallax__slider">';
        for (i=0;i<arrayInfo.length;i++){
            html+=`<div class="info__parallax" style="background-image: url('${arrayInfo[i].bg}');"></div>`;
        }
        html+='</div>';

        html+='<div class="container info__content__slider">';
        for (i=0;i<arrayInfo.length;i++){
            if (arrayInfo[i].type=="baner"){
                html+=`<img class="info__item" src="${arrayInfo[i].pics[_screenWidth]}" alt="">`;
            } else if (arrayInfo[i].type=="data"){
                html+=`<div class="info__item info__statistic">
                    <div class="info__statistic-item bg-green1">
                        <div class="info__statistic-content">
                            <span class="info__statistic_title">Вироблено електроенергії</span>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <span class="text flex-grow-1">доба</span>
                                <span class="pokaz">57.1</span>
                                <span class="odin">млн кВт*год</span>
                            </div>
                            <div class="widget_elektro-mis d-flex justify-content-between align-items-baseline">
                                <span class="text flex-grow-1">місяць</span>
                                <span class="pokaz">14.3</span>
                                <span class="odin">млрд кВт*год</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <span class="text flex-grow-1">рік</span>
                                <span class="pokaz">1173</span>
                                <span class="odin">млрд кВт*год</span>
                            </div>
                            <span class="info__statistic_title">Вартість електроенергії</span>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <span class="text flex-grow-1"></span>
                                <span class="pokaz">0.57</span>
                                <span class="odin">грн/кВт*год</span>
                            </div>
                        </div>
                    </div>
                    <div class="info__statistic-item bg-green4">
                        <div class="info__statistic-content">
                            <span class="info__statistic_title">Не потрапило до атосфери СО2</span>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <span class="text flex-grow-1"></span>
                                <span class="pokaz">45 631 </span>
                                <span class="odin">тонн</span>
                            </div>
                            <span class="info__statistic_title">За добу зекономлено</span>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <span class="text flex-grow-1">нафти</span>
                                <span class="pokaz">27 413 </span>
                                <span class="odin">тонн</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <span class="text flex-grow-1">вугілля</span>
                                <span class="pokaz">9 631 </span>
                                <span class="odin">тонн</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <span class="text flex-grow-1">газу</span>
                                <span class="pokaz">8 605 </span>
                                <span class="odin">тонн</span>
                            </div>
                        </div>
                    </div>
                    <div class="info__statistic-item bg-blue4">
                        <div class="info__statistic-content">
                            <span class="info__statistic_title">Метеорологічний стан</span>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <span class="text flex-grow-1">температура</span>
                                <span class="pokaz">26.8</span>
                                <span class="odin">C</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <span class="text flex-grow-1">швидкість вітру</span>
                                <span class="pokaz">1.8</span>
                                <span class="odin">м/с</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <span class="text flex-grow-1">вологість</span>
                                <span class="pokaz">46</span>
                                <span class="odin">%</span>
                            </div>
                        </div>
                    </div>
                </div>`;
            }
        }
        html+='</div>';
        html+=` <div class="container info__actions">
                    <div class="info__block">
                        <div class="title t-d">
                            <span>${arrayInfo[currentInfoNumber].title}</span>
                        </div>`;
        if (arrayInfo.length>1) {
            html +=    `<div class="btn-arrow-container">
                            <button class="btn-arrow btn-arrow-left btn-d pointer"><a class="icon-angle-right"></a></button>
                            <button class="btn-arrow btn-arrow-right btn-d pointer"><a class="icon-angle-right"></a></button>
                        </div>`;
        }
        html +=    `</div>
                    <button class="btn btn-d btn_to-right info__btn" onclick="window.location.href="${arrayInfo[currentInfoNumber].url}"><a>Подробиці</a></button>
                </div>`;
        $('section.info').html(html).css('height','544px');

        if (arrayInfo.length>1) {
            $('.info__parallax__slider').slick({
                speed: 1000,
                dots: false,
                arrows: false,
                fade: true
            });
            $('.info__content__slider').slick({
                speed: 1000,
                dots: false,
                arrows: false,
                fade: false
            });

            $('.info .btn-arrow-left').click(()=>_moveSlider(false));
            $('.info .btn-arrow-right').click(()=>_moveSlider(true));
        }
    }
    function _moveSlider(right){
        if (right) { 
            $('.info__parallax__slider').slick('slickNext');
            $('.info__content__slider').slick('slickNext');
            currentInfoNumber++;
        } else {
            $('.info__parallax__slider').slick('slickPrev');
            $('.info__content__slider').slick('slickPrev');
            currentInfoNumber--; 
        }
        if (currentInfoNumber<0) currentInfoNumber=arrayInfo.length-1;
        if (currentInfoNumber>=arrayInfo.length) currentInfoNumber=0;
           $('.info .info__actions button.info__btn a').attr('href', arrayInfo[currentInfoNumber].url);
        _changeInfoBlockTitle(arrayInfo[currentInfoNumber].title);
        // _checkContainerHeight(); //  for positionY of button
    }
    function _changeInfoBlockTitle(stNew){
        let span=$('.info .info__actions .title').find('span');
        let st = span.text();
        let timerRemove = setInterval(()=>{
            st=st.slice(0,-1);
            span.text(st);
            if (st.length==1){
                clearInterval(timerRemove);
                st='';
                let timerAdd = setInterval(()=>{
                    st+=stNew.charAt(0);
                    span.text(st);
                    stNew=stNew.substring(1);
                    if (stNew=='') clearInterval(timerAdd);
                },40);
            }
        },40);
        $('.info .info__actions .title').find('span').text(st);
    }

    _checkScreenWidth();

})();
