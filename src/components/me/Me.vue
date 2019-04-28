<template>
<div class="content" ref="content">



    <div  style="overflow:hidden;">

      <div class="setBtn" @click="jumpToSetting">
      </div>
      <div class="messageBtn" @click="jumpToMessage">
      </div>

      
      <MeHeadView :userInfo='userInfo'></MeHeadView>
      <MeWorksItem  v-for="(item,index) in worksItems" :key="index" :item='item' :index='index' @selectCell="selectWorksCell"></MeWorksItem>
      <div style="width:100%;height:20px;background-color:rgba(0,0,0,0);"></div>  
      <MeFuncItem v-for="(item,index) in funcItems" :key="index" :item='item' ></MeFuncItem>
    </div>
 
   
</div>
    
</template>
<script>
import BScroll from 'better-scroll'

import MeHeadView from  '@/components/me/MeHeadView.vue'
import MeWorksItem from  '@/components/me/MeWorksItem.vue'
import MeFuncItem from  '@/components/me/MeFuncItem.vue'

export default {
    components:{
       MeHeadView,
       MeWorksItem,
       MeFuncItem,
    },
    data(){
      return{
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
   left: 20px;
   top: 20px;
   background-color:white;

}
.messageBtn{
   width: 40px;
   height: 40px;
   position:absolute;
   right: 20px;
   top: 20px;
   background-color:white;
}
</style>
