<template>
<div class="textEditViewStyle" :style="textEditViewStyle"> 

<div style="position:absolute;left:0px;top:0px;width:100%;height:54px;background-color:white;">       
<div @click="cancel" style="position:absolute;top:10px;left:10px;width:40px;height:30px;text-align:center;line-height:30px;">撤回</div>  
<div @click="hidden" style="position:absolute;top:10px;right:10px;width:40px;height:30px;text-align:center;line-height:30px;">完成</div>    
</div> 





<div style="position:absolute;left:0px;bottom:0px;background-color:white; width:100%;">

<div style="margin-top:10px;width:100%;display:flex;flex-direction:row;">
    <div v-for="(fontFamily,index) in fontFamilys" :key="index" :style="{flex:1,border:'0.05px rgba(200,200,200,0.2) solid',backgroundColor:'white',fontSize:'14px',fontFamily:fontFamily.family,textAlign:'center'}" @click="selectFontFamily(index)">{{ fontFamily.name }}</div>
</div>

<div style="margin-top:10px;width:100%;display:flex;flex-direction:row;">
    <div v-for="(fontSize,index) in fontSizes" :key="index" :style="{flex:1,border:'0.1px rgba(200,200,200,0.2) solid',backgroundColor:'white',fontSize:fontSize.size,textAlign:'center'}" @click="selectFontSize(index)">{{ fontSize.name }}</div>
</div>

<div style="margin-top:10px;width:100%;height:30px;display:flex;flex-direction:row;">
    <div v-for="(color,index) in colors" :key="index" :style="{flex:1,border:'0.1px rgba(200,200,200,0.2) solid',backgroundColor:color}" @click="selectColor(index)"></div>
</div>

<input class="inputTextStyle" type="text"  placeholder="请输入文字" v-model="textParam.textPara.title"> 
</div>

</div>    
</template>
<script>
var textParamTem = {}
function copy( obj ){
    // JSON解析之类的其实如果给定格式不对很容易出错滴，自己做好检验~
    return JSON.parse( JSON.stringify( obj ) );
}
export default {
    
    data(){
       return{
            // textParamTem:{},
            // "serif"、"sans-serif"、"cursive"、"fantasy"、"monospace"
            fontFamilys:[
                {family:'KaiTi',name:'楷体'},
                {family:'cursive',name:'cursive'},
                {family:'fantasy',name:'fantasy'},
                {family:'monospace',name:'monospace'},
            ],
            colors:[
                'black',
                'red',
                'orange',
                'yellow',
                'green',
                'blue',
                'purple',
                'brown',
                'white',
                                                                
            ],
            fontSizes:[
                {size:'10px',name:'10号'},
                {size:'12px',name:'12号'},
                {size:'14px',name:'14号'},
                {size:'16px',name:'16号'},
                {size:'18px',name:'18号'},
                {size:'20px',name:'20号'},
                {size:'24px',name:'24号'},
                {size:'28px',name:'28号'},
                {size:'32px',name:'32号'},
                {size:'36px',name:'36号'},                              
                {size:'40px',name:'40号'}
            ],
            textParam:{},
            textEditViewStyle:{
                visibility: 'hidden'
            }  
       }
    },
    methods:{
        selectFontFamily(index){
            let family = this.fontFamilys[index].family;
            // alert(family);
            this.textParam.textPara.fontFamily = family;
        },
        selectFontSize(index){
            let size = this.fontSizes[index].size;
            this.textParam.textPara.fontSize = size;
        },
        selectColor(index){
            let color = this.colors[index];
            this.textParam.textPara.color = color;
            

        },
        show(textParameter){
        
            textParamTem = copy(textParameter);

            this.textParam =  textParameter;
            this.textEditViewStyle.visibility = 'visible';
        },


        cancel(){
            this.textParam.textPara.title = textParamTem.textPara.title ;
            this.hidden();
        },
        hidden(){
            this.textEditViewStyle.visibility = 'hidden'
        }
    }
}
</script>
<style scoped>
.textEditViewStyle{

   position: absolute;
   top: 0px;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.4);
}
.inputTextStyle{
    outline: none;
    border-radius: 15px;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.3);
    font-size: 16px;
    /* position: absolute; */
    bottom: 10px;
    padding-left: 10px;
    width: calc(100% - 40px);
    height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;


    margin-left: 20px;


}

</style>
