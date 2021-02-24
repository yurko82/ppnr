
(function() {
    $('.rnpp-content-hidder').toArray().forEach(element=>{
        const CONTENT_HEIGHT = 200;
        
        if (element.offsetHeight <= CONTENT_HEIGHT) return;
        
        element.style.position = 'relative';
        element.style.height = CONTENT_HEIGHT+"px";
        let html=document.createElement('div');
        html.innerHTML='<div class="rnpp-content-hidder_cont"> <button class="rnpp-content-hidder_btn btn-d btn_to-right info__btn">Дізнатись більше</button></div>';
        html.classList.add('rnpp-content-hidder_white-gradient');
        element.appendChild(html);
        $(element).find('button').click(()=>{
            html.remove();
            element.style.height = "auto";
        });
        
        // window.addEventListener('resize', _checkScreenW);
        // _checkScreenW();
    });

})();
