<template>
<div class="content"> 
    <AppNavi title="作品详情"></AppNavi>

    <div class="wrapper" ref="wrapper">

        <div style="width:100%;">
            <PHCarouselView :imgs="data.works" style="height:300px;width:100%;"></PHCarouselView>
            
            <div class="itemText"  >{{ data.name }}  </div>
            <div class="itemText"  >{{ data.desc }}  </div>

        </div>
    </div>

    <div class="bottomViewStyle">
        <button style="flex:1;border:0.5px solid rgba(200,200,200,0.8);background-color: rgba(0, 0, 0, 0);"></button>
        <button style="flex:1;border:0.5px solid rgba(200,200,200,0.8);background-color: rgba(0, 0, 0, 0);"></button>
        <button style="flex:1;border:0.5px solid rgba(200,200,200,0.8);background-color: rgba(0, 0, 0, 0);" @click="showBuyAlert">加入购物车</button>
        <button style="width:40%;background-color:yellow;text-align:center;line-height:100%;height:100%;border:none;" @click="showBuyAlert">购买</button>
   
    </div>
    <BuyAlertView ref="buyAlertView"></BuyAlertView>
</div>
</template>
<script>

import AppNavi from '@/components/AppNavi.vue'
import BuyAlertView from '@/components/goodsDetail/BuyAlertView.vue'

import BScroll from 'better-scroll'

import PHCarouselView from '@/components/common/PHCarouselView'

// import PHImg from "@/components/common/PHImg.vue"

export default {
    // props:['param'],
    components:{
        AppNavi,PHCarouselView,BuyAlertView
    },
    data(){
       return{
           param:'fg',
        //    datas:['helo','dfadf','dfadf','dfadf','dfadf'],
           data:{
                works:['helo','dfadf','dfadf']
           }
       }
    },
    methods:{
        jumpToGoodsDetail(){
            this.$router.push({path:'/goodsDetail'});
        },
        showBuyAlert(){
            this.$refs.buyAlertView.goodsInfo = this.data;
            this.$refs.buyAlertView.show();
        }
    },
    mounted(){


        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true
        })
   
        let data = this.$route.params.data;

        if (data)
        {
           
           this.data = data
        }
    }
}
</script>
<style scoped>
.content{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   overflow: hidden;
}
.wrapper{
    overflow: hidden;
    flex: 1;

}
/* .headBack{
    width: 100%;
    height: 300px;
} */
.itemText{
    width: clac(100% - 40px) ;
    height:30px;
    margin:10px;
    padding: 10px;
    background-color: white;
}
.bottomViewStyle{
    
    width: 100%;
    height: 50px;
    bottom: 0px;


    display: flex;
    flex-direction: row;

}
</style>
