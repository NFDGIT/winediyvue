<template>
    <div class="buyCarCellStyle">
        
        <PHImg class="buyCarCellSelectImgStyle" :src="item.isSelected ? selectedImg : selectImg" @click="chooseGoods">
            
        </PHImg>


        <div style="flex:1;background-color:;height:100px;display:flex;flex-direction:row;align-items:center;">
            <PHImg  class="buyCarCellGoodsImgStyle" :src="item.img">
            </PHImg>     
            <div style="flex:1;margin:10px;font-size:15px;color:rgba(0,0,0,0.8);">
                {{ item.name }}
            </div>    
        </div>
    </div>
</template>
<script>
import PHImg from "@/components/common/PHImg.vue"

export default {
    props:["item"],
    components:{
        PHImg
    },
    data(){
        return{
            selectImg:require('@/assets/imgs/select.png'),
            selectedImg:require('@/assets/imgs/select1.png'),
        }
    },
    methods:{
        chooseGoods(){
        
            this.$emit('chooseGoods','');
        }
    }
}
</script>
<style scoped>
.buyCarCellStyle{
   width: calc(100% - 20px);


   background-color: white;
   margin:10px;


   display: flex;
   flex-direction: row;
}
.buyCarCellSelectImgStyle{

    height:100px;
    width: 50px;
    /* background-color: red; */
}
.buyCarCellGoodsImgStyle{
    margin-top:10px;   
    height:70px;
    width: 70px;
    background-color: rgba(245,245,245,0.8);
    /* display:inline-block; */
}
</style>
