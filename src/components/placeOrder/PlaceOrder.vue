<template>
<div class="content" ref='content' >

<AppNavi title="下单"></AppNavi>


<div class="wrapper" ref="wrapper">
    <div style="width:100%;">
  
         <div style="margin-top:10px;width:100%;background-color:white;padding:10px;"> 
             <div style="color:rgba(0,0,0,0.8);font-size:16px;"> 收货人姓名： 彭辉</div>
             <div style="color:rgba(0,0,0,0.8);font-size:14px;"> 北京市海淀区四环以内 海淀区北四环中路北航科技园</div>
         </div>
         <PlaceOrderGoodsCell v-for="(item,index) in [{name:'精装礼盒 白酒 阿尔卑斯山',img:'http://img.redocn.com/sheji/20180517/baijiubaozhuangsheji_9415243.jpg.285.jpg'}]" :key="index" :item="item" >
         
        </PlaceOrderGoodsCell>


    </div>
</div>

    <div class="bottomViewStyle">
        <div style="width:100%;height:1px;background-color:rgba(245,245,245,0.8);position:absolute;"></div>
        <div style="flex:1;"></div>
        <button style="flex:1;border:none;outline:none;background-color:white;">共计100元</button>
        <button style="flex:1;background-color:red;font-size:15px;color:white;border:none;outline:none;" @click="commitOrder">提交订单</button>
    </div>


</div>    
</template>
<script>
import BScroll from 'better-scroll'

import AppNavi from '@/components/AppNavi.vue'
import PlaceOrderGoodsCell from '@/components/placeOrder/PlaceOrderGoodsCell.vue'
export default {


   components:{AppNavi,PlaceOrderGoodsCell},
   data(){
       return {
          
       }
   },
   methods:{
      commitOrder(){
          this.$toasted.error('接口未出').goAway(1500);
      }
   },
   mounted(){
    //   this.$refs.content.style.height = window.innerHeight + 'px';
      this.scroll = new BScroll(this.$refs.wrapper,{
      })
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
.bottomViewStyle{
    bottom: 0px;
    width: 100%;
    height: 40px;
    background-color: white;
    display: flex;
    flex-direction: row;
    
}
</style>
