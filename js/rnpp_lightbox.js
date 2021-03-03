class RnppLightbox {
    constructor(parentID, photoURLs, descriptions) {
        this.parent = $('#' + parentID);
        this.photos = photoURLs;
        this.texts = descriptions || [];
        this.slideIndex = 1;
        this.isDrag=false;
        this.landscape=false;
        this.createHTML();

        window.addEventListener('resize',()=> this.checkScreenW());
        this.checkScreenW('init');
    }

    createHTML() {
        let i, l = this.photos.length,
            html = '<div class="rnpp_lightbox"><div class="grid-smallphotos">';
        for (i = 0; i < l; i++) {
            html += `<div class="photo_item">
                <div class="photo_item-inner hover-shadow pointer" style="background-image: url(${this.photos[i]})" data-num=${parseInt(i+1)}></div>
            </div>`;
        }
        html += `</div>  <div class="modal">
        <div class="modal-content"><div class="bigphotos">`;
        for (i = 0; i < l; i++) {
            html += `<div class="bigphoto" draggable="false">
                    <div class="caption-container"><span>${this.texts[i]||''}</span></div>
                    <div class="bigphoto_img" style="background-image: url(${this.photos[i]})" draggable="false"></div>
                    <div class="numbertext-container"><span>${parseInt(i+1)} / ${parseInt(l)}</span></div> 
                </div>`;
        }
        html += `<div class="bigphoto-arrow-container">
            <button class="btn-lightbox btn-lightbox-arrow btn-arrow-left"><a class="icon-left-arrow"></a></button>
            <button class="btn-lightbox btn-lightbox-arrow btn-arrow-right"><a class="icon-right-arrow"></a></button>
        </div></div>
        <div class="options"><div><span class="numbertext">0/0</span></div> 
                <div class="btn-arrow-container">
                    <button class="btn-lightbox btn-lightbox-arrow btn-arrow-left"><a class="icon-left-arrow"></a></button>
                    <button class="btn-lightbox btn-lightbox-arrow btn-arrow-left"><a class="icon-right-arrow"></a></button>
                </div></div>`;
        html += '<div class="modal-smallphotos"><div class="modal-smallphotos-line">';
        for (i = 0; i < l; i++) {
            html += `<div class="photo_item">
                <div class="photo_item-inner halftransparent pointer" style="background-image: url(${this.photos[i]})" data-num=${parseInt(i+1)}></div>
            </div>`;
        }
        html += '</div></div><button class="btn-lightbox btn-lightbox-close"><a class="icon-close pointer"></a></button></div>';
        this.parent.html(html);
        this.bigphotos = this.parent.find(".modal .bigphoto").toArray();
        this.dots = this.parent.find(".modal .modal-smallphotos .photo_item-inner").toArray();
        this.modal = this.parent.find(".modal");
        this.numberText = this.parent.find('.numbertext');
        this.bigphotos.forEach(el => {
            new RnppTouches(el, { swipeLeft: () => this.plusSlides(1), swipeRight: () => this.plusSlides(-1), touch: true, mouse: true });
        });
        this.parent.find('.grid-smallphotos .photo_item-inner').click((e)=>{
            console.log(e.target);
            this.openModal();
            this.currentSlide(e.target.dataset.num);
        });
        this.parent.find('.modal-smallphotos .photo_item-inner').mouseup((e)=>{ if (!this.isDrag) this.currentSlide(e.target.dataset.num); });
        this.parent.find('button.btn-lightbox-close').click(()=>this.closeModal());
        this.parent.find('button.btn-arrow-left').click(()=>this.plusSlides(-1));
        this.parent.find('button.btn-arrow-right').click(()=>this.plusSlides(1));
    }

    openModal() { this.modal.css("display", "block"); }
    closeModal() { this.modal.css("display", "none"); }
    plusSlides(n) {
        this.slideIndex += n;
        while (this.slideIndex < 1) this.slideIndex += this.photos.length;
        while (this.slideIndex > this.photos.length) this.slideIndex -= this.photos.length;
        this.showSlides(this.slideIndex);
    }
    currentSlide(n) { this.slideIndex = parseInt(n); this.showSlides(this.slideIndex); }

    showSlides(n) {
        let i;
        if (n > this.bigphotos.length) this.slideIndex = 1;
        if (n < 1) this.slideIndex = this.bigphotos.length;
        for (i = 0; i < this.bigphotos.length; i++) {
            this.bigphotos[i].style.display = "none";
        }
        for (i = 0; i < this.dots.length; i++) {
            this.dots[i].className = this.dots[i].className.replace(" active", "");
        }
        this.bigphotos[this.slideIndex - 1].style.display = "block";
        this.dots[this.slideIndex - 1].className += " active";
        this.numberText.text(n + ' / ' + this.bigphotos.length);
    }

    releaseDrag(){
        let contX=this.parent.find('.modal-smallphotos-line')[0];
        let contY=this.parent.find('.modal-smallphotos')[0];
        if (!contX || !contY) return;
        let a,aD,aInit, $contX=$(contX), $contY=$(contY);
        contY.scrollTop=0;
        contX.scrollLeft=0;
        $contX.unbind('mouseup');
        $contX.unbind('mousemove');
        $contX.unbind('mousedown');
        $contY.unbind('mouseup');
        $contY.unbind('mousemove');
        $contY.unbind('mousedown');

        if (this.landscape) {
            $contX.mousedown((e)=>{ 
                aInit = a = e.pageX;
                $contX.mouseup((e)=>{
                    $contX.unbind('mouseup');
                    $contX.unbind('mousemove');
                    this.isDrag=false;
                });
                $contX.mousemove((e)=>{
                    aD = a - e.pageX;
                    a = e.pageX;
                    contX.scrollLeft += aD;
                    if (!this.isDrag && Math.abs(aInit-a)>5 ) this.isDrag=true;
                });
            })
        } else{
            $contY.mousedown((e)=>{ 
                aInit = a = e.pageY;
                $contY.mouseup((e)=>{
                    $contY.unbind('mouseup');
                    $contY.unbind('mousemove');
                    this.isDrag=false;
                });
                $contY.mousemove((e)=>{
                    aD = a - e.pageY;
                    a = e.pageY;
                    contY.scrollTop += aD;
                    if (!this.isDrag && Math.abs(aInit-a)>5) this.isDrag=true;
                });
            })
        }
        $(document).mouseup((e)=>{
            if (!this.isDrag) return;
            if (this.landscape) $contX.triggerHandler('mouseup');
            else $contY.triggerHandler('mouseup');
        });
    }

    checkScreenW(e){
        let w = $(window).width(), h = $(window).height();
        let ls = w>=1280 || w*0.98 > h;
        if (this.landscape != ls || e=="init") {
            this.landscape = ls;
            this.releaseDrag();
        }

    }
}