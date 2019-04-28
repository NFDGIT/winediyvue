<template>
    <div class="MainGoodsItem" @click="selectCell">

       <div style="width:100%;display:flex;flex-direction:row; align-items: center;" >
           <PHImg  class="goodsHeadImg" src="item.headImg" />
           <div style="flex:1;margin-top:10px;">
                <div class="userName">{{ item.name }}</div>
                <div class="userDesc">{{ item.desc }}</div>
           </div>
       </div>
       <PHImg class="goodsImg" src="item.goodsImg" />
       <div style="width:100%;height:1px;background-color:aliceblue;"></div> 
    </div>
</template>
<script>
import PHImg from "@/components/common/PHImg.vue"
export default {
    props:['item'],
    components:{
        PHImg
    },
    data(){
        return{
            defaultImg: 'this.src="' + require('@/assets/imgs/default.png') + '"'
        }
    },
    methods:{

        selectCell(){
            this.$emit('jumpToUserDetail','');
        }
    }
}
</script>
<style scoped lang='less'>
.MainGoodsItem{
    width: 100%;
    background-color: white;

}
.goodsHeadImg{
    /* position:relative; */
    /* float: left; */
    
    margin-top: 10px;
    margin-left: 10px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: @color-bg;
}
.userName{
    margin-left:10px;
    width:calc(100% - 20px);
    color: @color-black;
    font-size: @size-middle;
}
.userDesc{
    margin-left:10px;
    width:calc(100% - 20px);
    color: @color-lightgray;
    font-size: @size-small;
}
.goodsImg{
    margin-top: 10px;
    margin-left: 70px;
    margin-bottom: 10px;
    
    border-radius: 10px;


    background-color: @color-bg;
    width: calc(100% - 80px);
    height: 100px;
    

}
</style>
