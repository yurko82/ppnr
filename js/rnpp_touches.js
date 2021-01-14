class RnppTouches{
    constructor(el, opt){
        this.element = el; // array
        this.options = opt; // object
        this.start_x = this.end_x = this.start_y = this.end_y = 0;
        this.addListeners();

        // options {
        //     swipeLeft: null,
        //     swipeRight: null,
        //     swipeUp: null,
        //     swipeDown: null,
        //     data: any,
        //     touch: bool,
        //     mouse: bool,   
        //     drag: bool  
        //     ... and more ...
        // }
    }

    addListeners(){
        if (this.options.touch) {
            this.element.addEventListener('touchstart', (e)=>{
                this.start_x = e.changedTouches[0].screenX;
                this.start_y = e.changedTouches[0].screenY;
            }, false);
            this.element.addEventListener('touchend', (e)=>{
                this.end_x = e.changedTouches[0].screenX;
                this.end_y = e.changedTouches[0].screenY;
                this.handle();
            }, false);
        }
        if (this.options.drag) {
            this.element.addEventListener('dragstart', (e)=>{
                this.start_x = e.screenX;
                this.start_y = e.screenY;
            }, false);
            this.element.addEventListener('dragend', (e)=>{
                this.end_x = e.screenX;
                this.end_y = e.screenY;
                this.handle();
            }, false);
        }
        if (this.options.mouse) {
            this.element.addEventListener('mousedown', (e)=>{
                this.start_x = e.screenX;
                this.start_y = e.screenY;
            }, false);
            this.element.addEventListener('mouseup', (e)=>{
                this.end_x = e.screenX;
                this.end_y = e.screenY;
                this.handle();
            }, false);
        }
    }

    handle(){ 
        let treshold = 5;
        if (this.start_x > this.end_x && this.start_x - this.end_x > treshold) 
            if (this.options.swipeLeft!=null) this.options.swipeLeft.call(null, this.options.data||null);
        if (this.start_x < this.end_x && this.end_x - this.start_x > treshold) 
            if (this.options.swipeRight!=null) this.options.swipeRight.call(null, this.options.data||null);
        if (this.start_y > this.end_y && this.start_y - this.end_y > treshold) 
            if (this.options.swipeUp!=null) this.options.swipeUp.call(null, this.options.data||null);
        if (this.start_y < this.end_y && this.end_y - this.start_y > treshold) 
            if (this.options.swipeDown!=null) this.options.swipeDown.call(null, this.options.data||null);
    }
}