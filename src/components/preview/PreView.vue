<template>
<div class="content" ref='content' >

<AppNavi title="预览"></AppNavi>


<div class="wrapper" ref="wrapper">
    <div style="width:100%;">
        <div v-for="(item,index) of datas" :key="index" :item="item">{{ item }}</div>
    </div>
</div>


</div>    
</template>
<script>
import BScroll from 'better-scroll'

import AppNavi from '@/components/AppNavi.vue'
import MessageCell from '@/components/message/MessageCell.vue'
export default {


   components:{AppNavi,MessageCell},
   data(){
       return {
           datas:[]
       }
   },
   mounted(){

      this.scroll = new BScroll(this.$refs.wrapper,{
      });
      this.datas = this.$route.params.layerParameters;
  
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
</style>
