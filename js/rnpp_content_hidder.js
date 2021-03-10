
(function() {
    $('.rnpp-content-hidder').toArray().forEach(element=>{
        let CONTENT_HEIGHT;
        element.classList.forEach(el=>{
            if (el.includes('rnpp-content-height-')) CONTENT_HEIGHT = parseInt(el.replace('rnpp-content-height-',''));
        });
        if (!CONTENT_HEIGHT) CONTENT_HEIGHT=200;
        if (element.offsetHeight <= CONTENT_HEIGHT) return;
        
        element.style.position = 'relative';
        element.style.height = CONTENT_HEIGHT+"px";
        let html=document.createElement('div');
        html.innerHTML='<div class="rnpp-content-hidder_cont"> <button class="rnpp-content-hidder_btn btn-d btn_to-right info__btn">Більше</button></div>';
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
