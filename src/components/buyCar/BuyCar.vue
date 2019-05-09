<template>
<div class="content" ref='content' >

<AppNavi title="购物车"></AppNavi>

<div class="wrapper" ref="wrapper">
    <div style="width:100%;">
        <BuyCarCell v-for="(item,index) of datas" :key="index" :item="item" @chooseGoods="chooseGoods(index)"></BuyCarCell>
    </div>
</div>

    <div class="bottomViewStyle">
        <button style="flex:1;border:none;outline:none;" @click="allSelect">
         <PHImg style="width:30px;height:30px;display:inline-block;vertical-align:middle;" :src="datas.every(function(ele){return  ele.isSelected == true}) ? selectedImg : selectImg"></PHImg>
         <div style="display:inline-block;vertical-align:middle;margin-left:5px;">全选</div>
        </button>
        <button style="flex:1;border:none;outline:none;">共计100元</button>
        <button style="flex:1;background-color:red;font-size:15px;color:white;border:none;outline:none;">去结算</button>
    </div>
</div>    
</template>
<script>
import BScroll from 'better-scroll'

import AppNavi from '@/components/AppNavi.vue'
import PHImg from "@/components/common/PHImg.vue"
import BuyCarCell from '@/components/buyCar/BuyCarCell.vue'
export default {


   components:{AppNavi,BuyCarCell,PHImg},
   data(){
       return {
            selectImg:require('@/assets/imgs/select.png'),
            selectedImg:require('@/assets/imgs/select1.png'),
           datas:[{name:'hello',isSelected:true},
                  {name:'hello',isSelected:false},
                  {name:'hello',isSelected:false},
                  {name:'hello',isSelected:false},
                  {name:'hello',isSelected:false},
                  {name:'hello',isSelected:false},
                  {name:'hello',isSelected:false},
                  ]
       }
   },
   methods:{
        chooseGoods(index){
            this.datas[index].isSelected = !this.datas[index].isSelected;
        },
        allSelect(){
            

            let hasAllSelected = this.datas.every(function(ele){return  ele.isSelected == true})
            this.datas.forEach(function(ele){
                ele.isSelected = !hasAllSelected;
            })

        }
   },
   mounted(){
 
      this.scroll = new BScroll(this.$refs.wrapper,{
          click:true
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
    height: 50px;
    background-color: white;
    display: flex;
    flex-direction: row;
    
}
</style>
