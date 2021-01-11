class RnppLightbox {
    constructor(parentID, photoURLs, descriptions){
        this.parent=$('#'+parentID);
        this.photos=photoURLs;
        this.texts=descriptions;
        this.slideIndex = 1;

        this.createHTML();
        this.showSlides(this.slideIndex);
    }

    createHTML(){
        let i,l=this.photos.length, html='<div class="rnpp_lightbox"><div class="row">';
        for (i=0;i<l;i++){
            html+=`<div class="column pointer"><img src="${this.photos[i]}" style="width:100%" onclick="lightbox.openModal();lightbox.currentSlide(${parseInt(i+1)})" class="hover-shadow cursor"></div>`;
        }
        html+=`</div>  <div class="modal">
        <button class="" onclick="lightbox.closeModal()"><a class="icon-close close cursor"></a></button>
        <div class="caption-container"><p>Caption</p></div>
        <div class="modal-content">`;
        for (i=0;i<l;i++){
            html+=`<div class="bigphoto">
                    <img src="${this.photos[i]}" style="width:100%">
                </div>`;
        }
        html+=`<div class="options"><div><span class="numbertext">0/0</span></div> 
                <div class="btn-arrow-container">
                    <button class="btn-arrow btn-d btn-arrow-left pointer white" onclick="lightbox.plusSlides(-1)"><a class="icon-left-arrow"></a></button>
                    <button class="btn-arrow btn-d btn-arrow-right pointer white" onclick="lightbox.plusSlides(1)"><a class="icon-right-arrow"></a></button>
                </div></div>`;
        html+='<div class="columns">';
        for (i=0;i<l;i++){
            html+=`<div class="column"><img class="halftransparent pointer" src="${this.photos[i]}" style="width:100%" onclick="lightbox.currentSlide(${parseInt(i+1)})" alt=""></div>`;
        }
        html+='</div></div>';
        this.parent.html(html);
        this.bigphotos=this.parent.find(".bigphoto");
        this.dots=this.parent.find(".halftransparent");
        this.modal=this.parent.find(".modal");
        this.captionText = this.parent.find(".caption-container p");
        this.numberText = this.parent.find('.numbertext');
    }

    openModal(){ this.modal.css("display", "block"); }
    closeModal(){ this.modal.css("display", "none"); }
    plusSlides(n){ 
        this.slideIndex += n;
        while (this.slideIndex<1) this.slideIndex += this.photos.length;
        while (this.slideIndex>this.photos.length) this.slideIndex -= this.photos.length;
        this.showSlides(this.slideIndex); 
    }
    currentSlide(n){ this.showSlides(this.slideIndex = n); }
    
    showSlides(n) {
        let i; 
        if (n > this.bigphotos.length) this.slideIndex = 1;
        if (n < 1) this.slideIndex = this.bigphotos.length;
        for (i=0; i<this.bigphotos.length; i++) {
            this.bigphotos[i].style.display="none";
        }
        for (i=0; i<this.dots.length; i++){
            this.dots[i].className = this.dots[i].className.replace(" active", "");
        }
        this.bigphotos[this.slideIndex-1].style.display = "block";
        this.dots[this.slideIndex-1].className += " active";
        this.captionText.text(this.texts[this.slideIndex-1] || ''); //this.dots[this.slideIndex-1].alt;
        this.numberText.text(n+' / '+this.bigphotos.length);
    }
}

