<template>
<div class="textEditViewStyle" :style="textEditViewStyle"> 

<div style="position:absolute;left:0px;top:0px;width:100%;height:54px;background-color:white;">       
<div @click="cancel" style="position:absolute;top:10px;left:10px;width:40px;height:30px;text-align:center;line-height:30px;">撤回</div>  
<div @click="hidden" style="position:absolute;top:10px;right:10px;width:40px;height:30px;text-align:center;line-height:30px;">完成</div>    
</div> 



<div style="position:absolute;left:0px;bottom:0px;background-color:white; width:100%;height:60px;">
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
            textParam:{},
            textEditViewStyle:{
                visibility: 'hidden'
            }  
       }
    },
    methods:{
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
   background-color: rgba(0.2, 0.2, 0.2, 0.3);
}
.inputTextStyle{
    border-radius: 15px;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.3);
    font-size: 16px;
    position: absolute;
    bottom: 10px;
    padding-left: 10px;
    width: calc(100% - 40px);
    height: 30px;

    left: 0px;
    right: 0px;
    margin-left: auto;
    margin-right: auto;

}

</style>
