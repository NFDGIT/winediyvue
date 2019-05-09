<template>
<div class="buyAlertStyle" :style="{visibility:visibilityState}" @click="hidden">
<div class="buyContent">



<div class="goodsContent">
    <img class="goodsImgStyle"  ref="goodsImg"  >
    <div style="width:200px;height:40px;display:inline-block;margin-left:10px;">
        <div style="font-size:18px;color:rgba(0,0,0,0.8);">{{ goodsInfo.name }}</div>
        <div style="font-size:12px;color:rgba(0,0,0,0.8);">{{ goodsInfo.desc }}</div>
    </div>
</div>



<div class="paramViewStyle" v-for="(paramType,typeIndex) in paramTypes" :key="typeIndex">

   <div style="display:inline-block;width:40px;height:20px;margin-top:5px;color:rgba(0,0,0,0.8);font-size:16px;text-align:center;">{{ paramType.name }}</div>
   <div style="display:inline-block;flex:1;">
       <div class="paramItemStyle"  v-for="(param,paramIndex) in paramType.params" :style="{color:param.isSelected ? 'white' : 'rgba(0,0,0,0.8)',backgroundColor:param.isSelected ? 'rgba(0,0,0,0.8)' : 'rgba(230, 230, 230, 0.5)'}" :key="'param'+paramIndex" @click.stop="selectParam(typeIndex,paramIndex)">{{ param.name  }}</div>
   </div>


</div>

<div class="bottomViewStyle">
<button style="flex:1;background-color:orange;color:white;font-size:15px;border:none;outline:none;" @click.stop="addToCar">加入购物车</button>
<button style="flex:1;background-color:red;color:white;font-size:15px;border:none;outline:none;" @click.stop="buyNow">立即购买</button>
</div>


</div>    
</div>
</template>
<script>
import PHImg from "@/components/common/PHImg.vue"

export default {
    props:{
        PHImg
    },
    data(){
        return{
            visibilityState:'hidden',
            goodsInfo:{},
            paramTypes:[
                {name:'酒质',params:[
                                {name:'陈酿1年',isSelected:false},{name:'陈酿3年',isSelected:false},{name:'陈酿5年',isSelected:false},{name:'陈酿8年',isSelected:false}
                                ]
                },
                {name:'香型',params:[
                                {name:'清香',isSelected:false},{name:'浓香',isSelected:false},{name:'酱香',isSelected:false},{name:'凤香',isSelected:false}
                                ]
                },
                {name:'产地',params:[
                                {name:'山西',isSelected:false},{name:'四川',isSelected:false},{name:'贵州',isSelected:false}
                                ]
                },
                {name:'香味',params:[
                                {name:'原味',isSelected:false},{name:'青梅',isSelected:false},{name:'玫瑰',isSelected:false}
                                ]
                }                
            ]
        }
    },
    methods:{
        selectParam(typeIndex,paramIndex){
        
        //    this.paramTypes
           let paramTypeInfo = this.paramTypes[typeIndex]
            paramTypeInfo.params.forEach(function(element){
                element.isSelected = false;
            }); 
           paramTypeInfo.params[paramIndex].isSelected = true;
      


        },
        addToCar(){
            
        },
        buyNow(){

        },
        show(){
            // alert(this.goodsInfo);
            this.visibilityState = 'visible';

            this.$refs.goodsImg.src = this.goodsInfo.works[0];

            // alert(this.goodsInfo.works[0]);


        },
        hidden(){
            this.visibilityState = 'hidden';
        }
    },
    mounted(){
   
    }

}
</script>
<style scoped>
.buyAlertStyle{
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
}
.buyContent{
    position: absolute;
    background-color: white;
    width: 100%;
    /* height: 60%; */
    bottom: 0px;
}
.goodsContent{
    position: relative;
    width: 100%;
    /* height: 60px; */
    top: -20px;

}
.goodsImgStyle{
    position: relative;
    margin-left: 30px;
    width: 70px;
    height: 70px;
    background-color: yellow;
    display:inline-block; 
}

.paramViewStyle{
  width: calc(100% - 40px);
  /* background-color: rgba(230, 230, 230, 0.5); */
  /* height: 50px; */
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
}
.paramItemStyle{
    display:inline-block;
    height:20px;
    line-height: 20px;
    background-color: rgba(230, 230, 230, 0.5);
    padding-left:10px;
    padding-right: 10px;
    margin:5px;
    color: rgba(0, 0, 0, 0.8);
    font-size: 12px;
    border-radius: 15px;
}
.bottomViewStyle{

    margin-top: 20px;
    height:50px;
    width: 100%;

    display: flex;
    flex-direction: row;
}
</style>
