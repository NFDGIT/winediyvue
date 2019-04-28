<template>
<div class="content" ref='content' >

<AppNavi title="新手攻略"></AppNavi>


<div class="wrapper" ref="wrapper">
    <div style="width:100%;">
        <MessageCell v-for="(item,index) of datas" :key="index" :item="item"></MessageCell>
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
           datas:[{title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'}]
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
</style>
