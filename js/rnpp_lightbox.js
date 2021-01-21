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
        <button onclick="lightbox.closeModal()"><a class="icon-close close cursor"></a></button>
        <div class="modal-content"><div class="bigphotos">`;
        for (i=0;i<l;i++){
            html+=`<div class="bigphoto" draggable="false">
                    <img draggable="false" src="${this.photos[i]}" style="width:100%">
                    <div class="caption-container"><span>${this.texts[i]}</span></div>
                    <div class="numbertext-container"><span>${parseInt(i+1)} / ${parseInt(l)}</span></div> 
                </div>`;
        }
        html+=`<div class="bigphoto-arrow-container">
            <button class="btn-arrow btn-d btn-arrow-left pointer white" onclick="lightbox.plusSlides(-1)"><a class="icon-left-arrow"></a></button>
            <button class="btn-arrow btn-d btn-arrow-right pointer white" onclick="lightbox.plusSlides(1)"><a class="icon-right-arrow"></a></button>
        </div></div>
        <div class="options"><div><span class="numbertext">0/0</span></div> 
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
        this.bigphotos=this.parent.find(".bigphoto").toArray();
        this.dots=this.parent.find(".halftransparent").toArray();
        this.modal=this.parent.find(".modal");
        this.numberText = this.parent.find('.numbertext');
        this.bigphotos.forEach(el => {
            new RnppTouches(el, {swipeLeft: ()=>this.plusSlides(1), swipeRight: ()=>this.plusSlides(-1), touch:true, mouse:true});
        });
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
        this.numberText.text(n+' / '+this.bigphotos.length);
    }
}

