(function() {

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
    }, ];
    let currentInfoNumber = 0,
        _screenWidth = 0,
        _screenPic = 0,
        isAnimate = false,
        isFade, container = $('section.info');

    function _checkArrayInfo(w) {
        arrayInfo = data.filter(x => x.use && (w >= 768 || x.type != 'data')).sort((a, b) => a.priority > b.priority ? 1 : -1);
    }

    function _initScreenWidth() {
        _screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        _checkArrayInfo(_screenWidth);
        _createInfoBlock();
        _checkScreenWidth();
    }

    function _checkScreenWidth() {
        let t, w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (w > 1280) t = 1920;
        else if (w > 1000) t = 1280;
        else if (w > 700) t = 1000;
        else if (w >= 500) t = 650;
        else t = 400;
        if (t != _screenPic || w < 768 && _screenWidth >= 768 || w >= 768 && _screenWidth < 768) {
            _screenPic = t;
            if (w < 768 && _screenWidth >= 768 || w >= 768 && _screenWidth < 768) {
                _checkArrayInfo(w);
                _createInfoBlock();
            }
            _screenWidth = w;
            _updateInfoBlock();
        } else {
            if (_screenWidth < 1300 && _screenWidth != w) _updateCSS();
            _screenWidth = w;
        }
    }

    function _createInfoBlock() {
        let html = '<div class="info__parallax__slider">';
        for (let i = 0; i < arrayInfo.length; i++) {
            if (arrayInfo[i].type == 'data' && _screenWidth < 768) continue;
            html += `<div class="info__parallax" style="background-image: url('${arrayInfo[i].bg}');"></div>`;
        }
        html += '</div>';
        html += '<div class="info_container"></div>';
        html += `<div class="container info__actions">
                    <div class="info__block">
                        <div class="title t-d">
                            <span>${arrayInfo[currentInfoNumber].title}</span>
                        </div>`;
        if (arrayInfo.length > 1) {
            html += `<div class="btn-arrow-container">
                            <button class="btn-arrow btn-arrow-left btn-d pointer"><a class="icon-left-arrow"></a></button>
                            <button class="btn-arrow btn-arrow-right btn-d pointer"><a class="icon-right-arrow"></a></button>
                        </div>`;
        }
        html += `</div>
                    <button class="btn btn-d btn_to-right btn_full-width info__btn" onclick="window.location.href='${arrayInfo[currentInfoNumber].url}'">Подробиці</button>
                </div>`;
        container.html(html).css('height', '550px');

        if (arrayInfo.length > 1) {
            $('.info__parallax__slider').slick({
                speed: 1000,
                dots: false,
                arrows: false,
                fade: true,
                adaptiveHeight: true,
                initialSlide: currentInfoNumber
            });
            container.find('.btn-arrow-left').click(() => _moveSlider(false));
            container.find('.btn-arrow-right').click(() => _moveSlider(true));
        }
    }

    function _updateInfoBlock() {
        if (!arrayInfo.length) _checkArrayInfo();
        if (!arrayInfo.length) {
            container.css('height', '0');
            return;
        }
        let i, html = '<div class="container info__content__slider">',
            countImg = 0;
        for (i = 0; i < arrayInfo.length; i++) {
            if (arrayInfo[i].type == "baner") {
                html += `<img class="info__item" src="${arrayInfo[i].pics[_screenPic]||arrayInfo[i].pics['1280']}" alt="">`;
                countImg++;
            } else if (arrayInfo[i].type == "data") {
                if (_screenWidth < 768) continue;
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
                        </div>
                    </div>
                </div>`;
            }
        }
        html += '</div>';
        container.find('.info_container').html(html);
        $('.info__content__slider').on('afterChange', () => isAnimate = false);
        isFade = _screenWidth <= 1000;
        if (countImg > 0) {
            __onLoadImg = function() {
                countImg--;
                if (countImg <= 0) {
                    $('.info__content__slider').slick({
                        speed: 1200,
                        dots: false,
                        arrows: false,
                        fade: isFade,
                        adaptiveHeight: true,
                        initialSlide: currentInfoNumber
                    });
                    _updateCSS();
                }
            }
            Array.prototype.forEach.call($('img.info__item'), el => { if (el.src) el.onload = () => __onLoadImg(); });
        } else _updateCSS();
    }

    function _updateCSS() {
        let title = container.find('.title'),
            btn = container.find('.info__btn');
        let h1, w1;
        if (_screenWidth > 1280) {
            w1 = 1240;
            h1 = 300;
        } else if (_screenWidth <= 400) {
            w1 = _screenWidth - 24;
            h1 = parseInt(w1 * 300 / 400);
        } else if (_screenWidth < 650) {
            w1 = _screenWidth - 24;
            h1 = parseInt(w1 * 300 / 650);
        } else if (_screenWidth < 1000) {
            w1 = _screenWidth - 24;
            h1 = parseInt(w1 * 300 / 1000);
        } else {
            w1 = _screenWidth - 24;
            h1 = parseInt(w1 * 300 / 1240);
        }
        container.find('.info__content__slider').find('.slick-list, .info__item').css({ 'width': w1 + 'px', 'height': h1 + 'px' });
        container.find('.info__content__slider').find('.slick-track').css('height', h1);
        contentH = h1;

        h1 = title.outerHeight(true);
        h1 = parseInt(title.outerHeight(true) + contentH + btn.outerHeight(true));
        container.css('height', h1);
        container.find('.info__parallax__slider').css('height', h1);
        container.find('.info__parallax__slider').find('.slick-track, .info__parallax').css('height', h1);
        container.find('.info__content__slider').css('height', h1);
        container.find('.info__content__slider').css('top', -h1);
        container.find('.info__actions').css('height', h1);
        container.find('.info__actions').css('top', -2 * h1);
        btn.css('top', contentH);

        //check wrong positions
        if (arrayInfo.length > 1) {
            let cont = container.find('.info__content__slider .slick-track');
            if (!cont.length || !cont[0].style) return;
            let translate3d = _getTranslate3d(cont[0]);
            if (parseInt(translate3d[0]) % w1 == 0) return;
            let i, ar = cont.find('.info__item');
            for (i = 0; i < ar.length; i++) {
                if ($(ar[i]).hasClass('.slick-active')) {
                    cont.css('transform', 'translate3d(' + (-1 * i * w) + 'px,0,0');
                    break;
                }
            }
        }
    }

    function _moveSlider(right) {
        if (isAnimate) return;
        if (right) {
            container.find('.info__parallax__slider').slick('slickNext');
            container.find('.info__content__slider').slick('slickNext');
            isAnimate = true;
            currentInfoNumber++;
        } else {
            container.find('.info__parallax__slider').slick('slickPrev');
            container.find('.info__content__slider').slick('slickPrev');
            isAnimate = true;
            currentInfoNumber--;
        }
        if (currentInfoNumber < 0) currentInfoNumber = arrayInfo.length - 1;
        if (currentInfoNumber >= arrayInfo.length) currentInfoNumber = 0;
        $('.info .info__actions button.info__btn a').attr('href', arrayInfo[currentInfoNumber].url);
        _changeInfoBlockTitle(arrayInfo[currentInfoNumber].title);
    }

    function _changeInfoBlockTitle(stNew) {
        let span = container.find('.info__actions .title span');
        let st = span.text();
        let timerRemove = setInterval(() => {
            st = st.slice(0, -1);
            span.text(st);
            if (st.length == 1) {
                clearInterval(timerRemove);
                st = '';
                let timerAdd = setInterval(() => {
                    st += stNew.charAt(0);
                    span.text(st);
                    stNew = stNew.substring(1);
                    if (stNew == '') clearInterval(timerAdd);
                }, 40);
            }
        }, 40);
        container.find('.info__actions .title span').text(st);
    }

    function _getTranslate3d(el) {
        var values = el.style.transform.split(/\w+\(|\);?/);
        if (!values[1] || !values[1].length) {
            return [];
        }
        return values[1].split(/,\s?/g);
    }

    window.addEventListener('resize', _checkScreenWidth);
    _initScreenWidth();

})();