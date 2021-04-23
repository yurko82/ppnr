class RnppInfographics{
    constructor(){
        this.cont=$('.rnpp_infographics');
        this._getData();
    }

    _getData(){
        // get data from server
        this.maxCount=7642;
        this.defaultBGColor='#eeeeee';
        this.data=[{
            count1:7642,
            title1:'Працівників',
            bgColor1:'#005b99'
        },{
            count1:5246,
            title1:'Стать',
            bgColor1:'#41b6e6',
            count2:2397,
            bgColor2:'#e53838'
        },{
            count1:6325,
            title1:'Промисловий персонал',
            bgColor1:'#39b791',
            count2:1317,
            bgColor2:'#ff9600'
        },{
            count1:4100,
            title1:'Вища освіта',
            bgColor1:'#b7295a'
        },{
            count1:44.4,
            title1:'Середній вік',
            bgColor1:'#668986',
            min:20,
            max:60
        }];

        this._createHTML();
    }

    _createHTML(){
        let i,w1,w2,mxc, html='<div class="rnpp_infographics_cont">';
        for (i=0; i<this.data.length; i++){
            if (this.data[i].count1 >= this.maxCount){
                html+=`<div class="rnpp_infographics_line">
                    <div class="rnpp_infographics_block" style="background-color:${this.data[i].bgColor1}; width:100%"><span class="rnpp_infographics_text">${this.data[i].title1}</span>
                        <span class="rnpp_infographics_text-count">${this.data[i].count1}</span></div>   </div>`;
            } else if (!this.data[i].count2){
                if (this.data[i].max) mxc = this.data[i].max-this.data[i].min;
                else mxc = this.maxCount;
                if (!this.data[i].min) this.data[i].min=0;
                w1 = `calc(${(this.data[i].count1-this.data[i].min)/mxc} * (100% - 8px))`;
                w2 = `calc(${(mxc-this.data[i].count1+this.data[i].min)/mxc} * (100% - 8px))`;
                console.log(w2)
                html+=`<div class="rnpp_infographics_line">
                    <div class="rnpp_infographics_block" style="background-color:${this.data[i].bgColor1}; width:${w1}"><span class="rnpp_infographics_text">${this.data[i].title1}</span>
                                        <span class="rnpp_infographics_text-count">${this.data[i].count1}</span></div>
                    <div class="rnpp_infographics_block" style="background-color:${this.defaultBGColor}; width:${w2}"></div>
                </div>`;
            } else {
                mxc = this.data[i].count1+this.data[i].count2;
                w1 = `calc(${(this.data[i].count1)/mxc} * (100% - 8px))`;
                w2 = `calc(${(this.data[i].count2)/mxc} * (100% - 8px))`;
                html+=`<div class="rnpp_infographics_line">
                    <div class="rnpp_infographics_block" style="background-color:${this.data[i].bgColor1}; width:${w1}"><span class="rnpp_infographics_text">${this.data[i].title1}</span>
                                    <span class="rnpp_infographics_text-count">${this.data[i].count1}</span></div>
                    <div class="rnpp_infographics_block rnpp_infographics_block-right" style="background-color:${this.data[i].bgColor2}; width:${w2}">
                                    <span class="rnpp_infographics_text-count">${this.data[i].count2}</span></div>
                </div>`;
            }
        }
        html+='</div>';
        this.cont.html(html);
    }
}

new RnppInfographics();