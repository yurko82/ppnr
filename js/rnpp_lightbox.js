class RnppLightbox {
    constructor(parentID, photoURLs, descriptions) {
        this.parent = $('#' + parentID);
        this.photos = photoURLs;
        this.texts = descriptions || [];
        this.slideIndex = 1;

        this.createHTML();
        this.showSlides(this.slideIndex);
    }

    createHTML() {
        let i, l = this.photos.length,
            html = '<div class="rnpp_lightbox"><div class="smallphotos">';
        for (i = 0; i < l; i++) {
            html += `<div class="photo_item"><img src="${this.photos[i]}" style="width:100%" data-num=${parseInt(i+1)} class="hover-shadow pointer"></div>`;
        }
        html += `</div>  <div class="modal">
        <button class="close_button"><a class="icon-close close pointer"></a></button>
        <div class="modal-content"><div class="bigphotos">`;
        for (i = 0; i < l; i++) {
            html += `<div class="bigphoto" draggable="false">
                    <div class="caption-container"><span>${this.texts[i]||''}</span></div>
                    <img draggable="false" src="${this.photos[i]}" style="width:100%">
                    <div class="numbertext-container"><span>${parseInt(i+1)} / ${parseInt(l)}</span></div> 
                </div>`;
        }
        html += `<div class="bigphoto-arrow-container">
            <button class="btn-arrow-lightbox btn-arrow-left"><a class="icon-left-arrow"></a></button>
            <button class="btn-arrow-lightbox btn-arrow-right"><a class="icon-right-arrow"></a></button>
        </div></div>
        <div class="options"><div><span class="numbertext">0/0</span></div> 
                <div class="btn-arrow-container">
                    <button class="btn-arrow-lightbox btn-arrow-left"><a class="icon-left-arrow"></a></button>
                    <button class="btn-arrow-lightbox btn-arrow-right"><a class="icon-right-arrow"></a></button>
                </div></div>`;
        html += '<div class="modal-smallphotos">';
        for (i = 0; i < l; i++) {
            html += `<div class="photo_item"><img class="halftransparent pointer" src="${this.photos[i]}" style="width:100%" data-num=${parseInt(i+1)} alt=""></div>`;
        }
        html += '</div></div>';
        this.parent.html(html);
        this.bigphotos = this.parent.find(".bigphoto").toArray();
        this.dots = this.parent.find(".halftransparent").toArray();
        this.modal = this.parent.find(".modal");
        this.numberText = this.parent.find('.numbertext');
        this.bigphotos.forEach(el => {
            new RnppTouches(el, { swipeLeft: () => this.plusSlides(1), swipeRight: () => this.plusSlides(-1), touch: true, mouse: true });
        });
        this.parent.find('.smallphotos img').click((e)=>{
            this.openModal();
            this.currentSlide(e.target.dataset.num);
        });
        this.parent.find('.modal-smallphotos img').click((e)=>{
            this.currentSlide(e.target.dataset.num);
        });
        this.parent.find('.close_button').click(()=>this.closeModal());
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
}