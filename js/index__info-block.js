(function() {

    let current = 0,
        screenW = 0,
        pictureW, isAnimate = false,
        isFade, container = $('section.info'),
        arrayInfo = [];

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
        if (screenW == 0 || t != pictureW || w < 768 && screenW >= 768 || w >= 768 && screenW < 768) {
            pictureW = t;
            if (screenW == 0 || w < 768 && screenW >= 768 || w >= 768 && screenW < 768) _checkArrayInfo(w);
            _update();
        }
        screenW = w;
    }

    function _update() {
        if (!arrayInfo.length) {
            container.css('display', 'none');
            return;
        }

        container.css('display', 'grid');
        current = 0;
        document.querySelector('section.info .info__block .title span').innerText = arrayInfo[0].title;

        let i, html = '',
            countImg = 0;
        for (let i = 0; i < arrayInfo.length; i++) {
            html += `<div class="info__parallax-item" style="background-image: url('${arrayInfo[i].bg}');"></div>`;
        }
        document.querySelector('section.info #info-bg-slider').innerHTML = html;

        html = '<div id="info-items-slider">';
        for (i = 0; i < arrayInfo.length; i++) {
            if (arrayInfo[i].type == "baner") {
                html += `<img class="info__item" src="${arrayInfo[i].pics[pictureW]||arrayInfo[i].pics['1280']}" alt="">`;
                countImg++;
            } else if (arrayInfo[i].type == "data") {
                html += `<div class="info__item info__statistic" style="display:flex;">
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
                            <span class="info__statistic_title">Радіаційний стан</span>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <span class="text flex-grow-1">Пром. майданчик</span>
                                <span class="pokaz">0.09</span>
                                <span class="odin">мкЗв/г</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <span class="text flex-grow-1">м. Вараш</span>
                                <span class="pokaz">0.08</span>
                                <span class="odin">мкЗв/г</span>
                            </div>
                        </div>
                    </div>
                </div>`;
            }
        }
        html += '</div>';
        document.querySelector('section.info #info-items-slider_container').innerHTML = html;
        isFade = screenW <= 1000;

        if (arrayInfo.length > 1) {
            document.querySelector('section.info .btn-arrow-container').style.display = 'flex';
            if (countImg > 0) {
                __onLoadImg = function() {
                    countImg--;
                    if (countImg <= 0) {
                        $('#info-items-slider').slick({
                            speed: 600,
                            dots: false,
                            arrows: false,
                            fade: isFade,
                            adaptiveHeight: true,
                            accessibility: false
                        });
                        $('section.info #info-bg-slider').slick({
                            speed: 600,
                            dots: false,
                            arrows: false,
                            fade: true,
                            accessibility: false
                        });
                        $('section.info #info-items-slider').on('afterChange', () => isAnimate = false);
                        $('section.info .slick-list.draggable').css('height', '100%');
                        _btn();
                    }
                }
                Array.prototype.forEach.call($('section.info #info-items-slider img.info__item'), el => { if (el.src) el.onload = () => __onLoadImg(); });
            }
        } else document.querySelector('section.info .btn-arrow-container').style.display = 'none';
    }

    function _moveSlider(right) {
        if (isAnimate) return;
        isAnimate = true;
        if (right) {
            $('section.info #info-bg-slider').slick('slickNext');
            $('section.info #info-items-slider').slick('slickNext');
            current++;
            if (current >= arrayInfo.length) current = 0;
        } else {
            $('section.info #info-bg-slider').slick('slickPrev');
            $('section.info #info-items-slider').slick('slickPrev');
            current--;
            if (current < 0) current = arrayInfo.length - 1;
        }
        _changeTitle(arrayInfo[current].title);
        _btn();
    }

    function _btn() {
        container.find('button.info__btn').on('click', () => {
            window.location = window.location.href.replace('index.html', '') + arrayInfo[current].url;
            return false;
        });
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

    function _getTranslate3d(el) {
        var values = el.style.transform.split(/\w+\(|\);?/);
        if (!values[1] || !values[1].length) {
            return [];
        }
        return values[1].split(/,\s?/g);
    }

    // document.addEventListener( 'DOMContentLoaded', function(){ _initScreenWidth(); });
    window.addEventListener('resize', _checkScreenWidth);
    _initScreenWidth();
})();