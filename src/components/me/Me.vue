<template>
<div class="content" ref="content">



    <div  style="overflow:hidden;">

      <div class="setBtn" @click="jumpToSetting">
        <PHImg :src='setImg' style="width:30px;height:30px;"></PHImg>
      </div>
      <div class="messageBtn" @click="jumpToMessage">
        <PHImg :src='messageImg' style="width:30px;height:30px;"></PHImg>
      </div>

      
      <MeHeadView :userInfo='userInfo'></MeHeadView>
      <MeWorksItem  v-for="(item,index) in worksItems" :key="'works' + index" :item='item' :index='index' @selectCell="selectWorksCell"></MeWorksItem>
      <div style="width:100%;height:20px;background-color:rgba(0,0,0,0);"></div>  
      <MeFuncItem v-for="(item,index) in funcItems" :key="'func' + index" :item='item' @selectCell="selectFuncCell(index)" ></MeFuncItem>
    </div>
 
   
</div>
    
</template>
<script>


import BScroll from 'better-scroll'

import PHImg from "@/components/common/PHImg.vue"
import MeHeadView from  '@/components/me/MeHeadView.vue'
import MeWorksItem from  '@/components/me/MeWorksItem.vue'
import MeFuncItem from  '@/components/me/MeFuncItem.vue'

export default {
    components:{
       PHImg,
       MeHeadView,
       MeWorksItem,
       MeFuncItem,
    },
    data(){
      return{
        setImg:require('@/assets/imgs/set.png'),
        messageImg:require('@/assets/imgs/message.png'),
        userInfo:{name:'彭辉'},
        funcItems:[{title:'订单'},{title:'购物车'},{title:'优惠券'},{title:'邀请好友'},{title:'我的喜欢'},{title:'我的收益'},{title:'我的好友'}],
        worksItems:[{title:'保存'},{title:'作品'}]
      }
    },
    methods:{
      jumpToSetting(){
         this.$router.push({path:'/setting'})
      },
      jumpToMessage(){
         this.$router.push({path:'/message'})
      },
      selectWorksCell(index){
        // alert(index);
        if (index === 0)
        {
           this.$router.push({path:'/mySavedWorks'});
        }else
        {
           this.$router.push({path:'/myWorks'});
        }   
      },
      selectFuncCell(index){


        if (index === 0){
            this.$router.push({
               path:'/myOrder'
            })
        }else if (index === 1){
            this.$router.push({
               path:'/buyCar'
            })
        }else if (index === 2){
            this.$router.push({
               path:'/discountCoupon'
            })
        }else if (index === 3){
            this.$router.push({
               path:'/inviteFriend'
            })
        }else if (index === 4){
            this.$router.push({
               path:'/myFavorite'
            })
        }else if (index === 5){
            this.$router.push({
               path:'/myIncome'
            })
        }else if (index === 6){
            this.$router.push({
               path:'/myFriend'
            })
        }
      }
    },
    mounted(){
        new BScroll(this.$refs.content,{
          click:true
        });
    }
}
</script>
<style scoped>
.content{
  width: 100%;
  overflow: hidden;
  flex: 1;

}
.setBtn{
   width: 40px;
   height: 40px;
   position:absolute;
   left: 10px;
   top: 10px;

   display: flex;
   align-items: center;
   justify-content: center;
}
.messageBtn{
   width: 40px;
   height: 40px;
   position:absolute;
   right: 10px;
   top: 10px;


   display: flex;
   align-items: center;
   justify-content: center;
}
</style>
