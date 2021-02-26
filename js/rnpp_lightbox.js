class RnppLightbox {
    constructor(parentID, photoURLs, descriptions) {
        this.parent = $('#' + parentID);
        this.photos = photoURLs;
        this.texts = descriptions || [];
        this.slideIndex = 1;
        this.isDrag=false;
        this.createHTML();
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
                    <img draggable="false" src="${this.photos[i]}" style="width:100%">
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
        this.releaseDrag(this.parent.find('.modal-smallphotos-line')[0]);
    }

    openModal() { this.modal.css("display", "block"); }
    closeModal() { this.modal.css("display", "none"); }
    plusSlides(n) {
        this.slideIndex += n;
        while (this.slideIndex < 1) this.slideIndex += this.photos.length;
        while (this.slideIndex > this.photos.length) this.slideIndex -= this.photos.length;
        this.showSlides(this.slideIndex);
    }
    currentSlide(n) { this.showSlides(this.slideIndex = n); }

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

    releaseDrag(cont){
        let x,xD,xInit, $cont=$(cont);
        $cont.mousedown((e)=>{ 
            xInit = x = e.pageX;
            $cont.mouseup((e)=>{
                $cont.unbind('mouseup');
                $cont.unbind('mousemove');
                this.isDrag=false;
            });
            $cont.mousemove((e)=>{
                xD = x - e.pageX;
                x = e.clientX;
                cont.scrollLeft += xD;
                if (!this.isDrag && Math.abs(xInit-x)>5) this.isDrag=true;
            });
        })
    }
}