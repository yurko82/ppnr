(function() {

    let slideBG, slideItems, current = 0,
    screenW, pictureW,
    container = $('section.info');

    let data = [{
        type: "baner",
        title: "Covid-19",
        priority: 2,
        bg: "images/img/info/1_bg.jpg",
        pics: { "1280": 'images/img/info/1_1240.jpg', "1000": 'images/img/info/1_1000.jpg', "650": 'images/img/info/1_650.jpg', "400": 'images/img/info/1_400.jpg' },
        url: 'html/some_page1.html',
        use: true
    }, {
        type: "baner",
        title: "РАЕС 5",
        priority: 4,
        bg: "images/img/info/2_bg.jpg",
        pics: { "1280": 'images/img/info/2_1240.jpg', "1000": 'images/img/info/2_1000.jpg', "650": 'images/img/info/2_650.jpg', "400": 'images/img/info/2_400.jpg' },
        url: 'html/some_page2.html',
        use: true
    }, {
        type: "data",
        title: "Показники",
        priority: 7,
        bg: "images/img/info/3_bg.jpg",
        url: 'html/some_page3.html',
        use: true
    }];
    

    function _checkArrayInfo(w) {
        arrayInfo = data.filter(x => x.use && (w >= 768 || x.type != 'data')).sort((a, b) => a.priority > b.priority ? 1 : -1);
    }

    function _initScreenWidth() {
        container.find('.btn-arrow-left').click(() => _moveSlider(false));
        container.find('.btn-arrow-right').click(() => _moveSlider(true));
        screenW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        _checkArrayInfo(screenW);
        _checkScreenWidth();
    }

    function _checkScreenWidth() {
        let t, w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (w > 1280) t = 1920;
        else if (w > 1000) t = 1280;
        else if (w > 700) t = 1000;
        else if (w >= 500) t = 650;
        else t = 400;
        if (t != pictureW || w < 768 && screenW >= 768 || w >= 768 && screenW < 768) {
            pictureW = t;
            if (w < 768 && screenW >= 768 || w >= 768 && screenW < 768) _checkArrayInfo(w);
            _update();
        }
        screenW = w;
    }

    function _update(){
        console.log('update: pictureW: ' + pictureW + ',   screenW: '+screenW);
        if (!arrayInfo.length) {
            container.css('display', 'none');
            return;
        }
        container.css('display','grid');
        current=0;
        document.querySelector('section.info .info__block .title span').innerText = arrayInfo[0].title;

        let i, html = '';
        for (let i = 0; i < arrayInfo.length; i++) {
            html += `<div class="info__parallax-item" style="background-image: url('${arrayInfo[i].bg}');"></div>`;
        }
        document.querySelector('section.info #info-bg-slider').innerHTML = html;

        html='';
        for (i = 0; i < arrayInfo.length; i++) {
            if (arrayInfo[i].type == "baner") {
                html += `<div><img class="info__item" src="${arrayInfo[i].pics[pictureW]||arrayInfo[i].pics['1280']}" alt=""></div>`;
            } else if (arrayInfo[i].type == "data") {
                html += `<div><div class="info__item info__statistic" style="display:flex;">
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
                </div></div>`;
            }
        }
        document.querySelector('section.info #info-items-slider').innerHTML = html;

        if (arrayInfo.length>1) {
            document.querySelector('section.info .btn-arrow-container').style.display ='flex';
            if (slideBG) {
                slideBG.destroy();
                slideBG = slideBG.rebuild();
            } else {
                slideBG = tns({
                    container: '#info-bg-slider',
                    mode: 'gallery',
                    nav: false,
                    controls: false,
                    preventActionWhenRunning: true
                });
            }
            if (slideItems) {
                slideItems.destroy();
                slideItems = slideItems.rebuild();
            } else {
                slideItems = tns({
                    container: '#info-items-slider',
                    nav: false,
                    controls: false,
                    preventActionWhenRunning: true,
                    responsive:{}
                });
            }
        } else document.querySelector('section.info .btn-arrow-container').style.display ='none';
    }

    function _moveSlider(right) {
        if (right) {
            slideBG && slideBG.goTo('next');
            slideItems && slideItems.goTo('next');
            current++;
            if (current>=arrayInfo.length) current=0;
        } else {
            slideBG && slideBG.goTo('prev');
            slideItems && slideItems.goTo('prev');
            current--;
            if (current<0) current=arrayInfo.length-1;
        }
        _changeTitle(arrayInfo[current].title);
    }

    function _changeTitle(stNew) {
        let span = document.querySelector('section.info .info__block .title span');
        let st = span.innerText;
        let timerRemove = setInterval(() => {
            st = st.slice(0, -1);
            span.innerText = st;
            if (st.length == 1) {
                clearInterval(timerRemove);
                st = '';
                let timerAdd = setInterval(() => {
                    st += stNew.charAt(0);
                    span.innerText = st;
                    stNew = stNew.substring(1);
                    if (stNew == '') clearInterval(timerAdd);
                }, 35);
            }
        }, 40);
    }

    document.addEventListener( 'DOMContentLoaded', function(){ _initScreenWidth(); });
    window.addEventListener('resize', _checkScreenWidth);
})();